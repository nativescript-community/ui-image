package com.nativescript.image;

import java.io.IOException;
import okhttp3.Interceptor;
import okhttp3.Response;

public class LoadSourceInterceptor implements Interceptor {
    private final String url;
    private final ImageLoadSourceCallback callback;
    private boolean notified = false;

    public LoadSourceInterceptor(String url, ImageLoadSourceCallback callback) {
        this.url = url;
        this.callback = callback;
    }

    @Override
    public Response intercept(Chain chain) throws IOException {
        // Notify that network load is starting BEFORE making the request
        if (!notified && callback != null) {
            callback.onLoadStarted(url, "network");
            notified = true;
        }

        // Proceed with the request
        return chain.proceed(chain.request());
    }
}
