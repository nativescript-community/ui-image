import { Color, Property, View } from 'tns-core-modules/ui/core/view';
import * as observableModule from 'tns-core-modules/data/observable';
export declare type Transition = 'fade' | 'curlUp';
export declare enum ScaleType {
    Center = "center",
    CenterCrop = "centerCrop",
    CenterInside = "centerInside",
    FitCenter = "fitCenter",
    FitEnd = "fitEnd",
    FitStart = "fitStart",
    FitXY = "fitXY",
    FocusCrop = "focusCrop",
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
    imageUri: string;
    placeholderImageUri: string;
    failureImageUri: string;
    actualImageScaleType: ScaleType;
    fadeDuration: number;
    backgroundUri: string;
    progressiveRenderingEnabled: boolean;
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
    readonly isLoading: boolean;
    static imageUriProperty: Property<ImageBase, string>;
    static placeholderImageUriProperty: Property<ImageBase, string>;
    static failureImageUriProperty: Property<ImageBase, string>;
    static actualImageScaleTypeProperty: Property<ImageBase, string>;
    static fadeDurationProperty: Property<ImageBase, number>;
    static backgroundUriProperty: Property<ImageBase, string>;
    static progressiveRenderingEnabledProperty: Property<ImageBase, boolean>;
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
    onlyTransitionIfRemote: boolean;
    static onlyTransitionIfRemoteProperty: Property<ImageBase, boolean>;
    tintColor: Color;
    static tintColorProperty: Property<ImageBase, Color>;
    transition: Transition;
    static transitionProperty: Property<ImageBase, Transition>;
    stretch: Stretch;
    static stretchProperty: Property<ImageBase, Stretch>;
    private onImageUriPropertyChanged(oldValue, newValue);
    private onPlaceholderImageUriPropertyChanged(oldValue, newValue);
    private onFailureImageUriPropertyChanged(oldValue, newValue);
    private onActualImageScaleTypePropertyChanged(oldValue, newValue);
    private onFadeDurationPropertyChanged(oldValue, newValue);
    private onBackgroundUriPropertyChanged(oldValue, newValue);
    private onProgressiveRenderingEnabledPropertyChanged(oldValue, newValue);
    private onShowProgressBarPropertyChanged(oldValue, newValue);
    private onProgressBarColorPropertyChanged(oldValue, newValue);
    private onRoundAsCirclePropertyChanged(oldValue, newValue);
    private onRoundTopLeftPropertyChanged(oldValue, newValue);
    private onRoundTopRightPropertyChanged(oldValue, newValue);
    private onRoundBottomLeftPropertyChanged(oldValue, newValue);
    private onRoundBottomRightPropertyChanged(oldValue, newValue);
    private onRoundedCornerRadiusPropertyChanged(oldValue, newValue);
    private onBlurRadiusPropertyChanged(oldValue, newValue);
    private onBlurDownSamplingPropertyChanged(oldValue, newValue);
    private onAutoPlayAnimationsPropertyChanged(oldValue, newValue);
    private onTapToRetryEnabledPropertyChanged(oldValue, newValue);
    private onAspectRatioPropertyChanged(oldValue, newValue);
    private onDecodeWidthPropertyChanged(oldValue, newValue);
    private onDecodeHeightPropertyChanged(oldValue, newValue);
    protected onImageUriChanged(oldValue: string, newValue: string): void;
    protected onPlaceholderImageUriChanged(oldValue: string, newValue: string): void;
    protected onFailureImageUriChanged(oldValue: string, newValue: string): void;
    protected onActualImageScaleTypeChanged(oldValue: string, newValue: string): void;
    protected onFadeDurationChanged(oldValue: number, newValue: number): void;
    protected onBackgroundUriChanged(oldValue: string, newValue: string): void;
    protected onProgressiveRenderingEnabledChanged(oldValue: boolean, newValue: boolean): void;
    protected onShowProgressBarChanged(oldValue: boolean, newValue: boolean): void;
    protected onProgressBarColorChanged(oldValue: string, newValue: string): void;
    protected onRoundAsCircleChanged(oldValue: boolean, newValue: boolean): void;
    protected onRoundTopLeftChanged(oldValue: boolean, newValue: boolean): void;
    protected onRoundTopRightChanged(oldValue: boolean, newValue: boolean): void;
    protected onRoundBottomLeftChanged(oldValue: boolean, newValue: boolean): void;
    protected onRoundBottomRightChanged(oldValue: boolean, newValue: boolean): void;
    protected onRoundedCornerRadiusChanged(oldValue: number, newValue: number): void;
    protected onBlurRadiusChanged(oldValue: number, newValue: number): void;
    protected onBlurDownSamplingChanged(oldValue: number, newValue: number): void;
    protected onAutoPlayAnimationsPChanged(oldValue: boolean, newValue: boolean): void;
    protected onTapToRetryEnabledChanged(oldValue: boolean, newValue: boolean): void;
    protected onAspectRatioChanged(oldValue: number, newValue: number): void;
    protected onDecodeWidthChanged(oldValue: number, newValue: number): void;
    protected onDecodeHeightChanged(oldValue: number, newValue: number): void;
}
