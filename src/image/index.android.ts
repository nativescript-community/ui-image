export * from './index-common';
import { Background, Color, ImageAsset, ImageSource, Trace, Utils, backgroundInternalProperty, knownFolders, path } from '@nativescript/core';
import { isString } from '@nativescript/core/utils/types';
import { layout } from '@nativescript/core/utils/layout-helper';
import {
    AnimatedImage,
    CLog,
    CLogTypes,
    FailureEventData,
    FinalEventData,
    ImageBase,
    ImageError as ImageErrorBase,
    ImageInfo as ImageInfoBase,
    ImagePipelineConfigSetting,
    LoadSourceEventData,
    ProgressEventData,
    ScaleType,
    SrcType,
    aspectRatioProperty,
    backgroundUriProperty,
    blurDownSamplingProperty,
    blurRadiusProperty,
    decodeHeightProperty,
    decodeWidthProperty,
    fadeDurationProperty,
    failureImageUriProperty,
    headersProperty,
    imageRotationProperty,
    lowerResSrcProperty,
    needRequestImage,
    noRatioEnforceProperty,
    placeholderImageUriProperty,
    roundAsCircleProperty,
    roundBottomLeftRadiusProperty,
    roundBottomRightRadiusProperty,
    roundTopLeftRadiusProperty,
    roundTopRightRadiusProperty,
    srcProperty,
    stretchProperty,
    tintColorProperty,
    wrapNativeException
} from './index-common';

let initialized = false;
let glideInstance: com.bumptech.glide.Glide;
// global signature to invalidate all cache if needed by plugin
let signature: com.bumptech.glide.signature.ObjectKey;
const globalSignatureKey = 'v1';

export function initialize(config?: ImagePipelineConfigSetting): void {
    if (!initialized) {
        const context = Utils.android.getApplicationContext();
        if (!context) {
            return;
        }
        if (config?.usePersistentCacheKeyStore) {
            const sharedStore = new com.nativescript.image.SharedPrefCacheKeyStore(context.getApplicationContext());
            com.nativescript.image.EvictionManager.get().setPersistentStore(sharedStore);
        }
        // bumping `v1` will invalidate all cache
        signature = new com.bumptech.glide.signature.ObjectKey(config?.globalSignatureKey ?? globalSignatureKey);

        initialized = true;
        glideInstance = com.bumptech.glide.Glide.get(context);
        com.nativescript.image.EvictionManager.get().clearAll();

        // this is needed for further buildKey to trigger ...
        com.bumptech.glide.Glide.with(context)
            .load('toto?ts=' + Date().valueOf())
            .apply(new com.bumptech.glide.request.RequestOptions().signature(new com.bumptech.glide.signature.ObjectKey(Date().valueOf())))
            .preload();
        // com.nativescript.image.EngineKeyFactoryMethodDumper.dumpKeyFactoryMethods(glideInstance);
        // com.nativescript.image.ForcePreloadTest.forcePreloadAfterInjection(context, 'https://example.com/test-image.png');
    }
}

export class ImagePipeline {
    toUri(value: string | android.net.Uri) {
        if (value instanceof android.net.Uri) {
            return value.toString();
        }
        return value;
    }

    getCacheKey(uri: string, context) {
        return uri;
    }

    isInDiskCache(uri: string | android.net.Uri): Promise<boolean> {
        const url = this.toUri(uri);
        return new Promise<boolean>((resolve, reject) => {
            com.nativescript.image.EvictionManager.get().isInDiskCacheAsync(
                url,
                new com.nativescript.image.EvictionManager.DiskPresenceCallback({
                    onResult(source, transform) {
                        resolve(source || transform);
                    }
                })
            );
        });
    }

    isInBitmapMemoryCache(uri: string | android.net.Uri): boolean {
        // Still not directly accessible, but we can check if it's registered
        const url = this.toUri(uri);
        return com.nativescript.image.EvictionManager.get().isInMemoryCache(url);
    }

    evictFromMemoryCache(uri: string | android.net.Uri): Promise<void> {
        const url = this.toUri(uri);
        return new Promise<void>((resolve, reject) => {
            com.nativescript.image.EvictionManager.get().evictMemoryForId(
                url,
                new com.nativescript.image.EvictionManager.EvictionCallback({
                    onComplete(success: boolean, error) {
                        if (success) {
                            resolve();
                        } else {
                            if (Trace.isEnabled()) {
                                CLog(CLogTypes.error, error);
                            }
                            reject(error);
                        }
                    }
                })
            );
        });
    }

    evictFromDiskCache(uri: string | android.net.Uri): Promise<void> {
        const url = this.toUri(uri);
        return new Promise<void>((resolve, reject) => {
            com.nativescript.image.EvictionManager.get().evictDiskForId(
                url,
                new com.nativescript.image.EvictionManager.EvictionCallback({
                    onComplete(success: boolean, error) {
                        if (success) {
                            resolve();
                        } else {
                            if (Trace.isEnabled()) {
                                CLog(CLogTypes.error, error);
                            }
                            reject(error);
                        }
                    }
                })
            );
        });
    }

    evictFromCache(uri: string | android.net.Uri): Promise<void> {
        const url = this.toUri(uri);
        return new Promise<void>((resolve, reject) => {
            com.nativescript.image.EvictionManager.get().evictAllForId(
                url,
                new com.nativescript.image.EvictionManager.EvictionCallback({
                    onComplete(success: boolean, error) {
                        if (success) {
                            resolve();
                        } else {
                            if (Trace.isEnabled()) {
                                CLog(CLogTypes.error, error);
                            }
                            reject(error);
                        }
                    }
                })
            );
        });
    }

    clearCaches(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            com.nativescript.image.EvictionManager.get().clearAll(
                new com.nativescript.image.EvictionManager.EvictionCallback({
                    onComplete(success: boolean, error) {
                        if (success) {
                            resolve();
                        } else {
                            if (Trace.isEnabled()) {
                                CLog(CLogTypes.error, error);
                            }
                            reject(error);
                        }
                    }
                })
            );
        });
    }

    clearMemoryCaches(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            com.nativescript.image.EvictionManager.get().clearMemory(
                new com.nativescript.image.EvictionManager.EvictionCallback({
                    onComplete(success: boolean, error) {
                        if (success) {
                            resolve();
                        } else {
                            if (Trace.isEnabled()) {
                                CLog(CLogTypes.error, error);
                            }
                            reject(error);
                        }
                    }
                })
            );
        });
    }

    clearDiskCaches(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            com.nativescript.image.EvictionManager.get().clearDiskCache(
                new com.nativescript.image.EvictionManager.EvictionCallback({
                    onComplete(success: boolean, error) {
                        if (success) {
                            resolve();
                        } else {
                            if (Trace.isEnabled()) {
                                CLog(CLogTypes.error, error);
                            }
                            reject(error);
                        }
                    }
                })
            );
        });
    }

    prefetchToDiskCache(uri: string): Promise<void> {
        return this.prefetchToCache(uri, true);
    }

    prefetchToMemoryCache(uri: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                const context = Utils.android.getApplicationContext();
                const requestManager = com.bumptech.glide.Glide.with(context);

                // Preload into memory cache
                requestManager.asBitmap().load(uri).preload();

                // Give Glide time to load into memory
                setTimeout(() => resolve(), 100);
            } catch (error) {
                reject(error);
            }
        });
    }

    private prefetchToCache(uri: string, toDiskCache: boolean): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                const context = Utils.android.getApplicationContext();
                const requestManager = com.bumptech.glide.Glide.with(context);

                if (toDiskCache) {
                    requestManager.downloadOnly().load(uri).submit();
                } else {
                    requestManager.asBitmap().load(uri).submit();
                }
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    get android(): any {
        return glideInstance;
    }
}

let imagePipeLine: ImagePipeline;
export function getImagePipeline(): ImagePipeline {
    if (!imagePipeLine) {
        imagePipeLine = new ImagePipeline();
    }
    return imagePipeLine;
}

export function shutDown(): void {
    if (!initialized) {
        return;
    }
    initialized = false;
    // Glide cleanup
    const context = Utils.android.getApplicationContext();
    if (context) {
        com.bumptech.glide.Glide.get(context).clearMemory();
    }
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
                return `android.resource://${Utils.android.getApplicationContext().getPackageName()}/${identifier}`;
            }
        } else if (imagePath.indexOf('~/') === 0) {
            uri = `file://${path.join(knownFolders.currentApp().path, imagePath.replace('~/', ''))}`;
        } else if (imagePath.indexOf('/') === 0) {
            uri = `file://${imagePath}`;
        }
    } else {
        uri = imagePath;
    }
    return uri;
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
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    getHeight(): number {
        return this._height;
    }

    getWidth(): number {
        return this._width;
    }

    getQualityInfo(): QualityInfo {
        return {
            getQuality: () => 1,
            isOfFullQuality: () => true,
            isOfGoodEnoughQuality: () => true
        };
    }
}

export const needUpdateHierarchy = function (targetOrNeedsLayout: any, propertyKey?: string | symbol, descriptor?: PropertyDescriptor): any {
    if (typeof targetOrNeedsLayout === 'boolean') {
        return function (target2: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args: any[]) {
                if (!this.mCanUpdateHierarchy) {
                    this.mNeedUpdateHierarchy = true;
                    if (this.isLoaded && targetOrNeedsLayout) {
                        const layoutParams = (this.nativeViewProtected as android.widget.ImageView)?.getLayoutParams();
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
    //TODO: remove as it needs to be added after TS 5.7 change https://github.com/microsoft/TypeScript/pull/59860
    [key: symbol]: (...args: any[]) => any | void;

    nativeViewProtected: com.nativescript.image.MatrixImageView;
    //@ts-expect-error just for declaration
    nativeImageViewProtected: com.nativescript.image.MatrixImageView;

    mCanUpdateHierarchy = true;
    mNeedUpdateHierarchy = false;
    mNeedUpdateLayout = false;

    private currentTarget: any = null;
    private isNetworkRequest = false;
    private progressCallback: any = null;
    private loadSourceCallback: any = null;

    public onResumeNativeUpdates(): void {
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
            initialize();
        }
        return new com.nativescript.image.MatrixImageView(this._context);
    }

    public disposeNativeView() {
        this.progressCallback = null;
        this.loadSourceCallback = null;
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
            await imagePipeLine.evictFromCache(cacheKey);
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

    [stretchProperty.setNative]() {
        // Scale type
        if (this.stretch) {
            const scaleType = getScaleType(this.stretch);
            if (scaleType) {
                this.nativeViewProtected.setScaleType(scaleType);
            }
        }
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
    [roundAsCircleProperty.setNative](value) {
        this.updateHierarchy();
    }

    @needUpdateHierarchy
    [roundTopLeftRadiusProperty.setNative]() {
        this.updateHierarchy();
    }

    [imageRotationProperty.setNative](value) {
        this.nativeImageViewProtected?.setImageRotation(value);
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

    [tintColorProperty.setNative](value: Color) {
        if (this.nativeImageViewProtected) {
            this.nativeImageViewProtected.setColorFilter(value?.android ?? -1, android.graphics.PorterDuff.Mode.MULTIPLY);
        }
    }

    @needRequestImage
    [blurRadiusProperty.setNative](value) {
        this.initImage();
    }

    @needRequestImage
    [srcProperty.setNative]() {
        this.initImage();
    }
    @needRequestImage
    [decodeWidthProperty.setNative]() {
        this.initImage();
    }
    @needRequestImage
    [decodeHeightProperty.setNative]() {
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
    [aspectRatioProperty.setNative](value) {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.setAspectRatio(value || 0);
        }
    }

    @needRequestImage
    [headersProperty.setNative](value) {
        this.initImage();
    }

    [backgroundInternalProperty.setNative](value: Background) {
        super[backgroundInternalProperty.setNative](value);
        if (this.nativeViewProtected) {
            this.nativeViewProtected.setClipToOutline(value?.hasBorderRadius());
        }
    }

    [noRatioEnforceProperty.setNative](value: boolean) {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.setNoRatioEnforce(value);
        }
    }

    private loadImageWithGlide(uri: string) {
        const view = this.nativeViewProtected;
        const context = this._context;
        // Determine if this is a network request
        this.isNetworkRequest = typeof uri === 'string' && (uri.startsWith('http://') || uri.startsWith('https://'));

        let requestBuilder: com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
        let loadModel: any = uri;
        // Create callbacks separately based on what's needed
        const needsProgress = this.isNetworkRequest && this.hasListeners(ImageBase.progressEvent);
        const needsLoadSource = this.isNetworkRequest && this.hasListeners('loadSource');

        // Create progress callback if needed (only for network requests with listener)
        if (needsProgress) {
            const owner = new WeakRef(this);

            this.progressCallback = new com.nativescript.image.ImageProgressCallback({
                onProgress(url: string, bytesRead: number, totalBytes: number) {
                    const instance = owner.get();
                    if (instance) {
                        const progress = totalBytes > 0 ? bytesRead / totalBytes : 0;
                        instance.notifyProgress({
                            loaded: bytesRead,
                            total: totalBytes,
                            progress,
                            finished: bytesRead >= totalBytes
                        });
                    }
                }
            });
        }

        // Create load source callback if needed (separate from progress)
        if (needsLoadSource) {
            const owner = new WeakRef(this);
            this.loadSourceCallback = new com.nativescript.image.ImageLoadSourceCallback({
                onLoadStarted(url: string, source: string) {
                    const instance = owner.get();
                    if (instance) {
                        instance.notifyLoadSource(source);
                    }
                }
            });
        }
        // Use CustomGlideUrl if we need headers, progress, or load source
        if (this.isNetworkRequest && (this.headers || this.progressCallback || this.loadSourceCallback)) {
            const headersMap = new java.util.HashMap();

            if (this.headers) {
                for (const key in this.headers) {
                    headersMap.put(key, this.headers[key]);
                }
            }

            loadModel = new com.nativescript.image.CustomGlideUrl(
                uri,
                headersMap,
                this.progressCallback, // Can be null
                this.loadSourceCallback // Can be null
            );
        }
        requestBuilder = com.bumptech.glide.Glide.with(context).load(loadModel).signature(new com.bumptech.glide.signature.ObjectKey(Date().valueOf()));

        // Apply transformations (blur, rounded corners, etc.)
        const transformations = [];

        if (this.blurRadius) {
            transformations.push(new jp.wasabeef.glide.transformations.BlurTransformation(Math.round(this.blurRadius), this.blurDownSampling || 1));
        }

        if (this.roundAsCircle) {
            transformations.push(new jp.wasabeef.glide.transformations.CropCircleTransformation());
        } else {
            const topLeft = Utils.layout.toDevicePixels(this.roundTopLeftRadius || 0);
            const topRight = Utils.layout.toDevicePixels(this.roundTopRightRadius || 0);
            const bottomRight = Utils.layout.toDevicePixels(this.roundBottomRightRadius || 0);
            const bottomLeft = Utils.layout.toDevicePixels(this.roundBottomLeftRadius || 0);

            if (topLeft || topRight || bottomRight || bottomLeft) {
                const radius = Math.max(topLeft, topRight, bottomRight, bottomLeft);
                transformations.push(
                    new jp.wasabeef.glide.transformations.RoundedCornersTransformation(Math.round(radius), 0, jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType.ALL)
                );
            }
        }
        // Tint color
        if (this.tintColor) {
            transformations.push(new jp.wasabeef.glide.transformations.ColorFilterTransformation(this.tintColor.android));
        }
        let multiTransform: com.bumptech.glide.load.MultiTransformation<any>;
        if (transformations.length > 0) {
            multiTransform = new com.bumptech.glide.load.MultiTransformation(java.util.Arrays.asList(transformations));
            requestBuilder = requestBuilder.transform(multiTransform);
        }

        // Placeholder
        if (this.placeholderImageUri) {
            const placeholder = this.getDrawable(this.placeholderImageUri);
            if (placeholder) {
                requestBuilder = requestBuilder.placeholder(placeholder as any);
            }
        }

        // Error image
        if (this.failureImageUri) {
            const error = this.getDrawable(this.failureImageUri);
            if (error) {
                requestBuilder = requestBuilder.error(error);
            }
        }

        // Thumbnail
        if (this.lowerResSrc) {
            const lowerResUri = getUri(this.lowerResSrc);
            if (lowerResUri) {
                const thumbnailRequest = com.bumptech.glide.Glide.with(context).load(lowerResUri);
                requestBuilder = requestBuilder.thumbnail(thumbnailRequest);
            }
        }

        // Fade duration + conditional crossfade
        if (this.fadeDuration > 0) {
            const factory = new com.nativescript.image.ConditionalCrossFadeFactory(this.fadeDuration, !this.alwaysFade);
            requestBuilder = requestBuilder.transition(com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions.withCrossFade(factory));
        }
        // Cache settings
        if (this.noCache) {
            requestBuilder = requestBuilder.skipMemoryCache(true).diskCacheStrategy(com.bumptech.glide.load.engine.DiskCacheStrategy.NONE);
        }

        // Decode size
        if (this.decodeWidth || this.decodeHeight) {
            const Target = com.bumptech.glide.request.target.Target;
            const width = this.decodeWidth || Target.SIZE_ORIGINAL;
            const height = this.decodeHeight || Target.SIZE_ORIGINAL;
            if (width === Target.SIZE_ORIGINAL) {
                requestBuilder = requestBuilder.override(height);
            } else if (height === Target.SIZE_ORIGINAL) {
                requestBuilder = requestBuilder.override(width);
            } else {
                requestBuilder = requestBuilder.override(width, height);
            }
        }

        const owner = new WeakRef(this);
        const sourceKey = new com.bumptech.glide.signature.ObjectKey(uri);
        const objectArr = Array.create(com.bumptech.glide.request.RequestListener, 2);
        const ro = new com.bumptech.glide.request.RequestOptions().signature(signature);

        objectArr[0] = new com.nativescript.image.SaveKeysRequestListener(
            uri,
            uri,
            sourceKey,
            signature,
            this.decodeWidth || com.bumptech.glide.request.target.Target.SIZE_ORIGINAL,
            this.decodeHeight || com.bumptech.glide.request.target.Target.SIZE_ORIGINAL,
            multiTransform,
            ro,
            null
        );
        objectArr[1] = new com.bumptech.glide.request.RequestListener({
            onLoadFailed(e: any, model: any, target: any, isFirstResource: boolean): boolean {
                const instance = owner.get();
                if (instance) {
                    instance.progressCallback = null; // Clean up
                    instance.loadSourceCallback = null;
                    instance.notifyFailure(e);
                }
                return false;
            },
            onResourceReady(resource: android.graphics.drawable.Drawable, model: any, target: any, dataSource: any, isFirstResource: boolean): boolean {
                const instance = owner.get();
                if (instance) {
                    instance.progressCallback = null; // Clean up
                    instance.loadSourceCallback = null;

                    instance.notifyFinalImageSet(resource, dataSource);

                    // Handle auto-play for animated drawables
                    if (!instance.autoPlayAnimations && resource instanceof android.graphics.drawable.Animatable) {
                        setTimeout(() => {
                            resource.stop();
                        }, 0);
                    }

                    // Notify load source for cache hits (network notified by interceptor)
                    let source = 'local';
                    if (dataSource) {
                        try {
                            const sourceName = dataSource.name ? dataSource.name() : String(dataSource);
                            switch ((sourceName || '').toUpperCase()) {
                                case 'MEMORY_CACHE':
                                    source = 'memory';
                                    break;
                                case 'DATA_DISK_CACHE':
                                case 'RESOURCE_DISK_CACHE':
                                    source = 'disk';
                                    break;
                                case 'REMOTE':
                                    source = 'network';
                                    break;
                                case 'LOCAL':
                                    source = 'local';
                                    break;
                            }
                        } catch (err) {
                            source = 'unknown';
                        }
                    }

                    // Only notify if not network (network already notified by interceptor)
                    if (source !== 'network' && instance.hasListeners('loadSource')) {
                        instance.notifyLoadSource(source);
                    }
                }
                return false;
            }
        });

        this.currentTarget = new com.nativescript.image.MatrixDrawableImageViewTarget(view)
        requestBuilder.signature(signature).listener(new com.nativescript.image.CompositeRequestListener(objectArr)).into(this.currentTarget);
    }

    private notifyLoadSource(source: string) {
        const eventName = ImageBase.loadSourceEvent;
        if (this.hasListeners(eventName)) {
            this.notify({
                eventName,
                source // 'network', 'memory', 'disk', 'local'
            } as LoadSourceEventData);
        }
    }

    public notifyProgress(payload: { loaded: number; total: number; progress: number; finished: boolean }) {
        const eventName = ImageBase.progressEvent;
        if (this.hasListeners(eventName)) {
            this.notify({
                eventName,
                current: payload.loaded,
                total: payload.total,
                progress: payload.progress,
                finished: payload.finished
            } as ProgressEventData);
        }
    }

    private notifyFinalImageSet(drawable: android.graphics.drawable.Drawable, dataSource?) {
        let sourceLabel = 'local';
        if (dataSource) {
            try {
                sourceLabel = dataSource.name ? dataSource.name() : String(dataSource);
            } catch (err) {
                sourceLabel = String(dataSource);
            }

            switch ((sourceLabel || '').toUpperCase()) {
                case 'MEMORY_CACHE':
                    sourceLabel = 'memory';
                    break;
                case 'DATA_DISK_CACHE':
                case 'RESOURCE_DISK_CACHE':
                    sourceLabel = 'disk';
                    break;
                case 'REMOTE':
                    sourceLabel = 'network';
                    break;
                case 'LOCAL':
                    sourceLabel = 'local';
                    break;
                default:
                    break;
            }
        }

        const eventName = ImageBase.finalImageSetEvent;
        if (this.hasListeners(eventName)) {
            const width = drawable ? drawable.getIntrinsicWidth() : 0;
            const height = drawable ? drawable.getIntrinsicHeight() : 0;
            const info = new ImageInfo(width, height);

            this.notify({
                eventName,
                imageInfo: info,
                animatable: this.getAnimatable(drawable),
                android: drawable,
                source: sourceLabel
            } as FinalEventData);
        }
    }

    private notifyFailure(error: any) {
        const eventName = ImageBase.failureEvent;
        if (this.hasListeners(eventName)) {
            this.notify({
                eventName,
                error: error instanceof java.lang.Throwable ? wrapNativeException(error) : error
            } as FailureEventData);
        }
    }

    private getAnimatable(drawable: android.graphics.drawable.Drawable): AnimatedImage | null {
        if (drawable && drawable instanceof android.graphics.drawable.Animatable) {
            return drawable as any;
        }
        return null;
    }

    protected async handleImageSrc(src: SrcType) {
        const view = this.nativeViewProtected;
        if (!view) {
            return;
        }

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
            let drawable: android.graphics.drawable.Drawable;

            if (typeof src === 'string') {
                if (Utils.isFontIconURI(src)) {
                    const fontIconCode = src.split('//')[1];
                    if (fontIconCode !== undefined) {
                        const font = this.style.fontInternal;
                        const color = this.style.color;
                        drawable = new android.graphics.drawable.BitmapDrawable(
                            Utils.android.getApplicationContext().getResources(),
                            ImageSource.fromFontIconCodeSync(fontIconCode, font, color).android
                        );
                    }
                }
            } else if (src instanceof ImageSource) {
                drawable = new android.graphics.drawable.BitmapDrawable(Utils.android.getApplicationContext().getResources(), src.android as android.graphics.Bitmap);
            }

            if (drawable) {
                view.setImageDrawable(drawable);
                this.notifyFinalImageSet(drawable);
                return;
            }

            const uri = getUri(src as string);
            if (!uri) {
                console.error(`Error: 'src' not valid: ${src}`);
                return;
            }

            this.loadImageWithGlide(uri);
        } else {
            // Clear existing request before removing the drawable
            if (this.currentTarget) {
                com.bumptech.glide.Glide.with(this._context).clear(this.currentTarget);
                this.currentTarget = null;
            } else {
                com.bumptech.glide.Glide.with(this._context).clear(view);
            }
            view.setImageDrawable(null);
        }
    }

    protected async initImage() {
        try {
            await this.handleImageSrc(this.src);
        } catch (error) {
            console.error(error, error.stack);
        }
    }

    private updateHierarchy() {
        if (!this.mCanUpdateHierarchy) {
            this.mNeedUpdateHierarchy = true;
            return;
        }

        // Force reload with new settings
        if (this.nativeImageViewProtected && this.src) {
            this.initImage();
        }
    }

    private getDrawable(path: string | ImageSource): android.graphics.drawable.Drawable | number {
        if (typeof path === 'string') {
            if (Utils.isFontIconURI(path)) {
                const fontIconCode = path.split('//')[1];
                if (fontIconCode !== undefined) {
                    const font = this.style.fontInternal;
                    const color = this.style.color;
                    return new android.graphics.drawable.BitmapDrawable(Utils.android.getApplicationContext().getResources(), ImageSource.fromFontIconCodeSync(fontIconCode, font, color).android);
                }
            } else if (Utils.isFileOrResourcePath(path)) {
                if (path.indexOf(Utils.RESOURCE_PREFIX) === 0) {
                    return this.getDrawableFromResource(path);
                } else {
                    return this.getDrawableFromLocalFile(path);
                }
            }
        } else if (path instanceof ImageSource) {
            return new android.graphics.drawable.BitmapDrawable(Utils.android.getApplicationContext().getResources(), path.android);
        }
        return null;
    }

    private getDrawableFromLocalFile(localFilePath: string): android.graphics.drawable.BitmapDrawable {
        const img = ImageSource.fromFileSync(localFilePath);
        if (img) {
            return new android.graphics.drawable.BitmapDrawable(Utils.android.getApplicationContext().getResources(), img.android);
        }
        return null;
    }

    private getDrawableFromResource(resourceName: string): number {
        const application = Utils.android.getApplication();
        const resources = application.getResources();
        const identifier = resources.getIdentifier(resourceName.substring(Utils.RESOURCE_PREFIX.length), 'drawable', application.getPackageName());
        return identifier;
    }

    startAnimating() {
        const drawable = this.nativeViewProtected.getDrawable()
        if (drawable && drawable instanceof android.graphics.drawable.Animatable) {
            drawable.start();
        }
    }

    stopAnimating() {
        const drawable = this.nativeViewProtected.getDrawable()
        if (drawable && drawable instanceof android.graphics.drawable.Animatable) {
            drawable.stop();
        }
    }
}

function getScaleType(scaleType: ScaleType): android.widget.ImageView.ScaleType {
    if (isString(scaleType)) {
        switch (scaleType) {
            case ScaleType.Center:
                return android.widget.ImageView.ScaleType.CENTER;
            case ScaleType.AspectFill:
            case ScaleType.CenterCrop:
                return android.widget.ImageView.ScaleType.CENTER_CROP;
            case ScaleType.CenterInside:
                return android.widget.ImageView.ScaleType.CENTER_INSIDE;
            case ScaleType.FitCenter:
            case ScaleType.AspectFit:
                return android.widget.ImageView.ScaleType.FIT_CENTER;
            case ScaleType.FitEnd:
                return android.widget.ImageView.ScaleType.FIT_END;
            case ScaleType.FitStart:
                return android.widget.ImageView.ScaleType.FIT_START;
            case ScaleType.Fill:
            case ScaleType.FitXY:
                return android.widget.ImageView.ScaleType.FIT_XY;
            case ScaleType.FocusCrop:
                return android.widget.ImageView.ScaleType.CENTER_CROP;
            default:
                return android.widget.ImageView.ScaleType.FIT_CENTER;
        }
    }
    return android.widget.ImageView.ScaleType.FIT_CENTER;
}
