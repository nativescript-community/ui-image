package com.nativescript.image;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Base64;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONArray;
import com.bumptech.glide.load.Key;
import com.bumptech.glide.load.model.GlideUrl;
import com.bumptech.glide.load.model.LazyHeaders;
import com.bumptech.glide.signature.ObjectKey;
import com.bumptech.glide.load.Options;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import android.util.Log;

/**
 * SharedPreferences-backed persistent store.
 * CRITICAL: Properly serializes GlideUrl/CustomGlideUrl with headers.
 */
public class SharedPrefCacheKeyStore extends CacheKeyStore {
  private static final String TAG = "JS";
  private static final String PREFS = "glide_cache_keys_v3"; // bump version
  private final SharedPreferences prefs;

  public SharedPrefCacheKeyStore(Context context) {
    this.prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
  }

  public void put(String id, CacheKeyStore.StoredKeys keys) {
    try {
      JSONObject j = new JSONObject();

      Log.i(TAG, "SharedPrefCacheKeyStore put: " + id + 
               " keys=" + keys);
      
      // Serialize sourceKey properly - extract URL and headers
      if (keys.sourceKey instanceof GlideUrl) {
        GlideUrl glideUrl = (GlideUrl) keys.sourceKey;
        j.put("sourceType", "GlideUrl");
        j.put("sourceUrl", glideUrl.toStringUrl());
        
        // Extract headers from GlideUrl
        JSONObject headersJson = new JSONObject();
        try {
          Map<String, String> headers = glideUrl.getHeaders();
          if (headers != null) {
            for (Map.Entry<String, String> entry : headers.entrySet()) {
              headersJson.put(entry.getKey(), entry.getValue());
            }
          }
        } catch (Exception e) {
          // Some Glide versions may not expose headers easily
        }
        j.put("sourceHeaders", headersJson);
      } else if (keys.sourceKey != null) {
        j.put("sourceType", "ObjectKey");
        j.put("source", keys.sourceKey.toString());
      } else {
        j.put("sourceType", "null");
      }
      
      if ( keys.signature != null) {
        j.put("signature", keys.signature.toString());
      }
      j.put("width", keys.width);
      j.put("height", keys.height);
      if ( keys.decodedResourceClass != null) {
        j.put("decodedResourceClass", keys.decodedResourceClass.getName());
      }
      
      if ( keys.transformationKeyBytes != null) {
        j.put("transformationBytes",Base64.encodeToString(keys.transformationKeyBytes, Base64.NO_WRAP));
      }
      if ( keys.optionsKeyBytes != null) {
        j.put("optionsBytes", Base64.encodeToString(keys.optionsKeyBytes, Base64.NO_WRAP));
      }
      Log.i(TAG, "SharedPrefCacheKeyStore putString: " + id +   " string=" + j.toString());
      prefs.edit().putString(id, j.toString()).apply();
    } catch (JSONException e) {
      Log.e(TAG, "Failed to serialize keys for " + id, e);
    }
  }

  public CacheKeyStore.StoredKeys get(String id) {
    String s = prefs.getString(id, null);
    if (s == null)
      return null;
    try {
      JSONObject j = new JSONObject(s);

      // Reconstruct sourceKey properly
      Key sourceKey;
      String sourceType = j.optString("sourceType", "ObjectKey");
      
      if ("GlideUrl".equals(sourceType)) {
        String url = j.optString("sourceUrl", null);
        JSONObject headersJson = j.optJSONObject("sourceHeaders");
        
        if (url != null) {
          // Reconstruct GlideUrl with headers
          java.util.HashMap headersMap = null;
          if (headersJson != null && headersJson.length() > 0) {
            headersMap = new java.util.HashMap();
            Iterator<String> keys = headersJson.keys();
            while (keys.hasNext()) {
              String key = keys.next();
              String value = headersJson.optString(key);
              headersMap.put(key, value);
            }
          }
          sourceKey = new CustomGlideUrl(url, headersMap, null, null);
        } else {
          sourceKey = new ObjectKey(id);
        }
      } else {
        String source = j.optString("source", null);
        sourceKey = source != null && !"null".equals(source) ? new ObjectKey(source) : new ObjectKey(id);
      }
      
      String signature = j.optString("signature", null);
      int width = j.optInt("width", com.bumptech.glide.request.target.Target.SIZE_ORIGINAL);
      int height = j.optInt("height", com.bumptech.glide.request.target.Target.SIZE_ORIGINAL);
      String decodedName = j.optString("decodedResourceClass", android.graphics.Bitmap.class.getName());
        Log.i(TAG, "SharedPrefCacheKeyStore get decodedName: " + decodedName);
    String transformationBase64 = j.optString("transformationBytes", null);
      String optionsBase64 = j.optString("optionsBytes", null);

      Key signatureKey = signature != null && !"null".equals(signature) ? new ObjectKey(signature)
          : new ObjectKey("signature-none");
      Class<?> decodedClass = Class.forName(decodedName);
      byte[] transformationBytes = (transformationBase64 == null || "null".equals(transformationBase64)) ? null
          : Base64.decode(transformationBase64, Base64.NO_WRAP);
      byte[] optionsBytes = (optionsBase64 == null || "null".equals(optionsBase64)) ? null
          : Base64.decode(optionsBase64, Base64.NO_WRAP);

      Options options = new Options();
      Log.i(TAG, "SharedPrefCacheKeyStore get: " + id +   " string=" + s +   " sourceKey=" + sourceKey);
    return new CacheKeyStore.StoredKeys(sourceKey, signatureKey, width, height, null,
          transformationBytes, decodedClass, options, optionsBytes, null);
    } catch (Exception e) {
      Log.e(TAG, "Failed to deserialize keys for " + id, e);
      return null;
    }
  }

  public void remove(String id) {
    prefs.edit().remove(id).apply();
  }
  
  public void clearAll() {
    prefs.edit().clear().apply();
  }
}