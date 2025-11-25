import { Img } from '@nativescript-community/ui-image';
import { Image } from '@nativescript/core';
import { applyMixins, colorMatrixProperty, cssProperty } from './index-common';

class ImgExtended {
    nativeImageViewProtected: com.nativescript.image.MatrixImageView;
    nativeViewProtected: com.nativescript.image.MatrixImageView;
    @cssProperty colorMatrix: number[];
    [colorMatrixProperty.setNative](value: number[]) {
        const nativeView = this.nativeImageViewProtected || this.nativeViewProtected;
        if (!value) {
            nativeView.setColorFilter(null);
            return;
        }
        let arr = value;
        if (Array.isArray(value)) {
            arr = Array.create('float', value.length);
            for (let index = 0; index < value.length; index++) {
                arr[index] = value[index];
            }
        }
        nativeView.setColorFilter(new android.graphics.ColorMatrixColorFilter(arr));
    }
}
let mixinInstalled = false;
export function overrideImgBase() {
    applyMixins(Img, [ImgExtended], { override: true });
    applyMixins(Image, [ImgExtended], { override: true });
}

export function installMixins() {
    if (!mixinInstalled) {
        mixinInstalled = true;
        overrideImgBase();
    }
}
