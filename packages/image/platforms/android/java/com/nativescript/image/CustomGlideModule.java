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
import com.bumptech.glide.load.engine.cache.ModelSignatureDiskLruCacheWrapper;
import com.bumptech.glide.load.model.GlideUrl;
import com.bumptech.glide.module.AppGlideModule;
import com.bumptech.glide.RequestBuilder;
import com.bumptech.glide.signature.ObjectKey;
import okhttp3.OkHttpClient;
import java.io.File;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;

@GlideModule
public class CustomGlideModule extends AppGlideModule {
  private static final String TAG = "MyAppGlideModule";
  private static final String INJECT_TAG = "EngineKeyFactoryInject";

  private File getInternalCacheDirectory(@NonNull Context context, final String diskCacheName) {
    File cacheDirectory = context.getCacheDir();
    if (cacheDirectory == null) {
      return null;
    }
    if (diskCacheName != null) {
      return new File(cacheDirectory, diskCacheName);
    }
    return cacheDirectory;
  }
  public File getCacheDirectory(@NonNull Context context, final String diskCacheName) {
      File internalCacheDirectory = getInternalCacheDirectory(context, diskCacheName);

      // Already used internal cache, so keep using that one,
      // thus avoiding using both external and internal with transient errors.
      if (internalCacheDirectory != null && internalCacheDirectory.exists()) {
        return internalCacheDirectory;
      }

      File cacheDirectory = context.getExternalCacheDir();

      // Shared storage is not available.
      if (cacheDirectory == null || !cacheDirectory.canWrite()) {
        return internalCacheDirectory;
      }
      if (diskCacheName != null) {
        return new File(cacheDirectory, diskCacheName);
      }
      return cacheDirectory;
  }

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
    ModelSignatureMemoryCache memoryCache = new ModelSignatureMemoryCache(memoryCacheSize);
    EvictionManager.get().setMemoryCache(memoryCache);
    builder.setMemoryCache(memoryCache);
    
    // Set a disk cache factory that also registers the disk cache instance with
    // EvictionManager.
    builder.setDiskCache(new DiskCache.Factory() {
      @Override
      public DiskCache build() {
        ModelSignatureDiskLruCacheWrapper dc = ModelSignatureDiskLruCacheWrapper.create(getCacheDirectory(context, config.getDiskCacheName()), config.getDiskCacheSize());
        EvictionManager.get().setDiskCache(dc);
        return dc;
      }
    });
  }

  @Override
  public void registerComponents(@NonNull Context context, @NonNull Glide glide, @NonNull Registry registry) {

    // Create base OkHttp client
    OkHttpClient client = new OkHttpClient.Builder().build();

    registry.replace(
        GlideUrl.class,
        InputStream.class,
        new CustomUrlLoader.Factory(client));
  }

  @Override
  public boolean isManifestParsingEnabled() {
    return false;
  }
}