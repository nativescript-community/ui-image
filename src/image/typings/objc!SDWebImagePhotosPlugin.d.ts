declare class SDImagePhotosLoader extends NSObject implements SDImageLoader {
    canLoadWithURL(url: NSURL): boolean;
    loadImageWithURLOptionsContextProgressCompleted(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>, progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): SDWebImageOperation;

    static alloc(): SDImagePhotosLoader; // inherited from NSObject

    static new(): SDImagePhotosLoader; // inherited from NSObject

    fetchOptions: PHFetchOptions;

    imageRequestOptions: PHImageRequestOptions;

    requestImageAssetOnly: boolean;

    static readonly sharedLoader: SDImagePhotosLoader;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

    canRequestImageForURL(url: NSURL): boolean;

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    requestImageWithURLOptionsContextProgressCompleted(url: NSURL, options: SDWebImageOptions, context: NSDictionary<string, any>, progressBlock: (p1: number, p2: number, p3: NSURL) => void, completedBlock: (p1: UIImage, p2: NSData, p3: NSError, p4: boolean) => void): SDWebImageOperation;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    shouldBlockFailedURLWithURLError(url: NSURL, error: NSError): boolean;
}

declare let SDWebImageContextPhotosFetchOptions: string;

declare let SDWebImageContextPhotosImageRequestOptions: string;

declare let SDWebImageContextPhotosRequestImageData: string;

declare const enum SDWebImagePhotosError {

    NotAuthorized = 10001,

    NotImageAsset = 10002
}

declare let SDWebImagePhotosErrorDomain: string;

declare let SDWebImagePhotosPixelSize: CGSize;

declare let SDWebImagePhotosPluginVersionNumber: number;

declare let SDWebImagePhotosPluginVersionString: interop.Reference<number>;

declare let SDWebImagePhotosPointSize: CGSize;

declare let SDWebImagePhotosProgressExpectedSize: number;

declare let SDWebImagePhotosScheme: string;
