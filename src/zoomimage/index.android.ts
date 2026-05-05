export * from './index-common';
import { ZoomImageBase, maxZoomScaleProperty, minZoomScaleProperty, zoomScaleProperty } from './index-common';

export class ZoomImg extends ZoomImageBase {
    mNeedUpdateHierarchy = true;
    nativeViewProtected: com.facebook.samples.zoomable.ZoomableDraweeView;
    nativeImageViewProtected: com.facebook.samples.zoomable.ZoomableDraweeView;
    public createNativeView() {
        //@ts-ignore
        const view = new com.facebook.samples.zoomable.ZoomableDraweeView(this._context);
        view.setIsLongpressEnabled(false);
        view.setAllowTouchInterceptionWhileZoomed(false);
        //@ts-ignore
        view.setTapListener(new com.facebook.samples.zoomable.DoubleTapGestureListener(view));
        return view;
    }
    getController() {
        return this.nativeViewProtected?.getZoomableController() as com.facebook.samples.zoomable.DefaultZoomableController;
    }

    disposeNativeView(): void {
        super.disposeNativeView();
        this.detachTransformListenerIfNecessary(true);
    }
    initNativeView(): void {
        super.initNativeView();
        this.attachTransformListenerIfNecessary();
    }

    private _transformChangeCount = 0;
    private _nTransformListener: com.facebook.samples.zoomable.ZoomableDraweeView.TransformListener;
    public addEventListener(arg: string, callback: any, thisArg?: any) {
        super.addEventListener(arg, callback, thisArg);
        if (arg === ZoomImageBase.transformEvent) {
            this._transformChangeCount++;
            this.attachTransformListenerIfNecessary();
        }
    }

    public removeEventListener(arg: string, callback: any, thisArg?: any) {
        super.removeEventListener(arg, callback, thisArg);

        if (arg === ZoomImageBase.transformEvent) {
            this._transformChangeCount--;
            this.detachTransformListenerIfNecessary();
        }
    }

    attachTransformListenerIfNecessary() {
        const nativeView = this.nativeViewProtected;
        if (this._transformChangeCount > 0 && nativeView && !this._nTransformListener) {
            this._nTransformListener = new com.facebook.samples.zoomable.ZoomableDraweeView.TransformListener({
                onTransformChanged: this.onTransformChanged.bind(this)
            });
            nativeView.addTransformListener(this._nTransformListener);
        }
    }
    onTransformChanged(matrix: android.graphics.Matrix) {
        this.notify({ eventName: ZoomImageBase.transformEvent, android: matrix });
    }
    detachTransformListenerIfNecessary(force = false) {
        const nativeView = this.nativeViewProtected;
        if (force || (this._transformChangeCount === 0 && nativeView)) {
            if (this._nTransformListener) {
                this.nativeView.removeTransformListener(this._nTransformListener);
                this._nTransformListener = null;
            }
        }
    }

    updateImageUri() {
        // this prevents the controller from reseting the current transform
        this.getController().ignoreNextResetUntilEnabled = true;
        return super.updateImageUri();
    }
    [zoomScaleProperty.setNative](scale: number) {
        //possible?
        // if (this.nativeViewProtected) {
        //     this.nativeViewProtected.getZoomableController().setMinScaleFactor(scale);
        // }
        this.getController().zoomToPoint(scale, new android.graphics.PointF(0, 0), new android.graphics.PointF(0, 0));
    }
    setZoom(scale: number, animated = true, point: { x; y } = { x: 0, y: 0 }) {
        this.getController().zoomToPoint(scale, new android.graphics.PointF(point.x, point.y), new android.graphics.PointF(0, 0));
    }
    [minZoomScaleProperty.setNative](scale: number) {
        this.getController().setMinScaleFactor(scale);
    }

    [maxZoomScaleProperty.setNative](scale: number) {
        this.getController().setMaxScaleFactor(scale);
    }
}
