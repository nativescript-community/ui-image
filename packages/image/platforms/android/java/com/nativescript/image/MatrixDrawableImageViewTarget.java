package com.nativescript.image;

import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.widget.ImageView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.bumptech.glide.request.target.ViewTarget;
import com.bumptech.glide.request.transition.Transition;

/**
 * Glide target that doesn't clear/replace the ImageView if the placeholder is
 * null.
 * This avoids a transient "blank" state when a Glide request starts without a
 * placeholder.
 */
public class MatrixDrawableImageViewTarget extends ViewTarget<ImageView, Drawable>
        implements Transition.ViewAdapter {

    @Nullable
    private Animatable animatable;

    // If true, clear drawable first on load, error. Disabling will prevent flickering
    // but wont look good with recycled views
    private boolean mClearFirst = true;

  public MatrixDrawableImageViewTarget(ImageView view) {
    super(view);
  }

  /**
   * @deprecated Use {@link #waitForLayout()} instead.
   */
  @SuppressWarnings({"deprecation"})
  @Deprecated
  public MatrixDrawableImageViewTarget(ImageView view, boolean waitForLayout) {
    super(view, waitForLayout);
  }

  /**
   * Control whether to preserve current drawable on load start/clear.
   * Default is true (clear). Call this immediately after creating the target if you want
   * to disable this with false.
   */
  public void setClearFirst(boolean value) {
      this.mClearFirst = value;
  }

    /**
     * Returns the current {@link android.graphics.drawable.Drawable} being
     * displayed in the view
     * using {@link android.widget.ImageView#getDrawable()}.
     */
    @Override
    @Nullable
    public Drawable getCurrentDrawable() {
        return view.getDrawable();
    }

    /**
     * Sets the given {@link android.graphics.drawable.Drawable} on the view using
     * {@link
     * android.widget.ImageView#setImageDrawable(android.graphics.drawable.Drawable)}.
     *
     * @param drawable {@inheritDoc}
     */
    @Override
    public void setDrawable(Drawable drawable) {
        view.setImageDrawable(drawable);
    }

    /**
     * Sets the given {@link android.graphics.drawable.Drawable} on the view using
     * {@link
     * android.widget.ImageView#setImageDrawable(android.graphics.drawable.Drawable)}.
     *
     * @param placeholder {@inheritDoc}
     */
    @Override
    public void onLoadStarted(@Nullable Drawable placeholder) {
        super.onLoadStarted(placeholder);
        if (this.mClearFirst) {
            setResourceInternal(null);
        }
        if (placeholder != null) {
            setDrawable(placeholder);
        }
    }

    /**
     * Sets the given {@link android.graphics.drawable.Drawable} on the view using
     * {@link
     * android.widget.ImageView#setImageDrawable(android.graphics.drawable.Drawable)}.
     *
     * @param errorDrawable {@inheritDoc}
     */
    @Override
    public void onLoadFailed(@Nullable Drawable errorDrawable) {
        super.onLoadFailed(errorDrawable);
        if (this.mClearFirst) {
            setResourceInternal(null);
        }
        if (errorDrawable != null) {
            setDrawable(errorDrawable);
        }
    }

    /**
     * Sets the given {@link android.graphics.drawable.Drawable} on the view using
     * {@link
     * android.widget.ImageView#setImageDrawable(android.graphics.drawable.Drawable)}.
     *
     * @param placeholder {@inheritDoc}
     */
    @Override
    public void onLoadCleared(@Nullable Drawable placeholder) {
        super.onLoadCleared(placeholder);
        if (animatable != null) {
            animatable.stop();
        }
        if (this.mClearFirst) {
            setResourceInternal(null);
        }
        if (placeholder != null) {
            setDrawable(placeholder);
        }
    }

    @Override
    public void onResourceReady(@NonNull Drawable resource, @Nullable Transition<? super Drawable> transition) {
        if (transition == null || !transition.transition(resource, this)) {
            setResourceInternal(resource);
        } else {
            maybeUpdateAnimatable(resource);
        }
    }

    @Override
    public void onStart() {
        if (animatable != null) {
            animatable.start();
        }
    }

    @Override
    public void onStop() {
        if (animatable != null) {
            animatable.stop();
        }
    }

    private void setResourceInternal(@Nullable Drawable resource) {
        // Order matters here. Set the resource first to make sure that the Drawable has
        // a valid and
        // non-null Callback before starting it.
        setResource(resource);
        maybeUpdateAnimatable(resource);
    }

    private void maybeUpdateAnimatable(@Nullable Drawable resource) {
        if (resource instanceof Animatable) {
            animatable = (Animatable) resource;
            animatable.start();
        } else {
            animatable = null;
        }
    }

    protected void setResource(@Nullable Drawable resource) {
        view.setImageDrawable(resource);
    }
}