export * from './index-common';
import { ImageAsset, ImageSource, Screen, Trace, Utils, knownFolders, path } from '@nativescript/core';
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
    Stretch,
    failureImageUriProperty,
    imageRotationProperty,
    placeholderImageUriProperty,
    srcProperty,
    stretchProperty
} from './index-common';

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

export class ImagePipeline {
    private mIos: SDImageCache = SDImageCache.sharedImageCache;
    constructor() {}

    getCacheKey(uri: string, context) {
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

    get cacheKey() {
        return this.mCacheKey;
    }
    protected mImageSourceAffectsLayout: boolean = true;
    protected mCIFilter: CIFilter;
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
        if (!(src instanceof ImageSource)) {
            const cachekKey = this.mCacheKey || getUri(src).absoluteString;
            // const isInCache = imagePipeLine.isInBitmapMemoryCache(cachekKey);
            // if (isInCache) {
            await imagePipeLine.evictFromCache(cachekKey);
            // }
        }
        this.src = null;
        // ensure we clear the image as
        this._setNativeImage(null, false);
        this.src = src;
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
                error
            });
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
        if (this.nativeViewProtected) {
            const src = this.src;
            if (src instanceof Promise) {
                this.src = await src;
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

                const uri = getUri(src);
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
                const context: NSDictionary<string, any> = NSMutableDictionary.dictionary();
                const transformers = [];
                if (this.progressiveRenderingEnabled === true) {
                    options = options | SDWebImageOptions.ProgressiveLoad;
                }
                if (this.decodeWidth || this.decodeHeight) {
                    //@ts-ignore
                    transformers.push(NSImageDecodeSizeTransformer.transformerWithDecodeWidthDecodeHeight(this.decodeWidth, this.decodeHeight));
                }
                if (this.tintColor) {
                    transformers.push(SDImageTintTransformer.transformerWithColor(this.tintColor.ios));
                }
                if (this.blurRadius) {
                    transformers.push(SDImageBlurTransformer.transformerWithRadius(this.blurRadius));
                }
                if (this.roundAsCircle === true) {
                    //@ts-ignore
                    transformers.push(NSImageRoundAsCircleTransformer.transformer());
                }
                if (this.imageRotation !== 0 && !isNaN(this.imageRotation)) {
                    transformers.push(SDImageRotationTransformer.transformerWithAngleFitSize(-this.imageRotation * (Math.PI / 180), true));
                }
                if (this.roundBottomLeftRadius || this.roundBottomRightRadius || this.roundTopLeftRadius || this.roundTopRightRadius) {
                    transformers.push(
                        //@ts-ignore
                        NSImageRoundCornerTransformer.transformerWithTopLefRadiusTopRightRadiusBottomRightRadiusBottomLeftRadius(
                            layout.toDeviceIndependentPixels(this.roundTopLeftRadius),
                            layout.toDeviceIndependentPixels(this.roundTopRightRadius),
                            layout.toDeviceIndependentPixels(this.roundBottomRightRadius),
                            layout.toDeviceIndependentPixels(this.roundBottomLeftRadius)
                        )
                    );
                }
                if (this.mCIFilter) {
                    transformers.push(SDImageFilterTransformer.transformerWithFilter(this.mCIFilter));
                }
                if (transformers.length > 0) {
                    if (this.animatedImageView) {
                        // as we use SDAnimatedImageView  all images are loaded as SDAnimatedImage;
                        options |= SDWebImageOptions.TransformAnimatedImage;
                    }
                    context.setValueForKey(SDImagePipelineTransformer.transformerWithTransformers(transformers), SDWebImageContextImageTransformer);
                }
                this.mCacheKey = SDWebImageManager.sharedManager.cacheKeyForURLContext(uri, context);
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
    [placeholderImageUriProperty.setNative]() {
        // this.placeholderImage = this.getUIImage(this.placeholderImageUri);
        // this.initImage();
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
