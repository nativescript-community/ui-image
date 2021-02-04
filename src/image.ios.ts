export * from './image-common';
import { ImageAsset, ImageSource, Screen, Trace, knownFolders, path } from '@nativescript/core';
import { isString } from '@nativescript/core/utils/types';
import { RESOURCE_PREFIX, isFileOrResourcePath, isFontIconURI, layout } from '@nativescript/core/utils/utils';
import { CLog, CLogTypes, EventData, ImageBase, ImageInfo as ImageInfoBase, ImagePipelineConfigSetting, ScaleType, Stretch } from './image-common';

@NativeClass
class SDImageRoundAsCircleTransformer extends NSObject implements SDImageTransformer {
    public static ObjCProtocols = [SDImageTransformer];
    // _cornerRadius = 20;
    // get cornerRadius() {
    //     return this._cornerRadius;
    // }
    // get corners() {
    //     return UIRectCorner.AllCorners;
    // }
    // get borderWidth() {
    //     return 0;
    // }

    static transformer() {
        const transformer = SDImageRoundAsCircleTransformer.alloc().init();

        return transformer;
    }

    get transformerKey() {
        return 'SDImageRoundAsCircleTransformer';
    }

    transformedImageWithImageForKey(image: UIImage, key: string) {
        if (!image) {
            return null;
        }
        const width = image.size.width;
        const height = image.size.height;
        const minwidth = Math.min(width, height);
        const cornerRadius = minwidth / 2;
        const result = (image as any)
            .sd_resizedImageWithSizeScaleMode(CGSizeMake(minwidth, minwidth), SDImageScaleMode.AspectFill)
            .sd_roundedCornerImageWithRadiusCornersBorderWidthBorderColor(cornerRadius, UIRectCorner.BottomLeft | UIRectCorner.BottomRight | UIRectCorner.TopLeft | UIRectCorner.TopRight, 0, null)
            .sd_resizedImageWithSizeScaleMode(CGSizeMake(width, height), SDImageScaleMode.AspectFit);
        return result;
    }
}

@NativeClass
class SDDecodeSizeTransformer extends NSObject implements SDImageTransformer {
    public static ObjCProtocols = [SDImageTransformer];
    decodeWidth: number;
    decodeHeight: number;

    static transformerWithDecodeWidthDecodeHeight(decodeWidth: number, decodeHeight: number) {
        const transformer = SDDecodeSizeTransformer.new() as SDDecodeSizeTransformer;
        transformer.decodeWidth = decodeWidth;
        transformer.decodeHeight = decodeHeight;
        return transformer;
    }

    get transformerKey() {
        return `SDDecodeSizeTransformer ${this.decodeWidth} ${this.decodeHeight}`;
    }

    transformedImageWithImageForKey(image: UIImage, key: string) {
        if (!image) {
            return null;
        }
        let ratio = 1;
        const width = image.size.width;
        const height = image.size.height;
        if (this.decodeWidth && this.decodeHeight) {
            const widthRatio = this.decodeWidth / width;
            const heightRatio = this.decodeHeight / height;
            ratio = Math.max(widthRatio, heightRatio);
        } else if (this.decodeWidth > 0) {
            ratio = this.decodeWidth / width;
        } else {
            ratio = this.decodeHeight / height;
        }
        const minwidth = Math.min(width, height);
        return (image as any).sd_resizedImageWithSizeScaleMode(CGSizeMake(width * ratio, height * ratio), SDImageScaleMode.AspectFill);
    }
}

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
    if (uri.indexOf(RESOURCE_PREFIX) === 0) {
        const resName = uri.substr(RESOURCE_PREFIX.length);
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
    else if (uri.indexOf('~/') === 0) {
        return NSURL.fileURLWithPath(`${path.join(knownFolders.currentApp().path, uri.replace('~/', ''))}`);
    }
    else if (uri.indexOf('/') === 0) {
        return NSURL.fileURLWithPath(uri);
    }
    return NSURL.URLWithString(uri);
}

export class Img extends ImageBase {
    nativeViewProtected: SDAnimatedImageView;
    isLoading = false;
    private _imageSourceAffectsLayout: boolean = true;
    public createNativeView() {
        const result = SDAnimatedImageView.new();
        result.contentMode = UIViewContentMode.ScaleAspectFit;
        result.clipsToBounds = true;
        result.userInteractionEnabled = true; // needed for gestures to work
        result.tintColor = null;
        return result;
    }

    // public initNativeView(): void {
    //     this.initDrawee();
    //     // this.updateHierarchy();
    // }

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

        const image = this.nativeViewProtected.image;

        // const measureWidth = Math.max(nativeWidth, this.effectiveMinWidth);
        // const measureHeight = Math.max(nativeHeight, this.effectiveMinHeight);

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

        // const widthAndState = Img.resolveSizeAndState(measureWidth, width, widthMode, 0);
        // const heightAndState = Img.resolveSizeAndState(measureHeight, height, heightMode, 0);

        // this.setMeasuredDimension(widthAndState, heightAndState);
    }

    // public disposeNativeView() {
    //     this._android.setImageURI(null, null);
    //     this._android = undefined;
    // }

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

    public _setNativeImage(nativeImage: UIImage) {
        this.nativeViewProtected.image = nativeImage;
        if (this._imageSourceAffectsLayout) {
            this._imageSourceAffectsLayout = false;
            this.requestLayout();
        }
    }

    private handleImageLoaded = (image: UIImage, error: NSError, cacheType: number) => {
        // if (this.tintColor) {
        //   image = image.imageWithRenderingMode(UIImageRenderingMode.AlwaysTemplate);
        // }
        this.isLoading = false;
        if ((this.alwaysFade || cacheType !== SDImageCacheType.Memory) && this.fadeDuration > 0) {
            // switch (this.transition) {
            //     case 'fade':
            this.nativeViewProtected.alpha = 0.0;
            this._setNativeImage(image);
            UIView.animateWithDurationAnimations(this.fadeDuration / 1000, () => {
                this.nativeViewProtected.alpha = this.opacity;
            });
            //     break;
            // case 'curlUp':
            //     UIView.transitionWithViewDurationOptionsAnimationsCompletion(
            //         this.nativeViewProtected,
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
            // console.log("setting image", !!image, !!image && image.size);
            this._setNativeImage(image);
        }
        if (!this.autoPlayAnimations) {
            this.nativeViewProtected.stopAnimating();
        }
        // if (image && cacheType !== SDImageCacheType.SDImageCacheTypeMemory)
        // {
        //     this.nativeView.alpha = 0.0;
        //     UIView.animateWithDurationAnimations(0.2, ()=>{
        //         this.nativeView.alpha = this.opacity;
        //     });
        // }

        if (error) {
            const args = {
                eventName: Img.failureEvent,
                object: this,
                error,
            };

            this.notify(args);
            if (this.failureImageUri) {
                image = this.getUIImage(this.failureImageUri);
                // this._setNativeImage();
                // } else {
                // console.log("clearing image");
                // this._setNativeImage(null);
                // this.nativeViewProtected.image = null;
            }
        } else {
            const args = {
                eventName: ImageBase.finalImageSetEvent,
                object: this,
                imageInfo: new ImageInfo(image.size.width, image.size.height),
                ios: image,
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
            if (isFileOrResourcePath(imagePath)) {
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

    private initImage() {
        if (this.nativeViewProtected) {
            const src = this.src;
            if (src) {
                if (src instanceof ImageSource) {
                    this._setNativeImage(src.ios);
                    return;
                } else if (typeof src === 'string') {
                    if (isFontIconURI(src)) {
                        const fontIconCode = (src).split('//')[1];
                        if (fontIconCode !== undefined) {
                            // support sync mode only
                            const font = this.style.fontInternal;
                            const color = this.style.color;
                            this._setNativeImage(ImageSource.fromFontIconCodeSync(fontIconCode, font, color).ios);
                        }
                        return;
                    // } else if (src.startsWith(RESOURCE_PREFIX)) {
                        // this._setNativeImage(ImageSource.fromResourceSync(src.));
                        //
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
                    transformers.push(SDDecodeSizeTransformer.transformerWithDecodeWidthDecodeHeight(this.decodeWidth, this.decodeHeight));
                }
                if (this.tintColor) {
                    transformers.push(SDImageTintTransformer.transformerWithColor(this.tintColor.ios));
                }
                if (this.blurRadius) {
                    transformers.push(SDImageBlurTransformer.transformerWithRadius(this.blurRadius));
                }
                if (this.roundAsCircle === true) {
                    transformers.push(SDImageRoundAsCircleTransformer.new());
                    // transformers.push(SDImageFlippingTransformer.transformerWithHorizontalVertical(false, true));
                }
                if (this.roundBottomLeft || this.roundBottomRight || this.roundTopLeft || this.roundTopRight) {
                    let corners = 0;
                    if (this.roundTopLeft) {
                        corners = corners | UIRectCorner.TopLeft;
                    }
                    if (this.roundTopRight) {
                        corners = corners | UIRectCorner.BottomRight;
                    }
                    if (this.roundBottomRight) {
                        corners = corners | UIRectCorner.TopRight;
                    }
                    if (this.roundBottomLeft) {
                        corners = corners | UIRectCorner.BottomLeft;
                    }
                    transformers.push(SDImageRoundCornerTransformer.transformerWithRadiusCornersBorderWidthBorderColor(this.roundedCornerRadius, corners, 0, null));
                    // transformers.push(SDImageFlippingTransformer.transformerWithHorizontalVertical(false, true));
                }
                if (transformers.length > 0) {
                    context.setValueForKey(SDImagePipelineTransformer.transformerWithTransformers(transformers), SDWebImageContextImageTransformer);
                }

                // console.log('about to load', this.src, options);
                this.nativeViewProtected.sd_setImageWithURLPlaceholderImageOptionsContextProgressCompleted(
                    uri,
                    this.placeholderImage,
                    options,
                    context,
                    this.onLoadProgress,
                    this.handleImageLoaded
                );
            } else {
                this._setNativeImage(null);
            }
        }
    }
    [ImageBase.srcProperty.setNative](value) {
        this.initImage();
    }
    placeholderImage: UIImage;
    [ImageBase.placeholderImageUriProperty.setNative]() {
        this.placeholderImage = this.getUIImage(this.placeholderImageUri);
        this.initImage();
    }

    [ImageBase.failureImageUriProperty.setNative]() {
        // this.updateHierarchy();
    }

    [ImageBase.stretchProperty.setNative](value: Stretch) {
        if (!this.nativeView) {
            return;
        }
        this.nativeViewProtected.contentMode = getUIImageScaleType(value);
    }
    // [ImageBase.blendingModeProperty.setNative](value: string) {
    //     console.log('blendingModeProperty', value);
    //     switch (value) {
    //         case 'multiply':
    //             this.nativeViewProtected.layer.compositingFilter = 'multiply';
    //             break;
    //         case 'lighten':
    //             this.nativeViewProtected.layer.compositingFilter = 'lighten';
    //             break;
    //         case 'screen':
    //             this.nativeViewProtected.layer.compositingFilter = 'screen';
    //             break;
    //     }
    // }

    startAnimating() {
        this.nativeViewProtected.startAnimating();
    }
    stopAnimating() {
        this.nativeViewProtected.stopAnimating();
    }
}
