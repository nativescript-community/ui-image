package com.nativescript.image;

import androidx.annotation.NonNull;
import com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;

/**
 * CENTER_OUTSIDE scales the image so that both sides are at least the requested size.
 * For an image with an extreme aspect ratio this can mean a decoded bitmap of hundreds of MB
 * (a 51300x4800 image requested at 2400x2400 is decoded at 25650x2400), which Android refuses
 * to draw ("Canvas: trying to draw too large bitmap"). The scale is therefore capped.
 */
public final class BoundedCenterOutside extends DownsampleStrategy {
    // 8M pixels = 32 MB in ARGB_8888, far below the 100 MB limit of the canvas
    private static final float MAX_PIXELS = 8f * 1024 * 1024;
    // stays under the maximum texture size of most GPUs
    private static final float MAX_SIDE = 8192f;

    @Override
    public float getScaleFactor(int sourceWidth, int sourceHeight, int requestedWidth, int requestedHeight) {
        float scale = CENTER_OUTSIDE.getScaleFactor(sourceWidth, sourceHeight, requestedWidth, requestedHeight);
        float maxScale = Math.min(
                (float) Math.sqrt(MAX_PIXELS / ((float) sourceWidth * sourceHeight)),
                MAX_SIDE / Math.max(sourceWidth, sourceHeight));
        return Math.min(scale, maxScale);
    }

    @NonNull
    @Override
    public SampleSizeRounding getSampleSizeRounding(int sourceWidth, int sourceHeight, int requestedWidth, int requestedHeight) {
        return SampleSizeRounding.QUALITY;
    }
}
