/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

/// <reference path="android-declarations.d.ts"/>

declare namespace com {
	export namespace nativescript {
		export namespace image {
			export class ZoomableMatrixImageView extends com.nativescript.image.MatrixImageView {
				public static class: java.lang.Class<com.nativescript.image.ZoomableMatrixImageView>;
				public mInteractionMatrix: globalAndroid.graphics.Matrix;
				public setPanSensitivity(sensitivity: number): void;
				public getPanSensitivity(): number;
				public setOnTapListener(l: com.nativescript.image.ZoomableMatrixImageView.OnTapListener): void;
				public isScaleFlingByZoom(): boolean;
				public constructor(context: globalAndroid.content.Context);
				public isIgnoreNextReset(): boolean;
				public getZoom(): number;
				public animatePointToCenter(viewX: number, viewY: number, durationMs: number, animated: boolean, listener: com.nativescript.image.ZoomableMatrixImageView.OnCenterAnimationListener): void;
				public setOverscrollDistance(px: number): void;
				public setCenterInterpolator(interpolator: globalAndroid.view.animation.Interpolator): void;
				public getBounceBackDuration(): number;
				public resetInteraction(): void;
				public zoomTo(targetScale: number, animated: boolean): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public getDoubleTapZoomFactor(): number;
				public setHoldCenterDuringAnimation(hold: boolean): void;
				public setImageRotation(after: number): void;
				public isHoldCenterDuringAnimation(): boolean;
				public setOnZoomChangeListener(l: com.nativescript.image.ZoomableMatrixImageView.OnZoomChangeListener): void;
				public setDoubleTapPanSensitivity(sensitivity: number): void;
				public cancelCenterAnimation(): void;
				public isDoubleTapCenteringEnabled(): boolean;
				public getCenterAnimationDuration(): number;
				public animatePointToPosition(viewX: number, viewY: number, destX: number, destY: number, durationMs: number, animated: boolean, listener: com.nativescript.image.ZoomableMatrixImageView.OnCenterAnimationListener): void;
				public getOverscrollDistance(): number;
				public setScaleFlingByZoom(enabled: boolean): void;
				public zoomToPointAndCenter(haveDrawablePt: number, t: number, t_1: number, this_: boolean, targetScale: number, focusX: java.lang.Runnable): void;
				public setBounceBackDuration(ms: number): void;
				public zoomToPoint(this_: number, targetScale: number, focusX: number, focusY: boolean, animated: java.lang.Runnable): void;
				public getDoubleTapPanSensitivity(): number;
				public setDoubleTapZoomFactor(factor: number): void;
				public setMinZoom(min: number): void;
				public onTouchEvent(dy: globalAndroid.view.MotionEvent): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public getMaxZoom(): number;
				public setFlingEnabled(enabled: boolean): void;
				public isFlingEnabled(): boolean;
				public setIgnoreNextReset(ignoreNextReset: boolean): void;
				public setDoubleTapCenteringEnabled(enabled: boolean): void;
				public setMaxZoom(max: number): void;
				public setCenterAnimationDuration(durationMs: number): void;
				public animateImageRotation(animator: number, this_: number): void;
				public getMinZoom(): number;
			}
			export namespace ZoomableMatrixImageView {
				export class GestureListener {
					public static class: java.lang.Class<com.nativescript.image.ZoomableMatrixImageView.GestureListener>;
					public onDoubleTap(e: globalAndroid.view.MotionEvent): boolean;
					public onSingleTapConfirmed(imgPt: globalAndroid.view.MotionEvent): boolean;
					public onDown(e: globalAndroid.view.MotionEvent): boolean;
				}
				export class OnCenterAnimationListener {
					public static class: java.lang.Class<com.nativescript.image.ZoomableMatrixImageView.OnCenterAnimationListener>;
					/**
					 * Constructs a new instance of the com.nativescript.image.ZoomableMatrixImageView$OnCenterAnimationListener interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						onCenterAnimationComplete(): void;
						onCenterAnimationCancel(): void;
					});
					public constructor();
					public onCenterAnimationCancel(): void;
					public onCenterAnimationComplete(): void;
				}
				export class OnTapListener {
					public static class: java.lang.Class<com.nativescript.image.ZoomableMatrixImageView.OnTapListener>;
					/**
					 * Constructs a new instance of the com.nativescript.image.ZoomableMatrixImageView$OnTapListener interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						onTap(param0: number, param1: number, param2: number, param3: number): void;
					});
					public constructor();
					public onTap(param0: number, param1: number, param2: number, param3: number): void;
				}
				export class OnZoomChangeListener {
					public static class: java.lang.Class<com.nativescript.image.ZoomableMatrixImageView.OnZoomChangeListener>;
					/**
					 * Constructs a new instance of the com.nativescript.image.ZoomableMatrixImageView$OnZoomChangeListener interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						onZoomChanged(param0: number): void;
					});
					public constructor();
					public onZoomChanged(param0: number): void;
				}
				export class ScaleListener {
					public static class: java.lang.Class<com.nativescript.image.ZoomableMatrixImageView.ScaleListener>;
					public onScale(detector: globalAndroid.view.ScaleGestureDetector): boolean;
				}
			}
		}
	}
}

