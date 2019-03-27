import { Color, Property, View } from 'tns-core-modules/ui/core/view';
import * as observableModule from 'tns-core-modules/data/observable';
export declare type Transition = 'fade' | 'curlUp';
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
export interface ImagePipelineConfigSetting {
    isDownsampleEnabled?: boolean;
}
export declare class EventData implements observableModule.EventData {
    private _eventName;
    private _object;
    eventName: string;
    object: any;
}
export declare type Stretch = 'none' | 'fill' | 'aspectFill' | 'aspectFit';
export declare class ImageBase extends View {
    static finalImageSetEvent: string;
    static failureEvent: string;
    static intermediateImageFailedEvent: string;
    static intermediateImageSetEvent: string;
    static releaseEvent: string;
    static submitEvent: string;
    src: string;
    lowerResSrc: string;
    placeholderImageUri: string;
    failureImageUri: string;
    stretch: any;
    fadeDuration: number;
    backgroundUri: string;
    progressiveRenderingEnabled: boolean;
    localThumbnailPreviewsEnabled: boolean;
    showProgressBar: boolean;
    progressBarColor: string;
    roundAsCircle: boolean;
    roundBottomRight: boolean;
    roundTopLeft: boolean;
    roundTopRight: boolean;
    roundBottomLeft: boolean;
    roundedCornerRadius: number;
    blurRadius: number;
    blurDownSampling: number;
    autoPlayAnimations: boolean;
    tapToRetryEnabled: boolean;
    aspectRatio: number;
    decodeWidth: number;
    decodeHeight: number;
    alwaysFade: boolean;
    tintColor: Color;
    readonly isLoading: boolean;
    static srcProperty: Property<ImageBase, string>;
    static lowerResSrcProperty: Property<ImageBase, string>;
    static placeholderImageUriProperty: Property<ImageBase, string>;
    static failureImageUriProperty: Property<ImageBase, string>;
    static stretchProperty: Property<ImageBase, string>;
    static backgroundUriProperty: Property<ImageBase, string>;
    static progressiveRenderingEnabledProperty: Property<ImageBase, boolean>;
    static localThumbnailPreviewsEnabledProperty: Property<ImageBase, boolean>;
    static showProgressBarProperty: Property<ImageBase, boolean>;
    static progressBarColorProperty: Property<ImageBase, string>;
    static roundAsCircleProperty: Property<ImageBase, boolean>;
    static roundTopLeftProperty: Property<ImageBase, boolean>;
    static roundTopRightProperty: Property<ImageBase, boolean>;
    static roundBottomLeftProperty: Property<ImageBase, boolean>;
    static roundBottomRightProperty: Property<ImageBase, boolean>;
    static roundedCornerRadiusProperty: Property<ImageBase, number>;
    static blurRadiusProperty: Property<ImageBase, number>;
    static blurDownSamplingProperty: Property<ImageBase, number>;
    static autoPlayAnimationsProperty: Property<ImageBase, boolean>;
    static tapToRetryEnabledProperty: Property<ImageBase, boolean>;
    static aspectRatioProperty: Property<ImageBase, number>;
    static decodeWidthProperty: Property<ImageBase, number>;
    static decodeHeightProperty: Property<ImageBase, number>;
    static tintColorProperty: Property<ImageBase, Color>;
    static alwaysFadeProperty: Property<ImageBase, boolean>;
    static fadeDurationProperty: Property<ImageBase, number>;
    protected handleImageProgress(value: number, totalSize?: number): void;
}
