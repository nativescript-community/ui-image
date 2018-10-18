import * as common from './image.common';
import { Options } from './image';
export declare function loadImage(options: Options): Promise<{}>;
export declare class Image extends common.Image {
    picasso: com.squareup.picasso.Picasso;
    nativeViewProtected: android.widget.ImageView;
    constructor();
    static picassoInstance: any;
    static getPicassoInstance(): any;
    readonly android: android.widget.ImageView;
    createNativeView(): globalAndroid.widget.ImageView;
    onImageLoaded(bitmap: android.graphics.Bitmap): void;
    onImageError(): void;
    handlingUri: any;
    private handleSetImage();
    viewInit: boolean;
    initNativeView(): void;
    clearItem(): void;
}
