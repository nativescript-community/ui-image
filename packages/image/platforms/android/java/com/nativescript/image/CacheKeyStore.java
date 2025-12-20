package com.nativescript.image;

import com.bumptech.glide.load.Key;
import com.bumptech.glide.load.Options;
import com.bumptech.glide.load.Transformation;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * In-memory store. StoredKeys now includes transformation and options raw key
 * bytes so we don't
 * need to re-create Transformation/Options objects in order to reconstruct the
 * ResourceCacheKey.
 */
public class CacheKeyStore {
  public static class StoredKeys {
    public final Key sourceKey;
    public final Key signature;
    public final int width;
    public final int height;
    public final Transformation<?> transformation; // optional in-memory only
    public final byte[] transformationKeyBytes; // raw bytes written by transformation.updateDiskCacheKey
    public final Class<?> decodedResourceClass;
    public final Options options; // may be null or placeholder for in-memory
    public final byte[] optionsKeyBytes; // raw bytes from options.updateDiskCacheKey

    public StoredKeys(
        Key sourceKey,
        Key signature,
        int width,
        int height,
        Transformation<?> transformation,
        byte[] transformationKeyBytes,
        Class<?> decodedResourceClass,
        Options options,
        byte[] optionsKeyBytes) {
      this.sourceKey = sourceKey;
      this.signature = signature;
      this.width = width;
      this.height = height;
      this.transformation = transformation;
      this.transformationKeyBytes = transformationKeyBytes;
      this.decodedResourceClass = decodedResourceClass;
      this.options = options;
      this.optionsKeyBytes = optionsKeyBytes;
    }
  }

  private final Map<String, StoredKeys> map = new ConcurrentHashMap<>();

  public void put(String id, StoredKeys keys) {
    map.put(id, keys);
  }

  public StoredKeys get(String id) {
    return map.get(id);
  }

  public void remove(String id) {
    map.remove(id);
  }
  public void clearAll() {
    map.clear();
  }
}