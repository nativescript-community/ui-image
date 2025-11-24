package com.nativescript.image;

import android.graphics.drawable.Drawable;
import androidx.annotation.NonNull;

import com.bumptech.glide.load.DataSource;
import com.bumptech.glide.request.transition.DrawableCrossFadeFactory;
import com.bumptech.glide.request.transition.NoTransition;
import com.bumptech.glide.request.transition.Transition;

import android.util.Log;
/**
 * Delegates to the parent cross-fade behaviour but only returns a cross-fade
 * transition for REMOTE loads when `onlyOnNetwork` is true; otherwise returns NoTransition.
 */
public class ConditionalCrossFadeFactory extends DrawableCrossFadeFactory {
    private final boolean onlyOnNetwork;

    public ConditionalCrossFadeFactory(int durationMs, boolean onlyOnNetwork) {
        // Call the base class constructor which requires (durationMs, crossFadeEnabled)
        super(durationMs, true);
        this.onlyOnNetwork = onlyOnNetwork;
    }

    @NonNull
    @Override
    public Transition<Drawable> build(DataSource dataSource, boolean isFirstResource) {
        if (this.onlyOnNetwork && dataSource != DataSource.REMOTE) {
            return NoTransition.get();
        }
        return super.build(DataSource.REMOTE, isFirstResource);
    }
}