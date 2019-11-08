export * from './image-common';
import { AnimatedImage, CLog, CLogTypes, debug, EventData, ImageBase, ImageError as ImageErrorBase, ImageInfo as ImageInfoBase, ImagePipelineConfigSetting, ScaleType, Stretch } from './image-common';
import * as utils from 'tns-core-modules/utils/utils';
import * as types from 'tns-core-modules/utils/types';
import * as application from 'tns-core-modules/application';
import { fromFile, ImageSource } from 'tns-core-modules/image-source';
import * as fs from 'tns-core-modules/file-system';
import { Color } from 'tns-core-modules/color/color';
import { ImageAsset } from 'tns-core-modules/image-asset/image-asset';

let BaseDataSubscriber: new (onNewResult: () => void, onFailure: () => void) => com.facebook.datasource.BaseDataSubscriber<any>;

export function initialize(config?: ImagePipelineConfigSetting): void {
    if (application.android && !com.facebook.drawee.backends.pipeline.Fresco.hasBeenInitialized()) {
        if (config && config.isDownsampleEnabled) {
            const imagePipelineConfig = com.facebook.imagepipeline.core.ImagePipelineConfig.newBuilder(application.android.context)
                .setDownsampleEnabled(true)
                .build();
            com.facebook.drawee.backends.pipeline.Fresco.initialize(application.android.context, imagePipelineConfig);
        } else {
            com.facebook.drawee.backends.pipeline.Fresco.initialize(application.android.context);
        }
        initializeBaseDataSubscriber();
    }
}

export function getImagePipeline(): ImagePipeline {
    if (application.android) {
        const nativePipe = com.facebook.drawee.backends.pipeline.Fresco.getImagePipeline();
        const imagePineLine = new ImagePipeline();
        imagePineLine.android = nativePipe;

        return imagePineLine;
    }

    return null;
}

export function shutDown(): void {
    com.facebook.drawee.view.SimpleDraweeView.shutDown();
    com.facebook.drawee.backends.pipeline.Fresco.shutDown();
}

function initializeBaseDataSubscriber() {
    if (BaseDataSubscriber) {
        return;
    }
    class BaseDataSubscriberImpl extends com.facebook.datasource.BaseDataSubscriber<any> {
        private _onNewResult: () => void;
        private _onFailure: () => void;
        constructor(onNewResult: () => void, onFailure: () => void) {
            super();
            this._onNewResult = onNewResult;
            this._onFailure = onFailure;
            return global.__native(this);
        }
        public onNewResultImpl(_dataSource: com.facebook.datasource.DataSource<any>): void {
            // Store image ref to be released later.
            //const mCloseableImageRef = _dataSource.getResult();
            if (this._onNewResult) {
                this._onNewResult();
            }
        }

        public onFailureImpl(_dataSource: com.facebook.datasource.DataSource<any>): void {
            if (this._onFailure) {
                this._onFailure();
            }
        }
    }
    BaseDataSubscriber = BaseDataSubscriberImpl;
}

function getUri(src: string | ImageAsset) {
    let uri: android.net.Uri;
    let imagePath: string;
    if (src instanceof ImageAsset) {
        imagePath = src.android;
    } else {
        imagePath = src;
    }
    if (utils.isFileOrResourcePath(imagePath)) {
        const res = utils.ad.getApplicationContext().getResources();
        if (!res) {
            return null;
        }

        if (imagePath.indexOf(utils.RESOURCE_PREFIX) === 0) {
            const resName = imagePath.substr(utils.RESOURCE_PREFIX.length);
            const identifier = res.getIdentifier(resName, 'drawable', utils.ad.getApplication().getPackageName());
            if (0 < identifier) {
                uri = new android.net.Uri.Builder()
                    .scheme(com.facebook.common.util.UriUtil.LOCAL_RESOURCE_SCHEME)
                    .path(java.lang.String.valueOf(identifier))
                    .build();
            }
        } else if (imagePath.indexOf('~/') === 0) {
            uri = android.net.Uri.parse(`file:${fs.path.join(fs.knownFolders.currentApp().path, imagePath.replace('~/', ''))}`);
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
                datasource.subscribe(new BaseDataSubscriber(resolve, reject), com.facebook.common.executors.CallerThreadExecutor.getInstance());
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

export class Img extends ImageBase {
    nativeViewProtected: com.facebook.drawee.view.SimpleDraweeView;
    isLoading = false;
    // stretch = ScaleType.FitCenter;

    public createNativeView() {
        return new com.facebook.drawee.view.SimpleDraweeView(this._context);
    }

    // public initNativeView(): void {
    //     this.initDrawee();
    //     this.updateHierarchy();
    // }

    onImageSet(imageInfo: com.facebook.imagepipeline.image.ImageInfo, animatable: android.graphics.drawable.Animatable) {
        if (!this.aspectRatio) {
            // console.log('onImageSet', this.decodeWidth, this.decodeHeight, imageInfo.getWidth(), imageInfo.getHeight());
            this.nativeViewProtected.setAspectRatio(imageInfo.getWidth() / imageInfo.getHeight());
        }
    }

    public disposeNativeView() {
        this.nativeViewProtected.setImageURI(null, null);
    }

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

    [ImageBase.srcProperty.setNative]() {
        this.initImage();
    }
    [ImageBase.lowerResSrcProperty.setNative]() {
        this.initImage();
    }

    [ImageBase.placeholderImageUriProperty.setNative]() {
        this.updateHierarchy();
    }

    [ImageBase.failureImageUriProperty.setNative]() {
        this.updateHierarchy();
    }

    [ImageBase.stretchProperty.setNative]() {
        this.updateHierarchy();
    }

    [ImageBase.fadeDurationProperty.setNative]() {
        this.updateHierarchy();
    }

    [ImageBase.backgroundUriProperty.setNative]() {
        this.updateHierarchy();
    }

    [ImageBase.showProgressBarProperty.setNative]() {
        this.updateHierarchy();
    }

    [ImageBase.progressBarColorProperty.setNative]() {
        this.updateHierarchy();
    }

    [ImageBase.roundAsCircleProperty.setNative]() {
        this.updateHierarchy();
    }

    [ImageBase.roundTopLeftProperty.setNative]() {
        this.updateHierarchy();
    }

    [ImageBase.roundTopRightProperty.setNative]() {
        this.updateHierarchy();
    }

    [ImageBase.roundBottomLeftProperty.setNative]() {
        this.updateHierarchy();
    }

    [ImageBase.roundBottomRightProperty.setNative]() {
        this.updateHierarchy();
    }

    [ImageBase.roundedCornerRadiusProperty.setNative]() {
        this.updateHierarchy();
    }

    [ImageBase.blurRadiusProperty.setNative]() {
        this.initImage();
    }

    [ImageBase.blurDownSamplingProperty.setNative]() {
        this.initImage();
    }

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
                    return;
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
                    const postProcessor: any = new jp.wasabeef.fresco.processors.BlurPostprocessor(this._context, this.blurRadius, this.blurDownSampling || 1);
                    requestBuilder = requestBuilder.setPostprocessor(postProcessor);
                }

                const request = requestBuilder.build();

                const that: WeakRef<Img> = new WeakRef(this);
                const listener = new com.facebook.drawee.controller.ControllerListener<com.facebook.imagepipeline.image.ImageInfo>({
                    onFinalImageSet(id, imageInfo, animatable) {
                        CLog(CLogTypes.info, 'onFinalImageSet', id, imageInfo, animatable);
                        const nativeView = that && that.get();
                        if (nativeView) {
                            nativeView.isLoading = false;
                            nativeView.onImageSet(imageInfo, animatable);
                            const info = new ImageInfo(imageInfo);

                            const args = {
                                eventName: ImageBase.finalImageSetEvent,
                                object: that.get(),
                                imageInfo: info,
                                animatable: animatable as AnimatedImage
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
                            nativeView.isLoading = false;
                            const imageError = new ImageError(throwable);
                            const args: FailureEventData = {
                                eventName: ImageBase.failureEvent,
                                object: nativeView,
                                error: imageError
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
                                error: imageError
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
                            const info = new ImageInfo(imageInfo);
                            const args: IntermediateEventData = {
                                eventName: ImageBase.intermediateImageSetEvent,
                                object: nativeView,
                                imageInfo: info
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
                                object: nativeView
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
                                object: nativeView
                            } as EventData;

                            that.get().notify(args);
                        } else {
                            console.log("Warning: WeakRef<Image> was GC and no 'submitEvent' callback will be raised.");
                        }
                    }
                });
                const builder = com.facebook.drawee.backends.pipeline.Fresco.newDraweeControllerBuilder();
                builder.setImageRequest(request);
                builder.setControllerListener(listener);
                builder.setOldController(this.nativeViewProtected.getController());
                if (debug) {
                    builder.setPerfDataListener(
                        new com.facebook.drawee.backends.pipeline.info.ImagePerfDataListener({
                            onImageLoadStatusUpdated(param0: com.facebook.drawee.backends.pipeline.info.ImagePerfData, param1: number) {
                                CLog(CLogTypes.info, 'onSuonImageLoadStatusUpdatedbmit', param0, param1);
                            },
                            onImageVisibilityUpdated(param0: com.facebook.drawee.backends.pipeline.info.ImagePerfData, param1: number) {
                                CLog(CLogTypes.info, 'onImageVisibilityUpdated', param0, param1);
                            }
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
                if (this.aspectRatio) {
                    this.nativeViewProtected.setAspectRatio(this.aspectRatio);
                }

                this.nativeViewProtected.setController(controller);
            } else {
                this.nativeViewProtected.setController(null);
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
                builder.setFailureImage(failureImageDrawable);
            }

            if (this.tintColor) {
                builder.setActualImageColorFilter(new android.graphics.PorterDuffColorFilter(this.tintColor.android, android.graphics.PorterDuff.Mode.MULTIPLY));
            }

            if (this.placeholderImageUri && placeholderImageDrawable) {
                builder.setPlaceholderImage(placeholderImageDrawable);
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
            if (utils.isFileOrResourcePath(path)) {
                if (path.indexOf(utils.RESOURCE_PREFIX) === 0) {
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
        const img = fromFile(localFilePath);
        let drawable: android.graphics.drawable.BitmapDrawable = null;
        if (img) {
            drawable = new android.graphics.drawable.BitmapDrawable(utils.ad.getApplicationContext().getResources(), img.android);
        }

        return drawable;
    }

    private getDrawableFromResource(resourceName: string) {
        const img = ImageSource.fromResourceSync(resourceName.substr(utils.RESOURCE_PREFIX.length));
        let drawable: android.graphics.drawable.BitmapDrawable = null;
        if (img) {
            drawable = new android.graphics.drawable.BitmapDrawable(utils.ad.getApplicationContext().getResources(), img.android);
        }

        return drawable;
    }
    [ImageBase.tintColorProperty.setNative](value: Color) {
        this.updateHierarchy();
    }
    // [ImageBase.stretchProperty.setNative](value: Stretch) {
    //     switch (value) {
    //         case 'aspectFit':
    //             this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER);
    //             break;
    //         case 'aspectFill':
    //             this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
    //             break;
    //         case 'fill':
    //             this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
    //             break;
    //         case 'none':
    //         default:
    //             this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.MATRIX);
    //             break;
    //     }
    // }

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
        const res = application.android.context.getResources();
        this.nativeBuilder = new com.facebook.drawee.generic.GenericDraweeHierarchyBuilder(res);
    }

    public setPlaceholderImage(drawable): GenericDraweeHierarchyBuilder {
        if (!this.nativeBuilder) {
            return this;
        }

        this.nativeBuilder.setPlaceholderImage(drawable);

        return this;
    }
    public setActualImageColorFilter(filter: android.graphics.ColorFilter): GenericDraweeHierarchyBuilder {
        if (!this.nativeBuilder) {
            return this;
        }

        this.nativeBuilder.setActualImageColorFilter(filter);

        return this;
    }

    public setFailureImage(drawable): GenericDraweeHierarchyBuilder {
        if (!this.nativeBuilder) {
            return null;
        }

        this.nativeBuilder.setFailureImage(drawable);

        return this;
    }

    public setActualImageScaleType(scaleType: string): GenericDraweeHierarchyBuilder {
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

function getScaleType(scaleType: string) {
    if (types.isString(scaleType)) {
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
