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
 */
public final class ModelSignatureMemoryCache extends LruResourceCache {
  private static final String TAG = "JS";
 
  // Map of the Key -> cached key string (avoid calling toString() repeatedly and to have a quick
  // snapshot of what's in cache). Entries are added on put and removed on remove / eviction.
  private final Map<Key, String> keyStrings = new ConcurrentHashMap<>();

  public ModelSignatureMemoryCache(long maxSizeBytes) {
    super(maxSizeBytes);
  }
  @Override
  public void trimMemory(int level) {
   super.trimMemory(level);
  }

  @Nullable
  @Override
  public Resource<?> put(@NonNull Key key, @Nullable Resource<?> resource) {
    // Save string representation for indexing before delegating.
    keyStrings.put(key, key.toString());
    // Log.w(TAG, "MemoryCache put " + key.toString() + " "  + keyStrings.size());
    return super.put(key, resource);
  }

  @Nullable
  @Override
  public Resource<?> remove(@NonNull Key key) {
    // Log.w(TAG, "MemoryCache remove " + key + " "  + keyStrings.size());
    keyStrings.remove(key);
    return super.remove(key);
  }

  @Override
  protected void onItemEvicted(@NonNull Key key, @Nullable Resource<?> item) {
    // Called by the LRU when an item is evicted; keep our index in sync.
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
    final String modelCleanStr = (modelStr.startsWith("ObjectKey{object=") && modelStr.endsWith("}")) ? modelStr.substring(17, modelStr.length() - 1) : null;
    final String signatureStr = signature.toString();

    List<Key> toRemove = new ArrayList<>();
    for (Map.Entry<Key, String> e : keyStrings.entrySet()) {
      String s = e.getValue();
// There are two checks: a direct "model=" / "signature=" pattern check (matches EngineKey.toString
      // format currently used), and a fallback that simply checks both substrings exist. The first
      // reduces false positives.
      if (((s.contains("model=" + modelStr) || (modelCleanStr != null && s.contains("model=" + modelCleanStr)))&& s.contains("signature=" + signatureStr))) {
        toRemove.add(e.getKey());
      }
    }
    // Log.w(TAG, "ModelSignatureMemoryCache removeByModelAndSignature will remove " + toRemove.size() + " items from " + keyStrings.size() );

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
  public int removeByModelAndSignatureStrings(@NonNull String modelStr, @NonNull String signatureStr) {
    List<Key> toRemove = new ArrayList<>();
    final String modelCleanStr = (modelStr.startsWith("ObjectKey{object=") && modelStr.endsWith("}")) ? modelStr.substring(17, modelStr.length() - 1) : null;
    for (Map.Entry<Key, String> e : keyStrings.entrySet()) {
      String s = e.getValue();
      if (((s.contains("model=" + modelStr) || (modelCleanStr != null && s.contains("model=" + modelCleanStr)))&& s.contains("signature=" + signatureStr))) {
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
    final String modelCleanStr = (modelStr.startsWith("ObjectKey{object=") && modelStr.endsWith("}")) ? modelStr.substring(17, modelStr.length() - 1) : null;
    final String signatureStr = signature.toString();
    // Log.i(TAG, "ModelSignatureMemoryCache containsByModelAndSignature " + modelStr + " " +  signatureStr + " " +  keyStrings.size());

    for (String s : keyStrings.values()) {
      if (((s.contains("model=" + modelStr) || (modelCleanStr != null && s.contains("model=" + modelCleanStr)))&& s.contains("signature=" + signatureStr))) {
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
  public boolean containsByModelAndSignatureStrings(@NonNull String modelStr, @NonNull String signatureStr) {
    final String modelCleanStr = (modelStr.startsWith("ObjectKey{object=") && modelStr.endsWith("}")) ? modelStr.substring(17, modelStr.length() - 1) : null;
    for (String s : keyStrings.values()) {
      if (((s.contains("model=" + modelStr) || (modelCleanStr != null && s.contains("model=" + modelCleanStr)))&& s.contains("signature=" + signatureStr))) {
        return true;
      }
    }
    return false;
  }
}