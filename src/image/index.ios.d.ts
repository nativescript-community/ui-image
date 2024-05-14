export * from './index-common';
import { EventData, ImageBase, ImageInfo as ImageInfoBase, ImagePipelineConfigSetting, SrcType } from './index-common';
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
export type GetContextFromOptionsCallback = (context: NSDictionary<string, any>, transformers: any[], options: Partial<Img>) => void;
export declare function registerPluginGetContextFromOptions(callback: GetContextFromOptionsCallback): void;
export declare class ImagePipeline {
    private mIos;
    constructor();
    getCacheKey(uri: string, options: Partial<Img>): string;
    isInDiskCache(key: string): boolean;
    isInBitmapMemoryCache(key: string): boolean;
    evictFromMemoryCache(key: string): void;
    evictFromDiskCache(key: string): Promise<void>;
    evictFromCache(key: string): Promise<void>;
    clearCaches(): void;
    clearMemoryCaches(): void;
    clearDiskCaches(): void;
    prefetchToDiskCache(uri: string): Promise<void>;
    prefetchToMemoryCache(uri: string): Promise<void>;
    private prefetchToCacheType;
    get ios(): SDImageCache;
}
export declare const needRequestImage: (target: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor) => void;
export declare function getImagePipeline(): ImagePipeline;
export declare class Img extends ImageBase {
    nativeViewProtected: SDAnimatedImageView | UIImageView;
    nativeImageViewProtected: SDAnimatedImageView | UIImageView;
    isLoading: boolean;
    mCacheKey: string;
    contextOptions: any;
    get cacheKey(): string;
    protected mImageSourceAffectsLayout: boolean;
    createNativeView(): UIImageView;
    _setNativeClipToBounds(): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    updateImageUri(): Promise<void>;
    _setNativeImage(nativeImage: UIImage, animated?: boolean): void;
    private handleImageLoaded;
    private onLoadProgress;
    private getUIImage;
    protected initImage(): Promise<void>;
    protected handleImageSrc(src: SrcType): Promise<void>;
    placeholderImage: UIImage;
    startAnimating(): void;
    stopAnimating(): void;
}
