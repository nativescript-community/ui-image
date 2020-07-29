/// <reference path="./fresco.d.ts" />
/// <reference path="./fresco-processors.d.ts" />

declare namespace com {
    export namespace nativescript {
        export namespace image {
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
