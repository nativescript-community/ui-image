package com.nativescript.image;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Base64;
import org.json.JSONException;
import org.json.JSONObject;
import com.bumptech.glide.load.Key;
import com.bumptech.glide.signature.ObjectKey;
import com.bumptech.glide.load.Options;
import com.bumptech.glide.load.Transformation;

/**
 * SharedPreferences-backed minimal persistent store.
 * Stores:
 * - source (string)
 * - signature (string)
 * - width, height
 * - decodedResourceClass (string)
 * - transformationKeyBytes (base64)
 * - optionsKeyBytes (base64)
 *
 * For transformations: we store recorded bytes (from RecordingDigest) rather
 * than trying to
 * re-create the Transformation object.
 */
public class SharedPrefCacheKeyStore {
  private static final String PREFS = "glide_cache_keys_v2";
  private final SharedPreferences prefs;

  public SharedPrefCacheKeyStore(Context context) {
    this.prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
  }

  public void put(String id, CacheKeyStore.StoredKeys keys) {
    try {
      JSONObject j = new JSONObject();
      j.put("source", keys.sourceKey == null ? JSONObject.NULL : keys.sourceKey.toString());
      j.put("signature", keys.signature == null ? JSONObject.NULL : keys.signature.toString());
      j.put("width", keys.width);
      j.put("height", keys.height);
      j.put("decodedResourceClass",
          keys.decodedResourceClass == null ? JSONObject.NULL : keys.decodedResourceClass.getName());
      j.put("transformationBytes", keys.transformationKeyBytes == null ? JSONObject.NULL
          : Base64.encodeToString(keys.transformationKeyBytes, Base64.NO_WRAP));
      j.put("optionsBytes",
          keys.optionsKeyBytes == null ? JSONObject.NULL : Base64.encodeToString(keys.optionsKeyBytes, Base64.NO_WRAP));
      prefs.edit().putString(id, j.toString()).apply();
    } catch (JSONException e) {
      // log if you want
    }
  }

  public CacheKeyStore.StoredKeys get(String id) {
    String s = prefs.getString(id, null);
    if (s == null)
      return null;
    try {
      JSONObject j = new JSONObject(s);
      String source = j.optString("source", null);
      String signature = j.optString("signature", null);
      int width = j.optInt("width", com.bumptech.glide.request.target.Target.SIZE_ORIGINAL);
      int height = j.optInt("height", com.bumptech.glide.request.target.Target.SIZE_ORIGINAL);
      String decodedName = j.optString("decodedResourceClass", android.graphics.Bitmap.class.getName());
      String transformationBase64 = j.optString("transformationBytes", null);
      String optionsBase64 = j.optString("optionsBytes", null);

      Key sourceKey = source != null && !"null".equals(source) ? new ObjectKey(source) : new ObjectKey(id);
      Key signatureKey = signature != null && !"null".equals(signature) ? new ObjectKey(signature)
          : new ObjectKey("signature-none");
      Class<?> decodedClass = Class.forName(decodedName);
      byte[] transformationBytes = (transformationBase64 == null || "null".equals(transformationBase64)) ? null
          : Base64.decode(transformationBase64, Base64.NO_WRAP);
      byte[] optionsBytes = (optionsBase64 == null || "null".equals(optionsBase64)) ? null
          : Base64.decode(optionsBase64, Base64.NO_WRAP);

      // We cannot re-create a reliable Options instance from optionsBytes. We store
      // optionsBytes and will replay them
      // into the ResourceCacheKey digest when deleting. For in-memory Options pass an
      // empty instance or the caller's instance.
      Options options = new Options();
      return new CacheKeyStore.StoredKeys(sourceKey, signatureKey, width, height, /* transformation */ null,
          transformationBytes, decodedClass, options, optionsBytes, /* engineKey */ null);
    } catch (Exception e) {
      return null;
    }
  }

  public void remove(String id) {
    prefs.edit().remove(id).apply();
  }
}