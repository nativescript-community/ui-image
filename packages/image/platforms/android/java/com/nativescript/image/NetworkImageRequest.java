package com.nativescript.image;

import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;

import org.json.JSONObject;
import org.json.JSONException;

import java.util.HashMap;
import java.util.Map;
import java.util.Iterator;

/** Extended ImageRequest with request headers */
public class NetworkImageRequest extends ImageRequest {

  /** Headers for the request */
  private Map<String, String> mHeaders = null;

static Map<String, String> toMap(JSONObject object) throws JSONException {
    Map<String, String> map = new HashMap<String, String>();

    Iterator<String> keysItr = object.keys();
    while(keysItr.hasNext()) {
        String key = keysItr.next();
        Object value = object.get(key);
        
        if(value instanceof String) {
            map.put(key, (String)value);
        }
    }
    return map;
}

  public static NetworkImageRequest fromBuilderWithHeaders(
      ImageRequestBuilder builder, JSONObject headers) {
    return new NetworkImageRequest(builder, headers);
  }

  protected NetworkImageRequest(ImageRequestBuilder builder, JSONObject headers) {
    super(builder);
    if (headers != null) {
        try {
            mHeaders = toMap(headers);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
  }

  public Map<String, String> getHeaders() {
    return mHeaders;
  }
}