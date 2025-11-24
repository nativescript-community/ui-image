/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

/// <reference path="android-declarations.d.ts"/>

declare namespace com {
	export namespace ortiz {
		export namespace touchview {
			export class BuildConfig {
				public static class: java.lang.Class<com.ortiz.touchview.BuildConfig>;
				/**
				* 0
				*/
				public static DEBUG: boolean;
				/**
				* "com.ortiz.touchview"
				*/
				public static LIBRARY_PACKAGE_NAME: string;
				/**
				* "release"
				*/
				public static BUILD_TYPE: string;
				/**
				* "null"
				*/
				public static VERSION: string;
				public constructor();
			}
			export class FixedPixel {
				public static class: java.lang.Class<com.ortiz.touchview.FixedPixel>;
				public static CENTER: com.ortiz.touchview.FixedPixel;
				public static TOP_LEFT: com.ortiz.touchview.FixedPixel;
				public static BOTTOM_RIGHT: com.ortiz.touchview.FixedPixel;
				public static values(): androidNative.Array<com.ortiz.touchview.FixedPixel>;
				public static getEntries(): any;
				public static valueOf(value: string): com.ortiz.touchview.FixedPixel;
			}
			export class ImageActionState {
				public static class: java.lang.Class<com.ortiz.touchview.ImageActionState>;
				public static NONE: com.ortiz.touchview.ImageActionState;
				public static DRAG: com.ortiz.touchview.ImageActionState;
				public static ZOOM: com.ortiz.touchview.ImageActionState;
				public static FLING: com.ortiz.touchview.ImageActionState;
				public static ANIMATE_ZOOM: com.ortiz.touchview.ImageActionState;
				public static getEntries(): any;
				public static values(): androidNative.Array<com.ortiz.touchview.ImageActionState>;
				public static valueOf(value: string): com.ortiz.touchview.ImageActionState;
			}
			export class OnTouchCoordinatesListener {
				public static class: java.lang.Class<com.ortiz.touchview.OnTouchCoordinatesListener>;
				/**
				 * Constructs a new instance of the com.ortiz.touchview.OnTouchCoordinatesListener interface with the provided implementation.
				 * An empty constructor exists calling super().
				 */
				public constructor(implementation: {
					onTouchCoordinate(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent, param2: globalAndroid.graphics.PointF): void;
				});
				public constructor();
				public onTouchCoordinate(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent, param2: globalAndroid.graphics.PointF): void;
			}
			export class OnTouchImageViewListener {
				public static class: java.lang.Class<com.ortiz.touchview.OnTouchImageViewListener>;
				/**
				 * Constructs a new instance of the com.ortiz.touchview.OnTouchImageViewListener interface with the provided implementation.
				 * An empty constructor exists calling super().
				 */
				public constructor(implementation: {
					onMove(): void;
				});
				public constructor();
				public onMove(): void;
			}
			export class OnZoomFinishedListener {
				public static class: java.lang.Class<com.ortiz.touchview.OnZoomFinishedListener>;
				/**
				 * Constructs a new instance of the com.ortiz.touchview.OnZoomFinishedListener interface with the provided implementation.
				 * An empty constructor exists calling super().
				 */
				public constructor(implementation: {
					onZoomFinished(): void;
				});
				public constructor();
				public onZoomFinished(): void;
			}
			export class TouchImageView {
				public static class: java.lang.Class<com.ortiz.touchview.TouchImageView>;
				/**
				* -1.0
				*/
				public static AUTOMATIC_MIN_ZOOM: number;
				public getScaleType(): globalAndroid.widget.ImageView.ScaleType;
				public constructor(context: globalAndroid.content.Context);
				public transformCoordTouchToBitmap(origH: number, transX: number, transY: boolean): globalAndroid.graphics.PointF;
				public getDoubleTapScale(): number;
				public setOnTouchCoordinatesListener(onTouchCoordinatesListener: com.ortiz.touchview.OnTouchCoordinatesListener): void;
				public setOrientationChangeFixedPixel(orientationChangeFixedPixel: com.ortiz.touchview.FixedPixel): void;
				public setImageURI(uri: globalAndroid.net.Uri): void;
				public setZoomAnimated(this_: number, scale: number, focusX: number, focusY: number): void;
				public constructor(this_: globalAndroid.content.Context, context: globalAndroid.util.AttributeSet, attrs: number);
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public setZoom(this_: com.ortiz.touchview.TouchImageView): void;
				public savePreviousImageValues(): void;
				public resetZoom(): void;
				public setZoom(scale: number, focusX: number, focusY: number, scaleType: globalAndroid.widget.ImageView.ScaleType): void;
				public getScrollPosition(): globalAndroid.graphics.PointF;
				public canScrollVertically(this_: number): boolean;
				public setImageBitmap(bm: globalAndroid.graphics.Bitmap): void;
				public setImageResource(resId: number): void;
				public setDoubleTapScale(doubleTapScale: number): void;
				public resetZoomAnimated(): void;
				public setSuperZoomEnabled(superZoomEnabled: boolean): void;
				public setViewSizeChangeFixedPixel(viewSizeChangeFixedPixel: com.ortiz.touchview.FixedPixel): void;
				public canScrollHorizontally(this_: number): boolean;
				public setOnDoubleTapListener(onDoubleTapListener: globalAndroid.view.GestureDetector.OnDoubleTapListener): void;
				public setZoom(scale: number, focusX: number, focusY: number): void;
				public setZoomEnabled(zoomEnabled: boolean): void;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
				public setScrollPosition(focusX: number, focusY: number): void;
				public setMinZoom(heightRatio: number): void;
				public setZoomAnimated(this_: number, scale: number, focusX: number, focusY: com.ortiz.touchview.OnZoomFinishedListener): void;
				public isSuperZoomEnabled(): boolean;
				public onRestoreInstanceState(this_: globalAndroid.os.Parcelable): void;
				public setZoomAnimated(scale: number, focusX: number, focusY: number): void;
				public isZoomEnabled(): boolean;
				public setScaleType(type: globalAndroid.widget.ImageView.ScaleType): void;
				public setOnTouchImageViewListener(onTouchImageViewListener: com.ortiz.touchview.OnTouchImageViewListener): void;
				public setRotateImageToFitScreen(rotateImageToFitScreen: boolean): void;
				public setMaxZoomRatio(max: number): void;
				public getCurrentZoom(): number;
				public setZoomAnimated(this_: number, scale: number, focusX: number, focusY: number, zoomTimeMs: com.ortiz.touchview.OnZoomFinishedListener): void;
				public onConfigurationChanged(this_: globalAndroid.content.res.Configuration): void;
				public transformCoordBitmapToTouch(origH: number, px: number): globalAndroid.graphics.PointF;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public setOnTouchListener(onTouchListener: globalAndroid.view.View.OnTouchListener): void;
				public onMeasure(drawableWidth: number, drawableHeight: number): void;
				public setZoom(scale: number): void;
				public isZoomed(): boolean;
				public getMaxZoom(): number;
				public getZoomedRect(): globalAndroid.graphics.RectF;
				public getOrientationChangeFixedPixel(): com.ortiz.touchview.FixedPixel;
				public setImageDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
				public setMaxZoom(max: number): void;
				public getViewSizeChangeFixedPixel(): com.ortiz.touchview.FixedPixel;
				public getMinZoom(): number;
			}
			export namespace TouchImageView {
				export class AnimatedZoom {
					public static class: java.lang.Class<com.ortiz.touchview.TouchImageView.AnimatedZoom>;
					public setListener(listener: com.ortiz.touchview.OnZoomFinishedListener): void;
					public run(): void;
					public constructor(this_0: number, targetZoom: globalAndroid.graphics.PointF, focus: number);
				}
				export namespace Companion {
				}
				export class CompatScroller {
					public static class: java.lang.Class<com.ortiz.touchview.TouchImageView.CompatScroller>;
					public setOverScroller(overScroller: globalAndroid.widget.OverScroller): void;
					public isFinished(): boolean;
					public getOverScroller(): globalAndroid.widget.OverScroller;
					public constructor(this_0: globalAndroid.content.Context);
					public forceFinished(finished: boolean): void;
					public getCurrX(): number;
					public getCurrY(): number;
					public fling(startX: number, startY: number, velocityX: number, velocityY: number, minX: number, maxX: number, minY: number, maxY: number): void;
					public computeScrollOffset(): boolean;
				}
				export class DoubleTapZoom {
					public static class: java.lang.Class<com.ortiz.touchview.TouchImageView.DoubleTapZoom>;
					public run(): void;
					public constructor(this_: number, this_0: number, targetZoom: number, focusX: boolean);
				}
				export class Fling {
					public static class: java.lang.Class<com.ortiz.touchview.TouchImageView.Fling>;
					public getScroller(): com.ortiz.touchview.TouchImageView.CompatScroller;
					public setCurrX(currX: number): void;
					public cancelFling(): void;
					public getCurrX(): number;
					public run(): void;
					public getCurrY(): number;
					public setScroller(scroller: com.ortiz.touchview.TouchImageView.CompatScroller): void;
					public setCurrY(currY: number): void;
					public constructor(startY: number, minX: number);
				}
				export class GestureListener {
					public static class: java.lang.Class<com.ortiz.touchview.TouchImageView.GestureListener>;
					public onDoubleTapEvent(e: globalAndroid.view.MotionEvent): boolean;
					public onFling(it: globalAndroid.view.MotionEvent, this_: globalAndroid.view.MotionEvent, e1: number, e2: number): boolean;
					public constructor(this_0: com.ortiz.touchview.TouchImageView);
					public onSingleTapConfirmed(e: globalAndroid.view.MotionEvent): boolean;
					public onDoubleTap(it: globalAndroid.view.MotionEvent): boolean;
					public onLongPress(e: globalAndroid.view.MotionEvent): void;
				}
				export class PrivateOnTouchListener {
					public static class: java.lang.Class<com.ortiz.touchview.TouchImageView.PrivateOnTouchListener>;
					public onTouch(deltaY: globalAndroid.view.View, fixTransX: globalAndroid.view.MotionEvent): boolean;
					public constructor(this_0: com.ortiz.touchview.TouchImageView);
				}
				export class ScaleListener {
					public static class: java.lang.Class<com.ortiz.touchview.TouchImageView.ScaleListener>;
					public onScaleEnd(animateToZoomBoundary: globalAndroid.view.ScaleGestureDetector): void;
					public onScaleBegin(detector: globalAndroid.view.ScaleGestureDetector): boolean;
					public constructor(this_0: com.ortiz.touchview.TouchImageView);
					public onScale(detector: globalAndroid.view.ScaleGestureDetector): boolean;
				}
				export class WhenMappings {
					public static class: java.lang.Class<com.ortiz.touchview.TouchImageView.WhenMappings>;
				}
			}
			export class ZoomVariables {
				public static class: java.lang.Class<com.ortiz.touchview.ZoomVariables>;
				public getScale(): number;
				public getScaleType(): globalAndroid.widget.ImageView.ScaleType;
				public component2(): number;
				public component1(): number;
				public component4(): globalAndroid.widget.ImageView.ScaleType;
				public constructor(scale: number, focusX: number, focusY: number, scaleType: globalAndroid.widget.ImageView.ScaleType);
				public getFocusY(): number;
				public setFocusY(focusY: number): void;
				public toString(): string;
				public setScaleType(scaleType: globalAndroid.widget.ImageView.ScaleType): void;
				public setScale(scale: number): void;
				public component3(): number;
				public equals(other: any): boolean;
				public hashCode(): number;
				public copy(scale: number, focusX: number, focusY: number, scaleType: globalAndroid.widget.ImageView.ScaleType): com.ortiz.touchview.ZoomVariables;
				public getFocusX(): number;
				public setFocusX(focusX: number): void;
			}
		}
	}
}

