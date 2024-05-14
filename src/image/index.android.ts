export * from './index-common';
import { Application, Background, Color, ImageAsset, ImageSource, Trace, Utils, backgroundInternalProperty, knownFolders, path } from '@nativescript/core';
import { isString } from '@nativescript/core/utils/types';
import { layout } from '@nativescript/core/utils/layout-helper';
import {
    AnimatedImage,
    CLog,
    CLogTypes,
    EventData,
    ImageBase,
    ImageError as ImageErrorBase,
    ImageInfo as ImageInfoBase,
    ImagePipelineConfigSetting,
    ScaleType,
    SrcType,
    aspectRatioProperty,
    backgroundUriProperty,
    blurDownSamplingProperty,
    blurRadiusProperty,
    fadeDurationProperty,
    failureImageUriProperty,
    headersProperty,
    imageRotationProperty,
    lowerResSrcProperty,
    needRequestImage,
    placeholderImageUriProperty,
    progressBarColorProperty,
    roundAsCircleProperty,
    roundBottomLeftRadiusProperty,
    roundBottomRightRadiusProperty,
    roundTopLeftRadiusProperty,
    roundTopRightRadiusProperty,
    showProgressBarProperty,
    srcProperty,
    stretchProperty,
    tintColorProperty,
    wrapNativeException
} from './index-common';
import { FailureEventData } from '@nativescript-community/ui-image';

let initialized = false;
let initializeConfig: ImagePipelineConfigSetting;
export function initialize(config?: ImagePipelineConfigSetting): void {
    if (!initialized) {
        const context = Utils.android.getApplicationContext();
        if (!context) {
            initializeConfig = config;
            return;
        }
        let builder: com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
        const useOkhttp = config?.useOkhttp !== false;
        if (useOkhttp) {
            //@ts-ignore
            let client: okhttp3.OkHttpClient;
            //@ts-ignore
            if (useOkhttp instanceof okhttp3.OkHttpClient) {
                client = useOkhttp;
            } else {
                //@ts-ignore
                client = new okhttp3.OkHttpClient();
            }
            builder = com.facebook.imagepipeline.backends.okhttp3.OkHttpImagePipelineConfigFactory.newBuilder(context, client);
            builder.setNetworkFetcher(new com.nativescript.image.OkHttpNetworkFetcher(client));
        } else {
            builder = com.facebook.imagepipeline.core.ImagePipelineConfig.newBuilder(context);
        }
        builder.setDownsampleEnabled(config?.isDownsampleEnabled === true);
        if (config?.leakTracker) {
            builder.setCloseableReferenceLeakTracker(config.leakTracker);
        }

        // builder.experiment().setNativeCodeDisabled(true);
        const imagePipelineConfig = builder.build();
        com.facebook.drawee.backends.pipeline.Fresco.initialize(context, imagePipelineConfig);
        initialized = true;
        initializeConfig = null;
    }
}

let imagePineLine: ImagePipeline;
export function getImagePipeline(): ImagePipeline {
    if (!imagePineLine) {
        if (Application.android.nativeApp) {
            const nativePipe = com.facebook.drawee.backends.pipeline.Fresco.getImagePipeline();
            imagePineLine = new ImagePipeline();
            imagePineLine.android = nativePipe;
        }
    }

    return imagePineLine;
}

export function shutDown(): void {
    if (!initialized) {
        return;
    }
    initialized = false;
    com.facebook.drawee.view.SimpleDraweeView.shutDown();
    com.facebook.drawee.backends.pipeline.Fresco.shutDown();
}
function getUri(src: string | ImageAsset, asNative = true) {
    let uri: string;
    let imagePath: string;
    if (src instanceof ImageAsset) {
        imagePath = src.android;
    } else {
        imagePath = src;
    }
    if (Utils.isFileOrResourcePath(imagePath)) {
        if (imagePath.indexOf(Utils.RESOURCE_PREFIX) === 0) {
            const resName = imagePath.substring(Utils.RESOURCE_PREFIX.length);
            const identifier = Utils.android.resources.getDrawableId(resName);
            if (0 < identifier) {
                const netUri = new android.net.Uri.Builder().scheme(com.facebook.common.util.UriUtil.LOCAL_RESOURCE_SCHEME).path(java.lang.String.valueOf(identifier)).build();
                if (asNative) {
                    return netUri;
                }
                uri = netUri.toString();
            }
        } else if (imagePath.indexOf('~/') === 0) {
            uri = `file:${path.join(knownFolders.currentApp().path, imagePath.replace('~/', ''))}`;
        } else if (imagePath.indexOf('/') === 0) {
            uri = `file:${imagePath}`;
        }
    } else {
        uri = imagePath;
    }
    return asNative ? android.net.Uri.parse(uri) : uri;
}

export class ImagePipeline {
    private _android: com.facebook.imagepipeline.core.ImagePipeline;

    toUri(value: string | android.net.Uri) {
        if (value instanceof android.net.Uri) {
            return value;
        }
        return android.net.Uri.parse(value);
    }

    getCacheKey(uri: string, context) {
        // iOS only
        return uri;
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

    async evictFromDiskCache(uri: string | android.net.Uri) {
        this._android.evictFromDiskCache(this.toUri(uri));
    }

    async evictFromCache(uri: string | android.net.Uri) {
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
                    datasource = this._android.prefetchToDiskCache(request, uri);
                } else {
                    datasource = this._android.prefetchToBitmapCache(request, uri);
                }
                // initializeBaseDataSubscriber();
                datasource.subscribe(
                    new com.nativescript.image.BaseDataSubscriber(
                        new com.nativescript.image.BaseDataSubscriberListener({
                            onFailure: reject,
                            onNewResult: resolve as any
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
        //        public void onNewResultImpl(Bitmap bitmap) {
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

export const needUpdateHierarchy = function (targetOrNeedsLayout: any, propertyKey?: string | Symbol, descriptor?: PropertyDescriptor): any {
    if (typeof targetOrNeedsLayout === 'boolean') {
        return function (target2: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args: any[]) {
                if (!this.mCanUpdateHierarchy) {
                    this.mNeedUpdateHierarchy = true;
                    if (this.isLoaded && targetOrNeedsLayout) {
                        const layoutParams = (this.nativeViewProtected as com.nativescript.image.DraweeView)?.getLayoutParams();
                        if (layoutParams) {
                            if (layout.getMeasureSpecMode(layoutParams.height) !== layout.EXACTLY || layout.getMeasureSpecMode(layoutParams.width) !== layout.EXACTLY) {
                                this.mNeedUpdateLayout = true;
                            }
                        }
                    }
                    return;
                }
                return originalMethod.apply(this, args);
            };
        };
    }
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if (!this.mCanUpdateHierarchy) {
            this.mNeedUpdateHierarchy = true;
            return;
        }
        return originalMethod.apply(this, args);
    };
};

export class Img extends ImageBase {
    nativeViewProtected: com.nativescript.image.DraweeView;
    // @ts-ignore
    nativeImageViewProtected: com.nativescript.image.DraweeView;
    isLoading = false;

    mCanUpdateHierarchy = true;
    mNeedUpdateHierarchy = false;
    mNeedUpdateLayout = false;
    public onResumeNativeUpdates(): void {
        // {N} suspends properties update on `_suspendNativeUpdates`. So we only need to do this in onResumeNativeUpdates
        this.mCanUpdateHierarchy = false;
        super.onResumeNativeUpdates();
        this.mCanUpdateHierarchy = true;
        if (this.mNeedUpdateHierarchy) {
            this.mNeedUpdateHierarchy = false;
            this.updateHierarchy();
        }
        if (this.mNeedUpdateLayout) {
            this.mNeedUpdateLayout = false;
            this.nativeViewProtected.requestLayout();
        }
    }
    public createNativeView() {
        if (!initialized) {
            initialize(initializeConfig);
        }
        const view = new com.nativescript.image.DraweeView(this._context);
        // (view as any).setClipToBounds(false);
        return view;
    }
    updateViewSize(imageInfo) {
        const draweeView = this.nativeImageViewProtected;
        if (!draweeView) {
            return;
        }
        if (imageInfo != null) {
            draweeView.imageWidth = imageInfo.getWidth();
            draweeView.imageHeight = imageInfo.getHeight();
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

    public disposeNativeView() {
        this.controllerListener = null;
        // this.nativeImageViewProtected.setImageURI(null, null);
    }
    get cacheKey() {
        const src = this.src;
        const srcType = typeof src;
        if (src && (srcType === 'string' || src instanceof ImageAsset)) {
            return getUri(src as string | ImageAsset);
        }
        return undefined;
    }
    public async updateImageUri() {
        const imagePipeLine = getImagePipeline();
        const cacheKey = this.cacheKey;
        if (cacheKey) {
            // const isInCache = imagePipeLine.isInBitmapMemoryCache(uri);
            // // if (isInCache) {
            await imagePipeLine.evictFromCache(cacheKey);
            // }
        }
        this.handleImageSrc(null);
        this.initImage();
    }

    @needUpdateHierarchy
    [placeholderImageUriProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [failureImageUriProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [stretchProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [fadeDurationProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [backgroundUriProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [showProgressBarProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [progressBarColorProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [roundAsCircleProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [roundTopLeftRadiusProperty.setNative]() {
        this.updateHierarchy();
    }
    @needUpdateHierarchy(true)
    [imageRotationProperty.setNative](value) {
        const scaleType = this.nativeImageViewProtected.getHierarchy().getActualImageScaleType();
        scaleType['setImageRotation']?.(value);
        this.nativeImageViewProtected.invalidate();
    }

    @needUpdateHierarchy
    [roundTopRightRadiusProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [roundBottomLeftRadiusProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [roundBottomRightRadiusProperty.setNative]() {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [tintColorProperty.setNative](value: Color) {
        this.updateHierarchy();
    }

    @needRequestImage
    [blurRadiusProperty.setNative]() {
        this.initImage();
    }

    @needRequestImage
    [srcProperty.setNative]() {
        this.initImage();
    }

    @needRequestImage
    [lowerResSrcProperty.setNative]() {
        this.initImage();
    }

    @needRequestImage
    [blurDownSamplingProperty.setNative]() {
        this.initImage();
    }

    @needRequestImage
    [aspectRatioProperty.setNative]() {
        this.initImage();
    }

    @needRequestImage
    [headersProperty.setNative](value) {
        this.initImage();
    }

    [backgroundInternalProperty.setNative](value: Background) {
        super[backgroundInternalProperty.setNative](value);
        this.nativeViewProtected.setClipToOutline(value?.hasBorderRadius());
    }

    // [ImageBase.blendingModeProperty.setNative](value: string) {
    //     switch (value) {
    //         case 'multiply':
    //             (this.nativeImageViewProtected as any).setXfermode(android.graphics.PorterDuff.Mode.MULTIPLY);
    //             break;
    //         case 'lighten':
    //             (this.nativeImageViewProtected as any).setXfermode(android.graphics.PorterDuff.Mode.LIGHTEN);
    //             break;
    //     }
    // }

    // private initDrawee() {
    //     this.initImage();
    // }

    controllerListener: com.facebook.drawee.controller.ControllerListener<com.facebook.imagepipeline.image.ImageInfo>;

    protected async handleImageSrc(src: SrcType) {
        const view = this.nativeViewProtected;
        if (view) {
            if (src instanceof Promise) {
                this.handleImageSrc(await src);
                return;
            } else if (typeof src === 'function') {
                const newSrc = src();
                if (newSrc instanceof Promise) {
                    await newSrc;
                }
                this.handleImageSrc(newSrc);
                return;
            }
            if (src) {
                let drawable: android.graphics.drawable.BitmapDrawable;
                if (src instanceof ImageSource) {
                    drawable = new android.graphics.drawable.BitmapDrawable(Utils.android.getApplicationContext().getResources(), src.android as android.graphics.Bitmap);
                    this.updateViewSize(src.android);
                } else if (Utils.isFontIconURI(src as string)) {
                    const fontIconCode = (src as string).split('//')[1];
                    if (fontIconCode !== undefined) {
                        // support sync mode only
                        const font = this.style.fontInternal;
                        const color = this.style.color;
                        drawable = new android.graphics.drawable.BitmapDrawable(
                            Utils.android.getApplicationContext().getResources(),
                            ImageSource.fromFontIconCodeSync(fontIconCode, font, color).android
                        );
                    }
                }
                if (drawable) {
                    const hierarchy: com.facebook.drawee.generic.GenericDraweeHierarchy = this.nativeImageViewProtected.getHierarchy();
                    hierarchy.setImage(drawable, 1, hierarchy.getFadeDuration() === 0);
                    return;
                }
                const uri = getUri(src as string) as android.net.Uri;
                if (!uri) {
                    console.error(`Error: 'src' not valid: ${src}`);
                    return;
                }
                if (this.noCache) {
                    // testing if is in cache is slow so lets remove without testing
                    // const imagePipeLine = getImagePipeline();
                    // const isInCache = imagePipeLine.isInBitmapMemoryCache(uri) || imagePipeLine.isInDiskCache(uri);
                    // if (isInCache) {
                    getImagePipeline().evictFromCache(uri);
                    // }
                }
                this.isLoading = true;

                if (!this.controllerListener) {
                    const that: WeakRef<Img> = new WeakRef(this);
                    this.controllerListener = new com.facebook.drawee.controller.ControllerListener<com.facebook.imagepipeline.image.ImageInfo>({
                        onFinalImageSet(id, imageInfo, animatable) {
                            if (Trace.isEnabled()) {
                                CLog(CLogTypes.info, 'onFinalImageSet', id, imageInfo, animatable);
                            }
                            const nativeView = that?.get();
                            if (nativeView) {
                                nativeView.updateViewSize(imageInfo);
                                nativeView.isLoading = false;
                                const eventName = ImageBase.finalImageSetEvent;
                                if (nativeView.hasListeners(eventName)) {
                                    const info = new ImageInfo(imageInfo);
                                    nativeView.notify({
                                        eventName,
                                        imageInfo: info,
                                        animatable: animatable as AnimatedImage
                                    } as FinalEventData);
                                }
                            }
                        },
                        onFailure(id, throwable) {
                            if (Trace.isEnabled()) {
                                CLog(CLogTypes.info, 'onFailure', id, throwable.getLocalizedMessage());
                            }
                            const nativeView = that?.get();
                            if (nativeView) {
                                // const nView = nativeView.nativeViewProtected;
                                nativeView.isLoading = false;
                                const eventName = ImageBase.failureEvent;
                                if (nativeView.hasListeners(eventName)) {
                                    const imageError = new ImageError(throwable);
                                    nativeView.notify({
                                        eventName,
                                        error: wrapNativeException(throwable)
                                    } as FailureEventData);
                                }
                            }
                        },
                        onIntermediateImageFailed(id, throwable) {
                            if (Trace.isEnabled()) {
                                CLog(CLogTypes.info, 'onIntermediateImageFailed', id, throwable);
                            }
                            const nativeView = that?.get();
                            if (nativeView) {
                                const eventName = ImageBase.intermediateImageFailedEvent;
                                if (nativeView.hasListeners(eventName)) {
                                    nativeView.notify({
                                        eventName,
                                        error: wrapNativeException(throwable)
                                    } as FailureEventData);
                                }
                            }
                        },
                        onIntermediateImageSet(id, imageInfo) {
                            if (Trace.isEnabled()) {
                                CLog(CLogTypes.info, 'onIntermediateImageSet', id, imageInfo);
                            }
                            const nativeView = that?.get();
                            if (nativeView) {
                                nativeView.updateViewSize(imageInfo);
                                const eventName = ImageBase.intermediateImageSetEvent;
                                if (nativeView.hasListeners(eventName)) {
                                    const info = new ImageInfo(imageInfo);
                                    nativeView.notify({
                                        eventName,
                                        imageInfo: info
                                    } as IntermediateEventData);
                                }
                            }
                        },
                        onRelease(id) {
                            if (Trace.isEnabled()) {
                                CLog(CLogTypes.info, 'onRelease', id);
                            }
                            const nativeView = that?.get();
                            if (nativeView) {
                                const eventName = ImageBase.releaseEvent;
                                if (nativeView.hasListeners(eventName)) {
                                    nativeView.notify({
                                        eventName
                                    } as EventData);
                                }
                            }
                        },
                        onSubmit(id, callerContext) {
                            if (Trace.isEnabled()) {
                                CLog(CLogTypes.info, 'onSubmit', id, callerContext);
                            }
                            const nativeView = that?.get();
                            const eventName = ImageBase.submitEvent;
                            if (nativeView?.hasListeners(eventName)) {
                                nativeView.notify({
                                    eventName
                                } as EventData);
                            }
                        }
                    });
                }
                const options = JSON.stringify({
                    progressiveRenderingEnabled: this.blurRadius,
                    localThumbnailPreviewsEnabled: this.blurRadius,
                    decodeWidth: this.decodeWidth,
                    decodeHeight: this.decodeHeight,
                    blurRadius: this.blurRadius,
                    lowerResSrc: this.lowerResSrc ? getUri(this.lowerResSrc, false) : undefined,
                    blurDownSampling: this.blurDownSampling,
                    autoPlayAnimations: this.autoPlayAnimations,
                    tapToRetryEnabled: this.tapToRetryEnabled,
                    headers: this.headers
                });
                view.setUri(uri, options, this.controllerListener);
                // const async = this.loadMode === 'async';
                // if (async) {
                // const builder = com.facebook.drawee.backends.pipeline.Fresco.newDraweeControllerBuilder();
                // builder.setImageRequest(request);
                // builder.setCallerContext(src);
                // builder.setControllerListener(listener);
                // builder.setOldController(this.nativeImageViewProtected.getController());
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
                // if (this.lowerResSrc) {
                //     builder.setLowResImageRequest(com.facebook.imagepipeline.request.ImageRequest.fromUri(getUri(this.lowerResSrc)));
                // }

                // if (this.autoPlayAnimations) {
                //     builder.setAutoPlayAnimations(this.autoPlayAnimations);
                // }

                // if (this.tapToRetryEnabled) {
                //     builder.setTapToRetryEnabled(this.tapToRetryEnabled);
                // }

                // const controller = builder.build();

                // this.nativeImageViewProtected.setController(controller);
                // } else {
                // const dataSource = com.facebook.drawee.backends.pipeline.Fresco.getImagePipeline().fetchDecodedImage(request, src);
                // const result = com.facebook.datasource.DataSources.waitForFinalResult(dataSource);
                // const bitmap = result.get().underlyingBitmap;
                // CloseableReference.closeSafely(result);
                // dataSource.close();
                // }
            } else {
                this.nativeImageViewProtected.setController(null);
                this.nativeImageViewProtected.setImageBitmap(null);
            }
        }
    }

    protected async initImage() {
        // this.nativeImageViewProtected.setImageURI(null);
        this.handleImageSrc(this.src);
    }

    private updateHierarchy() {
        if (!this.mCanUpdateHierarchy) {
            this.mNeedUpdateHierarchy = true;
            return;
        }
        if (this.nativeImageViewProtected) {
            let failureImageDrawable: android.graphics.drawable.BitmapDrawable | number;
            let placeholderImageDrawable: android.graphics.drawable.BitmapDrawable | number;
            let backgroundDrawable: android.graphics.drawable.BitmapDrawable | number;
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
                builder.setActualImageScaleType(this.stretch, this.imageRotation);
            }

            builder.setFadeDuration(this.fadeDuration || 0);

            if (this.backgroundUri && backgroundDrawable) {
                builder.setBackground(backgroundDrawable);
            }

            if (this.showProgressBar) {
                builder.setProgressBarImage((this.progressBarColor as Color)?.hex, this.stretch);
            }

            if (this.roundAsCircle) {
                builder.setRoundingParamsAsCircle();
            }

            const topLeftRadius = this.roundTopLeftRadius || 0;
            const topRightRadius = this.roundTopRightRadius || 0;
            const bottomRightRadius = this.roundBottomRightRadius || 0;
            const bottomLeftRadius = this.roundBottomLeftRadius || 0;
            if (topLeftRadius || topRightRadius || bottomRightRadius || bottomLeftRadius) {
                builder.setCornersRadii(
                    Utils.layout.toDevicePixels(topLeftRadius),
                    Utils.layout.toDevicePixels(topRightRadius),
                    Utils.layout.toDevicePixels(bottomRightRadius),
                    Utils.layout.toDevicePixels(bottomLeftRadius)
                );
            }

            this.nativeImageViewProtected.setHierarchy(builder.build());
            if (!this.mNeedRequestImage) {
                this.nativeImageViewProtected.setController(this.nativeImageViewProtected.getController());
            }
        }
    }

    private getDrawable(path: string | ImageSource) {
        let drawable: android.graphics.drawable.BitmapDrawable;
        if (typeof path === 'string') {
            if (Utils.isFontIconURI(path)) {
                const fontIconCode = path.split('//')[1];
                if (fontIconCode !== undefined) {
                    // support sync mode only
                    const font = this.style.fontInternal;
                    const color = this.style.color;
                    drawable = new android.graphics.drawable.BitmapDrawable(Utils.android.getApplicationContext().getResources(), ImageSource.fromFontIconCodeSync(fontIconCode, font, color).android);
                }
            } else if (Utils.isFileOrResourcePath(path)) {
                if (path.indexOf(Utils.RESOURCE_PREFIX) === 0) {
                    return this.getDrawableFromResource(path); // number!
                } else {
                    drawable = this.getDrawableFromLocalFile(path);
                }
            }
        } else {
            drawable = new android.graphics.drawable.BitmapDrawable(Utils.android.getApplicationContext().getResources(), path.android);
        }

        return drawable;
    }

    private getDrawableFromLocalFile(localFilePath: string) {
        const img = ImageSource.fromFileSync(localFilePath);
        let drawable: android.graphics.drawable.BitmapDrawable = null;
        if (img) {
            drawable = new android.graphics.drawable.BitmapDrawable(Utils.android.getApplicationContext().getResources(), img.android);
        }

        return drawable;
    }

    private getDrawableFromResource(resourceName: string) {
        const application = Utils.android.getApplication();
        const resources = application.getResources();
        const identifier = resources.getIdentifier(resourceName.substring(Utils.RESOURCE_PREFIX.length), 'drawable', application.getPackageName());
        // we return the identifier to allow Fresco to handle memory / caching
        return identifier;
        // return Utils.android.getApplicationContext().getDrawable(identifier);
    }

    startAnimating() {
        if (this.nativeImageViewProtected) {
            const controller = this.nativeImageViewProtected.getController();
            if (controller) {
                const animatable = controller.getAnimatable();
                if (animatable) {
                    animatable.start();
                }
            }
        }
    }
    stopAnimating() {
        if (this.nativeImageViewProtected) {
            const controller = this.nativeImageViewProtected.getController();
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
        const res = Utils.android.getApplicationContext().getResources();
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

    public setActualImageScaleType(scaleType: ScaleType, imageRotation = 0): GenericDraweeHierarchyBuilder {
        if (!this.nativeBuilder) {
            return this;
        }
        const nativeScaleType = getScaleType(scaleType);
        if (imageRotation !== 0 && nativeScaleType['setImageRotation']) {
            nativeScaleType['setImageRotation'](imageRotation);
        }
        this.nativeBuilder.setActualImageScaleType(nativeScaleType);

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
                //@ts-ignore
                return new com.nativescript.image.ScalingUtils.ScaleTypeCenter();
            case ScaleType.AspectFill:
            case ScaleType.CenterCrop:
                //@ts-ignore
                return new com.nativescript.image.ScalingUtils.ScaleTypeCenterCrop();
            case ScaleType.CenterInside:
                //@ts-ignore
                return new com.nativescript.image.ScalingUtils.ScaleTypeCenterInside();
            case ScaleType.FitCenter:
            case ScaleType.AspectFit:
                //@ts-ignore
                return new com.nativescript.image.ScalingUtils.ScaleTypeFitCenter();
            case ScaleType.FitEnd:
                //@ts-ignore
                return new com.nativescript.image.ScalingUtils.ScaleTypeFitEnd();
            case ScaleType.FitStart:
                //@ts-ignore
                return new com.nativescript.image.ScalingUtils.ScaleTypeFitStart();
            case ScaleType.Fill:
            case ScaleType.FitXY:
                //@ts-ignore
                return new com.nativescript.image.ScalingUtils.ScaleTypeFitXY();
            case ScaleType.FocusCrop:
                //@ts-ignore
                return new com.nativescript.image.ScalingUtils.ScaleTypeFocusCrop();
            default:
                break;
        }
    }

    return null;
}
