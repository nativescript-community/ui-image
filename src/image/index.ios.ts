export * from './index-common';
import { ApplicationSettings, Color, ImageAsset, ImageSource, Screen, Trace, Utils, knownFolders, path } from '@nativescript/core';
import { debounce } from '@nativescript/core/utils';
import { layout } from '@nativescript/core/utils/layout-helper';
import { isString } from '@nativescript/core/utils/types';
import {
    CLog,
    CLogTypes,
    FailureEventData,
    FinalEventData,
    ImageBase,
    ImageInfo as ImageInfoBase,
    ImagePipelineConfigSetting,
    LoadSourceEventData,
    PrefetchOptions,
    ProgressEventData,
    ScaleType,
    SrcType,
    Stretch,
    decodeWidthProperty,
    failureImageUriProperty,
    headersProperty,
    imageRotationProperty,
    placeholderImageUriProperty,
    srcProperty,
    stretchProperty,
    wrapNativeException
} from './index-common';
import { GetContextFromOptionsCallback } from '.';
import { decodeHeightProperty } from '@nativescript/core/ui/image';

export class ImageInfo implements ImageInfoBase {
    constructor(
        private width: number,
        private height: number
    ) {}

    getHeight(): number {
        return this.height;
    }

    getWidth(): number {
        return this.width;
    }
}

const supportedLocalFormats = ['png', 'jpg', 'gif', 'jpeg', 'webp'];

let screenScale = -1;

function getScaleType(scaleType: string) {
    if (isString(scaleType)) {
        switch (scaleType) {
            case ScaleType.Center:
            case ScaleType.CenterCrop:
            case ScaleType.AspectFill:
                return SDImageScaleMode.AspectFill;
            case ScaleType.CenterInside:
            case ScaleType.FitCenter:
            case ScaleType.FitEnd:
            case ScaleType.FitStart:
            case ScaleType.AspectFit:
                return SDImageScaleMode.AspectFit;
            case ScaleType.FitXY:
            case ScaleType.FocusCrop:
            case ScaleType.Fill:
                return SDImageScaleMode.Fill;
            default:
                break;
        }
    }
    return null;
}

function getUIImageScaleType(scaleType: string) {
    if (isString(scaleType)) {
        switch (scaleType) {
            case ScaleType.Center:
                return UIViewContentMode.Center;
            case ScaleType.FocusCrop:
            case ScaleType.CenterCrop:
            case ScaleType.AspectFill:
                return UIViewContentMode.ScaleAspectFill;
            case ScaleType.AspectFit:
            case ScaleType.CenterInside:
            case ScaleType.FitCenter:
                return UIViewContentMode.ScaleAspectFit;
            case ScaleType.FitEnd:
                return UIViewContentMode.Right;
            case ScaleType.FitStart:
                return UIViewContentMode.Left;
            case ScaleType.Fill:
            case ScaleType.FitXY:
                return UIViewContentMode.ScaleToFill;
            case ScaleType.None:
                return UIViewContentMode.TopLeft;
            default:
                break;
        }
    }
    return null;
}

export function initialize(config?: ImagePipelineConfigSetting): void {
    SDImageLoadersManager.sharedManager.loaders = NSArray.arrayWithArray([SDWebImageDownloader.sharedDownloader, SDImagePhotosLoader.sharedLoader]);
}
export function shutDown(): void {}

const pluginsGetContextFromOptions = new Set<GetContextFromOptionsCallback>();
export function registerPluginGetContextFromOptions(callback: GetContextFromOptionsCallback) {
    pluginsGetContextFromOptions.add(callback);
}
function getContextFromOptions(options: Partial<Img>) {
    const context: NSDictionary<string, any> = NSMutableDictionary.dictionary();
    const transformers = [];
    if (options.decodeWidth || options.decodeHeight) {
        //@ts-ignore
        transformers.push(NSImageDecodeSizeTransformer.transformerWithDecodeWidthDecodeHeight(options.decodeWidth || options.decodeHeight, options.decodeHeight || options.decodeWidth));
    }
    if (options.tintColor) {
        transformers.push(SDImageTintTransformer.transformerWithColor(options.tintColor.ios));
    }
    if (options.blurRadius) {
        transformers.push(SDImageBlurTransformer.transformerWithRadius(options.blurRadius));
    }
    if (options.roundAsCircle === true) {
        //@ts-ignore
        transformers.push(NSImageRoundAsCircleTransformer.transformer());
    }
    if (options.imageRotation !== 0 && !isNaN(options.imageRotation)) {
        transformers.push(SDImageRotationTransformer.transformerWithAngleFitSize(-options.imageRotation * (Math.PI / 180), true));
    }
    if (options.roundBottomLeftRadius || options.roundBottomRightRadius || options.roundTopLeftRadius || options.roundTopRightRadius) {
        transformers.push(
            //@ts-ignore
            NSImageRoundCornerTransformer.transformerWithTopLefRadiusTopRightRadiusBottomRightRadiusBottomLeftRadius(
                layout.toDeviceIndependentPixels(options.roundTopLeftRadius),
                layout.toDeviceIndependentPixels(options.roundTopRightRadius),
                layout.toDeviceIndependentPixels(options.roundBottomRightRadius),
                layout.toDeviceIndependentPixels(options.roundBottomLeftRadius)
            )
        );
    }
    pluginsGetContextFromOptions.forEach((c) => c(context, transformers, options));

    if (transformers.length > 0) {
        context.setValueForKey(SDImagePipelineTransformer.transformerWithTransformers(transformers), SDWebImageContextImageTransformer);
    }
    return context;
}

// This is not the best solution as their might be a lot of corner cases
// for example if an image is removed from cache without going through ImagePipeline
// we wont know it and the cacheKeyMap will grow
// but i dont see a better way right now
const CACHE_KEYS_SETTING_KEY = 'NS_ui_image_cache_keys';
let cacheKeyMap = JSON.parse(ApplicationSettings.getString(CACHE_KEYS_SETTING_KEY, '{}'));

const saveCacheKeys = debounce(() => ApplicationSettings.setString(CACHE_KEYS_SETTING_KEY, JSON.stringify(cacheKeyMap)), 500);
function registerCacheKey(cacheKey: string, uri: any) {
    const set = new Set(cacheKeyMap[uri] || []);
    set.add(cacheKey);
    cacheKeyMap[uri] = [...set];
    saveCacheKeys();
}
export class ImagePipeline {
    static iosComplexCacheEviction = false;
    private mIos: SDImageCache = SDImageCache.sharedImageCache;
    constructor() {}

    getCacheKey(url: string, options: PrefetchOptions = {}) {
        const uri = getUri(url);
        const context = getContextFromOptions(options as any);
        return SDWebImageManager.sharedManager.cacheKeyForURLContext(uri, context);
    }

    async isInDiskCache(url: string, options?: PrefetchOptions): Promise<boolean> {
        const key = this.getCacheKey(url, options);
        return this.mIos.diskImageDataExistsWithKey(key);
    }

    isInBitmapMemoryCache(url: string, options?: PrefetchOptions): boolean {
        const key = this.getCacheKey(url, options);
        return this.mIos.imageFromMemoryCacheForKey(key) !== null;
    }

    evictFromMemoryCache(key: string): void {
        const cachekKeys = (cacheKeyMap[key] || []).concat([key]);
        cachekKeys.forEach((k) => {
            this.mIos.removeImageFromMemoryForKey(k);
        });
    }

    async evictFromDiskCache(key: string) {
        return this.evictFromCache(key, SDImageCacheType.Disk);
    }

    async evictFromCache(key: string, type = SDImageCacheType.All) {
        const cachekKeys = (cacheKeyMap[key] || []).concat([key]);
        delete cacheKeyMap[key];
        return Promise.all(
            cachekKeys.map(
                (k) =>
                    new Promise<void>((resolve) => {
                        this.mIos.removeImageForKeyCacheTypeCompletion(k, type, resolve);
                    })
            )
        );
    }

    clearCaches() {
        cacheKeyMap = {};
        ApplicationSettings.remove(CACHE_KEYS_SETTING_KEY);
        this.mIos.clearMemory();
        this.mIos.clearDiskOnCompletion(null);
    }

    clearMemoryCaches() {
        this.mIos.clearMemory();
    }

    clearDiskCaches() {
        this.mIos.clearDiskOnCompletion(null);
    }

    prefetchToDiskCache(uri: string, options?: PrefetchOptions): Promise<void> {
        return this.prefetchToCacheType(uri, SDImageCacheType.Disk, options);
    }

    prefetchToMemoryCache(uri: string, options?: PrefetchOptions): Promise<void> {
        return this.prefetchToCacheType(uri, SDImageCacheType.Memory, options);
    }

    private prefetchToCacheType(uri: string, cacheType: SDImageCacheType, options: PrefetchOptions = {}): Promise<void> {
        return new Promise((resolve, reject) => {
            const context = getContextFromOptions(options as any);

            SDWebImagePrefetcher.sharedImagePrefetcher.context = context;
            SDWebImagePrefetcher.sharedImagePrefetcher.prefetchURLsProgressCompleted([getUri(uri)], null, (finished, skipped) => {
                if (finished && !skipped) {
                    resolve();
                } else {
                    reject(`prefetch failed for URI: ${uri}`);
                }
            });
        });
    }

    get ios() {
        return this.mIos;
    }
}

export const needRequestImage = function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if (!this.mCanRequestImage) {
            this.mNeedRequestImage = true;
            return;
        }
        this.initImage();
        return originalMethod.apply(this, args);
    };
};

export function getImagePipeline(): ImagePipeline {
    const imagePineLine = new ImagePipeline();
    return imagePineLine;
}

function getUri(src: string | ImageAsset) {
    let uri: any = src;
    if (src instanceof ImageAsset) {
        return NSURL.sd_URLWithAsset(src.ios);
    }
    if (uri.indexOf(Utils.RESOURCE_PREFIX) === 0) {
        const resName = uri.substr(Utils.RESOURCE_PREFIX.length);
        if (screenScale === -1) {
            screenScale = Screen.mainScreen.scale;
        }
        const found = supportedLocalFormats.some((v) => {
            for (let i = screenScale; i >= 1; i--) {
                uri = NSBundle.mainBundle.URLForResourceWithExtension(i > 1 ? `${resName}@${i}x` : resName, v);
                if (uri) {
                    return true;
                }
            }
            return false;
        });
        if (found) {
            return uri;
        }
    } else if (uri.indexOf('~/') === 0) {
        return NSURL.fileURLWithPath(`${path.join(knownFolders.currentApp().path, uri.replace('~/', ''))}`);
    } else if (uri.indexOf('/') === 0) {
        return NSURL.fileURLWithPath(uri);
    }
    return NSURL.URLWithString(uri);
}

export class Img extends ImageBase {
    nativeViewProtected: SDAnimatedImageView | UIImageView;
    //@ts-ignore
    nativeImageViewProtected: SDAnimatedImageView | UIImageView;
    mCacheKey: string;
    placeholderImage: UIImage;

    // network detection + notification guard
    private _isRemote: boolean = false;
    private _notifiedLoadSourceNetworkStart: boolean = false;

    contextOptions = null;

    get cacheKey() {
        return this.mCacheKey;
    }
    protected mImageSourceAffectsLayout: boolean = true;
    public createNativeView() {
        const result = this.animatedImageView ? SDAnimatedImageView.new() : UIImageView.new();
        result.contentMode = UIViewContentMode.ScaleAspectFit;
        result.clipsToBounds = true;
        result.userInteractionEnabled = true; // needed for gestures to work
        result.tintColor = null;
        return result;
    }

    _setNativeClipToBounds() {
        // Always set clipsToBounds for images
        this.nativeViewProtected.clipsToBounds = true;
    }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
        // We don't call super because we measure native view with specific size.
        const width = layout.getMeasureSpecSize(widthMeasureSpec);
        const widthMode = layout.getMeasureSpecMode(widthMeasureSpec);
        const height = layout.getMeasureSpecSize(heightMeasureSpec);
        const heightMode = layout.getMeasureSpecMode(heightMeasureSpec);

        const image = this.nativeImageViewProtected.image;

        const finiteWidth: boolean = widthMode === layout.EXACTLY;
        const finiteHeight: boolean = heightMode === layout.EXACTLY;
        this.mImageSourceAffectsLayout = !finiteWidth || !finiteHeight;
        // if (Trace.isEnabled()) {
        //     CLog(CLogTypes.info, 'onMeasure', this.src, widthMeasureSpec, heightMeasureSpec, width, height, this.aspectRatio, image && image.imageOrientation);
        // }
        if (image || this.aspectRatio > 0) {
            const nativeWidth = image ? layout.toDevicePixels(image.size.width) : 0;
            const nativeHeight = image ? layout.toDevicePixels(image.size.height) : 0;
            const imgRatio = nativeWidth / nativeHeight;
            const ratio = this.aspectRatio || imgRatio;
            // const scale = this.computeScaleFactor(width, height, finiteWidth, finiteHeight, nativeWidth, nativeHeight, this.aspectRatio || imgRatio );

            if (!finiteWidth && finiteHeight) {
                if (!this.noRatioEnforce || this.horizontalAlignment !== 'stretch') {
                    widthMeasureSpec = layout.makeMeasureSpec(height * ratio, layout.EXACTLY);
                } else {
                    widthMeasureSpec = layout.makeMeasureSpec(0, layout.AT_MOST);
                }
            } else if (!finiteHeight && finiteWidth) {
                if (!this.noRatioEnforce || this.verticalAlignment !== 'stretch') {
                    heightMeasureSpec = layout.makeMeasureSpec(width / ratio, layout.EXACTLY);
                } else {
                    heightMeasureSpec = layout.makeMeasureSpec(0, layout.AT_MOST);
                }
            } else if (!finiteWidth && !finiteHeight) {
                const viewRatio = width / height;
                if (viewRatio < ratio) {
                    widthMeasureSpec = layout.makeMeasureSpec(width, layout.EXACTLY);
                    heightMeasureSpec = layout.makeMeasureSpec(width / ratio, layout.EXACTLY);
                } else {
                    widthMeasureSpec = layout.makeMeasureSpec(height * ratio, layout.EXACTLY);
                    heightMeasureSpec = layout.makeMeasureSpec(height, layout.EXACTLY);
                }
            }

            if (Trace.isEnabled()) {
                CLog(CLogTypes.info, 'onMeasure', this.src, this.aspectRatio, finiteWidth, finiteHeight, width, height, nativeWidth, nativeHeight, widthMeasureSpec, heightMeasureSpec);
            }
        } else {
            // if (!finiteWidth && finiteHeight) {
            //     widthMeasureSpec = layout.makeMeasureSpec(0, layout.UNSPECIFIED);
            // } else if (!finiteHeight && finiteWidth) {
            //     heightMeasureSpec = layout.makeMeasureSpec(0, layout.UNSPECIFIED);
            // }
        }
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    }

    public async updateImageUri() {
        this._setNativeImage(null, false);
        this.initImage();
    }

    public _setNativeImage(nativeImage: UIImage, animated = true) {
        if (animated && this.fadeDuration) {
            // Crossfade from the currently visible content (placeholder/previous image) to the new image.
            try {
                UIView.transitionWithViewDurationOptionsAnimationsCompletion(
                    this.nativeImageViewProtected,
                    this.fadeDuration / 1000,
                    UIViewAnimationOptions.TransitionCrossDissolve,
                    () => {
                        this.nativeImageViewProtected.image = nativeImage;
                    },
                    null
                );
            } catch (ex) {
                // Fall back to an alpha fade if transition isn't available for some reason.
                this.nativeImageViewProtected.alpha = 0.0;
                this.nativeImageViewProtected.image = nativeImage;
                UIView.animateWithDurationAnimations(this.fadeDuration / 1000, () => {
                    this.nativeImageViewProtected.alpha = this.opacity;
                });
            }
        } else {
            this.nativeImageViewProtected.image = nativeImage;
        }
        // Ensure final alpha is set to the view's current opacity.
        this.nativeImageViewProtected.alpha = this.opacity;
        if (this.mImageSourceAffectsLayout) {
            // this.mImageSourceAffectsLayout = false;
            this.requestLayout();
        }
    }

    private handleImageLoaded = (image: UIImage, error: NSError, cacheType: number) => {
        if (!this.nativeViewProtected) {
            return;
        }
        const animate = (this.alwaysFade || cacheType !== SDImageCacheType.Memory) && this.fadeDuration > 0;
        if (image) {
            this._setNativeImage(image, animate);
        }
        if (!this.autoPlayAnimations) {
            this.nativeImageViewProtected.stopAnimating();
        }

        let sourceStr = 'none';
        if (typeof cacheType === 'number') {
            if (cacheType === SDImageCacheType.Memory) sourceStr = 'memory';
            else if (cacheType === SDImageCacheType.Disk) sourceStr = 'disk';
            else if (cacheType === SDImageCacheType.None) sourceStr = 'network';
            else sourceStr = 'unknown';
        }

        if (error) {
            this.notify({
                eventName: Img.failureEvent,
                error: wrapNativeException(error)
            } as FailureEventData);
            if (this.failureImageUri) {
                image = this.getUIImage(this.failureImageUri);
                this._setNativeImage(image, animate);
            }
        } else if (image) {
            this.notify({
                eventName: ImageBase.finalImageSetEvent,
                imageInfo: new ImageInfo(image.size.width, image.size.height),
                ios: image,
                source: sourceStr
            } as FinalEventData);
        }

        // Notify where the image came from (memory/disk/network) in a loadSource event.
        // For cached (memory/disk) images, emit loadSource now (we already emit a "network start" in onLoadProgress for remote)
        if (cacheType !== SDImageCacheType.None && this.hasListeners(ImageBase.loadSourceEvent)) {
            this.notify({
                eventName: ImageBase.loadSourceEvent,
                source: sourceStr
            } as LoadSourceEventData);
        }

        this.handleImageProgress(1);
    };

    private onLoadProgress = (currentSize: number, totalSize: number) => {
        const fraction = totalSize > 0 ? currentSize / totalSize : -1;
        this.handleImageProgress(fraction, totalSize);
        Utils.executeOnMainThread(() => {
            const eventName = ImageBase.progressEvent;
            if (this.hasListeners(eventName)) {
                // Notify progress event
                this.notify({
                    eventName,
                    progress: fraction,
                    current: currentSize,
                    total: totalSize
                } as ProgressEventData);
            }

            // If this is a network load, notify loadSource event once at the first progress call
            if (this._isRemote && !this._notifiedLoadSourceNetworkStart) {
                this._notifiedLoadSourceNetworkStart = true;
                if (this.hasListeners(ImageBase.loadSourceEvent)) {
                    this.notify({
                        eventName: ImageBase.loadSourceEvent,
                        source: 'network'
                    } as LoadSourceEventData);
                }
            }
        });
    };

    private getUIImage(imagePath: string | ImageSource) {
        if (!path) {
            return null;
        }
        let image;
        if (typeof imagePath === 'string') {
            if (Utils.isFontIconURI(imagePath)) {
                const fontIconCode = imagePath.split('//')[1];
                if (fontIconCode !== undefined) {
                    // support sync mode only
                    const font = this.style.fontInternal;
                    const color = this.style.color;
                    image = ImageSource.fromFontIconCodeSync(fontIconCode, font, color).ios;
                }
            }
            if (!image && Utils.isFileOrResourcePath(imagePath)) {
                image = ImageSource.fromFileOrResourceSync(imagePath);
            }
        } else {
            image = imagePath;
        }

        return image?.ios;
    }

    protected async initImage() {
        // this.nativeImageViewProtected.setImageURI(null);
        this.handleImageSrc(this.src);
    }

    protected async handleImageSrc(src: SrcType) {
        if (this.nativeViewProtected) {
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
                const animate = this.fadeDuration > 0;
                if (src instanceof ImageSource) {
                    this._setNativeImage(src.ios, animate);
                    return;
                } else if (typeof src === 'string') {
                    if (Utils.isFontIconURI(src)) {
                        const fontIconCode = src.split('//')[1];
                        if (fontIconCode !== undefined) {
                            // support sync mode only
                            const font = this.style.fontInternal;
                            const color = this.style.color;
                            this._setNativeImage(ImageSource.fromFontIconCodeSync(fontIconCode, font, color).ios, animate);
                        }
                        return;
                    }
                }

                const uri = getUri(src as string | ImageAsset);
                // detect whether this uri is a remote HTTP/HTTPS resource
                const scheme = uri && (uri as NSURL).scheme ? ((uri as NSURL).scheme + '').toLowerCase() : null;
                this._isRemote = scheme === 'http' || scheme === 'https';
                // reset network-start notification guard for this new request
                this._notifiedLoadSourceNetworkStart = false;
                let options = SDWebImageOptions.ScaleDownLargeImages | SDWebImageOptions.AvoidAutoSetImage;

                if (this.placeholderImageUri) {
                    this.placeholderImage = this.getUIImage(this.placeholderImageUri);
                    this._setNativeImage(this.placeholderImage, animate);
                }

                if (this.noCache) {
                    // const key = uri.absoluteString;
                    // const imagePipeLine = getImagePipeline();
                    // const isInCache = imagePipeLine.isInBitmapMemoryCache(key);
                    // if (isInCache) {
                    //     imagePipeLine.evictFromCache(key);
                    // }
                    options = options | SDWebImageOptions.FromLoaderOnly;
                }
                if (this.alwaysFade === true) {
                    options |= SDWebImageOptions.ForceTransition;
                }
                if (this.progressiveRenderingEnabled === true) {
                    options = options | SDWebImageOptions.ProgressiveLoad;
                }
                const context = getContextFromOptions(this);
                if (this.animatedImageView) {
                    // as we use SDAnimatedImageView  all images are loaded as SDAnimatedImage;
                    options |= SDWebImageOptions.TransformAnimatedImage;
                }

                if (this.contextOptions && typeof this.contextOptions === 'object') {
                    Object.keys(this.contextOptions).forEach((k) => {
                        const value = this.contextOptions[k];
                        context.setValueForKey(value, k);
                    });
                }

                if (this.headers) {
                    const requestModifier = SDWebImageDownloaderRequestModifier.requestModifierWithBlock((request: NSURLRequest): NSURLRequest => {
                        const newRequest = request.mutableCopy() as NSMutableURLRequest;
                        Object.keys(this.headers).forEach((k) => {
                            newRequest.addValueForHTTPHeaderField(this.headers[k], k);
                        });

                        return newRequest.copy();
                    });

                    context.setValueForKey(requestModifier, SDWebImageContextDownloadRequestModifier);
                }

                this.mCacheKey = SDWebImageManager.sharedManager.cacheKeyForURLContext(uri, context);
                console.log('loading image', uri, this.mCacheKey);
                if (ImagePipeline.iosComplexCacheEviction) {
                    registerCacheKey(this.mCacheKey, uri);
                }

                this.nativeImageViewProtected.sd_setImageWithURLPlaceholderImageOptionsContextProgressCompleted(
                    uri,
                    this.placeholderImage,
                    options,
                    context,
                    this.onLoadProgress,
                    this.handleImageLoaded
                );
            } else if (this.placeholderImage) {
                this._setNativeImage(this.placeholderImage);
            } else {
                this._setNativeImage(null);
            }
        }
    }
    @needRequestImage
    [srcProperty.setNative](value) {}
    @needRequestImage
    [imageRotationProperty.setNative](value) {}
    @needRequestImage
    [placeholderImageUriProperty.setNative]() {}
    @needRequestImage
    [decodeWidthProperty.setNative]() {}
    @needRequestImage
    [decodeHeightProperty.setNative]() {}
    @needRequestImage
    [headersProperty.setNative](value) {}
    @needRequestImage
    [failureImageUriProperty.setNative]() {}

    [stretchProperty.setNative](value: Stretch) {
        if (!this.nativeView) {
            return;
        }
        this.nativeImageViewProtected.contentMode = getUIImageScaleType(value);
    }
    // [ImageBase.blendingModeProperty.setNative](value: string) {
    //     switch (value) {
    //         case 'multiply':
    //            this.nativeImageViewProtected.layer.compositingFilter = 'multiply';
    //             break;
    //         case 'lighten':
    //            this.nativeImageViewProtected.layer.compositingFilter = 'lighten';
    //             break;
    //         case 'screen':
    //            this.nativeImageViewProtected.layer.compositingFilter = 'screen';
    //             break;
    //     }
    // }

    startAnimating() {
        this.nativeImageViewProtected.startAnimating();
    }
    stopAnimating() {
        this.nativeImageViewProtected.stopAnimating();
    }
}
