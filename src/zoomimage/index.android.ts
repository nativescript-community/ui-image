export * from './index-common';
import { ZoomImageBase, maxZoomScaleProperty, minZoomScaleProperty, zoomScaleProperty } from './index-common';

export class ZoomImg extends ZoomImageBase {
    mNeedUpdateHierarchy = true;
    //@ts-ignore
    nativeViewProtected: com.facebook.samples.zoomable.ZoomableDraweeView;
    //@ts-ignore
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

    [zoomScaleProperty.setNative](scale: number) {
        //possible?
        // if (this.nativeViewProtected) {
        //     this.nativeViewProtected.getZoomableController().setMinScaleFactor(scale);
        // }
    }

    [minZoomScaleProperty.setNative](scale: number) {
        this.nativeViewProtected.getZoomableController().setMinScaleFactor(scale);
    }

    [maxZoomScaleProperty.setNative](scale: number) {
        this.nativeViewProtected.getZoomableController().setMaxScaleFactor(scale);
    }
}
