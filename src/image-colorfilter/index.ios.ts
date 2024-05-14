import { Img } from '@nativescript-community/ui-image';
import { applyMixins, colorMatrixProperty, cssProperty } from './index-common';
import { registerPluginGetContextFromOptions } from '@nativescript-community/ui-image';

declare module '@nativescript-community/ui-image' {
    interface Img {
        mCIFilter: CIFilter;
        colorMatrix: number[];
        initImage();
    }
}

const FloatConstructor = interop.sizeof(interop.types.id) === 4 ? Float32Array : Float64Array;


function filterFromMatrix(matrix: number[], ciFilter:CIFilter = CIFilter.filterWithName('CIColorMatrix') ) {
    ciFilter.setValueForKey(CIVector.vectorWithValuesCount(new FloatConstructor(matrix.slice(0, 4)).buffer as any, 4), 'inputRVector');
    ciFilter.setValueForKey(CIVector.vectorWithValuesCount(new FloatConstructor(matrix.slice(5, 9)).buffer as any, 4), 'inputGVector');
    ciFilter.setValueForKey(CIVector.vectorWithValuesCount(new FloatConstructor(matrix.slice(10, 14)).buffer as any, 4), 'inputBVector');
    ciFilter.setValueForKey(CIVector.vectorWithValuesCount(new FloatConstructor(matrix.slice(15, 19)).buffer as any, 4), 'inputAVector');
    ciFilter.setValueForKey(CIVector.vectorWithValuesCount(new FloatConstructor([matrix[4], matrix[9], matrix[14], matrix[19]]).buffer as any, 4), 'inputBiasVector');
    ciFilter.setName(JSON.stringify(matrix));
}
registerPluginGetContextFromOptions((context, transformers, options: Partial<Img>) => {
    const ciFilter  = options.mCIFilter ?? (options.colorMatrix? filterFromMatrix(options.colorMatrix) : undefined);
    if (ciFilter) {
        transformers.push(SDImageFilterTransformer.transformerWithFilter(ciFilter));
    }
})

class ImgExtended {
    nativeImageViewProtected: SDAnimatedImageView | UIImageView;
    @cssProperty colorMatrix: number[];
    mCIFilter: CIFilter;
    mCanRequestImage: boolean;
    mNeedRequestImage: boolean;
    [colorMatrixProperty.setNative](value: number[]) {
        if (value) {
            if (!this.mCIFilter) {
                this.mCIFilter = CIFilter.filterWithName('CIColorMatrix');
            }
            filterFromMatrix(value, this.mCIFilter);
        } else {
            this.mCIFilter = null;
        }
        if (this instanceof Img) {
            if (!this.mCanRequestImage) {
                this.mNeedRequestImage = true;
            } else {
                (this as Img).initImage();
            }
        } else {
            (this as any as ImgExtended3).applyColorFilter();
        }
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
    nativeViewProtected: SDAnimatedImageView | UIImageView;
    _oldImage: UIImage;
    mCIFilter: CIFilter;

    filteredImage(image: UIImage, filter: CIFilter) {
        if (image !== null && filter !== null) {
            const tmp = CIImage.alloc().initWithImage(image);
            this.mCIFilter.setValueForKey(tmp, 'inputImage');

            const outputRect = tmp.extent;
            const context = CIContext.contextWithOptions(null);
            const cgim = context.createCGImageFromRect(filter.outputImage, outputRect);
            const filteredImage = UIImage.imageWithCGImageScaleOrientation(cgim, image.scale, image.imageOrientation);
            // CGImageRelease(cgim);
            return filteredImage;
        }
        return image;
    }
    _applyColorFilter(image) {
        if (image) {
            if (!this._oldImage) {
                this._oldImage = image;
            }
            return this.filteredImage(this._oldImage, this.mCIFilter);
        }
        return null;
    }
    applyColorFilter() {
        const nativeView = this.nativeImageViewProtected || this.nativeViewProtected;
        if (nativeView.image) {
            nativeView.image = this._applyColorFilter(nativeView.image);
        }
    }
    public _setNativeImage(superCall, ...args) {
        // we only need to do that with N Image, Img will use a transformer
        if (this instanceof Img) {
            superCall.apply(this, args);
            return;
        }
        this._oldImage = args[0];
        if (this.mCIFilter) {
            args[0] = this._applyColorFilter(args[0]);
        }
        superCall.apply(this, args);
    }
}

let mixinInstalled = false;
export function overrideImgBase(overrideNImage = true) {
    applyMixins(Img, [ImgExtended], { override: true });
    applyMixins(Img, [ImgExtended2]);
    applyMixins(Img, [ImgExtended3], { callWithSuper: true });
    if (overrideNImage) {
        const Image = require('@nativescript/core').Image;
        applyMixins(Image, [ImgExtended], { override: true });
        applyMixins(Image, [ImgExtended2]);
        applyMixins(Image, [ImgExtended3], { callWithSuper: true });
    }
}

export function installMixins(overrideNImage = true) {
    if (!mixinInstalled) {
        mixinInstalled = true;
        overrideImgBase(overrideNImage);
    }
}
