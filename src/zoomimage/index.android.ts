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
