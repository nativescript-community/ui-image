export * from './image-common';
import { AnimatedImage, EventData, ImageBase, ImageError as ImageErrorBase, ImageInfo as ImageInfoBase, ImagePipelineConfigSetting } from './image-common';
export declare function initialize(config?: ImagePipelineConfigSetting): void;
export declare function getImagePipeline(): ImagePipeline;
export declare function shutDown(): void;
export declare class ImagePipeline {
    private _android;
    private isInDiskCacheSync(uri);
    isInBitmapMemoryCache(uri: string): boolean;
    evictFromMemoryCache(uri: string): void;
    evictFromDiskCache(uri: string): void;
    evictFromCache(uri: string): void;
    clearCaches(): void;
    clearMemoryCaches(): void;
    clearDiskCaches(): void;
    android: any;
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
}
export declare class IntermediateEventData extends EventData {
    private _imageInfo;
    imageInfo: ImageInfo;
}
export declare class FailureEventData extends EventData {
    private _error;
    error: ImageError;
}
export declare class Image extends ImageBase {
    nativeViewProtected: com.facebook.drawee.view.SimpleDraweeView;
    createNativeView(): com.facebook.drawee.view.SimpleDraweeView;
    initNativeView(): void;
    disposeNativeView(): void;
    updateImageUri(): void;
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
    private initDrawee();
    private initImage();
    private updateHierarchy();
    private getDrawable(path);
    private getDrawableFromLocalFile(localFilePath);
    private getDrawableFromResource(resourceName);
    startAnimating(): void;
    stopAnimating(): void;
}
