/// <reference path="./fresco.d.ts" />
/// <reference path="./fresco-processors.d.ts" />




declare namespace com {
    export namespace nativescript {
        export namespace image {
            class ScalingBlurPostprocessor extends com.facebook.imagepipeline.request.BasePostprocessor {
                public constructor(iterations:number, blurRadius:number, scaleRatio:number);
            }
        }
    }
}
