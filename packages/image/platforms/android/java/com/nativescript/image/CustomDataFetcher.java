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
import java.io.FilterInputStream;
import java.io.InterruptedIOException;
import java.net.SocketException;
import java.io.PrintStream;
import java.io.PrintWriter;

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

    // Buffer-less wrapper that masks cancel/reset IOExceptions so they don't yield large stack traces
    private static class MaskingInputStream extends FilterInputStream {
        protected MaskingInputStream(InputStream in) { super(in); }

        @Override
        public int read() throws IOException {
            try {
                return super.read();
            } catch (IOException e) {
                if (isCancelException(e)) {
                    throw SilentCancelException.INSTANCE;
                }
                throw e;
            }
        }

        @Override
        public int read(byte[] b, int off, int len) throws IOException {
            try {
                return super.read(b, off, len);
            } catch (IOException e) {
                if (isCancelException(e)) {
                    throw SilentCancelException.INSTANCE;
                }
                throw e;
            }
        }
    }

    // A throwable that avoids printing stack traces or messages when logged.
    private static final class SilentCancelException extends IOException {
        static final SilentCancelException INSTANCE = new SilentCancelException();
        private SilentCancelException() {
            super((String) null);
            setStackTrace(new StackTraceElement[0]);
        }
        @Override
        public String toString() { return ""; }
        @Override
        public void printStackTrace(PrintStream s) { /* no-op */ }
        @Override
        public void printStackTrace(PrintWriter s) { /* no-op */ }
        @Override
        public synchronized Throwable fillInStackTrace() { return this; }
    }

    // Heuristic detection for request-cancellation exceptions (stream reset, socket closed, etc.)
    private static boolean isCancelException(Throwable e) {
        if (e == null) return false;
        Throwable t = e;
        while (t != null) {
            String cls = t.getClass().getName();
            if (cls != null && (cls.endsWith("StreamResetException") || cls.contains("StreamReset"))) {
                return true;
            }
            if (t instanceof InterruptedIOException) return true;
            if (t instanceof SocketException) return true;
            String msg = t.getMessage();
            if (msg != null) {
                String lower = msg.toLowerCase();
                if (lower.contains("cancel") || lower.contains("canceled") || lower.contains("stream was reset")) return true;
            }
            t = t.getCause();
        }
        return false;
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
            // Wrap to mask noisy "StreamResetException: stream was reset: CANCEL" traces
            stream = new MaskingInputStream(stream);
            callback.onDataReady(stream);

        } catch (IOException e) {
            // If request was canceled, call onLoadFailed with a trimmed exception (no stack trace) to avoid large logs
            if (isCancelException(e)) {
                callback.onLoadFailed(SilentCancelException.INSTANCE);
                return;
            }
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