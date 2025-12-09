package com.nativescript.image;

import android.content.Context;
import android.util.Log;
import androidx.annotation.NonNull;
import com.bumptech.glide.Glide;
import com.bumptech.glide.GlideBuilder;
import com.bumptech.glide.Registry;
import com.bumptech.glide.annotation.GlideModule;
import com.bumptech.glide.load.Key;
import com.bumptech.glide.load.Options;
import com.bumptech.glide.load.engine.cache.MemorySizeCalculator;
import com.bumptech.glide.load.engine.cache.DiskCache;
import com.bumptech.glide.load.engine.cache.DiskLruCacheWrapper;
import com.bumptech.glide.load.engine.cache.MemoryCache;
import com.bumptech.glide.load.engine.cache.LruResourceCache;
import com.bumptech.glide.load.engine.CapturingEngineKeyFactory;
import com.bumptech.glide.load.model.GlideUrl;
import com.bumptech.glide.module.AppGlideModule;
import com.bumptech.glide.RequestBuilder;
import com.bumptech.glide.signature.ObjectKey;
import okhttp3.OkHttpClient;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;

@GlideModule
public class CustomGlideModule extends AppGlideModule {
  private static final String TAG = "MyAppGlideModule";
  private static final String INJECT_TAG = "EngineKeyFactoryInject";

  @Override
  public void applyOptions(@NonNull Context context, @NonNull GlideBuilder builder) {

    // Get configuration
    GlideConfiguration config = GlideConfiguration.getInstance();
    
    // Determine memory cache size
    long memoryCacheSize;
    if (config.getMemoryCacheSize() > 0) {
      // Use custom size
      memoryCacheSize = config.getMemoryCacheSize();
      // Log.i(TAG, "Using custom memory cache size: " + memoryCacheSize + " bytes");
    } else {
      // Use default calculator
      MemorySizeCalculator calculator = new MemorySizeCalculator.Builder(context)
          .setMemoryCacheScreens(config.getMemoryCacheScreens())
          .build();
      memoryCacheSize = calculator.getMemoryCacheSize();
      // Log.i(TAG, "Using calculated memory cache size: " + memoryCacheSize + " bytes with memoryCacheSceens: " + config.getMemoryCacheScreens());
    }
    
    // Use our custom memory cache wrapper
    LruResourceCache memoryCache = new LruResourceCache(memoryCacheSize);
    EvictionManager.get().setMemoryCache(memoryCache);
    builder.setMemoryCache(memoryCache);
    
    // Set a disk cache factory that also registers the disk cache instance with
    // EvictionManager.
    builder.setDiskCache(new DiskCache.Factory() {
      @Override
      public DiskCache build() {
        DiskCache dc = DiskLruCacheWrapper.create(context.getCacheDir(), 250 * 1024 * 1024);
        EvictionManager.get().setDiskCache(dc);
        return dc;
      }
    });
  }

  @Override
  public void registerComponents(@NonNull Context context, @NonNull Glide glide, @NonNull Registry registry) {

    // Create base OkHttp client
    OkHttpClient client = new OkHttpClient.Builder().build();

    // SINGLE LOADER: CustomUrlLoader handles both CustomGlideUrl and GlideUrl
    // This replaces both the old CustomUrlLoader and UrlTrackingModelLoader
    registry.replace(
        GlideUrl.class,
        InputStream.class,
        new CustomUrlLoader.Factory(client));
    // Listener: called when an EngineKey is created. Update the stored keys to
    // include engineKey.
    CapturingEngineKeyFactory.Listener listener = (engineKey, model) -> {
      // Log.i("JS", "CapturingEngineKeyFactory.Listener 1" + engineKey + " " + model);
      if (model == null)
        return;
      String id = String.valueOf(model);

      // Read either persistent or in-memory stored keys
      CacheKeyStore.StoredKeys s = EvictionManager.get().getKeyStore().get(id);
      if (s == null) {
        // if key store exists but no entry, create minimal
        s = new CacheKeyStore.StoredKeys(
            new com.bumptech.glide.signature.ObjectKey(id),
            new com.bumptech.glide.signature.ObjectKey("signature-none"),
            com.bumptech.glide.request.target.Target.SIZE_ORIGINAL,
            com.bumptech.glide.request.target.Target.SIZE_ORIGINAL,
            null,
            null,
            android.graphics.Bitmap.class,
            new Options(),
            null,
            null);
      }

      // Build an updated StoredKeys that preserves everything and sets engineKey
      CacheKeyStore.StoredKeys updated = new CacheKeyStore.StoredKeys(
          s.sourceKey,
          s.signature,
          s.width,
          s.height,
          s.transformation, // may be null; preserved for in-process fallback
          s.transformationKeyBytes, // raw bytes if recorded (preferred)
          s.decodedResourceClass,
          s.options,
          s.optionsKeyBytes,
          engineKey // set the captured engineKey
      );

      // Put updated entry into the in-memory store so later EvictionManager can
      // remove memory entry.
      EvictionManager.get().getKeyStore().put(id, updated);
    };

    // Create the capturing factory
    // instantiate the capturing factory (public class in
    // com.bumptech.glide.load.engine)
    Object capturingFactory = new com.bumptech.glide.load.engine.CapturingEngineKeyFactory(listener);

    // inject it into Glide's Engine reflectively, passing it as Object (no
    // EngineKeyFactory compile-time ref)
    try {
      injectEngineKeyFactoryIntoGlide(glide, capturingFactory);
      Log.i(TAG, "Injected capturing EngineKeyFactory into Glide engine");
    } catch (Exception e) {
      Log.w(TAG, "Failed to inject capturing EngineKeyFactory", e);
    }

  }

  /**
   * Reflectively find Glide.engine and replace its EngineKeyFactory-typed field
   * with capturingFactory.
   * This tries to be resilient across minor Glide 5.x binary differences.
   */
  private void injectEngineKeyFactoryIntoGlide(Object glideInstance, Object capturingFactory) throws Exception {
    if (glideInstance == null) {
      throw new IllegalArgumentException("glideInstance == null");
    }
    // 1) find Engine field on Glide
    Field engineField = null;
    for (Field f : glideInstance.getClass().getDeclaredFields()) {
      if (f.getType().getName().contains("Engine")) {
        engineField = f;
        break;
      }
    }
    if (engineField == null) {
      throw new NoSuchFieldException("Could not find Engine field on Glide");
    }
    engineField.setAccessible(true);
    Object engineInstance = engineField.get(glideInstance);
    if (engineInstance == null) {
      throw new IllegalStateException("Glide.engine is null");
    }

    // 2) find the keyFactory-like field on Engine
    Field targetField = null;
    Class<?> engineClass = engineInstance.getClass();
    Class<?> cur = engineClass;
    while (cur != null && targetField == null) {
      for (Field f : cur.getDeclaredFields()) {
        String typeName = f.getType().getName();
        if (typeName.contains("EngineKeyFactory") || typeName.endsWith("EngineKeyFactory")
            || f.getName().toLowerCase().contains("keyfactory")) {
          targetField = f;
          break;
        }
      }
      cur = cur.getSuperclass();
    }
    if (targetField == null) {
      throw new NoSuchFieldException(
          "Could not find EngineKeyFactory-like field in Engine class: " + engineClass.getName());
    }

    targetField.setAccessible(true);

    // Log current value
    Object before = targetField.get(engineInstance);
    int beforeHash = System.identityHashCode(before);
    String beforeClass = (before == null) ? "null" : before.getClass().getName();

    // If field is final, try to remove final modifier so setting works reliably
    try {
      Field modifiersField = Field.class.getDeclaredField("modifiers");
      modifiersField.setAccessible(true);
      int mods = targetField.getModifiers();
      if (Modifier.isFinal(mods)) {
        modifiersField.setInt(targetField, mods & ~Modifier.FINAL);
      }
    } catch (NoSuchFieldException nsf) {
      // Android ART may not expose 'modifiers' the same way; ignore if not available
      Log.i(INJECT_TAG, "Could not access Field.modifiers to clear final; continuing");
    } catch (Throwable t) {
      Log.w(INJECT_TAG, "Failed to clear final modifier (continuing attempt to set field)", t);
    }

    // 3) set the new factory instance
    try {
      targetField.set(engineInstance, capturingFactory);
    } catch (IllegalAccessException | IllegalArgumentException iae) {
      // Log and rethrow so caller can inspect
      Log.w(INJECT_TAG, "targetField.set(...) failed", iae);
      throw iae;
    }

    // 4) read back and log to verify
    Object after = targetField.get(engineInstance);
    int afterHash = System.identityHashCode(after);
    String afterClass = (after == null) ? "null" : after.getClass().getName();

    // quick verification: are they the same instance we tried to set?
    boolean sameInstance = (after == capturingFactory);
    if (!sameInstance) {
      throw new IllegalStateException(
          "Injection did not set the expected capturingFactory instance. afterClass=" + afterClass);
    }
  }

  @Override
  public boolean isManifestParsingEnabled() {
    return false;
  }
}