import { AnimationDefinition, AnimationPromise, Color, CoreTypes, Property, View } from '@nativescript/core';
import { EventData as IEventData } from '@nativescript/core/data/observable';
import { ImageAsset } from '@nativescript/core/image-asset';
import { ImageSource } from '@nativescript/core/image-source';
import { Optional } from '@nativescript/core/utils/typescript-utils';
export declare function colorConverter(v: string | Color): Color;
export type EventData = Optional<IEventData, 'object'>;
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
    android?: any;
    ios?: any;
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
    progress?: number;
    current?: number;
    total?: number;
    finished?: boolean;
}
export declare enum CLogTypes {
    log = 0,
    info = 1,
    warn = 2,
    error = 3
}
export declare const ImageViewTraceCategory = "NativescriptImage";
export declare const CLog: (type: CLogTypes, ...args: any[]) => void;
export type Transition = 'fade' | 'curlUp';
/**
 * Options for scaling the child bounds to the parent bounds
 */
export declare enum ScaleType {
    None = "none",
    /**
     * Scales width and height independently, so that the child matches the parent exactly.
     */
    Fill = "fill",
    /**
     * Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.
     */
    AspectFill = "aspectFill",
    /**
     * Scales the child so that it fits entirely inside the parent.
     */
    AspectFit = "aspectFit",
    /**
     * Performs no scaling.
     */
    Center = "center",
    /**
     * Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.
     */
    CenterCrop = "centerCrop",
    /**
     * Scales the child so that it fits entirely inside the parent.
     */
    CenterInside = "centerInside",
    /**
     * Scales the child so that it fits entirely inside the parent.
     */
    FitCenter = "fitCenter",
    /**
     * Scales the child so that it fits entirely inside the parent.
     */
    FitEnd = "fitEnd",
    /**
     * Scales the child so that it fits entirely inside the parent.
     */
    FitStart = "fitStart",
    /**
     * Scales width and height independently, so that the child matches the parent exactly.
     */
    FitXY = "fitXY",
    /**
     * Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.
     */
    FocusCrop = "focusCrop"
}
export interface AnimatedImage {
    start(): void;
    stop(): void;
    isRunning(): boolean;
}
/**
 * Encapsulates the common abstraction behind a platform specific object (typically a Bitmap) quality.
 */
export interface QualityInfo {
    getQuality(): number;
    isOfFullQuality(): boolean;
    isOfGoodEnoughQuality(): boolean;
}
/**
 * Encapsulates the common abstraction behind a platform specific object (typically a Bitmap's quality) details.
 */
export interface ImageInfo {
    getHeight(): number;
    getWidth(): number;
    /**
     * @platform android
     */
    getQualityInfo(): QualityInfo;
}
export interface ImageError {
    getMessage(): string;
    getErrorType(): string;
    toString(): string;
}
export declare function wrapNativeException(ex: any, errorType?: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"): any;
export interface ImagePipelineConfigSetting {
    usePersistentCacheKeyStore?: boolean;
    globalSignatureKey?: string;
    memoryCacheSize?: number;
    memoryCacheScreens?: number;
    /**
     * Android: a custom `okhttp3.OkHttpClient` used by Glide to download images.
     * `false` or `undefined`: a default client is used.
     * @platform android
     */
    useOkhttp?: boolean | any;
    /**
     * Called before the native library is initialized, to allow very custom native handling.
     * - Android: `(glideConfiguration: com.nativescript.image.GlideConfiguration, config: ImagePipelineConfigSetting)`
     * - iOS: `(loadersManager: SDImageLoadersManager, loaders: any[], config: ImagePipelineConfigSetting)`. `loaders` is the array that will be set, you can modify it.
     */
    onInitialize?: Function;
    /**
     * @deprecated Fresco only (4.x). Ignored: the Glide based plugin always downsamples.
     * @platform android
     */
    isDownsampleEnabled?: boolean;
    /**
     * @deprecated Fresco only (4.x). Ignored.
     * @platform android
     */
    leakTracker?: any;
}
/**
 * Options for prefetching images with transformations and request options
 */
export interface PrefetchOptions {
    /** Custom headers for the request */
    headers?: Record<string, string> | (() => Record<string, string>);
    /** Decode width for downsampling */
    decodeWidth?: number;
    /** Decode height for downsampling */
    decodeHeight?: number;
    /** Blur radius */
    blurRadius?: number;
    /** Blur downsampling factor (Android only) */
    blurDownSampling?: number;
    /** Round image as circle */
    roundAsCircle?: boolean;
    /** Tint color */
    tintColor?: Color;
    /** Round corner radius for top left */
    roundTopLeftRadius?: number;
    /** Round corner radius for top right */
    roundTopRightRadius?: number;
    /** Round corner radius for bottom left */
    roundBottomLeftRadius?: number;
    /** Round corner radius for bottom right */
    roundBottomRightRadius?: number;
    /** image rotation, iOS only */
    imageRotation?: number;
}
export type Stretch = 'none' | 'fill' | 'aspectFill' | 'aspectFit';
export declare const srcProperty: Property<ImageBase, string | ImageSource | ImageAsset>;
export declare const headersProperty: Property<ImageBase, Record<string, string> | (() => Record<string, string>)>;
export declare const lowerResSrcProperty: Property<ImageBase, string>;
export declare const placeholderImageUriProperty: Property<ImageBase, string>;
export declare const failureImageUriProperty: Property<ImageBase, string>;
export declare const stretchProperty: Property<ImageBase, string>;
export declare const backgroundUriProperty: Property<ImageBase, string>;
export declare const progressiveRenderingEnabledProperty: Property<ImageBase, boolean>;
export declare const localThumbnailPreviewsEnabledProperty: Property<ImageBase, boolean>;
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
export declare const noRatioEnforceProperty: Property<ImageBase, boolean>;
export declare const roundTopLeftRadiusProperty: Property<ImageBase, CoreTypes.LengthType>;
export declare const roundTopRightRadiusProperty: Property<ImageBase, CoreTypes.LengthType>;
export declare const roundBottomLeftRadiusProperty: Property<ImageBase, CoreTypes.LengthType>;
export declare const roundBottomRightRadiusProperty: Property<ImageBase, CoreTypes.LengthType>;
export declare const loadModeProperty: Property<ImageBase, "sync" | "async">;
export declare const clipToBoundsProperty: Property<ImageBase, boolean>;
export declare const animatedImageViewProperty: Property<ImageBase, boolean>;
export declare const needRequestImage: (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => void;
export type BasicSrcType = string | ImageSource | ImageAsset;
export type SrcType = BasicSrcType | ((ImageView: ImageBase) => BasicSrcType | PromiseLike<BasicSrcType>) | PromiseLike<BasicSrcType>;
export declare abstract class ImageBase extends View {
    static finalImageSetEvent: string;
    static failureEvent: string;
    static intermediateImageFailedEvent: string;
    static intermediateImageSetEvent: string;
    static releaseEvent: string;
    static submitEvent: string;
    static progressEvent: string;
    static loadSourceEvent: string;
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
    noRatioEnforce: boolean;
    tintColor: Color;
    headers: Record<string, string> | (() => Record<string, string>);
    readonly isLoading: boolean;
    get nativeImageViewProtected(): any;
    mCanRequestImage: boolean;
    mNeedRequestImage: boolean;
    protected abstract initImage(): Promise<void>;
    protected abstract animateImageRotation(imageRotation: number, duration: number): void;
    /**
     * Same as `View.animate` but `imageRotation` can be animated, without the need of a patched @nativescript/core.
     * Android rotates the image, iOS cross fades between the previous and the rotated image.
     */
    animate(animation: AnimationDefinition & {
        imageRotation?: number;
    }): AnimationPromise;
    onResumeNativeUpdates(): void;
    protected handleImageProgress(value: number, totalSize?: number): void;
    private static needsSizeAdjustment;
    computeScaleFactor(measureWidth: number, measureHeight: number, widthIsFinite: boolean, heightIsFinite: boolean, nativeWidth: number, nativeHeight: number, aspectRatio: number): {
        width: number;
        height: number;
    };
}
