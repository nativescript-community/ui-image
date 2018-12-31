import { PercentLength, Property } from 'tns-core-modules/ui/core/view';
import { Image as NImage } from 'tns-core-modules/ui/image';
export declare const srcProperty: Property<Image, string>;
export declare const placeHolderProperty: Property<Image, string>;
export declare const errorHolderProperty: Property<Image, string>;
export declare const resizeProperty: Property<Image, string>;
export declare const overrideProperty: Property<Image, string>;
export declare const centerCropProperty: Property<Image, boolean>;
export declare const transitionProperty: Property<Image, Transition>;
export declare const onlyFadeIfRemoteProperty: Property<Image, boolean>;
export declare const decodeHeightProperty: Property<Image, PercentLength>;
export declare const decodeWidthProperty: Property<Image, PercentLength>;
export declare class Image extends NImage {
    constructor();
    src: string;
    placeHolder: string;
    errorHolder: string;
    centerCrop: boolean;
    onlyFadeIfRemote: boolean;
    stretch: Stretch;
    transition: Transition;
}
export declare type Stretch = 'none' | 'fill' | 'aspectFill' | 'aspectFit';
export declare type Transition = 'fade' | 'curlUp';
