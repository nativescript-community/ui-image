import { SharedTransition } from '@nativescript/core';
import type { Img } from './index.android';

/**
 * Shared element transitions with the @akylas/nativescript fork: the fork lets plugins register how to animate their own views.
 * On main NativeScript `registerElementHandler` does not exist and nothing is registered.
 *
 * A DraweeView keeps its scale type in its Fresco hierarchy: the platform transitions (ChangeBounds + ChangeImageTransform)
 * only resize it, and the image is drawn with the scale type of the start (eg a cropped thumbnail stretched in a fullscreen bounds)
 * until the end of the transition.
 * Here we start with the scale type of the view we leave and morph it to the own scale type of the view we enter,
 * following the size of the view while the transition resizes it.
 */
export function registerSharedTransitionHandler(ImgClass: typeof Img) {
    const register = (SharedTransition as any)?.registerElementHandler;
    if (typeof register !== 'function') {
        return;
    }
    register.call(SharedTransition, {
        handle({ from, to, progress, onEnd, skipImageTransform }) {
            if (!(from instanceof ImgClass) || !(to instanceof ImgClass)) {
                return false;
            }
            const fromView = from.nativeViewProtected;
            const toView = to.nativeViewProtected;
            const toHierarchy = toView?.getHierarchy();
            const fromType = fromView?.getHierarchy()?.getActualImageScaleType();
            const toType = toHierarchy?.getActualImageScaleType();
            if (!fromType || !toType || fromType.equals(toType)) {
                return false;
            }
            // the Fresco image is drawn by the hierarchy, whose bounds we update ourselves while the view is resized
            skipImageTransform();

            const fromMatrix = new android.graphics.Matrix();
            const toMatrix = new android.graphics.Matrix();
            const fromValues = Array.create('float', 9);
            const toValues = Array.create('float', 9);
            toHierarchy.setActualImageScaleType(
                new (com.facebook.drawee.drawable.ScalingUtils.ScaleType as any)({
                    getTransform(outTransform: android.graphics.Matrix, parentBounds: android.graphics.Rect, childWidth: number, childHeight: number, focusX: number, focusY: number) {
                        const p = progress(parentBounds.width(), parentBounds.height());
                        fromType.getTransform(fromMatrix, parentBounds, childWidth, childHeight, focusX, focusY);
                        toType.getTransform(toMatrix, parentBounds, childWidth, childHeight, focusX, focusY);
                        fromMatrix.getValues(fromValues);
                        toMatrix.getValues(toValues);
                        for (let i = 0; i < 9; i++) {
                            fromValues[i] = fromValues[i] + (toValues[i] - fromValues[i]) * p;
                        }
                        outTransform.setValues(fromValues);
                        return outTransform;
                    }
                })
            );

            // ImageView only updates the bounds of its drawable on layout, but a transition resizes without layout
            const preDrawListener = new android.view.ViewTreeObserver.OnPreDrawListener({
                onPreDraw() {
                    const drawable = toView.getDrawable();
                    if (drawable) {
                        const width = toView.getWidth() - toView.getPaddingLeft() - toView.getPaddingRight();
                        const height = toView.getHeight() - toView.getPaddingTop() - toView.getPaddingBottom();
                        const bounds = drawable.getBounds();
                        if (bounds.width() !== width || bounds.height() !== height) {
                            drawable.setBounds(0, 0, width, height);
                        }
                    }
                    return true;
                }
            });
            toView.getViewTreeObserver().addOnPreDrawListener(preDrawListener);

            // the DraweeView sets its own outline provider (for its border radius) at each size change,
            // which would replace the one which animates the corner radius
            const wasUsingOutlineProvider = toView['isUsingOutlineProvider'];
            toView['isUsingOutlineProvider'] = false;

            onEnd(() => {
                const observer = toView.getViewTreeObserver();
                if (observer.isAlive()) {
                    observer.removeOnPreDrawListener(preDrawListener);
                }
                toView['isUsingOutlineProvider'] = wasUsingOutlineProvider;
                toHierarchy.setActualImageScaleType(toType);
            });
            return true;
        }
    });
}
