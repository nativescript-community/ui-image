package com.nativescript.image;

import android.graphics.drawable.Drawable;
import android.util.Log;

import androidx.annotation.Nullable;

import com.bumptech.glide.load.Key;
import com.bumptech.glide.load.Options;
import com.bumptech.glide.load.Transformation;
import com.bumptech.glide.request.RequestListener;
import com.bumptech.glide.request.RequestOptions;
import com.bumptech.glide.request.target.Target;
import com.bumptech.glide.load.engine.GlideException;

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
public final class SaveKeysRequestListener implements RequestListener<Drawable> {
  private static final String TAG = "SaveKeysRequestListener";

  private final String id; // canonical id you use to later evict (typically the URL string or normalized
                           // model id)
  private final Object model; // the same model object you pass to Glide.load(...)
  private final Key sourceKey;
  private final Key signature;
  private final int width;
  private final int height;
  @Nullable
  private final Transformation<?> transformation;
  private final Options options;
  private final Class<?> decodedResourceClass;

  /**
   * Construct directly with an Options instance.
   */
  public SaveKeysRequestListener(
      String id,
      Object model,
      Key sourceKey,
      Key signature,
      int width,
      int height,
      @Nullable Transformation<?> transformation,
      RequestOptions options,
      Class<?> decodedResourceClass) {
    this.id = id;
    this.model = model;
    this.sourceKey = sourceKey;
    this.signature = signature;
    this.width = width;
    this.height = height;
    this.transformation = transformation;
    this.options = (options == null) ? new Options() : ExtractRequestOptions.getFrom(options);
    this.decodedResourceClass = (decodedResourceClass == null) ? Drawable.class : decodedResourceClass;
  }

  @Override
  public boolean onLoadFailed(GlideException e, Object model, Target<Drawable> target, boolean isFirstResource) {
    // We don't persist anything on failure (could be added). Do not consume the
    // event.
    return false;
  }

  @Override
  public boolean onResourceReady(Drawable resource, Object model, Target<Drawable> target,
      com.bumptech.glide.load.DataSource dataSource, boolean isFirstResource) {
    try {
      byte[] transformationBytes = null;
      byte[] optionsBytes = null;

      // Record transformation key bytes if we have a transformation instance
      if (transformation != null) {
        try {
          RecordingDigest rd = new RecordingDigest();
          transformation.updateDiskCacheKey(rd);
          transformationBytes = rd.digest();
        } catch (Throwable t) {
          Log.w(TAG, "Failed to record transformation key bytes for id=" + id, t);
        }
      }

      // Record options key bytes (Options.updateDiskCacheKey)
      try {
        RecordingDigest rd2 = new RecordingDigest();
        options.updateDiskCacheKey(rd2);
        optionsBytes = rd2.digest();
      } catch (Throwable t) {
        Log.w(TAG, "Failed to record options key bytes for id=" + id, t);
      }

      // Attempt to preserve existing engineKey if present
      com.bumptech.glide.load.Key engineKeyToKeep = null;

      try {
        CacheKeyStore.StoredKeys existing = null;
        if (EvictionManager.get() != null) {
          // use the public API to fetch current stored keys for this id (may be
          // persistent or in-memory)
          existing = EvictionManager.get().getKeyStore().get(id);
        }
        if (existing != null && existing.engineKey != null) {
          engineKeyToKeep = existing.engineKey;
        }
      } catch (Throwable t) {
        Log.w(TAG, "Failed to read existing stored keys to preserve engineKey for id=" + id, t);
      }

      // Build StoredKeys and persist via EvictionManager
      CacheKeyStore.StoredKeys stored = new CacheKeyStore.StoredKeys(
          sourceKey,
          signature,
          width,
          height,
          transformation, // may be null; kept for in-process fallback
          transformationBytes, // recorded transformation bytes (preferred)
          decodedResourceClass,
          options,
          optionsBytes,
          engineKeyToKeep // preserve any engineKey we found
      );

      EvictionManager.get().saveKeys(id, stored);
    } catch (Throwable t) {
      Log.w(TAG, "Unexpected error in SaveKeysRequestListener.onResourceReady for id=" + id, t);
    }
    // Do not consume the event; allow other listeners and Glide to continue normal
    // handling.
    return false;
  }
}