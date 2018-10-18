import { PercentLength, Property, View } from 'tns-core-modules/ui/core/view';
import { Stretch } from 'tns-core-modules/ui/enums';
import { Color } from 'color';


export const tintColorProperty = new Property<Image, Color>({ name: 'tintColor' });
export const imageUriProperty = new Property<Image, string>({ name: 'imageUri' });
export const placeHolderProperty = new Property<Image, string>({ name: 'placeHolder' });
export const errorHolderProperty = new Property<Image, string>({ name: 'errorHolder' });
export const resizeProperty = new Property<Image, string>({ name: 'resize' });
export const overrideProperty = new Property<Image, string>({ name: 'override' });
export const centerCropProperty = new Property<Image, boolean>({ name: 'centerCrop', defaultValue: false });
export const stretchProperty = new Property<Image, Stretch>({ name: 'stretch' });
export const transitionProperty = new Property<Image, Transition>({ name: 'transition' });
export const onlyTransitionIfRemoteProperty = new Property<Image, boolean>({ name: 'onlyTransitionIfRemote', defaultValue: false });

export const decodeHeightProperty = new Property<Image, PercentLength>({
    name: 'decodeHeight',
    defaultValue: { unit: 'dip', value: 0 },
    equalityComparer: PercentLength.equals,
    valueConverter: PercentLength.parse
});

export const decodeWidthProperty = new Property<Image, PercentLength>({
    name: 'decodeWidth',
    defaultValue: { unit: 'dip', value: 0 },
    equalityComparer: PercentLength.equals,
    valueConverter: PercentLength.parse
});

export class Image extends View {
    constructor() {
        super();
    }
    public imageUri: string;
    public placeHolder: string;
    public errorHolder: string;
    // public resize: string;
    // public override: string;
    public centerCrop: boolean;
    public onlyTransitionIfRemote: boolean;
    public stretch: Stretch;
    public transition: Transition;
    public decodeWidth: PercentLength;
    public decodeHeight: PercentLength;
}
export type Stretch = 'none' | 'fill' | 'aspectFill' | 'aspectFit';
export type Transition = 'fade' | 'curlUp';
imageUriProperty.register(Image);
placeHolderProperty.register(Image);
errorHolderProperty.register(Image);
resizeProperty.register(Image);
overrideProperty.register(Image);
centerCropProperty.register(Image);
stretchProperty.register(Image);
transitionProperty.register(Image);
onlyTransitionIfRemoteProperty.register(Image);
tintColorProperty.register(Image);
decodeHeightProperty.register(Image);
decodeWidthProperty.register(Image);
