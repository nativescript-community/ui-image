
declare namespace jp {
    export namespace wasabeef {
        export namespace fresco {
            export namespace processors {
                export class BlurPostprocessor {
                    public static class: java.lang.Class<BlurPostprocessor>;
                    public constructor(param0: globalAndroid.content.Context);
                    public getName(): string;
                    public constructor(param0: globalAndroid.content.Context, param1: number);
                    public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
                    public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
                    public process(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
                }
                export class ColorFilterPostprocessor {
                    public static class: java.lang.Class<ColorFilterPostprocessor>;
                    public getName(): string;
                    public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
                    public process(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
                    public constructor(param0: number);
                }
                export class CombinePostProcessors {
                    public static class: java.lang.Class<CombinePostProcessors>;
                    public process(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
                }
                export namespace CombinePostProcessors {
                    export class Builder {
                        public static class: java.lang.Class<Builder>;
                        public build(): CombinePostProcessors;
                        public constructor();
                        public add(param0: com.facebook.imagepipeline.request.BasePostprocessor): Builder;
                    }
                }
                export class GrayscalePostprocessor {
                    public static class: java.lang.Class<GrayscalePostprocessor>;
                    public constructor();
                    public getName(): string;
                    public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
                    public process(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
                }
                export class MaskPostprocessor {
                    public static class: java.lang.Class<MaskPostprocessor>;
                    public getName(): string;
                    public constructor(param0: globalAndroid.content.Context, param1: number);
                    public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
                    public process(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
                }
            }
        }
    }
}
