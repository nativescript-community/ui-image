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
 */
public class SharedPrefCacheKeyStore extends CacheKeyStore {
  private static final String TAG = "SharedPrefCacheKeyStore";
  private static final String PREFS = "glide_cache_keys_v3"; // bump version
  private final SharedPreferences prefs;

  public SharedPrefCacheKeyStore(Context context) {
    this.prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
  }

  public void put(String id, CacheKeyStore.StoredKeys keys) {
    try {
      JSONObject j = new JSONObject();
        // Log.d(TAG, "SharedPrefCacheKeyStore.put id=" + id + " sourceKey=" + keys.sourceKey);

      if (keys.sourceKey instanceof GlideUrl) {
        GlideUrl glideUrl = (GlideUrl) keys.sourceKey;
        j.put("sourceType", "GlideUrl");
        j.put("sourceUrl", glideUrl.toStringUrl());
        
      } else if (keys.sourceKey != null) {
        j.put("sourceType", "ObjectKey");
        j.put("source", keys.sourceKey.toString());
      } else {
        j.put("sourceType", "null");
      }
      
      if ( keys.signature != null) {
        j.put("signature", keys.signature.toString());
      }
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

      Key sourceKey;
      String sourceType = j.optString("sourceType", "ObjectKey");
      
      if ("GlideUrl".equals(sourceType)) {
        String url = j.optString("sourceUrl", null);
        
        if (url != null) {
          sourceKey = new CustomGlideUrl(url, null, null, null);
        } else {
          sourceKey = new ObjectKey(id);
        }
      } else{
        String source = j.optString("source", null);
        if (source != null && !"null".equals(source)) {
          // Extract inner value from "ObjectKey{object=value}" format
          String innerValue = source;
          if (innerValue.startsWith("ObjectKey{object=") && innerValue.endsWith("}")) {
            innerValue = innerValue.substring(17, innerValue.length() - 1);
          }
          sourceKey = new ObjectKey(innerValue);
        } else {
          sourceKey = new ObjectKey(id);
        }
        // Log.d(TAG, "SharedPrefCacheKeyStore.get id=" + id + " source=" + source + " sourceKey=" + sourceKey);
      }
      
      String signatureStr = j.optString("signature", null);
     
      Key signatureKey;
      if (signatureStr != null && !"null".equals(signatureStr)) {
        // Extract inner value from "ObjectKey{object=value}" format
        String innerValue = signatureStr;
        if (signatureStr.startsWith("ObjectKey{object=") && signatureStr.endsWith("}")) {
          innerValue = signatureStr.substring(17, signatureStr.length() - 1);
        }
        signatureKey = new ObjectKey(innerValue);
      } else {
        signatureKey = new ObjectKey("signature-none");
      }
      
      return new CacheKeyStore.StoredKeys(sourceKey, signatureKey);
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