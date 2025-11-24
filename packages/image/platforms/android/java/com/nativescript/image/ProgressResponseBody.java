package com.nativescript.image;

import java.io.IOException;
import okhttp3.MediaType;
import okhttp3.ResponseBody;
import okio.Buffer;
import okio.BufferedSource;
import okio.ForwardingSource;
import okio.Okio;
import okio.Source;

public class ProgressResponseBody extends ResponseBody {
    private final ResponseBody responseBody;
    private final String url;
    private final ImageProgressCallback callback;
    private BufferedSource bufferedSource;

    public ProgressResponseBody(ResponseBody responseBody, String url, ImageProgressCallback callback) {
        this.responseBody = responseBody;
        this.url = url;
        this.callback = callback;
    }

    @Override
    public MediaType contentType() {
        return responseBody.contentType();
    }

    @Override
    public long contentLength() {
        return responseBody.contentLength();
    }

    @Override
    public BufferedSource source() {
        if (bufferedSource == null) {
            bufferedSource = Okio.buffer(source(responseBody.source()));
        }
        return bufferedSource;
    }

    private Source source(Source source) {
        return new ForwardingSource(source) {
            long totalBytesRead = 0L;
            long lastNotified = 0L;
            static final long NOTIFY_INTERVAL = 8192L; // 8KB

            @Override
            public long read(Buffer sink, long byteCount) throws IOException {
                long bytesRead = super.read(sink, byteCount);

                if (bytesRead != -1) {
                    totalBytesRead += bytesRead;

                    // Notify if we've read enough bytes or at completion
                    if (totalBytesRead - lastNotified >= NOTIFY_INTERVAL ||
                            totalBytesRead >= contentLength()) {

                        if (callback != null) {
                            callback.onProgress(url, totalBytesRead, contentLength());
                        }
                        lastNotified = totalBytesRead;
                    }
                }

                return bytesRead;
            }
        };
    }
}