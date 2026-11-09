package com.nativescript.image;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.bumptech.glide.Priority;
import com.bumptech.glide.load.DataSource;
import com.bumptech.glide.load.Options;
import com.bumptech.glide.load.data.DataFetcher;
import com.bumptech.glide.load.data.HttpUrlFetcher;
import com.bumptech.glide.load.model.GlideUrl;
import com.bumptech.glide.load.model.ModelLoader;
import com.bumptech.glide.load.model.ModelLoaderFactory;
import com.bumptech.glide.load.model.MultiModelLoaderFactory;
import com.bumptech.glide.util.ContentLengthInputStream;
import java.io.FilterInputStream;
import java.io.IOException;
import java.io.InputStream;

/**
 * Network loader used when OkHttp is not part of the app: Glide's HttpURLConnection fetcher, which still
 * reports the progress and load source of a {@link CustomGlideUrl}.
 */
public class UrlConnectionLoader implements ModelLoader<GlideUrl, InputStream> {
    // same as the OkHttp defaults
    private static final int TIMEOUT_MS = 10000;
    private static final long NOTIFY_INTERVAL = 8192L;

    @Nullable
    @Override
    public LoadData<InputStream> buildLoadData(@NonNull GlideUrl model, int width, int height, @NonNull Options options) {
        DataFetcher<InputStream> fetcher = new HttpUrlFetcher(model, TIMEOUT_MS);
        if (model instanceof CustomGlideUrl) {
            CustomGlideUrl url = (CustomGlideUrl) model;
            if (url.hasProgressListener() || url.hasLoadSourceListener()) {
                fetcher = new TrackedFetcher(fetcher, url);
            }
        }
        return new LoadData<>(model, fetcher);
    }

    @Override
    public boolean handles(@NonNull GlideUrl model) {
        return true;
    }

    public static class Factory implements ModelLoaderFactory<GlideUrl, InputStream> {
        @NonNull
        @Override
        public ModelLoader<GlideUrl, InputStream> build(MultiModelLoaderFactory multiFactory) {
            return new UrlConnectionLoader();
        }

        @Override
        public void teardown() {}
    }

    private static class TrackedFetcher implements DataFetcher<InputStream> {
        private final DataFetcher<InputStream> delegate;
        private final CustomGlideUrl url;

        TrackedFetcher(DataFetcher<InputStream> delegate, CustomGlideUrl url) {
            this.delegate = delegate;
            this.url = url;
        }

        @Override
        public void loadData(@NonNull Priority priority, @NonNull final DataCallback<? super InputStream> callback) {
            if (url.hasLoadSourceListener()) {
                url.getLoadSourceCallback().onLoadStarted(url.toStringUrl(), "network");
            }
            delegate.loadData(priority, new DataCallback<InputStream>() {
                @Override
                public void onDataReady(@Nullable InputStream data) {
                    if (data != null && url.hasProgressListener()) {
                        data = new ProgressInputStream(data, url.toStringUrl(), url.getProgressCallback());
                    }
                    callback.onDataReady(data);
                }

                @Override
                public void onLoadFailed(@NonNull Exception e) {
                    callback.onLoadFailed(e);
                }
            });
        }

        @Override
        public void cleanup() {
            delegate.cleanup();
        }

        @Override
        public void cancel() {
            delegate.cancel();
        }

        @NonNull
        @Override
        public Class<InputStream> getDataClass() {
            return delegate.getDataClass();
        }

        @NonNull
        @Override
        public DataSource getDataSource() {
            return delegate.getDataSource();
        }
    }

    private static class ProgressInputStream extends FilterInputStream {
        private final String url;
        private final ImageProgressCallback callback;
        // -1 when the server did not send a Content-Length
        private final long total;
        private long totalRead = 0;
        private long lastNotified = 0;

        ProgressInputStream(InputStream in, String url, ImageProgressCallback callback) {
            super(in);
            this.url = url;
            this.callback = callback;
            long length = -1;
            if (in instanceof ContentLengthInputStream) {
                try {
                    length = in.available();
                } catch (IOException ignored) {
                }
            }
            this.total = length;
        }

        private void onRead(int count) {
            if (count <= 0) {
                return;
            }
            totalRead += count;
            if (totalRead - lastNotified >= NOTIFY_INTERVAL || totalRead >= total) {
                lastNotified = totalRead;
                callback.onProgress(url, totalRead, total);
            }
        }

        @Override
        public int read() throws IOException {
            int value = super.read();
            if (value != -1) {
                onRead(1);
            }
            return value;
        }

        @Override
        public int read(byte[] buffer, int offset, int length) throws IOException {
            int count = super.read(buffer, offset, length);
            onRead(count);
            return count;
        }
    }
}
