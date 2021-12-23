import { Color, CoreTypes, Length, Property, ShorthandProperty, Trace, View, booleanConverter } from '@nativescript/core';
import { EventData as IEventData } from '@nativescript/core/data/observable';
import { ImageAsset } from '@nativescript/core/image-asset';
import { ImageSource } from '@nativescript/core/image-source';
import { isAndroid } from '@nativescript/core/platform';

function isNonNegativeFiniteNumber(value: number): boolean {
    return isFinite(value) && !isNaN(value) && value >= 0;
}

export enum CLogTypes {
    log = Trace.messageType.log,
    info = Trace.messageType.info,
    warning = Trace.messageType.warn,
    error = Trace.messageType.error,
}

export const ImageViewTraceCategory = 'NativescriptImage';
export const CLog = (type: CLogTypes, ...args) => {
    Trace.write(args.map(a=>(a && typeof a === 'object'? JSON.stringify(a) :a)).join(' '), ImageViewTraceCategory, type);
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
    FocusCrop = 'focusCrop',
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

export interface ImagePipelineConfigSetting {
    isDownsampleEnabled?: boolean;
    leakTracker?: any;
}

export class EventData implements IEventData {
    private _eventName: string;
    private _object: any;

    get eventName(): string {
        return this._eventName;
    }

    set eventName(value: string) {
        this._eventName = value;
    }

    get object(): any {
        return this._object;
    }

    set object(value: any) {
        this._object = value;
    }
}
export type Stretch = 'none' | 'fill' | 'aspectFill' | 'aspectFit';

export class ImageBase extends View {
    public static finalImageSetEvent: string = 'finalImageSet';
    public static failureEvent: string = 'failure';
    public static intermediateImageFailedEvent: string = 'intermediateImageFailed';
    public static intermediateImageSetEvent: string = 'intermediateImageSet';
    public static releaseEvent: string = 'release';
    public static submitEvent: string = 'submit';

    public src: string | ImageSource | ImageAsset;
    public lowerResSrc: string;
    public placeholderImageUri: string;
    public failureImageUri: string;
    public stretch: ScaleType;
    public fadeDuration: number;
    public backgroundUri: string;
    public progressiveRenderingEnabled: boolean;
    public localThumbnailPreviewsEnabled: boolean;
    public showProgressBar: boolean;
    public progressBarColor: string;
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
    alwaysFade: boolean;
    noCache: boolean;
    // fade: boolean;
    tintColor: Color;
    // transition: Transition;

    public readonly isLoading: boolean;

    public static srcProperty = new Property<ImageBase, string | ImageSource | ImageAsset>({ name: 'src' });
    public static lowerResSrcProperty = new Property<ImageBase, string>({ name: 'lowerResSrc' });
    public static placeholderImageUriProperty = new Property<ImageBase, string>({ name: 'placeholderImageUri' });
    public static failureImageUriProperty = new Property<ImageBase, string>({ name: 'failureImageUri' });
    public static stretchProperty = new Property<ImageBase, string>({ name: 'stretch', defaultValue: 'aspectFit' });
    public static backgroundUriProperty = new Property<ImageBase, string>({ name: 'backgroundUri' });
    public static progressiveRenderingEnabledProperty = new Property<ImageBase, boolean>({ name: 'progressiveRenderingEnabled', valueConverter: booleanConverter });
    public static localThumbnailPreviewsEnabledProperty = new Property<ImageBase, boolean>({ name: 'localThumbnailPreviewsEnabled', valueConverter: booleanConverter });
    public static showProgressBarProperty = new Property<ImageBase, boolean>({ name: 'showProgressBar', valueConverter: booleanConverter });
    public static progressBarColorProperty = new Property<ImageBase, string>({ name: 'progressBarColor', defaultValue: undefined });
    public static roundAsCircleProperty = new Property<ImageBase, boolean>({ name: 'roundAsCircle', valueConverter: booleanConverter, affectsLayout: isAndroid });
    public static blurRadiusProperty = new Property<ImageBase, number>({ name: 'blurRadius', valueConverter: (v) => parseFloat(v) });
    public static blurDownSamplingProperty = new Property<ImageBase, number>({ name: 'blurDownSampling', valueConverter: (v) => parseFloat(v) });
    public static autoPlayAnimationsProperty = new Property<ImageBase, boolean>({ name: 'autoPlayAnimations', valueConverter: booleanConverter });
    public static tapToRetryEnabledProperty = new Property<ImageBase, boolean>({ name: 'tapToRetryEnabled', valueConverter: booleanConverter });
    public static aspectRatioProperty = new Property<ImageBase, number>({ name: 'aspectRatio', affectsLayout: true, valueConverter: (v) => parseFloat(v) });
    public static decodeWidthProperty = new Property<ImageBase, number>({ name: 'decodeWidth', valueConverter: (v) => parseFloat(v) });
    public static decodeHeightProperty = new Property<ImageBase, number>({ name: 'decodeHeight', valueConverter: (v) => parseFloat(v) });
    public static tintColorProperty = new Property<ImageBase, Color>({ name: 'tintColor' });
    public static alwaysFadeProperty = new Property<ImageBase, boolean>({ name: 'alwaysFade', valueConverter: booleanConverter, defaultValue: false });
    public static fadeDurationProperty = new Property<ImageBase, number>({ name: 'fadeDuration', valueConverter: (v) => parseFloat(v) });
    public static noCacheProperty = new Property<ImageBase, boolean>({ name: 'noCache', defaultValue: false, valueConverter: booleanConverter });
    public static roundTopLeftRadiusProperty = new Property<ImageBase, CoreTypes.LengthType>({ name: 'roundTopLeftRadius', defaultValue: 0,  valueConverter: (v)=>Length.toDevicePixels(Length.parse(v))});
    public static roundTopRightRadiusProperty = new Property<ImageBase, CoreTypes.LengthType>({ name: 'roundTopRightRadius', defaultValue: 0,  valueConverter: (v)=>Length.toDevicePixels(Length.parse(v))});
    public static roundBottomLeftRadiusProperty = new Property<ImageBase, CoreTypes.LengthType>({ name: 'roundBottomLeftRadius', defaultValue: 0,  valueConverter: (v)=>Length.toDevicePixels(Length.parse(v))});
    public static roundBottomRightRadiusProperty = new Property<ImageBase, CoreTypes.LengthType>({ name: 'roundBottomRightRadius', defaultValue: 0,  valueConverter: (v)=>Length.toDevicePixels(Length.parse(v))});



    public static clipToBoundsProperty = new Property<ImageBase, boolean>({ name: 'clipToBounds', defaultValue: true, valueConverter: booleanConverter});
    // public static blendingModeProperty = new Property<ImageBase, string>({ name: 'blendingMode' });

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
ImageBase.srcProperty.register(ImageBase);
ImageBase.lowerResSrcProperty.register(ImageBase);
ImageBase.placeholderImageUriProperty.register(ImageBase);
ImageBase.failureImageUriProperty.register(ImageBase);
ImageBase.stretchProperty.register(ImageBase);
ImageBase.fadeDurationProperty.register(ImageBase);
ImageBase.backgroundUriProperty.register(ImageBase);
ImageBase.progressiveRenderingEnabledProperty.register(ImageBase);
ImageBase.localThumbnailPreviewsEnabledProperty.register(ImageBase);
ImageBase.showProgressBarProperty.register(ImageBase);
ImageBase.progressBarColorProperty.register(ImageBase);
ImageBase.roundAsCircleProperty.register(ImageBase);
ImageBase.roundTopLeftRadiusProperty.register(ImageBase);
ImageBase.roundTopRightRadiusProperty.register(ImageBase);
ImageBase.roundBottomLeftRadiusProperty.register(ImageBase);
ImageBase.roundBottomRightRadiusProperty.register(ImageBase);
ImageBase.blurRadiusProperty.register(ImageBase);
ImageBase.blurDownSamplingProperty.register(ImageBase);
ImageBase.autoPlayAnimationsProperty.register(ImageBase);
ImageBase.tapToRetryEnabledProperty.register(ImageBase);
ImageBase.aspectRatioProperty.register(ImageBase);
ImageBase.decodeWidthProperty.register(ImageBase);
ImageBase.decodeHeightProperty.register(ImageBase);
ImageBase.alwaysFadeProperty.register(ImageBase);
ImageBase.noCacheProperty.register(ImageBase);
ImageBase.clipToBoundsProperty.register(ImageBase);

// ImageBase.blendingModeProperty.register(ImageBase);
