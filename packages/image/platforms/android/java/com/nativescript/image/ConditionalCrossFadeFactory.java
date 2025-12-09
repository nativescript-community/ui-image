package com.nativescript.image;

import android.graphics.drawable.Drawable;
import androidx.annotation.NonNull;

import com.bumptech.glide.load.DataSource;
import com.bumptech.glide.request.transition.NoTransition;
import com.bumptech.glide.request.transition.Transition;
import com.bumptech.glide.request.transition.DrawableCrossFadeFactory;

import android.util.Log;
/**
 * Delegates to the parent cross-fade behaviour but only returns a cross-fade
 * transition for REMOTE loads when `onlyOnNetwork` is true; otherwise returns NoTransition.
 */
public class ConditionalCrossFadeFactory extends DrawableCrossFadeFactory {
    private final boolean onlyOnNetwork;
    private final int duration;
    private MatrixPreservingCrossFadeTransition resourceTransition;

    public ConditionalCrossFadeFactory(int duration, boolean onlyOnNetwork) {
        // Call the base class constructor which requires (durationMs, crossFadeEnabled)
        super(duration, true);
        this.duration = duration;
        this.onlyOnNetwork = onlyOnNetwork;
    }
    private Transition<Drawable> getResourceTransition() {
        if (resourceTransition == null) {
            resourceTransition = new MatrixPreservingCrossFadeTransition(duration);
        }
        return resourceTransition;
    }
    @NonNull
    @Override
    public Transition<Drawable> build(DataSource dataSource, boolean isFirstResource) {
        if (this.onlyOnNetwork && dataSource != DataSource.REMOTE) {
            return NoTransition.get();
        }
        return getResourceTransition();
    }
}