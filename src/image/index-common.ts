import { Color, CoreTypes, Length, Property, Trace, View, booleanConverter } from '@nativescript/core';
import { EventData as IEventData } from '@nativescript/core/data/observable';
// import { colorConverter } from '@nativescript/core/ui/styling/style-properties';
import { ImageAsset } from '@nativescript/core/image-asset';
import { ImageSource } from '@nativescript/core/image-source';
import { isAndroid } from '@nativescript/core/platform';
import { Optional } from '@nativescript/core/utils/typescript-utils';

export function colorConverter(v: string | Color): Color {
    if (!v || v instanceof Color) {
        return v as Color;
    }
    return new Color(v);
}

export type EventData = Optional<IEventData, 'object'>;

// New: loadSource and progress event payloads
export interface LoadSourceEventData extends EventData {
    source?: string;
}

/**
 * Instances of this class are provided to the handlers of the {@link finalImageSet}.
 */
export interface FinalEventData extends EventData {
    /**
     * Contains information about an image.
     */
    imageInfo: ImageInfo;
    android?: any; // Drawable;
    ios?: any; // UIImage
    source?: string;
}

/**
 * Instances of this class are provided to the handlers of the {@link intermediateImageSet}.
 */
export interface IntermediateEventData extends EventData {
    /**
     * Contains information about an image.
     */
    imageInfo: ImageInfo;
}

/**
 * Instances of this class are provided to the handlers of the {@link failure} and {@link intermediateImageFailed}.
 */
export interface FailureEventData extends EventData {
    /**
     * An object containing information about the status of the event.
     */
    error: Error;
}

export interface ProgressEventData extends EventData {
    progress?: number; // 0..1 or -1 if unknown
    current?: number; // bytes received (or -1)
    total?: number; // total bytes (or -1)
    finished?: boolean;
}

export enum CLogTypes {
    log = Trace.messageType.log,
    info = Trace.messageType.info,
    warn = Trace.messageType.warn,
    error = Trace.messageType.error
}

export const ImageViewTraceCategory = 'NativescriptImage';
export const CLog = (type: CLogTypes, ...args) => {
    Trace.write(args.map((a) => (a && typeof a === 'object' ? JSON.stringify(a) : a)).join(' '), ImageViewTraceCategory, type);
};

export type Transition = 'fade' | 'curlUp';

export enum ScaleType {
    None = 'none',
    Fill = 'fill',
    AspectFill = 'aspectFill',
    AspectFit = 'aspectFit',
    Center = 'center',
    CenterCrop = 'centerCrop',
    CenterInside = 'centerInside',
    FitCenter = 'fitCenter',
    FitEnd = 'fitEnd',
    FitStart = 'fitStart',
    FitXY = 'fitXY',
    FocusCrop = 'focusCrop'
}

export interface AnimatedImage {
    start(): void;
    stop(): void;
    isRunning(): boolean;
}

export interface ImageInfo {
    getHeight(): number;
    getWidth(): number;
}

export interface ImageError {
    getMessage(): string;
    getErrorType(): string;
    toString(): string;
}

export function wrapNativeException(ex, errorType = typeof ex) {
    if (typeof ex === 'string') {
        return new Error(ex);
    }
    if (!(ex instanceof Error)) {
        if (__ANDROID__) {
            const err = new Error(ex.toString());
            err['nativeException'] = ex;
            //@ts-ignore
            err['stackTrace'] = com.tns.NativeScriptException.getStackTraceAsString(ex);
            return err;
        }
        if (__IOS__) {
            const err = new Error(ex.localizedDescription);
            err['nativeException'] = ex;
            err['code'] = ex.code;
            err['domain'] = ex.domain;
            // TODO: we loose native stack. see how to get it
            return err;
        }
    }
    return ex;
}

export interface ImagePipelineConfigSetting {
    usePersistentCacheKeyStore?: boolean;
    // android signature key for cache. You can bump/change (v1, v2,...) to invalidate all cache
    globalSignatureKey?: string;
}

export type Stretch = 'none' | 'fill' | 'aspectFill' | 'aspectFit';

export const srcProperty = new Property<ImageBase, string | ImageSource | ImageAsset>({ name: 'src' });
export const headersProperty = new Property<ImageBase, Record<string, string>>({ name: 'headers' });
export const lowerResSrcProperty = new Property<ImageBase, string>({ name: 'lowerResSrc' });
export const placeholderImageUriProperty = new Property<ImageBase, string>({ name: 'placeholderImageUri' });
export const failureImageUriProperty = new Property<ImageBase, string>({ name: 'failureImageUri' });
export const stretchProperty = new Property<ImageBase, string>({ name: 'stretch' });
export const backgroundUriProperty = new Property<ImageBase, string>({ name: 'backgroundUri' });
export const progressiveRenderingEnabledProperty = new Property<ImageBase, boolean>({ name: 'progressiveRenderingEnabled', valueConverter: booleanConverter });
export const localThumbnailPreviewsEnabledProperty = new Property<ImageBase, boolean>({ name: 'localThumbnailPreviewsEnabled', valueConverter: booleanConverter });
export const roundAsCircleProperty = new Property<ImageBase, boolean>({ name: 'roundAsCircle', valueConverter: booleanConverter, affectsLayout: isAndroid });
export const blurRadiusProperty = new Property<ImageBase, number>({ name: 'blurRadius', valueConverter: (v) => parseFloat(v) });
export const blurDownSamplingProperty = new Property<ImageBase, number>({ name: 'blurDownSampling', valueConverter: (v) => parseFloat(v) });
export const imageRotationProperty = new Property<ImageBase, number>({ name: 'imageRotation', valueConverter: (v) => parseFloat(v), defaultValue: 0 , affectsLayout: true});
export const autoPlayAnimationsProperty = new Property<ImageBase, boolean>({ name: 'autoPlayAnimations', valueConverter: booleanConverter });
export const tapToRetryEnabledProperty = new Property<ImageBase, boolean>({ name: 'tapToRetryEnabled', valueConverter: booleanConverter });
export const aspectRatioProperty = new Property<ImageBase, number>({ name: 'aspectRatio', affectsLayout: true, valueConverter: (v) => parseFloat(v) });
export const decodeWidthProperty = new Property<ImageBase, number>({ name: 'decodeWidth', valueConverter: (v) => parseFloat(v) });
export const decodeHeightProperty = new Property<ImageBase, number>({ name: 'decodeHeight', valueConverter: (v) => parseFloat(v) });
export const tintColorProperty = new Property<ImageBase, Color>({ name: 'tintColor' });
export const alwaysFadeProperty = new Property<ImageBase, boolean>({ name: 'alwaysFade', valueConverter: booleanConverter, defaultValue: false });
export const fadeDurationProperty = new Property<ImageBase, number>({ name: 'fadeDuration', valueConverter: (v) => parseFloat(v) });
export const noCacheProperty = new Property<ImageBase, boolean>({ name: 'noCache', defaultValue: false, valueConverter: booleanConverter });
export const noRatioEnforceProperty = new Property<ImageBase, boolean>({ name: 'noRatioEnforce', affectsLayout: true, defaultValue: false, valueConverter: booleanConverter });
export const roundTopLeftRadiusProperty = new Property<ImageBase, CoreTypes.LengthType>({
    name: 'roundTopLeftRadius',
    defaultValue: 0,
    valueConverter: (v) => Length.toDevicePixels(Length.parse(v))
});
export const roundTopRightRadiusProperty = new Property<ImageBase, CoreTypes.LengthType>({
    name: 'roundTopRightRadius',
    defaultValue: 0,
    valueConverter: (v) => Length.toDevicePixels(Length.parse(v))
});
export const roundBottomLeftRadiusProperty = new Property<ImageBase, CoreTypes.LengthType>({
    name: 'roundBottomLeftRadius',
    defaultValue: 0,
    valueConverter: (v) => Length.toDevicePixels(Length.parse(v))
});
export const roundBottomRightRadiusProperty = new Property<ImageBase, CoreTypes.LengthType>({
    name: 'roundBottomRightRadius',
    defaultValue: 0,
    valueConverter: (v) => Length.toDevicePixels(Length.parse(v))
});
// export const roundRadiusProperty = new ShorthandProperty<any, string | CoreTypes.LengthType>({
//     name: 'borderRadius',
//     cssName: 'border-radius',
//     getter(this) {
//         if (
//             Length.equals(this.borderTopLeftRadius, this.borderTopRightRadius) &&
//             Length.equals(this.borderTopLeftRadius, this.borderBottomRightRadius) &&
//             Length.equals(this.borderTopLeftRadius, this.borderBottomLeftRadius)
//         ) {
//             return this.borderTopLeftRadius;
//         }

//         return `${Length.convertToString(this.borderTopLeftRadius)} ${Length.convertToString(this.borderTopRightRadius)} ${Length.convertToString(
//             this.borderBottomRightRadius
//         )} ${Length.convertToString(this.borderBottomLeftRadius)}`;
//     },
//     //@ts-ignore
//     converter(value) {
//         if (typeof value === 'string') {
//             const borderRadius = parseThickness(value);

//             return [
//                 [roundTopLeftRadiusProperty, borderRadius.top],
//                 [roundTopRightRadiusProperty, borderRadius.right],
//                 [roundBottomRightRadiusProperty, borderRadius.bottom],
//                 [roundBottomLeftRadiusProperty, borderRadius.left]
//             ];
//         } else {
//             return [
//                 [roundTopLeftRadiusProperty, value],
//                 [roundTopRightRadiusProperty, value],
//                 [roundBottomRightRadiusProperty, value],
//                 [roundBottomLeftRadiusProperty, value]
//             ];
//         }
//     }
// });
export const loadModeProperty = new Property<ImageBase, 'sync' | 'async'>({
    name: 'loadMode',
    defaultValue: 'sync'
});

export const clipToBoundsProperty = new Property<ImageBase, boolean>({ name: 'clipToBounds', defaultValue: true, valueConverter: booleanConverter });
export const animatedImageViewProperty = new Property<ImageBase, boolean>({ name: 'animatedImageView', defaultValue: false, valueConverter: booleanConverter });

export const needRequestImage = function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if (!this.mCanRequestImage) {
            this.mNeedRequestImage = true;
            return;
        }
        return originalMethod.apply(this, args);
    };
};

export type BasicSrcType = string | ImageSource | ImageAsset;
export type SrcType = BasicSrcType | (() => BasicSrcType | PromiseLike<BasicSrcType>) | PromiseLike<BasicSrcType>;
export abstract class ImageBase extends View {
    public static finalImageSetEvent: string = 'finalImageSet';
    public static failureEvent: string = 'failure';
    public static intermediateImageFailedEvent: string = 'intermediateImageFailed';
    public static intermediateImageSetEvent: string = 'intermediateImageSet';
    public static releaseEvent: string = 'release';
    public static submitEvent: string = 'submit';
    public static progressEvent: string = 'progress';
    public static loadSourceEvent: string = 'loadSource';

    public src: SrcType;
    public lowerResSrc: string;
    public placeholderImageUri: string;
    public failureImageUri: string;
    public stretch: ScaleType;
    public fadeDuration: number;
    public imageRotation: number;
    public backgroundUri: string;
    public progressiveRenderingEnabled: boolean;
    public localThumbnailPreviewsEnabled: boolean;
    public roundAsCircle: boolean;
    public roundBottomRightRadius: number;
    public roundTopLeftRadius: number;
    public roundTopRightRadius: number;
    public roundBottomLeftRadius: number;
    public blurRadius: number;
    public blurDownSampling: number;
    public autoPlayAnimations: boolean;
    public tapToRetryEnabled: boolean;
    public aspectRatio: number;
    public decodeWidth: number;
    public decodeHeight: number;
    public animatedImageView: boolean;
    public loadMode: 'sync' | 'async';
    public alwaysFade: boolean;
    public noCache: boolean;
    public noRatioEnforce: boolean;
    public tintColor: Color;
    headers: Record<string, string>;

    public readonly isLoading: boolean;

    // public static blendingModeProperty = new Property<ImageBase, string>({ name: 'blendingMode' });

    get nativeImageViewProtected() {
        return this.nativeViewProtected;
    }

    mCanRequestImage = true;
    mNeedRequestImage = false;
    protected abstract initImage();
    public onResumeNativeUpdates(): void {
        // {N} suspends properties update on `_suspendNativeUpdates`. So we only need to do this in onResumeNativeUpdates
        this.mCanRequestImage = false;
        super.onResumeNativeUpdates();
        this.mCanRequestImage = true;

        if (this.mNeedRequestImage) {
            this.mNeedRequestImage = false;
            this.initImage();
        }
    }

    protected handleImageProgress(value: number, totalSize?: number) {}
    private static needsSizeAdjustment(scaleType: ScaleType) {
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
    public computeScaleFactor(
        measureWidth: number,
        measureHeight: number,
        widthIsFinite: boolean,
        heightIsFinite: boolean,
        nativeWidth: number,
        nativeHeight: number,
        aspectRatio: number
    ): { width: number; height: number } {
        let scaleW = 1;
        let scaleH = 1;
        if (ImageBase.needsSizeAdjustment(this.stretch) || widthIsFinite || heightIsFinite) {
            const nativeScale = nativeWidth > 0 && nativeHeight > 0 ? nativeWidth / nativeHeight : 1;
            const measureScale = measureWidth > 0 && measureHeight > 0 ? measureWidth / measureHeight : 1;
            scaleW = nativeWidth > 0 ? measureWidth / nativeWidth : 1;
            scaleH = nativeHeight > 0 ? measureHeight / nativeHeight : 1;

            if (Trace.isEnabled()) {
                CLog(CLogTypes.info, 'computeScaleFactor', measureWidth, measureHeight, nativeWidth, nativeHeight, widthIsFinite, heightIsFinite, aspectRatio, nativeScale, measureScale);
            }
            if (aspectRatio > 0) {
                if (!widthIsFinite) {
                    scaleH = 1;
                    scaleW = aspectRatio;
                } else if (!heightIsFinite) {
                    scaleW = 1;
                    scaleH = 1 / aspectRatio;
                }
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
        }

        return { width: scaleW, height: scaleH };
    }
}
srcProperty.register(ImageBase);
headersProperty.register(ImageBase);
lowerResSrcProperty.register(ImageBase);
placeholderImageUriProperty.register(ImageBase);
failureImageUriProperty.register(ImageBase);
stretchProperty.register(ImageBase);
fadeDurationProperty.register(ImageBase);
backgroundUriProperty.register(ImageBase);
progressiveRenderingEnabledProperty.register(ImageBase);
localThumbnailPreviewsEnabledProperty.register(ImageBase);
roundAsCircleProperty.register(ImageBase);
roundTopLeftRadiusProperty.register(ImageBase);
roundTopRightRadiusProperty.register(ImageBase);
roundBottomLeftRadiusProperty.register(ImageBase);
roundBottomRightRadiusProperty.register(ImageBase);
blurRadiusProperty.register(ImageBase);
blurDownSamplingProperty.register(ImageBase);
imageRotationProperty.register(ImageBase);
autoPlayAnimationsProperty.register(ImageBase);
tapToRetryEnabledProperty.register(ImageBase);
aspectRatioProperty.register(ImageBase);
decodeWidthProperty.register(ImageBase);
decodeHeightProperty.register(ImageBase);
alwaysFadeProperty.register(ImageBase);
noCacheProperty.register(ImageBase);
clipToBoundsProperty.register(ImageBase);
animatedImageViewProperty.register(ImageBase);
loadModeProperty.register(ImageBase);
noRatioEnforceProperty.register(ImageBase);
tintColorProperty.register(ImageBase);
// roundRadiusProperty.register(ImageBase as any);

// ImageBase.blendingModeProperty.register(ImageBase);
