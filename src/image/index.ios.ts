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
    placeholderImageUriProperty,
    srcProperty,
    stretchProperty
} from './index-common';

export class ImageInfo implements ImageInfoBase {
    constructor(private width: number, private height: number) {}

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
    private _ios: SDImageCache;
    constructor() {
        this._ios = SDImageCache.sharedImageCache;
    }

    isInDiskCache(uri: string): boolean {
        return this._ios.diskImageDataExistsWithKey(getUri(uri).absoluteString);
    }

    isInBitmapMemoryCache(uri: string): boolean {
        return this._ios.imageFromMemoryCacheForKey(getUri(uri).absoluteString) !== null;
    }

    evictFromMemoryCache(uri: string): void {
        this._ios.removeImageFromMemoryForKey(getUri(uri).absoluteString);
    }

    evictFromDiskCache(uri: string): void {
        this._ios.removeImageFromDiskForKey(getUri(uri).absoluteString);
    }

    evictFromCache(uri: string): void {
        this._ios.removeImageForKeyWithCompletion(getUri(uri).absoluteString, null);
    }

    clearCaches() {
        this._ios.clearMemory();
        this._ios.clearDiskOnCompletion(null);
    }

    clearMemoryCaches() {
        this._ios.clearMemory();
    }

    clearDiskCaches() {
        this._ios.clearDiskOnCompletion(null);
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
        return this._ios;
    }
}

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
    private _imageSourceAffectsLayout: boolean = true;
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
        this._imageSourceAffectsLayout = !finiteWidth || !finiteHeight;
        if (Trace.isEnabled()) {
            CLog(CLogTypes.info, 'onMeasure', this.src, widthMeasureSpec, heightMeasureSpec, width, height, this.aspectRatio, image && image.imageOrientation);
        }
        if (image || this.aspectRatio > 0) {
            const nativeWidth = image ? layout.toDevicePixels(image.size.width) : 0;
            const nativeHeight = image ? layout.toDevicePixels(image.size.height) : 0;
            const imgRatio = nativeWidth / nativeHeight;
            const ratio = this.aspectRatio || imgRatio;
            // const scale = this.computeScaleFactor(width, height, finiteWidth, finiteHeight, nativeWidth, nativeHeight, this.aspectRatio || imgRatio );

            if (!finiteWidth) {
                widthMeasureSpec = layout.makeMeasureSpec(height * ratio, layout.EXACTLY);
            }
            if (!finiteHeight) {
                heightMeasureSpec = layout.makeMeasureSpec(width / ratio, layout.EXACTLY);
            }

            if (Trace.isEnabled()) {
                CLog(CLogTypes.info, 'onMeasure scale', this.src, this.aspectRatio, finiteWidth, finiteHeight, width, height, nativeWidth, nativeHeight, widthMeasureSpec, heightMeasureSpec);
            }
        }
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    }
    public updateImageUri() {
        const imagePipeLine = getImagePipeline();
        const src = this.src;
        if (!(src instanceof ImageSource)) {
            const uri = getUri(src).absoluteString;
            const isInCache = imagePipeLine.isInBitmapMemoryCache(uri);
            if (isInCache) {
                imagePipeLine.evictFromCache(uri);
            }
        }
        this.src = null;
        this.src = src;
    }

    public _setNativeImage(nativeImage: UIImage, animated = true) {
        if (animated) {
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

        if (this._imageSourceAffectsLayout) {
            this._imageSourceAffectsLayout = false;
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
            const args = {
                eventName: Img.failureEvent,
                object: this,
                error
            };

            this.notify(args);
            if (this.failureImageUri) {
                image = this.getUIImage(this.failureImageUri);
                this._setNativeImage(image, animate);
            }
        } else if (image) {
            const args = {
                eventName: ImageBase.finalImageSetEvent,
                object: this,
                imageInfo: new ImageInfo(image.size.width, image.size.height),
                ios: image
            } as FinalEventData;

            this.notify(args);
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

        if (image) {
            image = image.ios;
        }

        return image;
    }

    private async initImage() {
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
                if (this.noCache) {
                    const key = uri.absoluteString;
                    const imagePipeLine = getImagePipeline();
                    const isInCache = imagePipeLine.isInBitmapMemoryCache(key);
                    if (isInCache) {
                        imagePipeLine.evictFromCache(key);
                    }
                }
                this.isLoading = true;
                let options = SDWebImageOptions.ScaleDownLargeImages | SDWebImageOptions.AvoidAutoSetImage;

                if (this.alwaysFade === true) {
                    options |= SDWebImageOptions.ForceTransition;
                }
                const context: NSDictionary<string, any> = NSMutableDictionary.dictionary();
                const transformers = [];
                if (this.progressiveRenderingEnabled === true) {
                    options = options | SDWebImageOptions.ProgressiveLoad;
                }
                if (this.decodeWidth && this.decodeHeight) {
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
                if (transformers.length > 0) {
                    if (this.animatedImageView) {
                        // as we use SDAnimatedImageView  all images are loaded as SDAnimatedImage;
                        options |= SDWebImageOptions.TransformAnimatedImage;
                    }
                    context.setValueForKey(SDImagePipelineTransformer.transformerWithTransformers(transformers), SDWebImageContextImageTransformer);
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
    [srcProperty.setNative](value) {
        this.initImage();
    }
    placeholderImage: UIImage;
    [placeholderImageUriProperty.setNative]() {
        this.placeholderImage = this.getUIImage(this.placeholderImageUri);
        this.initImage();
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
    //     console.log('blendingModeProperty', value);
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
