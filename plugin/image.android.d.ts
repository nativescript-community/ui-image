export * from './image-common';
import { AnimatedImage, EventData, ImageBase, ImageError as ImageErrorBase, ImageInfo as ImageInfoBase, ImagePipelineConfigSetting } from './image-common';
export declare function initialize(config?: ImagePipelineConfigSetting): void;
export declare function getImagePipeline(): ImagePipeline;
export declare function shutDown(): void;
export declare class ImagePipeline {
    private _android;
    isInDiskCacheSync(uri: string): boolean;
    isInBitmapMemoryCache(uri: string): boolean;
    evictFromMemoryCache(uri: string): void;
    evictFromDiskCache(uri: string): void;
    evictFromCache(uri: string): void;
    clearCaches(): void;
    clearMemoryCaches(): void;
    clearDiskCaches(): void;
    android: any;
    fetchImage(): void;
}
export declare class ImageError implements ImageErrorBase {
    private _stringValue;
    private _message;
    private _errorType;
    constructor(throwable: java.lang.Throwable);
    getMessage(): string;
    getErrorType(): string;
    toString(): string;
}
export interface QualityInfo {
    getQuality(): any;
    isOfFullQuality(): any;
    isOfGoodEnoughQuality(): any;
}
export declare class ImageInfo implements ImageInfoBase {
    private _nativeImageInfo;
    constructor(imageInfo: any);
    getHeight(): number;
    getWidth(): number;
    getQualityInfo(): QualityInfo;
}
export declare class FinalEventData extends EventData {
    private _imageInfo;
    private _animatable;
    imageInfo: ImageInfo;
    animatable: AnimatedImage;
    readonly android: AnimatedImage;
}
export declare class IntermediateEventData extends EventData {
    private _imageInfo;
    imageInfo: ImageInfo;
}
export declare class FailureEventData extends EventData {
    private _error;
    error: ImageError;
}
export declare class Img extends ImageBase {
    nativeViewProtected: com.facebook.drawee.view.SimpleDraweeView;
    isLoading: boolean;
    createNativeView(): com.facebook.drawee.view.SimpleDraweeView;
    onImageSet(imageInfo: com.facebook.imagepipeline.image.ImageInfo, animatable: android.graphics.drawable.Animatable): void;
    disposeNativeView(): void;
    updateImageUri(): void;
    private initImage;
    private updateHierarchy;
    private getDrawable;
    private getDrawableFromLocalFile;
    private getDrawableFromResource;
    startAnimating(): void;
    stopAnimating(): void;
}
