export * from './index-common';
import { Color, ImageAsset, ImageSource, Screen, Trace, Utils, knownFolders, path } from '@nativescript/core';
import { layout } from '@nativescript/core/utils/layout-helper';
import { isString } from '@nativescript/core/utils/types';
import {
    CLog,
    CLogTypes,
    EventData,
    ImageBase,
    ImageInfo as ImageInfoBase,
    ImagePipelineConfigSetting,
    ScaleType,
    SrcType,
    Stretch,
    failureImageUriProperty,
    headersProperty,
    imageRotationProperty,
    placeholderImageUriProperty,
    progressBarColorProperty,
    showProgressBarProperty,
    srcProperty,
    stretchProperty,
    wrapNativeException
} from './index-common';
import { FailureEventData, GetContextFromOptionsCallback } from '@nativescript-community/ui-image';

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

export interface FinalEventData extends EventData {
    imageInfo: ImageInfo;
    ios: UIImage;
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

let pluginsGetContextFromOptions = new Set<GetContextFromOptionsCallback>();
export function registerPluginGetContextFromOptions(callback: GetContextFromOptionsCallback) {
    pluginsGetContextFromOptions.add(callback)
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
    if (transformers.length > 0) {
        context.setValueForKey(SDImagePipelineTransformer.transformerWithTransformers(transformers), SDWebImageContextImageTransformer);
    }
    pluginsGetContextFromOptions.forEach(c=>c(context, transformers, options));
    return context;
}

export class ImagePipeline {
    private mIos: SDImageCache = SDImageCache.sharedImageCache;
    constructor() {}

    getCacheKey(uri: string, options: Partial<Img>) {
        const context = getContextFromOptions(options);
        return SDWebImageManager.sharedManager.cacheKeyForURLContext(NSURL.URLWithString(uri), context);
    }

    isInDiskCache(key: string): boolean {
        return this.mIos.diskImageDataExistsWithKey(key);
    }

    isInBitmapMemoryCache(key: string): boolean {
        return this.mIos.imageFromMemoryCacheForKey(key) !== null;
    }

    evictFromMemoryCache(key: string): void {
        this.mIos.removeImageFromMemoryForKey(key);
    }

    async evictFromDiskCache(key: string) {
        return new Promise<void>((resolve) => {
            this.mIos.removeImageForKeyCacheTypeCompletion(key, SDImageCacheType.Disk, resolve);
        });
    }

    async evictFromCache(key: string) {
        return new Promise<void>((resolve) => {
            this.mIos.removeImageForKeyCacheTypeCompletion(key, SDImageCacheType.All, resolve);
        });
    }

    clearCaches() {
        this.mIos.clearMemory();
        this.mIos.clearDiskOnCompletion(null);
    }

    clearMemoryCaches() {
        this.mIos.clearMemory();
    }

    clearDiskCaches() {
        this.mIos.clearDiskOnCompletion(null);
    }

    prefetchToDiskCache(uri: string): Promise<void> {
        return this.prefetchToCacheType(uri, SDImageCacheType.Disk);
    }

    prefetchToMemoryCache(uri: string): Promise<void> {
        return this.prefetchToCacheType(uri, SDImageCacheType.Memory);
    }

    private prefetchToCacheType(uri: string, cacheType: SDImageCacheType): Promise<void> {
        return new Promise((resolve, reject) => {
            const context = NSMutableDictionary.alloc<string, any>().initWithCapacity(1);
            context.setObjectForKey(cacheType, SDWebImageContextStoreCacheType);
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

export const needRequestImage = function (target: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if (!this.mCanRequestImage) {
            this.mNeedRequestImage = true;
            // we need to ensure a hierarchy is set or the default aspect ratio wont be set
            // because aspectFit is the default (wanted) but then we wont go into stretchProperty.setNative
            // this.mNeedUpdateHierarchy = true;
            return;
        }
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
    isLoading = false;
    mCacheKey: string;

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
                widthMeasureSpec = layout.makeMeasureSpec(height * ratio, layout.EXACTLY);
            } else if (!finiteHeight && finiteWidth) {
                heightMeasureSpec = layout.makeMeasureSpec(width / ratio, layout.EXACTLY);
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
        }
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    }

    public async updateImageUri() {
        const imagePipeLine = getImagePipeline();
        const src = this.src;
        const srcType = typeof src;
        if (src && (srcType === 'string' || src instanceof ImageAsset)) {
            const cachekKey = this.mCacheKey || getUri(src as string | ImageAsset).absoluteString;
            // const isInCache = imagePipeLine.isInBitmapMemoryCache(cachekKey);
            // if (isInCache) {
            await imagePipeLine.evictFromCache(cachekKey);
            // }
        }
        // this.src = null;
        // ensure we clear the image as
        this._setNativeImage(null, false);
        this.initImage();
    }

    public _setNativeImage(nativeImage: UIImage, animated = true) {
        if (animated && this.fadeDuration) {
            // switch (this.transition) {
            //     case 'fade':
            this.nativeImageViewProtected.alpha = 0.0;
            this.nativeImageViewProtected.image = nativeImage;
            UIView.animateWithDurationAnimations(this.fadeDuration / 1000, () => {
                this.nativeImageViewProtected.alpha = this.opacity;
            });
            //     break;
            // case 'curlUp':
            //     UIView.transitionWithViewDurationOptionsAnimationsCompletion(
            //        this.nativeImageViewProtected,
            //         0.3,
            //         UIViewAnimationOptions.TransitionCrossDissolve,
            //         () => {
            //             this._setNativeImage(image);
            //         },
            //         null
            //     );
            //     break;
            // default:
            //     this._setNativeImage(image);
            // }
        } else {
            this.nativeImageViewProtected.image = nativeImage;
        }
        if (this.mImageSourceAffectsLayout) {
            // this.mImageSourceAffectsLayout = false;
            this.requestLayout();
        }
    }

    private handleImageLoaded = (image: UIImage, error: NSError, cacheType: number) => {
        this.isLoading = false;
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
                ios: image
            } as FinalEventData);
        }
        this.handleImageProgress(1);
    };
    private onLoadProgress = (currentSize: number, totalSize: number) => {
        this.handleImageProgress(totalSize > 0 ? currentSize / totalSize : -1, totalSize);
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
                this.isLoading = true;
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
                if (this.showProgressBar) {
                    try {
                        if (this.progressBarColor) {
                            const indicator = new SDWebImageActivityIndicator();
                            indicator.indicatorView.color = this.progressBarColor.ios;
                            this.nativeImageViewProtected.sd_imageIndicator = indicator;
                        } else {
                            this.nativeImageViewProtected.sd_imageIndicator = SDWebImageActivityIndicator.grayIndicator;
                        }
                    } catch (ex) {
                        console.error(ex);
                    }
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
    [srcProperty.setNative](value) {
        this.initImage();
    }
    @needRequestImage
    [imageRotationProperty.setNative](value) {
        this.initImage();
    }
    placeholderImage: UIImage;
    @needRequestImage
    [placeholderImageUriProperty.setNative]() {}

    @needRequestImage
    [showProgressBarProperty.setNative](value) {
        this.showProgressBar = value;
    }

    [progressBarColorProperty.setNative](value) {
        this.progressBarColor = value;
    }

    @needRequestImage
    [headersProperty.setNative](value) {
    }

    [failureImageUriProperty.setNative]() {
        // this.updateHierarchy();
    }

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
