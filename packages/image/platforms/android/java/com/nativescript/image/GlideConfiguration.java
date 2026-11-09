package com.nativescript.image;


/**
 * Singleton to hold Glide configuration values that must be set before Glide initializes.
 * Call GlideConfiguration.setMemoryCacheSize() from your Application.onCreate() 
 * or before any Glide usage.
 */
public class GlideConfiguration {
    private static GlideConfiguration instance;
    
    private long diskCacheSize = 250 * 1024 * 1024; 
    private long memoryCacheSize = -1; // -1 means use default
    private float memoryCacheScreens = 2.0f;
    private String diskCacheName = null;
    private Object okHttpClient = null;
    
    private GlideConfiguration() {
    }
    
    public static synchronized GlideConfiguration getInstance() {
        if (instance == null) {
            instance = new GlideConfiguration();
        }
        return instance;
    }
    
    /**
     * Set custom disk cache name.
     * Must be called before Glide is initialized (before first image load).
     * @param name String
     */
    public void setDiskCacheName(String diskCacheName) {
        this.diskCacheName = diskCacheName;
    }
    
    public String getDiskCacheName() {
        return diskCacheName;
    }
    
    /**
     * Set custom memory cache size in bytes.
     * Must be called before Glide is initialized (before first image load).
     * @param bytes Size in bytes, or -1 to use default calculator
     */
    public void setMemoryCacheSize(long bytes) {
        this.memoryCacheSize = bytes;
    }
    
    public long getMemoryCacheSize() {
        return memoryCacheSize;
    }
    
    /**
     * Set custom disk cache size in bytes.
     * Must be called before Glide is initialized (before first image load).
     * @param bytes Size in bytes
     */
    public void setDiskCacheSize(long bytes) {
        this.diskCacheSize = bytes;
    }
    
    public long getDiskCacheSize() {
        return diskCacheSize;
    }
    
    /**
     * Set memory cache screens multiplier (default 2.0).
     * Only used if memoryCacheSize is -1.
     */
    public void setMemoryCacheScreens(float screens) {
        this.memoryCacheScreens = screens;
    }
    
    public float getMemoryCacheScreens() {
        return memoryCacheScreens;
    }

    /**
     * Set a custom OkHttp client used to download images.
     * Must be called before Glide is initialized (before first image load).
     * Ignored when OkHttp is not part of the app (see `glideUseOkHttp`).
     * Typed as Object so this class does not need OkHttp to load.
     * @param client okhttp3.OkHttpClient, or null to use a default client
     */
    public void setOkHttpClient(Object client) {
        this.okHttpClient = client;
    }

    public Object getOkHttpClient() {
        return okHttpClient;
    }
}
