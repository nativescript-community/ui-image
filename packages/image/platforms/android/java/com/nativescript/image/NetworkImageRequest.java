package com.nativescript.image;

import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;

import org.json.JSONObject;
import org.json.JSONException;

import java.util.HashMap;
import java.util.Map;
import java.util.Iterator;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;

import android.util.Log;

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
  public static NetworkImageRequest fromUriWithOptions(
      android.net.Uri uri, String jsonOptions, com.facebook.imagepipeline.listener.RequestListener requestListener) {
    ImageRequestBuilder requestBuilder = ImageRequestBuilder.newBuilderWithSource(uri).setRotationOptions( com.facebook.imagepipeline.common.RotationOptions.autoRotate());
    if (requestListener != null) {
        requestBuilder.setRequestListener(requestListener);
    }
    JSONObject object = null;
    JSONObject headers = null;
    if (jsonOptions.length() > 2) {
        try {
            object = new JSONObject(jsonOptions);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    if (object != null) {
        if (object.optBoolean("progressiveRenderingEnabled")) {
            requestBuilder = requestBuilder.setProgressiveRenderingEnabled(true);
        }
        if (object.optBoolean("localThumbnailPreviewsEnabled")) {
            requestBuilder = requestBuilder.setLocalThumbnailPreviewsEnabled(true);
        }
        int decodeWidth = object.optInt("decodeWidth");
        int decodeHeight = object.optInt("decodeHeight");

        if (decodeWidth > 0 || decodeHeight > 0) {
            requestBuilder = requestBuilder.setResizeOptions(new com.facebook.imagepipeline.common.ResizeOptions(decodeWidth > 0 ? decodeWidth : decodeHeight, decodeHeight  > 0 ? decodeHeight : decodeWidth));
        }
        int blurRadius = object.optInt("blurRadius", 0);
        if (blurRadius > 0) {
            int blurDownSampling = object.optInt("blurDownSampling", 1);
            requestBuilder = requestBuilder.setPostprocessor(new com.nativescript.image.ScalingBlurPostprocessor(2, blurRadius, blurDownSampling));
        }
        headers = object.optJSONObject("headers");
    }
    return NetworkImageRequest.fromBuilderWithHeaders(requestBuilder, headers);
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