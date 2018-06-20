/// <reference path="typings/picasso.d.ts" />
/// <reference path="typings/okhttp.d.ts" />
/// <reference path="../references.d.ts" />
import * as common from './image.common';
export declare class Image extends common.Image {
    picasso: com.squareup.picasso.Picasso;
    nativeViewProtected: android.widget.ImageView;
    target: com.squareup.picasso.Target;
    constructor();
    static picassoInstance: any;
    static getPicassoInstance(): any;
    readonly android: android.widget.ImageView;
    createNativeView(): android.widget.ImageView;
    onImageLoaded(bitmap: android.graphics.Bitmap): void;
    onImageError(): void;
    handlingUri: any;
    private handleSetImage();
    viewInit: boolean;
    initNativeView(): void;
    private getImage(src);
    clearItem(): void;
}
