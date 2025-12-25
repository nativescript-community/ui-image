package com.nativescript.image;

import com.bumptech.glide.load.Key;
import com.bumptech.glide.load.Options;
import com.bumptech.glide.load.Transformation;
import com.bumptech.glide.load.model.GlideUrl;
import com.bumptech.glide.request.RequestListener;
import com.bumptech.glide.request.target.Target;
import android.util.Log;

public class SaveKeysRequestListener implements RequestListener<Object> {
    private static final String TAG = "SaveKeysRequestListener";
    
    private final String id;
    private final Object model;
    private final Key fallbackSourceKey;
    private final Key signature;
    /**
     * Construct directly with an Options instance.
     */
    public SaveKeysRequestListener(
            String id,
            Object model,
            Key fallbackSourceKey,
            Key signature) {
        this.id = id;
        this.model = model;
        this.fallbackSourceKey = fallbackSourceKey;
        this.signature = signature;
    }

    private static String normalizeIdFromModel(Object model, String fallback) {
        if (model == null) {
            return fallback;
        }
        if (model instanceof GlideUrl) {
            try {
                return ((GlideUrl) model).toStringUrl();
            } catch (Throwable t) {
                return String.valueOf(model);
            }
        }
        return String.valueOf(model);
    }

    private static Key sourceKeyFromModel(Object model, Key fallback) {
        // GlideUrl (including CustomGlideUrl) implements Key
        if (model instanceof Key) {
            return (Key) model;
        }
        // For string models, fallback to ObjectKey
        return fallback;
    }

    @Override
    public boolean onResourceReady(Object resource, Object model, Target<Object> target, 
                                   com.bumptech.glide.load.DataSource dataSource, 
                                   boolean isFirst) {
        try {
            // CRITICAL: Use the actual model passed to onResourceReady, not constructor model
            // This ensures we capture the exact key Glide used
            final String normalizedId = normalizeIdFromModel(model, this.id);
            final Key actualSourceKey = sourceKeyFromModel(model, this.fallbackSourceKey);

            // Log.i(TAG, "onResourceReady: id=" + normalizedId + 
            //           " sourceKey=" + actualSourceKey +
            //           " model=" + model);


            CacheKeyStore.StoredKeys s = new CacheKeyStore.StoredKeys(
                actualSourceKey,
                this.signature
            );

            EvictionManager.get().saveKeys(normalizedId, s);
            // Log.i(TAG, "Keys saved for: " + normalizedId + " s=" +s);
        } catch (Throwable t) {
            Log.e(TAG, "Failed to save keys", t);
        }

        return false; // Don't consume the event
    }

    @Override
    public boolean onLoadFailed(com.bumptech.glide.load.engine.GlideException e, 
                               Object model, Target<Object> target, boolean isFirstResource) {
        return false; // Don't consume
    }
}