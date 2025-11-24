export * from './index-common';
import { ZoomImageBase, maxZoomScaleProperty, minZoomScaleProperty, zoomScaleProperty } from './index-common';

export class ZoomImg extends ZoomImageBase {
    nativeViewProtected: com.nativescript.image.ZoomableMatrixImageView;
    nativeImageViewProtected: com.nativescript.image.ZoomableMatrixImageView;

    public createNativeView() {
        return new com.nativescript.image.ZoomableMatrixImageView(this._context);
    }

    public initNativeView() {
        super.initNativeView();

        // Set up TouchImageView zoom listener
        const owner = new WeakRef(this);

        // TouchImageView has setOnTouchImageViewListener
        this.nativeViewProtected.setOnZoomChangeListener(
            new com.nativescript.image.ZoomableMatrixImageView.OnZoomChangeListener({
                onZoomChanged(zoom) {
                    const instance = owner.get();
                    if (instance) {
                        instance.notifyZoomChanged(zoom);
                    }
                }
            })
        );
    }

    public disposeNativeView() {
        this.nativeViewProtected.setOnZoomChangeListener(null);
        // Clean up
        // if (this.nativeViewProtected) {
        //     this.nativeViewProtected.setOnTouchImageViewListener(null);
        // }
        super.disposeNativeView();
    }

    updateImageUri() {
        // Prevent zoom reset when updating image URI
        if (this.nativeViewProtected) {
            this.nativeViewProtected.setIgnoreNextReset(true);
        }
        return super.updateImageUri();
    }

    [zoomScaleProperty.setNative](scale: number) {
        this.nativeViewProtected?.zoomTo(scale, false);
    }

    setZoom(scale: number, animated = true, point: { x: number; y: number } = { x: 0, y: 0 }) {
        if (this.nativeViewProtected) {
            if (point.x === 0 && point.y === 0) {
                // Zoom to center
                this.nativeViewProtected.zoomTo(scale, animated);
            } else {
                // Zoom to specific point
                this.nativeViewProtected.zoomToPoint(scale, point.x, point.y, animated);
            }
        }
    }

    getZoom(): number {
        if (this.nativeViewProtected) {
            return this.nativeViewProtected.getZoom();
        }
        return 1.0;
    }
    [minZoomScaleProperty.setNative](scale: number) {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.setMinZoom(scale);
        }
    }

    [maxZoomScaleProperty.setNative](scale: number) {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.setMaxZoom(scale);
        }
    }

    private notifyZoomChanged(scale: number) {
        const eventName = 'zoomChanged';
        if (this.hasListeners(eventName)) {
            this.notify({
                eventName,
                object: this,
                scale
            });
        }
    }

    // Override updateViewSize to work with TouchImageView
    // updateViewSize(drawable: android.graphics.drawable.Drawable) {
    //     const imageView = this.nativeViewProtected;
    //     if (!imageView || !drawable) {
    //         return;
    //     }

    //     let width = drawable.getIntrinsicWidth();
    //     let height = drawable.getIntrinsicHeight();

    //     // Consider rotation when setting image size
    //     if (this.imageRotation && Math.abs(this.imageRotation % 180) === 90) {
    //         const temp = width;
    //         width = height;
    //         height = temp;
    //     }

    //     if (width > 0 && height > 0) {
    //         if (!this.aspectRatio) {
    //             const ratio = width / height;
    //             imageView.setAspectRatio(ratio);
    //         } else {
    //             imageView.setAspectRatio(this.aspectRatio);
    //         }
    //     } else if (this.aspectRatio) {
    //         imageView.setAspectRatio(this.aspectRatio);
    //     }
    // }
}
