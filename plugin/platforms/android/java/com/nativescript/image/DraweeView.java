package com.nativescript.image;

import com.facebook.drawee.view.SimpleDraweeView;

import android.view.View.MeasureSpec;
import android.content.Context;

public class DraweeView extends SimpleDraweeView {
    public int imageWidth = 0;
    public int imageHeight = 0;

    DraweeView(Context context) {
        super(context);
    }
    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        int widthMode = MeasureSpec.getMode(widthMeasureSpec);
        int width = MeasureSpec.getSize(widthMeasureSpec);
        int heightMode = MeasureSpec.getMode(heightMeasureSpec);
        int height = MeasureSpec.getSize(heightMeasureSpec);
        final float aspectRatio = this.getAspectRatio();
        if (aspectRatio > 0) {
            boolean finiteWidth = widthMode == android.view.View.MeasureSpec.EXACTLY;
            boolean finiteHeight = heightMode == android.view.View.MeasureSpec.EXACTLY;
            if (imageWidth != 0 && imageHeight != 0) {
                if (!finiteWidth) {
                    widthMeasureSpec = android.view.View.MeasureSpec.makeMeasureSpec((int)(height * aspectRatio), android.view.View.MeasureSpec.EXACTLY);
                }
                if (!finiteHeight) {
                    heightMeasureSpec = android.view.View.MeasureSpec.makeMeasureSpec((int)(width / aspectRatio), android.view.View.MeasureSpec.EXACTLY);
                }
            }
        }
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    }
}
