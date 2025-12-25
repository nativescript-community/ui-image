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
    public StoredKeys(
        Key sourceKey,
        Key signature) {
      this.sourceKey = sourceKey;
      this.signature = signature;
    }

    public String toString() {
      return "CacheKeyStore.StoredKeys {"
          + "sourceKey="
          + sourceKey
          + ", signature="
          + signature
          + '}';
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