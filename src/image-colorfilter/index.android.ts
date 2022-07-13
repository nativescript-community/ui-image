import { Img } from '@nativescript-community/ui-image';
import { applyMixins, colorMatrixProperty, cssProperty } from './index-common';

class ImgExtended {
    nativeImageViewProtected: com.nativescript.image.DraweeView;
    @cssProperty colorMatrix: number[];
    [colorMatrixProperty.setNative](value: number[]) {
        if (!value) {
            this.nativeImageViewProtected.setColorFilter(null);
            return;
        }
        let arr = value;
        if (Array.isArray(value)) {
            arr = Array.create('float', value.length);
            for (let index = 0; index < value.length; index++) {
                arr[index] = value[index];
            }
        }
        this.nativeImageViewProtected.setColorFilter(new android.graphics.ColorMatrixColorFilter(arr));
    }
}
let mixinInstalled = false;
export function overrideImgBase() {
    applyMixins(Img, [ImgExtended], { override: true });
}

export function installMixins() {
    if (!mixinInstalled) {
        mixinInstalled = true;
        overrideImgBase();
    }
}
