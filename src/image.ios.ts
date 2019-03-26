export * from './image-common';
import { EventData, ImageBase, ImageInfo as ImageInfoBase, ImagePipelineConfigSetting, ScaleType, Stretch } from './image-common';
import * as utils from 'tns-core-modules/utils/utils';
import * as types from 'tns-core-modules/utils/types';
import * as imageSource from 'tns-core-modules/image-source';
import * as fs from 'tns-core-modules/file-system';

import { layout } from 'tns-core-modules/ui/core/view';
import { screen } from 'tns-core-modules/platform/platform';

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
    if (types.isString(scaleType)) {
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
    if (types.isString(scaleType)) {
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

export function initialize(config?: ImagePipelineConfigSetting): void {}
export function shutDown(): void {}

export class ImagePipeline {
    private _ios: SDImageCache;
    constructor() {
        this._ios = SDImageCache.sharedImageCache;
    }

    // Currently not available in 0.9.0+
    isInDiskCacheSync(uri: string) {
        return this._ios.diskImageDataExistsWithKey(uri);
    }

    isInBitmapMemoryCache(uri: string): boolean {
        return this._ios.imageFromMemoryCacheForKey(uri) !== null;
    }

    evictFromMemoryCache(uri: string): void {
        this._ios.removeImageFromMemoryForKey(uri);
    }

    evictFromDiskCache(uri: string): void {
        this._ios.removeImageFromDiskForKey(uri);
    }

    evictFromCache(uri: string): void {
        this._ios.removeImageForKeyWithCompletion(uri, null);
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
    get ios() {
        return this._ios;
    }
}

export function getImagePipeline(): ImagePipeline {
    const imagePineLine = new ImagePipeline();
    return imagePineLine;
}

function getUri(src: string) {
    let uri: any = src;

    if (src.indexOf(utils.RESOURCE_PREFIX) === 0) {
        const resName = src.substr(utils.RESOURCE_PREFIX.length);
        if (screenScale === -1) {
            screenScale = screen.mainScreen.scale;
        }
        supportedLocalFormats.some(v => {
            for (let i = screenScale; i >= 1; i--) {
                uri = NSBundle.mainBundle.URLForResourceWithExtension(i > 1 ? `${resName}@${i}x` : resName, v);
                if (!!uri) {
                    return true;
                }
            }
            return false;
        });
    } else if (src.indexOf('~/') === 0) {
        uri = NSURL.alloc().initFileURLWithPath(`${fs.path.join(fs.knownFolders.currentApp().path, src.replace('~/', ''))}`);
    }
    return uri;
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

        // console.log('onMeasure', !!image, width, widthMode, height, heightMode);

        const nativeWidth = image ? layout.toDevicePixels(image.size.width) : 0;
        const nativeHeight = image ? layout.toDevicePixels(image.size.height) : 0;

        let measureWidth = Math.max(nativeWidth, this.effectiveMinWidth);
        let measureHeight = Math.max(nativeHeight, this.effectiveMinHeight);

        const finiteWidth: boolean = widthMode !== layout.UNSPECIFIED;
        const finiteHeight: boolean = heightMode !== layout.UNSPECIFIED;

        this._imageSourceAffectsLayout = widthMode !== layout.EXACTLY || heightMode !== layout.EXACTLY;

        if (image || this.aspectRatio > 0) {
        // if (!image) {
            // if (this.aspectRatio > 0) {
            const scale = this.computeScaleFactor(width, height, finiteWidth, finiteHeight, nativeWidth, nativeHeight);

            measureWidth = finiteWidth ? width : height;
            measureHeight = finiteHeight ? height : width;

            measureWidth = Math.round(measureWidth * scale.width);
            measureHeight = Math.round(measureHeight * scale.height);
            // console.log('scale', scale, width, height, finiteWidth, finiteHeight, nativeWidth, nativeHeight, measureWidth, measureHeight);
        }
        // } else {
            // const scale = this.computeScaleFactor(width, height, finiteWidth, finiteHeight, nativeWidth, nativeHeight);

            // measureWidth = finiteWidth ? width : height;
            // measureHeight = finiteHeight ? height : width;

            // measureWidth = Math.round(measureWidth * scale.width);
            // measureHeight = Math.round(measureHeight * scale.height);
        // }

        const widthAndState = Img.resolveSizeAndState(measureWidth, width, widthMode, 0);
        const heightAndState = Img.resolveSizeAndState(measureHeight, height, heightMode, 0);

        this.setMeasuredDimension(widthAndState, heightAndState);
    }

    private static needsSizeAdjustment(scaleType) {
        if (scaleType === undefined) {
            return true;
        }
        switch (scaleType) {
            case ScaleType.FocusCrop:
            case ScaleType.Center:
            case ScaleType.CenterCrop:
            case ScaleType.CenterInside:
            case ScaleType.FitCenter:
            case ScaleType.AspectFit:
            case ScaleType.FitXY:
                return true;
            default:
                return false;
        }
    }

    private computeScaleFactor(
        measureWidth: number,
        measureHeight: number,
        widthIsFinite: boolean,
        heightIsFinite: boolean,
        nativeWidth: number,
        nativeHeight: number
    ): { width: number; height: number } {
        let scaleW = 1;
        let scaleH = 1;
        // console.log('computeScaleFactor', widthIsFinite, heightIsFinite, this.aspectRatio, measureWidth, measureHeight, nativeWidth, nativeHeight, this._imageSourceAffectsLayout);
        if (Img.needsSizeAdjustment(this.stretch) && (widthIsFinite || heightIsFinite)) {
            // if (aspectRatio > 0) {
            //   console.log('handling aspectRatio', aspectRatio);
            //     if (!widthIsFinite) {
            //         scaleH = 1;
            //         scaleW = scaleH / aspectRatio;
            //     } else if (!heightIsFinite) {
            //         scaleW = 1;
            //         scaleH = scaleW * aspectRatio;
            //     }
            // } else {
            const nativeScale = nativeWidth > 0 && nativeHeight > 0 ? nativeWidth / nativeHeight : 1;
            const measureScale = measureWidth > 0 && measureHeight > 0 ? measureWidth / measureHeight : 1;
            scaleW = nativeWidth > 0 ? measureWidth / nativeWidth : 1;
            scaleH = nativeHeight > 0 ? measureHeight / nativeHeight : 1;

            if (this.aspectRatio > 0) {
                if (!widthIsFinite) {
                    scaleH = 1;
                    scaleW = this.aspectRatio;
                } else if (!heightIsFinite) {
                    scaleW = 1;
                    scaleH = this.aspectRatio;
                }
                // console.log(
                //     'handling aspectRatio',
                //     widthIsFinite,
                //     heightIsFinite,
                //     this.aspectRatio,
                //     measureWidth,
                //     measureHeight,
                //     nativeWidth,
                //     nativeHeight,
                //     scaleW,
                //     scaleH,
                //     this._imageSourceAffectsLayout
                // );
            } else {
                if (!widthIsFinite) {
                    scaleH = 1;
                    scaleW = nativeScale * scaleH;
                } else if (!heightIsFinite) {
                    scaleW = 1;
                    scaleH = measureScale / nativeScale;
                } else {
                    // No infinite dimensions.
                    switch (this.stretch) {
                        case ScaleType.FitXY:
                        case ScaleType.FocusCrop:
                        case ScaleType.Fill:
                            break;
                        default:
                            if (measureScale > nativeScale) {
                                scaleH = 1;
                                scaleW = nativeScale * scaleH;
                            } else {
                                scaleW = 1;
                                scaleH = measureScale / nativeScale;
                            }
                    }
                }
            }
            // }
        }

        return { width: scaleW, height: scaleH };
    }

    // public disposeNativeView() {
    //     this._android.setImageURI(null, null);
    //     this._android = undefined;
    // }

    public updateImageUri() {
        const imagePipeLine = getImagePipeline();
        const isInCache = imagePipeLine.isInBitmapMemoryCache(this.src);
        if (isInCache) {
            imagePipeLine.evictFromCache(this.src);
            const src = this.src;
            this.src = null;
            this.src = src;
        }
    }

    public _setNativeImage(nativeImage: UIImage) {
        this.nativeViewProtected.image = nativeImage;
        // console.log('_setNativeImage', !!nativeImage, this._imageSourceAffectsLayout);
        if (this._imageSourceAffectsLayout) {
            this._imageSourceAffectsLayout = false;
            this.requestLayout();
        }
    }

    private handleImageLoaded = (image: UIImage, error: NSError, cacheType: number) => {
        // console.log('handleImageLoaded', this.src, error, cacheType);
        if (error) {
            const args = {
                eventName: Img.failureEvent,
                object: this,
                error
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
                ios: image
            } as FinalEventData;

            this.notify(args);
        }
        this.handleImageProgress(1);
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
    }
    private onLoadProgress = (currentSize: number, totalSize: number) => {
        this.handleImageProgress(totalSize > 0 ? currentSize / totalSize : -1, totalSize);
    }

    private getUIImage(path: string) {
        if (!path) {
            return null;
        }
        let image;
        if (utils.isFileOrResourcePath(path)) {
            // if (path.indexOf(utils.RESOURCE_PREFIX) === 0) {
            //     image = imageSource.fromFileOrResource(path);
            // } else {
            image = imageSource.fromFileOrResource(path);
            // }
        }
        // console.log("getUIImage", path, !!image, !!image && !!image.ios);
        if (image) {
            image = image.ios;
        }

        return image;
    }

    private initImage() {
        if (this.nativeViewProtected) {
            if (this.src) {
                this.isLoading = true;
                let options = SDWebImageOptions.ScaleDownLargeImages | SDWebImageOptions.AvoidAutoSetImage;
                if (this.alwaysFade === true) {
                    options |= SDWebImageOptions.ForceTransition;
                }
                const context: NSDictionary<string, any> = NSMutableDictionary.dictionary();
                const transformers = [];
                if (!!this.progressiveRenderingEnabled) {
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
                if (this.roundAsCircle) {
                    transformers.push(SDImageRoundAsCircleTransformer.new());
                    transformers.push(SDImageFlippingTransformer.transformerWithHorizontalVertical(false, true));
                }
                if (this.roundBottomLeft || this.roundBottomRight || this.roundTopLeft || this.roundTopRight) {
                    let corners = 0;
                    if (this.roundTopLeft) {
                        corners = corners | UIRectCorner.BottomLeft;
                    }
                    if (this.roundTopRight) {
                        corners = corners | UIRectCorner.BottomRight;
                    }
                    if (this.roundBottomRight) {
                        corners = corners | UIRectCorner.TopRight;
                    }
                    if (this.roundBottomLeft) {
                        corners = corners | UIRectCorner.TopLeft;
                    }
                    transformers.push(SDImageRoundCornerTransformer.transformerWithRadiusCornersBorderWidthBorderColor(this.roundedCornerRadius, corners, 0, null));
                    transformers.push(SDImageFlippingTransformer.transformerWithHorizontalVertical(false, true));
                }
                if (transformers.length > 0) {
                    context.setValueForKey(SDImagePipelineTransformer.transformerWithTransformers(transformers), SDWebImageContextImageTransformer);
                }

                // console.log('about to load', this.src, options);
                this.nativeViewProtected.sd_setImageWithURLPlaceholderImageOptionsContextProgressCompleted(
                    getUri(this.src),
                    this.getUIImage(this.placeholderImageUri),
                    options,
                    context,
                    this.onLoadProgress,
                    this.handleImageLoaded
                );
            }
        }
    }
    [ImageBase.srcProperty.setNative]() {
        this.initImage();
    }
    [ImageBase.placeholderImageUriProperty.setNative]() {
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

    startAnimating() {
        this.nativeViewProtected.startAnimating();
    }
    stopAnimating() {
        this.nativeViewProtected.stopAnimating();
    }
}
