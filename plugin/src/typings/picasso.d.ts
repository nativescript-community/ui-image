declare module com {
	export module squareup {
		export module picasso {
            export abstract class Action {
			}
			export module Action {
				export class RequestWeakReference {
					public constructor(param0: com.squareup.picasso.Action, param1, param2);
				}
			}
			export class AssetRequestHandler extends com.squareup.picasso.RequestHandler {
				public static ANDROID_ASSET: string;
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
				public constructor(param0);
				public constructor();
			}

			export class BitmapHunter {
				public run(): void;
			}
			export class Cache {
				/**
				 * Constructs a new instance of the com.squareup.picasso.Cache interface with the provided implementation.
				 */
				public constructor(implementation: {
					get(param0: string);
					set(param0: string, param1): void;
					size(): number;
					maxSize(): number;
					clear(): void;
					clearKeyUri(param0: string): void;
					<clinit>(): void;
				});
				public static NONE: com.squareup.picasso.Cache;
				public maxSize(): number;
				public set(param0: string, param1): void;
				public clear(): void;
				public get(param0: string);
				public clearKeyUri(param0: string): void;
				public size(): number;
			}
			export class Callback {
				/**
				 * Constructs a new instance of the com.squareup.picasso.Callback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onSuccess(): void;
					onError(): void;
				});
				public onError(): void;
				public onSuccess(): void;
			}
			export module Callback {
				export class EmptyCallback {
					public constructor();
					public onSuccess(): void;
					public onError(): void;
				}
			}
			export class ContactsPhotoRequestHandler extends com.squareup.picasso.RequestHandler {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
			export module ContactsPhotoRequestHandler {
				export class ContactPhotoStreamIcs {
				}
			}
			export class ContentStreamRequestHandler extends com.squareup.picasso.RequestHandler {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
			export class DeferredRequestCreator {
				public onPreDraw(): boolean;
			}
            export class Dispatcher {
			}
			export module Dispatcher {
				export class DispatcherHandler {
					public constructor(param0, param1: com.squareup.picasso.Dispatcher);
					public handleMessage(param0): void;
				}
				export class DispatcherThread {
				}
				export class NetworkBroadcastReceiver {
					public onReceive(param0, param1): void;
				}
			}
            export class Downloader {
				/**
				 * Constructs a new instance of the com.squareup.picasso.Downloader interface with the provided implementation.
				 */
				public constructor(implementation: {
					load(param0, param1: number): com.squareup.picasso.Downloader.Response;
					shutdown(): void;
				});
				public shutdown(): void;
				public load(param0, param1: number): com.squareup.picasso.Downloader.Response;
			}
			export module Downloader {
				export class Response {
					public constructor(param0, param1: boolean, param2: number);
					public getBitmap();
					public getInputStream();
					public constructor(param0, param1: boolean, param2: number);
					public constructor(param0, param1: boolean);
					public constructor(param0, param1: boolean);
					public getContentLength(): number;
				}
				export class ResponseException {
					public constructor(param0: string, param1: number, param2: number);
				}
			}
            export class FetchAction extends com.squareup.picasso.Action {
			}
            export class FileRequestHandler extends com.squareup.picasso.ContentStreamRequestHandler {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
            export class GetAction extends com.squareup.picasso.Action {
				public error(): void;
			}
            export class ImageViewAction extends com.squareup.picasso.Action {
				public error(): void;
				public complete(param0, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
			}
            export class LruCache {
				public evictionCount(): number;
				public missCount(): number;
				public get(param0: string);
				public size(): number;
				public maxSize(): number;
				public set(param0: string, param1): void;
				public clear(): void;
				public constructor(param0: number);
				public putCount(): number;
				public evictAll(): void;
				public constructor(param0);
				public hitCount(): number;
				public clearKeyUri(param0: string): void;
			}
            export class MarkableInputStream {
				public markSupported(): boolean;
				public close(): void;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public constructor(param0, param1: number);
				public constructor(param0);
				public reset(): void;
				public reset(param0: number): void;
				public read(): number;
				public skip(param0: number): number;
				public savePosition(param0: number): number;
				public read(param0: native.Array<number>): number;
				public available(): number;
				public mark(param0: number): void;
			}
            export class MediaStoreRequestHandler extends com.squareup.picasso.ContentStreamRequestHandler {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
			export module MediaStoreRequestHandler {
				export class PicassoKind {
					public static MICRO: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static MINI: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static FULL: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static valueOf(param0: string): com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static values(): native.Array<com.squareup.picasso.MediaStoreRequestHandler.PicassoKind>;
				}
			}
            export class MemoryPolicy {
				public static NO_CACHE: com.squareup.picasso.MemoryPolicy;
				public static NO_STORE: com.squareup.picasso.MemoryPolicy;
				public static valueOf(param0: string): com.squareup.picasso.MemoryPolicy;
				public static values(): native.Array<com.squareup.picasso.MemoryPolicy>;
			}
            export class NetworkPolicy {
				public static NO_CACHE: com.squareup.picasso.NetworkPolicy;
				public static NO_STORE: com.squareup.picasso.NetworkPolicy;
				public static OFFLINE: com.squareup.picasso.NetworkPolicy;
				public static values(): native.Array<com.squareup.picasso.NetworkPolicy>;
				public static shouldReadFromDiskCache(param0: number): boolean;
				public static shouldWriteToDiskCache(param0: number): boolean;
				public static isOfflineOnly(param0: number): boolean;
				public static valueOf(param0: string): com.squareup.picasso.NetworkPolicy;
			}
            export class NetworkRequestHandler extends com.squareup.picasso.RequestHandler {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
				public constructor(param0: com.squareup.picasso.Downloader, param1: com.squareup.picasso.Stats);
				public constructor();
			}
			export module NetworkRequestHandler {
				export class ContentLengthException {
					public constructor(param0: string);
				}
			}
            export class OkHttp3Downloader {
				public shutdown(): void;
				public constructor(param0);
				public constructor(param0);
				public getClient();
				public load(param0, param1: number): com.squareup.picasso.Downloader.Response;
				public constructor(param0);
				public constructor(param0, param1: number);
				public constructor(param0, param1: number);
			}
			export class Picasso {
				public resumeTag(param0): void;
				public invalidate(param0): void;
				public load(param0): com.squareup.picasso.RequestCreator;
				public cancelRequest(param0): void;
				public cancelRequest(param0: com.squareup.picasso.Target): void;
				public cancelRequest(param0, param1: number): void;
				public cancelTag(param0): void;
				public load(param0: number): com.squareup.picasso.RequestCreator;
				public getSnapshot(): com.squareup.picasso.StatsSnapshot;
				public isLoggingEnabled(): boolean;
				public setLoggingEnabled(param0: boolean): void;
				public static setSingletonInstance(param0: com.squareup.picasso.Picasso): void;
				public shutdown(): void;
				public pauseTag(param0): void;
				public load(param0: string): com.squareup.picasso.RequestCreator;
				public areIndicatorsEnabled(): boolean;
				public invalidate(param0: string): void;
				public setDebugging(param0: boolean): void;
				public setIndicatorsEnabled(param0: boolean): void;
				public isDebugging(): boolean;
				public load(param0): com.squareup.picasso.RequestCreator;
				public invalidate(param0): void;
				public static with(param0): com.squareup.picasso.Picasso;
			}
			export module Picasso {
				export class Builder {
					public listener(param0: com.squareup.picasso.Picasso.Listener): com.squareup.picasso.Picasso.Builder;
					public build(): com.squareup.picasso.Picasso;
					public defaultBitmapConfig(param0Config): com.squareup.picasso.Picasso.Builder;
					public executor(param0): com.squareup.picasso.Picasso.Builder;
					public requestTransformer(param0: com.squareup.picasso.Picasso.RequestTransformer): com.squareup.picasso.Picasso.Builder;
					public debugging(param0: boolean): com.squareup.picasso.Picasso.Builder;
					public downloader(param0: com.squareup.picasso.Downloader): com.squareup.picasso.Picasso.Builder;
					public constructor(param0);
					public addRequestHandler(param0: com.squareup.picasso.RequestHandler): com.squareup.picasso.Picasso.Builder;
					public memoryCache(param0: com.squareup.picasso.Cache): com.squareup.picasso.Picasso.Builder;
					public loggingEnabled(param0: boolean): com.squareup.picasso.Picasso.Builder;
					public indicatorsEnabled(param0: boolean): com.squareup.picasso.Picasso.Builder;
				}
				export class CleanupThread {
					public run(): void;
				}
				export class Listener {
					/**
					 * Constructs a new instance of the com.squareup.picasso.Picasso$Listener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onImageLoadFailed(param0: com.squareup.picasso.Picasso, param1, param2): void;
					});
					public onImageLoadFailed(param0: com.squareup.picasso.Picasso, param1, param2): void;
				}
				export class LoadedFrom {
					public static MEMORY: com.squareup.picasso.Picasso.LoadedFrom;
					public static DISK: com.squareup.picasso.Picasso.LoadedFrom;
					public static NETWORK: com.squareup.picasso.Picasso.LoadedFrom;
					public static values(): native.Array<com.squareup.picasso.Picasso.LoadedFrom>;
					public static valueOf(param0: string): com.squareup.picasso.Picasso.LoadedFrom;
				}
				export class Priority {
					public static LOW: com.squareup.picasso.Picasso.Priority;
					public static NORMAL: com.squareup.picasso.Picasso.Priority;
					public static HIGH: com.squareup.picasso.Picasso.Priority;
					public static values(): native.Array<com.squareup.picasso.Picasso.Priority>;
					public static valueOf(param0: string): com.squareup.picasso.Picasso.Priority;
				}
				export class RequestTransformer {
					/**
					 * Constructs a new instance of the com.squareup.picasso.Picasso$RequestTransformer interface with the provided implementation.
					 */
					public constructor(implementation: {
						transformRequest(param0: com.squareup.picasso.Request): com.squareup.picasso.Request;
						<clinit>(): void;
					});
					public static IDENTITY: com.squareup.picasso.Picasso.RequestTransformer;
					public transformRequest(param0: com.squareup.picasso.Request): com.squareup.picasso.Request;
				}
            }
            export class PicassoDrawable {
				public setColorFilter(param0): void;
				public draw(param0): void;
				public setAlpha(param0: number): void;
				public onBoundsChange(param0): void;
			}
            export class PicassoExecutorService {
				public submit(param0);
			}
			export module PicassoExecutorService {
				export class PicassoFutureTask {
					public constructor(param0: com.squareup.picasso.BitmapHunter);
					public compareTo(param0: com.squareup.picasso.PicassoExecutorService.PicassoFutureTask): number;
				}
			}
            export abstract class RemoteViewsAction extends com.squareup.picasso.Action {
				public error(): void;
			}
			export module RemoteViewsAction {
				export class AppWidgetAction extends com.squareup.picasso.RemoteViewsAction {
				}
				export class NotificationAction extends com.squareup.picasso.RemoteViewsAction {
				}
				export class RemoteViewsTarget {
					public equals(param0): boolean;
					public hashCode(): number;
				}
			}
            export class Request {
				public uri;
				public resourceId: number;
				public stableKey: string;
				public transformations;
				public targetWidth: number;
				public targetHeight: number;
				public centerCrop: boolean;
				public centerInside: boolean;
				public onlyScaleDown: boolean;
				public rotationDegrees: number;
				public rotationPivotX: number;
				public rotationPivotY: number;
				public hasRotationPivot: boolean;
				public configConfig;
				public priority: com.squareup.picasso.Picasso.Priority;
				public hasSize(): boolean;
				public toString(): string;
				public buildUpon(): com.squareup.picasso.Request.Builder;
			}
			export module Request {
				export class Builder {
					public constructor(param0);
					public onlyScaleDown(): com.squareup.picasso.Request.Builder;
					public resize(param0: number, param1: number): com.squareup.picasso.Request.Builder;
					public centerCrop(): com.squareup.picasso.Request.Builder;
					public build(): com.squareup.picasso.Request;
					public clearCenterCrop(): com.squareup.picasso.Request.Builder;
					public transform(param0: com.squareup.picasso.Transformation): com.squareup.picasso.Request.Builder;
					public transform(param0): com.squareup.picasso.Request.Builder;
					public centerInside(): com.squareup.picasso.Request.Builder;
					public clearOnlyScaleDown(): com.squareup.picasso.Request.Builder;
					public priority(param0: com.squareup.picasso.Picasso.Priority): com.squareup.picasso.Request.Builder;
					public stableKey(param0: string): com.squareup.picasso.Request.Builder;
					public config(param0Config): com.squareup.picasso.Request.Builder;
					public clearRotation(): com.squareup.picasso.Request.Builder;
					public setResourceId(param0: number): com.squareup.picasso.Request.Builder;
					public clearCenterInside(): com.squareup.picasso.Request.Builder;
					public clearResize(): com.squareup.picasso.Request.Builder;
					public rotate(param0: number, param1: number, param2: number): com.squareup.picasso.Request.Builder;
					public constructor(param0: number);
					public rotate(param0: number): com.squareup.picasso.Request.Builder;
					public setUri(param0): com.squareup.picasso.Request.Builder;
				}
            }
            export class RequestCreator {
				public placeholder(param0: number): com.squareup.picasso.RequestCreator;
				public fetch(param0: com.squareup.picasso.Callback): void;
				public error(param0: number): com.squareup.picasso.RequestCreator;
				public resize(param0: number, param1: number): com.squareup.picasso.RequestCreator;
				public stableKey(param0: string): com.squareup.picasso.RequestCreator;
				public noPlaceholder(): com.squareup.picasso.RequestCreator;
				public placeholder(param0): com.squareup.picasso.RequestCreator;
				public fit(): com.squareup.picasso.RequestCreator;
				public config(param0Config): com.squareup.picasso.RequestCreator;
				public priority(param0: com.squareup.picasso.Picasso.Priority): com.squareup.picasso.RequestCreator;
				public get();
				public error(param0): com.squareup.picasso.RequestCreator;
				public fetch(): void;
				public rotate(param0: number, param1: number, param2: number): com.squareup.picasso.RequestCreator;
				public tag(param0): com.squareup.picasso.RequestCreator;
				public transform(param0): com.squareup.picasso.RequestCreator;
				public centerCrop(): com.squareup.picasso.RequestCreator;
				public noFade(): com.squareup.picasso.RequestCreator;
				public transform(param0: com.squareup.picasso.Transformation): com.squareup.picasso.RequestCreator;
				public into(param0, param1: com.squareup.picasso.Callback): void;
				public onlyScaleDown(): com.squareup.picasso.RequestCreator;
				public into(param0, param1: number, param2: number, param3): void;
				public into(param0): void;
				public skipMemoryCache(): com.squareup.picasso.RequestCreator;
				public networkPolicy(param0: com.squareup.picasso.NetworkPolicy, param1: native.Array<com.squareup.picasso.NetworkPolicy>): com.squareup.picasso.RequestCreator;
				public into(param0: com.squareup.picasso.Target): void;
				public rotate(param0: number): com.squareup.picasso.RequestCreator;
				public centerInside(): com.squareup.picasso.RequestCreator;
				public memoryPolicy(param0: com.squareup.picasso.MemoryPolicy, param1: native.Array<com.squareup.picasso.MemoryPolicy>): com.squareup.picasso.RequestCreator;
				public resizeDimen(param0: number, param1: number): com.squareup.picasso.RequestCreator;
				public into(param0, param1: number, param2: native.Array<number>): void;
            }
            export abstract class RequestHandler {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
				public constructor();
			}
			export module RequestHandler {
				export class Result {
					public getBitmap();
					public constructor(param0, param1: com.squareup.picasso.Picasso.LoadedFrom);
					public getLoadedFrom(): com.squareup.picasso.Picasso.LoadedFrom;
					public getStream();
					public constructor(param0, param1: com.squareup.picasso.Picasso.LoadedFrom);
				}
            }
            export class ResourceRequestHandler extends com.squareup.picasso.RequestHandler {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
            }
            export class Stats {
			}
			export module Stats {
				export class StatsHandler {
					public constructor(param0, param1: com.squareup.picasso.Stats);
					public handleMessage(param0): void;
				}
            }
            export class StatsSnapshot {
				public maxSize: number;
				public size: number;
				public cacheHits: number;
				public cacheMisses: number;
				public totalDownloadSize: number;
				public totalOriginalBitmapSize: number;
				public totalTransformedBitmapSize: number;
				public averageDownloadSize: number;
				public averageOriginalBitmapSize: number;
				public averageTransformedBitmapSize: number;
				public downloadCount: number;
				public originalBitmapCount: number;
				public transformedBitmapCount: number;
				public timeStamp: number;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number);
				public dump(param0): void;
				public dump(): void;
				public toString(): string;
            }
            export class Target {
				/**
				 * Constructs a new instance of the com.squareup.picasso.Target interface with the provided implementation.
				 */
				public constructor(
					// implementation: {
					// onBitmapLoaded(param0, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
					// onBitmapFailed(param0): void;
					// onPrepareLoad(param0): void;
				// }
			);
				public onBitmapLoaded(param0, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
				public onBitmapFailed(param0): void;
				public onPrepareLoad(param0): void;
            }
            export class TargetAction extends com.squareup.picasso.Action {
            }
            export class Transformation {
				/**
				 * Constructs a new instance of the com.squareup.picasso.Transformation interface with the provided implementation.
				 */
				public constructor();
				public transform(param0);
				public key(): string;
            }
            export class UrlConnectionDownloader {
				public openConnection(param0);
				public shutdown(): void;
				public load(param0, param1: number): com.squareup.picasso.Downloader.Response;
				public constructor(param0);
			}
			export module UrlConnectionDownloader {
				export class ResponseCacheIcs {
				}
            }
            export class Utils {
			}
			export module Utils {
				export class ActivityManagerHoneycomb {
				}
				export class BitmapHoneycombMR1 {
				}
				export class OkHttpLoaderCreator {
				}
				export class PicassoThread {
					public run(): void;
					public constructor(param0);
				}
				export class PicassoThreadFactory {
					public newThread(param0);
				}
			}
		}
	}
}
