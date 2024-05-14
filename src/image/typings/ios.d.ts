/// <reference path="./objc!SDWebImagePhotosPlugin.d.ts" />
/// <reference path="./objc!SDWebImage.d.ts" />
declare namespace NSURL {
    export function sd_URLWithAsset(asset: PHAsset): NSURL;

    export function sd_URLWithAssetLocalIdentifier(identifier: string): NSURL;
}
declare interface UIImageView {
    sd_imageIndicator: SDWebImageIndicator;

    sd_setHighlightedImageWithURL(url: NSURL): void;

    sd_setHighlightedImageWithURLCompleted(url: NSURL, completedBlock: (p1: UIImage, p2: NSError, p3: SDImageCacheType, p4: NSURL) => void): void;

    sd_setHighlightedImageWithURLOptions(url: NSURL, options: SDWebImageOptions): void;

    sd_setHighlightedImageWithURLOptionsCompleted(url: NSURL, options: SDWebImageOptions, completedBlock: (p1: UIImage, p2: NSError, p3: SDImageCacheType, p4: NSURL) => void): void;

    sd_setHighlightedImageWithURLOptionsContext(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>): void;

    sd_setHighlightedImageWithURLOptionsContextProgressCompleted(
        url: NSURL,
        options: SDWebImageOptions,
        context: NSDictionary<string, any>,
        progressBlock: (p1: number, p2: number, p3: NSURL) => void,
        completedBlock: (p1: UIImage, p2: NSError, p3: SDImageCacheType, p4: NSURL) => void
    ): void;

    sd_setHighlightedImageWithURLOptionsProgressCompleted(
        url: NSURL,
        options: SDWebImageOptions,
        progressBlock: (p1: number, p2: number, p3: NSURL) => void,
        completedBlock: (p1: UIImage, p2: NSError, p3: SDImageCacheType, p4: NSURL) => void
    ): void;

    sd_setImageWithURL(url: NSURL): void;

    sd_setImageWithURLCompleted(url: NSURL, completedBlock: (p1: UIImage, p2: NSError, p3: SDImageCacheType, p4: NSURL) => void): void;

    sd_setImageWithURLPlaceholderImage(url: NSURL, placeholder: UIImage): void;

    sd_setImageWithURLPlaceholderImageCompleted(url: NSURL, placeholder: UIImage, completedBlock: (p1: UIImage, p2: NSError, p3: SDImageCacheType, p4: NSURL) => void): void;

    sd_setImageWithURLPlaceholderImageOptions(url: NSURL, placeholder: UIImage, options: SDWebImageOptions): void;

    sd_setImageWithURLPlaceholderImageOptionsCompleted(
        url: NSURL,
        placeholder: UIImage,
        options: SDWebImageOptions,
        completedBlock: (p1: UIImage, p2: NSError, p3: SDImageCacheType, p4: NSURL) => void
    ): void;

    sd_setImageWithURLPlaceholderImageOptionsContext(url: NSURL, placeholder: UIImage, options: SDWebImageOptions, context: NSDictionary<string, any>): void;

    sd_setImageWithURLPlaceholderImageOptionsContextProgressCompleted(
        url: NSURL,
        placeholder: UIImage,
        options: SDWebImageOptions,
        context: NSDictionary<string, any>,
        progressBlock: (p1: number, p2: number, p3: NSURL) => void,
        completedBlock: (p1: UIImage, p2: NSError, p3: SDImageCacheType, p4: NSURL) => void
    ): void;

    sd_setImageWithURLPlaceholderImageOptionsProgressCompleted(
        url: NSURL,
        placeholder: UIImage,
        options: SDWebImageOptions,
        progressBlock: (p1: number, p2: number, p3: NSURL) => void,
        completedBlock: (p1: UIImage, p2: NSError, p3: SDImageCacheType, p4: NSURL) => void
    ): void;
}
