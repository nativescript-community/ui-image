export * from './image-common';
import { ImageBase, ImagePipelineConfigSetting } from './image-common';
export declare function initialize(config?: ImagePipelineConfigSetting): void;
export declare class ImagePipeline {
    private _ios;
    constructor();
    isInDiskCacheSync(uri: string): boolean;
    isInBitmapMemoryCache(uri: string): boolean;
    evictFromMemoryCache(uri: string): void;
    evictFromDiskCache(uri: string): void;
    evictFromCache(uri: string): void;
    clearCaches(): void;
    clearMemoryCaches(): void;
    clearDiskCaches(): void;
    readonly ios: SDImageCache;
}
export declare function getImagePipeline(): ImagePipeline;
export declare class Image extends ImageBase {
    nativeViewProtected: SDAnimatedImageView;
    isLoading: boolean;
    private _imageSourceAffectsLayout;
    createNativeView(): SDAnimatedImageView;
    initNativeView(): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    private static needsSizeAdjustment(scaleType);
    private static computeScaleFactor(measureWidth, measureHeight, widthIsFinite, heightIsFinite, nativeWidth, nativeHeight, imageStretch, aspectRatio?);
    updateImageUri(): void;
    protected onImageUriChanged(oldValue: string, newValue: string): void;
    protected onPlaceholderImageUriChanged(oldValue: string, newValue: string): void;
    protected onFailureImageUriChanged(oldValue: string, newValue: string): void;
    protected onActualImageScaleTypeChanged(oldValue: string, newValue: string): void;
    private initDrawee();
    _setNativeImage(nativeImage: UIImage): void;
    private handleImageLoaded;
    private onLoadProgress;
    private getUIImage(path);
    private initImage();
    startAnimating(): void;
    stopAnimating(): void;
}
