package com.bumptech.glide.load.engine.cache;

import android.util.Log;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.bumptech.glide.disklrucache.DiskLruCache;
import com.bumptech.glide.disklrucache.DiskLruCache.Value;
import com.bumptech.glide.load.Key;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * A disk cache wrapper that tracks cache keys for efficient querying and eviction based on
 * model/signature pairs. Similar to ModelSignatureMemoryCache but for disk cache.
 *
 * Features:
 * - Tracks all cached keys with their string representations
 * - Supports querying existence by model and signature
 * - Supports bulk eviction by model/signature or signature version
 * - Thread-safe operations with minimal overhead
 */
public class ModelSignatureDiskLruCacheWrapper implements DiskCache {
  private static final String TAG = "JS";

  private static final int APP_VERSION = 1;
  private static final int VALUE_COUNT = 1;
  private static ModelSignatureDiskLruCacheWrapper wrapper;

  private final SafeKeyGenerator safeKeyGenerator;
  private final File directory;
  private final long maxSize;
  private final DiskCacheWriteLocker writeLocker = new DiskCacheWriteLocker();
  private DiskLruCache diskLruCache;
  
  // Index of safeKey -> original key string for efficient lookup
  // This allows us to query and evict based on model/signature without iterating the entire cache
  private final Map<String, String> keyIndex = new ConcurrentHashMap<>();

  /**
   * Get a DiskCache in the given directory and size. If a disk cache has already been created with
   * a different directory and/or size, it will be returned instead and the new arguments will be
   * ignored.
   *
   * @param directory The directory for the disk cache
   * @param maxSize The max size for the disk cache
   * @return The new disk cache with the given arguments, or the current cache if one already exists
   * @deprecated Use {@link #create(File, long)} to create a new cache with the specified arguments.
   */
  @SuppressWarnings("deprecation")
  @Deprecated
  public static synchronized DiskCache get(File directory, long maxSize) {
    if (wrapper == null) {
      wrapper = new ModelSignatureDiskLruCacheWrapper(directory, maxSize);
    }
    return wrapper;
  }

  /**
   * Create a new DiskCache in the given directory with a specified max size.
   *
   * @param directory The directory for the disk cache
   * @param maxSize The max size for the disk cache
   * @return The new disk cache with the given arguments
   */
  @SuppressWarnings("deprecation")
  public static ModelSignatureDiskLruCacheWrapper create(File directory, long maxSize) {
    return new ModelSignatureDiskLruCacheWrapper(directory, maxSize);
  }

  /**
   * @deprecated Do not extend this class.
   */
  @Deprecated
  // Deprecated public API.
  @SuppressWarnings({"WeakerAccess", "DeprecatedIsStillUsed"})
  protected ModelSignatureDiskLruCacheWrapper(File directory, long maxSize) {
    this.directory = directory;
    this.maxSize = maxSize;
    this.safeKeyGenerator = new SafeKeyGenerator();
  }

  private synchronized DiskLruCache getDiskCache() throws IOException {
    if (diskLruCache == null) {
      diskLruCache = DiskLruCache.open(directory, APP_VERSION, VALUE_COUNT, maxSize);
    }
    return diskLruCache;
  }

  @Override
  public File get(Key key) {
    String safeKey = safeKeyGenerator.getSafeKey(key);
    File result = null;
    try {
      // It is possible that the there will be a put in between these two gets. If so that shouldn't
      // be a problem because we will always put the same value at the same key so our input streams
      // will still represent the same data.
      final DiskLruCache.Value value = getDiskCache().get(safeKey);
    // Log.v(TAG, "DiskCache Get: " + safeKey + " for Key: " + key + " found: " + value);
      if (value != null) {
        result = value.getFile(0);
      }
    } catch (IOException e) {
      if (Log.isLoggable(TAG, Log.WARN)) {
        Log.w(TAG, "Unable to get from disk cache", e);
      }
    }
    return result;
  }

  @Override
  public void put(Key key, Writer writer) {
    // We want to make sure that puts block so that data is available when put completes. We may
    // actually not write any data if we find that data is written by the time we acquire the lock.
    String safeKey = safeKeyGenerator.getSafeKey(key);
    writeLocker.acquire(safeKey);
    try {
      try {
        // We assume we only need to put once, so if data was written while we were trying to get
        // the lock, we can simply abort.
        DiskLruCache diskCache = getDiskCache();
        Value current = diskCache.get(safeKey);
        if (current != null) {
          return;
        }

        DiskLruCache.Editor editor = diskCache.edit(safeKey);
        if (editor == null) {
          throw new IllegalStateException("Had two simultaneous puts for: " + safeKey);
        }
        try {
          File file = editor.getFile(0);
          if (writer.write(file)) {
            editor.commit();
            // Track the key in our index after successful write
            keyIndex.put(safeKey, key.toString());
      // Log.w(TAG, "DiskCache Put: " + safeKey + " for Key: " + key + " size: " + keyIndex.size());
          }
        } finally {
          editor.abortUnlessCommitted();
        }
      } catch (IOException e) {
        if (Log.isLoggable(TAG, Log.WARN)) {
          Log.w(TAG, "Unable to put to disk cache", e);
        }
      }
    } finally {
      writeLocker.release(safeKey);
    }
  }

  @Override
  public void delete(Key key) {
    String safeKey = safeKeyGenerator.getSafeKey(key);
    try {
      getDiskCache().remove(safeKey);
      // Remove from index
      keyIndex.remove(safeKey);
      // Log.w(TAG, "DiskCache deleted: " + safeKey + " size: " +  keyIndex.size());
    } catch (IOException e) {
      if (Log.isLoggable(TAG, Log.WARN)) {
        Log.w(TAG, "Unable to delete from disk cache", e);
      }
    }
  }

  @Override
  public synchronized void clear() {
    try {
      getDiskCache().delete();
      // Clear the index
      keyIndex.clear();
    } catch (IOException e) {
        Log.w(TAG, "Unable to clear disk cache or disk cache cleared externally", e);
    } finally {
      // Delete can close the cache but still throw. If we don't null out the disk cache here, every
      // subsequent request will try to act on a closed disk cache and fail. By nulling out the disk
      // cache we at least allow for attempts to open the cache in the future. See #2465.
      resetDiskCache();
    }
  }

  private synchronized void resetDiskCache() {
    diskLruCache = null;
  }

  /**
   * Check if an entry exists in the cache by model and signature.
   * This is more efficient than trying to get the actual file.
   *
   * @param model The model (e.g., URI)
   * @param signature The signature Key
   * @return true if at least one matching entry exists
   */
  public boolean containsByModelAndSignature(@NonNull Object model, @NonNull Key signature) {
    final String modelStr = model.toString();
    final String signatureStr = signature.toString();

    for (String keyStr : keyIndex.values()) {
        if (matchesModelAndSignature(keyStr, modelStr, signatureStr)) {
            return true;
        }
    }
    return false;
  }

  /**
   * Remove all entries matching the given model and signature.
   * This removes both raw (source) and transformed (resource) cache entries.
   *
   * @param model The model to match
   * @param signature The signature to match
   * @return Number of entries removed
   */
  public int removeByModelAndSignature(@NonNull Object model, @NonNull Key signature) {
    final String modelStr = model.toString();
    final String signatureStr = signature.toString();
    
    // Log.w(TAG, "DiskCache removeByModelAndSignature: model=" + modelStr + " signature=" + signatureStr + " cacheCount=" + keyIndex.size());

    List<String> safeKeysToRemove = new ArrayList<>();
    
    // Find all matching keys
    for (Map.Entry<String, String> entry : keyIndex.entrySet()) {
      String keyStr = entry.getValue();
      if (matchesModelAndSignature(keyStr, modelStr, signatureStr)) {
        safeKeysToRemove.add(entry.getKey());
      }
    }

    // Remove them from disk cache
    int removed = 0;
    for (String safeKey : safeKeysToRemove) {
      try {
        getDiskCache().remove(safeKey);
        keyIndex.remove(safeKey);
        removed++;
        // Log.v(TAG, "DiskCache removed: " + safeKey);
      } catch (IOException e) {
        Log.w(TAG, "Failed to remove disk cache entry: " + safeKey, e);
      }
    }

    // Log.w(TAG, "DiskCache removed " + removed + " entries for model/signature");
    return removed;
  }

  /**
   * Remove all entries that do NOT match the given signature.
   * Useful for cache invalidation when changing signature versions (e.g., v1 -> v2).
   *
   * @param currentSignature The current/valid signature to keep
   * @return Number of entries removed
   */
  public int removeAllExceptSignature(@NonNull Key currentSignature) {
    final String signatureStr = currentSignature.toString();
    
    List<String> safeKeysToRemove = new ArrayList<>();
    
    // Find all keys that don't match the current signature
    for (Map.Entry<String, String> entry : keyIndex.entrySet()) {
      String keyStr = entry.getValue();
      if (!keyStr.contains(signatureStr) && !keyStr.contains("signature=" + signatureStr)) {
        safeKeysToRemove.add(entry.getKey());
      }
    }

    // Remove them
    int removed = 0;
    for (String safeKey : safeKeysToRemove) {
      try {
        getDiskCache().remove(safeKey);
        keyIndex.remove(safeKey);
        removed++;
      } catch (IOException e) {
        Log.w(TAG, "Failed to remove disk cache entry: " + safeKey, e);
      }
    }

    // Log.i(TAG, "DiskCache removed " + removed + " entries with different signatures");
    return removed;
  }

  /**
   * Get statistics about the cache index.
   *
   * @return Array: [indexSize, diskCacheSize]
   */
  public long[] getStats() {
    long indexSize = keyIndex.size();
    long diskSize = 0;
    try {
      diskSize = getDiskCache().size();
    } catch (IOException e) {
      Log.w(TAG, "Failed to get disk cache size", e);
    }
    return new long[] { indexSize, diskSize };
  }

  /**
   * Helper method to check if a key string matches a model and signature.
   * Uses multiple matching strategies for robustness.
   */
  private boolean matchesModelAndSignature(String keyStr, String modelStr, String signatureStr) {
    // Strategy 1: Exact pattern matching for known key formats (e.g., DataCacheKey, ResourceCacheKey)
    if (keyStr.contains("model=" + modelStr) && keyStr.contains("signature=" + signatureStr)) {
      return true;
    }
    
    // Strategy 2: Substring matching (fallback for other key formats)
    // Only match if both model and signature are present
    if (keyStr.contains(modelStr) && keyStr.contains(signatureStr)) {
      return true;
    }
    
    return false;
  }
}