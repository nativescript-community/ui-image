export * from './index-common';
import { ZoomImageBase, maxZoomScaleProperty, minZoomScaleProperty, zoomScaleProperty } from './index-common';
@NativeClass
export class UIZoomImgScrollViewDelegateImpl extends NSObject implements UIScrollViewDelegate {
    private owner: WeakRef<ZoomImg>;
    public static ObjCProtocols = [UIScrollViewDelegate];

    public static initWithOwner(owner: WeakRef<ZoomImg>): UIZoomImgScrollViewDelegateImpl {
        const delegate = new UIZoomImgScrollViewDelegateImpl();
        delegate.owner = owner;
        return delegate;
    }

    viewForZoomingInScrollView(scrollView: UIScrollView) {
        const owner = this.owner.get();
        return owner?.nativeImageViewProtected;
    }
}

export class ZoomImg extends ZoomImageBase {
    nativeViewProtected: ImageScrollView;
    _image: SDAnimatedImageView | UIImageView;
    private delegate: UIZoomImgScrollViewDelegateImpl;
    public createNativeView() {
        this._image = super.createNativeView() as any;
        this._image.clipsToBounds = true;

        const nativeView = ImageScrollView.new();
        nativeView.zoomView = this._image;
        // const nativeView = UIScrollView.new();
        // nativeView.addSubview(this._image);
        nativeView.zoomScale = this.zoomScale;
        nativeView.minimumZoomScale = this.minZoom;
        nativeView.maximumZoomScale = this.maxZoom;
        return nativeView;
    }

    _setNativeImage(nativeImage, animated = true) {
        //@ts-ignore
        super._setNativeImage(nativeImage, animated);
        this.nativeViewProtected.updateForImage(nativeImage.size);
    }
    get nativeImageViewProtected() {
        return this._image;
    }

    public initNativeView() {
        this.delegate = UIZoomImgScrollViewDelegateImpl.initWithOwner(new WeakRef<ZoomImg>(this));
        this.nativeViewProtected.delegate = this.delegate;
    }

    disposeNativeView() {
        super.disposeNativeView();
        this._image = null;
        this.nativeViewProtected.delegate = this.delegate = null;
    }

    public onLayout(left: number, top: number, right: number, bottom: number): void {
        super.onLayout(left, top, right, bottom);
        this.nativeImageViewProtected.frame = this.nativeViewProtected.bounds;
    }

    [zoomScaleProperty.setNative](scale: number) {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.zoomScale = scale;
        }
    }
    setZoom(scale: number, animated = true, point: { x; y } = { x: 0, y: 0 }) {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.setZoomScaleAnimated(scale, animated);
        }
    }

    [minZoomScaleProperty.setNative](scale: number) {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.minimumZoomScale = scale;
        }
    }

    [maxZoomScaleProperty.setNative](scale: number) {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.maximumZoomScale = scale;
        }
    }
}
