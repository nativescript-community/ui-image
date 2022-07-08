import { Img } from '@nativescript-community/ui-image';
import { applyMixins, colorMatrixProperty, cssProperty } from './index-common';

declare module '@nativescript-community/ui-image' {
    interface Img {}
}

interface ImgAugmented extends Img {
    colorMatrix: number[];
    applyColorFilter();
}

const FloatConstructor = interop.sizeof(interop.types.id) === 4 ? Float32Array : Float64Array;

class ImgExtended {
    nativeImageViewProtected: SDAnimatedImageView | UIImageView;
    @cssProperty colorMatrix: number[];
    _filter: CIFilter;
    [colorMatrixProperty.setNative](value: number[]) {
        if (value) {
            if (!this._filter) {
                this._filter = CIFilter.filterWithName('CIColorMatrix');
            }
            this._filter.setValueForKey(CIVector.vectorWithValuesCount(new FloatConstructor(value.slice(0, 4)).buffer as any, 4), 'inputRVector');
            this._filter.setValueForKey(CIVector.vectorWithValuesCount(new FloatConstructor(value.slice(5, 9)).buffer as any, 4), 'inputGVector');
            this._filter.setValueForKey(CIVector.vectorWithValuesCount(new FloatConstructor(value.slice(10, 14)).buffer as any, 4), 'inputBVector');
            this._filter.setValueForKey(CIVector.vectorWithValuesCount(new FloatConstructor(value.slice(15, 19)).buffer as any, 4), 'inputAVector');
            this._filter.setValueForKey(CIVector.vectorWithValuesCount(new FloatConstructor([value[4], value[9], value[14], value[19]]).buffer as any, 4), 'inputBiasVector');
        } else {
            this._filter = null;
        }
        this['applyColorFilter']();
    }
}
class ImgExtended2 {
    _oldImage: UIImage;
    public disposeNativeView() {
        this._oldImage = null;
    }
}
class ImgExtended3 {
    nativeImageViewProtected: SDAnimatedImageView | UIImageView;
    _oldImage: UIImage;
    _filter: CIFilter;

    filteredImage(image: UIImage, filter: CIFilter) {
        if (image !== null) {
            const tmp = CIImage.alloc().initWithImage(image);
            this._filter.setValueForKey(tmp, 'inputImage');

            const outputRect = tmp.extent;
            const context = CIContext.contextWithOptions(null);
            const cgim = context.createCGImageFromRect(filter.outputImage, outputRect);
            const filteredImage = UIImage.imageWithCGImageScaleOrientation(cgim, image.scale, image.imageOrientation);
            // CGImageRelease(cgim);
            return filteredImage;
        }
        return null;
    }
    _applyColorFilter(image) {
        if (image) {
            if (!this._oldImage) {
                this._oldImage = image;
            }
            return this.filteredImage(this._oldImage, this._filter);
        }
        return null;
    }
    applyColorFilter() {
        this.nativeImageViewProtected.image = this._applyColorFilter(this.nativeImageViewProtected.image);
    }
    public _setNativeImage(superCall, ...args) {
        this._oldImage = args[0];
        if (this._filter) {
            args[0] = this._applyColorFilter(args[0]);
        }
        superCall.apply(this, args);
    }
}

let mixinInstalled = false;
export function overrideImgBase() {
    applyMixins(Img, [ImgExtended], { override: true });
    applyMixins(Img, [ImgExtended2]);
    applyMixins(Img, [ImgExtended3], { callWithSuper: true });
}

export function installMixins() {
    if (!mixinInstalled) {
        mixinInstalled = true;
        overrideImgBase();
    }
}
