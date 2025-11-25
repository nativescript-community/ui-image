package com.nativescript.image;

import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.Matrix;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.View;
import android.view.View.MeasureSpec;
import android.widget.ImageView;

import androidx.annotation.Nullable;
import androidx.appcompat.widget.AppCompatImageView;

import android.graphics.Canvas;
import android.graphics.Path;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Outline;
import android.graphics.RectF;
import android.graphics.Rect;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.view.ViewOutlineProvider;

import org.nativescript.widgets.BorderDrawable;

import android.util.Log;

/**
 * ImageView that exposes setImageRotation(float) and coordinates rotation +
 * scaleType.
 *
 * Enhancements:
 * - Re-asserts MatrixDrawable -> wrapped drawable callback binding after the
 * wrapper is set on the ImageView,
 * to ensure the wrapped drawable's invalidation/schedule callbacks are received
 * by the wrapper.
 * - Starts/stops Animatable wrapped drawables consistently on
 * attach/detach/visibility changes.
 * - Aspect-ratio support (like MatrixImageView): setAspectRatio(float) to force
 * measured width/height to respect ratio.
 * - Supports rotation-aware measurement: when imageRotation is 90 or 270
 * degrees, the enforced aspect ratio
 * is inverted so measurement reflects the rotated content.
 * - Adds a noRatioEnforce flag that disables all aspect-ratio measurement logic
 * and simply calls super.onMeasure().
 * - Auto-size support: when width or height measure is not finite, the view can
 * size itself using
 * explicit imageWidth/imageHeight (setImageSize) or the drawable intrinsic
 * size.
 *
 * Protected fields allow subclasses (e.g. ZoomableMatrixImageView) to inspect
 * base matrix for clamping.
 */
public class MatrixImageView extends AppCompatImageView {
    // made protected so ZoomableMatrixImageView can compute clamped translations
    // using base matrix.
    protected final Matrix mBaseMatrix = new Matrix(); // rotation + scaleType fit (drawable->view)
    protected final Matrix mExtraMatrix = new Matrix(); // user interaction (zoom/pan) in view coords, composed after
                                                        // base
    private float mImageRotation = 0f;
    private ImageView.ScaleType mAppliedScaleType = ImageView.ScaleType.FIT_CENTER;

    private ValueAnimator mRotationAnimator;

    // Aspect ratio support: value <= 0 means "disabled"
    // When > 0, width / height == aspectRatio (same convention as MatrixImageView)
    private float mAspectRatio = 0f;

    // If true, bypass any aspect-ratio measurement (call super.onMeasure)
    private boolean mNoRatioEnforce = false;

    // Explicit image size that can be used for measuring when parent constraints
    // are not finite.
    // If zero, we fall back to drawable intrinsic size.
    private int mImageWidth = 0;
    private int mImageHeight = 0;

    public MatrixImageView(Context context) {
        super(context);
        init();
    }

    public MatrixImageView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public MatrixImageView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        // Keep ImageView in MATRIX mode so the system doesn't apply additional
        // scaleType transforms.
        super.setScaleType(ScaleType.MATRIX);
        super.setImageMatrix(new Matrix());
    }

    /**
     * Provide an explicit image size (in pixels) that will be used by onMeasure
     * when
     * the parent allows the view to size itself (i.e. width or height is not
     * EXACTLY).
     *
     * Pass width=0 && height=0 to clear and fall back to drawable intrinsic size.
     */
    public void setImageSize(int width, int height) {
        if (mImageWidth == width && mImageHeight == height)
            return;
        mImageWidth = Math.max(0, width);
        mImageHeight = Math.max(0, height);
        // When the image size changes, we need to re-measure / layout so any AT_MOST/UNSPECIFIED
        // parent dimensions are resolved correctly.
        requestLayout();
    }

    public int getImageWidth() {
        return mImageWidth;
    }

    public int getImageHeight() {
        return mImageHeight;
    }

    /**
     * Clear explicit image size; onMeasure will fall back to drawable intrinsic
     * size.
     */
    public void clearImageSize() {
        setImageSize(0, 0);
    }

    /**
     * Aspect ratio API (same sign convention as MatrixImageView):
     * - setAspectRatio(r) with r > 0 will cause the view to measure so that
     * width/height == r
     * - setAspectRatio(0) or negative disables aspect-ratio behavior and falls back
     * to normal measuring
     */
    public void setAspectRatio(float aspectRatio) {
        if (aspectRatio < 0f)
            aspectRatio = 0f;
        if (Float.compare(mAspectRatio, aspectRatio) == 0)
            return;
        mAspectRatio = aspectRatio;
        requestLayout();
    }

    public float getAspectRatio() {
        return mAspectRatio;
    }

    /**
     * When true, onMeasure will bypass aspect-ratio enforcement and simply call
     * super.onMeasure().
     */
    public void setNoRatioEnforce(boolean noRatioEnforce) {
        if (mNoRatioEnforce == noRatioEnforce)
            return;
        mNoRatioEnforce = noRatioEnforce;
        requestLayout();
    }

    public boolean isNoRatioEnforce() {
        return mNoRatioEnforce;
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        // If aspect ratio not set or explicitly disabled, perform auto-size only if
        // needed (parent not exact)
        if (mNoRatioEnforce) {
            super.onMeasure(widthMeasureSpec, heightMeasureSpec);
            return;
        }

        final int widthMode = MeasureSpec.getMode(widthMeasureSpec);
        final int heightMode = MeasureSpec.getMode(heightMeasureSpec);
        final int widthSize = MeasureSpec.getSize(widthMeasureSpec);
        final int heightSize = MeasureSpec.getSize(heightMeasureSpec);

        // Log.d("JS", "onMeasure widthMode: " +  widthMode + " heightMode: "+  heightMode + " widthSize: "+  widthSize+ " heightSize: "+  heightSize+ " mAspectRatio: "+  mAspectRatio+ " mImageWidth: "+  mImageWidth+ " mImageHeight: "+  mImageHeight);

        // Determine whether parent constrained width/height exactly
        final boolean finiteWidth = (widthMode == MeasureSpec.EXACTLY);
        final boolean finiteHeight = (heightMode == MeasureSpec.EXACTLY);

        // Consider paddings
        final int paddingH = getPaddingLeft() + getPaddingRight();
        final int paddingV = getPaddingTop() + getPaddingBottom();

        // Work with available inner space
        int availableWidth = Math.max(0, widthSize - paddingH);
        int availableHeight = Math.max(0, heightSize - paddingV);

        // Determine the source aspect ratio to use:
        // Priority:
        // 1) explicit mAspectRatio if > 0
        // 2) computed from imageWidth/imageHeight if known
        // 3) computed from drawable intrinsic size if available
        float aspect = mAspectRatio;
        int srcW = mImageWidth;
        int srcH = mImageHeight;

        if (aspect <= 0f) {
            // no explicit aspect ratio, try to derive one from sizes
            if (srcW <= 0 || srcH <= 0) {
                Drawable d = getDrawable();
                if (d != null) {
                    int iw = d.getIntrinsicWidth();
                    int ih = d.getIntrinsicHeight();
                    if (iw > 0 && ih > 0) {
                        srcW = iw;
                        srcH = ih;
                    }
                }
            }
            if (srcW > 0 && srcH > 0) {
                aspect = srcW / (float) srcH;
            }
        }

        // If no usable aspect ratio found, fall back to default measurement
        if (aspect <= 0f) {
            // No usable aspect. As a convenience, when width is EXACT and height is AT_MOST
            // prefer the available height (fill vertical constraint) instead of returning
            // zero (wrap_content with no drawable).
            if ((finiteWidth && !finiteHeight) || (!finiteWidth && finiteHeight)) {
                int measuredWidth = availableWidth + paddingH;
                int measuredHeight = availableHeight + paddingV;
                setMeasuredDimension(resolveSizeAndState(measuredWidth, widthMeasureSpec, 0),
                                      resolveSizeAndState(measuredHeight, heightMeasureSpec, 0));
                return;
            }
            // Fallback to default ImageView behavior otherwise
            super.onMeasure(widthMeasureSpec, heightMeasureSpec);
            return;
        }

        // Effective aspect ratio must take into account 90/270 rotation which swaps
        // drawable axes.
        float effectiveAspect = aspect;
        float normalizedRotation = mImageRotation % 360f;
        if (normalizedRotation < 0f)
            normalizedRotation += 360f;
        // If rotation is near 90 or 270 degrees, invert the aspect.
        int rot = Math.round(normalizedRotation) % 360;
        if ((rot == 90) || (rot == 270)) {
            effectiveAspect = 1f / aspect;
        }

        int measuredWidth;
        int measuredHeight;

        // If aspect ratio is set (explicit) or derived, apply MatrixImageView-like logic
        // with auto size when parent is not exact.
        // If width is exact and height is not exact -> compute height from
        // width/aspectRatio
        if (finiteWidth && !finiteHeight) {
            measuredWidth = availableWidth;
            measuredHeight = Math.round(measuredWidth / effectiveAspect);
            if (heightMode == MeasureSpec.AT_MOST && measuredHeight > availableHeight) {
                measuredHeight = availableHeight;
            }
            measuredWidth += paddingH;
            measuredHeight += paddingV;
            setMeasuredDimension(resolveSizeAndState(measuredWidth, widthMeasureSpec, 0),
                    resolveSizeAndState(measuredHeight, heightMeasureSpec, 0));
            return;
        }
        // If height is exact and width is not exact -> compute width from
        // height*aspectRatio
        else if (finiteHeight && !finiteWidth) {
            measuredHeight = availableHeight;
            measuredWidth = Math.round(measuredHeight * effectiveAspect);
            if (widthMode == MeasureSpec.AT_MOST && measuredWidth > availableWidth) {
                measuredWidth = availableWidth;
            }
            measuredWidth += paddingH;
            measuredHeight += paddingV;
            setMeasuredDimension(resolveSizeAndState(measuredWidth, widthMeasureSpec, 0),
                    resolveSizeAndState(measuredHeight, heightMeasureSpec, 0));
            return;
        }
        // If neither dimension is exact, try to size based on image intrinsic/explicit
        // size
        else if (!finiteWidth && !finiteHeight) {
            // If we have a source size (srcW/srcH), use it as a hint to size the view
            // (respect aspect)
            if (srcW > 0 && srcH > 0) {
                // Scale the source size to fit available constraints (AT_MOST) while preserving
                // aspect
                // If parent constraints are UNSPECIFIED, use source size directly.
                int desiredInnerW = srcW;
                int desiredInnerH = srcH;

                // If width has an AT_MOST constraint, limit by availableWidth
                if (widthMode == MeasureSpec.AT_MOST && desiredInnerW > availableWidth) {
                    desiredInnerW = availableWidth;
                    desiredInnerH = Math.round(desiredInnerW / effectiveAspect);
                }

                // If height has an AT_MOST constraint, limit by availableHeight
                if (heightMode == MeasureSpec.AT_MOST && desiredInnerH > availableHeight) {
                    desiredInnerH = availableHeight;
                    desiredInnerW = Math.round(desiredInnerH * effectiveAspect);
                }

                measuredWidth = desiredInnerW + paddingH;
                measuredHeight = desiredInnerH + paddingV;
                setMeasuredDimension(resolveSizeAndState(measuredWidth, widthMeasureSpec, 0),
                        resolveSizeAndState(measuredHeight, heightMeasureSpec, 0));
                return;
            } else {
                // No source size available -> fall back to default
                super.onMeasure(widthMeasureSpec, heightMeasureSpec);
                return;
            }
        }

        // Both dimensions are exact (or other cases) -> default measurement
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    }

    @Override
    public void setScaleType(ScaleType scaleType) {
        if (scaleType == null) {
            scaleType = ScaleType.FIT_CENTER;
        }
        mAppliedScaleType = scaleType;
        updateBaseMatrix();
    }

    /**
     * Set rotation (degrees) applied to the drawable before fitting to view.
     * This is an immediate set (no animation).
     *
     * Note: changing rotation may change measured dimensions when aspect-ratio
     * enforcement is active.
     * We therefore requestLayout() so measurement reflects the rotated aspect.
     */
    public void setImageRotation(float degrees) {
        cancelRotationAnimation();
        if (Float.compare(mImageRotation, degrees) == 0)
            return;
        mImageRotation = degrees;
        // rotation can affect measurement when aspect-ratio is enforced (90/270 swap)
        requestLayout();
        updateBaseMatrix();
    }

    /**
     * Get current image rotation in degrees.
     */
    public float getImageRotation() {
        return mImageRotation;
    }

    /**
     * Animate rotation from current rotation to target degrees.
     *
     * @param toDegrees  target rotation value in degrees
     * @param durationMs duration in milliseconds (use 0 for immediate)
     *
     *                   Note: the animation will call requestLayout() on each
     *                   update so the view can adjust layout
     *                   if the rotation crosses axis swap thresholds or if you want
     *                   continuous relayout during animation.
     *                   This is potentially expensive; disable aspect-ratio or
     *                   setNoRatioEnforce(true) if you prefer no layout churn.
     */
    public void animateImageRotation(float toDegrees, long durationMs) {
        cancelRotationAnimation();
        if (durationMs <= 0) {
            setImageRotation(toDegrees);
            return;
        }
        mRotationAnimator = ValueAnimator.ofFloat(mImageRotation, toDegrees);
        mRotationAnimator.setDuration(durationMs);
        mRotationAnimator.addUpdateListener(animation -> {
            float value = (float) animation.getAnimatedValue();
            mImageRotation = value;
            // rotation may affect measurement; request layout to update sizing while
            // animating.
            requestLayout();
            updateBaseMatrix();
        });
        mRotationAnimator.start();
    }

    /**
     * Cancel any running rotation animation.
     */
    public void cancelRotationAnimation() {
        if (mRotationAnimator != null) {
            mRotationAnimator.cancel();
            mRotationAnimator = null;
        }
    }

    @Override
    public void setImageDrawable(@Nullable Drawable drawable) {
        if (drawable == null) {
            // stop any wrapped animatable and clear
            Drawable old = getDrawable();
            if (old instanceof Animatable) {
                ((Animatable) old).stop();
            }
            setImageSize(0, 0);
            super.setImageDrawable(null);
            // clear implicit image size when drawable removed
            // (do not clear explicit mImageWidth/mImageHeight set by caller)
            return;
        }
        setImageSize(drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight());
        MatrixDrawable md = new MatrixDrawable(drawable);
        // set the wrapper as the ImageView drawable - AppCompatImageView will set the
        // wrapper's callback to the view.
        super.setImageDrawable(md);

        // Re-assert the wrapped drawable's callback -> wrapper relationship (safe no-op
        // if already set).
        md.refreshWrappedCallback();

        // If caller hasn't set an explicit image size, capture drawable intrinsic size
        // as a hint for measuring
        if (mImageWidth <= 0 || mImageHeight <= 0) {
            int iw = drawable.getIntrinsicWidth();
            int ih = drawable.getIntrinsicHeight();
            if (iw > 0 && ih > 0) {
                mImageWidth = iw;
                mImageHeight = ih;
                // we captured a size that may affect measurement
                requestLayout();
            }
        }

        // Ensure the next updateBaseMatrix applies the matrix to the new wrapper instance.
        mLastComposedDrawable = null;
        updateBaseMatrix();

        // If underlying drawable is animatable and ImageView is visible, start it
        if (drawable instanceof Animatable && getVisibility() == VISIBLE) {
            ((Animatable) drawable).start();
        }
    }

    // cache last composed matrix so we can no-op identical updates (avoid repeated invalidates)
    private final Matrix mLastComposedMatrix = new Matrix();
    // The drawable instance we last applied mLastComposedMatrix to. If a new drawable is
    // installed (wrapper changed), we must still apply the composed matrix even if values match.
    private Drawable mLastComposedDrawable = null;

    private static boolean matricesApproxEqual(Matrix a, Matrix b, float eps) {
        float[] va = new float[9];
        float[] vb = new float[9];
        a.getValues(va);
        b.getValues(vb);
        for (int i = 0; i < 9; ++i) {
            if (Math.abs(va[i] - vb[i]) > eps) return false;
        }
        return true;
    }

    private void updateBaseMatrix() {
        Drawable d = getDrawable();
        if (d == null)
            return;

        int vw = getWidth() - getPaddingLeft() - getPaddingRight();
        int vh = getHeight() - getPaddingTop() - getPaddingBottom();

        Matrix base = new Matrix();
        if (vw > 0 && vh > 0) {
            ScaleUtils.getImageMatrix(d, vw, vh, mImageRotation, mAppliedScaleType, base);
        }
        mBaseMatrix.set(base);

        // Compose base + extra into one matrix and apply to the MatrixDrawable wrapper
        Matrix composed = new Matrix(mBaseMatrix);
        composed.postConcat(mExtraMatrix);

        // No-op only if composed matrix hasn't changed AND the drawable instance is the same.
        // If the wrapper changed, we must explicitly set the composed matrix on the new wrapper.
        if (d == mLastComposedDrawable && matricesApproxEqual(mLastComposedMatrix, composed, 1e-6f)) {
            return;
        }
        mLastComposedMatrix.set(composed);
        mLastComposedDrawable = d;

        if (d instanceof MatrixDrawable) {
            ((MatrixDrawable) d).setMatrix(composed);
        } else {
            // Fallback: if drawable is not wrapped, fall back on ImageView's matrix
            super.setImageMatrix(composed);
        }
        // Use VSync-friendly invalidation.
        postInvalidateOnAnimation();
    }

    /**
     * Apply additional transform on top of rotation+scaleType fit (e.g. zoom/pan).
     * The passed matrix is interpreted in view coordinates and will be
     * post-concatenated after base.
     * If extra is null, the base matrix alone is used.
     */
    public void setExtraTransform(@Nullable Matrix extra) {
        mExtraMatrix.reset();
        if (extra != null) {
            mExtraMatrix.set(extra);
        }
        updateBaseMatrix();
    }

    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        // If drawable is animatable, start it when attached and visible
        Drawable d = getDrawable();
        if (d instanceof Animatable && getVisibility() == VISIBLE) {
            ((Animatable) d).start();
        }
        // If we have a MatrixDrawable, re-assert wrapped callback relationship
        if (d instanceof MatrixDrawable) {
            ((MatrixDrawable) d).refreshWrappedCallback();
        }
    }

    @Override
    protected void onDetachedFromWindow() {
        // stop any animatables to avoid leaks
        Drawable d = getDrawable();
        if (d instanceof Animatable) {
            ((Animatable) d).stop();
        }
        cancelRotationAnimation();
        super.onDetachedFromWindow();
    }

    @Override
    protected void onVisibilityChanged(View changedView, int visibility) {
        super.onVisibilityChanged(changedView, visibility);
        Drawable d = getDrawable();
        if (d instanceof Animatable) {
            if (visibility == VISIBLE) {
                ((Animatable) d).start();
            } else {
                ((Animatable) d).stop();
            }
        }
        // If drawable exists and is MatrixDrawable, re-assert wrapped callback
        // relationship
        if (d instanceof MatrixDrawable) {
            ((MatrixDrawable) d).refreshWrappedCallback();
        }
    }

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        updateBaseMatrix();
        super.onSizeChanged(w, h, oldw, oldh);
        updateOutlineProvider();
    }

    // Add this method to MatrixImageView (insert into the class body)
    public void resetInteraction() {
        // Reset any extra interaction transform (zoom/pan) and update the view.
        mExtraMatrix.reset();
        // Apply the cleared extra transform
        setExtraTransform(null);
        // Notify layout/state if necessary (no-op here)
    }

    // Hook for subclasses to validate & clamp current scale (no-op for non-zoomable base view)
    protected void ensureCurrentScaleInBounds() { /* no-op for base */ }


    public boolean isUsingOutlineProvider = false;
    private static Paint clipPaint;
    public void updateOutlineProvider() {
        Drawable drawable = getBackground();
        if (android.os.Build.VERSION.SDK_INT >= 21) {
            // we try to support N setting outline provider now
            if (!isUsingOutlineProvider && getOutlineProvider() != null) {
                // already handled somewhere else
                return;
            }
            if (drawable instanceof BorderDrawable && (android.os.Build.VERSION.SDK_INT >= 33 || ((BorderDrawable)drawable).hasUniformBorderRadius())) {
                setOutlineProvider(new ViewOutlineProvider() {
                    @Override
                    public void getOutline(View view, Outline outline) {
                        Drawable drawable = getBackground();
                        if (drawable instanceof BorderDrawable) {
                            BorderDrawable borderDrawable = (BorderDrawable) drawable;
                            // that if test is only needed until N BorderDrawable is updated to do it
                            if (borderDrawable.hasUniformBorderRadius()) {
                                // outlineRect.set(borderDrawable.getBounds());
                                outline.setRoundRect(borderDrawable.getBounds(), borderDrawable.getBorderBottomLeftRadius());
                            } else {
                                drawable.getOutline(outline);
                            }
                        } else {
                            outline.setRect(100, 100, view.getWidth() - 200, view.getHeight() - 200);
                        }
                    }
                });
                setClipToOutline(true);
                isUsingOutlineProvider = true;
            // } else if (android.os.Build.VERSION.SDK_INT >= 21) {
            //     isUsingOutlineProvider = false;
            //     setOutlineProvider(null);
            //     setClipToOutline(false);
            }
        }
    }

    @Override
    public void setBackground(Drawable background) {
        super.setBackground(background);
        updateOutlineProvider();
    }

    Path innerBorderPath;
    Path innerBorderTempPath;

    private Path generateInnerBorderPath(BorderDrawable borderDrawable) {

        float borderTopLeftRadius = borderDrawable.getBorderTopLeftRadius();
        float borderTopRightRadius = borderDrawable.getBorderTopRightRadius();
        float borderBottomRightRadius = borderDrawable.getBorderBottomRightRadius();
        float borderBottomLeftRadius = borderDrawable.getBorderBottomLeftRadius();
        float borderLeftWidth = borderDrawable.getBorderLeftWidth();
        float borderBottomWidth = borderDrawable.getBorderBottomWidth();
        float borderTopWidth = borderDrawable.getBorderTopWidth();
        float borderRightWidth = borderDrawable.getBorderRightWidth();
        if (innerBorderPath == null) {
            innerBorderPath = new Path();
        } else {
            innerBorderPath.reset();
        }
        if (innerBorderTempPath == null) {
            innerBorderTempPath = new Path();
        } else {
            innerBorderTempPath.reset();
        }
        Rect bounds = borderDrawable.getBounds();
        float width = (float) borderDrawable.getBounds().width();
        float height = (float) borderDrawable.getBounds().height();

        RectF borderInnerRect = new RectF(borderLeftWidth, borderTopWidth, width - borderRightWidth,
                height - borderBottomWidth);
        float[] borderInnerRadii = { Math.max(0, borderTopLeftRadius - borderLeftWidth),
                Math.max(0, borderTopLeftRadius - borderTopWidth), Math.max(0, borderTopRightRadius - borderRightWidth),
                Math.max(0, borderTopRightRadius - borderTopWidth),
                Math.max(0, borderBottomRightRadius - borderRightWidth),
                Math.max(0, borderBottomRightRadius - borderBottomWidth),
                Math.max(0, borderBottomLeftRadius - borderLeftWidth),
                Math.max(0, borderBottomLeftRadius - borderBottomWidth) };
        innerBorderTempPath.addRoundRect(borderInnerRect, borderInnerRadii, Path.Direction.CW);
        innerBorderPath.addRect(new RectF(bounds), Path.Direction.CW);
        innerBorderPath.op(innerBorderTempPath, Path.Op.DIFFERENCE);
        return innerBorderPath;
    }

    @Override
    protected void onDraw(Canvas canvas) {
        Drawable drawable = getBackground();
        if (!isUsingOutlineProvider && drawable instanceof BorderDrawable) {
            BorderDrawable borderDrawable = (BorderDrawable) drawable;
            Path clipPath = generateInnerBorderPath(borderDrawable);
            if (clipPath != null) {
                if (MatrixImageView.clipPaint == null) {
                    MatrixImageView.clipPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
                    MatrixImageView.clipPaint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.CLEAR));
                }
                int saveCount;
                int width = getWidth();
                int height = getHeight();
                if (android.os.Build.VERSION.SDK_INT >= 21) {
                    saveCount = canvas.saveLayer(new android.graphics.RectF(0.0f, 0.0f, width, height), null);
                } else {
                    saveCount = canvas.saveLayer(0.0f, 0.0f, width, height, null, Canvas.ALL_SAVE_FLAG);
                }
                super.onDraw(canvas);
                canvas.drawPath(clipPath, MatrixImageView.clipPaint);
                canvas.restoreToCount(saveCount);
                return;
            }
        } 
        super.onDraw(canvas);
    }
}