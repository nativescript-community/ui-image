import { PercentLength, Property, View } from 'tns-core-modules/ui/core/view';
import { Color } from 'color';
export interface Options {
    imageUri: string;
    placeHolder?: string;
    errorHolder?: string;
    centerCrop?: boolean;
    decodeWidth?: PercentLength;
    decodeHeight?: PercentLength;
}
export declare const tintColorProperty: Property<Image, Color>;
export declare const imageUriProperty: Property<Image, string>;
export declare const placeHolderProperty: Property<Image, string>;
export declare const errorHolderProperty: Property<Image, string>;
export declare const resizeProperty: Property<Image, string>;
export declare const overrideProperty: Property<Image, string>;
export declare const centerCropProperty: Property<Image, boolean>;
export declare const stretchProperty: Property<Image, Stretch>;
export declare const transitionProperty: Property<Image, Transition>;
export declare const onlyTransitionIfRemoteProperty: Property<Image, boolean>;
export declare const decodeHeightProperty: Property<Image, PercentLength>;
export declare const decodeWidthProperty: Property<Image, PercentLength>;
export declare class Image extends View {
    constructor();
    imageUri: string;
    placeHolder: string;
    errorHolder: string;
    centerCrop: boolean;
    onlyTransitionIfRemote: boolean;
    stretch: Stretch;
    transition: Transition;
    decodeWidth: PercentLength;
    decodeHeight: PercentLength;
}
export declare type Stretch = 'none' | 'fill' | 'aspectFill' | 'aspectFit';
export declare type Transition = 'fade' | 'curlUp';
