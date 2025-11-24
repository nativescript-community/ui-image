package com.nativescript.image;

import androidx.annotation.NonNull;
import com.bumptech.glide.Priority;
import com.bumptech.glide.load.DataSource;
import com.bumptech.glide.load.data.DataFetcher;
import okhttp3.Call;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import java.io.IOException;
import java.io.InputStream;
import java.util.Map;
import android.util.Log;

public class CustomDataFetcher implements DataFetcher<InputStream> {
    private final Call.Factory client;
    private final CustomGlideUrl url;
    private InputStream stream;
    private ResponseBody responseBody;
    private Call call;

    public CustomDataFetcher(Call.Factory client, CustomGlideUrl url) {
        this.client = client;
        this.url = url;
    }

    @Override
    public void loadData(@NonNull Priority priority, @NonNull DataCallback<? super InputStream> callback) {
        // Build request with headers
        Request.Builder requestBuilder = new Request.Builder().url(url.toStringUrl());

        for (Map.Entry<String, String> entry : url.getHeaders().entrySet()) {
            requestBuilder.addHeader(entry.getKey(), entry.getValue());
        }

        Request request = requestBuilder.build();

        // Create client with interceptors if needed
        Call.Factory effectiveClient = client;

        if (url.hasProgressListener() || url.hasLoadSourceListener()) {
            OkHttpClient.Builder clientBuilder;

            if (client instanceof OkHttpClient) {
                clientBuilder = ((OkHttpClient) client).newBuilder();
            } else {
                clientBuilder = new OkHttpClient.Builder();
            }

            // Add load source interceptor first (before request)
            if (url.hasLoadSourceListener()) {
                clientBuilder.addInterceptor(
                        new LoadSourceInterceptor(url.toStringUrl(), url.getLoadSourceCallback()));
            }

            // Add progress interceptor (wraps response body)
            if (url.hasProgressListener()) {
                clientBuilder.addNetworkInterceptor(
                        new ProgressInterceptor(url.toStringUrl(), url.getProgressCallback()));
            }

            effectiveClient = clientBuilder.build();
        }

        call = effectiveClient.newCall(request);

        try {
            Response response = call.execute();

            // Check response using public methods
            if (!response.isSuccessful()) {
                callback.onLoadFailed(new IOException("HTTP error: " + response.code()));
                return;
            }

            responseBody = response.body();
            if (responseBody == null) {
                callback.onLoadFailed(new IOException("Received null response body"));
                return;
            }

            stream = responseBody.byteStream();
            callback.onDataReady(stream);

        } catch (IOException e) {
            callback.onLoadFailed(e);
        }
    }

    @Override
    public void cleanup() {
        try {
            if (stream != null) {
                stream.close();
            }
        } catch (IOException e) {
            // Ignore
        }
        if (responseBody != null) {
            responseBody.close();
        }
    }

    @Override
    public void cancel() {
        if (call != null) {
            call.cancel();
        }
    }

    @NonNull
    @Override
    public Class<InputStream> getDataClass() {
        return InputStream.class;
    }

    @NonNull
    @Override
    public DataSource getDataSource() {
        return DataSource.REMOTE;
    }
}