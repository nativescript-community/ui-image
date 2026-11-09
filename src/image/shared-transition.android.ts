import { SharedTransition } from '@nativescript/core';
import type { Img } from './index.android';

/**
 * Shared element transitions with the @akylas/nativescript fork: the fork lets plugins register how to animate their own views.
 * On main NativeScript `registerElementHandler` does not exist and nothing is registered.
 *
 * A MatrixImageView applies its scale type itself: the platform transitions (ChangeBounds + ChangeImageTransform)
 * only resize it, and the image is drawn with the scale type of the start (eg a cropped thumbnail stretched in a fullscreen bounds)
 * until the end of the transition.
 * Here we start with the scale type of the view we leave and morph it to the scale type of the view we enter,
 * following the size of the view while the transition resizes it.
 */
export function registerSharedTransitionHandler(ImgClass: typeof Img) {
    const register = (SharedTransition as any)?.registerElementHandler;
    if (typeof register !== 'function') {
        return;
    }
    register.call(SharedTransition, {
        handle({ from, onEnd, progress, skipImageTransform, to }) {
            if (!(from instanceof ImgClass) || !(to instanceof ImgClass)) {
                return false;
            }
            const fromView = from.nativeViewProtected;
            const toView = to.nativeViewProtected;
            const fromType = fromView?.getAppliedScaleType();
            const toType = toView?.getAppliedScaleType();
            if (!fromType || !toType || fromType.toString() === toType.toString()) {
                return false;
            }
            // the image matrix is computed by the view, we update it ourselves while the view is resized
            skipImageTransform();
            toView.setScaleTypeBlend(
                fromType,
                toType,
                new com.nativescript.image.MatrixImageView.BlendProgressProvider({
                    getProgress: (width: number, height: number) => progress(width, height)
                })
            );

            // the view sets its own outline provider (for its border radius) at each size change,
            // which would replace the one which animates the corner radius
            const wasUsingOutlineProvider = toView.isUsingOutlineProvider;
            toView.isUsingOutlineProvider = false;

            onEnd(() => {
                toView.isUsingOutlineProvider = wasUsingOutlineProvider;
                toView.setScaleTypeBlend(null, null, null);
            });
            return true;
        }
    });
}
