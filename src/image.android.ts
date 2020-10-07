export * from './image-common';
import { Color, Image, ImageAsset, ImageSource, Utils, knownFolders, path } from '@nativescript/core';
import { android as androidApp } from '@nativescript/core/application';
import { isString } from '@nativescript/core/utils/types';
import { RESOURCE_PREFIX, ad, isFileOrResourcePath, isFontIconURI } from '@nativescript/core/utils/utils';
import { AnimatedImage, CLog, CLogTypes, EventData, ImageBase, ImageError as ImageErrorBase, ImageInfo as ImageInfoBase, ImagePipelineConfigSetting, ScaleType, debug } from './image-common';

let initialized = false;
let initializeConfig: ImagePipelineConfigSetting;
export function initialize(config?: ImagePipelineConfigSetting): void {
    if (!initialized) {
        const context = androidApp.context;
        if (!context) {
            initializeConfig = config;
            return;
        }
        const builder = com.facebook.imagepipeline.core.ImagePipelineConfig.newBuilder(context);
        if (config && config.isDownsampleEnabled) {
            builder.setDownsampleEnabled(true);
        }
        // builder.experiment().setNativeCodeDisabled(true);
        const imagePipelineConfig = builder.build();
        com.facebook.drawee.backends.pipeline.Fresco.initialize(context, imagePipelineConfig);
        // try {
        //     com.facebook.imagepipeline.nativecode.ImagePipelineNativeLoader.load();
        // } catch (err) {
        //     console.log('error loading ImagePipelineNativeLoader');
        //     com.facebook.drawee.backends.pipeline.Fresco.shutDown();
        //     builder.experiment().setNativeCodeDisabled(true);
        //     const imagePipelineConfig = builder.build();
        //     console.log('test', imagePipelineConfig.getExperiments().isNativeCodeDisabled())
        //     com.facebook.drawee.backends.pipeline.Fresco.initialize(context, imagePipelineConfig);
        // }
        initialized = true;
    }
}

export function getImagePipeline(): ImagePipeline {
    if (androidApp) {
        const nativePipe = com.facebook.drawee.backends.pipeline.Fresco.getImagePipeline();
        const imagePineLine = new ImagePipeline();
        imagePineLine.android = nativePipe;

        return imagePineLine;
    }

    return null;
}

export function shutDown(): void {
    if (!initialized) {
        return;
    }
    initialized = false;
    com.facebook.drawee.view.SimpleDraweeView.shutDown();
    com.facebook.drawee.backends.pipeline.Fresco.shutDown();
}
function getUri(src: string | ImageAsset) {
    let uri: android.net.Uri;
    let imagePath: string;
    if (src instanceof ImageAsset) {
        imagePath = src.android;
    } else {
        imagePath = src;
    }
    if (isFileOrResourcePath(imagePath)) {
        const res = ad.getApplicationContext().getResources();
        if (!res) {
            return null;
        }

        if (imagePath.indexOf(RESOURCE_PREFIX) === 0) {
            const resName = imagePath.substr(RESOURCE_PREFIX.length);
            const identifier = res.getIdentifier(resName, 'drawable', ad.getApplication().getPackageName());
            if (0 < identifier) {
                uri = new android.net.Uri.Builder().scheme(com.facebook.common.util.UriUtil.LOCAL_RESOURCE_SCHEME).path(java.lang.String.valueOf(identifier)).build();
            }
        } else if (imagePath.indexOf('~/') === 0) {
            uri = android.net.Uri.parse(`file:${path.join(knownFolders.currentApp().path, imagePath.replace('~/', ''))}`);
        } else if (imagePath.indexOf('/') === 0) {
            uri = android.net.Uri.parse(`file:${imagePath}`);
        }
    } else {
        uri = android.net.Uri.parse(imagePath);
    }
    return uri;
}

export class ImagePipeline {
    private _android: com.facebook.imagepipeline.core.ImagePipeline;

    toUri(value: string | android.net.Uri) {
        if (value instanceof android.net.Uri) {
            return value;
        }
        return android.net.Uri.parse(value);
    }

    isInDiskCache(uri: string | android.net.Uri): boolean {
        return this._android.isInDiskCacheSync(this.toUri(uri));
    }

    isInBitmapMemoryCache(uri: string | android.net.Uri): boolean {
        return this._android.isInBitmapMemoryCache(this.toUri(uri));
    }

    evictFromMemoryCache(uri: string | android.net.Uri): void {
        this._android.evictFromMemoryCache(this.toUri(uri));
    }

    evictFromDiskCache(uri: string | android.net.Uri): void {
        this._android.evictFromDiskCache(this.toUri(uri));
    }

    evictFromCache(uri: string | android.net.Uri): void {
        this._android.evictFromCache(this.toUri(uri));
    }

    clearCaches() {
        this._android.clearCaches();
    }

    clearMemoryCaches() {
        this._android.clearMemoryCaches();
    }

    clearDiskCaches() {
        this._android.clearDiskCaches();
    }

    prefetchToDiskCache(uri: string): Promise<void> {
        return this.prefetchToCache(uri, true);
    }

    prefetchToMemoryCache(uri: string): Promise<void> {
        return this.prefetchToCache(uri, false);
    }

    private prefetchToCache(uri: string, toDiskCache: boolean): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                const nativeUri = android.net.Uri.parse(uri);
                const request = com.facebook.imagepipeline.request.ImageRequestBuilder.newBuilderWithSource(nativeUri).build();
                let datasource: com.facebook.datasource.DataSource<java.lang.Void>;
                if (toDiskCache) {
                    datasource = this._android.prefetchToDiskCache(request, null);
                } else {
                    datasource = this._android.prefetchToBitmapCache(request, null);
                }
                // initializeBaseDataSubscriber();
                datasource.subscribe(
                    new com.nativescript.image.BaseDataSubscriber(
                        new com.nativescript.image.BaseDataSubscriberListener({
                            onFailure: reject,
                            onNewResult: resolve as any,
                        })
                    ),
                    com.facebook.common.executors.CallerThreadExecutor.getInstance()
                );
            } catch (error) {
                reject(error);
            }
        });
    }

    get android(): any {
        return this._android;
    }

    set android(value: any) {
        this._android = value;
    }

    fetchImage() {
        //         ImagePipeline imagePipeline = Fresco.getImagePipeline();
        // ImageRequest imageRequest = ImageRequestBuilder
        //        .newBuilderWithSource(imageUri)
        //        .setRequestPriority(Priority.HIGH)
        //        .setLowestPermittedRequestLevel(ImageRequest.RequestLevel.FULL_FETCH)
        //        .build();
        // DataSource<CloseableReference<CloseableImage>> dataSource =
        //        imagePipeline.fetchDecodedImage(imageRequest, mContext);
        // try {
        //    dataSource.subscribe(new BaseBitmapDataSubscriber() {
        //        @Override
        //        public void onNewResultImpl(@Nullable Bitmap bitmap) {
        //            if (bitmap == null) {
        //                Log.d(TAG, "Bitmap data source returned success, but bitmap null.");
        //                return;
        //            }
        //            // The bitmap provided to this method is only guaranteed to be around
        //            // for the lifespan of this method. The image pipeline frees the
        //            // bitmap's memory after this method has completed.
        //            //
        //            // This is fine when passing the bitmap to a system process as
        //            // Android automatically creates a copy.
        //            //
        //            // If you need to keep the bitmap around, look into using a
        //            // BaseDataSubscriber instead of a BaseBitmapDataSubscriber.
        //        }
        //        @Override
        //        public void onFailureImpl(DataSource dataSource) {
        //            // No cleanup required here
        //        }
        //    }, CallerThreadExecutor.getInstance());
        // } finally {
        //    if (dataSource != null) {
        //        dataSource.close();
        //    }
        // }
    }
}

export class ImageError implements ImageErrorBase {
    private _stringValue: string;
    private _message: string;
    private _errorType: string;

    constructor(throwable: java.lang.Throwable) {
        this._message = throwable.getMessage();
        this._errorType = throwable.getClass().getName();
        this._stringValue = throwable.toString();
    }

    getMessage(): string {
        return this._message;
    }

    getErrorType(): string {
        return this._errorType;
    }

    toString(): string {
        return this._stringValue;
    }
}

export interface QualityInfo {
    getQuality();

    isOfFullQuality();

    isOfGoodEnoughQuality();
}

export class ImageInfo implements ImageInfoBase {
    private _nativeImageInfo: com.facebook.imagepipeline.image.ImageInfo;

    constructor(imageInfo) {
        this._nativeImageInfo = imageInfo;
    }

    getHeight(): number {
        return this._nativeImageInfo.getHeight();
    }

    getWidth(): number {
        return this._nativeImageInfo.getWidth();
    }

    getQualityInfo(): QualityInfo {
        return this._nativeImageInfo.getQualityInfo();
    }
}

export class FinalEventData extends EventData {
    private _imageInfo: ImageInfo;
    private _animatable: AnimatedImage;

    get imageInfo(): ImageInfo {
        return this._imageInfo;
    }

    set imageInfo(value: ImageInfo) {
        this._imageInfo = value;
    }

    get animatable(): AnimatedImage {
        return this._animatable;
    }

    set animatable(value: AnimatedImage) {
        this._animatable = value;
    }
    get android(): AnimatedImage {
        return this._animatable;
    }
}

export class IntermediateEventData extends EventData {
    private _imageInfo: ImageInfo;

    get imageInfo(): ImageInfo {
        return this._imageInfo;
    }

    set imageInfo(value: ImageInfo) {
        this._imageInfo = value;
    }
}

export class FailureEventData extends EventData {
    private _error: ImageError;

    get error(): ImageError {
        return this._error;
    }

    set error(value: ImageError) {
        this._error = value;
    }
}

export const needUpdateHierarchy = function (target: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if (!this._canUpdateHierarchy) {
            this._needUpdateHierarchy = true;
            return;
        }
        return originalMethod.apply(this, args);
    };
};
export const needRequestImage = function (target: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if (!this._canRequestImage) {
            this._needRequestImage = true;
            return;
        }
        return originalMethod.apply(this, args);
    };
};

type DraweeView = new (owner: Img, context) => com.facebook.drawee.view.SimpleDraweeView;
// eslint-disable-next-line no-redeclare
let DraweeView: DraweeView;
function initializeDraweeView() {
    if (DraweeView) {
        return;
    }
    @NativeClass
    class DraweeViewImpl extends com.facebook.drawee.view.SimpleDraweeView {
        constructor(public owner: Img, context: android.content.Context) {
            super(context);
            return global.__native(this);
        }
        public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
            const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
            const widthMode = Utils.layout.getMeasureSpecMode(widthMeasureSpec);
            const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
            const heightMode = Utils.layout.getMeasureSpecMode(heightMeasureSpec);
            const aspectRatio = this.getAspectRatio();
            CLog(CLogTypes.info, 'onMeasure', this.owner.src, widthMeasureSpec, heightMeasureSpec, width, height, aspectRatio);
            if (aspectRatio > 0) {
                const finiteWidth: boolean = widthMode === Utils.layout.EXACTLY;
                const finiteHeight: boolean = heightMode === Utils.layout.EXACTLY;
                // let scale: { width; height };
                if ((this as any).imageWidth && (this as any).imageHeight) {
                    // scale = this.owner.computeScaleFactor(width, height, finiteWidth, finiteHeight, (this as any).imageWidth, (this as any).imageHeight, aspectRatio);
                    if (!finiteWidth) {
                        widthMeasureSpec = Utils.layout.makeMeasureSpec(height * aspectRatio, Utils.layout.EXACTLY);
                    }
                    if (!finiteHeight) {
                        heightMeasureSpec = Utils.layout.makeMeasureSpec(width / aspectRatio, Utils.layout.EXACTLY);
                    }
                }
                CLog(CLogTypes.info, 'onMeasure scale', this.owner.src, aspectRatio, finiteWidth, finiteHeight, width, height, (this as any).imageWidth, (this as any).imageHeight);
            }
            super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        }
    }
    DraweeView = DraweeViewImpl as any;
}

export class Img extends ImageBase {
    nativeViewProtected: com.facebook.drawee.view.SimpleDraweeView;
    isLoading = false;

    _canRequestImage = true;
    _canUpdateHierarchy = true;
    _needUpdateHierarchy = false;
    _needRequestImage = false;
    public onResumeNativeUpdates(): void {
        // {N} suspends properties update on `_suspendNativeUpdates`. So we only need to do this in onResumeNativeUpdates
        this._canRequestImage = false;
        this._canUpdateHierarchy = false;
        super.onResumeNativeUpdates();
        this._canUpdateHierarchy = true;
        this._canRequestImage = true;
        if (this._needUpdateHierarchy) {
            this._needUpdateHierarchy = false;
            this.updateHierarchy();
        }
        if (this._needRequestImage) {
            this._needRequestImage = false;
            this.initImage();
        }
    }
    // stretch = ScaleType.FitCenter;

    public createNativeView() {
        if (!initialized) {
            initialize(initializeConfig);
        }
        initializeDraweeView();
        return new DraweeView(this, this._context);
    }
    updateViewSize(imageInfo) {
        const draweeView = this.nativeViewProtected;
        if (imageInfo != null) {
            (draweeView as any).imageWidth = imageInfo.getWidth();
            (draweeView as any).imageHeight = imageInfo.getHeight();
        }
        if (!this.aspectRatio && imageInfo != null) {
            const ratio = imageInfo.getWidth() / imageInfo.getHeight();

            draweeView.setAspectRatio(ratio);
        } else if (this.aspectRatio) {
            draweeView.setAspectRatio(this.aspectRatio);
        } else {
            draweeView.setAspectRatio(0);
        }
    }

    // public initNativeView(): void {
    //     this.initDrawee();
    //     this.updateHierarchy();
    // }

    // public disposeNativeView() {
    //     this.nativeViewProtected.setImageURI(null, null);
    // }

    public updateImageUri() {
        const imagePipeLine = getImagePipeline();
        const src = this.src;
        if (!(src instanceof ImageSource)) {
            const uri = getUri(src);
            const isInCache = imagePipeLine.isInBitmapMemoryCache(uri);
            if (isInCache) {
                imagePipeLine.evictFromCache(uri);
            }
        }
        this.src = null;
        this.src = src;
    }

    @needUpdateHierarchy
    [ImageBase.placeholderImageUriProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [ImageBase.failureImageUriProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [ImageBase.stretchProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [ImageBase.fadeDurationProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [ImageBase.backgroundUriProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [ImageBase.showProgressBarProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [ImageBase.progressBarColorProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [ImageBase.roundAsCircleProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [ImageBase.roundTopLeftProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [ImageBase.roundTopRightProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [ImageBase.roundBottomLeftProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [ImageBase.roundBottomRightProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [ImageBase.roundedCornerRadiusProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [ImageBase.tintColorProperty.setNative](value: Color) {
        this.updateHierarchy();
    }

    [ImageBase.blurRadiusProperty.setNative]() {
        this.initImage();
    }

    @needRequestImage
    [ImageBase.srcProperty.setNative]() {
        this.initImage();
    }

    @needRequestImage
    [ImageBase.lowerResSrcProperty.setNative]() {
        this.initImage();
    }

    @needRequestImage
    [ImageBase.blurDownSamplingProperty.setNative]() {
        this.initImage();
    }

    @needRequestImage
    [ImageBase.aspectRatioProperty.setNative]() {
        this.initImage();
    }

    // private initDrawee() {
    //     this.initImage();
    // }

    private initImage() {
        if (this.nativeViewProtected) {
            // this.nativeViewProtected.setImageURI(null);
            const src = this.src;
            if (src) {
                if (src instanceof ImageSource) {
                    this.nativeViewProtected.setImageBitmap(src.android);
                    this.updateViewSize(src.android);
                    return;
                } else if (isFontIconURI(src as string)) {
                    const fontIconCode = (src as string).split('//')[1];
                    if (fontIconCode !== undefined) {
                        // support sync mode only
                        const font = this.style.fontInternal;
                        const color = this.style.color;
                        this.nativeViewProtected.setImageBitmap(ImageSource.fromFontIconCodeSync(fontIconCode, font, color).android);
                    }
                    return;
                }
                if (this.noCache) {
                    const uri = getUri(src);
                    const imagePipeLine = getImagePipeline();
                    const isInCache = imagePipeLine.isInBitmapMemoryCache(uri);
                    if (isInCache) {
                        imagePipeLine.evictFromCache(uri);
                    }
                }
                this.isLoading = true;
                const uri = getUri(src);
                if (!uri) {
                    console.log(`Error: 'src' not valid: ${src}`);
                    return;
                }

                // const progressiveRenderingEnabledValue = this.progressiveRenderingEnabled !== undefined ? this.progressiveRenderingEnabled : false;
                let requestBuilder = com.facebook.imagepipeline.request.ImageRequestBuilder.newBuilderWithSource(uri).setRotationOptions(
                    com.facebook.imagepipeline.common.RotationOptions.autoRotate()
                );
                if (this.progressiveRenderingEnabled === true) {
                    requestBuilder = requestBuilder.setProgressiveRenderingEnabled(this.progressiveRenderingEnabled);
                }
                if (this.localThumbnailPreviewsEnabled === true) {
                    requestBuilder = requestBuilder.setLocalThumbnailPreviewsEnabled(this.localThumbnailPreviewsEnabled);
                }

                if (this.decodeWidth && this.decodeHeight) {
                    requestBuilder = requestBuilder.setResizeOptions(new com.facebook.imagepipeline.common.ResizeOptions(this.decodeWidth, this.decodeHeight));
                }
                if (this.blurRadius) {
                    const postProcessor: any = new com.nativescript.image.ScalingBlurPostprocessor(2, this.blurRadius, this.blurDownSampling || 1);
                    requestBuilder = requestBuilder.setPostprocessor(postProcessor);
                }

                const request = requestBuilder.build();

                const that: WeakRef<Img> = new WeakRef(this);
                const listener = new com.facebook.drawee.controller.ControllerListener<com.facebook.imagepipeline.image.ImageInfo>({
                    onFinalImageSet(id, imageInfo, animatable) {
                        CLog(CLogTypes.info, 'onFinalImageSet', id, imageInfo, animatable);
                        const nativeView = that && that.get();
                        if (nativeView) {
                            nativeView.updateViewSize(imageInfo);
                            nativeView.isLoading = false;
                            const info = new ImageInfo(imageInfo);

                            const args = {
                                eventName: ImageBase.finalImageSetEvent,
                                object: that.get(),
                                imageInfo: info,
                                animatable: animatable as AnimatedImage,
                            } as FinalEventData;

                            nativeView.notify(args);
                        } else {
                            console.log("Warning: WeakRef<Image> was GC and no '" + ImageBase.finalImageSetEvent + "' callback will be raised.");
                        }
                    },
                    onFailure(id, throwable) {
                        CLog(CLogTypes.info, 'onFailure', id, throwable);
                        const nativeView = that && that.get();
                        if (nativeView) {
                            // const nView = nativeView.nativeViewProtected;
                            nativeView.isLoading = false;
                            const imageError = new ImageError(throwable);
                            const args: FailureEventData = {
                                eventName: ImageBase.failureEvent,
                                object: nativeView,
                                error: imageError,
                            } as FailureEventData;

                            that.get().notify(args);
                        } else {
                            console.log("Warning: WeakRef<Image> was GC and no '" + ImageBase.failureEvent + "' callback will be raised.");
                        }
                    },
                    onIntermediateImageFailed(id, throwable) {
                        CLog(CLogTypes.info, 'onIntermediateImageFailed', id, throwable);
                        const nativeView = that && that.get();
                        if (nativeView) {
                            const imageError = new ImageError(throwable);
                            const args: FailureEventData = {
                                eventName: ImageBase.intermediateImageFailedEvent,
                                object: nativeView,
                                error: imageError,
                            } as FailureEventData;

                            that.get().notify(args);
                        } else {
                            console.log("Warning: WeakRef<Image> was GC and no '" + ImageBase.intermediateImageFailedEvent + "' callback will be raised.");
                        }
                    },
                    onIntermediateImageSet(id, imageInfo) {
                        CLog(CLogTypes.info, 'onIntermediateImageSet', id, imageInfo);
                        const nativeView = that && that.get();
                        if (nativeView) {
                            nativeView.updateViewSize(imageInfo);
                            const info = new ImageInfo(imageInfo);
                            const args: IntermediateEventData = {
                                eventName: ImageBase.intermediateImageSetEvent,
                                object: nativeView,
                                imageInfo: info,
                            } as IntermediateEventData;

                            that.get().notify(args);
                        } else {
                            console.log("Warning: WeakRef<Image> was GC and no '" + ImageBase.intermediateImageSetEvent + "' callback will be raised.");
                        }
                    },
                    onRelease(id) {
                        CLog(CLogTypes.info, 'onRelease', id);
                        const nativeView = that && that.get();
                        if (nativeView) {
                            const args: EventData = {
                                eventName: ImageBase.releaseEvent,
                                object: nativeView,
                            } as EventData;

                            that.get().notify(args);
                        } else {
                            console.log("Warning: WeakRef<Image> was GC and no '" + ImageBase.releaseEvent + "' callback will be raised.");
                        }
                    },
                    onSubmit(id, callerContext) {
                        CLog(CLogTypes.info, 'onSubmit', id, callerContext);
                        const nativeView = that && that.get();
                        if (nativeView) {
                            const args: EventData = {
                                eventName: ImageBase.submitEvent,
                                object: nativeView,
                            } as EventData;

                            that.get().notify(args);
                        } else {
                            console.log("Warning: WeakRef<Image> was GC and no 'submitEvent' callback will be raised.");
                        }
                    },
                });
                const builder = com.facebook.drawee.backends.pipeline.Fresco.newDraweeControllerBuilder();
                builder.setImageRequest(request);
                builder.setControllerListener(listener);
                builder.setOldController(this.nativeViewProtected.getController());
                if (debug) {
                    builder.setPerfDataListener(
                        new com.facebook.drawee.backends.pipeline.info.ImagePerfDataListener({
                            onImageLoadStatusUpdated(param0: com.facebook.drawee.backends.pipeline.info.ImagePerfData, param1: number) {
                                CLog(CLogTypes.info, 'onImageLoadStatusUpdated', param0, param1);
                            },
                            onImageVisibilityUpdated(param0: com.facebook.drawee.backends.pipeline.info.ImagePerfData, param1: number) {
                                CLog(CLogTypes.info, 'onImageVisibilityUpdated', param0, param1);
                            },
                        })
                    );
                }
                if (this.lowerResSrc) {
                    builder.setLowResImageRequest(com.facebook.imagepipeline.request.ImageRequest.fromUri(getUri(this.lowerResSrc)));
                }

                if (this.autoPlayAnimations) {
                    builder.setAutoPlayAnimations(this.autoPlayAnimations);
                }

                if (this.tapToRetryEnabled) {
                    builder.setTapToRetryEnabled(this.tapToRetryEnabled);
                }

                const controller = builder.build();

                this.nativeViewProtected.setController(controller);
            } else {
                this.nativeViewProtected.setController(null);
                this.nativeViewProtected.setImageBitmap(null);
            }
        }
    }

    private updateHierarchy() {
        if (this.nativeViewProtected) {
            let failureImageDrawable: android.graphics.drawable.BitmapDrawable;
            let placeholderImageDrawable: android.graphics.drawable.BitmapDrawable;
            let backgroundDrawable: android.graphics.drawable.BitmapDrawable;
            if (this.failureImageUri) {
                failureImageDrawable = this.getDrawable(this.failureImageUri);
            }

            if (this.placeholderImageUri) {
                placeholderImageDrawable = this.getDrawable(this.placeholderImageUri);
            }

            if (this.backgroundUri) {
                backgroundDrawable = this.getDrawable(this.backgroundUri);
            }

            const builder: GenericDraweeHierarchyBuilder = new GenericDraweeHierarchyBuilder();
            if (this.failureImageUri && failureImageDrawable) {
                builder.setFailureImage(failureImageDrawable, this.stretch);
            }

            if (this.tintColor) {
                builder.setActualImageColorFilter(new android.graphics.PorterDuffColorFilter(this.tintColor.android, android.graphics.PorterDuff.Mode.MULTIPLY));
            }

            if (this.placeholderImageUri && placeholderImageDrawable) {
                builder.setPlaceholderImage(placeholderImageDrawable, this.stretch);
            }

            if (this.stretch) {
                builder.setActualImageScaleType(this.stretch);
            }

            if (this.fadeDuration) {
                builder.setFadeDuration(this.fadeDuration);
            } else {
                builder.setFadeDuration(0);
            }

            if (this.backgroundUri && backgroundDrawable) {
                builder.setBackground(backgroundDrawable);
            }

            if (this.showProgressBar) {
                builder.setProgressBarImage(this.progressBarColor, this.stretch);
            }

            if (this.roundAsCircle) {
                builder.setRoundingParamsAsCircle();
            }

            if (this.roundBottomLeft || this.roundBottomRight || this.roundTopLeft || this.roundTopRight) {
                const topLeftRadius = this.roundTopLeft ? this.roundedCornerRadius : 0;
                const topRightRadius = this.roundTopRight ? this.roundedCornerRadius : 0;
                const bottomRightRadius = this.roundBottomRight ? this.roundedCornerRadius : 0;
                const bottomLeftRadius = this.roundBottomLeft ? this.roundedCornerRadius : 0;
                builder.setCornersRadii(topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius);
            }

            const hierarchy = builder.build();
            this.nativeViewProtected.setHierarchy(hierarchy);
        }
    }

    private getDrawable(path: string | ImageSource) {
        let drawable: android.graphics.drawable.BitmapDrawable;
        if (typeof path === 'string') {
            if (isFileOrResourcePath(path)) {
                if (path.indexOf(RESOURCE_PREFIX) === 0) {
                    drawable = this.getDrawableFromResource(path);
                } else {
                    drawable = this.getDrawableFromLocalFile(path);
                }
            }
        } else {
            drawable = new android.graphics.drawable.BitmapDrawable(path.android);
        }

        return drawable;
    }

    private getDrawableFromLocalFile(localFilePath: string) {
        const img = ImageSource.fromFileSync(localFilePath);
        let drawable: android.graphics.drawable.BitmapDrawable = null;
        if (img) {
            drawable = new android.graphics.drawable.BitmapDrawable(ad.getApplicationContext().getResources(), img.android);
        }

        return drawable;
    }

    private getDrawableFromResource(resourceName: string) {
        const img = ImageSource.fromResourceSync(resourceName.substr(RESOURCE_PREFIX.length));
        let drawable: android.graphics.drawable.BitmapDrawable = null;
        if (img) {
            drawable = new android.graphics.drawable.BitmapDrawable(ad.getApplicationContext().getResources(), img.android);
        }

        return drawable;
    }

    startAnimating() {
        if (this.nativeViewProtected) {
            const controller = this.nativeViewProtected.getController();
            if (controller) {
                const animatable = controller.getAnimatable();
                if (animatable) {
                    animatable.start();
                }
            }
        }
    }
    stopAnimating() {
        if (this.nativeViewProtected) {
            const controller = this.nativeViewProtected.getController();
            if (controller) {
                const animatable = controller.getAnimatable();
                if (animatable) {
                    animatable.stop();
                }
            }
        }
    }
}

class GenericDraweeHierarchyBuilder {
    private nativeBuilder: com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;

    constructor() {
        const res = androidApp.context.getResources();
        this.nativeBuilder = new com.facebook.drawee.generic.GenericDraweeHierarchyBuilder(res);
    }

    public setPlaceholderImage(drawable, scaleType: ScaleType): GenericDraweeHierarchyBuilder {
        if (!this.nativeBuilder) {
            return this;
        }

        if (scaleType) {
            this.nativeBuilder.setPlaceholderImage(drawable, getScaleType(scaleType));
        } else {
            this.nativeBuilder.setPlaceholderImage(drawable);
        }

        return this;
    }
    public setActualImageColorFilter(filter: android.graphics.ColorFilter): GenericDraweeHierarchyBuilder {
        if (!this.nativeBuilder) {
            return this;
        }

        this.nativeBuilder.setActualImageColorFilter(filter);

        return this;
    }

    public setFailureImage(drawable, scaleType: ScaleType): GenericDraweeHierarchyBuilder {
        if (!this.nativeBuilder) {
            return null;
        }

        if (scaleType) {
            this.nativeBuilder.setFailureImage(drawable, getScaleType(scaleType));
        } else {
            this.nativeBuilder.setFailureImage(drawable);
        }

        return this;
    }

    public setActualImageScaleType(scaleType: ScaleType): GenericDraweeHierarchyBuilder {
        if (!this.nativeBuilder) {
            return this;
        }

        this.nativeBuilder.setActualImageScaleType(getScaleType(scaleType));

        return this;
    }

    public build(): com.facebook.drawee.generic.GenericDraweeHierarchy {
        if (!this.nativeBuilder) {
            return null;
        }

        return this.nativeBuilder.build();
    }

    public setFadeDuration(duration: number): GenericDraweeHierarchyBuilder {
        if (!this.nativeBuilder) {
            return null;
        }

        this.nativeBuilder.setFadeDuration(duration);

        return this;
    }

    public setBackground(drawable): GenericDraweeHierarchyBuilder {
        if (!this.nativeBuilder) {
            return this;
        }

        this.nativeBuilder.setBackground(drawable);

        return this;
    }

    public setProgressBarImage(color: string, stretch): GenericDraweeHierarchyBuilder {
        if (!this.nativeBuilder) {
            return null;
        }

        const drawable = new com.facebook.drawee.drawable.ProgressBarDrawable();
        if (color) {
            drawable.setColor(android.graphics.Color.parseColor(color));
        }

        this.nativeBuilder.setProgressBarImage(drawable, getScaleType(stretch));

        return this;
    }

    public setRoundingParamsAsCircle(): GenericDraweeHierarchyBuilder {
        if (!this.nativeBuilder) {
            return this;
        }

        const params = com.facebook.drawee.generic.RoundingParams.asCircle();
        this.nativeBuilder.setRoundingParams(params);

        return this;
    }

    public setCornersRadii(topLeft: number, topRight: number, bottomRight: number, bottomLeft: number): GenericDraweeHierarchyBuilder {
        if (!this.nativeBuilder) {
            return this;
        }

        const params = new com.facebook.drawee.generic.RoundingParams();
        params.setCornersRadii(topLeft, topRight, bottomRight, bottomLeft);
        this.nativeBuilder.setRoundingParams(params);

        return this;
    }
}

function getScaleType(scaleType: ScaleType) {
    if (isString(scaleType)) {
        switch (scaleType) {
            case ScaleType.Center:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.CENTER;
            case ScaleType.AspectFill:
            case ScaleType.CenterCrop:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.CENTER_CROP;
            case ScaleType.CenterInside:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.CENTER_INSIDE;
            case ScaleType.FitCenter:
            case ScaleType.AspectFit:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FIT_CENTER;
            case ScaleType.FitEnd:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FIT_END;
            case ScaleType.FitStart:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FIT_START;
            case ScaleType.Fill:
            case ScaleType.FitXY:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FIT_XY;
            case ScaleType.FocusCrop:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FOCUS_CROP;
            default:
                break;
        }
    }

    return null;
}
