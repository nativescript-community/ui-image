package com.nativescript.image;

import com.bumptech.glide.load.Key;
import com.bumptech.glide.load.Options;
import com.bumptech.glide.load.Transformation;
import com.bumptech.glide.load.model.GlideUrl;
import com.bumptech.glide.request.RequestListener;
import com.bumptech.glide.request.target.Target;
import android.util.Log;

/**
 * RequestListener that records the disk & transformation key bytes used for a
 * request
 * and persists them via EvictionManager so later evictions / presence checks
 * can recreate
 * the exact disk keys without needing to recreate Transformation objects.
 *
 * Usage:
 * - Preferred: pass a RequestOptions instance; this listener will extract the
 * internal Options
 * via ExtractRequestOptions (cached reflection) so your existing RequestOptions
 * usage continues to work.
 * - Alternative: pass an Options instance directly if you already have it.
 *
 * The listener returns false from callbacks so it does not short-circuit other
 * listeners or Glide's handling.
 */
public class SaveKeysRequestListener implements RequestListener<Object> {
    private static final String TAG = "SaveKeysRequestListener";
    
    private final String id;
    private final Object model;
    private final Key fallbackSourceKey;
    private final Key signature;
    private final int width;
    private final int height;
    private final Transformation<?> transform;
    private final Options options;
    private final Class<?> decodedResourceClass;

    /**
     * Construct directly with an Options instance.
     */
    public SaveKeysRequestListener(
            String id,
            Object model,
            Key fallbackSourceKey,
            Key signature,
            int width,
            int height,
            Transformation<?> transform,
            com.bumptech.glide.request.RequestOptions options,
            Class<?> decodedResourceClass) {
        this.id = id;
        this.model = model;
        this.fallbackSourceKey = fallbackSourceKey;
        this.signature = signature;
        this.width = width;
        this.height = height;
        this.transform = transform;
        this.options = (options == null) ? new Options() : ExtractRequestOptions.getFrom(options);
        this.decodedResourceClass = decodedResourceClass;
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

            // Determine the actual decoded resource class from the resource if not provided
            Class<?> actualDecodedResourceClass = this.decodedResourceClass;
            if (actualDecodedResourceClass == null && resource != null) {
                actualDecodedResourceClass = resource.getClass();
                Log.i(TAG, "onResourceReady: detected resource class=" + actualDecodedResourceClass.getName());
            }

            Log.i(TAG, "onResourceReady: id=" + normalizedId + 
                      " sourceKey=" + actualSourceKey.getClass().getSimpleName() +
                      " model=" + (model != null ? model.getClass().getSimpleName() : "null") +
                      " resourceClass=" + (actualDecodedResourceClass != null ? actualDecodedResourceClass.getSimpleName() : "null"));

            // Compute transformation bytes
            byte[] transformBytes = null;
            if (this.transform != null) {
                try {
                    RecordingDigest d = new RecordingDigest();
                    this.transform.updateDiskCacheKey(d);
                    transformBytes = d.digest();
                } catch (Throwable t) {
                    Log.w(TAG, "Failed to record transform bytes", t);
                }
            }

            // Compute options bytes
            byte[] optionsBytes = null;
            try {
                RecordingDigest d2 = new RecordingDigest();
                this.options.updateDiskCacheKey(d2);
                optionsBytes = d2.digest();
            } catch (Throwable t) {
                Log.w(TAG, "Failed to record options bytes", t);
            }

            CacheKeyStore.StoredKeys s = new CacheKeyStore.StoredKeys(
                actualSourceKey,
                this.signature,
                this.width,
                this.height,
                this.transform,
                transformBytes,
                actualDecodedResourceClass,
                this.options,
                optionsBytes
            );

            EvictionManager.get().saveKeys(normalizedId, s);
            Log.i(TAG, "Keys saved for: " + normalizedId + " s=" +s);
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