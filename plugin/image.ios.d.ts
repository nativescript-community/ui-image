export * from './image-common';
import { ImageBase, ImagePipelineConfigSetting } from './image-common';
export declare function initialize(config?: ImagePipelineConfigSetting): void;
export declare function shutDown(): void;
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
export declare class Img extends ImageBase {
    nativeViewProtected: SDAnimatedImageView;
    isLoading: boolean;
    private _imageSourceAffectsLayout;
    createNativeView(): SDAnimatedImageView;
    _setNativeClipToBounds(): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    private static needsSizeAdjustment(scaleType);
    private computeScaleFactor(measureWidth, measureHeight, widthIsFinite, heightIsFinite, nativeWidth, nativeHeight);
    updateImageUri(): void;
    _setNativeImage(nativeImage: UIImage): void;
    private handleImageLoaded;
    private onLoadProgress;
    private getUIImage(path);
    private initImage();
    startAnimating(): void;
    stopAnimating(): void;
}
