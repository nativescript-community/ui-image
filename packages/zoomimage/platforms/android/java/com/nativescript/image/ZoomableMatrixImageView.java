package com.nativescript.image;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.Matrix;
import android.graphics.PointF;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.util.Log;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ScaleGestureDetector;
import android.view.VelocityTracker;
import android.view.ViewConfiguration;
import android.view.animation.DecelerateInterpolator;
import android.view.animation.Interpolator;
import android.widget.OverScroller;

import androidx.annotation.Nullable;

import android.view.animation.AccelerateDecelerateInterpolator;
import java.util.Locale;

/**
 * ZoomableMatrixImageView - updated to fix double-tap centering/overshoot/jump
 * issues.
 *
 * Key fixes:
 * - zoomToPointAndCenter now applies authoritative per-frame scale and absolute
 * interaction translation
 * (rebuilds interaction matrix from a captured initial state each frame),
 * avoiding accumulation drift
 * and eliminating the observed jump/overshoot.
 * - Translation is clamped each frame so the mapped image rect cannot leave the
 * allowed overscroll bounds.
 * - Fling last-frame counters are reset on fling start (prevents first-frame
 * big jump).
 * - Animations canceled immediately on user pan start so the first pan after
 * double-tap is responsive.
 *
 * Keep previous full API (min/max zoom, tap listener, zoom/center/animate APIs,
 * rotation handling).
 *
 * Logging tag: "ZoomableImageView"
 */
public class ZoomableMatrixImageView extends MatrixImageView {

    private static final String TAG = "JS";
    private static final float DOUBLE_TAP_EPS = 0.01f;

    private final ScaleGestureDetector mScaleDetector;
    private final GestureDetector mGestureDetector;

    private float mCurrentScale = 1f;
    private float mMinScale = 1f;
    private float mMaxScale = 4f;

    protected final Matrix mInteractionMatrix = new Matrix(); // user translation state (scale is separate)
    private final PointF mLastTouch = new PointF();
    private boolean mIsDragging = false;

    private ValueAnimator mScaleAnimator;
    private ValueAnimator mCenterAnimator;
    private OnZoomChangeListener mZoomChangeListener;

    // Fling / inertia
    private OverScroller mScroller;
    private VelocityTracker mVelocityTracker;
    private int mMinimumFlingVelocity;
    private int mMaximumFlingVelocity;
    private boolean mIsFlinging = false;

    // Overscroll / bounce configuration
    private float mOverscrollDistance = 0f;
    private int mBounceBackDuration = 300;

    // Double-tap centering behavior
    private boolean mDoubleTapCenteringEnabled = true;
    private float mDoubleTapZoomFactor = 2.0f;

    // Center animation config
    private static final int DEFAULT_CENTER_ANIM_DURATION = 250;
    private int mCenterAnimDuration = DEFAULT_CENTER_ANIM_DURATION;
    private Interpolator mCenterInterpolator = new AccelerateDecelerateInterpolator();

    // Optional hold to prevent auto-centering before a center animation begins
    private boolean mHoldCenterDuringAnimation = true;
    // Internal suppression during the animation
    private boolean mSuppressCenterDuringAnimation = false;

    // If a double-tap was pending but the user moved the finger, we treat it as
    // canceled
    private boolean mPendingDoubleTapWasMoved = false;

    // Ignore next reset flag (one-shot)
    private boolean mIgnoreNextReset = false;

    // Touch config
    private final int mTouchSlop;
    private float mPanSensitivity = 1.0f;
    private float mDoubleTapPanSensitivity = 0.8f;

    // Double-tap pending detection
    private boolean mPendingDoubleTap = false;
    private float mPendingDoubleTapX = 0f;
    private float mPendingDoubleTapY = 0f;
    // private boolean mRecentlyDoubleTapped = false;

    // Tap listener (single tap)
    public interface OnTapListener {
        /**
         * @param viewX  x coordinate in view pixels
         * @param viewY  y coordinate in view pixels
         * @param imageX x coordinate in image/drawable pixels, or -1 if unavailable
         * @param imageY y coordinate in image/drawable pixels, or -1 if unavailable
         */
        void onTap(float viewX, float viewY, float imageX, float imageY);
    }

    private OnTapListener mOnTapListener;

    // Zoom change listener
    public interface OnZoomChangeListener {
        void onZoomChanged(float newZoom);
    }

    // Temporary for combined animator: stores mapped-before position of the
    // drawable point
    private float[] mMappedBeforeForAnimator = null;

    // Fling tuning options
    private boolean mFlingEnabled = true;
    private boolean mScaleFlingByZoom = true; // when true, scale fling velocities by 1/mCurrentScale

    // Runnable last-frame counters (reset at fling start)
    private int mFlingLastX = 0;
    private int mFlingLastY = 0;

    public ZoomableMatrixImageView(Context context) {
        super(context);
        ViewConfiguration vc = ViewConfiguration.get(context);
        mTouchSlop = vc.getScaledTouchSlop();
        mScaleDetector = new ScaleGestureDetector(context, new ScaleListener());
        mGestureDetector = new GestureDetector(context, new GestureListener());
        init();
    }

    public ZoomableMatrixImageView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        ViewConfiguration vc = ViewConfiguration.get(context);
        mTouchSlop = vc.getScaledTouchSlop();
        mScaleDetector = new ScaleGestureDetector(context, new ScaleListener());
        mGestureDetector = new GestureDetector(context, new GestureListener());
        init();
    }

    public ZoomableMatrixImageView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        ViewConfiguration vc = ViewConfiguration.get(context);
        mTouchSlop = vc.getScaledTouchSlop();
        mScaleDetector = new ScaleGestureDetector(context, new ScaleListener());
        mGestureDetector = new GestureDetector(context, new GestureListener());
        init();
    }

    private void init() {
        setClickable(true);
        resetInteraction();

        mScroller = new OverScroller(getContext(), new DecelerateInterpolator());
        ViewConfiguration vc = ViewConfiguration.get(getContext());
        mMinimumFlingVelocity = vc.getScaledMinimumFlingVelocity();
        mMaximumFlingVelocity = vc.getScaledMaximumFlingVelocity();
    }

    // ---------- Public configuration APIs ----------

    public void setPanSensitivity(float sensitivity) {
        mPanSensitivity = Math.max(0f, sensitivity);
    }

    public float getPanSensitivity() {
        return mPanSensitivity;
    }

    public void setDoubleTapPanSensitivity(float sensitivity) {
        mDoubleTapPanSensitivity = Math.max(0f, sensitivity);
    }

    public float getDoubleTapPanSensitivity() {
        return mDoubleTapPanSensitivity;
    }

    public void setIgnoreNextReset(boolean ignoreNextReset) {
        mIgnoreNextReset = ignoreNextReset;
    }

    public boolean isIgnoreNextReset() {
        return mIgnoreNextReset;
    }

    public void setDoubleTapCenteringEnabled(boolean enabled) {
        mDoubleTapCenteringEnabled = enabled;
    }

    public boolean isDoubleTapCenteringEnabled() {
        return mDoubleTapCenteringEnabled;
    }

    public void setDoubleTapZoomFactor(float factor) {
        mDoubleTapZoomFactor = Math.max(1f, factor);
    }

    public float getDoubleTapZoomFactor() {
        return mDoubleTapZoomFactor;
    }

    public void setCenterAnimationDuration(int durationMs) {
        mCenterAnimDuration = Math.max(0, durationMs);
    }

    public int getCenterAnimationDuration() {
        return mCenterAnimDuration;
    }

    public void setCenterInterpolator(@Nullable Interpolator interpolator) {
        mCenterInterpolator = interpolator != null ? interpolator : new DecelerateInterpolator();
    }

    public void setHoldCenterDuringAnimation(boolean hold) {
        mHoldCenterDuringAnimation = hold;
    }

    public boolean isHoldCenterDuringAnimation() {
        return mHoldCenterDuringAnimation;
    }

    public void setOverscrollDistance(float px) {
        mOverscrollDistance = Math.max(0f, px);
    }

    public float getOverscrollDistance() {
        return mOverscrollDistance;
    }

    public void setBounceBackDuration(int ms) {
        mBounceBackDuration = Math.max(0, ms);
    }

    public int getBounceBackDuration() {
        return mBounceBackDuration;
    }

    public void cancelCenterAnimation() {
        if (mCenterAnimator != null) {
            mCenterAnimator.cancel();
            mCenterAnimator = null;
        }
    }

    public interface OnCenterAnimationListener {
        void onCenterAnimationComplete();

        void onCenterAnimationCancel();
    }

    public void setOnZoomChangeListener(OnZoomChangeListener l) {
        mZoomChangeListener = l;
    }

    public void setOnTapListener(@Nullable OnTapListener l) {
        mOnTapListener = l;
    }

    public void setFlingEnabled(boolean enabled) {
        mFlingEnabled = enabled;
    }

    public boolean isFlingEnabled() {
        return mFlingEnabled;
    }

    public void setScaleFlingByZoom(boolean enabled) {
        mScaleFlingByZoom = enabled;
    }

    public boolean isScaleFlingByZoom() {
        return mScaleFlingByZoom;
    }

    // ---------- Min/Max zoom APIs ----------

    public void setMinZoom(float min) {
        mMinScale = Math.max(0.01f, min);
        if (mCurrentScale < mMinScale)
            zoomTo(mMinScale, false);
    }

    public float getMinZoom() {
        return mMinScale;
    }

    public void setMaxZoom(float max) {
        mMaxScale = Math.max(0.01f, max);
        if (mCurrentScale > mMaxScale)
            zoomTo(mMaxScale, false);
    }

    public float getMaxZoom() {
        return mMaxScale;
    }

    public float getZoom() {
        return mCurrentScale;
    }

    // ---------- Interaction reset ----------

    @Override
    public void resetInteraction() {
        cancelScaleAnimation();
        cancelCenterAnimation();
        cancelFling();
        mCurrentScale = 1f;
        mInteractionMatrix.reset();
        mPendingDoubleTap = false;
        // mRecentlyDoubleTapped = false;
        setExtraTransform(null);
        notifyZoomChanged();
    }

    // ---------- Touch handling (double-tap pending & pan sensitivity & tap)
    // ----------

    private class GestureListener extends GestureDetector.SimpleOnGestureListener {
        @Override
        public boolean onSingleTapConfirmed(MotionEvent e) {
            float vx = e.getX();
            float vy = e.getY();
            float imageX = -1f, imageY = -1f;
            Drawable d = getDrawable();
            Matrix composed = new Matrix(mBaseMatrix);
            composed.postConcat(buildExtraMatrixForCurrentState());
            Matrix inv = new Matrix();
            if (composed.invert(inv) && d != null) {
                float[] viewPt = new float[] { vx, vy };
                float[] imgPt = new float[2];
                inv.mapPoints(imgPt, viewPt);
                imageX = imgPt[0];
                imageY = imgPt[1];
            }

            if (mOnTapListener != null) {
                mOnTapListener.onTap(vx, vy, imageX, imageY);
            }
            return super.onSingleTapConfirmed(e);
        }

        @Override
        public boolean onDoubleTap(MotionEvent e) {
            mPendingDoubleTap = true;
            mPendingDoubleTapX = e.getX();
            mPendingDoubleTapY = e.getY();
            return true;
        }

        @Override
        public boolean onDown(MotionEvent e) {
            return true;
        }
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        if (mVelocityTracker == null)
            mVelocityTracker = VelocityTracker.obtain();
        mVelocityTracker.addMovement(event);

        mScaleDetector.onTouchEvent(event);
        mGestureDetector.onTouchEvent(event);

        final int action = event.getActionMasked();
        switch (action) {
            case MotionEvent.ACTION_DOWN:
                mLastTouch.set(event.getX(), event.getY());
                mIsDragging = false;
                // reset move-during-pending flags for this new touch
                mPendingDoubleTapWasMoved = false;
                cancelScaleAnimation();
                cancelFling();
                cancelCenterAnimation();
                break;

            case MotionEvent.ACTION_MOVE:
                // If the user moves while a double-tap is pending, cancel that pending
                // double-tap.
                if (mPendingDoubleTap) {
                    mPendingDoubleTap = false;
                    mPendingDoubleTapWasMoved = true;
                }

                // If an animation is running, cancel it so the user can immediately pan.
                if (mScaleAnimator != null || mCenterAnimator != null) {
                    cancelScaleAnimation();
                    cancelCenterAnimation();
                    // keep mLastTouch so first move delta is correct
                }

                if (!mScaleDetector.isInProgress()) {
                    float dx = event.getX() - mLastTouch.x;
                    float dy = event.getY() - mLastTouch.y;
                    float distSq = dx * dx + dy * dy;
                    if (!mIsDragging && distSq > (mTouchSlop * mTouchSlop)) {
                        mIsDragging = true;
                        // movement after double-tap implies a cancel; already handled above
                    }
                    if (mIsDragging) {
                        // pan sensitivity used for translation; do not mix with the double-tap scale
                        performPan(dx * mPanSensitivity, dy * mPanSensitivity);
                        // if drag starts, we will not treat the next scale as "double-tap attenuated"
                        // if (mRecentlyDoubleTapped) mRecentlyDoubleTapped = false;
                     }
                    mLastTouch.set(event.getX(), event.getY());
                }
                break;

            case MotionEvent.ACTION_UP:
                // Only accept the pending double-tap if there was no dragging/move.
                if (mPendingDoubleTap && !mIsDragging && !mPendingDoubleTapWasMoved) {
                    // clear pending immediately to avoid duplicate handling by secondary UPs
                    mPendingDoubleTap = false;

                    // Ensure current scale is in bounds before picking a double-tap target
                    ensureCurrentScaleInBounds();

                    float inTarget = Math.min(mMaxScale, mMinScale * mDoubleTapZoomFactor);

                    // If an animation is already running, cancel it and start a new one from the
                    // current state.
                    if (mScaleAnimator != null) {
                        cancelScaleAnimation();
                    }
                    if (mCenterAnimator != null) {
                        cancelCenterAnimation();
                    }

                    // Re-evaluate current scale since cancel may have changed it.
                    ensureCurrentScaleInBounds();

                    // start new animation (from current state)
                    {
                        if (mCurrentScale < mMinScale * mDoubleTapZoomFactor - DOUBLE_TAP_EPS) {
                            if (mDoubleTapCenteringEnabled) {
                                zoomToPointAndCenter(inTarget, mPendingDoubleTapX, mPendingDoubleTapY, true,
                                        mCenterAnimDuration, null);
                            } else {
                                zoomToPoint(inTarget, mPendingDoubleTapX, mPendingDoubleTapY, true, null);
                            }
                        } else {
                            float target = mMinScale;
                            if (!mDoubleTapCenteringEnabled) {
                                zoomToPoint(target, mPendingDoubleTapX, mPendingDoubleTapY, true, null);
                            } else {
                                zoomToPointAndCenter(target, mPendingDoubleTapX, mPendingDoubleTapY, true,
                                        mCenterAnimDuration, null);
                            }
                        }
                        // mRecentlyDoubleTapped = true;
                    }
                    // reset the "moved while pending" flag
                    mPendingDoubleTapWasMoved = false;
                } else {
                    settle();
                }

                if (mVelocityTracker != null) {
                    mVelocityTracker.computeCurrentVelocity(1000, mMaximumFlingVelocity);
                    float vx = mVelocityTracker.getXVelocity();
                    float vy = mVelocityTracker.getYVelocity();
                    if (mIsDragging && Math.hypot(vx, vy) > mMinimumFlingVelocity) {
                        startFling((int) vx, (int) vy);
                    }
                }

                mIsDragging = false;
                // don't clear mRecentlyDoubleTapped here — let ScaleListener consume it
                if (mVelocityTracker != null) {
                    mVelocityTracker.recycle();
                    mVelocityTracker = null;
                }
                break;

            case MotionEvent.ACTION_CANCEL:
                 mPendingDoubleTap = false;
                 mIsDragging = false;
                 cancelFling();
                 cancelCenterAnimation();
                 settle();
                // clear this state on cancel so it doesn't linger
                // mRecentlyDoubleTapped = false;
                 if (mVelocityTracker != null) {
                     mVelocityTracker.recycle();
                     mVelocityTracker = null;
                 }
                 break;

            default:
                break;
        }

        return true;
    }

    private void performPan(float dx, float dy) {
        mInteractionMatrix.postTranslate(dx, dy);
        applyInteraction();
    }

    // ---------------- Zoom APIs ----------------

    public void zoomTo(float targetScale, boolean animated) {
        float cx = getContentCenterX();
        float cy = getContentCenterY();
        zoomToPoint(targetScale, cx, cy, animated, null);
    }

    public void zoomToPoint(final float targetScale, final float focusX, final float focusY, boolean animated,
            @Nullable final Runnable onComplete) {
        final float clampedTarget = Math.max(mMinScale, Math.min(mMaxScale, targetScale));
        if (!animated) {
            float factor = clampedTarget / mCurrentScale;
            // animate-less centering: scale about the content center so the subsequent
            // clamp/translation
            // can place the drawable point at the content center (consistent with the
            // animated path).
            setScaleInternal(factor, getContentCenterX(), getContentCenterY());
            if (onComplete != null)
                onComplete.run();
            return;
        }

        cancelScaleAnimation();

        final float startScale = mCurrentScale;
        final float overallFactor = clampedTarget / startScale;
        final float[] last = { 1f };

        mScaleAnimator = ValueAnimator.ofFloat(1f, overallFactor);
        mScaleAnimator.setDuration(300);
        mScaleAnimator.setInterpolator(
                mCenterInterpolator != null ? mCenterInterpolator : new AccelerateDecelerateInterpolator());
        mScaleAnimator.addUpdateListener(animation -> {
            float cumulative = (float) animation.getAnimatedValue();
            float incremental = cumulative / last[0];
            last[0] = cumulative;
            setScaleInternal(incremental, focusX, focusY);
        });
        final float clampedFinal = clampedTarget;
        mScaleAnimator.addListener(new AnimatorListenerAdapter() {
            @Override
            public void onAnimationEnd(Animator animation) {
                mScaleAnimator = null;
                // finalize exact final scale to avoid drift
                float remainingFactor = clampedFinal / mCurrentScale;
                if (Math.abs(remainingFactor - 1f) > 1e-6f)
                    setScaleInternal(remainingFactor, focusX, focusY);
                if (onComplete != null)
                    onComplete.run();
            }

            @Override
            public void onAnimationCancel(Animator animation) {
                mScaleAnimator = null;
                // ensure scale bounds and current state remain consistent
                ensureCurrentScaleInBounds();
                if (onComplete != null)
                    onComplete.run();
            }
        });
        mScaleAnimator.start();
    }

    /**
     * Reworked zoomToPointAndCenter: uses absolute per-frame rebuild from
     * initialInteraction and startScale.
     */
    public void zoomToPointAndCenter(final float targetScale,
            final float focusX, final float focusY,
            boolean animated,
            int durationMs,
            @Nullable final Runnable onComplete) {
        final float clampedTarget = Math.max(mMinScale, Math.min(mMaxScale, targetScale));

        // ensure scale is within bounds (defensive)
        ensureCurrentScaleInBounds();
        // capture startScale and a copy of initial interaction matrix
        final float startScale = mCurrentScale;
        final Matrix initialInteraction = new Matrix(mInteractionMatrix);

        // content center pivot
        final float viewCx = getContentCenterX();
        final float viewCy = getContentCenterY();

        // compute drawable point under focus using composed (base + extra at start)
        Matrix extraStart = new Matrix();
        extraStart.postScale(startScale, startScale, viewCx, viewCy);
        extraStart.postConcat(initialInteraction);
        Matrix before = new Matrix(mBaseMatrix);
        before.postConcat(extraStart);

        Matrix inv = new Matrix();
        final float[] drawablePt = new float[2];
        final boolean haveDrawablePt;
        if (before.invert(inv)) {
            float[] focusPt = new float[] { focusX, focusY };
            inv.mapPoints(drawablePt, focusPt);
            haveDrawablePt = true;
        } else {
            haveDrawablePt = false;
        }

        if (!haveDrawablePt) {
            // fallback to simpler zoomToPoint behavior (nothing anchored)
            zoomToPoint(clampedTarget, focusX, focusY, true, onComplete);
            return;
        }

        // Compute the final mapped position of drawablePt using the final scale but
        // WITHOUT extra translation
        Matrix extraFinal = new Matrix();
        extraFinal.postScale(clampedTarget, clampedTarget, viewCx, viewCy);
        extraFinal.postConcat(initialInteraction);
        Matrix composedFinal = new Matrix(mBaseMatrix);
        composedFinal.postConcat(extraFinal);

        Drawable d = getDrawable();
        if (d == null) {
            // nothing to do
            if (onComplete != null)
                onComplete.run();
            return;
        }
        float iw = Math.max(1, d.getIntrinsicWidth());
        float ih = Math.max(1, d.getIntrinsicHeight());
        RectF src = new RectF(0f, 0f, iw, ih);

        // Where drawablePt maps without translation at final scale
        float[] mappedFinalNoTx = new float[] { drawablePt[0], drawablePt[1] };
        composedFinal.mapPoints(mappedFinalNoTx);

        // Desired translation to put the drawable point at the view center
        float desiredFinalDx = viewCx - mappedFinalNoTx[0];
        float desiredFinalDy = viewCy - mappedFinalNoTx[1];

        // Clamp desired translation to overscroll bounds at final scale
        RectF mappedRectFinal = new RectF();
        composedFinal.mapRect(mappedRectFinal, src);

        float viewLeft = getContentLeft();
        float viewTop = getContentTop();
        float viewRight = getContentRight();
        float viewBottom = getContentBottom();
        final float overs = mOverscrollDistance;

        // Use consistent (min <= max) bounds logic used elsewhere: lower bound =
        // viewRight - mappedRight, upper bound = viewLeft - mappedLeft
        float minDx = (viewRight - overs) - mappedRectFinal.right;
        float maxDx = (viewLeft + overs) - mappedRectFinal.left;
        if (minDx > maxDx) {
            float t = minDx;
            minDx = maxDx;
            maxDx = t;
        }
        float clampedFinalDx = Math.max(minDx, Math.min(maxDx, desiredFinalDx));

        float minDy = (viewBottom - overs) - mappedRectFinal.bottom;
        float maxDy = (viewTop + overs) - mappedRectFinal.top;
        if (minDy > maxDy) {
            float t = minDy;
            minDy = maxDy;
            maxDy = t;
        }
        float clampedFinalDy = Math.max(minDy, Math.min(maxDy, desiredFinalDy));

        // optionally suppress automatic centering in applyInteraction during the
        // animation
        mSuppressCenterDuringAnimation = mHoldCenterDuringAnimation && animated;

        if (!animated || durationMs <= 0) {
            // Immediate: set scale + apply clamped final translation
            mCurrentScale = clampedTarget;
            mInteractionMatrix.set(initialInteraction);
            if (Math.hypot(clampedFinalDx, clampedFinalDy) > 0.5f) {
                mInteractionMatrix.postTranslate(clampedFinalDx, clampedFinalDy);
            }
            applyInteraction();
            if (onComplete != null)
                onComplete.run();
            return;
        }

        // Animated: animate both scale (mCurrentScale) and translation
        // (initialInteraction -> initialInteraction + clampedFinalDx/Dy)
        cancelScaleAnimation();
        cancelCenterAnimation();

        final float[] finalDx = { clampedFinalDx };
        final float[] finalDy = { clampedFinalDy };

        // Map the drawable point under the start transform, useful for per-frame debug
        Matrix composedNow = new Matrix(mBaseMatrix);
        composedNow.postConcat(extraStart);
        final float[] mappedBefore = new float[] { drawablePt[0], drawablePt[1] };
        composedNow.mapPoints(mappedBefore);
        mMappedBeforeForAnimator = mappedBefore;

        final float totalScaleDelta = clampedTarget - startScale;

        mScaleAnimator = ValueAnimator.ofFloat(0f, 1f);
        mScaleAnimator.setDuration(durationMs);
        mScaleAnimator.setInterpolator(
                mCenterInterpolator != null ? mCenterInterpolator : new AccelerateDecelerateInterpolator());

        mScaleAnimator.addUpdateListener(animation -> {
            float frac = (float) animation.getAnimatedValue();

            // linear interpolate scale
            float newScale = startScale + totalScaleDelta * frac;
            mCurrentScale = Math.max(mMinScale, Math.min(mMaxScale, newScale));

            // Build composed afterScale for this intermediate scale using
            // initialInteraction (no animation translation applied yet)
            Matrix afterScale = new Matrix(mBaseMatrix);
            Matrix extra = new Matrix();
            extra.postScale(mCurrentScale, mCurrentScale, viewCx, viewCy);
            extra.postConcat(initialInteraction);
            afterScale.postConcat(extra);

            // Interpolated translation target
            float interpDx = finalDx[0] * frac;
            float interpDy = finalDy[0] * frac;

            // Apply initialInteraction + interpolated translation with per-frame clamping
            // for this scale
            mInteractionMatrix.set(initialInteraction);
            clampAndApplyTranslationDuringAnimation(interpDx, interpDy, afterScale);

            applyInteraction();
            // Debug mapping after applying the per-frame translation
            try {
                float[] mappedAfter = new float[] { drawablePt[0], drawablePt[1] };
                Matrix afterWithTx = new Matrix(mBaseMatrix);
                Matrix extraAfterWithTx = new Matrix();
                extraAfterWithTx.postScale(mCurrentScale, mCurrentScale, viewCx, viewCy);
                extraAfterWithTx.postConcat(mInteractionMatrix);
                afterWithTx.postConcat(extraAfterWithTx);
                afterWithTx.mapPoints(mappedAfter);
            } catch (Exception e) {
                Log.d(TAG, "  anim frame: mapping exception: " + e.getMessage());
            }
        });

        mScaleAnimator.addListener(new AnimatorListenerAdapter() {
            private boolean cancelled = false;

            @Override
            public void onAnimationCancel(Animator animation) {
                cancelled = true;
                applyInteraction();
                if (onComplete != null)
                    onComplete.run();
                mSuppressCenterDuringAnimation = false;
            }

            @Override
            public void onAnimationEnd(Animator animation) {
                mScaleAnimator = null;
                // stop suppression
                mSuppressCenterDuringAnimation = false;

                // Finalize: set exact final scale and the clamped final translation
                mCurrentScale = clampedTarget;
                mInteractionMatrix.set(initialInteraction);

                // Rebuild composedFinal so clampAndApplyTranslationAfterScale uses the correct
                // "afterScale"
                Matrix after = new Matrix(mBaseMatrix);
                Matrix extraAfter = new Matrix();
                extraAfter.postScale(mCurrentScale, mCurrentScale, viewCx, viewCy);
                extraAfter.postConcat(mInteractionMatrix);
                after.postConcat(extraAfter);

                // computed mappedFinal for the drawablePt for final state (used by clamp)
                float[] mappedFinal = new float[] { drawablePt[0], drawablePt[1] };
                after.mapPoints(mappedFinal);

                clampAndApplyTranslationAfterScale(finalDx[0], finalDy[0], after, mappedFinal);

                if (!cancelled && onComplete != null)
                    onComplete.run();
                // Ensure the resulting scale is exact & in bounds
                ensureCurrentScaleInBounds();
            }
        });

        // Ensure we "freeze" the interaction matrix before starting (prevents race
        // conditions)
        mInteractionMatrix.set(initialInteraction);
        mScaleAnimator.start();
    }

    // clamp during animation: ensure mapped rect remains within allowed overscroll
    // window
    private void clampAndApplyTranslationDuringAnimation(float dx, float dy, Matrix afterScale) {
        Drawable d = getDrawable();
        if (d == null) {
            mInteractionMatrix.postTranslate(dx, dy);
            return;
        }
        float iw = Math.max(1, d.getIntrinsicWidth());
        float ih = Math.max(1, d.getIntrinsicHeight());
        RectF src = new RectF(0f, 0f, iw, ih);
        RectF mapped = new RectF();
        afterScale.mapRect(mapped, src);

        float viewLeft = getContentLeft();
        float viewTop = getContentTop();
        float viewRight = getContentRight();
        float viewBottom = getContentBottom();

        final float overs = mOverscrollDistance;

        // valid range: mapped.left + dx <= viewLeft + overs (no blank on left)
        // mapped.right + dx >= viewRight - overs (no blank on right)
        float minDx = (viewRight - overs) - mapped.right; // lower bound
        float maxDx = (viewLeft + overs) - mapped.left; // upper bound
        if (minDx > maxDx) {
            float t = minDx;
            minDx = maxDx;
            maxDx = t;
        }
        float clampedDx = Math.max(minDx, Math.min(maxDx, dx));

        float minDy = (viewBottom - overs) - mapped.bottom; // lower bound
        float maxDy = (viewTop + overs) - mapped.top; // upper bound
        if (minDy > maxDy) {
            float t = minDy;
            minDy = maxDy;
            maxDy = t;
        }
        float clampedDy = Math.max(minDy, Math.min(maxDy, dy));

        mInteractionMatrix.postTranslate(clampedDx, clampedDy);
    }

    // clamp for immediate application (non-animated final)
    private void clampAndApplyTranslationAfterScale(float dx, float dy, Matrix afterScale, float[] mappedAfterScale) {
        Drawable d = getDrawable();
        if (d == null) {
            if (Math.hypot(dx, dy) > 0.5f)
                mInteractionMatrix.postTranslate(dx, dy);
            return;
        }

        float viewLeft = getContentLeft();
        float viewTop = getContentTop();
        float viewRight = getContentRight();
        float viewBottom = getContentBottom();
        final float overs = mOverscrollDistance;

        float iw = Math.max(1, d.getIntrinsicWidth());
        float ih = Math.max(1, d.getIntrinsicHeight());
        RectF src = new RectF(0f, 0f, iw, ih);
        RectF mapped = new RectF();
        afterScale.mapRect(mapped, src);

        float minDx = (viewRight - overs) - mapped.right;
        float maxDx = (viewLeft + overs) - mapped.left;
        float clampedDx = Math.max(minDx, Math.min(maxDx, dx));

        float minDy = (viewBottom - overs) - mapped.bottom;
        float maxDy = (viewTop + overs) - mapped.top;
        float clampedDy = Math.max(minDy, Math.min(maxDy, dy));

        if (Math.hypot(clampedDx, clampedDy) > 0.5f) {
            mInteractionMatrix.postTranslate(clampedDx, clampedDy);
            applyInteraction();
        }
    }

    // ---------- Animate point helpers ----------
    public void animatePointToPosition(final float viewX, final float viewY,
            final float destX, final float destY,
            final int durationMs, final boolean animated,
            @Nullable final OnCenterAnimationListener listener) {
        Drawable d = getDrawable();
        if (d == null) {
            if (listener != null)
                listener.onCenterAnimationCancel();
            return;
        }

        Matrix composed = new Matrix(mBaseMatrix);
        composed.postConcat(buildExtraMatrixForCurrentState());

        Matrix inv = new Matrix();
        if (!composed.invert(inv)) {
            if (listener != null)
                listener.onCenterAnimationCancel();
            return;
        }

        float[] viewPt = new float[] { viewX, viewY };
        float[] drawablePt = new float[2];
        inv.mapPoints(drawablePt, viewPt);

        Matrix composedAfter = new Matrix(mBaseMatrix);
        composedAfter.postConcat(buildExtraMatrixForCurrentState());
        float[] mappedAfter = new float[] { drawablePt[0], drawablePt[1] };
        composedAfter.mapPoints(mappedAfter);

        final float deltaX = destX - mappedAfter[0];
        final float deltaY = destY - mappedAfter[1];

        if (!animated || durationMs <= 0) {
            if (Math.hypot(deltaX, deltaY) < 0.5f) {
                if (listener != null)
                    listener.onCenterAnimationComplete();
                return;
            }
            mInteractionMatrix.postTranslate(deltaX, deltaY);
            applyInteraction();
            if (listener != null)
                listener.onCenterAnimationComplete();
            return;
        }

        if (Math.hypot(deltaX, deltaY) < 0.5f) {
            if (listener != null)
                listener.onCenterAnimationComplete();
            return;
        }

        cancelCenterAnimation();

        final float[] last = { 0f };
        mCenterAnimator = ValueAnimator.ofFloat(0f, 1f);
        mCenterAnimator.setDuration(durationMs);
        mCenterAnimator.setInterpolator(
                mCenterInterpolator != null ? mCenterInterpolator : new AccelerateDecelerateInterpolator());
        mCenterAnimator.addUpdateListener(animation -> {
            float frac = (float) animation.getAnimatedValue();
            float incremental = frac - last[0];
            last[0] = frac;
            mInteractionMatrix.postTranslate(deltaX * incremental, deltaY * incremental);
            applyInteraction();
        });
        mCenterAnimator.addListener(new AnimatorListenerAdapter() {
            private boolean cancelled = false;

            @Override
            public void onAnimationCancel(Animator animation) {
                cancelled = true;
                if (listener != null)
                    listener.onCenterAnimationCancel();
            }

            @Override
            public void onAnimationEnd(Animator animation) {
                mCenterAnimator = null;
                if (!cancelled && listener != null)
                    listener.onCenterAnimationComplete();
            }
        });
        mCenterAnimator.start();
    }

    public void animatePointToCenter(final float viewX, final float viewY, final int durationMs, final boolean animated,
            @Nullable final OnCenterAnimationListener listener) {
        float viewCx = getContentCenterX();
        float viewCy = getContentCenterY();
        animatePointToPosition(viewX, viewY, viewCx, viewCy, durationMs, animated, listener);
    }

    // ---------- Rotation handling (preserve focal point) ----------
    @Override
    public void setImageRotation(float degrees) {
        Drawable d = getDrawable();
        if (d == null) {
            super.setImageRotation(degrees);
            return;
        }

        float viewCx = getContentCenterX();
        float viewCy = getContentCenterY();
        Matrix before = new Matrix(mBaseMatrix);
        before.postConcat(buildExtraMatrixForCurrentState());
        Matrix inv = new Matrix();
        float[] drawablePt = null;
        if (before.invert(inv)) {
            float[] centerPt = new float[] { viewCx, viewCy };
            drawablePt = new float[2];
            inv.mapPoints(drawablePt, centerPt);
        }

        super.setImageRotation(degrees);

        if (drawablePt != null) {
            Matrix after = new Matrix(mBaseMatrix);
            after.postConcat(buildExtraMatrixForCurrentState());
            float[] mappedAfter = new float[] { drawablePt[0], drawablePt[1] };
            after.mapPoints(mappedAfter);
            float dx = viewCx - mappedAfter[0];
            float dy = viewCy - mappedAfter[1];
            if (Math.hypot(dx, dy) > 0.5f) {
                mInteractionMatrix.postTranslate(dx, dy);
                applyInteraction();
            } else
                applyInteraction();
        } else
            applyInteraction();
    }

    @Override
    public void animateImageRotation(final float toDegrees, long durationMs) {
        Drawable d = getDrawable();
        final float startRotation = getImageRotation();
        if (d == null || durationMs <= 0) {
            setImageRotation(toDegrees);
            return;
        }

        float viewCx = getContentCenterX();
        float viewCy = getContentCenterY();
        Matrix before = new Matrix(mBaseMatrix);
        before.postConcat(buildExtraMatrixForCurrentState());
        Matrix inv = new Matrix();
        final float[] drawablePt = new float[2];
        boolean haveDrawablePt = false;
        if (before.invert(inv)) {
            float[] centerPt = new float[] { viewCx, viewCy };
            inv.mapPoints(drawablePt, centerPt);
            haveDrawablePt = true;
        }

        super.cancelRotationAnimation();

        if (!haveDrawablePt) {
            ValueAnimator animator = ValueAnimator.ofFloat(startRotation, toDegrees);
            animator.setDuration(durationMs);
            animator.setInterpolator(new DecelerateInterpolator());
            animator.addUpdateListener(animation -> {
                float value = (float) animation.getAnimatedValue();
                super.setImageRotation(value);
                applyInteraction();
            });
            animator.addListener(new AnimatorListenerAdapter() {
                @Override
                public void onAnimationEnd(Animator animation) {
                    applyInteraction();
                }

                @Override
                public void onAnimationCancel(Animator animation) {
                    applyInteraction();
                }
            });
            animator.start();
            return;
        }

        ValueAnimator animator = ValueAnimator.ofFloat(startRotation, toDegrees);
        animator.setDuration(durationMs);
        animator.setInterpolator(
                mCenterInterpolator != null ? mCenterInterpolator : new AccelerateDecelerateInterpolator());
        animator.addUpdateListener(animation -> {
            float value = (float) animation.getAnimatedValue();
            super.setImageRotation(value);
            Matrix after = new Matrix(mBaseMatrix);
            after.postConcat(buildExtraMatrixForCurrentState());
            float[] mapped = new float[] { drawablePt[0], drawablePt[1] };
            after.mapPoints(mapped);
            float dx = viewCx - mapped[0];
            float dy = viewCy - mapped[1];
            if (Math.hypot(dx, dy) > 0.001f) {
                mInteractionMatrix.postTranslate(dx, dy);
                applyInteraction();
            } else
                applyInteraction();
        });
        animator.addListener(new AnimatorListenerAdapter() {
            @Override
            public void onAnimationEnd(Animator animation) {
                applyInteraction();
            }

            @Override
            public void onAnimationCancel(Animator animation) {
                applyInteraction();
            }
        });
        animator.start();
    }

    // ---------- Helpers: clamping, fling, settle, etc. ----------
    private void cancelScaleAnimation() {
        if (mScaleAnimator != null) {
            mScaleAnimator.cancel();
            mScaleAnimator = null;
        }
        // ensure suppression is removed on cancel
        mSuppressCenterDuringAnimation = false;
        // defensively ensure scale bounds when an animation is canceled
        ensureCurrentScaleInBounds();
    }

    private void notifyZoomChanged() {
        if (mZoomChangeListener != null)
            mZoomChangeListener.onZoomChanged(mCurrentScale);
    }

    private class ScaleListener extends ScaleGestureDetector.SimpleOnScaleGestureListener {
        @Override
        public boolean onScale(ScaleGestureDetector detector) {
            float rawFactor = detector.getScaleFactor();
            float appliedFactor = rawFactor;
            // If a double-tap just occurred, attenuate the immediate scale delta and consume the flag
            // if (mRecentlyDoubleTapped) {
                appliedFactor = 1f + (rawFactor - 1f) * mDoubleTapPanSensitivity;
                // mRecentlyDoubleTapped = false;
            // }
            setScaleInternal(appliedFactor, detector.getFocusX(), detector.getFocusY());
             return true;
         }
     }

    private Matrix buildExtraMatrixForCurrentState() {
        Matrix extra = new Matrix();
        float cx = getContentCenterX();
        float cy = getContentCenterY();
        extra.postScale(mCurrentScale, mCurrentScale, cx, cy);
        extra.postConcat(mInteractionMatrix);
        return extra;
    }

    // Helpers to get "content" coordinates (account for padding) consistently
    private float getContentWidth() {
        return Math.max(0f, getWidth() - getPaddingLeft() - getPaddingRight());
    }

    private float getContentHeight() {
        return Math.max(0f, getHeight() - getPaddingTop() - getPaddingBottom());
    }

    private float getContentLeft() {
        return getPaddingLeft();
    }

    private float getContentTop() {
        return getPaddingTop();
    }

    private float getContentRight() {
        return getPaddingLeft() + getContentWidth();
    }

    private float getContentBottom() {
        return getPaddingTop() + getContentHeight();
    }

    private float getContentCenterX() {
        return getPaddingLeft() + getContentWidth() * 0.5f;
    }

    private float getContentCenterY() {
        return getPaddingTop() + getContentHeight() * 0.5f;
    }

    private void applyInteraction() {
        Matrix extra = new Matrix();
        float cx = getContentCenterX();
        float cy = getContentCenterY();
        extra.postScale(mCurrentScale, mCurrentScale, cx, cy);
        extra.postConcat(mInteractionMatrix);

        Matrix composed = new Matrix(mBaseMatrix);
        composed.postConcat(extra);

        Drawable d = getDrawable();
        if (d != null) {
            float iw = Math.max(1, d.getIntrinsicWidth());
            float ih = Math.max(1, d.getIntrinsicHeight());
            RectF src = new RectF(0, 0, iw, ih);
            RectF mapped = new RectF();
            composed.mapRect(mapped, src);

            float viewW = getContentWidth();
            float viewH = getContentHeight();
            float viewLeft = getContentLeft();
            float viewTop = getContentTop();
            float viewRight = getContentRight();
            float viewBottom = getContentBottom();

            float deltaX = 0f, deltaY = 0f;
            final float overs = mOverscrollDistance;

            if (mapped.width() <= viewW) {
                float desiredCenterX = getContentCenterX();
                deltaX = desiredCenterX - mapped.centerX();
            } else {
                if (mapped.left > viewLeft + overs)
                    deltaX = (viewLeft + overs) - mapped.left;
                else if (mapped.right < viewRight - overs)
                    deltaX = (viewRight - overs) - mapped.right;
            }

            if (mapped.height() <= viewH) {
                float desiredCenterY = getContentCenterY();
                deltaY = desiredCenterY - mapped.centerY();
            } else {
                if (mapped.top > viewTop + overs)
                    deltaY = (viewTop + overs) - mapped.top;
                else if (mapped.bottom < viewBottom - overs)
                    deltaY = (viewBottom - overs) - mapped.bottom;
            }

            // If we are holding center during a center animation, do NOT auto-adjust
            // mInteractionMatrix.
            if (mSuppressCenterDuringAnimation) {
                // keep the current mInteractionMatrix; only update the visual transform
                setExtraTransform(extra);
                notifyZoomChanged();
                return;
            }

            final float TOL = 0.25f; // slightly tighter tolerance so settle triggers reliably
            if (Math.abs(deltaX) > TOL || Math.abs(deltaY) > TOL) {
                mInteractionMatrix.postTranslate(deltaX, deltaY);
                extra.reset();
                extra.postScale(mCurrentScale, mCurrentScale, cx, cy);
                extra.postConcat(mInteractionMatrix);
            }
        }

        setExtraTransform(extra);
        notifyZoomChanged();
    }

    private void setScaleInternal(float scaleFactor, float focusX, float focusY) {
        // no-op if no view size or no change
        if (getWidth() == 0 || getHeight() == 0)
            return;

        final float prevScale = mCurrentScale;
        final float desiredScale = Math.max(mMinScale, Math.min(mMaxScale, mCurrentScale * scaleFactor));
        final float factor = desiredScale / prevScale;
        if (Math.abs(factor - 1f) < 1e-6f)
            return;

        // Compute the drawable point under the focus in the "before" transform
        Matrix before = new Matrix(mBaseMatrix);
        Matrix extraBefore = new Matrix();
        float cx = getContentCenterX();
        float cy = getContentCenterY();
        extraBefore.postScale(prevScale, prevScale, cx, cy);
        extraBefore.postConcat(mInteractionMatrix);
        before.postConcat(extraBefore);

        final float[] imagePt = new float[2];
        Matrix inv = new Matrix();
        boolean haveImagePt = false;
        if (before.invert(inv)) {
            float[] viewFocus = new float[] { focusX, focusY };
            inv.mapPoints(imagePt, viewFocus);
            haveImagePt = true;
        }

        // Update scale (no longer scale the interaction matrix; keep it
        // translation-only).
        mCurrentScale = desiredScale;

        // If we successfully got the image point, compute translation so that the image
        // point
        // maps back to the provided focus in view coordinates (anchors the scale).
        if (haveImagePt) {
            Matrix after = new Matrix(mBaseMatrix);
            Matrix extraAfter = new Matrix();
            extraAfter.postScale(mCurrentScale, mCurrentScale, cx, cy);
            extraAfter.postConcat(mInteractionMatrix); // mInteractionMatrix is translation-only
            after.postConcat(extraAfter);

            float[] mapped = new float[] { imagePt[0], imagePt[1] };
            after.mapPoints(mapped);
            float dx = focusX - mapped[0];
            float dy = focusY - mapped[1];
            if (Math.hypot(dx, dy) > 1e-5f) {
                mInteractionMatrix.postTranslate(dx, dy);
            }
        }

        applyInteraction();
    }

    // Reset last-frame counters and start scroller
    private void startFling(int velocityX, int velocityY) {
        if (!mFlingEnabled) {
            return;
        }

        cancelFling();
        Drawable d = getDrawable();
        if (d == null)
            return;

        int adjVx = (int) (mScaleFlingByZoom && mCurrentScale > 0f ? velocityX * (1f / mCurrentScale) : velocityX);
        int adjVy = (int) (mScaleFlingByZoom && mCurrentScale > 0f ? velocityY * (1f / mCurrentScale) : velocityY);

        Matrix extraNow = buildExtraMatrixForCurrentState();
        Matrix composed = new Matrix(mBaseMatrix);
        composed.postConcat(extraNow);

        float iw = Math.max(1, d.getIntrinsicWidth());
        float ih = Math.max(1, d.getIntrinsicHeight());
        RectF src = new RectF(0, 0, iw, ih);
        RectF mapped = new RectF();
        composed.mapRect(mapped, src);

        float viewW = getContentWidth();
        float viewH = getContentHeight();
        float viewLeft = getContentLeft();
        float viewTop = getContentTop();
        float viewRight = getContentRight();
        float viewBottom = getContentBottom();

        float minDeltaX = (viewRight - mOverscrollDistance) - mapped.right;
        float maxDeltaX = (viewLeft + mOverscrollDistance) - mapped.left;
        if (minDeltaX > maxDeltaX) {
            float t = minDeltaX;
            minDeltaX = maxDeltaX;
            maxDeltaX = t;
        }
        float minDeltaY = (viewBottom - mOverscrollDistance) - mapped.bottom;
        float maxDeltaY = (viewTop + mOverscrollDistance) - mapped.top;
        if (minDeltaY > maxDeltaY) {
            float t = minDeltaY;
            minDeltaY = maxDeltaY;
            maxDeltaY = t;
        }

        int minX = (int) Math.floor(minDeltaX);
        int maxX = (int) Math.ceil(maxDeltaX);
        int minY = (int) Math.floor(minDeltaY);
        int maxY = (int) Math.ceil(maxDeltaY);

        if (mScroller == null)
            mScroller = new OverScroller(getContext(), new DecelerateInterpolator());
        mScroller.forceFinished(true);
        // reset last-frame counters so first frame delta is correct
        mFlingLastX = 0;
        mFlingLastY = 0;
        mScroller.fling(0, 0, adjVx, adjVy, minX, maxX, minY, maxY);
        mIsFlinging = true;
        postOnAnimation(mFlingRunnable);
    }

    private final Runnable mFlingRunnable = new Runnable() {
        @Override
        public void run() {
            if (mScroller == null) {
                mIsFlinging = false;
                return;
            }
            if (!mScroller.computeScrollOffset()) {
                mIsFlinging = false;
                mFlingLastX = 0;
                mFlingLastY = 0;
                settle();
                return;
            }
            int currX = mScroller.getCurrX();
            int currY = mScroller.getCurrY();
            int dx = currX - mFlingLastX;
            int dy = currY - mFlingLastY;
            mFlingLastX = currX;
            mFlingLastY = currY;
            mInteractionMatrix.postTranslate(dx, dy);
            applyInteraction();
            if (!mScroller.isFinished())
                postOnAnimation(this);
            else {
                mIsFlinging = false;
                mFlingLastX = 0;
                mFlingLastY = 0;
                settle();
            }
        }
    };

    private void cancelFling() {
        if (mScroller != null)
            mScroller.forceFinished(true);
        mIsFlinging = false;
        removeCallbacks(mFlingRunnable);
        mFlingLastX = 0;
        mFlingLastY = 0;
        // also cancel hold suppression
        mSuppressCenterDuringAnimation = false;
    }

    private void settle() {
        Drawable d = getDrawable();
        if (d == null)
            return;
        Matrix extraNow = buildExtraMatrixForCurrentState();
        Matrix composed = new Matrix(mBaseMatrix);
        composed.postConcat(extraNow);

        float iw = Math.max(1, d.getIntrinsicWidth());
        float ih = Math.max(1, d.getIntrinsicHeight());
        RectF src = new RectF(0, 0, iw, ih);
        RectF mapped = new RectF();
        composed.mapRect(mapped, src);

        float viewW = getContentWidth();
        float viewH = getContentHeight();
        float viewLeft = getContentLeft();
        float viewTop = getContentTop();
        float viewRight = getContentRight();
        float viewBottom = getContentBottom();

        float targetDx = 0f, targetDy = 0f;
        if (mapped.width() <= viewW) {
            float desiredCenterX = getContentCenterX();
            targetDx = desiredCenterX - mapped.centerX();
        } else {
            if (mapped.left > viewLeft)
                targetDx = viewLeft - mapped.left;
            else if (mapped.right < viewRight)
                targetDx = viewRight - mapped.right;
        }

        if (mapped.height() <= viewH) {
            float desiredCenterY = getContentCenterY();
            targetDy = desiredCenterY - mapped.centerY();
        } else {
            if (mapped.top > viewTop)
                targetDy = viewTop - mapped.top;
            else if (mapped.bottom < viewBottom)
                targetDy = viewBottom - mapped.bottom;
        }

        final float TOL = 0.25f;
        if (Math.hypot(targetDx, targetDy) < TOL)
            return;

        final float endDx = targetDx, endDy = targetDy;
        ValueAnimator anim = ValueAnimator.ofFloat(0f, 1f);
        anim.setDuration(mBounceBackDuration);
        anim.setInterpolator(new DecelerateInterpolator());
        final float[] last = { 0f };
        anim.addUpdateListener(animation -> {
            float frac = (float) animation.getAnimatedValue();
            float incremental = frac - last[0];
            last[0] = frac;
            mInteractionMatrix.postTranslate(endDx * incremental, endDy * incremental);
            applyInteraction();
        });
        anim.start();
    }

    // Debug helpers
    private static String matToString(Matrix m) {
        if (m == null)
            return "null";
        float[] v = new float[9];
        m.getValues(v);
        return String.format(Locale.US,
                "[%1$.3f,%2$.3f,%3$.3f; %4$.3f,%5$.3f,%6$.3f; %7$.3f,%8$.3f,%9$.3f]",
                v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8]);
    }
}