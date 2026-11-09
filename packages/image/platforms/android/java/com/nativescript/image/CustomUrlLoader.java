package com.nativescript.image;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.bumptech.glide.load.Options;
import com.bumptech.glide.load.data.DataFetcher;
import com.bumptech.glide.load.model.GlideUrl;
import com.bumptech.glide.load.model.ModelLoader;
import com.bumptech.glide.load.model.ModelLoaderFactory;
import com.bumptech.glide.load.model.MultiModelLoaderFactory;
import okhttp3.Call;
import okhttp3.OkHttpClient;
import java.io.InputStream;
import android.util.Log;

/**
 * ModelLoader that downloads both CustomGlideUrl and standard GlideUrl with OkHttp.
 */
public class CustomUrlLoader implements ModelLoader<GlideUrl, InputStream> {
    private final Call.Factory client;

    public CustomUrlLoader(Call.Factory client) {
        this.client = client;
    }

    @Nullable
    @Override
    public LoadData<InputStream> buildLoadData(
            @NonNull GlideUrl model,
            int width,
            int height,
            @NonNull Options options) {

        DataFetcher<InputStream> fetcher = new CustomDataFetcher(client, model);

        return new LoadData<>(model, fetcher);
    }

    @Override
    public boolean handles(@NonNull GlideUrl model) {
        // Handles both CustomGlideUrl and standard GlideUrl
        return true;
    }

    public static class Factory implements ModelLoaderFactory<GlideUrl, InputStream> {
        private final OkHttpClient client;

        public Factory(OkHttpClient client) {
            this.client = client;
        }

        @NonNull
        @Override
        public ModelLoader<GlideUrl, InputStream> build(MultiModelLoaderFactory multiFactory) {
            return new CustomUrlLoader(client);
        }

        @Override
        public void teardown() {
        }
    }
}