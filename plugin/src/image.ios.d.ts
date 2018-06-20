/// <reference path="typings/objc!SDWebImage.d.ts" />
/// <reference path="../references.d.ts" />
import * as common from './image.common';
export declare class Image extends common.Image {
    nativeView: UIImageView;
    tintColor: UIColor;
    constructor();
    readonly ios: UIImageView;
    isLoading: boolean;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    private handleImageLoaded;
    private onLoadProgress;
    private handleSetImage();
    private setTintColor(value);
    createNativeView(): UIImageView;
    initNativeView(): void;
    clearItem(): void;
}
export declare function clearMemoryCache(): void;
export declare function clearDiskCache(): void;
export declare function clearCache(): void;
