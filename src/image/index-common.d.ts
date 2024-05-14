import { Color, CoreTypes, Property, View } from '@nativescript/core';
import { EventData as IEventData } from '@nativescript/core/data/observable';
import { ImageAsset } from '@nativescript/core/image-asset';
import { ImageSource } from '@nativescript/core/image-source';
export declare enum CLogTypes {
    log = 0,
    info = 1,
    warning = 2,
    error = 3
}
export declare const ImageViewTraceCategory = "NativescriptImage";
export declare const CLog: (type: CLogTypes, ...args: any[]) => void;
export type Transition = 'fade' | 'curlUp';
export declare enum ScaleType {
    None = "none",
    Fill = "fill",
    AspectFill = "aspectFill",
    AspectFit = "aspectFit",
    Center = "center",
    CenterCrop = "centerCrop",
    CenterInside = "centerInside",
    FitCenter = "fitCenter",
    FitEnd = "fitEnd",
    FitStart = "fitStart",
    FitXY = "fitXY",
    FocusCrop = "focusCrop"
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
export declare function wrapNativeException(ex: any, errorType?: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"): any;
export interface ImagePipelineConfigSetting {
    isDownsampleEnabled?: boolean;
    leakTracker?: any;
    useOkhttp?: boolean;
}
export declare class EventData implements IEventData {
    private _eventName;
    private _object;
    get eventName(): string;
    set eventName(value: string);
    get object(): any;
    set object(value: any);
}
export type Stretch = 'none' | 'fill' | 'aspectFill' | 'aspectFit';
export declare const srcProperty: Property<ImageBase, string | ImageSource | ImageAsset>;
export declare const lowerResSrcProperty: Property<ImageBase, string>;
export declare const placeholderImageUriProperty: Property<ImageBase, string>;
export declare const failureImageUriProperty: Property<ImageBase, string>;
export declare const stretchProperty: Property<ImageBase, string>;
export declare const backgroundUriProperty: Property<ImageBase, string>;
export declare const progressiveRenderingEnabledProperty: Property<ImageBase, boolean>;
export declare const localThumbnailPreviewsEnabledProperty: Property<ImageBase, boolean>;
export declare const showProgressBarProperty: Property<ImageBase, boolean>;
export declare const progressBarColorProperty: Property<ImageBase, string>;
export declare const roundAsCircleProperty: Property<ImageBase, boolean>;
export declare const blurRadiusProperty: Property<ImageBase, number>;
export declare const blurDownSamplingProperty: Property<ImageBase, number>;
export declare const imageRotationProperty: Property<ImageBase, number>;
export declare const autoPlayAnimationsProperty: Property<ImageBase, boolean>;
export declare const tapToRetryEnabledProperty: Property<ImageBase, boolean>;
export declare const aspectRatioProperty: Property<ImageBase, number>;
export declare const decodeWidthProperty: Property<ImageBase, number>;
export declare const decodeHeightProperty: Property<ImageBase, number>;
export declare const tintColorProperty: Property<ImageBase, Color>;
export declare const alwaysFadeProperty: Property<ImageBase, boolean>;
export declare const fadeDurationProperty: Property<ImageBase, number>;
export declare const noCacheProperty: Property<ImageBase, boolean>;
export declare const roundTopLeftRadiusProperty: Property<ImageBase, CoreTypes.LengthType>;
export declare const roundTopRightRadiusProperty: Property<ImageBase, CoreTypes.LengthType>;
export declare const roundBottomLeftRadiusProperty: Property<ImageBase, CoreTypes.LengthType>;
export declare const roundBottomRightRadiusProperty: Property<ImageBase, CoreTypes.LengthType>;
export declare const loadModeProperty: Property<ImageBase, "sync" | "async">;
export declare const clipToBoundsProperty: Property<ImageBase, boolean>;
export declare const animatedImageViewProperty: Property<ImageBase, boolean>;
export declare const needRequestImage: (target: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor) => void;
export type BasicSrcType = string | ImageSource | ImageAsset;
export type SrcType = BasicSrcType | (() => BasicSrcType | PromiseLike<BasicSrcType>) | PromiseLike<BasicSrcType>;
export declare abstract class ImageBase extends View {
    static finalImageSetEvent: string;
    static failureEvent: string;
    static intermediateImageFailedEvent: string;
    static intermediateImageSetEvent: string;
    static releaseEvent: string;
    static submitEvent: string;
    src: SrcType;
    lowerResSrc: string;
    placeholderImageUri: string;
    failureImageUri: string;
    stretch: ScaleType;
    fadeDuration: number;
    imageRotation: number;
    backgroundUri: string;
    progressiveRenderingEnabled: boolean;
    localThumbnailPreviewsEnabled: boolean;
    showProgressBar: boolean;
    progressBarColor: Color | string;
    roundAsCircle: boolean;
    roundBottomRightRadius: number;
    roundTopLeftRadius: number;
    roundTopRightRadius: number;
    roundBottomLeftRadius: number;
    blurRadius: number;
    blurDownSampling: number;
    autoPlayAnimations: boolean;
    tapToRetryEnabled: boolean;
    aspectRatio: number;
    decodeWidth: number;
    decodeHeight: number;
    animatedImageView: boolean;
    loadMode: 'sync' | 'async';
    alwaysFade: boolean;
    noCache: boolean;
    tintColor: Color;
    readonly isLoading: boolean;
    get nativeImageViewProtected(): any;
    mCanRequestImage: boolean;
    mNeedRequestImage: boolean;
    protected abstract initImage(): any;
    onResumeNativeUpdates(): void;
    protected handleImageProgress(value: number, totalSize?: number): void;
    private static needsSizeAdjustment;
    computeScaleFactor(measureWidth: number, measureHeight: number, widthIsFinite: boolean, heightIsFinite: boolean, nativeWidth: number, nativeHeight: number, aspectRatio: number): {
        width: number;
        height: number;
    };
}
