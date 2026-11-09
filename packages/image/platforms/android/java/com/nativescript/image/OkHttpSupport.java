package com.nativescript.image;

import com.bumptech.glide.Registry;
import com.bumptech.glide.load.model.GlideUrl;
import java.io.InputStream;
import okhttp3.OkHttpClient;

/**
 * The only place which needs OkHttp to be loaded: OkHttp is optional (see `glideUseOkHttp` in include.gradle).
 * Callers must check {@link #isAvailable()} first.
 */
final class OkHttpSupport {
    private OkHttpSupport() {}

    static boolean isAvailable() {
        try {
            Class.forName("okhttp3.OkHttpClient");
            return true;
        } catch (ClassNotFoundException | LinkageError e) {
            return false;
        }
    }

    static void register(Registry registry) {
        Object configured = GlideConfiguration.getInstance().getOkHttpClient();
        OkHttpClient client = configured instanceof OkHttpClient ? (OkHttpClient) configured : new OkHttpClient.Builder().build();
        registry.replace(GlideUrl.class, InputStream.class, new CustomUrlLoader.Factory(client));
    }
}
