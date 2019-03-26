export * from './image-common';
import { EventData, ImageBase, ImageInfo as ImageInfoBase, ImagePipelineConfigSetting } from './image-common';
export declare class ImageInfo implements ImageInfoBase {
    private width;
    private height;
    constructor(width: number, height: number);
    getHeight(): number;
    getWidth(): number;
}
export interface FinalEventData extends EventData {
    imageInfo: ImageInfo;
    ios: UIImage;
}
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
    private static needsSizeAdjustment;
    private computeScaleFactor;
    updateImageUri(): void;
    _setNativeImage(nativeImage: UIImage): void;
    private handleImageLoaded;
    private onLoadProgress;
    private getUIImage;
    private initImage;
    startAnimating(): void;
    stopAnimating(): void;
}
