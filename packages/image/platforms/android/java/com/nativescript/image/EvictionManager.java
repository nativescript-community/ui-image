package com.nativescript.image;

import android.os.Handler;
import android.os.Looper;
import androidx.annotation.GuardedBy;
import androidx.annotation.MainThread;
import androidx.annotation.Nullable;
import com.bumptech.glide.load.Key;
import com.bumptech.glide.load.Options;
import com.bumptech.glide.load.Transformation;
import com.bumptech.glide.load.engine.cache.DiskCache;
import com.bumptech.glide.load.engine.cache.MemoryCache;
import com.bumptech.glide.load.engine.cache.LruResourceCache;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicReference;

import android.util.Log;

/**
 * EvictionManager (updated)
 *
 * - adds clearDiskCache/clearMemory/clearAll with callback overloads
 * - adds disk-only / memory-only evict methods
 * - uses recorded transformation/options key bytes to recreate transformed
 * cache keys
 * - EvictionCallback now reports an optional Exception (first encountered) in
 * addition to success flag
 *
 * Notes:
 * - Disk operations run on a background executor.
 * - Memory ops run on the main thread.
 * - Callbacks are always posted on the main thread.
 */
public final class EvictionManager {
  private static final String TAG = "JS";
  private static final EvictionManager INSTANCE = new EvictionManager();

  private final ExecutorService diskExecutor = Executors.newSingleThreadExecutor();
  private final Handler mainHandler = new Handler(Looper.getMainLooper());

  @GuardedBy("this")
  private DiskCache diskCache;
  @GuardedBy("this")
  private LruResourceCache memoryCache;

  // in-memory store for captured info and engineKey object
  private final CacheKeyStore inMemoryKeyStore = new CacheKeyStore();

  // optional persistent store (SharedPref). If null, fallback to in-memory only.
  @Nullable
  private SharedPrefCacheKeyStore persistentStore;

  private EvictionManager() {
  }

  public static EvictionManager get() {
    return INSTANCE;
  }

  public synchronized void setDiskCache(DiskCache diskCache) {
    this.diskCache = diskCache;
  }

  public synchronized void setMemoryCache(LruResourceCache memoryCache) {
    this.memoryCache = memoryCache;
  }

  public synchronized void setPersistentStore(@Nullable SharedPrefCacheKeyStore store) {
    this.persistentStore = store;
  }

  /**
   * Expose the in-memory store so callers/listeners can put engineKey objects
   * there.
   */
  public CacheKeyStore getKeyStore() {
    if (persistentStore != null) {
      return persistentStore;
    }
    return inMemoryKeyStore;
  }

  /**
   * Save keys (mirrors into persistent store if configured).
   */
  public synchronized void saveKeys(final String id, final CacheKeyStore.StoredKeys newStored) {
    if (id == null || newStored == null) {
      Log.w(TAG, "saveKeys called with null id or newStored");
      return;
    }

    try {
      // 1) Load existing stored keys (check in-memory first to get engineKey)
      CacheKeyStore.StoredKeys existing = inMemoryKeyStore.get(id);
      if (existing == null && persistentStore != null) {
        existing = persistentStore.get(id);
      }

      // 2) Always preserve engineKey from existing if newStored doesn't have one
      // This ensures CapturingEngineKeyFactory's engineKey is not lost when
      // SaveKeysRequestListener overwrites with more complete data
      CacheKeyStore.StoredKeys toPersist = newStored;
      if (existing != null && existing.engineKey != null && newStored.engineKey == null) {
        Log.i("JS", "saveKeys: preserving existing engineKey for " + id);
        toPersist = new CacheKeyStore.StoredKeys(
            newStored.sourceKey,
            newStored.signature,
            newStored.width,
            newStored.height,
            newStored.transformation,
            newStored.transformationKeyBytes,
            newStored.decodedResourceClass,
            newStored.options,
            newStored.optionsKeyBytes,
            existing.engineKey // preserve captured engine key
        );
      }

      Log.i(TAG, "saveKeys final: " + id + 
               " hasEngineKey=" + (toPersist.engineKey != null) + 
               " sourceKey=" + (toPersist.sourceKey != null ? toPersist.sourceKey.getClass().getSimpleName() : "null"));
      
      // 4) Save to both stores
      inMemoryKeyStore.put(id, toPersist);
      if (persistentStore != null) {
        persistentStore.put(id, toPersist);
      }
    } catch (Throwable t) {
      Log.w(TAG, "saveKeys failed for id=" + id, t);
    }
  }

  /**
   * Eviction completion callback (always invoked on main thread).
   *
   * The second argument is the first Exception encountered during the operation
   * (if any).
   */
  public interface EvictionCallback {
    void onComplete(boolean success, @Nullable Exception error);
  }

  /** Disk presence callback for async check. */
  public interface DiskPresenceCallback {
    void onResult(boolean sourcePresent, boolean transformedPresent);
  }

  // -----------------------
  // New: clear APIs
  // -----------------------

  /**
   * Clear the entire disk cache. Runs on a background thread. Callback invoked on
   * main thread.
   */
  public void clearDiskCache(@Nullable final EvictionCallback callback) {
    diskExecutor.execute(() -> {
      boolean success = true;
      Exception ex = null;
      DiskCache dc;
      synchronized (EvictionManager.this) {
        dc = diskCache;
      }
      if (dc != null) {
        try {
          dc.clear();
        } catch (Exception e) {
          success = false;
          ex = e;
        }
      }
      if (persistentStore != null) {
          persistentStore.clearAll();
        }
      if (callback != null) {
        final boolean finalSuccess = success;
        final Exception finalEx = ex;
        mainHandler.post(() -> callback.onComplete(finalSuccess, finalEx));
      }
    });
  }

  /** Clear disk cache without callback. */
  public void clearDiskCache() {
    clearDiskCache(null);
  }

  /**
   * Clear the entire memory cache. This must be invoked on the main thread (we
   * post to main to
   * guarantee it). Callback invoked on main thread.
   */
  public void clearMemory(@Nullable final EvictionCallback callback) {
    mainHandler.post(() -> {
      boolean success = true;
      Exception ex = null;
      LruResourceCache mc;
      synchronized (EvictionManager.this) {
        mc = memoryCache;
      }
      if (mc != null) {
        try {
          mc.clearMemory();
        } catch (Exception e) {
          success = false;
          ex = e;
        }
      }
      inMemoryKeyStore.clearAll();
      if (callback != null) {
        callback.onComplete(success, ex);
      }
    });
  }

  /** Clear memory cache without callback. */
  public void clearMemory() {
    clearMemory(null);
  }

  /**
   * Clear both disk and memory caches. Disk clear runs first on background
   * executor; when disk clear
   * finishes we clear memory on the main thread. Callback invoked on main with
   * combined success and
   * the first exception encountered (if any).
   */
  public void clearAll(@Nullable final EvictionCallback callback) {
    diskExecutor.execute(() -> {
      boolean diskSuccess = true;
      Exception firstEx = null;
      DiskCache dc;
      synchronized (EvictionManager.this) {
        dc = diskCache;
      }
      if (dc != null) {
        try {
          dc.clear();
        } catch (Exception e) {
          diskSuccess = false;
          firstEx = e;
        }
      }
      final boolean finalDiskSuccess = diskSuccess;
      final Exception finalFirstEx = firstEx;
      mainHandler.post(() -> {
        boolean memSuccess = true;
        Exception memEx = null;
        LruResourceCache mc;
        synchronized (EvictionManager.this) {
          mc = memoryCache;
        }
        if (mc != null) {
          try {
            mc.clearMemory();
          } catch (Exception e) {
            memSuccess = false;
            if (finalFirstEx == null)
              memEx = e;
          }
        }
        inMemoryKeyStore.clearAll();
        boolean combined = finalDiskSuccess && memSuccess;
        Exception combinedEx = finalFirstEx != null ? finalFirstEx : memEx;
        if (persistentStore != null) {
          persistentStore.clearAll();
        }
        if (callback != null)
          callback.onComplete(combined, combinedEx);
      });
    });
  }

  /** Clear both disk and memory without callback. */
  public void clearAll() {
    clearAll(null);
  }

  // -----------------------
  // Eviction-by-id APIs
  // -----------------------

  /**
   * Evict both disk (source + transformed) and memory for id. Callback invoked on
   * main thread.
   */
  public void evictAllForId(final String id, @Nullable final EvictionCallback callback) {
    final CacheKeyStore.StoredKeys s = readStoredKeysPreferPersistent(id);
    if (s == null) {
      // fallback conservative attempt (source only)
      evictDiskForId(id, callback);
      return;
    }
    final byte[] transformationBytes = getTransformationBytesFromStoredKeys(s);
    final byte[] optionsBytes = s.optionsKeyBytes;
    performEvictionTasks(
        s.sourceKey,
        s.signature,
        s.width,
        s.height,
        transformationBytes,
        s.decodedResourceClass,
        optionsBytes,
        s.engineKey,
        callback);
  }

  /** Backwards-compatible no-callback variant */
  public void evictAllForId(final String id) {
    evictAllForId(id, null);
  }

  /**
   * Evict from disk (source + transformed). Callback invoked on main thread.
   */
  public void evictDiskForId(final String id, @Nullable final EvictionCallback callback) {
    final CacheKeyStore.StoredKeys s = readStoredKeysPreferPersistent(id);
    if (s == null) {
      // fallback to deleting source by id-only ObjectKey
      final Key fallbackSource = new com.bumptech.glide.signature.ObjectKey(id);
      diskExecutor.execute(() -> {
        boolean success = true;
        Exception ex = null;
        DiskCache dc;
        synchronized (EvictionManager.this) {
          dc = diskCache;
        }
        if (dc != null) {
          try {
            dc.delete(fallbackSource);
          } catch (Exception e) {
            success = false;
            ex = e;
          }
        }
        if (callback != null) {
          final boolean finalSuccess = success;
          final Exception finalEx = ex;
          mainHandler.post(() -> callback.onComplete(finalSuccess, finalEx));
        }
      });
      return;
    }

    diskExecutor.execute(() -> {
      boolean success = true;
      Exception ex = null;
      DiskCache dc;
      synchronized (EvictionManager.this) {
        dc = diskCache;
      }
      if (dc != null) {
        // Delete source data using DataCacheKey (sourceKey + signature)
        try {
          CustomDataCacheKey dataCacheKey = new CustomDataCacheKey(s.sourceKey, s.signature);
          dc.delete(dataCacheKey);
        } catch (Exception e) {
          success = false;
          ex = e;
        }
        // Delete transformed resource using ResourceCacheKey
        try {
          Key resourceKey = new RecreatedResourceKey(
              s.sourceKey,
              s.signature,
              s.width,
              s.height,
              getTransformationBytesFromStoredKeys(s),
              s.decodedResourceClass,
              s.optionsKeyBytes);
          dc.delete(resourceKey);
        } catch (Exception e) {
          if (ex == null)
            ex = e;
          success = false;
        }
      }
      if (callback != null) {
        final boolean finalSuccess = success;
        final Exception finalEx = ex;
        mainHandler.post(() -> callback.onComplete(finalSuccess, finalEx));
      }
    });
  }

  /** Evict disk-only, no callback. */
  public void evictDiskForId(final String id) {
    evictDiskForId(id, null);
  }

  /** Evict only source/raw bytes (disk). */
  public void evictSourceForId(final String id, @Nullable final EvictionCallback callback) {
    final CacheKeyStore.StoredKeys s = readStoredKeysPreferPersistent(id);
    diskExecutor.execute(() -> {
      boolean success = true;
      Exception ex = null;
      DiskCache dc;
      synchronized (EvictionManager.this) {
        dc = diskCache;
      }
      if (dc != null) {
        try {
          if (hasValidStoredKeys(s)) {
            // Use DataCacheKey for proper source data deletion
            CustomDataCacheKey dataCacheKey = new CustomDataCacheKey(s.sourceKey, s.signature);
            dc.delete(dataCacheKey);
          } else {
            // Fallback to ObjectKey if we don't have stored keys
            Key fallbackKey = new com.bumptech.glide.signature.ObjectKey(id);
            dc.delete(fallbackKey);
          }
        } catch (Exception e) {
          success = false;
          ex = e;
        }
      }
      if (callback != null) {
        final boolean finalSuccess = success;
        final Exception finalEx = ex;
        mainHandler.post(() -> callback.onComplete(finalSuccess, finalEx));
      }
    });
  }

  /** Evict only the transformed resource (disk). */
  public void evictTransformedForId(final String id, @Nullable final EvictionCallback callback) {
    final CacheKeyStore.StoredKeys s = readStoredKeysPreferPersistent(id);
    if (s == null) {
      if (callback != null)
        mainHandler.post(() -> callback.onComplete(false, null));
      return;
    }
    final byte[] transformationBytes = getTransformationBytesFromStoredKeys(s);
    final byte[] optionsBytes = s.optionsKeyBytes;

    diskExecutor.execute(() -> {
      boolean success = true;
      Exception ex = null;
      DiskCache dc;
      synchronized (EvictionManager.this) {
        dc = diskCache;
      }
      if (dc != null) {
        try {
          Key resourceKey = new RecreatedResourceKey(s.sourceKey, s.signature, s.width, s.height, transformationBytes,
              s.decodedResourceClass, optionsBytes);
          dc.delete(resourceKey);
        } catch (Exception e) {
          success = false;
          ex = e;
        }
      }
      if (callback != null) {
        final boolean finalSuccess = success;
        final Exception finalEx = ex;
        mainHandler.post(() -> callback.onComplete(finalSuccess, finalEx));
      }
    });
  }

  /**
   * Evict only from memory (must be called on main thread). Callback invoked on
   * main thread.
   */
  @MainThread
  public void evictMemoryForId(final String id, @Nullable final EvictionCallback callback) {
    // Use the merged read to get engineKey from in-memory store (not persisted)
    final CacheKeyStore.StoredKeys s = readStoredKeysPreferPersistent(id);
    final Key engineKey = (s != null) ? s.engineKey : null;
    boolean success = true;
    Exception ex = null;
    if (engineKey == null) {
      if (callback != null)
        callback.onComplete(false, null);
      return;
    }
    LruResourceCache mc;
    synchronized (this) {
      mc = memoryCache;
    }
    if (mc == null) {
      if (callback != null)
        callback.onComplete(false, null);
      return;
    }
    try {
      mc.remove(engineKey);
    } catch (Exception e) {
      success = false;
      ex = e;
    }
    if (callback != null)
      callback.onComplete(success, ex);
  }

  /**
   * Best-effort synchronous check whether the given id is currently present in
   * the memory cache.
   *
   * - Returns true if present.
   * - Returns false if not present or if we cannot determine (no suitable method
   * on MemoryCache).
   *
   * Notes:
   * - This uses a reflective 'contains(Key)' check if available on your
   * MemoryCache implementation,
   * else tries a reflective 'get(Key)' as a fallback. If neither exists we cannot
   * reliably check
   * without evicting; so we return false.
   *
   * - Call this on the main thread.
   */
  @MainThread
  public boolean isInMemoryCache(final String id) {
    final CacheKeyStore.StoredKeys s = readStoredKeysPreferPersistent(id);
    if (s == null || s.engineKey == null)
      return false;
    final Key engineKey = s.engineKey;
      Log.i("JS", "isInMemoryCache " + id + " " + s  + " " + engineKey);
LruResourceCache mc;
    synchronized (this) {
      mc = memoryCache;
    }
    if (mc == null)
      return false;

    return mc.contains(engineKey);
  }

  /**
   * Async disk presence check. Runs on background thread; callback invoked on
   * main thread with two booleans:
   * onResult(sourcePresent, transformedPresent)
   */
  public void isInDiskCacheAsync(final String id, final DiskPresenceCallback callback) {
    diskExecutor.execute(() -> {
      boolean sourcePresent = false;
      boolean transformedPresent = false;

      final CacheKeyStore.StoredKeys s = readStoredKeysPreferPersistent(id);
      Log.i(TAG, "isInDiskCacheAsync " + id + " " + s  + " " + persistentStore );
      DiskCache dc;
      synchronized (EvictionManager.this) {
        dc = diskCache;
      }

      if (dc == null) {
        mainHandler.post(() -> callback.onResult(false, false));
        return;
      }

      try {
        if (hasValidStoredKeys(s)) {
          Log.i("JS", "isInDiskCacheAsync sourceKey=" + s.sourceKey + " sourceKeyHeaders="  + ((CustomGlideUrl)s.sourceKey).getHeaders()  + " signature="  + s.signature + " " + dc.get(s.sourceKey) );
          CustomDataCacheKey cachekey = new CustomDataCacheKey(s.sourceKey, s.signature);
          sourcePresent = dc.get(cachekey) != null;
          byte[] transformationBytes = getTransformationBytesFromStoredKeys(s);
          Key resourceKey = new RecreatedResourceKey(s.sourceKey, s.signature, s.width, s.height, transformationBytes,
              s.decodedResourceClass, s.optionsKeyBytes);
          transformedPresent = dc.get(resourceKey) != null;
        } else {
          // fallback: check ObjectKey(id) as source
          Key fallback = new com.bumptech.glide.signature.ObjectKey(id);
          sourcePresent = dc.get(fallback) != null;
        }
      } catch (Exception ignored) {
      }

      final boolean finalSource = sourcePresent;
      final boolean finalTransformed = transformedPresent;
      mainHandler.post(() -> callback.onResult(finalSource, finalTransformed));
    });
  }

  /**
   * Blocking disk presence check (dangerous on main thread). Call from background
   * only.
   * Returns array [sourcePresent, transformedPresent].
   */
  public boolean[] isInDiskCacheBlocking(final String id) {
    final CacheKeyStore.StoredKeys s = readStoredKeysPreferPersistent(id);
    DiskCache dc;
    synchronized (EvictionManager.this) {
      dc = diskCache;
    }
    boolean sourcePresent = false;
    boolean transformedPresent = false;
    if (dc == null)
      return new boolean[] { false, false };
    try {
      if (hasValidStoredKeys(s)) {
        // Check source data using DataCacheKey
        CustomDataCacheKey dataCacheKey = new CustomDataCacheKey(s.sourceKey, s.signature);
        sourcePresent = dc.get(dataCacheKey) != null;
        // Check transformed resource
        Key resourceKey = new RecreatedResourceKey(s.sourceKey, s.signature, s.width, s.height,
            getTransformationBytesFromStoredKeys(s), s.decodedResourceClass, s.optionsKeyBytes);
        transformedPresent = dc.get(resourceKey) != null;
      } else {
        Key fallback = new com.bumptech.glide.signature.ObjectKey(id);
        sourcePresent = dc.get(fallback) != null;
      }
    } catch (Exception ignored) {
    }
    return new boolean[] { sourcePresent, transformedPresent };
  }

  /**
   * Helper used by the eviction methods to coordinate deletes + memory removal.
   */
  private void performEvictionTasks(
      final Key sourceKey,
      final Key signature,
      final int width,
      final int height,
      final byte[] transformationKeyBytes,
      final Class<?> decodedResourceClass,
      final byte[] optionsKeyBytes,
      final Key engineKey,
      @Nullable final EvictionCallback callback) {

    int tasks = 0;
    if (sourceKey != null)
      tasks++;
    if (signature != null && sourceKey != null)
      tasks++;
    if (tasks == 0) {
      // only memory removal possible
      if (engineKey != null) {
        mainHandler.post(() -> {
          MemoryCache mc;
          synchronized (EvictionManager.this) {
            mc = memoryCache;
          }
          if (mc != null) {
            try {
              mc.remove(engineKey);
            } catch (Exception ignored) {
            }
          }
          if (callback != null)
            callback.onComplete(true, null);
        });
      } else {
        if (callback != null)
          mainHandler.post(() -> callback.onComplete(true, null));
      }
      return;
    }

    final AtomicInteger remaining = new AtomicInteger(tasks);
    final AtomicBoolean failed = new AtomicBoolean(false);
    final AtomicReference<Exception> firstException = new AtomicReference<>(null);

    // delete source bytes using DataCacheKey
    if (sourceKey != null) {
      diskExecutor.execute(() -> {
        DiskCache dc;
        synchronized (EvictionManager.this) {
          dc = diskCache;
        }
        if (dc != null) {
          try {
            // Use DataCacheKey to match Glide's internal source data storage
            CustomDataCacheKey dataCacheKey = new CustomDataCacheKey(sourceKey, signature);
            dc.delete(dataCacheKey);
          } catch (Exception e) {
            failed.set(true);
            firstException.compareAndSet(null, e);
          }
        }
        if (remaining.decrementAndGet() == 0) {
          mainHandler.post(() -> {
            if (engineKey != null) {
              MemoryCache mc;
              synchronized (EvictionManager.this) {
                mc = memoryCache;
              }
              if (mc != null) {
                try {
                  mc.remove(engineKey);
                } catch (Exception ignored) {
                }
              }
            }
            if (callback != null)
              callback.onComplete(!failed.get(), firstException.get());
          });
        }
      });
    }

    // delete transformed resource
    if (signature != null && sourceKey != null) {
      diskExecutor.execute(() -> {
        DiskCache dc;
        synchronized (EvictionManager.this) {
          dc = diskCache;
        }
        if (dc != null) {
          try {
            Key resourceKey = new RecreatedResourceKey(sourceKey, signature, width, height, transformationKeyBytes,
                decodedResourceClass, optionsKeyBytes);
            dc.delete(resourceKey);
          } catch (Exception e) {
            failed.set(true);
            firstException.compareAndSet(null, e);
          }
        }
        if (remaining.decrementAndGet() == 0) {
          mainHandler.post(() -> {
            if (engineKey != null) {
              MemoryCache mc;
              synchronized (EvictionManager.this) {
                mc = memoryCache;
              }
              if (mc != null) {
                try {
                  mc.remove(engineKey);
                } catch (Exception ignored) {
                }
              }
            }
            if (callback != null)
              callback.onComplete(!failed.get(), firstException.get());
          });
        }
      });
    }
  }

  @Nullable
  public CacheKeyStore.StoredKeys readStoredKeysPreferPersistent(String id) {
    CacheKeyStore.StoredKeys s = null;
    
    // First check in-memory (has engineKey)
    CacheKeyStore.StoredKeys inMem = inMemoryKeyStore.get(id);
    CacheKeyStore.StoredKeys persistent = null;
    
    if (persistentStore != null) {
      persistent = persistentStore.get(id);
    }
    
    Log.i(TAG, "readStoredKeysPreferPersistent: " + id + 
          " inMem=" + (inMem != null) + 
          " persistent=" + (persistent != null));

    
    // If both exist, merge (prefer persistent for sourceKey, preserve in-memory engineKey)
    if (persistent != null && inMem != null && inMem.engineKey != null && persistent.engineKey == null) {
      CacheKeyStore.StoredKeys merged = new CacheKeyStore.StoredKeys(
          persistent.sourceKey,
          persistent.signature,
          persistent.width,
          persistent.height,
          persistent.transformation,
          persistent.transformationKeyBytes,
          persistent.decodedResourceClass,
          persistent.options,
          persistent.optionsKeyBytes,
          inMem.engineKey // Use in-memory engineKey
      );
      Log.i(TAG, "readStoredKeysPreferPersistent: merged for " + id);
      return merged;
    }
    
    // Return whichever we have (prefer persistent)
    return persistent != null ? persistent : inMem;
  }

  /**
   * Helper to check if StoredKeys has all required components for disk cache operations.
   * @param s the StoredKeys to check
   * @return true if s has non-null sourceKey and signature
   */
  private static boolean hasValidStoredKeys(@Nullable CacheKeyStore.StoredKeys s) {
    return s != null && s.sourceKey != null && s.signature != null;
  }

  @Nullable
  private static byte[] getTransformationBytesFromStoredKeys(CacheKeyStore.StoredKeys s) {
    if (s == null)
      return null;
    if (s.transformationKeyBytes != null)
      return s.transformationKeyBytes;
    if (s.transformation != null) {
      try {
        RecordingDigest rd = new RecordingDigest();
        s.transformation.updateDiskCacheKey(rd);
        return rd.digest();
      } catch (Exception ignored) {
      }
    }
    return null;
  }
}