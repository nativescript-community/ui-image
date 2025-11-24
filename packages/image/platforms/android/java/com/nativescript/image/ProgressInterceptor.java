package com.nativescript.image;

import java.io.IOException;
import okhttp3.Interceptor;
import okhttp3.Response;

public class ProgressInterceptor implements Interceptor {
    private final String url;
    private final ImageProgressCallback callback;

    public ProgressInterceptor(String url, ImageProgressCallback callback) {
        this.url = url;
        this.callback = callback;
    }

    @Override
    public Response intercept(Chain chain) throws IOException {
        Response originalResponse = chain.proceed(chain.request());

        // Wrap response body with progress tracking
        return originalResponse.newBuilder()
                .body(new ProgressResponseBody(originalResponse.body(), url, callback))
                .build();
    }
}
