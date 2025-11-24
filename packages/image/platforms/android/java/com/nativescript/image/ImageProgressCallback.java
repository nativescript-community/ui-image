package com.nativescript.image;

public interface ImageProgressCallback {
    void onProgress(String url, long bytesRead, long totalBytes);
}