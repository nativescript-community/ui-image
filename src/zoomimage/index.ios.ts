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

    scrollViewDidZoom(scrollView: UIScrollView): void {
        const owner = this.owner.get();
        owner?.nativeViewProtected?.updateContentInsetsForImage();
        owner?.notifyTransformChanged();
    }

    scrollViewDidScroll(scrollView: UIScrollView): void {
        this.owner.get()?.notifyTransformChanged();
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
        if (nativeImage) {
            this.nativeViewProtected.updateForImage(nativeImage.size);
        }
        this.nativeViewProtected?.updateContentInsetsForImage();
    }
    get nativeImageViewProtected() {
        return this._image;
    }

    public initNativeView() {
        super.initNativeView();
        this.delegate = UIZoomImgScrollViewDelegateImpl.initWithOwner(new WeakRef<ZoomImg>(this));
        this.nativeViewProtected.delegate = this.delegate;
    }

    disposeNativeView() {
        super.disposeNativeView();
        this._image = null;
        this.nativeViewProtected.delegate = this.delegate = null;
    }

    notifyTransformChanged() {
        if (this.hasListeners(ZoomImageBase.transformEvent)) {
            this.notify({ eventName: ZoomImageBase.transformEvent, ios: this.nativeViewProtected.currentTransform });
        }
    }

    /**
     * Fits the image view to the scroll view while keeping the zoom and the visible center.
     * The image view is scaled by a transform: its frame must not be set again while zoomed, and the scroll view
     * can be resized while zoomed (eg the transformers of a pager resize its pages).
     */
    private layoutZoomView() {
        const scrollView = this.nativeViewProtected;
        const zoomView = this.nativeImageViewProtected;
        const size = scrollView.bounds.size;
        const zoomSize = zoomView.bounds.size;
        if (size.width <= 0 || size.height <= 0 || (zoomSize.width === size.width && zoomSize.height === size.height)) {
            return;
        }
        const scale = scrollView.zoomScale;
        let ratioX = 0.5;
        let ratioY = 0.5;
        if (zoomSize.width > 0 && zoomSize.height > 0) {
            const visibleCenter = scrollView.convertPointToView(CGPointMake(scrollView.bounds.origin.x + size.width / 2, scrollView.bounds.origin.y + size.height / 2), zoomView);
            ratioX = visibleCenter.x / zoomSize.width;
            ratioY = visibleCenter.y / zoomSize.height;
        }
        zoomView.transform = CGAffineTransformIdentity;
        zoomView.frame = CGRectMake(0, 0, size.width, size.height);
        zoomView.transform = CGAffineTransformMakeScale(scale, scale);
        zoomView.center = CGPointMake((size.width * scale) / 2, (size.height * scale) / 2);
        scrollView.contentSize = CGSizeMake(size.width * scale, size.height * scale);
        scrollView.contentOffset = CGPointMake(
            Math.max(0, Math.min(size.width * (scale - 1), ratioX * size.width * scale - size.width / 2)),
            Math.max(0, Math.min(size.height * (scale - 1), ratioY * size.height * scale - size.height / 2))
        );
    }

    public onLayout(left: number, top: number, right: number, bottom: number): void {
        super.onLayout(left, top, right, bottom);
        if (this.nativeViewProtected) {
            this.layoutZoomView();
            this.nativeViewProtected.updateContentInsetsForImage();
        }
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
