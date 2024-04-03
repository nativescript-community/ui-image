/// <reference path="./fresco.d.ts" />
/// <reference path="./fresco-processors.d.ts" />

declare namespace com {
    export namespace nativescript {
        export namespace image {
            class DraweeView extends facebook.drawee.view.SimpleDraweeView {
                imageWidth: number;
                imageHeight: number;
            }
            class ScalingBlurPostprocessor extends facebook.imagepipeline.request.BasePostprocessor {
                public constructor(iterations: number, blurRadius: number, scaleRatio: number);
            }
            class BaseDataSubscriberListener {
                public constructor(implementation: { onNewResult(datasource: facebook.datasource.DataSource<any>); onFailure(datasource: facebook.datasource.DataSource<any>) });
                public onNewResult(datasource: facebook.datasource.DataSource<any>);
                public onFailure(datasource: facebook.datasource.DataSource<any>);
            }
            class BaseDataSubscriber extends facebook.datasource.BaseDataSubscriber<any> {
                public constructor(listener: BaseDataSubscriberListener);
            }
        }
    }
}

/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

/// <reference path="android-declarations.d.ts"/>

declare namespace com {
    export namespace facebook {
        export namespace samples {
            export namespace gestures {
                export class MultiPointerGestureDetector extends java.lang.Object {
                    public static class: java.lang.Class<gestures.MultiPointerGestureDetector>;
                    public reset(): void;
                    public setListener(param0: gestures.MultiPointerGestureDetector.Listener): void;
                    public restartGesture(): void;
                    public static newInstance(): gestures.MultiPointerGestureDetector;
                    public getCurrentY(): androidNative.Array<number>;
                    public getCurrentX(): androidNative.Array<number>;
                    public getStartY(): androidNative.Array<number>;
                    public getPointerCount(): number;
                    public shouldStartGesture(): boolean;
                    public getNewPointerCount(): number;
                    public constructor();
                    public getStartX(): androidNative.Array<number>;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public isGestureInProgress(): boolean;
                }
                export namespace MultiPointerGestureDetector {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<gestures.MultiPointerGestureDetector.Listener>;
                        /**
                         * Constructs a new instance of the com.facebook.samples.gestures.MultiPointerGestureDetector$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onGestureBegin(param0: gestures.MultiPointerGestureDetector): void;
                            onGestureUpdate(param0: gestures.MultiPointerGestureDetector): void;
                            onGestureEnd(param0: gestures.MultiPointerGestureDetector): void;
                        });
                        public constructor();
                        public onGestureBegin(param0: gestures.MultiPointerGestureDetector): void;
                        public onGestureUpdate(param0: gestures.MultiPointerGestureDetector): void;
                        public onGestureEnd(param0: gestures.MultiPointerGestureDetector): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace samples {
            export namespace gestures {
                export class TransformGestureDetector extends java.lang.Object implements MultiPointerGestureDetector.Listener {
                    public static class: java.lang.Class<gestures.TransformGestureDetector>;
                    public constructor(param0: MultiPointerGestureDetector);
                    public setListener(param0: gestures.TransformGestureDetector.Listener): void;
                    public onGestureEnd(param0: MultiPointerGestureDetector): void;
                    public reset(): void;
                    public static newInstance(): gestures.TransformGestureDetector;
                    public getPivotY(): number;
                    public restartGesture(): void;
                    public getTranslationY(): number;
                    public getPointerCount(): number;
                    public getNewPointerCount(): number;
                    public getRotation(): number;
                    public getPivotX(): number;
                    public onGestureBegin(param0: MultiPointerGestureDetector): void;
                    public getTranslationX(): number;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public isGestureInProgress(): boolean;
                    public getScale(): number;
                    public onGestureUpdate(param0: MultiPointerGestureDetector): void;
                }
                export namespace TransformGestureDetector {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<gestures.TransformGestureDetector.Listener>;
                        /**
                         * Constructs a new instance of the com.facebook.samples.gestures.TransformGestureDetector$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onGestureBegin(param0: gestures.TransformGestureDetector): void;
                            onGestureUpdate(param0: gestures.TransformGestureDetector): void;
                            onGestureEnd(param0: gestures.TransformGestureDetector): void;
                        });
                        public constructor();
                        public onGestureBegin(param0: gestures.TransformGestureDetector): void;
                        public onGestureEnd(param0: gestures.TransformGestureDetector): void;
                        public onGestureUpdate(param0: gestures.TransformGestureDetector): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace samples {
            export namespace zoomable {
                export abstract class AbstractAnimatedZoomableController extends DefaultZoomableController {
                    public static class: java.lang.Class<zoomable.AbstractAnimatedZoomableController>;
                    public isIdentity(): boolean;
                    public isAnimating(): boolean;
                    public wasTransformCorrected(): boolean;
                    public computeHorizontalScrollRange(): number;
                    public getStartValues(): androidNative.Array<number>;
                    public setViewBounds(param0: globalAndroid.graphics.RectF): void;
                    public calculateInterpolation(param0: globalAndroid.graphics.Matrix, param1: number): void;
                    public setTransform(param0: globalAndroid.graphics.Matrix): void;
                    public setImageBounds(param0: globalAndroid.graphics.RectF): void;
                    public getScaleFactor(): number;
                    public setAnimating(param0: boolean): void;
                    public computeVerticalScrollExtent(): number;
                    public setListener(param0: ZoomableController.Listener): void;
                    public computeHorizontalScrollExtent(): number;
                    public getStopValues(): androidNative.Array<number>;
                    public isEnabled(): boolean;
                    public onGestureBegin(param0: gestures.TransformGestureDetector): void;
                    public setEnabled(param0: boolean): void;
                    public reset(): void;
                    public stopAnimation(): void;
                    public computeVerticalScrollRange(): number;
                    public zoomToPoint(param0: number, param1: globalAndroid.graphics.PointF, param2: globalAndroid.graphics.PointF): void;
                    public onGestureUpdate(param0: gestures.TransformGestureDetector): void;
                    public getTransform(): globalAndroid.graphics.Matrix;
                    public computeVerticalScrollOffset(): number;
                    public constructor(param0: gestures.TransformGestureDetector);
                    public getLogTag(): java.lang.Class<any>;
                    public setTransform(param0: globalAndroid.graphics.Matrix, param1: number, param2: java.lang.Runnable): void;
                    public zoomToPoint(param0: number, param1: globalAndroid.graphics.PointF, param2: globalAndroid.graphics.PointF, param3: number, param4: number, param5: java.lang.Runnable): void;
                    public getWorkingTransform(): globalAndroid.graphics.Matrix;
                    public setTransformAnimated(param0: globalAndroid.graphics.Matrix, param1: number, param2: java.lang.Runnable): void;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public computeHorizontalScrollOffset(): number;
                    public onGestureEnd(param0: gestures.TransformGestureDetector): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace samples {
            export namespace zoomable {
                export class AnimatedZoomableController extends AbstractAnimatedZoomableController {
                    public static class: java.lang.Class<zoomable.AnimatedZoomableController>;
                    public isIdentity(): boolean;
                    public wasTransformCorrected(): boolean;
                    public computeHorizontalScrollRange(): number;
                    public setViewBounds(param0: globalAndroid.graphics.RectF): void;
                    public static newInstance(): zoomable.AnimatedZoomableController;
                    public setImageBounds(param0: globalAndroid.graphics.RectF): void;
                    public getScaleFactor(): number;
                    public computeVerticalScrollExtent(): number;
                    public setListener(param0: ZoomableController.Listener): void;
                    public computeHorizontalScrollExtent(): number;
                    public isEnabled(): boolean;
                    public onGestureBegin(param0: gestures.TransformGestureDetector): void;
                    public setEnabled(param0: boolean): void;
                    public stopAnimation(): void;
                    public computeVerticalScrollRange(): number;
                    public onGestureUpdate(param0: gestures.TransformGestureDetector): void;
                    public getTransform(): globalAndroid.graphics.Matrix;
                    public computeVerticalScrollOffset(): number;
                    public constructor(param0: gestures.TransformGestureDetector);
                    public getLogTag(): java.lang.Class<any>;
                    public static newInstance(): DefaultZoomableController;
                    public setTransformAnimated(param0: globalAndroid.graphics.Matrix, param1: number, param2: java.lang.Runnable): void;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public computeHorizontalScrollOffset(): number;
                    public onGestureEnd(param0: gestures.TransformGestureDetector): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace samples {
            export namespace zoomable {
                export class DefaultZoomableController extends java.lang.Object implements ZoomableController, gestures.TransformGestureDetector.Listener {
                    public static class: java.lang.Class<zoomable.DefaultZoomableController>;
                    public static LIMIT_NONE: number = 0;
                    public static LIMIT_TRANSLATION_X: number = 1;
                    public static LIMIT_TRANSLATION_Y: number = 2;
                    public static LIMIT_SCALE: number = 4;
                    public static LIMIT_ALL: number = 7;
                    public mapViewToImage(param0: globalAndroid.graphics.PointF): globalAndroid.graphics.PointF;
                    public isIdentity(): boolean;
                    public wasTransformCorrected(): boolean;
                    public setMinScaleFactor(param0: number): void;
                    public computeHorizontalScrollRange(): number;
                    public setGestureZoomEnabled(param0: boolean): void;
                    public getMinScaleFactor(): number;
                    public setViewBounds(param0: globalAndroid.graphics.RectF): void;
                    public getImageBoundsListener(): zoomable.DefaultZoomableController.ImageBoundsListener;
                    public mapImageToView(param0: globalAndroid.graphics.PointF): globalAndroid.graphics.PointF;
                    public setImageBounds(param0: globalAndroid.graphics.RectF): void;
                    public setTransform(param0: globalAndroid.graphics.Matrix): void;
                    public getMaxScaleFactor(): number;
                    public getScaleFactor(): number;
                    public computeVerticalScrollExtent(): number;
                    public setListener(param0: ZoomableController.Listener): void;
                    public isGestureZoomEnabled(): boolean;
                    public computeHorizontalScrollExtent(): number;
                    public isEnabled(): boolean;
                    public getImageBounds(): globalAndroid.graphics.RectF;
                    public onGestureBegin(param0: gestures.TransformGestureDetector): void;
                    public setScaleEnabled(param0: boolean): void;
                    public calculateZoomToPointTransform(
                        param0: globalAndroid.graphics.Matrix,
                        param1: number,
                        param2: globalAndroid.graphics.PointF,
                        param3: globalAndroid.graphics.PointF,
                        param4: number
                    ): boolean;
                    public setEnabled(param0: boolean): void;
                    public reset(): void;
                    public getImageRelativeToViewAbsoluteTransform(param0: globalAndroid.graphics.Matrix): void;
                    public computeVerticalScrollRange(): number;
                    public isScaleEnabled(): boolean;
                    public setMaxScaleFactor(param0: number): void;
                    public getViewBounds(): globalAndroid.graphics.RectF;
                    public zoomToPoint(param0: number, param1: globalAndroid.graphics.PointF, param2: globalAndroid.graphics.PointF): void;
                    public onGestureUpdate(param0: gestures.TransformGestureDetector): void;
                    public getTransform(): globalAndroid.graphics.Matrix;
                    public computeVerticalScrollOffset(): number;
                    public constructor(param0: gestures.TransformGestureDetector);
                    public isRotationEnabled(): boolean;
                    public calculateGestureTransform(param0: globalAndroid.graphics.Matrix, param1: number): boolean;
                    public setImageBoundsListener(param0: zoomable.DefaultZoomableController.ImageBoundsListener): void;
                    public static newInstance(): zoomable.DefaultZoomableController;
                    public getListener(): ZoomableController.Listener;
                    public setRotationEnabled(param0: boolean): void;
                    public setTranslationEnabled(param0: boolean): void;
                    public getDetector(): gestures.TransformGestureDetector;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public isTranslationEnabled(): boolean;
                    public computeHorizontalScrollOffset(): number;
                    public onGestureEnd(param0: gestures.TransformGestureDetector): void;
                }
                export namespace DefaultZoomableController {
                    export class ImageBoundsListener extends java.lang.Object {
                        public static class: java.lang.Class<zoomable.DefaultZoomableController.ImageBoundsListener>;
                        /**
                         * Constructs a new instance of the com.facebook.samples.zoomable.DefaultZoomableController$ImageBoundsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onImageBoundsSet(param0: globalAndroid.graphics.RectF): void });
                        public constructor();
                        public onImageBoundsSet(param0: globalAndroid.graphics.RectF): void;
                    }
                    export class LimitFlag extends java.lang.Object implements java.lang.annotation.Annotation {
                        public static class: java.lang.Class<zoomable.DefaultZoomableController.LimitFlag>;
                        /**
                         * Constructs a new instance of the com.facebook.samples.zoomable.DefaultZoomableController$LimitFlag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { equals(param0: any): boolean; hashCode(): number; toString(): string; annotationType(): java.lang.Class<any> });
                        public constructor();
                        public equals(param0: any): boolean;
                        public hashCode(): number;
                        public toString(): string;
                        public annotationType(): java.lang.Class<any>;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace samples {
            export namespace zoomable {
                export class DoubleTapGestureListener extends globalAndroid.view.GestureDetector.SimpleOnGestureListener {
                    public static class: java.lang.Class<zoomable.DoubleTapGestureListener>;
                    public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
                    public onDown(param0: globalAndroid.view.MotionEvent): boolean;
                    public constructor(param0: ZoomableDraweeView);
                    public onDoubleTap(param0: globalAndroid.view.MotionEvent): boolean;
                    public constructor();
                    public onSingleTapConfirmed(param0: globalAndroid.view.MotionEvent): boolean;
                    public onContextClick(param0: globalAndroid.view.MotionEvent): boolean;
                    public onShowPress(param0: globalAndroid.view.MotionEvent): void;
                    public onDoubleTapEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public onLongPress(param0: globalAndroid.view.MotionEvent): void;
                    public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
                    public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace samples {
            export namespace zoomable {
                export class GestureListenerWrapper extends globalAndroid.view.GestureDetector.SimpleOnGestureListener {
                    public static class: java.lang.Class<zoomable.GestureListenerWrapper>;
                    public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
                    public onDown(param0: globalAndroid.view.MotionEvent): boolean;
                    public onDoubleTap(param0: globalAndroid.view.MotionEvent): boolean;
                    public constructor();
                    public setListener(param0: globalAndroid.view.GestureDetector.SimpleOnGestureListener): void;
                    public onSingleTapConfirmed(param0: globalAndroid.view.MotionEvent): boolean;
                    public onShowPress(param0: globalAndroid.view.MotionEvent): void;
                    public onContextClick(param0: globalAndroid.view.MotionEvent): boolean;
                    public onDoubleTapEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public onLongPress(param0: globalAndroid.view.MotionEvent): void;
                    public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
                    public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace samples {
            export namespace zoomable {
                export class MultiGestureListener extends globalAndroid.view.GestureDetector.SimpleOnGestureListener {
                    public static class: java.lang.Class<zoomable.MultiGestureListener>;
                    public onDoubleTap(param0: globalAndroid.view.MotionEvent): boolean;
                    public onContextClick(param0: globalAndroid.view.MotionEvent): boolean;
                    public onLongPress(param0: globalAndroid.view.MotionEvent): void;
                    public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
                    public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
                    public onDown(param0: globalAndroid.view.MotionEvent): boolean;
                    public constructor();
                    public removeListener(param0: globalAndroid.view.GestureDetector.SimpleOnGestureListener): void;
                    public onSingleTapConfirmed(param0: globalAndroid.view.MotionEvent): boolean;
                    public onShowPress(param0: globalAndroid.view.MotionEvent): void;
                    public addListener(param0: globalAndroid.view.GestureDetector.SimpleOnGestureListener): void;
                    public onDoubleTapEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace samples {
            export namespace zoomable {
                export class MultiZoomableControllerListener extends java.lang.Object implements ZoomableController.Listener {
                    public static class: java.lang.Class<zoomable.MultiZoomableControllerListener>;
                    public removeListener(param0: ZoomableController.Listener): void;
                    public addListener(param0: ZoomableController.Listener): void;
                    public constructor();
                    public onTransformBegin(param0: globalAndroid.graphics.Matrix): void;
                    public onTransformEnd(param0: globalAndroid.graphics.Matrix): void;
                    public onTransformChanged(param0: globalAndroid.graphics.Matrix): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace samples {
            export namespace zoomable {
                export class ZoomableController extends java.lang.Object {
                    public static class: java.lang.Class<zoomable.ZoomableController>;
                    /**
                     * Constructs a new instance of the com.facebook.samples.zoomable.ZoomableController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        setEnabled(param0: boolean): void;
                        isEnabled(): boolean;
                        setListener(param0: zoomable.ZoomableController.Listener): void;
                        getScaleFactor(): number;
                        isIdentity(): boolean;
                        wasTransformCorrected(): boolean;
                        computeHorizontalScrollRange(): number;
                        computeHorizontalScrollOffset(): number;
                        computeHorizontalScrollExtent(): number;
                        computeVerticalScrollRange(): number;
                        computeVerticalScrollOffset(): number;
                        computeVerticalScrollExtent(): number;
                        getTransform(): globalAndroid.graphics.Matrix;
                        setImageBounds(param0: globalAndroid.graphics.RectF): void;
                        setViewBounds(param0: globalAndroid.graphics.RectF): void;
                        onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    });
                    public constructor();
                    public setEnabled(param0: boolean): void;
                    public isIdentity(): boolean;
                    public computeVerticalScrollRange(): number;
                    public wasTransformCorrected(): boolean;
                    public computeHorizontalScrollRange(): number;
                    public getTransform(): globalAndroid.graphics.Matrix;
                    public computeVerticalScrollOffset(): number;
                    public setViewBounds(param0: globalAndroid.graphics.RectF): void;
                    public setImageBounds(param0: globalAndroid.graphics.RectF): void;
                    public getScaleFactor(): number;
                    public computeVerticalScrollExtent(): number;
                    public setListener(param0: zoomable.ZoomableController.Listener): void;
                    public computeHorizontalScrollExtent(): number;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public isEnabled(): boolean;
                    public computeHorizontalScrollOffset(): number;
                }
                export namespace ZoomableController {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<zoomable.ZoomableController.Listener>;
                        /**
                         * Constructs a new instance of the com.facebook.samples.zoomable.ZoomableController$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onTransformBegin(param0: globalAndroid.graphics.Matrix): void;
                            onTransformChanged(param0: globalAndroid.graphics.Matrix): void;
                            onTransformEnd(param0: globalAndroid.graphics.Matrix): void;
                        });
                        public constructor();
                        public onTransformChanged(param0: globalAndroid.graphics.Matrix): void;
                        public onTransformEnd(param0: globalAndroid.graphics.Matrix): void;
                        public onTransformBegin(param0: globalAndroid.graphics.Matrix): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace samples {
            export namespace zoomable {
                export class ZoomableDraweeView extends androidx.core.view.ScrollingView {
                    public static class: java.lang.Class<zoomable.ZoomableDraweeView>;
                    public setControllers(param0: drawee.interfaces.DraweeController, param1: drawee.interfaces.DraweeController): void;
                    public setZoomingEnabled(param0: boolean): void;
                    public computeHorizontalScrollRange(): number;
                    public createZoomableController(): ZoomableController;
                    public constructor(param0: globalAndroid.content.Context, param1: drawee.generic.GenericDraweeHierarchy);
                    public getZoomableController(): ZoomableController;
                    public updateZoomableControllerBounds(): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public computeVerticalScrollExtent(): number;
                    public computeHorizontalScrollExtent(): number;
                    public getImageBounds(param0: globalAndroid.graphics.RectF): void;
                    public onDraw(param0: globalAndroid.graphics.Canvas): void;
                    public computeVerticalScrollRange(): number;
                    public setAllowTouchInterceptionWhileZoomed(param0: boolean): void;
                    public setTapListener(param0: globalAndroid.view.GestureDetector.SimpleOnGestureListener): void;
                    public setZoomableController(param0: ZoomableController): void;
                    public ensureZoomableControls(): void;
                    public setHierarchy(param0: drawee.generic.GenericDraweeHierarchy): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                    public setIsLongpressEnabled(param0: boolean): void;
                    public computeVerticalScrollOffset(): number;
                    public getLogTag(): java.lang.Class<any>;
                    public setIsDialtoneEnabled(param0: boolean): void;
                    public constructor(param0: globalAndroid.content.Context);
                    public allowsTouchInterceptionWhileZoomed(): boolean;
                    public setController(param0: drawee.interfaces.DraweeController): void;
                    public inflateHierarchy(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): void;
                    public getLimitBounds(param0: globalAndroid.graphics.RectF): void;
                    public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public onTransformChanged(param0: globalAndroid.graphics.Matrix): void;
                    public computeHorizontalScrollOffset(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace zoomimage {
            export class R extends java.lang.Object {
                public static class: java.lang.Class<zoomimage.R>;
            }
        }
    }
}
