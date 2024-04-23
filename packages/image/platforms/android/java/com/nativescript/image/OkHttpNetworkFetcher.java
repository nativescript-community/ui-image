package com.nativescript.image;

import android.net.Uri;
import android.os.SystemClock;
import android.util.Log;
import com.facebook.imagepipeline.producers.NetworkFetcher;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Executor;
import okhttp3.CacheControl;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Request;

class OkHttpNetworkFetcher extends com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher {

  private static final String TAG = "OkHttpNetworkFetcher";

  private final OkHttpClient mOkHttpClient;
  private final Executor mCancellationExecutor;

  /**
   * @param okHttpClient client to use
   */
  public OkHttpNetworkFetcher(OkHttpClient okHttpClient) {
    super(okHttpClient);
    mOkHttpClient = okHttpClient;
    mCancellationExecutor = okHttpClient.dispatcher().executorService();
  }

  @Override
  public void fetch(
      final OkHttpNetworkFetcher.OkHttpNetworkFetchState fetchState,
      final NetworkFetcher.Callback callback) {
    fetchState.submitTime = SystemClock.elapsedRealtime();
    final Uri uri = fetchState.getUri();
      Map<String, String> requestHeaders = null;
      if (fetchState.getContext().getImageRequest() instanceof NetworkImageRequest) {
      NetworkImageRequest networkImageRequest =
          (NetworkImageRequest) fetchState.getContext().getImageRequest();
      requestHeaders = networkImageRequest.getHeaders();
    }
    if (requestHeaders == null) {
      requestHeaders = Collections.emptyMap();
    }
    final Request request =
        new Request.Builder()
            .url(uri.toString())
            .headers(Headers.of(requestHeaders))
            .get()
            .build();

    fetchWithRequest(fetchState, callback, request);
  }
}