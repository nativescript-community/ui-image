import { ImageAsset, ImageSource, View } from '@nativescript/core';

export * from './index-common.ts';

/**
 * When called, initializes the android Image library. Calling this method is required.
 * A good place to call it is at the application onLaunch() method.
 */
export function initialize(config?: ImagePipelineConfigSetting): void;

/**
 * Shuts the native Image and SimpleDraweeView down. By design this method should not be called manually as it is handled by the Image library internally.
 * NOTE: Be careful when manuallycalling this method as it will completely shutdown the functionality of Image.
 */
export function shutDown(): void;

/**
 * When called, initializes the android Image library. Calling this method is required.
 * A good place to call it is at the application onLaunch() method.
 */
export function getImagePipeline(): ImagePipeline;

/**
 * Encapsulates the common abstraction behind a platform specific object (typically a Bitmap) that is used view to show remote or local images.
 */
export class Img extends View {
    /**
     * This event is fired after the final image has been set.
     */
    static finalImageSetEvent: string;

    /**
     * This event is fired after the fetch of the final image failed.
     */
    static failureEvent: string;

    /**
     * This event is fired after the fetch of the intermediate image failed.
     */
    static intermediateImageFailedEvent: string;

    /**
     * This event is fired after any intermediate image has been set.
     */
    static intermediateImageSetEvent: string;

    /**
     * This event is fired after the controller released the fetched image.
     */
    static releaseEvent: string;

    /**
     * This event is fired before the image request is submitted.
     */
    static submitEvent: string;

    /**
     * Removes all images with the specified Uri from the memory or/and disk and reinitialize the 'src'.
     */
    async updateImageUri();

    /**
     * Start image animation
     */
    startAnimating();

    /**
     * Stop image animation
     */
    stopAnimating();
    /**
     * The native 'com.facebook.drawee.view.SimpleDraweeView' object.
     */
    android: any;

    /**
     * String value used for the image URI.
     */
    src: SrcType;

    /**
     * String value used for the lower res image URI.
     */
    lowerResSrc: string;

    /**
     * String value used for the placeholder image URI.
     */
    placeholderImageUri: string | ImageSource;

    /**
     * String value used for the failure image URI.
     */
    failureImageUri: string | ImageSource;

    /**
     * String value used by Image image scale type. This property can be set to:
     * 'center' - Performs no scaling.
     * 'centerCrop' - Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.
     * 'centerInside' - Scales the child so that it fits entirely inside the parent.
     * 'fitCenter' - Scales the child so that it fits entirely inside the parent.
     * 'fitStart' - Scales the child so that it fits entirely inside the parent.
     * 'fitEnd' - Scales the child so that it fits entirely inside the parent.
     * 'fitXY' - Scales width and height independently, so that the child matches the parent exactly.
     * 'focusCrop' - Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.
     */
    stretch: string;

    /**
     * Number value used for the fade-in duration. This value is in milliseconds.
     */
    fadeDuration: number;

    /**
     * String value used for the background image URI.
     */
    backgroundUri: string;

    /**
     * Boolean value used for enabling or disabling the streaming of progressive JPEG images.
     */
    progressiveRenderingEnabled: boolean;

    /**
     * Boolean value used for determining if the image should be rounded as a circle.
     */
    roundAsCircle: boolean;

    /**
     * Boolean value used for determining if the image's bottom right corner should be rounded.
     */
    roundBottomRight: boolean;

    /**
     * Boolean value used for determining if the image's bottom left corner should be rounded.
     */
    roundBottomLeft: boolean;

    /**
     * Boolean value used for determining if the image's top left corner should be rounded.
     */
    roundTopLeft: boolean;

    /**
     * Boolean value used for determining if the image's top right corner should be rounded.
     */
    roundTopRight: boolean;

    /**
     * Number value used as radius for rounding the image's corners.
     */
    roundedCornerRadius: number;

    /**
     * Number value used as input for the blur function. Larger value means slower processing.
     */
    blurRadius: number;

    /**
     * Number value used to scale the image before applying the blur function. Bigger value means faster processing.
     */
    blurDownSampling: number;

    /**
     * Boolean value used for enabling/disabling automatic playing of animated images.
     */
    autoPlayAnimations: boolean;

    /**
     * Boolean value used for enabling/disabling a tap to retry action for the download of the Image image.
     */
    tapToRetryEnabled: boolean;

    /**
     * Number value used as the aspect ratio of the image.
     */
    aspectRatio: number;

    /**
     * Number value used as the resized image width
     */
    decodeWidth: number;

    /**
     * Number value used as the resized image height
     */
    decodeHeight: number;

    /**
     * add custom headers to the image download request
     */
    headers: Record<string, string>;

    /**
     * IOS: if you want to show animated images you need to set this to true
     */
    animatedImageView: boolean;

    loadMode: 'sync' | 'async';
    alwaysFade: boolean;
    noCache: boolean;
    tintColor: Color;

    /**
     * Android: custom imageRotation
     */
    imageRotation: number;

    cacheKey: string;
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
export class ImageInfo {
    getHeight(): number;

    getWidth(): number;

    getQualityInfo(): QualityInfo;
}

/**
 * Interface of the common abstraction behind a platform specific error object that is used by the Image's events.
 */
export interface ImageError {
    /**
     * Returns the message of the Error.
     */
    getMessage(): string;

    /**
     * Returns the type (typically the class name) of the Error.
     */
    getErrorType(): string;

    /**
     * Returns the string representation of the Error.
     */
    toString(): string;
}

/**
 * Interface of the common abstraction behind a platform specific animated image object.
 */
export interface AnimatedImage {
    /**
     * Starts the native Android Animatable image.
     */
    start(): void;

    /**
     * Stops the native Android Animatable image.
     */
    stop(): void;

    /**
     * Returns boolean value representing the if the native Android Animatable's is being animated.
     */
    isRunning(): boolean;
}
/**
 * The entry point for the image pipeline..
 */
export class ImagePipeline {
    /**
     * iOS: set this to true to enable complex cache handling
     * this is necessary when you use colorMatrix, decodeWidth,...
     * and when you change images on drive requiring cache image eviction
     */
    static iosComplexCacheEviction: boolean;
    /**
     * Returns whether the image is stored in the bitmap memory cache.
     */
    isInBitmapMemoryCache(uri: string): boolean;

    /**
     * Returns the actual cache key for url + context
     * this is an iOS feature because imageView properties are used for the cache key
     */
    getCacheKey(uri: string, options: Partial<Img>): string;

    /**
     * Returns whether the image is stored in the disk cache.
     */
    isInDiskCache(uri: string): Promise<boolean>;

    /**
     * Removes all images with the specified Uri from memory cache.
     */
    evictFromMemoryCache(uri: string): Promise<boolean>;

    /**
     * Removes all images with the specified Uri from disk cache.
     */
    async evictFromDiskCache(uri: string): Promise<boolean>;

    /**
     * Removes all images with the specified Uri from all the caches (memory and disk).
     */
    async evictFromCache(uri: string): Promise<boolean>;

    /**
     * Clear all the caches (memory and disk).
     */
    clearCaches(): Promise<void>;

    /**
     * Clear the memory caches.
     */
    clearMemoryCaches(): Promise<void>;

    /**
     * Clear disk caches.
     */
    clearDiskCaches(): Promise<void>;

    /**
     * Prefetch to disk cache.
     */
    prefetchToDiskCache(uri: string): Promise<void>;

    /**
     * Prefetch to memory cache.
     */
    prefetchToMemoryCache(uri: string): Promise<void>;
}

/**
 * Options for scaling the child bounds to the parent bounds
 */
export enum ScaleType {
    /**
     * Performs no scaling.
     */
    center,
    /**
     * Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.
     */
    centerCrop,
    /**
     * Scales the child so that it fits entirely inside the parent.
     */
    centerInside,
    /**
     * Scales the child so that it fits entirely inside the parent.
     */
    fitCenter,
    /**
     * Scales the child so that it fits entirely inside the parent.
     */
    fitEnd,
    /**
     * Scales the child so that it fits entirely inside the parent.
     */
    fitStart,
    /**
     * Scales width and height independently, so that the child matches the parent exactly.
     */
    fitXY,
    /**
     * Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.
     */
    focusCrop
}

/**
 * Advanced Configurations used for initializing Image
 */
export interface ImagePipelineConfigSetting {
    // android only, disk cache key store persists to use evictFromDiskCache between app launches
    usePersistentCacheKeyStore?: boolean;
    // android signature key for cache. You can bump/change (v1, v2,...) to invalidate all cache
    globalSignatureKey?: string;
}
export const ImageViewTraceCategory;

export type GetContextFromOptionsCallback = (context: NSDictionary<string, any>, transformers: any[], options: Partial<Img>) => void;

export function registerPluginGetContextFromOptions(callback: GetContextFromOptionsCallback); // iOS only for plugins
