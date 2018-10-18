import * as common from './image.common';
import * as fs from 'file-system';
import * as utils from 'utils/utils';
import * as imageSrc from 'image-source';
import * as platform from 'platform';
import { PercentLength } from 'ui/core/view';
import { Color } from 'color';
global.moduleMerge(common, exports);
import { Options } from './image';

let AndroidImageView: typeof org.nativescript.widgets.ImageView;

declare interface PicassoTargetListener {
    onImageLoaded(bitmap: android.graphics.Bitmap, from?: com.squareup.picasso.Picasso.LoadedFrom);
    onImageError();
    // onPrepareLoad(placeHolderDrawable);
}

interface PicassoTarget extends com.squareup.picasso.Target {
    // tslint:disable-next-line:no-misused-new
    new (listener: PicassoTargetListener): PicassoTarget;
}

let PicassoTarget: PicassoTarget;
function ensurePicassoTargetClass() {
    if (PicassoTarget) {
        return;
    }

    class PicassoTargetImpl extends com.squareup.picasso.Target {
        constructor(private listener: PicassoTargetListener) {
            super();
            return global.__native(this);
        }

        public onBitmapLoaded(bitmap: android.graphics.Bitmap, from: com.squareup.picasso.Picasso.LoadedFrom) {
            this.listener.onImageLoaded(bitmap);
        }

        public onBitmapFailed(errorDrawable) {
            this.listener.onImageError();
        }

        public onPrepareLoad(placeHolderDrawable) {}
    }

    PicassoTarget = PicassoTargetImpl as any;
}
let PicassoTransformClass;
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

function getImage(src: string): string {
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

function createPicassoBuilder(
    picasso: com.squareup.picasso.Picasso,
    options: Options
) {
    const builder = picasso.load(getImage(options.imageUri));
    if (this.placeHolder) {
        builder.placeholder(imageSrc.fromFileOrResource(options.placeHolder).android);
    }
    if (this.errorHolder) {
        builder.error(imageSrc.fromFileOrResource(options.errorHolder).android);
    }
    if (options.decodeWidth || options.decodeHeight) {
        const screen = platform.screen.mainScreen;
        const decodeWidth = options.decodeWidth ? PercentLength.toDevicePixels(options.decodeWidth, 0, this.getMeasuredWidth() || screen.widthPixels) : 0;
        const decodeHeight = options.decodeHeight ? PercentLength.toDevicePixels(options.decodeHeight, 0, this.getMeasuredHeight() || screen.heightPixels) : 0;
        if (decodeWidth > 0 || decodeHeight > 0) {
            // console.log('resizing image', this.cssType, this.nativeView.id, this.id, decodeWidth, decodeHeight);
            builder.resize(decodeWidth, decodeHeight);
        }
    }
    if (options.centerCrop) {
        builder.centerCrop();
    }
    // if (this.fade === false) {
    builder.noFade();
    return builder;
}

export function loadImage(options: Options) {
    ensurePicassoTargetClass();
    return new Promise((resolve, reject) => {
        const target = new PicassoTarget({
            onImageLoaded(bitmap: android.graphics.Bitmap, from?: com.squareup.picasso.Picasso.LoadedFrom) {
                resolve({ android: bitmap });
            },
            onImageError() {
                reject();
            }
        });
        const builder = createPicassoBuilder(Image.getPicassoInstance(), options);
        builder.into(target);
    });
}

export class Image extends common.Image {
    picasso: com.squareup.picasso.Picasso;
    nativeViewProtected: android.widget.ImageView;
    // target: com.squareup.picasso.Target;
    constructor() {
        super();
        // ensurePicassoTargetClass();
        // this.target = new PicassoTargetClass(this);
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

    public onImageLoaded(bitmap: android.graphics.Bitmap) {
        this.nativeView.setImageBitmap(bitmap);
        this.handlingUri = null;
        this.notify({
            eventName: 'loaded',
            image: bitmap,
            object: this
        });
    }
    public onImageError() {
        this.nativeView.setImageBitmap(null);
        this.handlingUri = null;
        this.notify({
            eventName: 'error',
            image: null,
            object: this
        });
    }

    handlingUri;
    private handleSetImage() {
        if (!this.viewInit) {
            return;
        }
        // const imageView = this.nativeViewProtected;
        // imageView.setImageBitmap(null);
        if (this.imageUri) {
            if (this.handlingUri === this.imageUri) {
                return;
            }
            this.handlingUri = this.imageUri;
            const builder = createPicassoBuilder(this.picasso, this);
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
    viewInit = false;
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
