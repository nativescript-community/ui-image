package com.nativescript.image;

import com.bumptech.glide.load.model.GlideUrl;
import com.bumptech.glide.load.model.LazyHeaders;
import java.util.Map;

/**
 * Custom GlideUrl with progress and load source callbacks.
 * Headers are automatically included in cache key by Glide's LazyHeaders.
 */
public class CustomGlideUrl extends GlideUrl {
    private final ImageProgressCallback progressCallback;
    private final ImageLoadSourceCallback loadSourceCallback;

    public CustomGlideUrl(String url, 
                         Map<String, String> headers, 
                         ImageProgressCallback progressCallback,
                         ImageLoadSourceCallback loadSourceCallback) {
        // Use LazyHeaders.Builder - Glide automatically includes these in cache key!
        super(url, buildLazyHeaders(headers));
        this.progressCallback = progressCallback;
        this.loadSourceCallback = loadSourceCallback;
    }

    private static LazyHeaders buildLazyHeaders(Map<String, String> headers) {
        LazyHeaders.Builder builder = new LazyHeaders.Builder();
        
        if (headers != null) {
            for (Map.Entry<String, String> entry : headers.entrySet()) {
                builder.addHeader(entry.getKey(), entry.getValue());
            }
        }
        
        return builder.build();
    }

    public ImageProgressCallback getProgressCallback() {
        return progressCallback;
    }

    public ImageLoadSourceCallback getLoadSourceCallback() {
        return loadSourceCallback;
    }

    public boolean hasProgressListener() {
        return progressCallback != null;
    }

    public boolean hasLoadSourceListener() {
        return loadSourceCallback != null;
    }
}