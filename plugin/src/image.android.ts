/// <reference path="./typings/picasso.d.ts" />
/// <reference path="./typings/okhttp.d.ts" />
/// <reference path="../../references.d.ts" />
import * as common from './image.common';
import * as app from 'application';
import * as fs from 'file-system';
import * as utils from 'utils/utils';
import * as types from 'utils/types';
import * as imageSrc from 'image-source';
import * as platform from 'platform';
import { View, layout, PercentLength, Length } from 'ui/core/view';
import { Color } from 'color';
global.moduleMerge(common, exports);

let AndroidImageView: typeof org.nativescript.widgets.ImageView;

var PicassoTargetClass;
function ensurePicassoTargetClass() {
    if (PicassoTargetClass) {
        return;
    }

    class PicassoTarget extends com.squareup.picasso.Target {
        constructor(private view: Image) {
            super();
            return global.__native(this);
        }

        public onBitmapLoaded(bitmap: android.graphics.Bitmap, from: com.squareup.picasso.Picasso.LoadedFrom) {
            this.view.onImageLoaded(bitmap);
        }

        public onBitmapFailed(errorDrawable) {
            this.view.onImageError();
        }

        public onPrepareLoad(placeHolderDrawable) {}
    }

    PicassoTargetClass = PicassoTarget;
}
var PicassoTransformClass;
function ensurePicassoTransformClass() {
    if (PicassoTransformClass) {
        return;
    }

    class PicassoTransform extends com.squareup.picasso.Transformation {
        constructor(private view: Image) {
            super();
            return global.__native(this);
        }
    }

    PicassoTransformClass = PicassoTransform;
}

export class Image extends common.Image {
    picasso: com.squareup.picasso.Picasso;
    nativeViewProtected: android.widget.ImageView;
    target: typeof PicassoTargetClass;
    constructor() {
        super();
        ensurePicassoTargetClass();
        this.target = new PicassoTargetClass(this);
    }
    static picassoInstance;
    // static picassoHttpClient
    // static httpClient:okhttp3.OkHttpClient
    // static  getOkHttpClientInstance() {
    //     if (Image.httpClient == null) {
    //         Image.httpClient = new okhttp3.OkHttpClient().newBuilder().build();
    //     }
    //     return Image.httpClient;
    // }
    // static getPicassoHttpClientInstance() {
    //     if (!Image.picassoHttpClient) {
    //         Image.picassoHttpClient = Image.getOkHttpClientInstance().newBuilder().build();
    //     }
    //     return Image.picassoHttpClient;
    // }
    static getPicassoInstance() {
        if (!Image.picassoInstance) {
            // Image.picassoInstance = new com.squareup.picasso.Picasso.Builder(app.android.context).downloader(new com.squareup.picasso.OkHttp3Downloader(
            //     Image.getPicassoHttpClientInstance())).build();
            Image.picassoInstance = (com.squareup.picasso.Picasso as any).get();
        }
        return Image.picassoInstance;
    }

    get android(): android.widget.ImageView {
        return this.nativeView;
    }
    public createNativeView() {
        this.picasso = Image.getPicassoInstance();
        if (!AndroidImageView) {
            AndroidImageView = org.nativescript.widgets.ImageView;
        }
        return new android.widget.ImageView(this._context);
    }

    public onImageLoaded(bitmap: android.graphics.Bitmap)  {
        this.nativeView.setImageBitmap(bitmap);
        this.handlingUri = null;
        this.notify({
            eventName: "loaded",
            image: bitmap,
            object: this
        });
    }
    public onImageError()  {
        this.nativeView.setImageBitmap(null);
        this.handlingUri = null;
        this.notify({
            eventName: "error",
            image: null,
            object: this
        });
    }

    handlingUri
    private handleSetImage() {
        if (!this.viewInit) {
            return;
        }
        const imageView = this.nativeViewProtected;
        // imageView.setImageBitmap(null);
        if (this.imageUri) {
            if (this.handlingUri === this.imageUri) {
                return;
            }
            this.handlingUri = this.imageUri
            const builder = this.picasso.load(this.getImage(this.imageUri));
            if (this.placeHolder) {
                builder.placeholder(imageSrc.fromFileOrResource(this.placeHolder).android);
            }
            if (this.errorHolder) {
                builder.error(imageSrc.fromFileOrResource(this.errorHolder).android);
            }
            if (this.decodeWidth || this.decodeHeight) {
                let screen = platform.screen.mainScreen;
                let decodeWidth = this.decodeWidth?PercentLength.toDevicePixels(this.decodeWidth, 0, this.getMeasuredWidth() || screen.widthPixels):0;
                let decodeHeight = this.decodeHeight?PercentLength.toDevicePixels(this.decodeHeight, 0, this.getMeasuredHeight() || screen.heightPixels):0;
                if (decodeWidth > 0 || decodeHeight > 0) {
                    // console.log('resizing image', this.cssType, this.nativeView.id, this.id, decodeWidth, decodeHeight);
                    builder.resize(decodeWidth, decodeHeight);
                }
            }
            if (this.centerCrop) {
                builder.centerCrop();
            }
            // if (this.fade === false) {
            builder.noFade();
            // }
            builder.into(this.nativeView);
            //     this.builder.into(this.nativeView, new Callback() {
            //         public void onLoad() {
            //           if (playAnimation.get()) {
            //             // TODO play fade
            //           }
            //         }
            //         //..
            // });
        } else {
            this.nativeViewProtected.setImageBitmap(null);
        }
    }
    viewInit = false
    public initNativeView() {
         super.initNativeView();
         this.viewInit = true;
    //    console.log('initNativeView', this.imageUri, !!this.nativeView);
        this.handleSetImage();
    }
    [common.imageUriProperty.getDefault](): any {
        return undefined;
    }
    [common.imageUriProperty.setNative](src: string) {
        if (!this.imageUri) {
            return;
        }
        // console.log('imageUriProperty', this.imageUri);
        this.handleSetImage();
    }
    [common.tintColorProperty.setNative](value: Color) {
        if (value === undefined) {
            this.nativeViewProtected.clearColorFilter();
        } else {
            this.nativeViewProtected.setColorFilter(value.android);
        }
    }
    private getImage(src: string): string {
        let nativeImage;
        if (!src) {
            return nativeImage;
        }
        if (src.substr(0, 1) === '/') {
            nativeImage = new java.io.File(nativeImage);
        } else if (src.startsWith('~/')) {
            nativeImage = new java.io.File(fs.path.join(fs.knownFolders.currentApp().path, src.replace('~/', '')));
        } else if (src.startsWith('https://') || src.startsWith('http://')) {
            nativeImage = src;
        } else if (src.startsWith('res://')) {
            nativeImage = utils.ad.resources.getDrawableId(src.replace('res://', ''));
        }
        return nativeImage;
    }
    [common.stretchProperty.getDefault](): common.Stretch {
        return 'aspectFit';
    }
    [common.stretchProperty.setNative](value: common.Stretch) {
        switch (value) {
            case 'aspectFit':
                this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER);
                break;
            case 'aspectFill':
                this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
                break;
            case 'fill':
                this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
                break;
            case 'none':
            default:
                this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.MATRIX);
                break;
        }
    }

    public clearItem() {
        // this.builder.
    }
}
