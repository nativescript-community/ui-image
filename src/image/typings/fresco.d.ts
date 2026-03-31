/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module facebook {
		export module common {
			export module activitylistener {
				export class ActivityListener {
					public static class: java.lang.Class<com.facebook.common.activitylistener.ActivityListener>;
					/**
					 * Constructs a new instance of the com.facebook.common.activitylistener.ActivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onActivityCreate(param0: globalAndroid.app.Activity): void;
						onStart(param0: globalAndroid.app.Activity): void;
						onResume(param0: globalAndroid.app.Activity): void;
						onPause(param0: globalAndroid.app.Activity): void;
						onStop(param0: globalAndroid.app.Activity): void;
						onDestroy(param0: globalAndroid.app.Activity): void;
						getPriority(): number;
					});
					public constructor();
					public static MIN_PRIORITY: number = 1;
					public static MAX_PRIORITY: number = 10;
					public getPriority(): number;
					public onStop(param0: globalAndroid.app.Activity): void;
					public onResume(param0: globalAndroid.app.Activity): void;
					public onActivityCreate(param0: globalAndroid.app.Activity): void;
					public onStart(param0: globalAndroid.app.Activity): void;
					public onDestroy(param0: globalAndroid.app.Activity): void;
					public onPause(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module activitylistener {
				export class ActivityListenerManager {
					public static class: java.lang.Class<com.facebook.common.activitylistener.ActivityListenerManager>;
					public constructor();
					public static register(listener: com.facebook.common.activitylistener.ActivityListener, activityListener: globalAndroid.content.Context): void;
					public static getListenableActivity(context: globalAndroid.content.Context): com.facebook.common.activitylistener.ListenableActivity;
				}
				export module ActivityListenerManager {
					export class Listener extends com.facebook.common.activitylistener.BaseActivityListener {
						public static class: java.lang.Class<com.facebook.common.activitylistener.ActivityListenerManager.Listener>;
						public constructor();
						public onResume(activity: globalAndroid.app.Activity): void;
						public onStart(param0: globalAndroid.app.Activity): void;
						public onDestroy(param0: globalAndroid.app.Activity): void;
						public onActivityCreate(param0: globalAndroid.app.Activity): void;
						public onDestroy(activity: globalAndroid.app.Activity): void;
						public onResume(param0: globalAndroid.app.Activity): void;
						public onStop(param0: globalAndroid.app.Activity): void;
						public constructor(activityListener: com.facebook.common.activitylistener.ActivityListener);
						public onStart(activity: globalAndroid.app.Activity): void;
						public getPriority(): number;
						public onActivityCreate(activity: globalAndroid.app.Activity): void;
						public onPause(param0: globalAndroid.app.Activity): void;
						public onStop(activity: globalAndroid.app.Activity): void;
						public onPause(activity: globalAndroid.app.Activity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module activitylistener {
				export class BaseActivityListener extends com.facebook.common.activitylistener.ActivityListener {
					public static class: java.lang.Class<com.facebook.common.activitylistener.BaseActivityListener>;
					public getPriority(): number;
					public onResume(param0: globalAndroid.app.Activity): void;
					public onActivityCreate(param0: globalAndroid.app.Activity): void;
					public onStart(activity: globalAndroid.app.Activity): void;
					public onDestroy(param0: globalAndroid.app.Activity): void;
					public onActivityCreate(activity: globalAndroid.app.Activity): void;
					public onPause(param0: globalAndroid.app.Activity): void;
					public onStop(param0: globalAndroid.app.Activity): void;
					public onDestroy(activity: globalAndroid.app.Activity): void;
					public constructor();
					public onStart(param0: globalAndroid.app.Activity): void;
					public onPause(activity: globalAndroid.app.Activity): void;
					public onResume(activity: globalAndroid.app.Activity): void;
					public onStop(activity: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module activitylistener {
				export class ListenableActivity {
					public static class: java.lang.Class<com.facebook.common.activitylistener.ListenableActivity>;
					/**
					 * Constructs a new instance of the com.facebook.common.activitylistener.ListenableActivity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addActivityListener(param0: com.facebook.common.activitylistener.ActivityListener): void;
						removeActivityListener(param0: com.facebook.common.activitylistener.ActivityListener): void;
					});
					public constructor();
					public addActivityListener(param0: com.facebook.common.activitylistener.ActivityListener): void;
					public removeActivityListener(param0: com.facebook.common.activitylistener.ActivityListener): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module callercontext {
				export class ContextChain {
					public static class: java.lang.Class<com.facebook.common.callercontext.ContextChain>;
					public static TAG_PRODUCT: string = "p";
					public static TAG_INFRA: string = "i";
					public static TAG_PRODUCT_AND_INFRA: string = "pi";
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.common.callercontext.ContextChain>;
					public toStringArray(): androidNative.Array<string>;
					public equals(obj: any): boolean;
					public getRootContextChain(): com.facebook.common.callercontext.ContextChain;
					public putObjectExtra(key: string, value: any): void;
					public describeContents(): number;
					public getNodeString(): string;
					public constructor(in_: globalAndroid.os.Parcel);
					public constructor(tag: string, name: string, extraData: java.util.Map<string,string>, parent: com.facebook.common.callercontext.ContextChain);
					public getTag(): string;
					public constructor(serializedNodeString: string, parent: com.facebook.common.callercontext.ContextChain);
					public getStringExtra(key: string): string;
					public getExtraData(): java.util.Map<string,any>;
					public toString(): string;
					public constructor(tag: string, name: string, parent: com.facebook.common.callercontext.ContextChain);
					public getParent(): com.facebook.common.callercontext.ContextChain;
					public getName(): string;
					public constructor(serializedNodeString: string, extraData: java.util.Map<string,any>, parent: com.facebook.common.callercontext.ContextChain);
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public static setUseConcurrentHashMap(useConcurrentHashMap: boolean): void;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module callercontext {
				export class ImageAttribution {
					public static class: java.lang.Class<com.facebook.common.callercontext.ImageAttribution>;
					/**
					 * Constructs a new instance of the com.facebook.common.callercontext.ImageAttribution interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCallingClassName(): string;
						getContextChain(): com.facebook.common.callercontext.ContextChain;
					});
					public constructor();
					public getCallingClassName(): string;
					public getContextChain(): com.facebook.common.callercontext.ContextChain;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module closeables {
				export class AutoCleanupDelegate<T>  extends any {
					public static class: java.lang.Class<com.facebook.common.closeables.AutoCleanupDelegate<any>>;
					public constructor(currentValue: any, cleanupFunction: any);
					public setValue(this_: any, thisRef: any, property: any): void;
					public getValue(thisRef: any, property: any): any;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module closeables {
				export class AutoCloseableDelegate<T>  extends com.facebook.common.closeables.AutoCleanupDelegate<any> {
					public static class: java.lang.Class<com.facebook.common.closeables.AutoCloseableDelegate<any>>;
					public constructor(currentValue: any, cleanupFunction: any);
					public constructor(initialValue: any);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module disk {
				export class DiskTrimmable {
					public static class: java.lang.Class<com.facebook.common.disk.DiskTrimmable>;
					/**
					 * Constructs a new instance of the com.facebook.common.disk.DiskTrimmable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						trimToMinimum(): void;
						trimToNothing(): void;
					});
					public constructor();
					public trimToMinimum(): void;
					public trimToNothing(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module disk {
				export class DiskTrimmableRegistry {
					public static class: java.lang.Class<com.facebook.common.disk.DiskTrimmableRegistry>;
					/**
					 * Constructs a new instance of the com.facebook.common.disk.DiskTrimmableRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						registerDiskTrimmable(param0: com.facebook.common.disk.DiskTrimmable): void;
						unregisterDiskTrimmable(param0: com.facebook.common.disk.DiskTrimmable): void;
					});
					public constructor();
					public unregisterDiskTrimmable(param0: com.facebook.common.disk.DiskTrimmable): void;
					public registerDiskTrimmable(param0: com.facebook.common.disk.DiskTrimmable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module disk {
				export class NoOpDiskTrimmableRegistry extends com.facebook.common.disk.DiskTrimmableRegistry {
					public static class: java.lang.Class<com.facebook.common.disk.NoOpDiskTrimmableRegistry>;
					public unregisterDiskTrimmable(param0: com.facebook.common.disk.DiskTrimmable): void;
					public registerDiskTrimmable(trimmable: com.facebook.common.disk.DiskTrimmable): void;
					public static getInstance(): com.facebook.common.disk.NoOpDiskTrimmableRegistry;
					public registerDiskTrimmable(param0: com.facebook.common.disk.DiskTrimmable): void;
					public unregisterDiskTrimmable(trimmable: com.facebook.common.disk.DiskTrimmable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class CallerThreadExecutor extends java.util.concurrent.Executor {
					public static class: java.lang.Class<com.facebook.common.executors.CallerThreadExecutor>;
					public isTerminated(): boolean;
					public shutdown(): void;
					public execute(command: java.lang.Runnable): void;
					public static getInstance(): com.facebook.common.executors.CallerThreadExecutor;
					public isShutdown(): boolean;
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public awaitTermination(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class ConstrainedExecutorService {
					public static class: java.lang.Class<com.facebook.common.executors.ConstrainedExecutorService>;
					public isTerminated(): boolean;
					public shutdown(): void;
					public isIdle(): boolean;
					public constructor(name: string, maxConcurrency: number, executor: java.util.concurrent.Executor, workQueue: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
					public static newConstrainedExecutor(name: string, maxConcurrency: number, queueSize: number, executor: java.util.concurrent.Executor): com.facebook.common.executors.ConstrainedExecutorService;
					public execute(runnable: java.lang.Runnable): void;
					public isShutdown(): boolean;
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public awaitTermination(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
				}
				export module ConstrainedExecutorService {
					export class Worker {
						public static class: java.lang.Class<com.facebook.common.executors.ConstrainedExecutorService.Worker>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class DefaultSerialExecutorService extends com.facebook.common.executors.ConstrainedExecutorService implements com.facebook.common.executors.SerialExecutorService {
					public static class: java.lang.Class<com.facebook.common.executors.DefaultSerialExecutorService>;
					public constructor(executor: java.util.concurrent.Executor);
					public constructor(name: string, maxConcurrency: number, executor: java.util.concurrent.Executor, workQueue: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
					public execute(runnable: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class HandlerExecutorService {
					public static class: java.lang.Class<com.facebook.common.executors.HandlerExecutorService>;
					/**
					 * Constructs a new instance of the com.facebook.common.executors.HandlerExecutorService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						quit(): void;
						isHandlerThread(): boolean;
					});
					public constructor();
					public isHandlerThread(): boolean;
					public quit(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class HandlerExecutorServiceImpl implements com.facebook.common.executors.HandlerExecutorService {
					public static class: java.lang.Class<com.facebook.common.executors.HandlerExecutorServiceImpl>;
					public isTerminated(): boolean;
					public newTaskFor(callable: java.util.concurrent.Callable<any>): com.facebook.common.executors.ScheduledFutureImpl<any>;
					public scheduleAtFixedRate(command: java.lang.Runnable, initialDelay: number, period: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public schedule(command: java.lang.Runnable, delay: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public isHandlerThread(): boolean;
					public submit(task: java.lang.Runnable): java.util.concurrent.ScheduledFuture<any>;
					public isShutdown(): boolean;
					public constructor(handler: globalAndroid.os.Handler);
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public schedule(callable: java.util.concurrent.Callable<any>, delay: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public shutdown(): void;
					public submit(task: java.util.concurrent.Callable<any>): java.util.concurrent.ScheduledFuture<any>;
					public scheduleWithFixedDelay(command: java.lang.Runnable, initialDelay: number, delay: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public execute(command: java.lang.Runnable): void;
					public submit(task: java.lang.Runnable, result: any): java.util.concurrent.ScheduledFuture<any>;
					public quit(): void;
					public awaitTermination(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
					public newTaskFor(runnable: java.lang.Runnable, value: any): com.facebook.common.executors.ScheduledFutureImpl<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class ScheduledFutureImpl<V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.executors.ScheduledFutureImpl<any>>;
					public constructor(handler: globalAndroid.os.Handler, runnable: java.lang.Runnable, result: V);
					public compareTo(other: java.util.concurrent.Delayed): number;
					public get(timeout: number, unit: java.util.concurrent.TimeUnit): V;
					public isDone(): boolean;
					public run(): void;
					public isCancelled(): boolean;
					public getDelay(unit: java.util.concurrent.TimeUnit): number;
					public constructor(handler: globalAndroid.os.Handler, callable: java.util.concurrent.Callable<V>);
					public cancel(mayInterruptIfRunning: boolean): boolean;
					public get(): V;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class SerialExecutorService {
					public static class: java.lang.Class<com.facebook.common.executors.SerialExecutorService>;
					/**
					 * Constructs a new instance of the com.facebook.common.executors.SerialExecutorService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export abstract class StatefulRunnable<T>  extends java.lang.Runnable {
					public static class: java.lang.Class<com.facebook.common.executors.StatefulRunnable<any>>;
					public static STATE_CREATED: number = 0;
					public static STATE_STARTED: number = 1;
					public static STATE_CANCELLED: number = 2;
					public static STATE_FINISHED: number = 3;
					public static STATE_FAILED: number = 4;
					public mState: java.util.concurrent.atomic.AtomicInteger;
					public onSuccess(result: any): void;
					public disposeResult(result: any): void;
					public onCancellation(): void;
					public constructor();
					public run(): void;
					public cancel(): void;
					public onFailure(e: java.lang.Exception): void;
					public getResult(): any;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class UiThreadImmediateExecutorService extends com.facebook.common.executors.HandlerExecutorServiceImpl {
					public static class: java.lang.Class<com.facebook.common.executors.UiThreadImmediateExecutorService>;
					public static getInstance(): com.facebook.common.executors.UiThreadImmediateExecutorService;
					public isHandlerThread(): boolean;
					public execute(command: java.lang.Runnable): void;
					public quit(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module file {
				export class FileTree {
					public static class: java.lang.Class<com.facebook.common.file.FileTree>;
					public static walkFileTree(file: java.io.File, directory: com.facebook.common.file.FileTreeVisitor): void;
					public constructor();
					public static deleteRecursively(file: java.io.File): boolean;
					public static deleteContents(file: java.io.File): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module file {
				export class FileTreeVisitor {
					public static class: java.lang.Class<com.facebook.common.file.FileTreeVisitor>;
					/**
					 * Constructs a new instance of the com.facebook.common.file.FileTreeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						preVisitDirectory(param0: java.io.File): void;
						visitFile(param0: java.io.File): void;
						postVisitDirectory(param0: java.io.File): void;
					});
					public constructor();
					public preVisitDirectory(param0: java.io.File): void;
					public postVisitDirectory(param0: java.io.File): void;
					public visitFile(param0: java.io.File): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module file {
				export class FileUtils {
					public static class: java.lang.Class<com.facebook.common.file.FileUtils>;
					public static rename(source: java.io.File, target: java.io.File): void;
					public constructor();
					public static mkdirs(directory: java.io.File): void;
				}
				export module FileUtils {
					export class CreateDirectoryException {
						public static class: java.lang.Class<com.facebook.common.file.FileUtils.CreateDirectoryException>;
						public constructor(message: string);
						public constructor(message: string, innerException: java.lang.Throwable);
					}
					export class FileDeleteException {
						public static class: java.lang.Class<com.facebook.common.file.FileUtils.FileDeleteException>;
						public constructor(message: string);
					}
					export class ParentDirNotFoundException {
						public static class: java.lang.Class<com.facebook.common.file.FileUtils.ParentDirNotFoundException>;
						public constructor(message: string);
					}
					export class RenameException {
						public static class: java.lang.Class<com.facebook.common.file.FileUtils.RenameException>;
						public constructor(message: string);
						public constructor(message: string, innerException: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class AndroidPredicates {
					public static class: java.lang.Class<com.facebook.common.internal.AndroidPredicates>;
					public static False(): com.facebook.common.internal.Predicate<any>;
					public static True(): com.facebook.common.internal.Predicate<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class ByteStreams {
					public static class: java.lang.Class<com.facebook.common.internal.ByteStreams>;
					public static toByteArray(in_: java.io.InputStream): androidNative.Array<number>;
					public static copy(r: java.io.InputStream, from: java.io.OutputStream): number;
					public static toByteArray(off: java.io.InputStream, read: number): androidNative.Array<number>;
					public static read(result: java.io.InputStream, in_: androidNative.Array<number>, b: number, off: number): number;
					public static readFully(in_: java.io.InputStream, b: androidNative.Array<number>, off: number, len: number): void;
				}
				export module ByteStreams {
					export class FastByteArrayOutputStream {
						public static class: java.lang.Class<com.facebook.common.internal.ByteStreams.FastByteArrayOutputStream>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Closeables {
					public static class: java.lang.Class<com.facebook.common.internal.Closeables>;
					public static closeQuietly(impossible: java.io.Reader): void;
					public static closeQuietly(impossible: java.io.InputStream): void;
					public static close(e: java.io.Closeable, closeable: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class CountingOutputStream {
					public static class: java.lang.Class<com.facebook.common.internal.CountingOutputStream>;
					public getCount(): number;
					public write(b: number): void;
					public close(): void;
					public write(b: androidNative.Array<number>, off: number, len: number): void;
					public constructor(out: java.io.OutputStream);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class DoNotStrip {
					public static class: java.lang.Class<com.facebook.common.internal.DoNotStrip>;
					/**
					 * Constructs a new instance of the com.facebook.common.internal.DoNotStrip interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Files {
					public static class: java.lang.Class<com.facebook.common.internal.Files>;
					public static toByteArray(file: java.io.File): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Fn<A, R>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.Fn<any,any>>;
					/**
					 * Constructs a new instance of the com.facebook.common.internal.Fn<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: A): R;
					});
					public constructor();
					public apply(param0: A): R;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class ImmutableList<E>  extends java.util.ArrayList<any> {
					public static class: java.lang.Class<com.facebook.common.internal.ImmutableList<any>>;
					public static copyOf(list: java.util.List<any>): com.facebook.common.internal.ImmutableList<any>;
					public static of(elements: androidNative.Array<any>): com.facebook.common.internal.ImmutableList<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class ImmutableMap<K, V>  extends java.util.HashMap<any,any> {
					public static class: java.lang.Class<com.facebook.common.internal.ImmutableMap<any,any>>;
					public static of(k1: any, v1: any, k2: any, v2: any): java.util.Map<any,any>;
					public static of(k1: any, v1: any, k2: any, v2: any, k3: any, v3: any, k4: any, v4: any, k5: any, v5: any, k6: any, v6: any): java.util.Map<any,any>;
					public static copyOf(map: java.util.Map<any,any>): com.facebook.common.internal.ImmutableMap<any,any>;
					public static of(k1: any, v1: any, k2: any, v2: any, k3: any, v3: any, k4: any, v4: any, k5: any, v5: any): java.util.Map<any,any>;
					public static of(): java.util.Map<any,any>;
					public static of(k1: any, v1: any, k2: any, v2: any, k3: any, v3: any): java.util.Map<any,any>;
					public static of(k1: any, v1: any, k2: any, v2: any, k3: any, v3: any, k4: any, v4: any): java.util.Map<any,any>;
					public static of(k1: any, v1: any): java.util.Map<any,any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class ImmutableSet<E>  extends java.util.HashSet<any> {
					public static class: java.lang.Class<com.facebook.common.internal.ImmutableSet<any>>;
					public static of(elements: androidNative.Array<any>): com.facebook.common.internal.ImmutableSet<any>;
					public static copyOf(set: java.util.Set<any>): com.facebook.common.internal.ImmutableSet<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Objects {
					public static class: java.lang.Class<com.facebook.common.internal.Objects>;
					public static toStringHelper(self: any): com.facebook.common.internal.Objects.ToStringHelper;
					public static toStringHelper(clazz: java.lang.Class<any>): com.facebook.common.internal.Objects.ToStringHelper;
					public static equal(a: any, b: any): boolean;
					public static firstNonNull(first: any, second: any): any;
					public static hashCode(objects: androidNative.Array<any>): number;
					public static toStringHelper(className: string): com.facebook.common.internal.Objects.ToStringHelper;
				}
				export module Objects {
					export class ToStringHelper {
						public static class: java.lang.Class<com.facebook.common.internal.Objects.ToStringHelper>;
						public omitNullValues(): com.facebook.common.internal.Objects.ToStringHelper;
						public add(name: string, value: any): com.facebook.common.internal.Objects.ToStringHelper;
						public add(name: string, value: boolean): com.facebook.common.internal.Objects.ToStringHelper;
						public add(name: string, value: string): com.facebook.common.internal.Objects.ToStringHelper;
						public addValue(value: number): com.facebook.common.internal.Objects.ToStringHelper;
						public addValue(value: any): com.facebook.common.internal.Objects.ToStringHelper;
						public add(name: string, value: number): com.facebook.common.internal.Objects.ToStringHelper;
						public addValue(value: boolean): com.facebook.common.internal.Objects.ToStringHelper;
						public addValue(value: string): com.facebook.common.internal.Objects.ToStringHelper;
						public toString(): string;
					}
					export module ToStringHelper {
						export class ValueHolder {
							public static class: java.lang.Class<com.facebook.common.internal.Objects.ToStringHelper.ValueHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Preconditions {
					public static class: java.lang.Class<com.facebook.common.internal.Preconditions>;
					public static checkNotNull(reference: any, errorMessage: any): any;
					public static checkArgument(expression: java.lang.Boolean): void;
					public static checkState(expression: boolean, errorMessageTemplate: string, errorMessageArgs: androidNative.Array<any>): void;
					public static checkArgument(expression: boolean, errorMessageTemplate: string, errorMessageArgs: androidNative.Array<any>): void;
					public static checkState(expression: boolean, errorMessage: any): void;
					public static checkElementIndex(index: number, size: number, desc: string): number;
					public static checkPositionIndex(index: number, size: number): number;
					public static checkState(expression: boolean): void;
					public static checkNotNull(reference: any, errorMessageTemplate: string, errorMessageArgs: androidNative.Array<any>): any;
					public static checkArgument(expression: boolean, errorMessage: any): void;
					public static checkElementIndex(index: number, size: number): number;
					public static checkPositionIndex(index: number, size: number, desc: string): number;
					public static checkPositionIndexes(start: number, end: number, size: number): void;
					public static checkNotNull(reference: any): any;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Predicate<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.Predicate<any>>;
					/**
					 * Constructs a new instance of the com.facebook.common.internal.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: T): boolean;
					});
					public constructor();
					public apply(param0: T): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Sets {
					public static class: java.lang.Class<com.facebook.common.internal.Sets>;
					public static newHashSet(): java.util.HashSet<any>;
					public static newIdentityHashSet(): java.util.Set<any>;
					public static newSetFromMap(map: java.util.Map<any,any>): java.util.Set<any>;
					public static newHashSetWithCapacity(capacity: number): java.util.HashSet<any>;
					public static newHashSet(elements: androidNative.Array<any>): java.util.HashSet<any>;
					public static newCopyOnWriteArraySet(): java.util.concurrent.CopyOnWriteArraySet<any>;
					public static newLinkedHashSet(): java.util.LinkedHashSet<any>;
					public static newHashSet(elements: java.lang.Iterable<any>): java.util.HashSet<any>;
					public static newHashSet(elements: java.util.Iterator<any>): java.util.HashSet<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Supplier<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.Supplier<any>>;
					/**
					 * Constructs a new instance of the com.facebook.common.internal.Supplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Suppliers {
					public static class: java.lang.Class<com.facebook.common.internal.Suppliers>;
					public static BOOLEAN_TRUE: com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public static BOOLEAN_FALSE: com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public static STRING_EMPTY: com.facebook.common.internal.Supplier<string>;
					public constructor();
					public static of(instance: any): com.facebook.common.internal.Supplier<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Throwables {
					public static class: java.lang.Class<com.facebook.common.internal.Throwables>;
					public static getCausalChain(throwable: java.lang.Throwable): java.util.List<java.lang.Throwable>;
					public static propagateIfInstanceOf(throwable: java.lang.Throwable, declaredType: java.lang.Class<any>): void;
					public static propagate(throwable: java.lang.Throwable): java.lang.RuntimeException;
					public static getStackTraceAsString(throwable: java.lang.Throwable): string;
					public static propagateIfPossible(throwable: java.lang.Throwable, declaredType: java.lang.Class<any>): void;
					public static getRootCause(throwable: java.lang.Throwable): java.lang.Throwable;
					public static propagateIfPossible(throwable: java.lang.Throwable): void;
					public static propagateIfPossible(throwable: java.lang.Throwable, declaredType1: java.lang.Class<any>, declaredType2: java.lang.Class<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module lifecycle {
				export class AttachDetachListener {
					public static class: java.lang.Class<com.facebook.common.lifecycle.AttachDetachListener>;
					/**
					 * Constructs a new instance of the com.facebook.common.lifecycle.AttachDetachListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAttachToView(param0: globalAndroid.view.View): void;
						onDetachFromView(param0: globalAndroid.view.View): void;
					});
					public constructor();
					public onAttachToView(param0: globalAndroid.view.View): void;
					public onDetachFromView(param0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module logging {
				export class FLog {
					public static class: java.lang.Class<com.facebook.common.logging.FLog>;
					public static VERBOSE: number = 2;
					public static DEBUG: number = 3;
					public static INFO: number = 4;
					public static WARN: number = 5;
					public static ERROR: number = 6;
					public static ASSERT: number = 7;
					public static v(tag: string, msg: string, args: androidNative.Array<any>): void;
					public static w(tag: string, msg: string): void;
					public static v(tag: string, msg: string): void;
					public static v(cls: java.lang.Class<any>, msg: string, arg1: any): void;
					public static i(tag: string, msg: string): void;
					public static v(tag: string, msg: string, arg1: any): void;
					public static d(cls: java.lang.Class<any>, msg: string): void;
					public static i(cls: java.lang.Class<any>, msg: string, arg1: any, arg2: any, arg3: any, arg4: any): void;
					public static getMinimumLoggingLevel(): number;
					public static i(tag: string, msg: string, arg1: any, arg2: any): void;
					public static v(cls: java.lang.Class<any>, tr: java.lang.Throwable, msg: string, args: androidNative.Array<any>): void;
					public static i(cls: java.lang.Class<any>, msg: string, arg1: any): void;
					public static v(cls: java.lang.Class<any>, msg: string, args: androidNative.Array<any>): void;
					public static w(tag: string, msg: string, tr: java.lang.Throwable): void;
					public constructor();
					public static v(cls: java.lang.Class<any>, msg: string, tr: java.lang.Throwable): void;
					public static w(cls: java.lang.Class<any>, tr: java.lang.Throwable, msg: string, args: androidNative.Array<any>): void;
					public static e(tag: string, msg: string): void;
					public static d(tag: string, msg: string): void;
					public static v(cls: java.lang.Class<any>, msg: string, arg1: any, arg2: any): void;
					public static w(cls: java.lang.Class<any>, msg: string): void;
					public static wtf(tag: string, msg: string, tr: java.lang.Throwable): void;
					public static i(tag: string, msg: string, arg1: any): void;
					public static i(cls: java.lang.Class<any>, msg: string): void;
					public static e(cls: java.lang.Class<any>, tr: java.lang.Throwable, msg: string, args: androidNative.Array<any>): void;
					public static setLoggingDelegate(delegate: com.facebook.common.logging.LoggingDelegate): void;
					public static e(cls: java.lang.Class<any>, msg: string): void;
					public static wtf(cls: java.lang.Class<any>, msg: string, args: androidNative.Array<any>): void;
					public static e(tag: string, msg: string, args: androidNative.Array<any>): void;
					public static w(cls: java.lang.Class<any>, msg: string, tr: java.lang.Throwable): void;
					public static e(cls: java.lang.Class<any>, msg: string, tr: java.lang.Throwable): void;
					public static d(cls: java.lang.Class<any>, tr: java.lang.Throwable, msg: string, args: androidNative.Array<any>): void;
					public static v(tag: string, msg: string, arg1: any, arg2: any, arg3: any, arg4: any): void;
					public static d(tag: string, tr: java.lang.Throwable, msg: string, args: androidNative.Array<any>): void;
					public static v(cls: java.lang.Class<any>, msg: string, arg1: any, arg2: any, arg3: any): void;
					public static i(tag: string, msg: string, arg1: any, arg2: any, arg3: any, arg4: any): void;
					public static d(cls: java.lang.Class<any>, msg: string, arg1: any, arg2: any, arg3: any, arg4: any): void;
					public static v(tag: string, tr: java.lang.Throwable, msg: string, args: androidNative.Array<any>): void;
					public static w(tag: string, msg: string, args: androidNative.Array<any>): void;
					public static i(tag: string, msg: string, arg1: any, arg2: any, arg3: any): void;
					public static d(tag: string, msg: string, arg1: any, arg2: any, arg3: any): void;
					public static i(tag: string, tr: java.lang.Throwable, msg: string, args: androidNative.Array<any>): void;
					public static w(cls: java.lang.Class<any>, msg: string, args: androidNative.Array<any>): void;
					public static i(cls: java.lang.Class<any>, msg: string, args: androidNative.Array<any>): void;
					public static d(cls: java.lang.Class<any>, msg: string, arg1: any): void;
					public static d(cls: java.lang.Class<any>, msg: string, tr: java.lang.Throwable): void;
					public static wtf(cls: java.lang.Class<any>, msg: string, tr: java.lang.Throwable): void;
					public static d(tag: string, msg: string, arg1: any, arg2: any): void;
					public static w(tag: string, tr: java.lang.Throwable, msg: string, args: androidNative.Array<any>): void;
					public static e(cls: java.lang.Class<any>, msg: string, args: androidNative.Array<any>): void;
					public static wtf(tag: string, msg: string): void;
					public static i(tag: string, msg: string, tr: java.lang.Throwable): void;
					public static e(tag: string, tr: java.lang.Throwable, msg: string, args: androidNative.Array<any>): void;
					public static wtf(tag: string, tr: java.lang.Throwable, msg: string, args: androidNative.Array<any>): void;
					public static isLoggable(level: number): boolean;
					public static d(tag: string, msg: string, args: androidNative.Array<any>): void;
					public static i(cls: java.lang.Class<any>, tr: java.lang.Throwable, msg: string, args: androidNative.Array<any>): void;
					public static d(cls: java.lang.Class<any>, msg: string, args: androidNative.Array<any>): void;
					public static setMinimumLoggingLevel(level: number): void;
					public static v(tag: string, msg: string, arg1: any, arg2: any): void;
					public static v(tag: string, msg: string, tr: java.lang.Throwable): void;
					public static d(cls: java.lang.Class<any>, msg: string, arg1: any, arg2: any, arg3: any): void;
					public static v(tag: string, msg: string, arg1: any, arg2: any, arg3: any): void;
					public static d(tag: string, msg: string, tr: java.lang.Throwable): void;
					public static d(tag: string, msg: string, arg1: any, arg2: any, arg3: any, arg4: any): void;
					public static v(cls: java.lang.Class<any>, msg: string, arg1: any, arg2: any, arg3: any, arg4: any): void;
					public static i(cls: java.lang.Class<any>, msg: string, arg1: any, arg2: any): void;
					public static wtf(tag: string, msg: string, args: androidNative.Array<any>): void;
					public static wtf(cls: java.lang.Class<any>, msg: string): void;
					public static d(cls: java.lang.Class<any>, msg: string, arg1: any, arg2: any): void;
					public static i(tag: string, msg: string, args: androidNative.Array<any>): void;
					public static wtf(cls: java.lang.Class<any>, tr: java.lang.Throwable, msg: string, args: androidNative.Array<any>): void;
					public static d(tag: string, msg: string, arg1: any): void;
					public static i(cls: java.lang.Class<any>, msg: string, arg1: any, arg2: any, arg3: any): void;
					public static v(cls: java.lang.Class<any>, msg: string): void;
					public static e(tag: string, msg: string, tr: java.lang.Throwable): void;
					public static i(cls: java.lang.Class<any>, msg: string, tr: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module logging {
				export class FLogDefaultLoggingDelegate extends com.facebook.common.logging.LoggingDelegate {
					public static class: java.lang.Class<com.facebook.common.logging.FLogDefaultLoggingDelegate>;
					public static sInstance: com.facebook.common.logging.FLogDefaultLoggingDelegate;
					public d(tag: string, msg: string, tr: java.lang.Throwable): void;
					public setMinimumLoggingLevel(level: number): void;
					public getMinimumLoggingLevel(): number;
					public wtf(tag: string, msg: string): void;
					public v(param0: string, param1: string, param2: java.lang.Throwable): void;
					public wtf(param0: string, param1: string): void;
					public wtf(tag: string, msg: string, tr: java.lang.Throwable): void;
					public setApplicationTag(tag: string): void;
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public v(tag: string, msg: string, tr: java.lang.Throwable): void;
					public isLoggable(param0: number): boolean;
					public w(tag: string, msg: string, tr: java.lang.Throwable): void;
					public w(param0: string, param1: string): void;
					public i(tag: string, msg: string, tr: java.lang.Throwable): void;
					public v(param0: string, param1: string): void;
					public d(param0: string, param1: string, param2: java.lang.Throwable): void;
					public log(param0: number, param1: string, param2: string): void;
					public d(tag: string, msg: string): void;
					public e(tag: string, msg: string): void;
					public i(param0: string, param1: string, param2: java.lang.Throwable): void;
					public i(tag: string, msg: string): void;
					public log(priority: number, tag: string, msg: string): void;
					public e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public v(tag: string, msg: string): void;
					public w(tag: string, msg: string): void;
					public e(tag: string, msg: string, tr: java.lang.Throwable): void;
					public setMinimumLoggingLevel(param0: number): void;
					public i(param0: string, param1: string): void;
					public wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static getInstance(): com.facebook.common.logging.FLogDefaultLoggingDelegate;
					public isLoggable(level: number): boolean;
					public w(param0: string, param1: string, param2: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module logging {
				export class LoggingDelegate {
					public static class: java.lang.Class<com.facebook.common.logging.LoggingDelegate>;
					/**
					 * Constructs a new instance of the com.facebook.common.logging.LoggingDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setMinimumLoggingLevel(param0: number): void;
						getMinimumLoggingLevel(): number;
						isLoggable(param0: number): boolean;
						v(param0: string, param1: string): void;
						v(param0: string, param1: string, param2: java.lang.Throwable): void;
						d(param0: string, param1: string): void;
						d(param0: string, param1: string, param2: java.lang.Throwable): void;
						i(param0: string, param1: string): void;
						i(param0: string, param1: string, param2: java.lang.Throwable): void;
						w(param0: string, param1: string): void;
						w(param0: string, param1: string, param2: java.lang.Throwable): void;
						e(param0: string, param1: string): void;
						e(param0: string, param1: string, param2: java.lang.Throwable): void;
						wtf(param0: string, param1: string): void;
						wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
						log(param0: number, param1: string, param2: string): void;
					});
					public constructor();
					public i(param0: string, param1: string, param2: java.lang.Throwable): void;
					public getMinimumLoggingLevel(): number;
					public v(param0: string, param1: string, param2: java.lang.Throwable): void;
					public e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public wtf(param0: string, param1: string): void;
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public setMinimumLoggingLevel(param0: number): void;
					public isLoggable(param0: number): boolean;
					public i(param0: string, param1: string): void;
					public wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
					public d(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string, param2: java.lang.Throwable): void;
					public log(param0: number, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module media {
				export class MediaUtils {
					public static class: java.lang.Class<com.facebook.common.media.MediaUtils>;
					public static INSTANCE: com.facebook.common.media.MediaUtils;
					public static ADDITIONAL_ALLOWED_MIME_TYPES: java.util.Map<string,string>;
					public static isThreeD(mimeType: string): boolean;
					public static isNonNativeSupportedMimeType(mimeType: string): boolean;
					public static isVideo(mimeType: string): boolean;
					public static isPhoto(mimeType: string): boolean;
					public static extractMime(extension: string): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module media {
				export class MimeTypeMapWrapper {
					public static class: java.lang.Class<com.facebook.common.media.MimeTypeMapWrapper>;
					public constructor();
					public static hasMimeType(mimeType: string): boolean;
					public static hasExtension(extension: string): boolean;
					public static getMimeTypeFromExtension(extension: string): string;
					public static getExtensionFromMimeType(mimeType: string): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class ByteArrayPool extends com.facebook.common.memory.Pool<androidNative.Array<number>> {
					public static class: java.lang.Class<com.facebook.common.memory.ByteArrayPool>;
					/**
					 * Constructs a new instance of the com.facebook.common.memory.ByteArrayPool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: number): any;
						release(param0: any): void;
						release(param0: any): void;
						trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					});
					public constructor();
					public release(param0: any): void;
					public trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					public get(param0: number): any;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class DecodeBufferHelper extends androidx.core.util.Pools.Pool<java.nio.ByteBuffer> {
					public static class: java.lang.Class<com.facebook.common.memory.DecodeBufferHelper>;
					public static INSTANCE: com.facebook.common.memory.DecodeBufferHelper;
					public static getRecommendedDecodeBufferSize(): number;
					public release(instance: java.nio.ByteBuffer): boolean;
					public constructor();
					public static setRecommendedDecodeBufferSize(recommendedDecodeBufferSize: number): void;
					public acquire(): java.nio.ByteBuffer;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class MemoryTrimType {
					public static class: java.lang.Class<com.facebook.common.memory.MemoryTrimType>;
					public static OnCloseToDalvikHeapLimit: com.facebook.common.memory.MemoryTrimType;
					public static OnSystemMemoryCriticallyLowWhileAppInForeground: com.facebook.common.memory.MemoryTrimType;
					public static OnSystemLowMemoryWhileAppInForeground: com.facebook.common.memory.MemoryTrimType;
					public static OnSystemLowMemoryWhileAppInBackgroundLowSeverity: com.facebook.common.memory.MemoryTrimType;
					public static OnSystemModerateMemory: com.facebook.common.memory.MemoryTrimType;
					public static OnAppBackgrounded: com.facebook.common.memory.MemoryTrimType;
					public static OnJavaMemoryRed: com.facebook.common.memory.MemoryTrimType;
					public static OnJavaMemoryYellow: com.facebook.common.memory.MemoryTrimType;
					public static OnSystemMemoryRed: com.facebook.common.memory.MemoryTrimType;
					public static OnSystemMemoryYellow: com.facebook.common.memory.MemoryTrimType;
					public getSuggestedTrimRatio(): number;
					public static values(): androidNative.Array<com.facebook.common.memory.MemoryTrimType>;
					public static fromInt(trimType: number): com.facebook.common.memory.MemoryTrimType;
					public static valueOf(name: string): com.facebook.common.memory.MemoryTrimType;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class MemoryTrimmable {
					public static class: java.lang.Class<com.facebook.common.memory.MemoryTrimmable>;
					/**
					 * Constructs a new instance of the com.facebook.common.memory.MemoryTrimmable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					});
					public constructor();
					public trim(param0: com.facebook.common.memory.MemoryTrimType): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class MemoryTrimmableRegistry {
					public static class: java.lang.Class<com.facebook.common.memory.MemoryTrimmableRegistry>;
					/**
					 * Constructs a new instance of the com.facebook.common.memory.MemoryTrimmableRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						registerMemoryTrimmable(param0: com.facebook.common.memory.MemoryTrimmable): void;
						unregisterMemoryTrimmable(param0: com.facebook.common.memory.MemoryTrimmable): void;
					});
					public constructor();
					public unregisterMemoryTrimmable(param0: com.facebook.common.memory.MemoryTrimmable): void;
					public registerMemoryTrimmable(param0: com.facebook.common.memory.MemoryTrimmable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class NoOpMemoryTrimmableRegistry extends com.facebook.common.memory.MemoryTrimmableRegistry {
					public static class: java.lang.Class<com.facebook.common.memory.NoOpMemoryTrimmableRegistry>;
					public unregisterMemoryTrimmable(trimmable: com.facebook.common.memory.MemoryTrimmable): void;
					public constructor();
					public unregisterMemoryTrimmable(param0: com.facebook.common.memory.MemoryTrimmable): void;
					public static getInstance(): com.facebook.common.memory.NoOpMemoryTrimmableRegistry;
					public registerMemoryTrimmable(param0: com.facebook.common.memory.MemoryTrimmable): void;
					public registerMemoryTrimmable(trimmable: com.facebook.common.memory.MemoryTrimmable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class Pool<V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.memory.Pool<any>>;
					/**
					 * Constructs a new instance of the com.facebook.common.memory.Pool<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: number): V;
						release(param0: V): void;
						release(param0: any): void;
						trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					});
					public constructor();
					public release(param0: any): void;
					public get(param0: number): V;
					public trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					public release(param0: V): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class PooledByteArrayBufferedInputStream {
					public static class: java.lang.Class<com.facebook.common.memory.PooledByteArrayBufferedInputStream>;
					public available(): number;
					public read(): number;
					public skip(byteCount: number): number;
					public finalize(): void;
					public close(): void;
					public read(buffer: androidNative.Array<number>, offset: number, length: number): number;
					public constructor(inputStream: java.io.InputStream, byteArray: androidNative.Array<number>, resourceReleaser: com.facebook.common.references.ResourceReleaser<androidNative.Array<number>>);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class PooledByteBuffer {
					public static class: java.lang.Class<com.facebook.common.memory.PooledByteBuffer>;
					/**
					 * Constructs a new instance of the com.facebook.common.memory.PooledByteBuffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						size(): number;
						read(param0: number): number;
						read(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
						getNativePtr(): number;
						getByteBuffer(): java.nio.ByteBuffer;
						close(): void;
						isClosed(): boolean;
					});
					public constructor();
					public read(param0: number): number;
					public read(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
					public getByteBuffer(): java.nio.ByteBuffer;
					public close(): void;
					public size(): number;
					public getNativePtr(): number;
					public isClosed(): boolean;
				}
				export module PooledByteBuffer {
					export class ClosedException {
						public static class: java.lang.Class<com.facebook.common.memory.PooledByteBuffer.ClosedException>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class PooledByteBufferFactory {
					public static class: java.lang.Class<com.facebook.common.memory.PooledByteBufferFactory>;
					/**
					 * Constructs a new instance of the com.facebook.common.memory.PooledByteBufferFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						newByteBuffer(param0: number): com.facebook.common.memory.PooledByteBuffer;
						newByteBuffer(param0: java.io.InputStream): com.facebook.common.memory.PooledByteBuffer;
						newByteBuffer(param0: androidNative.Array<number>): com.facebook.common.memory.PooledByteBuffer;
						newByteBuffer(param0: java.io.InputStream, param1: number): com.facebook.common.memory.PooledByteBuffer;
						newOutputStream(): com.facebook.common.memory.PooledByteBufferOutputStream;
						newOutputStream(param0: number): com.facebook.common.memory.PooledByteBufferOutputStream;
					});
					public constructor();
					public newOutputStream(param0: number): com.facebook.common.memory.PooledByteBufferOutputStream;
					public newByteBuffer(param0: number): com.facebook.common.memory.PooledByteBuffer;
					public newOutputStream(): com.facebook.common.memory.PooledByteBufferOutputStream;
					public newByteBuffer(param0: java.io.InputStream): com.facebook.common.memory.PooledByteBuffer;
					public newByteBuffer(param0: androidNative.Array<number>): com.facebook.common.memory.PooledByteBuffer;
					public newByteBuffer(param0: java.io.InputStream, param1: number): com.facebook.common.memory.PooledByteBuffer;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class PooledByteBufferInputStream {
					public static class: java.lang.Class<com.facebook.common.memory.PooledByteBufferInputStream>;
					public available(): number;
					public read(): number;
					public skip(byteCount: number): number;
					public reset(): void;
					public constructor(pooledByteBuffer: com.facebook.common.memory.PooledByteBuffer);
					public markSupported(): boolean;
					public read(buffer: androidNative.Array<number>): number;
					public read(buffer: androidNative.Array<number>, offset: number, length: number): number;
					public mark(readlimit: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export abstract class PooledByteBufferOutputStream {
					public static class: java.lang.Class<com.facebook.common.memory.PooledByteBufferOutputStream>;
					public constructor();
					public toByteBuffer(): com.facebook.common.memory.PooledByteBuffer;
					public close(): void;
					public size(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class PooledByteStreams {
					public static class: java.lang.Class<com.facebook.common.memory.PooledByteStreams>;
					public constructor(byteArrayPool: com.facebook.common.memory.ByteArrayPool);
					public copy(this_: java.io.InputStream, from: java.io.OutputStream): number;
					public constructor(byteArrayPool: com.facebook.common.memory.ByteArrayPool, tempBufSize: number);
					public copy(this_: java.io.InputStream, from: java.io.OutputStream, to: number): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module references {
				export abstract class CloseableReference<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.references.CloseableReference<any>>;
					public static REF_TYPE_DEFAULT: number = 0;
					public static REF_TYPE_FINALIZER: number = 1;
					public static REF_TYPE_REF_COUNT: number = 2;
					public static REF_TYPE_NOOP: number = 3;
					public mIsClosed: boolean;
					public mSharedReference: com.facebook.common.references.SharedReference<T>;
					public mLeakHandler: com.facebook.common.references.CloseableReference.LeakHandler;
					public mStacktrace: java.lang.Throwable;
					public static of(t: java.io.Closeable, leakHandler: com.facebook.common.references.CloseableReference.LeakHandler): com.facebook.common.references.CloseableReference<any>;
					public static isValid(ref: com.facebook.common.references.CloseableReference<any>): boolean;
					public getUnderlyingReferenceTestOnly(): com.facebook.common.references.SharedReference<T>;
					public static closeSafely(ref: java.lang.Iterable<any>): void;
					public constructor(t: T, resourceReleaser: com.facebook.common.references.ResourceReleaser<T>, leakHandler: com.facebook.common.references.CloseableReference.LeakHandler, stacktrace: java.lang.Throwable, keepAlive: boolean);
					public static closeSafely(ref: com.facebook.common.references.CloseableReference<any>): void;
					public static of(t: any, resourceReleaser: com.facebook.common.references.ResourceReleaser<any>, leakHandler: com.facebook.common.references.CloseableReference.LeakHandler): com.facebook.common.references.CloseableReference<any>;
					public static cloneOrNull(ref: java.util.Collection<any>): java.util.List<any>;
					public get(): T;
					public getValueHash(): number;
					public constructor(sharedReference: com.facebook.common.references.SharedReference<T>, leakHandler: com.facebook.common.references.CloseableReference.LeakHandler, stacktrace: java.lang.Throwable);
					public static of(t: any, resourceReleaser: com.facebook.common.references.ResourceReleaser<any>): com.facebook.common.references.CloseableReference<any>;
					public static setDisableCloseableReferencesForBitmaps(bitmapCloseableRefType: number): void;
					public static of(t: any, resourceReleaser: com.facebook.common.references.ResourceReleaser<any>, leakHandler: com.facebook.common.references.CloseableReference.LeakHandler, stacktrace: java.lang.Throwable): com.facebook.common.references.CloseableReference<any>;
					public cloneOrNull(): com.facebook.common.references.CloseableReference<T>;
					public isValid(): boolean;
					public close(): void;
					public clone(): com.facebook.common.references.CloseableReference<T>;
					public static of(t: java.io.Closeable): com.facebook.common.references.CloseableReference<any>;
					public static cloneOrNull(ref: com.facebook.common.references.CloseableReference<any>): com.facebook.common.references.CloseableReference<any>;
				}
				export module CloseableReference {
					export class CloseableRefType {
						public static class: java.lang.Class<com.facebook.common.references.CloseableReference.CloseableRefType>;
						/**
						 * Constructs a new instance of the com.facebook.common.references.CloseableReference$CloseableRefType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class LeakHandler {
						public static class: java.lang.Class<com.facebook.common.references.CloseableReference.LeakHandler>;
						/**
						 * Constructs a new instance of the com.facebook.common.references.CloseableReference$LeakHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							reportLeak(param0: com.facebook.common.references.SharedReference<any>, param1: java.lang.Throwable): void;
							requiresStacktrace(): boolean;
						});
						public constructor();
						public reportLeak(param0: com.facebook.common.references.SharedReference<any>, param1: java.lang.Throwable): void;
						public requiresStacktrace(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module references {
				export class DefaultCloseableReference<T>  extends com.facebook.common.references.CloseableReference<any> {
					public static class: java.lang.Class<com.facebook.common.references.DefaultCloseableReference<any>>;
					public finalize(): void;
					public clone(): com.facebook.common.references.CloseableReference<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module references {
				export class FinalizerCloseableReference<T>  extends com.facebook.common.references.CloseableReference<any> {
					public static class: java.lang.Class<com.facebook.common.references.FinalizerCloseableReference<any>>;
					public finalize(): void;
					public close(): void;
					public clone(): com.facebook.common.references.CloseableReference<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module references {
				export class HasBitmap {
					public static class: java.lang.Class<com.facebook.common.references.HasBitmap>;
					/**
					 * Constructs a new instance of the com.facebook.common.references.HasBitmap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module references {
				export class NoOpCloseableReference<T>  extends com.facebook.common.references.CloseableReference<any> {
					public static class: java.lang.Class<com.facebook.common.references.NoOpCloseableReference<any>>;
					public static isValid(ref: com.facebook.common.references.CloseableReference<any>): boolean;
					public isValid(): boolean;
					public close(): void;
					public static cloneOrNull(ref: java.util.Collection<any>): java.util.List<any>;
					public cloneOrNull(): com.facebook.common.references.CloseableReference<any>;
					public clone(): com.facebook.common.references.CloseableReference<any>;
					public static cloneOrNull(ref: com.facebook.common.references.CloseableReference<any>): com.facebook.common.references.CloseableReference<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module references {
				export class OOMSoftReference<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.references.OOMSoftReference<any>>;
					public constructor();
					public clear(): void;
					public set(hardReference: T): void;
					public get(): T;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module references {
				export class RefCountCloseableReference<T>  extends com.facebook.common.references.CloseableReference<any> {
					public static class: java.lang.Class<com.facebook.common.references.RefCountCloseableReference<any>>;
					public clone(): com.facebook.common.references.CloseableReference<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module references {
				export class ResourceReleaser<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.references.ResourceReleaser<any>>;
					/**
					 * Constructs a new instance of the com.facebook.common.references.ResourceReleaser<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						release(param0: T): void;
					});
					public constructor();
					public release(param0: T): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module references {
				export class SharedReference<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.references.SharedReference<any>>;
					public addReferenceIfValid(): boolean;
					public addReference(): void;
					public deleteReferenceIfValid(): boolean;
					public constructor(value: T, resourceReleaser: com.facebook.common.references.ResourceReleaser<T>);
					public isValid(): boolean;
					public static reportData(): string;
					public constructor(value: T, resourceReleaser: com.facebook.common.references.ResourceReleaser<T>, keepAlive: boolean);
					public static isValid(ref: com.facebook.common.references.SharedReference<any>): boolean;
					public getRefCountTestOnly(): number;
					public get(): T;
					public deleteReference(): void;
				}
				export module SharedReference {
					export class NullReferenceException {
						public static class: java.lang.Class<com.facebook.common.references.SharedReference.NullReferenceException>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module statfs {
				export class StatFsHelper {
					public static class: java.lang.Class<com.facebook.common.statfs.StatFsHelper>;
					public static DEFAULT_DISK_YELLOW_LEVEL_IN_MB: number = 400;
					public static DEFAULT_DISK_YELLOW_LEVEL_IN_BYTES: number = 419430400;
					public static DEFAULT_DISK_RED_LEVEL_IN_MB: number = 100;
					public static DEFAULT_DISK_RED_LEVEL_IN_BYTES: number = 104857600;
					public static DEFAULT_DISK_OLIVE_LEVEL_IN_BYTES: number = 1048576000;
					public static getInstance(): com.facebook.common.statfs.StatFsHelper;
					public testLowDiskSpace(storageType: com.facebook.common.statfs.StatFsHelper.StorageType, freeSpaceThreshold: number): boolean;
					public getAvailableStorageSpace(availableBlocks: com.facebook.common.statfs.StatFsHelper.StorageType): number;
					public isHighSpaceCondition(): boolean;
					public constructor();
					public isVeryLowSpaceCondition(): boolean;
					public getFreeStorageSpace(availableBlocks: com.facebook.common.statfs.StatFsHelper.StorageType): number;
					public getTotalStorageSpace(totalBlocks: com.facebook.common.statfs.StatFsHelper.StorageType): number;
					public isLowSpaceCondition(): boolean;
					public resetStats(): void;
					public static createStatFs(path: string): globalAndroid.os.StatFs;
				}
				export module StatFsHelper {
					export class StorageType {
						public static class: java.lang.Class<com.facebook.common.statfs.StatFsHelper.StorageType>;
						public static INTERNAL: com.facebook.common.statfs.StatFsHelper.StorageType;
						public static EXTERNAL: com.facebook.common.statfs.StatFsHelper.StorageType;
						public static values(): androidNative.Array<com.facebook.common.statfs.StatFsHelper.StorageType>;
						public static valueOf(name: string): com.facebook.common.statfs.StatFsHelper.StorageType;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module streams {
				export class LimitedInputStream {
					public static class: java.lang.Class<com.facebook.common.streams.LimitedInputStream>;
					public read(buffer: androidNative.Array<number>, byteOffset: number, byteCount: number): number;
					public available(): number;
					public read(): number;
					public skip(byteCount: number): number;
					public reset(): void;
					public constructor(inputStream: java.io.InputStream, limit: number);
					public mark(readLimit: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module streams {
				export class TailAppendingInputStream {
					public static class: java.lang.Class<com.facebook.common.streams.TailAppendingInputStream>;
					public read(): number;
					public reset(): void;
					public read(this_: androidNative.Array<number>, buffer: number, offset: number): number;
					public constructor(inputStream: java.io.InputStream, tail: androidNative.Array<number>);
					public read(buffer: androidNative.Array<number>): number;
					public mark(readLimit: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module time {
				export class AwakeTimeSinceBootClock extends com.facebook.common.time.MonotonicNanoClock {
					public static class: java.lang.Class<com.facebook.common.time.AwakeTimeSinceBootClock>;
					public static get(): com.facebook.common.time.AwakeTimeSinceBootClock;
					public nowNanos(): number;
					public now(): number;
					public static of(provider: com.facebook.common.time.Clock): com.facebook.common.time.MonotonicClock;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module time {
				export class Clock {
					public static class: java.lang.Class<com.facebook.common.time.Clock>;
					/**
					 * Constructs a new instance of the com.facebook.common.time.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						now(): number;
					});
					public constructor();
					public static MAX_TIME: number = 9223372036854775807;
					public now(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module time {
				export class CurrentThreadTimeClock extends com.facebook.common.time.Clock {
					public static class: java.lang.Class<com.facebook.common.time.CurrentThreadTimeClock>;
					public constructor();
					public now(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module time {
				export class MonotonicClock {
					public static class: java.lang.Class<com.facebook.common.time.MonotonicClock>;
					/**
					 * Constructs a new instance of the com.facebook.common.time.MonotonicClock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						nowNanos(): number;
						now(): number;
						of(provider: com.facebook.common.time.Clock): com.facebook.common.time.MonotonicClock;
					});
					public constructor();
					public nowNanos(): number;
					public now(): number;
					public static of(provider: com.facebook.common.time.Clock): com.facebook.common.time.MonotonicClock;
				}
				export module MonotonicClock {
					export class MonotonicClockWrapper extends com.facebook.common.time.MonotonicClock {
						public static class: java.lang.Class<com.facebook.common.time.MonotonicClock.MonotonicClockWrapper>;
						public static of(provider: com.facebook.common.time.Clock): com.facebook.common.time.MonotonicClock;
						public nowNanos(): number;
						public now(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module time {
				export class MonotonicNanoClock extends com.facebook.common.time.MonotonicClock {
					public static class: java.lang.Class<com.facebook.common.time.MonotonicNanoClock>;
					/**
					 * Constructs a new instance of the com.facebook.common.time.MonotonicNanoClock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						nowNanos(): number;
						now(): number;
						of(provider: com.facebook.common.time.Clock): com.facebook.common.time.MonotonicClock;
					});
					public constructor();
					public nowNanos(): number;
					public now(): number;
					public static of(provider: com.facebook.common.time.Clock): com.facebook.common.time.MonotonicClock;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module time {
				export class RealtimeSinceBootClock extends com.facebook.common.time.MonotonicClock {
					public static class: java.lang.Class<com.facebook.common.time.RealtimeSinceBootClock>;
					public now(): number;
					public nowNanos(): number;
					public static get(): com.facebook.common.time.RealtimeSinceBootClock;
					public static of(provider: com.facebook.common.time.Clock): com.facebook.common.time.MonotonicClock;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module time {
				export class SystemClock extends com.facebook.common.time.Clock {
					public static class: java.lang.Class<com.facebook.common.time.SystemClock>;
					public static get(): com.facebook.common.time.SystemClock;
					public now(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class ByteConstants {
					public static class: java.lang.Class<com.facebook.common.util.ByteConstants>;
					public static KB: number = 1024;
					public static MB: number = 1048576;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class ExceptionWithNoStacktrace {
					public static class: java.lang.Class<com.facebook.common.util.ExceptionWithNoStacktrace>;
					public fillInStackTrace(): java.lang.Throwable;
					public constructor(detailMessage: string);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class HashCodeUtil {
					public static class: java.lang.Class<com.facebook.common.util.HashCodeUtil>;
					public static hashCode(i1: number, i2: number, i3: number): number;
					public static hashCode(o1: any): number;
					public static hashCode(o1: any, o2: any, o3: any, o4: any, o5: any): number;
					public static hashCode(i1: number, i2: number, i3: number, i4: number): number;
					public static hashCode(i1: number): number;
					public static hashCode(i1: number, i2: number, i3: number, i4: number, i5: number): number;
					public static hashCode(i1: number, i2: number): number;
					public constructor();
					public static hashCode(o1: any, o2: any, o3: any, o4: any): number;
					public static hashCode(o1: any, o2: any): number;
					public static hashCode(i1: number, i2: number, i3: number, i4: number, i5: number, i6: number): number;
					public static hashCode(o1: any, o2: any, o3: any): number;
					public static hashCode(o1: any, o2: any, o3: any, o4: any, o5: any, o6: any): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class Hex {
					public static class: java.lang.Class<com.facebook.common.util.Hex>;
					public static hexStringToByteArray(s: string): androidNative.Array<number>;
					public constructor();
					public static encodeHex(index: androidNative.Array<number>, i: boolean): string;
					public static decodeHex(c1: string): androidNative.Array<number>;
					public static byte2Hex(value: number): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class SecureHashUtil {
					public static class: java.lang.Class<com.facebook.common.util.SecureHashUtil>;
					public static makeSHA256Hash(bytes: androidNative.Array<number>): string;
					public constructor();
					public static makeMD5Hash(bytes: androidNative.Array<number>): string;
					public static makeMD5Hash(e: string): string;
					public static makeMD5Hash(stream: java.io.InputStream): string;
					public static convertToHex(v: androidNative.Array<number>): string;
					public static makeSHA1Hash(bytes: androidNative.Array<number>): string;
					public static makeSHA1HashBase64(md: androidNative.Array<number>): string;
					public static makeSHA1Hash(e: string): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class StreamUtil {
					public static class: java.lang.Class<com.facebook.common.util.StreamUtil>;
					public static getBytesFromStream(inputStream: java.io.InputStream, hint: number): androidNative.Array<number>;
					public static skip(skipped: java.io.InputStream, inputStream: number): number;
					public static getBytesFromStream(is: java.io.InputStream): androidNative.Array<number>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class TriState {
					public static class: java.lang.Class<com.facebook.common.util.TriState>;
					public static YES: com.facebook.common.util.TriState;
					public static NO: com.facebook.common.util.TriState;
					public static UNSET: com.facebook.common.util.TriState;
					public static fromDbValue(value: number): com.facebook.common.util.TriState;
					public isSet(): boolean;
					public static values(): androidNative.Array<com.facebook.common.util.TriState>;
					public static valueOf(bool: boolean): com.facebook.common.util.TriState;
					public asBoolean(): boolean;
					public asBooleanObject(): java.lang.Boolean;
					public getDbValue(): number;
					public asBoolean(defaultValue: boolean): boolean;
					public static valueOf(bool: java.lang.Boolean): com.facebook.common.util.TriState;
					public static valueOf(name: string): com.facebook.common.util.TriState;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class UriUtil {
					public static class: java.lang.Class<com.facebook.common.util.UriUtil>;
					public static HTTP_SCHEME: string = "http";
					public static HTTPS_SCHEME: string = "https";
					public static LOCAL_FILE_SCHEME: string = "file";
					public static LOCAL_CONTENT_SCHEME: string = "content";
					public static LOCAL_ASSET_SCHEME: string = "asset";
					public static LOCAL_RESOURCE_SCHEME: string = "res";
					public static QUALIFIED_RESOURCE_SCHEME: string = "android.resource";
					public static DATA_SCHEME: string = "data";
					public static getUriForQualifiedResource(packageName: string, resourceId: number): globalAndroid.net.Uri;
					public static isLocalFileUri(uri: globalAndroid.net.Uri): boolean;
					public static isLocalResourceUri(uri: globalAndroid.net.Uri): boolean;
					public static getRealPathFromUri(documentId: globalAndroid.content.ContentResolver, idx: globalAndroid.net.Uri): string;
					public static getUriForResourceId(resourceId: number): globalAndroid.net.Uri;
					public static isDataUri(uri: globalAndroid.net.Uri): boolean;
					public static uriToUrl(e: globalAndroid.net.Uri): java.net.URL;
					public static isLocalContentUri(uri: globalAndroid.net.Uri): boolean;
					public static parseUriOrNull(uriAsString: string): globalAndroid.net.Uri;
					public static getUriForFile(file: java.io.File): globalAndroid.net.Uri;
					public static isLocalCameraUri(uri: globalAndroid.net.Uri): boolean;
					public static isLocalAssetUri(uri: globalAndroid.net.Uri): boolean;
					public static getSchemeOrNull(uri: globalAndroid.net.Uri): string;
					public constructor();
					public static isNetworkUri(uri: globalAndroid.net.Uri): boolean;
					public static isLocalContactUri(uri: globalAndroid.net.Uri): boolean;
					public static isQualifiedResourceUri(uri: globalAndroid.net.Uri): boolean;
					public static getAssetFileDescriptor(e: globalAndroid.content.ContentResolver, contentResolver: globalAndroid.net.Uri): globalAndroid.content.res.AssetFileDescriptor;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module webp {
				export class BitmapCreator {
					public static class: java.lang.Class<com.facebook.common.webp.BitmapCreator>;
					/**
					 * Constructs a new instance of the com.facebook.common.webp.BitmapCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createNakedBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
					});
					public constructor();
					public createNakedBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module webp {
				export class WebpBitmapFactory {
					public static class: java.lang.Class<com.facebook.common.webp.WebpBitmapFactory>;
					/**
					 * Constructs a new instance of the com.facebook.common.webp.WebpBitmapFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setWebpErrorLogger(param0: com.facebook.common.webp.WebpBitmapFactory.WebpErrorLogger): void;
						setBitmapCreator(param0: com.facebook.common.webp.BitmapCreator): void;
						decodeFileDescriptor(param0: java.io.FileDescriptor, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
						decodeStream(param0: java.io.InputStream, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
						decodeFile(param0: string, param1: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
						decodeByteArray(param0: androidNative.Array<number>, param1: number, param2: number, param3: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					});
					public constructor();
					public decodeByteArray(param0: androidNative.Array<number>, param1: number, param2: number, param3: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public setBitmapCreator(param0: com.facebook.common.webp.BitmapCreator): void;
					public decodeFile(param0: string, param1: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public decodeFileDescriptor(param0: java.io.FileDescriptor, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public decodeStream(param0: java.io.InputStream, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public setWebpErrorLogger(param0: com.facebook.common.webp.WebpBitmapFactory.WebpErrorLogger): void;
				}
				export module WebpBitmapFactory {
					export class WebpErrorLogger {
						public static class: java.lang.Class<com.facebook.common.webp.WebpBitmapFactory.WebpErrorLogger>;
						/**
						 * Constructs a new instance of the com.facebook.common.webp.WebpBitmapFactory$WebpErrorLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onWebpErrorLog(param0: string, param1: string): void;
						});
						public constructor();
						public onWebpErrorLog(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module webp {
				export class WebpSupportStatus {
					public static class: java.lang.Class<com.facebook.common.webp.WebpSupportStatus>;
					public static sIsSimpleWebpSupported: boolean;
					public static sIsExtendedWebpSupported: boolean;
					public static sWebpBitmapFactory: com.facebook.common.webp.WebpBitmapFactory;
					public static isWebpSupportedByPlatform(imageHeaderBytes: androidNative.Array<number>, offset: number, headerSize: number): boolean;
					public static isExtendedWebpHeader(imageHeaderBytes: androidNative.Array<number>, offset: number, headerSize: number): boolean;
					public static isLosslessWebpHeader(imageHeaderBytes: androidNative.Array<number>, offset: number): boolean;
					public constructor();
					public static loadWebpBitmapFactoryIfExists(): com.facebook.common.webp.WebpBitmapFactory;
					public static isSimpleWebpHeader(imageHeaderBytes: androidNative.Array<number>, offset: number): boolean;
					public static isAnimatedWebpHeader(imageHeaderBytes: androidNative.Array<number>, offset: number): boolean;
					public static isExtendedWebpHeaderWithAlpha(imageHeaderBytes: androidNative.Array<number>, offset: number): boolean;
					public static isWebpHeader(imageHeaderBytes: androidNative.Array<number>, offset: number, headerSize: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export abstract class AbstractDataSource<T>  extends com.facebook.datasource.DataSource<any> {
				public static class: java.lang.Class<com.facebook.datasource.AbstractDataSource<any>>;
				public getResult(): any;
				public static provideInstrumenter(dataSourceInstrumenter: com.facebook.datasource.AbstractDataSource.DataSourceInstrumenter): void;
				public hasFailed(): boolean;
				public setResult(value: any, isLast: boolean, extras: java.util.Map<string,any>): boolean;
				public setResult(value: any, isLast: boolean): boolean;
				public close(): boolean;
				public isClosed(): boolean;
				public setProgress(progress: number): boolean;
				public isFinished(): boolean;
				public hasMultipleResults(): boolean;
				public constructor();
				public getFailureCause(): java.lang.Throwable;
				public getProgress(): number;
				public closeResult(result: any): void;
				public setFailure(throwable: java.lang.Throwable): boolean;
				public setFailure(throwable: java.lang.Throwable, extras: java.util.Map<string,any>): boolean;
				public subscribe(this_: com.facebook.datasource.DataSubscriber<any>, dataSubscriber: java.util.concurrent.Executor): void;
				public notifyProgressUpdate(): void;
				public notifyDataSubscriber(dataSubscriber: com.facebook.datasource.DataSubscriber<any>, executor: java.util.concurrent.Executor, isFailure: boolean, isCancellation: boolean): void;
				public hasResult(): boolean;
				public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
				public static getDataSourceInstrumenter(): com.facebook.datasource.AbstractDataSource.DataSourceInstrumenter;
				public setExtras(extras: java.util.Map<string,any>): void;
				public getExtras(): java.util.Map<string,any>;
			}
			export module AbstractDataSource {
				export class DataSourceInstrumenter {
					public static class: java.lang.Class<com.facebook.datasource.AbstractDataSource.DataSourceInstrumenter>;
					/**
					 * Constructs a new instance of the com.facebook.datasource.AbstractDataSource$DataSourceInstrumenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						decorateRunnable(param0: java.lang.Runnable, param1: string): java.lang.Runnable;
					});
					public constructor();
					public decorateRunnable(param0: java.lang.Runnable, param1: string): java.lang.Runnable;
				}
				export class DataSourceStatus {
					public static class: java.lang.Class<com.facebook.datasource.AbstractDataSource.DataSourceStatus>;
					public static IN_PROGRESS: com.facebook.datasource.AbstractDataSource.DataSourceStatus;
					public static SUCCESS: com.facebook.datasource.AbstractDataSource.DataSourceStatus;
					public static FAILURE: com.facebook.datasource.AbstractDataSource.DataSourceStatus;
					public static valueOf(name: string): com.facebook.datasource.AbstractDataSource.DataSourceStatus;
					public static values(): androidNative.Array<com.facebook.datasource.AbstractDataSource.DataSourceStatus>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export abstract class BaseBooleanSubscriber extends com.facebook.datasource.DataSubscriber<java.lang.Boolean> {
				public static class: java.lang.Class<com.facebook.datasource.BaseBooleanSubscriber>;
				public onFailure(dataSource: com.facebook.datasource.DataSource<java.lang.Boolean>): void;
				public onFailure(param0: com.facebook.datasource.DataSource<any>): void;
				public onNewResult(param0: com.facebook.datasource.DataSource<any>): void;
				public onProgressUpdate(param0: com.facebook.datasource.DataSource<any>): void;
				public onFailureImpl(param0: com.facebook.datasource.DataSource<java.lang.Boolean>): void;
				public onCancellation(dataSource: com.facebook.datasource.DataSource<java.lang.Boolean>): void;
				public onProgressUpdate(dataSource: com.facebook.datasource.DataSource<java.lang.Boolean>): void;
				public onCancellation(param0: com.facebook.datasource.DataSource<any>): void;
				public onNewResult(dataSource: com.facebook.datasource.DataSource<java.lang.Boolean>): void;
				public onNewResultImpl(param0: boolean): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export abstract class BaseDataSubscriber<T>  extends com.facebook.datasource.DataSubscriber<any> {
				public static class: java.lang.Class<com.facebook.datasource.BaseDataSubscriber<any>>;
				public onCancellation(dataSource: com.facebook.datasource.DataSource<any>): void;
				public onFailure(param0: com.facebook.datasource.DataSource<any>): void;
				public onNewResult(param0: com.facebook.datasource.DataSource<any>): void;
				public onFailureImpl(param0: com.facebook.datasource.DataSource<any>): void;
				public onProgressUpdate(param0: com.facebook.datasource.DataSource<any>): void;
				public onFailure(dataSource: com.facebook.datasource.DataSource<any>): void;
				public onProgressUpdate(dataSource: com.facebook.datasource.DataSource<any>): void;
				public onNewResultImpl(param0: com.facebook.datasource.DataSource<any>): void;
				public onNewResult(dataSource: com.facebook.datasource.DataSource<any>): void;
				public onCancellation(param0: com.facebook.datasource.DataSource<any>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class DataSource<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.datasource.DataSource<any>>;
				/**
				 * Constructs a new instance of the com.facebook.datasource.DataSource<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isClosed(): boolean;
					getResult(): T;
					hasResult(): boolean;
					getExtras(): java.util.Map<string,any>;
					hasMultipleResults(): boolean;
					isFinished(): boolean;
					hasFailed(): boolean;
					getFailureCause(): java.lang.Throwable;
					getProgress(): number;
					close(): boolean;
					subscribe(param0: com.facebook.datasource.DataSubscriber<T>, param1: java.util.concurrent.Executor): void;
				});
				public constructor();
				public hasFailed(): boolean;
				public getFailureCause(): java.lang.Throwable;
				public getProgress(): number;
				public subscribe(param0: com.facebook.datasource.DataSubscriber<T>, param1: java.util.concurrent.Executor): void;
				public getResult(): T;
				public close(): boolean;
				public isClosed(): boolean;
				public hasResult(): boolean;
				public isFinished(): boolean;
				public hasMultipleResults(): boolean;
				public getExtras(): java.util.Map<string,any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class DataSources {
				public static class: java.lang.Class<com.facebook.datasource.DataSources>;
				public static waitForFinalResult(dataSource: com.facebook.datasource.DataSource<any>): any;
				public static immediateFailedDataSource(failure: java.lang.Throwable): com.facebook.datasource.DataSource<any>;
				public static immediateDataSource(result: any): com.facebook.datasource.DataSource<any>;
				public static waitForFinalResult(dataSource: com.facebook.datasource.DataSource<any>, timeout: number, unit: java.util.concurrent.TimeUnit): any;
				public static getFailedDataSourceSupplier(failure: java.lang.Throwable): com.facebook.common.internal.Supplier<any>;
				public static immediateSuccessfulDataSource(): com.facebook.datasource.DataSource<java.lang.Void>;
			}
			export module DataSources {
				export class ValueHolder<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.datasource.DataSources.ValueHolder<any>>;
					public value: T;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class DataSubscriber<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.datasource.DataSubscriber<any>>;
				/**
				 * Constructs a new instance of the com.facebook.datasource.DataSubscriber<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onNewResult(param0: com.facebook.datasource.DataSource<T>): void;
					onFailure(param0: com.facebook.datasource.DataSource<T>): void;
					onCancellation(param0: com.facebook.datasource.DataSource<T>): void;
					onProgressUpdate(param0: com.facebook.datasource.DataSource<T>): void;
				});
				public constructor();
				public onNewResult(param0: com.facebook.datasource.DataSource<T>): void;
				public onCancellation(param0: com.facebook.datasource.DataSource<T>): void;
				public onProgressUpdate(param0: com.facebook.datasource.DataSource<T>): void;
				public onFailure(param0: com.facebook.datasource.DataSource<T>): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class FirstAvailableDataSourceSupplier<T>  extends com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>> {
				public static class: java.lang.Class<com.facebook.datasource.FirstAvailableDataSourceSupplier<any>>;
				public equals(other: any): boolean;
				public hashCode(): number;
				public static create(dataSourceSuppliers: java.util.List<any>): com.facebook.datasource.FirstAvailableDataSourceSupplier<any>;
				public get(): any;
				public toString(): string;
				public get(): com.facebook.datasource.DataSource<any>;
			}
			export module FirstAvailableDataSourceSupplier {
				export class FirstAvailableDataSource extends com.facebook.datasource.AbstractDataSource<any> {
					public static class: java.lang.Class<com.facebook.datasource.FirstAvailableDataSourceSupplier.FirstAvailableDataSource>;
					public isFinished(): boolean;
					public close(): boolean;
					public getExtras(): java.util.Map<string,any>;
					public hasFailed(): boolean;
					public constructor(param0: com.facebook.datasource.FirstAvailableDataSourceSupplier<any>);
					public getProgress(): number;
					public hasMultipleResults(): boolean;
					public constructor();
					public hasResult(): boolean;
					public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
					public getFailureCause(): java.lang.Throwable;
					public getResult(): any;
					public isClosed(): boolean;
				}
				export module FirstAvailableDataSource {
					export class InternalDataSubscriber extends com.facebook.datasource.DataSubscriber<any> {
						public static class: java.lang.Class<com.facebook.datasource.FirstAvailableDataSourceSupplier.FirstAvailableDataSource.InternalDataSubscriber>;
						public onProgressUpdate(dataSource: com.facebook.datasource.DataSource<any>): void;
						public onNewResult(param0: com.facebook.datasource.DataSource<any>): void;
						public onCancellation(param0: com.facebook.datasource.DataSource<any>): void;
						public onFailure(param0: com.facebook.datasource.DataSource<any>): void;
						public onNewResult(dataSource: com.facebook.datasource.DataSource<any>): void;
						public onFailure(dataSource: com.facebook.datasource.DataSource<any>): void;
						public onCancellation(dataSource: com.facebook.datasource.DataSource<any>): void;
						public onProgressUpdate(param0: com.facebook.datasource.DataSource<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class IncreasingQualityDataSourceSupplier<T>  extends com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>> {
				public static class: java.lang.Class<com.facebook.datasource.IncreasingQualityDataSourceSupplier<any>>;
				public equals(other: any): boolean;
				public hashCode(): number;
				public get(): any;
				public static create(dataSourceSuppliers: java.util.List<any>, dataSourceLazy: boolean): com.facebook.datasource.IncreasingQualityDataSourceSupplier<any>;
				public toString(): string;
				public get(): com.facebook.datasource.DataSource<any>;
				public static create(dataSourceSuppliers: java.util.List<any>): com.facebook.datasource.IncreasingQualityDataSourceSupplier<any>;
			}
			export module IncreasingQualityDataSourceSupplier {
				export class IncreasingQualityDataSource extends com.facebook.datasource.AbstractDataSource<any> {
					public static class: java.lang.Class<com.facebook.datasource.IncreasingQualityDataSourceSupplier.IncreasingQualityDataSource>;
					public isFinished(): boolean;
					public close(): boolean;
					public getExtras(): java.util.Map<string,any>;
					public hasFailed(): boolean;
					public getProgress(): number;
					public hasMultipleResults(): boolean;
					public constructor();
					public hasResult(): boolean;
					public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
					public getFailureCause(): java.lang.Throwable;
					public getResult(): any;
					public constructor(param0: com.facebook.datasource.IncreasingQualityDataSourceSupplier<any>);
					public isClosed(): boolean;
				}
				export module IncreasingQualityDataSource {
					export class InternalDataSubscriber extends com.facebook.datasource.DataSubscriber<any> {
						public static class: java.lang.Class<com.facebook.datasource.IncreasingQualityDataSourceSupplier.IncreasingQualityDataSource.InternalDataSubscriber>;
						public onProgressUpdate(dataSource: com.facebook.datasource.DataSource<any>): void;
						public onNewResult(param0: com.facebook.datasource.DataSource<any>): void;
						public onCancellation(param0: com.facebook.datasource.DataSource<any>): void;
						public constructor(index: com.facebook.datasource.IncreasingQualityDataSourceSupplier.IncreasingQualityDataSource, param1: number);
						public onFailure(param0: com.facebook.datasource.DataSource<any>): void;
						public onNewResult(dataSource: com.facebook.datasource.DataSource<any>): void;
						public onFailure(dataSource: com.facebook.datasource.DataSource<any>): void;
						public onCancellation(dataSource: com.facebook.datasource.DataSource<any>): void;
						public onProgressUpdate(param0: com.facebook.datasource.DataSource<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class RetainingDataSourceSupplier<T>  extends com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>> {
				public static class: java.lang.Class<com.facebook.datasource.RetainingDataSourceSupplier<any>>;
				public replaceSupplier(this_: com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>): void;
				public get(): any;
				public get(): com.facebook.datasource.DataSource<any>;
				public constructor();
			}
			export module RetainingDataSourceSupplier {
				export class RetainingDataSource<T>  extends com.facebook.datasource.AbstractDataSource<any> {
					public static class: java.lang.Class<com.facebook.datasource.RetainingDataSourceSupplier.RetainingDataSource<any>>;
					public isFinished(): boolean;
					public getProgress(): number;
					public hasMultipleResults(): boolean;
					public hasResult(): boolean;
					public close(): boolean;
					public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
					public setSupplier(this_: com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>): void;
					public getFailureCause(): java.lang.Throwable;
					public getResult(): any;
					public getExtras(): java.util.Map<string,any>;
					public hasFailed(): boolean;
					public isClosed(): boolean;
				}
				export module RetainingDataSource {
					export class InternalDataSubscriber extends com.facebook.datasource.DataSubscriber<any> {
						public static class: java.lang.Class<com.facebook.datasource.RetainingDataSourceSupplier.RetainingDataSource.InternalDataSubscriber>;
						public onProgressUpdate(dataSource: com.facebook.datasource.DataSource<any>): void;
						public onNewResult(param0: com.facebook.datasource.DataSource<any>): void;
						public onCancellation(param0: com.facebook.datasource.DataSource<any>): void;
						public onFailure(param0: com.facebook.datasource.DataSource<any>): void;
						public onNewResult(dataSource: com.facebook.datasource.DataSource<any>): void;
						public onFailure(dataSource: com.facebook.datasource.DataSource<any>): void;
						public onCancellation(dataSource: com.facebook.datasource.DataSource<any>): void;
						public onProgressUpdate(param0: com.facebook.datasource.DataSource<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class SimpleDataSource<T>  extends com.facebook.datasource.AbstractDataSource<any> {
				public static class: java.lang.Class<com.facebook.datasource.SimpleDataSource<any>>;
				public getResult(): any;
				public static create(): com.facebook.datasource.SimpleDataSource<any>;
				public hasFailed(): boolean;
				public setResult(value: any, isLast: boolean): boolean;
				public setResult(value: any, isLast: boolean, extras: java.util.Map<string,any>): boolean;
				public close(): boolean;
				public setProgress(progress: number): boolean;
				public isClosed(): boolean;
				public isFinished(): boolean;
				public hasMultipleResults(): boolean;
				public setResult(value: any): boolean;
				public getFailureCause(): java.lang.Throwable;
				public getProgress(): number;
				public setFailure(throwable: java.lang.Throwable, extras: java.util.Map<string,any>): boolean;
				public setFailure(throwable: java.lang.Throwable): boolean;
				public hasResult(): boolean;
				public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
				public getExtras(): java.util.Map<string,any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class SuccessfulVoidDataSource extends com.facebook.datasource.AbstractDataSource<java.lang.Void> {
				public static class: java.lang.Class<com.facebook.datasource.SuccessfulVoidDataSource>;
				public static INSTANCE: com.facebook.datasource.SuccessfulVoidDataSource;
				public getResult(): any;
				public hasFailed(): boolean;
				public getFailureCause(): java.lang.Throwable;
				public getProgress(): number;
				public close(): boolean;
				public isClosed(): boolean;
				public hasResult(): boolean;
				public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
				public isFinished(): boolean;
				public hasMultipleResults(): boolean;
				public getExtras(): java.util.Map<string,any>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module memory {
			export module helper {
				export class HashCode {
					public static class: java.lang.Class<com.facebook.memory.helper.HashCode>;
					public static INSTANCE: com.facebook.memory.helper.HashCode;
					public static extend(current: number, obj: any): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module widget {
			export module text {
				export module span {
					export class BetterImageSpan {
						public static class: java.lang.Class<com.facebook.widget.text.span.BetterImageSpan>;
						public static ALIGN_BOTTOM: number = 0;
						public static ALIGN_BASELINE: number = 1;
						public static ALIGN_CENTER: number = 2;
						public mWidth: number;
						public mHeight: number;
						public getMargin(): globalAndroid.graphics.Rect;
						public getDrawable(): globalAndroid.graphics.drawable.Drawable;
						public getSize(paint: globalAndroid.graphics.Paint, text: string, start: number, end: number, fontMetrics: globalAndroid.graphics.Paint.FontMetricsInt): number;
						public static normalizeAlignment(alignment: number): number;
						public updateBounds(): void;
						public getVerticalAlignment(): number;
						public updateFontHeight(fontMetrics: globalAndroid.graphics.Paint.FontMetricsInt, offsetAbove: number, offsetBelow: number): void;
						public calculateLineWidthAndFontHeight(fontMetrics: globalAndroid.graphics.Paint.FontMetricsInt): number;
						public constructor(drawable: globalAndroid.graphics.drawable.Drawable, verticalAlignment: number, margin: globalAndroid.graphics.Rect);
						public getOffsetAboveBaseline(offset: number, this_: number): number;
						public constructor(drawable: globalAndroid.graphics.drawable.Drawable);
						public draw(canvas: globalAndroid.graphics.Canvas, text: string, start: number, end: number, x: number, top: number, y: number, bottom: number, paint: globalAndroid.graphics.Paint): void;
						public constructor(drawable: globalAndroid.graphics.drawable.Drawable, verticalAlignment: number);
						public getIconTop(baseline: number, ascent: number, descent: number, top: number, bottom: number): number;
					}
					export module BetterImageSpan {
						export class BetterImageSpanAlignment {
							public static class: java.lang.Class<com.facebook.widget.text.span.BetterImageSpan.BetterImageSpanAlignment>;
							/**
							 * Constructs a new instance of the com.facebook.widget.text.span.BetterImageSpan$BetterImageSpanAlignment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.facebook.common.closeables.AutoCleanupDelegate:1
//com.facebook.common.closeables.AutoCloseableDelegate:1
//com.facebook.common.executors.ScheduledFutureImpl:1
//com.facebook.common.executors.StatefulRunnable:1
//com.facebook.common.internal.Fn:2
//com.facebook.common.internal.ImmutableList:1
//com.facebook.common.internal.ImmutableMap:2
//com.facebook.common.internal.ImmutableSet:1
//com.facebook.common.internal.Predicate:1
//com.facebook.common.internal.Supplier:1
//com.facebook.common.memory.Pool:1
//com.facebook.common.references.CloseableReference:1
//com.facebook.common.references.DefaultCloseableReference:1
//com.facebook.common.references.FinalizerCloseableReference:1
//com.facebook.common.references.NoOpCloseableReference:1
//com.facebook.common.references.OOMSoftReference:1
//com.facebook.common.references.RefCountCloseableReference:1
//com.facebook.common.references.ResourceReleaser:1
//com.facebook.common.references.SharedReference:1
//com.facebook.datasource.AbstractDataSource:1
//com.facebook.datasource.BaseDataSubscriber:1
//com.facebook.datasource.DataSource:1
//com.facebook.datasource.DataSources.ValueHolder:1
//com.facebook.datasource.DataSubscriber:1
//com.facebook.datasource.FirstAvailableDataSourceSupplier:1
//com.facebook.datasource.IncreasingQualityDataSourceSupplier:1
//com.facebook.datasource.RetainingDataSourceSupplier:1
//com.facebook.datasource.RetainingDataSourceSupplier.RetainingDataSource:1
//com.facebook.datasource.SimpleDataSource:1



declare namespace com {
	export namespace facebook {
		export namespace binaryresource {
			export class BinaryResource {
				public static class: java.lang.Class<com.facebook.binaryresource.BinaryResource>;
				/**
				 * Constructs a new instance of the com.facebook.binaryresource.BinaryResource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					openStream(): java.io.InputStream;
					read(): androidNative.Array<number>;
					size(): number;
				});
				public constructor();
				public read(): androidNative.Array<number>;
				public openStream(): java.io.InputStream;
				public size(): number;
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace binaryresource {
			export class ByteArrayBinaryResource extends com.facebook.binaryresource.BinaryResource {
				public static class: java.lang.Class<com.facebook.binaryresource.ByteArrayBinaryResource>;
				public constructor(bytes: androidNative.Array<number>);
				public read(): androidNative.Array<number>;
				public openStream(): java.io.InputStream;
				public size(): number;
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace binaryresource {
			export class FileBinaryResource extends com.facebook.binaryresource.BinaryResource {
				public static class: java.lang.Class<com.facebook.binaryresource.FileBinaryResource>;
				public equals(other: any): boolean;
				public static create(file: java.io.File): com.facebook.binaryresource.FileBinaryResource;
				public hashCode(): number;
				public static createOrNull(file: java.io.File): com.facebook.binaryresource.FileBinaryResource;
				public read(): androidNative.Array<number>;
				public getFile(): java.io.File;
				public openStream(): java.io.InputStream;
				public size(): number;
			}
			export namespace FileBinaryResource {
				export class Companion {
					public static class: java.lang.Class<com.facebook.binaryresource.FileBinaryResource.Companion>;
					public createOrNull(it: java.io.File): com.facebook.binaryresource.FileBinaryResource;
					public create(file: java.io.File): com.facebook.binaryresource.FileBinaryResource;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class BaseCacheEventListener extends com.facebook.cache.common.CacheEventListener {
					public static class: java.lang.Class<com.facebook.cache.common.BaseCacheEventListener>;
					public onWriteAttempt(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteAttempt(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public onHit(param0: com.facebook.cache.common.CacheEvent): void;
					public onMiss(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public onEviction(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public onHit(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public onReadException(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteSuccess(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteException(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public constructor();
					public onCleared(): void;
					public onReadException(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public onWriteSuccess(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public onMiss(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteException(param0: com.facebook.cache.common.CacheEvent): void;
					public onEviction(param0: com.facebook.cache.common.CacheEvent): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class CacheErrorLogger {
					public static class: java.lang.Class<com.facebook.cache.common.CacheErrorLogger>;
					/**
					 * Constructs a new instance of the com.facebook.cache.common.CacheErrorLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						logError(param0: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory, param1: java.lang.Class<any>, param2: string, param3: java.lang.Throwable): void;
					});
					public constructor();
					public logError(param0: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory, param1: java.lang.Class<any>, param2: string, param3: java.lang.Throwable): void;
				}
				export namespace CacheErrorLogger {
					export class CacheErrorCategory {
						public static class: java.lang.Class<com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory>;
						public static READ_DECODE: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static READ_FILE: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static READ_FILE_NOT_FOUND: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static READ_INVALID_ENTRY: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_ENCODE: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_CREATE_TEMPFILE: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_UPDATE_FILE_NOT_FOUND: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_RENAME_FILE_TEMPFILE_NOT_FOUND: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_RENAME_FILE_TEMPFILE_PARENT_NOT_FOUND: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_RENAME_FILE_OTHER: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_CREATE_DIR: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_CALLBACK_ERROR: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_INVALID_ENTRY: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static DELETE_FILE: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static EVICTION: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static GENERIC_IO: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static OTHER: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static values(): androidNative.Array<com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory>;
						public static valueOf(name: string): com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class CacheEvent {
					public static class: java.lang.Class<com.facebook.cache.common.CacheEvent>;
					/**
					 * Constructs a new instance of the com.facebook.cache.common.CacheEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCacheKey(): com.facebook.cache.common.CacheKey;
						getResourceId(): string;
						getItemSize(): number;
						getCacheSize(): number;
						getCacheLimit(): number;
						getException(): java.io.IOException;
						getEvictionReason(): com.facebook.cache.common.CacheEventListener.EvictionReason;
					});
					public constructor();
					public getCacheLimit(): number;
					public getCacheKey(): com.facebook.cache.common.CacheKey;
					public getItemSize(): number;
					public getCacheSize(): number;
					public getException(): java.io.IOException;
					public getResourceId(): string;
					public getEvictionReason(): com.facebook.cache.common.CacheEventListener.EvictionReason;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class CacheEventListener {
					public static class: java.lang.Class<com.facebook.cache.common.CacheEventListener>;
					/**
					 * Constructs a new instance of the com.facebook.cache.common.CacheEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHit(param0: com.facebook.cache.common.CacheEvent): void;
						onMiss(param0: com.facebook.cache.common.CacheEvent): void;
						onWriteAttempt(param0: com.facebook.cache.common.CacheEvent): void;
						onWriteSuccess(param0: com.facebook.cache.common.CacheEvent): void;
						onReadException(param0: com.facebook.cache.common.CacheEvent): void;
						onWriteException(param0: com.facebook.cache.common.CacheEvent): void;
						onEviction(param0: com.facebook.cache.common.CacheEvent): void;
						onCleared(): void;
					});
					public constructor();
					public onWriteAttempt(param0: com.facebook.cache.common.CacheEvent): void;
					public onHit(param0: com.facebook.cache.common.CacheEvent): void;
					public onCleared(): void;
					public onMiss(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteException(param0: com.facebook.cache.common.CacheEvent): void;
					public onEviction(param0: com.facebook.cache.common.CacheEvent): void;
					public onReadException(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteSuccess(param0: com.facebook.cache.common.CacheEvent): void;
				}
				export namespace CacheEventListener {
					export class EvictionReason {
						public static class: java.lang.Class<com.facebook.cache.common.CacheEventListener.EvictionReason>;
						public static CACHE_FULL: com.facebook.cache.common.CacheEventListener.EvictionReason;
						public static CONTENT_STALE: com.facebook.cache.common.CacheEventListener.EvictionReason;
						public static USER_FORCED: com.facebook.cache.common.CacheEventListener.EvictionReason;
						public static CACHE_MANAGER_TRIMMED: com.facebook.cache.common.CacheEventListener.EvictionReason;
						public static TRIM_EXPIRED: com.facebook.cache.common.CacheEventListener.EvictionReason;
						public static values(): androidNative.Array<com.facebook.cache.common.CacheEventListener.EvictionReason>;
						public static valueOf(name: string): com.facebook.cache.common.CacheEventListener.EvictionReason;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class CacheKey {
					public static class: java.lang.Class<com.facebook.cache.common.CacheKey>;
					/**
					 * Constructs a new instance of the com.facebook.cache.common.CacheKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						toString(): string;
						equals(param0: any): boolean;
						hashCode(): number;
						containsUri(param0: globalAndroid.net.Uri): boolean;
						getUriString(): string;
						isResourceIdForDebugging(): boolean;
					});
					public constructor();
					public equals(param0: any): boolean;
					public getUriString(): string;
					public isResourceIdForDebugging(): boolean;
					public toString(): string;
					public containsUri(param0: globalAndroid.net.Uri): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class CacheKeyUtil {
					public static class: java.lang.Class<com.facebook.cache.common.CacheKeyUtil>;
					public static INSTANCE: com.facebook.cache.common.CacheKeyUtil;
					public static getResourceIds(i: com.facebook.cache.common.CacheKey): java.util.List<string>;
					public static getFirstResourceId(keys: com.facebook.cache.common.CacheKey): string;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class DebuggingCacheKey extends com.facebook.cache.common.SimpleCacheKey {
					public static class: java.lang.Class<com.facebook.cache.common.DebuggingCacheKey>;
					public constructor(key: string);
					public equals(param0: any): boolean;
					public getUriString(): string;
					public isResourceIdForDebugging(): boolean;
					public toString(): string;
					public constructor(key: string, callerContext: any, sourceUri: globalAndroid.net.Uri);
					public containsUri(param0: globalAndroid.net.Uri): boolean;
					public constructor(key: string, isResourceIdForDebugging: boolean);
					public getCallerContext(): any;
					public hashCode(): number;
					public getSourceUri(): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class HasDebugData {
					public static class: java.lang.Class<com.facebook.cache.common.HasDebugData>;
					/**
					 * Constructs a new instance of the com.facebook.cache.common.HasDebugData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDebugData(): string;
					});
					public constructor();
					public getDebugData(): string;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class MultiCacheKey extends com.facebook.cache.common.CacheKey {
					public static class: java.lang.Class<com.facebook.cache.common.MultiCacheKey>;
					public equals(param0: any): boolean;
					public getUriString(): string;
					public isResourceIdForDebugging(): boolean;
					public toString(): string;
					public equals(this_: any): boolean;
					public containsUri(param0: globalAndroid.net.Uri): boolean;
					public constructor(cacheKeys: java.util.List<com.facebook.cache.common.CacheKey>);
					public getCacheKeys(): java.util.List<com.facebook.cache.common.CacheKey>;
					public hashCode(): number;
					public containsUri(this_: globalAndroid.net.Uri): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class NoOpCacheErrorLogger extends com.facebook.cache.common.CacheErrorLogger {
					public static class: java.lang.Class<com.facebook.cache.common.NoOpCacheErrorLogger>;
					public logError(param0: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory, param1: java.lang.Class<any>, param2: string, param3: java.lang.Throwable): void;
					public logError(category: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory, clazz: java.lang.Class<any>, message: string, throwable: java.lang.Throwable): void;
					public static getInstance(): com.facebook.cache.common.NoOpCacheErrorLogger;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class NoOpCacheEventListener extends com.facebook.cache.common.CacheEventListener {
					public static class: java.lang.Class<com.facebook.cache.common.NoOpCacheEventListener>;
					public onWriteAttempt(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteAttempt(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public onHit(param0: com.facebook.cache.common.CacheEvent): void;
					public onMiss(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public onEviction(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public onHit(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public onReadException(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteSuccess(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteException(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public static getInstance(): com.facebook.cache.common.NoOpCacheEventListener;
					public onCleared(): void;
					public onReadException(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public onWriteSuccess(cacheEvent: com.facebook.cache.common.CacheEvent): void;
					public onMiss(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteException(param0: com.facebook.cache.common.CacheEvent): void;
					public onEviction(param0: com.facebook.cache.common.CacheEvent): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class SimpleCacheKey extends com.facebook.cache.common.CacheKey {
					public static class: java.lang.Class<com.facebook.cache.common.SimpleCacheKey>;
					public constructor(key: string);
					public equals(param0: any): boolean;
					public getUriString(): string;
					public isResourceIdForDebugging(): boolean;
					public toString(): string;
					public containsUri(uri: globalAndroid.net.Uri): boolean;
					public equals(this_: any): boolean;
					public containsUri(param0: globalAndroid.net.Uri): boolean;
					public constructor(key: string, isResourceIdForDebugging: boolean);
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class WriterCallback {
					public static class: java.lang.Class<com.facebook.cache.common.WriterCallback>;
					/**
					 * Constructs a new instance of the com.facebook.cache.common.WriterCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						write(param0: java.io.OutputStream): void;
					});
					public constructor();
					public write(param0: java.io.OutputStream): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace common {
				export class WriterCallbacks {
					public static class: java.lang.Class<com.facebook.cache.common.WriterCallbacks>;
					public constructor();
					public static from(data: androidNative.Array<number>): com.facebook.cache.common.WriterCallback;
					public static from(is: java.io.InputStream): com.facebook.cache.common.WriterCallback;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace disk {
				export class DefaultDiskStorage extends com.facebook.cache.disk.DiskStorage {
					public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage>;
					public constructor(rootDirectory: java.io.File, version: number, cacheErrorLogger: com.facebook.cache.common.CacheErrorLogger);
					public remove(entry: com.facebook.cache.disk.DiskStorage.Entry): number;
					public getStorageName(): string;
					public purgeUnexpectedResources(): void;
					public getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
					public insert(param0: string, param1: any): com.facebook.cache.disk.DiskStorage.Inserter;
					public remove(param0: com.facebook.cache.disk.DiskStorage.Entry): number;
					public remove(resourceId: string): number;
					public getResource(param0: string, param1: any): com.facebook.binaryresource.BinaryResource;
					public contains(param0: string, param1: any): boolean;
					public isExternal(): boolean;
					public touch(param0: string, param1: any): boolean;
					public contains(resourceId: string, debugInfo: any): boolean;
					public touch(resourceId: string, debugInfo: any): boolean;
					public getEntries(): java.util.Collection<com.facebook.cache.disk.DiskStorage.Entry>;
					public remove(param0: string): number;
					public getResource(resourceId: string, debugInfo: any): com.facebook.binaryresource.BinaryResource;
					public clearAll(): void;
					public isEnabled(): boolean;
					public getEntries(): java.util.List<com.facebook.cache.disk.DiskStorage.Entry>;
					public insert(ioe: string, this_: any): com.facebook.cache.disk.DiskStorage.Inserter;
				}
				export namespace DefaultDiskStorage {
					export class EntriesCollector {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.EntriesCollector>;
						public getEntries(): java.util.List<com.facebook.cache.disk.DiskStorage.Entry>;
						public postVisitDirectory(directory: java.io.File): void;
						public visitFile(file: java.io.File): void;
						public preVisitDirectory(directory: java.io.File): void;
					}
					export class EntryImpl extends com.facebook.cache.disk.DiskStorage.Entry {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.EntryImpl>;
						public getSize(): number;
						public getTimestamp(): number;
						public getResource(): com.facebook.binaryresource.BinaryResource;
						public getId(): string;
						public getResource(): com.facebook.binaryresource.FileBinaryResource;
					}
					export class FileInfo {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.FileInfo>;
						public type: string;
						public resourceId: string;
						public createTempFile(parent: java.io.File): java.io.File;
						public static fromFile(numPos: java.io.File): com.facebook.cache.disk.DefaultDiskStorage.FileInfo;
						public toPath(parentPath: string): string;
						public toString(): string;
					}
					export class FileType {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.FileType>;
						/**
						 * Constructs a new instance of the com.facebook.cache.disk.DefaultDiskStorage$FileType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static TEMP: string; // ".tmp"
						public static CONTENT: string; // ".cnt"
					}
					export class IncompleteFileException {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.IncompleteFileException>;
						public constructor(expected: number, actual: number);
					}
					export class InserterImpl extends com.facebook.cache.disk.DiskStorage.Inserter {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.InserterImpl>;
						public writeData(fne: com.facebook.cache.common.WriterCallback, countingStream: any): void;
						public commit(debugInfo: any): com.facebook.binaryresource.BinaryResource;
						public commit(param0: any): com.facebook.binaryresource.BinaryResource;
						public commit(category: any, category: number): com.facebook.binaryresource.BinaryResource;
						public constructor(this$0: com.facebook.cache.disk.DefaultDiskStorage, resourceId: string, temporaryFile: java.io.File);
						public writeData(param0: com.facebook.cache.common.WriterCallback, param1: any): void;
						public cleanUp(): boolean;
						public commit(param0: any, param1: number): com.facebook.binaryresource.BinaryResource;
					}
					export class PurgingVisitor {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.PurgingVisitor>;
						public postVisitDirectory(directory: java.io.File): void;
						public visitFile(file: java.io.File): void;
						public preVisitDirectory(directory: java.io.File): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace disk {
				export class DefaultEntryEvictionComparatorSupplier extends com.facebook.cache.disk.EntryEvictionComparatorSupplier {
					public static class: java.lang.Class<com.facebook.cache.disk.DefaultEntryEvictionComparatorSupplier>;
					public constructor();
					public get(): com.facebook.cache.disk.EntryEvictionComparator;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace disk {
				export class DiskCacheConfig {
					public static class: java.lang.Class<com.facebook.cache.disk.DiskCacheConfig>;
					public getIndexPopulateAtStartupEnabled(): boolean;
					public getVersion(): number;
					public getMinimumSizeLimit(): number;
					public getCacheErrorLogger(): com.facebook.cache.common.CacheErrorLogger;
					public getEntryEvictionComparatorSupplier(): com.facebook.cache.disk.EntryEvictionComparatorSupplier;
					public constructor(builder: com.facebook.cache.disk.DiskCacheConfig.Builder);
					public getBaseDirectoryPathSupplier(): com.facebook.common.internal.Supplier<java.io.File>;
					public getDefaultSizeLimit(): number;
					public getLowDiskSpaceSizeLimit(): number;
					public getCacheEventListener(): com.facebook.cache.common.CacheEventListener;
					public static newBuilder(context: globalAndroid.content.Context): com.facebook.cache.disk.DiskCacheConfig.Builder;
					public getDiskTrimmableRegistry(): com.facebook.common.disk.DiskTrimmableRegistry;
					public getBaseDirectoryName(): string;
					public getContext(): globalAndroid.content.Context;
				}
				export namespace DiskCacheConfig {
					export class Builder {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskCacheConfig.Builder>;
						public setMaxCacheSize(maxCacheSize: number): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setMaxCacheSizeOnLowDiskSpace(maxCacheSizeOnLowDiskSpace: number): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setCacheEventListener(cacheEventListener: com.facebook.cache.common.CacheEventListener): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setEntryEvictionComparatorSupplier(supplier: com.facebook.cache.disk.EntryEvictionComparatorSupplier): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setBaseDirectoryPath(baseDirectoryPath: java.io.File): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public build(): com.facebook.cache.disk.DiskCacheConfig;
						public setVersion(version: number): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setBaseDirectoryName(baseDirectoryName: string): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setCacheErrorLogger(cacheErrorLogger: com.facebook.cache.common.CacheErrorLogger): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setDiskTrimmableRegistry(diskTrimmableRegistry: com.facebook.common.disk.DiskTrimmableRegistry): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setBaseDirectoryPathSupplier(baseDirectoryPathSupplier: com.facebook.common.internal.Supplier<java.io.File>): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setMaxCacheSizeOnVeryLowDiskSpace(maxCacheSizeOnVeryLowDiskSpace: number): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setIndexPopulateAtStartupEnabled(indexEnabled: boolean): com.facebook.cache.disk.DiskCacheConfig.Builder;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace disk {
				export class DiskStorage {
					public static class: java.lang.Class<com.facebook.cache.disk.DiskStorage>;
					/**
					 * Constructs a new instance of the com.facebook.cache.disk.DiskStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isEnabled(): boolean;
						isExternal(): boolean;
						getResource(param0: string, param1: any): com.facebook.binaryresource.BinaryResource;
						contains(param0: string, param1: any): boolean;
						touch(param0: string, param1: any): boolean;
						purgeUnexpectedResources(): void;
						insert(param0: string, param1: any): com.facebook.cache.disk.DiskStorage.Inserter;
						getEntries(): java.util.Collection<com.facebook.cache.disk.DiskStorage.Entry>;
						remove(param0: com.facebook.cache.disk.DiskStorage.Entry): number;
						remove(param0: string): number;
						clearAll(): void;
						getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
						getStorageName(): string;
					});
					public constructor();
					public purgeUnexpectedResources(): void;
					public insert(param0: string, param1: any): com.facebook.cache.disk.DiskStorage.Inserter;
					public getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
					public getStorageName(): string;
					public remove(param0: com.facebook.cache.disk.DiskStorage.Entry): number;
					public getResource(param0: string, param1: any): com.facebook.binaryresource.BinaryResource;
					public contains(param0: string, param1: any): boolean;
					public isExternal(): boolean;
					public touch(param0: string, param1: any): boolean;
					public getEntries(): java.util.Collection<com.facebook.cache.disk.DiskStorage.Entry>;
					public remove(param0: string): number;
					public clearAll(): void;
					public isEnabled(): boolean;
				}
				export namespace DiskStorage {
					export class DiskDumpInfo {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskStorage.DiskDumpInfo>;
						public entries: java.util.List<com.facebook.cache.disk.DiskStorage.DiskDumpInfoEntry>;
						public typeCounts: java.util.Map<string,java.lang.Integer>;
						public constructor();
					}
					export class DiskDumpInfoEntry {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskStorage.DiskDumpInfoEntry>;
						public id: string;
						public path: string;
						public type: string;
						public size: number;
						public firstBits: string;
						public constructor(id: string, path: string, type: string, size: number, firstBits: string);
					}
					export class Entry {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskStorage.Entry>;
						/**
						 * Constructs a new instance of the com.facebook.cache.disk.DiskStorage$Entry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getId(): string;
							getTimestamp(): number;
							getSize(): number;
							getResource(): com.facebook.binaryresource.BinaryResource;
						});
						public constructor();
						public getSize(): number;
						public getTimestamp(): number;
						public getResource(): com.facebook.binaryresource.BinaryResource;
						public getId(): string;
					}
					export class Inserter {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskStorage.Inserter>;
						/**
						 * Constructs a new instance of the com.facebook.cache.disk.DiskStorage$Inserter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							writeData(param0: com.facebook.cache.common.WriterCallback, param1: any): void;
							commit(param0: any): com.facebook.binaryresource.BinaryResource;
							commit(param0: any, param1: number): com.facebook.binaryresource.BinaryResource;
							cleanUp(): boolean;
						});
						public constructor();
						public commit(param0: any): com.facebook.binaryresource.BinaryResource;
						public writeData(param0: com.facebook.cache.common.WriterCallback, param1: any): void;
						public cleanUp(): boolean;
						public commit(param0: any, param1: number): com.facebook.binaryresource.BinaryResource;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace disk {
				export class DiskStorageCache extends com.facebook.cache.disk.FileCache {
					public static class: java.lang.Class<com.facebook.cache.disk.DiskStorageCache>;
					public static START_OF_VERSIONING: number; // 1
					public hasKey(param0: com.facebook.cache.common.CacheKey): boolean;
					public awaitIndex(): void;
					public isIndexReady(): boolean;
					public getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
					public getCount(): number;
					public probe(param0: com.facebook.cache.common.CacheKey): boolean;
					public probe(resourceIds: com.facebook.cache.common.CacheKey): boolean;
					public insert(resource: com.facebook.cache.common.CacheKey, inserter: com.facebook.cache.common.WriterCallback): com.facebook.binaryresource.BinaryResource;
					public trimToNothing(): void;
					public hasKeySync(param0: com.facebook.cache.common.CacheKey): boolean;
					public getSize(): number;
					public remove(param0: com.facebook.cache.common.CacheKey): void;
					public clearOldEntries(entryRemovedSize: number): number;
					public trimToMinimum(): void;
					public getResource(resource: com.facebook.cache.common.CacheKey): com.facebook.binaryresource.BinaryResource;
					public getResource(param0: com.facebook.cache.common.CacheKey): com.facebook.binaryresource.BinaryResource;
					public insert(param0: com.facebook.cache.common.CacheKey, param1: com.facebook.cache.common.WriterCallback): com.facebook.binaryresource.BinaryResource;
					public hasKeySync(resourceId: com.facebook.cache.common.CacheKey): boolean;
					public clearOldEntries(param0: number): number;
					public constructor(diskStorage: com.facebook.cache.disk.DiskStorage, entryEvictionComparatorSupplier: com.facebook.cache.disk.EntryEvictionComparatorSupplier, params: com.facebook.cache.disk.DiskStorageCache.Params, cacheEventListener: com.facebook.cache.common.CacheEventListener, cacheErrorLogger: com.facebook.cache.common.CacheErrorLogger, diskTrimmableRegistry: com.facebook.common.disk.DiskTrimmableRegistry, executorForBackgrountInit: java.util.concurrent.Executor, indexPopulateAtStartupEnabled: boolean);
					public remove(resourceId: com.facebook.cache.common.CacheKey): void;
					public clearAll(): void;
					public isEnabled(): boolean;
					public hasKey(resourceId: com.facebook.cache.common.CacheKey): boolean;
				}
				export namespace DiskStorageCache {
					export class CacheStats {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskStorageCache.CacheStats>;
						public getSize(): number;
						public increment(sizeIncrement: number, countIncrement: number): void;
						public getCount(): number;
						public set(size: number, count: number): void;
						public reset(): void;
						public isInitialized(): boolean;
					}
					export class Params {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskStorageCache.Params>;
						public mCacheSizeLimitMinimum: number;
						public mLowDiskSpaceCacheSizeLimit: number;
						public mDefaultCacheSizeLimit: number;
						public constructor(cacheSizeLimitMinimum: number, lowDiskSpaceCacheSizeLimit: number, defaultCacheSizeLimit: number);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace disk {
				export class DynamicDefaultDiskStorage extends com.facebook.cache.disk.DiskStorage {
					public static class: java.lang.Class<com.facebook.cache.disk.DynamicDefaultDiskStorage>;
					public remove(entry: com.facebook.cache.disk.DiskStorage.Entry): number;
					public getStorageName(): string;
					public purgeUnexpectedResources(): void;
					public getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
					public insert(param0: string, param1: any): com.facebook.cache.disk.DiskStorage.Inserter;
					public constructor(version: number, baseDirectoryPathSupplier: com.facebook.common.internal.Supplier<java.io.File>, baseDirectoryName: string, cacheErrorLogger: com.facebook.cache.common.CacheErrorLogger);
					public remove(param0: com.facebook.cache.disk.DiskStorage.Entry): number;
					public remove(resourceId: string): number;
					public getResource(param0: string, param1: any): com.facebook.binaryresource.BinaryResource;
					public contains(param0: string, param1: any): boolean;
					public isExternal(): boolean;
					public touch(param0: string, param1: any): boolean;
					public contains(resourceId: string, debugInfo: any): boolean;
					public touch(resourceId: string, debugInfo: any): boolean;
					public getEntries(): java.util.Collection<com.facebook.cache.disk.DiskStorage.Entry>;
					public remove(param0: string): number;
					public getResource(resourceId: string, debugInfo: any): com.facebook.binaryresource.BinaryResource;
					public insert(resourceId: string, debugInfo: any): com.facebook.cache.disk.DiskStorage.Inserter;
					public clearAll(): void;
					public isEnabled(): boolean;
				}
				export namespace DynamicDefaultDiskStorage {
					export class State {
						public static class: java.lang.Class<com.facebook.cache.disk.DynamicDefaultDiskStorage.State>;
						public delegate: com.facebook.cache.disk.DiskStorage;
						public rootDirectory: java.io.File;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace disk {
				export class EntryEvictionComparator extends java.util.Comparator<com.facebook.cache.disk.DiskStorage.Entry> {
					public static class: java.lang.Class<com.facebook.cache.disk.EntryEvictionComparator>;
					/**
					 * Constructs a new instance of the com.facebook.cache.disk.EntryEvictionComparator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export namespace facebook {
		export namespace cache {
			export namespace disk {
				export class EntryEvictionComparatorSupplier {
					public static class: java.lang.Class<com.facebook.cache.disk.EntryEvictionComparatorSupplier>;
					/**
					 * Constructs a new instance of the com.facebook.cache.disk.EntryEvictionComparatorSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(): com.facebook.cache.disk.EntryEvictionComparator;
					});
					public constructor();
					public get(): com.facebook.cache.disk.EntryEvictionComparator;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace disk {
				export class FileCache {
					public static class: java.lang.Class<com.facebook.cache.disk.FileCache>;
					/**
					 * Constructs a new instance of the com.facebook.cache.disk.FileCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isEnabled(): boolean;
						getResource(param0: com.facebook.cache.common.CacheKey): com.facebook.binaryresource.BinaryResource;
						hasKeySync(param0: com.facebook.cache.common.CacheKey): boolean;
						hasKey(param0: com.facebook.cache.common.CacheKey): boolean;
						probe(param0: com.facebook.cache.common.CacheKey): boolean;
						insert(param0: com.facebook.cache.common.CacheKey, param1: com.facebook.cache.common.WriterCallback): com.facebook.binaryresource.BinaryResource;
						remove(param0: com.facebook.cache.common.CacheKey): void;
						getSize(): number;
						getCount(): number;
						clearOldEntries(param0: number): number;
						clearAll(): void;
						getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
					});
					public constructor();
					public hasKey(param0: com.facebook.cache.common.CacheKey): boolean;
					public getResource(param0: com.facebook.cache.common.CacheKey): com.facebook.binaryresource.BinaryResource;
					public insert(param0: com.facebook.cache.common.CacheKey, param1: com.facebook.cache.common.WriterCallback): com.facebook.binaryresource.BinaryResource;
					public getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
					public probe(param0: com.facebook.cache.common.CacheKey): boolean;
					public getCount(): number;
					public clearOldEntries(param0: number): number;
					public clearAll(): void;
					public isEnabled(): boolean;
					public hasKeySync(param0: com.facebook.cache.common.CacheKey): boolean;
					public getSize(): number;
					public remove(param0: com.facebook.cache.common.CacheKey): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace disk {
				export class ScoreBasedEvictionComparatorSupplier extends com.facebook.cache.disk.EntryEvictionComparatorSupplier {
					public static class: java.lang.Class<com.facebook.cache.disk.ScoreBasedEvictionComparatorSupplier>;
					public get(): com.facebook.cache.disk.EntryEvictionComparator;
					public constructor(ageWeight: number, sizeWeight: number);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace cache {
			export namespace disk {
				export class SettableCacheEvent extends com.facebook.cache.common.CacheEvent {
					public static class: java.lang.Class<com.facebook.cache.disk.SettableCacheEvent>;
					public getCacheLimit(): number;
					public getItemSize(): number;
					public getCacheSize(): number;
					public getResourceId(): string;
					public setItemSize(itemSize: number): com.facebook.cache.disk.SettableCacheEvent;
					public recycle(): void;
					public setCacheLimit(cacheLimit: number): com.facebook.cache.disk.SettableCacheEvent;
					public setCacheSize(cacheSize: number): com.facebook.cache.disk.SettableCacheEvent;
					public getEvictionReason(): com.facebook.cache.common.CacheEventListener.EvictionReason;
					public setEvictionReason(evictionReason: com.facebook.cache.common.CacheEventListener.EvictionReason): com.facebook.cache.disk.SettableCacheEvent;
					public static obtain(): com.facebook.cache.disk.SettableCacheEvent;
					public getCacheKey(): com.facebook.cache.common.CacheKey;
					public getException(): java.io.IOException;
					public setResourceId(resourceId: string): com.facebook.cache.disk.SettableCacheEvent;
					public setCacheKey(cacheKey: com.facebook.cache.common.CacheKey): com.facebook.cache.disk.SettableCacheEvent;
					public setException(exception: java.io.IOException): com.facebook.cache.disk.SettableCacheEvent;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace callercontext {
			export class CallerContextVerifier {
				public static class: java.lang.Class<com.facebook.callercontext.CallerContextVerifier>;
				/**
				 * Constructs a new instance of the com.facebook.callercontext.CallerContextVerifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					verifyCallerContext(param0: any, param1: boolean): void;
				});
				public constructor();
				public verifyCallerContext(param0: any, param1: boolean): void;
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawable {
			export namespace base {
				export class DrawableWithCaches {
					public static class: java.lang.Class<com.facebook.drawable.base.DrawableWithCaches>;
					/**
					 * Constructs a new instance of the com.facebook.drawable.base.DrawableWithCaches interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						dropCaches(): void;
					});
					public constructor();
					public dropCaches(): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export class DefaultDrawableFactory extends com.facebook.imagepipeline.drawable.DrawableFactory {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.DefaultDrawableFactory>;
						public createDrawable(bitmapDrawable: com.facebook.imagepipeline.image.CloseableImage): globalAndroid.graphics.drawable.Drawable;
						public constructor(resources: globalAndroid.content.res.Resources, animatedDrawableFactory: com.facebook.imagepipeline.drawable.DrawableFactory);
						public supportsImageType(param0: com.facebook.imagepipeline.image.CloseableImage): boolean;
						public createDrawable(param0: com.facebook.imagepipeline.image.CloseableImage): globalAndroid.graphics.drawable.Drawable;
						public supportsImageType(image: com.facebook.imagepipeline.image.CloseableImage): boolean;
						public constructor(resources: globalAndroid.content.res.Resources, animatedDrawableFactory: com.facebook.imagepipeline.drawable.DrawableFactory, xmlDrawableFactory: com.facebook.imagepipeline.drawable.DrawableFactory);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export class DraweeConfig {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.DraweeConfig>;
						public getDebugOverlayEnabledSupplier(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
						public getCustomDrawableFactories(): com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>;
						public getImagePerfDataListener(): com.facebook.fresco.ui.common.ImagePerfDataListener;
						public static newBuilder(): com.facebook.drawee.backends.pipeline.DraweeConfig.Builder;
						public getPipelineDraweeControllerFactory(): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerFactory;
					}
					export namespace DraweeConfig {
						export class Builder {
							public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.DraweeConfig.Builder>;
							public constructor();
							public setPipelineDraweeControllerFactory(factory: com.facebook.drawee.backends.pipeline.PipelineDraweeControllerFactory): com.facebook.drawee.backends.pipeline.DraweeConfig.Builder;
							public build(): com.facebook.drawee.backends.pipeline.DraweeConfig;
							public setDrawDebugOverlay(drawDebugOverlay: boolean): com.facebook.drawee.backends.pipeline.DraweeConfig.Builder;
							public addCustomDrawableFactory(factory: com.facebook.imagepipeline.drawable.DrawableFactory): com.facebook.drawee.backends.pipeline.DraweeConfig.Builder;
							public setDebugOverlayEnabledSupplier(debugOverlayEnabledSupplier: com.facebook.common.internal.Supplier<java.lang.Boolean>): com.facebook.drawee.backends.pipeline.DraweeConfig.Builder;
							public setImagePerfDataListener(imagePerfDataListener: com.facebook.fresco.ui.common.ImagePerfDataListener): com.facebook.drawee.backends.pipeline.DraweeConfig.Builder;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export class Fresco {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.Fresco>;
						public static newDraweeControllerBuilder(): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public static getImagePipelineFactory(): com.facebook.imagepipeline.core.ImagePipelineFactory;
						public static shutDown(): void;
						public static initialize(context: globalAndroid.content.Context, imagePipelineConfig: com.facebook.imagepipeline.core.ImagePipelineConfig): void;
						public static hasBeenInitialized(): boolean;
						public static initialize(context: globalAndroid.content.Context): void;
						public static initialize(clazz: globalAndroid.content.Context, e: com.facebook.imagepipeline.core.ImagePipelineConfig, e: com.facebook.drawee.backends.pipeline.DraweeConfig, e: boolean): void;
						public static initialize(context: globalAndroid.content.Context, imagePipelineConfig: com.facebook.imagepipeline.core.ImagePipelineConfig, draweeConfig: com.facebook.drawee.backends.pipeline.DraweeConfig): void;
						public static getImagePipeline(): com.facebook.imagepipeline.core.ImagePipeline;
						public static getDraweeControllerBuilderSupplier(): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilderSupplier;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export class PipelineDraweeController extends com.facebook.drawee.controller.AbstractDraweeController<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.imagepipeline.image.ImageInfo> {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.PipelineDraweeController>;
						public getRequestListener(): com.facebook.imagepipeline.listener.RequestListener;
						public getMainUri(): globalAndroid.net.Uri;
						public releaseImage(image: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>): void;
						public addRequestListener(requestListener: com.facebook.imagepipeline.listener.RequestListener): void;
						public getImageInfo(image: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>): com.facebook.imagepipeline.image.ImageInfo;
						public obtainExtrasFromImage(info: com.facebook.imagepipeline.image.ImageInfo): java.util.Map<string,any>;
						public getDataSourceSupplier(): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>;
						public getDataSource(): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
						public getImageHash(image: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>): number;
						public onImageLoadedFromCacheImmediately(id: string, cachedImage: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>): void;
						public releaseDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public setCustomDrawableFactories(customDrawableFactories: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>): void;
						public updateDebugOverlay(this_: com.facebook.imagepipeline.image.CloseableImage, image: com.facebook.drawee.debug.DebugControllerOverlayDrawable): void;
						public constructor(resources: globalAndroid.content.res.Resources, deferredReleaser: com.facebook.drawee.components.DeferredReleaser, animatedDrawableFactory: com.facebook.imagepipeline.drawable.DrawableFactory, xmlDrawableFactory: com.facebook.imagepipeline.drawable.DrawableFactory, uiThreadExecutor: java.util.concurrent.Executor, memoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, globalDrawableFactories: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>);
						public getCacheKey(): com.facebook.cache.common.CacheKey;
						public toString(): string;
						public setDrawDebugOverlay(drawDebugOverlay: boolean): void;
						public getCachedImage(): com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>;
						public getCallerContextString(): string;
						public removeImageOriginListener(imageOriginListener: com.facebook.drawee.backends.pipeline.info.ImageOriginListener): void;
						public isSameImageRequest(other: com.facebook.drawee.interfaces.DraweeController): boolean;
						public static getActiveScaleTypeDrawable(childDrawable: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.drawable.ScaleTypeDrawable;
						public getResources(): globalAndroid.content.res.Resources;
						public createDrawable(drawable: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>): globalAndroid.graphics.drawable.Drawable;
						public initialize(dataSourceSupplier: com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>, id: string, cacheKey: com.facebook.cache.common.CacheKey, callerContext: any, customDrawableFactories: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>): void;
						public removeRequestListener(requestListener: com.facebook.imagepipeline.listener.RequestListener): void;
						public setHierarchy(hierarchy: com.facebook.drawee.interfaces.DraweeHierarchy): void;
						public initializePerformanceMonitoring(imagePerfDataListener: com.facebook.fresco.ui.common.ImagePerfDataListener, builder: com.facebook.drawee.controller.AbstractDraweeControllerBuilder<com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder,com.facebook.imagepipeline.request.ImageRequest,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.imagepipeline.image.ImageInfo>): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export class PipelineDraweeControllerBuilder extends com.facebook.drawee.controller.AbstractDraweeControllerBuilder<com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder,com.facebook.imagepipeline.request.ImageRequest,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.imagepipeline.image.ImageInfo> {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder>;
						public setUri(uriString: string): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public constructor(context: globalAndroid.content.Context, pipelineDraweeControllerFactory: com.facebook.drawee.backends.pipeline.PipelineDraweeControllerFactory, imagePipeline: com.facebook.imagepipeline.core.ImagePipeline, boundControllerListeners: java.util.Set<com.facebook.drawee.controller.ControllerListener>, boundControllerListeners2: java.util.Set<com.facebook.fresco.ui.common.ControllerListener2<any>>);
						public getDataSourceForRequest(controller: com.facebook.drawee.interfaces.DraweeController, controllerId: string, imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any, cacheLevel: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
						public setCustomDrawableFactories(drawableFactories: androidNative.Array<com.facebook.imagepipeline.drawable.DrawableFactory>): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public setCustomDrawableFactories(customDrawableFactories: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public setUri(uri: globalAndroid.net.Uri): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public obtainController(): com.facebook.drawee.backends.pipeline.PipelineDraweeController;
						public setCustomDrawableFactory(drawableFactory: com.facebook.imagepipeline.drawable.DrawableFactory): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public setPerfDataListener(imagePerfDataListener: com.facebook.fresco.ui.common.ImagePerfDataListener): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public static convertCacheLevelToRequestLevel(cacheLevel: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						public setImageOriginListener(imageOriginListener: com.facebook.drawee.backends.pipeline.info.ImageOriginListener): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public getRequestListener(controller: com.facebook.drawee.interfaces.DraweeController): com.facebook.imagepipeline.listener.RequestListener;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export class PipelineDraweeControllerBuilderSupplier extends com.facebook.common.internal.Supplier<com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder> {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilderSupplier>;
						public constructor(context: globalAndroid.content.Context, imagePipelineFactory: com.facebook.imagepipeline.core.ImagePipelineFactory, boundControllerListeners: java.util.Set<com.facebook.drawee.controller.ControllerListener>, boundControllerListeners2: java.util.Set<com.facebook.fresco.ui.common.ControllerListener2<any>>, draweeConfig: com.facebook.drawee.backends.pipeline.DraweeConfig);
						public get(): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public constructor(context: globalAndroid.content.Context, draweeConfig: com.facebook.drawee.backends.pipeline.DraweeConfig);
						public constructor(context: globalAndroid.content.Context, imagePipelineFactory: com.facebook.imagepipeline.core.ImagePipelineFactory, draweeConfig: com.facebook.drawee.backends.pipeline.DraweeConfig);
						public constructor(context: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export class PipelineDraweeControllerFactory {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.PipelineDraweeControllerFactory>;
						public constructor();
						public internalCreateController(resources: globalAndroid.content.res.Resources, deferredReleaser: com.facebook.drawee.components.DeferredReleaser, animatedDrawableFactory: com.facebook.imagepipeline.drawable.DrawableFactory, xmlDrawableFactory: com.facebook.imagepipeline.drawable.DrawableFactory, uiThreadExecutor: java.util.concurrent.Executor, memoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, drawableFactories: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>): com.facebook.drawee.backends.pipeline.PipelineDraweeController;
						public init(resources: globalAndroid.content.res.Resources, deferredReleaser: com.facebook.drawee.components.DeferredReleaser, animatedDrawableFactory: com.facebook.imagepipeline.drawable.DrawableFactory, xmlDrawableFactory: com.facebook.imagepipeline.drawable.DrawableFactory, uiThreadExecutor: java.util.concurrent.Executor, memoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, drawableFactories: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>, debugOverlayEnabledSupplier: com.facebook.common.internal.Supplier<java.lang.Boolean>): void;
						public newController(): com.facebook.drawee.backends.pipeline.PipelineDraweeController;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export namespace info {
						export class ForwardingImageOriginListener extends com.facebook.drawee.backends.pipeline.info.ImageOriginListener {
							public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.info.ForwardingImageOriginListener>;
							public constructor(imageOriginListeners: androidNative.Array<com.facebook.drawee.backends.pipeline.info.ImageOriginListener>);
							public addImageOriginListener(listener: com.facebook.drawee.backends.pipeline.info.ImageOriginListener): void;
							public removeImageOriginListener(listener: com.facebook.drawee.backends.pipeline.info.ImageOriginListener): void;
							public onImageLoaded(listener: string, i: number, this_: boolean, controllerId: string): void;
							public onImageLoaded(param0: string, param1: number, param2: boolean, param3: string): void;
							public constructor(imageOriginListeners: java.util.Set<com.facebook.drawee.backends.pipeline.info.ImageOriginListener>);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export namespace info {
						export class ForwardingImagePerfDataListener extends com.facebook.fresco.ui.common.ImagePerfDataListener {
							public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.info.ForwardingImagePerfDataListener>;
							public onImageLoadStatusUpdated(this_: com.facebook.fresco.ui.common.ImagePerfData, imagePerfData: com.facebook.fresco.ui.common.ImageLoadStatus): void;
							public onImageVisibilityUpdated(this_: com.facebook.fresco.ui.common.ImagePerfData, imagePerfData: com.facebook.fresco.ui.common.VisibilityState): void;
							public onImageVisibilityUpdated(param0: com.facebook.fresco.ui.common.ImagePerfData, param1: com.facebook.fresco.ui.common.VisibilityState): void;
							public constructor(listeners: java.util.Collection<com.facebook.fresco.ui.common.ImagePerfDataListener>);
							public onImageLoadStatusUpdated(param0: com.facebook.fresco.ui.common.ImagePerfData, param1: com.facebook.fresco.ui.common.ImageLoadStatus): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export namespace info {
						export class ImageOrigin {
							public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.info.ImageOrigin>;
							/**
							 * Constructs a new instance of the com.facebook.drawee.backends.pipeline.info.ImageOrigin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								"<clinit>"(): void;
							});
							public constructor();
							public static LOCAL: number; // 7
							public static MEMORY_BITMAP_SHORTCUT: number; // 6
							public static UNKNOWN: number; // 1
							public static DISK: number; // 3
							public static NETWORK: number; // 2
							public static MEMORY_BITMAP: number; // 5
							public static MEMORY_ENCODED: number; // 4
						}
						export namespace ImageOrigin {
							export class Companion {
								public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.info.ImageOrigin.Companion>;
								public static UNKNOWN: number; // 1
								public static NETWORK: number; // 2
								public static DISK: number; // 3
								public static MEMORY_ENCODED: number; // 4
								public static MEMORY_BITMAP: number; // 5
								public static MEMORY_BITMAP_SHORTCUT: number; // 6
								public static LOCAL: number; // 7
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export namespace info {
						export class ImageOriginListener {
							public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.info.ImageOriginListener>;
							/**
							 * Constructs a new instance of the com.facebook.drawee.backends.pipeline.info.ImageOriginListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onImageLoaded(param0: string, param1: number, param2: boolean, param3: string): void;
							});
							public constructor();
							public onImageLoaded(param0: string, param1: number, param2: boolean, param3: string): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export namespace info {
						export class ImageOriginRequestListener extends com.facebook.imagepipeline.listener.BaseRequestListener {
							public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.info.ImageOriginRequestListener>;
							public constructor();
							public onRequestStart(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
							public onUltimateProducerReached(requestId: string, ultimateProducerName: string, successful: boolean): void;
							public onRequestSuccess(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
							public init(controllerId: string): void;
							public onRequestCancellation(param0: string): void;
							public constructor(controllerId: string, imageOriginLister: com.facebook.drawee.backends.pipeline.info.ImageOriginListener);
							public onRequestFailure(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export namespace info {
						export class ImageOriginUtils {
							public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.info.ImageOriginUtils>;
							public static mapProducerNameToImageOrigin(producerName: string): number;
							public static toString(imageOrigin: number): string;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export namespace info {
						export class ImagePerfExtra {
							public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.info.ImagePerfExtra>;
							public static INSTANCE: com.facebook.drawee.backends.pipeline.info.ImagePerfExtra;
							public static IMAGE_ORIGIN: string; // "IMAGE_ORIGIN"
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export namespace info {
						export class ImagePerfMonitor extends com.facebook.fresco.ui.common.ImagePerfNotifier {
							public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.info.ImagePerfMonitor>;
							public notifyStatusUpdated(this_: com.facebook.fresco.ui.common.ImagePerfState, state: com.facebook.fresco.ui.common.ImageLoadStatus): void;
							public notifyVisibilityUpdated(this_: com.facebook.fresco.ui.common.ImagePerfState, state: com.facebook.fresco.ui.common.VisibilityState): void;
							public setEnabled(enabled: boolean): void;
							public notifyVisibilityUpdated(param0: com.facebook.fresco.ui.common.ImagePerfState, param1: com.facebook.fresco.ui.common.VisibilityState): void;
							public notifyStatusUpdated(param0: com.facebook.fresco.ui.common.ImagePerfState, param1: com.facebook.fresco.ui.common.ImageLoadStatus): void;
							public constructor(monotonicClock: com.facebook.common.time.MonotonicClock, pipelineDraweeController: com.facebook.drawee.backends.pipeline.PipelineDraweeController);
							public addImagePerfDataListener(imagePerfDataListener: com.facebook.fresco.ui.common.ImagePerfDataListener): void;
							public removeImagePerfDataListener(imagePerfDataListener: com.facebook.fresco.ui.common.ImagePerfDataListener): void;
							public addViewportData(): void;
							public clearImagePerfDataListeners(): void;
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export namespace info {
						export namespace internal {
							export class ImagePerfRequestListener extends com.facebook.imagepipeline.listener.BaseRequestListener {
								public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.info.internal.ImagePerfRequestListener>;
								public onRequestFailure(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
								public onRequestSuccess(request: com.facebook.imagepipeline.request.ImageRequest, requestId: string, isPrefetch: boolean): void;
								public constructor(monotonicClock: com.facebook.common.time.MonotonicClock, imagePerfState: com.facebook.fresco.ui.common.ImagePerfState);
								public onRequestCancellation(param0: string): void;
								public constructor();
								public onRequestStart(request: com.facebook.imagepipeline.request.ImageRequest, callerContext: any, requestId: string, isPrefetch: boolean): void;
								public onRequestStart(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
								public onRequestCancellation(requestId: string): void;
								public onRequestSuccess(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
								public onRequestFailure(request: com.facebook.imagepipeline.request.ImageRequest, requestId: string, throwable: java.lang.Throwable, isPrefetch: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace backends {
				export namespace pipeline {
					export namespace info {
						export namespace internal {
							export class ImagePerfStateManager extends com.facebook.fresco.ui.common.BaseControllerListener2<com.facebook.imagepipeline.image.ImageInfo> {
								public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.info.internal.ImagePerfStateManager>;
								public setImagePerfNotifier(imagePerfNotifier: com.facebook.fresco.ui.common.ImagePerfNotifier): void;
								public onRelease(id: string, extras: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
								public onIntermediateImageSet(id: string, imageInfo: com.facebook.imagepipeline.image.ImageInfo): void;
								public onImageDrawn(param0: string, param1: any, param2: com.facebook.fresco.ui.common.DimensionsInfo): void;
								public onIntermediateImageFailed(param0: string): void;
								public onFinalImageSet(id: string, imageInfo: com.facebook.imagepipeline.image.ImageInfo, extraData: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
								public onFailure(id: string, throwable: java.lang.Throwable, extras: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
								public onDraw(): void;
								public onFinalImageSet(param0: string, param1: any, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
								public onSubmit(param0: string, param1: any, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
								public onSubmit(id: string, callerContext: any, extraData: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
								public resetState(): void;
								public constructor(clock: com.facebook.common.time.MonotonicClock, imagePerfState: com.facebook.fresco.ui.common.ImagePerfState, globalImagePerfNotifier: com.facebook.fresco.ui.common.ImagePerfNotifier);
								public onImageDrawn(id: string, info: com.facebook.imagepipeline.image.ImageInfo, dimensionsInfo: com.facebook.fresco.ui.common.DimensionsInfo): void;
								public reportVisible(visible: boolean): void;
								public onIntermediateImageSet(param0: string, param1: any): void;
								public onFailure(param0: string, param1: java.lang.Throwable, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
								public constructor();
								public onEmptyEvent(param0: any): void;
								public onVisibilityChange(visible: boolean): void;
								public onEmptyEvent(callerContext: any): void;
								public setImagePerfNotifier(param0: com.facebook.fresco.ui.common.ImagePerfNotifier): void;
								public onFinalImageSet(id: string, imageInfo: any, extraData: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
								public constructor(clock: com.facebook.common.time.MonotonicClock, imagePerfState: com.facebook.fresco.ui.common.ImagePerfState, globalImagePerfNotifier: com.facebook.fresco.ui.common.ImagePerfNotifier, reportVisibleOnSubmitAndRelease: boolean);
								public reportViewVisible(state: com.facebook.fresco.ui.common.ImagePerfState, now: number): void;
								public close(): void;
								public reportVisible(param0: boolean): void;
								public onIntermediateImageSet(id: string, imageInfo: any): void;
								public onRelease(param0: string, param1: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace drawee {
			export namespace drawable {
				export class ScalingUtils {
					public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils>;
					public constructor();
					public static convertFromImageViewScaleType(scaleType: globalAndroid.widget.ImageView.ScaleType): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
				}
				export namespace ScalingUtils {
					export abstract class AbstractScaleType extends com.facebook.drawee.drawable.ScalingUtils.ScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType>;
						public constructor();
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransform(outTransform: globalAndroid.graphics.Matrix, parentRect: globalAndroid.graphics.Rect, childWidth: number, childHeight: number, focusX: number, focusY: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					}
					export class InterpolatingScaleType implements com.facebook.drawee.drawable.ScalingUtils.ScaleType, com.facebook.drawee.drawable.ScalingUtils.StatefulScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.InterpolatingScaleType>;
						public getScaleTypeFrom(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransform(this_: globalAndroid.graphics.Matrix, transform: globalAndroid.graphics.Rect, parentBounds: number, childWidth: number, childHeight: number, focusX: number): globalAndroid.graphics.Matrix;
						public getFocusPointFrom(): globalAndroid.graphics.PointF;
						public setValue(value: number): void;
						public toString(): string;
						public getBoundsTo(): globalAndroid.graphics.Rect;
						public getBoundsFrom(): globalAndroid.graphics.Rect;
						public getFocusPointTo(): globalAndroid.graphics.PointF;
						public constructor(scaleTypeFrom: com.facebook.drawee.drawable.ScalingUtils.ScaleType, scaleTypeTo: com.facebook.drawee.drawable.ScalingUtils.ScaleType, boundsFrom: globalAndroid.graphics.Rect, boundsTo: globalAndroid.graphics.Rect);
						public getScaleTypeTo(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public constructor(scaleTypeFrom: com.facebook.drawee.drawable.ScalingUtils.ScaleType, scaleTypeTo: com.facebook.drawee.drawable.ScalingUtils.ScaleType, boundsFrom: globalAndroid.graphics.Rect, boundsTo: globalAndroid.graphics.Rect, focusPointFrom: globalAndroid.graphics.PointF, focusPointTo: globalAndroid.graphics.PointF);
						public getState(): any;
						public constructor(scaleTypeFrom: com.facebook.drawee.drawable.ScalingUtils.ScaleType, scaleTypeTo: com.facebook.drawee.drawable.ScalingUtils.ScaleType);
						public getValue(): number;
					}
					export class ScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleType>;
						/**
						 * Constructs a new instance of the com.facebook.drawee.drawable.ScalingUtils$ScaleType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
							"<clinit>"(): void;
						});
						public constructor();
						public static FIT_END: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static FOCUS_CROP: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static FIT_START: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static CENTER_INSIDE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static FIT_X: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static FIT_CENTER: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static FIT_BOTTOM_START: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static FIT_XY: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static CENTER: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static CENTER_CROP: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static FIT_Y: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
					}
					export class ScaleTypeCenter extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeCenter>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(outTransform: globalAndroid.graphics.Matrix, parentRect: globalAndroid.graphics.Rect, childWidth: number, childHeight: number, focusX: number, focusY: number, scaleX: number, scaleY: number): void;
						public toString(): string;
					}
					export class ScaleTypeCenterCrop extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeCenterCrop>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransformImpl(dx: globalAndroid.graphics.Matrix, dy: globalAndroid.graphics.Rect, this_: number, outTransform: number, parentRect: number, childWidth: number, childHeight: number, focusX: number): void;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public toString(): string;
					}
					export class ScaleTypeCenterInside extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeCenterInside>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(outTransform: globalAndroid.graphics.Matrix, parentRect: globalAndroid.graphics.Rect, childWidth: number, childHeight: number, focusX: number, focusY: number, scaleX: number, scaleY: number): void;
						public toString(): string;
					}
					export class ScaleTypeFitBottomStart extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFitBottomStart>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(outTransform: globalAndroid.graphics.Matrix, parentRect: globalAndroid.graphics.Rect, childWidth: number, childHeight: number, focusX: number, focusY: number, scaleX: number, scaleY: number): void;
						public toString(): string;
					}
					export class ScaleTypeFitCenter extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFitCenter>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(outTransform: globalAndroid.graphics.Matrix, parentRect: globalAndroid.graphics.Rect, childWidth: number, childHeight: number, focusX: number, focusY: number, scaleX: number, scaleY: number): void;
						public toString(): string;
					}
					export class ScaleTypeFitEnd extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFitEnd>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(outTransform: globalAndroid.graphics.Matrix, parentRect: globalAndroid.graphics.Rect, childWidth: number, childHeight: number, focusX: number, focusY: number, scaleX: number, scaleY: number): void;
						public toString(): string;
					}
					export class ScaleTypeFitStart extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFitStart>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(outTransform: globalAndroid.graphics.Matrix, parentRect: globalAndroid.graphics.Rect, childWidth: number, childHeight: number, focusX: number, focusY: number, scaleX: number, scaleY: number): void;
						public toString(): string;
					}
					export class ScaleTypeFitX extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFitX>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(outTransform: globalAndroid.graphics.Matrix, parentRect: globalAndroid.graphics.Rect, childWidth: number, childHeight: number, focusX: number, focusY: number, scaleX: number, scaleY: number): void;
						public toString(): string;
					}
					export class ScaleTypeFitXY extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFitXY>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(outTransform: globalAndroid.graphics.Matrix, parentRect: globalAndroid.graphics.Rect, childWidth: number, childHeight: number, focusX: number, focusY: number, scaleX: number, scaleY: number): void;
						public toString(): string;
					}
					export class ScaleTypeFitY extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFitY>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(outTransform: globalAndroid.graphics.Matrix, parentRect: globalAndroid.graphics.Rect, childWidth: number, childHeight: number, focusX: number, focusY: number, scaleX: number, scaleY: number): void;
						public toString(): string;
					}
					export class ScaleTypeFocusCrop extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFocusCrop>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransformImpl(dx: globalAndroid.graphics.Matrix, dy: globalAndroid.graphics.Rect, this_: number, outTransform: number, parentRect: number, childWidth: number, childHeight: number, focusX: number): void;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public toString(): string;
					}
					export class StatefulScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.StatefulScaleType>;
						/**
						 * Constructs a new instance of the com.facebook.drawee.drawable.ScalingUtils$StatefulScaleType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getState(): any;
						});
						public constructor();
						public getState(): any;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace middleware {
				export class HasExtraData {
					public static class: java.lang.Class<com.facebook.fresco.middleware.HasExtraData>;
					/**
					 * Constructs a new instance of the com.facebook.fresco.middleware.HasExtraData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						putExtra(param0: string, param1: any): void;
						getExtra(param0: string): any;
						getExtra(param0: string, param1: any): any;
						getExtras(): java.util.Map<string,any>;
						putExtras(param0: java.util.Map<string,any>): void;
						"<clinit>"(): void;
					});
					public constructor();
					public static KEY_ID: string; // "id"
					public static KEY_ENCODED_HEIGHT: string; // "encoded_height"
					public static KEY_URI_SOURCE: string; // "uri_source"
					public static KEY_ENCODED_SIZE: string; // "encoded_size"
					public static KEY_MULTIPLEX_ENCODED_COUNT: string; // "multiplex_enc_cnt"
					public static KEY_IMAGE_SOURCE_EXTRAS: string; // "image_source_extras"
					public static KEY_ORIGINAL_URL: string; // "original_url"
					public static KEY_ORIGIN_SUBCATEGORY: string; // "origin_sub"
					public static KEY_COLOR_SPACE: string; // "image_color_space"
					public static KEY_IMAGE_FORMAT: string; // "image_format"
					public static KEY_IS_ROUNDED: string; // "is_rounded"
					public static KEY_IMAGE_SOURCE_TYPE: string; // "image_source_type"
					public static KEY_MODIFIED_URL: string; // "modified_url"
					public static KEY_BITMAP_CONFIG: string; // "bitmap_config"
					public static KEY_MULTIPLEX_BITMAP_COUNT: string; // "multiplex_bmp_cnt"
					public static KEY_ORIGIN: string; // "origin"
					public static KEY_ENCODED_WIDTH: string; // "encoded_width"
					public static KEY_NON_FATAL_DECODE_ERROR: string; // "non_fatal_decode_error"
					public static KEY_LAST_SCAN_NUMBER: string; // "last_scan_num"
					public putExtra(param0: string, param1: any): void;
					public getExtra(param0: string): any;
					public getExtra(param0: string, param1: any): any;
					public getExtras(): java.util.Map<string,any>;
					public putExtras(param0: java.util.Map<string,any>): void;
				}
				export namespace HasExtraData {
					export class Companion {
						public static class: java.lang.Class<com.facebook.fresco.middleware.HasExtraData.Companion>;
						public static KEY_ID: string; // "id"
						public static KEY_ENCODED_SIZE: string; // "encoded_size"
						public static KEY_ENCODED_WIDTH: string; // "encoded_width"
						public static KEY_ENCODED_HEIGHT: string; // "encoded_height"
						public static KEY_URI_SOURCE: string; // "uri_source"
						public static KEY_IMAGE_FORMAT: string; // "image_format"
						public static KEY_BITMAP_CONFIG: string; // "bitmap_config"
						public static KEY_IS_ROUNDED: string; // "is_rounded"
						public static KEY_NON_FATAL_DECODE_ERROR: string; // "non_fatal_decode_error"
						public static KEY_ORIGINAL_URL: string; // "original_url"
						public static KEY_MODIFIED_URL: string; // "modified_url"
						public static KEY_IMAGE_SOURCE_TYPE: string; // "image_source_type"
						public static KEY_ORIGIN: string; // "origin"
						public static KEY_ORIGIN_SUBCATEGORY: string; // "origin_sub"
						public static KEY_MULTIPLEX_BITMAP_COUNT: string; // "multiplex_bmp_cnt"
						public static KEY_MULTIPLEX_ENCODED_COUNT: string; // "multiplex_enc_cnt"
						public static KEY_LAST_SCAN_NUMBER: string; // "last_scan_num"
						public static KEY_IMAGE_SOURCE_EXTRAS: string; // "image_source_extras"
						public static KEY_COLOR_SPACE: string; // "image_color_space"
					}
					export class DefaultImpls {
						public static class: java.lang.Class<com.facebook.fresco.middleware.HasExtraData.DefaultImpls>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace middleware {
				export class MiddlewareUtils {
					public static class: java.lang.Class<com.facebook.fresco.middleware.MiddlewareUtils>;
					public static INSTANCE: com.facebook.fresco.middleware.MiddlewareUtils;
					public static obtainExtras(extras: java.util.Map<string,any>, componentAttribution: java.util.Map<string,any>, shortcutAttribution: java.util.Map<string,any>, dataSourceExtras: java.util.Map<string,any>, imageSourceExtras: globalAndroid.graphics.Rect, viewportDimensions: string, scaleType: globalAndroid.graphics.PointF, focusPoint: java.util.Map<string,any>, imageExtras: any, callerContext: boolean, logWithHighSamplingRate: globalAndroid.net.Uri): com.facebook.fresco.ui.common.ControllerListener2.Extras;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class BaseControllerListener2<INFO>  extends com.facebook.fresco.ui.common.ControllerListener2<any> {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.BaseControllerListener2<any>>;
						public constructor();
						public onSubmit(id: string, callerContext: any, extras: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onIntermediateImageSet(param0: string, param1: any): void;
						public onIntermediateImageFailed(id: string): void;
						public onFailure(id: string, throwable: java.lang.Throwable, extras: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onFinalImageSet(param0: string, param1: any, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onRelease(param0: string, param1: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onIntermediateImageSet(id: string, imageInfo: any): void;
						public onEmptyEvent(param0: any): void;
						public onFinalImageSet(id: string, imageInfo: any, extraData: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onIntermediateImageFailed(param0: string): void;
						public onFailure(param0: string, param1: java.lang.Throwable, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onSubmit(param0: string, param1: any, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public static getNoOpListener(): com.facebook.fresco.ui.common.ControllerListener2<any>;
						public onEmptyEvent(callerContext: any): void;
						public onRelease(id: string, extras: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
					}
					export namespace BaseControllerListener2 {
						export class Companion {
							public static class: java.lang.Class<com.facebook.fresco.ui.common.BaseControllerListener2.Companion>;
							public getNoOpListener(): com.facebook.fresco.ui.common.ControllerListener2<any>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class ControllerListener2<INFO>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.ControllerListener2<any>>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.ui.common.ControllerListener2<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSubmit(param0: string, param1: any, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
							onFinalImageSet(param0: string, param1: INFO, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
							onIntermediateImageSet(param0: string, param1: INFO): void;
							onIntermediateImageFailed(param0: string): void;
							onFailure(param0: string, param1: java.lang.Throwable, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
							onRelease(param0: string, param1: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
							onEmptyEvent(param0: any): void;
						});
						public constructor();
						public onFinalImageSet(param0: string, param1: INFO, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onIntermediateImageFailed(param0: string): void;
						public onFailure(param0: string, param1: java.lang.Throwable, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onIntermediateImageSet(param0: string, param1: INFO): void;
						public onSubmit(param0: string, param1: any, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onRelease(param0: string, param1: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onEmptyEvent(param0: any): void;
					}
					export namespace ControllerListener2 {
						export class Extras {
							public static class: java.lang.Class<com.facebook.fresco.ui.common.ControllerListener2.Extras>;
							public componentExtras: java.util.Map<string,any>;
							public shortcutExtras: java.util.Map<string,any>;
							public datasourceExtras: java.util.Map<string,any>;
							public imageExtras: java.util.Map<string,any>;
							public imageSourceExtras: java.util.Map<string,any>;
							public callerContext: any;
							public mainUri: globalAndroid.net.Uri;
							public viewportWidth: number;
							public viewportHeight: number;
							public scaleType: any;
							public focusX: java.lang.Float;
							public focusY: java.lang.Float;
							public logWithHighSamplingRate: boolean;
							public modifiedUriStatus: string;
							public originalUri: globalAndroid.net.Uri;
							public uiFramework: string;
							public constructor();
							public static of(componentExtras: java.util.Map<string,any>): com.facebook.fresco.ui.common.ControllerListener2.Extras;
							public makeExtrasCopy(): com.facebook.fresco.ui.common.ControllerListener2.Extras;
						}
						export namespace Extras {
							export class Companion {
								public static class: java.lang.Class<com.facebook.fresco.ui.common.ControllerListener2.Extras.Companion>;
								public of(this_: java.util.Map<string,any>): com.facebook.fresco.ui.common.ControllerListener2.Extras;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class DimensionsInfo {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.DimensionsInfo>;
						public equals(this_: any): boolean;
						public hashCode(): number;
						public component7(): string;
						public constructor(viewportWidth: number, viewportHeight: number, encodedImageWidth: number, encodedImageHeight: number, decodedImageWidth: number, decodedImageHeight: number, scaleType: string);
						public getEncodedImageWidth(): number;
						public component4(): number;
						public component6(): number;
						public toString(): string;
						public getEncodedImageHeight(): number;
						public getScaleType(): string;
						public component2(): number;
						public getViewportHeight(): number;
						public getViewportWidth(): number;
						public getDecodedImageWidth(): number;
						public component1(): number;
						public component3(): number;
						public copy(viewportWidth: number, viewportHeight: number, encodedImageWidth: number, encodedImageHeight: number, decodedImageWidth: number, decodedImageHeight: number, scaleType: string): com.facebook.fresco.ui.common.DimensionsInfo;
						public getDecodedImageHeight(): number;
						public component5(): number;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class ForwardingControllerListener2<I>  extends com.facebook.fresco.ui.common.BaseControllerListener2<any> {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.ForwardingControllerListener2<any>>;
						public constructor();
						public onIntermediateImageSet(param0: string, param1: any): void;
						public addListener(listener: com.facebook.fresco.ui.common.ControllerListener2<any>): void;
						public onFinalImageSet(param0: string, param1: any, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onRelease(param0: string, param1: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onRelease(it: string, ignore$iv: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onIntermediateImageSet(it: string, ignore$iv: any): void;
						public onEmptyEvent(param0: any): void;
						public onFailure(it: string, ignore$iv: java.lang.Throwable, exception$iv: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onFinalImageSet(it: string, ignore$iv: any, exception$iv: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onIntermediateImageFailed(param0: string): void;
						public onFailure(param0: string, param1: java.lang.Throwable, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onIntermediateImageFailed(it: string): void;
						public removeAllListeners(): void;
						public onSubmit(param0: string, param1: any, param2: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onSubmit(it: string, ignore$iv: any, exception$iv: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
						public onEmptyEvent(it: any): void;
						public removeListener(listener: com.facebook.fresco.ui.common.ControllerListener2<any>): void;
					}
					export namespace ForwardingControllerListener2 {
						export class Companion {
							public static class: java.lang.Class<com.facebook.fresco.ui.common.ForwardingControllerListener2.Companion>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class ImageLoadStatus {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.ImageLoadStatus>;
						public static UNKNOWN: com.facebook.fresco.ui.common.ImageLoadStatus;
						public static REQUESTED: com.facebook.fresco.ui.common.ImageLoadStatus;
						public static INTERMEDIATE_AVAILABLE: com.facebook.fresco.ui.common.ImageLoadStatus;
						public static SUCCESS: com.facebook.fresco.ui.common.ImageLoadStatus;
						public static ERROR: com.facebook.fresco.ui.common.ImageLoadStatus;
						public static EMPTY_EVENT: com.facebook.fresco.ui.common.ImageLoadStatus;
						public static RELEASED: com.facebook.fresco.ui.common.ImageLoadStatus;
						public static values(): androidNative.Array<com.facebook.fresco.ui.common.ImageLoadStatus>;
						public static valueOf(value: string): com.facebook.fresco.ui.common.ImageLoadStatus;
						public static getEntries(): any;
						public toString(): string;
						public getValue(): number;
					}
					export namespace ImageLoadStatus {
						export class Companion {
							public static class: java.lang.Class<com.facebook.fresco.ui.common.ImageLoadStatus.Companion>;
							public fromInt(it: number): com.facebook.fresco.ui.common.ImageLoadStatus;
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.facebook.fresco.ui.common.ImageLoadStatus.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class ImagePerfData {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.ImagePerfData>;
						public static UNSET: number; // -1
						public getControllerId(): string;
						public getIntermediateImageLoadTimeMs(): number;
						public isPrefetch(): boolean;
						public getImageRequestEndTimeMs(): number;
						public getVisibilityEventTimeMs(): number;
						public getSubSurfaceOnVisible(): string;
						public getContextChainArrayOnVisible(): androidNative.Array<string>;
						public getOnScreenWidthPx(): number;
						public getReleasedEventTimestampNs(): java.lang.Long;
						public getRootContextNameOnVisible(): string;
						public getSurfaceOnVisible(): string;
						public getErrorThrowable(): java.lang.Throwable;
						public getNewIntermediateImageSetPointAvailable(): boolean;
						public getControllerSubmitTimeMs(): number;
						public getImageInfo(): any;
						public getInfra(): com.facebook.fresco.ui.common.ImageRenderingInfra;
						public getImageRequest(): any;
						public getContextChainExtrasOnVisible(): string;
						public getCallerContext(): any;
						public getErrorMessageOnFailure(): string;
						public createDebugString(): string;
						public getErrorCodeOnFailure(): java.lang.Integer;
						public getExtraData(): com.facebook.fresco.ui.common.ControllerListener2.Extras;
						public getInstanceId(): number;
						public getImageRequestStartTimeMs(): number;
						public getStartupStatusOnVisible(): string;
						public getErrorStacktraceStringOnFailure(): string;
						public getControllerFinalImageSetTimeMs(): number;
						public getContentIdOnVisible(): string;
						public constructor(infra: com.facebook.fresco.ui.common.ImageRenderingInfra, controllerId: string, requestId: string, imageRequest: any, callerContext: any, imageInfo: any, controllerSubmitTimeMs: number, intermediateImageLoadTimeMs: number, controllerFinalImageSetTimeMs: number, controllerFailureTimeMs: number, imageRequestStartTimeMs: number, imageRequestEndTimeMs: number, emptyEventTimestampNs: java.lang.Long, releasedEventTimestampNs: java.lang.Long, isPrefetch: boolean, onScreenWidthPx: number, onScreenHeightPx: number, errorThrowable: java.lang.Throwable, visibilityState: com.facebook.fresco.ui.common.VisibilityState, visibilityEventTimeMs: number, invisibilityEventTimeMs: number, dimensionsInfo: com.facebook.fresco.ui.common.DimensionsInfo, extraData: com.facebook.fresco.ui.common.ControllerListener2.Extras, callingClassNameOnVisible: string, rootContextNameOnVisible: string, contextChainArrayOnVisible: androidNative.Array<string>, contextChainExtrasOnVisible: string, contentIdOnVisible: string, surfaceOnVisible: string, subSurfaceOnVisible: string, msSinceLastNavigationOnVisible: java.lang.Long, startupStatusOnVisible: string, intermediateImageSetTimes: java.util.List<any>, newIntermediateImageSetPointAvailable: boolean, errorMessageOnFailure: string, errorStacktraceStringOnFailure: string, errorCodeOnFailure: java.lang.Integer, densityDpiOnSuccess: java.lang.Integer);
						public getOnScreenHeightPx(): number;
						public getControllerFailureTimeMs(): number;
						public getCallingClassNameOnVisible(): string;
						public getDimensionsInfo(): com.facebook.fresco.ui.common.DimensionsInfo;
						public getVisibilityState(): com.facebook.fresco.ui.common.VisibilityState;
						public getRequestId(): string;
						public getInvisibilityEventTimeMs(): number;
						public getFinalImageLoadTimeMs(): number;
						public getMsSinceLastNavigationOnVisible(): java.lang.Long;
						public getDensityDpiOnSuccess(): java.lang.Integer;
						public getEmptyEventTimestampNs(): java.lang.Long;
						public getIntermediateImageSetTimes(): java.util.List<any>;
					}
					export namespace ImagePerfData {
						export class Companion {
							public static class: java.lang.Class<com.facebook.fresco.ui.common.ImagePerfData.Companion>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class ImagePerfDataListener {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.ImagePerfDataListener>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.ui.common.ImagePerfDataListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onImageLoadStatusUpdated(param0: com.facebook.fresco.ui.common.ImagePerfData, param1: com.facebook.fresco.ui.common.ImageLoadStatus): void;
							onImageVisibilityUpdated(param0: com.facebook.fresco.ui.common.ImagePerfData, param1: com.facebook.fresco.ui.common.VisibilityState): void;
						});
						public constructor();
						public onImageVisibilityUpdated(param0: com.facebook.fresco.ui.common.ImagePerfData, param1: com.facebook.fresco.ui.common.VisibilityState): void;
						public onImageLoadStatusUpdated(param0: com.facebook.fresco.ui.common.ImagePerfData, param1: com.facebook.fresco.ui.common.ImageLoadStatus): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class ImagePerfDataNotifier extends com.facebook.fresco.ui.common.ImagePerfNotifier {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.ImagePerfDataNotifier>;
						public notifyStatusUpdated(param0: com.facebook.fresco.ui.common.ImagePerfState, param1: com.facebook.fresco.ui.common.ImageLoadStatus): void;
						public notifyVisibilityUpdated(state: com.facebook.fresco.ui.common.ImagePerfState, visibilityState: com.facebook.fresco.ui.common.VisibilityState): void;
						public notifyStatusUpdated(state: com.facebook.fresco.ui.common.ImagePerfState, imageLoadStatus: com.facebook.fresco.ui.common.ImageLoadStatus): void;
						public notifyVisibilityUpdated(param0: com.facebook.fresco.ui.common.ImagePerfState, param1: com.facebook.fresco.ui.common.VisibilityState): void;
						public constructor(perfDataListener: com.facebook.fresco.ui.common.ImagePerfDataListener);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class ImagePerfLoggingState {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.ImagePerfLoggingState>;
						public setSurfaceOnVisible(set: string): void;
						public getSubSurfaceOnVisible(): string;
						public getContextChainArrayOnVisible(): androidNative.Array<string>;
						public setRootContextNameOnVisible(set: string): void;
						public setStartupStatusOnVisible(set: string): void;
						public getReleasedEventTimestampNs(): java.lang.Long;
						public setContentIdOnVisible(set: string): void;
						public setErrorCodeOnFailure(set: java.lang.Integer): void;
						public getRootContextNameOnVisible(): string;
						public getSurfaceOnVisible(): string;
						public getNewIntermediateImageSetPointAvailable(): boolean;
						public getInfra(): com.facebook.fresco.ui.common.ImageRenderingInfra;
						public getContextChainExtrasOnVisible(): string;
						public getErrorMessageOnFailure(): string;
						public getErrorCodeOnFailure(): java.lang.Integer;
						public setErrorStacktraceStringOnFailure(set: string): void;
						public getStartupStatusOnVisible(): string;
						public setMsSinceLastNavigationOnVisible(set: java.lang.Long): void;
						public setEmptyEventTimestampNs(set: java.lang.Long): void;
						public setErrorMessageOnFailure(set: string): void;
						public setNewIntermediateImageSetPointAvailable(set: boolean): void;
						public resetLoggingState$ui_common_release(): void;
						public getErrorStacktraceStringOnFailure(): string;
						public getContentIdOnVisible(): string;
						public setReleasedEventTimestampNs(set: java.lang.Long): void;
						public getCallingClassNameOnVisible(): string;
						public setDensityDpiOnSuccess(set: java.lang.Integer): void;
						public setContextChainArrayOnVisible(set: androidNative.Array<string>): void;
						public setCallingClassNameOnVisible(set: string): void;
						public constructor(infra: com.facebook.fresco.ui.common.ImageRenderingInfra);
						public setSubSurfaceOnVisible(set: string): void;
						public getMsSinceLastNavigationOnVisible(): java.lang.Long;
						public getDensityDpiOnSuccess(): java.lang.Integer;
						public getEmptyEventTimestampNs(): java.lang.Long;
						public setContextChainExtrasOnVisible(set: string): void;
						public getIntermediateImageSetTimes(): java.util.List<any>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class ImagePerfNotifier {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.ImagePerfNotifier>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.ui.common.ImagePerfNotifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							notifyVisibilityUpdated(param0: com.facebook.fresco.ui.common.ImagePerfState, param1: com.facebook.fresco.ui.common.VisibilityState): void;
							notifyStatusUpdated(param0: com.facebook.fresco.ui.common.ImagePerfState, param1: com.facebook.fresco.ui.common.ImageLoadStatus): void;
						});
						public constructor();
						public notifyStatusUpdated(param0: com.facebook.fresco.ui.common.ImagePerfState, param1: com.facebook.fresco.ui.common.ImageLoadStatus): void;
						public notifyVisibilityUpdated(param0: com.facebook.fresco.ui.common.ImagePerfState, param1: com.facebook.fresco.ui.common.VisibilityState): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class ImagePerfNotifierHolder {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.ImagePerfNotifierHolder>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.ui.common.ImagePerfNotifierHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setImagePerfNotifier(param0: com.facebook.fresco.ui.common.ImagePerfNotifier): void;
						});
						public constructor();
						public setImagePerfNotifier(param0: com.facebook.fresco.ui.common.ImagePerfNotifier): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class ImagePerfState extends com.facebook.fresco.ui.common.ImagePerfLoggingState {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.ImagePerfState>;
						public setImageInfo(imageInfo: any): void;
						public getVisibilityEventTimeMs(): number;
						public setImageRequestEndTimeMs(imageRequestEndTimeMs: number): void;
						public snapshot(): com.facebook.fresco.ui.common.ImagePerfData;
						public setControllerIntermediateImageSetTimeMs(controllerIntermediateImageSetTimeMs: number): void;
						public setControllerFailureTimeMs(controllerFailureTimeMs: number): void;
						public setInvisibilityEventTimeMs(invisibilityEventTimeMs: number): void;
						public getExtraData(): any;
						public getCallerContext(): any;
						public setVisible(visible: boolean): void;
						public setImageLoadStatus(set: com.facebook.fresco.ui.common.ImageLoadStatus): void;
						public setImageRequestStartTimeMs(imageRequestStartTimeMs: number): void;
						public setVisibilityEventTimeMs(set: number): void;
						public setErrorThrowable(errorThrowable: java.lang.Throwable): void;
						public setOnScreenHeight(onScreenHeightPx: number): void;
						public setDimensionsInfo(set: com.facebook.fresco.ui.common.DimensionsInfo): void;
						public getImageLoadStatus(): com.facebook.fresco.ui.common.ImageLoadStatus;
						public setPrefetch(prefetch: boolean): void;
						public setCallerContext(set: any): void;
						public resetPointsTimestamps(): void;
						public setRequestId(requestId: string): void;
						public setControllerSubmitTimeMs(controllerSubmitTimeMs: number): void;
						public getDimensionsInfo(): com.facebook.fresco.ui.common.DimensionsInfo;
						public setOnScreenWidth(onScreenWidthPx: number): void;
						public setControllerFinalImageSetTimeMs(controllerFinalImageSetTimeMs: number): void;
						public constructor(infra: com.facebook.fresco.ui.common.ImageRenderingInfra);
						public reset(): void;
						public setControllerId(controllerId: string): void;
						public setImageRequest(imageRequest: any): void;
						public setExtraData(extraData: com.facebook.fresco.ui.common.ControllerListener2.Extras): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class ImageRenderingInfra {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.ImageRenderingInfra>;
						public static VITO_V2: com.facebook.fresco.ui.common.ImageRenderingInfra;
						public static VITO_V1: com.facebook.fresco.ui.common.ImageRenderingInfra;
						public static DRAWEE: com.facebook.fresco.ui.common.ImageRenderingInfra;
						public static OTHER: com.facebook.fresco.ui.common.ImageRenderingInfra;
						public static values(): androidNative.Array<com.facebook.fresco.ui.common.ImageRenderingInfra>;
						public static getEntries(): any;
						public static valueOf(value: string): com.facebook.fresco.ui.common.ImageRenderingInfra;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class LegacyOnFadeListener {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.LegacyOnFadeListener>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.ui.common.LegacyOnFadeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFadeStarted(param0: string): void;
							onFadeFinished(param0: string): void;
						});
						public constructor();
						public onFadeFinished(param0: string): void;
						public onFadeStarted(param0: string): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class MultiUriHelper {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.MultiUriHelper>;
						public static INSTANCE: com.facebook.fresco.ui.common.MultiUriHelper;
						public static getMainUri(MultiUriHelper$getMainUri$uri$1: any, p0: any, MultiUriHelper$getMainUri$firstUri$1: androidNative.Array<any>, p0: com.facebook.common.internal.Fn): globalAndroid.net.Uri;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class NoOpImagePerfNotifier extends com.facebook.fresco.ui.common.ImagePerfNotifier {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.NoOpImagePerfNotifier>;
						public static INSTANCE: com.facebook.fresco.ui.common.NoOpImagePerfNotifier;
						public notifyStatusUpdated(param0: com.facebook.fresco.ui.common.ImagePerfState, param1: com.facebook.fresco.ui.common.ImageLoadStatus): void;
						public notifyVisibilityUpdated(state: com.facebook.fresco.ui.common.ImagePerfState, visibilityState: com.facebook.fresco.ui.common.VisibilityState): void;
						public notifyStatusUpdated(state: com.facebook.fresco.ui.common.ImagePerfState, imageLoadStatus: com.facebook.fresco.ui.common.ImageLoadStatus): void;
						public notifyVisibilityUpdated(param0: com.facebook.fresco.ui.common.ImagePerfState, param1: com.facebook.fresco.ui.common.VisibilityState): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class OnDrawControllerListener<INFO>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.OnDrawControllerListener<any>>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.ui.common.OnDrawControllerListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onImageDrawn(param0: string, param1: INFO, param2: com.facebook.fresco.ui.common.DimensionsInfo): void;
						});
						public constructor();
						public onImageDrawn(param0: string, param1: INFO, param2: com.facebook.fresco.ui.common.DimensionsInfo): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class OnFadeListener {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.OnFadeListener>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.ui.common.OnFadeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFadeStarted(): void;
							onFadeFinished(): void;
							onShownImmediately(): void;
						});
						public constructor();
						public onFadeFinished(): void;
						public onShownImmediately(): void;
						public onFadeStarted(): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class SimpleImagePerfNotifier extends com.facebook.fresco.ui.common.ImagePerfNotifier {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.SimpleImagePerfNotifier>;
						public notifyStatusUpdated(param0: com.facebook.fresco.ui.common.ImagePerfState, param1: com.facebook.fresco.ui.common.ImageLoadStatus): void;
						public notifyVisibilityUpdated(state: com.facebook.fresco.ui.common.ImagePerfState, visibilityState: com.facebook.fresco.ui.common.VisibilityState): void;
						public notifyStatusUpdated(state: com.facebook.fresco.ui.common.ImagePerfState, imageLoadStatus: com.facebook.fresco.ui.common.ImageLoadStatus): void;
						public notifyVisibilityUpdated(param0: com.facebook.fresco.ui.common.ImagePerfState, param1: com.facebook.fresco.ui.common.VisibilityState): void;
						public constructor(imagePerfDataListener: com.facebook.fresco.ui.common.ImagePerfDataListener);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class VisibilityAware {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.VisibilityAware>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.ui.common.VisibilityAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							reportVisible(param0: boolean): void;
						});
						public constructor();
						public reportVisible(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class VisibilityState {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.VisibilityState>;
						public static UNKNOWN: com.facebook.fresco.ui.common.VisibilityState;
						public static VISIBLE: com.facebook.fresco.ui.common.VisibilityState;
						public static INVISIBLE: com.facebook.fresco.ui.common.VisibilityState;
						public static values(): androidNative.Array<com.facebook.fresco.ui.common.VisibilityState>;
						public static valueOf(value: string): com.facebook.fresco.ui.common.VisibilityState;
						public static getEntries(): any;
						public getValue(): number;
					}
					export namespace VisibilityState {
						export class Companion {
							public static class: java.lang.Class<com.facebook.fresco.ui.common.VisibilityState.Companion>;
							public fromInt(it: number): com.facebook.fresco.ui.common.VisibilityState;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace ui {
				export namespace common {
					export class VitoUtils {
						public static class: java.lang.Class<com.facebook.fresco.ui.common.VitoUtils>;
						public static INSTANCE: com.facebook.fresco.ui.common.VitoUtils;
						public static getStringId(id: number): string;
						public static generateIdentifier(): number;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace urimod {
				export class Dimensions {
					public static class: java.lang.Class<com.facebook.fresco.urimod.Dimensions>;
					public getW(): number;
					public toString(): string;
					public copy(w: number, h: number): com.facebook.fresco.urimod.Dimensions;
					public equals(this_: any): boolean;
					public component1(): number;
					public component2(): number;
					public constructor(w: number, h: number);
					public hashCode(): number;
					public getH(): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace urimod {
				export class NopUriModifier extends com.facebook.fresco.urimod.UriModifierInterface {
					public static class: java.lang.Class<com.facebook.fresco.urimod.NopUriModifier>;
					public static INSTANCE: com.facebook.fresco.urimod.NopUriModifier;
					public modifyUri(imageSource: com.facebook.fresco.vito.source.UriImageSource, viewport: com.facebook.fresco.urimod.Dimensions, scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType, callerContext: any, contextChain: com.facebook.common.callercontext.ContextChain, forLoggingOnly: boolean): com.facebook.fresco.urimod.UriModifierInterface.ModificationResult;
					public modifyPrefetchUri(uri: globalAndroid.net.Uri, callerContext: any): globalAndroid.net.Uri;
					public unregisterReverseFallbackUri(uri: globalAndroid.net.Uri): void;
					public unregisterReverseFallbackUri(param0: globalAndroid.net.Uri): void;
					public modifyPrefetchUri(param0: globalAndroid.net.Uri, param1: any): globalAndroid.net.Uri;
					public modifyUri(param0: com.facebook.fresco.vito.source.UriImageSource, param1: com.facebook.fresco.urimod.Dimensions, param2: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param3: any, param4: com.facebook.common.callercontext.ContextChain, param5: boolean): com.facebook.fresco.urimod.UriModifierInterface.ModificationResult;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace urimod {
				export class UriModifier {
					public static class: java.lang.Class<com.facebook.fresco.urimod.UriModifier>;
					public static INSTANCE: com.facebook.fresco.urimod.UriModifier;
					public static INSTANCE: com.facebook.fresco.urimod.UriModifierInterface;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace urimod {
				export class UriModifierInterface {
					public static class: java.lang.Class<com.facebook.fresco.urimod.UriModifierInterface>;
					/**
					 * Constructs a new instance of the com.facebook.fresco.urimod.UriModifierInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						modifyUri(param0: com.facebook.fresco.vito.source.UriImageSource, param1: com.facebook.fresco.urimod.Dimensions, param2: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param3: any, param4: com.facebook.common.callercontext.ContextChain, param5: boolean): com.facebook.fresco.urimod.UriModifierInterface.ModificationResult;
						modifyPrefetchUri(param0: globalAndroid.net.Uri, param1: any): globalAndroid.net.Uri;
						unregisterReverseFallbackUri(param0: globalAndroid.net.Uri): void;
					});
					public constructor();
					public unregisterReverseFallbackUri(param0: globalAndroid.net.Uri): void;
					public modifyPrefetchUri(param0: globalAndroid.net.Uri, param1: any): globalAndroid.net.Uri;
					public modifyUri(param0: com.facebook.fresco.vito.source.UriImageSource, param1: com.facebook.fresco.urimod.Dimensions, param2: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param3: any, param4: com.facebook.common.callercontext.ContextChain, param5: boolean): com.facebook.fresco.urimod.UriModifierInterface.ModificationResult;
				}
				export namespace UriModifierInterface {
					export class DefaultImpls {
						public static class: java.lang.Class<com.facebook.fresco.urimod.UriModifierInterface.DefaultImpls>;
					}
					export abstract class ModificationResult {
						public static class: java.lang.Class<com.facebook.fresco.urimod.UriModifierInterface.ModificationResult>;
						public getBestAllowlistedSize(): java.lang.Integer;
						public toString(): string;
					}
					export namespace ModificationResult {
						export class Disabled extends com.facebook.fresco.urimod.UriModifierInterface.ModificationResult {
							public static class: java.lang.Class<com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.Disabled>;
							public getBestAllowlistedSize(): java.lang.Integer;
							public constructor(comment: string);
						}
						export class FallbackToMbpDiskCache extends com.facebook.fresco.urimod.UriModifierInterface.ModificationResult {
							public static class: java.lang.Class<com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.FallbackToMbpDiskCache>;
							public isBestSize(): boolean;
							public component1(): boolean;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getBestAllowlistedSize(): java.lang.Integer;
							public toString(): string;
							public copy(isBestSize: boolean): com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.FallbackToMbpDiskCache;
							public constructor(isBestSize: boolean);
						}
						export class FallbackToMbpMemoryCache extends com.facebook.fresco.urimod.UriModifierInterface.ModificationResult {
							public static class: java.lang.Class<com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.FallbackToMbpMemoryCache>;
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(isBestSize: string);
							public isBestSize(): string;
							public getBestAllowlistedSize(): java.lang.Integer;
							public toString(): string;
							public copy(isBestSize: string): com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.FallbackToMbpMemoryCache;
							public component1(): string;
						}
						export class FallbackToOriginalUrl extends com.facebook.fresco.urimod.UriModifierInterface.ModificationResult {
							public static class: java.lang.Class<com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.FallbackToOriginalUrl>;
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(bestAllowlistedSize: java.lang.Integer);
							public getBestAllowlistedSize(): java.lang.Integer;
							public toString(): string;
							public component1(): java.lang.Integer;
							public copy(bestAllowlistedSize: java.lang.Integer): com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.FallbackToOriginalUrl;
						}
						export abstract class Modified extends com.facebook.fresco.urimod.UriModifierInterface.ModificationResult {
							public static class: java.lang.Class<com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.Modified>;
							public getNewUri(): globalAndroid.net.Uri;
						}
						export namespace Modified {
							export class ModifiedToAllowlistedSize extends com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.Modified {
								public static class: java.lang.Class<com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.Modified.ModifiedToAllowlistedSize>;
								public constructor(newUrl: globalAndroid.net.Uri, bestAllowlistedSize: java.lang.Integer);
								public getBestAllowlistedSize(): java.lang.Integer;
							}
							export class ModifiedToMaxDimens extends com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.Modified {
								public static class: java.lang.Class<com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.Modified.ModifiedToMaxDimens>;
								public constructor(newUrl: globalAndroid.net.Uri, bestAllowlistedSize: java.lang.Integer);
								public getBestAllowlistedSize(): java.lang.Integer;
							}
						}
						export class Unmodified extends com.facebook.fresco.urimod.UriModifierInterface.ModificationResult {
							public static class: java.lang.Class<com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.Unmodified>;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getBestAllowlistedSize(): java.lang.Integer;
							public component2(): java.lang.Integer;
							public toString(): string;
							public copy(reason: string, bestAllowlistedSize: java.lang.Integer): com.facebook.fresco.urimod.UriModifierInterface.ModificationResult.Unmodified;
							public constructor(reason: string, bestAllowlistedSize: java.lang.Integer);
							public component1(): string;
							public getReason(): string;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace vito {
				export namespace source {
					export class BitmapImageSource extends com.facebook.fresco.vito.source.ImageSource {
						public static class: java.lang.Class<com.facebook.fresco.vito.source.BitmapImageSource>;
						public equals(other: any): boolean;
						public hashCode(): number;
						public component1(): globalAndroid.graphics.Bitmap;
						public copy(bitmap: globalAndroid.graphics.Bitmap): com.facebook.fresco.vito.source.BitmapImageSource;
						public getBitmap(): globalAndroid.graphics.Bitmap;
						public toString(): string;
						public constructor(bitmap: globalAndroid.graphics.Bitmap);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace vito {
				export namespace source {
					export class DrawableImageSource extends com.facebook.fresco.vito.source.ImageSource {
						public static class: java.lang.Class<com.facebook.fresco.vito.source.DrawableImageSource>;
						public equals(other: any): boolean;
						public getDrawable(): globalAndroid.graphics.drawable.Drawable;
						public hashCode(): number;
						public constructor(drawable: globalAndroid.graphics.drawable.Drawable);
						public copy(drawable: globalAndroid.graphics.drawable.Drawable): com.facebook.fresco.vito.source.DrawableImageSource;
						public component1(): globalAndroid.graphics.drawable.Drawable;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace vito {
				export namespace source {
					export class EmptyImageSource extends com.facebook.fresco.vito.source.ImageSource {
						public static class: java.lang.Class<com.facebook.fresco.vito.source.EmptyImageSource>;
						public static INSTANCE: com.facebook.fresco.vito.source.EmptyImageSource;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace vito {
				export namespace source {
					export class FirstAvailableImageSource extends com.facebook.fresco.vito.source.ImageSource {
						public static class: java.lang.Class<com.facebook.fresco.vito.source.FirstAvailableImageSource>;
						public getImageSources(): androidNative.Array<com.facebook.fresco.vito.source.ImageSource>;
						public component1(): androidNative.Array<com.facebook.fresco.vito.source.ImageSource>;
						public equals(other: any): boolean;
						public hashCode(): number;
						public copy(imageSources: androidNative.Array<com.facebook.fresco.vito.source.ImageSource>): com.facebook.fresco.vito.source.FirstAvailableImageSource;
						public constructor(imageSources: androidNative.Array<com.facebook.fresco.vito.source.ImageSource>);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace vito {
				export namespace source {
					export class ImageSource {
						public static class: java.lang.Class<com.facebook.fresco.vito.source.ImageSource>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.vito.source.ImageSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace vito {
				export namespace source {
					export class ImageSourceExtras {
						public static class: java.lang.Class<com.facebook.fresco.vito.source.ImageSourceExtras>;
						public static INSTANCE: com.facebook.fresco.vito.source.ImageSourceExtras;
						public static IMAGE_FORMAT: string; // "image_format"
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace vito {
				export namespace source {
					export class ImageSourceProvider {
						public static class: java.lang.Class<com.facebook.fresco.vito.source.ImageSourceProvider>;
						public static INSTANCE: com.facebook.fresco.vito.source.ImageSourceProvider;
						public static forUri(ImageSourceProvider$forUri$1: globalAndroid.net.Uri, $this$forUri_u24lambda_u241: java.util.Map<string,any>): com.facebook.fresco.vito.source.ImageSource;
						public static forUri(uri: globalAndroid.net.Uri): com.facebook.fresco.vito.source.ImageSource;
						public static forUri(uriString: string): com.facebook.fresco.vito.source.ImageSource;
						public static increasingQuality(lowResImageUri: globalAndroid.net.Uri, highResImageUri: globalAndroid.net.Uri): com.facebook.fresco.vito.source.ImageSource;
						public static emptySource(): com.facebook.fresco.vito.source.ImageSource;
						public setUriParser(set: any): void;
						public static drawable(drawable: globalAndroid.graphics.drawable.Drawable): com.facebook.fresco.vito.source.ImageSource;
						public static increasingQuality(lowResImageSource: com.facebook.fresco.vito.source.ImageSource, highResImageSource: com.facebook.fresco.vito.source.ImageSource): com.facebook.fresco.vito.source.ImageSource;
						public static increasingQuality(lowResImageSource: com.facebook.fresco.vito.source.ImageSource, highResImageSource: com.facebook.fresco.vito.source.ImageSource, extras: java.util.Map<string,any>): com.facebook.fresco.vito.source.ImageSource;
						public static bitmap(bitmap: globalAndroid.graphics.Bitmap): com.facebook.fresco.vito.source.ImageSource;
						public static firstAvailable(imageSources: androidNative.Array<com.facebook.fresco.vito.source.ImageSource>): com.facebook.fresco.vito.source.ImageSource;
						public getUriParser(): any;
						public static forUri(ImageSourceProvider$forUri$uri$1: string, it: java.util.Map<string,any>): com.facebook.fresco.vito.source.ImageSource;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace vito {
				export namespace source {
					export class IncreasingQualityImageSource extends com.facebook.fresco.vito.source.ImageSource {
						public static class: java.lang.Class<com.facebook.fresco.vito.source.IncreasingQualityImageSource>;
						public constructor(lowResSource: com.facebook.fresco.vito.source.ImageSource, highResSource: com.facebook.fresco.vito.source.ImageSource, extras: java.util.Map<string,any>);
						public equals(this_: any): boolean;
						public hashCode(): number;
						public component1(): com.facebook.fresco.vito.source.ImageSource;
						public getStringExtra(key: string): string;
						public toString(): string;
						public getHighResSource(): com.facebook.fresco.vito.source.ImageSource;
						public getExtra(key: string): any;
						public component3(): java.util.Map<string,any>;
						public getLowResSource(): com.facebook.fresco.vito.source.ImageSource;
						public copy(lowResSource: com.facebook.fresco.vito.source.ImageSource, highResSource: com.facebook.fresco.vito.source.ImageSource, extras: java.util.Map<string,any>): com.facebook.fresco.vito.source.IncreasingQualityImageSource;
						public getExtras(): java.util.Map<string,any>;
						public component2(): com.facebook.fresco.vito.source.ImageSource;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace vito {
				export namespace source {
					export class SingleImageSource extends com.facebook.fresco.vito.source.UriImageSource {
						public static class: java.lang.Class<com.facebook.fresco.vito.source.SingleImageSource>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.vito.source.SingleImageSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getUri(): globalAndroid.net.Uri;
							getStringExtra(param0: string): string;
							getImageUri(): globalAndroid.net.Uri;
							getExtras(): java.util.Map<string,any>;
						});
						public constructor();
						public getImageUri(): globalAndroid.net.Uri;
						public getStringExtra(param0: string): string;
						public getUri(): globalAndroid.net.Uri;
						public getExtras(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace vito {
				export namespace source {
					export class SingleImageSourceImpl extends com.facebook.fresco.vito.source.SingleImageSource {
						public static class: java.lang.Class<com.facebook.fresco.vito.source.SingleImageSourceImpl>;
						public getImageUri(): globalAndroid.net.Uri;
						public equals(this_: any): boolean;
						public hashCode(): number;
						public component2(): java.util.Map<string,any>;
						public getUri(): globalAndroid.net.Uri;
						public getStringExtra(key: string): string;
						public toString(): string;
						public getStringExtra(param0: string): string;
						public getExtra(key: string): any;
						public copy(uri: globalAndroid.net.Uri, extras: java.util.Map<string,any>): com.facebook.fresco.vito.source.SingleImageSourceImpl;
						public constructor(uri: globalAndroid.net.Uri, extras: java.util.Map<string,any>);
						public getExtras(): java.util.Map<string,any>;
						public component1(): globalAndroid.net.Uri;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace fresco {
			export namespace vito {
				export namespace source {
					export class UriImageSource extends com.facebook.fresco.vito.source.ImageSource {
						public static class: java.lang.Class<com.facebook.fresco.vito.source.UriImageSource>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.vito.source.UriImageSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getImageUri(): globalAndroid.net.Uri;
							getExtras(): java.util.Map<string,any>;
						});
						public constructor();
						public getImageUri(): globalAndroid.net.Uri;
						public getExtras(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imageformat {
			export class DefaultImageFormatChecker extends com.facebook.imageformat.ImageFormat.FormatChecker {
				public static class: java.lang.Class<com.facebook.imageformat.DefaultImageFormatChecker>;
				public determineFormat(headerBytes: androidNative.Array<number>, headerSize: number): com.facebook.imageformat.ImageFormat;
				public getHeaderSize(): number;
				public determineFormat(param0: androidNative.Array<number>, param1: number): com.facebook.imageformat.ImageFormat;
				public constructor();
			}
			export namespace DefaultImageFormatChecker {
				export class Companion {
					public static class: java.lang.Class<com.facebook.imageformat.DefaultImageFormatChecker.Companion>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imageformat {
			export class DefaultImageFormats {
				public static class: java.lang.Class<com.facebook.imageformat.DefaultImageFormats>;
				public static INSTANCE: com.facebook.imageformat.DefaultImageFormats;
				public static JPEG: com.facebook.imageformat.ImageFormat;
				public static PNG: com.facebook.imageformat.ImageFormat;
				public static GIF: com.facebook.imageformat.ImageFormat;
				public static BMP: com.facebook.imageformat.ImageFormat;
				public static ICO: com.facebook.imageformat.ImageFormat;
				public static WEBP_SIMPLE: com.facebook.imageformat.ImageFormat;
				public static WEBP_LOSSLESS: com.facebook.imageformat.ImageFormat;
				public static WEBP_EXTENDED: com.facebook.imageformat.ImageFormat;
				public static WEBP_EXTENDED_WITH_ALPHA: com.facebook.imageformat.ImageFormat;
				public static WEBP_ANIMATED: com.facebook.imageformat.ImageFormat;
				public static HEIF: com.facebook.imageformat.ImageFormat;
				public static DNG: com.facebook.imageformat.ImageFormat;
				public static BINARY_XML: com.facebook.imageformat.ImageFormat;
				public static AVIF: com.facebook.imageformat.ImageFormat;
				public static defaultFormats: java.util.List<com.facebook.imageformat.ImageFormat>;
				public static isStaticWebpFormat(imageFormat: com.facebook.imageformat.ImageFormat): boolean;
				public static isWebpFormat(imageFormat: com.facebook.imageformat.ImageFormat): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imageformat {
			export class ImageFormat {
				public static class: java.lang.Class<com.facebook.imageformat.ImageFormat>;
				public static UNKNOWN: com.facebook.imageformat.ImageFormat;
				public equals(other: any): boolean;
				public component1(): string;
				public hashCode(): number;
				public copy(name: string, fileExtension: string): com.facebook.imageformat.ImageFormat;
				public component2(): string;
				public constructor(name: string, fileExtension: string);
				public getName(): string;
				public getFileExtension(): string;
				public toString(): string;
			}
			export namespace ImageFormat {
				export class Companion {
					public static class: java.lang.Class<com.facebook.imageformat.ImageFormat.Companion>;
				}
				export class FormatChecker {
					public static class: java.lang.Class<com.facebook.imageformat.ImageFormat.FormatChecker>;
					/**
					 * Constructs a new instance of the com.facebook.imageformat.ImageFormat$FormatChecker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getHeaderSize(): number;
						determineFormat(param0: androidNative.Array<number>, param1: number): com.facebook.imageformat.ImageFormat;
					});
					public constructor();
					public getHeaderSize(): number;
					public determineFormat(param0: androidNative.Array<number>, param1: number): com.facebook.imageformat.ImageFormat;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imageformat {
			export class ImageFormatChecker {
				public static class: java.lang.Class<com.facebook.imageformat.ImageFormatChecker>;
				public setCustomImageFormatCheckers(customImageFormatCheckers: java.util.List<any>): com.facebook.imageformat.ImageFormatChecker;
				public setBinaryXmlEnabled(binaryXmlEnabled: boolean): com.facebook.imageformat.ImageFormatChecker;
				public static getImageFormat_WrapIOException(is: java.io.InputStream): com.facebook.imageformat.ImageFormat;
				public static getImageFormat(is: java.io.InputStream): com.facebook.imageformat.ImageFormat;
				public static getInstance(): com.facebook.imageformat.ImageFormatChecker;
				public static getImageFormat(filename: string): com.facebook.imageformat.ImageFormat;
				public determineImageFormat($this$determineImageFormat_u24lambda_u240: java.io.InputStream): com.facebook.imageformat.ImageFormat;
			}
			export namespace ImageFormatChecker {
				export class Companion {
					public static class: java.lang.Class<com.facebook.imageformat.ImageFormatChecker.Companion>;
					public getImageFormat(fileInputStream: string): com.facebook.imageformat.ImageFormat;
					public getInstance(): com.facebook.imageformat.ImageFormatChecker;
					public getImageFormat(is: java.io.InputStream): com.facebook.imageformat.ImageFormat;
					public getImageFormat_WrapIOException(this_: java.io.InputStream): com.facebook.imageformat.ImageFormat;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imageformat {
			export class ImageFormatCheckerUtils {
				public static class: java.lang.Class<com.facebook.imageformat.ImageFormatCheckerUtils>;
				public static INSTANCE: com.facebook.imageformat.ImageFormatCheckerUtils;
				public static asciiBytes(uee: string): androidNative.Array<number>;
				public static startsWithPattern(byteArray: androidNative.Array<number>, pattern: androidNative.Array<number>): boolean;
				public static hasPatternAt(ImageFormatCheckerUtils$hasPatternAt$1: androidNative.Array<number>, i: androidNative.Array<number>, element$iv: number): boolean;
				public static indexOfPattern(j: androidNative.Array<number>, end: number, k: androidNative.Array<number>, first: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace animated {
				export namespace factory {
					export class AnimatedFactory {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.factory.AnimatedFactory>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.animated.factory.AnimatedFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAnimatedDrawableFactory(param0: globalAndroid.content.Context): com.facebook.imagepipeline.drawable.DrawableFactory;
							getGifDecoder(): com.facebook.imagepipeline.decoder.ImageDecoder;
							getWebPDecoder(): com.facebook.imagepipeline.decoder.ImageDecoder;
						});
						public constructor();
						public getWebPDecoder(): com.facebook.imagepipeline.decoder.ImageDecoder;
						public getGifDecoder(): com.facebook.imagepipeline.decoder.ImageDecoder;
						public getAnimatedDrawableFactory(param0: globalAndroid.content.Context): com.facebook.imagepipeline.drawable.DrawableFactory;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace animated {
				export namespace factory {
					export class AnimatedFactoryProvider {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.factory.AnimatedFactoryProvider>;
						public static INSTANCE: com.facebook.imagepipeline.animated.factory.AnimatedFactoryProvider;
						public static getAnimatedFactory(clazz: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, constructor: com.facebook.imagepipeline.core.ExecutorSupplier, platformBitmapFactory: com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, executorSupplier: boolean, backingCache: boolean, downscaleFrameToDrawableDimensions: number, useBalancedAnimationStrategy: number, animationFpsLimit: java.util.concurrent.ExecutorService): com.facebook.imagepipeline.animated.factory.AnimatedFactory;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace backends {
				export namespace okhttp3 {
					export class OkHttpImagePipelineConfigFactory {
						public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.OkHttpImagePipelineConfigFactory>;
						public static INSTANCE: com.facebook.imagepipeline.backends.okhttp3.OkHttpImagePipelineConfigFactory;
						public static newBuilder(context: globalAndroid.content.Context, okHttpClient: okhttp3.OkHttpClient): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace backends {
				export namespace okhttp3 {
					export class OkHttpNetworkFetcher extends com.facebook.imagepipeline.producers.BaseNetworkFetcher<com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState> {
						public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher>;
						public onFetchCompletion(fetchState: any, byteSize: number): void;
						public constructor();
						public onFetchCompletion(param0: any, param1: number): void;
						public createFetchState(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, context: com.facebook.imagepipeline.producers.ProducerContext): com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState;
						public createFetchState(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): any;
						public getExtraMap(param0: any, param1: number): java.util.Map<string,string>;
						public getExtraMap(fetchState: com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState, byteSize: number): java.util.Map<string,string>;
						public constructor(callFactory: okhttp3.Call.Factory, cancellationExecutor: java.util.concurrent.Executor);
						public fetch(param0: any, param1: com.facebook.imagepipeline.producers.NetworkFetcher.Callback): void;
						public getExtraMap(fetchState: any, byteSize: number): java.util.Map<string,string>;
						public fetchWithRequest(this_: com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState, fetchState: com.facebook.imagepipeline.producers.NetworkFetcher.Callback, callback: okhttp3.Request): void;
						public onFetchCompletion(fetchState: com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState, byteSize: number): void;
						public constructor(callFactory: okhttp3.Call.Factory, cancellationExecutor: java.util.concurrent.Executor, disableOkHttpCache: boolean);
						public fetch(p0: com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState, OkHttpNetworkFetcher$fetch$2: com.facebook.imagepipeline.producers.NetworkFetcher.Callback): void;
						public constructor(okHttpClient: okhttp3.OkHttpClient);
						public shouldPropagate(param0: any): boolean;
					}
					export namespace OkHttpNetworkFetcher {
						export class Companion {
							public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.Companion>;
						}
						export class OkHttpNetworkFetchState extends com.facebook.imagepipeline.producers.FetchState {
							public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState>;
							public submitTime: number;
							public responseTime: number;
							public fetchCompleteTime: number;
							public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, producerContext: com.facebook.imagepipeline.producers.ProducerContext);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace backends {
				export namespace okhttp3 {
					export class OkHttpNetworkFetcherException {
						public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcherException>;
						public getResponseCode(): java.lang.Integer;
						public constructor();
						public getResponseHeaders(): okhttp3.Headers;
						public static fromResponse(response: okhttp3.Response): com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcherException;
						public constructor(responseCode: java.lang.Integer, responseHeaders: okhttp3.Headers);
					}
					export namespace OkHttpNetworkFetcherException {
						export class Companion {
							public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcherException.Companion>;
							public fromResponse(response: okhttp3.Response): com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcherException;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace bitmaps {
				export class ArtBitmapFactory extends com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.ArtBitmapFactory>;
					public constructor(bitmapPool: com.facebook.imagepipeline.memory.BitmapPool, closeableReferenceFactory: com.facebook.imagepipeline.core.CloseableReferenceFactory);
					public constructor();
					public createBitmapInternal(bitmap: number, this_: number, width: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace bitmaps {
				export class EmptyJpegGenerator {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.EmptyJpegGenerator>;
					public constructor(pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory);
					public generate(this_: number, width: number): com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace bitmaps {
				export class HoneycombBitmapCreator {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.HoneycombBitmapCreator>;
					public constructor(poolFactory: com.facebook.imagepipeline.memory.PoolFactory);
					public createNakedBitmap(length: number, pooledByteBuffer: number, encodedBytesArray: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
				}
				export namespace HoneycombBitmapCreator {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.HoneycombBitmapCreator.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace bitmaps {
				export class HoneycombBitmapFactory extends com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.HoneycombBitmapFactory>;
					public constructor(jpegGenerator: com.facebook.imagepipeline.bitmaps.EmptyJpegGenerator, purgeableDecoder: com.facebook.imagepipeline.platform.PlatformDecoder, closeableReferenceFactory: com.facebook.imagepipeline.core.CloseableReferenceFactory);
					public createBitmapInternal(bitmapRef: number, encodedImage: number, encodedImage: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
				}
				export namespace HoneycombBitmapFactory {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.HoneycombBitmapFactory.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace bitmaps {
				export abstract class PlatformBitmapFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory>;
					public createBitmap(colors: androidNative.Array<number>, width: number, height: number, config: globalAndroid.graphics.Bitmap.Config, callerContext: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(display: globalAndroid.util.DisplayMetrics, colors: androidNative.Array<number>, width: number, height: number, config: globalAndroid.graphics.Bitmap.Config, callerContext: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createScaledBitmap(source: globalAndroid.graphics.Bitmap, destinationWidth: number, destinationHeight: number, filter: boolean, callerContext: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(display: globalAndroid.util.DisplayMetrics, colors: androidNative.Array<number>, offset: number, stride: number, width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createScaledBitmap(source: globalAndroid.graphics.Bitmap, destinationWidth: number, destinationHeight: number, filter: boolean): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmapInternal(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(colors: androidNative.Array<number>, width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(display: globalAndroid.util.DisplayMetrics, width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(source: globalAndroid.graphics.Bitmap): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(display: globalAndroid.util.DisplayMetrics, colors: androidNative.Array<number>, width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(source: globalAndroid.graphics.Bitmap, callerContext: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(display: globalAndroid.util.DisplayMetrics, width: number, height: number, config: globalAndroid.graphics.Bitmap.Config, callerContext: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(width: number, height: number, bitmapConfig: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(width: number, height: number, callerContext: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(source: globalAndroid.graphics.Bitmap, x: number, y: number, width: number, height: number, callerContext: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(width: number, height: number, bitmapConfig: globalAndroid.graphics.Bitmap.Config, callerContext: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public createBitmap(source: globalAndroid.graphics.Bitmap, x: number, y: number, width: number, height: number, matrix: globalAndroid.graphics.Matrix, filter: boolean): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(width: number, height: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(source: globalAndroid.graphics.Bitmap, x: number, y: number, width: number, height: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(bitmapRef: globalAndroid.graphics.Bitmap, paint: number, transformed: number, deviceRectangle: number, this_: number, source: globalAndroid.graphics.Matrix, x: boolean, y: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(display: globalAndroid.util.DisplayMetrics, colors: androidNative.Array<number>, offset: number, stride: number, width: number, height: number, config: globalAndroid.graphics.Bitmap.Config, callerContext: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace bitmaps {
				export class PlatformBitmapFactoryProvider {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.PlatformBitmapFactoryProvider>;
					public static INSTANCE: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactoryProvider;
					public static buildPlatformBitmapFactory(poolFactory: com.facebook.imagepipeline.memory.PoolFactory, platformDecoder: com.facebook.imagepipeline.platform.PlatformDecoder, closeableReferenceFactory: com.facebook.imagepipeline.core.CloseableReferenceFactory): com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace bitmaps {
				export class SimpleBitmapReleaser extends com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap> {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.SimpleBitmapReleaser>;
					public release(value: globalAndroid.graphics.Bitmap): void;
					public static getInstance(): com.facebook.imagepipeline.bitmaps.SimpleBitmapReleaser;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export abstract class AbstractAdaptiveCountingMemoryCache<K, V>  extends com.facebook.imagepipeline.cache.CountingMemoryCache<any,any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.AbstractAdaptiveCountingMemoryCache<any,any>>;
					public mMemoryCacheParams: com.facebook.imagepipeline.cache.MemoryCacheParams;
					public getCachedEntries(): com.facebook.imagepipeline.cache.CountingLruMap<any,any>;
					public getOtherEntries(): java.util.Map<globalAndroid.graphics.Bitmap,any>;
					public get(oldLFUExclusive: any): com.facebook.common.references.CloseableReference<any>;
					public inspect(param0: any): any;
					public getCount(): number;
					public contains(predicate: com.facebook.common.internal.Predicate<any>): boolean;
					public getEvictionQueueCount(): number;
					public removeAll(oldMFUExclusives: com.facebook.common.internal.Predicate<any>): number;
					public cache(param0: any, param1: com.facebook.common.references.CloseableReference<any>): com.facebook.common.references.CloseableReference<any>;
					public maybeEvictEntries(): void;
					public getCachedEntries(): com.facebook.imagepipeline.cache.CountingLruMap<any,com.facebook.imagepipeline.cache.CountingMemoryCache.Entry<any,any>>;
					public inspect(key: any): any;
					public get(param0: any): com.facebook.common.references.CloseableReference<any>;
					public clear(): void;
					public getMemoryCacheParams(): com.facebook.imagepipeline.cache.MemoryCacheParams;
					public getInUseCount(): number;
					public contains(param0: any): boolean;
					public contains(key: any): boolean;
					public removeAll(param0: com.facebook.common.internal.Predicate<any>): number;
					public contains(param0: com.facebook.common.internal.Predicate<any>): boolean;
					public cache(key: any, valueRef: com.facebook.common.references.CloseableReference<any>): com.facebook.common.references.CloseableReference<any>;
					public reportData(): string;
					public logIllegalAdaptiveRate(): void;
					public probe(this_: any): void;
					public probe(param0: any): void;
					public getSizeInBytes(): number;
					public cache(storedAccessCount: any, notPresentInBoth: com.facebook.common.references.CloseableReference<any>, oldEntry: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<any>): com.facebook.common.references.CloseableReference<any>;
					public getDebugData(): string;
					public constructor(memoryCacheParamsSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>, cacheTrimStrategy: com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy, valueDescriptor: com.facebook.imagepipeline.cache.ValueDescriptor<any>, adaptiveRatePromil: number, frequentlyUsedThreshold: number, ghostListMaxSize: number, lfuFractionPromil: number);
					public reuse(this_: any): com.facebook.common.references.CloseableReference<any>;
					public trim(targetEvictionQueueSize: com.facebook.common.memory.MemoryTrimType): void;
					public reuse(param0: any): com.facebook.common.references.CloseableReference<any>;
					public cache(param0: any, param1: com.facebook.common.references.CloseableReference<any>, param2: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<any>): com.facebook.common.references.CloseableReference<any>;
					public logIllegalLfuFraction(): void;
					public getInUseSizeInBytes(): number;
					public getEvictionQueueSizeInBytes(): number;
				}
				export namespace AbstractAdaptiveCountingMemoryCache {
					export class ArrayListType {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.AbstractAdaptiveCountingMemoryCache.ArrayListType>;
						public static LFU: com.facebook.imagepipeline.cache.AbstractAdaptiveCountingMemoryCache.ArrayListType;
						public static MFU: com.facebook.imagepipeline.cache.AbstractAdaptiveCountingMemoryCache.ArrayListType;
						public static valueOf(name: string): com.facebook.imagepipeline.cache.AbstractAdaptiveCountingMemoryCache.ArrayListType;
						public static values(): androidNative.Array<com.facebook.imagepipeline.cache.AbstractAdaptiveCountingMemoryCache.ArrayListType>;
					}
					export class IntMapArrayList<E>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.AbstractAdaptiveCountingMemoryCache.IntMapArrayList<any>>;
						public constructor(this$0: com.facebook.imagepipeline.cache.AbstractAdaptiveCountingMemoryCache<any,any>, maxCapacity: number);
						public increaseValueIfExists(element: E): void;
						public getValue(element: E): java.lang.Integer;
						public contains(element: E): boolean;
						public size(): number;
						public addPair(element: E, second: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class BitmapMemoryCacheFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.BitmapMemoryCacheFactory>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.BitmapMemoryCacheFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>, param1: com.facebook.common.memory.MemoryTrimmableRegistry, param2: com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy, param3: boolean, param4: boolean, param5: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<com.facebook.cache.common.CacheKey>): com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
					});
					public constructor();
					public create(param0: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>, param1: com.facebook.common.memory.MemoryTrimmableRegistry, param2: com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy, param3: boolean, param4: boolean, param5: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<com.facebook.cache.common.CacheKey>): com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class BitmapMemoryCacheKey extends com.facebook.cache.common.CacheKey {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.BitmapMemoryCacheKey>;
					public getSourceString(): string;
					public getUriString(): string;
					public containsUri(uri: globalAndroid.net.Uri): boolean;
					public component2(): com.facebook.imagepipeline.common.ResizeOptions;
					public getInBitmapCacheSince(): number;
					public getResizeOptions(): com.facebook.imagepipeline.common.ResizeOptions;
					public component4(): com.facebook.imagepipeline.common.ImageDecodeOptions;
					public toString(): string;
					public setCallerContext(set: any): void;
					public copy(sourceString: string, resizeOptions: com.facebook.imagepipeline.common.ResizeOptions, rotationOptions: com.facebook.imagepipeline.common.RotationOptions, imageDecodeOptions: com.facebook.imagepipeline.common.ImageDecodeOptions, postprocessorCacheKey: com.facebook.cache.common.CacheKey, postprocessorName: string): com.facebook.imagepipeline.cache.BitmapMemoryCacheKey;
					public getRotationOptions(): com.facebook.imagepipeline.common.RotationOptions;
					public hashCode(): number;
					public getImageDecodeOptions(): com.facebook.imagepipeline.common.ImageDecodeOptions;
					public constructor(result: string, $this$hash_u24lambda_u240: com.facebook.imagepipeline.common.ResizeOptions, this_: com.facebook.imagepipeline.common.RotationOptions, sourceString: com.facebook.imagepipeline.common.ImageDecodeOptions, resizeOptions: com.facebook.cache.common.CacheKey, rotationOptions: string);
					public isResourceIdForDebugging(): boolean;
					public equals(this_: any): boolean;
					public containsUri(param0: globalAndroid.net.Uri): boolean;
					public component3(): com.facebook.imagepipeline.common.RotationOptions;
					public equals(param0: any): boolean;
					public component1(): string;
					public component5(): com.facebook.cache.common.CacheKey;
					public component6(): string;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
					public getPostprocessorName(): string;
					public getCallerContext(): any;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class BitmapMemoryCacheTrimStrategy extends com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.BitmapMemoryCacheTrimStrategy>;
					public constructor();
					public getTrimRatio(trimType: com.facebook.common.memory.MemoryTrimType): number;
					public getTrimRatio(param0: com.facebook.common.memory.MemoryTrimType): number;
				}
				export namespace BitmapMemoryCacheTrimStrategy {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.BitmapMemoryCacheTrimStrategy.Companion>;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.BitmapMemoryCacheTrimStrategy.WhenMappings>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class BoundedLinkedHashSet<E>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.BoundedLinkedHashSet<any>>;
					public contains(o: E): boolean;
					public add(key: E): boolean;
					public constructor(maxSize: number);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class BufferedDiskCache {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.BufferedDiskCache>;
					public contains(key: com.facebook.cache.common.CacheKey): bolts.Task<java.lang.Boolean>;
					public remove(exception: com.facebook.cache.common.CacheKey): bolts.Task<java.lang.Void>;
					public diskCheckSync(key: com.facebook.cache.common.CacheKey): boolean;
					public get(it: com.facebook.cache.common.CacheKey, traceSectionBufferedDiskCache$get$1: java.util.concurrent.atomic.AtomicBoolean): bolts.Task<com.facebook.imagepipeline.image.EncodedImage>;
					public containsSync(key: com.facebook.cache.common.CacheKey): boolean;
					public addKeyForAsyncProbing(key: com.facebook.cache.common.CacheKey): void;
					public put(exception: com.facebook.cache.common.CacheKey, traceSectionBufferedDiskCache$put$1: com.facebook.imagepipeline.image.EncodedImage): void;
					public clearAll(): bolts.Task<java.lang.Void>;
					public constructor(fileCache: com.facebook.cache.disk.FileCache, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory, pooledByteStreams: com.facebook.common.memory.PooledByteStreams, readExecutor: java.util.concurrent.Executor, writeExecutor: java.util.concurrent.Executor, imageCacheStatsTracker: com.facebook.imagepipeline.cache.ImageCacheStatsTracker);
					public probe(exception: com.facebook.cache.common.CacheKey): bolts.Task<java.lang.Void>;
					public getSize(): number;
				}
				export namespace BufferedDiskCache {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.BufferedDiskCache.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class CacheKeyFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.CacheKeyFactory>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.CacheKeyFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getBitmapCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
						getPostprocessedBitmapCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
						getEncodedCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
						getEncodedCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: globalAndroid.net.Uri, param2: any): com.facebook.cache.common.CacheKey;
					});
					public constructor();
					public getPostprocessedBitmapCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
					public getEncodedCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
					public getEncodedCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: globalAndroid.net.Uri, param2: any): com.facebook.cache.common.CacheKey;
					public getBitmapCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class CountingLruBitmapMemoryCacheFactory extends com.facebook.imagepipeline.cache.BitmapMemoryCacheFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.CountingLruBitmapMemoryCacheFactory>;
					public create(param0: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>, param1: com.facebook.common.memory.MemoryTrimmableRegistry, param2: com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy, param3: boolean, param4: boolean, param5: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<com.facebook.cache.common.CacheKey>): com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
					public constructor();
					public create(bitmapMemoryCacheParamsSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>, memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, trimStrategy: com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy, storeEntrySize: boolean, ignoreSizeMismatch: boolean, observer: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<com.facebook.cache.common.CacheKey>): com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class CountingLruMap<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.CountingLruMap<any,any>>;
					public put(key: K, value: V): V;
					public resetSize(): void;
					public remove(key: K): V;
					public getCount(): number;
					public clear(): java.util.ArrayList<V>;
					public constructor(valueDescriptor: com.facebook.imagepipeline.cache.ValueDescriptor<V>);
					public removeAll(this_: com.facebook.common.internal.Predicate<K>): java.util.ArrayList<V>;
					public getFirstKey(): K;
					public getSizeInBytes(): number;
					public getMatchingEntries(this_: com.facebook.common.internal.Predicate<K>): java.util.ArrayList<java.util.Map.Entry<K,V>>;
					public get(key: K): V;
					public contains(key: K): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class CountingMemoryCache<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.CountingMemoryCache<any,any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.CountingMemoryCache<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cache(param0: K, param1: com.facebook.common.references.CloseableReference<V>, param2: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<K>): com.facebook.common.references.CloseableReference<V>;
						reuse(param0: K): com.facebook.common.references.CloseableReference<V>;
						maybeEvictEntries(): void;
						getInUseSizeInBytes(): number;
						getEvictionQueueCount(): number;
						getEvictionQueueSizeInBytes(): number;
						clear(): void;
						getMemoryCacheParams(): com.facebook.imagepipeline.cache.MemoryCacheParams;
						getCachedEntries(): com.facebook.imagepipeline.cache.CountingLruMap<K,com.facebook.imagepipeline.cache.CountingMemoryCache.Entry<K,V>>;
						getOtherEntries(): java.util.Map<globalAndroid.graphics.Bitmap,any>;
						cache(param0: K, param1: com.facebook.common.references.CloseableReference<V>): com.facebook.common.references.CloseableReference<V>;
						get(param0: K): com.facebook.common.references.CloseableReference<V>;
						inspect(param0: K): V;
						probe(param0: K): void;
						removeAll(param0: com.facebook.common.internal.Predicate<K>): number;
						contains(param0: com.facebook.common.internal.Predicate<K>): boolean;
						contains(param0: K): boolean;
						getCount(): number;
						getSizeInBytes(): number;
						getDebugData(): string;
					});
					public constructor();
					public getOtherEntries(): java.util.Map<globalAndroid.graphics.Bitmap,any>;
					public inspect(param0: K): V;
					public cache(param0: K, param1: com.facebook.common.references.CloseableReference<V>, param2: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<K>): com.facebook.common.references.CloseableReference<V>;
					public contains(param0: K): boolean;
					public getCount(): number;
					public removeAll(param0: com.facebook.common.internal.Predicate<K>): number;
					public get(param0: K): com.facebook.common.references.CloseableReference<V>;
					public getEvictionQueueCount(): number;
					public getSizeInBytes(): number;
					public getDebugData(): string;
					public contains(param0: com.facebook.common.internal.Predicate<K>): boolean;
					public maybeEvictEntries(): void;
					public reuse(param0: K): com.facebook.common.references.CloseableReference<V>;
					public probe(param0: K): void;
					public clear(): void;
					public getMemoryCacheParams(): com.facebook.imagepipeline.cache.MemoryCacheParams;
					public cache(param0: K, param1: com.facebook.common.references.CloseableReference<V>): com.facebook.common.references.CloseableReference<V>;
					public getInUseSizeInBytes(): number;
					public getEvictionQueueSizeInBytes(): number;
					public getCachedEntries(): com.facebook.imagepipeline.cache.CountingLruMap<K,com.facebook.imagepipeline.cache.CountingMemoryCache.Entry<K,V>>;
				}
				export namespace CountingMemoryCache {
					export class Entry<K, V>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.CountingMemoryCache.Entry<any,any>>;
						public key: K;
						public valueRef: com.facebook.common.references.CloseableReference<V>;
						public clientCount: number;
						public isOrphan: boolean;
						public observer: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<K>;
						public accessCount: number;
						public size: number;
						public static of(key: any, valueRef: com.facebook.common.references.CloseableReference, observer: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<any>): com.facebook.imagepipeline.cache.CountingMemoryCache.Entry<any,any>;
						public static of(key: any, valueRef: com.facebook.common.references.CloseableReference, size: number, observer: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<any>): com.facebook.imagepipeline.cache.CountingMemoryCache.Entry<any,any>;
					}
					export class EntryStateObserver<K>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<any>>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.cache.CountingMemoryCache$EntryStateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onExclusivityChanged(param0: K, param1: boolean): void;
						});
						public constructor();
						public onExclusivityChanged(param0: K, param1: boolean): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class CountingMemoryCacheInspector<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.CountingMemoryCacheInspector<any,any>>;
					public dumpCacheContent(): com.facebook.imagepipeline.cache.CountingMemoryCacheInspector.DumpInfo<K,V>;
					public constructor(countingBitmapCache: com.facebook.imagepipeline.cache.CountingMemoryCache<K,V>);
				}
				export namespace CountingMemoryCacheInspector {
					export class DumpInfo<K, V>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.CountingMemoryCacheInspector.DumpInfo<any,any>>;
						public maxSize: number;
						public maxEntriesCount: number;
						public maxEntrySize: number;
						public size: number;
						public lruSize: number;
						public lruEntries: java.util.List<com.facebook.imagepipeline.cache.CountingMemoryCacheInspector.DumpInfoEntry<K,V>>;
						public sharedEntries: java.util.List<com.facebook.imagepipeline.cache.CountingMemoryCacheInspector.DumpInfoEntry<K,V>>;
						public otherEntries: java.util.Map<globalAndroid.graphics.Bitmap,any>;
						public constructor(size: number, lruSize: number, params: com.facebook.imagepipeline.cache.MemoryCacheParams);
						public release(): void;
					}
					export class DumpInfoEntry<K, V>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.CountingMemoryCacheInspector.DumpInfoEntry<any,any>>;
						public key: K;
						public value: com.facebook.common.references.CloseableReference<V>;
						public constructor(key: K, valueRef: com.facebook.common.references.CloseableReference<V>);
						public release(): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class DefaultBitmapMemoryCacheParamsSupplier extends com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams> {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.DefaultBitmapMemoryCacheParamsSupplier>;
					public constructor(activityManager: globalAndroid.app.ActivityManager);
					public get(): com.facebook.imagepipeline.cache.MemoryCacheParams;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class DefaultCacheKeyFactory extends com.facebook.imagepipeline.cache.CacheKeyFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.DefaultCacheKeyFactory>;
					public static setShouldRemoveCallerContextFromCacheKey(shouldRemoveCallerContextFromCacheKey: boolean): void;
					public getEncodedCacheKey(request: com.facebook.imagepipeline.request.ImageRequest, sourceUri: globalAndroid.net.Uri, callerContext: any): com.facebook.cache.common.CacheKey;
					public getCacheKeySourceUri(sourceUri: globalAndroid.net.Uri): globalAndroid.net.Uri;
					public constructor();
					public getPostprocessedBitmapCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
					public getEncodedCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
					public getEncodedCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: globalAndroid.net.Uri, param2: any): com.facebook.cache.common.CacheKey;
					public getBitmapCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
					public getPostprocessedBitmapCacheKey(postprocessorName: com.facebook.imagepipeline.request.ImageRequest, this_: any): com.facebook.cache.common.CacheKey;
					public getEncodedCacheKey(request: com.facebook.imagepipeline.request.ImageRequest, callerContext: any): com.facebook.cache.common.CacheKey;
					public static getInstance(): com.facebook.imagepipeline.cache.DefaultCacheKeyFactory;
					public getBitmapCacheKey(request: com.facebook.imagepipeline.request.ImageRequest, callerContext: any): com.facebook.cache.common.CacheKey;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class DefaultEncodedMemoryCacheParamsSupplier extends com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams> {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.DefaultEncodedMemoryCacheParamsSupplier>;
					public constructor();
					public get(): com.facebook.imagepipeline.cache.MemoryCacheParams;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class EncodedCountingMemoryCacheFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.EncodedCountingMemoryCacheFactory>;
					public static get(encodedMemoryCacheParamsSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>, memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, cacheTrimStrategy: com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy): com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>;
					public constructor();
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class EncodedMemoryCacheFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.EncodedMemoryCacheFactory>;
					public static get(encodedMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, imageCacheStatsTracker: com.facebook.imagepipeline.cache.ImageCacheStatsTracker): com.facebook.imagepipeline.cache.InstrumentedMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>;
					public constructor();
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class ImageCacheStatsTracker {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.ImageCacheStatsTracker>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.ImageCacheStatsTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBitmapCachePut(param0: com.facebook.cache.common.CacheKey): void;
						onBitmapCacheHit(param0: com.facebook.cache.common.CacheKey): void;
						onBitmapCacheMiss(param0: com.facebook.cache.common.CacheKey): void;
						onMemoryCachePut(param0: com.facebook.cache.common.CacheKey): void;
						onMemoryCacheHit(param0: com.facebook.cache.common.CacheKey): void;
						onMemoryCacheMiss(param0: com.facebook.cache.common.CacheKey): void;
						onStagingAreaHit(param0: com.facebook.cache.common.CacheKey): void;
						onStagingAreaMiss(param0: com.facebook.cache.common.CacheKey): void;
						onDiskCacheHit(param0: com.facebook.cache.common.CacheKey): void;
						onDiskCacheMiss(param0: com.facebook.cache.common.CacheKey): void;
						onDiskCacheGetFail(param0: com.facebook.cache.common.CacheKey): void;
						onDiskCachePut(param0: com.facebook.cache.common.CacheKey): void;
						registerBitmapMemoryCache(param0: com.facebook.imagepipeline.cache.MemoryCache<any,any>): void;
						registerEncodedMemoryCache(param0: com.facebook.imagepipeline.cache.MemoryCache<any,any>): void;
					});
					public constructor();
					public onStagingAreaHit(param0: com.facebook.cache.common.CacheKey): void;
					public onDiskCachePut(param0: com.facebook.cache.common.CacheKey): void;
					public registerBitmapMemoryCache(param0: com.facebook.imagepipeline.cache.MemoryCache<any,any>): void;
					public onStagingAreaMiss(param0: com.facebook.cache.common.CacheKey): void;
					public onMemoryCachePut(param0: com.facebook.cache.common.CacheKey): void;
					public onDiskCacheHit(param0: com.facebook.cache.common.CacheKey): void;
					public onBitmapCachePut(param0: com.facebook.cache.common.CacheKey): void;
					public onBitmapCacheHit(param0: com.facebook.cache.common.CacheKey): void;
					public onMemoryCacheMiss(param0: com.facebook.cache.common.CacheKey): void;
					public onMemoryCacheHit(param0: com.facebook.cache.common.CacheKey): void;
					public registerEncodedMemoryCache(param0: com.facebook.imagepipeline.cache.MemoryCache<any,any>): void;
					public onDiskCacheMiss(param0: com.facebook.cache.common.CacheKey): void;
					public onBitmapCacheMiss(param0: com.facebook.cache.common.CacheKey): void;
					public onDiskCacheGetFail(param0: com.facebook.cache.common.CacheKey): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class InstrumentedMemoryCache<K, V>  extends com.facebook.imagepipeline.cache.MemoryCache<any,any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.InstrumentedMemoryCache<any,any>>;
					public trim(trimType: com.facebook.common.memory.MemoryTrimType): void;
					public contains(key: any): boolean;
					public inspect(param0: any): any;
					public getCount(): number;
					public removeAll(param0: com.facebook.common.internal.Predicate<any>): number;
					public contains(param0: com.facebook.common.internal.Predicate<any>): boolean;
					public get(key: any): com.facebook.common.references.CloseableReference<any>;
					public cache(key: any, value: com.facebook.common.references.CloseableReference<any>): com.facebook.common.references.CloseableReference<any>;
					public contains(predicate: com.facebook.common.internal.Predicate<any>): boolean;
					public probe(key: any): void;
					public probe(param0: any): void;
					public getSizeInBytes(): number;
					public getDebugData(): string;
					public cache(param0: any, param1: com.facebook.common.references.CloseableReference<any>): com.facebook.common.references.CloseableReference<any>;
					public inspect(key: any): any;
					public get(param0: any): com.facebook.common.references.CloseableReference<any>;
					public constructor(delegate: com.facebook.imagepipeline.cache.MemoryCache<any,any>, tracker: com.facebook.imagepipeline.cache.MemoryCacheTracker<any>);
					public removeAll(predicate: com.facebook.common.internal.Predicate<any>): number;
					public contains(param0: any): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class InstrumentedMemoryCacheBitmapMemoryCacheFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.InstrumentedMemoryCacheBitmapMemoryCacheFactory>;
					public static get(bitmapMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, imageCacheStatsTracker: com.facebook.imagepipeline.cache.ImageCacheStatsTracker): com.facebook.imagepipeline.cache.InstrumentedMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
					public constructor();
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class LruCountingMemoryCache<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.LruCountingMemoryCache<any,any>>;
					public mMemoryCacheParams: com.facebook.imagepipeline.cache.MemoryCacheParams;
					public constructor(valueDescriptor: com.facebook.imagepipeline.cache.ValueDescriptor<V>, cacheTrimStrategy: com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy, memoryCacheParamsSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>, entryStateObserver: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<K>, storeEntrySize: boolean, ignoreSizeMismatch: boolean);
					public probe(this_: K): void;
					public getOtherEntries(): java.util.Map<globalAndroid.graphics.Bitmap,any>;
					public getCount(): number;
					public cache(param0: K, param1: com.facebook.common.references.CloseableReference<V>, param2: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<K>): com.facebook.common.references.CloseableReference<V>;
					public contains(param0: K): boolean;
					public removeAll(param0: com.facebook.common.internal.Predicate<K>): number;
					public contains(predicate: com.facebook.common.internal.Predicate<K>): boolean;
					public getEvictionQueueCount(): number;
					public reuse(this_: K): com.facebook.common.references.CloseableReference<V>;
					public maybeEvictEntries(): void;
					public inspect(key: K): V;
					public reuse(param0: K): com.facebook.common.references.CloseableReference<V>;
					public probe(param0: K): void;
					public removeAll(oldEntries: com.facebook.common.internal.Predicate<K>): number;
					public clear(): void;
					public getMemoryCacheParams(): com.facebook.imagepipeline.cache.MemoryCacheParams;
					public cache(param0: K, param1: com.facebook.common.references.CloseableReference<V>): com.facebook.common.references.CloseableReference<V>;
					public cache(key: K, valueRef: com.facebook.common.references.CloseableReference<V>): com.facebook.common.references.CloseableReference<V>;
					public getInUseCount(): number;
					public cache(newEntry: K, oldEntry: com.facebook.common.references.CloseableReference<V>, value: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<K>): com.facebook.common.references.CloseableReference<V>;
					public inspect(param0: K): V;
					public get(param0: K): com.facebook.common.references.CloseableReference<V>;
					public getSizeInBytes(): number;
					public getDebugData(): string;
					public contains(param0: com.facebook.common.internal.Predicate<K>): boolean;
					public trim(targetEvictionQueueSize: com.facebook.common.memory.MemoryTrimType): void;
					public get(oldExclusive: K): com.facebook.common.references.CloseableReference<V>;
					public contains(key: K): boolean;
					public getCachedEntries(): com.facebook.imagepipeline.cache.CountingLruMap<K,com.facebook.imagepipeline.cache.CountingMemoryCache.Entry<K,V>>;
					public getInUseSizeInBytes(): number;
					public getEvictionQueueSizeInBytes(): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class MemoryCache<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.MemoryCache<any,any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.MemoryCache<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cache(param0: K, param1: com.facebook.common.references.CloseableReference<V>): com.facebook.common.references.CloseableReference<V>;
						get(param0: K): com.facebook.common.references.CloseableReference<V>;
						inspect(param0: K): V;
						probe(param0: K): void;
						removeAll(param0: com.facebook.common.internal.Predicate<K>): number;
						contains(param0: com.facebook.common.internal.Predicate<K>): boolean;
						contains(param0: K): boolean;
						getCount(): number;
						getSizeInBytes(): number;
						getDebugData(): string;
					});
					public constructor();
					public contains(param0: com.facebook.common.internal.Predicate<K>): boolean;
					public inspect(param0: K): V;
					public probe(param0: K): void;
					public contains(param0: K): boolean;
					public getCount(): number;
					public removeAll(param0: com.facebook.common.internal.Predicate<K>): number;
					public cache(param0: K, param1: com.facebook.common.references.CloseableReference<V>): com.facebook.common.references.CloseableReference<V>;
					public get(param0: K): com.facebook.common.references.CloseableReference<V>;
					public getSizeInBytes(): number;
					public getDebugData(): string;
				}
				export namespace MemoryCache {
					export class CacheTrimStrategy {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.cache.MemoryCache$CacheTrimStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getTrimRatio(param0: com.facebook.common.memory.MemoryTrimType): number;
						});
						public constructor();
						public getTrimRatio(param0: com.facebook.common.memory.MemoryTrimType): number;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class MemoryCacheParams {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.MemoryCacheParams>;
					public maxCacheSize: number;
					public maxCacheEntries: number;
					public maxEvictionQueueSize: number;
					public maxEvictionQueueEntries: number;
					public maxCacheEntrySize: number;
					public paramsCheckIntervalMs: number;
					public constructor(maxCacheSize: number, maxCacheEntries: number, maxEvictionQueueSize: number, maxEvictionQueueEntries: number, maxCacheEntrySize: number, paramsCheckIntervalMs: number);
					public constructor(maxCacheSize: number, maxCacheEntries: number, maxEvictionQueueSize: number, maxEvictionQueueEntries: number, maxCacheEntrySize: number);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class MemoryCacheTracker<K>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.MemoryCacheTracker<any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.MemoryCacheTracker<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCacheHit(param0: K): void;
						onCacheMiss(param0: K): void;
						onCachePut(param0: K): void;
					});
					public constructor();
					public onCacheHit(param0: K): void;
					public onCachePut(param0: K): void;
					public onCacheMiss(param0: K): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class NativeMemoryCacheTrimStrategy extends com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.NativeMemoryCacheTrimStrategy>;
					public constructor();
					public getTrimRatio(trimType: com.facebook.common.memory.MemoryTrimType): number;
					public getTrimRatio(param0: com.facebook.common.memory.MemoryTrimType): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class NoOpImageCacheStatsTracker extends com.facebook.imagepipeline.cache.ImageCacheStatsTracker {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.NoOpImageCacheStatsTracker>;
					public onDiskCachePut(param0: com.facebook.cache.common.CacheKey): void;
					public onBitmapCachePut(cacheKey: com.facebook.cache.common.CacheKey): void;
					public onMemoryCachePut(param0: com.facebook.cache.common.CacheKey): void;
					public onBitmapCacheMiss(cacheKey: com.facebook.cache.common.CacheKey): void;
					public onBitmapCachePut(param0: com.facebook.cache.common.CacheKey): void;
					public onDiskCacheHit(cacheKey: com.facebook.cache.common.CacheKey): void;
					public onMemoryCacheMiss(param0: com.facebook.cache.common.CacheKey): void;
					public onStagingAreaHit(cacheKey: com.facebook.cache.common.CacheKey): void;
					public onMemoryCacheMiss(cacheKey: com.facebook.cache.common.CacheKey): void;
					public onDiskCacheMiss(cacheKey: com.facebook.cache.common.CacheKey): void;
					public onBitmapCacheHit(cacheKey: com.facebook.cache.common.CacheKey): void;
					public onStagingAreaHit(param0: com.facebook.cache.common.CacheKey): void;
					public onDiskCacheGetFail(cacheKey: com.facebook.cache.common.CacheKey): void;
					public registerBitmapMemoryCache(param0: com.facebook.imagepipeline.cache.MemoryCache<any,any>): void;
					public onMemoryCachePut(cacheKey: com.facebook.cache.common.CacheKey): void;
					public onStagingAreaMiss(param0: com.facebook.cache.common.CacheKey): void;
					public onStagingAreaMiss(cacheKey: com.facebook.cache.common.CacheKey): void;
					public static getInstance(): com.facebook.imagepipeline.cache.NoOpImageCacheStatsTracker;
					public onDiskCacheHit(param0: com.facebook.cache.common.CacheKey): void;
					public onBitmapCacheHit(param0: com.facebook.cache.common.CacheKey): void;
					public onMemoryCacheHit(param0: com.facebook.cache.common.CacheKey): void;
					public onDiskCachePut(cacheKey: com.facebook.cache.common.CacheKey): void;
					public registerEncodedMemoryCache(param0: com.facebook.imagepipeline.cache.MemoryCache<any,any>): void;
					public onDiskCacheMiss(param0: com.facebook.cache.common.CacheKey): void;
					public onBitmapCacheMiss(param0: com.facebook.cache.common.CacheKey): void;
					public registerBitmapMemoryCache(bitmapMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<any,any>): void;
					public onMemoryCacheHit(cacheKey: com.facebook.cache.common.CacheKey): void;
					public registerEncodedMemoryCache(encodedMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<any,any>): void;
					public onDiskCacheGetFail(param0: com.facebook.cache.common.CacheKey): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class StagingArea {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.StagingArea>;
					public containsKey(key: com.facebook.cache.common.CacheKey): boolean;
					public put(key: com.facebook.cache.common.CacheKey, encodedImage: com.facebook.imagepipeline.image.EncodedImage): void;
					public static getInstance(): com.facebook.imagepipeline.cache.StagingArea;
					public remove(key: com.facebook.cache.common.CacheKey, encodedImage: com.facebook.imagepipeline.image.EncodedImage): boolean;
					public remove(this_: com.facebook.cache.common.CacheKey): boolean;
					public get(key: com.facebook.cache.common.CacheKey): com.facebook.imagepipeline.image.EncodedImage;
					public clearAll(): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace cache {
				export class ValueDescriptor<V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.ValueDescriptor<any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.ValueDescriptor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSizeInBytes(param0: V): number;
					});
					public constructor();
					public getSizeInBytes(param0: V): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace common {
				export class BytesRange {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.BytesRange>;
					public to: number;
					public static TO_END_OF_CONTENT: number; // 2147483647
					public contains(compare: com.facebook.imagepipeline.common.BytesRange): boolean;
					public static fromContentRangeHeader(header: string): com.facebook.imagepipeline.common.BytesRange;
					public toString(): string;
					public equals(this_: any): boolean;
					public static from(from: number): com.facebook.imagepipeline.common.BytesRange;
					public constructor(from: number, to: number);
					public component1(): number;
					public toHttpRangeHeaderValue(): string;
					public component2(): number;
					public copy(from: number, to: number): com.facebook.imagepipeline.common.BytesRange;
					public static toMax(to: number): com.facebook.imagepipeline.common.BytesRange;
					public hashCode(): number;
				}
				export namespace BytesRange {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.common.BytesRange.Companion>;
						public from(from: number): com.facebook.imagepipeline.common.BytesRange;
						public toMax(to: number): com.facebook.imagepipeline.common.BytesRange;
						public fromContentRangeHeader(from: string): com.facebook.imagepipeline.common.BytesRange;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace common {
				export class ImageDecodeOptions {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.ImageDecodeOptions>;
					public minDecodeIntervalMs: number;
					public maxDimensionPx: number;
					public decodePreviewFrame: boolean;
					public useLastFrameForPreview: boolean;
					public useEncodedImageForPreview: boolean;
					public decodeAllFrames: boolean;
					public forceStaticImage: boolean;
					public bitmapConfig: globalAndroid.graphics.Bitmap.Config;
					public animatedBitmapConfig: globalAndroid.graphics.Bitmap.Config;
					public customImageDecoder: com.facebook.imagepipeline.decoder.ImageDecoder;
					public bitmapTransformation: com.facebook.imagepipeline.transformation.BitmapTransformation;
					public colorSpace: globalAndroid.graphics.ColorSpace;
					public static defaults(): com.facebook.imagepipeline.common.ImageDecodeOptions;
					public toString(): string;
					public toStringHelper(): com.facebook.common.internal.Objects.ToStringHelper;
					public constructor(b: com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder<any>);
					public static newBuilder(): com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder<any>;
					public equals(o: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace common {
				export class ImageDecodeOptionsBuilder<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder<any>>;
					public getDecodePreviewFrame(): boolean;
					public build(): com.facebook.imagepipeline.common.ImageDecodeOptions;
					public getAnimatedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
					public setDecodePreviewFrame(decodePreviewFrame: boolean): T;
					public setMinDecodeIntervalMs(intervalMs: number): T;
					public setFrom(options: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder<any>;
					public setMaxDimensionPx(maxDimensionPx: number): T;
					public getThis(): T;
					public getUseLastFrameForPreview(): boolean;
					public setExcludeBitmapConfigFromComparison(excludeBitmapConfigFromComparison: boolean): T;
					public getForceStaticImage(): boolean;
					public constructor();
					public setUseLastFrameForPreview(useLastFrameForPreview: boolean): T;
					public getDecodeAllFrames(): boolean;
					public getExcludeBitmapConfigFromComparison(): boolean;
					public setDecodeAllFrames(decodeAllFrames: boolean): T;
					public setAnimatedBitmapConfig(animatedBitmapConfig: globalAndroid.graphics.Bitmap.Config): T;
					public getCustomImageDecoder(): com.facebook.imagepipeline.decoder.ImageDecoder;
					public setUseEncodedImageForPreview(useEncodedImageForPreview: boolean): T;
					public getMaxDimensionPx(): number;
					public setBitmapTransformation(bitmapTransformation: com.facebook.imagepipeline.transformation.BitmapTransformation): T;
					public setColorSpace(colorSpace: globalAndroid.graphics.ColorSpace): T;
					public getBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
					public setBitmapConfig(bitmapConfig: globalAndroid.graphics.Bitmap.Config): T;
					public getMinDecodeIntervalMs(): number;
					public getColorSpace(): globalAndroid.graphics.ColorSpace;
					public getBitmapTransformation(): com.facebook.imagepipeline.transformation.BitmapTransformation;
					public getUseEncodedImageForPreview(): boolean;
					public setForceStaticImage(forceStaticImage: boolean): T;
					public setCustomImageDecoder(customImageDecoder: com.facebook.imagepipeline.decoder.ImageDecoder): T;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace common {
				export class Priority {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.Priority>;
					public static LOW: com.facebook.imagepipeline.common.Priority;
					public static MEDIUM: com.facebook.imagepipeline.common.Priority;
					public static HIGH: com.facebook.imagepipeline.common.Priority;
					public static values(): androidNative.Array<com.facebook.imagepipeline.common.Priority>;
					public static valueOf(value: string): com.facebook.imagepipeline.common.Priority;
					public static getEntries(): any;
					public static getHigherPriority(priority1: com.facebook.imagepipeline.common.Priority, priority2: com.facebook.imagepipeline.common.Priority): com.facebook.imagepipeline.common.Priority;
				}
				export namespace Priority {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.common.Priority.Companion>;
						public getHigherPriority(priority1: com.facebook.imagepipeline.common.Priority, priority2: com.facebook.imagepipeline.common.Priority): com.facebook.imagepipeline.common.Priority;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace common {
				export class ResizeOptions {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.ResizeOptions>;
					public width: number;
					public height: number;
					public maxBitmapDimension: number;
					public roundUpFraction: number;
					public static DEFAULT_ROUNDUP_FRACTION: number; // 0.6666667
					public toString(): string;
					public equals(other: any): boolean;
					public static forDimensions(width: number, height: number): com.facebook.imagepipeline.common.ResizeOptions;
					public constructor(width: number, height: number, maxBitmapDimension: number, roundUpFraction: number);
					public hashCode(): number;
					public constructor(width: number, height: number, maxBitmapDimension: number);
					public static forSquareSize(size: number): com.facebook.imagepipeline.common.ResizeOptions;
					public constructor(width: number, height: number);
				}
				export namespace ResizeOptions {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.common.ResizeOptions.Companion>;
						public forSquareSize(size: number): com.facebook.imagepipeline.common.ResizeOptions;
						public forDimensions(width: number, height: number): com.facebook.imagepipeline.common.ResizeOptions;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace common {
				export class RotationOptions {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.RotationOptions>;
					public static NO_ROTATION: number; // 0
					public static ROTATE_90: number; // 90
					public static ROTATE_180: number; // 180
					public static ROTATE_270: number; // 270
					public getForcedAngle(): number;
					public static disableRotation(): com.facebook.imagepipeline.common.RotationOptions;
					public toString(): string;
					public canDeferUntilRendered(): boolean;
					public equals(this_: any): boolean;
					public useImageMetadata(): boolean;
					public rotationEnabled(): boolean;
					public static forceRotation(angle: number): com.facebook.imagepipeline.common.RotationOptions;
					public hashCode(): number;
					public static autoRotate(): com.facebook.imagepipeline.common.RotationOptions;
					public static autoRotateAtRenderTime(): com.facebook.imagepipeline.common.RotationOptions;
				}
				export namespace RotationOptions {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.common.RotationOptions.Companion>;
						public disableRotation(): com.facebook.imagepipeline.common.RotationOptions;
						public forceRotation(angle: number): com.facebook.imagepipeline.common.RotationOptions;
						public autoRotate(): com.facebook.imagepipeline.common.RotationOptions;
						public autoRotateAtRenderTime(): com.facebook.imagepipeline.common.RotationOptions;
					}
					export class Rotation {
						public static class: java.lang.Class<com.facebook.imagepipeline.common.RotationOptions.Rotation>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.common.RotationOptions$Rotation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class RotationAngle {
						public static class: java.lang.Class<com.facebook.imagepipeline.common.RotationOptions.RotationAngle>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.common.RotationOptions$RotationAngle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace common {
				export class SourceUriType {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.SourceUriType>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.common.SourceUriType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						"<clinit>"(): void;
					});
					public constructor();
					public static SOURCE_TYPE_LOCAL_RESOURCE: number; // 6
					public static SOURCE_TYPE_NETWORK: number; // 0
					public static SOURCE_TYPE_LOCAL_ASSET: number; // 5
					public static SOURCE_TYPE_QUALIFIED_RESOURCE: number; // 8
					public static SOURCE_TYPE_LOCAL_FILE: number; // 1
					public static SOURCE_TYPE_UNKNOWN: number; // -1
					public static SOURCE_TYPE_LOCAL_VIDEO_FILE: number; // 2
					public static SOURCE_TYPE_LOCAL_IMAGE_FILE: number; // 3
					public static SOURCE_TYPE_DATA: number; // 7
					public static SOURCE_TYPE_LOCAL_CONTENT: number; // 4
				}
				export namespace SourceUriType {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.common.SourceUriType.Companion>;
						public static SOURCE_TYPE_UNKNOWN: number; // -1
						public static SOURCE_TYPE_NETWORK: number; // 0
						public static SOURCE_TYPE_LOCAL_FILE: number; // 1
						public static SOURCE_TYPE_LOCAL_VIDEO_FILE: number; // 2
						public static SOURCE_TYPE_LOCAL_IMAGE_FILE: number; // 3
						public static SOURCE_TYPE_LOCAL_CONTENT: number; // 4
						public static SOURCE_TYPE_LOCAL_ASSET: number; // 5
						public static SOURCE_TYPE_LOCAL_RESOURCE: number; // 6
						public static SOURCE_TYPE_DATA: number; // 7
						public static SOURCE_TYPE_QUALIFIED_RESOURCE: number; // 8
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace common {
				export class TooManyBitmapsException {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.TooManyBitmapsException>;
					public constructor(detailMessage: string);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class CloseableReferenceFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.CloseableReferenceFactory>;
					public constructor(closeableReferenceLeakTracker: com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker);
					public create(u: java.io.Closeable): com.facebook.common.references.CloseableReference;
					public create(t: any, resourceReleaser: com.facebook.common.references.ResourceReleaser): com.facebook.common.references.CloseableReference;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class DefaultExecutorSupplier extends com.facebook.imagepipeline.core.ExecutorSupplier {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.DefaultExecutorSupplier>;
					public constructor(numCpuBoundThreads: number);
					public forLocalStorageRead(): java.util.concurrent.Executor;
					public scheduledExecutorServiceForBackgroundTasks(): java.util.concurrent.ScheduledExecutorService;
					public forThumbnailProducer(): java.util.concurrent.Executor;
					public forLightweightBackgroundTasks(): java.util.concurrent.Executor;
					public forDecode(): java.util.concurrent.Executor;
					public forLocalStorageWrite(): java.util.concurrent.Executor;
					public forBackgroundTasks(): java.util.concurrent.Executor;
				}
				export namespace DefaultExecutorSupplier {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.DefaultExecutorSupplier.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class DiskCachesStore {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.DiskCachesStore>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.DiskCachesStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMainFileCache(): com.facebook.cache.disk.FileCache;
						getMainBufferedDiskCache(): com.facebook.imagepipeline.cache.BufferedDiskCache;
						getSmallImageFileCache(): com.facebook.cache.disk.FileCache;
						getSmallImageBufferedDiskCache(): com.facebook.imagepipeline.cache.BufferedDiskCache;
						getDynamicFileCaches(): java.util.Map<string,com.facebook.cache.disk.FileCache>;
						getDynamicBufferedDiskCaches(): com.facebook.common.internal.ImmutableMap<string,com.facebook.imagepipeline.cache.BufferedDiskCache>;
					});
					public constructor();
					public getMainBufferedDiskCache(): com.facebook.imagepipeline.cache.BufferedDiskCache;
					public getDynamicBufferedDiskCaches(): com.facebook.common.internal.ImmutableMap<string,com.facebook.imagepipeline.cache.BufferedDiskCache>;
					public getSmallImageBufferedDiskCache(): com.facebook.imagepipeline.cache.BufferedDiskCache;
					public getMainFileCache(): com.facebook.cache.disk.FileCache;
					public getSmallImageFileCache(): com.facebook.cache.disk.FileCache;
					public getDynamicFileCaches(): java.util.Map<string,com.facebook.cache.disk.FileCache>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class DiskCachesStoreFactory extends com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore> {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.DiskCachesStoreFactory>;
					public constructor(fileCacheFactory: com.facebook.imagepipeline.core.FileCacheFactory, poolFactory: com.facebook.imagepipeline.memory.PoolFactory, executorSupplier: com.facebook.imagepipeline.core.ExecutorSupplier, imageCacheStatsTracker: com.facebook.imagepipeline.cache.ImageCacheStatsTracker, memoryChunkType: number, mainDiskCacheConfig: com.facebook.cache.disk.DiskCacheConfig, smallImageDiskCacheConfig: com.facebook.cache.disk.DiskCacheConfig, dynamicDiskCacheConfigMap: java.util.Map<string,any>);
					public get(): com.facebook.imagepipeline.core.DiskCachesStore;
					public constructor(fileCacheFactory: com.facebook.imagepipeline.core.FileCacheFactory, config: com.facebook.imagepipeline.core.ImagePipelineConfigInterface);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class DiskStorageCacheFactory extends com.facebook.imagepipeline.core.FileCacheFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.DiskStorageCacheFactory>;
					public get(diskCacheConfig: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.FileCache;
					public constructor(diskStorageFactory: com.facebook.imagepipeline.core.DiskStorageFactory);
					public get(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.FileCache;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class DiskStorageFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.DiskStorageFactory>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.DiskStorageFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.DiskStorage;
					});
					public constructor();
					public get(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.DiskStorage;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class DownsampleMode {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.DownsampleMode>;
					public static ALWAYS: com.facebook.imagepipeline.core.DownsampleMode;
					public static AUTO: com.facebook.imagepipeline.core.DownsampleMode;
					public static NEVER: com.facebook.imagepipeline.core.DownsampleMode;
					public static valueOf(value: string): com.facebook.imagepipeline.core.DownsampleMode;
					public static getEntries(): any;
					public static values(): androidNative.Array<com.facebook.imagepipeline.core.DownsampleMode>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class DynamicDefaultDiskStorageFactory extends com.facebook.imagepipeline.core.DiskStorageFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.DynamicDefaultDiskStorageFactory>;
					public constructor();
					public get(diskCacheConfig: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.DiskStorage;
					public get(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.DiskStorage;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class ExecutorSupplier {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ExecutorSupplier>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.ExecutorSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						forLocalStorageRead(): java.util.concurrent.Executor;
						forLocalStorageWrite(): java.util.concurrent.Executor;
						forDecode(): java.util.concurrent.Executor;
						forBackgroundTasks(): java.util.concurrent.Executor;
						scheduledExecutorServiceForBackgroundTasks(): java.util.concurrent.ScheduledExecutorService;
						forLightweightBackgroundTasks(): java.util.concurrent.Executor;
						forThumbnailProducer(): java.util.concurrent.Executor;
					});
					public constructor();
					public forLocalStorageRead(): java.util.concurrent.Executor;
					public scheduledExecutorServiceForBackgroundTasks(): java.util.concurrent.ScheduledExecutorService;
					public forThumbnailProducer(): java.util.concurrent.Executor;
					public forLightweightBackgroundTasks(): java.util.concurrent.Executor;
					public forDecode(): java.util.concurrent.Executor;
					public forLocalStorageWrite(): java.util.concurrent.Executor;
					public forBackgroundTasks(): java.util.concurrent.Executor;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class FileCacheFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.FileCacheFactory>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.FileCacheFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.FileCache;
					});
					public constructor();
					public get(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.FileCache;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class ImagePipeline {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipeline>;
					public prefetchToEncodedCache(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any, priority: com.facebook.imagepipeline.common.Priority): com.facebook.datasource.DataSource<java.lang.Void>;
					public getUsedDiskCacheSize(): number;
					public fetchEncodedImage(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>;
					public prefetchToDiskCache(exception: com.facebook.imagepipeline.request.ImageRequest, this_: any, imageRequest: com.facebook.imagepipeline.common.Priority, callerContext: com.facebook.imagepipeline.listener.RequestListener): com.facebook.datasource.DataSource<java.lang.Void>;
					public pause(): void;
					public clearDiskCaches(): void;
					public fetchDecodedImage(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public submitFetchRequest(exception: com.facebook.imagepipeline.producers.Producer<any>, traceSectionImagePipeline$submitFetchRequest$3: com.facebook.imagepipeline.producers.SettableProducerContext, requestListener2: com.facebook.imagepipeline.listener.RequestListener): com.facebook.datasource.DataSource;
					public isInBitmapMemoryCache(ref: com.facebook.imagepipeline.request.ImageRequest): boolean;
					public getDataSourceSupplier(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any, requestLevel: com.facebook.imagepipeline.request.ImageRequest.RequestLevel, requestListener: com.facebook.imagepipeline.listener.RequestListener, uiComponentId: string): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>;
					public prefetchToEncodedCache(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any): com.facebook.datasource.DataSource<java.lang.Void>;
					public getRequestListenerForRequest(imageRequest: com.facebook.imagepipeline.request.ImageRequest, requestListener: com.facebook.imagepipeline.listener.RequestListener): com.facebook.imagepipeline.listener.RequestListener;
					public isLazyDataSource(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public evictFromDiskCache(it: com.facebook.imagepipeline.request.ImageRequest): void;
					public fetchDecodedImage(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any, requestListener: com.facebook.imagepipeline.listener.RequestListener): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public fetchEncodedImage(exception: com.facebook.imagepipeline.request.ImageRequest, imageRequest: any, this_: com.facebook.imagepipeline.listener.RequestListener): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>;
					public evictFromCache(uri: globalAndroid.net.Uri): void;
					public isInDiskCacheSync(cacheKey: com.facebook.imagepipeline.request.ImageRequest): boolean;
					public fetchDecodedImage(exception: com.facebook.imagepipeline.request.ImageRequest, this_: any, imageRequest: com.facebook.imagepipeline.request.ImageRequest.RequestLevel, callerContext: com.facebook.imagepipeline.listener.RequestListener, lowestPermittedRequestLevelOnSubmit: string, requestListener: java.util.Map<string,any>): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public prefetchToDiskCache(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any): com.facebook.datasource.DataSource<java.lang.Void>;
					public prefetchToDiskCache(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any, priority: com.facebook.imagepipeline.common.Priority): com.facebook.datasource.DataSource<java.lang.Void>;
					public clearMemoryCaches(): void;
					public prefetchToBitmapCache(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any): com.facebook.datasource.DataSource<java.lang.Void>;
					public getCachedImage(this_: com.facebook.cache.common.CacheKey): com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>;
					public getProducerSequenceFactory(): com.facebook.imagepipeline.core.ProducerSequenceFactory;
					public resume(): void;
					public prefetchToEncodedCache(exception: com.facebook.imagepipeline.request.ImageRequest, traceSectionImagePipeline$prefetchToEncodedCache$1: any, producerSequence: com.facebook.imagepipeline.common.Priority, exception: com.facebook.imagepipeline.listener.RequestListener): com.facebook.datasource.DataSource<java.lang.Void>;
					public clearCaches(): void;
					public generateUniqueFutureId(): string;
					public isInDiskCache(uri: globalAndroid.net.Uri): com.facebook.datasource.DataSource<java.lang.Boolean>;
					public evictFromDiskCache(uri: globalAndroid.net.Uri): void;
					public prefetchToEncodedCache(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any, requestListener: com.facebook.imagepipeline.listener.RequestListener): com.facebook.datasource.DataSource<java.lang.Void>;
					public getCombinedRequestListener(it: com.facebook.imagepipeline.listener.RequestListener): com.facebook.imagepipeline.listener.RequestListener;
					public isPaused(): boolean;
					public getConfig(): com.facebook.imagepipeline.core.ImagePipelineConfigInterface;
					public isInDiskCache(cacheKey: com.facebook.imagepipeline.request.ImageRequest): com.facebook.datasource.DataSource<java.lang.Boolean>;
					public getCacheKey(cacheKey: com.facebook.imagepipeline.request.ImageRequest, traceSectionImagePipeline$getCacheKey$1: any): com.facebook.cache.common.CacheKey;
					public getCacheKeyFactory(): com.facebook.imagepipeline.cache.CacheKeyFactory;
					public getEncodedImageDataSourceSupplier(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>>;
					public getDataSourceSupplier(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any, requestLevel: com.facebook.imagepipeline.request.ImageRequest.RequestLevel, requestListener: com.facebook.imagepipeline.listener.RequestListener): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>;
					public fetchDecodedImage(exception: com.facebook.imagepipeline.request.ImageRequest, this_: any, imageRequest: com.facebook.imagepipeline.request.ImageRequest.RequestLevel, callerContext: com.facebook.imagepipeline.listener.RequestListener, lowestPermittedRequestLevelOnSubmit: string): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getDataSourceSupplier(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any, requestLevel: com.facebook.imagepipeline.request.ImageRequest.RequestLevel): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>;
					public isInBitmapMemoryCache(this_: globalAndroid.net.Uri): boolean;
					public evictFromMemoryCache(this_: globalAndroid.net.Uri): void;
					public isInDiskCacheSync(uri: globalAndroid.net.Uri): boolean;
					public isInDiskCacheSync(this_: globalAndroid.net.Uri, uri: com.facebook.imagepipeline.request.ImageRequest.CacheChoice): boolean;
					public prefetchToDiskCache(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any, requestListener: com.facebook.imagepipeline.listener.RequestListener): com.facebook.datasource.DataSource<java.lang.Void>;
					public init(): void;
					public fetchDecodedImage(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any, lowestPermittedRequestLevelOnSubmit: com.facebook.imagepipeline.request.ImageRequest.RequestLevel): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getBitmapMemoryCache(): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
					public hasCachedImage(cacheKey: com.facebook.cache.common.CacheKey): boolean;
					public isInEncodedMemoryCache(ref: com.facebook.imagepipeline.request.ImageRequest): boolean;
					public isInEncodedMemoryCache(this_: globalAndroid.net.Uri): boolean;
					public constructor(producerSequenceFactory: com.facebook.imagepipeline.core.ProducerSequenceFactory, requestListeners: java.util.Set<any>, requestListener2s: java.util.Set<any>, isPrefetchEnabledSupplier: com.facebook.common.internal.Supplier<java.lang.Boolean>, bitmapMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, encodedMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, diskCachesStoreSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, threadHandoffProducerQueue: com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue, suppressBitmapPrefetchingSupplier: com.facebook.common.internal.Supplier<java.lang.Boolean>, lazyDataSource: com.facebook.common.internal.Supplier<java.lang.Boolean>, callerContextVerifier: com.facebook.callercontext.CallerContextVerifier, config: com.facebook.imagepipeline.core.ImagePipelineConfigInterface);
					public fetchImageFromBitmapCache(imageRequest: com.facebook.imagepipeline.request.ImageRequest, callerContext: any): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public prefetchToBitmapCache(skipBitmapCache: com.facebook.imagepipeline.request.ImageRequest, producerSequence: any, exception: com.facebook.imagepipeline.listener.RequestListener): com.facebook.datasource.DataSource<java.lang.Void>;
				}
				export namespace ImagePipeline {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipeline.Companion>;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipeline.WhenMappings>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class ImagePipelineConfig extends com.facebook.imagepipeline.core.ImagePipelineConfigInterface {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineConfig>;
					public getRequestListener2s(): java.util.Set<com.facebook.imagepipeline.listener.RequestListener2>;
					public getBitmapMemoryCacheTrimStrategy(): com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy;
					public getImageDecoder(): com.facebook.imagepipeline.decoder.ImageDecoder;
					public getPoolFactory(): com.facebook.imagepipeline.memory.PoolFactory;
					public getEnableEncodedImageColorSpaceUsage(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public isDiskCacheEnabled(): boolean;
					public getExecutorSupplier(): com.facebook.imagepipeline.core.ExecutorSupplier;
					public isResizeAndRotateEnabledForNetwork(): boolean;
					public getCacheKeyFactory(): com.facebook.imagepipeline.cache.CacheKeyFactory;
					public getEncodedMemoryCacheParamsSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>;
					public getImageTranscoderFactory(): com.facebook.imagepipeline.transcoder.ImageTranscoderFactory;
					public getRequestListeners(): java.util.Set<com.facebook.imagepipeline.listener.RequestListener>;
					public getImageDecoderConfig(): com.facebook.imagepipeline.decoder.ImageDecoderConfig;
					public getProgressiveJpegConfig(): com.facebook.imagepipeline.decoder.ProgressiveJpegConfig;
					public getContext(): globalAndroid.content.Context;
					public getExecutorServiceForAnimatedImages(): com.facebook.common.executors.SerialExecutorService;
					public static getDefaultImageRequestConfig(): com.facebook.imagepipeline.core.ImagePipelineConfig.DefaultImageRequestConfig;
					public getImageCacheStatsTracker(): com.facebook.imagepipeline.cache.ImageCacheStatsTracker;
					public isPrefetchEnabledSupplier(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public getDiskCachesStoreSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>;
					public getMainDiskCacheConfig(): com.facebook.cache.disk.DiskCacheConfig;
					public getExperiments(): com.facebook.imagepipeline.core.ImagePipelineExperiments;
					public getCallerContextVerifier(): com.facebook.callercontext.CallerContextVerifier;
					public getImageTranscoderType(): java.lang.Integer;
					public getBitmapMemoryCacheParamsSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>;
					public getCustomProducerSequenceFactories(): java.util.Set<com.facebook.imagepipeline.producers.CustomProducerSequenceFactory>;
					public static resetDefaultRequestConfig(): void;
					public getBitmapMemoryCacheEntryStateObserver(): com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<com.facebook.cache.common.CacheKey>;
					public getDownsampleMode(): com.facebook.imagepipeline.core.DownsampleMode;
					public static newBuilder(context: globalAndroid.content.Context): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
					public getBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
					public getEncodedMemoryCacheOverride(): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>;
					public getEncodedMemoryCacheTrimStrategy(): com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy;
					public getBitmapCacheOverride(): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
					public getCloseableReferenceLeakTracker(): com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker;
					public getMemoryTrimmableRegistry(): com.facebook.common.memory.MemoryTrimmableRegistry;
					public getNetworkFetcher(): com.facebook.imagepipeline.producers.NetworkFetcher<any>;
					public getMemoryChunkType(): number;
					public getDynamicDiskCacheConfigMap(): java.util.Map<string,com.facebook.cache.disk.DiskCacheConfig>;
					public getSmallImageDiskCacheConfig(): com.facebook.cache.disk.DiskCacheConfig;
					public getBitmapMemoryCacheFactory(): com.facebook.imagepipeline.cache.BitmapMemoryCacheFactory;
					public getPlatformBitmapFactory(): com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
				}
				export namespace ImagePipelineConfig {
					export class Builder {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineConfig.Builder>;
						public getRequestListeners(): java.util.Set<com.facebook.imagepipeline.listener.RequestListener>;
						public getCallerContextVerifier(): com.facebook.callercontext.CallerContextVerifier;
						public setImageTranscoderType(set: java.lang.Integer): void;
						public setHttpConnectionTimeout($this$setHttpConnectionTimeout_u24lambda_u246: number): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getPoolFactory(): com.facebook.imagepipeline.memory.PoolFactory;
						public setMainDiskCacheConfig($this$setMainDiskCacheConfig_u24lambda_u2420: com.facebook.cache.disk.DiskCacheConfig): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getCloseableReferenceLeakTracker(): com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker;
						public getResizeAndRotateEnabledForNetwork(): boolean;
						public setDynamicDiskCacheConfigMap($this$setDynamicDiskCacheConfigMap_u24lambda_u2439: java.util.Map<string,any>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setFileCacheFactory($this$setFileCacheFactory_u24lambda_u247: com.facebook.imagepipeline.core.FileCacheFactory): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setCallerContextVerifier($this$setCallerContextVerifier_u24lambda_u2433: com.facebook.callercontext.CallerContextVerifier): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setPoolFactory($this$setPoolFactory_u24lambda_u2425: com.facebook.imagepipeline.memory.PoolFactory): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getSerialExecutorServiceForAnimatedImages(): com.facebook.common.executors.SerialExecutorService;
						public getBitmapMemoryCacheFactory(): com.facebook.imagepipeline.cache.BitmapMemoryCacheFactory;
						public setEncodedMemoryCacheParamsSupplier($this$setEncodedMemoryCacheParamsSupplier_u24lambda_u2412: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setImageTranscoderType($this$setImageTranscoderType_u24lambda_u2417: number): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setImageTranscoderFactory($this$setImageTranscoderFactory_u24lambda_u2418: com.facebook.imagepipeline.transcoder.ImageTranscoderFactory): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getImageCacheStatsTracker(): com.facebook.imagepipeline.cache.ImageCacheStatsTracker;
						public getMemoryChunkType(): java.lang.Integer;
						public getImageTranscoderFactory(): com.facebook.imagepipeline.transcoder.ImageTranscoderFactory;
						public setMemoryChunkType($this$setMemoryChunkType_u24lambda_u2422: number): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setBitmapMemoryCacheParamsSupplier($this$setBitmapMemoryCacheParamsSupplier_u24lambda_u241: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setDiskCacheEnabled($this$setDiskCacheEnabled_u24lambda_u2411: boolean): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setBitmapMemoryCacheFactory($this$setBitmapMemoryCacheFactory_u24lambda_u2438: com.facebook.imagepipeline.cache.BitmapMemoryCacheFactory): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getProgressiveJpegConfig(): com.facebook.imagepipeline.decoder.ProgressiveJpegConfig;
						public getSmallImageDiskCacheConfig(): com.facebook.cache.disk.DiskCacheConfig;
						public getContext(): globalAndroid.content.Context;
						public isPrefetchEnabledSupplier(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
						public getBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
						public setMemoryChunkType(set: java.lang.Integer): void;
						public getBitmapMemoryCacheTrimStrategy(): com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy;
						public getImageDecoder(): com.facebook.imagepipeline.decoder.ImageDecoder;
						public setCloseableReferenceLeakTracker($this$setCloseableReferenceLeakTracker_u24lambda_u2434: com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setDownsampleMode($this$setDownsampleMode_u24lambda_u249: com.facebook.imagepipeline.core.DownsampleMode): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getDiskCacheEnabled(): boolean;
						public getRequestListener2s(): java.util.Set<com.facebook.imagepipeline.listener.RequestListener2>;
						public setBitmapMemoryCacheEntryStateObserver($this$setBitmapMemoryCacheEntryStateObserver_u24lambda_u242: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<com.facebook.cache.common.CacheKey>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public isDownsampleEnabled(): boolean;
						public build(): com.facebook.imagepipeline.core.ImagePipelineConfig;
						public getDownsampleMode(): com.facebook.imagepipeline.core.DownsampleMode;
						public getPlatformBitmapFactory(): com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
						public setCustomFetchSequenceFactories($this$setCustomFetchSequenceFactories_u24lambda_u2429: java.util.Set<any>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public isDiskCacheEnabled(): boolean;
						public getBitmapMemoryCacheParamsSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>;
						public getEncodedMemoryCache(): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>;
						public setExecutorSupplier($this$setExecutorSupplier_u24lambda_u2413: com.facebook.imagepipeline.core.ExecutorSupplier): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getImageDecoderConfig(): com.facebook.imagepipeline.decoder.ImageDecoderConfig;
						public setBitmapMemoryCacheTrimStrategy($this$setBitmapMemoryCacheTrimStrategy_u24lambda_u243: com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getBitmapMemoryCacheEntryStateObserver(): com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<com.facebook.cache.common.CacheKey>;
						public setProgressiveJpegConfig($this$setProgressiveJpegConfig_u24lambda_u2426: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getNetworkFetcher(): com.facebook.imagepipeline.producers.NetworkFetcher<any>;
						public getMainDiskCacheConfig(): com.facebook.cache.disk.DiskCacheConfig;
						public getImageTranscoderType(): java.lang.Integer;
						public getMemoryTrimmableRegistry(): com.facebook.common.memory.MemoryTrimmableRegistry;
						/** @deprecated */
						public setDownsampleEnabled($this$setDownsampleEnabled_u24lambda_u2410: boolean): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setIsPrefetchEnabledSupplier($this$setIsPrefetchEnabledSupplier_u24lambda_u2419: com.facebook.common.internal.Supplier<java.lang.Boolean>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getExecutorSupplier(): com.facebook.imagepipeline.core.ExecutorSupplier;
						public getEnableEncodedImageColorSpaceUsage(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
						public getHttpConnectionTimeout(): number;
						public setImageDecoderConfig($this$setImageDecoderConfig_u24lambda_u2432: com.facebook.imagepipeline.decoder.ImageDecoderConfig): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getDiskCachesStoreSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>;
						public setBitmapsConfig($this$setBitmapsConfig_u24lambda_u240: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setEnableEncodedImageColorSpaceUsage($this$setEnableEncodedImageColorSpaceUsage_u24lambda_u2416: com.facebook.common.internal.Supplier<java.lang.Boolean>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setImageCacheStatsTracker($this$setImageCacheStatsTracker_u24lambda_u2414: com.facebook.imagepipeline.cache.ImageCacheStatsTracker): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setImageDecoder($this$setImageDecoder_u24lambda_u2415: com.facebook.imagepipeline.decoder.ImageDecoder): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public experiment(): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setRequestListener2s($this$setRequestListener2s_u24lambda_u2428: java.util.Set<any>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getFileCacheFactory(): com.facebook.imagepipeline.core.FileCacheFactory;
						public getDynamicDiskCacheConfigMap(): java.util.Map<string,com.facebook.cache.disk.DiskCacheConfig>;
						public setBitmapMemoryCache($this$setBitmapMemoryCache_u24lambda_u2435: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setCacheKeyFactory($this$setCacheKeyFactory_u24lambda_u245: com.facebook.imagepipeline.cache.CacheKeyFactory): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setEncodedMemoryCacheTrimStrategy($this$setEncodedMemoryCacheTrimStrategy_u24lambda_u244: com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setResizeAndRotateEnabledForNetwork($this$setResizeAndRotateEnabledForNetwork_u24lambda_u2430: boolean): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getBitmapMemoryCache(): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
						public setPlatformBitmapFactory($this$setPlatformBitmapFactory_u24lambda_u2424: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getCacheKeyFactory(): com.facebook.imagepipeline.cache.CacheKeyFactory;
						public setRequestListeners($this$setRequestListeners_u24lambda_u2427: java.util.Set<any>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setMemoryTrimmableRegistry($this$setMemoryTrimmableRegistry_u24lambda_u2421: com.facebook.common.memory.MemoryTrimmableRegistry): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setDiskCachesStoreSupplier($this$setDiskCachesStoreSupplier_u24lambda_u248: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setExecutorServiceForAnimatedImages($this$setExecutorServiceForAnimatedImages_u24lambda_u2437: com.facebook.common.executors.SerialExecutorService): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setEncodedMemoryCache($this$setEncodedMemoryCache_u24lambda_u2436: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getCustomProducerSequenceFactories(): java.util.Set<com.facebook.imagepipeline.producers.CustomProducerSequenceFactory>;
						public setSmallImageDiskCacheConfig($this$setSmallImageDiskCacheConfig_u24lambda_u2431: com.facebook.cache.disk.DiskCacheConfig): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public getEncodedMemoryCacheParamsSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>;
						public getExperimentsBuilder(): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setNetworkFetcher($this$setNetworkFetcher_u24lambda_u2423: com.facebook.imagepipeline.producers.NetworkFetcher<any>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public constructor(context: globalAndroid.content.Context);
						public getEncodedMemoryCacheTrimStrategy(): com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy;
					}
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineConfig.Companion>;
						public resetDefaultRequestConfig(): void;
						public getDefaultImageRequestConfig(): com.facebook.imagepipeline.core.ImagePipelineConfig.DefaultImageRequestConfig;
						public newBuilder(context: globalAndroid.content.Context): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
					}
					export class DefaultImageRequestConfig {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineConfig.DefaultImageRequestConfig>;
						public constructor();
						public setProgressiveRenderingEnabled(set: boolean): void;
						public isProgressiveRenderingEnabled(): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class ImagePipelineConfigInterface {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineConfigInterface>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.ImagePipelineConfigInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
						getBitmapMemoryCacheParamsSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>;
						getBitmapMemoryCacheTrimStrategy(): com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy;
						getEncodedMemoryCacheTrimStrategy(): com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy;
						getBitmapMemoryCacheEntryStateObserver(): com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<com.facebook.cache.common.CacheKey>;
						getCacheKeyFactory(): com.facebook.imagepipeline.cache.CacheKeyFactory;
						getContext(): globalAndroid.content.Context;
						getDiskCachesStoreSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>;
						getDownsampleMode(): com.facebook.imagepipeline.core.DownsampleMode;
						isDiskCacheEnabled(): boolean;
						getEncodedMemoryCacheParamsSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>;
						getExecutorSupplier(): com.facebook.imagepipeline.core.ExecutorSupplier;
						getExecutorServiceForAnimatedImages(): com.facebook.common.executors.SerialExecutorService;
						getImageCacheStatsTracker(): com.facebook.imagepipeline.cache.ImageCacheStatsTracker;
						getImageDecoder(): com.facebook.imagepipeline.decoder.ImageDecoder;
						getImageTranscoderFactory(): com.facebook.imagepipeline.transcoder.ImageTranscoderFactory;
						getImageTranscoderType(): java.lang.Integer;
						isPrefetchEnabledSupplier(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
						getEnableEncodedImageColorSpaceUsage(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
						getMainDiskCacheConfig(): com.facebook.cache.disk.DiskCacheConfig;
						getMemoryTrimmableRegistry(): com.facebook.common.memory.MemoryTrimmableRegistry;
						getMemoryChunkType(): number;
						getNetworkFetcher(): com.facebook.imagepipeline.producers.NetworkFetcher<any>;
						getPlatformBitmapFactory(): com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
						getPoolFactory(): com.facebook.imagepipeline.memory.PoolFactory;
						getProgressiveJpegConfig(): com.facebook.imagepipeline.decoder.ProgressiveJpegConfig;
						getRequestListeners(): java.util.Set<com.facebook.imagepipeline.listener.RequestListener>;
						getRequestListener2s(): java.util.Set<com.facebook.imagepipeline.listener.RequestListener2>;
						getCustomProducerSequenceFactories(): java.util.Set<com.facebook.imagepipeline.producers.CustomProducerSequenceFactory>;
						isResizeAndRotateEnabledForNetwork(): boolean;
						getSmallImageDiskCacheConfig(): com.facebook.cache.disk.DiskCacheConfig;
						getImageDecoderConfig(): com.facebook.imagepipeline.decoder.ImageDecoderConfig;
						getCallerContextVerifier(): com.facebook.callercontext.CallerContextVerifier;
						getExperiments(): com.facebook.imagepipeline.core.ImagePipelineExperiments;
						getCloseableReferenceLeakTracker(): com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker;
						getBitmapCacheOverride(): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
						getEncodedMemoryCacheOverride(): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>;
						getBitmapMemoryCacheFactory(): com.facebook.imagepipeline.cache.BitmapMemoryCacheFactory;
						getDynamicDiskCacheConfigMap(): java.util.Map<string,com.facebook.cache.disk.DiskCacheConfig>;
					});
					public constructor();
					public getRequestListener2s(): java.util.Set<com.facebook.imagepipeline.listener.RequestListener2>;
					public getBitmapMemoryCacheTrimStrategy(): com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy;
					public getImageDecoder(): com.facebook.imagepipeline.decoder.ImageDecoder;
					public getPoolFactory(): com.facebook.imagepipeline.memory.PoolFactory;
					public getEnableEncodedImageColorSpaceUsage(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public isDiskCacheEnabled(): boolean;
					public getExecutorSupplier(): com.facebook.imagepipeline.core.ExecutorSupplier;
					public isResizeAndRotateEnabledForNetwork(): boolean;
					public getCacheKeyFactory(): com.facebook.imagepipeline.cache.CacheKeyFactory;
					public getEncodedMemoryCacheParamsSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>;
					public getImageTranscoderFactory(): com.facebook.imagepipeline.transcoder.ImageTranscoderFactory;
					public getRequestListeners(): java.util.Set<com.facebook.imagepipeline.listener.RequestListener>;
					public getImageDecoderConfig(): com.facebook.imagepipeline.decoder.ImageDecoderConfig;
					public getProgressiveJpegConfig(): com.facebook.imagepipeline.decoder.ProgressiveJpegConfig;
					public getContext(): globalAndroid.content.Context;
					public getExecutorServiceForAnimatedImages(): com.facebook.common.executors.SerialExecutorService;
					public getImageCacheStatsTracker(): com.facebook.imagepipeline.cache.ImageCacheStatsTracker;
					public isPrefetchEnabledSupplier(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public getDiskCachesStoreSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>;
					public getMainDiskCacheConfig(): com.facebook.cache.disk.DiskCacheConfig;
					public getCallerContextVerifier(): com.facebook.callercontext.CallerContextVerifier;
					public getExperiments(): com.facebook.imagepipeline.core.ImagePipelineExperiments;
					public getImageTranscoderType(): java.lang.Integer;
					public getBitmapMemoryCacheParamsSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>;
					public getCustomProducerSequenceFactories(): java.util.Set<com.facebook.imagepipeline.producers.CustomProducerSequenceFactory>;
					public getBitmapMemoryCacheEntryStateObserver(): com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<com.facebook.cache.common.CacheKey>;
					public getDownsampleMode(): com.facebook.imagepipeline.core.DownsampleMode;
					public getBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
					public getEncodedMemoryCacheOverride(): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>;
					public getEncodedMemoryCacheTrimStrategy(): com.facebook.imagepipeline.cache.MemoryCache.CacheTrimStrategy;
					public getBitmapCacheOverride(): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
					public getCloseableReferenceLeakTracker(): com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker;
					public getMemoryTrimmableRegistry(): com.facebook.common.memory.MemoryTrimmableRegistry;
					public getNetworkFetcher(): com.facebook.imagepipeline.producers.NetworkFetcher<any>;
					public getMemoryChunkType(): number;
					public getDynamicDiskCacheConfigMap(): java.util.Map<string,com.facebook.cache.disk.DiskCacheConfig>;
					public getSmallImageDiskCacheConfig(): com.facebook.cache.disk.DiskCacheConfig;
					public getBitmapMemoryCacheFactory(): com.facebook.imagepipeline.cache.BitmapMemoryCacheFactory;
					public getPlatformBitmapFactory(): com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class ImagePipelineExperiments {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineExperiments>;
					public isExperimentalThreadHandoffQueueEnabled(): boolean;
					public getAnimationRenderFpsLimit(): number;
					public isEncodedMemoryCacheProbingEnabled(): boolean;
					public getMemoryType(): number;
					public getDownscaleFrameToDrawableDimensions(): boolean;
					public isPartialImageCachingEnabled(): boolean;
					public isDiskCacheProbingEnabled(): boolean;
					public getShouldIgnoreCacheSizeMismatch(): boolean;
					public getAllowProgressiveOnPrefetch(): boolean;
					public isWebpSupportEnabled(): boolean;
					public getProducerFactoryMethod(): com.facebook.imagepipeline.core.ImagePipelineExperiments.ProducerFactoryMethod;
					public getHandOffOnUiThreadOnly(): boolean;
					public getKeepCancelledFetchAsLowPriority(): boolean;
					public getPlatformDecoderOptions(): com.facebook.imagepipeline.platform.PlatformDecoderOptions;
					public isDecodeCancellationEnabled(): boolean;
					public getTrackedKeysSize(): number;
					public getWebpBitmapFactory(): com.facebook.common.webp.WebpBitmapFactory;
					public getWebpErrorLogger(): com.facebook.common.webp.WebpBitmapFactory.WebpErrorLogger;
					public isLazyDataSource(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public isBinaryXmlEnabled(): boolean;
					public getAnimationStrategyBufferLengthMilliseconds(): number;
					public getUseBalancedAnimationStrategy(): boolean;
					public static newBuilder(configBuilder: com.facebook.imagepipeline.core.ImagePipelineConfig.Builder): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
					public getSuppressBitmapPrefetchingSupplier(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public getUseDownsamplingRatioForResizing(): boolean;
					public getBitmapPrepareToDrawMinSizeBytes(): number;
					public isEncodedCacheEnabled(): boolean;
					public getMaxBitmapDimension(): number;
					public getDownsampleIfLargeBitmap(): boolean;
					public getPrefetchShortcutEnabled(): boolean;
					public getAllowDelay(): boolean;
					public isEnsureTranscoderLibraryLoaded(): boolean;
					public getCancelDecodeOnCacheMiss(): boolean;
					public getShouldStoreCacheEntrySize(): boolean;
					public getShouldUseDecodingBufferHelper(): boolean;
					public getBitmapPrepareToDrawForPrefetch(): boolean;
					public isNativeCodeDisabled(): boolean;
					public getBitmapPrepareToDrawMaxSizeBytes(): number;
					public isGingerbreadDecoderEnabled(): boolean;
					public getUseBitmapPrepareToDraw(): boolean;
				}
				export namespace ImagePipelineExperiments {
					export class Builder {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder>;
						public webpSupportEnabled: boolean;
						public webpErrorLogger: com.facebook.common.webp.WebpBitmapFactory.WebpErrorLogger;
						public decodeCancellationEnabled: boolean;
						public webpBitmapFactory: com.facebook.common.webp.WebpBitmapFactory;
						public useDownsamplingRatioForResizing: boolean;
						public useBitmapPrepareToDraw: boolean;
						public useBalancedAnimationStrategy: boolean;
						public animationStrategyBufferLengthMilliseconds: number;
						public bitmapPrepareToDrawMinSizeBytes: number;
						public bitmapPrepareToDrawMaxSizeBytes: number;
						public bitmapPrepareToDrawForPrefetch: boolean;
						public maxBitmapDimension: number;
						public nativeCodeDisabled: boolean;
						public isPartialImageCachingEnabled: boolean;
						public producerFactoryMethod: com.facebook.imagepipeline.core.ImagePipelineExperiments.ProducerFactoryMethod;
						public lazyDataSource: com.facebook.common.internal.Supplier<java.lang.Boolean>;
						public gingerbreadDecoderEnabled: boolean;
						public downscaleFrameToDrawableDimensions: boolean;
						public suppressBitmapPrefetchingSupplier: com.facebook.common.internal.Supplier<java.lang.Boolean>;
						public experimentalThreadHandoffQueueEnabled: boolean;
						public memoryType: number;
						public keepCancelledFetchAsLowPriority: boolean;
						public downsampleIfLargeBitmap: boolean;
						public encodedCacheEnabled: boolean;
						public ensureTranscoderLibraryLoaded: boolean;
						public isEncodedMemoryCacheProbingEnabled: boolean;
						public isDiskCacheProbingEnabled: boolean;
						public trackedKeysSize: number;
						public allowDelay: boolean;
						public handOffOnUiThreadOnly: boolean;
						public shouldStoreCacheEntrySize: boolean;
						public shouldIgnoreCacheSizeMismatch: boolean;
						public allowProgressiveOnPrefetch: boolean;
						public animationRenderFpsLimit: number;
						public cancelDecodeOnCacheMiss: boolean;
						public prefetchShortcutEnabled: boolean;
						public platformDecoderOptions: com.facebook.imagepipeline.platform.PlatformDecoderOptions;
						public isBinaryXmlEnabled: boolean;
						public setPlatformDecoderOptions(platformDecoderOptions: com.facebook.imagepipeline.platform.PlatformDecoderOptions): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setCancelDecodeOnCacheMiss(cancelDecodeOnCacheMiss: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setEncodedCacheEnabled(encodedCacheEnabled: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setNativeCodeDisabled(nativeCodeDisabled: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setStoreCacheEntrySize(shouldStoreCacheEntrySize: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public build(): com.facebook.imagepipeline.core.ImagePipelineExperiments;
						public setSuppressBitmapPrefetchingSupplier(suppressBitmapPrefetchingSupplier: com.facebook.common.internal.Supplier<java.lang.Boolean>): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setEnsureTranscoderLibraryLoaded(ensureTranscoderLibraryLoaded: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setIsEncodedMemoryCacheProbingEnabled(isEncodedMemoryCacheProbingEnabled: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setBitmapPrepareToDraw(useBitmapPrepareToDraw: boolean, minBitmapSizeBytes: number, maxBitmapSizeBytes: number, preparePrefetch: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setDecodeCancellationEnabled(decodeCancellationEnabled: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setTrackedKeysSize(trackedKeysSize: number): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setAllowProgressiveOnPrefetch(allowProgressiveOnPrefetch: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public constructor(configBuilder: com.facebook.imagepipeline.core.ImagePipelineConfig.Builder);
						public setBalancedAnimationStrategy(useBalancedAnimationStrategy: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setWebpBitmapFactory(webpBitmapFactory: com.facebook.common.webp.WebpBitmapFactory): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setUseDownsampligRatioForResizing(useDownsamplingRatioForResizing: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setProducerFactoryMethod(producerFactoryMethod: com.facebook.imagepipeline.core.ImagePipelineExperiments.ProducerFactoryMethod): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setKeepCancelledFetchAsLowPriority(keepCancelledFetchAsLowPriority: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setExperimentalThreadHandoffQueueEnabled(experimentalThreadHandoffQueueEnabled: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public shouldUseDecodingBufferHelper(): boolean;
						public setLazyDataSource(lazyDataSource: com.facebook.common.internal.Supplier<java.lang.Boolean>): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setShouldDownscaleFrameToDrawableDimensions(downscaleFrameToDrawableDimensions: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setIgnoreCacheSizeMismatch(shouldIgnoreCacheSizeMismatch: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setBinaryXmlEnabled(binaryXmlEnabled: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setHandOffOnUiThreadOnly(handOffOnUiThreadOnly: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setPrefetchShortcutEnabled(prefetchShortcutEnabled: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setAllowDelay(allowDelay: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setWebpSupportEnabled(webpSupportEnabled: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setShouldUseDecodingBufferHelper(shouldUseDecodingBufferHelper: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setWebpErrorLogger(webpErrorLogger: com.facebook.common.webp.WebpBitmapFactory.WebpErrorLogger): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setDownsampleIfLargeBitmap(downsampleIfLargeBitmap: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setExperimentalMemoryType(MemoryType: number): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setIsDiskCacheProbingEnabled(isDiskCacheProbingEnabled: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setAnimationRenderFpsLimit(animationRenderFpsLimit: number): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setPartialImageCachingEnabled(partialImageCachingEnabled: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setMaxBitmapDimension(maxBitmapDimension: number): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setAnimationStrategyBufferLengthMilliseconds(animationStrategyBufferLengthMilliseconds: number): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setGingerbreadDecoderEnabled(gingerbreadDecoderEnabled: boolean): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
					}
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineExperiments.Companion>;
						public newBuilder(configBuilder: com.facebook.imagepipeline.core.ImagePipelineConfig.Builder): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
					}
					export class DefaultProducerFactoryMethod extends com.facebook.imagepipeline.core.ImagePipelineExperiments.ProducerFactoryMethod {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineExperiments.DefaultProducerFactoryMethod>;
						public constructor();
						public createProducerFactory(context: globalAndroid.content.Context, byteArrayPool: com.facebook.common.memory.ByteArrayPool, imageDecoder: com.facebook.imagepipeline.decoder.ImageDecoder, progressiveJpegConfig: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, downsampleMode: com.facebook.imagepipeline.core.DownsampleMode, resizeAndRotateEnabledForNetwork: boolean, decodeCancellationEnabled: boolean, executorSupplier: com.facebook.imagepipeline.core.ExecutorSupplier, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory, pooledByteStreams: com.facebook.common.memory.PooledByteStreams, bitmapMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, encodedMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, diskCachesStoreSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, platformBitmapFactory: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, bitmapPrepareToDrawMinSizeBytes: number, bitmapPrepareToDrawMaxSizeBytes: number, bitmapPrepareToDrawForPrefetch: boolean, maxBitmapSize: number, closeableReferenceFactory: com.facebook.imagepipeline.core.CloseableReferenceFactory, keepCancelledFetchAsLowPriority: boolean, trackedKeysSize: number): com.facebook.imagepipeline.core.ProducerFactory;
						public createProducerFactory(param0: globalAndroid.content.Context, param1: com.facebook.common.memory.ByteArrayPool, param2: com.facebook.imagepipeline.decoder.ImageDecoder, param3: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, param4: com.facebook.imagepipeline.core.DownsampleMode, param5: boolean, param6: boolean, param7: com.facebook.imagepipeline.core.ExecutorSupplier, param8: com.facebook.common.memory.PooledByteBufferFactory, param9: com.facebook.common.memory.PooledByteStreams, param10: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param11: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, param12: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, param13: com.facebook.imagepipeline.cache.CacheKeyFactory, param14: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param15: number, param16: number, param17: boolean, param18: number, param19: com.facebook.imagepipeline.core.CloseableReferenceFactory, param20: boolean, param21: number): com.facebook.imagepipeline.core.ProducerFactory;
					}
					export class ProducerFactoryMethod {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineExperiments.ProducerFactoryMethod>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.core.ImagePipelineExperiments$ProducerFactoryMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createProducerFactory(param0: globalAndroid.content.Context, param1: com.facebook.common.memory.ByteArrayPool, param2: com.facebook.imagepipeline.decoder.ImageDecoder, param3: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, param4: com.facebook.imagepipeline.core.DownsampleMode, param5: boolean, param6: boolean, param7: com.facebook.imagepipeline.core.ExecutorSupplier, param8: com.facebook.common.memory.PooledByteBufferFactory, param9: com.facebook.common.memory.PooledByteStreams, param10: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param11: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, param12: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, param13: com.facebook.imagepipeline.cache.CacheKeyFactory, param14: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param15: number, param16: number, param17: boolean, param18: number, param19: com.facebook.imagepipeline.core.CloseableReferenceFactory, param20: boolean, param21: number): com.facebook.imagepipeline.core.ProducerFactory;
						});
						public constructor();
						public createProducerFactory(param0: globalAndroid.content.Context, param1: com.facebook.common.memory.ByteArrayPool, param2: com.facebook.imagepipeline.decoder.ImageDecoder, param3: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, param4: com.facebook.imagepipeline.core.DownsampleMode, param5: boolean, param6: boolean, param7: com.facebook.imagepipeline.core.ExecutorSupplier, param8: com.facebook.common.memory.PooledByteBufferFactory, param9: com.facebook.common.memory.PooledByteStreams, param10: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param11: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, param12: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, param13: com.facebook.imagepipeline.cache.CacheKeyFactory, param14: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param15: number, param16: number, param17: boolean, param18: number, param19: com.facebook.imagepipeline.core.CloseableReferenceFactory, param20: boolean, param21: number): com.facebook.imagepipeline.core.ProducerFactory;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class ImagePipelineFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineFactory>;
					public getDiskCachesStoreSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>;
					public getXmlDrawableFactory(): com.facebook.imagepipeline.drawable.DrawableFactory;
					public static shutDown(): void;
					public getAnimatedDrawableFactory(context: globalAndroid.content.Context): com.facebook.imagepipeline.drawable.DrawableFactory;
					public getEncodedCountingMemoryCache(): com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>;
					public static getInstance(): com.facebook.imagepipeline.core.ImagePipelineFactory;
					public reportData(): string;
					public getImagePipeline(): com.facebook.imagepipeline.core.ImagePipeline;
					public static initialize(context: globalAndroid.content.Context): void;
					public getBitmapMemoryCache(): com.facebook.imagepipeline.cache.InstrumentedMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
					public getXmlImageDecoder(): com.facebook.imagepipeline.decoder.ImageDecoder;
					public static initialize(imagePipelineConfig: com.facebook.imagepipeline.core.ImagePipelineConfigInterface): void;
					public getEncodedMemoryCache(): com.facebook.imagepipeline.cache.InstrumentedMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>;
					public constructor(config: com.facebook.imagepipeline.core.ImagePipelineConfigInterface);
					public static forceSingleInstance(): void;
					public getPlatformDecoder(): com.facebook.imagepipeline.platform.PlatformDecoder;
					public getCloseableReferenceFactory(): com.facebook.imagepipeline.core.CloseableReferenceFactory;
					public static setInstance(newInstance: com.facebook.imagepipeline.core.ImagePipelineFactory): void;
					public getBitmapCountingMemoryCache(): com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
					public static hasBeenInitialized(): boolean;
					public getPlatformBitmapFactory(): com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class ImageTranscoderType {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ImageTranscoderType>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.ImageTranscoderType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static NATIVE_TRANSCODER: number; // 0
					public static JAVA_TRANSCODER: number; // 1
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class MemoryChunkType {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.MemoryChunkType>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.MemoryChunkType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static BUFFER_MEMORY: number; // 1
					public static ASHMEM_MEMORY: number; // 2
					public static NATIVE_MEMORY: number; // 0
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class NativeCodeSetup {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.NativeCodeSetup>;
					public static setUseNativeCode(useNativeCode: boolean): void;
					public static getUseNativeCode(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class PriorityThreadFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.PriorityThreadFactory>;
					public constructor(threadPriority: number, prefix: string);
					public newThread(name: java.lang.Runnable): java.lang.Thread;
					public constructor(threadPriority: number);
					public constructor(threadPriority: number, prefix: string, addThreadNumber: boolean);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class ProducerFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ProducerFactory>;
					public mContentResolver: globalAndroid.content.ContentResolver;
					public mResources: globalAndroid.content.res.Resources;
					public mAssetManager: globalAndroid.content.res.AssetManager;
					public mByteArrayPool: com.facebook.common.memory.ByteArrayPool;
					public mImageDecoder: com.facebook.imagepipeline.decoder.ImageDecoder;
					public mProgressiveJpegConfig: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig;
					public mDownsampleMode: com.facebook.imagepipeline.core.DownsampleMode;
					public mResizeAndRotateEnabledForNetwork: boolean;
					public mDecodeCancellationEnabled: boolean;
					public mExecutorSupplier: com.facebook.imagepipeline.core.ExecutorSupplier;
					public mPooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory;
					public mDiskCachesStoreSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>;
					public mEncodedMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>;
					public mBitmapMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
					public mCacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory;
					public mEncodedMemoryCacheHistory: com.facebook.imagepipeline.cache.BoundedLinkedHashSet<com.facebook.cache.common.CacheKey>;
					public mDiskCacheHistory: com.facebook.imagepipeline.cache.BoundedLinkedHashSet<com.facebook.cache.common.CacheKey>;
					public mPlatformBitmapFactory: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
					public mBitmapPrepareToDrawMinSizeBytes: number;
					public mBitmapPrepareToDrawMaxSizeBytes: number;
					public mBitmapPrepareToDrawForPrefetch: boolean;
					public mCloseableReferenceFactory: com.facebook.imagepipeline.core.CloseableReferenceFactory;
					public mMaxBitmapSize: number;
					public mKeepCancelledFetchAsLowPriority: boolean;
					public newBitmapMemoryCacheProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.BitmapMemoryCacheProducer;
					public newBitmapProbeProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.BitmapProbeProducer;
					public newBitmapMemoryCacheGetProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.BitmapMemoryCacheGetProducer;
					public newEncodedCacheKeyMultiplexProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.EncodedCacheKeyMultiplexProducer;
					public newBitmapPrepareProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.BitmapPrepareProducer;
					public newLocalVideoThumbnailProducer(): com.facebook.imagepipeline.producers.LocalVideoThumbnailProducer;
					public newSwallowResultProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<any>): com.facebook.imagepipeline.producers.SwallowResultProducer<any>;
					public newThrottlingProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<any>): com.facebook.imagepipeline.producers.ThrottlingProducer<any>;
					public newNetworkFetchProducer(networkFetcher: com.facebook.imagepipeline.producers.NetworkFetcher<any>): com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>;
					/** @deprecated */
					public constructor(context: globalAndroid.content.Context, byteArrayPool: com.facebook.common.memory.ByteArrayPool, imageDecoder: com.facebook.imagepipeline.decoder.ImageDecoder, progressiveJpegConfig: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, downsampleEnabled: boolean, resizeAndRotateEnabledForNetwork: boolean, decodeCancellationEnabled: boolean, executorSupplier: com.facebook.imagepipeline.core.ExecutorSupplier, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory, bitmapMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, encodedMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, diskCachesStoreSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, platformBitmapFactory: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, bitmapPrepareToDrawMinSizeBytes: number, bitmapPrepareToDrawMaxSizeBytes: number, bitmapPrepareToDrawForPrefetch: boolean, maxBitmapSize: number, closeableReferenceFactory: com.facebook.imagepipeline.core.CloseableReferenceFactory, keepCancelledFetchAsLowPriority: boolean, trackedKeysSize: number);
					public newThumbnailBranchProducer(thumbnailProducers: androidNative.Array<com.facebook.imagepipeline.producers.ThumbnailProducer<com.facebook.imagepipeline.image.EncodedImage>>): com.facebook.imagepipeline.producers.ThumbnailBranchProducer;
					public newLocalResourceFetchProducer(): com.facebook.imagepipeline.producers.LocalResourceFetchProducer;
					public static newAddImageTransformMetaDataProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.AddImageTransformMetaDataProducer;
					public newEncodedProbeProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.EncodedProbeProducer;
					public newBackgroundThreadHandoffProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<any>, inputThreadHandoffProducerQueue: com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue): com.facebook.imagepipeline.producers.Producer<any>;
					public static newBranchOnSeparateImagesProducer(inputProducer1: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>, inputProducer2: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.BranchOnSeparateImagesProducer;
					public newPartialDiskCacheProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.PartialDiskCacheProducer;
					public newPostprocessorProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.PostprocessorProducer;
					public newLocalContentUriFetchProducer(): com.facebook.imagepipeline.producers.LocalContentUriFetchProducer;
					public newLocalFileFetchProducer(): com.facebook.imagepipeline.producers.LocalFileFetchProducer;
					public newQualifiedResourceFetchProducer(): com.facebook.imagepipeline.producers.QualifiedResourceFetchProducer;
					public constructor(context: globalAndroid.content.Context, byteArrayPool: com.facebook.common.memory.ByteArrayPool, imageDecoder: com.facebook.imagepipeline.decoder.ImageDecoder, progressiveJpegConfig: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, downsampleMode: com.facebook.imagepipeline.core.DownsampleMode, resizeAndRotateEnabledForNetwork: boolean, decodeCancellationEnabled: boolean, executorSupplier: com.facebook.imagepipeline.core.ExecutorSupplier, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory, bitmapMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, encodedMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, diskCachesStoreSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, platformBitmapFactory: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, bitmapPrepareToDrawMinSizeBytes: number, bitmapPrepareToDrawMaxSizeBytes: number, bitmapPrepareToDrawForPrefetch: boolean, maxBitmapSize: number, closeableReferenceFactory: com.facebook.imagepipeline.core.CloseableReferenceFactory, keepCancelledFetchAsLowPriority: boolean, trackedKeysSize: number);
					public newPostprocessorBitmapMemoryCacheProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.PostprocessedBitmapMemoryCacheProducer;
					public newResizeAndRotateProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>, isResizingEnabled: boolean, imageTranscoderFactory: com.facebook.imagepipeline.transcoder.ImageTranscoderFactory): com.facebook.imagepipeline.producers.ResizeAndRotateProducer;
					public newDiskCacheReadProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.DiskCacheReadProducer;
					public newLocalContentUriThumbnailFetchProducer(): com.facebook.imagepipeline.producers.LocalContentUriThumbnailFetchProducer;
					public newDecodeProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.DecodeProducer;
					public newBitmapMemoryCacheKeyMultiplexProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.BitmapMemoryCacheKeyMultiplexProducer;
					public newDiskCacheWriteProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.DiskCacheWriteProducer;
					public newEncodedMemoryCacheProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>;
					public newDataFetchProducer(): com.facebook.imagepipeline.producers.DataFetchProducer;
					public newLocalExifThumbnailProducer(): com.facebook.imagepipeline.producers.LocalExifThumbnailProducer;
					public newLocalAssetFetchProducer(): com.facebook.imagepipeline.producers.LocalAssetFetchProducer;
					public newDelayProducer(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.DelayProducer;
					public newLocalThumbnailBitmapSdk29Producer(): com.facebook.imagepipeline.producers.LocalThumbnailBitmapSdk29Producer;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace core {
				export class ProducerSequenceFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ProducerSequenceFactory>;
					public getLocalFileFetchEncodedImageProducerSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>;
					public getBitmapPrepareSequences(): java.util.Map<com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>,com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>;
					public getCommonNetworkFetchToEncodedMemorySequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>;
					public getLocalImageFileFetchSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getPostprocessorSequences(): java.util.Map<com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>,com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>;
					public setPostprocessorSequences(set: java.util.Map<com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>,com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>): void;
					public getLocalThumbnailBitmapSdk29FetchSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getBackgroundNetworkFetchToEncodedMemorySequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>;
					public getLocalVideoFileFetchSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getEncodedImageProducerSequence(customProducerSequenceFactory: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>;
					public getDecodedImagePrefetchProducerSequence(this_: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.producers.Producer<java.lang.Void>;
					public setCloseableImagePrefetchSequences(set: java.util.Map<com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>,com.facebook.imagepipeline.producers.Producer<java.lang.Void>>): void;
					public getLocalContentUriFetchEncodedImageProducerSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>;
					public getBackgroundLocalContentUriFetchToEncodeMemorySequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>;
					public getLocalAssetFetchSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getNetworkFetchEncodedImageProducerSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>;
					public getLocalContentUriFetchSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getQualifiedResourceFetchSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getDecodedImageProducerSequence(pipelineSequence: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getDataFetchSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getEncodedImagePrefetchProducerSequence(this_: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.producers.Producer<java.lang.Void>;
					public getNetworkFetchToEncodedMemoryPrefetchSequence(): com.facebook.imagepipeline.producers.Producer<java.lang.Void>;
					public newBitmapCacheGetToDecodeSequence(decodeProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getNetworkFetchSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getLocalFileFetchToEncodedMemoryPrefetchSequence(): com.facebook.imagepipeline.producers.Producer<java.lang.Void>;
					public getCloseableImagePrefetchSequences(): java.util.Map<com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>,com.facebook.imagepipeline.producers.Producer<java.lang.Void>>;
					public constructor(contentResolver: globalAndroid.content.ContentResolver, producerFactory: com.facebook.imagepipeline.core.ProducerFactory, networkFetcher: com.facebook.imagepipeline.producers.NetworkFetcher<any>, resizeAndRotateEnabledForNetwork: boolean, webpSupportEnabled: boolean, threadHandoffProducerQueue: com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue, downsampleMode: com.facebook.imagepipeline.core.DownsampleMode, useBitmapPrepareToDraw: boolean, partialImageCachingEnabled: boolean, diskCacheEnabled: boolean, imageTranscoderFactory: com.facebook.imagepipeline.transcoder.ImageTranscoderFactory, isEncodedMemoryCacheProbingEnabled: boolean, isDiskCacheProbingEnabled: boolean, allowDelay: boolean, customProducerSequenceFactories: java.util.Set<any>);
					public setBitmapPrepareSequences(set: java.util.Map<com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>,com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>): void;
					public getLocalResourceFetchSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public newCommonNetworkFetchToEncodedMemorySequence(inputProducer: com.facebook.imagepipeline.producers.NetworkFetcher<any>): com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>;
					public getBackgroundLocalFileFetchToEncodeMemorySequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>;
				}
				export namespace ProducerSequenceFactory {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ProducerSequenceFactory.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace datasource {
				export abstract class AbstractProducerToDataSourceAdapter<T>  extends com.facebook.datasource.AbstractDataSource<any> implements com.facebook.imagepipeline.request.HasImageRequest  {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.AbstractProducerToDataSourceAdapter<any>>;
					public getExtras(producerContext: com.facebook.imagepipeline.producers.ProducerContext): java.util.Map<string,any>;
					public close(): boolean;
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public onNewResultImpl(this_: any, result: number, status: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getRequestListener(): com.facebook.imagepipeline.listener.RequestListener2;
					public constructor(traceSectionAbstractProducerToDataSourceAdapter$1$1: com.facebook.imagepipeline.producers.Producer<any>, $i$f$traceSection: com.facebook.imagepipeline.producers.SettableProducerContext, this_$iv: com.facebook.imagepipeline.listener.RequestListener2);
					public getSettableProducerContext(): com.facebook.imagepipeline.producers.SettableProducerContext;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace datasource {
				export abstract class BaseBitmapDataSubscriber extends com.facebook.datasource.BaseDataSubscriber<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.BaseBitmapDataSubscriber>;
					public constructor();
					public onNewResultImpl(param0: globalAndroid.graphics.Bitmap): void;
					public onNewResultImpl(dataSource: com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace datasource {
				export abstract class BaseBitmapReferenceDataSubscriber extends com.facebook.datasource.BaseDataSubscriber<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.BaseBitmapReferenceDataSubscriber>;
					public constructor();
					public onNewResultImpl(param0: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>): void;
					public onNewResultImpl(dataSource: com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace datasource {
				export abstract class BaseListBitmapDataSubscriber extends com.facebook.datasource.BaseDataSubscriber<java.util.List<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.BaseListBitmapDataSubscriber>;
					public constructor();
					public onNewResultImpl(bitmapList: com.facebook.datasource.DataSource<java.util.List<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>): void;
					public onNewResultListImpl(param0: java.util.List<globalAndroid.graphics.Bitmap>): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace datasource {
				export class CloseableProducerToDataSourceAdapter<T>  extends com.facebook.imagepipeline.datasource.AbstractProducerToDataSourceAdapter<com.facebook.common.references.CloseableReference<any>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.CloseableProducerToDataSourceAdapter<any>>;
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public closeResult(result: com.facebook.common.references.CloseableReference<any>): void;
					public onNewResultImpl(result: com.facebook.common.references.CloseableReference<any>, status: number, producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
					public static create(producer: com.facebook.imagepipeline.producers.Producer<any>, settableProducerContext: com.facebook.imagepipeline.producers.SettableProducerContext, listener: com.facebook.imagepipeline.listener.RequestListener2): com.facebook.datasource.DataSource;
					public onNewResultImpl(this_: any, result: number, status: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getResult(): com.facebook.common.references.CloseableReference<any>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace datasource {
				export class ListDataSource<T>  extends com.facebook.datasource.AbstractDataSource<java.util.List<com.facebook.common.references.CloseableReference<any>>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.ListDataSource<any>>;
					public getResult(): java.util.List<com.facebook.common.references.CloseableReference<any>>;
					public static create(dataSource: androidNative.Array<com.facebook.datasource.DataSource>): com.facebook.imagepipeline.datasource.ListDataSource<any>;
					public hasResult(): boolean;
					public close(): boolean;
					public constructor(dataSources: androidNative.Array<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<any>>>);
				}
				export namespace ListDataSource {
					export class InternalDataSubscriber extends com.facebook.datasource.DataSubscriber<com.facebook.common.references.CloseableReference<any>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.datasource.ListDataSource.InternalDataSubscriber>;
						public onCancellation(dataSource: com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<any>>): void;
						public onFailure(dataSource: com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<any>>): void;
						public onProgressUpdate(dataSource: com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<any>>): void;
						public onNewResult(dataSource: com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<any>>): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace datasource {
				export class ProducerToDataSourceAdapter<T>  extends com.facebook.imagepipeline.datasource.AbstractProducerToDataSourceAdapter<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.ProducerToDataSourceAdapter<any>>;
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public static create(producer: com.facebook.imagepipeline.producers.Producer<any>, settableProducerContext: com.facebook.imagepipeline.producers.SettableProducerContext, listener: com.facebook.imagepipeline.listener.RequestListener2): com.facebook.datasource.DataSource;
				}
				export namespace ProducerToDataSourceAdapter {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.datasource.ProducerToDataSourceAdapter.Companion>;
						public create(producer: com.facebook.imagepipeline.producers.Producer<any>, settableProducerContext: com.facebook.imagepipeline.producers.SettableProducerContext, listener: com.facebook.imagepipeline.listener.RequestListener2): com.facebook.datasource.DataSource;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace datasource {
				export class SettableDataSource<T>  extends com.facebook.datasource.AbstractDataSource<com.facebook.common.references.CloseableReference<any>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.SettableDataSource<any>>;
					public setException(throwable: java.lang.Throwable): boolean;
					public set(this_: com.facebook.common.references.CloseableReference<any>): boolean;
					public closeResult(result: com.facebook.common.references.CloseableReference<any>): void;
					public setProgress(progress: number): boolean;
					public getResult(): com.facebook.common.references.CloseableReference<any>;
					public static create(): com.facebook.imagepipeline.datasource.SettableDataSource<any>;
				}
				export namespace SettableDataSource {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.datasource.SettableDataSource.Companion>;
						public create(): com.facebook.imagepipeline.datasource.SettableDataSource<any>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace debug {
				export class CloseableReferenceLeakTracker {
					public static class: java.lang.Class<com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						trackCloseableReferenceLeak(param0: com.facebook.common.references.SharedReference<any>, param1: java.lang.Throwable): void;
						setListener(param0: com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker.Listener): void;
						isSet(): boolean;
					});
					public constructor();
					public isSet(): boolean;
					public trackCloseableReferenceLeak(param0: com.facebook.common.references.SharedReference<any>, param1: java.lang.Throwable): void;
					public setListener(param0: com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker.Listener): void;
				}
				export namespace CloseableReferenceLeakTracker {
					export class Listener {
						public static class: java.lang.Class<com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker.Listener>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCloseableReferenceLeak(param0: com.facebook.common.references.SharedReference<any>, param1: java.lang.Throwable): void;
						});
						public constructor();
						public onCloseableReferenceLeak(param0: com.facebook.common.references.SharedReference<any>, param1: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace debug {
				export class NoOpCloseableReferenceLeakTracker extends com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker {
					public static class: java.lang.Class<com.facebook.imagepipeline.debug.NoOpCloseableReferenceLeakTracker>;
					public isSet(): boolean;
					public constructor();
					public setListener(listener: com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker.Listener): void;
					public trackCloseableReferenceLeak(param0: com.facebook.common.references.SharedReference<any>, param1: java.lang.Throwable): void;
					public trackCloseableReferenceLeak(reference: com.facebook.common.references.SharedReference<any>, stacktrace: java.lang.Throwable): void;
					public setListener(param0: com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker.Listener): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace decoder {
				export class DecodeException {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.DecodeException>;
					public constructor(message: string, t: java.lang.Throwable, encodedImage: com.facebook.imagepipeline.image.EncodedImage);
					public constructor(message: string, encodedImage: com.facebook.imagepipeline.image.EncodedImage);
					public getEncodedImage(): com.facebook.imagepipeline.image.EncodedImage;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace decoder {
				export class DefaultImageDecoder extends com.facebook.imagepipeline.decoder.ImageDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.DefaultImageDecoder>;
					public decodeJpeg(closeableStaticBitmap: com.facebook.imagepipeline.image.EncodedImage, this_: number, encodedImage: com.facebook.imagepipeline.image.QualityInfo, length: com.facebook.imagepipeline.common.ImageDecodeOptions, qualityInfo: globalAndroid.graphics.ColorSpace): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public constructor(animatedGifDecoder: com.facebook.imagepipeline.decoder.ImageDecoder, animatedWebPDecoder: com.facebook.imagepipeline.decoder.ImageDecoder, xmlDecoder: com.facebook.imagepipeline.decoder.ImageDecoder, platformDecoder: com.facebook.imagepipeline.platform.PlatformDecoder, customDecoders: java.util.Map<com.facebook.imageformat.ImageFormat,com.facebook.imagepipeline.decoder.ImageDecoder>);
					public constructor(animatedGifDecoder: com.facebook.imagepipeline.decoder.ImageDecoder, animatedWebPDecoder: com.facebook.imagepipeline.decoder.ImageDecoder, xmlDecoder: com.facebook.imagepipeline.decoder.ImageDecoder, platformDecoder: com.facebook.imagepipeline.platform.PlatformDecoder);
					public constructor(animatedGifDecoder: com.facebook.imagepipeline.decoder.ImageDecoder, animatedWebPDecoder: com.facebook.imagepipeline.decoder.ImageDecoder, xmlDecoder: com.facebook.imagepipeline.decoder.ImageDecoder, platformDecoder: com.facebook.imagepipeline.platform.PlatformDecoder, customDecoders: java.util.Map<com.facebook.imageformat.ImageFormat,com.facebook.imagepipeline.decoder.ImageDecoder>, enableEncodedImageColorSpaceUsage: com.facebook.common.internal.Supplier<java.lang.Boolean>);
					public decodeAnimatedWebp(encodedImage: com.facebook.imagepipeline.image.EncodedImage, length: number, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, options: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableImage;
					public decode(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number, param2: com.facebook.imagepipeline.image.QualityInfo, param3: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableImage;
					public decode(decoder: com.facebook.imagepipeline.image.EncodedImage, this_: number, encodedImage: com.facebook.imagepipeline.image.QualityInfo, length: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableImage;
					public decodeGif(encodedImage: com.facebook.imagepipeline.image.EncodedImage, length: number, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, options: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableImage;
					public decodeStaticImage(closeableStaticBitmap: com.facebook.imagepipeline.image.EncodedImage, this_: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableStaticBitmap;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace decoder {
				export class ImageDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.ImageDecoder>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.decoder.ImageDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						decode(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number, param2: com.facebook.imagepipeline.image.QualityInfo, param3: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableImage;
					});
					public constructor();
					public decode(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number, param2: com.facebook.imagepipeline.image.QualityInfo, param3: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableImage;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace decoder {
				export class ImageDecoderConfig {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.ImageDecoderConfig>;
					public static newBuilder(): com.facebook.imagepipeline.decoder.ImageDecoderConfig.Builder;
					public getCustomImageDecoders(): java.util.Map<com.facebook.imageformat.ImageFormat,com.facebook.imagepipeline.decoder.ImageDecoder>;
					public getCustomImageFormats(): java.util.List<com.facebook.imageformat.ImageFormat.FormatChecker>;
				}
				export namespace ImageDecoderConfig {
					export class Builder {
						public static class: java.lang.Class<com.facebook.imagepipeline.decoder.ImageDecoderConfig.Builder>;
						public addDecodingCapability(imageFormat: com.facebook.imageformat.ImageFormat, imageFormatChecker: com.facebook.imageformat.ImageFormat.FormatChecker, decoder: com.facebook.imagepipeline.decoder.ImageDecoder): com.facebook.imagepipeline.decoder.ImageDecoderConfig.Builder;
						public constructor();
						public build(): com.facebook.imagepipeline.decoder.ImageDecoderConfig;
						public overrideDecoder(imageFormat: com.facebook.imageformat.ImageFormat, decoder: com.facebook.imagepipeline.decoder.ImageDecoder): com.facebook.imagepipeline.decoder.ImageDecoderConfig.Builder;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace decoder {
				export class ProgressiveJpegConfig {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.ProgressiveJpegConfig>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.decoder.ProgressiveJpegConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						decodeProgressively(): boolean;
						getNextScanNumberToDecode(param0: number): number;
						getQualityInfo(param0: number): com.facebook.imagepipeline.image.QualityInfo;
					});
					public constructor();
					public getNextScanNumberToDecode(param0: number): number;
					public getQualityInfo(param0: number): com.facebook.imagepipeline.image.QualityInfo;
					public decodeProgressively(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace decoder {
				export class ProgressiveJpegParser {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.ProgressiveJpegParser>;
					public constructor(byteArrayPool: com.facebook.common.memory.ByteArrayPool);
					public parseMoreData(this_: com.facebook.imagepipeline.image.EncodedImage): boolean;
					public getBestScanEndOffset(): number;
					public isEndMarkerRead(): boolean;
					public isJpeg(): boolean;
					public getBestScanNumber(): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace decoder {
				export class SimpleProgressiveJpegConfig extends com.facebook.imagepipeline.decoder.ProgressiveJpegConfig {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.SimpleProgressiveJpegConfig>;
					public getNextScanNumberToDecode(param0: number): number;
					public getQualityInfo(param0: number): com.facebook.imagepipeline.image.QualityInfo;
					public constructor();
					public getQualityInfo(scanNumber: number): com.facebook.imagepipeline.image.QualityInfo;
					public constructor(dynamicValueConfig: com.facebook.imagepipeline.decoder.SimpleProgressiveJpegConfig.DynamicValueConfig);
					public decodeProgressively(): boolean;
					public getNextScanNumberToDecode(this_: number): number;
				}
				export namespace SimpleProgressiveJpegConfig {
					export class DefaultDynamicValueConfig extends com.facebook.imagepipeline.decoder.SimpleProgressiveJpegConfig.DynamicValueConfig {
						public static class: java.lang.Class<com.facebook.imagepipeline.decoder.SimpleProgressiveJpegConfig.DefaultDynamicValueConfig>;
						public getScansToDecode(): java.util.List<java.lang.Integer>;
						public getGoodEnoughScanNumber(): number;
					}
					export class DynamicValueConfig {
						public static class: java.lang.Class<com.facebook.imagepipeline.decoder.SimpleProgressiveJpegConfig.DynamicValueConfig>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.decoder.SimpleProgressiveJpegConfig$DynamicValueConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getScansToDecode(): java.util.List<java.lang.Integer>;
							getGoodEnoughScanNumber(): number;
						});
						public constructor();
						public getScansToDecode(): java.util.List<java.lang.Integer>;
						public getGoodEnoughScanNumber(): number;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace drawable {
				export class DrawableFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.drawable.DrawableFactory>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.drawable.DrawableFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						supportsImageType(param0: com.facebook.imagepipeline.image.CloseableImage): boolean;
						createDrawable(param0: com.facebook.imagepipeline.image.CloseableImage): globalAndroid.graphics.drawable.Drawable;
					});
					public constructor();
					public createDrawable(param0: com.facebook.imagepipeline.image.CloseableImage): globalAndroid.graphics.drawable.Drawable;
					public supportsImageType(param0: com.facebook.imagepipeline.image.CloseableImage): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace filter {
				export class InPlaceRoundFilter {
					public static class: java.lang.Class<com.facebook.imagepipeline.filter.InPlaceRoundFilter>;
					public static INSTANCE: com.facebook.imagepipeline.filter.InPlaceRoundFilter;
					public static roundBitmapInPlace(i: globalAndroid.graphics.Bitmap): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace filter {
				export class IterativeBoxBlurFilter {
					public static class: java.lang.Class<com.facebook.imagepipeline.filter.IterativeBoxBlurFilter>;
					public static INSTANCE: com.facebook.imagepipeline.filter.IterativeBoxBlurFilter;
					public static boxBlurBitmapInPlace(oom: globalAndroid.graphics.Bitmap, bitmap: number, iterations: number): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace filter {
				export class RenderScriptBlurFilter {
					public static class: java.lang.Class<com.facebook.imagepipeline.filter.RenderScriptBlurFilter>;
					public static INSTANCE: com.facebook.imagepipeline.filter.RenderScriptBlurFilter;
					public static BLUR_MAX_RADIUS: number; // 25
					public static blurBitmap(blurScript: globalAndroid.graphics.Bitmap, allIn: globalAndroid.graphics.Bitmap, allOut: globalAndroid.content.Context, rs: number): void;
					public static canUseRenderScript(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace filter {
				export class XferRoundFilter {
					public static class: java.lang.Class<com.facebook.imagepipeline.filter.XferRoundFilter>;
					public static INSTANCE: com.facebook.imagepipeline.filter.XferRoundFilter;
					public static xferRoundBitmap(applyXferRoundFilter$xferRoundBitmap$1: globalAndroid.graphics.Bitmap, $this$xferRoundBitmap_u24lambda_u240: globalAndroid.graphics.Bitmap, circlePaint: boolean): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export abstract class BaseCloseableImage extends com.facebook.imagepipeline.image.CloseableImage {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.BaseCloseableImage>;
					public putExtra(extra: string, value: any): void;
					public getHeight(): number;
					public isStateful(): boolean;
					public getWidth(): number;
					public getExtra(param0: string): any;
					public getExtra(param0: string, param1: any): any;
					public getExtras(): java.util.Map<string,any>;
					public getSizeInBytes(): number;
					public putExtras(extra: java.util.Map<string,any>): void;
					public constructor();
					public getExtra(key: string): any;
					public close(): void;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public putExtra(param0: string, param1: any): void;
					public getImageInfo(): com.facebook.imagepipeline.image.ImageInfo;
					public getExtra(key: string, valueIfNotFound: any): any;
					public putExtras(param0: java.util.Map<string,any>): void;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export class BaseCloseableStaticBitmap extends com.facebook.imagepipeline.image.BaseCloseableImage implements com.facebook.imagepipeline.image.CloseableStaticBitmap {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.BaseCloseableStaticBitmap>;
					public static setUseSimpleCloseableStaticBitmap(useSimpleCloseableStaticBitmap: boolean): void;
					public cloneUnderlyingBitmapReference(): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public static of(bitmapReference: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number, exifOrientation: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public isStateful(): boolean;
					public getExtra(param0: string, param1: any): any;
					public constructor(bitmapReference: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number);
					public constructor();
					public close(): void;
					public static of(bitmapReference: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public putExtra(param0: string, param1: any): void;
					public getImageInfo(): com.facebook.imagepipeline.image.ImageInfo;
					public constructor(bitmapReference: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number, exifOrientation: number);
					public convertToBitmapReference(): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public static shouldUseSimpleCloseableStaticBitmap(): boolean;
					public getUnderlyingBitmap(): globalAndroid.graphics.Bitmap;
					public getHeight(): number;
					public static of(bitmap: globalAndroid.graphics.Bitmap, resourceReleaser: com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public constructor(bitmap: globalAndroid.graphics.Bitmap, resourceReleaser: com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number, exifOrientation: number);
					public getWidth(): number;
					public getExtra(param0: string): any;
					public getExifOrientation(): number;
					public getExtras(): java.util.Map<string,any>;
					public getSizeInBytes(): number;
					public getRotationAngle(): number;
					public static of(bitmap: globalAndroid.graphics.Bitmap, resourceReleaser: com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number, orientation: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public getExtra(key: string, valueIfNotFound: any): any;
					public putExtras(param0: java.util.Map<string,any>): void;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export class CloseableBitmap extends com.facebook.imagepipeline.image.CloseableImage {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.CloseableBitmap>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.image.CloseableBitmap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getUnderlyingBitmap(): globalAndroid.graphics.Bitmap;
						getSizeInBytes(): number;
						close(): void;
						isClosed(): boolean;
						isStateful(): boolean;
						getWidth(): number;
						getHeight(): number;
						getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						getImageInfo(): com.facebook.imagepipeline.image.ImageInfo;
						getWidth(): number;
						getHeight(): number;
						getSizeInBytes(): number;
						getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						putExtra(param0: string, param1: any): void;
						getExtra(param0: string): any;
						getExtra(param0: string, param1: any): any;
						getExtras(): java.util.Map<string,any>;
						putExtras(param0: java.util.Map<string,any>): void;
						"<clinit>"(): void;
						getExtras(): java.util.Map<string,any>;
					});
					public constructor();
					public static KEY_ID: string; // "id"
					public static KEY_ENCODED_HEIGHT: string; // "encoded_height"
					public static KEY_URI_SOURCE: string; // "uri_source"
					public static KEY_ENCODED_SIZE: string; // "encoded_size"
					public static KEY_MULTIPLEX_ENCODED_COUNT: string; // "multiplex_enc_cnt"
					public static KEY_IMAGE_SOURCE_EXTRAS: string; // "image_source_extras"
					public static KEY_ORIGINAL_URL: string; // "original_url"
					public static KEY_ORIGIN_SUBCATEGORY: string; // "origin_sub"
					public static KEY_COLOR_SPACE: string; // "image_color_space"
					public static KEY_IMAGE_FORMAT: string; // "image_format"
					public static KEY_IS_ROUNDED: string; // "is_rounded"
					public static KEY_IMAGE_SOURCE_TYPE: string; // "image_source_type"
					public static KEY_MODIFIED_URL: string; // "modified_url"
					public static KEY_BITMAP_CONFIG: string; // "bitmap_config"
					public static KEY_MULTIPLEX_BITMAP_COUNT: string; // "multiplex_bmp_cnt"
					public static Companion: com.facebook.fresco.middleware.HasExtraData.Companion;
					public static KEY_ORIGIN: string; // "origin"
					public static KEY_ENCODED_WIDTH: string; // "encoded_width"
					public static KEY_NON_FATAL_DECODE_ERROR: string; // "non_fatal_decode_error"
					public static KEY_LAST_SCAN_NUMBER: string; // "last_scan_num"
					public getUnderlyingBitmap(): globalAndroid.graphics.Bitmap;
					public getHeight(): number;
					public isStateful(): boolean;
					public getWidth(): number;
					public getExtra(param0: string): any;
					public getExtra(param0: string, param1: any): any;
					public getExtras(): java.util.Map<string,any>;
					public getSizeInBytes(): number;
					public close(): void;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public putExtra(param0: string, param1: any): void;
					public getImageInfo(): com.facebook.imagepipeline.image.ImageInfo;
					public putExtras(param0: java.util.Map<string,any>): void;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export class CloseableImage implements com.facebook.imagepipeline.image.ImageInfo, com.facebook.fresco.middleware.HasExtraData {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.CloseableImage>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.image.CloseableImage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSizeInBytes(): number;
						close(): void;
						isClosed(): boolean;
						isStateful(): boolean;
						getWidth(): number;
						getHeight(): number;
						getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						getImageInfo(): com.facebook.imagepipeline.image.ImageInfo;
						getWidth(): number;
						getHeight(): number;
						getSizeInBytes(): number;
						getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						putExtra(param0: string, param1: any): void;
						getExtra(param0: string): any;
						getExtra(param0: string, param1: any): any;
						getExtras(): java.util.Map<string,any>;
						putExtras(param0: java.util.Map<string,any>): void;
						"<clinit>"(): void;
						getExtras(): java.util.Map<string,any>;
					});
					public constructor();
					public static KEY_ID: string; // "id"
					public static KEY_ENCODED_HEIGHT: string; // "encoded_height"
					public static KEY_URI_SOURCE: string; // "uri_source"
					public static KEY_ENCODED_SIZE: string; // "encoded_size"
					public static KEY_MULTIPLEX_ENCODED_COUNT: string; // "multiplex_enc_cnt"
					public static KEY_IMAGE_SOURCE_EXTRAS: string; // "image_source_extras"
					public static KEY_ORIGINAL_URL: string; // "original_url"
					public static KEY_ORIGIN_SUBCATEGORY: string; // "origin_sub"
					public static KEY_COLOR_SPACE: string; // "image_color_space"
					public static KEY_IMAGE_FORMAT: string; // "image_format"
					public static KEY_IS_ROUNDED: string; // "is_rounded"
					public static KEY_IMAGE_SOURCE_TYPE: string; // "image_source_type"
					public static KEY_MODIFIED_URL: string; // "modified_url"
					public static KEY_BITMAP_CONFIG: string; // "bitmap_config"
					public static KEY_MULTIPLEX_BITMAP_COUNT: string; // "multiplex_bmp_cnt"
					public static Companion: com.facebook.fresco.middleware.HasExtraData.Companion;
					public static KEY_ORIGIN: string; // "origin"
					public static KEY_ENCODED_WIDTH: string; // "encoded_width"
					public static KEY_NON_FATAL_DECODE_ERROR: string; // "non_fatal_decode_error"
					public static KEY_LAST_SCAN_NUMBER: string; // "last_scan_num"
					public getHeight(): number;
					public isStateful(): boolean;
					public getWidth(): number;
					public getExtra(param0: string): any;
					public getExtra(param0: string, param1: any): any;
					public getExtras(): java.util.Map<string,any>;
					public getSizeInBytes(): number;
					public close(): void;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public putExtra(param0: string, param1: any): void;
					public getImageInfo(): com.facebook.imagepipeline.image.ImageInfo;
					public putExtras(param0: java.util.Map<string,any>): void;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export class CloseableStaticBitmap extends com.facebook.imagepipeline.image.CloseableBitmap {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.CloseableStaticBitmap>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.image.CloseableStaticBitmap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cloneUnderlyingBitmapReference(): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						getExifOrientation(): number;
						getRotationAngle(): number;
						convertToBitmapReference(): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						of(bitmap: globalAndroid.graphics.Bitmap, resourceReleaser: com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
						of(bitmapReference: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
						of(bitmap: globalAndroid.graphics.Bitmap, resourceReleaser: com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number, orientation: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
						of(bitmapReference: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number, exifOrientation: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
						getUnderlyingBitmap(): globalAndroid.graphics.Bitmap;
						getSizeInBytes(): number;
						close(): void;
						isClosed(): boolean;
						isStateful(): boolean;
						getWidth(): number;
						getHeight(): number;
						getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						getImageInfo(): com.facebook.imagepipeline.image.ImageInfo;
						getWidth(): number;
						getHeight(): number;
						getSizeInBytes(): number;
						getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						putExtra(param0: string, param1: any): void;
						getExtra(param0: string): any;
						getExtra(param0: string, param1: any): any;
						getExtras(): java.util.Map<string,any>;
						putExtras(param0: java.util.Map<string,any>): void;
						"<clinit>"(): void;
						getExtras(): java.util.Map<string,any>;
					});
					public constructor();
					public static KEY_ID: string; // "id"
					public static KEY_ENCODED_HEIGHT: string; // "encoded_height"
					public static KEY_URI_SOURCE: string; // "uri_source"
					public static KEY_ENCODED_SIZE: string; // "encoded_size"
					public static KEY_MULTIPLEX_ENCODED_COUNT: string; // "multiplex_enc_cnt"
					public static KEY_IMAGE_SOURCE_EXTRAS: string; // "image_source_extras"
					public static KEY_ORIGINAL_URL: string; // "original_url"
					public static KEY_ORIGIN_SUBCATEGORY: string; // "origin_sub"
					public static KEY_COLOR_SPACE: string; // "image_color_space"
					public static KEY_IMAGE_FORMAT: string; // "image_format"
					public static KEY_IS_ROUNDED: string; // "is_rounded"
					public static KEY_IMAGE_SOURCE_TYPE: string; // "image_source_type"
					public static KEY_MODIFIED_URL: string; // "modified_url"
					public static KEY_BITMAP_CONFIG: string; // "bitmap_config"
					public static KEY_MULTIPLEX_BITMAP_COUNT: string; // "multiplex_bmp_cnt"
					public static Companion: com.facebook.fresco.middleware.HasExtraData.Companion;
					public static KEY_ORIGIN: string; // "origin"
					public static KEY_ENCODED_WIDTH: string; // "encoded_width"
					public static KEY_NON_FATAL_DECODE_ERROR: string; // "non_fatal_decode_error"
					public static KEY_LAST_SCAN_NUMBER: string; // "last_scan_num"
					public convertToBitmapReference(): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public cloneUnderlyingBitmapReference(): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public getUnderlyingBitmap(): globalAndroid.graphics.Bitmap;
					public static of(bitmapReference: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number, exifOrientation: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public getHeight(): number;
					public static of(bitmap: globalAndroid.graphics.Bitmap, resourceReleaser: com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public isStateful(): boolean;
					public getWidth(): number;
					public getExtra(param0: string): any;
					public getExtra(param0: string, param1: any): any;
					public getExifOrientation(): number;
					public getExtras(): java.util.Map<string,any>;
					public getSizeInBytes(): number;
					public getRotationAngle(): number;
					public static of(bitmap: globalAndroid.graphics.Bitmap, resourceReleaser: com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number, orientation: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public close(): void;
					public static of(bitmapReference: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public putExtra(param0: string, param1: any): void;
					public getImageInfo(): com.facebook.imagepipeline.image.ImageInfo;
					public putExtras(param0: java.util.Map<string,any>): void;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export class CloseableXml extends com.facebook.imagepipeline.image.CloseableImage {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.CloseableXml>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.image.CloseableXml interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						buildDrawable(): globalAndroid.graphics.drawable.Drawable;
						getSizeInBytes(): number;
						close(): void;
						isClosed(): boolean;
						isStateful(): boolean;
						getWidth(): number;
						getHeight(): number;
						getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						getImageInfo(): com.facebook.imagepipeline.image.ImageInfo;
						getWidth(): number;
						getHeight(): number;
						getSizeInBytes(): number;
						getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						putExtra(param0: string, param1: any): void;
						getExtra(param0: string): any;
						getExtra(param0: string, param1: any): any;
						getExtras(): java.util.Map<string,any>;
						putExtras(param0: java.util.Map<string,any>): void;
						"<clinit>"(): void;
						getExtras(): java.util.Map<string,any>;
					});
					public constructor();
					public static KEY_ID: string; // "id"
					public static KEY_ENCODED_HEIGHT: string; // "encoded_height"
					public static KEY_URI_SOURCE: string; // "uri_source"
					public static KEY_ENCODED_SIZE: string; // "encoded_size"
					public static KEY_MULTIPLEX_ENCODED_COUNT: string; // "multiplex_enc_cnt"
					public static KEY_IMAGE_SOURCE_EXTRAS: string; // "image_source_extras"
					public static KEY_ORIGINAL_URL: string; // "original_url"
					public static KEY_ORIGIN_SUBCATEGORY: string; // "origin_sub"
					public static KEY_COLOR_SPACE: string; // "image_color_space"
					public static KEY_IMAGE_FORMAT: string; // "image_format"
					public static KEY_IS_ROUNDED: string; // "is_rounded"
					public static KEY_IMAGE_SOURCE_TYPE: string; // "image_source_type"
					public static KEY_MODIFIED_URL: string; // "modified_url"
					public static KEY_BITMAP_CONFIG: string; // "bitmap_config"
					public static KEY_MULTIPLEX_BITMAP_COUNT: string; // "multiplex_bmp_cnt"
					public static Companion: com.facebook.fresco.middleware.HasExtraData.Companion;
					public static KEY_ORIGIN: string; // "origin"
					public static KEY_ENCODED_WIDTH: string; // "encoded_width"
					public static KEY_NON_FATAL_DECODE_ERROR: string; // "non_fatal_decode_error"
					public static KEY_LAST_SCAN_NUMBER: string; // "last_scan_num"
					public getHeight(): number;
					public isStateful(): boolean;
					public getWidth(): number;
					public getExtra(param0: string): any;
					public getExtra(param0: string, param1: any): any;
					public getExtras(): java.util.Map<string,any>;
					public getSizeInBytes(): number;
					public close(): void;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public putExtra(param0: string, param1: any): void;
					public getImageInfo(): com.facebook.imagepipeline.image.ImageInfo;
					public putExtras(param0: java.util.Map<string,any>): void;
					public buildDrawable(): globalAndroid.graphics.drawable.Drawable;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export abstract class DefaultCloseableImage extends com.facebook.imagepipeline.image.BaseCloseableImage {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.DefaultCloseableImage>;
					public constructor();
					public getHeight(): number;
					public finalize(): void;
					public close(): void;
					public isStateful(): boolean;
					public getWidth(): number;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public getImageInfo(): com.facebook.imagepipeline.image.ImageInfo;
					public getSizeInBytes(): number;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export class DefaultCloseableStaticBitmap extends com.facebook.imagepipeline.image.BaseCloseableStaticBitmap {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.DefaultCloseableStaticBitmap>;
					public constructor(bitmapReference: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number, exifOrientation: number);
					public convertToBitmapReference(): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public cloneUnderlyingBitmapReference(): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public getHeight(): number;
					public static of(bitmapReference: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number, exifOrientation: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public finalize(): void;
					public static of(bitmap: globalAndroid.graphics.Bitmap, resourceReleaser: com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public constructor(bitmap: globalAndroid.graphics.Bitmap, resourceReleaser: com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number, exifOrientation: number);
					public isStateful(): boolean;
					public getWidth(): number;
					public getExifOrientation(): number;
					public getSizeInBytes(): number;
					public constructor(bitmapReference: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number);
					public constructor();
					public getRotationAngle(): number;
					public close(): void;
					public static of(bitmap: globalAndroid.graphics.Bitmap, resourceReleaser: com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number, orientation: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public static of(bitmapReference: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, rotationAngle: number): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public getImageInfo(): com.facebook.imagepipeline.image.ImageInfo;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export class DefaultCloseableXml extends com.facebook.imagepipeline.image.DefaultCloseableImage implements com.facebook.imagepipeline.image.CloseableXml {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.DefaultCloseableXml>;
					public getHeight(): number;
					public getWidth(): number;
					public isStateful(): boolean;
					public getExtra(param0: string): any;
					public getExtra(param0: string, param1: any): any;
					public getExtras(): java.util.Map<string,any>;
					public getSizeInBytes(): number;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable);
					public constructor();
					public close(): void;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public putExtra(param0: string, param1: any): void;
					public getImageInfo(): com.facebook.imagepipeline.image.ImageInfo;
					public getExtra(key: string, valueIfNotFound: any): any;
					public putExtras(param0: java.util.Map<string,any>): void;
					public isClosed(): boolean;
					public buildDrawable(): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export class EncodedImage {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.EncodedImage>;
					public static UNKNOWN_ROTATION_ANGLE: number; // -1
					public static UNKNOWN_WIDTH: number; // -1
					public static UNKNOWN_HEIGHT: number; // -1
					public static UNKNOWN_STREAM_SIZE: number; // -1
					public static DEFAULT_SAMPLE_SIZE: number; // 1
					public copyMetaDataFrom(encodedImage: com.facebook.imagepipeline.image.EncodedImage): void;
					public getSource(): string;
					public isCompleteAt(length: number): boolean;
					public setWidth(width: number): void;
					public setImageFormat(imageFormat: com.facebook.imageformat.ImageFormat): void;
					public getSize(): number;
					public constructor(pooledByteBufferRef: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>);
					public cloneOrNull(): com.facebook.imagepipeline.image.EncodedImage;
					public parseMetaData(): void;
					public getUnderlyingReferenceTestOnly(): com.facebook.common.references.SharedReference<com.facebook.common.memory.PooledByteBuffer>;
					public getByteBufferRef(): com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>;
					public setSource(source: string): void;
					public close(): void;
					public getInputStream(): java.io.InputStream;
					public static isMetaDataAvailable(encodedImage: com.facebook.imagepipeline.image.EncodedImage): boolean;
					public static closeSafely(encodedImage: com.facebook.imagepipeline.image.EncodedImage): void;
					public setHeight(height: number): void;
					public setBytesRange(bytesRange: com.facebook.imagepipeline.common.BytesRange): void;
					public getImageFormat(): com.facebook.imageformat.ImageFormat;
					public setStreamSize(streamSize: number): void;
					public getHeight(): number;
					public hasParsedMetaData(): boolean;
					public getWidth(): number;
					public getBytesRange(): com.facebook.imagepipeline.common.BytesRange;
					public setRotationAngle(rotationAngle: number): void;
					public getExifOrientation(): number;
					public setExifOrientation(exifOrientation: number): void;
					public static cloneOrNull(encodedImage: com.facebook.imagepipeline.image.EncodedImage): com.facebook.imagepipeline.image.EncodedImage;
					public getFirstBytesAsHexString(b: number): string;
					public getInputStreamOrThrow(): java.io.InputStream;
					public static isValid(encodedImage: com.facebook.imagepipeline.image.EncodedImage): boolean;
					public constructor(inputStreamSupplier: com.facebook.common.internal.Supplier<java.io.FileInputStream>, streamSize: number);
					public getSampleSize(): number;
					public isValid(): boolean;
					public setSampleSize(sampleSize: number): void;
					public getRotationAngle(): number;
					public getColorSpace(): globalAndroid.graphics.ColorSpace;
					public static setUseCachedMetadata(useCachedMetadata: boolean): void;
					public constructor(inputStreamSupplier: com.facebook.common.internal.Supplier<java.io.FileInputStream>);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export class HasImageMetadata {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.HasImageMetadata>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.image.HasImageMetadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getExtras(): java.util.Map<string,any>;
					});
					public constructor();
					public getExtras(): java.util.Map<string,any>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export class ImageInfo extends com.facebook.imagepipeline.image.HasImageMetadata {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.ImageInfo>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.image.ImageInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getWidth(): number;
						getHeight(): number;
						getSizeInBytes(): number;
						getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						getExtras(): java.util.Map<string,any>;
					});
					public constructor();
					public getHeight(): number;
					public getWidth(): number;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public getExtras(): java.util.Map<string,any>;
					public getSizeInBytes(): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export class ImageInfoImpl extends com.facebook.imagepipeline.image.ImageInfo {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.ImageInfoImpl>;
					public constructor(width: number, height: number, sizeInBytes: number, qualityInfo: com.facebook.imagepipeline.image.QualityInfo, extras: java.util.Map<string,any>);
					public getHeight(): number;
					public getWidth(): number;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public getExtras(): java.util.Map<string,any>;
					public getSizeInBytes(): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export class ImmutableQualityInfo extends com.facebook.imagepipeline.image.QualityInfo {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.ImmutableQualityInfo>;
					public static FULL_QUALITY: com.facebook.imagepipeline.image.QualityInfo;
					public isOfGoodEnoughQuality(): boolean;
					public getQuality(): number;
					public equals(other: any): boolean;
					public isOfFullQuality(): boolean;
					public hashCode(): number;
					public static of(quality: number, isOfGoodEnoughQuality: boolean, isOfFullQuality: boolean): com.facebook.imagepipeline.image.QualityInfo;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace image {
				export class QualityInfo {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.QualityInfo>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.image.QualityInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getQuality(): number;
						isOfGoodEnoughQuality(): boolean;
						isOfFullQuality(): boolean;
					});
					public constructor();
					public isOfGoodEnoughQuality(): boolean;
					public getQuality(): number;
					public isOfFullQuality(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace instrumentation {
				export class FrescoInstrumenter {
					public static class: java.lang.Class<com.facebook.imagepipeline.instrumentation.FrescoInstrumenter>;
					public static INSTANCE: com.facebook.imagepipeline.instrumentation.FrescoInstrumenter;
					public static onEndWork(instrumenter: any): void;
					public static decorateRunnable(instrumenter: java.lang.Runnable, nonNullTag: string): java.lang.Runnable;
					public static isTracing(): boolean;
					public static onBeginWork(instrumenter: any, token: string): any;
					public static onBeforeSubmitWork(instrumenter: string): any;
					public static provide(instrumenter: com.facebook.imagepipeline.instrumentation.FrescoInstrumenter.Instrumenter): void;
					public static markFailure(instrumenter: any, token: java.lang.Throwable): void;
				}
				export namespace FrescoInstrumenter {
					export class Instrumenter {
						public static class: java.lang.Class<com.facebook.imagepipeline.instrumentation.FrescoInstrumenter.Instrumenter>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.instrumentation.FrescoInstrumenter$Instrumenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isTracing(): boolean;
							onBeforeSubmitWork(param0: string): any;
							onBeginWork(param0: any, param1: string): any;
							onEndWork(param0: any): void;
							markFailure(param0: any, param1: java.lang.Throwable): void;
							decorateRunnable(param0: java.lang.Runnable, param1: string): java.lang.Runnable;
						});
						public constructor();
						public onBeforeSubmitWork(param0: string): any;
						public isTracing(): boolean;
						public markFailure(param0: any, param1: java.lang.Throwable): void;
						public decorateRunnable(param0: java.lang.Runnable, param1: string): java.lang.Runnable;
						public onEndWork(param0: any): void;
						public onBeginWork(param0: any, param1: string): any;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace listener {
				export class BaseRequestListener extends com.facebook.imagepipeline.listener.RequestListener {
					public static class: java.lang.Class<com.facebook.imagepipeline.listener.BaseRequestListener>;
					public onProducerStart(param0: string, param1: string): void;
					public onProducerStart(requestId: string, producerName: string): void;
					public onProducerFinishWithFailure(requestId: string, producerName: string, t: java.lang.Throwable, extraMap: java.util.Map<string,string>): void;
					public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onRequestFailure(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
					public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
					public onProducerEvent(param0: string, param1: string, param2: string): void;
					public onRequestStart(request: com.facebook.imagepipeline.request.ImageRequest, callerContext: any, requestId: string, isPrefetch: boolean): void;
					public onRequestFailure(request: com.facebook.imagepipeline.request.ImageRequest, requestId: string, throwable: java.lang.Throwable, isPrefetch: boolean): void;
					public onRequestSuccess(request: com.facebook.imagepipeline.request.ImageRequest, requestId: string, isPrefetch: boolean): void;
					public onUltimateProducerReached(requestId: string, producerName: string, successful: boolean): void;
					public requiresExtraMap(param0: string): boolean;
					public onProducerEvent(requestId: string, producerName: string, eventName: string): void;
					public requiresExtraMap(requestId: string): boolean;
					public onProducerFinishWithSuccess(requestId: string, producerName: string, extraMap: java.util.Map<string,string>): void;
					public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public constructor();
					public onRequestStart(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
					public onProducerFinishWithCancellation(requestId: string, producerName: string, extraMap: java.util.Map<string,string>): void;
					public onRequestSuccess(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
					public onRequestCancellation(requestId: string): void;
					public onRequestCancellation(param0: string): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace listener {
				export class BaseRequestListener2 extends com.facebook.imagepipeline.listener.RequestListener2 {
					public static class: java.lang.Class<com.facebook.imagepipeline.listener.BaseRequestListener2>;
					public requiresExtraMap(producerContext: com.facebook.imagepipeline.producers.ProducerContext, producerName: string): boolean;
					public onProducerFinishWithFailure(producerContext: com.facebook.imagepipeline.producers.ProducerContext, producerName: string, t: java.lang.Throwable, extraMap: java.util.Map<string,string>): void;
					public onProducerEvent(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: string): void;
					public onRequestFailure(producerContext: com.facebook.imagepipeline.producers.ProducerContext, throwable: java.lang.Throwable): void;
					public onRequestStart(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onRequestCancellation(producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
					public requiresExtraMap(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): boolean;
					public onRequestSuccess(producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onUltimateProducerReached(producerContext: com.facebook.imagepipeline.producers.ProducerContext, producerName: string, successful: boolean): void;
					public onRequestFailure(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: java.lang.Throwable): void;
					public onProducerFinishWithFailure(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onProducerEvent(producerContext: com.facebook.imagepipeline.producers.ProducerContext, producerName: string, eventName: string): void;
					public onRequestSuccess(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onProducerStart(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): void;
					public onProducerStart(producerContext: com.facebook.imagepipeline.producers.ProducerContext, producerName: string): void;
					public onProducerFinishWithCancellation(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
					public onUltimateProducerReached(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: boolean): void;
					public onRequestCancellation(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onRequestStart(producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor();
					public onProducerFinishWithCancellation(producerContext: com.facebook.imagepipeline.producers.ProducerContext, producerName: string, extraMap: java.util.Map<string,string>): void;
					public onProducerFinishWithSuccess(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithSuccess(producerContext: com.facebook.imagepipeline.producers.ProducerContext, producerName: string, extraMap: java.util.Map<string,string>): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace listener {
				export class ForwardingRequestListener extends com.facebook.imagepipeline.listener.RequestListener {
					public static class: java.lang.Class<com.facebook.imagepipeline.listener.ForwardingRequestListener>;
					public onRequestCancellation(listener: string): void;
					public requiresExtraMap(this_: string): boolean;
					public onRequestFailure(listener: com.facebook.imagepipeline.request.ImageRequest, i: string, this_: java.lang.Throwable, request: boolean): void;
					public onRequestFailure(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
					public onProducerFinishWithFailure(listener: string, i: string, this_: java.lang.Throwable, requestId: java.util.Map<string,string>): void;
					public onProducerFinishWithSuccess(listener: string, i: string, this_: java.util.Map<string,string>): void;
					public requiresExtraMap(param0: string): boolean;
					public constructor(this_: androidNative.Array<com.facebook.imagepipeline.listener.RequestListener>);
					public onRequestStart(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
					public onRequestCancellation(param0: string): void;
					public onProducerFinishWithCancellation(listener: string, i: string, this_: java.util.Map<string,string>): void;
					public onProducerStart(param0: string, param1: string): void;
					public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onUltimateProducerReached(listener: string, i: string, this_: boolean): void;
					public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
					public onProducerStart(listener: string, i: string): void;
					public onProducerEvent(param0: string, param1: string, param2: string): void;
					public addRequestListener(requestListener: com.facebook.imagepipeline.listener.RequestListener): void;
					public onRequestStart(listener: com.facebook.imagepipeline.request.ImageRequest, i: any, this_: string, request: boolean): void;
					public constructor(this_: java.util.Set<com.facebook.imagepipeline.listener.RequestListener>);
					public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerEvent(listener: string, i: string, this_: string): void;
					public onRequestSuccess(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
					public onRequestSuccess(listener: com.facebook.imagepipeline.request.ImageRequest, i: string, this_: boolean): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace listener {
				export class ForwardingRequestListener2 extends com.facebook.imagepipeline.listener.RequestListener2 {
					public static class: java.lang.Class<com.facebook.imagepipeline.listener.ForwardingRequestListener2>;
					public onRequestCancellation(it: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onProducerEvent(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: string): void;
					public onProducerFinishWithFailure(it: com.facebook.imagepipeline.producers.ProducerContext, exception$iv: string, forEachForwardingRequestListener2$forEachListener$1$iv: java.lang.Throwable, it$iv: java.util.Map<string,string>): void;
					public onProducerStart(it: com.facebook.imagepipeline.producers.ProducerContext, exception$iv: string): void;
					public constructor(listenersToAdd: java.util.Set<any>);
					public onRequestFailure(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: java.lang.Throwable): void;
					public onRequestSuccess(it: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onProducerFinishWithSuccess(it: com.facebook.imagepipeline.producers.ProducerContext, exception$iv: string, forEachForwardingRequestListener2$forEachListener$1$iv: java.util.Map<string,string>): void;
					public onProducerFinishWithCancellation(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
					public onUltimateProducerReached(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: boolean): void;
					public onRequestFailure(it: com.facebook.imagepipeline.producers.ProducerContext, exception$iv: java.lang.Throwable): void;
					public onRequestCancellation(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(listenersToAdd: androidNative.Array<com.facebook.imagepipeline.listener.RequestListener2>);
					public onProducerFinishWithSuccess(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
					public onUltimateProducerReached(it: com.facebook.imagepipeline.producers.ProducerContext, exception$iv: string, forEachForwardingRequestListener2$forEachListener$1$iv: boolean): void;
					public onProducerFinishWithCancellation(it: com.facebook.imagepipeline.producers.ProducerContext, exception$iv: string, forEachForwardingRequestListener2$forEachListener$1$iv: java.util.Map<string,string>): void;
					public onRequestStart(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onRequestStart(it: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onProducerEvent(it: com.facebook.imagepipeline.producers.ProducerContext, exception$iv: string, forEachForwardingRequestListener2$forEachListener$1$iv: string): void;
					public requiresExtraMap(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): boolean;
					public onProducerFinishWithFailure(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onRequestSuccess(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onProducerStart(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): void;
					public addRequestListener(requestListener: com.facebook.imagepipeline.listener.RequestListener2): void;
					public requiresExtraMap(it: com.facebook.imagepipeline.producers.ProducerContext, element$iv: string): boolean;
				}
				export namespace ForwardingRequestListener2 {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.listener.ForwardingRequestListener2.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace listener {
				export class RequestListener extends com.facebook.imagepipeline.producers.ProducerListener {
					public static class: java.lang.Class<com.facebook.imagepipeline.listener.RequestListener>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.listener.RequestListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRequestStart(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
						onRequestSuccess(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
						onRequestFailure(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
						onRequestCancellation(param0: string): void;
						onProducerStart(param0: string, param1: string): void;
						onProducerEvent(param0: string, param1: string, param2: string): void;
						onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
						onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
						onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
						onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
						requiresExtraMap(param0: string): boolean;
					});
					public constructor();
					public requiresExtraMap(param0: string): boolean;
					public onProducerStart(param0: string, param1: string): void;
					public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onRequestStart(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
					public onRequestSuccess(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
					public onRequestFailure(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
					public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
					public onProducerEvent(param0: string, param1: string, param2: string): void;
					public onRequestCancellation(param0: string): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace listener {
				export class RequestListener2 extends com.facebook.imagepipeline.producers.ProducerListener2 {
					public static class: java.lang.Class<com.facebook.imagepipeline.listener.RequestListener2>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.listener.RequestListener2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRequestStart(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
						onRequestSuccess(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
						onRequestFailure(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: java.lang.Throwable): void;
						onRequestCancellation(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
						onProducerStart(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): void;
						onProducerEvent(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: string): void;
						onProducerFinishWithSuccess(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
						onProducerFinishWithFailure(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
						onProducerFinishWithCancellation(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
						onUltimateProducerReached(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: boolean): void;
						requiresExtraMap(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): boolean;
					});
					public constructor();
					public onProducerFinishWithCancellation(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
					public onUltimateProducerReached(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: boolean): void;
					public onRequestCancellation(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onProducerEvent(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: string): void;
					public onRequestStart(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
					public requiresExtraMap(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): boolean;
					public onRequestFailure(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: java.lang.Throwable): void;
					public onProducerFinishWithSuccess(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithFailure(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onRequestSuccess(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onProducerStart(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace listener {
				export class RequestLoggingListener extends com.facebook.imagepipeline.listener.RequestListener {
					public static class: java.lang.Class<com.facebook.imagepipeline.listener.RequestLoggingListener>;
					public onRequestCancellation(currentTime: string): void;
					public onRequestStart(request: com.facebook.imagepipeline.request.ImageRequest, callerContextObject: any, requestId: string, isPrefetch: boolean): void;
					public onProducerStart(param0: string, param1: string): void;
					public onUltimateProducerReached(startTime: string, currentTime: string, this_: boolean): void;
					public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onProducerEvent(startTime: string, currentTime: string, this_: string): void;
					public onRequestFailure(currentTime: com.facebook.imagepipeline.request.ImageRequest, this_: string, request: java.lang.Throwable, requestId: boolean): void;
					public onRequestFailure(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
					public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
					public onProducerEvent(param0: string, param1: string, param2: string): void;
					public onProducerFinishWithFailure(startTime: string, currentTime: string, this_: java.lang.Throwable, requestId: java.util.Map<string,string>): void;
					public requiresExtraMap(param0: string): boolean;
					public onProducerFinishWithCancellation(startTime: string, currentTime: string, this_: java.util.Map<string,string>): void;
					public requiresExtraMap(id: string): boolean;
					public onProducerStart(startTime: string, this_: string): void;
					public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public constructor();
					public onRequestStart(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
					public onRequestSuccess(currentTime: com.facebook.imagepipeline.request.ImageRequest, this_: string, request: boolean): void;
					public onProducerFinishWithSuccess(startTime: string, currentTime: string, this_: java.util.Map<string,string>): void;
					public onRequestSuccess(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
					public onRequestCancellation(param0: string): void;
				}
				export namespace RequestLoggingListener {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.listener.RequestLoggingListener.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class AshmemMemoryChunk extends com.facebook.imagepipeline.memory.MemoryChunk {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.AshmemMemoryChunk>;
					public getUniqueId(): number;
					public read(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
					public read(offset: number): number;
					public copy(param0: number, param1: com.facebook.imagepipeline.memory.MemoryChunk, param2: number, param3: number): void;
					public getSize(): number;
					public write(memoryOffset: number, byteArray: androidNative.Array<number>, byteArrayOffset: number, count: number): number;
					public read(param0: number): number;
					public constructor(this_: number);
					public constructor();
					public write(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
					public close(): void;
					public getByteBuffer(): java.nio.ByteBuffer;
					public getNativePtr(): number;
					public read(memoryOffset: number, byteArray: androidNative.Array<number>, byteArrayOffset: number, count: number): number;
					public isClosed(): boolean;
					public copy(offset: number, other: com.facebook.imagepipeline.memory.MemoryChunk, otherOffset: number, count: number): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class AshmemMemoryChunkPool extends com.facebook.imagepipeline.memory.MemoryChunkPool {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.AshmemMemoryChunkPool>;
					public alloc(bucketedSize: number): com.facebook.imagepipeline.memory.AshmemMemoryChunk;
					public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, poolParams: com.facebook.imagepipeline.memory.PoolParams, poolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker, ignoreHardCap: boolean);
					public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, poolParams: com.facebook.imagepipeline.memory.PoolParams, ashmemMemoryChunkPoolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker);
					public alloc(param0: number): com.facebook.imagepipeline.memory.MemoryChunk;
					public alloc(param0: number): any;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export abstract class BasePool<V>  extends com.facebook.common.memory.Pool<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BasePool<any>>;
					public getStats(): java.util.Map<string,java.lang.Integer>;
					public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, poolParams: com.facebook.imagepipeline.memory.PoolParams, poolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker);
					public get(bucket: number): any;
					public free(param0: any): void;
					public isReusable(value: any): boolean;
					public getBucketedSize(param0: number): number;
					public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, poolParams: com.facebook.imagepipeline.memory.PoolParams, poolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker, ignoreHardCap: boolean);
					public trim(memoryTrimType: com.facebook.common.memory.MemoryTrimType): void;
					public alloc(param0: number): any;
					public getSizeInBytes(param0: number): number;
					public getValue(bucket: com.facebook.imagepipeline.memory.Bucket<any>): any;
					public release(this_: any): void;
					public getBucketedSizeForValue(param0: any): number;
					public onParamsChanged(): void;
					public initialize(): void;
				}
				export namespace BasePool {
					export class Counter {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BasePool.Counter>;
						public increment(numBytes: number): void;
						public decrement(numBytes: number): void;
						public reset(): void;
					}
					export class InvalidSizeException {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BasePool.InvalidSizeException>;
						public constructor(size: any);
					}
					export class InvalidValueException {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BasePool.InvalidValueException>;
						public constructor(value: any);
					}
					export class PoolSizeViolationException {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BasePool.PoolSizeViolationException>;
						public constructor(hardCap: number, usedBytes: number, freeBytes: number, allocSize: number);
					}
					export class SizeTooLargeException extends com.facebook.imagepipeline.memory.BasePool.InvalidSizeException {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BasePool.SizeTooLargeException>;
						public constructor(size: any);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class BitmapCounter {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BitmapCounter>;
					public increase(bitmap: globalAndroid.graphics.Bitmap): boolean;
					public getMaxCount(): number;
					public getCount(): number;
					public decrease(bitmap: globalAndroid.graphics.Bitmap): void;
					public getMaxSize(): number;
					public constructor(maxCount: number, maxSize: number);
					public getSize(): number;
					public getReleaser(): com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class BitmapCounterConfig {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BitmapCounterConfig>;
					public static DEFAULT_MAX_BITMAP_COUNT: number; // 384
					public constructor();
					public getMaxBitmapCount(): number;
					public constructor(maxBitmapCount: number);
				}
				export namespace BitmapCounterConfig {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BitmapCounterConfig.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class BitmapCounterProvider {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BitmapCounterProvider>;
					public static INSTANCE: com.facebook.imagepipeline.memory.BitmapCounterProvider;
					public static MAX_BITMAP_TOTAL_SIZE: number;
					public static initialize(checkBitmapCounterProvider$initialize$1: com.facebook.imagepipeline.memory.BitmapCounterConfig): void;
					public static get(): com.facebook.imagepipeline.memory.BitmapCounter;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class BitmapPool extends com.facebook.common.memory.Pool<globalAndroid.graphics.Bitmap> {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BitmapPool>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.memory.BitmapPool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class BitmapPoolBackend extends com.facebook.imagepipeline.memory.LruBucketsPoolBackend<globalAndroid.graphics.Bitmap> {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BitmapPoolBackend>;
					public get(this_: number): globalAndroid.graphics.Bitmap;
					public constructor();
					public isReusable(bitmap: globalAndroid.graphics.Bitmap): boolean;
					public getSize(param0: any): number;
					public get(param0: number): any;
					public put(param0: any): void;
					public put(this_: any): void;
					public get(size: number): any;
					public pop(): any;
					public put(bitmap: globalAndroid.graphics.Bitmap): void;
					public getSize(bitmap: globalAndroid.graphics.Bitmap): number;
				}
				export namespace BitmapPoolBackend {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BitmapPoolBackend.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class BitmapPoolType {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BitmapPoolType>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.memory.BitmapPoolType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						"<clinit>"(): void;
					});
					public constructor();
					public static DUMMY_WITH_TRACKING: string; // "dummy_with_tracking"
					public static DUMMY: string; // "dummy"
					public static DEFAULT: string; // "legacy"
					public static EXPERIMENTAL: string; // "experimental"
					public static LEGACY_DEFAULT_PARAMS: string; // "legacy_default_params"
					public static LEGACY: string; // "legacy"
				}
				export namespace BitmapPoolType {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BitmapPoolType.Companion>;
						public static LEGACY: string; // "legacy"
						public static LEGACY_DEFAULT_PARAMS: string; // "legacy_default_params"
						public static DUMMY: string; // "dummy"
						public static DUMMY_WITH_TRACKING: string; // "dummy_with_tracking"
						public static EXPERIMENTAL: string; // "experimental"
						public static DEFAULT: string; // "legacy"
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class Bucket<V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.Bucket<any>>;
					public mItemSize: number;
					public mMaxLength: number;
					public incrementInUseCount(): void;
					public constructor(itemSize: number, maxLength: number, inUseLength: number, fixBucketsReinitialization: boolean);
					public release(value: V): void;
					public isMaxLengthExceeded(): boolean;
					public pop(): V;
					public decrementInUseCount(): void;
					public getInUseCount(): number;
					/** @deprecated */
					public get(): V;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class BucketMap<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BucketMap<any>>;
					public mMap: globalAndroid.util.SparseArray<com.facebook.imagepipeline.memory.BucketMap.LinkedEntry<T>>;
					public removeFromEnd(): T;
					public constructor();
					public acquire(key: number): T;
					public release(key: number, value: T): void;
				}
				export namespace BucketMap {
					export class LinkedEntry<I>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BucketMap.LinkedEntry<any>>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class BucketsBitmapPool extends com.facebook.imagepipeline.memory.BasePool<globalAndroid.graphics.Bitmap> implements com.facebook.imagepipeline.memory.BitmapPool  {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BucketsBitmapPool>;
					public isReusable(value: globalAndroid.graphics.Bitmap): boolean;
					public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, poolParams: com.facebook.imagepipeline.memory.PoolParams, poolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker);
					public free(param0: any): void;
					public free(value: globalAndroid.graphics.Bitmap): void;
					public isReusable(value: any): boolean;
					public getSizeInBytes(bucketedSize: number): number;
					public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, poolParams: com.facebook.imagepipeline.memory.PoolParams, poolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker, ignoreHardCap: boolean);
					public alloc(param0: number): any;
					public alloc(size: number): globalAndroid.graphics.Bitmap;
					public getValue(bucket: com.facebook.imagepipeline.memory.Bucket<any>): any;
					public getBucketedSize(requestSize: number): number;
					public getBucketedSizeForValue(param0: any): number;
					public getValue(bucket: com.facebook.imagepipeline.memory.Bucket<globalAndroid.graphics.Bitmap>): globalAndroid.graphics.Bitmap;
					public getBucketedSizeForValue(value: globalAndroid.graphics.Bitmap): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class BufferMemoryChunk extends com.facebook.imagepipeline.memory.MemoryChunk {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BufferMemoryChunk>;
					public getUniqueId(): number;
					public read(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
					public read(offset: number): number;
					public copy(param0: number, param1: com.facebook.imagepipeline.memory.MemoryChunk, param2: number, param3: number): void;
					public getSize(): number;
					public write(memoryOffset: number, byteArray: androidNative.Array<number>, byteArrayOffset: number, count: number): number;
					public read(param0: number): number;
					public write(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
					public close(): void;
					public getByteBuffer(): java.nio.ByteBuffer;
					public constructor(size: number);
					public getNativePtr(): number;
					public read(memoryOffset: number, byteArray: androidNative.Array<number>, byteArrayOffset: number, count: number): number;
					public isClosed(): boolean;
					public copy(offset: number, other: com.facebook.imagepipeline.memory.MemoryChunk, otherOffset: number, count: number): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class BufferMemoryChunkPool extends com.facebook.imagepipeline.memory.MemoryChunkPool {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BufferMemoryChunkPool>;
					public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, poolParams: com.facebook.imagepipeline.memory.PoolParams, bufferMemoryChunkPoolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker);
					public alloc(bucketedSize: number): com.facebook.imagepipeline.memory.BufferMemoryChunk;
					public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, poolParams: com.facebook.imagepipeline.memory.PoolParams, poolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker, ignoreHardCap: boolean);
					public alloc(param0: number): com.facebook.imagepipeline.memory.MemoryChunk;
					public alloc(param0: number): any;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class DefaultBitmapPoolParams {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.DefaultBitmapPoolParams>;
					public static INSTANCE: com.facebook.imagepipeline.memory.DefaultBitmapPoolParams;
					public static get(): com.facebook.imagepipeline.memory.PoolParams;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class DefaultByteArrayPoolParams {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.DefaultByteArrayPoolParams>;
					public static INSTANCE: com.facebook.imagepipeline.memory.DefaultByteArrayPoolParams;
					public static get(): com.facebook.imagepipeline.memory.PoolParams;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class DefaultFlexByteArrayPoolParams {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.DefaultFlexByteArrayPoolParams>;
					public static INSTANCE: com.facebook.imagepipeline.memory.DefaultFlexByteArrayPoolParams;
					public static DEFAULT_MAX_BYTE_ARRAY_SIZE: number; // 4194304
					public static get(): com.facebook.imagepipeline.memory.PoolParams;
					public getDEFAULT_MAX_NUM_THREADS(): number;
					public static generateBuckets(buckets: number, i: number, min: number): globalAndroid.util.SparseIntArray;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class DefaultNativeMemoryChunkPoolParams {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.DefaultNativeMemoryChunkPoolParams>;
					public static INSTANCE: com.facebook.imagepipeline.memory.DefaultNativeMemoryChunkPoolParams;
					public static get(): com.facebook.imagepipeline.memory.PoolParams;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class DummyBitmapPool extends com.facebook.imagepipeline.memory.BitmapPool {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.DummyBitmapPool>;
					public trim(trimType: com.facebook.common.memory.MemoryTrimType): void;
					public release(value: globalAndroid.graphics.Bitmap): void;
					public constructor();
					public get(size: number): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class DummyTrackingInUseBitmapPool extends com.facebook.imagepipeline.memory.BitmapPool {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.DummyTrackingInUseBitmapPool>;
					public get(this_: number): globalAndroid.graphics.Bitmap;
					public trim(trimType: com.facebook.common.memory.MemoryTrimType): void;
					public release(value: globalAndroid.graphics.Bitmap): void;
					public constructor();
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class FlexByteArrayPool {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.FlexByteArrayPool>;
					public release(value: androidNative.Array<number>): void;
					public getStats(): java.util.Map<string,java.lang.Integer>;
					public getMinBufferSize(): number;
					public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, params: com.facebook.imagepipeline.memory.PoolParams);
					public get(size: number): com.facebook.common.references.CloseableReference<androidNative.Array<number>>;
				}
				export namespace FlexByteArrayPool {
					export class SoftRefByteArrayPool extends com.facebook.imagepipeline.memory.GenericByteArrayPool {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.FlexByteArrayPool.SoftRefByteArrayPool>;
						public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, poolParams: com.facebook.imagepipeline.memory.PoolParams, poolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker, ignoreHardCap: boolean);
						public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, poolParams: com.facebook.imagepipeline.memory.PoolParams, poolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class GenericByteArrayPool extends com.facebook.imagepipeline.memory.BasePool<androidNative.Array<number>> implements com.facebook.common.memory.ByteArrayPool  {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.GenericByteArrayPool>;
					public alloc(bucketedSize: number): androidNative.Array<number>;
					public free(value: androidNative.Array<number>): void;
					public getMinBufferSize(): number;
					public getBucketedSizeForValue(param0: any): number;
					public free(param0: any): void;
					public getBucketedSize(this_: number): number;
					public getBucketedSizeForValue(value: androidNative.Array<number>): number;
					public constructor(bucketSizes: com.facebook.common.memory.MemoryTrimmableRegistry, this_: com.facebook.imagepipeline.memory.PoolParams, memoryTrimmableRegistry: com.facebook.imagepipeline.memory.PoolStatsTracker);
					public getSizeInBytes(bucketedSize: number): number;
					public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, poolParams: com.facebook.imagepipeline.memory.PoolParams, poolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker, ignoreHardCap: boolean);
					public alloc(param0: number): any;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class LruBitmapPool extends com.facebook.imagepipeline.memory.BitmapPool {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.LruBitmapPool>;
					public mStrategy: com.facebook.imagepipeline.memory.PoolBackend<globalAndroid.graphics.Bitmap>;
					public get(this_: number): globalAndroid.graphics.Bitmap;
					public trim(trimType: com.facebook.common.memory.MemoryTrimType): void;
					public release(value: globalAndroid.graphics.Bitmap): void;
					public constructor(maxPoolSize: number, maxBitmapSize: number, poolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker, memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export abstract class LruBucketsPoolBackend<T>  extends com.facebook.imagepipeline.memory.PoolBackend<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.LruBucketsPoolBackend<any>>;
					public constructor();
					public getSize(param0: any): number;
					public get(param0: number): any;
					public put(param0: any): void;
					public get(size: number): any;
					public put(this_: any): void;
					public pop(): any;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class MemoryChunk {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.MemoryChunk>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.memory.MemoryChunk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						close(): void;
						isClosed(): boolean;
						getSize(): number;
						write(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
						read(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
						read(param0: number): number;
						copy(param0: number, param1: com.facebook.imagepipeline.memory.MemoryChunk, param2: number, param3: number): void;
						getNativePtr(): number;
						getByteBuffer(): java.nio.ByteBuffer;
						getUniqueId(): number;
					});
					public constructor();
					public read(param0: number): number;
					public getUniqueId(): number;
					public write(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
					public read(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
					public close(): void;
					public getByteBuffer(): java.nio.ByteBuffer;
					public getNativePtr(): number;
					public copy(param0: number, param1: com.facebook.imagepipeline.memory.MemoryChunk, param2: number, param3: number): void;
					public getSize(): number;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export abstract class MemoryChunkPool extends com.facebook.imagepipeline.memory.BasePool<com.facebook.imagepipeline.memory.MemoryChunk> {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.MemoryChunkPool>;
					public getBucketedSizeForValue(value: com.facebook.imagepipeline.memory.MemoryChunk): number;
					public getBucketedSizeForValue(param0: any): number;
					public isReusable(value: com.facebook.imagepipeline.memory.MemoryChunk): boolean;
					public free(param0: any): void;
					public getBucketedSize(this_: number): number;
					public isReusable(value: any): boolean;
					public getSizeInBytes(bucketedSize: number): number;
					public free(value: com.facebook.imagepipeline.memory.MemoryChunk): void;
					public alloc(param0: number): any;
					public alloc(param0: number): com.facebook.imagepipeline.memory.MemoryChunk;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class MemoryChunkUtil {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.MemoryChunkUtil>;
					public static INSTANCE: com.facebook.imagepipeline.memory.MemoryChunkUtil;
					public static adjustByteCount(available: number, offset: number, count: number): number;
					public static checkBounds(offset: number, otherLength: number, otherOffset: number, count: number, memorySize: number): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class MemoryPooledByteBuffer {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.MemoryPooledByteBuffer>;
					public constructor(bufRef: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.memory.MemoryChunk>, size: number);
					public read(offset: number, buffer: androidNative.Array<number>, bufferOffset: number, length: number): number;
					public read(offset: number): number;
					public getByteBuffer(): java.nio.ByteBuffer;
					public close(): void;
					public size(): number;
					public getNativePtr(): number;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class MemoryPooledByteBufferFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.MemoryPooledByteBufferFactory>;
					public newOutputStream(initialCapacity: number): com.facebook.imagepipeline.memory.MemoryPooledByteBufferOutputStream;
					public constructor(pool: com.facebook.imagepipeline.memory.MemoryChunkPool, pooledByteStreams: com.facebook.common.memory.PooledByteStreams);
					public newOutputStream(): com.facebook.imagepipeline.memory.MemoryPooledByteBufferOutputStream;
					public newByteBuffer(this_: number): com.facebook.imagepipeline.memory.MemoryPooledByteBuffer;
					public newByteBuffer(outputStream: androidNative.Array<number>): com.facebook.imagepipeline.memory.MemoryPooledByteBuffer;
					public newByteBuffer(this_: java.io.InputStream): com.facebook.imagepipeline.memory.MemoryPooledByteBuffer;
					public newByteBuffer(this_: java.io.InputStream, inputStream: number): com.facebook.imagepipeline.memory.MemoryPooledByteBuffer;
					public newByteBuf(inputStream: java.io.InputStream, outputStream: com.facebook.imagepipeline.memory.MemoryPooledByteBufferOutputStream): com.facebook.imagepipeline.memory.MemoryPooledByteBuffer;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class MemoryPooledByteBufferOutputStream {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.MemoryPooledByteBufferOutputStream>;
					public realloc(this_: number): void;
					public write(buffer: androidNative.Array<number>, offset: number, count: number): void;
					public close(): void;
					public write(this_: number): void;
					public constructor(pool: com.facebook.imagepipeline.memory.MemoryChunkPool, initialCapacity: number);
					public size(): number;
					public toByteBuffer(): com.facebook.imagepipeline.memory.MemoryPooledByteBuffer;
					public constructor(pool: com.facebook.imagepipeline.memory.MemoryChunkPool);
				}
				export namespace MemoryPooledByteBufferOutputStream {
					export class InvalidStreamException {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.MemoryPooledByteBufferOutputStream.InvalidStreamException>;
						public constructor();
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class NativeMemoryChunk extends com.facebook.imagepipeline.memory.MemoryChunk {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.NativeMemoryChunk>;
					public getUniqueId(): number;
					public finalize(): void;
					public read(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
					public read(offset: number): number;
					public copy(param0: number, param1: com.facebook.imagepipeline.memory.MemoryChunk, param2: number, param3: number): void;
					public getSize(): number;
					public write(memoryOffset: number, byteArray: androidNative.Array<number>, byteArrayOffset: number, count: number): number;
					public read(param0: number): number;
					public constructor();
					public write(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
					public close(): void;
					public getByteBuffer(): java.nio.ByteBuffer;
					public constructor(size: number);
					public getNativePtr(): number;
					public read(memoryOffset: number, byteArray: androidNative.Array<number>, byteArrayOffset: number, count: number): number;
					public isClosed(): boolean;
					public copy(offset: number, other: com.facebook.imagepipeline.memory.MemoryChunk, otherOffset: number, count: number): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class NativeMemoryChunkPool extends com.facebook.imagepipeline.memory.MemoryChunkPool {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.NativeMemoryChunkPool>;
					public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, poolParams: com.facebook.imagepipeline.memory.PoolParams, nativeMemoryChunkPoolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker);
					public alloc(bucketedSize: number): com.facebook.imagepipeline.memory.NativeMemoryChunk;
					public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, poolParams: com.facebook.imagepipeline.memory.PoolParams, poolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker, ignoreHardCap: boolean);
					public alloc(param0: number): com.facebook.imagepipeline.memory.MemoryChunk;
					public alloc(param0: number): any;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class NoOpPoolStatsTracker extends com.facebook.imagepipeline.memory.PoolStatsTracker {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.NoOpPoolStatsTracker>;
					public onFree(sizeInBytes: number): void;
					public onHardCapReached(): void;
					public onValueReuse(param0: number): void;
					public static getInstance(): com.facebook.imagepipeline.memory.NoOpPoolStatsTracker;
					public onValueReuse(bucketedSize: number): void;
					public onAlloc(size: number): void;
					public onSoftCapReached(): void;
					public onValueRelease(sizeInBytes: number): void;
					public onValueRelease(param0: number): void;
					public onAlloc(param0: number): void;
					public onFree(param0: number): void;
					public setBasePool(basePool: com.facebook.imagepipeline.memory.BasePool<any>): void;
					public setBasePool(param0: com.facebook.imagepipeline.memory.BasePool<any>): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class OOMSoftReferenceBucket<V>  extends com.facebook.imagepipeline.memory.Bucket<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.OOMSoftReferenceBucket<any>>;
					public constructor(itemSize: number, maxLength: number, inUseLength: number, fixBucketsReinitialization: boolean);
					public constructor(itemSize: number, maxLength: number, inUseLength: number);
					public pop(): any;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class PoolBackend<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.PoolBackend<any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.memory.PoolBackend<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: number): T;
						put(param0: T): void;
						getSize(param0: T): number;
						pop(): T;
					});
					public constructor();
					public get(param0: number): T;
					public put(param0: T): void;
					public pop(): T;
					public getSize(param0: T): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class PoolConfig {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.PoolConfig>;
					public static BITMAP_POOL_MAX_BITMAP_SIZE_DEFAULT: number; // 4194304
					public getMemoryChunkPoolParams(): com.facebook.imagepipeline.memory.PoolParams;
					public getBitmapPoolMaxPoolSize(): number;
					public isRegisterLruBitmapPoolAsMemoryTrimmable(): boolean;
					public isIgnoreBitmapPoolHardCap(): boolean;
					public getSmallByteArrayPoolStatsTracker(): com.facebook.imagepipeline.memory.PoolStatsTracker;
					public getBitmapPoolStatsTracker(): com.facebook.imagepipeline.memory.PoolStatsTracker;
					public getBitmapPoolParams(): com.facebook.imagepipeline.memory.PoolParams;
					public getBitmapPoolType(): string;
					public getSmallByteArrayPoolParams(): com.facebook.imagepipeline.memory.PoolParams;
					public getMemoryTrimmableRegistry(): com.facebook.common.memory.MemoryTrimmableRegistry;
					public static newBuilder(): com.facebook.imagepipeline.memory.PoolConfig.Builder;
					public getMemoryChunkPoolStatsTracker(): com.facebook.imagepipeline.memory.PoolStatsTracker;
					public getFlexByteArrayPoolParams(): com.facebook.imagepipeline.memory.PoolParams;
					public getBitmapPoolMaxBitmapSize(): number;
				}
				export namespace PoolConfig {
					export class Builder {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.PoolConfig.Builder>;
						public mIgnoreBitmapPoolHardCap: boolean;
						public setBitmapPoolMaxBitmapSize(bitmapPoolMaxBitmapSize: number): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setBitmapPoolStatsTracker(bitmapPoolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setNativeMemoryChunkPoolParams(memoryChunkPoolParams: com.facebook.imagepipeline.memory.PoolParams): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setBitmapPoolType(bitmapPoolType: string): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setRegisterLruBitmapPoolAsMemoryTrimmable(registerLruBitmapPoolAsMemoryTrimmable: boolean): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setMemoryTrimmableRegistry(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public build(): com.facebook.imagepipeline.memory.PoolConfig;
						public setBitmapPoolMaxPoolSize(bitmapPoolMaxPoolSize: number): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setNativeMemoryChunkPoolStatsTracker(memoryChunkPoolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setSmallByteArrayPoolParams(commonByteArrayPoolParams: com.facebook.imagepipeline.memory.PoolParams): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setIgnoreBitmapPoolHardCap(ignoreBitmapPoolHardCap: boolean): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setBitmapPoolParams(bitmapPoolParams: com.facebook.imagepipeline.memory.PoolParams): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setFlexByteArrayPoolParams(flexByteArrayPoolParams: com.facebook.imagepipeline.memory.PoolParams): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setSmallByteArrayPoolStatsTracker(smallByteArrayPoolStatsTracker: com.facebook.imagepipeline.memory.PoolStatsTracker): com.facebook.imagepipeline.memory.PoolConfig.Builder;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class PoolFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.PoolFactory>;
					public constructor(config: com.facebook.imagepipeline.memory.PoolConfig);
					public getFlexByteArrayPool(): com.facebook.imagepipeline.memory.FlexByteArrayPool;
					public getSmallByteArrayPool(): com.facebook.common.memory.ByteArrayPool;
					public getNativeMemoryChunkPool(): com.facebook.imagepipeline.memory.MemoryChunkPool;
					public getSharedByteArray(): com.facebook.imagepipeline.memory.SharedByteArray;
					public getPooledByteBufferFactory(): com.facebook.common.memory.PooledByteBufferFactory;
					public getBitmapPool(): com.facebook.imagepipeline.memory.BitmapPool;
					public getBufferMemoryChunkPool(): com.facebook.imagepipeline.memory.MemoryChunkPool;
					public getPooledByteStreams(): com.facebook.common.memory.PooledByteStreams;
					public getPooledByteBufferFactory(this_: number): com.facebook.common.memory.PooledByteBufferFactory;
					public getFlexByteArrayPoolMaxNumThreads(): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class PoolParams {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.PoolParams>;
					public static IGNORE_THREADS: number; // -1
					public maxSizeHardCap: number;
					public maxSizeSoftCap: number;
					public bucketSizes: globalAndroid.util.SparseIntArray;
					public minBucketSize: number;
					public maxBucketSize: number;
					public fixBucketsReinitialization: boolean;
					public maxNumThreads: number;
					public constructor(maxSizeSoftCap: number, maxSizeHardCap: number, bucketSizes: globalAndroid.util.SparseIntArray);
					public constructor(maxSizeSoftCap: number, maxSizeHardCap: number, bucketSizes: globalAndroid.util.SparseIntArray, minBucketSize: number, maxBucketSize: number, maxNumThreads: number);
					public constructor(maxSize: number, bucketSizes: globalAndroid.util.SparseIntArray);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class PoolStatsTracker {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.PoolStatsTracker>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.memory.PoolStatsTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setBasePool(param0: com.facebook.imagepipeline.memory.BasePool<any>): void;
						onValueReuse(param0: number): void;
						onSoftCapReached(): void;
						onHardCapReached(): void;
						onAlloc(param0: number): void;
						onFree(param0: number): void;
						onValueRelease(param0: number): void;
						"<clinit>"(): void;
					});
					public constructor();
					public static FREE_COUNT: string; // "free_count"
					public static USED_BYTES: string; // "used_bytes"
					public static FREE_BYTES: string; // "free_bytes"
					public static HARD_CAP: string; // "hard_cap"
					public static USED_COUNT: string; // "used_count"
					public static SOFT_CAP: string; // "soft_cap"
					public static BUCKETS_USED_PREFIX: string; // "buckets_used_"
					public onValueReuse(param0: number): void;
					public onHardCapReached(): void;
					public onSoftCapReached(): void;
					public onValueRelease(param0: number): void;
					public onAlloc(param0: number): void;
					public onFree(param0: number): void;
					public setBasePool(param0: com.facebook.imagepipeline.memory.BasePool<any>): void;
				}
				export namespace PoolStatsTracker {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.PoolStatsTracker.Companion>;
						public static BUCKETS_USED_PREFIX: string; // "buckets_used_"
						public static USED_COUNT: string; // "used_count"
						public static USED_BYTES: string; // "used_bytes"
						public static FREE_COUNT: string; // "free_count"
						public static FREE_BYTES: string; // "free_bytes"
						public static SOFT_CAP: string; // "soft_cap"
						public static HARD_CAP: string; // "hard_cap"
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace memory {
				export class SharedByteArray {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.SharedByteArray>;
					public trim(trimType: com.facebook.common.memory.MemoryTrimType): void;
					public get(t: number): com.facebook.common.references.CloseableReference<androidNative.Array<number>>;
					public constructor(memoryTrimmableRegistry: com.facebook.common.memory.MemoryTrimmableRegistry, params: com.facebook.imagepipeline.memory.PoolParams);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace multiuri {
				export class MultiUri {
					public static class: java.lang.Class<com.facebook.imagepipeline.multiuri.MultiUri>;
					public static create(): com.facebook.imagepipeline.multiuri.MultiUri.Builder;
					public getLowResImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public getHighResImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public getMultiImageRequests(): androidNative.Array<com.facebook.imagepipeline.request.ImageRequest>;
				}
				export namespace MultiUri {
					export class Builder {
						public static class: java.lang.Class<com.facebook.imagepipeline.multiuri.MultiUri.Builder>;
						public setHighResImageRequest(highResImageRequest: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.multiuri.MultiUri.Builder;
						public build(): com.facebook.imagepipeline.multiuri.MultiUri;
						public setImageRequests(multiImageRequests: androidNative.Array<com.facebook.imagepipeline.request.ImageRequest>): com.facebook.imagepipeline.multiuri.MultiUri.Builder;
						public setLowResImageRequest(lowResImageRequest: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.multiuri.MultiUri.Builder;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace nativecode {
				export class Bitmaps {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.Bitmaps>;
					public constructor();
					public static copyBitmap(dest: globalAndroid.graphics.Bitmap, src: globalAndroid.graphics.Bitmap): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace nativecode {
				export abstract class DalvikPurgeableDecoder extends com.facebook.imagepipeline.platform.PlatformDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.DalvikPurgeableDecoder>;
					public static EOI: androidNative.Array<number>;
					public decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImage(encodedImage: com.facebook.imagepipeline.image.EncodedImage, bitmapConfig: globalAndroid.graphics.Bitmap.Config, regionToDecode: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public static endsWithEOI(bytesRef: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>, length: number): boolean;
					public decodeJPEGFromEncodedImage(encodedImage: com.facebook.imagepipeline.image.EncodedImage, bitmapConfig: globalAndroid.graphics.Bitmap.Config, regionToDecode: globalAndroid.graphics.Rect, length: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImageWithColorSpace(this_: com.facebook.imagepipeline.image.EncodedImage, encodedImage: globalAndroid.graphics.Bitmap.Config, bitmapConfig: globalAndroid.graphics.Rect, regionToDecode: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeJPEGByteArrayAsPurgeable(param0: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>, param1: number, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public decodeJPEGFromEncodedImageWithColorSpace(this_: com.facebook.imagepipeline.image.EncodedImage, encodedImage: globalAndroid.graphics.Bitmap.Config, bitmapConfig: globalAndroid.graphics.Rect, regionToDecode: number, length: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public pinBitmap(bitmapSize: globalAndroid.graphics.Bitmap): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public static getBitmapFactoryOptions(sampleSize: number, bitmapConfig: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.BitmapFactory.Options;
					public decodeJPEGFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeByteArrayAsPurgeable(param0: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>, param1: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
				}
				export namespace DalvikPurgeableDecoder {
					export class OreoUtils {
						public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.DalvikPurgeableDecoder.OreoUtils>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace nativecode {
				export class ImagePipelineNativeLoader {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.ImagePipelineNativeLoader>;
					public static DSO_NAME: string; // "imagepipeline"
					public static DEPENDENCIES: java.util.List<string>;
					public static load(): void;
					public constructor();
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace nativecode {
				export class NativeBlurFilter {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.NativeBlurFilter>;
					public static iterativeBoxBlur(bitmap: globalAndroid.graphics.Bitmap, iterations: number, blurRadius: number): void;
					public constructor();
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace nativecode {
				export class NativeFiltersLoader {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.NativeFiltersLoader>;
					public static load(): void;
					public constructor();
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace nativecode {
				export class NativeImageTranscoderFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.NativeImageTranscoderFactory>;
					public static INSTANCE: com.facebook.imagepipeline.nativecode.NativeImageTranscoderFactory;
					public static getNativeImageTranscoderFactory(e: number, e: boolean, e: boolean): com.facebook.imagepipeline.transcoder.ImageTranscoderFactory;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace nativecode {
				export class NativeJpegTranscoder extends com.facebook.imagepipeline.transcoder.ImageTranscoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.NativeJpegTranscoder>;
					public static TAG: string; // "NativeJpegTranscoder"
					public constructor(resizingEnabled: boolean, maxBitmapSize: number, useDownsamplingRatio: boolean, ensureTranscoderLibraryLoaded: boolean);
					public canTranscode(imageFormat: com.facebook.imageformat.ImageFormat): boolean;
					public static transcodeJpegWithExifOrientation(inputStream: java.io.InputStream, outputStream: java.io.OutputStream, exifOrientation: number, scaleNumerator: number, quality: number): void;
					public transcode(param0: com.facebook.imagepipeline.image.EncodedImage, param1: java.io.OutputStream, param2: com.facebook.imagepipeline.common.RotationOptions, param3: com.facebook.imagepipeline.common.ResizeOptions, param4: com.facebook.imageformat.ImageFormat, param5: java.lang.Integer, param6: globalAndroid.graphics.ColorSpace): com.facebook.imagepipeline.transcoder.ImageTranscodeResult;
					public canResize(param0: com.facebook.imagepipeline.image.EncodedImage, param1: com.facebook.imagepipeline.common.RotationOptions, param2: com.facebook.imagepipeline.common.ResizeOptions): boolean;
					public static transcodeJpeg(inputStream: java.io.InputStream, outputStream: java.io.OutputStream, rotationAngle: number, scaleNumerator: number, quality: number): void;
					public getIdentifier(): string;
					public transcode(exifOrientation: com.facebook.imagepipeline.image.EncodedImage, rotationAngle: java.io.OutputStream, softwareNumerator: com.facebook.imagepipeline.common.RotationOptions, downsampleNumerator: com.facebook.imagepipeline.common.ResizeOptions, numerator: com.facebook.imageformat.ImageFormat, this_: java.lang.Integer, encodedImage: globalAndroid.graphics.ColorSpace): com.facebook.imagepipeline.transcoder.ImageTranscodeResult;
					public canTranscode(param0: com.facebook.imageformat.ImageFormat): boolean;
					public canResize(encodedImage: com.facebook.imagepipeline.image.EncodedImage, rotationOptions: com.facebook.imagepipeline.common.RotationOptions, resizeOptions: com.facebook.imagepipeline.common.ResizeOptions): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace nativecode {
				export class NativeJpegTranscoderFactory extends com.facebook.imagepipeline.transcoder.ImageTranscoderFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.NativeJpegTranscoderFactory>;
					public createImageTranscoder(param0: com.facebook.imageformat.ImageFormat, param1: boolean): com.facebook.imagepipeline.transcoder.ImageTranscoder;
					public createImageTranscoder(imageFormat: com.facebook.imageformat.ImageFormat, isResizingEnabled: boolean): com.facebook.imagepipeline.transcoder.ImageTranscoder;
					public constructor(maxBitmapSize: number, useDownSamplingRatio: boolean, ensureTranscoderLibraryLoaded: boolean);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace nativecode {
				export class NativeJpegTranscoderSoLoader {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.NativeJpegTranscoderSoLoader>;
					public constructor();
					public static ensure(): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace nativecode {
				export class NativeRoundingFilter {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.NativeRoundingFilter>;
					public constructor();
					public static toCircle(bitmap: globalAndroid.graphics.Bitmap, antiAliased: boolean): void;
					public static toCircleFast(bitmap: globalAndroid.graphics.Bitmap): void;
					public static toCircleFast(bitmap: globalAndroid.graphics.Bitmap, antiAliased: boolean): void;
					public static toCircleWithBorder(bitmap: globalAndroid.graphics.Bitmap, colorARGB: number, borderWidthPx: number, antiAliased: boolean): void;
					public static addRoundedCorners(bitmap: globalAndroid.graphics.Bitmap, radiusTopLeft: number, radiusTopRight: number, radiusBottomRight: number, radiusBottomLeft: number): void;
					public static toCircle(bitmap: globalAndroid.graphics.Bitmap): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace platform {
				export class ArtDecoder extends com.facebook.imagepipeline.platform.DefaultDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.ArtDecoder>;
					public getBitmapSize(this_: number, width: number, height: globalAndroid.graphics.BitmapFactory.Options): number;
					public decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor(bitmapPool: com.facebook.imagepipeline.memory.BitmapPool, decodeBuffers: androidx.core.util.Pools.Pool<java.nio.ByteBuffer>, platformDecoderOptions: com.facebook.imagepipeline.platform.PlatformDecoderOptions);
					public decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeJPEGFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace platform {
				export abstract class DefaultDecoder extends com.facebook.imagepipeline.platform.PlatformDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.DefaultDecoder>;
					public decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeJPEGFromEncodedImageWithColorSpace(e: com.facebook.imagepipeline.image.EncodedImage, re: globalAndroid.graphics.Bitmap.Config, e: globalAndroid.graphics.Rect, this_: number, encodedImage: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeStaticImageFromStream(inputStream: java.io.InputStream, options: globalAndroid.graphics.BitmapFactory.Options, regionToDecode: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImage(encodedImage: com.facebook.imagepipeline.image.EncodedImage, bitmapConfig: globalAndroid.graphics.Bitmap.Config, regionToDecode: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImageWithColorSpace(re: com.facebook.imagepipeline.image.EncodedImage, this_: globalAndroid.graphics.Bitmap.Config, encodedImage: globalAndroid.graphics.Rect, bitmapConfig: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor(bitmapPool: com.facebook.imagepipeline.memory.BitmapPool, decodeBuffers: androidx.core.util.Pools.Pool<java.nio.ByteBuffer>, platformDecoderOptions: com.facebook.imagepipeline.platform.PlatformDecoderOptions);
					public decodeJPEGFromEncodedImage(encodedImage: com.facebook.imagepipeline.image.EncodedImage, bitmapConfig: globalAndroid.graphics.Bitmap.Config, regionToDecode: globalAndroid.graphics.Rect, length: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeJPEGFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public getBitmapSize(param0: number, param1: number, param2: globalAndroid.graphics.BitmapFactory.Options): number;
				}
				export namespace DefaultDecoder {
					export class NoOpResourceReleaser extends com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap> {
						public static class: java.lang.Class<com.facebook.imagepipeline.platform.DefaultDecoder.NoOpResourceReleaser>;
						public release(value: globalAndroid.graphics.Bitmap): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace platform {
				export class GingerbreadPurgeableDecoder extends com.facebook.imagepipeline.nativecode.DalvikPurgeableDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.GingerbreadPurgeableDecoder>;
					public decodeByteArrayAsPurgeable(bytesRef: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>, options: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public decodeJPEGByteArrayAsPurgeable(bytesRef: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>, length: number, options: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public decodeFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeJPEGFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace platform {
				export class KitKatPurgeableDecoder extends com.facebook.imagepipeline.nativecode.DalvikPurgeableDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.KitKatPurgeableDecoder>;
					public decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeByteArrayAsPurgeable(bitmap: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>, this_: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public constructor();
					public decodeFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor(flexByteArrayPool: com.facebook.imagepipeline.memory.FlexByteArrayPool);
					public decodeJPEGFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeJPEGByteArrayAsPurgeable(bitmap: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>, this_: number, bytesRef: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace platform {
				export class OreoDecoder extends com.facebook.imagepipeline.platform.DefaultDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.OreoDecoder>;
					public getBitmapSize(width: number, height: number, options: globalAndroid.graphics.BitmapFactory.Options): number;
					public decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor(bitmapPool: com.facebook.imagepipeline.memory.BitmapPool, decodeBuffers: androidx.core.util.Pools.Pool<java.nio.ByteBuffer>, platformDecoderOptions: com.facebook.imagepipeline.platform.PlatformDecoderOptions);
					public getPlatformDecoderOptions(): com.facebook.imagepipeline.platform.PlatformDecoderOptions;
					public decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeJPEGFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace platform {
				export class PlatformDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.PlatformDecoder>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.platform.PlatformDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						decodeFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						decodeJPEGFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					});
					public constructor();
					public decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeJPEGFromEncodedImageWithColorSpace(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace platform {
				export class PlatformDecoderFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.PlatformDecoderFactory>;
					public static INSTANCE: com.facebook.imagepipeline.platform.PlatformDecoderFactory;
					public static buildPlatformDecoder(clazz: com.facebook.imagepipeline.memory.PoolFactory, clazz: boolean, e: boolean, e: com.facebook.imagepipeline.platform.PlatformDecoderOptions): com.facebook.imagepipeline.platform.PlatformDecoder;
					public static createPool(i: com.facebook.imagepipeline.memory.PoolFactory, maxNumThreads: boolean): androidx.core.util.Pools.Pool<java.nio.ByteBuffer>;
					public static buildPlatformDecoder(poolFactory: com.facebook.imagepipeline.memory.PoolFactory, gingerbreadDecoderEnabled: boolean, platformDecoderOptions: com.facebook.imagepipeline.platform.PlatformDecoderOptions): com.facebook.imagepipeline.platform.PlatformDecoder;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace platform {
				export class PlatformDecoderOptions {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.PlatformDecoderOptions>;
					public getAvoidPoolRelease(): boolean;
					public constructor(avoidPoolGet: boolean, avoidPoolRelease: boolean);
					public getAvoidPoolGet(): boolean;
					public constructor();
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace platform {
				export class PreverificationHelper {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.PreverificationHelper>;
					public constructor();
					public shouldUseHardwareBitmapConfig(config: globalAndroid.graphics.Bitmap.Config): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace postprocessors {
				export class BlurPostProcessor extends com.facebook.imagepipeline.request.BasePostprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.postprocessors.BlurPostProcessor>;
					public process(destBitmap: globalAndroid.graphics.Bitmap, sourceBitmap: globalAndroid.graphics.Bitmap): void;
					public process(sourceBitmap: globalAndroid.graphics.Bitmap, bitmapFactory: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public getName(): string;
					public constructor(blurRadius: number, context: globalAndroid.content.Context, iterations: number);
					public process(bitmap: globalAndroid.graphics.Bitmap): void;
					public getContext(): globalAndroid.content.Context;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
					public getBlurRadius(): number;
					public getIterations(): number;
					public constructor(blurRadius: number, context: globalAndroid.content.Context);
				}
				export namespace BlurPostProcessor {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.postprocessors.BlurPostProcessor.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace postprocessors {
				export class IterativeBoxBlurPostProcessor extends com.facebook.imagepipeline.request.BasePostprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.postprocessors.IterativeBoxBlurPostProcessor>;
					public process(destBitmap: globalAndroid.graphics.Bitmap, sourceBitmap: globalAndroid.graphics.Bitmap): void;
					public constructor(blurRadius: number);
					public process(sourceBitmap: globalAndroid.graphics.Bitmap, bitmapFactory: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public getName(): string;
					public process(bitmap: globalAndroid.graphics.Bitmap): void;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
					public constructor(iterations: number, blurRadius: number);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace postprocessors {
				export class RoundAsCirclePostprocessor extends com.facebook.imagepipeline.request.BasePostprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.postprocessors.RoundAsCirclePostprocessor>;
					public process(destBitmap: globalAndroid.graphics.Bitmap, sourceBitmap: globalAndroid.graphics.Bitmap): void;
					public constructor(enableAntiAliasing: boolean);
					public process(sourceBitmap: globalAndroid.graphics.Bitmap, bitmapFactory: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public getName(): string;
					public process(bitmap: globalAndroid.graphics.Bitmap): void;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace postprocessors {
				export class RoundPostprocessor extends com.facebook.imagepipeline.request.BasePostprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.postprocessors.RoundPostprocessor>;
					public process(destBitmap: globalAndroid.graphics.Bitmap, sourceBitmap: globalAndroid.graphics.Bitmap): void;
					public constructor(enableAntiAliasing: boolean);
					public process(sourceBitmap: globalAndroid.graphics.Bitmap, bitmapFactory: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public getName(): string;
					public process(bitmap: globalAndroid.graphics.Bitmap): void;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace postprocessors {
				export class RoundedCornersPostprocessor extends com.facebook.imagepipeline.request.BasePostprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.postprocessors.RoundedCornersPostprocessor>;
					public process(destBitmap: globalAndroid.graphics.Bitmap, sourceBitmap: globalAndroid.graphics.Bitmap): void;
					public process(sourceBitmap: globalAndroid.graphics.Bitmap, bitmapFactory: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public getName(): string;
					public process(bitmap: globalAndroid.graphics.Bitmap): void;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace postprocessors {
				export class TintPostProcessor extends com.facebook.imagepipeline.request.BasePostprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.postprocessors.TintPostProcessor>;
					public process(destBitmap: globalAndroid.graphics.Bitmap, sourceBitmap: globalAndroid.graphics.Bitmap): void;
					public process(sourceBitmap: globalAndroid.graphics.Bitmap, bitmapFactory: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public getName(): string;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
					public constructor(color: number, alphaPercent: java.lang.Float, porterDuffMode: globalAndroid.graphics.PorterDuff.Mode);
					public process(sourceBitmap: globalAndroid.graphics.Bitmap): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class AddImageTransformMetaDataProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.AddImageTransformMetaDataProducer>;
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, context: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export namespace AddImageTransformMetaDataProducer {
					export class AddImageTransformMetaDataConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.AddImageTransformMetaDataProducer.AddImageTransformMetaDataConsumer>;
						public onNewResultImpl(newResult: com.facebook.imagepipeline.image.EncodedImage, status: number): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export abstract class BaseConsumer<T>  extends com.facebook.imagepipeline.producers.Consumer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BaseConsumer<any>>;
					public static statusHasAnyFlag(status: number, flag: number): boolean;
					public onNewResult(this_: any, newResult: number): void;
					public onProgressUpdateImpl(progress: number): void;
					public onNewResult(param0: any, param1: number): void;
					public static statusHasFlag(status: number, flag: number): boolean;
					public onFailure(param0: java.lang.Throwable): void;
					public static isLast(status: number): boolean;
					public onUnhandledException(e: java.lang.Exception): void;
					public onFailureImpl(param0: java.lang.Throwable): void;
					public static simpleStatusForIsLast(isLast: boolean): number;
					public static isNotLast(status: number): boolean;
					public onProgressUpdate(this_: number): void;
					public onCancellationImpl(): void;
					public onCancellation(): void;
					public constructor();
					public static turnOnStatusFlag(status: number, flag: number): number;
					public onFailure(this_: java.lang.Throwable): void;
					public static turnOffStatusFlag(status: number, flag: number): number;
					public onNewResultImpl(param0: any, param1: number): void;
					public onProgressUpdate(param0: number): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export abstract class BaseNetworkFetcher<FETCH_STATE>  extends com.facebook.imagepipeline.producers.NetworkFetcher<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BaseNetworkFetcher<any>>;
					public onFetchCompletion(param0: any, param1: number): void;
					public getExtraMap(param0: any, param1: number): java.util.Map<string,string>;
					public constructor();
					public getExtraMap(fetchState: any, byteSize: number): java.util.Map<string,string>;
					public createFetchState(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): any;
					public shouldPropagate(fetchState: any): boolean;
					public shouldPropagate(param0: any): boolean;
					public onFetchCompletion(fetchState: any, byteSize: number): void;
					public fetch(param0: any, param1: com.facebook.imagepipeline.producers.NetworkFetcher.Callback): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class BaseProducerContext extends com.facebook.imagepipeline.producers.ProducerContext {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BaseProducerContext>;
					public static INITIAL_KEYS: java.util.Set<string>;
					public static CALLER_CONTEXT_UNSET: any;
					public static callOnCancellationRequested(callback: java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>): void;
					public getId(): string;
					public isCancelled(): boolean;
					public addCallbacks(param0: com.facebook.imagepipeline.producers.ProducerContextCallbacks): void;
					public addCallbacks(callbacks: com.facebook.imagepipeline.producers.ProducerContextCallbacks): void;
					public getExtra(param0: string, param1: any): any;
					public cancelNoCallbacks(): java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>;
					public putOriginExtra(origin: string, subcategory: string): void;
					public putExtras(this_: java.util.Map<string,any>): void;
					public setPriorityNoCallbacks(priority: com.facebook.imagepipeline.common.Priority): java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>;
					public getExtra(key: string): any;
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public isIntermediateResultExpected(): boolean;
					public putExtra(param0: string, param1: any): void;
					public constructor(imageRequest: com.facebook.imagepipeline.request.ImageRequest, id: string, producerListener: com.facebook.imagepipeline.producers.ProducerListener2, callerContext: any, lowestPermittedRequestLevel: com.facebook.imagepipeline.request.ImageRequest.RequestLevel, isPrefetch: boolean, isIntermediateResultExpected: boolean, priority: com.facebook.imagepipeline.common.Priority, imagePipelineConfig: com.facebook.imagepipeline.core.ImagePipelineConfigInterface);
					public setIsIntermediateResultExpectedNoCallbacks(isIntermediateResultExpected: boolean): java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>;
					public getPriority(): com.facebook.imagepipeline.common.Priority;
					public static callOnPriorityChanged(callback: java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>): void;
					public getUiComponentId(): string;
					public getImagePipelineConfig(): com.facebook.imagepipeline.core.ImagePipelineConfigInterface;
					public cancel(): void;
					public getExtra(param0: string): any;
					public putOriginExtra(param0: string): void;
					public getProducerListener(): com.facebook.imagepipeline.producers.ProducerListener2;
					public getExtras(): java.util.Map<string,any>;
					public putOriginExtra(origin: string): void;
					public setIsPrefetchNoCallbacks(isPrefetch: boolean): java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>;
					public static callOnIsPrefetchChanged(callback: java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>): void;
					public putOriginExtra(param0: string, param1: string): void;
					public static callOnIsIntermediateResultExpectedChanged(callback: java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>): void;
					public getCallerContext(): any;
					public getLowestPermittedRequestLevel(): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
					public isPrefetch(): boolean;
					public putExtra(key: string, value: any): void;
					public getExtra(key: string, valueIfNotFound: any): any;
					public constructor(imageRequest: com.facebook.imagepipeline.request.ImageRequest, id: string, uiComponentId: string, extras: java.util.Map<string,any>, producerListener: com.facebook.imagepipeline.producers.ProducerListener2, callerContext: any, lowestPermittedRequestLevel: com.facebook.imagepipeline.request.ImageRequest.RequestLevel, isPrefetch: boolean, isIntermediateResultExpected: boolean, priority: com.facebook.imagepipeline.common.Priority, imagePipelineConfig: com.facebook.imagepipeline.core.ImagePipelineConfigInterface);
					public putExtras(param0: java.util.Map<string,any>): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class BaseProducerContextCallbacks extends com.facebook.imagepipeline.producers.ProducerContextCallbacks {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BaseProducerContextCallbacks>;
					public onIsPrefetchChanged(): void;
					public constructor();
					public onIsIntermediateResultExpectedChanged(): void;
					public onPriorityChanged(): void;
					public onCancellationRequested(): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class BitmapMemoryCacheGetProducer extends com.facebook.imagepipeline.producers.BitmapMemoryCacheProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BitmapMemoryCacheGetProducer>;
					public static PRODUCER_NAME: string; // "BitmapMemoryCacheGetProducer"
					public constructor(memoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>);
					public wrapConsumer(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, cacheKey: com.facebook.cache.common.CacheKey, isMemoryCacheEnabled: boolean): com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getProducerName(): string;
					public getOriginSubcategory(): string;
				}
				export namespace BitmapMemoryCacheGetProducer {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.BitmapMemoryCacheGetProducer.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class BitmapMemoryCacheKeyMultiplexProducer extends com.facebook.imagepipeline.producers.MultiplexProducer<globalAndroid.util.Pair<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.request.ImageRequest.RequestLevel>,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BitmapMemoryCacheKeyMultiplexProducer>;
					public constructor(inputProducer: com.facebook.imagepipeline.producers.Producer<any>, producerName: string, dedupedRequestsCountKey: string, keepCancelledFetchAsLowPriority: boolean);
					public getKey(producerContext: com.facebook.imagepipeline.producers.ProducerContext): globalAndroid.util.Pair<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.request.ImageRequest.RequestLevel>;
					public cloneOrNull(closeableImage: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>): com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>;
					public constructor(inputProducer: com.facebook.imagepipeline.producers.Producer<any>, producerName: string, dedupedRequestsCountKey: string);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getKey(param0: com.facebook.imagepipeline.producers.ProducerContext): any;
					public cloneOrNull(param0: any): any;
					public constructor(cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, inputProducer: com.facebook.imagepipeline.producers.Producer<any>);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class BitmapMemoryCacheProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BitmapMemoryCacheProducer>;
					public static PRODUCER_NAME: string; // "BitmapMemoryCacheProducer"
					public static EXTRA_CACHED_VALUE_FOUND: string; // "cached_value_found"
					public constructor(memoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>);
					public wrapConsumer(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, cacheKey: com.facebook.cache.common.CacheKey, isBitmapCacheEnabledForWrite: boolean): com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public produceResults(listener: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, imageRequest: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getProducerName(): string;
					public getOriginSubcategory(): string;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class BitmapPrepareProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BitmapPrepareProducer>;
					public static PRODUCER_NAME: string; // "BitmapPrepareProducer"
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, minBitmapSizeBytes: number, maxBitmapSizeBytes: number, preparePrefetch: boolean);
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export namespace BitmapPrepareProducer {
					export class BitmapPrepareConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.BitmapPrepareProducer.BitmapPrepareConsumer>;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public onNewResultImpl(newResult: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>, status: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class BitmapProbeProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BitmapProbeProducer>;
					public static PRODUCER_NAME: string; // "BitmapProbeProducer"
					public constructor(encodedMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, diskCachesStoreSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, encodedMemoryCacheHistory: com.facebook.imagepipeline.cache.BoundedLinkedHashSet<com.facebook.cache.common.CacheKey>, diskCacheHistory: com.facebook.imagepipeline.cache.BoundedLinkedHashSet<com.facebook.cache.common.CacheKey>, inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(consumerOfInputProducer: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, this_: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getProducerName(): string;
				}
				export namespace BitmapProbeProducer {
					export class ProbeConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.BitmapProbeProducer.ProbeConsumer>;
						public constructor();
						public onNewResultImpl(diskCachesStore: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>, preferredCache: number): void;
						public onFailure(param0: java.lang.Throwable): void;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, producerContext: com.facebook.imagepipeline.producers.ProducerContext, encodedMemoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, diskCachesStoreSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, encodedMemoryCacheHistory: com.facebook.imagepipeline.cache.BoundedLinkedHashSet<com.facebook.cache.common.CacheKey>, diskCacheHistory: com.facebook.imagepipeline.cache.BoundedLinkedHashSet<com.facebook.cache.common.CacheKey>);
						public onNewResultImpl(param0: any, param1: number): void;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<any>);
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class BranchOnSeparateImagesProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BranchOnSeparateImagesProducer>;
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, context: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(inputProducer1: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>, inputProducer2: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
				}
				export namespace BranchOnSeparateImagesProducer {
					export class OnFirstImageConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.BranchOnSeparateImagesProducer.OnFirstImageConsumer>;
						public onFailureImpl(t: java.lang.Throwable): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onNewResultImpl(this_: com.facebook.imagepipeline.image.EncodedImage, newResult: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class Consumer<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.Consumer<any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.Consumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onNewResult(param0: T, param1: number): void;
						onFailure(param0: java.lang.Throwable): void;
						onCancellation(): void;
						onProgressUpdate(param0: number): void;
					});
					public constructor();
					public static IS_PARTIAL_RESULT: number; // 8
					public static NO_FLAGS: number; // 0
					public static IS_LAST: number; // 1
					public static IS_PLACEHOLDER: number; // 4
					public static DO_NOT_CACHE_ENCODED: number; // 2
					public static IS_RESIZING_DONE: number; // 16
					public onCancellation(): void;
					public onNewResult(param0: T, param1: number): void;
					public onFailure(param0: java.lang.Throwable): void;
					public onProgressUpdate(param0: number): void;
				}
				export namespace Consumer {
					export class Status {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.Consumer.Status>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.producers.Consumer$Status interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class CustomProducerSequenceFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.CustomProducerSequenceFactory>;
					public getCustomDecodedImageSequence(imageRequest: com.facebook.imagepipeline.request.ImageRequest, producerSequenceFactory: com.facebook.imagepipeline.core.ProducerSequenceFactory, producerFactory: com.facebook.imagepipeline.core.ProducerFactory, threadHandoffProducerQueue: com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue, isEncodedMemoryCacheProbingEnabled: boolean, isDiskCacheProbingEnabled: boolean): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public constructor();
					public getCustomDecodedImageSequence(imageRequest: com.facebook.imagepipeline.request.ImageRequest, producerSequenceFactory: com.facebook.imagepipeline.core.ProducerSequenceFactory): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getCustomEncodedImageSequence(imageRequest: com.facebook.imagepipeline.request.ImageRequest, producerSequenceFactory: com.facebook.imagepipeline.core.ProducerSequenceFactory, producerFactory: com.facebook.imagepipeline.core.ProducerFactory, threadHandoffProducerQueue: com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class DataFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.DataFetchProducer>;
					public static PRODUCER_NAME: string; // "DataFetchProducer"
					public getEncodedImage(inputStream: java.io.InputStream, length: number): com.facebook.imagepipeline.image.EncodedImage;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory);
					public getEncodedImage(imageRequest: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public getProducerName(): string;
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class DecodeProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.DecodeProducer>;
					public static PRODUCER_NAME: string; // "DecodeProducer"
					public static EXTRA_BITMAP_SIZE: string; // "bitmapSize"
					public static EXTRA_HAS_GOOD_QUALITY: string; // "hasGoodQuality"
					public static EXTRA_IS_FINAL: string; // "isFinal"
					public static EXTRA_IMAGE_FORMAT_NAME: string; // "imageFormat"
					public static EXTRA_BITMAP_BYTES: string; // "byteCount"
					public static ENCODED_IMAGE_SIZE: string; // "encodedImageSize"
					public static REQUESTED_IMAGE_SIZE: string; // "requestedImageSize"
					public static SAMPLE_SIZE: string; // "sampleSize"
					public static NON_FATAL_DECODE_ERROR: string; // "non_fatal_decode_error"
					public getExecutor(): java.util.concurrent.Executor;
					public getImageDecoder(): com.facebook.imagepipeline.decoder.ImageDecoder;
					public getRecoverFromDecoderOOM(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public getMaxBitmapDimension(): number;
					public getDownsampleMode(): com.facebook.imagepipeline.core.DownsampleMode;
					public getInputProducer(): com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>;
					public getByteArrayPool(): com.facebook.common.memory.ByteArrayPool;
					public getDownsampleEnabledForNetwork(): boolean;
					public getReclaimMemoryRunnable(): java.lang.Runnable;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getProgressiveJpegConfig(): com.facebook.imagepipeline.decoder.ProgressiveJpegConfig;
					public getCloseableReferenceFactory(): com.facebook.imagepipeline.core.CloseableReferenceFactory;
					public produceResults(traceSectionDecodeProducer$produceResults$1: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, imageRequest: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getDecodeCancellationEnabled(): boolean;
					public constructor(byteArrayPool: com.facebook.common.memory.ByteArrayPool, executor: java.util.concurrent.Executor, imageDecoder: com.facebook.imagepipeline.decoder.ImageDecoder, progressiveJpegConfig: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, downsampleMode: com.facebook.imagepipeline.core.DownsampleMode, downsampleEnabledForNetwork: boolean, decodeCancellationEnabled: boolean, inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>, maxBitmapDimension: number, closeableReferenceFactory: com.facebook.imagepipeline.core.CloseableReferenceFactory, reclaimMemoryRunnable: java.lang.Runnable, recoverFromDecoderOOM: com.facebook.common.internal.Supplier<java.lang.Boolean>);
				}
				export namespace DecodeProducer {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.DecodeProducer.Companion>;
					}
					export class LocalImagesProgressiveDecoder extends com.facebook.imagepipeline.producers.DecodeProducer.ProgressiveDecoder {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.DecodeProducer.LocalImagesProgressiveDecoder>;
						public constructor(this$0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, consumer: com.facebook.imagepipeline.producers.ProducerContext, producerContext: boolean, decodeCancellationEnabled: number);
						public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						public constructor();
						public onFailure(param0: java.lang.Throwable): void;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<any>);
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public getIntermediateImageEndOffset(encodedImage: com.facebook.imagepipeline.image.EncodedImage): number;
						public onNewResult(param0: any, param1: number): void;
						public updateDecodeJob(encodedImage: com.facebook.imagepipeline.image.EncodedImage, status: number): boolean;
					}
					export class NetworkImagesProgressiveDecoder extends com.facebook.imagepipeline.producers.DecodeProducer.ProgressiveDecoder {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.DecodeProducer.NetworkImagesProgressiveDecoder>;
						public constructor();
						public getProgressiveJpegConfig(): com.facebook.imagepipeline.decoder.ProgressiveJpegConfig;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<any>);
						public onProgressUpdate(param0: number): void;
						public updateDecodeJob(ret: com.facebook.imagepipeline.image.EncodedImage, this_: number): boolean;
						public onNewResult(param0: any, param1: number): void;
						public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						public constructor(this$0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, consumer: com.facebook.imagepipeline.producers.ProducerContext, producerContext: com.facebook.imagepipeline.decoder.ProgressiveJpegParser, progressiveJpegParser: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, progressiveJpegConfig: boolean, decodeCancellationEnabled: number);
						public constructor(this_: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, this$0: com.facebook.imagepipeline.producers.ProducerContext, consumer: boolean, producerContext: number);
						public onFailure(param0: java.lang.Throwable): void;
						public onCancellation(): void;
						public getIntermediateImageEndOffset(encodedImage: com.facebook.imagepipeline.image.EncodedImage): number;
						public getProgressiveJpegParser(): com.facebook.imagepipeline.decoder.ProgressiveJpegParser;
					}
					export abstract class ProgressiveDecoder extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.DecodeProducer.ProgressiveDecoder>;
						public getLastScheduledScanNumber(): number;
						public constructor();
						public onNewResultImpl(traceSectionDecodeProducer$ProgressiveDecoder$onNewResultImpl$1: com.facebook.imagepipeline.image.EncodedImage, isLast: number): void;
						public onFailureImpl(t: java.lang.Throwable): void;
						public updateDecodeJob(ref: com.facebook.imagepipeline.image.EncodedImage, status: number): boolean;
						public setLastScheduledScanNumber(set: number): void;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<any>);
						public onProgressUpdate(param0: number): void;
						public onNewResult(param0: any, param1: number): void;
						public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						public constructor(this_: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, this$0: com.facebook.imagepipeline.producers.ProducerContext, consumer: boolean, producerContext: number);
						public onCancellationImpl(): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public getIntermediateImageEndOffset(param0: com.facebook.imagepipeline.image.EncodedImage): number;
						public onCancellation(): void;
						public onProgressUpdateImpl(progress: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class DelayProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.DelayProducer>;
					public constructor(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, backgroundTasksExecutor: java.util.concurrent.ScheduledExecutorService);
					public produceResults(this_: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, consumer: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export abstract class DelegatingConsumer<I, O>  extends com.facebook.imagepipeline.producers.BaseConsumer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.DelegatingConsumer<any,any>>;
					public onProgressUpdateImpl(progress: number): void;
					public onNewResult(param0: any, param1: number): void;
					public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<any>);
					public onCancellationImpl(): void;
					public onCancellation(): void;
					public constructor();
					public onFailure(param0: java.lang.Throwable): void;
					public onFailureImpl(t: java.lang.Throwable): void;
					public onProgressUpdate(param0: number): void;
					public getConsumer(): com.facebook.imagepipeline.producers.Consumer<any>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class DiskCacheDecision {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.DiskCacheDecision>;
					public static INSTANCE: com.facebook.imagepipeline.producers.DiskCacheDecision;
					public static chooseDiskCacheForRequest(diskCacheId: com.facebook.imagepipeline.request.ImageRequest, imageRequest: com.facebook.imagepipeline.cache.BufferedDiskCache, smallDiskCache: com.facebook.imagepipeline.cache.BufferedDiskCache, defaultDiskCache: java.util.Map<string,com.facebook.imagepipeline.cache.BufferedDiskCache>): com.facebook.imagepipeline.cache.BufferedDiskCache;
				}
				export namespace DiskCacheDecision {
					export class DiskCacheDecisionNoDiskCacheChosenException {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.DiskCacheDecision.DiskCacheDecisionNoDiskCacheChosenException>;
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class DiskCacheReadProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.DiskCacheReadProducer>;
					public static PRODUCER_NAME: string; // "DiskCacheProducer"
					public static EXTRA_CACHED_VALUE_FOUND: string; // "cached_value_found"
					public static ENCODED_IMAGE_SIZE: string; // "encodedImageSize"
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(diskCachesStoreSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class DiskCacheWriteProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.DiskCacheWriteProducer>;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(diskCachesStoreSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export namespace DiskCacheWriteProducer {
					export class DiskCacheWriteConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.DiskCacheWriteProducer.DiskCacheWriteConsumer>;
						public onNewResultImpl(newResult: com.facebook.imagepipeline.image.EncodedImage, status: number): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class EncodedCacheKeyMultiplexProducer extends com.facebook.imagepipeline.producers.MultiplexProducer<globalAndroid.util.Pair<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.request.ImageRequest.RequestLevel>,com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.EncodedCacheKeyMultiplexProducer>;
					public constructor(inputProducer: com.facebook.imagepipeline.producers.Producer<any>, producerName: string, dedupedRequestsCountKey: string, keepCancelledFetchAsLowPriority: boolean);
					public getKey(producerContext: com.facebook.imagepipeline.producers.ProducerContext): globalAndroid.util.Pair<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.request.ImageRequest.RequestLevel>;
					public constructor(inputProducer: com.facebook.imagepipeline.producers.Producer<any>, producerName: string, dedupedRequestsCountKey: string);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, keepCancelledFetchAsLowPriority: boolean, inputProducer: com.facebook.imagepipeline.producers.Producer<any>);
					public getKey(param0: com.facebook.imagepipeline.producers.ProducerContext): any;
					public cloneOrNull(param0: any): any;
					public cloneOrNull(encodedImage: com.facebook.imagepipeline.image.EncodedImage): com.facebook.imagepipeline.image.EncodedImage;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class EncodedMemoryCacheProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.EncodedMemoryCacheProducer>;
					public static PRODUCER_NAME: string; // "EncodedMemoryCacheProducer"
					public static EXTRA_CACHED_VALUE_FOUND: string; // "cached_value_found"
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(consumerOfInputProducer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, listener: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(memoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
				}
				export namespace EncodedMemoryCacheProducer {
					export class EncodedMemoryCacheConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.EncodedMemoryCacheProducer.EncodedMemoryCacheConsumer>;
						public constructor();
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, memoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, requestedCacheKey: com.facebook.cache.common.CacheKey, isEncodedCacheEnabledForWrite: boolean, encodedCacheEnabled: boolean);
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<any>);
						public onNewResultImpl(cachedEncodedImage: com.facebook.imagepipeline.image.EncodedImage, cachedResult: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class EncodedProbeProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.EncodedProbeProducer>;
					public static PRODUCER_NAME: string; // "EncodedProbeProducer"
					public produceResults(consumerOfInputProducer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, this_: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getProducerName(): string;
					public constructor(diskCachesStoreSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, encodedMemoryCacheHistory: com.facebook.imagepipeline.cache.BoundedLinkedHashSet<any>, diskCacheHistory: com.facebook.imagepipeline.cache.BoundedLinkedHashSet<any>, inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
				}
				export namespace EncodedProbeProducer {
					export class ProbeConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.EncodedProbeProducer.ProbeConsumer>;
						public constructor();
						public onNewResultImpl(diskCachesStore: com.facebook.imagepipeline.image.EncodedImage, preferredCache: number): void;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, producerContext: com.facebook.imagepipeline.producers.ProducerContext, diskCachesStoreSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, encodedMemoryCacheHistory: com.facebook.imagepipeline.cache.BoundedLinkedHashSet<com.facebook.cache.common.CacheKey>, diskCacheHistory: com.facebook.imagepipeline.cache.BoundedLinkedHashSet<com.facebook.cache.common.CacheKey>);
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<any>);
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ExperimentalThreadHandoffProducerQueueImpl extends com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ExperimentalThreadHandoffProducerQueueImpl>;
					public isQueueing(): boolean;
					public addToQueueOrExecute(param0: java.lang.Runnable): void;
					public remove(param0: java.lang.Runnable): void;
					public constructor(executor: java.util.concurrent.Executor);
					public stopQueuing(): void;
					public remove(runnable: java.lang.Runnable): void;
					public startQueueing(): void;
					public addToQueueOrExecute(runnable: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class FetchState {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.FetchState>;
					public getLastIntermediateResultTimeMs(): number;
					public setResponseBytesRange(bytesRange: com.facebook.imagepipeline.common.BytesRange): void;
					public getOnNewResultStatusFlags(): number;
					public getId(): string;
					public getResponseBytesRange(): com.facebook.imagepipeline.common.BytesRange;
					public getConsumer(): com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>;
					public getContext(): com.facebook.imagepipeline.producers.ProducerContext;
					public getUri(): globalAndroid.net.Uri;
					public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, context: com.facebook.imagepipeline.producers.ProducerContext);
					public getListener(): com.facebook.imagepipeline.producers.ProducerListener2;
					public setOnNewResultStatusFlags(onNewResultStatusFlags: number): void;
					public setLastIntermediateResultTimeMs(lastIntermediateResultTimeMs: number): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class HttpUrlConnectionNetworkFetcher extends com.facebook.imagepipeline.producers.BaseNetworkFetcher<com.facebook.imagepipeline.producers.HttpUrlConnectionNetworkFetcher.HttpUrlConnectionNetworkFetchState> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.HttpUrlConnectionNetworkFetcher>;
					public static HTTP_TEMPORARY_REDIRECT: number; // 307
					public static HTTP_PERMANENT_REDIRECT: number; // 308
					public static HTTP_DEFAULT_TIMEOUT: number; // 30000
					public constructor(httpConnectionTimeout: number);
					public getExtraMap(fetchState: com.facebook.imagepipeline.producers.HttpUrlConnectionNetworkFetcher.HttpUrlConnectionNetworkFetchState, byteSize: number): java.util.Map<string,string>;
					public getExtraMap(param0: any, param1: number): java.util.Map<string,string>;
					public constructor(userAgent: string, requestHeaders: java.util.Map<string,string>, httpConnectionTimeout: number);
					public createFetchState(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): any;
					public shouldPropagate(param0: any): boolean;
					public fetch(fetchState: com.facebook.imagepipeline.producers.HttpUrlConnectionNetworkFetcher.HttpUrlConnectionNetworkFetchState, callback: com.facebook.imagepipeline.producers.NetworkFetcher.Callback): void;
					public constructor(userAgent: string, httpConnectionTimeout: number);
					public onFetchCompletion(param0: any, param1: number): void;
					public createFetchState(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, context: com.facebook.imagepipeline.producers.ProducerContext): com.facebook.imagepipeline.producers.HttpUrlConnectionNetworkFetcher.HttpUrlConnectionNetworkFetchState;
					public constructor();
					public getExtraMap(fetchState: any, byteSize: number): java.util.Map<string,string>;
					public onFetchCompletion(fetchState: com.facebook.imagepipeline.producers.HttpUrlConnectionNetworkFetcher.HttpUrlConnectionNetworkFetchState, byteSize: number): void;
					public onFetchCompletion(fetchState: any, byteSize: number): void;
					public fetch(param0: any, param1: com.facebook.imagepipeline.producers.NetworkFetcher.Callback): void;
				}
				export namespace HttpUrlConnectionNetworkFetcher {
					export class HttpUrlConnectionNetworkFetchState extends com.facebook.imagepipeline.producers.FetchState {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.HttpUrlConnectionNetworkFetcher.HttpUrlConnectionNetworkFetchState>;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, producerContext: com.facebook.imagepipeline.producers.ProducerContext);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class InternalProducerListener extends com.facebook.imagepipeline.producers.ProducerListener2 {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.InternalProducerListener>;
					public getProducerListener2(): com.facebook.imagepipeline.producers.ProducerListener2;
					public constructor(producerListener: com.facebook.imagepipeline.producers.ProducerListener, producerListener2: com.facebook.imagepipeline.producers.ProducerListener2);
					public onProducerEvent(context: com.facebook.imagepipeline.producers.ProducerContext, producerName: string, eventName: string): void;
					public onProducerFinishWithCancellation(context: com.facebook.imagepipeline.producers.ProducerContext, producerName: string, extraMap: java.util.Map<string,string>): void;
					public onProducerStart(context: com.facebook.imagepipeline.producers.ProducerContext, producerName: string): void;
					public onUltimateProducerReached(context: com.facebook.imagepipeline.producers.ProducerContext, producerName: string, successful: boolean): void;
					public onProducerEvent(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: string): void;
					public requiresExtraMap(this_: com.facebook.imagepipeline.producers.ProducerContext, context: string): boolean;
					public onProducerFinishWithFailure(context: com.facebook.imagepipeline.producers.ProducerContext, producerName: string, t: java.lang.Throwable, extraMap: java.util.Map<string,string>): void;
					public requiresExtraMap(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): boolean;
					public onProducerFinishWithFailure(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onProducerStart(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): void;
					public onProducerFinishWithSuccess(context: com.facebook.imagepipeline.producers.ProducerContext, producerName: string, extraMap: java.util.Map<string,string>): void;
					public onProducerFinishWithCancellation(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
					public onUltimateProducerReached(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: boolean): void;
					public onProducerFinishWithSuccess(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
					public getProducerListener(): com.facebook.imagepipeline.producers.ProducerListener;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class InternalRequestListener extends com.facebook.imagepipeline.producers.InternalProducerListener implements com.facebook.imagepipeline.listener.RequestListener2 {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.InternalRequestListener>;
					public constructor(producerListener: com.facebook.imagepipeline.producers.ProducerListener, producerListener2: com.facebook.imagepipeline.producers.ProducerListener2);
					public onProducerEvent(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: string): void;
					public onRequestFailure(producerContext: com.facebook.imagepipeline.producers.ProducerContext, throwable: java.lang.Throwable): void;
					public onRequestStart(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onRequestCancellation(producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
					public requiresExtraMap(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): boolean;
					public onRequestSuccess(producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onRequestFailure(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: java.lang.Throwable): void;
					public onProducerFinishWithFailure(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onRequestSuccess(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onProducerStart(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): void;
					public onProducerFinishWithCancellation(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
					public onUltimateProducerReached(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: boolean): void;
					public onRequestCancellation(param0: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onRequestStart(producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
					public onProducerFinishWithSuccess(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
					public constructor(requestListener: com.facebook.imagepipeline.listener.RequestListener, requestListener2: com.facebook.imagepipeline.listener.RequestListener2);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class JobScheduler {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.JobScheduler>;
					public getQueuedTime(): number;
					public clearJob(): void;
					public updateJob(this_: com.facebook.imagepipeline.image.EncodedImage, encodedImage: number): boolean;
					public constructor(executor: java.util.concurrent.Executor, jobRunnable: com.facebook.imagepipeline.producers.JobScheduler.JobRunnable, minimumJobIntervalMs: number);
					public scheduleJob(): boolean;
				}
				export namespace JobScheduler {
					export class JobRunnable {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.JobScheduler.JobRunnable>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.producers.JobScheduler$JobRunnable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							run(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
						});
						public constructor();
						public run(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
					}
					export class JobStartExecutorSupplier {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.JobScheduler.JobStartExecutorSupplier>;
					}
					export class JobState {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.JobScheduler.JobState>;
						public static IDLE: com.facebook.imagepipeline.producers.JobScheduler.JobState;
						public static QUEUED: com.facebook.imagepipeline.producers.JobScheduler.JobState;
						public static RUNNING: com.facebook.imagepipeline.producers.JobScheduler.JobState;
						public static RUNNING_AND_PENDING: com.facebook.imagepipeline.producers.JobScheduler.JobState;
						public static values(): androidNative.Array<com.facebook.imagepipeline.producers.JobScheduler.JobState>;
						public static valueOf(name: string): com.facebook.imagepipeline.producers.JobScheduler.JobState;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class LocalAssetFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalAssetFetchProducer>;
					public static PRODUCER_NAME: string; // "LocalAssetFetchProducer"
					public getEncodedImage(inputStream: java.io.InputStream, length: number): com.facebook.imagepipeline.image.EncodedImage;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory, assetManager: globalAndroid.content.res.AssetManager);
					public getEncodedImage(imageRequest: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public getProducerName(): string;
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory);
				}
				export namespace LocalAssetFetchProducer {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalAssetFetchProducer.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class LocalContentUriFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalContentUriFetchProducer>;
					public static PRODUCER_NAME: string; // "LocalContentUriFetchProducer"
					public getEncodedImage(inputStream: java.io.InputStream, length: number): com.facebook.imagepipeline.image.EncodedImage;
					public getEncodedImage(e: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getProducerName(): string;
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory);
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory, contentResolver: globalAndroid.content.ContentResolver);
				}
				export namespace LocalContentUriFetchProducer {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalContentUriFetchProducer.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class LocalContentUriThumbnailFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer implements com.facebook.imagepipeline.producers.ThumbnailProducer<com.facebook.imagepipeline.image.EncodedImage>  {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalContentUriThumbnailFetchProducer>;
					public static PRODUCER_NAME: string; // "LocalContentUriThumbnailFetchProducer"
					public getEncodedImage(inputStream: java.io.InputStream, length: number): com.facebook.imagepipeline.image.EncodedImage;
					public canProvideImageForSize(resizeOptions: com.facebook.imagepipeline.common.ResizeOptions): boolean;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getEncodedImage(imageRequest: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public getProducerName(): string;
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory);
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory, contentResolver: globalAndroid.content.ContentResolver);
					public canProvideImageForSize(param0: com.facebook.imagepipeline.common.ResizeOptions): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class LocalExifThumbnailProducer extends com.facebook.imagepipeline.producers.ThumbnailProducer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalExifThumbnailProducer>;
					public static PRODUCER_NAME: string; // "LocalExifThumbnailProducer"
					public canProvideImageForSize(resizeOptions: com.facebook.imagepipeline.common.ResizeOptions): boolean;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory, contentResolver: globalAndroid.content.ContentResolver);
					public canProvideImageForSize(param0: com.facebook.imagepipeline.common.ResizeOptions): boolean;
				}
				export namespace LocalExifThumbnailProducer {
					export class Api24Utils {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalExifThumbnailProducer.Api24Utils>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export abstract class LocalFetchProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalFetchProducer>;
					public getEncodedImage(inputStream: java.io.InputStream, length: number): com.facebook.imagepipeline.image.EncodedImage;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getByteBufferBackedEncodedImage(inputStream: java.io.InputStream, length: number): com.facebook.imagepipeline.image.EncodedImage;
					public getEncodedImage(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public getProducerName(): string;
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class LocalFileFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalFileFetchProducer>;
					public static PRODUCER_NAME: string; // "LocalFileFetchProducer"
					public getEncodedImage(inputStream: java.io.InputStream, length: number): com.facebook.imagepipeline.image.EncodedImage;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getEncodedImage(imageRequest: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public getProducerName(): string;
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory);
				}
				export namespace LocalFileFetchProducer {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalFileFetchProducer.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class LocalResourceFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalResourceFetchProducer>;
					public static PRODUCER_NAME: string; // "LocalResourceFetchProducer"
					public getEncodedImage(inputStream: java.io.InputStream, length: number): com.facebook.imagepipeline.image.EncodedImage;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getEncodedImage(imageRequest: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory, resources: globalAndroid.content.res.Resources);
					public getProducerName(): string;
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory);
				}
				export namespace LocalResourceFetchProducer {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalResourceFetchProducer.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class LocalThumbnailBitmapSdk29Producer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalThumbnailBitmapSdk29Producer>;
					public static PRODUCER_NAME: string; // "LocalThumbnailBitmapSdk29Producer"
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, context: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(executor: java.util.concurrent.Executor, contentResolver: globalAndroid.content.ContentResolver);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class LocalVideoThumbnailProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalVideoThumbnailProducer>;
					public static PRODUCER_NAME: string; // "VideoThumbnailProducer"
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(executor: java.util.concurrent.Executor, contentResolver: globalAndroid.content.ContentResolver);
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export abstract class MultiplexProducer<K, T>  extends com.facebook.imagepipeline.producers.Producer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.MultiplexProducer<any,any>>;
					public static EXTRAS_STARTED_AS_PREFETCH: string; // "started_as_prefetch"
					public constructor(inputProducer: com.facebook.imagepipeline.producers.Producer<any>, producerName: string, dedupedRequestsCountKey: string, keepCancelledFetchAsLowPriority: boolean);
					public getExistingMultiplexer(key: any): com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer;
					public removeMultiplexer(key: any, multiplexer: com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer): void;
					public constructor(inputProducer: com.facebook.imagepipeline.producers.Producer<any>, producerName: string, dedupedRequestsCountKey: string);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getKey(param0: com.facebook.imagepipeline.producers.ProducerContext): any;
					public cloneOrNull(param0: any): any;
					public produceResults(key: com.facebook.imagepipeline.producers.Consumer<any>, multiplexer: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export namespace MultiplexProducer {
					export class Multiplexer {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer>;
						public addNewConsumer(prefetchCallbacks: com.facebook.imagepipeline.producers.Consumer<any>, priorityCallbacks: com.facebook.imagepipeline.producers.ProducerContext): boolean;
						public constructor(this$0: any);
						public onNextResult(size: com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer.ForwardingConsumer, pair: any, this_: number): void;
						public onCancelled(forwardingConsumer: com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer.ForwardingConsumer): void;
						public onProgressUpdate(pair: com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer.ForwardingConsumer, this_: number): void;
						public onFailure(pair: com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer.ForwardingConsumer, this_: java.lang.Throwable): void;
					}
					export namespace Multiplexer {
						export class ForwardingConsumer extends com.facebook.imagepipeline.producers.BaseConsumer<any> {
							public static class: java.lang.Class<com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer.ForwardingConsumer>;
							public onCancellationImpl(): void;
							public onCancellation(): void;
							public onFailure(param0: java.lang.Throwable): void;
							public onNewResult(param0: any, param1: number): void;
							public onFailureImpl(t: java.lang.Throwable): void;
							public onProgressUpdateImpl(progress: number): void;
							public onNewResultImpl(newResult: any, status: number): void;
							public onNewResultImpl(param0: any, param1: number): void;
							public onProgressUpdate(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class NetworkFetchProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.NetworkFetchProducer>;
					public static PRODUCER_NAME: string; // "NetworkFetchProducer"
					public static INTERMEDIATE_RESULT_PRODUCER_EVENT: string; // "intermediate_result"
					public mPooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory;
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, context: com.facebook.imagepipeline.producers.ProducerContext): void;
					public maybeHandleIntermediateResult(this_: com.facebook.common.memory.PooledByteBufferOutputStream, pooledOutputStream: com.facebook.imagepipeline.producers.FetchState): void;
					public static notifyConsumer(pooledOutputStream: com.facebook.common.memory.PooledByteBufferOutputStream, status: number, responseBytesRange: com.facebook.imagepipeline.common.BytesRange, consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, context: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public static calculateProgress(downloaded: number, total: number): number;
					public constructor(pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory, byteArrayPool: com.facebook.common.memory.ByteArrayPool, networkFetcher: com.facebook.imagepipeline.producers.NetworkFetcher<any>);
					public handleFinalResult(pooledOutputStream: com.facebook.common.memory.PooledByteBufferOutputStream, fetchState: com.facebook.imagepipeline.producers.FetchState): void;
					public getSystemUptime(): number;
					public onResponse(progress: com.facebook.imagepipeline.producers.FetchState, length: java.io.InputStream, this_: number): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class NetworkFetcher<FETCH_STATE>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.NetworkFetcher<any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.NetworkFetcher<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createFetchState(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): FETCH_STATE;
						fetch(param0: FETCH_STATE, param1: com.facebook.imagepipeline.producers.NetworkFetcher.Callback): void;
						shouldPropagate(param0: FETCH_STATE): boolean;
						onFetchCompletion(param0: FETCH_STATE, param1: number): void;
						getExtraMap(param0: FETCH_STATE, param1: number): java.util.Map<string,string>;
					});
					public constructor();
					public createFetchState(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): FETCH_STATE;
					public getExtraMap(param0: FETCH_STATE, param1: number): java.util.Map<string,string>;
					public fetch(param0: FETCH_STATE, param1: com.facebook.imagepipeline.producers.NetworkFetcher.Callback): void;
					public shouldPropagate(param0: FETCH_STATE): boolean;
					public onFetchCompletion(param0: FETCH_STATE, param1: number): void;
				}
				export namespace NetworkFetcher {
					export class Callback {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.NetworkFetcher.Callback>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.producers.NetworkFetcher$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onResponse(param0: java.io.InputStream, param1: number): void;
							onFailure(param0: java.lang.Throwable): void;
							onCancellation(): void;
						});
						public constructor();
						public onFailure(param0: java.lang.Throwable): void;
						public onCancellation(): void;
						public onResponse(param0: java.io.InputStream, param1: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class PartialDiskCacheProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.PartialDiskCacheProducer>;
					public static PRODUCER_NAME: string; // "PartialDiskCacheProducer"
					public static EXTRA_CACHED_VALUE_FOUND: string; // "cached_value_found"
					public static ENCODED_IMAGE_SIZE: string; // "encodedImageSize"
					public constructor(diskCachesStoreSupplier: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.core.DiskCachesStore>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory, byteArrayPool: com.facebook.common.memory.ByteArrayPool, inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export namespace PartialDiskCacheProducer {
					export class PartialDiskCacheConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.PartialDiskCacheProducer.PartialDiskCacheConsumer>;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResultImpl(e: com.facebook.imagepipeline.image.EncodedImage, this_: number): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class PostprocessedBitmapMemoryCacheProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.PostprocessedBitmapMemoryCacheProducer>;
					public static PRODUCER_NAME: string; // "PostprocessedBitmapMemoryCacheProducer"
					public constructor(memoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, cacheKeyFactory: com.facebook.imagepipeline.cache.CacheKeyFactory, inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(isBitmapCacheEnabledForWrite: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, cachedConsumer: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getProducerName(): string;
				}
				export namespace PostprocessedBitmapMemoryCacheProducer {
					export class CachedPostprocessorConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.PostprocessedBitmapMemoryCacheProducer.CachedPostprocessorConsumer>;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, cacheKey: com.facebook.cache.common.CacheKey, isRepeatedProcessor: boolean, memoryCache: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, isBitmapCacheEnabledForWrite: boolean);
						public constructor();
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<any>);
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public onNewResultImpl(newResult: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>, status: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class PostprocessorProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.PostprocessorProducer>;
					public static NAME: string; // "PostprocessorProducer"
					public produceResults(this_: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, consumer: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, platformBitmapFactory: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, executor: java.util.concurrent.Executor);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export namespace PostprocessorProducer {
					export class PostprocessorConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.PostprocessorProducer.PostprocessorConsumer>;
						public constructor();
						public onFailureImpl(t: java.lang.Throwable): void;
						public onCancellationImpl(): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<any>);
						public onProgressUpdate(param0: number): void;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, listener: com.facebook.imagepipeline.producers.ProducerListener2, postprocessor: com.facebook.imagepipeline.request.Postprocessor, producerContext: com.facebook.imagepipeline.producers.ProducerContext);
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public onNewResultImpl(newResult: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>, status: number): void;
					}
					export class RepeatedPostprocessorConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> implements com.facebook.imagepipeline.request.RepeatedPostprocessorRunner  {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.PostprocessorProducer.RepeatedPostprocessorConsumer>;
						public onFailureImpl(throwable: java.lang.Throwable): void;
						public onCancellationImpl(): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public update(): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public onNewResultImpl(newResult: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>, status: number): void;
					}
					export class SingleUsePostprocessorConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.PostprocessorProducer.SingleUsePostprocessorConsumer>;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public onNewResultImpl(newResult: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>, status: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class PriorityStarvingThrottlingProducer<T>  extends com.facebook.imagepipeline.producers.Producer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.PriorityStarvingThrottlingProducer<any>>;
					public static PRODUCER_NAME: string; // "PriorityStarvingThrottlingProducer"
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(maxSimultaneousRequests: number, executor: java.util.concurrent.Executor, inputProducer: com.facebook.imagepipeline.producers.Producer<any>);
					public produceResults(delayRequest: com.facebook.imagepipeline.producers.Consumer<any>, this_: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export namespace PriorityStarvingThrottlingProducer {
					export class Item<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.PriorityStarvingThrottlingProducer.Item<any>>;
					}
					export class PriorityComparator<T>  extends java.util.Comparator<com.facebook.imagepipeline.producers.PriorityStarvingThrottlingProducer.Item<any>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.PriorityStarvingThrottlingProducer.PriorityComparator<any>>;
						public compare(o1: com.facebook.imagepipeline.producers.PriorityStarvingThrottlingProducer.Item<any>, o2: com.facebook.imagepipeline.producers.PriorityStarvingThrottlingProducer.Item<any>): number;
					}
					export class ThrottlerConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<any,any> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.PriorityStarvingThrottlingProducer.ThrottlerConsumer>;
						public onFailureImpl(t: java.lang.Throwable): void;
						public onNewResultImpl(newResult: any, status: number): void;
						public onCancellationImpl(): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class Producer<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.Producer<any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.Producer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						produceResults(param0: com.facebook.imagepipeline.producers.Consumer<T>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					});
					public constructor();
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<T>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ProducerConstants {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ProducerConstants>;
					public static INSTANCE: com.facebook.imagepipeline.producers.ProducerConstants;
					public static EXTRA_CACHED_VALUE_FOUND: string; // "cached_value_found"
					public static EXTRA_BITMAP_SIZE: string; // "bitmapSize"
					public static EXTRA_HAS_GOOD_QUALITY: string; // "hasGoodQuality"
					public static EXTRA_IS_FINAL: string; // "isFinal"
					public static EXTRA_IMAGE_FORMAT_NAME: string; // "imageFormat"
					public static EXTRA_BYTES: string; // "byteCount"
					public static ENCODED_IMAGE_SIZE: string; // "encodedImageSize"
					public static REQUESTED_IMAGE_SIZE: string; // "requestedImageSize"
					public static SAMPLE_SIZE: string; // "sampleSize"
					public static NON_FATAL_DECODE_ERROR: string; // "non_fatal_decode_error"
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ProducerContext extends com.facebook.fresco.middleware.HasExtraData {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ProducerContext>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.ProducerContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
						getId(): string;
						getUiComponentId(): string;
						getProducerListener(): com.facebook.imagepipeline.producers.ProducerListener2;
						getCallerContext(): any;
						getLowestPermittedRequestLevel(): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						isPrefetch(): boolean;
						getPriority(): com.facebook.imagepipeline.common.Priority;
						isIntermediateResultExpected(): boolean;
						addCallbacks(param0: com.facebook.imagepipeline.producers.ProducerContextCallbacks): void;
						getImagePipelineConfig(): com.facebook.imagepipeline.core.ImagePipelineConfigInterface;
						putOriginExtra(param0: string, param1: string): void;
						putOriginExtra(param0: string): void;
						putExtra(param0: string, param1: any): void;
						getExtra(param0: string): any;
						getExtra(param0: string, param1: any): any;
						getExtras(): java.util.Map<string,any>;
						putExtras(param0: java.util.Map<string,any>): void;
						"<clinit>"(): void;
					});
					public constructor();
					public static KEY_ID: string; // "id"
					public static KEY_ENCODED_HEIGHT: string; // "encoded_height"
					public static KEY_URI_SOURCE: string; // "uri_source"
					public static KEY_ENCODED_SIZE: string; // "encoded_size"
					public static KEY_MULTIPLEX_ENCODED_COUNT: string; // "multiplex_enc_cnt"
					public static KEY_IMAGE_SOURCE_EXTRAS: string; // "image_source_extras"
					public static KEY_ORIGINAL_URL: string; // "original_url"
					public static KEY_ORIGIN_SUBCATEGORY: string; // "origin_sub"
					public static KEY_COLOR_SPACE: string; // "image_color_space"
					public static KEY_IMAGE_FORMAT: string; // "image_format"
					public static KEY_IS_ROUNDED: string; // "is_rounded"
					public static KEY_IMAGE_SOURCE_TYPE: string; // "image_source_type"
					public static KEY_MODIFIED_URL: string; // "modified_url"
					public static KEY_BITMAP_CONFIG: string; // "bitmap_config"
					public static KEY_MULTIPLEX_BITMAP_COUNT: string; // "multiplex_bmp_cnt"
					public static Companion: com.facebook.fresco.middleware.HasExtraData.Companion;
					public static KEY_ORIGIN: string; // "origin"
					public static KEY_ENCODED_WIDTH: string; // "encoded_width"
					public static KEY_NON_FATAL_DECODE_ERROR: string; // "non_fatal_decode_error"
					public static KEY_LAST_SCAN_NUMBER: string; // "last_scan_num"
					public getPriority(): com.facebook.imagepipeline.common.Priority;
					public getId(): string;
					public getUiComponentId(): string;
					public addCallbacks(param0: com.facebook.imagepipeline.producers.ProducerContextCallbacks): void;
					public getImagePipelineConfig(): com.facebook.imagepipeline.core.ImagePipelineConfigInterface;
					public getExtra(param0: string): any;
					public putOriginExtra(param0: string): void;
					public getProducerListener(): com.facebook.imagepipeline.producers.ProducerListener2;
					public getExtra(param0: string, param1: any): any;
					public getExtras(): java.util.Map<string,any>;
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public putOriginExtra(param0: string, param1: string): void;
					public isIntermediateResultExpected(): boolean;
					public putExtra(param0: string, param1: any): void;
					public getCallerContext(): any;
					public getLowestPermittedRequestLevel(): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
					public isPrefetch(): boolean;
					public putExtras(param0: java.util.Map<string,any>): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ProducerContextCallbacks {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ProducerContextCallbacks>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.ProducerContextCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCancellationRequested(): void;
						onIsPrefetchChanged(): void;
						onIsIntermediateResultExpectedChanged(): void;
						onPriorityChanged(): void;
					});
					public constructor();
					public onIsPrefetchChanged(): void;
					public onIsIntermediateResultExpectedChanged(): void;
					public onPriorityChanged(): void;
					public onCancellationRequested(): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ProducerListener {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ProducerListener>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.ProducerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onProducerStart(param0: string, param1: string): void;
						onProducerEvent(param0: string, param1: string, param2: string): void;
						onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
						onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
						onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
						onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
						requiresExtraMap(param0: string): boolean;
					});
					public constructor();
					public requiresExtraMap(param0: string): boolean;
					public onProducerStart(param0: string, param1: string): void;
					public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
					public onProducerEvent(param0: string, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ProducerListener2 {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ProducerListener2>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.ProducerListener2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onProducerStart(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): void;
						onProducerEvent(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: string): void;
						onProducerFinishWithSuccess(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
						onProducerFinishWithFailure(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
						onProducerFinishWithCancellation(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
						onUltimateProducerReached(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: boolean): void;
						requiresExtraMap(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): boolean;
					});
					public constructor();
					public onProducerFinishWithCancellation(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
					public onUltimateProducerReached(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: boolean): void;
					public onProducerEvent(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: string): void;
					public requiresExtraMap(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): boolean;
					public onProducerFinishWithSuccess(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithFailure(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onProducerStart(param0: com.facebook.imagepipeline.producers.ProducerContext, param1: string): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class QualifiedResourceFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.QualifiedResourceFetchProducer>;
					public static PRODUCER_NAME: string; // "QualifiedResourceFetchProducer"
					public getEncodedImage(inputStream: java.io.InputStream, length: number): com.facebook.imagepipeline.image.EncodedImage;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getEncodedImage(this_: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public getProducerName(): string;
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory);
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory, contentResolver: globalAndroid.content.ContentResolver);
				}
				export namespace QualifiedResourceFetchProducer {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.QualifiedResourceFetchProducer.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class RemoveImageTransformMetaDataProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.RemoveImageTransformMetaDataProducer>;
					public constructor(inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>, context: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export namespace RemoveImageTransformMetaDataProducer {
					export class RemoveImageTransformMetaDataConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.RemoveImageTransformMetaDataProducer.RemoveImageTransformMetaDataConsumer>;
						public constructor();
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onNewResultImpl(this_: com.facebook.imagepipeline.image.EncodedImage, newResult: number): void;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<any>);
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public constructor(this$0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ResizeAndRotateProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ResizeAndRotateProducer>;
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, context: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(executor: java.util.concurrent.Executor, pooledByteBufferFactory: com.facebook.common.memory.PooledByteBufferFactory, inputProducer: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>, isResizingEnabled: boolean, imageTranscoderFactory: com.facebook.imagepipeline.transcoder.ImageTranscoderFactory);
				}
				export namespace ResizeAndRotateProducer {
					export class TransformingConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.ResizeAndRotateProducer.TransformingConsumer>;
						public onNewResultImpl(newResult: com.facebook.imagepipeline.image.EncodedImage, status: number): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class SettableProducerContext extends com.facebook.imagepipeline.producers.BaseProducerContext {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.SettableProducerContext>;
					public setIsPrefetch(isPrefetch: boolean): void;
					public getPriority(): com.facebook.imagepipeline.common.Priority;
					public getId(): string;
					public getUiComponentId(): string;
					public addCallbacks(param0: com.facebook.imagepipeline.producers.ProducerContextCallbacks): void;
					public getImagePipelineConfig(): com.facebook.imagepipeline.core.ImagePipelineConfigInterface;
					public setPriority(priority: com.facebook.imagepipeline.common.Priority): void;
					public putOriginExtra(param0: string): void;
					public getProducerListener(): com.facebook.imagepipeline.producers.ProducerListener2;
					public constructor(context: com.facebook.imagepipeline.producers.ProducerContext);
					public putOriginExtra(origin: string): void;
					public constructor(imageRequest: com.facebook.imagepipeline.request.ImageRequest, id: string, uiComponentId: string, producerListener: com.facebook.imagepipeline.producers.ProducerListener2, callerContext: any, lowestPermittedRequestLevel: com.facebook.imagepipeline.request.ImageRequest.RequestLevel, isPrefetch: boolean, isIntermediateResultExpected: boolean, priority: com.facebook.imagepipeline.common.Priority, imagePipelineConfig: com.facebook.imagepipeline.core.ImagePipelineConfigInterface);
					public constructor(overrideRequest: com.facebook.imagepipeline.request.ImageRequest, context: com.facebook.imagepipeline.producers.ProducerContext);
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public putOriginExtra(param0: string, param1: string): void;
					public isIntermediateResultExpected(): boolean;
					public setIsIntermediateResultExpected(isIntermediateResultExpected: boolean): void;
					public getCallerContext(): any;
					public getLowestPermittedRequestLevel(): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
					public isPrefetch(): boolean;
					public constructor(imageRequest: com.facebook.imagepipeline.request.ImageRequest, id: string, producerListener: com.facebook.imagepipeline.producers.ProducerListener2, callerContext: any, lowestPermittedRequestLevel: com.facebook.imagepipeline.request.ImageRequest.RequestLevel, isPrefetch: boolean, isIntermediateResultExpected: boolean, priority: com.facebook.imagepipeline.common.Priority, imagePipelineConfig: com.facebook.imagepipeline.core.ImagePipelineConfigInterface);
					public constructor(imageRequest: com.facebook.imagepipeline.request.ImageRequest, id: string, uiComponentId: string, extras: java.util.Map<string,any>, producerListener: com.facebook.imagepipeline.producers.ProducerListener2, callerContext: any, lowestPermittedRequestLevel: com.facebook.imagepipeline.request.ImageRequest.RequestLevel, isPrefetch: boolean, isIntermediateResultExpected: boolean, priority: com.facebook.imagepipeline.common.Priority, imagePipelineConfig: com.facebook.imagepipeline.core.ImagePipelineConfigInterface);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export abstract class StatefulProducerRunnable<T>  extends com.facebook.common.executors.StatefulRunnable<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.StatefulProducerRunnable<any>>;
					public onSuccess(result: any): void;
					public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<any>, producerListener: com.facebook.imagepipeline.producers.ProducerListener2, producerContext: com.facebook.imagepipeline.producers.ProducerContext, producerName: string);
					public onCancellation(): void;
					public getExtraMapOnSuccess(result: any): java.util.Map<string,string>;
					public getExtraMapOnFailure(exception: java.lang.Exception): java.util.Map<string,string>;
					public onFailure(e: java.lang.Exception): void;
					public disposeResult(param0: any): void;
					public getExtraMapOnCancellation(): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class SwallowResultProducer<T>  extends com.facebook.imagepipeline.producers.Producer<java.lang.Void> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.SwallowResultProducer<any>>;
					public constructor(inputProducer: com.facebook.imagepipeline.producers.Producer<any>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(consumer: com.facebook.imagepipeline.producers.Consumer<java.lang.Void>, producerContext: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ThreadHandoffProducer<T>  extends com.facebook.imagepipeline.producers.Producer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThreadHandoffProducer<any>>;
					public static PRODUCER_NAME: string; // "BackgroundThreadHandoffProducer"
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(inputProducer: com.facebook.imagepipeline.producers.Producer<any>, threadHandoffProducerQueue: com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue);
					public produceResults(producerListener: com.facebook.imagepipeline.producers.Consumer<any>, statefulRunnable: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getInputProducer(): com.facebook.imagepipeline.producers.Producer<any>;
					public getThreadHandoffProducerQueue(): com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue;
				}
				export namespace ThreadHandoffProducer {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThreadHandoffProducer.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ThreadHandoffProducerQueue {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addToQueueOrExecute(param0: java.lang.Runnable): void;
						startQueueing(): void;
						stopQueuing(): void;
						remove(param0: java.lang.Runnable): void;
						isQueueing(): boolean;
					});
					public constructor();
					public addToQueueOrExecute(param0: java.lang.Runnable): void;
					public isQueueing(): boolean;
					public remove(param0: java.lang.Runnable): void;
					public stopQueuing(): void;
					public startQueueing(): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ThreadHandoffProducerQueueImpl extends com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThreadHandoffProducerQueueImpl>;
					public isQueueing(): boolean;
					public addToQueueOrExecute(param0: java.lang.Runnable): void;
					public remove(param0: java.lang.Runnable): void;
					public constructor(executor: java.util.concurrent.Executor);
					public stopQueuing(): void;
					public remove(runnable: java.lang.Runnable): void;
					public startQueueing(): void;
					public addToQueueOrExecute(runnable: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ThrottlingProducer<T>  extends com.facebook.imagepipeline.producers.Producer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThrottlingProducer<any>>;
					public static PRODUCER_NAME: string; // "ThrottlingProducer"
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(maxSimultaneousRequests: number, executor: java.util.concurrent.Executor, inputProducer: com.facebook.imagepipeline.producers.Producer<any>);
					public produceResults(delayRequest: com.facebook.imagepipeline.producers.Consumer<any>, this_: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export namespace ThrottlingProducer {
					export class ThrottlerConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<any,any> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThrottlingProducer.ThrottlerConsumer>;
						public onFailureImpl(t: java.lang.Throwable): void;
						public onNewResultImpl(newResult: any, status: number): void;
						public onCancellationImpl(): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ThumbnailBranchProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThumbnailBranchProducer>;
					public constructor(thumbnailProducers: androidNative.Array<com.facebook.imagepipeline.producers.ThumbnailProducer<com.facebook.imagepipeline.image.EncodedImage>>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(this_: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, consumer: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export namespace ThumbnailBranchProducer {
					export class ThumbnailConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThumbnailBranchProducer.ThumbnailConsumer>;
						public constructor();
						public onFailureImpl(t: java.lang.Throwable): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onNewResultImpl(this_: com.facebook.imagepipeline.image.EncodedImage, newResult: number): void;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<any>);
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public constructor(consumer: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, producerContext: com.facebook.imagepipeline.producers.ProducerContext, producerIndex: number);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ThumbnailProducer<T>  extends com.facebook.imagepipeline.producers.Producer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThumbnailProducer<any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.ThumbnailProducer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						canProvideImageForSize(param0: com.facebook.imagepipeline.common.ResizeOptions): boolean;
						produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					});
					public constructor();
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public canProvideImageForSize(param0: com.facebook.imagepipeline.common.ResizeOptions): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace producers {
				export class ThumbnailSizeChecker {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThumbnailSizeChecker>;
					public static INSTANCE: com.facebook.imagepipeline.producers.ThumbnailSizeChecker;
					public static ACCEPTABLE_REQUESTED_TO_ACTUAL_SIZE_RATIO: number; // 1.3333334
					public static isImageBigEnough(width: number, height: number, resizeOptions: com.facebook.imagepipeline.common.ResizeOptions): boolean;
					public static isImageBigEnough(encodedImage: com.facebook.imagepipeline.image.EncodedImage, resizeOptions: com.facebook.imagepipeline.common.ResizeOptions): boolean;
					public static getAcceptableSize(size: number): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace request {
				export abstract class BasePostprocessor extends com.facebook.imagepipeline.request.Postprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.BasePostprocessor>;
					public static FALLBACK_BITMAP_CONFIGURATION: globalAndroid.graphics.Bitmap.Config;
					public process(destBitmap: globalAndroid.graphics.Bitmap, sourceBitmap: globalAndroid.graphics.Bitmap): void;
					public process(sourceBitmap: globalAndroid.graphics.Bitmap, bitmapFactory: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public getName(): string;
					public process(bitmap: globalAndroid.graphics.Bitmap): void;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace request {
				export abstract class BaseRepeatedPostProcessor extends com.facebook.imagepipeline.request.BasePostprocessor implements com.facebook.imagepipeline.request.RepeatedPostprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.BaseRepeatedPostProcessor>;
					public process(destBitmap: globalAndroid.graphics.Bitmap, sourceBitmap: globalAndroid.graphics.Bitmap): void;
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public setCallback(runner: com.facebook.imagepipeline.request.RepeatedPostprocessorRunner): void;
					public getName(): string;
					public update(): void;
					public setCallback(param0: com.facebook.imagepipeline.request.RepeatedPostprocessorRunner): void;
					public process(bitmap: globalAndroid.graphics.Bitmap): void;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace request {
				export class HasImageRequest {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.HasImageRequest>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.request.HasImageRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					});
					public constructor();
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace request {
				export class ImageRequest {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.ImageRequest>;
					public mCachesDisabled: number;
					public static REQUEST_TO_URI_FN: com.facebook.common.internal.Fn<com.facebook.imagepipeline.request.ImageRequest,globalAndroid.net.Uri>;
					public getPreferredHeight(): number;
					public recordHashCode(hashCodeLog: java.util.HashMap<string,java.lang.Integer>): void;
					public getSourceUriType(): number;
					public static fromFile(file: java.io.File): com.facebook.imagepipeline.request.ImageRequest;
					public isDiskCacheEnabled(): boolean;
					public constructor(builder: com.facebook.imagepipeline.request.ImageRequestBuilder);
					public getLoadThumbnailOnlyForAndroidSdkAboveQ(): boolean;
					public getResizingAllowedOverride(): java.lang.Boolean;
					public getResizeOptions(): com.facebook.imagepipeline.common.ResizeOptions;
					public isCacheEnabled(cacheMask: number): boolean;
					public toString(): string;
					public static setCacheHashcode(cacheHashcode: boolean): void;
					public static fromUri(uriString: string): com.facebook.imagepipeline.request.ImageRequest;
					public getRequestListener(): com.facebook.imagepipeline.listener.RequestListener;
					public getDelayMs(): number;
					public getCacheChoice(): com.facebook.imagepipeline.request.ImageRequest.CacheChoice;
					public getRotationOptions(): com.facebook.imagepipeline.common.RotationOptions;
					/** @deprecated */
					public getAutoRotateEnabled(): boolean;
					public hashCode(): number;
					public getLocalThumbnailPreviewsEnabled(): boolean;
					public getImageDecodeOptions(): com.facebook.imagepipeline.common.ImageDecodeOptions;
					public static setUseCachedHashcodeInEquals(useCachedHashcodeInEquals: boolean): void;
					public getSourceUri(): globalAndroid.net.Uri;
					public getCachesDisabled(): number;
					public getPriority(): com.facebook.imagepipeline.common.Priority;
					public getProgressiveRenderingEnabled(): boolean;
					public getSourceFile(): java.io.File;
					public getBytesRange(): com.facebook.imagepipeline.common.BytesRange;
					public getDiskCacheId(): string;
					public shouldDecodePrefetches(): java.lang.Boolean;
					public static fromUri(uri: globalAndroid.net.Uri): com.facebook.imagepipeline.request.ImageRequest;
					public getPreferredWidth(): number;
					public getDownsampleOverride(): com.facebook.imagepipeline.core.DownsampleMode;
					public getPostprocessor(): com.facebook.imagepipeline.request.Postprocessor;
					public isMemoryCacheEnabled(): boolean;
					public equals(b: any): boolean;
					public getLowestPermittedRequestLevel(): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
				}
				export namespace ImageRequest {
					export class CacheChoice {
						public static class: java.lang.Class<com.facebook.imagepipeline.request.ImageRequest.CacheChoice>;
						public static SMALL: com.facebook.imagepipeline.request.ImageRequest.CacheChoice;
						public static DEFAULT: com.facebook.imagepipeline.request.ImageRequest.CacheChoice;
						public static DYNAMIC: com.facebook.imagepipeline.request.ImageRequest.CacheChoice;
						public static values(): androidNative.Array<com.facebook.imagepipeline.request.ImageRequest.CacheChoice>;
						public static valueOf(name: string): com.facebook.imagepipeline.request.ImageRequest.CacheChoice;
					}
					export class CachesLocationsMasks {
						public static class: java.lang.Class<com.facebook.imagepipeline.request.ImageRequest.CachesLocationsMasks>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.request.ImageRequest$CachesLocationsMasks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static ENCODED_READ: number; // 4
						public static DISK_WRITE: number; // 32
						public static DISK_READ: number; // 16
						public static BITMAP_WRITE: number; // 2
						public static BITMAP_READ: number; // 1
						public static ENCODED_WRITE: number; // 8
					}
					export class RequestLevel {
						public static class: java.lang.Class<com.facebook.imagepipeline.request.ImageRequest.RequestLevel>;
						public static FULL_FETCH: com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						public static DISK_CACHE: com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						public static ENCODED_MEMORY_CACHE: com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						public static BITMAP_MEMORY_CACHE: com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						public static values(): androidNative.Array<com.facebook.imagepipeline.request.ImageRequest.RequestLevel>;
						public static getMax(requestLevel1: com.facebook.imagepipeline.request.ImageRequest.RequestLevel, requestLevel2: com.facebook.imagepipeline.request.ImageRequest.RequestLevel): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						public static valueOf(name: string): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace request {
				export class ImageRequestBuilder {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.ImageRequestBuilder>;
					public setLocalThumbnailPreviewsEnabled(enabled: boolean): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setRequestListener(requestListener: com.facebook.imagepipeline.listener.RequestListener): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public isLocalThumbnailPreviewsEnabled(): boolean;
					public setLoadThumbnailOnly(loadThumbnailOnly: boolean): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public static newBuilderWithResourceId(resId: number): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public static newBuilderWithSource(uri: globalAndroid.net.Uri): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setDelayMs(delayMs: number): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setCacheChoice(cacheChoice: com.facebook.imagepipeline.request.ImageRequest.CacheChoice): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public getDelayMs(): number;
					public setRotationOptions(rotationOptions: com.facebook.imagepipeline.common.RotationOptions): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setShouldDecodePrefetches(shouldDecodePrefetches: java.lang.Boolean): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public getRotationOptions(): com.facebook.imagepipeline.common.RotationOptions;
					public disableDiskCache(): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public getImageDecodeOptions(): com.facebook.imagepipeline.common.ImageDecodeOptions;
					public getSourceUri(): globalAndroid.net.Uri;
					public setLowestPermittedRequestLevel(requestLevel: com.facebook.imagepipeline.request.ImageRequest.RequestLevel): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public getLoadThumbnailOnly(): boolean;
					public setSource(uri: globalAndroid.net.Uri): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public getCachesDisabled(): number;
					public getRequestPriority(): com.facebook.imagepipeline.common.Priority;
					/** @deprecated */
					public setAutoRotateEnabled(enabled: boolean): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public shouldDecodePrefetches(): java.lang.Boolean;
					public getDownsampleOverride(): com.facebook.imagepipeline.core.DownsampleMode;
					public setPostprocessor(postprocessor: com.facebook.imagepipeline.request.Postprocessor): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public static isCustomNetworkUri(scheme: globalAndroid.net.Uri): boolean;
					public setDownsampleOverride(downsampleOverride: com.facebook.imagepipeline.core.DownsampleMode): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public disableMemoryCache(): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setResizeOptions(resizeOptions: com.facebook.imagepipeline.common.ResizeOptions): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public isDiskCacheEnabled(): boolean;
					public setImageDecodeOptions(imageDecodeOptions: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public validate(): void;
					public isProgressiveRenderingEnabled(): boolean;
					public getResizingAllowedOverride(): java.lang.Boolean;
					public getResizeOptions(): com.facebook.imagepipeline.common.ResizeOptions;
					public static fromRequest(imageRequest: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setProgressiveRenderingEnabled(enabled: boolean): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public getRequestListener(): com.facebook.imagepipeline.listener.RequestListener;
					public getCacheChoice(): com.facebook.imagepipeline.request.ImageRequest.CacheChoice;
					public setRequestPriority(requestPriority: com.facebook.imagepipeline.common.Priority): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public build(): com.facebook.imagepipeline.request.ImageRequest;
					public setDiskCacheId(diskCacheId: string): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setResizingAllowedOverride(resizingAllowedOverride: java.lang.Boolean): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public getBytesRange(): com.facebook.imagepipeline.common.BytesRange;
					public getDiskCacheId(): string;
					public getPostprocessor(): com.facebook.imagepipeline.request.Postprocessor;
					public setBytesRange(bytesRange: com.facebook.imagepipeline.common.BytesRange): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public isMemoryCacheEnabled(): boolean;
					public getLowestPermittedRequestLevel(): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
					public static addCustomUriNetworkScheme(scheme: string): void;
				}
				export namespace ImageRequestBuilder {
					export class BuilderException {
						public static class: java.lang.Class<com.facebook.imagepipeline.request.ImageRequestBuilder.BuilderException>;
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace request {
				export class Postprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.Postprocessor>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.request.Postprocessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						getName(): string;
						getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
					});
					public constructor();
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public getName(): string;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace request {
				export class RepeatedPostprocessor extends com.facebook.imagepipeline.request.Postprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.RepeatedPostprocessor>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.request.RepeatedPostprocessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setCallback(param0: com.facebook.imagepipeline.request.RepeatedPostprocessorRunner): void;
						process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						getName(): string;
						getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
					});
					public constructor();
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public getName(): string;
					public setCallback(param0: com.facebook.imagepipeline.request.RepeatedPostprocessorRunner): void;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace request {
				export class RepeatedPostprocessorRunner {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.RepeatedPostprocessorRunner>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.request.RepeatedPostprocessorRunner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						update(): void;
					});
					public constructor();
					public update(): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace systrace {
				export class DefaultFrescoSystrace extends com.facebook.imagepipeline.systrace.FrescoSystrace.Systrace {
					public static class: java.lang.Class<com.facebook.imagepipeline.systrace.DefaultFrescoSystrace>;
					public beginSectionWithArgs(name: string): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
					public endSection(): void;
					public isTracing(): boolean;
					public constructor();
					public beginSection(name: string): void;
					public beginSectionWithArgs(param0: string): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
					public beginSection(param0: string): void;
				}
				export namespace DefaultFrescoSystrace {
					export class DefaultArgsBuilder extends com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder {
						public static class: java.lang.Class<com.facebook.imagepipeline.systrace.DefaultFrescoSystrace.DefaultArgsBuilder>;
						public arg($this$arg_u24lambda_u241: string, this_: number): com.facebook.imagepipeline.systrace.DefaultFrescoSystrace.DefaultArgsBuilder;
						public arg($this$arg_u24lambda_u242: string, this_: number): com.facebook.imagepipeline.systrace.DefaultFrescoSystrace.DefaultArgsBuilder;
						public constructor(name: string);
						public arg(param0: string, param1: any): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
						public arg($this$arg_u24lambda_u240: string, this_: any): com.facebook.imagepipeline.systrace.DefaultFrescoSystrace.DefaultArgsBuilder;
						public flush(): void;
						public arg($this$arg_u24lambda_u243: string, this_: number): com.facebook.imagepipeline.systrace.DefaultFrescoSystrace.DefaultArgsBuilder;
						public arg(param0: string, param1: number): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace systrace {
				export class FrescoSystrace {
					public static class: java.lang.Class<com.facebook.imagepipeline.systrace.FrescoSystrace>;
					public static INSTANCE: com.facebook.imagepipeline.systrace.FrescoSystrace;
					public static NO_OP_ARGS_BUILDER: com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
					public static endSection(): void;
					public traceSection(this_: string, name: any): any;
					public static beginSectionWithArgs(name: string): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
					public static beginSection(name: string): void;
					public static provide(instance: com.facebook.imagepipeline.systrace.FrescoSystrace.Systrace): void;
					public static isTracing(): boolean;
				}
				export namespace FrescoSystrace {
					export class ArgsBuilder {
						public static class: java.lang.Class<com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.systrace.FrescoSystrace$ArgsBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							flush(): void;
							arg(param0: string, param1: any): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
							arg(param0: string, param1: number): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
							arg(param0: string, param1: number): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
							arg(param0: string, param1: number): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
						});
						public constructor();
						public arg(param0: string, param1: any): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
						public flush(): void;
						public arg(param0: string, param1: number): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
					}
					export class NoOpArgsBuilder extends com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder {
						public static class: java.lang.Class<com.facebook.imagepipeline.systrace.FrescoSystrace.NoOpArgsBuilder>;
						public constructor();
						public arg(key: string, value: any): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
						public arg(param0: string, param1: any): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
						public flush(): void;
						public arg(key: string, value: number): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
						public arg(param0: string, param1: number): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
					}
					export class Systrace {
						public static class: java.lang.Class<com.facebook.imagepipeline.systrace.FrescoSystrace.Systrace>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.systrace.FrescoSystrace$Systrace interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							beginSection(param0: string): void;
							beginSectionWithArgs(param0: string): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
							endSection(): void;
							isTracing(): boolean;
						});
						public constructor();
						public endSection(): void;
						public beginSectionWithArgs(param0: string): com.facebook.imagepipeline.systrace.FrescoSystrace.ArgsBuilder;
						public isTracing(): boolean;
						public beginSection(param0: string): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace transcoder {
				export class DownsampleUtil {
					public static class: java.lang.Class<com.facebook.imagepipeline.transcoder.DownsampleUtil>;
					public static INSTANCE: com.facebook.imagepipeline.transcoder.DownsampleUtil;
					public static DEFAULT_SAMPLE_SIZE: number; // 1
					public static determineDownsampleRatio(rotationAngle: com.facebook.imagepipeline.common.RotationOptions, swapDimensions: com.facebook.imagepipeline.common.ResizeOptions, widthAfterRotation: com.facebook.imagepipeline.image.EncodedImage): number;
					public static determineSampleSize(ratio: com.facebook.imagepipeline.common.RotationOptions, sampleSize: com.facebook.imagepipeline.common.ResizeOptions, maxDimension: com.facebook.imagepipeline.image.EncodedImage, computedMaxBitmapSize: number): number;
					public static roundToPowerOfTwo(compare: number): number;
					public static determineSampleSizeJPEG(sampleSize: com.facebook.imagepipeline.image.EncodedImage, base: number, encodedImage: number): number;
					public static ratioToSampleSizeJPEG(intervalLength: number): number;
					public static ratioToSampleSize(intervalLength: number): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace transcoder {
				export class ImageTranscodeResult {
					public static class: java.lang.Class<com.facebook.imagepipeline.transcoder.ImageTranscodeResult>;
					public toString(): string;
					public getTranscodeStatus(): number;
					public constructor(transcodeStatus: number);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace transcoder {
				export class ImageTranscoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.transcoder.ImageTranscoder>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.transcoder.ImageTranscoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						transcode(param0: com.facebook.imagepipeline.image.EncodedImage, param1: java.io.OutputStream, param2: com.facebook.imagepipeline.common.RotationOptions, param3: com.facebook.imagepipeline.common.ResizeOptions, param4: com.facebook.imageformat.ImageFormat, param5: java.lang.Integer, param6: globalAndroid.graphics.ColorSpace): com.facebook.imagepipeline.transcoder.ImageTranscodeResult;
						canResize(param0: com.facebook.imagepipeline.image.EncodedImage, param1: com.facebook.imagepipeline.common.RotationOptions, param2: com.facebook.imagepipeline.common.ResizeOptions): boolean;
						canTranscode(param0: com.facebook.imageformat.ImageFormat): boolean;
						getIdentifier(): string;
					});
					public constructor();
					public transcode(param0: com.facebook.imagepipeline.image.EncodedImage, param1: java.io.OutputStream, param2: com.facebook.imagepipeline.common.RotationOptions, param3: com.facebook.imagepipeline.common.ResizeOptions, param4: com.facebook.imageformat.ImageFormat, param5: java.lang.Integer, param6: globalAndroid.graphics.ColorSpace): com.facebook.imagepipeline.transcoder.ImageTranscodeResult;
					public canResize(param0: com.facebook.imagepipeline.image.EncodedImage, param1: com.facebook.imagepipeline.common.RotationOptions, param2: com.facebook.imagepipeline.common.ResizeOptions): boolean;
					public getIdentifier(): string;
					public canTranscode(param0: com.facebook.imageformat.ImageFormat): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace transcoder {
				export class ImageTranscoderFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.transcoder.ImageTranscoderFactory>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.transcoder.ImageTranscoderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createImageTranscoder(param0: com.facebook.imageformat.ImageFormat, param1: boolean): com.facebook.imagepipeline.transcoder.ImageTranscoder;
					});
					public constructor();
					public createImageTranscoder(param0: com.facebook.imageformat.ImageFormat, param1: boolean): com.facebook.imagepipeline.transcoder.ImageTranscoder;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace transcoder {
				export class JpegTranscoderUtils {
					public static class: java.lang.Class<com.facebook.imagepipeline.transcoder.JpegTranscoderUtils>;
					public static INSTANCE: com.facebook.imagepipeline.transcoder.JpegTranscoderUtils;
					public static MIN_QUALITY: number; // 0
					public static MAX_QUALITY: number; // 100
					public static MIN_SCALE_NUMERATOR: number; // 1
					public static MAX_SCALE_NUMERATOR: number; // 16
					public static SCALE_DENOMINATOR: number; // 8
					public static INVERTED_EXIF_ORIENTATIONS: com.facebook.common.internal.ImmutableList<java.lang.Integer>;
					public static DEFAULT_JPEG_QUALITY: number; // 85
					public static calculateDownsampleNumerator(downsampleRatio: number): number;
					public static getTransformationMatrix(exifOrientation: com.facebook.imagepipeline.image.EncodedImage, rotationAngle: com.facebook.imagepipeline.common.RotationOptions): globalAndroid.graphics.Matrix;
					public static isRotationAngleAllowed(degrees: number): boolean;
					public static getRotationAngle(rotationFromMetadata: com.facebook.imagepipeline.common.RotationOptions, rotationOptions: com.facebook.imagepipeline.image.EncodedImage): number;
					public static determineResizeRatio(widthRatio: com.facebook.imagepipeline.common.ResizeOptions, heightRatio: number, ratio: number): number;
					public static roundNumerator(maxRatio: number, roundUpFraction: number): number;
					public static getForceRotatedInvertedExifOrientation(requireJpegTranscoderUtils$getForceRotatedInvertedExifOrientation$1: com.facebook.imagepipeline.common.RotationOptions, exifOrientation: com.facebook.imagepipeline.image.EncodedImage): number;
					public static isExifOrientationAllowed(exifOrientation: number): boolean;
					public static getSoftwareNumerator(rotationAngle: com.facebook.imagepipeline.common.RotationOptions, exifOrientation: com.facebook.imagepipeline.common.ResizeOptions, swapDimensions: com.facebook.imagepipeline.image.EncodedImage, widthAfterRotation: boolean): number;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace transcoder {
				export class MultiImageTranscoderFactory extends com.facebook.imagepipeline.transcoder.ImageTranscoderFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.transcoder.MultiImageTranscoderFactory>;
					public createImageTranscoder(param0: com.facebook.imageformat.ImageFormat, param1: boolean): com.facebook.imagepipeline.transcoder.ImageTranscoder;
					public constructor(maxBitmapSize: number, useDownSamplingRatio: boolean, primaryImageTranscoderFactory: com.facebook.imagepipeline.transcoder.ImageTranscoderFactory, imageTranscoderType: java.lang.Integer, ensureTranscoderLibraryLoaded: boolean);
					public createImageTranscoder(this_: com.facebook.imageformat.ImageFormat, imageFormat: boolean): com.facebook.imagepipeline.transcoder.ImageTranscoder;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace transcoder {
				export class SimpleImageTranscoder extends com.facebook.imagepipeline.transcoder.ImageTranscoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.transcoder.SimpleImageTranscoder>;
					public constructor(resizingEnabled: boolean, maxBitmapSize: number);
					public transcode(oom: com.facebook.imagepipeline.image.EncodedImage, rotationOptions: java.io.OutputStream, quality: com.facebook.imagepipeline.common.RotationOptions, sampleSize: com.facebook.imagepipeline.common.ResizeOptions, options: com.facebook.imageformat.ImageFormat, resizedBitmap: java.lang.Integer, transformationMatrix: globalAndroid.graphics.ColorSpace): com.facebook.imagepipeline.transcoder.ImageTranscodeResult;
					public canTranscode(imageFormat: com.facebook.imageformat.ImageFormat): boolean;
					public transcode(param0: com.facebook.imagepipeline.image.EncodedImage, param1: java.io.OutputStream, param2: com.facebook.imagepipeline.common.RotationOptions, param3: com.facebook.imagepipeline.common.ResizeOptions, param4: com.facebook.imageformat.ImageFormat, param5: java.lang.Integer, param6: globalAndroid.graphics.ColorSpace): com.facebook.imagepipeline.transcoder.ImageTranscodeResult;
					public canResize(param0: com.facebook.imagepipeline.image.EncodedImage, param1: com.facebook.imagepipeline.common.RotationOptions, param2: com.facebook.imagepipeline.common.ResizeOptions): boolean;
					public getIdentifier(): string;
					public canResize(this_: com.facebook.imagepipeline.image.EncodedImage, encodedImage: com.facebook.imagepipeline.common.RotationOptions, rotationOptions: com.facebook.imagepipeline.common.ResizeOptions): boolean;
					public canTranscode(param0: com.facebook.imageformat.ImageFormat): boolean;
				}
				export namespace SimpleImageTranscoder {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.transcoder.SimpleImageTranscoder.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace transcoder {
				export class SimpleImageTranscoderFactory extends com.facebook.imagepipeline.transcoder.ImageTranscoderFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.transcoder.SimpleImageTranscoderFactory>;
					public createImageTranscoder(param0: com.facebook.imageformat.ImageFormat, param1: boolean): com.facebook.imagepipeline.transcoder.ImageTranscoder;
					public createImageTranscoder(imageFormat: com.facebook.imageformat.ImageFormat, isResizingEnabled: boolean): com.facebook.imagepipeline.transcoder.ImageTranscoder;
					public constructor(maxBitmapSize: number);
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace transcoder {
				export class TranscodeStatus {
					public static class: java.lang.Class<com.facebook.imagepipeline.transcoder.TranscodeStatus>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.transcoder.TranscodeStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						"<clinit>"(): void;
					});
					public constructor();
					public static TRANSCODING_ERROR: number; // 2
					public static TRANSCODING_NO_RESIZING: number; // 1
					public static TRANSCODING_SUCCESS: number; // 0
				}
				export namespace TranscodeStatus {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.transcoder.TranscodeStatus.Companion>;
						public static TRANSCODING_SUCCESS: number; // 0
						public static TRANSCODING_NO_RESIZING: number; // 1
						public static TRANSCODING_ERROR: number; // 2
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace transformation {
				export class BitmapTransformation {
					public static class: java.lang.Class<com.facebook.imagepipeline.transformation.BitmapTransformation>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.transformation.BitmapTransformation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						transform(param0: globalAndroid.graphics.Bitmap): void;
						modifiesTransparency(): boolean;
					});
					public constructor();
					public modifiesTransparency(): boolean;
					public transform(param0: globalAndroid.graphics.Bitmap): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace transformation {
				export class CircularTransformation {
					public static class: java.lang.Class<com.facebook.imagepipeline.transformation.CircularTransformation>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.transformation.CircularTransformation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export namespace facebook {
		export namespace imagepipeline {
			export namespace transformation {
				export class TransformationUtils {
					public static class: java.lang.Class<com.facebook.imagepipeline.transformation.TransformationUtils>;
					public static INSTANCE: com.facebook.imagepipeline.transformation.TransformationUtils;
					public static maybeApplyTransformation(bitmap: com.facebook.imagepipeline.transformation.BitmapTransformation, transformation: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace xml {
				export class XmlDrawableFactory extends com.facebook.imagepipeline.drawable.DrawableFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.xml.XmlDrawableFactory>;
					public createDrawable(image: com.facebook.imagepipeline.image.CloseableImage): globalAndroid.graphics.drawable.Drawable;
					public constructor();
					public supportsImageType(image: com.facebook.imagepipeline.image.CloseableImage): boolean;
					public createDrawable(param0: com.facebook.imagepipeline.image.CloseableImage): globalAndroid.graphics.drawable.Drawable;
					public supportsImageType(param0: com.facebook.imagepipeline.image.CloseableImage): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imagepipeline {
			export namespace xml {
				export class XmlFormatDecoder extends com.facebook.imagepipeline.decoder.ImageDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.xml.XmlFormatDecoder>;
					public constructor(resources: globalAndroid.content.res.Resources);
					public decode(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number, param2: com.facebook.imagepipeline.image.QualityInfo, param3: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableImage;
					public decode(it: com.facebook.imagepipeline.image.EncodedImage, xmlResourceName: number, xmlResourceId: com.facebook.imagepipeline.image.QualityInfo, drawable: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableImage;
				}
				export namespace XmlFormatDecoder {
					export class Companion {
						public static class: java.lang.Class<com.facebook.imagepipeline.xml.XmlFormatDecoder.Companion>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imageutils {
			export class BitmapUtil {
				public static class: java.lang.Class<com.facebook.imageutils.BitmapUtil>;
				public static INSTANCE: com.facebook.imageutils.BitmapUtil;
				public static ALPHA_8_BYTES_PER_PIXEL: number; // 1
				public static ARGB_4444_BYTES_PER_PIXEL: number; // 2
				public static ARGB_8888_BYTES_PER_PIXEL: number; // 4
				public static RGB_565_BYTES_PER_PIXEL: number; // 2
				public static RGBA_F16_BYTES_PER_PIXEL: number; // 8
				public static RGBA_1010102_BYTES_PER_PIXEL: number; // 4
				public static MAX_BITMAP_DIMENSION: number; // 2048.0
				public static getSizeInByteForBitmap(requireBitmapUtil$getSizeInByteForBitmap$1: number, requireBitmapUtil$getSizeInByteForBitmap$2: number, checkBitmapUtil$getSizeInByteForBitmap$3: globalAndroid.graphics.Bitmap.Config): number;
				public static decodeDimensions(bytes: androidNative.Array<number>): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
				public static setFixDecodeDrmImageCrash(fixDecodeDrmImageCrash: boolean): void;
				public static getSizeInBytes(bitmap: globalAndroid.graphics.Bitmap): number;
				public static setUseDecodeBufferHelper(useDecodeBufferHelper: boolean): void;
				public static decodeDimensionsAndColorSpace(colorSpace: java.io.InputStream): com.facebook.imageutils.ImageMetaData;
				public static decodeDimensions(options: globalAndroid.net.Uri): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
				public static getPixelSizeForBitmapConfig(bitmapConfig: globalAndroid.graphics.Bitmap.Config): number;
				public static decodeDimensions(byteBuffer: java.io.InputStream): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
				public decodeStreamInternal(this_: java.io.InputStream, inputStream: globalAndroid.graphics.Rect, outPadding: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
			}
			export namespace BitmapUtil {
				export class WhenMappings {
					public static class: java.lang.Class<com.facebook.imageutils.BitmapUtil.WhenMappings>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imageutils {
			export class HeifExifUtil {
				public static class: java.lang.Class<com.facebook.imageutils.HeifExifUtil>;
				public static INSTANCE: com.facebook.imageutils.HeifExifUtil;
				public static getOrientation(exifInterface: java.io.InputStream): number;
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imageutils {
			export class ImageMetaData {
				public static class: java.lang.Class<com.facebook.imageutils.ImageMetaData>;
				public getDimensions(): any;
				public getColorSpace(): globalAndroid.graphics.ColorSpace;
				public constructor(width: number, height: number, colorSpace: globalAndroid.graphics.ColorSpace);
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imageutils {
			export class JfifUtil {
				public static class: java.lang.Class<com.facebook.imageutils.JfifUtil>;
				public static INSTANCE: com.facebook.imageutils.JfifUtil;
				public static MARKER_FIRST_BYTE: number; // 255
				public static MARKER_ESCAPE_BYTE: number; // 0
				public static MARKER_SOI: number; // 216
				public static MARKER_TEM: number; // 1
				public static MARKER_EOI: number; // 217
				public static MARKER_SOS: number; // 218
				public static MARKER_APP1: number; // 225
				public static MARKER_SOFn: number; // 192
				public static MARKER_RST0: number; // 208
				public static MARKER_RST7: number; // 215
				public static APP1_EXIF_MAGIC: number; // 1165519206
				public static getOrientation(length: java.io.InputStream): number;
				public static moveToMarker(marker: java.io.InputStream, length: number): boolean;
				public static getOrientation(jpeg: androidNative.Array<number>): number;
				public static getAutoRotateAngleFromOrientation(orientation: number): number;
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imageutils {
			export class StreamProcessor {
				public static class: java.lang.Class<com.facebook.imageutils.StreamProcessor>;
				public static INSTANCE: com.facebook.imageutils.StreamProcessor;
				public static readPackedInt(b: java.io.InputStream, i: number, value: boolean): number;
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imageutils {
			export class TiffUtil {
				public static class: java.lang.Class<com.facebook.imageutils.TiffUtil>;
				public static INSTANCE: com.facebook.imageutils.TiffUtil;
				public static TIFF_BYTE_ORDER_BIG_END: number; // 1296891946
				public static TIFF_BYTE_ORDER_LITTLE_END: number; // 1229531648
				public static TIFF_TAG_ORIENTATION: number; // 274
				public static TIFF_TYPE_SHORT: number; // 3
				public static readOrientationFromTIFF(tiffHeader: java.io.InputStream, remainingLength: number): number;
				public static getAutoRotateAngleFromOrientation(orientation: number): number;
			}
			export namespace TiffUtil {
				export class TiffHeader {
					public static class: java.lang.Class<com.facebook.imageutils.TiffUtil.TiffHeader>;
					public getFirstIfdOffset(): number;
					public setFirstIfdOffset(set: number): void;
					public constructor();
					public isLittleEndian(): boolean;
					public getByteOrder(): number;
					public setLittleEndian(set: boolean): void;
					public setByteOrder(set: number): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace facebook {
		export namespace imageutils {
			export class WebpUtil {
				public static class: java.lang.Class<com.facebook.imageutils.WebpUtil>;
				public static INSTANCE: com.facebook.imageutils.WebpUtil;
				public static get2BytesAsInt(byte1: java.io.InputStream): number;
				public static getSize(e: java.io.InputStream): any;
			}
		}
	}
}

//Generics information:
//com.facebook.fresco.ui.common.BaseControllerListener2:1
//com.facebook.fresco.ui.common.ControllerListener2:1
//com.facebook.fresco.ui.common.ForwardingControllerListener2:1
//com.facebook.fresco.ui.common.OnDrawControllerListener:1
//com.facebook.imagepipeline.cache.AbstractAdaptiveCountingMemoryCache:2
//com.facebook.imagepipeline.cache.AbstractAdaptiveCountingMemoryCache.IntMapArrayList:1
//com.facebook.imagepipeline.cache.BoundedLinkedHashSet:1
//com.facebook.imagepipeline.cache.CountingLruMap:2
//com.facebook.imagepipeline.cache.CountingMemoryCache:2
//com.facebook.imagepipeline.cache.CountingMemoryCache.Entry:2
//com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver:1
//com.facebook.imagepipeline.cache.CountingMemoryCacheInspector:2
//com.facebook.imagepipeline.cache.CountingMemoryCacheInspector.DumpInfo:2
//com.facebook.imagepipeline.cache.CountingMemoryCacheInspector.DumpInfoEntry:2
//com.facebook.imagepipeline.cache.InstrumentedMemoryCache:2
//com.facebook.imagepipeline.cache.LruCountingMemoryCache:2
//com.facebook.imagepipeline.cache.MemoryCache:2
//com.facebook.imagepipeline.cache.MemoryCacheTracker:1
//com.facebook.imagepipeline.cache.ValueDescriptor:1
//com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder:1
//com.facebook.imagepipeline.datasource.AbstractProducerToDataSourceAdapter:1
//com.facebook.imagepipeline.datasource.CloseableProducerToDataSourceAdapter:1
//com.facebook.imagepipeline.datasource.ListDataSource:1
//com.facebook.imagepipeline.datasource.ProducerToDataSourceAdapter:1
//com.facebook.imagepipeline.datasource.SettableDataSource:1
//com.facebook.imagepipeline.memory.BasePool:1
//com.facebook.imagepipeline.memory.Bucket:1
//com.facebook.imagepipeline.memory.BucketMap:1
//com.facebook.imagepipeline.memory.BucketMap.LinkedEntry:1
//com.facebook.imagepipeline.memory.LruBucketsPoolBackend:1
//com.facebook.imagepipeline.memory.OOMSoftReferenceBucket:1
//com.facebook.imagepipeline.memory.PoolBackend:1
//com.facebook.imagepipeline.producers.BaseConsumer:1
//com.facebook.imagepipeline.producers.BaseNetworkFetcher:1
//com.facebook.imagepipeline.producers.Consumer:1
//com.facebook.imagepipeline.producers.DelegatingConsumer:2
//com.facebook.imagepipeline.producers.MultiplexProducer:2
//com.facebook.imagepipeline.producers.NetworkFetcher:1
//com.facebook.imagepipeline.producers.PriorityStarvingThrottlingProducer:1
//com.facebook.imagepipeline.producers.PriorityStarvingThrottlingProducer.Item:1
//com.facebook.imagepipeline.producers.PriorityStarvingThrottlingProducer.PriorityComparator:1
//com.facebook.imagepipeline.producers.Producer:1
//com.facebook.imagepipeline.producers.StatefulProducerRunnable:1
//com.facebook.imagepipeline.producers.SwallowResultProducer:1
//com.facebook.imagepipeline.producers.ThreadHandoffProducer:1
//com.facebook.imagepipeline.producers.ThrottlingProducer:1
//com.facebook.imagepipeline.producers.ThumbnailProducer:1



/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module facebook {
		export module drawee {
			export module components {
				export abstract class DeferredReleaser {
					public static class: java.lang.Class<com.facebook.drawee.components.DeferredReleaser>;
					public constructor();
					public scheduleDeferredRelease(param0: com.facebook.drawee.components.DeferredReleaser.Releasable): void;
					public static getInstance(): com.facebook.drawee.components.DeferredReleaser;
					public cancelDeferredRelease(param0: com.facebook.drawee.components.DeferredReleaser.Releasable): void;
				}
				export module DeferredReleaser {
					export class Releasable {
						public static class: java.lang.Class<com.facebook.drawee.components.DeferredReleaser.Releasable>;
						/**
						 * Constructs a new instance of the com.facebook.drawee.components.DeferredReleaser$Releasable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							release(): void;
						});
						public constructor();
						public release(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module components {
				export class DeferredReleaserConcurrentImpl extends com.facebook.drawee.components.DeferredReleaser {
					public static class: java.lang.Class<com.facebook.drawee.components.DeferredReleaserConcurrentImpl>;
					public cancelDeferredRelease(releasable: com.facebook.drawee.components.DeferredReleaser.Releasable): void;
					public scheduleDeferredRelease(this_: com.facebook.drawee.components.DeferredReleaser.Releasable): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module components {
				export class DraweeEventTracker {
					public static class: java.lang.Class<com.facebook.drawee.components.DraweeEventTracker>;
					public toString(): string;
					public static newInstance(): com.facebook.drawee.components.DraweeEventTracker;
					public static disable(): void;
					public recordEvent(event: com.facebook.drawee.components.DraweeEventTracker.Event): void;
				}
				export module DraweeEventTracker {
					export class Event {
						public static class: java.lang.Class<com.facebook.drawee.components.DraweeEventTracker.Event>;
						public static ON_SET_HIERARCHY: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_CLEAR_HIERARCHY: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_SET_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_CLEAR_OLD_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_CLEAR_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_INIT_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_ATTACH_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DETACH_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_RELEASE_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DATASOURCE_SUBMIT: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DATASOURCE_RESULT: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DATASOURCE_RESULT_INT: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DATASOURCE_FAILURE: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DATASOURCE_FAILURE_INT: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_HOLDER_ATTACH: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_HOLDER_DETACH: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DRAWABLE_SHOW: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DRAWABLE_HIDE: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_ACTIVITY_START: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_ACTIVITY_STOP: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_RUN_CLEAR_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_SCHEDULE_CLEAR_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_SAME_CONTROLLER_SKIPPED: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_SUBMIT_CACHE_HIT: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static valueOf(name: string): com.facebook.drawee.components.DraweeEventTracker.Event;
						public static values(): androidNative.Array<com.facebook.drawee.components.DraweeEventTracker.Event>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module components {
				export class RetryManager {
					public static class: java.lang.Class<com.facebook.drawee.components.RetryManager>;
					public reset(): void;
					public static newInstance(): com.facebook.drawee.components.RetryManager;
					public constructor();
					public setMaxTapToRetryAttemps(maxTapToRetryAttemps: number): void;
					public shouldRetryOnTap(): boolean;
					public setTapToRetryEnabled(tapToRetryEnabled: boolean): void;
					public init(): void;
					public notifyTapToRetry(): void;
					public isTapToRetryEnabled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module controller {
				export abstract class AbstractDraweeController<T, INFO>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.controller.AbstractDraweeController<any,any>>;
					public mControllerListener: com.facebook.drawee.controller.ControllerListener<INFO>;
					public mControllerListener2: com.facebook.fresco.ui.common.ForwardingControllerListener2<INFO>;
					public mLegacyOnFadeListener: com.facebook.fresco.ui.common.LegacyOnFadeListener;
					public mDrawable: globalAndroid.graphics.drawable.Drawable;
					public getId(): string;
					public getControllerListener2(): com.facebook.fresco.ui.common.ControllerListener2<INFO>;
					public getControllerListener(): com.facebook.drawee.controller.ControllerListener<INFO>;
					public getContentDescription(): string;
					public getControllerOverlay(): globalAndroid.graphics.drawable.Drawable;
					public setContentDescription(contentDescription: string): void;
					public reportSubmit(dataSource: com.facebook.datasource.DataSource<T>, info: INFO): void;
					public getMainUri(): globalAndroid.net.Uri;
					public removeControllerListener(controllerListener: com.facebook.drawee.controller.ControllerListener<any>): void;
					public onImageLoadedFromCacheImmediately(id: string, cachedImage: T): void;
					public getLoggingListener(): com.facebook.fresco.ui.common.LegacyOnFadeListener;
					public isLogWithHighSamplingRate(): boolean;
					public release(): void;
					public initialize(id: string, callerContext: any): void;
					public getGestureDetector(): com.facebook.drawee.gestures.GestureDetector;
					public submitRequest(): void;
					public releaseDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public addControllerListener2(controllerListener2: com.facebook.fresco.ui.common.ControllerListener2<INFO>): void;
					public getImageClass(image: T): string;
					public setGestureDetector(gestureDetector: com.facebook.drawee.gestures.GestureDetector): void;
					public getAnimatable(): globalAndroid.graphics.drawable.Animatable;
					public createDrawable(param0: T): globalAndroid.graphics.drawable.Drawable;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public isSameImageRequest(param0: com.facebook.drawee.interfaces.DraweeController): boolean;
					public getCallerContext(): any;
					public getCachedImage(): T;
					public getImageInfo(param0: T): INFO;
					public setLoggingListener(legacyOnFadeListener: com.facebook.fresco.ui.common.LegacyOnFadeListener): void;
					public getRetryManager(): com.facebook.drawee.components.RetryManager;
					public addControllerListener(controllerListener: com.facebook.drawee.controller.ControllerListener<any>): void;
					public setHierarchy(param0: com.facebook.drawee.interfaces.DraweeHierarchy): void;
					public setHierarchy(hierarchy: com.facebook.drawee.interfaces.DraweeHierarchy): void;
					public setControllerOverlay(controllerOverlay: globalAndroid.graphics.drawable.Drawable): void;
					public setContentDescription(param0: string): void;
					public onAttach(): void;
					public getHierarchy(): com.facebook.drawee.interfaces.DraweeHierarchy;
					public removeControllerListener2(controllerListener2: com.facebook.fresco.ui.common.ControllerListener2<INFO>): void;
					public constructor(deferredReleaser: com.facebook.drawee.components.DeferredReleaser, uiThreadImmediateExecutor: java.util.concurrent.Executor, id: string, callerContext: any);
					public getImageHash(image: T): number;
					public toString(): string;
					public onClick(): boolean;
					public getDataSource(): com.facebook.datasource.DataSource<T>;
					public onDetach(): void;
					public onViewportVisibilityHint(param0: boolean): void;
					public shouldHandleGesture(): boolean;
					public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
					public obtainExtrasFromImage(param0: INFO): java.util.Map<string,any>;
					public setRetainImageOnFailure(enabled: boolean): void;
					public setControllerViewportVisibilityListener(controllerViewportVisibilityListener: com.facebook.drawee.controller.ControllerViewportVisibilityListener): void;
					public releaseImage(param0: T): void;
					public setLogWithHighSamplingRate(logWithHighSamplingRate: boolean): void;
					public onViewportVisibilityHint(isVisibleInViewportHint: boolean): void;
				}
				export module AbstractDraweeController {
					export class InternalForwardingListener<INFO>  extends com.facebook.drawee.controller.ForwardingControllerListener<any> {
						public static class: java.lang.Class<com.facebook.drawee.controller.AbstractDraweeController.InternalForwardingListener<any>>;
						public onFinalImageSet(param0: string, param1: any, param2: globalAndroid.graphics.drawable.Animatable): void;
						public onRelease(param0: string): void;
						public onIntermediateImageSet(param0: string, param1: any): void;
						public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
						public static createInternal(listener1: com.facebook.drawee.controller.ControllerListener<any>, listener2: com.facebook.drawee.controller.ControllerListener<any>): com.facebook.drawee.controller.AbstractDraweeController.InternalForwardingListener<any>;
						public onFailure(param0: string, param1: java.lang.Throwable): void;
						public onSubmit(param0: string, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module controller {
				export abstract class AbstractDraweeControllerBuilder<BUILDER, REQUEST, IMAGE, INFO>  extends com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder {
					public static class: java.lang.Class<com.facebook.drawee.controller.AbstractDraweeControllerBuilder<any,any,any,any>>;
					public getRetainImageOnFailure(): boolean;
					public setLowResImageRequest(lowResImageRequest: any): any;
					public getAutoPlayAnimations(): boolean;
					public getContentDescription(): string;
					public maybeBuildAndSetGestureDetector(controller: com.facebook.drawee.controller.AbstractDraweeController<any,any>): void;
					public build(): com.facebook.drawee.controller.AbstractDraweeController<any,any>;
					public setCallerContext(callerContext: any): any;
					public maybeBuildAndSetRetryManager(controller: com.facebook.drawee.controller.AbstractDraweeController<any,any>): void;
					public getContext(): globalAndroid.content.Context;
					public setOldController(oldController: com.facebook.drawee.interfaces.DraweeController): any;
					public reset(): any;
					public getLoggingListener(): com.facebook.fresco.ui.common.LegacyOnFadeListener;
					public setDataSourceSupplier(dataSourceSupplier: com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>): any;
					public constructor(context: globalAndroid.content.Context, boundControllerListeners: java.util.Set<com.facebook.drawee.controller.ControllerListener<any>>, boundControllerListeners2: java.util.Set<com.facebook.fresco.ui.common.ControllerListener2>);
					public setRetainImageOnFailure(enabled: boolean): any;
					public getFirstAvailableDataSourceSupplier(i: com.facebook.drawee.interfaces.DraweeController, this_: string, controller: androidNative.Array<any>, controllerId: boolean): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>;
					public isLogWithHighSamplingRate(): boolean;
					public getOldController(): com.facebook.drawee.interfaces.DraweeController;
					public setLogWithHighSamplingRate(logWithHighSamplingRate: boolean): any;
					public setLoggingListener(legacyOnFadeListener: com.facebook.fresco.ui.common.LegacyOnFadeListener): any;
					public getThis(): any;
					public setAutoPlayAnimations(enabled: boolean): any;
					public buildController(): com.facebook.drawee.controller.AbstractDraweeController<any,any>;
					public getControllerViewportVisibilityListener(): com.facebook.drawee.controller.ControllerViewportVisibilityListener;
					public getDataSourceForRequest(param0: com.facebook.drawee.interfaces.DraweeController, param1: string, param2: any, param3: any, param4: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel): com.facebook.datasource.DataSource<any>;
					public getCallerContext(): any;
					public getDataSourceSupplier(): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>;
					public obtainDataSourceSupplier(this_: com.facebook.drawee.interfaces.DraweeController, controller: string): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>;
					public maybeAttachListeners(listener: com.facebook.drawee.controller.AbstractDraweeController<any,any>): void;
					public setUri(param0: globalAndroid.net.Uri): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
					public setControllerListener(controllerListener: com.facebook.drawee.controller.ControllerListener<any>): any;
					public getDataSourceSupplierForRequest(controller: com.facebook.drawee.interfaces.DraweeController, controllerId: string, imageRequest: any): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>;
					public getDataSourceSupplierForRequest(controller: com.facebook.drawee.interfaces.DraweeController, controllerId: string, imageRequest: any, cacheLevel: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>;
					public validate(): void;
					public getImageRequest(): any;
					public getControllerListener(): com.facebook.drawee.controller.ControllerListener<any>;
					public setImageRequest(imageRequest: any): any;
					public setContentDescription(contentDescription: string): any;
					public setFirstAvailableImageRequests(firstAvailableImageRequests: androidNative.Array<any>): any;
					public setFirstAvailableImageRequests(firstAvailableImageRequests: androidNative.Array<any>, tryCacheOnlyFirst: boolean): any;
					public setOldController(param0: com.facebook.drawee.interfaces.DraweeController): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
					public obtainController(): com.facebook.drawee.controller.AbstractDraweeController<any,any>;
					public setUri(param0: string): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
					public getFirstAvailableImageRequests(): androidNative.Array<any>;
					public setCallerContext(param0: any): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
					public build(): com.facebook.drawee.interfaces.DraweeController;
					public getLowResImageRequest(): any;
					public setControllerViewportVisibilityListener(controllerViewportVisibilityListener: com.facebook.drawee.controller.ControllerViewportVisibilityListener): any;
					public static generateUniqueControllerId(): string;
					public setTapToRetryEnabled(enabled: boolean): any;
					public getTapToRetryEnabled(): boolean;
				}
				export module AbstractDraweeControllerBuilder {
					export class CacheLevel {
						public static class: java.lang.Class<com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel>;
						public static FULL_FETCH: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel;
						public static DISK_CACHE: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel;
						public static BITMAP_MEMORY_CACHE: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel;
						public static values(): androidNative.Array<com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel>;
						public static valueOf(name: string): com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module controller {
				export class BaseControllerListener<INFO>  extends com.facebook.drawee.controller.ControllerListener<any> {
					public static class: java.lang.Class<com.facebook.drawee.controller.BaseControllerListener<any>>;
					public onFinalImageSet(param0: string, param1: any, param2: globalAndroid.graphics.drawable.Animatable): void;
					public onIntermediateImageSet(param0: string, param1: any): void;
					public onSubmit(id: string, callerContext: any): void;
					public onRelease(param0: string): void;
					public onFailure(param0: string, param1: java.lang.Throwable): void;
					public onSubmit(param0: string, param1: any): void;
					public onIntermediateImageSet(id: string, imageInfo: any): void;
					public onRelease(id: string): void;
					public constructor();
					public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
					public static getNoOpListener(): com.facebook.drawee.controller.ControllerListener<any>;
					public onFinalImageSet(id: string, imageInfo: any, animatable: globalAndroid.graphics.drawable.Animatable): void;
					public onIntermediateImageFailed(id: string, throwable: java.lang.Throwable): void;
					public onFailure(id: string, throwable: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module controller {
				export class ControllerListener<INFO>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.controller.ControllerListener<any>>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.controller.ControllerListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSubmit(param0: string, param1: any): void;
						onFinalImageSet(param0: string, param1: INFO, param2: globalAndroid.graphics.drawable.Animatable): void;
						onIntermediateImageSet(param0: string, param1: INFO): void;
						onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
						onFailure(param0: string, param1: java.lang.Throwable): void;
						onRelease(param0: string): void;
					});
					public constructor();
					public onRelease(param0: string): void;
					public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
					public onFailure(param0: string, param1: java.lang.Throwable): void;
					public onFinalImageSet(param0: string, param1: INFO, param2: globalAndroid.graphics.drawable.Animatable): void;
					public onIntermediateImageSet(param0: string, param1: INFO): void;
					public onSubmit(param0: string, param1: any): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module controller {
				export class ControllerViewportVisibilityListener {
					public static class: java.lang.Class<com.facebook.drawee.controller.ControllerViewportVisibilityListener>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.controller.ControllerViewportVisibilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDraweeViewportEntry(param0: string): void;
						onDraweeViewportExit(param0: string): void;
					});
					public constructor();
					public onDraweeViewportEntry(param0: string): void;
					public onDraweeViewportExit(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module controller {
				export class ForwardingControllerListener<INFO>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.controller.ForwardingControllerListener<any>>;
					public clearListeners(): void;
					public static of(listener: com.facebook.drawee.controller.ControllerListener<any>): com.facebook.drawee.controller.ForwardingControllerListener<any>;
					public onRelease(param0: string): void;
					public removeListener(listener: com.facebook.drawee.controller.ControllerListener<any>): void;
					public static create(): com.facebook.drawee.controller.ForwardingControllerListener<any>;
					public onFinalImageSet(exception: string, i: INFO, this_: globalAndroid.graphics.drawable.Animatable): void;
					public static of(listener1: com.facebook.drawee.controller.ControllerListener<any>, listener2: com.facebook.drawee.controller.ControllerListener<any>): com.facebook.drawee.controller.ForwardingControllerListener<any>;
					public onFailure(param0: string, param1: java.lang.Throwable): void;
					public onFinalImageSet(param0: string, param1: INFO, param2: globalAndroid.graphics.drawable.Animatable): void;
					public onIntermediateImageSet(param0: string, param1: INFO): void;
					public onSubmit(param0: string, param1: any): void;
					public onRelease(exception: string): void;
					public onFailure(exception: string, i: java.lang.Throwable): void;
					public onIntermediateImageFailed(exception: string, i: java.lang.Throwable): void;
					public constructor();
					public addListener(listener: com.facebook.drawee.controller.ControllerListener<any>): void;
					public onSubmit(exception: string, i: any): void;
					public onImageDrawn(exception: string, i: INFO, this_: com.facebook.fresco.ui.common.DimensionsInfo): void;
					public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
					public onIntermediateImageSet(exception: string, i: INFO): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module debug {
				export class DebugControllerOverlayDrawable implements com.facebook.drawee.debug.listener.ImageLoadingTimeListener {
					public static class: java.lang.Class<com.facebook.drawee.debug.DebugControllerOverlayDrawable>;
					public reset(): void;
					public draw(this_: globalAndroid.graphics.Canvas): void;
					public setTextGravity(textGravity: number): void;
					public setOrigin(text: string, color: number): void;
					public onFinalImageSet(param0: number): void;
					public setAnimationInfo(frameCount: number, loopCount: number): void;
					public setOverlayColor(overlayColor: number): void;
					public addAdditionalData(key: string, value: string): void;
					public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
					public setImageSize(imageSizeBytes: number): void;
					public constructor();
					public setDimensions(widthPx: number, heightPx: number): void;
					public setAlpha(alpha: number): void;
					public setColorFilter(cf: globalAndroid.graphics.ColorFilter): void;
					public onFinalImageSet(finalImageTimeMs: number): void;
					public setScaleType(scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setControllerId(controllerId: string): void;
					public setImageFormat(imageFormat: string): void;
					public setImageId(imageId: string): void;
					public getOpacity(): number;
					public setFinalImageTimeMs(finalImageTimeMs: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module debug {
				export module listener {
					export class ImageLoadingTimeControllerListener extends com.facebook.drawee.controller.BaseControllerListener<any> {
						public static class: java.lang.Class<com.facebook.drawee.debug.listener.ImageLoadingTimeControllerListener>;
						public onFinalImageSet(param0: string, param1: any, param2: globalAndroid.graphics.drawable.Animatable): void;
						public onRelease(param0: string): void;
						public constructor();
						public onIntermediateImageSet(param0: string, param1: any): void;
						public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
						public onFailure(param0: string, param1: java.lang.Throwable): void;
						public onFinalImageSet(id: string, imageInfo: any, animatable: globalAndroid.graphics.drawable.Animatable): void;
						public onSubmit(id: string, callerContext: any): void;
						public onSubmit(param0: string, param1: any): void;
						public constructor(imageLoadingTimeListener: com.facebook.drawee.debug.listener.ImageLoadingTimeListener);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module debug {
				export module listener {
					export class ImageLoadingTimeListener {
						public static class: java.lang.Class<com.facebook.drawee.debug.listener.ImageLoadingTimeListener>;
						/**
						 * Constructs a new instance of the com.facebook.drawee.debug.listener.ImageLoadingTimeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFinalImageSet(param0: number): void;
						});
						public constructor();
						public onFinalImageSet(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class ArrayDrawable implements com.facebook.drawee.drawable.TransformCallback, com.facebook.drawee.drawable.TransformAwareDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.ArrayDrawable>;
					public getDrawable(index: number): globalAndroid.graphics.drawable.Drawable;
					public onLevelChange(i: number): boolean;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public isStateful(): boolean;
					public getRootBounds(bounds: globalAndroid.graphics.RectF): void;
					public getIntrinsicWidth(): number;
					public setTransformCallback(transformCallback: com.facebook.drawee.drawable.TransformCallback): void;
					public getPadding(i: globalAndroid.graphics.Rect): boolean;
					public getTransform(transform: globalAndroid.graphics.Matrix): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public setColorFilter(i: globalAndroid.graphics.ColorFilter): void;
					public setDither(i: boolean): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					public getOpacity(): number;
					public setHotspot(i: number, this_: number): void;
					public getNumberOfLayers(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public constructor(this_: androidNative.Array<globalAndroid.graphics.drawable.Drawable>);
					public getIntrinsicHeight(): number;
					public setVisible(i: boolean, this_: boolean): boolean;
					public mutate(): globalAndroid.graphics.drawable.Drawable;
					public draw(i: globalAndroid.graphics.Canvas): void;
					public onStateChange(i: androidNative.Array<number>): boolean;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public invalidateDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public getDrawableParentForIndex(index: number): com.facebook.drawee.drawable.DrawableParent;
					public setDrawable(index: number, drawable: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public onBoundsChange(i: globalAndroid.graphics.Rect): void;
					public setAlpha(i: number): void;
					public setFilterBitmap(i: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class AutoRotateDrawable extends com.facebook.drawee.drawable.ForwardingDrawable implements com.facebook.drawee.drawable.CloneableDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.AutoRotateDrawable>;
					public reset(): void;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public cloneDrawable(): globalAndroid.graphics.drawable.Drawable;
					public run(): void;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public cloneDrawable(): com.facebook.drawee.drawable.AutoRotateDrawable;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable);
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable, interval: number);
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable, interval: number, clockwise: boolean);
					public setClockwise(clockwise: boolean): void;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class CloneableDrawable extends globalAndroid.graphics.drawable.Drawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.CloneableDrawable>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.CloneableDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cloneDrawable(): globalAndroid.graphics.drawable.Drawable;
					});
					public constructor();
					public cloneDrawable(): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class DrawableParent {
					public static class: java.lang.Class<com.facebook.drawee.drawable.DrawableParent>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.DrawableParent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
						getDrawable(): globalAndroid.graphics.drawable.Drawable;
					});
					public constructor();
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class DrawableProperties {
					public static class: java.lang.Class<com.facebook.drawee.drawable.DrawableProperties>;
					public applyTo(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public constructor();
					public setDither(dither: boolean): void;
					public setAlpha(alpha: number): void;
					public setFilterBitmap(filterBitmap: boolean): void;
					public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class DrawableUtils {
					public static class: java.lang.Class<com.facebook.drawee.drawable.DrawableUtils>;
					public static INSTANCE: com.facebook.drawee.drawable.DrawableUtils;
					public static setCallbacks(drawable: globalAndroid.graphics.drawable.Drawable, callback: globalAndroid.graphics.drawable.Drawable.Callback, transformCallback: com.facebook.drawee.drawable.TransformCallback): void;
					public static setDrawableProperties(drawable: globalAndroid.graphics.drawable.Drawable, properties: com.facebook.drawee.drawable.DrawableProperties): void;
					public static getOpacityFromColor(color: number): number;
					public static copyProperties(to: globalAndroid.graphics.drawable.Drawable, from: globalAndroid.graphics.drawable.Drawable): void;
					public static multiplyColorAlpha(clippedAlpha: number, colorAlpha: number): number;
					public static cloneDrawable(drawable: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class FadeDrawable extends com.facebook.drawee.drawable.ArrayDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.FadeDrawable>;
					public static TRANSITION_STARTING: number = 0;
					public static TRANSITION_RUNNING: number = 1;
					public static TRANSITION_NONE: number = 2;
					public invalidateSelf(): void;
					public draw(ratio: globalAndroid.graphics.Canvas): void;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public beginBatchMode(): void;
					public fadeInLayer(index: number): void;
					public setTransitionDuration(durationMs: number): void;
					public getCurrentTimeMs(): number;
					public setOnFadeListener(onFadeListener: com.facebook.fresco.ui.common.OnFadeListener): void;
					public constructor(layers: androidNative.Array<globalAndroid.graphics.drawable.Drawable>, allLayersVisible: boolean, actualImageLayer: number);
					public getTransitionState(): number;
					public getTransitionDuration(): number;
					public fadeOutLayer(index: number): void;
					public constructor(layers: androidNative.Array<globalAndroid.graphics.drawable.Drawable>);
					public finishTransitionImmediately(): void;
					public fadeUpToLayer(index: number): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					public getAlpha(): number;
					public reset(): void;
					public hideLayerImmediately(index: number): void;
					public fadeToLayer(index: number): void;
					public endBatchMode(): void;
					public fadeOutAllLayers(): void;
					public isDefaultLayerIsOn(): boolean;
					public showLayerImmediately(index: number): void;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public setAlpha(alpha: number): void;
					public isLayerOn(index: number): boolean;
					public fadeInAllLayers(): void;
					public setMutateDrawables(mutateDrawables: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class ForwardingDrawable implements com.facebook.drawee.drawable.TransformCallback, com.facebook.drawee.drawable.TransformAwareDrawable, com.facebook.drawee.drawable.DrawableParent {
					public static class: java.lang.Class<com.facebook.drawee.drawable.ForwardingDrawable>;
					public mTransformCallback: com.facebook.drawee.drawable.TransformCallback;
					public setDrawable(newDrawable: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public onLevelChange(level: number): boolean;
					public isStateful(): boolean;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public setDither(dither: boolean): void;
					public getRootBounds(bounds: globalAndroid.graphics.RectF): void;
					public setFilterBitmap(filterBitmap: boolean): void;
					public getIntrinsicWidth(): number;
					public setTransformCallback(transformCallback: com.facebook.drawee.drawable.TransformCallback): void;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public getTransform(transform: globalAndroid.graphics.Matrix): void;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable);
					public onStateChange(state: androidNative.Array<number>): boolean;
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public setHotspot(x: number, y: number): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					public getOpacity(): number;
					public getTransformedBounds(outBounds: globalAndroid.graphics.RectF): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
					public getIntrinsicHeight(): number;
					public setCurrent(newDelegate: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public setVisible(visible: boolean, restart: boolean): boolean;
					public getCurrent(): globalAndroid.graphics.drawable.Drawable;
					public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
					public getPadding(padding: globalAndroid.graphics.Rect): boolean;
					public mutate(): globalAndroid.graphics.drawable.Drawable;
					public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
					public setCurrentWithoutInvalidate(newDelegate: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public getParentTransform(transform: globalAndroid.graphics.Matrix): void;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public invalidateDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setAlpha(alpha: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class InstrumentedDrawable extends com.facebook.drawee.drawable.ForwardingDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.InstrumentedDrawable>;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable);
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable, listener: com.facebook.drawee.drawable.InstrumentedDrawable.Listener);
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					public draw(viewWidth: globalAndroid.graphics.Canvas): void;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
				}
				export module InstrumentedDrawable {
					export class Listener {
						public static class: java.lang.Class<com.facebook.drawee.drawable.InstrumentedDrawable.Listener>;
						/**
						 * Constructs a new instance of the com.facebook.drawee.drawable.InstrumentedDrawable$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							track(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: string): void;
						});
						public constructor();
						public track(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class MatrixDrawable extends com.facebook.drawee.drawable.ForwardingDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.MatrixDrawable>;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public draw(this_: globalAndroid.graphics.Canvas): void;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable, matrix: globalAndroid.graphics.Matrix);
					public getMatrix(): globalAndroid.graphics.Matrix;
					public setCurrent(newDelegate: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public setMatrix(matrix: globalAndroid.graphics.Matrix): void;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
					public getTransform(transform: globalAndroid.graphics.Matrix): void;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable);
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class OrientedDrawable extends com.facebook.drawee.drawable.ForwardingDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.OrientedDrawable>;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable, rotationAngle: number);
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public getIntrinsicHeight(): number;
					public getIntrinsicWidth(): number;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
					public getTransform(transform: globalAndroid.graphics.Matrix): void;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable);
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable, rotationAngle: number, exifOrientation: number);
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class ProgressBarDrawable extends globalAndroid.graphics.drawable.Drawable implements com.facebook.drawee.drawable.CloneableDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.ProgressBarDrawable>;
					public getBarWidth(): number;
					public getHideWhenZero(): boolean;
					public setColor(color: number): void;
					public cloneDrawable(): globalAndroid.graphics.drawable.Drawable;
					public getColor(): number;
					public setPadding(padding: number): void;
					public getIsVertical(): boolean;
					public onLevelChange(level: number): boolean;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public getPadding(padding: globalAndroid.graphics.Rect): boolean;
					public setBarWidth(barWidth: number): void;
					public setHideWhenZero(hideWhenZero: boolean): void;
					public getRadius(): number;
					public setIsVertical(isVertical: boolean): void;
					public constructor();
					public getBackgroundColor(): number;
					public setAlpha(alpha: number): void;
					public setBackgroundColor(backgroundColor: number): void;
					public setRadius(radius: number): void;
					public getOpacity(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class Rounded {
					public static class: java.lang.Class<com.facebook.drawee.drawable.Rounded>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.Rounded interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isCircle(): boolean;
						setCircle(param0: boolean): void;
						setRadius(param0: number): void;
						getRadii(): androidNative.Array<number>;
						setRadii(param0: androidNative.Array<number>): void;
						setBorder(param0: number, param1: number): void;
						getBorderColor(): number;
						getBorderWidth(): number;
						getPadding(): number;
						setPadding(param0: number): void;
						getScaleDownInsideBorders(): boolean;
						setScaleDownInsideBorders(param0: boolean): void;
						getPaintFilterBitmap(): boolean;
						setPaintFilterBitmap(param0: boolean): void;
						setRepeatEdgePixels(param0: boolean): void;
					});
					public constructor();
					public setScaleDownInsideBorders(param0: boolean): void;
					public setBorder(param0: number, param1: number): void;
					public getBorderColor(): number;
					public getRadii(): androidNative.Array<number>;
					public setRadii(param0: androidNative.Array<number>): void;
					public setRepeatEdgePixels(param0: boolean): void;
					public getBorderWidth(): number;
					public isCircle(): boolean;
					public getPadding(): number;
					public setPaintFilterBitmap(param0: boolean): void;
					public setCircle(param0: boolean): void;
					public setPadding(param0: number): void;
					public setRadius(param0: number): void;
					public getPaintFilterBitmap(): boolean;
					public getScaleDownInsideBorders(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class RoundedBitmapDrawable extends com.facebook.drawee.drawable.RoundedDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.RoundedBitmapDrawable>;
					public constructor(res: globalAndroid.content.res.Resources, bitmap: globalAndroid.graphics.Bitmap, paint: globalAndroid.graphics.Paint, repeatEdgePixels: boolean);
					public getBorderColor(): number;
					public static setDefaultRepeatEdgePixels(defaultRepeatEdgePixels: boolean): void;
					public setRadii(param0: androidNative.Array<number>): void;
					public updateTransform(): void;
					public setColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
					public setRepeatEdgePixels(param0: boolean): void;
					public getRepeatEdgePixels(): boolean;
					public getBorderWidth(): number;
					public setCircle(param0: boolean): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					public setScaleDownInsideBorders(param0: boolean): void;
					public static getDefaultRepeatEdgePixels(): boolean;
					public setBorder(param0: number, param1: number): void;
					public draw(this_: globalAndroid.graphics.Canvas): void;
					public getRadii(): androidNative.Array<number>;
					public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
					public getBitmap(): globalAndroid.graphics.Bitmap;
					public getPaint(): globalAndroid.graphics.Paint;
					public constructor(res: globalAndroid.content.res.Resources, bitmap: globalAndroid.graphics.Bitmap, paint: globalAndroid.graphics.Paint);
					public setRepeatEdgePixels(repeatEdgePixels: boolean): void;
					public constructor(res: globalAndroid.content.res.Resources, bitmap: globalAndroid.graphics.Bitmap);
					public isCircle(): boolean;
					public getPadding(): number;
					public setPaintFilterBitmap(param0: boolean): void;
					public setPadding(param0: number): void;
					public setRadius(param0: number): void;
					public getPaintFilterBitmap(): boolean;
					public setAlpha(alpha: number): void;
					public static fromBitmapDrawable(res: globalAndroid.content.res.Resources, bitmapDrawable: globalAndroid.graphics.drawable.BitmapDrawable): com.facebook.drawee.drawable.RoundedBitmapDrawable;
					public getScaleDownInsideBorders(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class RoundedColorDrawable implements com.facebook.drawee.drawable.Rounded {
					public static class: java.lang.Class<com.facebook.drawee.drawable.RoundedColorDrawable>;
					public constructor(radii: androidNative.Array<number>, color: number);
					public setRadii(radii: androidNative.Array<number>): void;
					public setPadding(padding: number): void;
					public getBorderColor(): number;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public setRadii(param0: androidNative.Array<number>): void;
					public setCircle(isCircle: boolean): void;
					public setRepeatEdgePixels(param0: boolean): void;
					public getBorderWidth(): number;
					public setCircle(param0: boolean): void;
					public setBorder(color: number, width: number): void;
					public constructor(radius: number, color: number);
					public setRadius(radius: number): void;
					public getOpacity(): number;
					public setScaleDownInsideBorders(param0: boolean): void;
					public setPaintFilterBitmap(paintFilterBitmap: boolean): void;
					public getAlpha(): number;
					public setBorder(param0: number, param1: number): void;
					public setColor(color: number): void;
					public getColor(): number;
					public constructor(color: number);
					public getRadii(): androidNative.Array<number>;
					public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
					public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
					public setRepeatEdgePixels(repeatEdgePixels: boolean): void;
					public isCircle(): boolean;
					public getPadding(): number;
					public setPaintFilterBitmap(param0: boolean): void;
					public setPadding(param0: number): void;
					public setRadius(param0: number): void;
					public getPaintFilterBitmap(): boolean;
					public setAlpha(alpha: number): void;
					public setScaleDownInsideBorders(scaleDownInsideBorders: boolean): void;
					public static fromColorDrawable(colorDrawable: globalAndroid.graphics.drawable.ColorDrawable): com.facebook.drawee.drawable.RoundedColorDrawable;
					public getScaleDownInsideBorders(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class RoundedCornersDrawable extends com.facebook.drawee.drawable.ForwardingDrawable implements com.facebook.drawee.drawable.Rounded {
					public static class: java.lang.Class<com.facebook.drawee.drawable.RoundedCornersDrawable>;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public setRadii(radii: androidNative.Array<number>): void;
					public setPadding(padding: number): void;
					public getBorderColor(): number;
					public setRadii(param0: androidNative.Array<number>): void;
					public setCircle(isCircle: boolean): void;
					public draw(saveCount: globalAndroid.graphics.Canvas): void;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable);
					public setRepeatEdgePixels(param0: boolean): void;
					public getBorderWidth(): number;
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public setCircle(param0: boolean): void;
					public setBorder(color: number, width: number): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					public setRadius(radius: number): void;
					public setScaleDownInsideBorders(param0: boolean): void;
					public setPaintFilterBitmap(paintFilterBitmap: boolean): void;
					public setBorder(param0: number, param1: number): void;
					public getRadii(): androidNative.Array<number>;
					public getOverlayColor(): number;
					public getPadding(padding: globalAndroid.graphics.Rect): boolean;
					public setOverlayColor(overlayColor: number): void;
					public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
					public setRepeatEdgePixels(repeatEdgePixels: boolean): void;
					public isCircle(): boolean;
					public getPadding(): number;
					public setPaintFilterBitmap(param0: boolean): void;
					public setType(type: com.facebook.drawee.drawable.RoundedCornersDrawable.Type): void;
					public setPadding(param0: number): void;
					public setRadius(param0: number): void;
					public getPaintFilterBitmap(): boolean;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public setScaleDownInsideBorders(scaleDownInsideBorders: boolean): void;
					public getScaleDownInsideBorders(): boolean;
				}
				export module RoundedCornersDrawable {
					export class Type {
						public static class: java.lang.Class<com.facebook.drawee.drawable.RoundedCornersDrawable.Type>;
						public static OVERLAY_COLOR: com.facebook.drawee.drawable.RoundedCornersDrawable.Type;
						public static CLIPPING: com.facebook.drawee.drawable.RoundedCornersDrawable.Type;
						public static valueOf(name: string): com.facebook.drawee.drawable.RoundedCornersDrawable.Type;
						public static values(): androidNative.Array<com.facebook.drawee.drawable.RoundedCornersDrawable.Type>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export abstract class RoundedDrawable implements com.facebook.drawee.drawable.Rounded, com.facebook.drawee.drawable.TransformAwareDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.RoundedDrawable>;
					public mIsCircle: boolean;
					public mRadiiNonZero: boolean;
					public mBorderWidth: number;
					public mPath: globalAndroid.graphics.Path;
					public mIsShaderTransformDirty: boolean;
					public mBorderColor: number;
					public mBorderPath: globalAndroid.graphics.Path;
					public setPadding(padding: number): void;
					public getBorderColor(): number;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public setRadii(param0: androidNative.Array<number>): void;
					public getIntrinsicWidth(): number;
					public setTransformCallback(transformCallback: com.facebook.drawee.drawable.TransformCallback): void;
					public setCircle(isCircle: boolean): void;
					public updateTransform(): void;
					public setColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
					public setRepeatEdgePixels(param0: boolean): void;
					public getBorderWidth(): number;
					public setCircle(param0: boolean): void;
					public getColorFilter(): globalAndroid.graphics.ColorFilter;
					public setRadii(this_: androidNative.Array<number>): void;
					public setBorder(color: number, width: number): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					public setRadius(radius: number): void;
					public getOpacity(): number;
					public setScaleDownInsideBorders(param0: boolean): void;
					public setPaintFilterBitmap(paintFilterBitmap: boolean): void;
					public getAlpha(): number;
					public setBorder(param0: number, param1: number): void;
					public getRadii(): androidNative.Array<number>;
					public getIntrinsicHeight(): number;
					public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
					public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
					public clearColorFilter(): void;
					public setRepeatEdgePixels(repeatEdgePixels: boolean): void;
					public isCircle(): boolean;
					public getPadding(): number;
					public setPaintFilterBitmap(param0: boolean): void;
					public setPadding(param0: number): void;
					public setRadius(param0: number): void;
					public getPaintFilterBitmap(): boolean;
					public setAlpha(alpha: number): void;
					public setScaleDownInsideBorders(scaleDownInsideBorders: boolean): void;
					public updatePath(): void;
					public getScaleDownInsideBorders(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class RoundedNinePatchDrawable extends com.facebook.drawee.drawable.RoundedDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.RoundedNinePatchDrawable>;
					public setScaleDownInsideBorders(param0: boolean): void;
					public setBorder(param0: number, param1: number): void;
					public getBorderColor(): number;
					public getRadii(): androidNative.Array<number>;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public setRadii(param0: androidNative.Array<number>): void;
					public setRepeatEdgePixels(param0: boolean): void;
					public getBorderWidth(): number;
					public constructor(ninePatchDrawable: globalAndroid.graphics.drawable.NinePatchDrawable);
					public isCircle(): boolean;
					public getPadding(): number;
					public setPaintFilterBitmap(param0: boolean): void;
					public setCircle(param0: boolean): void;
					public setPadding(param0: number): void;
					public setRadius(param0: number): void;
					public getPaintFilterBitmap(): boolean;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					public getScaleDownInsideBorders(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class ScaleTypeDrawable extends com.facebook.drawee.drawable.ForwardingDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.ScaleTypeDrawable>;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable, scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType, focusPoint: globalAndroid.graphics.PointF);
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable, scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType);
					public draw(this_: globalAndroid.graphics.Canvas): void;
					public setCurrent(newDelegate: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
					public getTransform(transform: globalAndroid.graphics.Matrix): void;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable);
					public getScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public getFocusPoint(): globalAndroid.graphics.PointF;
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public setFocusPoint(focusPoint: globalAndroid.graphics.PointF): void;
					public setScaleType(scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class TransformAwareDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.TransformAwareDrawable>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.TransformAwareDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					});
					public constructor();
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class TransformCallback {
					public static class: java.lang.Class<com.facebook.drawee.drawable.TransformCallback>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.TransformCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getTransform(param0: globalAndroid.graphics.Matrix): void;
						getRootBounds(param0: globalAndroid.graphics.RectF): void;
					});
					public constructor();
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class VisibilityAwareDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.VisibilityAwareDrawable>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.VisibilityAwareDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setVisibilityCallback(param0: com.facebook.drawee.drawable.VisibilityCallback): void;
					});
					public constructor();
					public setVisibilityCallback(param0: com.facebook.drawee.drawable.VisibilityCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class VisibilityCallback {
					public static class: java.lang.Class<com.facebook.drawee.drawable.VisibilityCallback>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.VisibilityCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onVisibilityChange(param0: boolean): void;
						onDraw(): void;
					});
					public constructor();
					public onDraw(): void;
					public onVisibilityChange(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module generic {
				export class GenericDraweeHierarchy extends com.facebook.drawee.interfaces.SettableDraweeHierarchy {
					public static class: java.lang.Class<com.facebook.drawee.generic.GenericDraweeHierarchy>;
					public setActualImageScaleType(scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setPlaceholderImage(resourceId: number, scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setImage(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: boolean): void;
					public setRetry(throwable: java.lang.Throwable): void;
					public hasPlaceholderImage(): boolean;
					public setProgressBarImage(resourceId: number, scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setControllerOverlay(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public setFadeDuration(durationMs: number): void;
					public setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setActualImageFocusPoint(focusPoint: globalAndroid.graphics.PointF): void;
					public setRetryImage(drawable: globalAndroid.graphics.drawable.Drawable, scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setProgressBarImage(drawable: globalAndroid.graphics.drawable.Drawable, scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
					public setActualImageColorFilter(colorfilter: globalAndroid.graphics.ColorFilter): void;
					public getBounds(): globalAndroid.graphics.Rect;
					public setProgressBarImage(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public setPlaceholderImageFocusPoint(focusPoint: globalAndroid.graphics.PointF): void;
					public setOnFadeListener(onFadeListener: com.facebook.fresco.ui.common.OnFadeListener): void;
					public setRetryImage(resourceId: number): void;
					public setRetry(param0: java.lang.Throwable): void;
					public setRetryImage(resourceId: number, scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public hasImage(): boolean;
					public setFailureImage(drawable: globalAndroid.graphics.drawable.Drawable, scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public reset(): void;
					public getFadeDuration(): number;
					public setRoundingParams(this_: com.facebook.drawee.generic.RoundingParams): void;
					public setFailureImage(resourceId: number): void;
					public setProgress(progress: number, immediate: boolean): void;
					public setPlaceholderImage(resourceId: number): void;
					public setFailure(param0: java.lang.Throwable): void;
					public setFailure(throwable: java.lang.Throwable): void;
					public setBackgroundImage(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public getActualImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public setFailureImage(resourceId: number, scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setProgress(param0: number, param1: boolean): void;
					public setPlaceholderImage(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public setPlaceholderImage(drawable: globalAndroid.graphics.drawable.Drawable, scaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public getActualImageFocusPoint(): globalAndroid.graphics.PointF;
					public setRetryImage(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public setImage(drawable: globalAndroid.graphics.drawable.Drawable, progress: number, immediate: boolean): void;
					public getRoundingParams(): com.facebook.drawee.generic.RoundingParams;
					public getActualImageBounds(outBounds: globalAndroid.graphics.RectF): void;
					public setFailureImage(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public setProgressBarImage(resourceId: number): void;
					public setOverlayImage(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public setOverlayImage(index: number, drawable: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module generic {
				export class GenericDraweeHierarchyBuilder {
					public static class: java.lang.Class<com.facebook.drawee.generic.GenericDraweeHierarchyBuilder>;
					public static DEFAULT_FADE_DURATION: number = 300;
					public static DEFAULT_SCALE_TYPE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public static DEFAULT_ACTUAL_IMAGE_SCALE_TYPE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public getResources(): globalAndroid.content.res.Resources;
					public setFadeDuration(fadeDuration: number): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setRetryImage(resourceId: number, retryImageScaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setFailureImage(failureDrawable: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public constructor(resources: globalAndroid.content.res.Resources);
					public setRetryImage(retryDrawable: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setPlaceholderImage(resourceId: number): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setPressedStateOverlay(this_: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getPlaceholderImage(): globalAndroid.graphics.drawable.Drawable;
					public setPlaceholderImage(placeholderDrawable: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setBackground(background: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setPlaceholderImage(resourceId: number, placeholderImageScaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getPressedStateOverlay(): globalAndroid.graphics.drawable.Drawable;
					public getActualImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public setFailureImageScaleType(failureImageScaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setOverlay(overlay: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getActualImageFocusPoint(): globalAndroid.graphics.PointF;
					public setOverlays(overlays: java.util.List<globalAndroid.graphics.drawable.Drawable>): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getDesiredAspectRatio(): number;
					public setProgressBarImage(progressBarDrawable: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getProgressBarImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public getRoundingParams(): com.facebook.drawee.generic.RoundingParams;
					public getProgressBarImage(): globalAndroid.graphics.drawable.Drawable;
					public setActualImageColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setProgressBarImage(resourceId: number): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getBackground(): globalAndroid.graphics.drawable.Drawable;
					public setProgressBarImage(resourceId: number, progressBarImageScaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setProgressBarImageScaleType(progressBarImageScaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setFailureImage(failureDrawable: globalAndroid.graphics.drawable.Drawable, failureImageScaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setFailureImage(resourceId: number, failureImageScaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setActualImageScaleType(actualImageScaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getFailureImage(): globalAndroid.graphics.drawable.Drawable;
					public getFailureImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public setDesiredAspectRatio(desiredAspectRatio: number): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setRetryImageScaleType(retryImageScaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setFailureImage(resourceId: number): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getActualImageColorFilter(): globalAndroid.graphics.ColorFilter;
					public getOverlays(): java.util.List<globalAndroid.graphics.drawable.Drawable>;
					public static newInstance(resources: globalAndroid.content.res.Resources): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getRetryImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public setRetryImage(retryDrawable: globalAndroid.graphics.drawable.Drawable, retryImageScaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getPlaceholderImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public getRetryImage(): globalAndroid.graphics.drawable.Drawable;
					public setRetryImage(resourceId: number): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getFadeDuration(): number;
					public reset(): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setPlaceholderImage(placeholderDrawable: globalAndroid.graphics.drawable.Drawable, placeholderImageScaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setProgressBarImage(progressBarDrawable: globalAndroid.graphics.drawable.Drawable, progressBarImageScaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setActualImageFocusPoint(focusPoint: globalAndroid.graphics.PointF): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setRoundingParams(roundingParams: com.facebook.drawee.generic.RoundingParams): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setPlaceholderImageScaleType(placeholderImageScaleType: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public build(): com.facebook.drawee.generic.GenericDraweeHierarchy;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module generic {
				export class GenericDraweeHierarchyInflater {
					public static class: java.lang.Class<com.facebook.drawee.generic.GenericDraweeHierarchyInflater>;
					public static inflateBuilder(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public static inflateHierarchy(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): com.facebook.drawee.generic.GenericDraweeHierarchy;
					public static getScaleTypeFromXml(gdhAttrs: globalAndroid.content.res.TypedArray, attrId: number): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public static updateBuilder(attr: com.facebook.drawee.generic.GenericDraweeHierarchyBuilder, i: globalAndroid.content.Context, indexCount: globalAndroid.util.AttributeSet): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public constructor();
					public static getDrawable(context: globalAndroid.content.Context, gdhAttrs: globalAndroid.content.res.TypedArray, attrId: number): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module generic {
				export class RootDrawable extends com.facebook.drawee.drawable.ForwardingDrawable implements com.facebook.drawee.drawable.VisibilityAwareDrawable {
					public static class: java.lang.Class<com.facebook.drawee.generic.RootDrawable>;
					public setControllerOverlay(controllerOverlay: globalAndroid.graphics.drawable.Drawable): void;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public setVisibilityCallback(param0: com.facebook.drawee.drawable.VisibilityCallback): void;
					public getIntrinsicHeight(): number;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public getIntrinsicWidth(): number;
					public setVisible(visible: boolean, restart: boolean): boolean;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable);
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public setVisibilityCallback(visibilityCallback: com.facebook.drawee.drawable.VisibilityCallback): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module generic {
				export class RoundingParams {
					public static class: java.lang.Class<com.facebook.drawee.generic.RoundingParams>;
					public setCornersRadius(radius: number): com.facebook.drawee.generic.RoundingParams;
					public getBorderColor(): number;
					public setRoundAsCircle(roundAsCircle: boolean): com.facebook.drawee.generic.RoundingParams;
					public static fromCornersRadii(radii: androidNative.Array<number>): com.facebook.drawee.generic.RoundingParams;
					public setOverlayColor(overlayColor: number): com.facebook.drawee.generic.RoundingParams;
					public equals(o: any): boolean;
					public static fromCornersRadii(topLeft: number, topRight: number, bottomRight: number, bottomLeft: number): com.facebook.drawee.generic.RoundingParams;
					public setPadding(padding: number): com.facebook.drawee.generic.RoundingParams;
					public getRepeatEdgePixels(): boolean;
					public getBorderWidth(): number;
					public constructor();
					public setBorderColor(color: number): com.facebook.drawee.generic.RoundingParams;
					public hashCode(): number;
					public static fromCornersRadius(radius: number): com.facebook.drawee.generic.RoundingParams;
					public setBorder(color: number, width: number): com.facebook.drawee.generic.RoundingParams;
					public setScaleDownInsideBorders(scaleDownInsideBorders: boolean): com.facebook.drawee.generic.RoundingParams;
					public getOverlayColor(): number;
					public getRoundAsCircle(): boolean;
					public setRoundingMethod(roundingMethod: com.facebook.drawee.generic.RoundingParams.RoundingMethod): com.facebook.drawee.generic.RoundingParams;
					public getCornersRadii(): androidNative.Array<number>;
					public setRepeatEdgePixels(repeatEdgePixels: boolean): com.facebook.drawee.generic.RoundingParams;
					public getRoundingMethod(): com.facebook.drawee.generic.RoundingParams.RoundingMethod;
					public setBorderWidth(width: number): com.facebook.drawee.generic.RoundingParams;
					public static asCircle(): com.facebook.drawee.generic.RoundingParams;
					public getPadding(): number;
					public getPaintFilterBitmap(): boolean;
					public setCornersRadii(topLeft: number, topRight: number, bottomRight: number, bottomLeft: number): com.facebook.drawee.generic.RoundingParams;
					public setCornersRadii(radii: androidNative.Array<number>): com.facebook.drawee.generic.RoundingParams;
					public setPaintFilterBitmap(paintFilterBitmap: boolean): com.facebook.drawee.generic.RoundingParams;
					public getScaleDownInsideBorders(): boolean;
				}
				export module RoundingParams {
					export class RoundingMethod {
						public static class: java.lang.Class<com.facebook.drawee.generic.RoundingParams.RoundingMethod>;
						public static OVERLAY_COLOR: com.facebook.drawee.generic.RoundingParams.RoundingMethod;
						public static BITMAP_ONLY: com.facebook.drawee.generic.RoundingParams.RoundingMethod;
						public static values(): androidNative.Array<com.facebook.drawee.generic.RoundingParams.RoundingMethod>;
						public static valueOf(name: string): com.facebook.drawee.generic.RoundingParams.RoundingMethod;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module generic {
				export class WrappingUtils {
					public static class: java.lang.Class<com.facebook.drawee.generic.WrappingUtils>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module gestures {
				export class GestureDetector {
					public static class: java.lang.Class<com.facebook.drawee.gestures.GestureDetector>;
					public reset(): void;
					public setClickListener(clickListener: com.facebook.drawee.gestures.GestureDetector.ClickListener): void;
					public isCapturingGesture(): boolean;
					public constructor(context: globalAndroid.content.Context);
					public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
					public init(): void;
					public static newInstance(context: globalAndroid.content.Context): com.facebook.drawee.gestures.GestureDetector;
				}
				export module GestureDetector {
					export class ClickListener {
						public static class: java.lang.Class<com.facebook.drawee.gestures.GestureDetector.ClickListener>;
						/**
						 * Constructs a new instance of the com.facebook.drawee.gestures.GestureDetector$ClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onClick(): boolean;
						});
						public constructor();
						public onClick(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module interfaces {
				export class DraweeController {
					public static class: java.lang.Class<com.facebook.drawee.interfaces.DraweeController>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.interfaces.DraweeController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getHierarchy(): com.facebook.drawee.interfaces.DraweeHierarchy;
						setHierarchy(param0: com.facebook.drawee.interfaces.DraweeHierarchy): void;
						onAttach(): void;
						onDetach(): void;
						onViewportVisibilityHint(param0: boolean): void;
						onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						getAnimatable(): globalAndroid.graphics.drawable.Animatable;
						setContentDescription(param0: string): void;
						getContentDescription(): string;
						isSameImageRequest(param0: com.facebook.drawee.interfaces.DraweeController): boolean;
					});
					public constructor();
					public setHierarchy(param0: com.facebook.drawee.interfaces.DraweeHierarchy): void;
					public setContentDescription(param0: string): void;
					public onDetach(): void;
					public getAnimatable(): globalAndroid.graphics.drawable.Animatable;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public isSameImageRequest(param0: com.facebook.drawee.interfaces.DraweeController): boolean;
					public onAttach(): void;
					public getHierarchy(): com.facebook.drawee.interfaces.DraweeHierarchy;
					public onViewportVisibilityHint(param0: boolean): void;
					public getContentDescription(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module interfaces {
				export class DraweeHierarchy {
					public static class: java.lang.Class<com.facebook.drawee.interfaces.DraweeHierarchy>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.interfaces.DraweeHierarchy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
						getBounds(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
					public getBounds(): globalAndroid.graphics.Rect;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module interfaces {
				export class SettableDraweeHierarchy extends com.facebook.drawee.interfaces.DraweeHierarchy {
					public static class: java.lang.Class<com.facebook.drawee.interfaces.SettableDraweeHierarchy>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.interfaces.SettableDraweeHierarchy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						reset(): void;
						setImage(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: boolean): void;
						setProgress(param0: number, param1: boolean): void;
						setFailure(param0: java.lang.Throwable): void;
						setRetry(param0: java.lang.Throwable): void;
						setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
						getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
						getBounds(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public reset(): void;
					public setProgress(param0: number, param1: boolean): void;
					public setImage(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: boolean): void;
					public setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setRetry(param0: java.lang.Throwable): void;
					public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
					public setFailure(param0: java.lang.Throwable): void;
					public getBounds(): globalAndroid.graphics.Rect;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module interfaces {
				export class SimpleDraweeControllerBuilder {
					public static class: java.lang.Class<com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setCallerContext(param0: any): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
						setUri(param0: globalAndroid.net.Uri): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
						setUri(param0: string): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
						setOldController(param0: com.facebook.drawee.interfaces.DraweeController): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
						build(): com.facebook.drawee.interfaces.DraweeController;
					});
					public constructor();
					public setOldController(param0: com.facebook.drawee.interfaces.DraweeController): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
					public setUri(param0: string): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
					public setCallerContext(param0: any): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
					public build(): com.facebook.drawee.interfaces.DraweeController;
					public setUri(param0: globalAndroid.net.Uri): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class AspectRatioMeasure {
					public static class: java.lang.Class<com.facebook.drawee.view.AspectRatioMeasure>;
					public constructor();
					public static updateMeasureSpec(widthSpecSize: com.facebook.drawee.view.AspectRatioMeasure.Spec, desiredHeight: number, resolvedHeight: globalAndroid.view.ViewGroup.LayoutParams, heightSpecSize: number, desiredWidth: number): void;
				}
				export module AspectRatioMeasure {
					export class Spec {
						public static class: java.lang.Class<com.facebook.drawee.view.AspectRatioMeasure.Spec>;
						public width: number;
						public height: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class DraweeHolder<DH>  extends com.facebook.drawee.drawable.VisibilityCallback {
					public static class: java.lang.Class<com.facebook.drawee.view.DraweeHolder<any>>;
					public resetActualImage(): void;
					public hasHierarchy(): boolean;
					public registerWithContext(context: globalAndroid.content.Context): void;
					public isControllerValid(): boolean;
					public setHierarchy(hierarchy: any): void;
					public getDraweeEventTracker(): com.facebook.drawee.components.DraweeEventTracker;
					public onAttach(): void;
					public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
					public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
					public static create(hierarchy: com.facebook.drawee.interfaces.DraweeHierarchy, context: globalAndroid.content.Context): com.facebook.drawee.view.DraweeHolder<any>;
					public onVisibilityChange(isVisible: boolean): void;
					public constructor(hierarchy: any);
					public getHierarchy(): any;
					public toString(): string;
					public onDraw(): void;
					public setController(draweeController: com.facebook.drawee.interfaces.DraweeController): void;
					public onVisibilityChange(param0: boolean): void;
					public onDetach(): void;
					public getController(): com.facebook.drawee.interfaces.DraweeController;
					public isAttached(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class DraweeTransition {
					public static class: java.lang.Class<com.facebook.drawee.view.DraweeTransition>;
					public constructor(fromScale: com.facebook.drawee.drawable.ScalingUtils.ScaleType, toScale: com.facebook.drawee.drawable.ScalingUtils.ScaleType, fromFocusPoint: globalAndroid.graphics.PointF, toFocusPoint: globalAndroid.graphics.PointF);
					public static createTransitionSet(fromScale: com.facebook.drawee.drawable.ScalingUtils.ScaleType, toScale: com.facebook.drawee.drawable.ScalingUtils.ScaleType): globalAndroid.transition.TransitionSet;
					public static createTransitionSet(fromScale: com.facebook.drawee.drawable.ScalingUtils.ScaleType, toScale: com.facebook.drawee.drawable.ScalingUtils.ScaleType, fromFocusPoint: globalAndroid.graphics.PointF, toFocusPoint: globalAndroid.graphics.PointF): globalAndroid.transition.TransitionSet;
					public captureStartValues(transitionValues: globalAndroid.transition.TransitionValues): void;
					public captureEndValues(transitionValues: globalAndroid.transition.TransitionValues): void;
					public constructor(fromScale: com.facebook.drawee.drawable.ScalingUtils.ScaleType, toScale: com.facebook.drawee.drawable.ScalingUtils.ScaleType);
					public createAnimator(sceneRoot: globalAndroid.view.ViewGroup, startValues: globalAndroid.transition.TransitionValues, endValues: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class DraweeView<DH>  extends globalAndroid.widget.ImageView {
					public static class: java.lang.Class<com.facebook.drawee.view.DraweeView<any>>;
					public resetActualImage(): void;
					/** @deprecated */
					public setImageURI(uri: globalAndroid.net.Uri): void;
					public getAspectRatio(): number;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
					public setLegacyVisibilityHandlingEnabled(legacyVisibilityHandlingEnabled: boolean): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					/** @deprecated */
					public setImageBitmap(bm: globalAndroid.graphics.Bitmap): void;
					public doDetach(): void;
					public onAttach(): void;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public onAttachedToWindow(): void;
					public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
					/** @deprecated */
					public setImageResource(resId: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public getHierarchy(): any;
					public toString(): string;
					public static setGlobalLegacyVisibilityHandlingEnabled(legacyVisibilityHandlingEnabled: boolean): void;
					public setController(draweeController: com.facebook.drawee.interfaces.DraweeController): void;
					public onFinishTemporaryDetach(): void;
					public onDetach(): void;
					public onDetachedFromWindow(): void;
					/** @deprecated */
					public setImageDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public hasHierarchy(): boolean;
					public getExtraData(): any;
					public setHierarchy(hierarchy: any): void;
					public hasController(): boolean;
					public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
					public doAttach(): void;
					public onStartTemporaryDetach(): void;
					public onVisibilityChanged(changedView: globalAndroid.view.View, visibility: number): void;
					public setAspectRatio(aspectRatio: number): void;
					public constructor(context: globalAndroid.content.Context);
					public getController(): com.facebook.drawee.interfaces.DraweeController;
					public setExtraData(extraData: any): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class GenericDraweeView extends com.facebook.drawee.view.DraweeView<com.facebook.drawee.generic.GenericDraweeHierarchy> {
					public static class: java.lang.Class<com.facebook.drawee.view.GenericDraweeView>;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
					public constructor(context: globalAndroid.content.Context, hierarchy: com.facebook.drawee.generic.GenericDraweeHierarchy);
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public inflateHierarchy(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): void;
					public constructor(context: globalAndroid.content.Context);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class MultiDraweeHolder<DH>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.view.MultiDraweeHolder<any>>;
					public onTouchEvent(this_: globalAndroid.view.MotionEvent): boolean;
					public remove(index: number): void;
					public verifyDrawable(this_: globalAndroid.graphics.drawable.Drawable): boolean;
					public constructor();
					public get(index: number): com.facebook.drawee.view.DraweeHolder<DH>;
					public clear(): void;
					public onDetach(): void;
					public add(holder: com.facebook.drawee.view.DraweeHolder<DH>): void;
					public onAttach(): void;
					public size(): number;
					public add(index: number, holder: com.facebook.drawee.view.DraweeHolder<DH>): void;
					public draw(i: globalAndroid.graphics.Canvas): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class SimpleDraweeView extends com.facebook.drawee.view.GenericDraweeView {
					public static class: java.lang.Class<com.facebook.drawee.view.SimpleDraweeView>;
					public getControllerBuilder(): com.facebook.drawee.controller.AbstractDraweeControllerBuilder<any,any,any,any>;
					public static shutDown(): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
					public constructor(context: globalAndroid.content.Context, hierarchy: com.facebook.drawee.generic.GenericDraweeHierarchy);
					public setImageRequest(request: com.facebook.imagepipeline.request.ImageRequest): void;
					public setImageResource(resId: number): void;
					public setImageURI(uri: globalAndroid.net.Uri, callerContext: any): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public static initialize(draweeControllerBuilderSupplier: com.facebook.common.internal.Supplier<any>): void;
					public setActualImageResource(resourceId: number, callerContext: any): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setImageURI(uri: globalAndroid.net.Uri): void;
					public setActualImageResource(resourceId: number): void;
					public constructor(context: globalAndroid.content.Context);
					public setImageURI(uriString: string, callerContext: any): void;
					public setImageURI(uriString: string): void;
				}
			}
		}
	}
}

//Generics information:
//com.facebook.drawee.controller.AbstractDraweeController:2
//com.facebook.drawee.controller.AbstractDraweeController.InternalForwardingListener:1
//com.facebook.drawee.controller.AbstractDraweeControllerBuilder:4
//com.facebook.drawee.controller.BaseControllerListener:1
//com.facebook.drawee.controller.ControllerListener:1
//com.facebook.drawee.controller.ForwardingControllerListener:1
//com.facebook.drawee.view.DraweeHolder:1
//com.facebook.drawee.view.DraweeView:1
//com.facebook.drawee.view.MultiDraweeHolder:1

