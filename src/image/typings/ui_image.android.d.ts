/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

/// <reference path="android-declarations.d.ts"/>

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export class GeneratedAppGlideModuleImpl {
				public static class: java.lang.Class<com.bumptech.glide.GeneratedAppGlideModuleImpl>;
				public applyOptions(context: globalAndroid.content.Context, builder: com.bumptech.glide.GlideBuilder): void;
				public registerComponents(context: globalAndroid.content.Context, glide: com.bumptech.glide.Glide, registry: com.bumptech.glide.Registry): void;
				public constructor(context: globalAndroid.content.Context);
				public getExcludedModuleClasses(): java.util.Set<java.lang.Class<any>>;
				public isManifestParsingEnabled(): boolean;
			}
			export class GeneratedRequestManagerFactory {
				public static class: java.lang.Class<com.bumptech.glide.GeneratedRequestManagerFactory>;
				public build(glide: com.bumptech.glide.Glide, lifecycle: com.bumptech.glide.manager.Lifecycle, treeNode: com.bumptech.glide.manager.RequestManagerTreeNode, context: globalAndroid.content.Context): com.bumptech.glide.RequestManager;
			}
			export namespace load {
				export namespace engine {
					export class CapturingEngineKeyFactory {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.CapturingEngineKeyFactory>;
						public constructor(listener: com.bumptech.glide.load.engine.CapturingEngineKeyFactory.Listener);
					}
					export namespace CapturingEngineKeyFactory {
						export class Listener {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.CapturingEngineKeyFactory.Listener>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.CapturingEngineKeyFactory$Listener interface with the provided implementation.
							 * An empty constructor exists calling super().
							 */
							public constructor(implementation: {
								onEngineKeyCreated(param0: com.bumptech.glide.load.Key, param1: any): void;
							});
							public constructor();
							public onEngineKeyCreated(param0: com.bumptech.glide.load.Key, param1: any): void;
						}
					}
				}
			}
		}
	}
	export namespace nativescript {
		export namespace image {
			export class GlideConfiguration {
                setMemoryCacheScreens(memoryCacheScreens: number);
                getMemoryCacheSize(): number;
                setMemoryCacheSize(memoryCacheSize: number);
				static getInstance():GlideConfiguration;
			}
			export class CacheKeyStore {
				public static class: java.lang.Class<com.nativescript.image.CacheKeyStore>;
				public put(id: string, keys: com.nativescript.image.CacheKeyStore.StoredKeys): void;
				public remove(id: string): void;
				public get(id: string): com.nativescript.image.CacheKeyStore.StoredKeys;
				public constructor();
			}
			export namespace CacheKeyStore {
				export class StoredKeys {
					public static class: java.lang.Class<com.nativescript.image.CacheKeyStore.StoredKeys>;
					public sourceKey: com.bumptech.glide.load.Key;
					public signature: com.bumptech.glide.load.Key;
					public width: number;
					public height: number;
					public transformation: com.bumptech.glide.load.Transformation<any>;
					public transformationKeyBytes: androidNative.Array<number>;
					public decodedResourceClass: java.lang.Class<any>;
					public options: com.bumptech.glide.load.Options;
					public optionsKeyBytes: androidNative.Array<number>;
					public engineKey: com.bumptech.glide.load.Key;
					public constructor(sourceKey: com.bumptech.glide.load.Key, signature: com.bumptech.glide.load.Key, width: number, height: number, transformation: com.bumptech.glide.load.Transformation<any>, transformationKeyBytes: androidNative.Array<number>, decodedResourceClass: java.lang.Class<any>, options: com.bumptech.glide.load.Options, optionsKeyBytes: androidNative.Array<number>, engineKey: com.bumptech.glide.load.Key);
				}
			}
			export class CompositeRequestListener<T>  extends com.bumptech.glide.request.RequestListener<any> {
				public static class: java.lang.Class<com.nativescript.image.CompositeRequestListener<any>>;
				public constructor(listeners: androidNative.Array<com.bumptech.glide.request.RequestListener<any>>);
				public onResourceReady(l: any, this_: any, resource: com.bumptech.glide.request.target.Target<any>, model: com.bumptech.glide.load.DataSource, target: boolean): boolean;
				public onLoadFailed(l: com.bumptech.glide.load.engine.GlideException, this_: any, e: com.bumptech.glide.request.target.Target<any>, model: boolean): boolean;
			}
			export class ConditionalCrossFadeFactory extends com.bumptech.glide.request.transition.DrawableCrossFadeFactory {
				public static class: java.lang.Class<com.nativescript.image.ConditionalCrossFadeFactory>;
				public constructor(durationMs: number, onlyOnNetwork: boolean);
				public build(dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): com.bumptech.glide.request.transition.Transition<globalAndroid.graphics.drawable.Drawable>;
			}
			export class CustomDataFetcher extends com.bumptech.glide.load.data.DataFetcher<java.io.InputStream> {
				public static class: java.lang.Class<com.nativescript.image.CustomDataFetcher>;
				public loadData(clientBuilder: com.bumptech.glide.Priority, clientBuilder_1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
				public cleanup(): void;
				public getDataClass(): java.lang.Class<java.io.InputStream>;
				public cancel(): void;
				public constructor(client: okhttp3.Call.Factory, url: com.nativescript.image.CustomGlideUrl);
				public getDataSource(): com.bumptech.glide.load.DataSource;
			}
			export class CustomGlideModule {
				public static class: java.lang.Class<com.nativescript.image.CustomGlideModule>;
				public applyOptions(context: globalAndroid.content.Context, builder: com.bumptech.glide.GlideBuilder): void;
				public registerComponents(this_: globalAndroid.content.Context, context: com.bumptech.glide.Glide, glide: com.bumptech.glide.Registry): void;
				public constructor();
				public isManifestParsingEnabled(): boolean;
			}
			export class CustomGlideUrl {
				public static class: java.lang.Class<com.nativescript.image.CustomGlideUrl>;
				public getLoadSourceCallback(): com.nativescript.image.ImageLoadSourceCallback;
				public getProgressCallback(): com.nativescript.image.ImageProgressCallback;
				public hasLoadSourceListener(): boolean;
				public hasProgressListener(): boolean;
				public constructor(url: string, headers: java.util.Map<string,string>, progressCallback: com.nativescript.image.ImageProgressCallback, loadSourceCallback: com.nativescript.image.ImageLoadSourceCallback);
			}
			export class CustomUrlLoader extends com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream> {
				public static class: java.lang.Class<com.nativescript.image.CustomUrlLoader>;
				public buildLoadData(this_: com.bumptech.glide.load.model.GlideUrl, model: number, width: number, height: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
				public handles(model: com.bumptech.glide.load.model.GlideUrl): boolean;
				public constructor(client: okhttp3.Call.Factory);
			}
			export namespace CustomUrlLoader {
				export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream> {
					public static class: java.lang.Class<com.nativescript.image.CustomUrlLoader.Factory>;
					public constructor(client: okhttp3.OkHttpClient);
					public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>;
					public teardown(): void;
				}
			}
			export class EvictionManager {
				public static class: java.lang.Class<com.nativescript.image.EvictionManager>;
				public clearAll(): void;
				public setGlideInstance(glideInstance: com.bumptech.glide.Glide);
				public static get(): com.nativescript.image.EvictionManager;
				public clearMemory(callback: com.nativescript.image.EvictionManager.EvictionCallback): void;
				public clearAll(callback: com.nativescript.image.EvictionManager.EvictionCallback): void;
				public evictAllForId(id: string, callback: com.nativescript.image.EvictionManager.EvictionCallback): void;
				public saveKeys(toPersist: string, t: com.nativescript.image.CacheKeyStore.StoredKeys): void;
				public clearDiskCache(callback: com.nativescript.image.EvictionManager.EvictionCallback): void;
				public evictMemoryForId(e: string, this_: com.nativescript.image.EvictionManager.EvictionCallback): void;
				public setDiskCache(diskCache: com.bumptech.glide.load.engine.cache.DiskCache): void;
				public isInMemoryCache(this_: string): boolean;
				public evictAllForId(id: string): void;
				public evictDiskForId(this_: string, id: com.nativescript.image.EvictionManager.EvictionCallback): void;
				public isInDiskCacheBlocking(resourceKey: string): androidNative.Array<boolean>;
				public clearDiskCache(): void;
				public evictDiskForId(id: string): void;
				public evictTransformedForId(id: string, callback: com.nativescript.image.EvictionManager.EvictionCallback): void;
				public isInDiskCacheAsync(id: string, callback: com.nativescript.image.EvictionManager.DiskPresenceCallback): void;
				public setPersistentStore(store: com.nativescript.image.SharedPrefCacheKeyStore): void;
				public clearMemory(): void;
				public setMemoryCache(memoryCache: com.bumptech.glide.load.engine.cache.LruResourceCache): void;
				public getKeyStore(): com.nativescript.image.CacheKeyStore;
			}
			export namespace EvictionManager {
				export class DiskPresenceCallback {
					public static class: java.lang.Class<com.nativescript.image.EvictionManager.DiskPresenceCallback>;
					/**
					 * Constructs a new instance of the com.nativescript.image.EvictionManager$DiskPresenceCallback interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						onResult(param0: boolean, param1: boolean): void;
					});
					public constructor();
					public onResult(param0: boolean, param1: boolean): void;
				}
				export class EvictionCallback {
					public static class: java.lang.Class<com.nativescript.image.EvictionManager.EvictionCallback>;
					/**
					 * Constructs a new instance of the com.nativescript.image.EvictionManager$EvictionCallback interface with the provided implementation.
					 * An empty constructor exists calling super().
					 */
					public constructor(implementation: {
						onComplete(param0: boolean, param1: java.lang.Exception): void;
					});
					public constructor();
					public onComplete(param0: boolean, param1: java.lang.Exception): void;
				}

                export function setGlideInstance(glideInstance: bumptech.glide.Glide) {
                    throw new Error('Function not implemented.');
                }

                export function setGlideInstance(glideInstance: bumptech.glide.Glide) {
                    throw new Error('Function not implemented.');
                }
			}
			export class ExtractRequestOptions {
				public static class: java.lang.Class<com.nativescript.image.ExtractRequestOptions>;
				public static getFrom(optionsField: com.bumptech.glide.request.RequestOptions): com.bumptech.glide.load.Options;
				public static clearCache(): void;
			}
			export class GlideApp {
				public static class: java.lang.Class<com.nativescript.image.GlideApp>;
				public static getPhotoCacheDir(context: globalAndroid.content.Context, string: string): java.io.File;
				public static enableHardwareBitmaps(): void;
				public static getPhotoCacheDir(context: globalAndroid.content.Context): java.io.File;
				public static get(context: globalAndroid.content.Context): com.bumptech.glide.Glide;
				public static with(view: globalAndroid.view.View): com.nativescript.image.GlideRequests;
				public static with(context: globalAndroid.content.Context): com.nativescript.image.GlideRequests;
				public static isInitialized(): void;
				public static with(activity: androidx.fragment.app.FragmentActivity): com.nativescript.image.GlideRequests;
				/** @deprecated */
				public static with(fragment: globalAndroid.app.Fragment): com.nativescript.image.GlideRequests;
				/** @deprecated */
				public static init(glide: com.bumptech.glide.Glide): void;
				public static with(fragment: androidx.fragment.app.Fragment): com.nativescript.image.GlideRequests;
				/** @deprecated */
				public static with(activity: globalAndroid.app.Activity): com.nativescript.image.GlideRequests;
				public static init(context: globalAndroid.content.Context, builder: com.bumptech.glide.GlideBuilder): void;
				public static tearDown(): void;
			}
			export class GlideOptions {
				public static class: java.lang.Class<com.nativescript.image.GlideOptions>;
				public static overrideOf(width: number, height: number): com.nativescript.image.GlideOptions;
				public downsample(strategy: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy): com.nativescript.image.GlideOptions;
				public centerInside(): com.nativescript.image.GlideOptions;
				public static circleCropTransform(): com.nativescript.image.GlideOptions;
				public static frameOf(value: number): com.nativescript.image.GlideOptions;
				public fitCenter(): com.nativescript.image.GlideOptions;
				public onlyRetrieveFromCache(flag: boolean): com.nativescript.image.GlideOptions;
				public error(id: number): com.nativescript.image.GlideOptions;
				public static formatOf(format: com.bumptech.glide.load.DecodeFormat): com.nativescript.image.GlideOptions;
				public constructor();
				public optionalCircleCrop(): com.nativescript.image.GlideOptions;
				public static encodeQualityOf(value: number): com.nativescript.image.GlideOptions;
				public fallback(drawable: globalAndroid.graphics.drawable.Drawable): com.nativescript.image.GlideOptions;
				public centerCrop(): com.nativescript.image.GlideOptions;
				public static centerCropTransform(): com.nativescript.image.GlideOptions;
				public static placeholderOf(id: number): com.nativescript.image.GlideOptions;
				public static decodeTypeOf(clazz: java.lang.Class<any>): com.nativescript.image.GlideOptions;
				public static bitmapTransform(transformation: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): com.nativescript.image.GlideOptions;
				public clone(): com.nativescript.image.GlideOptions;
				public useAnimationPool(flag: boolean): com.nativescript.image.GlideOptions;
				public diskCacheStrategy(strategy: com.bumptech.glide.load.engine.DiskCacheStrategy): com.nativescript.image.GlideOptions;
				public override(width: number, height: number): com.nativescript.image.GlideOptions;
				public frame(value: number): com.nativescript.image.GlideOptions;
				public signature(key: com.bumptech.glide.load.Key): com.nativescript.image.GlideOptions;
				public static encodeFormatOf(format: globalAndroid.graphics.Bitmap.CompressFormat): com.nativescript.image.GlideOptions;
				public static timeoutOf(value: number): com.nativescript.image.GlideOptions;
				public static noTransformation(): com.nativescript.image.GlideOptions;
				public fallback(id: number): com.nativescript.image.GlideOptions;
				public static centerInsideTransform(): com.nativescript.image.GlideOptions;
				public lock(): com.nativescript.image.GlideOptions;
				public autoClone(): com.nativescript.image.GlideOptions;
				public static overrideOf(size: number): com.nativescript.image.GlideOptions;
				/** @deprecated */
				public transforms(transformations: androidNative.Array<com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>>): com.nativescript.image.GlideOptions;
				public static priorityOf(priority: com.bumptech.glide.Priority): com.nativescript.image.GlideOptions;
				public static placeholderOf(drawable: globalAndroid.graphics.drawable.Drawable): com.nativescript.image.GlideOptions;
				public decode(clazz: java.lang.Class<any>): com.nativescript.image.GlideOptions;
				public set(option: com.bumptech.glide.load.Option, y: any): com.nativescript.image.GlideOptions;
				public static signatureOf(key: com.bumptech.glide.load.Key): com.nativescript.image.GlideOptions;
				public dontAnimate(): com.nativescript.image.GlideOptions;
				public optionalTransform(clazz: java.lang.Class<any>, transformation: com.bumptech.glide.load.Transformation): com.nativescript.image.GlideOptions;
				public transform(clazz: java.lang.Class<any>, transformation: com.bumptech.glide.load.Transformation): com.nativescript.image.GlideOptions;
				public useUnlimitedSourceGeneratorsPool(flag: boolean): com.nativescript.image.GlideOptions;
				public error(drawable: globalAndroid.graphics.drawable.Drawable): com.nativescript.image.GlideOptions;
				public apply(options: com.bumptech.glide.request.BaseRequestOptions<any>): com.nativescript.image.GlideOptions;
				public static diskCacheStrategyOf(strategy: com.bumptech.glide.load.engine.DiskCacheStrategy): com.nativescript.image.GlideOptions;
				public encodeFormat(format: globalAndroid.graphics.Bitmap.CompressFormat): com.nativescript.image.GlideOptions;
				public encodeQuality(value: number): com.nativescript.image.GlideOptions;
				public static sizeMultiplierOf(value: number): com.nativescript.image.GlideOptions;
				public sizeMultiplier(value: number): com.nativescript.image.GlideOptions;
				public placeholder(id: number): com.nativescript.image.GlideOptions;
				public optionalCenterCrop(): com.nativescript.image.GlideOptions;
				public optionalCenterInside(): com.nativescript.image.GlideOptions;
				public transform(transformation: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): com.nativescript.image.GlideOptions;
				public static option(option: com.bumptech.glide.load.Option, t: any): com.nativescript.image.GlideOptions;
				public override(size: number): com.nativescript.image.GlideOptions;
				public circleCrop(): com.nativescript.image.GlideOptions;
				public static skipMemoryCacheOf(skipMemoryCache: boolean): com.nativescript.image.GlideOptions;
				public format(format: com.bumptech.glide.load.DecodeFormat): com.nativescript.image.GlideOptions;
				public transform(transformations: androidNative.Array<com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>>): com.nativescript.image.GlideOptions;
				public static errorOf(drawable: globalAndroid.graphics.drawable.Drawable): com.nativescript.image.GlideOptions;
				public static errorOf(id: number): com.nativescript.image.GlideOptions;
				public static fitCenterTransform(): com.nativescript.image.GlideOptions;
				public optionalFitCenter(): com.nativescript.image.GlideOptions;
				public placeholder(drawable: globalAndroid.graphics.drawable.Drawable): com.nativescript.image.GlideOptions;
				public dontTransform(): com.nativescript.image.GlideOptions;
				public static noAnimation(): com.nativescript.image.GlideOptions;
				public priority(priority: com.bumptech.glide.Priority): com.nativescript.image.GlideOptions;
				public static downsampleOf(strategy: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy): com.nativescript.image.GlideOptions;
				public skipMemoryCache(skip: boolean): com.nativescript.image.GlideOptions;
				public timeout(value: number): com.nativescript.image.GlideOptions;
				public optionalTransform(transformation: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): com.nativescript.image.GlideOptions;
				public disallowHardwareConfig(): com.nativescript.image.GlideOptions;
				public theme(theme: globalAndroid.content.res.Resources.Theme): com.nativescript.image.GlideOptions;
			}
			export class GlideRequest<TranscodeType>  extends com.bumptech.glide.RequestBuilder<any> implements java.lang.Cloneable  {
				public static class: java.lang.Class<com.nativescript.image.GlideRequest<any>>;
				public onlyRetrieveFromCache(flag: boolean): com.nativescript.image.GlideRequest<any>;
				public load(drawable: globalAndroid.graphics.drawable.Drawable): com.nativescript.image.GlideRequest<any>;
				public theme(theme: globalAndroid.content.res.Resources.Theme): com.nativescript.image.GlideRequest<any>;
				public autoClone(): com.nativescript.image.GlideRequest<any>;
				public getDownloadOnlyRequest(): com.nativescript.image.GlideRequest<java.io.File>;
				public encodeQuality(value: number): com.nativescript.image.GlideRequest<any>;
				public fitCenter(): com.nativescript.image.GlideRequest<any>;
				public centerCrop(): com.nativescript.image.GlideRequest<any>;
				public optionalCenterInside(): com.nativescript.image.GlideRequest<any>;
				public downsample(strategy: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy): com.nativescript.image.GlideRequest<any>;
				public listener(listener: com.bumptech.glide.request.RequestListener<any>): com.nativescript.image.GlideRequest<any>;
				public load(uri: globalAndroid.net.Uri): com.nativescript.image.GlideRequest<any>;
				public placeholder(id: number): com.nativescript.image.GlideRequest<any>;
				public lock(): com.nativescript.image.GlideRequest<any>;
				public thumbnail(list: java.util.List<com.bumptech.glide.RequestBuilder<any>>): com.nativescript.image.GlideRequest<any>;
				public transition(options: com.bumptech.glide.TransitionOptions<any,any>): com.nativescript.image.GlideRequest<any>;
				public frame(value: number): com.nativescript.image.GlideRequest<any>;
				public error(id: number): com.nativescript.image.GlideRequest<any>;
				public sizeMultiplier(value: number): com.nativescript.image.GlideRequest<any>;
				public error(drawable: globalAndroid.graphics.drawable.Drawable): com.nativescript.image.GlideRequest<any>;
				public priority(priority: com.bumptech.glide.Priority): com.nativescript.image.GlideRequest<any>;
				public optionalFitCenter(): com.nativescript.image.GlideRequest<any>;
				public load(bitmap: globalAndroid.graphics.Bitmap): com.nativescript.image.GlideRequest<any>;
				public centerInside(): com.nativescript.image.GlideRequest<any>;
				public load(file: java.io.File): com.nativescript.image.GlideRequest<any>;
				public decode(clazz: java.lang.Class<any>): com.nativescript.image.GlideRequest<any>;
				public load(string: string): com.nativescript.image.GlideRequest<any>;
				public transform(clazz: java.lang.Class<any>, transformation: com.bumptech.glide.load.Transformation): com.nativescript.image.GlideRequest<any>;
				public dontAnimate(): com.nativescript.image.GlideRequest<any>;
				public placeholder(drawable: globalAndroid.graphics.drawable.Drawable): com.nativescript.image.GlideRequest<any>;
				public dontTransform(): com.nativescript.image.GlideRequest<any>;
				public error(o: any): com.nativescript.image.GlideRequest<any>;
				public transform(transformation: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): com.nativescript.image.GlideRequest<any>;
				public format(format: com.bumptech.glide.load.DecodeFormat): com.nativescript.image.GlideRequest<any>;
				public optionalTransform(transformation: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): com.nativescript.image.GlideRequest<any>;
				public useAnimationPool(flag: boolean): com.nativescript.image.GlideRequest<any>;
				public diskCacheStrategy(strategy: com.bumptech.glide.load.engine.DiskCacheStrategy): com.nativescript.image.GlideRequest<any>;
				public override(size: number): com.nativescript.image.GlideRequest<any>;
				public timeout(value: number): com.nativescript.image.GlideRequest<any>;
				/** @deprecated */
				public thumbnail(sizeMultiplier: number): com.nativescript.image.GlideRequest<any>;
				public load(o: any): com.nativescript.image.GlideRequest<any>;
				public skipMemoryCache(skip: boolean): com.nativescript.image.GlideRequest<any>;
				public disallowHardwareConfig(): com.nativescript.image.GlideRequest<any>;
				public apply(options: com.bumptech.glide.request.BaseRequestOptions<any>): com.nativescript.image.GlideRequest<any>;
				public thumbnail(builders: androidNative.Array<com.bumptech.glide.RequestBuilder<any>>): com.nativescript.image.GlideRequest<any>;
				public encodeFormat(format: globalAndroid.graphics.Bitmap.CompressFormat): com.nativescript.image.GlideRequest<any>;
				public load(bytes: androidNative.Array<number>): com.nativescript.image.GlideRequest<any>;
				public fallback(id: number): com.nativescript.image.GlideRequest<any>;
				public error(builder: com.bumptech.glide.RequestBuilder<any>): com.nativescript.image.GlideRequest<any>;
				public circleCrop(): com.nativescript.image.GlideRequest<any>;
				public useUnlimitedSourceGeneratorsPool(flag: boolean): com.nativescript.image.GlideRequest<any>;
				public fallback(drawable: globalAndroid.graphics.drawable.Drawable): com.nativescript.image.GlideRequest<any>;
				public set(option: com.bumptech.glide.load.Option, y: any): com.nativescript.image.GlideRequest<any>;
				public optionalCircleCrop(): com.nativescript.image.GlideRequest<any>;
				public transform(transformations: androidNative.Array<com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>>): com.nativescript.image.GlideRequest<any>;
				public thumbnail(builder: com.bumptech.glide.RequestBuilder<any>): com.nativescript.image.GlideRequest<any>;
				/** @deprecated */
				public transforms(transformations: androidNative.Array<com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>>): com.nativescript.image.GlideRequest<any>;
				public optionalCenterCrop(): com.nativescript.image.GlideRequest<any>;
				public addListener(listener: com.bumptech.glide.request.RequestListener<any>): com.nativescript.image.GlideRequest<any>;
				public override(width: number, height: number): com.nativescript.image.GlideRequest<any>;
				public optionalTransform(clazz: java.lang.Class<any>, transformation: com.bumptech.glide.load.Transformation): com.nativescript.image.GlideRequest<any>;
				/** @deprecated */
				public load(url: java.net.URL): com.nativescript.image.GlideRequest<any>;
				public signature(key: com.bumptech.glide.load.Key): com.nativescript.image.GlideRequest<any>;
				public load(id: java.lang.Integer): com.nativescript.image.GlideRequest<any>;
				public clone(): com.nativescript.image.GlideRequest<any>;
			}
			export class GlideRequests {
				public static class: java.lang.Class<com.nativescript.image.GlideRequests>;
				public setDefaultRequestOptions(options: com.bumptech.glide.request.RequestOptions): com.nativescript.image.GlideRequests;
				public load(drawable: globalAndroid.graphics.drawable.Drawable): com.nativescript.image.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
				public load(file: java.io.File): com.nativescript.image.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
				public as(resourceClass: java.lang.Class<any>): com.nativescript.image.GlideRequest<any>;
				public load(bitmap: globalAndroid.graphics.Bitmap): com.nativescript.image.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
				public load(bytes: androidNative.Array<number>): com.nativescript.image.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
				public setRequestOptions(toSet: com.bumptech.glide.request.RequestOptions): void;
				/** @deprecated */
				public load(url: java.net.URL): com.nativescript.image.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
				public asBitmap(): com.nativescript.image.GlideRequest<globalAndroid.graphics.Bitmap>;
				public load(o: any): com.nativescript.image.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
				public download(o: any): com.nativescript.image.GlideRequest<java.io.File>;
				public constructor(glide: com.bumptech.glide.Glide, lifecycle: com.bumptech.glide.manager.Lifecycle, treeNode: com.bumptech.glide.manager.RequestManagerTreeNode, context: globalAndroid.content.Context);
				public load(id: java.lang.Integer): com.nativescript.image.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
				public asGif(): com.nativescript.image.GlideRequest<com.bumptech.glide.load.resource.gif.GifDrawable>;
				public clearOnStop(): com.nativescript.image.GlideRequests;
				public downloadOnly(): com.nativescript.image.GlideRequest<java.io.File>;
				public addDefaultRequestListener(listener: com.bumptech.glide.request.RequestListener<any>): com.nativescript.image.GlideRequests;
				public load(uri: globalAndroid.net.Uri): com.nativescript.image.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
				public asDrawable(): com.nativescript.image.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
				public applyDefaultRequestOptions(options: com.bumptech.glide.request.RequestOptions): com.nativescript.image.GlideRequests;
				public asFile(): com.nativescript.image.GlideRequest<java.io.File>;
				public load(string: string): com.nativescript.image.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
			}
			export class ImageLoadSourceCallback {
				public static class: java.lang.Class<com.nativescript.image.ImageLoadSourceCallback>;
				/**
				 * Constructs a new instance of the com.nativescript.image.ImageLoadSourceCallback interface with the provided implementation.
				 * An empty constructor exists calling super().
				 */
				public constructor(implementation: {
					onLoadStarted(param0: string, param1: string): void;
				});
				public constructor();
				public onLoadStarted(param0: string, param1: string): void;
			}
			export class ImageProgressCallback {
				public static class: java.lang.Class<com.nativescript.image.ImageProgressCallback>;
				/**
				 * Constructs a new instance of the com.nativescript.image.ImageProgressCallback interface with the provided implementation.
				 * An empty constructor exists calling super().
				 */
				public constructor(implementation: {
					onProgress(param0: string, param1: number, param2: number): void;
				});
				public constructor();
				public onProgress(param0: string, param1: number, param2: number): void;
			}
			export class LoadSourceInterceptor {
				public static class: java.lang.Class<com.nativescript.image.LoadSourceInterceptor>;
				public constructor(url: string, callback: com.nativescript.image.ImageLoadSourceCallback);
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
			export class MatrixDrawable {
				public static class: java.lang.Class<com.nativescript.image.MatrixDrawable>;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(wrapped: globalAndroid.graphics.drawable.Drawable);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
				public invalidateDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public setVisible(visible: boolean, restart: boolean): boolean;
				public setMatrix(matrix: globalAndroid.graphics.Matrix): void;
				public refreshWrappedCallback(): void;
				public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
				public getIntrinsicWidth(): number;
				public stop(): void;
				public getIntrinsicHeight(): number;
				public start(): void;
				public getOutline(outline: any): void;
				public isRunning(): boolean;
				public setBounds(left: number, top: number, right: number, bottom: number): void;
				public setAlpha(alpha: number): void;
				public getOpacity(): number;
			}
			export class MatrixDrawableImageViewTarget extends com.bumptech.glide.request.target.ViewTarget<globalAndroid.widget.ImageView,globalAndroid.graphics.drawable.Drawable> implements com.bumptech.glide.request.transition.Transition.ViewAdapter  {
                setClearFirst(arg0: boolean) {
                    throw new Error('Method not implemented.');
                }
				public static class: java.lang.Class<com.nativescript.image.MatrixDrawableImageViewTarget>;
				public constructor(view: globalAndroid.widget.ImageView);
				public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
				public onLoadCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
				public onLoadStarted(placeholder: globalAndroid.graphics.drawable.Drawable): void;
				public onLoadFailed(errorDrawable: globalAndroid.graphics.drawable.Drawable): void;
				public onStart(): void;
				public onResourceReady(resource: globalAndroid.graphics.drawable.Drawable, transition: com.bumptech.glide.request.transition.Transition<any>): void;
				public setResource(resource: globalAndroid.graphics.drawable.Drawable): void;
				public onStop(): void;
				/** @deprecated */
				public constructor(view: globalAndroid.widget.ImageView, waitForLayout: boolean);
				public setDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
			}
			export class MatrixImageView extends androidx.appcompat.widget.AppCompatImageView {
				public static class: java.lang.Class<com.nativescript.image.MatrixImageView>;
				public mBaseMatrix: globalAndroid.graphics.Matrix;
				public mExtraMatrix: globalAndroid.graphics.Matrix;
				public isUsingOutlineProvider: boolean;
				public constructor(context: globalAndroid.content.Context);
				public cancelRotationAnimation(): void;
				public setImageRotation(degrees: number): void;
				public ensureCurrentScaleInBounds(): void;
				public resetInteraction(): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public setImageSize(width: number, height: number): void;
				public getImageHeight(): number;
				public setAspectRatio(aspectRatio: number): void;
				public clearImageSize(): void;
				public setNoRatioEnforce(noRatioEnforce: boolean): void;
				public updateOutlineProvider(): void;
				public isNoRatioEnforce(): boolean;
				public onMeasure(ih: number, d: number): void;
				public onVisibilityChanged(changedView: globalAndroid.view.View, visibility: number): void;
				public setBackground(background: globalAndroid.graphics.drawable.Drawable): void;
				public animateImageRotation(toDegrees: number, durationMs: number): void;
				public getAspectRatio(): number;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setScaleType(scaleType: globalAndroid.widget.ImageView.ScaleType): void;
				public setImageDrawable(iw: globalAndroid.graphics.drawable.Drawable): void;
				public onDetachedFromWindow(): void;
				public getImageRotation(): number;
				public setExtraTransform(extra: globalAndroid.graphics.Matrix): void;
				public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
				public getImageWidth(): number;
				public onAttachedToWindow(): void;
				public onDraw(saveCount: globalAndroid.graphics.Canvas): void;
			}
			export class ProgressInterceptor {
				public static class: java.lang.Class<com.nativescript.image.ProgressInterceptor>;
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(url: string, callback: com.nativescript.image.ImageProgressCallback);
			}
			export class ProgressResponseBody {
				public static class: java.lang.Class<com.nativescript.image.ProgressResponseBody>;
				public constructor(responseBody: okhttp3.ResponseBody, url: string, callback: com.nativescript.image.ImageProgressCallback);
				public contentLength(): number;
				public source(): okio.BufferedSource;
				public contentType(): okhttp3.MediaType;
			}
			export class SaveKeysRequestListener extends com.bumptech.glide.request.RequestListener<globalAndroid.graphics.drawable.Drawable> {
				public static class: java.lang.Class<com.nativescript.image.SaveKeysRequestListener>;
				public constructor(id: string, model: any, sourceKey: com.bumptech.glide.load.Key, signature: com.bumptech.glide.load.Key);
				public onLoadFailed(e: com.bumptech.glide.load.engine.GlideException, model: any, target: com.bumptech.glide.request.target.Target<globalAndroid.graphics.drawable.Drawable>, isFirstResource: boolean): boolean;
				public onResourceReady(t: globalAndroid.graphics.drawable.Drawable, rd2: any, t_1: com.bumptech.glide.request.target.Target<globalAndroid.graphics.drawable.Drawable>, existing: com.bumptech.glide.load.DataSource, t_2: boolean): boolean;
			}
			export class ScaleUtils {
				public static class: java.lang.Class<com.nativescript.image.ScaleUtils>;
				public static getImageMatrix(scale: globalAndroid.graphics.drawable.Drawable, scale_1: number, scale_2: number, scale_3: number, d: globalAndroid.widget.ImageView.ScaleType, viewWidth: globalAndroid.graphics.Matrix): void;
			}
			export class SharedPrefCacheKeyStore {
				public static class: java.lang.Class<com.nativescript.image.SharedPrefCacheKeyStore>;
				public constructor(context: globalAndroid.content.Context);
				public put(this_: string, id: com.nativescript.image.CacheKeyStore.StoredKeys): void;
				public remove(id: string): void;
				public get(source: string): com.nativescript.image.CacheKeyStore.StoredKeys;
			}
		}
	}
}

