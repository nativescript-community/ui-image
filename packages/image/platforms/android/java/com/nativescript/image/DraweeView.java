package com.nativescript.image;

import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
import com.facebook.drawee.generic.GenericDraweeHierarchy;

import android.graphics.Outline;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.view.View.MeasureSpec;
import android.view.View;
import android.content.Context;
import android.os.Build;
import android.util.Log;
import android.util.AttributeSet;

import android.graphics.Canvas;
import android.graphics.Path;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.view.ViewOutlineProvider;

import org.nativescript.widgets.BorderDrawable;
import com.nativescript.image.ScalingUtils.AbstractScaleType;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;

import java.util.Arrays;

public class DraweeView extends SimpleDraweeView {
    public int imageWidth = 0;
    public int imageHeight = 0;
    public boolean isUsingOutlineProvider = false;
    public boolean noRatioEnforce = false;
    private static Paint clipPaint;

    private boolean mLegacyVisibilityHandlingEnabled = false;

    private static boolean sGlobalLegacyVisibilityHandlingEnabled = true;

    public static void setGlobalLegacyVisibilityHandlingEnabled(
        boolean legacyVisibilityHandlingEnabled) {
        sGlobalLegacyVisibilityHandlingEnabled = legacyVisibilityHandlingEnabled;
    }

    public DraweeView(Context context, GenericDraweeHierarchy hierarchy) {
        super(context);
    }

    public DraweeView(Context context) {
        super(context);
        // In Android N and above, visibility handling for Drawables has been changed, which breaks
        // activity transitions with DraweeViews.
        mLegacyVisibilityHandlingEnabled = sGlobalLegacyVisibilityHandlingEnabled  && context.getApplicationInfo().targetSdkVersion >= 24; //Build.VERSION_CODES.N
    }

    public DraweeView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public DraweeView(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
    }

    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        maybeOverrideVisibilityHandling();
        onAttach();
    }

    @Override
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        maybeOverrideVisibilityHandling();
        onDetach();
    }

    @Override
    public void onStartTemporaryDetach() {
        super.onStartTemporaryDetach();
        maybeOverrideVisibilityHandling();
        onDetach();
    }

    @Override
    public void onFinishTemporaryDetach() {
        super.onFinishTemporaryDetach();
        maybeOverrideVisibilityHandling();
        onAttach();
    }

    @Override
    protected void onVisibilityChanged(
        View changedView,
        int visibility) {
        super.onVisibilityChanged(changedView, visibility);
        maybeOverrideVisibilityHandling();
    }

    @Override
    public void onVisibilityAggregated (boolean isVisible) {
        super.onVisibilityAggregated(isVisible);
        maybeOverrideVisibilityHandling();
    }

    private void maybeOverrideVisibilityHandling() {
        if (mLegacyVisibilityHandlingEnabled)  {
            Drawable drawable = getDrawable();
            if (drawable != null) {
                drawable.setVisible(getVisibility() == VISIBLE, false);
            }
        }
    }

    public void setLegacyVisibilityHandlingEnabled(boolean legacyVisibilityHandlingEnabled) {
        mLegacyVisibilityHandlingEnabled = legacyVisibilityHandlingEnabled;
    }

	public void updateOutlineProvider() {
        Drawable drawable = getBackground();
        if (android.os.Build.VERSION.SDK_INT >= 21) {
            // we try to support N setting outline provider now
            if (!isUsingOutlineProvider && getOutlineProvider() != null) {
                // already handled somewhere else
                return;
            }
            if (drawable instanceof BorderDrawable && (android.os.Build.VERSION.SDK_INT >= 33 || ((BorderDrawable)drawable).hasUniformBorderRadius())) {
                setOutlineProvider(new ViewOutlineProvider() {
                    @Override
                    public void getOutline(View view, Outline outline) {
                        Drawable drawable = getBackground();
                        if (drawable instanceof BorderDrawable) {
                            BorderDrawable borderDrawable = (BorderDrawable) drawable;
                            // that if test is only needed until N BorderDrawable is updated to do it
                            if (borderDrawable.hasUniformBorderRadius()) {
                                // outlineRect.set(borderDrawable.getBounds());
                                outline.setRoundRect(borderDrawable.getBounds(), borderDrawable.getBorderBottomLeftRadius());
                            } else {
                                drawable.getOutline(outline);
                            }
                        } else {
                            outline.setRect(100, 100, view.getWidth() - 200, view.getHeight() - 200);
                        }
                    }
                });
                setClipToOutline(true);
                isUsingOutlineProvider = true;
            // } else if (android.os.Build.VERSION.SDK_INT >= 21) {
            //     isUsingOutlineProvider = false;
            //     setOutlineProvider(null);
            //     setClipToOutline(false);
            }
        }
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        int widthMode = MeasureSpec.getMode(widthMeasureSpec);
        int width = MeasureSpec.getSize(widthMeasureSpec);
        int heightMode = MeasureSpec.getMode(heightMeasureSpec);
        int height = MeasureSpec.getSize(heightMeasureSpec);

        boolean finiteWidth = widthMode == android.view.View.MeasureSpec.EXACTLY;
        boolean finiteHeight = heightMode == android.view.View.MeasureSpec.EXACTLY;
        float aspectRatio = this.getAspectRatio();
        if (aspectRatio > 0 && !this.noRatioEnforce) {
            Object scaleType = getHierarchy().getActualImageScaleType();
            if (scaleType instanceof AbstractScaleType) {
                final float rotation = ((AbstractScaleType)scaleType).getImageRotation();
                if (Math.abs(rotation) % 180 != 0) {
                    aspectRatio = 1.0f / aspectRatio;
                }
            }
            if (imageWidth != 0 && imageHeight != 0) {
                if (!finiteWidth && finiteHeight) {
                    widthMeasureSpec = android.view.View.MeasureSpec.makeMeasureSpec((int) (height * aspectRatio),
                            android.view.View.MeasureSpec.EXACTLY);
                } else if (!finiteHeight && finiteWidth) {
                    heightMeasureSpec = android.view.View.MeasureSpec.makeMeasureSpec((int) (width / aspectRatio),
                            android.view.View.MeasureSpec.EXACTLY);
                } else if (!finiteWidth &&  !finiteHeight ) {
                    float viewRatio = width / (float)height;
                    if (viewRatio < aspectRatio) {
                        widthMeasureSpec = android.view.View.MeasureSpec.makeMeasureSpec((int) width, android.view.View.MeasureSpec.EXACTLY);
                        heightMeasureSpec = android.view.View.MeasureSpec.makeMeasureSpec((int) (width / aspectRatio), android.view.View.MeasureSpec.EXACTLY);
                    } else {
                        widthMeasureSpec = android.view.View.MeasureSpec.makeMeasureSpec((int) (height * aspectRatio), android.view.View.MeasureSpec.EXACTLY);
                        heightMeasureSpec = android.view.View.MeasureSpec.makeMeasureSpec((int) height, android.view.View.MeasureSpec.EXACTLY);
                    }
                }
            }
        } else {
            if (!finiteWidth && finiteHeight) {
                widthMeasureSpec = android.view.View.MeasureSpec.makeMeasureSpec.makeMeasureSpec(0, android.view.View.MeasureSpec.AT_MOST);
            }
            else if (!finiteHeight && finiteWidth) {
                heightMeasureSpec = android.view.View.MeasureSpec.makeMeasureSpec.makeMeasureSpec(0, android.view.View.MeasureSpec.AT_MOST);
            }
        }
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    }

    Path innerBorderPath;
    Path innerBorderTempPath;

    private Path generateInnerBorderPath(BorderDrawable borderDrawable) {

        float borderTopLeftRadius = borderDrawable.getBorderTopLeftRadius();
        float borderTopRightRadius = borderDrawable.getBorderTopRightRadius();
        float borderBottomRightRadius = borderDrawable.getBorderBottomRightRadius();
        float borderBottomLeftRadius = borderDrawable.getBorderBottomLeftRadius();
        float borderLeftWidth = borderDrawable.getBorderLeftWidth();
        float borderBottomWidth = borderDrawable.getBorderBottomWidth();
        float borderTopWidth = borderDrawable.getBorderTopWidth();
        float borderRightWidth = borderDrawable.getBorderRightWidth();
        if (innerBorderPath == null) {
            innerBorderPath = new Path();
        } else {
            innerBorderPath.reset();
        }
        if (innerBorderTempPath == null) {
            innerBorderTempPath = new Path();
        } else {
            innerBorderTempPath.reset();
        }
        Rect bounds = borderDrawable.getBounds();
        float width = (float) borderDrawable.getBounds().width();
        float height = (float) borderDrawable.getBounds().height();

        RectF borderInnerRect = new RectF(borderLeftWidth, borderTopWidth, width - borderRightWidth,
                height - borderBottomWidth);
        float[] borderInnerRadii = { Math.max(0, borderTopLeftRadius - borderLeftWidth),
                Math.max(0, borderTopLeftRadius - borderTopWidth), Math.max(0, borderTopRightRadius - borderRightWidth),
                Math.max(0, borderTopRightRadius - borderTopWidth),
                Math.max(0, borderBottomRightRadius - borderRightWidth),
                Math.max(0, borderBottomRightRadius - borderBottomWidth),
                Math.max(0, borderBottomLeftRadius - borderLeftWidth),
                Math.max(0, borderBottomLeftRadius - borderBottomWidth) };
        innerBorderTempPath.addRoundRect(borderInnerRect, borderInnerRadii, Path.Direction.CW);
        innerBorderPath.addRect(new RectF(bounds), Path.Direction.CW);
        innerBorderPath.op(innerBorderTempPath, Path.Op.DIFFERENCE);
        return innerBorderPath;
    }

    @Override
    protected void onDraw(Canvas canvas) {
        Drawable drawable = getBackground();
        if (!isUsingOutlineProvider && drawable instanceof BorderDrawable) {
            BorderDrawable borderDrawable = (BorderDrawable) drawable;
            Path clipPath = generateInnerBorderPath(borderDrawable);
            if (clipPath != null) {
                if (DraweeView.clipPaint == null) {
                    DraweeView.clipPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
                    DraweeView.clipPaint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.CLEAR));
                }
                int saveCount;
                int width = getWidth();
                int height = getHeight();
                if (android.os.Build.VERSION.SDK_INT >= 21) {
                    saveCount = canvas.saveLayer(new android.graphics.RectF(0.0f, 0.0f, width, height), null);
                } else {
                    saveCount = canvas.saveLayer(0.0f, 0.0f, width, height, null, Canvas.ALL_SAVE_FLAG);
                }
                super.onDraw(canvas);
                canvas.drawPath(clipPath, DraweeView.clipPaint);
                canvas.restoreToCount(saveCount);
                return;
            }
        } 
        super.onDraw(canvas);
    }

    public void setUri(android.net.Uri uri, String jsonOptions, com.facebook.drawee.controller.ControllerListener listener) {
    ImageRequestBuilder requestBuilder = ImageRequestBuilder.newBuilderWithSource(uri).setRotationOptions( com.facebook.imagepipeline.common.RotationOptions.autoRotate());
        JSONObject object = null;
        JSONObject headers = null;
        if (jsonOptions.length() > 2) {
            try {
                object = new JSONObject(jsonOptions);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        if (object != null) {
            if (object.optBoolean("progressiveRenderingEnabled")) {
                requestBuilder = requestBuilder.setProgressiveRenderingEnabled(true);
            }
            if (object.optBoolean("localThumbnailPreviewsEnabled")) {
                requestBuilder = requestBuilder.setLocalThumbnailPreviewsEnabled(true);
            }
            int decodeWidth = object.optInt("decodeWidth");
            int decodeHeight = object.optInt("decodeHeight");

            if (decodeWidth > 0 || decodeHeight > 0) {
                requestBuilder = requestBuilder.setResizeOptions(new com.facebook.imagepipeline.common.ResizeOptions(decodeWidth > 0 ? decodeWidth : decodeHeight, decodeHeight  > 0 ? decodeHeight : decodeWidth));
            }
            int blurRadius = object.optInt("blurRadius", 0);
            if (blurRadius > 0) {
                int blurDownSampling = object.optInt("blurDownSampling", 1);
                requestBuilder = requestBuilder.setPostprocessor(new com.nativescript.image.ScalingBlurPostprocessor(2, blurRadius, blurDownSampling));
            }
            headers = object.optJSONObject("headers");
        }
        ImageRequest request = NetworkImageRequest.fromBuilderWithHeaders(requestBuilder, headers);

        // if (object != null && object.optBoolean("async") == false) {
        //     DataSource<CloseableReference<CloseableImage>> dataSource =
        //         imagePipeline.fetchImageFromBitmapCache(imageRequest, uri.toString());
        //     try {
        //     CloseableReference<CloseableImage> result = DataSources.waitForFinalResult(dataSource);
        //     if (result != null) {
        //         // Do something with the image, but do not keep the reference to it!
        //         // The image may get recycled as soon as the reference gets closed below.
        //         // If you need to keep a reference to the image, read the following sections.
        //     }
        //     } finally {
        //         dataSource.close();
        //     }
        // }

        PipelineDraweeControllerBuilder builder = com.facebook.drawee.backends.pipeline.Fresco.newDraweeControllerBuilder();
        builder.setImageRequest(request);
        builder.setCallerContext(uri.toString());
        builder.setControllerListener(listener);
        builder.setOldController(getController());
        // if (Trace.isEnabled()) {
        //     builder.setPerfDataListener(
        //         new com.facebook.drawee.backends.pipeline.info.ImagePerfDataListener({
        //             onImageLoadStatusUpdated(param0: com.facebook.drawee.backends.pipeline.info.ImagePerfData, param1: number) {
        //                 CLog(CLogTypes.info, 'onImageLoadStatusUpdated', param0, param1);
        //             },
        //             onImageVisibilityUpdated(param0: com.facebook.drawee.backends.pipeline.info.ImagePerfData, param1: number) {
        //                 CLog(CLogTypes.info, 'onImageVisibilityUpdated', param0, param1);
        //             }
        //         })
        //     );
        // }
        if (object != null) {
           String lowerResSrc = object.optString("lowerResSrc");
            if (lowerResSrc != null) {
                builder.setLowResImageRequest(com.facebook.imagepipeline.request.ImageRequest.fromUri(android.net.Uri.parse(lowerResSrc)));
            }

            if (object.optBoolean("autoPlayAnimations")) {
                builder.setAutoPlayAnimations(true);
            }

            if (object.optBoolean("tapToRetryEnabled")) {
                builder.setTapToRetryEnabled(true);
            }
        }
        setController(builder.build());
    }

    @Override
    public void setBackground(Drawable background) {
        super.setBackground(background);
        updateOutlineProvider();
    }

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        super.onSizeChanged(w, h, oldw, oldh);
          updateOutlineProvider();
  }
}
