package com.nativescript.image;

import android.os.Handler;
import android.os.Looper;
import androidx.annotation.GuardedBy;
import androidx.annotation.MainThread;
import androidx.annotation.Nullable;
import com.bumptech.glide.Glide;
import com.bumptech.glide.load.Key;
import com.bumptech.glide.load.Options;
import com.bumptech.glide.load.Transformation;
import com.bumptech.glide.load.engine.cache.DiskCache;
import com.bumptech.glide.load.engine.cache.MemoryCache;
import com.bumptech.glide.load.engine.cache.LruResourceCache;
import com.bumptech.glide.load.engine.cache.ModelSignatureDiskLruCacheWrapper;

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

  // Cached reflection fields/methods for ActiveResources access
  private static volatile java.lang.reflect.Field engineField;
  private static volatile java.lang.reflect.Field activeResourcesField;
  private static volatile java.lang.reflect.Field activeEngineResourcesField;

  private static volatile boolean reflectionInitialized = false;
  private static volatile boolean reflectionFailed = false;

  private final ExecutorService diskExecutor = Executors.newSingleThreadExecutor();
  private final Handler mainHandler = new Handler(Looper.getMainLooper());

  @GuardedBy("this")
  private ModelSignatureDiskLruCacheWrapper diskCache;
  @GuardedBy("this")
  private ModelSignatureMemoryCache memoryCache;

  private Glide glideInstance;

  // in-memory store for captured info
  private final CacheKeyStore inMemoryKeyStore = new CacheKeyStore();

  // optional persistent store (SharedPref). If null, fallback to in-memory only.
  @Nullable
  private SharedPrefCacheKeyStore persistentStore;

  private EvictionManager() {
  }

  public static EvictionManager get() {
    return INSTANCE;
  }

  public void setGlideInstance(Glide glideInstance) {
    this.glideInstance = glideInstance;
  }

  public synchronized void setDiskCache(ModelSignatureDiskLruCacheWrapper diskCache) {
    this.diskCache = diskCache;
  }

  public synchronized void setMemoryCache(ModelSignatureMemoryCache memoryCache) {
    this.memoryCache = memoryCache;
  }

  public synchronized void setPersistentStore(@Nullable SharedPrefCacheKeyStore store) {
    this.persistentStore = store;
  }

  /**
   * Expose the in-memory store so callers/listeners can put key objects there.
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
      return;
    }

    try {
      // 1) Load existing stored keys
      CacheKeyStore.StoredKeys existing = inMemoryKeyStore.get(id);
      if (existing == null && persistentStore != null) {
        existing = persistentStore.get(id);
      }

      // 2) Just save the new keys directly
      CacheKeyStore.StoredKeys toPersist = newStored;
    // Log.d(TAG, "EvictionManager saveKeys " + id + " " + toPersist);
      // 3) Save to both stores
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
    void onResult(boolean present);
  }

  /**
   * Clear the entire disk cache. Runs on a background thread. Callback invoked on
   * main thread.
   */
  public void clearDiskCache(@Nullable final EvictionCallback callback) {
    diskExecutor.execute(() -> {
      boolean success = true;
      Exception ex = null;
      ModelSignatureDiskLruCacheWrapper dc;
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
      ModelSignatureMemoryCache mc;
      synchronized (EvictionManager.this) {
        mc = memoryCache;
      }
      if (mc != null) {
        try {
          mc.clearMemory();
          clearAllActiveResources();
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
      ModelSignatureDiskLruCacheWrapper dc;
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
        ModelSignatureMemoryCache mc;
        synchronized (EvictionManager.this) {
          mc = memoryCache;
        }
        if (mc != null) {
          try {
            mc.clearMemory();
            clearAllActiveResources();
          } catch (Exception e) {
            memSuccess = false;
            if (finalFirstEx == null)
              memEx = e;
          }
        }
        boolean combined = finalDiskSuccess && memSuccess;
        Exception combinedEx = finalFirstEx != null ? finalFirstEx : memEx;
        inMemoryKeyStore.clearAll();
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

  /**
   * Evict both disk (source + transformed) and memory for id. Callback invoked on
   * main thread.
   */
  public void evictAllForId(final String id, @Nullable final EvictionCallback callback) {
    final CacheKeyStore.StoredKeys s = readStoredKeysPreferPersistent(id);
    if (s == null) {
      // fallback conservative attempt (disk only, then memory)
      evictDiskForId(id, new EvictionCallback() {
        @Override
        public void onComplete(boolean diskSuccess, @Nullable Exception diskError) {
          // After disk eviction, try memory eviction (will fail gracefully if no keys)
          mainHandler.post(() -> {
            evictMemoryForId(id, new EvictionCallback() {
              @Override
              public void onComplete(boolean memSuccess, @Nullable Exception memError) {
                // Combine results: success only if both succeeded (or memory failed gracefully)
                boolean combined = diskSuccess && memSuccess;
                Exception combinedEx = diskError != null ? diskError : memError;
                if (callback != null) {
                  callback.onComplete(combined, combinedEx);
                }
              }
            });
          });
        }
      });
      return;
    }
    
    // Check if we have an enhanced disk cache
    ModelSignatureDiskLruCacheWrapper dc;
    synchronized (this) {
      dc = diskCache;
    }
    
    if (s.sourceKey != null && s.signature != null) {
      // Use efficient model/signature-based eviction
      // Log.i(TAG, "EvictionManager evictAllForId using efficient disk cache eviction for: " + id);
      evictDiskByModelAndSignature(s.sourceKey, s.signature, new EvictionCallback() {
        @Override
        public void onComplete(boolean diskSuccess, @Nullable Exception diskError) {
          // After disk eviction, evict from memory
          mainHandler.post(() -> {
            boolean memSuccess = true;
            Exception memError = null;
            
            ModelSignatureMemoryCache mc;
            synchronized (EvictionManager.this) {
              mc = memoryCache;
            }
            
            if (mc != null && s.sourceKey != null && s.signature != null) {
              try {
                mc.removeByModelAndSignature(s.sourceKey, s.signature);
              } catch (Exception e) {
                memSuccess = false;
                memError = e;
              }
            }
            
            boolean combined = diskSuccess && memSuccess;
            Exception combinedEx = diskError != null ? diskError : memError;
            
            if (callback != null) {
              callback.onComplete(combined, combinedEx);
            }
          });
        }
      });
    }
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
      return;
    }

    diskExecutor.execute(() -> {
      boolean success = true;
      Exception ex = null;
      ModelSignatureDiskLruCacheWrapper dc;
      synchronized (EvictionManager.this) {
        dc = diskCache;
      }
      if (dc != null) {
        // Delete source data using DataCacheKey (sourceKey + signature)
        try {
          dc.removeByModelAndSignature(s.sourceKey, s.signature);
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

  /** Evict disk-only, no callback. */
  public void evictDiskForId(final String id) {
    evictDiskForId(id, null);
  }

  /**
   * Evict only from memory (must be called on main thread). Callback invoked on
   * main thread.
   */
  @MainThread
  public void evictMemoryForId(final String id, @Nullable final EvictionCallback callback) {
    // Use the merged read to get engineKey from in-memory store (not persisted)
    final CacheKeyStore.StoredKeys s = readStoredKeysPreferPersistent(id);
    // final Key engineKey = (s != null) ? s.engineKey : null;
    boolean success = true;
    Exception ex = null;
    if (s == null) {
      if (callback != null)
        callback.onComplete(false, null);
      return;
    }
    ModelSignatureMemoryCache mc;
    synchronized (this) {
      mc = memoryCache;
    }
    if (mc == null) {
      if (callback != null)
        callback.onComplete(false, null);
      return;
    }
    try {
      mc.removeByModelAndSignature(s.sourceKey, s.signature );
      clearAllActiveResources();
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
    if (s == null || s.sourceKey == null || s.signature == null)
      return false;
    ModelSignatureMemoryCache mc;
    synchronized (this) {
      mc = memoryCache;
    }
    if (mc == null)
      return false;

    return mc.containsByModelAndSignature(s.sourceKey, s.signature);
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
      ModelSignatureDiskLruCacheWrapper dc;
      synchronized (EvictionManager.this) {
        dc = diskCache;
      }

      if (dc == null) {
        mainHandler.post(() -> callback.onResult(false));
        return;
      }

      try {
        if (hasValidStoredKeys(s)) {
          // Log.d(TAG, "EvictionManager isInDiskCacheAsync " + id + " " + s.sourceKey+ " " + s.sourceKey.getClass().getName()+ " " + s.signature);
          sourcePresent = dc.containsByModelAndSignature(s.sourceKey, s.signature);
        } else {
          // fallback: check ObjectKey(id) as source
          Key fallback = new com.bumptech.glide.signature.ObjectKey(id);
          sourcePresent = dc.get(fallback) != null;
          // Log.d(TAG, "EvictionManager fallback check with ObjectKey: " + sourcePresent);
        }
      } catch (Exception e) {
        Log.e(TAG, "EvictionManager isInDiskCacheAsync exception for " + id, e);
      }
      final Boolean result = sourcePresent;
      mainHandler.post(() -> callback.onResult(result));
    });
  }

  /**
   * Blocking disk presence check (dangerous on main thread). Call from background
   * only.
   * Returns array [sourcePresent, transformedPresent].
   */
  public boolean isInDiskCacheBlocking(final String id) {
    final CacheKeyStore.StoredKeys s = readStoredKeysPreferPersistent(id);
    ModelSignatureDiskLruCacheWrapper dc;
    synchronized (EvictionManager.this) {
      dc = diskCache;
    }
    boolean sourcePresent = false;
    boolean transformedPresent = false;
    if (dc == null)
      return false;
    try {
      if (hasValidStoredKeys(s)) {
          sourcePresent = dc.containsByModelAndSignature(s.sourceKey, s.signature);
      } else {
        Key fallback = new com.bumptech.glide.signature.ObjectKey(id);
        sourcePresent = dc.get(fallback) != null;
      }
    } catch (Exception ignored) {
    }
    return sourcePresent;
  }

  @Nullable
  public CacheKeyStore.StoredKeys readStoredKeysPreferPersistent(String id) {
    CacheKeyStore.StoredKeys s = null;
    
    // First check in-memory
    CacheKeyStore.StoredKeys inMem = inMemoryKeyStore.get(id);
    CacheKeyStore.StoredKeys persistent = null;
    
    if (persistentStore != null) {
      persistent = persistentStore.get(id);
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


  // -----------------------
  // Enhanced disk cache eviction methods using ModelSignatureDiskLruCacheWrapper
  // -----------------------

  /**
   * Evict all disk cache entries (both source and transformed) matching model and signature
   *
   * @param model The model (e.g., URI)
   * @param signature The signature Key
   * @param callback Optional callback invoked on main thread
   */
  public void evictDiskByModelAndSignature(
      @Nullable final Object model,
      @Nullable final Key signature,
      @Nullable final EvictionCallback callback) {
    
    if (model == null || signature == null) {
      if (callback != null) {
        mainHandler.post(() -> callback.onComplete(false, new IllegalArgumentException("model and signature must not be null")));
      }
      return;
    }

    diskExecutor.execute(() -> {
      boolean success = false;
      Exception ex = null;
      int removed = 0;
      
      ModelSignatureDiskLruCacheWrapper dc;
      synchronized (EvictionManager.this) {
        dc = diskCache;
      }
      
      removed = dc.removeByModelAndSignature(model, signature);
      success = true;
      
      if (callback != null) {
        final boolean finalSuccess = success;
        final Exception finalEx = ex;
        mainHandler.post(() -> callback.onComplete(finalSuccess, finalEx));
      }
    });
  }

  /**
   * Remove all disk cache entries that do NOT match the given signature.
   * Useful for cache invalidation when changing signature versions.
   *
   * @param currentSignature The current/valid signature to keep
   * @param callback Optional callback invoked on main thread
   */
  public void evictDiskExceptSignature(
      @Nullable final Key currentSignature,
      @Nullable final EvictionCallback callback) {
    
    if (currentSignature == null) {
      if (callback != null) {
        mainHandler.post(() -> callback.onComplete(false, new IllegalArgumentException("currentSignature must not be null")));
      }
      return;
    }

    diskExecutor.execute(() -> {
      boolean success = false;
      Exception ex = null;
      int removed = 0;
      
      ModelSignatureDiskLruCacheWrapper dc;
      synchronized (EvictionManager.this) {
        dc = diskCache;
      }
      
      removed = dc.removeAllExceptSignature(currentSignature);
      success = true;
      
      if (callback != null) {
        final boolean finalSuccess = success;
        final Exception finalEx = ex;
        mainHandler.post(() -> callback.onComplete(finalSuccess, finalEx));
      }
    });
  }

  /**
   * Get disk cache statistics.
   *
   * @return Array: [indexSize, diskCacheSize] or null if not supported
   */
  public long[] getDiskCacheStats() {
    ModelSignatureDiskLruCacheWrapper dc;
    synchronized (this) {
      dc = diskCache;
    }
    
    return dc.getStats();
  }

  /**
   * Initialize reflection fields/methods for ActiveResources access (once only)
   */
  private static void initActiveResourcesReflection() {
    if (reflectionInitialized || reflectionFailed) {
      return;
    }
    synchronized (EvictionManager.class) {
      if (reflectionInitialized || reflectionFailed) {
        return;
      }
      try {
        // Get Glide.engine field
        engineField = com.bumptech.glide.Glide.class.getDeclaredField("engine");
        engineField.setAccessible(true);
        
        // Get Engine.activeResources field
        Class<?> engineClass = Class.forName("com.bumptech.glide.load.engine.Engine");
        activeResourcesField = engineClass.getDeclaredField("activeResources");
        activeResourcesField.setAccessible(true);
        
        Class<?> activeResourcesClass = Class.forName("com.bumptech.glide.load.engine.ActiveResources");

        // Get ActiveResources.activeEngineResources field (the actual map)
        try {
          activeEngineResourcesField = activeResourcesClass.getDeclaredField("activeEngineResources");
          activeEngineResourcesField.setAccessible(true);
        } catch (NoSuchFieldException e) {
          // Try alternative field names in different Glide versions
          try {
            activeEngineResourcesField = activeResourcesClass.getDeclaredField("activeResources");
            activeEngineResourcesField.setAccessible(true);
          } catch (NoSuchFieldException e2) {
            Log.w(TAG, "Could not find activeEngineResources map field");
          }
        }
        
        reflectionInitialized = true;
        // Log.i(TAG, "ActiveResources reflection initialized successfully");
      } catch (Throwable t) {
        reflectionFailed = true;
        Log.w(TAG, "Failed to initialize ActiveResources reflection (may not exist in this Glide version)", t);
      }
    }
  }

  /**
   * Clear all entries from Glide's ActiveResources cache.
   * Must be called on main thread.
   * 
   * @return true if successfully cleared, false if reflection failed
   */
  @MainThread
  public boolean clearAllActiveResources() {
    try {
      initActiveResourcesReflection();
    
      if (reflectionFailed) {
        return false;
      }
      
      Object engine = engineField.get(glideInstance);
      
      if (engine != null) {
        Object activeResources = activeResourcesField.get(engine);
        
        if (activeResources != null && activeEngineResourcesField != null) {
          // Get the map and clear it
          Object mapObject = activeEngineResourcesField.get(activeResources);
          
          if (mapObject instanceof java.util.Map) {
            java.util.Map<?, ?> map = (java.util.Map<?, ?>) mapObject;
            int size = map.size();
            map.clear();
            // Log.i(TAG, "Cleared " + size + " entries from ActiveResources map");
            return true;
          }
        }
      }
    } catch (Throwable t) {
      Log.w(TAG, "Failed to clear ActiveResources map", t);
    }
    
    return false;
  }
}