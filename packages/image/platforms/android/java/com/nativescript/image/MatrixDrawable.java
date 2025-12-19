package com.nativescript.image;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Outline;
import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

/**
 * Drawable wrapper that applies a Matrix before drawing the wrapped drawable
 * and
 * properly forwards drawable callbacks so animated drawables work.
 *
 * Behavior:
 * - The wrapped drawable is kept in drawable-local coords: bounds
 * (0,0,intrinsicW,intrinsicH).
 * - setMatrix(matrix) expects a matrix mapping drawable-local coords -> view
 * coords.
 * - We implement Drawable.Callback methods
 * (invalidateDrawable/scheduleDrawable/unscheduleDrawable)
 * so the wrapped drawable can drive invalidation/scheduling through this
 * wrapper.
 *
 * Notes:
 * - Drawable.setCallback(...) is final on some Android versions and cannot be
 * overridden.
 * We therefore ensure the wrapped drawable's callback points at this wrapper by
 * calling
 * mWrapped.setCallback(this) in the constructor and expose
 * refreshWrappedCallback()
 * so hosts can re-assert the relationship if needed (e.g. after ImageView
 * changes state).
 */
public class MatrixDrawable extends Drawable implements Drawable.Callback, Animatable {

    private final Drawable mWrapped;
    private final Matrix mMatrix = new Matrix();
    private final Rect mViewBounds = new Rect();

    public MatrixDrawable(@NonNull Drawable wrapped) {
        mWrapped = wrapped;
        int iw = Math.max(1, wrapped.getIntrinsicWidth());
        int ih = Math.max(1, wrapped.getIntrinsicHeight());
        // Keep wrapped drawable in drawable-local coordinates:
        mWrapped.setBounds(0, 0, iw, ih);
        // Ensure wrapped drawable callbacks are delivered to this wrapper
        mWrapped.setCallback(this);
    }

    /**
     * Expose the wrapped drawable for callers that need to inspect.
     */
    public Drawable getWrappedDrawable() {
        return mWrapped;
    }

    /**
     * Re-assert that the wrapped drawable's callback is this wrapper.
     * Call this if you suspect the wrapped drawable's callback may have been changed.
     */
    public void refreshWrappedCallback() {
        mWrapped.setCallback(this);
    }

    /**
     * Set the transformation matrix that maps the wrapped drawable coordinates
     * into this drawable's view coordinates. Pass null to reset to identity.
     */
    public void setMatrix(@Nullable Matrix matrix) {
        mMatrix.reset();
        if (matrix != null) {
            mMatrix.set(matrix);
        }
        invalidateSelf();
    }

    /**
     * Get a copy of the current transformation matrix.
     */
    public Matrix getMatrix() {
        return new Matrix(mMatrix);
    }

    @Override
    public void draw(@NonNull Canvas canvas) {
        int save = canvas.save();
        // Apply the matrix that maps drawable-local coords -> view coords.
        canvas.concat(mMatrix);
        // Draw the wrapped drawable which is in drawable-local coords.
        mWrapped.draw(canvas);
        canvas.restoreToCount(save);
    }

    @Override
    public void setAlpha(int alpha) {
        mWrapped.setAlpha(alpha);
    }

    @Override
    public void setColorFilter(@Nullable android.graphics.ColorFilter colorFilter) {
        mWrapped.setColorFilter(colorFilter);
    }

    @Override
    public int getOpacity() {
        return mWrapped.getOpacity();
    }

    @Override
    public void setBounds(int left, int top, int right, int bottom) {
        // Bounds here represent the view bounds. Keep them for invalidation and
        // measurement,
        // but the wrapped drawable remains in drawable-local coords.
        super.setBounds(left, top, right, bottom);
        mViewBounds.set(left, top, right, bottom);

        // ensure wrapped drawable remains in drawable-local coords
        int iw = mWrapped.getIntrinsicWidth();
        int ih = mWrapped.getIntrinsicHeight();
        if (iw <= 0)
            iw = 1;
        if (ih <= 0)
            ih = 1;
        mWrapped.setBounds(0, 0, iw, ih);
    }

    @Override
    protected void onBoundsChange(Rect bounds) {
        super.onBoundsChange(bounds);
        mViewBounds.set(bounds);
    }

    @Override
    public int getIntrinsicWidth() {
        return mWrapped.getIntrinsicWidth();
    }

    @Override
    public int getIntrinsicHeight() {
        return mWrapped.getIntrinsicHeight();
    }

    @Override
    public void getOutline(@NonNull Outline outline) {
        // Optional: forward to wrapped drawable's outline if desired. Default behavior
        // left empty.
        // If you want the wrapper to provide the wrapped outline, uncomment the next
        // line:
        // mWrapped.getOutline(outline);
        super.getOutline(outline);
    }

    // Drawable.Callback implementations: forward wrapped callbacks to the wrapper
    // host

    @Override
    public void invalidateDrawable(@NonNull Drawable who) {
        // When wrapped drawable requests invalidation, propagate invalidation of this
        // wrapper.
        invalidateSelf();
    }

    @Override
    public void scheduleDrawable(@NonNull Drawable who, @NonNull Runnable what, long when) {
        // Forward scheduling to this drawable's callback (typically the View)
        final Drawable.Callback cb = getCallback();
        if (cb != null) {
            cb.scheduleDrawable(this, what, when);
        }
    }

    @Override
    public void unscheduleDrawable(@NonNull Drawable who, @NonNull Runnable what) {
        final Drawable.Callback cb = getCallback();
        if (cb != null) {
            cb.unscheduleDrawable(this, what);
        }
    }

    // Animatable forwarding so callers can treat MatrixDrawable as animatable when
    // wrapped drawable is
    @Override
    public void start() {
        if (mWrapped instanceof Animatable) {
            ((Animatable) mWrapped).start();
        }
    }

    @Override
    public void stop() {
        if (mWrapped instanceof Animatable) {
            ((Animatable) mWrapped).stop();
        }
    }

    @Override
    public boolean isRunning() {
        return (mWrapped instanceof Animatable) && ((Animatable) mWrapped).isRunning();
    }

    @Override
    public boolean setVisible(boolean visible, boolean restart) {
        boolean changed = super.setVisible(visible, restart);
        // forward visibility to wrapped drawable so animations can start/stop
        // appropriately
        mWrapped.setVisible(visible, restart);
        return changed;
    }
}