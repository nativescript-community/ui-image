/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export abstract class GeneratedAppGlideModule extends com.bumptech.glide.module.AppGlideModule {
				public static class: java.lang.Class<com.bumptech.glide.GeneratedAppGlideModule>;
				public registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
				public applyOptions(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class GenericTransitionOptions<TranscodeType>  extends com.bumptech.glide.TransitionOptions<com.bumptech.glide.GenericTransitionOptions<any>,any> {
				public static class: java.lang.Class<com.bumptech.glide.GenericTransitionOptions<any>>;
				public static with(viewAnimationId: number): com.bumptech.glide.GenericTransitionOptions<any>;
				public static with(animator: com.bumptech.glide.request.transition.ViewPropertyTransition.Animator): com.bumptech.glide.GenericTransitionOptions<any>;
				public hashCode(): number;
				public static with(transitionFactory: com.bumptech.glide.request.transition.TransitionFactory<any>): com.bumptech.glide.GenericTransitionOptions<any>;
				public equals(o: any): boolean;
				public static withNoTransition(): com.bumptech.glide.GenericTransitionOptions<any>;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class Glide {
				public static class: java.lang.Class<com.bumptech.glide.Glide>;
				public trimMemory(this_: number): void;
				public static enableHardwareBitmaps(): void;
				public getRegistry(): com.bumptech.glide.Registry;
				public getArrayPool(): com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool;
				public static with(view: globalAndroid.view.View): com.bumptech.glide.RequestManager;
				/** @deprecated */
				public static with(activity: globalAndroid.app.Activity): com.bumptech.glide.RequestManager;
				public onTrimMemory(level: number): void;
				public static getPhotoCacheDir(result: globalAndroid.content.Context, context: string): java.io.File;
				/** @deprecated */
				public static init(glide: com.bumptech.glide.Glide): void;
				public static with(context: globalAndroid.content.Context): com.bumptech.glide.RequestManager;
				public setMemoryCategory(memoryCategory: com.bumptech.glide.MemoryCategory): com.bumptech.glide.MemoryCategory;
				public static init(context: globalAndroid.content.Context, builder: com.bumptech.glide.GlideBuilder): void;
				/** @deprecated */
				public static with(fragment: globalAndroid.app.Fragment): com.bumptech.glide.RequestManager;
				public static with(fragment: androidx.fragment.app.Fragment): com.bumptech.glide.RequestManager;
				public static isInitialized(): boolean;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public getContext(): globalAndroid.content.Context;
				public onLowMemory(): void;
				public static get(annotationGeneratedModule: globalAndroid.content.Context): com.bumptech.glide.Glide;
				public static getPhotoCacheDir(context: globalAndroid.content.Context): java.io.File;
				public static with(activity: androidx.fragment.app.FragmentActivity): com.bumptech.glide.RequestManager;
				public preFillBitmapPool(this_: androidNative.Array<com.bumptech.glide.load.engine.prefill.PreFillType.Builder>): void;
				public getRequestManagerRetriever(): com.bumptech.glide.manager.RequestManagerRetriever;
				public clearDiskCache(): void;
				public getBitmapPool(): com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool;
				public clearMemory(): void;
				public static tearDown(): void;
			}
			export namespace Glide {
				export class RequestOptionsFactory {
					public static class: java.lang.Class<com.bumptech.glide.Glide.RequestOptionsFactory>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.Glide$RequestOptionsFactory interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						build(): com.bumptech.glide.request.RequestOptions;
					});
					public constructor();
					public build(): com.bumptech.glide.request.RequestOptions;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class GlideBuilder {
				public static class: java.lang.Class<com.bumptech.glide.GlideBuilder>;
				/** @deprecated */
				public setResizeExecutor(service: com.bumptech.glide.load.engine.executor.GlideExecutor): com.bumptech.glide.GlideBuilder;
				public setMemorySizeCalculator(calculator: com.bumptech.glide.load.engine.cache.MemorySizeCalculator): com.bumptech.glide.GlideBuilder;
				public setDiskCacheExecutor(service: com.bumptech.glide.load.engine.executor.GlideExecutor): com.bumptech.glide.GlideBuilder;
				public constructor();
				public setArrayPool(arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.GlideBuilder;
				public setImageDecoderEnabledForBitmaps(isEnabled: boolean): com.bumptech.glide.GlideBuilder;
				public setConnectivityMonitorFactory(factory: com.bumptech.glide.manager.ConnectivityMonitorFactory): com.bumptech.glide.GlideBuilder;
				public setDefaultTransitionOptions(clazz: java.lang.Class<any>, options: com.bumptech.glide.TransitionOptions<any,any>): com.bumptech.glide.GlideBuilder;
				public setMemorySizeCalculator(builder: com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder): com.bumptech.glide.GlideBuilder;
				public setOverrideGlideThreadPriority(isEnabled: boolean): com.bumptech.glide.GlideBuilder;
				public setUseMediaStoreOpenFileApisIfPossible(isEnabled: boolean): com.bumptech.glide.GlideBuilder;
				public setLogLevel(logLevel: number): com.bumptech.glide.GlideBuilder;
				/** @deprecated */
				public setEnableHardwareGainmapFixOnU(isEnabled: boolean): com.bumptech.glide.GlideBuilder;
				public addGlobalRequestListener(listener: com.bumptech.glide.request.RequestListener<any>): com.bumptech.glide.GlideBuilder;
				public setDiskCache(diskCacheFactory: com.bumptech.glide.load.engine.cache.DiskCache.Factory): com.bumptech.glide.GlideBuilder;
				public setLogRequestOrigins(isEnabled: boolean): com.bumptech.glide.GlideBuilder;
				/** @deprecated */
				public setDisableHardwareBitmapsOnO(disableHardwareBitmapsOnO: boolean): com.bumptech.glide.GlideBuilder;
				public setDefaultRequestOptions(requestOptions: com.bumptech.glide.request.RequestOptions): com.bumptech.glide.GlideBuilder;
				public setMemoryCache(memoryCache: com.bumptech.glide.load.engine.cache.MemoryCache): com.bumptech.glide.GlideBuilder;
				/** @deprecated */
				public setPreserveGainmapAndColorSpaceForTransformations(isEnabled: boolean): com.bumptech.glide.GlideBuilder;
				public setBitmapPool(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.GlideBuilder;
				public setSourceExecutor(service: com.bumptech.glide.load.engine.executor.GlideExecutor): com.bumptech.glide.GlideBuilder;
				public setAnimationExecutor(service: com.bumptech.glide.load.engine.executor.GlideExecutor): com.bumptech.glide.GlideBuilder;
				public setIsActiveResourceRetentionAllowed(isActiveResourceRetentionAllowed: boolean): com.bumptech.glide.GlideBuilder;
				public setDefaultRequestOptions(factory: com.bumptech.glide.Glide.RequestOptionsFactory): com.bumptech.glide.GlideBuilder;
			}
			export namespace GlideBuilder {
				export class EnableImageDecoderForBitmaps extends com.bumptech.glide.GlideExperiments.Experiment {
					public static class: java.lang.Class<com.bumptech.glide.GlideBuilder.EnableImageDecoderForBitmaps>;
				}
				export class LogRequestOrigins extends com.bumptech.glide.GlideExperiments.Experiment {
					public static class: java.lang.Class<com.bumptech.glide.GlideBuilder.LogRequestOrigins>;
					public constructor();
				}
				export class ManualOverrideHardwareBitmapMaxFdCount extends com.bumptech.glide.GlideExperiments.Experiment {
					public static class: java.lang.Class<com.bumptech.glide.GlideBuilder.ManualOverrideHardwareBitmapMaxFdCount>;
				}
				export class OverrideGlideThreadPriority extends com.bumptech.glide.GlideExperiments.Experiment {
					public static class: java.lang.Class<com.bumptech.glide.GlideBuilder.OverrideGlideThreadPriority>;
					public constructor();
				}
				export class UseMediaStoreOpenFileApisIfPossible extends com.bumptech.glide.GlideExperiments.Experiment {
					public static class: java.lang.Class<com.bumptech.glide.GlideBuilder.UseMediaStoreOpenFileApisIfPossible>;
					public constructor();
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class GlideContext {
				public static class: java.lang.Class<com.bumptech.glide.GlideContext>;
				public getDefaultTransitionOptions(this_: java.lang.Class<any>): com.bumptech.glide.TransitionOptions<any,any>;
				public getEngine(): com.bumptech.glide.load.engine.Engine;
				public getLogLevel(): number;
				public constructor(context: globalAndroid.content.Context, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool, registry: com.bumptech.glide.util.GlideSuppliers.GlideSupplier<com.bumptech.glide.Registry>, imageViewTargetFactory: com.bumptech.glide.request.target.ImageViewTargetFactory, defaultRequestOptionsFactory: com.bumptech.glide.Glide.RequestOptionsFactory, defaultTransitionOptions: java.util.Map<java.lang.Class<any>,com.bumptech.glide.TransitionOptions<any,any>>, defaultRequestListeners: java.util.List<com.bumptech.glide.request.RequestListener<any>>, engine: com.bumptech.glide.load.engine.Engine, experiments: com.bumptech.glide.GlideExperiments, logLevel: number);
				public getDefaultRequestListeners(): java.util.List<com.bumptech.glide.request.RequestListener<any>>;
				public buildImageViewTarget(imageView: globalAndroid.widget.ImageView, transcodeClass: java.lang.Class<any>): com.bumptech.glide.request.target.ViewTarget<any,any>;
				public getRegistry(): com.bumptech.glide.Registry;
				public getDefaultRequestOptions(): com.bumptech.glide.request.RequestOptions;
				public getArrayPool(): com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool;
				public getExperiments(): com.bumptech.glide.GlideExperiments;
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class GlideExperiments {
				public static class: java.lang.Class<com.bumptech.glide.GlideExperiments>;
				public isEnabled(clazz: java.lang.Class<any>): boolean;
			}
			export namespace GlideExperiments {
				export class Builder {
					public static class: java.lang.Class<com.bumptech.glide.GlideExperiments.Builder>;
				}
				export class Experiment {
					public static class: java.lang.Class<com.bumptech.glide.GlideExperiments.Experiment>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.GlideExperiments$Experiment interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class ListPreloader<T>  extends globalAndroid.widget.AbsListView.OnScrollListener {
				public static class: java.lang.Class<com.bumptech.glide.ListPreloader<any>>;
				public onScroll(absListView: globalAndroid.widget.AbsListView, firstVisible: number, visibleCount: number, totalCount: number): void;
				public constructor(requestManager: com.bumptech.glide.RequestManager, preloadModelProvider: com.bumptech.glide.ListPreloader.PreloadModelProvider<any>, preloadDimensionProvider: com.bumptech.glide.ListPreloader.PreloadSizeProvider<any>, maxPreload: number);
				public onScrollStateChanged(absListView: globalAndroid.widget.AbsListView, scrollState: number): void;
			}
			export namespace ListPreloader {
				export class PreloadModelProvider<U>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.ListPreloader.PreloadModelProvider<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.ListPreloader$PreloadModelProvider interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						getPreloadItems(param0: number): java.util.List<U>;
						getPreloadRequestBuilder(param0: U): com.bumptech.glide.RequestBuilder<any>;
					});
					public constructor();
					public getPreloadItems(param0: number): java.util.List<U>;
					public getPreloadRequestBuilder(param0: U): com.bumptech.glide.RequestBuilder<any>;
				}
				export class PreloadSizeProvider<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.ListPreloader.PreloadSizeProvider<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.ListPreloader$PreloadSizeProvider interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						getPreloadSize(param0: T, param1: number, param2: number): androidNative.Array<number>;
					});
					public constructor();
					public getPreloadSize(param0: T, param1: number, param2: number): androidNative.Array<number>;
				}
				export class PreloadTarget extends com.bumptech.glide.request.target.Target<any> {
					public static class: java.lang.Class<com.bumptech.glide.ListPreloader.PreloadTarget>;
					public onLoadFailed(errorDrawable: globalAndroid.graphics.drawable.Drawable): void;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onLoadCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
					public onDestroy(): void;
					public onLoadStarted(placeholder: globalAndroid.graphics.drawable.Drawable): void;
					public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public setRequest(request: com.bumptech.glide.request.Request): void;
					public onStart(): void;
					public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
					public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
					public onStop(): void;
					public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
				}
				export class PreloadTargetQueue {
					public static class: java.lang.Class<com.bumptech.glide.ListPreloader.PreloadTargetQueue>;
					public next(width: number, height: number): com.bumptech.glide.ListPreloader.PreloadTarget;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class MemoryCategory {
				public static class: java.lang.Class<com.bumptech.glide.MemoryCategory>;
				public static LOW: com.bumptech.glide.MemoryCategory;
				public static NORMAL: com.bumptech.glide.MemoryCategory;
				public static HIGH: com.bumptech.glide.MemoryCategory;
				public getMultiplier(): number;
				public static valueOf(name: string): com.bumptech.glide.MemoryCategory;
				public static values(): androidNative.Array<com.bumptech.glide.MemoryCategory>;
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class ModelTypes<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.bumptech.glide.ModelTypes<any>>;
				/**
				 * Constructs a new instance of the com.bumptech.glide.ModelTypes<any> interface with the provided implementation.
				 * An empty constructor exists calling super().
				 */
				public constructor(implementation: {
					load(param0: globalAndroid.graphics.Bitmap): T;
					load(param0: globalAndroid.graphics.drawable.Drawable): T;
					load(param0: string): T;
					load(param0: globalAndroid.net.Uri): T;
					load(param0: java.io.File): T;
					load(param0: java.lang.Integer): T;
					load(param0: java.net.URL): T;
					load(param0: androidNative.Array<number>): T;
					load(param0: any): T;
				});
				public constructor();
				public load(param0: globalAndroid.graphics.drawable.Drawable): T;
				public load(param0: string): T;
				public load(param0: java.io.File): T;
				public load(param0: java.lang.Integer): T;
				public load(param0: androidNative.Array<number>): T;
				public load(param0: globalAndroid.net.Uri): T;
				/** @deprecated */
				public load(param0: java.net.URL): T;
				public load(param0: globalAndroid.graphics.Bitmap): T;
				public load(param0: any): T;
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class Priority {
				public static class: java.lang.Class<com.bumptech.glide.Priority>;
				public static IMMEDIATE: com.bumptech.glide.Priority;
				public static HIGH: com.bumptech.glide.Priority;
				public static NORMAL: com.bumptech.glide.Priority;
				public static LOW: com.bumptech.glide.Priority;
				public static valueOf(name: string): com.bumptech.glide.Priority;
				public static values(): androidNative.Array<com.bumptech.glide.Priority>;
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class Registry {
				public static class: java.lang.Class<com.bumptech.glide.Registry>;
				/**
				* "Animation"
				*/
				public static BUCKET_ANIMATION: string;
				/**
				* "Animation"
				*/
				public static BUCKET_GIF: string;
				/**
				* "Bitmap"
				*/
				public static BUCKET_BITMAP: string;
				/**
				* "BitmapDrawable"
				*/
				public static BUCKET_BITMAP_DRAWABLE: string;
				/** @deprecated */
				public register(dataClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.Encoder<any>): com.bumptech.glide.Registry;
				public isResourceEncoderAvailable(resource: com.bumptech.glide.load.engine.Resource<any>): boolean;
				public append(bucket: string, dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, decoder: com.bumptech.glide.load.ResourceDecoder<any,any>): com.bumptech.glide.Registry;
				public constructor();
				public getImageHeaderParsers(): java.util.List<com.bumptech.glide.load.ImageHeaderParser>;
				public register(parser: com.bumptech.glide.load.ImageHeaderParser): com.bumptech.glide.Registry;
				public setResourceDecoderBucketPriorityList(this_: java.util.List<string>): com.bumptech.glide.Registry;
				public getModelLoaders(model: any): java.util.List<any>;
				public getLoadPath(this_: java.lang.Class<any>, dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>): com.bumptech.glide.load.engine.LoadPath<any,any,any>;
				public register(resourceClass: java.lang.Class<any>, transcodeClass: java.lang.Class<any>, transcoder: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>): com.bumptech.glide.Registry;
				public getRegisteredResourceClasses(registeredResourceClass: java.lang.Class<any>, registeredResourceClasses: java.lang.Class<any>, dataClass: java.lang.Class<any>): java.util.List<any>;
				public getSourceEncoder(data: any): com.bumptech.glide.load.Encoder<any>;
				public prepend(bucket: string, dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, decoder: com.bumptech.glide.load.ResourceDecoder<any,any>): com.bumptech.glide.Registry;
				public prepend(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): com.bumptech.glide.Registry;
				public prepend(dataClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.Encoder<any>): com.bumptech.glide.Registry;
				public append(dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, decoder: com.bumptech.glide.load.ResourceDecoder<any,any>): com.bumptech.glide.Registry;
				public append(dataClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.Encoder<any>): com.bumptech.glide.Registry;
				public getResultEncoder(resource: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.ResourceEncoder<any>;
				/** @deprecated */
				public register(resourceClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.ResourceEncoder<any>): com.bumptech.glide.Registry;
				public replace(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): com.bumptech.glide.Registry;
				public append(resourceClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.ResourceEncoder<any>): com.bumptech.glide.Registry;
				public prepend(resourceClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.ResourceEncoder<any>): com.bumptech.glide.Registry;
				public getRewinder(data: any): com.bumptech.glide.load.data.DataRewinder<any>;
				public prepend(dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, decoder: com.bumptech.glide.load.ResourceDecoder<any,any>): com.bumptech.glide.Registry;
				public register(factory: com.bumptech.glide.load.data.DataRewinder.Factory<any>): com.bumptech.glide.Registry;
				public append(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): com.bumptech.glide.Registry;
			}
			export namespace Registry {
				export class MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.MissingComponentException>;
					public constructor(message: string);
				}
				export class NoImageHeaderParserException extends com.bumptech.glide.Registry.MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.NoImageHeaderParserException>;
					public constructor(message: string);
					public constructor();
				}
				export class NoModelLoaderAvailableException extends com.bumptech.glide.Registry.MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.NoModelLoaderAvailableException>;
					public constructor(message: string);
					public constructor(model: any, matchingButNotHandlingModelLoaders: java.util.List<any>);
					public constructor(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>);
					public constructor(model: any);
				}
				export class NoResultEncoderAvailableException extends com.bumptech.glide.Registry.MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.NoResultEncoderAvailableException>;
					public constructor(message: string);
					public constructor(resourceClass: java.lang.Class<any>);
				}
				export class NoSourceEncoderAvailableException extends com.bumptech.glide.Registry.MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.NoSourceEncoderAvailableException>;
					public constructor(message: string);
					public constructor(dataClass: java.lang.Class<any>);
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class RegistryFactory {
				public static class: java.lang.Class<com.bumptech.glide.RegistryFactory>;
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class RequestBuilder<TranscodeType>  extends com.bumptech.glide.request.BaseRequestOptions<com.bumptech.glide.RequestBuilder<any>> {
				public static class: java.lang.Class<com.bumptech.glide.RequestBuilder<any>>;
				public static DOWNLOAD_ONLY_OPTIONS: com.bumptech.glide.request.RequestOptions;
				public into(target: com.bumptech.glide.request.target.Target<any>, targetListener: com.bumptech.glide.request.RequestListener<any>, callbackExecutor: java.util.concurrent.Executor): com.bumptech.glide.request.target.Target<any>;
				public load(model: androidNative.Array<number>): com.bumptech.glide.RequestBuilder<any>;
				/** @deprecated */
				public load(url: java.net.URL): com.bumptech.glide.RequestBuilder<any>;
				public constructor();
				public addListener(requestListener: com.bumptech.glide.request.RequestListener<any>): com.bumptech.glide.RequestBuilder<any>;
				public hashCode(): number;
				public clone(): any;
				public clone(): com.bumptech.glide.RequestBuilder<any>;
				public load(file: java.io.File): com.bumptech.glide.RequestBuilder<any>;
				public load(resourceId: java.lang.Integer): com.bumptech.glide.RequestBuilder<any>;
				public experimentalIntoFront(view: globalAndroid.widget.ImageView): com.bumptech.glide.request.target.ViewTarget<globalAndroid.widget.ImageView,any>;
				public apply(requestOptions: com.bumptech.glide.request.BaseRequestOptions<any>): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: androidNative.Array<number>): any;
				public load(param0: globalAndroid.graphics.drawable.Drawable): any;
				/** @deprecated */
				public into(width: number, height: number): com.bumptech.glide.request.FutureTarget<any>;
				public load(param0: string): any;
				public load(model: any): com.bumptech.glide.RequestBuilder<any>;
				public experimentalPreloadFront(width: number, height: number): com.bumptech.glide.request.target.Target<any>;
				/** @deprecated */
				public downloadOnly(width: number, height: number): com.bumptech.glide.request.FutureTarget<java.io.File>;
				public equals(this_: any): boolean;
				public getDownloadOnlyRequest(): com.bumptech.glide.RequestBuilder<java.io.File>;
				public preload(): com.bumptech.glide.request.target.Target<any>;
				public error(drawable: globalAndroid.graphics.drawable.Drawable): any;
				public submit(): com.bumptech.glide.request.FutureTarget<any>;
				public load(param0: java.lang.Integer): any;
				public load(param0: globalAndroid.net.Uri): any;
				public preload(width: number, height: number): com.bumptech.glide.request.target.Target<any>;
				public apply(o: com.bumptech.glide.request.BaseRequestOptions<any>): any;
				/** @deprecated */
				public thumbnail(sizeMultiplier: number): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: globalAndroid.graphics.Bitmap): any;
				public load(param0: any): any;
				public listener(requestListener: com.bumptech.glide.request.RequestListener<any>): com.bumptech.glide.RequestBuilder<any>;
				public constructor(transcodeClass: java.lang.Class<any>, other: com.bumptech.glide.RequestBuilder<any>);
				public thumbnail(thumbnails: androidNative.Array<com.bumptech.glide.RequestBuilder<any>>): com.bumptech.glide.RequestBuilder<any>;
				public error(errorBuilder: com.bumptech.glide.RequestBuilder<any>): com.bumptech.glide.RequestBuilder<any>;
				/** @deprecated */
				public downloadOnly(target: com.bumptech.glide.request.target.Target<any>): com.bumptech.glide.request.target.Target<any>;
				public submit(width: number, height: number): com.bumptech.glide.request.FutureTarget<any>;
				public load(param0: java.io.File): any;
				public transition(transitionOptions: com.bumptech.glide.TransitionOptions<any,any>): com.bumptech.glide.RequestBuilder<any>;
				public into(target: com.bumptech.glide.request.target.Target<any>): com.bumptech.glide.request.target.Target<any>;
				public load(string: string): com.bumptech.glide.RequestBuilder<any>;
				public constructor(glide: com.bumptech.glide.Glide, requestManager: com.bumptech.glide.RequestManager, transcodeClass: java.lang.Class<any>, context: globalAndroid.content.Context);
				public load(uri: globalAndroid.net.Uri): com.bumptech.glide.RequestBuilder<any>;
				public into(view: globalAndroid.widget.ImageView): com.bumptech.glide.request.target.ViewTarget<globalAndroid.widget.ImageView,any>;
				public load(bitmap: globalAndroid.graphics.Bitmap): com.bumptech.glide.RequestBuilder<any>;
				public thumbnail(i: java.util.List<com.bumptech.glide.RequestBuilder<any>>): com.bumptech.glide.RequestBuilder<any>;
				public error(model: any): com.bumptech.glide.RequestBuilder<any>;
				public experimentalIntoFront(target: com.bumptech.glide.request.target.Target<any>): com.bumptech.glide.request.target.Target<any>;
				public thumbnail(thumbnailRequest: com.bumptech.glide.RequestBuilder<any>): com.bumptech.glide.RequestBuilder<any>;
				/** @deprecated */
				public load(param0: java.net.URL): any;
				public load(drawable: globalAndroid.graphics.drawable.Drawable): com.bumptech.glide.RequestBuilder<any>;
				public error(resourceId: number): any;
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class RequestManager extends java.lang.Object {
				public static class: java.lang.Class<com.bumptech.glide.RequestManager>;
				public glide: com.bumptech.glide.Glide;
				public context: globalAndroid.content.Context;
				public load(resourceId: java.lang.Integer): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public as(resourceClass: java.lang.Class<any>): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: globalAndroid.graphics.Bitmap): any;
				public load(param0: any): any;
				public setDefaultRequestOptions(requestOptions: com.bumptech.glide.request.RequestOptions): com.bumptech.glide.RequestManager;
				public load(drawable: globalAndroid.graphics.drawable.Drawable): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public setRequestOptions(toSet: com.bumptech.glide.request.RequestOptions): void;
				public setPauseAllRequestsOnTrimMemoryModerate(pauseAllOnTrim: boolean): void;
				public asDrawable(): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public applyDefaultRequestOptions(requestOptions: com.bumptech.glide.request.RequestOptions): com.bumptech.glide.RequestManager;
				/** @deprecated */
				public load(url: java.net.URL): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public onTrimMemory(level: number): void;
				public downloadOnly(): com.bumptech.glide.RequestBuilder<java.io.File>;
				public load(file: java.io.File): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public onStop(): void;
				public load(param0: java.io.File): any;
				public load(uri: globalAndroid.net.Uri): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public load(param0: androidNative.Array<number>): any;
				public pauseRequestsRecursive(): void;
				public load(param0: globalAndroid.graphics.drawable.Drawable): any;
				public resumeRequestsRecursive(): void;
				public download(model: any): com.bumptech.glide.RequestBuilder<java.io.File>;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public clearOnStop(): com.bumptech.glide.RequestManager;
				public load(model: androidNative.Array<number>): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public onLowMemory(): void;
				public clear(view: globalAndroid.view.View): void;
				public load(bitmap: globalAndroid.graphics.Bitmap): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public toString(): string;
				public load(param0: string): any;
				public clear(target: com.bumptech.glide.request.target.Target<any>): void;
				public constructor(glide: com.bumptech.glide.Glide, lifecycle: com.bumptech.glide.manager.Lifecycle, treeNode: com.bumptech.glide.manager.RequestManagerTreeNode, context: globalAndroid.content.Context);
				public load(string: string): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public pauseAllRequests(): void;
				public onStart(): void;
				public pauseAllRequestsRecursive(): void;
				public asFile(): com.bumptech.glide.RequestBuilder<java.io.File>;
				public asBitmap(): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.Bitmap>;
				public asGif(): com.bumptech.glide.RequestBuilder<com.bumptech.glide.load.resource.gif.GifDrawable>;
				public load(param0: java.lang.Integer): any;
				public resumeRequests(): void;
				public load(model: any): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				/** @deprecated */
				public load(param0: java.net.URL): any;
				public onDestroy(): void;
				public addDefaultRequestListener(requestListener: com.bumptech.glide.request.RequestListener<any>): com.bumptech.glide.RequestManager;
				public isPaused(): boolean;
				public pauseRequests(): void;
				public load(param0: globalAndroid.net.Uri): any;
			}
			export namespace RequestManager {
				export class ClearTarget extends com.bumptech.glide.request.target.CustomViewTarget<globalAndroid.view.View,any> {
					public static class: java.lang.Class<com.bumptech.glide.RequestManager.ClearTarget>;
					public onResourceCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
					public onLoadFailed(errorDrawable: globalAndroid.graphics.drawable.Drawable): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
					public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
					public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
				}
				export class RequestManagerConnectivityListener extends com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener {
					public static class: java.lang.Class<com.bumptech.glide.RequestManager.RequestManagerConnectivityListener>;
					public onConnectivityChanged(isConnected: boolean): void;
					public onConnectivityChanged(param0: boolean): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export abstract class TransitionOptions<CHILD, TranscodeType>  extends java.lang.Cloneable {
				public static class: java.lang.Class<com.bumptech.glide.TransitionOptions<any,any>>;
				public equals(this_: any): boolean;
				public hashCode(): number;
				public transition(viewAnimationId: number): any;
				public transition(transitionFactory: com.bumptech.glide.request.transition.TransitionFactory<any>): any;
				public clone(): any;
				public dontTransition(): any;
				public transition(animator: com.bumptech.glide.request.transition.ViewPropertyTransition.Animator): any;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class DataSource {
					public static class: java.lang.Class<com.bumptech.glide.load.DataSource>;
					public static LOCAL: com.bumptech.glide.load.DataSource;
					public static REMOTE: com.bumptech.glide.load.DataSource;
					public static DATA_DISK_CACHE: com.bumptech.glide.load.DataSource;
					public static RESOURCE_DISK_CACHE: com.bumptech.glide.load.DataSource;
					public static MEMORY_CACHE: com.bumptech.glide.load.DataSource;
					public static valueOf(name: string): com.bumptech.glide.load.DataSource;
					public static values(): androidNative.Array<com.bumptech.glide.load.DataSource>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class DecodeFormat {
					public static class: java.lang.Class<com.bumptech.glide.load.DecodeFormat>;
					public static PREFER_ARGB_8888: com.bumptech.glide.load.DecodeFormat;
					public static PREFER_RGB_565: com.bumptech.glide.load.DecodeFormat;
					public static DEFAULT: com.bumptech.glide.load.DecodeFormat;
					public static values(): androidNative.Array<com.bumptech.glide.load.DecodeFormat>;
					public static valueOf(name: string): com.bumptech.glide.load.DecodeFormat;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class EncodeStrategy {
					public static class: java.lang.Class<com.bumptech.glide.load.EncodeStrategy>;
					public static SOURCE: com.bumptech.glide.load.EncodeStrategy;
					public static TRANSFORMED: com.bumptech.glide.load.EncodeStrategy;
					public static NONE: com.bumptech.glide.load.EncodeStrategy;
					public static valueOf(name: string): com.bumptech.glide.load.EncodeStrategy;
					public static values(): androidNative.Array<com.bumptech.glide.load.EncodeStrategy>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class Encoder<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.load.Encoder<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Encoder<any> interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						encode(param0: T, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
					});
					public constructor();
					public encode(param0: T, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class HttpException {
					public static class: java.lang.Class<com.bumptech.glide.load.HttpException>;
					/**
					* -1
					*/
					public static UNKNOWN: number;
					/** @deprecated */
					public constructor(message: string);
					public getStatusCode(): number;
					public constructor(statusCode: number);
					public constructor(message: string, statusCode: number, cause: java.lang.Throwable);
					public constructor(message: string, statusCode: number);
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class ImageHeaderParser {
					public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParser>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.ImageHeaderParser interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						getType(param0: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						getType(param0: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						getOrientation(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
						getOrientation(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
						hasJpegMpf(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
						hasJpegMpf(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
					});
					public constructor();
					/**
					* -1
					*/
					public static UNKNOWN_ORIENTATION: number;
					public getOrientation(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
					public getType(param0: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					public getOrientation(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
					public hasJpegMpf(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
					public hasJpegMpf(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
					public getType(param0: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
				}
				export namespace ImageHeaderParser {
					export class ImageType {
						public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParser.ImageType>;
						public static GIF: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static JPEG: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static RAW: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static PNG_A: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static PNG: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static WEBP_A: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static WEBP: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static ANIMATED_WEBP: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static AVIF: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static ANIMATED_AVIF: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static UNKNOWN: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static valueOf(name: string): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static values(): androidNative.Array<com.bumptech.glide.load.ImageHeaderParser.ImageType>;
						public hasAlpha(): boolean;
						public isWebp(): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class ImageHeaderParserUtils {
					public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParserUtils>;
					public static getType(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, parcelFileDescriptorRewinder: com.bumptech.glide.load.data.ParcelFileDescriptorRewinder, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					public static getOrientation(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, parcelFileDescriptorRewinder: com.bumptech.glide.load.data.ParcelFileDescriptorRewinder, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
					public static hasJpegMpf(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, buffer: java.nio.ByteBuffer, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
					public static getOrientation(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, is: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
					public static hasJpegMpf(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, parcelFileDescriptorRewinder: com.bumptech.glide.load.data.ParcelFileDescriptorRewinder, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
					public static hasJpegMpf(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, is: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
					public static getType(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, is: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					public static getType(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, buffer: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					public static getOrientation(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, buffer: java.nio.ByteBuffer, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
				}
				export namespace ImageHeaderParserUtils {
					export class JpegMpfReader {
						public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParserUtils.JpegMpfReader>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.ImageHeaderParserUtils$JpegMpfReader interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							getHasJpegMpfAndRewind(param0: com.bumptech.glide.load.ImageHeaderParser): boolean;
						});
						public constructor();
						public getHasJpegMpfAndRewind(param0: com.bumptech.glide.load.ImageHeaderParser): boolean;
					}
					export class OrientationReader {
						public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParserUtils.OrientationReader>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.ImageHeaderParserUtils$OrientationReader interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							getOrientationAndRewind(param0: com.bumptech.glide.load.ImageHeaderParser): number;
						});
						public constructor();
						public getOrientationAndRewind(param0: com.bumptech.glide.load.ImageHeaderParser): number;
					}
					export class TypeReader {
						public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParserUtils.TypeReader>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.ImageHeaderParserUtils$TypeReader interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							getTypeAndRewind(param0: com.bumptech.glide.load.ImageHeaderParser): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						});
						public constructor();
						public getTypeAndRewind(param0: com.bumptech.glide.load.ImageHeaderParser): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class Key {
					public static class: java.lang.Class<com.bumptech.glide.load.Key>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Key interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						updateDiskCacheKey(param0: java.security.MessageDigest): void;
						equals(param0: any): boolean;
						hashCode(): number;
						"<clinit>"(): void;
					});
					public constructor();
					/**
					* "UTF-8"
					*/
					public static STRING_CHARSET_NAME: string;
					public static CHARSET: java.nio.charset.Charset;
					public equals(param0: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class MultiTransformation<T>  extends com.bumptech.glide.load.Transformation<any> {
					public static class: java.lang.Class<com.bumptech.glide.load.MultiTransformation<any>>;
					public equals(param0: any): boolean;
					public transform(transformation: globalAndroid.content.Context, this_: com.bumptech.glide.load.engine.Resource<any>, context: number, resource: number): com.bumptech.glide.load.engine.Resource<any>;
					public constructor(transformationList: java.util.Collection<any>);
					public equals(this_: any): boolean;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public constructor(transformations: androidNative.Array<com.bumptech.glide.load.Transformation<any>>);
					public updateDiskCacheKey(this_: java.security.MessageDigest): void;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class Option<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.load.Option<any>>;
					public static disk(key: string, cacheKeyUpdater: com.bumptech.glide.load.Option.CacheKeyUpdater<any>): com.bumptech.glide.load.Option<any>;
					public static memory(key: string): com.bumptech.glide.load.Option<any>;
					public update(value: T, messageDigest: java.security.MessageDigest): void;
					public toString(): string;
					public equals(this_: any): boolean;
					public static memory(key: string, defaultValue: any): com.bumptech.glide.load.Option<any>;
					public hashCode(): number;
					public static disk(key: string, defaultValue: any, cacheKeyUpdater: com.bumptech.glide.load.Option.CacheKeyUpdater<any>): com.bumptech.glide.load.Option<any>;
					public getDefaultValue(): T;
				}
				export namespace Option {
					export class CacheKeyUpdater<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.Option.CacheKeyUpdater<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.Option$CacheKeyUpdater interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							update(param0: androidNative.Array<number>, param1: T, param2: java.security.MessageDigest): void;
						});
						public constructor();
						public update(param0: androidNative.Array<number>, param1: T, param2: java.security.MessageDigest): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class Options extends com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.load.Options>;
					public equals(param0: any): boolean;
					public set(option: com.bumptech.glide.load.Option<any>, value: any): com.bumptech.glide.load.Options;
					public updateDiskCacheKey(value: java.security.MessageDigest): void;
					public toString(): string;
					public equals(this_: any): boolean;
					public constructor();
					public putAll(other: com.bumptech.glide.load.Options): void;
					public get(option: com.bumptech.glide.load.Option<any>): any;
					public hashCode(): number;
					public remove(option: com.bumptech.glide.load.Option<any>): com.bumptech.glide.load.Options;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class PreferredColorSpace {
					public static class: java.lang.Class<com.bumptech.glide.load.PreferredColorSpace>;
					public static SRGB: com.bumptech.glide.load.PreferredColorSpace;
					public static DISPLAY_P3: com.bumptech.glide.load.PreferredColorSpace;
					public static values(): androidNative.Array<com.bumptech.glide.load.PreferredColorSpace>;
					public static valueOf(name: string): com.bumptech.glide.load.PreferredColorSpace;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class ResourceDecoder<T, Z>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.load.ResourceDecoder<any,any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.ResourceDecoder<any,any> interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						handles(param0: T, param1: com.bumptech.glide.load.Options): boolean;
						decode(param0: T, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<Z>;
					});
					public constructor();
					public decode(param0: T, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<Z>;
					public handles(param0: T, param1: com.bumptech.glide.load.Options): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class ResourceEncoder<T>  extends com.bumptech.glide.load.Encoder<com.bumptech.glide.load.engine.Resource<any>> {
					public static class: java.lang.Class<com.bumptech.glide.load.ResourceEncoder<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.ResourceEncoder<any> interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
						encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
					});
					public constructor();
					public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
					public getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export class Transformation<T>  extends com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.load.Transformation<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Transformation<any> interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						updateDiskCacheKey(param0: java.security.MessageDigest): void;
						equals(param0: any): boolean;
						hashCode(): number;
						"<clinit>"(): void;
					});
					public constructor();
					/**
					* "UTF-8"
					*/
					public static STRING_CHARSET_NAME: string;
					public static CHARSET: java.nio.charset.Charset;
					public equals(param0: any): boolean;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export class AssetFileDescriptorLocalUriFetcher extends com.bumptech.glide.load.data.LocalUriFetcher<globalAndroid.content.res.AssetFileDescriptor> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.AssetFileDescriptorLocalUriFetcher>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public constructor(contentResolver: globalAndroid.content.ContentResolver, uri: globalAndroid.net.Uri);
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public loadResource(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentResolver): any;
						public cancel(): void;
						public getDataClass(): java.lang.Class<globalAndroid.content.res.AssetFileDescriptor>;
						public cleanup(): void;
						public constructor(contentResolver: globalAndroid.content.ContentResolver, uri: globalAndroid.net.Uri, useMediaStoreApisIfAvailable: boolean);
						public close(data: globalAndroid.content.res.AssetFileDescriptor): void;
						public loadResource(uri: globalAndroid.net.Uri, contentResolver: globalAndroid.content.ContentResolver): globalAndroid.content.res.AssetFileDescriptor;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export abstract class AssetPathFetcher<T>  extends com.bumptech.glide.load.data.DataFetcher<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.AssetPathFetcher<any>>;
						public loadData(this_: com.bumptech.glide.Priority, priority: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public constructor(assetManager: globalAndroid.content.res.AssetManager, assetPath: string);
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public cleanup(): void;
						public loadResource(param0: globalAndroid.content.res.AssetManager, param1: string): any;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export class BufferedOutputStream {
						public static class: java.lang.Class<com.bumptech.glide.load.data.BufferedOutputStream>;
						public write(b: androidNative.Array<number>): void;
						public close(): void;
						public write(currentOffset: androidNative.Array<number>, remainingSpaceInBuffer: number, totalBytesToWriteToBuffer: number): void;
						public write(b: number): void;
						public flush(): void;
						public constructor(out: java.io.OutputStream, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export class DataFetcher<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.data.DataFetcher<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.data.DataFetcher<any> interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							cleanup(): void;
							cancel(): void;
							getDataClass(): java.lang.Class<T>;
							getDataSource(): com.bumptech.glide.load.DataSource;
						});
						public constructor();
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public cleanup(): void;
						public getDataClass(): java.lang.Class<T>;
					}
					export namespace DataFetcher {
						export class DataCallback<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.data.DataFetcher.DataCallback<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.DataFetcher$DataCallback interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								onDataReady(param0: T): void;
								onLoadFailed(param0: java.lang.Exception): void;
							});
							public constructor();
							public onLoadFailed(param0: java.lang.Exception): void;
							public onDataReady(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export class DataRewinder<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.data.DataRewinder<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.data.DataRewinder<any> interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							rewindAndGet(): T;
							cleanup(): void;
						});
						public constructor();
						public rewindAndGet(): T;
						public cleanup(): void;
					}
					export namespace DataRewinder {
						export class Factory<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.data.DataRewinder.Factory<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.DataRewinder$Factory interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								build(param0: T): com.bumptech.glide.load.data.DataRewinder<T>;
								getDataClass(): java.lang.Class<T>;
							});
							public constructor();
							public build(param0: T): com.bumptech.glide.load.data.DataRewinder<T>;
							public getDataClass(): java.lang.Class<T>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export class DataRewinderRegistry {
						public static class: java.lang.Class<com.bumptech.glide.load.data.DataRewinderRegistry>;
						public constructor();
						public register(factory: com.bumptech.glide.load.data.DataRewinder.Factory<any>): void;
						public build(this_: any): com.bumptech.glide.load.data.DataRewinder<any>;
					}
					export namespace DataRewinderRegistry {
						export class DefaultRewinder extends com.bumptech.glide.load.data.DataRewinder<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.data.DataRewinderRegistry.DefaultRewinder>;
							public cleanup(): void;
							public rewindAndGet(): any;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export class ExifOrientationStream {
						public static class: java.lang.Class<com.bumptech.glide.load.data.ExifOrientationStream>;
						public read(): number;
						public skip(byteCount: number): number;
						public markSupported(): boolean;
						public mark(readLimit: number): void;
						public constructor(in_: java.io.InputStream, orientation: number);
						public read(read: androidNative.Array<number>, read_1: number, this_: number): number;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export class FileDescriptorAssetPathFetcher extends com.bumptech.glide.load.data.AssetPathFetcher<globalAndroid.content.res.AssetFileDescriptor> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.FileDescriptorAssetPathFetcher>;
						public loadResource(assetManager: globalAndroid.content.res.AssetManager, path: string): globalAndroid.content.res.AssetFileDescriptor;
						public constructor(assetManager: globalAndroid.content.res.AssetManager, assetPath: string);
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public getDataClass(): java.lang.Class<globalAndroid.content.res.AssetFileDescriptor>;
						public cleanup(): void;
						public close(data: globalAndroid.content.res.AssetFileDescriptor): void;
						public loadResource(param0: globalAndroid.content.res.AssetManager, param1: string): any;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export class FileDescriptorLocalUriFetcher extends com.bumptech.glide.load.data.LocalUriFetcher<globalAndroid.os.ParcelFileDescriptor> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.FileDescriptorLocalUriFetcher>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public constructor(contentResolver: globalAndroid.content.ContentResolver, uri: globalAndroid.net.Uri);
						public loadResource(uri: globalAndroid.net.Uri, contentResolver: globalAndroid.content.ContentResolver): globalAndroid.os.ParcelFileDescriptor;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public loadResource(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentResolver): any;
						public cancel(): void;
						public cleanup(): void;
						public constructor(contentResolver: globalAndroid.content.ContentResolver, uri: globalAndroid.net.Uri, useMediaStoreApisIfAvailable: boolean);
						public close(data: globalAndroid.os.ParcelFileDescriptor): void;
						public getDataClass(): java.lang.Class<globalAndroid.os.ParcelFileDescriptor>;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export class HttpUrlFetcher extends com.bumptech.glide.load.data.DataFetcher<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.HttpUrlFetcher>;
						public getDataClass(): java.lang.Class<java.io.InputStream>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public constructor(glideUrl: com.bumptech.glide.load.model.GlideUrl, timeout: number);
						public cancel(): void;
						public loadData(e: com.bumptech.glide.Priority, this_: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cleanup(): void;
						public getDataClass(): java.lang.Class<any>;
					}
					export namespace HttpUrlFetcher {
						export class DefaultHttpUrlConnectionFactory extends com.bumptech.glide.load.data.HttpUrlFetcher.HttpUrlConnectionFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.data.HttpUrlFetcher.DefaultHttpUrlConnectionFactory>;
							public build(param0: java.net.URL): java.net.HttpURLConnection;
							public build(url: java.net.URL): java.net.HttpURLConnection;
						}
						export class HttpUrlConnectionFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.data.HttpUrlFetcher.HttpUrlConnectionFactory>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.HttpUrlFetcher$HttpUrlConnectionFactory interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								build(param0: java.net.URL): java.net.HttpURLConnection;
							});
							public constructor();
							public build(param0: java.net.URL): java.net.HttpURLConnection;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export class InputStreamRewinder extends com.bumptech.glide.load.data.DataRewinder<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.InputStreamRewinder>;
						public constructor(is: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
						public rewindAndGet(): java.io.InputStream;
						public fixMarkLimits(): void;
						public cleanup(): void;
						public rewindAndGet(): any;
					}
					export namespace InputStreamRewinder {
						export class Factory extends com.bumptech.glide.load.data.DataRewinder.Factory<java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.data.InputStreamRewinder.Factory>;
							public constructor(byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public build(data: java.io.InputStream): com.bumptech.glide.load.data.DataRewinder<java.io.InputStream>;
							public build(param0: any): com.bumptech.glide.load.data.DataRewinder<any>;
							public getDataClass(): java.lang.Class<any>;
							public getDataClass(): java.lang.Class<java.io.InputStream>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export abstract class LocalUriFetcher<T>  extends com.bumptech.glide.load.data.DataFetcher<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.LocalUriFetcher<any>>;
						public useMediaStoreApisIfAvailable: boolean;
						public loadData(this_: com.bumptech.glide.Priority, priority: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public openAssetFileDescriptor(uri: globalAndroid.net.Uri): globalAndroid.content.res.AssetFileDescriptor;
						public constructor(contentResolver: globalAndroid.content.ContentResolver, uri: globalAndroid.net.Uri);
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public loadResource(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentResolver): any;
						public cancel(): void;
						public cleanup(): void;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export class ParcelFileDescriptorRewinder extends com.bumptech.glide.load.data.DataRewinder<globalAndroid.os.ParcelFileDescriptor> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.ParcelFileDescriptorRewinder>;
						public constructor(parcelFileDescriptor: globalAndroid.os.ParcelFileDescriptor);
						public static isSupported(): boolean;
						public rewindAndGet(): globalAndroid.os.ParcelFileDescriptor;
						public cleanup(): void;
						public rewindAndGet(): any;
					}
					export namespace ParcelFileDescriptorRewinder {
						export class Factory extends com.bumptech.glide.load.data.DataRewinder.Factory<globalAndroid.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.data.ParcelFileDescriptorRewinder.Factory>;
							public constructor();
							public getDataClass(): java.lang.Class<globalAndroid.os.ParcelFileDescriptor>;
							public build(param0: any): com.bumptech.glide.load.data.DataRewinder<any>;
							public build(parcelFileDescriptor: globalAndroid.os.ParcelFileDescriptor): com.bumptech.glide.load.data.DataRewinder<globalAndroid.os.ParcelFileDescriptor>;
							public getDataClass(): java.lang.Class<any>;
						}
						export class InternalRewinder {
							public static class: java.lang.Class<com.bumptech.glide.load.data.ParcelFileDescriptorRewinder.InternalRewinder>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export class StreamAssetPathFetcher extends com.bumptech.glide.load.data.AssetPathFetcher<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.StreamAssetPathFetcher>;
						public getDataClass(): java.lang.Class<java.io.InputStream>;
						public constructor(assetManager: globalAndroid.content.res.AssetManager, assetPath: string);
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public cleanup(): void;
						public close(data: java.io.InputStream): void;
						public loadResource(param0: globalAndroid.content.res.AssetManager, param1: string): any;
						public getDataClass(): java.lang.Class<any>;
						public loadResource(assetManager: globalAndroid.content.res.AssetManager, path: string): java.io.InputStream;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export class StreamLocalUriFetcher extends com.bumptech.glide.load.data.LocalUriFetcher<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.StreamLocalUriFetcher>;
						public constructor(resolver: globalAndroid.content.ContentResolver, uri: globalAndroid.net.Uri);
						public getDataClass(): java.lang.Class<java.io.InputStream>;
						public constructor(resolver: globalAndroid.content.ContentResolver, uri: globalAndroid.net.Uri, useMediaStoreApisIfAvailable: boolean);
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public loadResource(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentResolver): any;
						public cancel(): void;
						public cleanup(): void;
						public close(data: java.io.InputStream): void;
						public loadResource(uri: globalAndroid.net.Uri, contentResolver: globalAndroid.content.ContentResolver): java.io.InputStream;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export namespace mediastore {
						export class FileService {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.FileService>;
							public get(path: string): java.io.File;
							public exists(file: java.io.File): boolean;
							public length(file: java.io.File): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export namespace mediastore {
						export class MediaStoreUtil {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.MediaStoreUtil>;
							/**
							* 17
							*/
							public static MIN_EXTENSION_VERSION_FOR_OPEN_FILE_APIS: number;
							public static isMediaStoreUri(uri: globalAndroid.net.Uri): boolean;
							public static isMediaStoreVideoUri(uri: globalAndroid.net.Uri): boolean;
							public static openAssetFileDescriptor(uri: globalAndroid.net.Uri, contentResolver: globalAndroid.content.ContentResolver): globalAndroid.content.res.AssetFileDescriptor;
							public static isAndroidPickerUri(uri: globalAndroid.net.Uri): boolean;
							public static isMediaStoreImageUri(uri: globalAndroid.net.Uri): boolean;
							public static isMediaStoreOpenFileApisAvailable(): boolean;
							public static isThumbnailSize(width: number, height: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export namespace mediastore {
						export class ThumbFetcher extends com.bumptech.glide.load.data.DataFetcher<java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbFetcher>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public static buildVideoFetcher(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri): com.bumptech.glide.load.data.mediastore.ThumbFetcher;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public static buildImageFetcher(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri): com.bumptech.glide.load.data.mediastore.ThumbFetcher;
							public getDataClass(): java.lang.Class<any>;
							public loadData(this_: com.bumptech.glide.Priority, priority: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<java.io.InputStream>;
						}
						export namespace ThumbFetcher {
							export class ImageThumbnailQuery extends com.bumptech.glide.load.data.mediastore.ThumbnailQuery {
								public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbFetcher.ImageThumbnailQuery>;
								public query(param0: globalAndroid.net.Uri): globalAndroid.database.Cursor;
								public query(uri: globalAndroid.net.Uri): globalAndroid.database.Cursor;
							}
							export class VideoThumbnailQuery extends com.bumptech.glide.load.data.mediastore.ThumbnailQuery {
								public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbFetcher.VideoThumbnailQuery>;
								public query(param0: globalAndroid.net.Uri): globalAndroid.database.Cursor;
								public query(uri: globalAndroid.net.Uri): globalAndroid.database.Cursor;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export namespace mediastore {
						export class ThumbnailQuery {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbnailQuery>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.mediastore.ThumbnailQuery interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								query(param0: globalAndroid.net.Uri): globalAndroid.database.Cursor;
							});
							public constructor();
							public query(param0: globalAndroid.net.Uri): globalAndroid.database.Cursor;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace data {
					export namespace mediastore {
						export class ThumbnailStreamOpener {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbnailStreamOpener>;
							public open(this_: globalAndroid.net.Uri): java.io.InputStream;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class ActiveResources {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.ActiveResources>;
					}
					export namespace ActiveResources {
						export class DequeuedResourceCallback {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.ActiveResources.DequeuedResourceCallback>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.ActiveResources$DequeuedResourceCallback interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								onResourceDequeued(): void;
							});
							public constructor();
							public onResourceDequeued(): void;
						}
						export class ResourceWeakReference extends java.lang.ref.WeakReference<com.bumptech.glide.load.engine.EngineResource<any>> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.ActiveResources.ResourceWeakReference>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class CallbackException {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.CallbackException>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class DataCacheGenerator extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DataCacheGenerator>;
						public startNext(): boolean;
						public onLoadFailed(param0: java.lang.Exception): void;
						public onLoadFailed(e: java.lang.Exception): void;
						public cancel(): void;
						public onDataReady(data: any): void;
						public onDataReady(param0: any): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class DataCacheKey extends com.bumptech.glide.load.Key {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DataCacheKey>;
						public equals(this_: any): boolean;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class DataCacheWriter<DataType>  extends com.bumptech.glide.load.engine.cache.DiskCache.Writer {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DataCacheWriter<any>>;
						public write(param0: java.io.File): boolean;
						public write(file: java.io.File): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class DataFetcherGenerator {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DataFetcherGenerator>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.DataFetcherGenerator interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							startNext(): boolean;
							cancel(): void;
						});
						public constructor();
						public startNext(): boolean;
						public cancel(): void;
					}
					export namespace DataFetcherGenerator {
						export class FetcherReadyCallback {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DataFetcherGenerator.FetcherReadyCallback>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DataFetcherGenerator$FetcherReadyCallback interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								reschedule(): void;
								onDataFetcherReady(param0: com.bumptech.glide.load.Key, param1: any, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource, param4: com.bumptech.glide.load.Key): void;
								onDataFetcherFailed(param0: com.bumptech.glide.load.Key, param1: java.lang.Exception, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource): void;
							});
							public constructor();
							public reschedule(): void;
							public onDataFetcherFailed(param0: com.bumptech.glide.load.Key, param1: java.lang.Exception, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource): void;
							public onDataFetcherReady(param0: com.bumptech.glide.load.Key, param1: any, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource, param4: com.bumptech.glide.load.Key): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class DecodeHelper<Transcode>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeHelper<any>>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class DecodeJob<R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob<any>>;
						public static GLIDE_THREAD_PRIORITY_OVERRIDE: com.bumptech.glide.load.Option<any>;
						public onDataFetcherReady(sourceKey: com.bumptech.glide.load.Key, data: any, fetcher: com.bumptech.glide.load.data.DataFetcher<any>, dataSource: com.bumptech.glide.load.DataSource, attemptedKey: com.bumptech.glide.load.Key): void;
						public run(): void;
						public onDataFetcherReady(param0: com.bumptech.glide.load.Key, param1: any, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource, param4: com.bumptech.glide.load.Key): void;
						public cancel(): void;
						public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
						public onDataFetcherFailed(attemptedKey: com.bumptech.glide.load.Key, e: java.lang.Exception, fetcher: com.bumptech.glide.load.data.DataFetcher<any>, dataSource: com.bumptech.glide.load.DataSource): void;
						public compareTo(other: com.bumptech.glide.load.engine.DecodeJob<any>): number;
						public reschedule(): void;
						public onDataFetcherFailed(param0: com.bumptech.glide.load.Key, param1: java.lang.Exception, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource): void;
					}
					export namespace DecodeJob {
						export class Callback<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.Callback<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DecodeJob$Callback interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								onResourceReady(param0: com.bumptech.glide.load.engine.Resource<R>, param1: com.bumptech.glide.load.DataSource, param2: boolean): void;
								onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
								reschedule(param0: com.bumptech.glide.load.engine.DecodeJob<any>): void;
							});
							public constructor();
							public onResourceReady(param0: com.bumptech.glide.load.engine.Resource<R>, param1: com.bumptech.glide.load.DataSource, param2: boolean): void;
							public reschedule(param0: com.bumptech.glide.load.engine.DecodeJob<any>): void;
							public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
						}
						export class DecodeCallback<Z>  extends com.bumptech.glide.load.engine.DecodePath.DecodeCallback<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.DecodeCallback<any>>;
							public onResourceDecoded(param0: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
							public onResourceDecoded(decoded: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
						}
						export class DeferredEncodeManager<Z>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.DeferredEncodeManager<any>>;
						}
						export class DiskCacheProvider {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.DiskCacheProvider>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DecodeJob$DiskCacheProvider interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
							});
							public constructor();
							public getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
						}
						export class ReleaseManager {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.ReleaseManager>;
						}
						export class RunReason {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.RunReason>;
							public static INITIALIZE: com.bumptech.glide.load.engine.DecodeJob.RunReason;
							public static SWITCH_TO_SOURCE_SERVICE: com.bumptech.glide.load.engine.DecodeJob.RunReason;
							public static DECODE_DATA: com.bumptech.glide.load.engine.DecodeJob.RunReason;
							public static values(): androidNative.Array<com.bumptech.glide.load.engine.DecodeJob.RunReason>;
							public static valueOf(name: string): com.bumptech.glide.load.engine.DecodeJob.RunReason;
						}
						export class Stage {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.Stage>;
							public static INITIALIZE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static RESOURCE_CACHE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static DATA_CACHE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static SOURCE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static ENCODE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static FINISHED: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static valueOf(name: string): com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static values(): androidNative.Array<com.bumptech.glide.load.engine.DecodeJob.Stage>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class DecodePath<DataType, ResourceType, Transcode>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodePath<any,any,any>>;
						public constructor(dataClass: java.lang.Class<DataType>, resourceClass: java.lang.Class<ResourceType>, transcodeClass: java.lang.Class<Transcode>, decoders: java.util.List<any>, transcoder: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<ResourceType,Transcode>, listPool: androidx.core.util.Pools.Pool<java.util.List<java.lang.Throwable>>);
						public decode(rewinder: com.bumptech.glide.load.data.DataRewinder<DataType>, width: number, height: number, options: com.bumptech.glide.load.Options, callback: com.bumptech.glide.load.engine.DecodePath.DecodeCallback<ResourceType>): com.bumptech.glide.load.engine.Resource<Transcode>;
						public toString(): string;
					}
					export namespace DecodePath {
						export class DecodeCallback<ResourceType>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodePath.DecodeCallback<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DecodePath$DecodeCallback interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								onResourceDecoded(param0: com.bumptech.glide.load.engine.Resource<ResourceType>): com.bumptech.glide.load.engine.Resource<ResourceType>;
							});
							public constructor();
							public onResourceDecoded(param0: com.bumptech.glide.load.engine.Resource<ResourceType>): com.bumptech.glide.load.engine.Resource<ResourceType>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export abstract class DiskCacheStrategy {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DiskCacheStrategy>;
						public static ALL: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static NONE: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static DATA: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static RESOURCE: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static AUTOMATIC: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public constructor();
						public decodeCachedData(): boolean;
						public decodeCachedResource(): boolean;
						public isDataCacheable(param0: com.bumptech.glide.load.DataSource): boolean;
						public isResourceCacheable(param0: boolean, param1: com.bumptech.glide.load.DataSource, param2: com.bumptech.glide.load.EncodeStrategy): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class Engine implements com.bumptech.glide.load.engine.EngineJobListener, com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener, com.bumptech.glide.load.engine.EngineResource.ResourceListener {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine>;
						public onEngineJobComplete(engineJob: com.bumptech.glide.load.engine.EngineJob<any>, key: com.bumptech.glide.load.Key, resource: com.bumptech.glide.load.engine.EngineResource<any>): void;
						public onResourceRemoved(resource: com.bumptech.glide.load.engine.Resource<any>): void;
						public onEngineJobCancelled(engineJob: com.bumptech.glide.load.engine.EngineJob<any>, key: com.bumptech.glide.load.Key): void;
						public onEngineJobComplete(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key, param2: com.bumptech.glide.load.engine.EngineResource<any>): void;
						public load(this_: com.bumptech.glide.GlideContext, glideContext: any, model: com.bumptech.glide.load.Key, signature: number, width: number, height: java.lang.Class<any>, resourceClass: java.lang.Class<any>, transcodeClass: com.bumptech.glide.Priority, priority: com.bumptech.glide.load.engine.DiskCacheStrategy, diskCacheStrategy: java.util.Map<any,any>, transformations: boolean, isTransformationRequired: boolean, isScaleOnlyOrNoTransform: com.bumptech.glide.load.Options, options: boolean, isMemoryCacheable: boolean, useUnlimitedSourceExecutorPool: boolean, useAnimationPool: boolean, onlyRetrieveFromCache: com.bumptech.glide.request.ResourceCallback, cb: java.util.concurrent.Executor): com.bumptech.glide.load.engine.Engine.LoadStatus;
						public constructor(memoryCache: com.bumptech.glide.load.engine.cache.MemoryCache, diskCacheFactory: com.bumptech.glide.load.engine.cache.DiskCache.Factory, diskCacheExecutor: com.bumptech.glide.load.engine.executor.GlideExecutor, sourceExecutor: com.bumptech.glide.load.engine.executor.GlideExecutor, sourceUnlimitedExecutor: com.bumptech.glide.load.engine.executor.GlideExecutor, animationExecutor: com.bumptech.glide.load.engine.executor.GlideExecutor, isActiveResourceRetentionAllowed: boolean);
						public clearDiskCache(): void;
						public shutdown(): void;
						public release(resource: com.bumptech.glide.load.engine.Resource<any>): void;
						public onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key): void;
						public onResourceReleased(cacheKey: com.bumptech.glide.load.Key, resource: com.bumptech.glide.load.engine.EngineResource<any>): void;
						public onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource<any>): void;
						public onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource<any>): void;
					}
					export namespace Engine {
						export class DecodeJobFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine.DecodeJobFactory>;
						}
						export class EngineJobFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine.EngineJobFactory>;
						}
						export class LazyDiskCacheProvider extends com.bumptech.glide.load.engine.DecodeJob.DiskCacheProvider {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine.LazyDiskCacheProvider>;
							public getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
						}
						export class LoadStatus {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine.LoadStatus>;
							public cancel(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class EngineJob<R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob<any>>;
						public onResourceReady(resource: com.bumptech.glide.load.engine.Resource<R>, dataSource: com.bumptech.glide.load.DataSource, isLoadedFromAlternateCacheKey: boolean): void;
						public reschedule(param0: com.bumptech.glide.load.engine.DecodeJob<any>): void;
						public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
						public onLoadFailed(e: com.bumptech.glide.load.engine.GlideException): void;
						public reschedule(job: com.bumptech.glide.load.engine.DecodeJob<any>): void;
						public start(decodeJob: com.bumptech.glide.load.engine.DecodeJob<R>): void;
						public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
						public onResourceReady(param0: com.bumptech.glide.load.engine.Resource<R>, param1: com.bumptech.glide.load.DataSource, param2: boolean): void;
					}
					export namespace EngineJob {
						export class CallLoadFailed {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.CallLoadFailed>;
							public run(): void;
						}
						export class CallResourceReady {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.CallResourceReady>;
							public run(): void;
						}
						export class EngineResourceFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.EngineResourceFactory>;
							public build(resource: com.bumptech.glide.load.engine.Resource<any>, isMemoryCacheable: boolean, key: com.bumptech.glide.load.Key, listener: com.bumptech.glide.load.engine.EngineResource.ResourceListener): com.bumptech.glide.load.engine.EngineResource<any>;
						}
						export class ResourceCallbackAndExecutor {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.ResourceCallbackAndExecutor>;
							public hashCode(): number;
							public equals(this_: any): boolean;
						}
						export class ResourceCallbacksAndExecutors extends java.lang.Iterable<com.bumptech.glide.load.engine.EngineJob.ResourceCallbackAndExecutor> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.ResourceCallbacksAndExecutors>;
							public iterator(): java.util.Iterator<com.bumptech.glide.load.engine.EngineJob.ResourceCallbackAndExecutor>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class EngineJobListener {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJobListener>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.EngineJobListener interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							onEngineJobComplete(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key, param2: com.bumptech.glide.load.engine.EngineResource<any>): void;
							onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key): void;
						});
						public constructor();
						public onEngineJobComplete(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key, param2: com.bumptech.glide.load.engine.EngineResource<any>): void;
						public onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class EngineKey extends com.bumptech.glide.load.Key {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineKey>;
						public equals(this_: any): boolean;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class EngineKeyFactory {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineKeyFactory>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class EngineResource<Z>  extends com.bumptech.glide.load.engine.Resource<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineResource<any>>;
						public getResourceClass(): java.lang.Class<any>;
						public getSize(): number;
						public recycle(): void;
						public get(): any;
						public toString(): string;
					}
					export namespace EngineResource {
						export class ResourceListener {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineResource.ResourceListener>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.EngineResource$ResourceListener interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource<any>): void;
							});
							public constructor();
							public onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource<any>): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class GlideException {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.GlideException>;
						public getMessage(): string;
						public constructor(detailMessage: string, cause: java.lang.Throwable);
						public constructor(detailMessage: string, causes: java.util.List<java.lang.Throwable>);
						public setOrigin(exception: java.lang.Exception): void;
						public logRootCauses(size: string): void;
						public printStackTrace(err: java.io.PrintStream): void;
						public printStackTrace(err: java.io.PrintWriter): void;
						public getRootCauses(): java.util.List<java.lang.Throwable>;
						public constructor(message: string);
						public getOrigin(): java.lang.Exception;
						public getCauses(): java.util.List<java.lang.Throwable>;
						public fillInStackTrace(): java.lang.Throwable;
						public printStackTrace(): void;
					}
					export namespace GlideException {
						export class IndentedAppendable {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.GlideException.IndentedAppendable>;
							public append(charSequence: string, start: number, end: number): java.lang.Appendable;
							public append(charSequence: string): java.lang.Appendable;
							public append(c: string): java.lang.Appendable;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class Initializable {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.Initializable>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.Initializable interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							initialize(): void;
						});
						public constructor();
						public initialize(): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class Jobs {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.Jobs>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class LoadPath<Data, ResourceType, Transcode>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.LoadPath<any,any,any>>;
						public load(rewinder: com.bumptech.glide.load.data.DataRewinder<Data>, options: com.bumptech.glide.load.Options, width: number, height: number, decodeCallback: com.bumptech.glide.load.engine.DecodePath.DecodeCallback<ResourceType>): com.bumptech.glide.load.engine.Resource<Transcode>;
						public getDataClass(): java.lang.Class<Data>;
						public constructor(dataClass: java.lang.Class<Data>, resourceClass: java.lang.Class<ResourceType>, transcodeClass: java.lang.Class<Transcode>, decodePaths: java.util.List<com.bumptech.glide.load.engine.DecodePath<Data,ResourceType,Transcode>>, listPool: androidx.core.util.Pools.Pool<java.util.List<java.lang.Throwable>>);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class LockedResource<Z>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.LockedResource<any>>;
						public getSize(): number;
						public get(): Z;
						public recycle(): void;
						public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
						public getResourceClass(): java.lang.Class<Z>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class Resource<Z>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.Resource<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.Resource<any> interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							getResourceClass(): java.lang.Class<Z>;
							get(): Z;
							getSize(): number;
							recycle(): void;
						});
						public constructor();
						public getSize(): number;
						public get(): Z;
						public recycle(): void;
						public getResourceClass(): java.lang.Class<Z>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class ResourceCacheGenerator extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.ResourceCacheGenerator>;
						public startNext(): boolean;
						public onLoadFailed(param0: java.lang.Exception): void;
						public onLoadFailed(e: java.lang.Exception): void;
						public cancel(): void;
						public onDataReady(data: any): void;
						public onDataReady(param0: any): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class ResourceCacheKey extends com.bumptech.glide.load.Key {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.ResourceCacheKey>;
						public equals(this_: any): boolean;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class ResourceRecycler {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.ResourceRecycler>;
					}
					export namespace ResourceRecycler {
						export class ResourceRecyclerCallback {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.ResourceRecycler.ResourceRecyclerCallback>;
							public handleMessage(this_: globalAndroid.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export class SourceGenerator implements com.bumptech.glide.load.engine.DataFetcherGenerator, com.bumptech.glide.load.engine.DataFetcherGenerator.FetcherReadyCallback {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.SourceGenerator>;
						public startNext(): boolean;
						public onDataFetcherReady(sourceKey: com.bumptech.glide.load.Key, data: any, fetcher: com.bumptech.glide.load.data.DataFetcher<any>, dataSource: com.bumptech.glide.load.DataSource, attemptedKey: com.bumptech.glide.load.Key): void;
						public onDataFetcherReady(param0: com.bumptech.glide.load.Key, param1: any, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource, param4: com.bumptech.glide.load.Key): void;
						public onDataFetcherFailed(sourceKey: com.bumptech.glide.load.Key, e: java.lang.Exception, fetcher: com.bumptech.glide.load.data.DataFetcher<any>, dataSource: com.bumptech.glide.load.DataSource): void;
						public cancel(): void;
						public reschedule(): void;
						public onDataFetcherFailed(param0: com.bumptech.glide.load.Key, param1: java.lang.Exception, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class ArrayAdapterInterface<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface<any> interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								getTag(): string;
								getArrayLength(param0: T): number;
								newArray(param0: number): T;
								getElementSizeInBytes(): number;
							});
							public constructor();
							public newArray(param0: number): T;
							public getArrayLength(param0: T): number;
							public getElementSizeInBytes(): number;
							public getTag(): string;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class ArrayPool {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								put(param0: any, param1: java.lang.Class<any>): void;
								put(param0: any): void;
								get(param0: number, param1: java.lang.Class<any>): any;
								getExact(param0: number, param1: java.lang.Class<any>): any;
								clearMemory(): void;
								trimMemory(param0: number): void;
							});
							public constructor();
							/**
							* 65536
							*/
							public static STANDARD_BUFFER_SIZE_BYTES: number;
							public get(param0: number, param1: java.lang.Class<any>): any;
							/** @deprecated */
							public put(param0: any, param1: java.lang.Class<any>): void;
							public getExact(param0: number, param1: java.lang.Class<any>): any;
							public put(param0: any): void;
							public clearMemory(): void;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class AttributeStrategy extends com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy>;
							public logBitmap(bitmap: globalAndroid.graphics.Bitmap): string;
							public getSize(bitmap: globalAndroid.graphics.Bitmap): number;
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public logBitmap(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): string;
							public logBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): string;
							public getSize(param0: globalAndroid.graphics.Bitmap): number;
							public get(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public toString(): string;
							public put(bitmap: globalAndroid.graphics.Bitmap): void;
							public removeLast(): globalAndroid.graphics.Bitmap;
							public logBitmap(param0: globalAndroid.graphics.Bitmap): string;
						}
						export namespace AttributeStrategy {
							export class Key extends com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.Key>;
								public toString(): string;
								public constructor(pool: com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.KeyPool);
								public offer(): void;
								public hashCode(): number;
								public init(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): void;
								public equals(this_: any): boolean;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.Key> {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.KeyPool>;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.Key;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export abstract class BaseKeyPool<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<any>>;
							public offer(key: T): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class BitmapPool {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								getMaxSize(): number;
								setSizeMultiplier(param0: number): void;
								put(param0: globalAndroid.graphics.Bitmap): void;
								get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
								getDirty(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
								clearMemory(): void;
								trimMemory(param0: number): void;
							});
							public constructor();
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public clearMemory(): void;
							public getDirty(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public setSizeMultiplier(param0: number): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class BitmapPoolAdapter extends com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.BitmapPoolAdapter>;
							public constructor();
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public getDirty(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public getDirty(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public setSizeMultiplier(param0: number): void;
							public setSizeMultiplier(sizeMultiplier: number): void;
							public trimMemory(level: number): void;
							public get(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public clearMemory(): void;
							public put(bitmap: globalAndroid.graphics.Bitmap): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class ByteArrayAdapter extends com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface<androidNative.Array<number>> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.ByteArrayAdapter>;
							public constructor();
							public getArrayLength(param0: any): number;
							public newArray(length: number): androidNative.Array<number>;
							public getArrayLength(array: androidNative.Array<number>): number;
							public getElementSizeInBytes(): number;
							public newArray(param0: number): any;
							public getTag(): string;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class GroupedLinkedMap<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.GroupedLinkedMap<any,any>>;
							public get(key: K): V;
							public put(key: K, value: V): void;
							public toString(): string;
							public removeLast(): V;
						}
						export namespace GroupedLinkedMap {
							export class LinkedEntry<K, V>  extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.GroupedLinkedMap.LinkedEntry<any,any>>;
								public size(): number;
								public removeLast(): V;
								public add(value: V): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class IntegerArrayAdapter extends com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface<androidNative.Array<number>> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.IntegerArrayAdapter>;
							public constructor();
							public getArrayLength(param0: any): number;
							public newArray(length: number): androidNative.Array<number>;
							public getArrayLength(array: androidNative.Array<number>): number;
							public getElementSizeInBytes(): number;
							public newArray(param0: number): any;
							public getTag(): string;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class LruArrayPool extends com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool>;
							public constructor();
							public get(this_: number, size: java.lang.Class<any>): any;
							public get(param0: number, param1: java.lang.Class<any>): any;
							/** @deprecated */
							public put(param0: any, param1: java.lang.Class<any>): void;
							public getExact(size: number, arrayClass: java.lang.Class<any>): any;
							public getExact(param0: number, param1: java.lang.Class<any>): any;
							public put(param0: any): void;
							public constructor(maxSize: number);
							public put(array: any): void;
							/** @deprecated */
							public put(array: any, arrayClass: java.lang.Class<any>): void;
							public trimMemory(level: number): void;
							public clearMemory(): void;
							public trimMemory(param0: number): void;
						}
						export namespace LruArrayPool {
							export class Key extends com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool.Key>;
								public toString(): string;
								public offer(): void;
								public hashCode(): number;
								public equals(this_: any): boolean;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool.Key> {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool.KeyPool>;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool.Key;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class LruBitmapPool extends com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool>;
							public getCurrentSize(): number;
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public constructor(maxSize: number, allowedConfigs: java.util.Set<globalAndroid.graphics.Bitmap.Config>);
							public missCount(): number;
							public getDirty(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public constructor(maxSize: number);
							public getDirty(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public setSizeMultiplier(param0: number): void;
							public evictionCount(): number;
							public setSizeMultiplier(sizeMultiplier: number): void;
							public trimMemory(level: number): void;
							public get(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public hitCount(): number;
							public clearMemory(): void;
							public put(bitmap: globalAndroid.graphics.Bitmap): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
						export namespace LruBitmapPool {
							export class BitmapTracker {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.BitmapTracker>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool$BitmapTracker interface with the provided implementation.
								 * An empty constructor exists calling super().
								 */
								public constructor(implementation: {
									add(param0: globalAndroid.graphics.Bitmap): void;
									remove(param0: globalAndroid.graphics.Bitmap): void;
								});
								public constructor();
								public remove(param0: globalAndroid.graphics.Bitmap): void;
								public add(param0: globalAndroid.graphics.Bitmap): void;
							}
							export class NullBitmapTracker extends com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.BitmapTracker {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.NullBitmapTracker>;
								public remove(bitmap: globalAndroid.graphics.Bitmap): void;
								public remove(param0: globalAndroid.graphics.Bitmap): void;
								public add(bitmap: globalAndroid.graphics.Bitmap): void;
								public add(param0: globalAndroid.graphics.Bitmap): void;
							}
							export class ThrowingBitmapTracker extends com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.BitmapTracker {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.ThrowingBitmapTracker>;
								public remove(bitmap: globalAndroid.graphics.Bitmap): void;
								public remove(param0: globalAndroid.graphics.Bitmap): void;
								public add(bitmap: globalAndroid.graphics.Bitmap): void;
								public add(param0: globalAndroid.graphics.Bitmap): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class LruPoolStrategy {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								put(param0: globalAndroid.graphics.Bitmap): void;
								get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
								removeLast(): globalAndroid.graphics.Bitmap;
								logBitmap(param0: globalAndroid.graphics.Bitmap): string;
								logBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): string;
								getSize(param0: globalAndroid.graphics.Bitmap): number;
							});
							public constructor();
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public logBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): string;
							public getSize(param0: globalAndroid.graphics.Bitmap): number;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public removeLast(): globalAndroid.graphics.Bitmap;
							public logBitmap(param0: globalAndroid.graphics.Bitmap): string;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class Poolable {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.Poolable>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.Poolable interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								offer(): void;
							});
							public constructor();
							public offer(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class PrettyPrintTreeMap<K, V>  extends java.util.TreeMap<any,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.PrettyPrintTreeMap<any,any>>;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class SizeConfigStrategy extends com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy>;
							public constructor();
							public getSize(bitmap: globalAndroid.graphics.Bitmap): number;
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public logBitmap(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): string;
							public toString(): string;
							public logBitmap(bitmap: globalAndroid.graphics.Bitmap): string;
							public logBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): string;
							public getSize(param0: globalAndroid.graphics.Bitmap): number;
							public get(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public put(bitmap: globalAndroid.graphics.Bitmap): void;
							public removeLast(): globalAndroid.graphics.Bitmap;
							public logBitmap(param0: globalAndroid.graphics.Bitmap): string;
						}
						export namespace SizeConfigStrategy {
							export class Key extends com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key>;
								public toString(): string;
								public constructor(pool: com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.KeyPool);
								public offer(): void;
								public init(size: number, config: globalAndroid.graphics.Bitmap.Config): void;
								public hashCode(): number;
								public equals(this_: any): boolean;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key> {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.KeyPool>;
								public get(size: number, config: globalAndroid.graphics.Bitmap.Config): com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace bitmap_recycle {
						export class SizeStrategy extends com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy>;
							public logBitmap(bitmap: globalAndroid.graphics.Bitmap): string;
							public getSize(bitmap: globalAndroid.graphics.Bitmap): number;
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public logBitmap(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): string;
							public logBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): string;
							public getSize(param0: globalAndroid.graphics.Bitmap): number;
							public get(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public toString(): string;
							public put(bitmap: globalAndroid.graphics.Bitmap): void;
							public removeLast(): globalAndroid.graphics.Bitmap;
							public logBitmap(param0: globalAndroid.graphics.Bitmap): string;
						}
						export namespace SizeStrategy {
							export class Key extends com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key>;
								public toString(): string;
								public init(size: number): void;
								public offer(): void;
								public hashCode(): number;
								public equals(this_: any): boolean;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key> {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.KeyPool>;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key;
								public get(size: number): com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace cache {
						export class DiskCache {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCache>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								get(param0: com.bumptech.glide.load.Key): java.io.File;
								put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
								delete(param0: com.bumptech.glide.load.Key): void;
								clear(): void;
							});
							public constructor();
							public get(param0: com.bumptech.glide.load.Key): java.io.File;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public clear(): void;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
						export namespace DiskCache {
							export class Factory {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCache.Factory>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache$Factory interface with the provided implementation.
								 * An empty constructor exists calling super().
								 */
								public constructor(implementation: {
									build(): com.bumptech.glide.load.engine.cache.DiskCache;
								});
								public constructor();
								/**
								* "image_manager_disk_cache"
								*/
								public static DEFAULT_DISK_CACHE_DIR: string;
								/**
								* 262144000
								*/
								public static DEFAULT_DISK_CACHE_SIZE: number;
								public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							}
							export class Writer {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCache.Writer>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache$Writer interface with the provided implementation.
								 * An empty constructor exists calling super().
								 */
								public constructor(implementation: {
									write(param0: java.io.File): boolean;
								});
								public constructor();
								public write(param0: java.io.File): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace cache {
						export class DiskCacheAdapter extends com.bumptech.glide.load.engine.cache.DiskCache {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheAdapter>;
							public constructor();
							public put(key: com.bumptech.glide.load.Key, writer: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public get(param0: com.bumptech.glide.load.Key): java.io.File;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public get(key: com.bumptech.glide.load.Key): java.io.File;
							public clear(): void;
							public delete(key: com.bumptech.glide.load.Key): void;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
						export namespace DiskCacheAdapter {
							export class Factory extends com.bumptech.glide.load.engine.cache.DiskCache.Factory {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheAdapter.Factory>;
								public build(): com.bumptech.glide.load.engine.cache.DiskCache;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace cache {
						export class DiskCacheWriteLocker {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheWriteLocker>;
						}
						export namespace DiskCacheWriteLocker {
							export class WriteLock {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheWriteLocker.WriteLock>;
							}
							export class WriteLockPool {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheWriteLocker.WriteLockPool>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace cache {
						export class DiskLruCacheFactory extends com.bumptech.glide.load.engine.cache.DiskCache.Factory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskLruCacheFactory>;
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(cacheDirectoryGetter: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheName: string, diskCacheSize: number);
						}
						export namespace DiskLruCacheFactory {
							export class CacheDirectoryGetter {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskLruCacheFactory$CacheDirectoryGetter interface with the provided implementation.
								 * An empty constructor exists calling super().
								 */
								public constructor(implementation: {
									getCacheDirectory(): java.io.File;
								});
								public constructor();
								public getCacheDirectory(): java.io.File;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace cache {
						export class DiskLruCacheWrapper extends com.bumptech.glide.load.engine.cache.DiskCache {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskLruCacheWrapper>;
							public get(param0: com.bumptech.glide.load.Key): java.io.File;
							public static create(directory: java.io.File, maxSize: number): com.bumptech.glide.load.engine.cache.DiskCache;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							/** @deprecated */
							public static get(directory: java.io.File, maxSize: number): com.bumptech.glide.load.engine.cache.DiskCache;
							public get(e: com.bumptech.glide.load.Key): java.io.File;
							public clear(): void;
							/** @deprecated */
							public constructor(directory: java.io.File, maxSize: number);
							public put(diskCache: com.bumptech.glide.load.Key, current: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public delete(this_: com.bumptech.glide.load.Key): void;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace cache {
						export class ExternalCacheDiskCacheFactory extends com.bumptech.glide.load.engine.cache.DiskLruCacheFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.ExternalCacheDiskCacheFactory>;
							public constructor(context: globalAndroid.content.Context, diskCacheSize: number);
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(cacheDirectoryGetter: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheName: string, diskCacheSize: number);
							public constructor(context: globalAndroid.content.Context);
							public constructor(context: globalAndroid.content.Context, diskCacheName: string, diskCacheSize: number);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace cache {
						export class ExternalPreferredCacheDiskCacheFactory extends com.bumptech.glide.load.engine.cache.DiskLruCacheFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.ExternalPreferredCacheDiskCacheFactory>;
							public constructor(context: globalAndroid.content.Context, diskCacheSize: number);
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(cacheDirectoryGetter: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheName: string, diskCacheSize: number);
							public constructor(context: globalAndroid.content.Context);
							public constructor(context: globalAndroid.content.Context, diskCacheName: string, diskCacheSize: number);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace cache {
						export class InternalCacheDiskCacheFactory extends com.bumptech.glide.load.engine.cache.DiskLruCacheFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.InternalCacheDiskCacheFactory>;
							public constructor(context: globalAndroid.content.Context, diskCacheSize: number);
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(cacheDirectoryGetter: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheName: string, diskCacheSize: number);
							public constructor(context: globalAndroid.content.Context);
							public constructor(context: globalAndroid.content.Context, diskCacheName: string, diskCacheSize: number);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace cache {
						export class LruResourceCache extends com.bumptech.glide.util.LruCache<com.bumptech.glide.load.Key,com.bumptech.glide.load.engine.Resource<any>> implements com.bumptech.glide.load.engine.cache.MemoryCache  {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.LruResourceCache>;
							public constructor(size: number);
							public getCurrentSize(): number;
							public put(key: any, item: any): any;
							public onItemEvicted(key: com.bumptech.glide.load.Key, item: com.bumptech.glide.load.engine.Resource<any>): void;
							public setSizeMultiplier(param0: number): void;
							public getSize(item: com.bumptech.glide.load.engine.Resource<any>): number;
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public getSize(item: any): number;
							public onItemEvicted(key: any, item: any): void;
							public trimMemory(level: number): void;
							public remove(key: any): any;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
							public clearMemory(): void;
							public setResourceRemovedListener(listener: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace cache {
						export class MemoryCache {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemoryCache>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemoryCache interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								getCurrentSize(): number;
								getMaxSize(): number;
								setSizeMultiplier(param0: number): void;
								remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
								put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
								setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
								clearMemory(): void;
								trimMemory(param0: number): void;
							});
							public constructor();
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public getCurrentSize(): number;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
						export namespace MemoryCache {
							export class ResourceRemovedListener {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemoryCache$ResourceRemovedListener interface with the provided implementation.
								 * An empty constructor exists calling super().
								 */
								public constructor(implementation: {
									onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource<any>): void;
								});
								public constructor();
								public onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace cache {
						export class MemoryCacheAdapter extends com.bumptech.glide.load.engine.cache.MemoryCache {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemoryCacheAdapter>;
							public constructor();
							public setSizeMultiplier(multiplier: number): void;
							public getCurrentSize(): number;
							public remove(key: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
							public setSizeMultiplier(param0: number): void;
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public trimMemory(level: number): void;
							public put(key: com.bumptech.glide.load.Key, resource: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
							public clearMemory(): void;
							public setResourceRemovedListener(listener: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace cache {
						export class MemorySizeCalculator {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemorySizeCalculator>;
							public getMemoryCacheSize(): number;
							public getBitmapPoolSize(): number;
							public getArrayPoolSizeInBytes(): number;
						}
						export namespace MemorySizeCalculator {
							export class Builder {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder>;
								public setLowMemoryMaxSizeMultiplier(lowMemoryMaxSizeMultiplier: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
								public setMemoryCacheScreens(memoryCacheScreens: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
								public build(): com.bumptech.glide.load.engine.cache.MemorySizeCalculator;
								public setBitmapPoolScreens(bitmapPoolScreens: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
								public constructor(context: globalAndroid.content.Context);
								public setMaxSizeMultiplier(maxSizeMultiplier: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
								public setArrayPoolSize(arrayPoolSizeBytes: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
							}
							export class DisplayMetricsScreenDimensions extends com.bumptech.glide.load.engine.cache.MemorySizeCalculator.ScreenDimensions {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemorySizeCalculator.DisplayMetricsScreenDimensions>;
								public getWidthPixels(): number;
								public getHeightPixels(): number;
							}
							export class ScreenDimensions {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemorySizeCalculator.ScreenDimensions>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemorySizeCalculator$ScreenDimensions interface with the provided implementation.
								 * An empty constructor exists calling super().
								 */
								public constructor(implementation: {
									getWidthPixels(): number;
									getHeightPixels(): number;
								});
								public constructor();
								public getWidthPixels(): number;
								public getHeightPixels(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace cache {
						export class SafeKeyGenerator {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.SafeKeyGenerator>;
							public constructor();
							public getSafeKey(this_: com.bumptech.glide.load.Key): string;
						}
						export namespace SafeKeyGenerator {
							export class PoolableDigestContainer extends com.bumptech.glide.util.pool.FactoryPools.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.SafeKeyGenerator.PoolableDigestContainer>;
								public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace executor {
						export class GlideExecutor {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor>;
							/**
							* 9
							*/
							public static DEFAULT_PRIORITY: number;
							public shutdownNow(): java.util.List<java.lang.Runnable>;
							public submit(task: java.lang.Runnable, result: any): java.util.concurrent.Future<any>;
							/** @deprecated */
							public static newAnimationExecutor(threadCount: number, uncaughtThrowableStrategy: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public invokeAny(tasks: java.util.Collection<any>, timeout: number, unit: java.util.concurrent.TimeUnit): any;
							public toString(): string;
							public submit(task: java.lang.Runnable): java.util.concurrent.Future<any>;
							public static newDiskCacheExecutor(): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public static newAnimationBuilder(): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
							public static calculateBestThreadCount(): number;
							/** @deprecated */
							public static newSourceExecutor(threadCount: number, name: string, uncaughtThrowableStrategy: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public invokeAll(tasks: java.util.Collection<any>, timeout: number, unit: java.util.concurrent.TimeUnit): java.util.List<any>;
							public invokeAny(tasks: java.util.Collection<any>): any;
							public execute(command: java.lang.Runnable): void;
							public static newAnimationExecutor(): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public shutdown(): void;
							public submit(task: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
							public invokeAll(tasks: java.util.Collection<any>): java.util.List<any>;
							public static newSourceExecutor(): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public static newDiskCacheBuilder(): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
							public static newSourceBuilder(): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
							/** @deprecated */
							public static newDiskCacheExecutor(uncaughtThrowableStrategy: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public isShutdown(): boolean;
							/** @deprecated */
							public static newSourceExecutor(uncaughtThrowableStrategy: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public isTerminated(): boolean;
							public awaitTermination(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
							/** @deprecated */
							public static newDiskCacheExecutor(threadCount: number, name: string, uncaughtThrowableStrategy: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public static newUnlimitedSourceExecutor(): com.bumptech.glide.load.engine.executor.GlideExecutor;
						}
						export namespace GlideExecutor {
							export class Builder {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor.Builder>;
								/**
								* 0
								*/
								public static NO_THREAD_TIMEOUT: number;
								public setThreadTimeoutMillis(threadTimeoutMillis: number): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
								public setThreadCount(threadCount: number): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
								public build(): com.bumptech.glide.load.engine.executor.GlideExecutor;
								public setUncaughtThrowableStrategy(strategy: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
								/** @deprecated */
								public setThreadFactory(threadFactory: java.util.concurrent.ThreadFactory): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
								public setName(name: string): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
							}
							export class DefaultPriorityThreadFactory {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor.DefaultPriorityThreadFactory>;
								public newThread(runnable: java.lang.Runnable): java.lang.Thread;
							}
							export class DefaultThreadFactory {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor.DefaultThreadFactory>;
								public newThread(runnable: java.lang.Runnable): java.lang.Thread;
							}
							export class UncaughtThrowableStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.executor.GlideExecutor$UncaughtThrowableStrategy interface with the provided implementation.
								 * An empty constructor exists calling super().
								 */
								public constructor(implementation: {
									handle(param0: java.lang.Throwable): void;
									"<clinit>"(): void;
								});
								public constructor();
								public static LOG: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy;
								public static THROW: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy;
								public static IGNORE: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy;
								public static DEFAULT: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy;
								public handle(param0: java.lang.Throwable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace executor {
						export class RuntimeCompat {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.RuntimeCompat>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace prefill {
						export class BitmapPreFillRunner {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.BitmapPreFillRunner>;
							public cancel(): void;
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, memoryCache: com.bumptech.glide.load.engine.cache.MemoryCache, allocationOrder: com.bumptech.glide.load.engine.prefill.PreFillQueue);
							public run(): void;
						}
						export namespace BitmapPreFillRunner {
							export class Clock {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.BitmapPreFillRunner.Clock>;
							}
							export class UniqueKey extends com.bumptech.glide.load.Key {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.BitmapPreFillRunner.UniqueKey>;
								public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
								public equals(param0: any): boolean;
								public updateDiskCacheKey(param0: java.security.MessageDigest): void;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace prefill {
						export class BitmapPreFiller {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.BitmapPreFiller>;
							public constructor(memoryCache: com.bumptech.glide.load.engine.cache.MemoryCache, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, defaultFormat: com.bumptech.glide.load.DecodeFormat);
							public preFill(i: androidNative.Array<com.bumptech.glide.load.engine.prefill.PreFillType.Builder>): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace prefill {
						export class PreFillQueue {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.PreFillQueue>;
							public remove(): com.bumptech.glide.load.engine.prefill.PreFillType;
							public getSize(): number;
							public isEmpty(): boolean;
							public constructor(this_: java.util.Map<com.bumptech.glide.load.engine.prefill.PreFillType,java.lang.Integer>);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace engine {
					export namespace prefill {
						export class PreFillType {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.PreFillType>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public toString(): string;
						}
						export namespace PreFillType {
							export class Builder {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.PreFillType.Builder>;
								public constructor(width: number, height: number);
								public setConfig(config: globalAndroid.graphics.Bitmap.Config): com.bumptech.glide.load.engine.prefill.PreFillType.Builder;
								public constructor(size: number);
								public setWeight(weight: number): com.bumptech.glide.load.engine.prefill.PreFillType.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class AssetUriLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.AssetUriLoader<any>>;
						public constructor(assetManager: globalAndroid.content.res.AssetManager, factory: com.bumptech.glide.load.model.AssetUriLoader.AssetFetcherFactory<any>);
						public buildLoadData(model: globalAndroid.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(param0: any): boolean;
						public handles(model: globalAndroid.net.Uri): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace AssetUriLoader {
						export class AssetFetcherFactory<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.AssetUriLoader.AssetFetcherFactory<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.AssetUriLoader$AssetFetcherFactory interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								buildFetcher(param0: globalAndroid.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<Data>;
							});
							public constructor();
							public buildFetcher(param0: globalAndroid.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<Data>;
						}
						export class FileDescriptorFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.AssetUriLoader.FileDescriptorFactory>;
							public constructor(assetManager: globalAndroid.content.res.AssetManager);
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,globalAndroid.content.res.AssetFileDescriptor>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public buildFetcher(assetManager: globalAndroid.content.res.AssetManager, assetPath: string): com.bumptech.glide.load.data.DataFetcher<globalAndroid.content.res.AssetFileDescriptor>;
							public teardown(): void;
							public buildFetcher(param0: globalAndroid.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<any>;
						}
						export class StreamFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.AssetUriLoader.StreamFactory>;
							public constructor(assetManager: globalAndroid.content.res.AssetManager);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public buildFetcher(assetManager: globalAndroid.content.res.AssetManager, assetPath: string): com.bumptech.glide.load.data.DataFetcher<java.io.InputStream>;
							public teardown(): void;
							public buildFetcher(param0: globalAndroid.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<any>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class ByteArrayLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<androidNative.Array<number>,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader<any>>;
						public handles(model: androidNative.Array<number>): boolean;
						public constructor(converter: com.bumptech.glide.load.model.ByteArrayLoader.Converter<any>);
						public handles(param0: any): boolean;
						public buildLoadData(model: androidNative.Array<number>, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace ByteArrayLoader {
						export class ByteBufferFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<androidNative.Array<number>,java.nio.ByteBuffer> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader.ByteBufferFactory>;
							public constructor();
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<androidNative.Array<number>,java.nio.ByteBuffer>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
						export class Converter<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader.Converter<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.ByteArrayLoader$Converter interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								convert(param0: androidNative.Array<number>): Data;
								getDataClass(): java.lang.Class<Data>;
							});
							public constructor();
							public convert(param0: androidNative.Array<number>): Data;
							public getDataClass(): java.lang.Class<Data>;
						}
						export class Fetcher<Data>  extends com.bumptech.glide.load.data.DataFetcher<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader.Fetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
						}
						export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<androidNative.Array<number>,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader.StreamFactory>;
							public constructor();
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<androidNative.Array<number>,java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class ByteBufferEncoder extends com.bumptech.glide.load.Encoder<java.nio.ByteBuffer> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ByteBufferEncoder>;
						public constructor();
						public encode(this_: java.nio.ByteBuffer, data: java.io.File, file: com.bumptech.glide.load.Options): boolean;
						public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class ByteBufferFileLoader extends com.bumptech.glide.load.model.ModelLoader<java.io.File,java.nio.ByteBuffer> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ByteBufferFileLoader>;
						public constructor();
						public handles(file: java.io.File): boolean;
						public handles(param0: any): boolean;
						public buildLoadData(file: java.io.File, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.nio.ByteBuffer>;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace ByteBufferFileLoader {
						export class ByteBufferFetcher extends com.bumptech.glide.load.data.DataFetcher<java.nio.ByteBuffer> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteBufferFileLoader.ByteBufferFetcher>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(e: com.bumptech.glide.Priority, this_: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<java.nio.ByteBuffer>;
							public getDataClass(): java.lang.Class<any>;
						}
						export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.io.File,java.nio.ByteBuffer> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteBufferFileLoader.Factory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.io.File,java.nio.ByteBuffer>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class DataUrlLoader<Model, Data>  extends com.bumptech.glide.load.model.ModelLoader<any,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.DataUrlLoader<any,any>>;
						public buildLoadData(model: any, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(model: any): boolean;
						public handles(param0: any): boolean;
						public constructor(dataDecoder: com.bumptech.glide.load.model.DataUrlLoader.DataDecoder<any>);
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace DataUrlLoader {
						export class DataDecoder<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DataUrlLoader.DataDecoder<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.DataUrlLoader$DataDecoder interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								decode(param0: string): Data;
								close(param0: Data): void;
								getDataClass(): java.lang.Class<Data>;
							});
							public constructor();
							public close(param0: Data): void;
							public getDataClass(): java.lang.Class<Data>;
							public decode(param0: string): Data;
						}
						export class DataUriFetcher<Data>  extends com.bumptech.glide.load.data.DataFetcher<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DataUrlLoader.DataUriFetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
							public loadData(this_: com.bumptech.glide.Priority, priority: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						}
						export class StreamFactory<Model>  extends com.bumptech.glide.load.model.ModelLoaderFactory<any,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DataUrlLoader.StreamFactory<any>>;
							public constructor();
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class DirectResourceLoader<DataT>  extends com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.DirectResourceLoader<any>>;
						public buildLoadData(resourceId: java.lang.Integer, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(integer: java.lang.Integer): boolean;
						public handles(param0: any): boolean;
						public static inputStreamFactory(context: globalAndroid.content.Context): com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,java.io.InputStream>;
						public static drawableFactory(context: globalAndroid.content.Context): com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,globalAndroid.graphics.drawable.Drawable>;
						public static assetFileDescriptorFactory(context: globalAndroid.content.Context): com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,globalAndroid.content.res.AssetFileDescriptor>;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace DirectResourceLoader {
						export class AssetFileDescriptorFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DirectResourceLoader.AssetFileDescriptorFactory>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,globalAndroid.content.res.AssetFileDescriptor>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public open(theme: globalAndroid.content.res.Resources.Theme, resources: globalAndroid.content.res.Resources, resourceId: number): globalAndroid.content.res.AssetFileDescriptor;
							public getDataClass(): java.lang.Class<globalAndroid.content.res.AssetFileDescriptor>;
							public open(param0: globalAndroid.content.res.Resources.Theme, param1: globalAndroid.content.res.Resources, param2: number): any;
							public teardown(): void;
							public close(data: globalAndroid.content.res.AssetFileDescriptor): void;
							public getDataClass(): java.lang.Class<any>;
							public close(param0: any): void;
						}
						export class DrawableFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DirectResourceLoader.DrawableFactory>;
							public getDataClass(): java.lang.Class<globalAndroid.graphics.drawable.Drawable>;
							public close(data: globalAndroid.graphics.drawable.Drawable): void;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,globalAndroid.graphics.drawable.Drawable>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public open(theme: globalAndroid.content.res.Resources.Theme, resources: globalAndroid.content.res.Resources, resourceId: number): globalAndroid.graphics.drawable.Drawable;
							public open(param0: globalAndroid.content.res.Resources.Theme, param1: globalAndroid.content.res.Resources, param2: number): any;
							public teardown(): void;
							public getDataClass(): java.lang.Class<any>;
							public close(param0: any): void;
						}
						export class InputStreamFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DirectResourceLoader.InputStreamFactory>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public open(theme: globalAndroid.content.res.Resources.Theme, resources: globalAndroid.content.res.Resources, resourceId: number): java.io.InputStream;
							public open(param0: globalAndroid.content.res.Resources.Theme, param1: globalAndroid.content.res.Resources, param2: number): any;
							public close(data: java.io.InputStream): void;
							public teardown(): void;
							public getDataClass(): java.lang.Class<any>;
							public close(param0: any): void;
							public getDataClass(): java.lang.Class<java.io.InputStream>;
						}
						export class ResourceDataFetcher<DataT>  extends com.bumptech.glide.load.data.DataFetcher<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DirectResourceLoader.ResourceDataFetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
							public loadData(this_: com.bumptech.glide.Priority, priority: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						}
						export class ResourceOpener<DataT>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DirectResourceLoader.ResourceOpener<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.DirectResourceLoader$ResourceOpener interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								open(param0: globalAndroid.content.res.Resources.Theme, param1: globalAndroid.content.res.Resources, param2: number): DataT;
								close(param0: DataT): void;
								getDataClass(): java.lang.Class<DataT>;
							});
							public constructor();
							public open(param0: globalAndroid.content.res.Resources.Theme, param1: globalAndroid.content.res.Resources, param2: number): DataT;
							public close(param0: DataT): void;
							public getDataClass(): java.lang.Class<DataT>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class FileLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<java.io.File,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader<any>>;
						public handles(model: java.io.File): boolean;
						public buildLoadData(model: java.io.File, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public constructor(fileOpener: com.bumptech.glide.load.model.FileLoader.FileOpener<any>);
						public handles(param0: any): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace FileLoader {
						export class Factory<Data>  extends com.bumptech.glide.load.model.ModelLoaderFactory<java.io.File,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.Factory<any>>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public constructor(opener: com.bumptech.glide.load.model.FileLoader.FileOpener<any>);
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.io.File,any>;
						}
						export class FileDescriptorFactory extends com.bumptech.glide.load.model.FileLoader.Factory<globalAndroid.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.FileDescriptorFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public constructor(opener: com.bumptech.glide.load.model.FileLoader.FileOpener<any>);
						}
						export class FileFetcher<Data>  extends com.bumptech.glide.load.data.DataFetcher<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.FileFetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
							public loadData(this_: com.bumptech.glide.Priority, priority: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						}
						export class FileOpener<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.FileOpener<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.FileLoader$FileOpener interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								open(param0: java.io.File): Data;
								close(param0: Data): void;
								getDataClass(): java.lang.Class<Data>;
							});
							public constructor();
							public close(param0: Data): void;
							public open(param0: java.io.File): Data;
							public getDataClass(): java.lang.Class<Data>;
						}
						export class StreamFactory extends com.bumptech.glide.load.model.FileLoader.Factory<java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.StreamFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public constructor(opener: com.bumptech.glide.load.model.FileLoader.FileOpener<any>);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class GlideUrl extends com.bumptech.glide.load.Key {
						public static class: java.lang.Class<com.bumptech.glide.load.model.GlideUrl>;
						public equals(this_: any): boolean;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public toStringUrl(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toURL(): java.net.URL;
						public toString(): string;
						public constructor(url: java.net.URL);
						public getCacheKey(): string;
						public getHeaders(): java.util.Map<string,string>;
						public constructor(url: string, headers: com.bumptech.glide.load.model.Headers);
						public constructor(url: java.net.URL, headers: com.bumptech.glide.load.model.Headers);
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public constructor(url: string);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class Headers {
						public static class: java.lang.Class<com.bumptech.glide.load.model.Headers>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.Headers interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							getHeaders(): java.util.Map<string,string>;
							"<clinit>"(): void;
						});
						public constructor();
						public static DEFAULT: com.bumptech.glide.load.model.Headers;
						public static NONE: com.bumptech.glide.load.model.Headers;
						public getHeaders(): java.util.Map<string,string>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class LazyHeaderFactory {
						public static class: java.lang.Class<com.bumptech.glide.load.model.LazyHeaderFactory>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.LazyHeaderFactory interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							buildHeader(): string;
						});
						public constructor();
						public buildHeader(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class LazyHeaders extends com.bumptech.glide.load.model.Headers {
						public static class: java.lang.Class<com.bumptech.glide.load.model.LazyHeaders>;
						public equals(this_: any): boolean;
						public getHeaders(): java.util.Map<string,string>;
						public hashCode(): number;
						public toString(): string;
					}
					export namespace LazyHeaders {
						export class Builder {
							public static class: java.lang.Class<com.bumptech.glide.load.model.LazyHeaders.Builder>;
							public constructor();
							public setHeader(key: string, value: string): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public addHeader(key: string, factory: com.bumptech.glide.load.model.LazyHeaderFactory): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public addHeader(key: string, value: string): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public build(): com.bumptech.glide.load.model.LazyHeaders;
							public setHeader(this_: string, key: com.bumptech.glide.load.model.LazyHeaderFactory): com.bumptech.glide.load.model.LazyHeaders.Builder;
						}
						export class StringHeaderFactory extends com.bumptech.glide.load.model.LazyHeaderFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.model.LazyHeaders.StringHeaderFactory>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public toString(): string;
							public buildHeader(): string;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class MediaStoreFileLoader extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.File> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.MediaStoreFileLoader>;
						public buildLoadData(uri: globalAndroid.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.File>;
						public handles(uri: globalAndroid.net.Uri): boolean;
						public handles(param0: any): boolean;
						public constructor(context: globalAndroid.content.Context);
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace MediaStoreFileLoader {
						export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,java.io.File> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MediaStoreFileLoader.Factory>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.File>;
							public teardown(): void;
							public constructor(context: globalAndroid.content.Context);
						}
						export class FilePathFetcher extends com.bumptech.glide.load.data.DataFetcher<java.io.File> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MediaStoreFileLoader.FilePathFetcher>;
							public cancel(): void;
							public cleanup(): void;
							public getDataClass(): java.lang.Class<java.io.File>;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class Model {
						public static class: java.lang.Class<com.bumptech.glide.load.model.Model>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.Model interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							isEquivalentTo(param0: any): boolean;
						});
						public constructor();
						public isEquivalentTo(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class ModelCache<A, B>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ModelCache<any,any>>;
						public constructor();
						public constructor(size: number);
						public put(model: A, width: number, height: number, value: B): void;
						public clear(): void;
						public get(model: A, width: number, height: number): B;
					}
					export namespace ModelCache {
						export class ModelKey<A>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ModelCache.ModelKey<any>>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public release(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class ModelLoader<Model, Data>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoader<any,any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.ModelLoader<any,any> interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							buildLoadData(param0: Model, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<Data>;
							handles(param0: Model): boolean;
						});
						public constructor();
						public buildLoadData(param0: Model, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<Data>;
						public handles(param0: Model): boolean;
					}
					export namespace ModelLoader {
						export class LoadData<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoader.LoadData<any>>;
							public sourceKey: com.bumptech.glide.load.Key;
							public alternateKeys: java.util.List<com.bumptech.glide.load.Key>;
							public fetcher: com.bumptech.glide.load.data.DataFetcher<Data>;
							public constructor(sourceKey: com.bumptech.glide.load.Key, fetcher: com.bumptech.glide.load.data.DataFetcher<Data>);
							public constructor(sourceKey: com.bumptech.glide.load.Key, alternateKeys: java.util.List<com.bumptech.glide.load.Key>, fetcher: com.bumptech.glide.load.data.DataFetcher<Data>);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class ModelLoaderFactory<T, Y>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoaderFactory<any,any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.ModelLoaderFactory<any,any> interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<T,Y>;
							teardown(): void;
						});
						public constructor();
						public teardown(): void;
						public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<T,Y>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class ModelLoaderRegistry {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoaderRegistry>;
						public constructor(throwableListPool: androidx.core.util.Pools.Pool<java.util.List<java.lang.Throwable>>);
						public replace(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): void;
						public getDataClasses(modelClass: java.lang.Class<any>): java.util.List<java.lang.Class<any>>;
						public remove(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>): void;
						public build(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>): com.bumptech.glide.load.model.ModelLoader<any,any>;
						public prepend(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): void;
						public getModelLoaders(i: any): java.util.List<any>;
						public append(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): void;
					}
					export namespace ModelLoaderRegistry {
						export class ModelLoaderCache {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoaderRegistry.ModelLoaderCache>;
							public put(modelClass: java.lang.Class<any>, loaders: java.util.List<any>): void;
							public get(modelClass: java.lang.Class<any>): java.util.List<any>;
							public clear(): void;
						}
						export namespace ModelLoaderCache {
							export class Entry<Model>  extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoaderRegistry.ModelLoaderCache.Entry<any>>;
								public constructor(loaders: java.util.List<com.bumptech.glide.load.model.ModelLoader<Model,any>>);
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class MultiModelLoader<Model, Data>  extends com.bumptech.glide.load.model.ModelLoader<any,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoader<any,any>>;
						public handles(this_: any): boolean;
						public buildLoadData(modelLoader: any, i: number, this_: number, model: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(param0: any): boolean;
						public toString(): string;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace MultiModelLoader {
						export class MultiFetcher<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoader.MultiFetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public onLoadFailed(param0: java.lang.Exception): void;
							public getDataClass(): java.lang.Class<Data>;
							public onLoadFailed(e: java.lang.Exception): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public onDataReady(data: Data): void;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
							public onDataReady(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class MultiModelLoaderFactory {
						public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoaderFactory>;
						public constructor(throwableListPool: androidx.core.util.Pools.Pool<java.util.List<java.lang.Throwable>>);
						public build(loaders: java.lang.Class<any>, ignoredAnyEntries: java.lang.Class<any>): com.bumptech.glide.load.model.ModelLoader<any,any>;
					}
					export namespace MultiModelLoaderFactory {
						export class EmptyModelLoader extends com.bumptech.glide.load.model.ModelLoader<any,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoaderFactory.EmptyModelLoader>;
							public handles(param0: any): boolean;
							public handles(o: any): boolean;
							public buildLoadData(o: any, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export class Entry<Model, Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoaderFactory.Entry<any,any>>;
							public handles(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>): boolean;
							public constructor(modelClass: java.lang.Class<Model>, dataClass: java.lang.Class<Data>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>);
							public handles(modelClass: java.lang.Class<any>): boolean;
						}
						export class Factory {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoaderFactory.Factory>;
							public build(modelLoaders: java.util.List<any>, throwableListPool: androidx.core.util.Pools.Pool): com.bumptech.glide.load.model.MultiModelLoader<any,any>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class ResourceLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader<any>>;
						public handles(model: java.lang.Integer): boolean;
						public constructor(resources: globalAndroid.content.res.Resources, uriLoader: com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any>);
						public buildLoadData(model: java.lang.Integer, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(param0: any): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace ResourceLoader {
						export class AssetFileDescriptorFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,globalAndroid.content.res.AssetFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader.AssetFileDescriptorFactory>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,globalAndroid.content.res.AssetFileDescriptor>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public constructor(resources: globalAndroid.content.res.Resources);
							public teardown(): void;
						}
						export class FileDescriptorFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,globalAndroid.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader.FileDescriptorFactory>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,globalAndroid.os.ParcelFileDescriptor>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public constructor(resources: globalAndroid.content.res.Resources);
							public teardown(): void;
						}
						export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader.StreamFactory>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public constructor(resources: globalAndroid.content.res.Resources);
							public teardown(): void;
						}
						export class UriFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,globalAndroid.net.Uri> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader.UriFactory>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,globalAndroid.net.Uri>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public constructor(resources: globalAndroid.content.res.Resources);
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class ResourceUriLoader<DataT>  extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceUriLoader<any>>;
						public static newAssetFileDescriptorFactory(context: globalAndroid.content.Context): com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,globalAndroid.content.res.AssetFileDescriptor>;
						public buildLoadData(uri: globalAndroid.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(uri: globalAndroid.net.Uri): boolean;
						public handles(param0: any): boolean;
						public static newStreamFactory(context: globalAndroid.content.Context): com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,java.io.InputStream>;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace ResourceUriLoader {
						export class AssetFileDescriptorFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,globalAndroid.content.res.AssetFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceUriLoader.AssetFileDescriptorFactory>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,globalAndroid.content.res.AssetFileDescriptor>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
						export class InputStreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceUriLoader.InputStreamFactory>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class StreamEncoder extends com.bumptech.glide.load.Encoder<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.StreamEncoder>;
						public constructor(byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
						public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
						public encode(e: java.io.InputStream, this_: java.io.File, data: com.bumptech.glide.load.Options): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class StringLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<string,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.StringLoader<any>>;
						public buildLoadData(model: string, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(param0: any): boolean;
						public constructor(uriLoader: com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any>);
						public handles(model: string): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace StringLoader {
						export class AssetFileDescriptorFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<string,globalAndroid.content.res.AssetFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.StringLoader.AssetFileDescriptorFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<string,globalAndroid.content.res.AssetFileDescriptor>;
							public teardown(): void;
						}
						export class FileDescriptorFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<string,globalAndroid.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.StringLoader.FileDescriptorFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<string,globalAndroid.os.ParcelFileDescriptor>;
							public teardown(): void;
						}
						export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<string,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.StringLoader.StreamFactory>;
							public constructor();
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<string,java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class UnitModelLoader<Model>  extends com.bumptech.glide.load.model.ModelLoader<any,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.UnitModelLoader<any>>;
						/** @deprecated */
						public constructor();
						public buildLoadData(model: any, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(model: any): boolean;
						public handles(param0: any): boolean;
						public static getInstance(): com.bumptech.glide.load.model.UnitModelLoader<any>;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace UnitModelLoader {
						export class Factory<Model>  extends com.bumptech.glide.load.model.ModelLoaderFactory<any,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UnitModelLoader.Factory<any>>;
							/** @deprecated */
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public static getInstance(): com.bumptech.glide.load.model.UnitModelLoader.Factory<any>;
							public teardown(): void;
						}
						export class UnitFetcher<Model>  extends com.bumptech.glide.load.data.DataFetcher<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UnitModelLoader.UnitFetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class UriLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader<any>>;
						public constructor(factory: com.bumptech.glide.load.model.UriLoader.LocalUriFetcherFactory<any>);
						public buildLoadData(model: globalAndroid.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(param0: any): boolean;
						public handles(model: globalAndroid.net.Uri): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace UriLoader {
						export class AssetFileDescriptorFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader.AssetFileDescriptorFactory>;
							public constructor(contentResolver: globalAndroid.content.ContentResolver, useMediaStoreApisIfAvailable: boolean);
							public build(uri: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<globalAndroid.content.res.AssetFileDescriptor>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,globalAndroid.content.res.AssetFileDescriptor>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<any>;
							public constructor(contentResolver: globalAndroid.content.ContentResolver);
							public teardown(): void;
						}
						export class FileDescriptorFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader.FileDescriptorFactory>;
							public constructor(contentResolver: globalAndroid.content.ContentResolver, useMediaStoreApisIfAvailable: boolean);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<any>;
							public constructor(contentResolver: globalAndroid.content.ContentResolver);
							public build(uri: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<globalAndroid.os.ParcelFileDescriptor>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,globalAndroid.os.ParcelFileDescriptor>;
							public teardown(): void;
						}
						export class LocalUriFetcherFactory<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader.LocalUriFetcherFactory<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.UriLoader$LocalUriFetcherFactory interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								build(param0: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<Data>;
							});
							public constructor();
							public build(param0: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<Data>;
						}
						export class StreamFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader.StreamFactory>;
							public constructor(contentResolver: globalAndroid.content.ContentResolver, useMediaStoreApisIfAvailable: boolean);
							public build(uri: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<any>;
							public constructor(contentResolver: globalAndroid.content.ContentResolver);
							public teardown(): void;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export class UrlUriLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.UrlUriLoader<any>>;
						public constructor(urlLoader: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,any>);
						public buildLoadData(uri: globalAndroid.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(uri: globalAndroid.net.Uri): boolean;
						public handles(param0: any): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export namespace UrlUriLoader {
						export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UrlUriLoader.StreamFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export namespace stream {
						export abstract class BaseGlideUrlLoader<Model>  extends com.bumptech.glide.load.model.ModelLoader<any,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.BaseGlideUrlLoader<any>>;
							public getAlternateUrls(model: any, width: number, height: number, options: com.bumptech.glide.load.Options): java.util.List<string>;
							public getHeaders(model: any, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.Headers;
							public handles(param0: any): boolean;
							public getUrl(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): string;
							public constructor(concreteLoader: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>);
							public buildLoadData(this_: any, model: number, width: number, height: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
							public constructor(concreteLoader: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>, modelCache: com.bumptech.glide.load.model.ModelCache<any,com.bumptech.glide.load.model.GlideUrl>);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export namespace stream {
						export class HttpGlideUrlLoader extends com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.HttpGlideUrlLoader>;
							public static TIMEOUT: com.bumptech.glide.load.Option<java.lang.Integer>;
							public constructor();
							public handles(param0: any): boolean;
							public constructor(modelCache: com.bumptech.glide.load.model.ModelCache<com.bumptech.glide.load.model.GlideUrl,com.bumptech.glide.load.model.GlideUrl>);
							public handles(model: com.bumptech.glide.load.model.GlideUrl): boolean;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
							public buildLoadData(model: com.bumptech.glide.load.model.GlideUrl, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
						}
						export namespace HttpGlideUrlLoader {
							export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.HttpGlideUrlLoader.Factory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export namespace stream {
						export class HttpUriLoader extends com.bumptech.glide.load.model.UrlUriLoader<java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.HttpUriLoader>;
							public handles(param0: any): boolean;
							public buildLoadData(uri: globalAndroid.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
							public handles(uri: globalAndroid.net.Uri): boolean;
							public constructor(urlLoader: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>);
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export namespace HttpUriLoader {
							export class Factory extends com.bumptech.glide.load.model.UrlUriLoader.StreamFactory {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.HttpUriLoader.Factory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export namespace stream {
						export class MediaStoreImageThumbLoader extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.MediaStoreImageThumbLoader>;
							public handles(param0: any): boolean;
							public buildLoadData(model: globalAndroid.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public handles(model: globalAndroid.net.Uri): boolean;
							public constructor(context: globalAndroid.content.Context);
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export namespace MediaStoreImageThumbLoader {
							export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.MediaStoreImageThumbLoader.Factory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor(context: globalAndroid.content.Context);
								public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export namespace stream {
						export class MediaStoreVideoThumbLoader extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.MediaStoreVideoThumbLoader>;
							public handles(param0: any): boolean;
							public buildLoadData(model: globalAndroid.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public handles(model: globalAndroid.net.Uri): boolean;
							public constructor(context: globalAndroid.content.Context);
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export namespace MediaStoreVideoThumbLoader {
							export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.MediaStoreVideoThumbLoader.Factory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor(context: globalAndroid.content.Context);
								public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export namespace stream {
						export class QMediaStoreUriLoader<DataT>  extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader<any>>;
							public handles(param0: any): boolean;
							public buildLoadData(uri: globalAndroid.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
							public handles(uri: globalAndroid.net.Uri): boolean;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export namespace QMediaStoreUriLoader {
							export abstract class Factory<DataT>  extends com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,any> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.Factory<any>>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any>;
							}
							export class FileDescriptorFactory extends com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.Factory<globalAndroid.os.ParcelFileDescriptor> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.FileDescriptorFactory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor(context: globalAndroid.content.Context);
							}
							export class InputStreamFactory extends com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.Factory<java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.InputStreamFactory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor(context: globalAndroid.content.Context);
							}
							export class QMediaStoreUriFetcher<DataT>  extends com.bumptech.glide.load.data.DataFetcher<any> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.QMediaStoreUriFetcher<any>>;
								public cancel(): void;
								public cleanup(): void;
								public loadData(e: com.bumptech.glide.Priority, this_: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
								public getDataClass(): java.lang.Class<any>;
								public getDataSource(): com.bumptech.glide.load.DataSource;
								public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace model {
					export namespace stream {
						export class UrlLoader extends com.bumptech.glide.load.model.ModelLoader<java.net.URL,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.UrlLoader>;
							public handles(param0: any): boolean;
							public buildLoadData(model: java.net.URL, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public constructor(glideUrlLoader: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>);
							public handles(model: java.net.URL): boolean;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export namespace UrlLoader {
							export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.net.URL,java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.UrlLoader.StreamFactory>;
								public teardown(): void;
								public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.net.URL,java.io.InputStream>;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export class DefaultOnHeaderDecodedListener {
						public static class: java.lang.Class<com.bumptech.glide.load.resource.DefaultOnHeaderDecodedListener>;
						public onHeaderDecoded(this_: globalAndroid.graphics.ImageDecoder, decoder: globalAndroid.graphics.ImageDecoder.ImageInfo, info: globalAndroid.graphics.ImageDecoder.Source): void;
						public constructor(requestedWidth: number, requestedHeight: number, options: com.bumptech.glide.load.Options);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export class SimpleResource<T>  extends com.bumptech.glide.load.engine.Resource<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.resource.SimpleResource<any>>;
						public data: any;
						public getResourceClass(): java.lang.Class<any>;
						public getSize(): number;
						public constructor(data: any);
						public recycle(): void;
						public get(): any;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export class UnitTransformation<T>  extends com.bumptech.glide.load.Transformation<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.resource.UnitTransformation<any>>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public static get(): com.bumptech.glide.load.resource.UnitTransformation<any>;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						public transform(context: globalAndroid.content.Context, resource: com.bumptech.glide.load.engine.Resource<any>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<any>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class BitmapDrawableDecoder<DataType>  extends com.bumptech.glide.load.ResourceDecoder<any,globalAndroid.graphics.drawable.BitmapDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapDrawableDecoder<any>>;
							public constructor(context: globalAndroid.content.Context, decoder: com.bumptech.glide.load.ResourceDecoder<any,globalAndroid.graphics.Bitmap>);
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(resources: globalAndroid.content.res.Resources, decoder: com.bumptech.glide.load.ResourceDecoder<any,globalAndroid.graphics.Bitmap>);
							public handles(source: any, options: com.bumptech.glide.load.Options): boolean;
							public decode(source: any, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.BitmapDrawable>;
							/** @deprecated */
							public constructor(resources: globalAndroid.content.res.Resources, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, decoder: com.bumptech.glide.load.ResourceDecoder<any,globalAndroid.graphics.Bitmap>);
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class BitmapDrawableEncoder extends com.bumptech.glide.load.ResourceEncoder<globalAndroid.graphics.drawable.BitmapDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapDrawableEncoder>;
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, encoder: com.bumptech.glide.load.ResourceEncoder<globalAndroid.graphics.Bitmap>);
							public getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
							public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
							public encode(data: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.BitmapDrawable>, file: java.io.File, options: com.bumptech.glide.load.Options): boolean;
							public getEncodeStrategy(options: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class BitmapDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource<globalAndroid.graphics.drawable.BitmapDrawable> implements com.bumptech.glide.load.engine.Initializable  {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapDrawableResource>;
							public get(): any;
							public constructor(drawable: globalAndroid.graphics.drawable.BitmapDrawable, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public getSize(): number;
							public initialize(): void;
							public getResourceClass(): java.lang.Class<globalAndroid.graphics.drawable.BitmapDrawable>;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							public constructor(drawable: any);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class BitmapDrawableTransformation extends com.bumptech.glide.load.Transformation<globalAndroid.graphics.drawable.BitmapDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapDrawableTransformation>;
							public transform(context: globalAndroid.content.Context, drawableResourceToTransform: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.BitmapDrawable>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.BitmapDrawable>;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public constructor(wrapped: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>);
							public equals(param0: any): boolean;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class BitmapEncoder extends com.bumptech.glide.load.ResourceEncoder<globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapEncoder>;
							public static COMPRESSION_QUALITY: com.bumptech.glide.load.Option<java.lang.Integer>;
							public static COMPRESSION_FORMAT: com.bumptech.glide.load.Option<globalAndroid.graphics.Bitmap.CompressFormat>;
							/** @deprecated */
							public constructor();
							public getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
							public constructor(arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
							public encode(start: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, quality: java.io.File, success: com.bumptech.glide.load.Options): boolean;
							public getEncodeStrategy(options: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class BitmapImageDecoderResourceDecoder extends com.bumptech.glide.load.ResourceDecoder<globalAndroid.graphics.ImageDecoder.Source,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapImageDecoderResourceDecoder>;
							public constructor();
							public handles(source: globalAndroid.graphics.ImageDecoder.Source, options: com.bumptech.glide.load.Options): boolean;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(source: globalAndroid.graphics.ImageDecoder.Source, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class BitmapResource extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapResource>;
							public get(): any;
							public constructor(bitmap: globalAndroid.graphics.Bitmap, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public static obtain(bitmap: globalAndroid.graphics.Bitmap, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.resource.bitmap.BitmapResource;
							public getSize(): number;
							public initialize(): void;
							public getResourceClass(): java.lang.Class<globalAndroid.graphics.Bitmap>;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							public get(): globalAndroid.graphics.Bitmap;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export abstract class BitmapTransformation extends com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapTransformation>;
							public constructor();
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							public hashCode(): number;
							public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public equals(param0: any): boolean;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class BitmapTransitionOptions extends com.bumptech.glide.TransitionOptions<com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions>;
							public constructor();
							public crossFade(drawableCrossFadeFactory: com.bumptech.glide.request.transition.DrawableCrossFadeFactory): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public hashCode(): number;
							public static withCrossFade(): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public crossFade(duration: number): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public transitionUsing(drawableCrossFadeFactory: com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.drawable.Drawable>): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public static withCrossFade(drawableCrossFadeFactory: com.bumptech.glide.request.transition.DrawableCrossFadeFactory): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public static withWrapped(drawableCrossFadeFactory: com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.drawable.Drawable>): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public static withCrossFade(duration: number): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public crossFade(builder: com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public static withCrossFade(builder: com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public crossFade(): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public equals(o: any): boolean;
							public static with(transitionFactory: com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.Bitmap>): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class ByteBufferBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ByteBufferBitmapDecoder>;
							public decode(source: java.nio.ByteBuffer, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(downsampler: com.bumptech.glide.load.resource.bitmap.Downsampler);
							public handles(source: java.nio.ByteBuffer, options: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class ByteBufferBitmapImageDecoderResourceDecoder extends com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ByteBufferBitmapImageDecoderResourceDecoder>;
							public constructor();
							public decode(buffer: java.nio.ByteBuffer, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(source: java.nio.ByteBuffer, options: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class CenterCrop extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.CenterCrop>;
							public constructor();
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(o: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class CenterInside extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.CenterInside>;
							public constructor();
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(o: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class CircleCrop extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.CircleCrop>;
							public constructor();
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(o: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class DefaultImageHeaderParser extends com.bumptech.glide.load.ImageHeaderParser {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser>;
							public constructor();
							public getType(param0: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getType(byteBuffer: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getOrientation(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public hasJpegMpf(is: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
							public getType(param0: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getOrientation(byteBuffer: java.nio.ByteBuffer, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getOrientation(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getOrientation(is: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public hasJpegMpf(byteBuffer: java.nio.ByteBuffer, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
							public hasJpegMpf(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
							public hasJpegMpf(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
							public getType(is: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						}
						export namespace DefaultImageHeaderParser {
							export class ByteBufferReader extends com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.Reader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.ByteBufferReader>;
								public skip(param0: number): number;
								public read(buffer: androidNative.Array<number>, byteCount: number): number;
								public skip(total: number): number;
								public getUInt8(): number;
								public getUInt16(): number;
								public read(param0: androidNative.Array<number>, param1: number): number;
							}
							export class RandomAccessReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.RandomAccessReader>;
							}
							export class Reader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.Reader>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser$Reader interface with the provided implementation.
								 * An empty constructor exists calling super().
								 */
								public constructor(implementation: {
									getUInt8(): number;
									getUInt16(): number;
									read(param0: androidNative.Array<number>, param1: number): number;
									skip(param0: number): number;
								});
								public constructor();
								public skip(param0: number): number;
								public getUInt8(): number;
								public getUInt16(): number;
								public read(param0: androidNative.Array<number>, param1: number): number;
							}
							export namespace Reader {
								export class EndOfFileException {
									public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.Reader.EndOfFileException>;
								}
							}
							export class StreamReader extends com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.Reader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.StreamReader>;
								public skip(skipped: number): number;
								public skip(param0: number): number;
								public read(buffer: androidNative.Array<number>, byteCount: number): number;
								public getUInt8(): number;
								public getUInt16(): number;
								public read(param0: androidNative.Array<number>, param1: number): number;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export abstract class DownsampleStrategy {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy>;
							public static AT_LEAST: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static AT_MOST: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static FIT_CENTER: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static CENTER_INSIDE: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static CENTER_OUTSIDE: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static NONE: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static DEFAULT: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static OPTION: com.bumptech.glide.load.Option<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy>;
							public constructor();
							public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
							public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
						}
						export namespace DownsampleStrategy {
							export class AtLeast extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.AtLeast>;
								public getSampleSizeRounding(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): number;
							}
							export class AtMost extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.AtMost>;
								public getSampleSizeRounding(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): number;
							}
							export class CenterInside extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.CenterInside>;
								public getSampleSizeRounding(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): number;
							}
							export class CenterOutside extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.CenterOutside>;
								public getSampleSizeRounding(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): number;
							}
							export class FitCenter extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.FitCenter>;
								public getSampleSizeRounding(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(heightPercentage: number, maxIntegerFactor: number, this_: number, sourceWidth: number): number;
							}
							export class None extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.None>;
								public getSampleSizeRounding(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): number;
							}
							export class SampleSizeRounding {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding>;
								public static MEMORY: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public static QUALITY: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public static valueOf(name: string): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public static values(): androidNative.Array<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class Downsampler {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.Downsampler>;
							public static DECODE_FORMAT: com.bumptech.glide.load.Option<com.bumptech.glide.load.DecodeFormat>;
							public static PREFERRED_COLOR_SPACE: com.bumptech.glide.load.Option<com.bumptech.glide.load.PreferredColorSpace>;
							public static DOWNSAMPLE_STRATEGY: com.bumptech.glide.load.Option<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy>;
							public static FIX_BITMAP_SIZE_TO_REQUESTED_DIMENSIONS: com.bumptech.glide.load.Option<java.lang.Boolean>;
							public static ALLOW_HARDWARE_CONFIG: com.bumptech.glide.load.Option<java.lang.Boolean>;
							public decode(is: java.io.InputStream, outWidth: number, outHeight: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public handles(is: java.io.InputStream): boolean;
							public handles(byteBuffer: java.nio.ByteBuffer): boolean;
							public decode(parcelFileDescriptor: globalAndroid.os.ParcelFileDescriptor, outWidth: number, outHeight: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public constructor(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, displayMetrics: globalAndroid.util.DisplayMetrics, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public handles(source: globalAndroid.os.ParcelFileDescriptor): boolean;
							public decode(is: java.io.InputStream, requestedWidth: number, requestedHeight: number, options: com.bumptech.glide.load.Options, callbacks: com.bumptech.glide.load.resource.bitmap.Downsampler.DecodeCallbacks): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public decode(buffer: java.nio.ByteBuffer, requestedWidth: number, requestedHeight: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						}
						export namespace Downsampler {
							export class DecodeCallbacks {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.Downsampler.DecodeCallbacks>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.Downsampler$DecodeCallbacks interface with the provided implementation.
								 * An empty constructor exists calling super().
								 */
								public constructor(implementation: {
									onObtainBounds(): void;
									onDecodeComplete(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap): void;
								});
								public constructor();
								public onDecodeComplete(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap): void;
								public onObtainBounds(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class DrawableToBitmapConverter {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DrawableToBitmapConverter>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class DrawableTransformation extends com.bumptech.glide.load.Transformation<globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DrawableTransformation>;
							public asBitmapDrawable(): com.bumptech.glide.load.Transformation<globalAndroid.graphics.drawable.BitmapDrawable>;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public constructor(wrapped: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>, isRequired: boolean);
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(param0: any): boolean;
							public transform(context: globalAndroid.content.Context, resource: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class ExifInterfaceImageHeaderParser extends com.bumptech.glide.load.ImageHeaderParser {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ExifInterfaceImageHeaderParser>;
							public constructor();
							public getType(param0: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getType(byteBuffer: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getOrientation(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public hasJpegMpf(is: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
							public getType(param0: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getOrientation(byteBuffer: java.nio.ByteBuffer, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getOrientation(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getOrientation(is: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public hasJpegMpf(byteBuffer: java.nio.ByteBuffer, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
							public hasJpegMpf(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
							public hasJpegMpf(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): boolean;
							public getType(is: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class FitCenter extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.FitCenter>;
							public constructor();
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(o: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class GlideBitmapFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.GlideBitmapFactory>;
							public static decodeFileDescriptor(fileDescriptor: java.io.FileDescriptor, options: globalAndroid.graphics.BitmapFactory.Options, reader: com.bumptech.glide.load.resource.bitmap.ImageReader): globalAndroid.graphics.Bitmap;
							public static decodeStream(inputStream: java.io.InputStream, options: globalAndroid.graphics.BitmapFactory.Options, reader: com.bumptech.glide.load.resource.bitmap.ImageReader): globalAndroid.graphics.Bitmap;
							public static decodeByteArray(bytes: androidNative.Array<number>, options: globalAndroid.graphics.BitmapFactory.Options, reader: com.bumptech.glide.load.resource.bitmap.ImageReader): globalAndroid.graphics.Bitmap;
						}
						export namespace GlideBitmapFactory {
							export class GainmapCopier {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.GlideBitmapFactory.GainmapCopier>;
								public static convertSingleChannelGainmapToTripleChannelGainmap(gainmap: globalAndroid.graphics.Gainmap): globalAndroid.graphics.Gainmap;
							}
							export class GainmapDecoderWorkaroundStateCalculator {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.GlideBitmapFactory.GainmapDecoderWorkaroundStateCalculator>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class GranularRoundedCorners extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.GranularRoundedCorners>;
							public constructor();
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public constructor(topLeft: number, topRight: number, bottomRight: number, bottomLeft: number);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class HardwareConfigState {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.HardwareConfigState>;
							public static BLOCK_HARDWARE_BITMAPS_WHEN_GL_CONTEXT_MIGHT_NOT_BE_INITIALIZED: boolean;
							public static HARDWARE_BITMAPS_SUPPORTED: boolean;
							/**
							* -1
							*/
							public static NO_MAX_FD_COUNT: number;
							public blockHardwareBitmaps(): void;
							public isHardwareConfigAllowed(targetWidth: number, targetHeight: number, isHardwareConfigAllowed: boolean, isExifOrientationRequired: boolean): boolean;
							public static getInstance(): com.bumptech.glide.load.resource.bitmap.HardwareConfigState;
							public unblockHardwareBitmaps(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class ImageReader {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.ImageReader interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								decodeBitmap(param0: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
								getImageOrientation(): number;
								hasJpegMpf(): boolean;
								stopGrowingBuffers(): void;
							});
							public constructor();
							public getImageOrientation(): number;
							public stopGrowingBuffers(): void;
							public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public hasJpegMpf(): boolean;
							public decodeBitmap(param0: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
						}
						export namespace ImageReader {
							export class ByteArrayReader extends com.bumptech.glide.load.resource.bitmap.ImageReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader.ByteArrayReader>;
								public getImageOrientation(): number;
								public stopGrowingBuffers(): void;
								public decodeBitmap(options: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								public hasJpegMpf(): boolean;
								public decodeBitmap(param0: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							}
							export class ByteBufferReader extends com.bumptech.glide.load.resource.bitmap.ImageReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader.ByteBufferReader>;
								public getImageOrientation(): number;
								public stopGrowingBuffers(): void;
								public decodeBitmap(options: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								public hasJpegMpf(): boolean;
								public decodeBitmap(param0: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							}
							export class FileReader extends com.bumptech.glide.load.resource.bitmap.ImageReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader.FileReader>;
								public getImageOrientation(): number;
								public stopGrowingBuffers(): void;
								public decodeBitmap(options: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								public hasJpegMpf(): boolean;
								public decodeBitmap(param0: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							}
							export class InputStreamImageReader extends com.bumptech.glide.load.resource.bitmap.ImageReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader.InputStreamImageReader>;
								public getImageOrientation(): number;
								public stopGrowingBuffers(): void;
								public decodeBitmap(options: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								public hasJpegMpf(): boolean;
								public decodeBitmap(param0: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							}
							export class ParcelFileDescriptorImageReader extends com.bumptech.glide.load.resource.bitmap.ImageReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader.ParcelFileDescriptorImageReader>;
								public getImageOrientation(): number;
								public stopGrowingBuffers(): void;
								public decodeBitmap(options: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								public hasJpegMpf(): boolean;
								public decodeBitmap(param0: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class InputStreamBitmapImageDecoderResourceDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.InputStreamBitmapImageDecoderResourceDecoder>;
							public constructor();
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(source: java.io.InputStream, options: com.bumptech.glide.load.Options): boolean;
							public decode(stream: java.io.InputStream, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class LazyBitmapDrawableResource extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.LazyBitmapDrawableResource>;
							public get(): any;
							public getSize(): number;
							/** @deprecated */
							public static obtain(resources: globalAndroid.content.res.Resources, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, bitmap: globalAndroid.graphics.Bitmap): com.bumptech.glide.load.resource.bitmap.LazyBitmapDrawableResource;
							public get(): globalAndroid.graphics.drawable.BitmapDrawable;
							public initialize(): void;
							public getResourceClass(): java.lang.Class<globalAndroid.graphics.drawable.BitmapDrawable>;
							/** @deprecated */
							public static obtain(context: globalAndroid.content.Context, bitmap: globalAndroid.graphics.Bitmap): com.bumptech.glide.load.resource.bitmap.LazyBitmapDrawableResource;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							public static obtain(resources: globalAndroid.content.res.Resources, bitmapResource: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.BitmapDrawable>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class ParcelFileDescriptorBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<globalAndroid.os.ParcelFileDescriptor,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ParcelFileDescriptorBitmapDecoder>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(source: globalAndroid.os.ParcelFileDescriptor, options: com.bumptech.glide.load.Options): boolean;
							public constructor(downsampler: com.bumptech.glide.load.resource.bitmap.Downsampler);
							public decode(source: globalAndroid.os.ParcelFileDescriptor, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class RecyclableBufferedInputStream {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.RecyclableBufferedInputStream>;
							public markSupported(): boolean;
							public close(): void;
							public mark(readlimit: number): void;
							public available(): number;
							public read(required: androidNative.Array<number>, read: number, read_1: number): number;
							public skip(byteCount: number): number;
							public fixMarkLimit(): void;
							public constructor(in_: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public read(): number;
							public release(): void;
							public reset(): void;
						}
						export namespace RecyclableBufferedInputStream {
							export class InvalidMarkException {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.RecyclableBufferedInputStream.InvalidMarkException>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class ResourceBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<globalAndroid.net.Uri,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ResourceBitmapDecoder>;
							public constructor(drawableDecoder: com.bumptech.glide.load.resource.drawable.ResourceDrawableDecoder, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public decode(source: globalAndroid.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(source: globalAndroid.net.Uri, options: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class Rotate extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.Rotate>;
							public constructor();
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public constructor(degreesToRotate: number);
							public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class RoundedCorners extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.RoundedCorners>;
							public constructor();
							public constructor(roundingRadius: number);
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class StreamBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.StreamBitmapDecoder>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(ownsBufferedStream: java.io.InputStream, this_: number, source: number, width: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public constructor(downsampler: com.bumptech.glide.load.resource.bitmap.Downsampler, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public handles(source: java.io.InputStream, options: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
						export namespace StreamBitmapDecoder {
							export class UntrustedCallbacks extends com.bumptech.glide.load.resource.bitmap.Downsampler.DecodeCallbacks {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.StreamBitmapDecoder.UntrustedCallbacks>;
								public onDecodeComplete(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap): void;
								public onObtainBounds(): void;
								public onDecodeComplete(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, downsampled: globalAndroid.graphics.Bitmap): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class TransformationUtils {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.TransformationUtils>;
							/**
							* 6
							*/
							public static PAINT_FLAGS: number;
							public static isExifOrientationRequired(exifOrientation: number): boolean;
							public static rotateImage(matrix: globalAndroid.graphics.Bitmap, e: number): globalAndroid.graphics.Bitmap;
							public static roundedCorners(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: globalAndroid.graphics.Bitmap, topLeft: number, topRight: number, bottomRight: number, bottomLeft: number): globalAndroid.graphics.Bitmap;
							public static centerInside(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: globalAndroid.graphics.Bitmap, width: number, height: number): globalAndroid.graphics.Bitmap;
							public static getBitmapDrawableLock(): java.util.concurrent.locks.Lock;
							public static setAlpha(inBitmap: globalAndroid.graphics.Bitmap, outBitmap: globalAndroid.graphics.Bitmap): void;
							public static centerCrop(scale: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, dx: globalAndroid.graphics.Bitmap, dy: number, pool: number): globalAndroid.graphics.Bitmap;
							/** @deprecated */
							public static roundedCorners(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: globalAndroid.graphics.Bitmap, width: number, height: number, roundingRadius: number): globalAndroid.graphics.Bitmap;
							public static fitCenter(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: globalAndroid.graphics.Bitmap, width: number, height: number): globalAndroid.graphics.Bitmap;
							public static rotateImageExif(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: globalAndroid.graphics.Bitmap, exifOrientation: number): globalAndroid.graphics.Bitmap;
							public static getExifOrientationDegrees(degreesToRotate: number): number;
							public static roundedCorners(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: globalAndroid.graphics.Bitmap, roundingRadius: number): globalAndroid.graphics.Bitmap;
							public static circleCrop(canvas: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, pool: globalAndroid.graphics.Bitmap, inBitmap: number, destWidth: number): globalAndroid.graphics.Bitmap;
						}
						export namespace TransformationUtils {
							export class DrawRoundedCornerFn {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.TransformationUtils.DrawRoundedCornerFn>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.TransformationUtils$DrawRoundedCornerFn interface with the provided implementation.
								 * An empty constructor exists calling super().
								 */
								public constructor(implementation: {
									drawRoundedCorners(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Paint, param2: globalAndroid.graphics.RectF): void;
								});
								public constructor();
								public drawRoundedCorners(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Paint, param2: globalAndroid.graphics.RectF): void;
							}
							export class NoLock {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.TransformationUtils.NoLock>;
								public lockInterruptibly(): void;
								public newCondition(): java.util.concurrent.locks.Condition;
								public unlock(): void;
								public lock(): void;
								public tryLock(time: number, unit: java.util.concurrent.TimeUnit): boolean;
								public tryLock(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class UnitBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<globalAndroid.graphics.Bitmap,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.UnitBitmapDecoder>;
							public constructor();
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(source: globalAndroid.graphics.Bitmap, options: com.bumptech.glide.load.Options): boolean;
							public decode(source: globalAndroid.graphics.Bitmap, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
						export namespace UnitBitmapDecoder {
							export class NonOwnedBitmapResource extends com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.UnitBitmapDecoder.NonOwnedBitmapResource>;
								public getResourceClass(): java.lang.Class<globalAndroid.graphics.Bitmap>;
								public get(): globalAndroid.graphics.Bitmap;
								public getResourceClass(): java.lang.Class<any>;
								public get(): any;
								public recycle(): void;
								public getSize(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class VideoBitmapDecoder extends com.bumptech.glide.load.resource.bitmap.VideoDecoder<globalAndroid.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoBitmapDecoder>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public constructor(context: globalAndroid.content.Context);
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bitmap {
						export class VideoDecoder<T>  extends com.bumptech.glide.load.ResourceDecoder<any,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder<any>>;
							/**
							* -1
							*/
							public static DEFAULT_FRAME: number;
							public static TARGET_FRAME: com.bumptech.glide.load.Option<java.lang.Long>;
							public static FRAME_OPTION: com.bumptech.glide.load.Option<java.lang.Integer>;
							public static parcel(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.ResourceDecoder<globalAndroid.os.ParcelFileDescriptor,globalAndroid.graphics.Bitmap>;
							public static asset(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.ResourceDecoder<globalAndroid.content.res.AssetFileDescriptor,globalAndroid.graphics.Bitmap>;
							public handles(data: any, options: com.bumptech.glide.load.Options): boolean;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(this_: any, resource: number, outWidth: number, outHeight: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public static byteBuffer(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,globalAndroid.graphics.Bitmap>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
						export namespace VideoDecoder {
							export class AssetFileDescriptorInitializer extends com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaInitializer<globalAndroid.content.res.AssetFileDescriptor> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.AssetFileDescriptorInitializer>;
								public initializeRetriever(param0: anyRetriever, param1: any): void;
								public initializeRetriever(retriever: anyRetriever, data: globalAndroid.content.res.AssetFileDescriptor): void;
								public initializeExtractor(extractor: globalAndroid.media.MediaExtractor, data: globalAndroid.content.res.AssetFileDescriptor): void;
								public initializeExtractor(param0: globalAndroid.media.MediaExtractor, param1: any): void;
							}
							export class ByteBufferInitializer extends com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaInitializer<java.nio.ByteBuffer> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.ByteBufferInitializer>;
								public initializeRetriever(param0: anyRetriever, param1: any): void;
								public initializeExtractor(extractor: globalAndroid.media.MediaExtractor, data: java.nio.ByteBuffer): void;
								public initializeRetriever(retriever: anyRetriever, data: java.nio.ByteBuffer): void;
								public initializeExtractor(param0: globalAndroid.media.MediaExtractor, param1: any): void;
							}
							export class MediaInitializer<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaInitializer<any>>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.VideoDecoder$MediaInitializer interface with the provided implementation.
								 * An empty constructor exists calling super().
								 */
								public constructor(implementation: {
									initializeRetriever(param0: anyRetriever, param1: T): void;
									initializeExtractor(param0: globalAndroid.media.MediaExtractor, param1: T): void;
								});
								public constructor();
								public initializeRetriever(param0: anyRetriever, param1: T): void;
								public initializeExtractor(param0: globalAndroid.media.MediaExtractor, param1: T): void;
							}
							export class MediaMetadataRetrieverFactory {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaMetadataRetrieverFactory>;
								public build(): anyRetriever;
							}
							export class ParcelFileDescriptorInitializer extends com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaInitializer<globalAndroid.os.ParcelFileDescriptor> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.ParcelFileDescriptorInitializer>;
								public initializeRetriever(param0: anyRetriever, param1: any): void;
								public initializeRetriever(retriever: anyRetriever, data: globalAndroid.os.ParcelFileDescriptor): void;
								public initializeExtractor(extractor: globalAndroid.media.MediaExtractor, data: globalAndroid.os.ParcelFileDescriptor): void;
								public initializeExtractor(param0: globalAndroid.media.MediaExtractor, param1: any): void;
							}
							export class VideoDecoderException {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.VideoDecoderException>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bytes {
						export class ByteBufferRewinder extends com.bumptech.glide.load.data.DataRewinder<java.nio.ByteBuffer> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bytes.ByteBufferRewinder>;
							public cleanup(): void;
							public constructor(buffer: java.nio.ByteBuffer);
							public rewindAndGet(): java.nio.ByteBuffer;
							public rewindAndGet(): any;
						}
						export namespace ByteBufferRewinder {
							export class Factory extends com.bumptech.glide.load.data.DataRewinder.Factory<java.nio.ByteBuffer> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bytes.ByteBufferRewinder.Factory>;
								public getDataClass(): java.lang.Class<java.nio.ByteBuffer>;
								public build(param0: any): com.bumptech.glide.load.data.DataRewinder<any>;
								public build(data: java.nio.ByteBuffer): com.bumptech.glide.load.data.DataRewinder<java.nio.ByteBuffer>;
								public constructor();
								public getDataClass(): java.lang.Class<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace bytes {
						export class BytesResource extends com.bumptech.glide.load.engine.Resource<androidNative.Array<number>> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bytes.BytesResource>;
							public get(): any;
							public getSize(): number;
							public get(): androidNative.Array<number>;
							public getResourceClass(): java.lang.Class<androidNative.Array<number>>;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							public constructor(bytes: androidNative.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace drawable {
						export class AnimatedImageDecoder {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.AnimatedImageDecoder>;
							public static byteBufferDecoder(imageHeaderParsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,globalAndroid.graphics.drawable.Drawable>;
							public static streamDecoder(imageHeaderParsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,globalAndroid.graphics.drawable.Drawable>;
						}
						export namespace AnimatedImageDecoder {
							export class AnimatedImageDrawableResource extends com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.AnimatedImageDecoder.AnimatedImageDrawableResource>;
								public getResourceClass(): java.lang.Class<any>;
								public get(): any;
								public get(): globalAndroid.graphics.drawable.AnimatedImageDrawable;
								public recycle(): void;
								public getResourceClass(): java.lang.Class<globalAndroid.graphics.drawable.Drawable>;
								public getSize(): number;
							}
							export class ByteBufferAnimatedImageDecoder extends com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,globalAndroid.graphics.drawable.Drawable> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.AnimatedImageDecoder.ByteBufferAnimatedImageDecoder>;
								public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
								public handles(source: java.nio.ByteBuffer, options: com.bumptech.glide.load.Options): boolean;
								public decode(byteBuffer: java.nio.ByteBuffer, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>;
								public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
							}
							export class StreamAnimatedImageDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,globalAndroid.graphics.drawable.Drawable> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.AnimatedImageDecoder.StreamAnimatedImageDecoder>;
								public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
								public decode(is: java.io.InputStream, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>;
								public handles(source: java.io.InputStream, options: com.bumptech.glide.load.Options): boolean;
								public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace drawable {
						export class AnimatedWebpDecoder {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.AnimatedWebpDecoder>;
							public static byteBufferDecoder(imageHeaderParsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,globalAndroid.graphics.drawable.Drawable>;
							public static streamDecoder(imageHeaderParsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,globalAndroid.graphics.drawable.Drawable>;
						}
						export namespace AnimatedWebpDecoder {
							export class AnimatedImageDrawableResource extends com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.AnimatedWebpDecoder.AnimatedImageDrawableResource>;
								public getResourceClass(): java.lang.Class<any>;
								public get(): any;
								public get(): globalAndroid.graphics.drawable.AnimatedImageDrawable;
								public recycle(): void;
								public getResourceClass(): java.lang.Class<globalAndroid.graphics.drawable.Drawable>;
								public getSize(): number;
							}
							export class ByteBufferAnimatedWebpDecoder extends com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,globalAndroid.graphics.drawable.Drawable> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.AnimatedWebpDecoder.ByteBufferAnimatedWebpDecoder>;
								public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
								public handles(source: java.nio.ByteBuffer, options: com.bumptech.glide.load.Options): boolean;
								public decode(byteBuffer: java.nio.ByteBuffer, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>;
								public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
							}
							export class StreamAnimatedWebpDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,globalAndroid.graphics.drawable.Drawable> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.AnimatedWebpDecoder.StreamAnimatedWebpDecoder>;
								public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
								public decode(is: java.io.InputStream, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>;
								public handles(source: java.io.InputStream, options: com.bumptech.glide.load.Options): boolean;
								public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace drawable {
						export class DrawableDecoderCompat {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.DrawableDecoderCompat>;
							public static getDrawable(ourContext: globalAndroid.content.Context, id: number, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
							public static getDrawable(ourContext: globalAndroid.content.Context, targetContext: globalAndroid.content.Context, id: number): globalAndroid.graphics.drawable.Drawable;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace drawable {
						export abstract class DrawableResource<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.DrawableResource<any>>;
							public drawable: T;
							public get(): any;
							public getSize(): number;
							public initialize(): void;
							public constructor(drawable: T);
							public get(): T;
							public getResourceClass(): java.lang.Class<any>;
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace drawable {
						export class DrawableTransitionOptions extends com.bumptech.glide.TransitionOptions<com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions,globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions>;
							public constructor();
							public static with(transitionFactory: com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.drawable.Drawable>): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public crossFade(drawableCrossFadeFactory: com.bumptech.glide.request.transition.DrawableCrossFadeFactory): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public static withCrossFade(drawableCrossFadeFactory: com.bumptech.glide.request.transition.DrawableCrossFadeFactory): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public static withCrossFade(builder: com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public crossFade(builder: com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public hashCode(): number;
							public crossFade(): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public static withCrossFade(): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public static withCrossFade(duration: number): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public equals(o: any): boolean;
							public crossFade(duration: number): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace drawable {
						export class NonOwnedDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource<globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.NonOwnedDrawableResource>;
							public get(): any;
							public getSize(): number;
							public initialize(): void;
							public getResourceClass(): java.lang.Class<globalAndroid.graphics.drawable.Drawable>;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace drawable {
						export class ResourceDrawableDecoder extends com.bumptech.glide.load.ResourceDecoder<globalAndroid.net.Uri,globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.ResourceDrawableDecoder>;
							public static THEME: com.bumptech.glide.load.Option<globalAndroid.content.res.Resources.Theme>;
							public decode(source: globalAndroid.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(source: globalAndroid.net.Uri, options: com.bumptech.glide.load.Options): boolean;
							public constructor(context: globalAndroid.content.Context);
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace drawable {
						export class UnitDrawableDecoder extends com.bumptech.glide.load.ResourceDecoder<globalAndroid.graphics.drawable.Drawable,globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.UnitDrawableDecoder>;
							public constructor();
							public handles(source: globalAndroid.graphics.drawable.Drawable, options: com.bumptech.glide.load.Options): boolean;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(source: globalAndroid.graphics.drawable.Drawable, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace file {
						export class FileDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.File,java.io.File> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.file.FileDecoder>;
							public constructor();
							public handles(source: java.io.File, options: com.bumptech.glide.load.Options): boolean;
							public decode(source: java.io.File, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<java.io.File>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace file {
						export class FileResource extends com.bumptech.glide.load.resource.SimpleResource<java.io.File> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.file.FileResource>;
							public get(): any;
							public constructor(file: java.io.File);
							public getSize(): number;
							public constructor(data: any);
							public getResourceClass(): java.lang.Class<any>;
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace gif {
						export class ByteBufferGifDecoder extends com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,com.bumptech.glide.load.resource.gif.GifDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.ByteBufferGifDecoder>;
							public decode(source: java.nio.ByteBuffer, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.resource.gif.GifDrawableResource;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(context: globalAndroid.content.Context, parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public constructor(context: globalAndroid.content.Context);
							public handles(source: java.nio.ByteBuffer, options: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
						export namespace ByteBufferGifDecoder {
							export class GifDecoderFactory {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.ByteBufferGifDecoder.GifDecoderFactory>;
							}
							export class GifHeaderParserPool {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.ByteBufferGifDecoder.GifHeaderParserPool>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace gif {
						export class GifBitmapProvider {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifBitmapProvider>;
							public release(bytes: androidNative.Array<number>): void;
							public obtainIntArray(size: number): androidNative.Array<number>;
							public release(bitmap: globalAndroid.graphics.Bitmap): void;
							public obtain(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public obtainByteArray(size: number): androidNative.Array<number>;
							public release(array: androidNative.Array<number>): void;
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace gif {
						export class GifDrawable implements com.bumptech.glide.load.resource.gif.GifFrameLoader.FrameCallback {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawable>;
							/**
							* -1
							*/
							public static LOOP_FOREVER: number;
							/**
							* 0
							*/
							public static LOOP_INTRINSIC: number;
							public getBuffer(): java.nio.ByteBuffer;
							public clearAnimationCallbacks(): void;
							public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
							public onFrameReady(): void;
							public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
							public setVisible(visible: boolean, restart: boolean): boolean;
							public unregisterAnimationCallback(animationCallback: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): boolean;
							public isRunning(): boolean;
							public getSize(): number;
							public getFirstFrame(): globalAndroid.graphics.Bitmap;
							public stop(): void;
							/** @deprecated */
							public constructor(context: globalAndroid.content.Context, gifDecoder: com.bumptech.glide.gifdecoder.GifDecoder, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, frameTransformation: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>, targetFrameWidth: number, targetFrameHeight: number, firstFrame: globalAndroid.graphics.Bitmap);
							public start(): void;
							public setLoopCount(this_: number): void;
							public getIntrinsicWidth(): number;
							public getFrameTransformation(): com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>;
							public startFromFirstFrame(): void;
							public getFrameCount(): number;
							public setFrameTransformation(frameTransformation: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>, firstFrame: globalAndroid.graphics.Bitmap): void;
							public registerAnimationCallback(animationCallback: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
							public getIntrinsicHeight(): number;
							public constructor(context: globalAndroid.content.Context, gifDecoder: com.bumptech.glide.gifdecoder.GifDecoder, frameTransformation: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>, targetFrameWidth: number, targetFrameHeight: number, firstFrame: globalAndroid.graphics.Bitmap);
							public getFrameIndex(): number;
							public setAlpha(i: number): void;
							public draw(canvas: globalAndroid.graphics.Canvas): void;
							public getOpacity(): number;
							public recycle(): void;
							public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
						}
						export namespace GifDrawable {
							export class GifState {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawable.GifState>;
								public newDrawable(res: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
								public newDrawable(): globalAndroid.graphics.drawable.Drawable;
								public getChangingConfigurations(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace gif {
						export class GifDrawableEncoder extends com.bumptech.glide.load.ResourceEncoder<com.bumptech.glide.load.resource.gif.GifDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawableEncoder>;
							public constructor();
							public getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
							public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
							public getEncodeStrategy(options: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
							public encode(this_: com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>, data: java.io.File, file: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace gif {
						export class GifDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource<com.bumptech.glide.load.resource.gif.GifDrawable> implements com.bumptech.glide.load.engine.Initializable  {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawableResource>;
							public get(): any;
							public getSize(): number;
							public getResourceClass(): java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawable>;
							public initialize(): void;
							public constructor(drawable: com.bumptech.glide.load.resource.gif.GifDrawable);
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							public constructor(drawable: any);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace gif {
						export class GifDrawableTransformation extends com.bumptech.glide.load.Transformation<com.bumptech.glide.load.resource.gif.GifDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawableTransformation>;
							public transform(context: globalAndroid.content.Context, resource: com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public constructor(wrapped: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>);
							public equals(param0: any): boolean;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace gif {
						export class GifFrameLoader {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader>;
						}
						export namespace GifFrameLoader {
							export class DelayTarget extends com.bumptech.glide.request.target.CustomTarget<globalAndroid.graphics.Bitmap> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader.DelayTarget>;
								public onLoadCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
								public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
								public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
								public onResourceReady(resource: globalAndroid.graphics.Bitmap, transition: com.bumptech.glide.request.transition.Transition<any>): void;
								public getRequest(): com.bumptech.glide.request.Request;
								public setRequest(param0: com.bumptech.glide.request.Request): void;
								public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
								public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
								public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
								public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
							}
							export class FrameCallback {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader.FrameCallback>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.gif.GifFrameLoader$FrameCallback interface with the provided implementation.
								 * An empty constructor exists calling super().
								 */
								public constructor(implementation: {
									onFrameReady(): void;
								});
								public constructor();
								public onFrameReady(): void;
							}
							export class FrameLoaderCallback {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader.FrameLoaderCallback>;
								public handleMessage(target: globalAndroid.os.Message): boolean;
							}
							export class OnEveryFrameListener {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader.OnEveryFrameListener>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.gif.GifFrameLoader$OnEveryFrameListener interface with the provided implementation.
								 * An empty constructor exists calling super().
								 */
								public constructor(implementation: {
									onFrameReady(): void;
								});
								public constructor();
								public onFrameReady(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace gif {
						export class GifFrameResourceDecoder extends com.bumptech.glide.load.ResourceDecoder<com.bumptech.glide.gifdecoder.GifDecoder,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameResourceDecoder>;
							public decode(source: com.bumptech.glide.gifdecoder.GifDecoder, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public handles(source: com.bumptech.glide.gifdecoder.GifDecoder, options: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace gif {
						export class GifOptions {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifOptions>;
							public static DECODE_FORMAT: com.bumptech.glide.load.Option<com.bumptech.glide.load.DecodeFormat>;
							public static DISABLE_ANIMATION: com.bumptech.glide.load.Option<java.lang.Boolean>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace gif {
						export class StreamGifDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,com.bumptech.glide.load.resource.gif.GifDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.StreamGifDecoder>;
							public decode(source: java.io.InputStream, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(source: java.io.InputStream, options: com.bumptech.glide.load.Options): boolean;
							public constructor(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, byteBufferDecoder: com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,com.bumptech.glide.load.resource.gif.GifDrawable>, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace transcode {
						export class BitmapBytesTranscoder extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<globalAndroid.graphics.Bitmap,androidNative.Array<number>> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.BitmapBytesTranscoder>;
							public constructor();
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(compressFormat: globalAndroid.graphics.Bitmap.CompressFormat, quality: number);
							public transcode(toTranscode: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<androidNative.Array<number>>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace transcode {
						export class BitmapDrawableTranscoder extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<globalAndroid.graphics.Bitmap,globalAndroid.graphics.drawable.BitmapDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.BitmapDrawableTranscoder>;
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							/** @deprecated */
							public constructor(resources: globalAndroid.content.res.Resources, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public constructor(resources: globalAndroid.content.res.Resources);
							public transcode(toTranscode: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.BitmapDrawable>;
							public constructor(context: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace transcode {
						export class DrawableBytesTranscoder extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<globalAndroid.graphics.drawable.Drawable,androidNative.Array<number>> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.DrawableBytesTranscoder>;
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public transcode(toTranscode: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<androidNative.Array<number>>;
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, bitmapBytesTranscoder: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<globalAndroid.graphics.Bitmap,androidNative.Array<number>>, gifDrawableBytesTranscoder: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<com.bumptech.glide.load.resource.gif.GifDrawable,androidNative.Array<number>>);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace transcode {
						export class GifDrawableBytesTranscoder extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<com.bumptech.glide.load.resource.gif.GifDrawable,androidNative.Array<number>> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.GifDrawableBytesTranscoder>;
							public constructor();
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public transcode(toTranscode: com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<androidNative.Array<number>>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace transcode {
						export class ResourceTranscoder<Z, R>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any> interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								transcode(param0: com.bumptech.glide.load.engine.Resource<Z>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<R>;
							});
							public constructor();
							public transcode(param0: com.bumptech.glide.load.engine.Resource<Z>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<R>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace transcode {
						export class TranscoderRegistry {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.TranscoderRegistry>;
							public constructor();
							public register(decodedClass: java.lang.Class<any>, transcodedClass: java.lang.Class<any>, transcoder: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>): void;
							public getTranscodeClasses(this_: java.lang.Class<any>, resourceClass: java.lang.Class<any>): java.util.List<any>;
							public get(this_: java.lang.Class<any>, resourceClass: java.lang.Class<any>): com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>;
						}
						export namespace TranscoderRegistry {
							export class Entry<Z, R>  extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.TranscoderRegistry.Entry<any,any>>;
								public handles(fromClass: java.lang.Class<any>, toClass: java.lang.Class<any>): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace load {
				export namespace resource {
					export namespace transcode {
						export class UnitTranscoder<Z>  extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.UnitTranscoder<any>>;
							public constructor();
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public static get(): com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>;
							public transcode(toTranscode: com.bumptech.glide.load.engine.Resource<any>, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class ApplicationLifecycle extends com.bumptech.glide.manager.Lifecycle {
					public static class: java.lang.Class<com.bumptech.glide.manager.ApplicationLifecycle>;
					public addListener(listener: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(listener: com.bumptech.glide.manager.LifecycleListener): void;
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class ConnectivityMonitor extends com.bumptech.glide.manager.LifecycleListener {
					public static class: java.lang.Class<com.bumptech.glide.manager.ConnectivityMonitor>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.ConnectivityMonitor interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public constructor();
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
				export namespace ConnectivityMonitor {
					export class ConnectivityListener {
						public static class: java.lang.Class<com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.manager.ConnectivityMonitor$ConnectivityListener interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							onConnectivityChanged(param0: boolean): void;
						});
						public constructor();
						public onConnectivityChanged(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class ConnectivityMonitorFactory {
					public static class: java.lang.Class<com.bumptech.glide.manager.ConnectivityMonitorFactory>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.ConnectivityMonitorFactory interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						build(param0: globalAndroid.content.Context, param1: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener): com.bumptech.glide.manager.ConnectivityMonitor;
					});
					public constructor();
					public build(param0: globalAndroid.content.Context, param1: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener): com.bumptech.glide.manager.ConnectivityMonitor;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class DefaultConnectivityMonitor extends com.bumptech.glide.manager.ConnectivityMonitor {
					public static class: java.lang.Class<com.bumptech.glide.manager.DefaultConnectivityMonitor>;
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class DefaultConnectivityMonitorFactory extends com.bumptech.glide.manager.ConnectivityMonitorFactory {
					public static class: java.lang.Class<com.bumptech.glide.manager.DefaultConnectivityMonitorFactory>;
					public build(context: globalAndroid.content.Context, listener: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener): com.bumptech.glide.manager.ConnectivityMonitor;
					public constructor();
					public build(param0: globalAndroid.content.Context, param1: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener): com.bumptech.glide.manager.ConnectivityMonitor;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class DoNothingFirstFrameWaiter extends com.bumptech.glide.manager.FrameWaiter {
					public static class: java.lang.Class<com.bumptech.glide.manager.DoNothingFirstFrameWaiter>;
					public registerSelf(activity: globalAndroid.app.Activity): void;
					public registerSelf(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class EmptyRequestManagerTreeNode extends com.bumptech.glide.manager.RequestManagerTreeNode {
					public static class: java.lang.Class<com.bumptech.glide.manager.EmptyRequestManagerTreeNode>;
					public getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class FirstFrameWaiter extends com.bumptech.glide.manager.FrameWaiter {
					public static class: java.lang.Class<com.bumptech.glide.manager.FirstFrameWaiter>;
					public registerSelf(activity: globalAndroid.app.Activity): void;
					public registerSelf(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class FrameWaiter {
					public static class: java.lang.Class<com.bumptech.glide.manager.FrameWaiter>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.FrameWaiter interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						registerSelf(param0: globalAndroid.app.Activity): void;
					});
					public constructor();
					public registerSelf(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class Lifecycle {
					public static class: java.lang.Class<com.bumptech.glide.manager.Lifecycle>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.Lifecycle interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
						removeListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					});
					public constructor();
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class LifecycleLifecycle extends com.bumptech.glide.manager.Lifecycle {
					public static class: java.lang.Class<com.bumptech.glide.manager.LifecycleLifecycle>;
					public onStop(this_: androidx.lifecycle.LifecycleOwner): void;
					public addListener(listener: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(listener: com.bumptech.glide.manager.LifecycleListener): void;
					public onDestroy(this_: androidx.lifecycle.LifecycleOwner): void;
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					public onStart(this_: androidx.lifecycle.LifecycleOwner): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class LifecycleListener {
					public static class: java.lang.Class<com.bumptech.glide.manager.LifecycleListener>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.LifecycleListener interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public constructor();
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class LifecycleRequestManagerRetriever {
					public static class: java.lang.Class<com.bumptech.glide.manager.LifecycleRequestManagerRetriever>;
				}
				export namespace LifecycleRequestManagerRetriever {
					export class SupportRequestManagerTreeNode extends com.bumptech.glide.manager.RequestManagerTreeNode {
						public static class: java.lang.Class<com.bumptech.glide.manager.LifecycleRequestManagerRetriever.SupportRequestManagerTreeNode>;
						public getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class NullConnectivityMonitor extends com.bumptech.glide.manager.ConnectivityMonitor {
					public static class: java.lang.Class<com.bumptech.glide.manager.NullConnectivityMonitor>;
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class RequestManagerFragment {
					public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerFragment>;
					/** @deprecated */
					public getRequestManagerTreeNode(): com.bumptech.glide.manager.RequestManagerTreeNode;
					public constructor();
					/** @deprecated */
					public getRequestManager(): com.bumptech.glide.RequestManager;
					/** @deprecated */
					public setRequestManager(requestManager: com.bumptech.glide.RequestManager): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class RequestManagerRetriever {
					public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerRetriever>;
					public constructor(factory: com.bumptech.glide.manager.RequestManagerRetriever.RequestManagerFactory);
					public get(this_: globalAndroid.view.View): com.bumptech.glide.RequestManager;
					public get(activity: androidx.fragment.app.FragmentActivity): com.bumptech.glide.RequestManager;
					/** @deprecated */
					public get(activity: globalAndroid.app.Activity): com.bumptech.glide.RequestManager;
					public get(fragment: androidx.fragment.app.Fragment): com.bumptech.glide.RequestManager;
					public get(context: globalAndroid.content.Context): com.bumptech.glide.RequestManager;
					/** @deprecated */
					public handleMessage(message: globalAndroid.os.Message): boolean;
					/** @deprecated */
					public get(fragment: globalAndroid.app.Fragment): com.bumptech.glide.RequestManager;
				}
				export namespace RequestManagerRetriever {
					export class RequestManagerFactory {
						public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerRetriever.RequestManagerFactory>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.manager.RequestManagerRetriever$RequestManagerFactory interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							build(param0: com.bumptech.glide.Glide, param1: com.bumptech.glide.manager.Lifecycle, param2: com.bumptech.glide.manager.RequestManagerTreeNode, param3: globalAndroid.content.Context): com.bumptech.glide.RequestManager;
						});
						public constructor();
						public build(param0: com.bumptech.glide.Glide, param1: com.bumptech.glide.manager.Lifecycle, param2: com.bumptech.glide.manager.RequestManagerTreeNode, param3: globalAndroid.content.Context): com.bumptech.glide.RequestManager;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class RequestManagerTreeNode {
					public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerTreeNode>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.RequestManagerTreeNode interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
					});
					public constructor();
					public getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class RequestTracker {
					public static class: java.lang.Class<com.bumptech.glide.manager.RequestTracker>;
					public toString(): string;
					public pauseRequests(): void;
					public constructor();
					public pauseAllRequests(): void;
					public clearRequests(): void;
					public restartRequests(): void;
					public isPaused(): boolean;
					public clearAndRemove(request: com.bumptech.glide.request.Request): boolean;
					public runRequest(request: com.bumptech.glide.request.Request): void;
					public resumeRequests(): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class SingletonConnectivityReceiver {
					public static class: java.lang.Class<com.bumptech.glide.manager.SingletonConnectivityReceiver>;
				}
				export namespace SingletonConnectivityReceiver {
					export class FrameworkConnectivityMonitor {
						public static class: java.lang.Class<com.bumptech.glide.manager.SingletonConnectivityReceiver.FrameworkConnectivityMonitor>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.manager.SingletonConnectivityReceiver$FrameworkConnectivityMonitor interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							register(): boolean;
							unregister(): void;
						});
						public constructor();
						public unregister(): void;
						public register(): boolean;
					}
					export class FrameworkConnectivityMonitorPostApi24 extends com.bumptech.glide.manager.SingletonConnectivityReceiver.FrameworkConnectivityMonitor {
						public static class: java.lang.Class<com.bumptech.glide.manager.SingletonConnectivityReceiver.FrameworkConnectivityMonitorPostApi24>;
						public unregister(): void;
						public register(): boolean;
					}
					export class FrameworkConnectivityMonitorPreApi24 extends com.bumptech.glide.manager.SingletonConnectivityReceiver.FrameworkConnectivityMonitor {
						public static class: java.lang.Class<com.bumptech.glide.manager.SingletonConnectivityReceiver.FrameworkConnectivityMonitorPreApi24>;
						public unregister(): void;
						public register(): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class SupportRequestManagerFragment {
					public static class: java.lang.Class<com.bumptech.glide.manager.SupportRequestManagerFragment>;
					/** @deprecated */
					public getRequestManagerTreeNode(): com.bumptech.glide.manager.RequestManagerTreeNode;
					public constructor();
					/** @deprecated */
					public getRequestManager(): com.bumptech.glide.RequestManager;
					/** @deprecated */
					public setRequestManager(requestManager: com.bumptech.glide.RequestManager): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace manager {
				export class TargetTracker extends com.bumptech.glide.manager.LifecycleListener {
					public static class: java.lang.Class<com.bumptech.glide.manager.TargetTracker>;
					public onStart(): void;
					public constructor();
					public clear(): void;
					public getAll(): java.util.List<com.bumptech.glide.request.target.Target<any>>;
					public track(target: com.bumptech.glide.request.target.Target<any>): void;
					public onStop(): void;
					public onDestroy(): void;
					public untrack(target: com.bumptech.glide.request.target.Target<any>): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace module {
				export abstract class AppGlideModule extends com.bumptech.glide.module.LibraryGlideModule implements com.bumptech.glide.module.AppliesOptions {
					public static class: java.lang.Class<com.bumptech.glide.module.AppGlideModule>;
					public applyOptions(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
					public isManifestParsingEnabled(): boolean;
					public registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
					public constructor();
					public applyOptions(context: globalAndroid.content.Context, builder: com.bumptech.glide.GlideBuilder): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace module {
				export class AppliesOptions {
					public static class: java.lang.Class<com.bumptech.glide.module.AppliesOptions>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.module.AppliesOptions interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						applyOptions(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
					});
					public constructor();
					public applyOptions(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace module {
				export class GlideModule implements com.bumptech.glide.module.RegistersComponents, com.bumptech.glide.module.AppliesOptions {
					public static class: java.lang.Class<com.bumptech.glide.module.GlideModule>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.module.GlideModule interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
						applyOptions(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
					});
					public constructor();
					public applyOptions(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
					public registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace module {
				export abstract class LibraryGlideModule extends com.bumptech.glide.module.RegistersComponents {
					public static class: java.lang.Class<com.bumptech.glide.module.LibraryGlideModule>;
					public registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
					public constructor();
					public registerComponents(context: globalAndroid.content.Context, glide: com.bumptech.glide.Glide, registry: com.bumptech.glide.Registry): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace module {
				export class ManifestParser {
					public static class: java.lang.Class<com.bumptech.glide.module.ManifestParser>;
					public parse(): java.util.List<com.bumptech.glide.module.GlideModule>;
					public constructor(context: globalAndroid.content.Context);
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace module {
				export class RegistersComponents {
					public static class: java.lang.Class<com.bumptech.glide.module.RegistersComponents>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.module.RegistersComponents interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
					});
					public constructor();
					public registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace provider {
				export class EncoderRegistry {
					public static class: java.lang.Class<com.bumptech.glide.provider.EncoderRegistry>;
					public getEncoder(this_: java.lang.Class<any>): com.bumptech.glide.load.Encoder<any>;
					public constructor();
					public prepend(dataClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.Encoder<any>): void;
					public append(dataClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.Encoder<any>): void;
				}
				export namespace EncoderRegistry {
					export class Entry<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.provider.EncoderRegistry.Entry<any>>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace provider {
				export class ImageHeaderParserRegistry {
					public static class: java.lang.Class<com.bumptech.glide.provider.ImageHeaderParserRegistry>;
					public add(parser: com.bumptech.glide.load.ImageHeaderParser): void;
					public constructor();
					public getParsers(): java.util.List<com.bumptech.glide.load.ImageHeaderParser>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace provider {
				export class LoadPathCache {
					public static class: java.lang.Class<com.bumptech.glide.provider.LoadPathCache>;
					public get(this_: java.lang.Class<any>, dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>): com.bumptech.glide.load.engine.LoadPath<any,any,any>;
					public constructor();
					public put(dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, transcodeClass: java.lang.Class<any>, loadPath: com.bumptech.glide.load.engine.LoadPath<any,any,any>): void;
					public isEmptyLoadPath(path: com.bumptech.glide.load.engine.LoadPath<any,any,any>): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace provider {
				export class ModelToResourceClassCache {
					public static class: java.lang.Class<com.bumptech.glide.provider.ModelToResourceClassCache>;
					public get(this_: java.lang.Class<any>, modelClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>): java.util.List<java.lang.Class<any>>;
					public constructor();
					public clear(): void;
					public put(modelClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, transcodeClass: java.lang.Class<any>, resourceClasses: java.util.List<java.lang.Class<any>>): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace provider {
				export class ResourceDecoderRegistry {
					public static class: java.lang.Class<com.bumptech.glide.provider.ResourceDecoderRegistry>;
					public getDecoders(entries: java.lang.Class<any>, bucket: java.lang.Class<any>): java.util.List<any>;
					public getResourceClasses(entries: java.lang.Class<any>, bucket: java.lang.Class<any>): java.util.List<any>;
					public prepend(bucket: string, decoder: com.bumptech.glide.load.ResourceDecoder<any,any>, dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>): void;
					public constructor();
					public setBucketPriorityList(previousBucket: java.util.List<string>): void;
					public append(bucket: string, decoder: com.bumptech.glide.load.ResourceDecoder<any,any>, dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>): void;
				}
				export namespace ResourceDecoderRegistry {
					export class Entry<T, R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.provider.ResourceDecoderRegistry.Entry<any,any>>;
						public handles(dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>): boolean;
						public constructor(dataClass: java.lang.Class<T>, resourceClass: java.lang.Class<R>, decoder: com.bumptech.glide.load.ResourceDecoder<T,R>);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace provider {
				export class ResourceEncoderRegistry {
					public static class: java.lang.Class<com.bumptech.glide.provider.ResourceEncoderRegistry>;
					public prepend(resourceClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.ResourceEncoder<any>): void;
					public constructor();
					public get(i: java.lang.Class<any>): com.bumptech.glide.load.ResourceEncoder<any>;
					public append(resourceClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.ResourceEncoder<any>): void;
				}
				export namespace ResourceEncoderRegistry {
					export class Entry<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.provider.ResourceEncoderRegistry.Entry<any>>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export abstract class BaseRequestOptions<T>  extends java.lang.Cloneable {
					public static class: java.lang.Class<com.bumptech.glide.request.BaseRequestOptions<any>>;
					public autoClone(): any;
					public fallback(drawable: globalAndroid.graphics.drawable.Drawable): any;
					public isTransformationSet(): boolean;
					public transform(resourceClass: java.lang.Class<any>, transformation: com.bumptech.glide.load.Transformation<any>): com.bumptech.glide.request.BaseRequestOptions<any>;
					public getSignature(): com.bumptech.glide.load.Key;
					public equals(o: any): boolean;
					public sizeMultiplier(sizeMultiplier: number): any;
					public dontTransform(): any;
					public decode(resourceClass: java.lang.Class<any>): any;
					public theme(theme: globalAndroid.content.res.Resources.Theme): any;
					public clone(): any;
					public diskCacheStrategy(strategy: com.bumptech.glide.load.engine.DiskCacheStrategy): any;
					public getPriority(): com.bumptech.glide.Priority;
					public constructor();
					public error(resourceId: number): any;
					public useUnlimitedSourceGeneratorsPool(flag: boolean): any;
					public frame(frameTimeMicros: number): any;
					public format(format: com.bumptech.glide.load.DecodeFormat): any;
					public optionalCircleCrop(): any;
					public onlyRetrieveFromCache(flag: boolean): any;
					public error(drawable: globalAndroid.graphics.drawable.Drawable): any;
					public isPrioritySet(): boolean;
					public encodeQuality(quality: number): any;
					public override(size: number): any;
					public centerCrop(): any;
					public getOverrideHeight(): number;
					public placeholder(resourceId: number): any;
					public isValidOverride(): boolean;
					/** @deprecated */
					public transforms(transformations: androidNative.Array<com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>>): any;
					public isLocked(): boolean;
					public getUseAnimationPool(): boolean;
					public encodeFormat(format: globalAndroid.graphics.Bitmap.CompressFormat): any;
					public isSkipMemoryCacheSet(): boolean;
					public apply(o: com.bumptech.glide.request.BaseRequestOptions<any>): any;
					public getSizeMultiplier(): number;
					public fitCenter(): any;
					public getOnlyRetrieveFromCache(): boolean;
					public getOverrideWidth(): number;
					public placeholder(drawable: globalAndroid.graphics.drawable.Drawable): any;
					public getTransformations(): java.util.Map<java.lang.Class<any>,com.bumptech.glide.load.Transformation<any>>;
					public getPlaceholderDrawable(): globalAndroid.graphics.drawable.Drawable;
					public isTransformationAllowed(): boolean;
					public getFallbackId(): number;
					public transform(transformations: androidNative.Array<com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>>): any;
					public getOptions(): com.bumptech.glide.load.Options;
					public override(width: number, height: number): any;
					public dontAnimate(): any;
					public isEquivalentTo(other: com.bumptech.glide.request.BaseRequestOptions<any>): boolean;
					public getPlaceholderId(): number;
					public useAnimationPool(flag: boolean): any;
					public isMemoryCacheable(): boolean;
					public getDiskCacheStrategy(): com.bumptech.glide.load.engine.DiskCacheStrategy;
					public getTheme(): globalAndroid.content.res.Resources.Theme;
					public isAutoCloneEnabled(): boolean;
					public set(option: com.bumptech.glide.load.Option<any>, value: any): com.bumptech.glide.request.BaseRequestOptions<any>;
					public optionalCenterInside(): any;
					public fallback(resourceId: number): any;
					public disallowHardwareConfig(): any;
					public optionalTransform(resourceClass: java.lang.Class<any>, transformation: com.bumptech.glide.load.Transformation<any>): com.bumptech.glide.request.BaseRequestOptions<any>;
					public selfOrThrowIfLocked(): any;
					public optionalCenterCrop(): any;
					public hashCode(): number;
					public lock(): any;
					public timeout(timeoutMs: number): any;
					public isDiskCacheStrategySet(): boolean;
					public downsample(strategy: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy): any;
					public signature(signature: com.bumptech.glide.load.Key): any;
					public centerInside(): any;
					public getFallbackDrawable(): globalAndroid.graphics.drawable.Drawable;
					public getUseUnlimitedSourceGeneratorsPool(): boolean;
					public circleCrop(): any;
					public getErrorPlaceholder(): globalAndroid.graphics.drawable.Drawable;
					public optionalFitCenter(): any;
					public skipMemoryCache(skip: boolean): any;
					public optionalTransform(transformation: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): any;
					public isTransformationRequired(): boolean;
					public getErrorId(): number;
					public priority(priority: com.bumptech.glide.Priority): any;
					public getResourceClass(): java.lang.Class<any>;
					public transform(transformation: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): any;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export class ErrorRequestCoordinator implements com.bumptech.glide.request.RequestCoordinator, com.bumptech.glide.request.Request {
					public static class: java.lang.Class<com.bumptech.glide.request.ErrorRequestCoordinator>;
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public canSetImage(request: com.bumptech.glide.request.Request): boolean;
					public isEquivalentTo(this_: com.bumptech.glide.request.Request): boolean;
					public onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					public onRequestSuccess(request: com.bumptech.glide.request.Request): void;
					public isComplete(): boolean;
					public canNotifyCleared(request: com.bumptech.glide.request.Request): boolean;
					public canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
					public setRequests(primary: com.bumptech.glide.request.Request, error: com.bumptech.glide.request.Request): void;
					public canSetImage(param0: com.bumptech.glide.request.Request): boolean;
					public canNotifyStatusChanged(request: com.bumptech.glide.request.Request): boolean;
					public getRoot(): com.bumptech.glide.request.RequestCoordinator;
					public isCleared(): boolean;
					public pause(): void;
					public canNotifyCleared(param0: com.bumptech.glide.request.Request): boolean;
					public clear(): void;
					public isRunning(): boolean;
					public isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
					public onRequestFailed(param0: com.bumptech.glide.request.Request): void;
					public constructor(requestLock: any, parent: com.bumptech.glide.request.RequestCoordinator);
					public onRequestFailed(request: com.bumptech.glide.request.Request): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export abstract class ExperimentalRequestListener<ResourceT>  extends com.bumptech.glide.request.RequestListener<any> {
					public static class: java.lang.Class<com.bumptech.glide.request.ExperimentalRequestListener<any>>;
					public onRequestStarted(model: any): void;
					public onResourceReady(param0: any, param1: any, param2: com.bumptech.glide.request.target.Target<any>, param3: com.bumptech.glide.load.DataSource, param4: boolean): boolean;
					public constructor();
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException, param1: any, param2: com.bumptech.glide.request.target.Target<any>, param3: boolean): boolean;
					public onResourceReady(param0: any, param1: any, param2: com.bumptech.glide.request.target.Target<any>, param3: com.bumptech.glide.load.DataSource, param4: boolean, param5: boolean): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export class FutureTarget<R>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.FutureTarget<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.FutureTarget<any> interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						onResourceReady(param0: R, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						setRequest(param0: com.bumptech.glide.request.Request): void;
						getRequest(): com.bumptech.glide.request.Request;
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public constructor();
					/**
					* -2147483648
					*/
					public static SIZE_ORIGINAL: number;
					public onStart(): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
					public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onStop(): void;
					public onDestroy(): void;
					public onResourceReady(param0: R, param1: com.bumptech.glide.request.transition.Transition<any>): void;
					public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export class Request {
					public static class: java.lang.Class<com.bumptech.glide.request.Request>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.Request interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						begin(): void;
						clear(): void;
						pause(): void;
						isRunning(): boolean;
						isComplete(): boolean;
						isCleared(): boolean;
						isAnyResourceSet(): boolean;
						isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
					});
					public constructor();
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public isCleared(): boolean;
					public pause(): void;
					public clear(): void;
					public isRunning(): boolean;
					public isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
					public isComplete(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export class RequestCoordinator {
					public static class: java.lang.Class<com.bumptech.glide.request.RequestCoordinator>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.RequestCoordinator interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						canSetImage(param0: com.bumptech.glide.request.Request): boolean;
						canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
						canNotifyCleared(param0: com.bumptech.glide.request.Request): boolean;
						isAnyResourceSet(): boolean;
						onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
						onRequestFailed(param0: com.bumptech.glide.request.Request): void;
						getRoot(): com.bumptech.glide.request.RequestCoordinator;
					});
					public constructor();
					public getRoot(): com.bumptech.glide.request.RequestCoordinator;
					public isAnyResourceSet(): boolean;
					public canNotifyCleared(param0: com.bumptech.glide.request.Request): boolean;
					public onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					public onRequestFailed(param0: com.bumptech.glide.request.Request): void;
					public canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
					public canSetImage(param0: com.bumptech.glide.request.Request): boolean;
				}
				export namespace RequestCoordinator {
					export class RequestState {
						public static class: java.lang.Class<com.bumptech.glide.request.RequestCoordinator.RequestState>;
						public static RUNNING: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static PAUSED: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static CLEARED: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static SUCCESS: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static FAILED: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static values(): androidNative.Array<com.bumptech.glide.request.RequestCoordinator.RequestState>;
						public static valueOf(name: string): com.bumptech.glide.request.RequestCoordinator.RequestState;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export class RequestFutureTarget<R>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.RequestFutureTarget<any>>;
					public get(): R;
					public isCancelled(): boolean;
					public onResourceReady(resource: R, model: any, target: com.bumptech.glide.request.target.Target<R>, dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): boolean;
					public onDestroy(): void;
					public onResourceReady(param0: R, param1: com.bumptech.glide.request.transition.Transition<any>): void;
					public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onStart(): void;
					public onLoadFailed(e: com.bumptech.glide.load.engine.GlideException, model: any, target: com.bumptech.glide.request.target.Target<R>, isFirstResource: boolean): boolean;
					public toString(): string;
					public get(time: number, timeUnit: java.util.concurrent.TimeUnit): R;
					public getRequest(): com.bumptech.glide.request.Request;
					public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public cancel(mayInterruptIfRunning: boolean): boolean;
					public onLoadFailed(errorDrawable: globalAndroid.graphics.drawable.Drawable): void;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onLoadCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
					public onLoadStarted(placeholder: globalAndroid.graphics.drawable.Drawable): void;
					public setRequest(request: com.bumptech.glide.request.Request): void;
					public constructor(width: number, height: number);
					public onResourceReady(param0: R, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: com.bumptech.glide.load.DataSource, param4: boolean): boolean;
					public isDone(): boolean;
					public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: boolean): boolean;
					public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onStop(): void;
					public onResourceReady(resource: R, transition: com.bumptech.glide.request.transition.Transition<any>): void;
				}
				export namespace RequestFutureTarget {
					export class Waiter {
						public static class: java.lang.Class<com.bumptech.glide.request.RequestFutureTarget.Waiter>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export class RequestListener<R>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.RequestListener<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.RequestListener<any> interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: boolean): boolean;
						onResourceReady(param0: R, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: com.bumptech.glide.load.DataSource, param4: boolean): boolean;
					});
					public constructor();
					public onResourceReady(param0: R, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: com.bumptech.glide.load.DataSource, param4: boolean): boolean;
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: boolean): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export class RequestOptions extends com.bumptech.glide.request.BaseRequestOptions<com.bumptech.glide.request.RequestOptions> {
					public static class: java.lang.Class<com.bumptech.glide.request.RequestOptions>;
					public static errorOf(errorDrawable: globalAndroid.graphics.drawable.Drawable): com.bumptech.glide.request.RequestOptions;
					public static encodeFormatOf(format: globalAndroid.graphics.Bitmap.CompressFormat): com.bumptech.glide.request.RequestOptions;
					public static errorOf(errorId: number): com.bumptech.glide.request.RequestOptions;
					public equals(o: any): boolean;
					public static decodeTypeOf(resourceClass: java.lang.Class<any>): com.bumptech.glide.request.RequestOptions;
					public static frameOf(frameTimeMicros: number): com.bumptech.glide.request.RequestOptions;
					public static timeoutOf(timeout: number): com.bumptech.glide.request.RequestOptions;
					public constructor();
					public static noAnimation(): com.bumptech.glide.request.RequestOptions;
					public static downsampleOf(strategy: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy): com.bumptech.glide.request.RequestOptions;
					public static placeholderOf(placeholderId: number): com.bumptech.glide.request.RequestOptions;
					public static noTransformation(): com.bumptech.glide.request.RequestOptions;
					public hashCode(): number;
					public static diskCacheStrategyOf(diskCacheStrategy: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.request.RequestOptions;
					public static formatOf(format: com.bumptech.glide.load.DecodeFormat): com.bumptech.glide.request.RequestOptions;
					public static encodeQualityOf(quality: number): com.bumptech.glide.request.RequestOptions;
					public static option(option: com.bumptech.glide.load.Option<any>, value: any): com.bumptech.glide.request.RequestOptions;
					public static signatureOf(signature: com.bumptech.glide.load.Key): com.bumptech.glide.request.RequestOptions;
					public static centerInsideTransform(): com.bumptech.glide.request.RequestOptions;
					public static bitmapTransform(transformation: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): com.bumptech.glide.request.RequestOptions;
					public static sizeMultiplierOf(sizeMultiplier: number): com.bumptech.glide.request.RequestOptions;
					public static overrideOf(size: number): com.bumptech.glide.request.RequestOptions;
					public static priorityOf(priority: com.bumptech.glide.Priority): com.bumptech.glide.request.RequestOptions;
					public static skipMemoryCacheOf(skipMemoryCache: boolean): com.bumptech.glide.request.RequestOptions;
					public static placeholderOf(placeholder: globalAndroid.graphics.drawable.Drawable): com.bumptech.glide.request.RequestOptions;
					public static centerCropTransform(): com.bumptech.glide.request.RequestOptions;
					public static circleCropTransform(): com.bumptech.glide.request.RequestOptions;
					public static overrideOf(width: number, height: number): com.bumptech.glide.request.RequestOptions;
					public static fitCenterTransform(): com.bumptech.glide.request.RequestOptions;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export class ResourceCallback {
					public static class: java.lang.Class<com.bumptech.glide.request.ResourceCallback>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.ResourceCallback interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						onResourceReady(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.DataSource, param2: boolean): void;
						onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
						getLock(): any;
					});
					public constructor();
					public onResourceReady(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.DataSource, param2: boolean): void;
					public getLock(): any;
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export class SingleRequest<R>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.SingleRequest<any>>;
					public onResourceReady(exception: com.bumptech.glide.load.engine.Resource<any>, received: com.bumptech.glide.load.DataSource, this_: boolean): void;
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public onResourceReady(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.DataSource, param2: boolean): void;
					public onLoadFailed(e: com.bumptech.glide.load.engine.GlideException): void;
					public isComplete(): boolean;
					public onSizeReady(param0: number, param1: number): void;
					public getLock(): any;
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
					public static obtain(context: globalAndroid.content.Context, glideContext: com.bumptech.glide.GlideContext, requestLock: any, model: any, transcodeClass: java.lang.Class<any>, requestOptions: com.bumptech.glide.request.BaseRequestOptions<any>, overrideWidth: number, overrideHeight: number, priority: com.bumptech.glide.Priority, target: com.bumptech.glide.request.target.Target<any>, targetListener: com.bumptech.glide.request.RequestListener<any>, requestListeners: java.util.List<any>, requestCoordinator: com.bumptech.glide.request.RequestCoordinator, engine: com.bumptech.glide.load.engine.Engine, animationFactory: com.bumptech.glide.request.transition.TransitionFactory<any>, callbackExecutor: java.util.concurrent.Executor): com.bumptech.glide.request.SingleRequest<any>;
					public onSizeReady(this_: number, width: number): void;
					public toString(): string;
					public isEquivalentTo(localOverrideHeight: com.bumptech.glide.request.Request): boolean;
					public isCleared(): boolean;
					public pause(): void;
					public clear(): void;
					public isRunning(): boolean;
					public isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
				}
				export namespace SingleRequest {
					export class Status {
						public static class: java.lang.Class<com.bumptech.glide.request.SingleRequest.Status>;
						public static PENDING: com.bumptech.glide.request.SingleRequest.Status;
						public static RUNNING: com.bumptech.glide.request.SingleRequest.Status;
						public static WAITING_FOR_SIZE: com.bumptech.glide.request.SingleRequest.Status;
						public static COMPLETE: com.bumptech.glide.request.SingleRequest.Status;
						public static FAILED: com.bumptech.glide.request.SingleRequest.Status;
						public static CLEARED: com.bumptech.glide.request.SingleRequest.Status;
						public static values(): androidNative.Array<com.bumptech.glide.request.SingleRequest.Status>;
						public static valueOf(name: string): com.bumptech.glide.request.SingleRequest.Status;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export class ThumbnailRequestCoordinator implements com.bumptech.glide.request.RequestCoordinator, com.bumptech.glide.request.Request {
					public static class: java.lang.Class<com.bumptech.glide.request.ThumbnailRequestCoordinator>;
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public canSetImage(request: com.bumptech.glide.request.Request): boolean;
					public isEquivalentTo(this_: com.bumptech.glide.request.Request): boolean;
					public onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					public onRequestSuccess(request: com.bumptech.glide.request.Request): void;
					public isComplete(): boolean;
					public canNotifyCleared(request: com.bumptech.glide.request.Request): boolean;
					public canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
					public canSetImage(param0: com.bumptech.glide.request.Request): boolean;
					public canNotifyStatusChanged(request: com.bumptech.glide.request.Request): boolean;
					public getRoot(): com.bumptech.glide.request.RequestCoordinator;
					public setRequests(full: com.bumptech.glide.request.Request, thumb: com.bumptech.glide.request.Request): void;
					public isCleared(): boolean;
					public pause(): void;
					public canNotifyCleared(param0: com.bumptech.glide.request.Request): boolean;
					public clear(): void;
					public isRunning(): boolean;
					public isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
					public onRequestFailed(param0: com.bumptech.glide.request.Request): void;
					public constructor(requestLock: any, parent: com.bumptech.glide.request.RequestCoordinator);
					public onRequestFailed(request: com.bumptech.glide.request.Request): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export class AppWidgetTarget extends com.bumptech.glide.request.target.CustomTarget<globalAndroid.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.AppWidgetTarget>;
						public constructor(context: globalAndroid.content.Context, width: number, height: number, viewId: number, remoteViews: globalAndroid.widget.RemoteViews, componentName: globalAndroid.content.ComponentName);
						public constructor();
						public constructor(context: globalAndroid.content.Context, viewId: number, remoteViews: globalAndroid.widget.RemoteViews, widgetIds: androidNative.Array<number>);
						public constructor(width: number, height: number);
						public constructor(context: globalAndroid.content.Context, width: number, height: number, viewId: number, remoteViews: globalAndroid.widget.RemoteViews, widgetIds: androidNative.Array<number>);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public constructor(context: globalAndroid.content.Context, viewId: number, remoteViews: globalAndroid.widget.RemoteViews, componentName: globalAndroid.content.ComponentName);
						public onResourceReady(resource: globalAndroid.graphics.Bitmap, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export abstract class BaseTarget<Z>  extends com.bumptech.glide.request.target.Target<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.BaseTarget<any>>;
						public constructor();
						public onLoadFailed(errorDrawable: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onStop(): void;
						public onDestroy(): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadStarted(placeholder: globalAndroid.graphics.drawable.Drawable): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export class BitmapImageViewTarget extends com.bumptech.glide.request.target.ImageViewTarget<globalAndroid.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.BitmapImageViewTarget>;
						public constructor();
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(view: globalAndroid.widget.ImageView);
						public setResource(param0: any): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(view: any);
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getView(): globalAndroid.view.View;
						public setResource(resource: globalAndroid.graphics.Bitmap): void;
						/** @deprecated */
						public constructor(view: globalAndroid.widget.ImageView, waitForLayout: boolean);
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export class BitmapThumbnailImageViewTarget extends com.bumptech.glide.request.target.ThumbnailImageViewTarget<globalAndroid.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.BitmapThumbnailImageViewTarget>;
						public constructor();
						public getDrawable(resource: globalAndroid.graphics.Bitmap): globalAndroid.graphics.drawable.Drawable;
						public getDrawable(param0: any): globalAndroid.graphics.drawable.Drawable;
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(view: globalAndroid.widget.ImageView);
						public getRequest(): com.bumptech.glide.request.Request;
						public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(view: any);
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getView(): globalAndroid.view.View;
						/** @deprecated */
						public constructor(view: globalAndroid.widget.ImageView, waitForLayout: boolean);
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export abstract class CustomTarget<T>  extends com.bumptech.glide.request.target.Target<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.CustomTarget<any>>;
						public constructor();
						public onLoadFailed(errorDrawable: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public constructor(width: number, height: number);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onStop(): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onDestroy(): void;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadStarted(placeholder: globalAndroid.graphics.drawable.Drawable): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export abstract class CustomViewTarget<T, Z>  extends com.bumptech.glide.request.target.Target<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.CustomViewTarget<any,any>>;
						public view: any;
						public getView(): any;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public clearOnDetach(): com.bumptech.glide.request.target.CustomViewTarget<any,any>;
						public waitForLayout(): com.bumptech.glide.request.target.CustomViewTarget<any,any>;
						public onResourceCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onStop(): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public toString(): string;
						public onResourceLoading(placeholder: globalAndroid.graphics.drawable.Drawable): void;
						public onDestroy(): void;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(view: any);
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadStarted(placeholder: globalAndroid.graphics.drawable.Drawable): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						/** @deprecated */
						public useTagId(tagId: number): com.bumptech.glide.request.target.CustomViewTarget<any,any>;
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
					}
					export namespace CustomViewTarget {
						export class SizeDeterminer {
							public static class: java.lang.Class<com.bumptech.glide.request.target.CustomViewTarget.SizeDeterminer>;
						}
						export namespace SizeDeterminer {
							export class SizeDeterminerLayoutListener {
								public static class: java.lang.Class<com.bumptech.glide.request.target.CustomViewTarget.SizeDeterminer.SizeDeterminerLayoutListener>;
								public onPreDraw(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export class DrawableImageViewTarget extends com.bumptech.glide.request.target.ImageViewTarget<globalAndroid.graphics.drawable.Drawable> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.DrawableImageViewTarget>;
						public constructor();
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(view: globalAndroid.widget.ImageView);
						public setResource(param0: any): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public setResource(resource: globalAndroid.graphics.drawable.Drawable): void;
						public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(view: any);
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getView(): globalAndroid.view.View;
						/** @deprecated */
						public constructor(view: globalAndroid.widget.ImageView, waitForLayout: boolean);
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export class DrawableThumbnailImageViewTarget extends com.bumptech.glide.request.target.ThumbnailImageViewTarget<globalAndroid.graphics.drawable.Drawable> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.DrawableThumbnailImageViewTarget>;
						public constructor();
						public getDrawable(resource: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
						public getDrawable(param0: any): globalAndroid.graphics.drawable.Drawable;
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(view: globalAndroid.widget.ImageView);
						public getRequest(): com.bumptech.glide.request.Request;
						public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(view: any);
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getView(): globalAndroid.view.View;
						/** @deprecated */
						public constructor(view: globalAndroid.widget.ImageView, waitForLayout: boolean);
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export class FixedSizeDrawable {
						public static class: java.lang.Class<com.bumptech.glide.request.target.FixedSizeDrawable>;
						public getChangingConfigurations(): number;
						public setVisible(visible: boolean, restart: boolean): boolean;
						public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
						public clearColorFilter(): void;
						public getMinimumWidth(): number;
						public draw(canvas: globalAndroid.graphics.Canvas): void;
						public getAlpha(): number;
						public mutate(): globalAndroid.graphics.drawable.Drawable;
						public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
						public getCallback(): globalAndroid.graphics.drawable.Drawable.Callback;
						public getPadding(padding: globalAndroid.graphics.Rect): boolean;
						public setChangingConfigurations(configs: number): void;
						public getMinimumHeight(): number;
						public setBounds(bounds: globalAndroid.graphics.Rect): void;
						public invalidateSelf(): void;
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public setBounds(left: number, top: number, right: number, bottom: number): void;
						public getOpacity(): number;
						public setAlpha(i: number): void;
						public constructor(wrapped: globalAndroid.graphics.drawable.Drawable, width: number, height: number);
						public setColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
						public unscheduleSelf(what: java.lang.Runnable): void;
						public scheduleSelf(what: java.lang.Runnable, when: number): void;
						/** @deprecated */
						public setDither(dither: boolean): void;
						public getCurrent(): globalAndroid.graphics.drawable.Drawable;
						public setFilterBitmap(filter: boolean): void;
					}
					export namespace FixedSizeDrawable {
						export class State {
							public static class: java.lang.Class<com.bumptech.glide.request.target.FixedSizeDrawable.State>;
							public newDrawable(): globalAndroid.graphics.drawable.Drawable;
							public newDrawable(res: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export abstract class ImageViewTarget<Z>  extends com.bumptech.glide.request.target.ViewTarget<globalAndroid.widget.ImageView,any> implements com.bumptech.glide.request.transition.Transition.ViewAdapter  {
						public static class: java.lang.Class<com.bumptech.glide.request.target.ImageViewTarget<any>>;
						public constructor();
						public onLoadFailed(errorDrawable: globalAndroid.graphics.drawable.Drawable): void;
						public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(view: globalAndroid.widget.ImageView);
						public onStop(): void;
						public setResource(param0: any): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(view: any);
						public setDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadStarted(placeholder: globalAndroid.graphics.drawable.Drawable): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getView(): globalAndroid.view.View;
						/** @deprecated */
						public constructor(view: globalAndroid.widget.ImageView, waitForLayout: boolean);
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export class ImageViewTargetFactory {
						public static class: java.lang.Class<com.bumptech.glide.request.target.ImageViewTargetFactory>;
						public constructor();
						public buildTarget(view: globalAndroid.widget.ImageView, clazz: java.lang.Class<any>): com.bumptech.glide.request.target.ViewTarget<any,any>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export class NotificationTarget extends com.bumptech.glide.request.target.CustomTarget<globalAndroid.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.NotificationTarget>;
						public constructor();
						public constructor(context: globalAndroid.content.Context, viewId: number, remoteViews: globalAndroid.widget.RemoteViews, notification: globalAndroid.app.Notification, notificationId: number);
						public constructor(context: globalAndroid.content.Context, width: number, height: number, viewId: number, remoteViews: globalAndroid.widget.RemoteViews, notification: globalAndroid.app.Notification, notificationId: number, notificationTag: string);
						public constructor(width: number, height: number);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onResourceReady(resource: globalAndroid.graphics.Bitmap, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(context: globalAndroid.content.Context, viewId: number, remoteViews: globalAndroid.widget.RemoteViews, notification: globalAndroid.app.Notification, notificationId: number, notificationTag: string);
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export class PreloadTarget<Z>  extends com.bumptech.glide.request.target.CustomTarget<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.PreloadTarget<any>>;
						public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public static obtain(requestManager: com.bumptech.glide.RequestManager, width: number, height: number): com.bumptech.glide.request.target.PreloadTarget<any>;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export abstract class SimpleTarget<Z>  extends com.bumptech.glide.request.target.BaseTarget<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.SimpleTarget<any>>;
						public constructor();
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public constructor(width: number, height: number);
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export class SizeReadyCallback {
						public static class: java.lang.Class<com.bumptech.glide.request.target.SizeReadyCallback>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.target.SizeReadyCallback interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							onSizeReady(param0: number, param1: number): void;
						});
						public constructor();
						public onSizeReady(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export class Target<R>  extends com.bumptech.glide.manager.LifecycleListener {
						public static class: java.lang.Class<com.bumptech.glide.request.target.Target<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.target.Target<any> interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
							onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
							onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
							onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
							getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
							removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
							setRequest(param0: com.bumptech.glide.request.Request): void;
							getRequest(): com.bumptech.glide.request.Request;
							onStart(): void;
							onStop(): void;
							onDestroy(): void;
						});
						public constructor();
						/**
						* -2147483648
						*/
						public static SIZE_ORIGINAL: number;
						public onDestroy(): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onStop(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export abstract class ThumbnailImageViewTarget<T>  extends com.bumptech.glide.request.target.ImageViewTarget<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.ThumbnailImageViewTarget<any>>;
						public constructor();
						public getDrawable(param0: any): globalAndroid.graphics.drawable.Drawable;
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(view: globalAndroid.widget.ImageView);
						public getRequest(): com.bumptech.glide.request.Request;
						public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(view: any);
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getView(): globalAndroid.view.View;
						public setResource(resource: any): void;
						/** @deprecated */
						public constructor(view: globalAndroid.widget.ImageView, waitForLayout: boolean);
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace target {
					export abstract class ViewTarget<T, Z>  extends com.bumptech.glide.request.target.BaseTarget<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.ViewTarget<any,any>>;
						public view: any;
						public getView(): any;
						public constructor();
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public clearOnDetach(): com.bumptech.glide.request.target.ViewTarget<any,any>;
						public waitForLayout(): com.bumptech.glide.request.target.ViewTarget<any,any>;
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public toString(): string;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(view: any);
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadStarted(placeholder: globalAndroid.graphics.drawable.Drawable): void;
						/** @deprecated */
						public static setTagId(tagId: number): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
					}
					export namespace ViewTarget {
						export class SizeDeterminer {
							public static class: java.lang.Class<com.bumptech.glide.request.target.ViewTarget.SizeDeterminer>;
						}
						export namespace SizeDeterminer {
							export class SizeDeterminerLayoutListener {
								public static class: java.lang.Class<com.bumptech.glide.request.target.ViewTarget.SizeDeterminer.SizeDeterminerLayoutListener>;
								public onPreDraw(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace transition {
					export abstract class BitmapContainerTransitionFactory<R>  extends com.bumptech.glide.request.transition.TransitionFactory<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.BitmapContainerTransitionFactory<any>>;
						public getBitmap(param0: any): globalAndroid.graphics.Bitmap;
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public constructor(realFactory: com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.drawable.Drawable>);
						public build(dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): com.bumptech.glide.request.transition.Transition<any>;
					}
					export namespace BitmapContainerTransitionFactory {
						export class BitmapGlideAnimation extends com.bumptech.glide.request.transition.Transition<any> {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.BitmapContainerTransitionFactory.BitmapGlideAnimation>;
							public transition(current: any, adapter: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
							public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace transition {
					export class BitmapTransitionFactory extends com.bumptech.glide.request.transition.BitmapContainerTransitionFactory<globalAndroid.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.BitmapTransitionFactory>;
						public getBitmap(param0: any): globalAndroid.graphics.Bitmap;
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public constructor(realFactory: com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.drawable.Drawable>);
						public getBitmap(current: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace transition {
					export class DrawableCrossFadeFactory extends com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.drawable.Drawable> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.DrawableCrossFadeFactory>;
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public constructor(duration: number, isCrossFadeEnabled: boolean);
						public build(dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): com.bumptech.glide.request.transition.Transition<globalAndroid.graphics.drawable.Drawable>;
					}
					export namespace DrawableCrossFadeFactory {
						export class Builder {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder>;
							public constructor();
							public build(): com.bumptech.glide.request.transition.DrawableCrossFadeFactory;
							public constructor(durationMillis: number);
							public setCrossFadeEnabled(isCrossFadeEnabled: boolean): com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace transition {
					export class DrawableCrossFadeTransition extends com.bumptech.glide.request.transition.Transition<globalAndroid.graphics.drawable.Drawable> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.DrawableCrossFadeTransition>;
						public constructor(duration: number, isCrossFadeEnabled: boolean);
						public transition(current: globalAndroid.graphics.drawable.Drawable, adapter: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace transition {
					export class NoTransition<R>  extends com.bumptech.glide.request.transition.Transition<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.NoTransition<any>>;
						public constructor();
						public static getFactory(): com.bumptech.glide.request.transition.TransitionFactory<any>;
						public transition(current: any, adapter: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						public static get(): com.bumptech.glide.request.transition.Transition<any>;
					}
					export namespace NoTransition {
						export class NoAnimationFactory<R>  extends com.bumptech.glide.request.transition.TransitionFactory<any> {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.NoTransition.NoAnimationFactory<any>>;
							public constructor();
							public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
							public build(dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): com.bumptech.glide.request.transition.Transition<any>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace transition {
					export class Transition<R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.Transition<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.transition.Transition<any> interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							transition(param0: R, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						});
						public constructor();
						public transition(param0: R, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
					}
					export namespace Transition {
						export class ViewAdapter {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.Transition.ViewAdapter>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.transition.Transition$ViewAdapter interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								getView(): globalAndroid.view.View;
								getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
								setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							});
							public constructor();
							public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
							public getView(): globalAndroid.view.View;
							public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace transition {
					export class TransitionFactory<R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.TransitionFactory<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.transition.TransitionFactory<any> interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<R>;
						});
						public constructor();
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<R>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace transition {
					export class ViewAnimationFactory<R>  extends com.bumptech.glide.request.transition.TransitionFactory<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewAnimationFactory<any>>;
						public constructor(animation: globalAndroid.view.animation.Animation);
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public constructor(animationId: number);
						public build(dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): com.bumptech.glide.request.transition.Transition<any>;
					}
					export namespace ViewAnimationFactory {
						export class ConcreteViewTransitionAnimationFactory extends com.bumptech.glide.request.transition.ViewTransition.ViewTransitionAnimationFactory {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewAnimationFactory.ConcreteViewTransitionAnimationFactory>;
							public build(context: globalAndroid.content.Context): globalAndroid.view.animation.Animation;
							public build(param0: globalAndroid.content.Context): globalAndroid.view.animation.Animation;
						}
						export class ResourceViewTransitionAnimationFactory extends com.bumptech.glide.request.transition.ViewTransition.ViewTransitionAnimationFactory {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewAnimationFactory.ResourceViewTransitionAnimationFactory>;
							public build(context: globalAndroid.content.Context): globalAndroid.view.animation.Animation;
							public build(param0: globalAndroid.content.Context): globalAndroid.view.animation.Animation;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace transition {
					export class ViewPropertyAnimationFactory<R>  extends com.bumptech.glide.request.transition.TransitionFactory<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewPropertyAnimationFactory<any>>;
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public constructor(animator: com.bumptech.glide.request.transition.ViewPropertyTransition.Animator);
						public build(dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): com.bumptech.glide.request.transition.Transition<any>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace transition {
					export class ViewPropertyTransition<R>  extends com.bumptech.glide.request.transition.Transition<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewPropertyTransition<any>>;
						public constructor(animator: com.bumptech.glide.request.transition.ViewPropertyTransition.Animator);
						public transition(current: any, adapter: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
					}
					export namespace ViewPropertyTransition {
						export class Animator {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewPropertyTransition.Animator>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.transition.ViewPropertyTransition$Animator interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								animate(param0: globalAndroid.view.View): void;
							});
							public constructor();
							public animate(param0: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace request {
				export namespace transition {
					export class ViewTransition<R>  extends com.bumptech.glide.request.transition.Transition<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewTransition<any>>;
						public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						public transition(this_: any, current: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
					}
					export namespace ViewTransition {
						export class ViewTransitionAnimationFactory {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewTransition.ViewTransitionAnimationFactory>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.transition.ViewTransition$ViewTransitionAnimationFactory interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								build(param0: globalAndroid.content.Context): globalAndroid.view.animation.Animation;
							});
							public constructor();
							public build(param0: globalAndroid.content.Context): globalAndroid.view.animation.Animation;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace signature {
				export class AndroidResourceSignature extends com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.signature.AndroidResourceSignature>;
					public equals(param0: any): boolean;
					public equals(this_: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
					public static obtain(context: globalAndroid.content.Context): com.bumptech.glide.load.Key;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace signature {
				export class ApplicationVersionSignature {
					public static class: java.lang.Class<com.bumptech.glide.signature.ApplicationVersionSignature>;
					public static obtain(toAdd: globalAndroid.content.Context): com.bumptech.glide.load.Key;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace signature {
				export class EmptySignature extends com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.signature.EmptySignature>;
					public equals(param0: any): boolean;
					public toString(): string;
					public static obtain(): com.bumptech.glide.signature.EmptySignature;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace signature {
				export class MediaStoreSignature extends com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.signature.MediaStoreSignature>;
					public equals(param0: any): boolean;
					public constructor(mimeType: string, dateModified: number, orientation: number);
					public equals(o: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace signature {
				export class ObjectKey extends com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.signature.ObjectKey>;
					public equals(param0: any): boolean;
					public toString(): string;
					public equals(this_: any): boolean;
					public constructor(object: any);
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class ByteBufferUtil {
					public static class: java.lang.Class<com.bumptech.glide.util.ByteBufferUtil>;
					public static toStream(toRead: java.nio.ByteBuffer, buffer: java.io.OutputStream): void;
					public static toBytes(result: java.nio.ByteBuffer): androidNative.Array<number>;
					public static toStream(buffer: java.nio.ByteBuffer): java.io.InputStream;
					public static fromStream(stream: java.io.InputStream): java.nio.ByteBuffer;
					public static fromFile(fileLength: java.io.File): java.nio.ByteBuffer;
					public static rewind(buffer: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static toFile(buffer: java.nio.ByteBuffer, file: java.io.File): void;
				}
				export namespace ByteBufferUtil {
					export class ByteBufferStream {
						public static class: java.lang.Class<com.bumptech.glide.util.ByteBufferUtil.ByteBufferStream>;
						public read(): number;
						public skip(byteCount: number): number;
						public mark(readLimit: number): void;
						public markSupported(): boolean;
						public read(buffer: androidNative.Array<number>, byteOffset: number, byteCount: number): number;
						public reset(): void;
						public available(): number;
					}
					export class SafeArray {
						public static class: java.lang.Class<com.bumptech.glide.util.ByteBufferUtil.SafeArray>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class CachedHashCodeArrayMap<K, V>  extends androidx.collection.ArrayMap<any,any> {
					public static class: java.lang.Class<com.bumptech.glide.util.CachedHashCodeArrayMap<any,any>>;
					public removeAt(index: number): any;
					public setValueAt(index: number, value: any): any;
					public constructor();
					public clear(): void;
					public put(key: any, value: any): any;
					public hashCode(): number;
					public putAll(simpleArrayMap: androidx.collection.SimpleArrayMap<any,any>): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class ContentLengthInputStream {
					public static class: java.lang.Class<com.bumptech.glide.util.ContentLengthInputStream>;
					public available(): number;
					public read(buffer: androidNative.Array<number>, byteOffset: number, byteCount: number): number;
					public read(): number;
					public static obtain(other: java.io.InputStream, contentLength: number): java.io.InputStream;
					public read(buffer: androidNative.Array<number>): number;
					public static obtain(other: java.io.InputStream, contentLengthHeader: string): java.io.InputStream;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class ExceptionCatchingInputStream {
					public static class: java.lang.Class<com.bumptech.glide.util.ExceptionCatchingInputStream>;
					public available(): number;
					public read(e: androidNative.Array<number>, this_: number, buffer: number): number;
					public skip(e: number): number;
					public read(): number;
					public getException(): java.io.IOException;
					public reset(): void;
					public read(e: androidNative.Array<number>): number;
					public markSupported(): boolean;
					public static obtain(result: java.io.InputStream): com.bumptech.glide.util.ExceptionCatchingInputStream;
					public close(): void;
					public release(): void;
					public mark(readLimit: number): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class ExceptionPassthroughInputStream {
					public static class: java.lang.Class<com.bumptech.glide.util.ExceptionPassthroughInputStream>;
					public available(): number;
					public read(): number;
					public getException(): java.io.IOException;
					public reset(): void;
					public read(this_: androidNative.Array<number>, buffer: number, byteOffset: number): number;
					public read(this_: androidNative.Array<number>): number;
					public markSupported(): boolean;
					public close(): void;
					public release(): void;
					public mark(readLimit: number): void;
					public static obtain(result: java.io.InputStream): com.bumptech.glide.util.ExceptionPassthroughInputStream;
					public skip(this_: number): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class Executors {
					public static class: java.lang.Class<com.bumptech.glide.util.Executors>;
					public static directExecutor(): java.util.concurrent.Executor;
					public static mainThreadExecutorFront(): java.util.concurrent.Executor;
					public static shutdownAndAwaitTermination(ie: java.util.concurrent.ExecutorService): void;
					public static mainThreadExecutor(): java.util.concurrent.Executor;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class FixedPreloadSizeProvider<T>  extends com.bumptech.glide.ListPreloader.PreloadSizeProvider<any> {
					public static class: java.lang.Class<com.bumptech.glide.util.FixedPreloadSizeProvider<any>>;
					public getPreloadSize(param0: any, param1: number, param2: number): androidNative.Array<number>;
					public constructor(width: number, height: number);
					public getPreloadSize(item: any, adapterPosition: number, itemPosition: number): androidNative.Array<number>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class GlideSuppliers {
					public static class: java.lang.Class<com.bumptech.glide.util.GlideSuppliers>;
					public static memorize(supplier: com.bumptech.glide.util.GlideSuppliers.GlideSupplier<any>): com.bumptech.glide.util.GlideSuppliers.GlideSupplier<any>;
				}
				export namespace GlideSuppliers {
					export class GlideSupplier<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.util.GlideSuppliers.GlideSupplier<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.util.GlideSuppliers$GlideSupplier interface with the provided implementation.
						 * An empty constructor exists calling super().
						 */
						public constructor(implementation: {
							get(): T;
						});
						public constructor();
						public get(): T;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class LogTime {
					public static class: java.lang.Class<com.bumptech.glide.util.LogTime>;
					public static getLogTime(): number;
					public static getElapsedMillis(logTime: number): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class LruCache<T, Y>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.util.LruCache<any,any>>;
					public put(key: T, item: Y): Y;
					public getCount(): number;
					public contains(key: T): boolean;
					public clearMemory(): void;
					public remove(key: T): Y;
					public onItemEvicted(key: T, item: Y): void;
					public get(key: T): Y;
					public trimToSize(key: number): void;
					public setSizeMultiplier(multiplier: number): void;
					public getCurrentSize(): number;
					public constructor(size: number);
					public getMaxSize(): number;
					public getSize(item: Y): number;
				}
				export namespace LruCache {
					export class Entry<Y>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.util.LruCache.Entry<any>>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class MarkEnforcingInputStream {
					public static class: java.lang.Class<com.bumptech.glide.util.MarkEnforcingInputStream>;
					public read(buffer: androidNative.Array<number>, byteOffset: number, byteCount: number): number;
					public available(): number;
					public read(): number;
					public skip(byteCount: number): number;
					public reset(): void;
					public mark(readLimit: number): void;
					public constructor(in_: java.io.InputStream);
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class MultiClassKey {
					public static class: java.lang.Class<com.bumptech.glide.util.MultiClassKey>;
					public constructor(first: java.lang.Class<any>, second: java.lang.Class<any>, third: java.lang.Class<any>);
					public toString(): string;
					public constructor();
					public set(first: java.lang.Class<any>, second: java.lang.Class<any>): void;
					public set(first: java.lang.Class<any>, second: java.lang.Class<any>, third: java.lang.Class<any>): void;
					public constructor(first: java.lang.Class<any>, second: java.lang.Class<any>);
					public equals(o: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class Preconditions {
					public static class: java.lang.Class<com.bumptech.glide.util.Preconditions>;
					public static checkNotEmpty(collection: java.util.Collection<any>): java.util.Collection<any>;
					public static checkArgument(expression: boolean): void;
					public static checkArgument(expression: boolean, message: string): void;
					public static checkNotNull(arg: any): any;
					public static checkNotNull(arg: any, message: string): any;
					public static checkNotEmpty(string: string): string;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class Synthetic {
					public static class: java.lang.Class<com.bumptech.glide.util.Synthetic>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.util.Synthetic interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class Util {
					public static class: java.lang.Class<com.bumptech.glide.util.Util>;
					/** @deprecated */
					public static getSize(bitmap: globalAndroid.graphics.Bitmap): number;
					public static bothModelsNullEquivalentOrEquals(a: any, b: any): boolean;
					public static getBitmapByteSize(bitmap: globalAndroid.graphics.Bitmap): number;
					public static assertMainThread(): void;
					public static createQueue(size: number): java.util.Queue<any>;
					public static getBitmapByteSize(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): number;
					public static isOnBackgroundThread(): boolean;
					public static isValidDimensions(width: number, height: number): boolean;
					public static isOnMainThread(): boolean;
					public static bothBaseRequestOptionsNullEquivalentOrEquals(a: com.bumptech.glide.request.BaseRequestOptions<any>, b: com.bumptech.glide.request.BaseRequestOptions<any>): boolean;
					public static hashCode(value: boolean): number;
					public static getBytesPerPixel(bytesPerPixel: globalAndroid.graphics.Bitmap.Config): number;
					public static getSnapshot(item: java.util.Collection<any>): java.util.List<any>;
					public static postAtFrontOfQueueOnUiThread(runnable: java.lang.Runnable): void;
					public static hashCode(value: number, accumulator: number): number;
					public static hashCode(object: any, accumulator: number): number;
					public static isValidDimension(dimen: number): boolean;
					public static removeCallbacksOnUiThread(runnable: java.lang.Runnable): void;
					public static assertBackgroundThread(): void;
					public static bothNullOrEqual(a: any, b: any): boolean;
					public static postOnUiThread(runnable: java.lang.Runnable): void;
					public static hashCode(value: number): number;
					public static sha256BytesToHex(bytes: androidNative.Array<number>): string;
					public static hashCode(value: boolean, accumulator: number): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export class ViewPreloadSizeProvider<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.util.ViewPreloadSizeProvider<any>>;
					public getPreloadSize(item: T, adapterPosition: number, itemPosition: number): androidNative.Array<number>;
					public onSizeReady(width: number, height: number): void;
					public getPreloadSize(param0: T, param1: number, param2: number): androidNative.Array<number>;
					public constructor(view: globalAndroid.view.View);
					public constructor();
					public setView(view: globalAndroid.view.View): void;
					public onSizeReady(param0: number, param1: number): void;
				}
				export namespace ViewPreloadSizeProvider {
					export class SizeViewTarget extends com.bumptech.glide.request.target.CustomViewTarget<globalAndroid.view.View,any> {
						public static class: java.lang.Class<com.bumptech.glide.util.ViewPreloadSizeProvider.SizeViewTarget>;
						public onResourceCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadFailed(errorDrawable: globalAndroid.graphics.drawable.Drawable): void;
						public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export namespace pool {
					export class FactoryPools {
						public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools>;
						public static threadSafeList(): androidx.core.util.Pools.Pool;
						public static threadSafeList(size: number): androidx.core.util.Pools.Pool;
						public static threadSafe(size: number, factory: com.bumptech.glide.util.pool.FactoryPools.Factory<any>, resetter: com.bumptech.glide.util.pool.FactoryPools.Resetter<any>): androidx.core.util.Pools.Pool;
						public static simple(size: number, factory: com.bumptech.glide.util.pool.FactoryPools.Factory<any>): androidx.core.util.Pools.Pool;
						public static threadSafe(size: number, factory: com.bumptech.glide.util.pool.FactoryPools.Factory<any>): androidx.core.util.Pools.Pool;
					}
					export namespace FactoryPools {
						export class Factory<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools.Factory<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.util.pool.FactoryPools$Factory interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								create(): T;
							});
							public constructor();
							public create(): T;
						}
						export class FactoryPool<T>  extends androidx.core.util.Pools.Pool<any> {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools.FactoryPool<any>>;
							public acquire(): any;
							public release(instance: any): boolean;
						}
						export class Poolable {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools.Poolable>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.util.pool.FactoryPools$Poolable interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
							});
							public constructor();
							public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
						}
						export class Resetter<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools.Resetter<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.util.pool.FactoryPools$Resetter interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								reset(param0: T): void;
							});
							public constructor();
							public reset(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export namespace pool {
					export class GlideTrace {
						public static class: java.lang.Class<com.bumptech.glide.util.pool.GlideTrace>;
						public static endSectionAsync(tag: string, cookie: number): void;
						public static beginSectionFormat(format: string, arg1: any, arg2: any, arg3: any): void;
						public static endSection(): void;
						public static beginSection(tag: string): void;
						public static beginSectionFormat(format: string, arg1: any, arg2: any): void;
						public static beginSectionAsync(tag: string): number;
						public static beginSectionFormat(format: string, arg1: any): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace util {
				export namespace pool {
					export abstract class StateVerifier {
						public static class: java.lang.Class<com.bumptech.glide.util.pool.StateVerifier>;
						public static newInstance(): com.bumptech.glide.util.pool.StateVerifier;
						public throwIfRecycled(): void;
					}
					export namespace StateVerifier {
						export class DebugStateVerifier extends com.bumptech.glide.util.pool.StateVerifier {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.StateVerifier.DebugStateVerifier>;
							public throwIfRecycled(): void;
						}
						export class DefaultStateVerifier extends com.bumptech.glide.util.pool.StateVerifier {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.StateVerifier.DefaultStateVerifier>;
							public setRecycled(isRecycled: boolean): void;
							public throwIfRecycled(): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.bumptech.glide.GenericTransitionOptions:1
//com.bumptech.glide.ListPreloader:1
//com.bumptech.glide.ListPreloader.PreloadModelProvider:1
//com.bumptech.glide.ListPreloader.PreloadSizeProvider:1
//com.bumptech.glide.ModelTypes:1
//com.bumptech.glide.RequestBuilder:1
//com.bumptech.glide.TransitionOptions:2
//com.bumptech.glide.load.Encoder:1
//com.bumptech.glide.load.MultiTransformation:1
//com.bumptech.glide.load.Option:1
//com.bumptech.glide.load.Option.CacheKeyUpdater:1
//com.bumptech.glide.load.ResourceDecoder:2
//com.bumptech.glide.load.ResourceEncoder:1
//com.bumptech.glide.load.Transformation:1
//com.bumptech.glide.load.data.AssetPathFetcher:1
//com.bumptech.glide.load.data.DataFetcher:1
//com.bumptech.glide.load.data.DataFetcher.DataCallback:1
//com.bumptech.glide.load.data.DataRewinder:1
//com.bumptech.glide.load.data.DataRewinder.Factory:1
//com.bumptech.glide.load.data.LocalUriFetcher:1
//com.bumptech.glide.load.engine.DataCacheWriter:1
//com.bumptech.glide.load.engine.DecodeHelper:1
//com.bumptech.glide.load.engine.DecodeJob:1
//com.bumptech.glide.load.engine.DecodeJob.Callback:1
//com.bumptech.glide.load.engine.DecodeJob.DecodeCallback:1
//com.bumptech.glide.load.engine.DecodeJob.DeferredEncodeManager:1
//com.bumptech.glide.load.engine.DecodePath:3
//com.bumptech.glide.load.engine.DecodePath.DecodeCallback:1
//com.bumptech.glide.load.engine.EngineJob:1
//com.bumptech.glide.load.engine.EngineResource:1
//com.bumptech.glide.load.engine.LoadPath:3
//com.bumptech.glide.load.engine.LockedResource:1
//com.bumptech.glide.load.engine.Resource:1
//com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface:1
//com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool:1
//com.bumptech.glide.load.engine.bitmap_recycle.GroupedLinkedMap:2
//com.bumptech.glide.load.engine.bitmap_recycle.GroupedLinkedMap.LinkedEntry:2
//com.bumptech.glide.load.engine.bitmap_recycle.PrettyPrintTreeMap:2
//com.bumptech.glide.load.model.AssetUriLoader:1
//com.bumptech.glide.load.model.AssetUriLoader.AssetFetcherFactory:1
//com.bumptech.glide.load.model.ByteArrayLoader:1
//com.bumptech.glide.load.model.ByteArrayLoader.Converter:1
//com.bumptech.glide.load.model.ByteArrayLoader.Fetcher:1
//com.bumptech.glide.load.model.DataUrlLoader:2
//com.bumptech.glide.load.model.DataUrlLoader.DataDecoder:1
//com.bumptech.glide.load.model.DataUrlLoader.DataUriFetcher:1
//com.bumptech.glide.load.model.DataUrlLoader.StreamFactory:1
//com.bumptech.glide.load.model.DirectResourceLoader:1
//com.bumptech.glide.load.model.DirectResourceLoader.ResourceDataFetcher:1
//com.bumptech.glide.load.model.DirectResourceLoader.ResourceOpener:1
//com.bumptech.glide.load.model.FileLoader:1
//com.bumptech.glide.load.model.FileLoader.Factory:1
//com.bumptech.glide.load.model.FileLoader.FileFetcher:1
//com.bumptech.glide.load.model.FileLoader.FileOpener:1
//com.bumptech.glide.load.model.ModelCache:2
//com.bumptech.glide.load.model.ModelCache.ModelKey:1
//com.bumptech.glide.load.model.ModelLoader:2
//com.bumptech.glide.load.model.ModelLoader.LoadData:1
//com.bumptech.glide.load.model.ModelLoaderFactory:2
//com.bumptech.glide.load.model.ModelLoaderRegistry.ModelLoaderCache.Entry:1
//com.bumptech.glide.load.model.MultiModelLoader:2
//com.bumptech.glide.load.model.MultiModelLoader.MultiFetcher:1
//com.bumptech.glide.load.model.MultiModelLoaderFactory.Entry:2
//com.bumptech.glide.load.model.ResourceLoader:1
//com.bumptech.glide.load.model.ResourceUriLoader:1
//com.bumptech.glide.load.model.StringLoader:1
//com.bumptech.glide.load.model.UnitModelLoader:1
//com.bumptech.glide.load.model.UnitModelLoader.Factory:1
//com.bumptech.glide.load.model.UnitModelLoader.UnitFetcher:1
//com.bumptech.glide.load.model.UriLoader:1
//com.bumptech.glide.load.model.UriLoader.LocalUriFetcherFactory:1
//com.bumptech.glide.load.model.UrlUriLoader:1
//com.bumptech.glide.load.model.stream.BaseGlideUrlLoader:1
//com.bumptech.glide.load.model.stream.QMediaStoreUriLoader:1
//com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.Factory:1
//com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.QMediaStoreUriFetcher:1
//com.bumptech.glide.load.resource.SimpleResource:1
//com.bumptech.glide.load.resource.UnitTransformation:1
//com.bumptech.glide.load.resource.bitmap.BitmapDrawableDecoder:1
//com.bumptech.glide.load.resource.bitmap.VideoDecoder:1
//com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaInitializer:1
//com.bumptech.glide.load.resource.drawable.DrawableResource:1
//com.bumptech.glide.load.resource.transcode.ResourceTranscoder:2
//com.bumptech.glide.load.resource.transcode.TranscoderRegistry.Entry:2
//com.bumptech.glide.load.resource.transcode.UnitTranscoder:1
//com.bumptech.glide.provider.EncoderRegistry.Entry:1
//com.bumptech.glide.provider.ResourceDecoderRegistry.Entry:2
//com.bumptech.glide.provider.ResourceEncoderRegistry.Entry:1
//com.bumptech.glide.request.BaseRequestOptions:1
//com.bumptech.glide.request.ExperimentalRequestListener:1
//com.bumptech.glide.request.FutureTarget:1
//com.bumptech.glide.request.RequestFutureTarget:1
//com.bumptech.glide.request.RequestListener:1
//com.bumptech.glide.request.SingleRequest:1
//com.bumptech.glide.request.target.BaseTarget:1
//com.bumptech.glide.request.target.CustomTarget:1
//com.bumptech.glide.request.target.CustomViewTarget:2
//com.bumptech.glide.request.target.ImageViewTarget:1
//com.bumptech.glide.request.target.PreloadTarget:1
//com.bumptech.glide.request.target.SimpleTarget:1
//com.bumptech.glide.request.target.Target:1
//com.bumptech.glide.request.target.ThumbnailImageViewTarget:1
//com.bumptech.glide.request.target.ViewTarget:2
//com.bumptech.glide.request.transition.BitmapContainerTransitionFactory:1
//com.bumptech.glide.request.transition.NoTransition:1
//com.bumptech.glide.request.transition.NoTransition.NoAnimationFactory:1
//com.bumptech.glide.request.transition.Transition:1
//com.bumptech.glide.request.transition.TransitionFactory:1
//com.bumptech.glide.request.transition.ViewAnimationFactory:1
//com.bumptech.glide.request.transition.ViewPropertyAnimationFactory:1
//com.bumptech.glide.request.transition.ViewPropertyTransition:1
//com.bumptech.glide.request.transition.ViewTransition:1
//com.bumptech.glide.util.CachedHashCodeArrayMap:2
//com.bumptech.glide.util.FixedPreloadSizeProvider:1
//com.bumptech.glide.util.GlideSuppliers.GlideSupplier:1
//com.bumptech.glide.util.LruCache:2
//com.bumptech.glide.util.LruCache.Entry:1
//com.bumptech.glide.util.ViewPreloadSizeProvider:1
//com.bumptech.glide.util.pool.FactoryPools.Factory:1
//com.bumptech.glide.util.pool.FactoryPools.FactoryPool:1
//com.bumptech.glide.util.pool.FactoryPools.Resetter:1

