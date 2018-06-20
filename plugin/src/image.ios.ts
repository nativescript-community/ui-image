/// <reference path="./typings/objc!SDWebImage.d.ts" />
/// <reference path="../../references.d.ts" />
import * as common from './image.common';
import * as app from 'application';
import * as fs from 'file-system';
import * as utils from 'utils/utils';
import * as types from 'utils/types';
import * as imageSrc from 'image-source';
import { View, layout } from 'ui/core/view';
import { Color } from 'color';
global.moduleMerge(common, exports);

const enum SDImageCacheType {
    SDImageCacheTypeNone,
    SDImageCacheTypeDisk,
    SDImageCacheTypeMemory
}

export class Image extends common.Image {
    nativeView: UIImageView;
    tintColor:UIColor
    // private _imageSourceAffectsLayout: boolean = true;
    // private _templateImageWasCreated: boolean;

    constructor() {
        super();
    }

    get ios(): UIImageView {
        return this.nativeView;
    }
    isLoading: boolean;
    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
        const nativeView = this.nativeView;
        if (nativeView) {
            const width = layout.getMeasureSpecSize(widthMeasureSpec);
            const height = layout.getMeasureSpecSize(heightMeasureSpec);
            this.setMeasuredDimension(width, height);
        }
    }

    private handleImageLoaded = (image: UIImage, error: NSError, cacheType: number) => {
        if (this.tintColor) {
            image = image.imageWithRenderingMode(UIImageRenderingMode.AlwaysTemplate);
        }
        console.log('handleImageLoaded2', this.nativeView.tintColor, image, this.onlyTransitionIfRemote, this.transition, error, cacheType);
        this.isLoading = false;
        if (!(this.onlyTransitionIfRemote && cacheType !== SDImageCacheType.SDImageCacheTypeMemory) && this.transition) {
            switch (this.transition) {
                case 'fade':
                this.nativeView.alpha = 0.0;
                this.nativeView.image = image;
                UIView.animateWithDurationAnimations(0.2, ()=>{
                    this.nativeView.alpha = this.opacity;
                });
                break;
                case 'curlUp':
                UIView.transitionWithViewDurationOptionsAnimationsCompletion(
                    this.nativeView,
                    0.3,
                    UIViewAnimationOptions.TransitionCrossDissolve,
                    () => {
                        this.nativeView.image = image;
                    },
                    null
                );
                break;
                default:
                this.nativeView.image = image;
            }
            
        } else {
            this.nativeView.image = image;
        }
        // if (image && cacheType !== SDImageCacheType.SDImageCacheTypeMemory)
        // {
        //     this.nativeView.alpha = 0.0;
        //     UIView.animateWithDurationAnimations(0.2, ()=>{
        //         this.nativeView.alpha = this.opacity;
        //     });
        // }
    };
    private onLoadProgress = (p1: number, p2: number) => {};

    private handleSetImage() {
        if (this.imageUri) {
            // if (this.imageUri.startsWith("http")) {
            // this.isLoading = true;
            let options = SDWebImageOptions.ScaleDownLargeImages | SDWebImageOptions.AvoidAutoSetImage;
            // if (this.onlyTransitionIfRemote) {
            //     options |= SDWebImageOptions.ForceTransition;
            // }
            (this.nativeView as any).sd_setImageWithURLPlaceholderImageOptionsCompleted(
                this.imageUri,
                this.placeHolder ? imageSrc.fromFileOrResource(this.placeHolder).ios : null,
                options,
                this.handleImageLoaded
            );
            // } else {
            // this.nativeView.image = imageSrc.fromFileOrResource(this.imageUri).ios
            // }
        }
    }

    private setTintColor(value: Color) {
        // if (value && this.nativeView.image && !this._templateImageWasCreated) {
        //     this.nativeView.image = this.nativeView.image.imageWithRenderingMode(UIImageRenderingMode.AlwaysTemplate);
        //     this._templateImageWasCreated = true;
        // } else if (this.nativeView.image && this._templateImageWasCreated) {
        //     this._templateImageWasCreated = false;
        //     this.nativeView.image = this.nativeView.image.imageWithRenderingMode(UIImageRenderingMode.Automatic);
        // }
        this.tintColor = this.nativeView.tintColor = value ? value.ios : null;
    }

    public createNativeView() {
        let result = UIImageView.new();
        result.tintColor = null;
        return result;
    }
    public initNativeView() {
        super.initNativeView();
        // (this.nativeView as any).sd_imageTransition = SDWebImageTransition.curlDownTransition;

        this.handleSetImage();
        // if (this.resize && this.resize !== undefined && this.resize.split(' ').length > 1) {
        //     this.nativeView.frame.size.width = parseInt(this.resize.split(' ')[0]);
        //     this.nativeView.frame.size.height = parseInt(this.resize.split(' ')[1]);
        // } else if (this.override && this.override !== undefined && this.override.split(' ').length > 1) {
        //     this.nativeView.frame.size.width = parseInt(this.override.split(' ')[0]);
        //     this.nativeView.frame.size.height = parseInt(this.override.split(' ')[1]);
        // }
    }
    [common.imageUriProperty.getDefault](): any {
        return undefined;
    }
    [common.imageUriProperty.setNative](src: string) {
        if (!this.imageUri) {
            return;
        }
        this.handleSetImage();
    }

    [common.stretchProperty.getDefault](): 'aspectFit' {
        return 'aspectFit';
    }
    [common.stretchProperty.setNative](value: 'none' | 'aspectFill' | 'aspectFit' | 'fill') {
        switch (value) {
            case 'aspectFit':
                this.nativeView.contentMode = UIViewContentMode.ScaleAspectFit;
                break;
            case 'aspectFill':
                this.nativeView.contentMode = UIViewContentMode.ScaleAspectFill;
                break;
            case 'fill':
                this.nativeView.contentMode = UIViewContentMode.ScaleToFill;
                break;
            case 'none':
            default:
                this.nativeView.contentMode = UIViewContentMode.TopLeft;
                break;
        }
    }

    // [common.transitionProperty.getDefault](): common.Transition {
    //     return 'fade';
    // }
    // [common.transitionProperty.setNative](value: common.Transition) {
    //     // console.log('set transtion', value);
    //     switch (value) {
    //         case 'fade':
    //             (this.nativeView as any).sd_imageTransition = SDWebImageTransition.fadeTransition;
    //             break;
    //         case 'curlUp':
    //             (this.nativeView as any).sd_imageTransition = SDWebImageTransition.curlUpTransition;
    //             break;
    //         default:
    //             (this.nativeView as any).sd_imageTransition = null;
    //             break;
    //     }
    // }
    [common.tintColorProperty.setNative](value: Color) {
        this.setTintColor(value);
    }

    public clearItem() {}
}

export function clearMemoryCache() {
    const imageCache = SDImageCache.sharedImageCache();
    imageCache.clearMemory();
}
export function clearDiskCache() {
    const imageCache = SDImageCache.sharedImageCache();
    imageCache.clearDiskOnCompletion(null);
}
export function clearCache() {
    clearMemoryCache();
    clearDiskCache();
}
