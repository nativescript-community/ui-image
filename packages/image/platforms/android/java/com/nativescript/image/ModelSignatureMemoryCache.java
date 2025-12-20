package com.nativescript.image;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.bumptech.glide.load.Key;
import com.bumptech.glide.load.engine.Resource;
import com.bumptech.glide.load.engine.cache.LruResourceCache;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.Arrays;

import android.util.Log;

/**
 * An LRU memory cache that keeps a small index of the string form of each Key so callers can
 * evict all entries matching a model + signature pair.
 *
 * Notes / limitations:
 * - This implementation indexes Key.toString() and matches by substring. It relies on
 *   EngineKey.toString() containing both the model and signature information (which current Glide
 *   versions do). This is somewhat fragile (internal toString formats may change across versions)
 *   but is safe and does not use reflection.
 * - To use it, install this cache via your AppGlideModule (see MyAppGlideModule.java below).
 * - When you call removeByModelAndSignature(model, signature) the code looks for cache keys whose
 *   toString() contains the model.toString() and signature.toString() values and removes them.
 */
public final class ModelSignatureMemoryCache extends LruResourceCache {
  // Map of the Key -> cached key string (avoid calling toString() repeatedly and to have a quick
  // snapshot of what's in cache). Entries are added on put and removed on remove / eviction.
  private final Map<Key, String> keyStrings = new ConcurrentHashMap<>();

  public ModelSignatureMemoryCache(long maxSizeBytes) {
    super(maxSizeBytes);
    Log.i("JS", "ModelSignatureMemoryCache " + maxSizeBytes);
  }
  @Override
  public void trimMemory(int level) {
     Log.i("JS", "trimMemory " + level + " "  + getMaxSize());
   super.trimMemory(level);
  }

  @Nullable
  @Override
  public Resource<?> put(@NonNull Key key, @Nullable Resource<?> resource) {
    // Save string representation for indexing before delegating.
    Log.i("JS", "MemoryCache put " + key.toString() + getSize(resource) + " " + Arrays.toString(new Throwable().getStackTrace()).replace( ',', '\n' ));
    keyStrings.put(key, key.toString());
    Log.i("JS", "MemoryCache put " + key.toString() + " "  + keyStrings.size());
    return super.put(key, resource);
  }

  @Nullable
  @Override
  public Resource<?> remove(@NonNull Key key) {
    Log.i("JS", "MemoryCache remove " + key + " " +  Arrays.toString(new Throwable().getStackTrace()).replace( ',', '\n' ));
    keyStrings.remove(key);
    return super.remove(key);
  }

  @Override
  protected void onItemEvicted(@NonNull Key key, @Nullable Resource<?> item) {
    // Called by the LRU when an item is evicted; keep our index in sync.
    Log.i("JS", "MemoryCache onItemEvicted " + key + " "  + getMaxSize() + " " + Arrays.toString(new Throwable().getStackTrace()).replace( ',', '\n' ));
    keyStrings.remove(key);
    super.onItemEvicted(key, item);
  }

  /**
   * Remove all entries whose underlying Key looks like it was created for the given model and
   * signature. Both checks are substring based against Key.toString().
   *
   * @param model The model (for example the URI or whatever you passed to .load(...)).
   *              The code uses model.toString() to match keys.
   * @param signature The request signature (a Key, e.g. new ObjectKey(...)) as used in the
   *                  original request. Uses signature.toString() to match keys.
   * @return number of removed entries
   */
  public int removeByModelAndSignature(@NonNull Object model, @NonNull Key signature) {
    final String modelStr = model.toString();
    final String signatureStr = signature.toString();
          Log.i("JS", "ModelSignatureMemoryCache removeByModelAndSignature " + modelStr + " " +  signatureStr + " " +  keyStrings.size());

    List<Key> toRemove = new ArrayList<>();
    for (Map.Entry<Key, String> e : keyStrings.entrySet()) {
      String s = e.getValue();
      // There are two checks: a direct "model=" / "signature=" pattern check (matches EngineKey.toString
      // format currently used), and a fallback that simply checks both substrings exist. The first
      // reduces false positives.
      if ((s.contains("model=" + modelStr) && s.contains("signature=" + signatureStr))
          || (s.contains(modelStr) && s.contains(signatureStr))) {
        toRemove.add(e.getKey());
      }
    }

    for (Key k : toRemove) {
      remove(k);
    }
    return toRemove.size();
  }

  /**
   * Convenience method if you only have a model string (e.g. a URI) and a signature string.
   *
   * This is less type-safe (signatures should be Key), but may be helpful in some cases.
   */
  public int removeByModelAndSignatureStrings(@NonNull String modelString, @NonNull String signatureString) {
    List<Key> toRemove = new ArrayList<>();
    for (Map.Entry<Key, String> e : keyStrings.entrySet()) {
      String s = e.getValue();
      if ((s.contains("model=" + modelString) && s.contains("signature=" + signatureString))
          || (s.contains(modelString) && s.contains(signatureString))) {
        toRemove.add(e.getKey());
      }
    }
    for (Key k : toRemove) {
      remove(k);
    }
    return toRemove.size();
  }

  /**
   * Test whether there is at least one entry in the memory cache that matches the given
   * model and signature.
   *
   * Matching is performed by checking the cached Key.toString() for substrings derived from the
   * provided model and signature (same heuristic used by removeByModelAndSignature).
   *
   * @param model The model object used in the original request (e.g. the URI or model instance).
   * @param signature The signature Key used in the original request.
   * @return true if at least one matching entry exists in memory cache.
   */
  public boolean containsByModelAndSignature(@NonNull Object model, @NonNull Key signature) {
    final String modelStr = model.toString();
    final String signatureStr = signature.toString();
          Log.i("JS", "ModelSignatureMemoryCache containsByModelAndSignature " + modelStr + " " +  signatureStr + " " +  keyStrings.size());

    for (String s : keyStrings.values()) {
          Log.i("JS", "ModelSignatureMemoryCache containsByModelAndSignature1 " + s);
      if ((s.contains("model=" + modelStr) && s.contains("signature=" + signatureStr))
          || (s.contains(modelStr) && s.contains(signatureStr))) {
        return true;
      }
    }
    return false;
  }

  /**
   * Convenience version that accepts precomputed strings for model and signature.
   *
   * @param modelString model.toString() or similar representation.
   * @param signatureString signature.toString() or similar representation.
   * @return true if at least one matching entry exists in memory cache.
   */
  public boolean containsByModelAndSignatureStrings(@NonNull String modelString, @NonNull String signatureString) {
    for (String s : keyStrings.values()) {
      if ((s.contains("model=" + modelString) && s.contains("signature=" + signatureString))
          || (s.contains(modelString) && s.contains(signatureString))) {
        return true;
      }
    }
    return false;
  }
}