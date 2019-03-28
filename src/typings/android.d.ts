declare namespace bolts {
    export class AggregateException extends java.lang.Exception {
        public static class: java.lang.Class<AggregateException>;
        public constructor();
        public constructor(param0: string, param1: java.util.List<any>);
        public printStackTrace(param0: java.io.PrintStream): void;
        public printStackTrace(param0: java.io.PrintWriter): void;
        public constructor(param0: string, param1: native.Array<java.lang.Throwable>);
        public getErrors(): java.util.List<java.lang.Exception>;
        public constructor(param0: java.lang.Throwable);
        public getCauses(): native.Array<java.lang.Throwable>;
        public constructor(param0: string, param1: java.lang.Throwable);
        public getInnerThrowables(): java.util.List<java.lang.Throwable>;
        public constructor(param0: java.util.List<any>);
        public printStackTrace(): void;
        public constructor(param0: string);
    }
}

declare namespace bolts {
    export class AndroidExecutors extends java.lang.Object {
        public static class: java.lang.Class<AndroidExecutors>;
        public static newCachedThreadPool(): java.util.concurrent.ExecutorService;
        public static newCachedThreadPool(param0: java.util.concurrent.ThreadFactory): java.util.concurrent.ExecutorService;
        public static allowCoreThreadTimeout(param0: java.util.concurrent.ThreadPoolExecutor, param1: boolean): void;
        public static uiThread(): java.util.concurrent.Executor;
    }
    export namespace AndroidExecutors {
        export class UIThreadExecutor extends java.lang.Object implements java.util.concurrent.Executor {
            public static class: java.lang.Class<UIThreadExecutor>;
            public execute(param0: java.lang.Runnable): void;
        }
    }
}

declare namespace bolts {
    export class BoltsExecutors extends java.lang.Object {
        public static class: java.lang.Class<BoltsExecutors>;
        public static background(): java.util.concurrent.ExecutorService;
    }
    export namespace BoltsExecutors {
        export class ImmediateExecutor extends java.lang.Object implements java.util.concurrent.Executor {
            public static class: java.lang.Class<ImmediateExecutor>;
            public execute(param0: java.lang.Runnable): void;
        }
    }
}

declare namespace bolts {
    export class CancellationToken extends java.lang.Object {
        public static class: java.lang.Class<CancellationToken>;
        public isCancellationRequested(): boolean;
        public toString(): string;
        public throwIfCancellationRequested(): void;
        public register(param0: java.lang.Runnable): CancellationTokenRegistration;
    }
}

declare namespace bolts {
    export class CancellationTokenRegistration extends java.lang.Object implements java.io.Closeable {
        public static class: java.lang.Class<CancellationTokenRegistration>;
        public close(): void;
    }
}

declare namespace bolts {
    export class CancellationTokenSource extends java.lang.Object implements java.io.Closeable {
        public static class: java.lang.Class<CancellationTokenSource>;
        public constructor();
        public close(): void;
        public isCancellationRequested(): boolean;
        public cancelAfter(param0: number): void;
        public toString(): string;
        public getToken(): CancellationToken;
        public cancel(): void;
    }
}

declare namespace bolts {
    export class Capture<T> extends java.lang.Object {
        public static class: java.lang.Class<Capture<any>>;
        public constructor();
        public get(): T;
        public set(param0: T): void;
        public constructor(param0: T);
    }
}

declare namespace bolts {
    export class Continuation<TTaskResult, TContinuationResult> extends java.lang.Object {
        public static class: java.lang.Class<Continuation<any, any>>;
        /**
         * Constructs a new instance of the bolts.Continuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { then(param0: Task<TTaskResult>): TContinuationResult });
        public constructor();
        public then(param0: Task<TTaskResult>): TContinuationResult;
    }
}

declare namespace bolts {
    export class ExecutorException extends java.lang.RuntimeException {
        public static class: java.lang.Class<ExecutorException>;
        public constructor();
        public constructor(param0: string, param1: java.lang.Throwable);
        public constructor(param0: java.lang.Throwable);
        public constructor(param0: java.lang.Exception);
        public constructor(param0: string);
    }
}

declare namespace bolts {
    export class Task<TResult> extends java.lang.Object {
        public static class: java.lang.Class<Task<any>>;
        public static BACKGROUND_EXECUTOR: java.util.concurrent.ExecutorService;
        public static UI_THREAD_EXECUTOR: java.util.concurrent.Executor;
        public continueWith(param0: Continuation<any, any>, param1: CancellationToken): Task<any>;
        public getResult(): TResult;
        public static whenAllResult(param0: java.util.Collection<any>): Task<any>;
        public static forError(param0: java.lang.Exception): Task<any>;
        public static getUnobservedExceptionHandler(): Task.UnobservedExceptionHandler;
        public getError(): java.lang.Exception;
        public static call(param0: java.util.concurrent.Callable<any>, param1: CancellationToken): Task<any>;
        public static cancelled(): Task<any>;
        public static forResult(param0: any): Task<any>;
        public static call(param0: java.util.concurrent.Callable<any>, param1: java.util.concurrent.Executor, param2: CancellationToken): Task<any>;
        public static call(param0: java.util.concurrent.Callable<any>): Task<any>;
        public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: Continuation<java.lang.Void, Task<java.lang.Void>>, param2: CancellationToken): Task<java.lang.Void>;
        public continueWithTask(param0: Continuation<any, any>, param1: java.util.concurrent.Executor, param2: CancellationToken): Task<any>;
        public static delay(param0: number): Task<java.lang.Void>;
        public static delay(param0: number, param1: CancellationToken): Task<java.lang.Void>;
        public onSuccessTask(param0: Continuation<any, any>): Task<any>;
        public static create(): Task.TaskCompletionSource;
        public static callInBackground(param0: java.util.concurrent.Callable<any>): Task<any>;
        public continueWhile(
            param0: java.util.concurrent.Callable<java.lang.Boolean>,
            param1: Continuation<java.lang.Void, Task<java.lang.Void>>,
            param2: java.util.concurrent.Executor,
            param3: CancellationToken
        ): Task<java.lang.Void>;
        public static setUnobservedExceptionHandler(param0: Task.UnobservedExceptionHandler): void;
        public continueWithTask(param0: Continuation<any, any>): Task<any>;
        public onSuccessTask(param0: Continuation<any, any>, param1: CancellationToken): Task<any>;
        public onSuccess(param0: Continuation<any, any>, param1: java.util.concurrent.Executor): Task<any>;
        public onSuccess(param0: Continuation<any, any>, param1: CancellationToken): Task<any>;
        public continueWith(param0: Continuation<any, any>, param1: java.util.concurrent.Executor): Task<any>;
        public makeVoid(): Task<java.lang.Void>;
        public continueWith(param0: Continuation<any, any>): Task<any>;
        public continueWith(param0: Continuation<any, any>, param1: java.util.concurrent.Executor, param2: CancellationToken): Task<any>;
        public cast(): Task<any>;
        public static call(param0: java.util.concurrent.Callable<any>, param1: java.util.concurrent.Executor): Task<any>;
        public onSuccess(param0: Continuation<any, any>, param1: java.util.concurrent.Executor, param2: CancellationToken): Task<any>;
        public isFaulted(): boolean;
        public isCancelled(): boolean;
        public continueWhile(
            param0: java.util.concurrent.Callable<java.lang.Boolean>,
            param1: Continuation<java.lang.Void, Task<java.lang.Void>>,
            param2: java.util.concurrent.Executor
        ): Task<java.lang.Void>;
        public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: Continuation<java.lang.Void, Task<java.lang.Void>>): Task<java.lang.Void>;
        public static whenAny(param0: java.util.Collection<any>): Task<Task<any>>;
        public static callInBackground(param0: java.util.concurrent.Callable<any>, param1: CancellationToken): Task<any>;
        public static whenAll(param0: java.util.Collection<any>): Task<java.lang.Void>;
        public waitForCompletion(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
        public onSuccessTask(param0: Continuation<any, any>, param1: java.util.concurrent.Executor): Task<any>;
        public waitForCompletion(): void;
        public isCompleted(): boolean;
        public onSuccess(param0: Continuation<any, any>): Task<any>;
        public onSuccessTask(param0: Continuation<any, any>, param1: java.util.concurrent.Executor, param2: CancellationToken): Task<any>;
        public static whenAnyResult(param0: java.util.Collection<any>): Task<any>;
        public continueWithTask(param0: Continuation<any, any>, param1: java.util.concurrent.Executor): Task<any>;
        public continueWithTask(param0: Continuation<any, any>, param1: CancellationToken): Task<any>;
    }
    export namespace Task {
        export class TaskCompletionSource extends bolts.TaskCompletionSource<any> {
            public static class: java.lang.Class<TaskCompletionSource>;
        }
        export class UnobservedExceptionHandler extends java.lang.Object {
            public static class: java.lang.Class<UnobservedExceptionHandler>;
            /**
             * Constructs a new instance of the bolts.Task$UnobservedExceptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { unobservedException(param0: Task<any>, param1: UnobservedTaskException): void });
            public constructor();
            public unobservedException(param0: Task<any>, param1: UnobservedTaskException): void;
        }
    }
}

declare namespace bolts {
    export class TaskCompletionSource<TResult> extends java.lang.Object {
        public static class: java.lang.Class<TaskCompletionSource<any>>;
        public constructor();
        public getTask(): Task<TResult>;
        public trySetCancelled(): boolean;
        public setError(param0: java.lang.Exception): void;
        public setResult(param0: TResult): void;
        public trySetError(param0: java.lang.Exception): boolean;
        public setCancelled(): void;
        public trySetResult(param0: TResult): boolean;
    }
}

declare namespace bolts {
    export class UnobservedErrorNotifier extends java.lang.Object {
        public static class: java.lang.Class<UnobservedErrorNotifier>;
        public setObserved(): void;
        public finalize(): void;
        public constructor(param0: Task<any>);
    }
}

declare namespace bolts {
    export class UnobservedTaskException extends java.lang.RuntimeException {
        public static class: java.lang.Class<UnobservedTaskException>;
        public constructor();
        public constructor(param0: string, param1: java.lang.Throwable);
        public constructor(param0: java.lang.Throwable);
        public constructor(param0: string);
    }
}

declare namespace com {
    export namespace facebook {
        export namespace animated {
            export namespace drawable {
                export class BuildConfig extends java.lang.Object {
                    public static class: java.lang.Class<BuildConfig>;
                    public static DEBUG: boolean;
                    public static APPLICATION_ID: string;
                    public static BUILD_TYPE: string;
                    public static FLAVOR: string;
                    public static VERSION_CODE: number;
                    public static VERSION_NAME: string;
                    public constructor();
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace animated {
            export namespace gif {
                export class BuildConfig extends java.lang.Object {
                    public static class: java.lang.Class<BuildConfig>;
                    public static DEBUG: boolean;
                    public static APPLICATION_ID: string;
                    public static BUILD_TYPE: string;
                    public static FLAVOR: string;
                    public static VERSION_CODE: number;
                    public static VERSION_NAME: string;
                    public constructor();
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace animated {
            export namespace gif {
                export class GifFrame extends java.lang.Object implements imagepipeline.animated.base.AnimatedImageFrame {
                    public static class: java.lang.Class<GifFrame>;
                    public getYOffset(): number;
                    public getTransparentPixelColor(): number;
                    public getDurationMs(): number;
                    public getHeight(): number;
                    public finalize(): void;
                    public dispose(): void;
                    public getDisposalMode(): number;
                    public getWidth(): number;
                    public getXOffset(): number;
                    public renderFrame(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap): void;
                    public hasTransparency(): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace animated {
            export namespace gif {
                export class GifImage extends java.lang.Object implements imagepipeline.animated.base.AnimatedImage, imagepipeline.animated.factory.AnimatedImageDecoder {
                    public static class: java.lang.Class<GifImage>;
                    public doesRenderSupportScaling(): boolean;
                    public static create(param0: number, param1: number): GifImage;
                    public getFrame(param0: number): imagepipeline.animated.base.AnimatedImageFrame;
                    public getHeight(): number;
                    public finalize(): void;
                    public dispose(): void;
                    public getWidth(): number;
                    public getLoopCount(): number;
                    public getFrame(param0: number): GifFrame;
                    public getSizeInBytes(): number;
                    public decode(param0: number, param1: number): imagepipeline.animated.base.AnimatedImage;
                    public getDuration(): number;
                    public constructor();
                    public static create(param0: native.Array<number>): GifImage;
                    public getFrameDurations(): native.Array<number>;
                    public getFrameCount(): number;
                    public getFrameInfo(param0: number): imagepipeline.animated.base.AnimatedDrawableFrameInfo;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace binaryresource {
            export class BinaryResource extends java.lang.Object {
                public static class: java.lang.Class<BinaryResource>;
                /**
                 * Constructs a new instance of the com.facebook.binaryresource.BinaryResource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { openStream(): java.io.InputStream; read(): native.Array<number>; size(): number });
                public constructor();
                public read(): native.Array<number>;
                public openStream(): java.io.InputStream;
                public size(): number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace binaryresource {
            export class ByteArrayBinaryResource extends java.lang.Object implements BinaryResource {
                public static class: java.lang.Class<ByteArrayBinaryResource>;
                public constructor(param0: native.Array<number>);
                public read(): native.Array<number>;
                public openStream(): java.io.InputStream;
                public size(): number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace binaryresource {
            export class FileBinaryResource extends java.lang.Object implements BinaryResource {
                public static class: java.lang.Class<FileBinaryResource>;
                public static createOrNull(param0: java.io.File): FileBinaryResource;
                public read(): native.Array<number>;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public getFile(): java.io.File;
                public openStream(): java.io.InputStream;
                public size(): number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace cache {
            export namespace common {
                export class BaseCacheEventListener extends java.lang.Object implements CacheEventListener {
                    public static class: java.lang.Class<BaseCacheEventListener>;
                    public onWriteAttempt(param0: CacheEvent): void;
                    public constructor();
                    public onHit(param0: CacheEvent): void;
                    public onCleared(): void;
                    public onMiss(param0: CacheEvent): void;
                    public onWriteException(param0: CacheEvent): void;
                    public onEviction(param0: CacheEvent): void;
                    public onReadException(param0: CacheEvent): void;
                    public onWriteSuccess(param0: CacheEvent): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace cache {
            export namespace common {
                export class CacheErrorLogger extends java.lang.Object {
                    public static class: java.lang.Class<CacheErrorLogger>;
                    /**
                     * Constructs a new instance of the com.facebook.cache.common.CacheErrorLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { logError(param0: CacheErrorLogger.CacheErrorCategory, param1: java.lang.Class<any>, param2: string, param3: java.lang.Throwable): void });
                    public constructor();
                    public logError(param0: CacheErrorLogger.CacheErrorCategory, param1: java.lang.Class<any>, param2: string, param3: java.lang.Throwable): void;
                }
                export namespace CacheErrorLogger {
                    export class CacheErrorCategory {
                        public static class: java.lang.Class<CacheErrorCategory>;
                        public static READ_DECODE: CacheErrorCategory;
                        public static READ_FILE: CacheErrorCategory;
                        public static READ_FILE_NOT_FOUND: CacheErrorCategory;
                        public static READ_INVALID_ENTRY: CacheErrorCategory;
                        public static WRITE_ENCODE: CacheErrorCategory;
                        public static WRITE_CREATE_TEMPFILE: CacheErrorCategory;
                        public static WRITE_UPDATE_FILE_NOT_FOUND: CacheErrorCategory;
                        public static WRITE_RENAME_FILE_TEMPFILE_NOT_FOUND: CacheErrorCategory;
                        public static WRITE_RENAME_FILE_TEMPFILE_PARENT_NOT_FOUND: CacheErrorCategory;
                        public static WRITE_RENAME_FILE_OTHER: CacheErrorCategory;
                        public static WRITE_CREATE_DIR: CacheErrorCategory;
                        public static WRITE_CALLBACK_ERROR: CacheErrorCategory;
                        public static WRITE_INVALID_ENTRY: CacheErrorCategory;
                        public static DELETE_FILE: CacheErrorCategory;
                        public static EVICTION: CacheErrorCategory;
                        public static GENERIC_IO: CacheErrorCategory;
                        public static OTHER: CacheErrorCategory;
                        public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                        public static values(): native.Array<CacheErrorCategory>;
                        public static valueOf(param0: string): CacheErrorCategory;
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
                export class CacheEvent extends java.lang.Object {
                    public static class: java.lang.Class<CacheEvent>;
                    /**
                     * Constructs a new instance of the com.facebook.cache.common.CacheEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        getCacheKey(): CacheKey;
                        getResourceId(): string;
                        getItemSize(): number;
                        getCacheSize(): number;
                        getCacheLimit(): number;
                        getException(): java.io.IOException;
                        getEvictionReason(): CacheEventListener.EvictionReason;
                    });
                    public constructor();
                    public getCacheLimit(): number;
                    public getCacheKey(): CacheKey;
                    public getItemSize(): number;
                    public getCacheSize(): number;
                    public getException(): java.io.IOException;
                    public getResourceId(): string;
                    public getEvictionReason(): CacheEventListener.EvictionReason;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace cache {
            export namespace common {
                export class CacheEventListener extends java.lang.Object {
                    public static class: java.lang.Class<CacheEventListener>;
                    /**
                     * Constructs a new instance of the com.facebook.cache.common.CacheEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onHit(param0: CacheEvent): void;
                        onMiss(param0: CacheEvent): void;
                        onWriteAttempt(param0: CacheEvent): void;
                        onWriteSuccess(param0: CacheEvent): void;
                        onReadException(param0: CacheEvent): void;
                        onWriteException(param0: CacheEvent): void;
                        onEviction(param0: CacheEvent): void;
                        onCleared(): void;
                    });
                    public constructor();
                    public onWriteAttempt(param0: CacheEvent): void;
                    public onHit(param0: CacheEvent): void;
                    public onCleared(): void;
                    public onMiss(param0: CacheEvent): void;
                    public onWriteException(param0: CacheEvent): void;
                    public onEviction(param0: CacheEvent): void;
                    public onReadException(param0: CacheEvent): void;
                    public onWriteSuccess(param0: CacheEvent): void;
                }
                export namespace CacheEventListener {
                    export class EvictionReason {
                        public static class: java.lang.Class<EvictionReason>;
                        public static CACHE_FULL: EvictionReason;
                        public static CONTENT_STALE: EvictionReason;
                        public static USER_FORCED: EvictionReason;
                        public static CACHE_MANAGER_TRIMMED: EvictionReason;
                        public static values(): native.Array<EvictionReason>;
                        public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                        public static valueOf(param0: string): EvictionReason;
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
                export class CacheKey extends java.lang.Object {
                    public static class: java.lang.Class<CacheKey>;
                    /**
                     * Constructs a new instance of the com.facebook.cache.common.CacheKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        toString(): string;
                        equals(param0: any): boolean;
                        hashCode(): number;
                        containsUri(param0: globalAndroid.net.Uri): boolean;
                        getUriString(): string;
                    });
                    public constructor();
                    public equals(param0: any): boolean;
                    public getUriString(): string;
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
                export class CacheKeyUtil extends java.lang.Object {
                    public static class: java.lang.Class<CacheKeyUtil>;
                    public static getFirstResourceId(param0: CacheKey): string;
                    public constructor();
                    public static getResourceIds(param0: CacheKey): java.util.List<string>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace cache {
            export namespace common {
                export class DebuggingCacheKey extends SimpleCacheKey {
                    public static class: java.lang.Class<DebuggingCacheKey>;
                    public equals(param0: any): boolean;
                    public getUriString(): string;
                    public toString(): string;
                    public constructor(param0: string);
                    public containsUri(param0: globalAndroid.net.Uri): boolean;
                    public getCallerContext(): any;
                    public hashCode(): number;
                    public constructor(param0: string, param1: any, param2: globalAndroid.net.Uri);
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
                export class MultiCacheKey extends java.lang.Object implements CacheKey {
                    public static class: java.lang.Class<MultiCacheKey>;
                    public equals(param0: any): boolean;
                    public getUriString(): string;
                    public toString(): string;
                    public containsUri(param0: globalAndroid.net.Uri): boolean;
                    public getCacheKeys(): java.util.List<CacheKey>;
                    public hashCode(): number;
                    public constructor(param0: java.util.List<CacheKey>);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace cache {
            export namespace common {
                export class NoOpCacheErrorLogger extends java.lang.Object implements CacheErrorLogger {
                    public static class: java.lang.Class<NoOpCacheErrorLogger>;
                    public logError(param0: CacheErrorLogger.CacheErrorCategory, param1: java.lang.Class<any>, param2: string, param3: java.lang.Throwable): void;
                    public static getInstance(): NoOpCacheErrorLogger;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace cache {
            export namespace common {
                export class NoOpCacheEventListener extends java.lang.Object implements CacheEventListener {
                    public static class: java.lang.Class<NoOpCacheEventListener>;
                    public onWriteAttempt(param0: CacheEvent): void;
                    public static getInstance(): NoOpCacheEventListener;
                    public onHit(param0: CacheEvent): void;
                    public onCleared(): void;
                    public onMiss(param0: CacheEvent): void;
                    public onWriteException(param0: CacheEvent): void;
                    public onEviction(param0: CacheEvent): void;
                    public onReadException(param0: CacheEvent): void;
                    public onWriteSuccess(param0: CacheEvent): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace cache {
            export namespace common {
                export class SimpleCacheKey extends java.lang.Object implements CacheKey {
                    public static class: java.lang.Class<SimpleCacheKey>;
                    public equals(param0: any): boolean;
                    public getUriString(): string;
                    public toString(): string;
                    public constructor(param0: string);
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
                export class WriterCallback extends java.lang.Object {
                    public static class: java.lang.Class<WriterCallback>;
                    /**
                     * Constructs a new instance of the com.facebook.cache.common.WriterCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { write(param0: java.io.OutputStream): void });
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
                export class WriterCallbacks extends java.lang.Object {
                    public static class: java.lang.Class<WriterCallbacks>;
                    public static from(param0: native.Array<number>): WriterCallback;
                    public constructor();
                    public static from(param0: java.io.InputStream): WriterCallback;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace cache {
            export namespace disk {
                export class DefaultDiskStorage extends java.lang.Object implements DiskStorage {
                    public static class: java.lang.Class<DefaultDiskStorage>;
                    public getStorageName(): string;
                    public purgeUnexpectedResources(): void;
                    public insert(param0: string, param1: any): DiskStorage.Inserter;
                    public getDumpInfo(): DiskStorage.DiskDumpInfo;
                    public remove(param0: DiskStorage.Entry): number;
                    public getResource(param0: string, param1: any): binaryresource.BinaryResource;
                    public contains(param0: string, param1: any): boolean;
                    public isExternal(): boolean;
                    public touch(param0: string, param1: any): boolean;
                    public getEntries(): java.util.Collection<DiskStorage.Entry>;
                    public remove(param0: string): number;
                    public constructor(param0: java.io.File, param1: number, param2: common.CacheErrorLogger);
                    public clearAll(): void;
                    public isEnabled(): boolean;
                    public getEntries(): java.util.List<DiskStorage.Entry>;
                }
                export namespace DefaultDiskStorage {
                    export class EntriesCollector extends java.lang.Object implements facebook.common.file.FileTreeVisitor {
                        public static class: java.lang.Class<EntriesCollector>;
                        public visitFile(param0: java.io.File): void;
                        public getEntries(): java.util.List<DiskStorage.Entry>;
                        public postVisitDirectory(param0: java.io.File): void;
                        public preVisitDirectory(param0: java.io.File): void;
                    }
                    export class EntryImpl extends java.lang.Object implements DiskStorage.Entry {
                        public static class: java.lang.Class<EntryImpl>;
                        public getSize(): number;
                        public getTimestamp(): number;
                        public getResource(): binaryresource.BinaryResource;
                        public getId(): string;
                        public getResource(): binaryresource.FileBinaryResource;
                    }
                    export class FileInfo extends java.lang.Object {
                        public static class: java.lang.Class<FileInfo>;
                        public type: string;
                        public resourceId: string;
                        public static fromFile(param0: java.io.File): FileInfo;
                        public toPath(param0: string): string;
                        public createTempFile(param0: java.io.File): java.io.File;
                        public toString(): string;
                    }
                    export class FileType extends java.lang.Object implements java.lang.annotation.Annotation {
                        public static class: java.lang.Class<FileType>;
                        /**
                         * Constructs a new instance of the com.facebook.cache.disk.DefaultDiskStorage$FileType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { annotationType(): java.lang.Class<any>; equals(param0: any): boolean; hashCode(): number; toString(): string });
                        public constructor();
                        public static TEMP: string;
                        public static CONTENT: string;
                        public equals(param0: any): boolean;
                        public hashCode(): number;
                        public toString(): string;
                        public annotationType(): java.lang.Class<any>;
                    }
                    export class IncompleteFileException extends java.io.IOException {
                        public static class: java.lang.Class<IncompleteFileException>;
                        public expected: number;
                        public actual: number;
                        public constructor();
                        public constructor(param0: java.lang.Throwable);
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: number, param1: number);
                        public constructor(param0: string);
                    }
                    export class InserterImpl extends java.lang.Object implements DiskStorage.Inserter {
                        public static class: java.lang.Class<InserterImpl>;
                        public constructor(param0: DefaultDiskStorage, param1: string, param2: java.io.File);
                        public commit(param0: any): binaryresource.BinaryResource;
                        public writeData(param0: common.WriterCallback, param1: any): void;
                        public cleanUp(): boolean;
                    }
                    export class PurgingVisitor extends java.lang.Object implements facebook.common.file.FileTreeVisitor {
                        public static class: java.lang.Class<PurgingVisitor>;
                        public visitFile(param0: java.io.File): void;
                        public postVisitDirectory(param0: java.io.File): void;
                        public preVisitDirectory(param0: java.io.File): void;
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
                export class DefaultEntryEvictionComparatorSupplier extends java.lang.Object implements EntryEvictionComparatorSupplier {
                    public static class: java.lang.Class<DefaultEntryEvictionComparatorSupplier>;
                    public constructor();
                    public get(): EntryEvictionComparator;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace cache {
            export namespace disk {
                export class DiskCacheConfig extends java.lang.Object {
                    public static class: java.lang.Class<DiskCacheConfig>;
                    public getIndexPopulateAtStartupEnabled(): boolean;
                    public static newBuilder(param0: globalAndroid.content.Context): DiskCacheConfig.Builder;
                    public getVersion(): number;
                    public getMinimumSizeLimit(): number;
                    public getCacheErrorLogger(): common.CacheErrorLogger;
                    public getEntryEvictionComparatorSupplier(): EntryEvictionComparatorSupplier;
                    public getBaseDirectoryPathSupplier(): facebook.common.internal.Supplier<java.io.File>;
                    public getDefaultSizeLimit(): number;
                    public getLowDiskSpaceSizeLimit(): number;
                    public getCacheEventListener(): common.CacheEventListener;
                    public getDiskTrimmableRegistry(): facebook.common.disk.DiskTrimmableRegistry;
                    public getBaseDirectoryName(): string;
                    public getContext(): globalAndroid.content.Context;
                }
                export namespace DiskCacheConfig {
                    export class Builder extends java.lang.Object {
                        public static class: java.lang.Class<Builder>;
                        public setMaxCacheSize(param0: number): Builder;
                        public setBaseDirectoryName(param0: string): Builder;
                        public build(): DiskCacheConfig;
                        public setDiskTrimmableRegistry(param0: facebook.common.disk.DiskTrimmableRegistry): Builder;
                        public setVersion(param0: number): Builder;
                        public setCacheErrorLogger(param0: common.CacheErrorLogger): Builder;
                        public setEntryEvictionComparatorSupplier(param0: EntryEvictionComparatorSupplier): Builder;
                        public setMaxCacheSizeOnVeryLowDiskSpace(param0: number): Builder;
                        public setIndexPopulateAtStartupEnabled(param0: boolean): Builder;
                        public setBaseDirectoryPath(param0: java.io.File): Builder;
                        public setBaseDirectoryPathSupplier(param0: facebook.common.internal.Supplier<java.io.File>): Builder;
                        public setMaxCacheSizeOnLowDiskSpace(param0: number): Builder;
                        public setCacheEventListener(param0: common.CacheEventListener): Builder;
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
                export class DiskStorage extends java.lang.Object {
                    public static class: java.lang.Class<DiskStorage>;
                    /**
                     * Constructs a new instance of the com.facebook.cache.disk.DiskStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        isEnabled(): boolean;
                        isExternal(): boolean;
                        getResource(param0: string, param1: any): binaryresource.BinaryResource;
                        contains(param0: string, param1: any): boolean;
                        touch(param0: string, param1: any): boolean;
                        purgeUnexpectedResources(): void;
                        insert(param0: string, param1: any): DiskStorage.Inserter;
                        getEntries(): java.util.Collection<DiskStorage.Entry>;
                        remove(param0: DiskStorage.Entry): number;
                        remove(param0: string): number;
                        clearAll(): void;
                        getDumpInfo(): DiskStorage.DiskDumpInfo;
                        getStorageName(): string;
                    });
                    public constructor();
                    public purgeUnexpectedResources(): void;
                    public insert(param0: string, param1: any): DiskStorage.Inserter;
                    public getDumpInfo(): DiskStorage.DiskDumpInfo;
                    public getStorageName(): string;
                    public remove(param0: DiskStorage.Entry): number;
                    public getResource(param0: string, param1: any): binaryresource.BinaryResource;
                    public contains(param0: string, param1: any): boolean;
                    public isExternal(): boolean;
                    public touch(param0: string, param1: any): boolean;
                    public getEntries(): java.util.Collection<DiskStorage.Entry>;
                    public remove(param0: string): number;
                    public clearAll(): void;
                    public isEnabled(): boolean;
                }
                export namespace DiskStorage {
                    export class DiskDumpInfo extends java.lang.Object {
                        public static class: java.lang.Class<DiskDumpInfo>;
                        public entries: java.util.List<DiskDumpInfoEntry>;
                        public typeCounts: java.util.Map<string, java.lang.Integer>;
                        public constructor();
                    }
                    export class DiskDumpInfoEntry extends java.lang.Object {
                        public static class: java.lang.Class<DiskDumpInfoEntry>;
                        public path: string;
                        public type: string;
                        public size: number;
                        public firstBits: string;
                        public constructor(param0: string, param1: string, param2: number, param3: string);
                    }
                    export class Entry extends java.lang.Object {
                        public static class: java.lang.Class<Entry>;
                        /**
                         * Constructs a new instance of the com.facebook.cache.disk.DiskStorage$Entry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { getId(): string; getTimestamp(): number; getSize(): number; getResource(): binaryresource.BinaryResource });
                        public constructor();
                        public getSize(): number;
                        public getTimestamp(): number;
                        public getResource(): binaryresource.BinaryResource;
                        public getId(): string;
                    }
                    export class Inserter extends java.lang.Object {
                        public static class: java.lang.Class<Inserter>;
                        /**
                         * Constructs a new instance of the com.facebook.cache.disk.DiskStorage$Inserter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { writeData(param0: common.WriterCallback, param1: any): void; commit(param0: any): binaryresource.BinaryResource; cleanUp(): boolean });
                        public constructor();
                        public commit(param0: any): binaryresource.BinaryResource;
                        public writeData(param0: common.WriterCallback, param1: any): void;
                        public cleanUp(): boolean;
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
                export class DiskStorageCache extends java.lang.Object implements FileCache, facebook.common.disk.DiskTrimmable {
                    public static class: java.lang.Class<DiskStorageCache>;
                    public static START_OF_VERSIONING: number;
                    public hasKey(param0: common.CacheKey): boolean;
                    public awaitIndex(): void;
                    public isIndexReady(): boolean;
                    public getDumpInfo(): DiskStorage.DiskDumpInfo;
                    public probe(param0: common.CacheKey): boolean;
                    public getCount(): number;
                    public constructor(
                        param0: DiskStorage,
                        param1: EntryEvictionComparatorSupplier,
                        param2: DiskStorageCache.Params,
                        param3: common.CacheEventListener,
                        param4: common.CacheErrorLogger,
                        param5: facebook.common.disk.DiskTrimmableRegistry,
                        param6: globalAndroid.content.Context,
                        param7: java.util.concurrent.Executor,
                        param8: boolean
                    );
                    public trimToNothing(): void;
                    public hasKeySync(param0: common.CacheKey): boolean;
                    public getSize(): number;
                    public remove(param0: common.CacheKey): void;
                    public trimToMinimum(): void;
                    public getResource(param0: common.CacheKey): binaryresource.BinaryResource;
                    public insert(param0: common.CacheKey, param1: common.WriterCallback): binaryresource.BinaryResource;
                    public clearOldEntries(param0: number): number;
                    public clearAll(): void;
                    public isEnabled(): boolean;
                }
                export namespace DiskStorageCache {
                    export class CacheStats extends java.lang.Object {
                        public static class: java.lang.Class<CacheStats>;
                        public increment(param0: number, param1: number): void;
                        public getSize(): number;
                        public set(param0: number, param1: number): void;
                        public getCount(): number;
                        public reset(): void;
                        public isInitialized(): boolean;
                    }
                    export class Params extends java.lang.Object {
                        public static class: java.lang.Class<Params>;
                        public mCacheSizeLimitMinimum: number;
                        public mLowDiskSpaceCacheSizeLimit: number;
                        public mDefaultCacheSizeLimit: number;
                        public constructor(param0: number, param1: number, param2: number);
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
                export class DynamicDefaultDiskStorage extends java.lang.Object implements DiskStorage {
                    public static class: java.lang.Class<DynamicDefaultDiskStorage>;
                    public getStorageName(): string;
                    public purgeUnexpectedResources(): void;
                    public insert(param0: string, param1: any): DiskStorage.Inserter;
                    public getDumpInfo(): DiskStorage.DiskDumpInfo;
                    public remove(param0: DiskStorage.Entry): number;
                    public getResource(param0: string, param1: any): binaryresource.BinaryResource;
                    public contains(param0: string, param1: any): boolean;
                    public isExternal(): boolean;
                    public touch(param0: string, param1: any): boolean;
                    public getEntries(): java.util.Collection<DiskStorage.Entry>;
                    public remove(param0: string): number;
                    public clearAll(): void;
                    public isEnabled(): boolean;
                    public constructor(param0: number, param1: facebook.common.internal.Supplier<java.io.File>, param2: string, param3: common.CacheErrorLogger);
                }
                export namespace DynamicDefaultDiskStorage {
                    export class State extends java.lang.Object {
                        public static class: java.lang.Class<State>;
                        public delegate: DiskStorage;
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
                export class EntryEvictionComparator extends java.util.Comparator<DiskStorage.Entry> {
                    public static class: java.lang.Class<EntryEvictionComparator>;
                    /**
                     * Constructs a new instance of the com.facebook.cache.disk.EntryEvictionComparator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { compare(param0: any, param1: any): number; equals(param0: any): boolean });
                    public constructor();
                    public equals(param0: any): boolean;
                    public compare(param0: any, param1: any): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace cache {
            export namespace disk {
                export class EntryEvictionComparatorSupplier extends java.lang.Object {
                    public static class: java.lang.Class<EntryEvictionComparatorSupplier>;
                    /**
                     * Constructs a new instance of the com.facebook.cache.disk.EntryEvictionComparatorSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { get(): EntryEvictionComparator });
                    public constructor();
                    public get(): EntryEvictionComparator;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace cache {
            export namespace disk {
                export class FileCache extends java.lang.Object implements facebook.common.disk.DiskTrimmable {
                    public static class: java.lang.Class<FileCache>;
                    /**
                     * Constructs a new instance of the com.facebook.cache.disk.FileCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        isEnabled(): boolean;
                        getResource(param0: common.CacheKey): binaryresource.BinaryResource;
                        hasKeySync(param0: common.CacheKey): boolean;
                        hasKey(param0: common.CacheKey): boolean;
                        probe(param0: common.CacheKey): boolean;
                        insert(param0: common.CacheKey, param1: common.WriterCallback): binaryresource.BinaryResource;
                        remove(param0: common.CacheKey): void;
                        getSize(): number;
                        getCount(): number;
                        clearOldEntries(param0: number): number;
                        clearAll(): void;
                        getDumpInfo(): DiskStorage.DiskDumpInfo;
                        trimToMinimum(): void;
                        trimToNothing(): void;
                    });
                    public constructor();
                    public hasKey(param0: common.CacheKey): boolean;
                    public getDumpInfo(): DiskStorage.DiskDumpInfo;
                    public probe(param0: common.CacheKey): boolean;
                    public getCount(): number;
                    public trimToNothing(): void;
                    public hasKeySync(param0: common.CacheKey): boolean;
                    public getSize(): number;
                    public remove(param0: common.CacheKey): void;
                    public trimToMinimum(): void;
                    public getResource(param0: common.CacheKey): binaryresource.BinaryResource;
                    public insert(param0: common.CacheKey, param1: common.WriterCallback): binaryresource.BinaryResource;
                    public clearOldEntries(param0: number): number;
                    public clearAll(): void;
                    public isEnabled(): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace cache {
            export namespace disk {
                export class ScoreBasedEvictionComparatorSupplier extends java.lang.Object implements EntryEvictionComparatorSupplier {
                    public static class: java.lang.Class<ScoreBasedEvictionComparatorSupplier>;
                    public get(): EntryEvictionComparator;
                    public constructor(param0: number, param1: number);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace cache {
            export namespace disk {
                export class SettableCacheEvent extends java.lang.Object implements common.CacheEvent {
                    public static class: java.lang.Class<SettableCacheEvent>;
                    public getCacheLimit(): number;
                    public getItemSize(): number;
                    public getCacheSize(): number;
                    public setEvictionReason(param0: common.CacheEventListener.EvictionReason): SettableCacheEvent;
                    public setCacheKey(param0: common.CacheKey): SettableCacheEvent;
                    public getResourceId(): string;
                    public recycle(): void;
                    public setResourceId(param0: string): SettableCacheEvent;
                    public setCacheLimit(param0: number): SettableCacheEvent;
                    public setItemSize(param0: number): SettableCacheEvent;
                    public getEvictionReason(): common.CacheEventListener.EvictionReason;
                    public static obtain(): SettableCacheEvent;
                    public getCacheKey(): common.CacheKey;
                    public getException(): java.io.IOException;
                    public setException(param0: java.io.IOException): SettableCacheEvent;
                    public setCacheSize(param0: number): SettableCacheEvent;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace activitylistener {
                export class ActivityListener extends java.lang.Object {
                    public static class: java.lang.Class<ActivityListener>;
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
                    public static MIN_PRIORITY: number;
                    public static MAX_PRIORITY: number;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace activitylistener {
                export class ActivityListenerManager extends java.lang.Object {
                    public static class: java.lang.Class<ActivityListenerManager>;
                    public constructor();
                    public static register(param0: ActivityListener, param1: globalAndroid.content.Context): void;
                }
                export namespace ActivityListenerManager {
                    export class Listener extends BaseActivityListener {
                        public static class: java.lang.Class<Listener>;
                        public constructor();
                        public onStop(param0: globalAndroid.app.Activity): void;
                        public onResume(param0: globalAndroid.app.Activity): void;
                        public constructor(param0: ActivityListener);
                        public getPriority(): number;
                        public onPause(param0: globalAndroid.app.Activity): void;
                        public onStart(param0: globalAndroid.app.Activity): void;
                        public onDestroy(param0: globalAndroid.app.Activity): void;
                        public onActivityCreate(param0: globalAndroid.app.Activity): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace activitylistener {
                export class BaseActivityListener extends java.lang.Object implements ActivityListener {
                    public static class: java.lang.Class<BaseActivityListener>;
                    public getPriority(): number;
                    public onStop(param0: globalAndroid.app.Activity): void;
                    public onResume(param0: globalAndroid.app.Activity): void;
                    public constructor();
                    public onActivityCreate(param0: globalAndroid.app.Activity): void;
                    public onStart(param0: globalAndroid.app.Activity): void;
                    public onDestroy(param0: globalAndroid.app.Activity): void;
                    public onPause(param0: globalAndroid.app.Activity): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace activitylistener {
                export class ListenableActivity extends java.lang.Object {
                    public static class: java.lang.Class<ListenableActivity>;
                    /**
                     * Constructs a new instance of the com.facebook.common.activitylistener.ListenableActivity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { addActivityListener(param0: ActivityListener): void; removeActivityListener(param0: ActivityListener): void });
                    public constructor();
                    public addActivityListener(param0: ActivityListener): void;
                    public removeActivityListener(param0: ActivityListener): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace disk {
                export class DiskTrimmable extends java.lang.Object {
                    public static class: java.lang.Class<DiskTrimmable>;
                    /**
                     * Constructs a new instance of the com.facebook.common.disk.DiskTrimmable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { trimToMinimum(): void; trimToNothing(): void });
                    public constructor();
                    public trimToMinimum(): void;
                    public trimToNothing(): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace disk {
                export class DiskTrimmableRegistry extends java.lang.Object {
                    public static class: java.lang.Class<DiskTrimmableRegistry>;
                    /**
                     * Constructs a new instance of the com.facebook.common.disk.DiskTrimmableRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { registerDiskTrimmable(param0: DiskTrimmable): void; unregisterDiskTrimmable(param0: DiskTrimmable): void });
                    public constructor();
                    public unregisterDiskTrimmable(param0: DiskTrimmable): void;
                    public registerDiskTrimmable(param0: DiskTrimmable): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace disk {
                export class NoOpDiskTrimmableRegistry extends java.lang.Object implements DiskTrimmableRegistry {
                    public static class: java.lang.Class<NoOpDiskTrimmableRegistry>;
                    public unregisterDiskTrimmable(param0: DiskTrimmable): void;
                    public static getInstance(): NoOpDiskTrimmableRegistry;
                    public registerDiskTrimmable(param0: DiskTrimmable): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace executors {
                export class CallerThreadExecutor extends java.util.concurrent.AbstractExecutorService {
                    public static class: java.lang.Class<CallerThreadExecutor>;
                    public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
                    public isTerminated(): boolean;
                    public invokeAny(param0: java.util.Collection<any>): any;
                    public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
                    public static getInstance(): CallerThreadExecutor;
                    public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
                    public isShutdown(): boolean;
                    public shutdownNow(): java.util.List<java.lang.Runnable>;
                    public execute(param0: java.lang.Runnable): void;
                    public shutdown(): void;
                    public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
                    public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
                    public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
                    public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace executors {
                export class ConstrainedExecutorService extends java.util.concurrent.AbstractExecutorService {
                    public static class: java.lang.Class<ConstrainedExecutorService>;
                    public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
                    public isTerminated(): boolean;
                    public invokeAny(param0: java.util.Collection<any>): any;
                    public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
                    public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
                    public constructor(param0: string, param1: number, param2: java.util.concurrent.Executor, param3: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
                    public isShutdown(): boolean;
                    public shutdownNow(): java.util.List<java.lang.Runnable>;
                    public execute(param0: java.lang.Runnable): void;
                    public shutdown(): void;
                    public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
                    public constructor();
                    public static newConstrainedExecutor(param0: string, param1: number, param2: number, param3: java.util.concurrent.Executor): ConstrainedExecutorService;
                    public isIdle(): boolean;
                    public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
                    public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
                    public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
                }
                export namespace ConstrainedExecutorService {
                    export class Worker extends java.lang.Object implements java.lang.Runnable {
                        public static class: java.lang.Class<Worker>;
                        public run(): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace executors {
                export class DefaultSerialExecutorService extends ConstrainedExecutorService implements SerialExecutorService {
                    public static class: java.lang.Class<DefaultSerialExecutorService>;
                    public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
                    public isTerminated(): boolean;
                    public invokeAny(param0: java.util.Collection<any>): any;
                    public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
                    public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
                    public constructor(param0: string, param1: number, param2: java.util.concurrent.Executor, param3: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
                    public isShutdown(): boolean;
                    public shutdownNow(): java.util.List<java.lang.Runnable>;
                    public execute(param0: java.lang.Runnable): void;
                    public constructor(param0: java.util.concurrent.Executor);
                    public shutdown(): void;
                    public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
                    public constructor();
                    public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
                    public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
                    public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace executors {
                export class HandlerExecutorService extends java.lang.Object implements java.util.concurrent.ScheduledExecutorService {
                    public static class: java.lang.Class<HandlerExecutorService>;
                    /**
                     * Constructs a new instance of the com.facebook.common.executors.HandlerExecutorService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        quit(): void;
                        isHandlerThread(): boolean;
                        schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                        schedule(param0: java.util.concurrent.Callable<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                        scheduleAtFixedRate(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                        scheduleWithFixedDelay(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                        shutdown(): void;
                        shutdownNow(): java.util.List<java.lang.Runnable>;
                        isShutdown(): boolean;
                        isTerminated(): boolean;
                        awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
                        submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
                        submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
                        submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
                        invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
                        invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
                        invokeAny(param0: java.util.Collection<any>): any;
                        invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
                        execute(param0: java.lang.Runnable): void;
                    });
                    public constructor();
                    public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
                    public isTerminated(): boolean;
                    public invokeAny(param0: java.util.Collection<any>): any;
                    public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
                    public isHandlerThread(): boolean;
                    public schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                    public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
                    public isShutdown(): boolean;
                    public shutdownNow(): java.util.List<java.lang.Runnable>;
                    public execute(param0: java.lang.Runnable): void;
                    public schedule(param0: java.util.concurrent.Callable<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                    public shutdown(): void;
                    public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
                    public scheduleAtFixedRate(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                    public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
                    public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
                    public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
                    public quit(): void;
                    public scheduleWithFixedDelay(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace executors {
                export class HandlerExecutorServiceImpl extends java.util.concurrent.AbstractExecutorService implements HandlerExecutorService {
                    public static class: java.lang.Class<HandlerExecutorServiceImpl>;
                    public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
                    public invokeAny(param0: java.util.Collection<any>): any;
                    public newTaskFor(param0: java.lang.Runnable, param1: any): ScheduledFutureImpl<any>;
                    public newTaskFor(param0: java.util.concurrent.Callable<any>): ScheduledFutureImpl<any>;
                    public schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                    public isShutdown(): boolean;
                    public execute(param0: java.lang.Runnable): void;
                    public shutdown(): void;
                    public schedule(param0: java.util.concurrent.Callable<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                    public constructor();
                    public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
                    public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
                    public constructor(param0: globalAndroid.os.Handler);
                    public isTerminated(): boolean;
                    public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
                    public isHandlerThread(): boolean;
                    public submit(param0: java.lang.Runnable): java.util.concurrent.ScheduledFuture<any>;
                    public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
                    public shutdownNow(): java.util.List<java.lang.Runnable>;
                    public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
                    public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.ScheduledFuture<any>;
                    public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.ScheduledFuture<any>;
                    public scheduleAtFixedRate(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                    public newTaskFor(param0: java.lang.Runnable, param1: any): java.util.concurrent.RunnableFuture<any>;
                    public newTaskFor(param0: java.util.concurrent.Callable<any>): java.util.concurrent.RunnableFuture<any>;
                    public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
                    public scheduleWithFixedDelay(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                    public quit(): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace executors {
                export class ScheduledFutureImpl<V> extends java.lang.Object {
                    public static class: java.lang.Class<ScheduledFutureImpl<any>>;
                    public compareTo(param0: java.util.concurrent.Delayed): number;
                    public get(param0: number, param1: java.util.concurrent.TimeUnit): V;
                    public isDone(): boolean;
                    public run(): void;
                    public isCancelled(): boolean;
                    public constructor(param0: globalAndroid.os.Handler, param1: java.util.concurrent.Callable<V>);
                    public constructor(param0: globalAndroid.os.Handler, param1: java.lang.Runnable, param2: V);
                    public cancel(param0: boolean): boolean;
                    public getDelay(param0: java.util.concurrent.TimeUnit): number;
                    public get(): V;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace executors {
                export class SerialExecutorService extends java.lang.Object implements java.util.concurrent.ExecutorService {
                    public static class: java.lang.Class<SerialExecutorService>;
                    /**
                     * Constructs a new instance of the com.facebook.common.executors.SerialExecutorService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        shutdown(): void;
                        shutdownNow(): java.util.List<java.lang.Runnable>;
                        isShutdown(): boolean;
                        isTerminated(): boolean;
                        awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
                        submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
                        submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
                        submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
                        invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
                        invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
                        invokeAny(param0: java.util.Collection<any>): any;
                        invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
                        execute(param0: java.lang.Runnable): void;
                    });
                    public constructor();
                    public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
                    public isTerminated(): boolean;
                    public invokeAny(param0: java.util.Collection<any>): any;
                    public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
                    public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
                    public isShutdown(): boolean;
                    public shutdownNow(): java.util.List<java.lang.Runnable>;
                    public execute(param0: java.lang.Runnable): void;
                    public shutdown(): void;
                    public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
                    public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
                    public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
                    public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace executors {
                export abstract class StatefulRunnable<T> extends java.lang.Runnable {
                    public static class: java.lang.Class<StatefulRunnable<any>>;
                    public static STATE_CREATED: number;
                    public static STATE_STARTED: number;
                    public static STATE_CANCELLED: number;
                    public static STATE_FINISHED: number;
                    public static STATE_FAILED: number;
                    public mState: java.util.concurrent.atomic.AtomicInteger;
                    public onFailure(param0: java.lang.Exception): void;
                    public onCancellation(): void;
                    public constructor();
                    public run(): void;
                    public cancel(): void;
                    public getResult(): any;
                    public disposeResult(param0: any): void;
                    public onSuccess(param0: any): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace executors {
                export class UiThreadImmediateExecutorService extends HandlerExecutorServiceImpl {
                    public static class: java.lang.Class<UiThreadImmediateExecutorService>;
                    public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
                    public static getInstance(): UiThreadImmediateExecutorService;
                    public isTerminated(): boolean;
                    public invokeAny(param0: java.util.Collection<any>): any;
                    public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
                    public isHandlerThread(): boolean;
                    public submit(param0: java.lang.Runnable): java.util.concurrent.ScheduledFuture<any>;
                    public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
                    public isShutdown(): boolean;
                    public shutdownNow(): java.util.List<java.lang.Runnable>;
                    public execute(param0: java.lang.Runnable): void;
                    public shutdown(): void;
                    public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
                    public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.ScheduledFuture<any>;
                    public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.ScheduledFuture<any>;
                    public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
                    public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
                    public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
                    public quit(): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace file {
                export class FileTree extends java.lang.Object {
                    public static class: java.lang.Class<FileTree>;
                    public static deleteContents(param0: java.io.File): boolean;
                    public constructor();
                    public static walkFileTree(param0: java.io.File, param1: FileTreeVisitor): void;
                    public static deleteRecursively(param0: java.io.File): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace file {
                export class FileTreeVisitor extends java.lang.Object {
                    public static class: java.lang.Class<FileTreeVisitor>;
                    /**
                     * Constructs a new instance of the com.facebook.common.file.FileTreeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { preVisitDirectory(param0: java.io.File): void; visitFile(param0: java.io.File): void; postVisitDirectory(param0: java.io.File): void });
                    public constructor();
                    public preVisitDirectory(param0: java.io.File): void;
                    public postVisitDirectory(param0: java.io.File): void;
                    public visitFile(param0: java.io.File): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace file {
                export class FileUtils extends java.lang.Object {
                    public static class: java.lang.Class<FileUtils>;
                    public constructor();
                    public static mkdirs(param0: java.io.File): void;
                    public static rename(param0: java.io.File, param1: java.io.File): void;
                }
                export namespace FileUtils {
                    export class CreateDirectoryException extends java.io.IOException {
                        public static class: java.lang.Class<CreateDirectoryException>;
                        public constructor();
                        public constructor(param0: java.lang.Throwable);
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: string);
                    }
                    export class FileDeleteException extends java.io.IOException {
                        public static class: java.lang.Class<FileDeleteException>;
                        public constructor();
                        public constructor(param0: java.lang.Throwable);
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: string);
                    }
                    export class ParentDirNotFoundException extends java.io.FileNotFoundException {
                        public static class: java.lang.Class<ParentDirNotFoundException>;
                        public constructor();
                        public constructor(param0: java.lang.Throwable);
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: string);
                    }
                    export class RenameException extends java.io.IOException {
                        public static class: java.lang.Class<RenameException>;
                        public constructor();
                        public constructor(param0: java.lang.Throwable);
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: string);
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class AndroidPredicates extends java.lang.Object {
                    public static class: java.lang.Class<AndroidPredicates>;
                    public static True(): android.internal.util.Predicate<any>;
                    public static False(): android.internal.util.Predicate<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class ByteStreams extends java.lang.Object {
                    public static class: java.lang.Class<ByteStreams>;
                    public static toByteArray(param0: java.io.InputStream): native.Array<number>;
                    public static read(param0: java.io.InputStream, param1: native.Array<number>, param2: number, param3: number): number;
                    public static toByteArray(param0: java.io.InputStream, param1: number): native.Array<number>;
                    public static copy(param0: java.io.InputStream, param1: java.io.OutputStream): number;
                    public static readFully(param0: java.io.InputStream, param1: native.Array<number>, param2: number, param3: number): void;
                }
                export namespace ByteStreams {
                    export class FastByteArrayOutputStream extends java.io.ByteArrayOutputStream {
                        public static class: java.lang.Class<FastByteArrayOutputStream>;
                        public close(): void;
                        public flush(): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Closeables extends java.lang.Object {
                    public static class: java.lang.Class<Closeables>;
                    public static closeQuietly(param0: java.io.InputStream): void;
                    public static close(param0: java.io.Closeable, param1: boolean): void;
                    public static closeQuietly(param0: java.io.Reader): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class CountingOutputStream extends java.io.FilterOutputStream {
                    public static class: java.lang.Class<CountingOutputStream>;
                    public write(param0: native.Array<number>, param1: number, param2: number): void;
                    public constructor(param0: java.io.OutputStream);
                    public write(param0: native.Array<number>): void;
                    public getCount(): number;
                    public constructor();
                    public close(): void;
                    public write(param0: number): void;
                    public flush(): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class DoNotStrip extends java.lang.Object implements java.lang.annotation.Annotation {
                    public static class: java.lang.Class<DoNotStrip>;
                    /**
                     * Constructs a new instance of the com.facebook.common.internal.DoNotStrip interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { annotationType(): java.lang.Class<any>; equals(param0: any): boolean; hashCode(): number; toString(): string });
                    public constructor();
                    public equals(param0: any): boolean;
                    public toString(): string;
                    public annotationType(): java.lang.Class<any>;
                    public hashCode(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Files extends java.lang.Object {
                    public static class: java.lang.Class<Files>;
                    public static toByteArray(param0: java.io.File): native.Array<number>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class ImmutableList<E> extends java.util.ArrayList<any> {
                    public static class: java.lang.Class<ImmutableList<any>>;
                    public addAll(param0: java.util.Collection<any>): boolean;
                    public isEmpty(): boolean;
                    public add(param0: any): boolean;
                    public containsAll(param0: java.util.Collection<any>): boolean;
                    public size(): number;
                    public lastIndexOf(param0: any): number;
                    public static of(param0: native.Array<any>): ImmutableList<any>;
                    public remove(param0: number): any;
                    public iterator(): java.util.Iterator<any>;
                    public toArray(param0: native.Array<any>): native.Array<any>;
                    public toArray(): native.Array<any>;
                    public clear(): void;
                    public get(param0: number): any;
                    public subList(param0: number, param1: number): java.util.List<any>;
                    public listIterator(param0: number): java.util.ListIterator<any>;
                    public hashCode(): number;
                    public contains(param0: any): boolean;
                    public static copyOf(param0: java.util.List<any>): ImmutableList<any>;
                    public remove(param0: any): boolean;
                    public removeAll(param0: java.util.Collection<any>): boolean;
                    public add(param0: number, param1: any): void;
                    public addAll(param0: number, param1: java.util.Collection<any>): boolean;
                    public retainAll(param0: java.util.Collection<any>): boolean;
                    public indexOf(param0: any): number;
                    public equals(param0: any): boolean;
                    public set(param0: number, param1: any): any;
                    public listIterator(): java.util.ListIterator<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class ImmutableMap<K, V> extends java.util.HashMap<any, any> {
                    public static class: java.lang.Class<ImmutableMap<any, any>>;
                    public static of(param0: any, param1: any): java.util.Map<any, any>;
                    public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): java.util.Map<any, any>;
                    public isEmpty(): boolean;
                    public size(): number;
                    public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.Map<any, any>;
                    public values(): java.util.Collection<any>;
                    public static of(
                        param0: any,
                        param1: any,
                        param2: any,
                        param3: any,
                        param4: any,
                        param5: any,
                        param6: any,
                        param7: any,
                        param8: any,
                        param9: any,
                        param10: any,
                        param11: any
                    ): java.util.Map<any, any>;
                    public put(param0: any, param1: any): any;
                    public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): java.util.Map<any, any>;
                    public equals(param0: any): boolean;
                    public putAll(param0: java.util.Map<any, any>): void;
                    public static of(param0: any, param1: any, param2: any, param3: any): java.util.Map<any, any>;
                    public containsKey(param0: any): boolean;
                    public containsValue(param0: any): boolean;
                    public remove(param0: any): any;
                    public entrySet(): java.util.Set<java.util.Map.Entry<any, any>>;
                    public static copyOf(param0: java.util.Map<any, any>): ImmutableMap<any, any>;
                    public keySet(): java.util.Set<any>;
                    public clear(): void;
                    public static of(): java.util.Map<any, any>;
                    public hashCode(): number;
                    public get(param0: any): any;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class ImmutableSet<E> extends java.util.HashSet<any> {
                    public static class: java.lang.Class<ImmutableSet<any>>;
                    public addAll(param0: java.util.Collection<any>): boolean;
                    public remove(param0: any): boolean;
                    public removeAll(param0: java.util.Collection<any>): boolean;
                    public static copyOf(param0: java.util.Set<any>): ImmutableSet<any>;
                    public isEmpty(): boolean;
                    public add(param0: any): boolean;
                    public containsAll(param0: java.util.Collection<any>): boolean;
                    public retainAll(param0: java.util.Collection<any>): boolean;
                    public size(): number;
                    public equals(param0: any): boolean;
                    public iterator(): java.util.Iterator<any>;
                    public static of(param0: native.Array<any>): ImmutableSet<any>;
                    public toArray(param0: native.Array<any>): native.Array<any>;
                    public toArray(): native.Array<any>;
                    public clear(): void;
                    public hashCode(): number;
                    public contains(param0: any): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Ints extends java.lang.Object {
                    public static class: java.lang.Class<Ints>;
                    public static max(param0: native.Array<number>): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Objects extends java.lang.Object {
                    public static class: java.lang.Class<Objects>;
                    public static toStringHelper(param0: string): Objects.ToStringHelper;
                    public static toStringHelper(param0: java.lang.Class<any>): Objects.ToStringHelper;
                    public static firstNonNull(param0: any, param1: any): any;
                    public static hashCode(param0: native.Array<any>): number;
                    public static equal(param0: any, param1: any): boolean;
                    public hashCode(): number;
                    public static toStringHelper(param0: any): Objects.ToStringHelper;
                }
                export namespace Objects {
                    export class ToStringHelper extends java.lang.Object {
                        public static class: java.lang.Class<ToStringHelper>;
                        public omitNullValues(): ToStringHelper;
                        public add(param0: string, param1: any): ToStringHelper;
                        public addValue(param0: number): ToStringHelper;
                        public add(param0: string, param1: boolean): ToStringHelper;
                        public add(param0: string, param1: number): ToStringHelper;
                        public addValue(param0: any): ToStringHelper;
                        public addValue(param0: boolean): ToStringHelper;
                        public addValue(param0: string): ToStringHelper;
                        public add(param0: string, param1: string): ToStringHelper;
                        public toString(): string;
                    }
                    export namespace ToStringHelper {
                        export class ValueHolder extends java.lang.Object {
                            public static class: java.lang.Class<ValueHolder>;
                        }
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Preconditions extends java.lang.Object {
                    public static class: java.lang.Class<Preconditions>;
                    public static checkElementIndex(param0: number, param1: number, param2: string): number;
                    public static checkState(param0: boolean, param1: any): void;
                    public static checkArgument(param0: boolean, param1: any): void;
                    public static checkElementIndex(param0: number, param1: number): number;
                    public static checkNotNull(param0: any): any;
                    public static checkNotNull(param0: any, param1: string, param2: native.Array<any>): any;
                    public static checkPositionIndexes(param0: number, param1: number, param2: number): void;
                    public static checkPositionIndex(param0: number, param1: number): number;
                    public static checkState(param0: boolean, param1: string, param2: native.Array<any>): void;
                    public static checkPositionIndex(param0: number, param1: number, param2: string): number;
                    public static checkArgument(param0: boolean, param1: string, param2: native.Array<any>): void;
                    public static checkState(param0: boolean): void;
                    public static checkArgument(param0: boolean): void;
                    public static checkNotNull(param0: any, param1: any): any;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Sets extends java.lang.Object {
                    public static class: java.lang.Class<Sets>;
                    public static newHashSet(): java.util.HashSet<any>;
                    public static newHashSetWithCapacity(param0: number): java.util.HashSet<any>;
                    public static newIdentityHashSet(): java.util.Set<any>;
                    public static newHashSet(param0: java.lang.Iterable<any>): java.util.HashSet<any>;
                    public static newHashSet(param0: native.Array<any>): java.util.HashSet<any>;
                    public static newHashSet(param0: java.util.Iterator<any>): java.util.HashSet<any>;
                    public static newCopyOnWriteArraySet(): java.util.concurrent.CopyOnWriteArraySet<any>;
                    public static newLinkedHashSet(): java.util.LinkedHashSet<any>;
                    public static newSetFromMap(param0: java.util.Map<any, any>): java.util.Set<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Supplier<T> extends java.lang.Object {
                    public static class: java.lang.Class<Supplier<any>>;
                    /**
                     * Constructs a new instance of the com.facebook.common.internal.Supplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { get(): T });
                    public constructor();
                    public get(): T;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Suppliers extends java.lang.Object {
                    public static class: java.lang.Class<Suppliers>;
                    public static BOOLEAN_TRUE: Supplier<java.lang.Boolean>;
                    public static BOOLEAN_FALSE: Supplier<java.lang.Boolean>;
                    public static of(param0: any): Supplier<any>;
                    public constructor();
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Throwables extends java.lang.Object {
                    public static class: java.lang.Class<Throwables>;
                    public static getCausalChain(param0: java.lang.Throwable): java.util.List<java.lang.Throwable>;
                    public static propagateIfPossible(param0: java.lang.Throwable): void;
                    public static getStackTraceAsString(param0: java.lang.Throwable): string;
                    public static propagateIfPossible(param0: java.lang.Throwable, param1: java.lang.Class<any>, param2: java.lang.Class<any>): void;
                    public static getRootCause(param0: java.lang.Throwable): java.lang.Throwable;
                    public static propagateIfPossible(param0: java.lang.Throwable, param1: java.lang.Class<any>): void;
                    public static propagate(param0: java.lang.Throwable): java.lang.RuntimeException;
                    public static propagateIfInstanceOf(param0: java.lang.Throwable, param1: java.lang.Class<any>): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class VisibleForTesting extends java.lang.Object implements java.lang.annotation.Annotation {
                    public static class: java.lang.Class<VisibleForTesting>;
                    /**
                     * Constructs a new instance of the com.facebook.common.internal.VisibleForTesting interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { annotationType(): java.lang.Class<any>; equals(param0: any): boolean; hashCode(): number; toString(): string });
                    public constructor();
                    public equals(param0: any): boolean;
                    public toString(): string;
                    public annotationType(): java.lang.Class<any>;
                    public hashCode(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace lifecycle {
                export class AttachDetachListener extends java.lang.Object {
                    public static class: java.lang.Class<AttachDetachListener>;
                    /**
                     * Constructs a new instance of the com.facebook.common.lifecycle.AttachDetachListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onAttachToView(param0: globalAndroid.view.View): void; onDetachFromView(param0: globalAndroid.view.View): void });
                    public constructor();
                    public onAttachToView(param0: globalAndroid.view.View): void;
                    public onDetachFromView(param0: globalAndroid.view.View): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace logging {
                export class FLog extends java.lang.Object {
                    public static class: java.lang.Class<FLog>;
                    public static VERBOSE: number;
                    public static DEBUG: number;
                    public static INFO: number;
                    public static WARN: number;
                    public static ERROR: number;
                    public static ASSERT: number;
                    public static d(param0: string, param1: string, param2: any, param3: any, param4: any, param5: any): void;
                    public static d(param0: string, param1: string, param2: java.lang.Throwable): void;
                    public static i(param0: java.lang.Class<any>, param1: string, param2: any, param3: any, param4: any, param5: any): void;
                    public static w(param0: java.lang.Class<any>, param1: string): void;
                    public static wtf(param0: string, param1: string, param2: native.Array<any>): void;
                    public static v(param0: string, param1: string, param2: any, param3: any, param4: any, param5: any): void;
                    public static v(param0: java.lang.Class<any>, param1: string, param2: any, param3: any, param4: any, param5: any): void;
                    public static getMinimumLoggingLevel(): number;
                    public static i(param0: java.lang.Class<any>, param1: string, param2: java.lang.Throwable): void;
                    public constructor();
                    public static d(param0: string, param1: string): void;
                    public static d(param0: java.lang.Class<any>, param1: string, param2: java.lang.Throwable): void;
                    public static v(param0: java.lang.Class<any>, param1: string, param2: java.lang.Throwable): void;
                    public static v(param0: string, param1: string): void;
                    public static v(param0: java.lang.Class<any>, param1: string, param2: native.Array<any>): void;
                    public static v(param0: string, param1: string, param2: any, param3: any, param4: any): void;
                    public static wtf(param0: string, param1: string): void;
                    public static wtf(param0: java.lang.Class<any>, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                    public static w(param0: java.lang.Class<any>, param1: string, param2: native.Array<any>): void;
                    public static v(param0: java.lang.Class<any>, param1: string): void;
                    public static w(param0: string, param1: string, param2: native.Array<any>): void;
                    public static e(param0: string, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                    public static e(param0: java.lang.Class<any>, param1: string, param2: java.lang.Throwable): void;
                    public static v(param0: string, param1: string, param2: native.Array<any>): void;
                    public static v(param0: java.lang.Class<any>, param1: string, param2: any): void;
                    public static d(param0: java.lang.Class<any>, param1: string, param2: any, param3: any, param4: any): void;
                    public static i(param0: java.lang.Class<any>, param1: string, param2: native.Array<any>): void;
                    public static i(param0: string, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                    public static d(param0: java.lang.Class<any>, param1: string, param2: native.Array<any>): void;
                    public static w(param0: string, param1: string, param2: java.lang.Throwable): void;
                    public static e(param0: java.lang.Class<any>, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                    public static e(param0: java.lang.Class<any>, param1: string, param2: native.Array<any>): void;
                    public static i(param0: string, param1: string, param2: any, param3: any, param4: any): void;
                    public static i(param0: string, param1: string, param2: java.lang.Throwable): void;
                    public static d(param0: java.lang.Class<any>, param1: string): void;
                    public static i(param0: string, param1: string): void;
                    public static v(param0: java.lang.Class<any>, param1: string, param2: any, param3: any): void;
                    public static wtf(param0: java.lang.Class<any>, param1: string, param2: java.lang.Throwable): void;
                    public static e(param0: string, param1: string): void;
                    public static wtf(param0: string, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                    public static d(param0: string, param1: string, param2: any, param3: any, param4: any): void;
                    public static wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
                    public static v(param0: string, param1: string, param2: any, param3: any): void;
                    public static d(param0: java.lang.Class<any>, param1: string, param2: any, param3: any): void;
                    public static d(param0: string, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                    public static v(param0: string, param1: string, param2: any): void;
                    public static w(param0: java.lang.Class<any>, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                    public static i(param0: java.lang.Class<any>, param1: string, param2: any, param3: any, param4: any): void;
                    public static i(param0: java.lang.Class<any>, param1: string, param2: any): void;
                    public static v(param0: string, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                    public static i(param0: java.lang.Class<any>, param1: string, param2: any, param3: any): void;
                    public static i(param0: java.lang.Class<any>, param1: string): void;
                    public static setLoggingDelegate(param0: LoggingDelegate): void;
                    public static i(param0: java.lang.Class<any>, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                    public static setMinimumLoggingLevel(param0: number): void;
                    public static w(param0: string, param1: string): void;
                    public static d(param0: string, param1: string, param2: any): void;
                    public static w(param0: java.lang.Class<any>, param1: string, param2: java.lang.Throwable): void;
                    public static d(param0: java.lang.Class<any>, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                    public static wtf(param0: java.lang.Class<any>, param1: string, param2: native.Array<any>): void;
                    public static v(param0: java.lang.Class<any>, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                    public static v(param0: string, param1: string, param2: java.lang.Throwable): void;
                    public static i(param0: string, param1: string, param2: any, param3: any, param4: any, param5: any): void;
                    public static i(param0: string, param1: string, param2: native.Array<any>): void;
                    public static d(param0: string, param1: string, param2: any, param3: any): void;
                    public static isLoggable(param0: number): boolean;
                    public static v(param0: java.lang.Class<any>, param1: string, param2: any, param3: any, param4: any): void;
                    public static i(param0: string, param1: string, param2: any, param3: any): void;
                    public static d(param0: java.lang.Class<any>, param1: string, param2: any): void;
                    public static w(param0: string, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                    public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
                    public static wtf(param0: java.lang.Class<any>, param1: string): void;
                    public static i(param0: string, param1: string, param2: any): void;
                    public static e(param0: string, param1: string, param2: native.Array<any>): void;
                    public static e(param0: java.lang.Class<any>, param1: string): void;
                    public static d(param0: string, param1: string, param2: native.Array<any>): void;
                    public static d(param0: java.lang.Class<any>, param1: string, param2: any, param3: any, param4: any, param5: any): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace logging {
                export class FLogDefaultLoggingDelegate extends java.lang.Object implements LoggingDelegate {
                    public static class: java.lang.Class<FLogDefaultLoggingDelegate>;
                    public static sInstance: FLogDefaultLoggingDelegate;
                    public i(param0: string, param1: string, param2: java.lang.Throwable): void;
                    public getMinimumLoggingLevel(): number;
                    public v(param0: string, param1: string, param2: java.lang.Throwable): void;
                    public e(param0: string, param1: string, param2: java.lang.Throwable): void;
                    public wtf(param0: string, param1: string): void;
                    public setApplicationTag(param0: string): void;
                    public d(param0: string, param1: string): void;
                    public e(param0: string, param1: string): void;
                    public setMinimumLoggingLevel(param0: number): void;
                    public isLoggable(param0: number): boolean;
                    public i(param0: string, param1: string): void;
                    public wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
                    public static getInstance(): FLogDefaultLoggingDelegate;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace logging {
                export class LoggingDelegate extends java.lang.Object {
                    public static class: java.lang.Class<LoggingDelegate>;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace media {
                export class MediaUtils extends java.lang.Object {
                    public static class: java.lang.Class<MediaUtils>;
                    public static ADDITIONAL_ALLOWED_MIME_TYPES: java.util.Map<string, string>;
                    public static isVideo(param0: string): boolean;
                    public static extractMime(param0: string): string;
                    public constructor();
                    public static isNonNativeSupportedMimeType(param0: string): boolean;
                    public static isPhoto(param0: string): boolean;
                    public static isThreeD(param0: string): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export class ByteArrayPool extends Pool<native.Array<number>> {
                    public static class: java.lang.Class<ByteArrayPool>;
                    /**
                     * Constructs a new instance of the com.facebook.common.memory.ByteArrayPool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { get(param0: number): any; release(param0: any): void; release(param0: any): void; trim(param0: MemoryTrimType): void });
                    public constructor();
                    public release(param0: any): void;
                    public trim(param0: MemoryTrimType): void;
                    public get(param0: number): any;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export class MemoryTrimType {
                    public static class: java.lang.Class<MemoryTrimType>;
                    public static OnCloseToDalvikHeapLimit: MemoryTrimType;
                    public static OnSystemLowMemoryWhileAppInForeground: MemoryTrimType;
                    public static OnSystemLowMemoryWhileAppInBackground: MemoryTrimType;
                    public static OnAppBackgrounded: MemoryTrimType;
                    public getSuggestedTrimRatio(): number;
                    public static valueOf(param0: string): MemoryTrimType;
                    public static values(): native.Array<MemoryTrimType>;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export class MemoryTrimmable extends java.lang.Object {
                    public static class: java.lang.Class<MemoryTrimmable>;
                    /**
                     * Constructs a new instance of the com.facebook.common.memory.MemoryTrimmable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { trim(param0: MemoryTrimType): void });
                    public constructor();
                    public trim(param0: MemoryTrimType): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export class MemoryTrimmableRegistry extends java.lang.Object {
                    public static class: java.lang.Class<MemoryTrimmableRegistry>;
                    /**
                     * Constructs a new instance of the com.facebook.common.memory.MemoryTrimmableRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { registerMemoryTrimmable(param0: MemoryTrimmable): void; unregisterMemoryTrimmable(param0: MemoryTrimmable): void });
                    public constructor();
                    public unregisterMemoryTrimmable(param0: MemoryTrimmable): void;
                    public registerMemoryTrimmable(param0: MemoryTrimmable): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export class NoOpMemoryTrimmableRegistry extends java.lang.Object implements MemoryTrimmableRegistry {
                    public static class: java.lang.Class<NoOpMemoryTrimmableRegistry>;
                    public constructor();
                    public unregisterMemoryTrimmable(param0: MemoryTrimmable): void;
                    public static getInstance(): NoOpMemoryTrimmableRegistry;
                    public registerMemoryTrimmable(param0: MemoryTrimmable): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export class Pool<V> extends java.lang.Object {
                    public static class: java.lang.Class<Pool<any>>;
                    /**
                     * Constructs a new instance of the com.facebook.common.memory.Pool<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { get(param0: number): V; release(param0: V): void; release(param0: any): void; trim(param0: MemoryTrimType): void });
                    public constructor();
                    public release(param0: any): void;
                    public get(param0: number): V;
                    public trim(param0: MemoryTrimType): void;
                    public release(param0: V): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export class PooledByteArrayBufferedInputStream extends java.io.InputStream {
                    public static class: java.lang.Class<PooledByteArrayBufferedInputStream>;
                    public available(): number;
                    public read(): number;
                    public read(param0: native.Array<number>, param1: number, param2: number): number;
                    public constructor();
                    public read(param0: native.Array<number>): number;
                    public finalize(): void;
                    public close(): void;
                    public skip(param0: number): number;
                    public constructor(param0: java.io.InputStream, param1: native.Array<number>, param2: references.ResourceReleaser<native.Array<number>>);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export class PooledByteBuffer extends java.lang.Object implements java.io.Closeable {
                    public static class: java.lang.Class<PooledByteBuffer>;
                    /**
                     * Constructs a new instance of the com.facebook.common.memory.PooledByteBuffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        size(): number;
                        read(param0: number): number;
                        read(param0: number, param1: native.Array<number>, param2: number, param3: number): void;
                        getNativePtr(): number;
                        close(): void;
                        isClosed(): boolean;
                        close(): void;
                    });
                    public constructor();
                    public read(param0: number): number;
                    public close(): void;
                    public read(param0: number, param1: native.Array<number>, param2: number, param3: number): void;
                    public size(): number;
                    public getNativePtr(): number;
                    public isClosed(): boolean;
                }
                export namespace PooledByteBuffer {
                    export class ClosedException extends java.lang.RuntimeException {
                        public static class: java.lang.Class<ClosedException>;
                        public constructor();
                        public constructor(param0: java.lang.Throwable);
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: string);
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export class PooledByteBufferFactory extends java.lang.Object {
                    public static class: java.lang.Class<PooledByteBufferFactory>;
                    /**
                     * Constructs a new instance of the com.facebook.common.memory.PooledByteBufferFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        newByteBuffer(param0: number): PooledByteBuffer;
                        newByteBuffer(param0: java.io.InputStream): PooledByteBuffer;
                        newByteBuffer(param0: native.Array<number>): PooledByteBuffer;
                        newByteBuffer(param0: java.io.InputStream, param1: number): PooledByteBuffer;
                        newOutputStream(): PooledByteBufferOutputStream;
                        newOutputStream(param0: number): PooledByteBufferOutputStream;
                    });
                    public constructor();
                    public newByteBuffer(param0: native.Array<number>): PooledByteBuffer;
                    public newOutputStream(param0: number): PooledByteBufferOutputStream;
                    public newByteBuffer(param0: number): PooledByteBuffer;
                    public newOutputStream(): PooledByteBufferOutputStream;
                    public newByteBuffer(param0: java.io.InputStream): PooledByteBuffer;
                    public newByteBuffer(param0: java.io.InputStream, param1: number): PooledByteBuffer;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export class PooledByteBufferInputStream extends java.io.InputStream {
                    public static class: java.lang.Class<PooledByteBufferInputStream>;
                    public available(): number;
                    public read(): number;
                    public read(param0: native.Array<number>, param1: number, param2: number): number;
                    public constructor(param0: PooledByteBuffer);
                    public reset(): void;
                    public constructor();
                    public markSupported(): boolean;
                    public read(param0: native.Array<number>): number;
                    public skip(param0: number): number;
                    public close(): void;
                    public mark(param0: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export abstract class PooledByteBufferOutputStream extends java.io.OutputStream {
                    public static class: java.lang.Class<PooledByteBufferOutputStream>;
                    public constructor();
                    public toByteBuffer(): PooledByteBuffer;
                    public close(): void;
                    public size(): number;
                    public flush(): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export class PooledByteStreams extends java.lang.Object {
                    public static class: java.lang.Class<PooledByteStreams>;
                    public constructor(param0: ByteArrayPool, param1: number);
                    public constructor(param0: ByteArrayPool);
                    public copy(param0: java.io.InputStream, param1: java.io.OutputStream): number;
                    public copy(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace references {
                export class CloseableReference<T> extends java.lang.Object {
                    public static class: java.lang.Class<CloseableReference<any>>;
                    public static closeSafely(param0: java.lang.Iterable<any>): void;
                    public static closeSafely(param0: CloseableReference<any>): void;
                    public getUnderlyingReferenceTestOnly(): SharedReference<T>;
                    public finalize(): void;
                    public static of(param0: java.io.Closeable): CloseableReference<any>;
                    public get(): T;
                    public getValueHash(): number;
                    public static isValid(param0: CloseableReference<any>): boolean;
                    public clone(): any;
                    public static of(param0: any, param1: ResourceReleaser<any>): CloseableReference<any>;
                    public cloneOrNull(): CloseableReference<T>;
                    public isValid(): boolean;
                    public close(): void;
                    public clone(): CloseableReference<T>;
                    public static cloneOrNull(param0: CloseableReference<any>): CloseableReference<any>;
                    public static cloneOrNull(param0: java.util.Collection<any>): java.util.List<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace references {
                export class OOMSoftReference<T> extends java.lang.Object {
                    public static class: java.lang.Class<OOMSoftReference<any>>;
                    public set(param0: T): void;
                    public constructor();
                    public clear(): void;
                    public get(): T;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace references {
                export class ResourceReleaser<T> extends java.lang.Object {
                    public static class: java.lang.Class<ResourceReleaser<any>>;
                    /**
                     * Constructs a new instance of the com.facebook.common.references.ResourceReleaser<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { release(param0: T): void });
                    public constructor();
                    public release(param0: T): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace references {
                export class SharedReference<T> extends java.lang.Object {
                    public static class: java.lang.Class<SharedReference<any>>;
                    public static isValid(param0: SharedReference<any>): boolean;
                    public addReference(): void;
                    public constructor(param0: T, param1: ResourceReleaser<T>);
                    public isValid(): boolean;
                    public getRefCountTestOnly(): number;
                    public get(): T;
                    public deleteReference(): void;
                }
                export namespace SharedReference {
                    export class NullReferenceException extends java.lang.RuntimeException {
                        public static class: java.lang.Class<NullReferenceException>;
                        public constructor();
                        public constructor(param0: java.lang.Throwable);
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: string);
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace statfs {
                export class StatFsHelper extends java.lang.Object {
                    public static class: java.lang.Class<StatFsHelper>;
                    public static getInstance(): StatFsHelper;
                    public constructor();
                    public getFreeStorageSpace(param0: StatFsHelper.StorageType): number;
                    public getTotalStorageSpace(param0: StatFsHelper.StorageType): number;
                    public getAvailableStorageSpace(param0: StatFsHelper.StorageType): number;
                    public resetStats(): void;
                    public testLowDiskSpace(param0: StatFsHelper.StorageType, param1: number): boolean;
                    public static createStatFs(param0: string): globalAndroid.os.StatFs;
                }
                export namespace StatFsHelper {
                    export class StorageType {
                        public static class: java.lang.Class<StorageType>;
                        public static INTERNAL: StorageType;
                        public static EXTERNAL: StorageType;
                        public static values(): native.Array<StorageType>;
                        public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                        public static valueOf(param0: string): StorageType;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace streams {
                export class LimitedInputStream extends java.io.FilterInputStream {
                    public static class: java.lang.Class<LimitedInputStream>;
                    public available(): number;
                    public read(): number;
                    public read(param0: native.Array<number>, param1: number, param2: number): number;
                    public reset(): void;
                    public constructor(param0: java.io.InputStream);
                    public constructor();
                    public read(param0: native.Array<number>): number;
                    public skip(param0: number): number;
                    public close(): void;
                    public constructor(param0: java.io.InputStream, param1: number);
                    public mark(param0: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace streams {
                export class TailAppendingInputStream extends java.io.FilterInputStream {
                    public static class: java.lang.Class<TailAppendingInputStream>;
                    public read(): number;
                    public read(param0: native.Array<number>, param1: number, param2: number): number;
                    public reset(): void;
                    public constructor(param0: java.io.InputStream);
                    public constructor();
                    public read(param0: native.Array<number>): number;
                    public close(): void;
                    public constructor(param0: java.io.InputStream, param1: native.Array<number>);
                    public mark(param0: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace time {
                export class AwakeTimeSinceBootClock extends java.lang.Object implements MonotonicClock {
                    public static class: java.lang.Class<AwakeTimeSinceBootClock>;
                    public static get(): AwakeTimeSinceBootClock;
                    public now(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace time {
                export class Clock extends java.lang.Object {
                    public static class: java.lang.Class<Clock>;
                    /**
                     * Constructs a new instance of the com.facebook.common.time.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { now(): number });
                    public constructor();
                    public static MAX_TIME: number;
                    public now(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace time {
                export class CurrentThreadTimeClock extends java.lang.Object implements Clock {
                    public static class: java.lang.Class<CurrentThreadTimeClock>;
                    public constructor();
                    public now(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace time {
                export class MonotonicClock extends java.lang.Object {
                    public static class: java.lang.Class<MonotonicClock>;
                    /**
                     * Constructs a new instance of the com.facebook.common.time.MonotonicClock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { now(): number });
                    public constructor();
                    public now(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace time {
                export class RealtimeSinceBootClock extends java.lang.Object implements MonotonicClock {
                    public static class: java.lang.Class<RealtimeSinceBootClock>;
                    public now(): number;
                    public static get(): RealtimeSinceBootClock;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace time {
                export class SystemClock extends java.lang.Object implements Clock {
                    public static class: java.lang.Class<SystemClock>;
                    public static get(): SystemClock;
                    public now(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace util {
                export class ByteConstants extends java.lang.Object {
                    public static class: java.lang.Class<ByteConstants>;
                    public static KB: number;
                    public static MB: number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace util {
                export class ExceptionWithNoStacktrace extends java.lang.Exception {
                    public static class: java.lang.Class<ExceptionWithNoStacktrace>;
                    public constructor(param0: string, param1: java.lang.Throwable);
                    public fillInStackTrace(): java.lang.Throwable;
                    public constructor(param0: string);
                    public constructor(param0: java.lang.Throwable);
                    public constructor();
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace util {
                export class HashCodeUtil extends java.lang.Object {
                    public static class: java.lang.Class<HashCodeUtil>;
                    public static hashCode(param0: any, param1: any, param2: any, param3: any): number;
                    public static hashCode(param0: number, param1: number, param2: number): number;
                    public static hashCode(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
                    public static hashCode(param0: number, param1: number, param2: number, param3: number): number;
                    public static hashCode(param0: number, param1: number, param2: number, param3: number, param4: number): number;
                    public static hashCode(param0: any): number;
                    public static hashCode(param0: any, param1: any, param2: any, param3: any, param4: any): number;
                    public constructor();
                    public static hashCode(param0: any, param1: any, param2: any): number;
                    public static hashCode(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): number;
                    public static hashCode(param0: number, param1: number): number;
                    public static hashCode(param0: number): number;
                    public hashCode(): number;
                    public static hashCode(param0: any, param1: any): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace util {
                export class Hex extends java.lang.Object {
                    public static class: java.lang.Class<Hex>;
                    public static byte2Hex(param0: number): string;
                    public static decodeHex(param0: string): native.Array<number>;
                    public constructor();
                    public static hexStringToByteArray(param0: string): native.Array<number>;
                    public static encodeHex(param0: native.Array<number>, param1: boolean): string;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace util {
                export class SecureHashUtil extends java.lang.Object {
                    public static class: java.lang.Class<SecureHashUtil>;
                    public static makeSHA1Hash(param0: native.Array<number>): string;
                    public static makeMD5Hash(param0: java.io.InputStream): string;
                    public static makeSHA256Hash(param0: native.Array<number>): string;
                    public constructor();
                    public static makeSHA1Hash(param0: string): string;
                    public static makeSHA1HashBase64(param0: native.Array<number>): string;
                    public static makeMD5Hash(param0: native.Array<number>): string;
                    public static convertToHex(param0: native.Array<number>): string;
                    public static makeMD5Hash(param0: string): string;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace util {
                export class StreamUtil extends java.lang.Object {
                    public static class: java.lang.Class<StreamUtil>;
                    public static getBytesFromStream(param0: java.io.InputStream, param1: number): native.Array<number>;
                    public constructor();
                    public static getBytesFromStream(param0: java.io.InputStream): native.Array<number>;
                    public static skip(param0: java.io.InputStream, param1: number): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace util {
                export class TriState {
                    public static class: java.lang.Class<TriState>;
                    public static YES: TriState;
                    public static NO: TriState;
                    public static UNSET: TriState;
                    public isSet(): boolean;
                    public static values(): native.Array<TriState>;
                    public asBoolean(): boolean;
                    public static valueOf(param0: boolean): TriState;
                    public asBooleanObject(): java.lang.Boolean;
                    public static fromDbValue(param0: number): TriState;
                    public getDbValue(): number;
                    public static valueOf(param0: string): TriState;
                    public static valueOf(param0: java.lang.Boolean): TriState;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                    public asBoolean(param0: boolean): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace util {
                export class UriUtil extends java.lang.Object {
                    public static class: java.lang.Class<UriUtil>;
                    public static HTTP_SCHEME: string;
                    public static HTTPS_SCHEME: string;
                    public static LOCAL_FILE_SCHEME: string;
                    public static LOCAL_CONTENT_SCHEME: string;
                    public static LOCAL_ASSET_SCHEME: string;
                    public static LOCAL_RESOURCE_SCHEME: string;
                    public static QUALIFIED_RESOURCE_SCHEME: string;
                    public static DATA_SCHEME: string;
                    public static getUriForResourceId(param0: number): globalAndroid.net.Uri;
                    public static isLocalContactUri(param0: globalAndroid.net.Uri): boolean;
                    public static isNetworkUri(param0: globalAndroid.net.Uri): boolean;
                    public static isLocalFileUri(param0: globalAndroid.net.Uri): boolean;
                    public static isQualifiedResourceUri(param0: globalAndroid.net.Uri): boolean;
                    public static isLocalContentUri(param0: globalAndroid.net.Uri): boolean;
                    public constructor();
                    public static uriToUrl(param0: globalAndroid.net.Uri): java.net.URL;
                    public static isDataUri(param0: globalAndroid.net.Uri): boolean;
                    public static parseUriOrNull(param0: string): globalAndroid.net.Uri;
                    public static getSchemeOrNull(param0: globalAndroid.net.Uri): string;
                    public static isLocalResourceUri(param0: globalAndroid.net.Uri): boolean;
                    public static getUriForQualifiedResource(param0: string, param1: number): globalAndroid.net.Uri;
                    public static isLocalCameraUri(param0: globalAndroid.net.Uri): boolean;
                    public static isLocalAssetUri(param0: globalAndroid.net.Uri): boolean;
                    public static getRealPathFromUri(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): string;
                    public static getUriForFile(param0: java.io.File): globalAndroid.net.Uri;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace webp {
                export class BitmapCreator extends java.lang.Object {
                    public static class: java.lang.Class<BitmapCreator>;
                    /**
                     * Constructs a new instance of the com.facebook.common.webp.BitmapCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { createNakedBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap });
                    public constructor();
                    public createNakedBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace webp {
                export class WebpBitmapFactory extends java.lang.Object {
                    public static class: java.lang.Class<WebpBitmapFactory>;
                    /**
                     * Constructs a new instance of the com.facebook.common.webp.WebpBitmapFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        setWebpErrorLogger(param0: WebpBitmapFactory.WebpErrorLogger): void;
                        setBitmapCreator(param0: BitmapCreator): void;
                        decodeFileDescriptor(param0: java.io.FileDescriptor, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                        decodeStream(param0: java.io.InputStream, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                        decodeFile(param0: string, param1: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                        decodeByteArray(param0: native.Array<number>, param1: number, param2: number, param3: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                    });
                    public constructor();
                    public decodeByteArray(param0: native.Array<number>, param1: number, param2: number, param3: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                    public setBitmapCreator(param0: BitmapCreator): void;
                    public decodeFile(param0: string, param1: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                    public decodeFileDescriptor(
                        param0: java.io.FileDescriptor,
                        param1: globalAndroid.graphics.Rect,
                        param2: globalAndroid.graphics.BitmapFactory.Options
                    ): globalAndroid.graphics.Bitmap;
                    public decodeStream(param0: java.io.InputStream, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                    public setWebpErrorLogger(param0: WebpBitmapFactory.WebpErrorLogger): void;
                }
                export namespace WebpBitmapFactory {
                    export class WebpErrorLogger extends java.lang.Object {
                        public static class: java.lang.Class<WebpErrorLogger>;
                        /**
                         * Constructs a new instance of the com.facebook.common.webp.WebpBitmapFactory$WebpErrorLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onWebpErrorLog(param0: string, param1: string): void });
                        public constructor();
                        public onWebpErrorLog(param0: string, param1: string): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace webp {
                export class WebpSupportStatus extends java.lang.Object {
                    public static class: java.lang.Class<WebpSupportStatus>;
                    public static sIsWebpSupportRequired: boolean;
                    public static sIsSimpleWebpSupported: boolean;
                    public static sIsExtendedWebpSupported: boolean;
                    public static sWebpBitmapFactory: WebpBitmapFactory;
                    public static isAnimatedWebpHeader(param0: native.Array<number>, param1: number): boolean;
                    public static isExtendedWebpHeader(param0: native.Array<number>, param1: number, param2: number): boolean;
                    public constructor();
                    public static loadWebpBitmapFactoryIfExists(): WebpBitmapFactory;
                    public static isLosslessWebpHeader(param0: native.Array<number>, param1: number): boolean;
                    public static isSimpleWebpHeader(param0: native.Array<number>, param1: number): boolean;
                    public static isWebpSupportedByPlatform(param0: native.Array<number>, param1: number, param2: number): boolean;
                    public static isExtendedWebpHeaderWithAlpha(param0: native.Array<number>, param1: number): boolean;
                    public static isWebpHeader(param0: native.Array<number>, param1: number, param2: number): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace datasource {
            export abstract class AbstractDataSource<T> extends DataSource<any> {
                public static class: java.lang.Class<AbstractDataSource<any>>;
                public getResult(): any;
                public hasFailed(): boolean;
                public close(): boolean;
                public isClosed(): boolean;
                public isFinished(): boolean;
                public setProgress(param0: number): boolean;
                public constructor();
                public setResult(param0: any, param1: boolean): boolean;
                public getFailureCause(): java.lang.Throwable;
                public getProgress(): number;
                public notifyProgressUpdate(): void;
                public closeResult(param0: any): void;
                public hasResult(): boolean;
                public subscribe(param0: DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
                public setFailure(param0: java.lang.Throwable): boolean;
            }
            export namespace AbstractDataSource {
                export class DataSourceStatus {
                    public static class: java.lang.Class<DataSourceStatus>;
                    public static IN_PROGRESS: DataSourceStatus;
                    public static SUCCESS: DataSourceStatus;
                    public static FAILURE: DataSourceStatus;
                    public static valueOf(param0: string): DataSourceStatus;
                    public static values(): native.Array<DataSourceStatus>;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace datasource {
            export abstract class BaseBooleanSubscriber extends DataSubscriber<java.lang.Boolean> {
                public static class: java.lang.Class<BaseBooleanSubscriber>;
                public onCancellation(param0: DataSource<java.lang.Boolean>): void;
                public onFailure(param0: DataSource<any>): void;
                public onFailure(param0: DataSource<java.lang.Boolean>): void;
                public onProgressUpdate(param0: DataSource<java.lang.Boolean>): void;
                public onNewResult(param0: DataSource<any>): void;
                public onProgressUpdate(param0: DataSource<any>): void;
                public onFailureImpl(param0: DataSource<java.lang.Boolean>): void;
                public onNewResult(param0: DataSource<java.lang.Boolean>): void;
                public onCancellation(param0: DataSource<any>): void;
                public onNewResultImpl(param0: boolean): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace datasource {
            export abstract class BaseDataSubscriber<T> extends DataSubscriber<any> {
                public static class: java.lang.Class<BaseDataSubscriber<any>>;
                public onFailure(param0: DataSource<any>): void;
                public onNewResult(param0: DataSource<any>): void;
                public onFailureImpl(param0: DataSource<any>): void;
                public onProgressUpdate(param0: DataSource<any>): void;
                public onNewResultImpl(param0: DataSource<any>): void;
                public onCancellation(param0: DataSource<any>): void;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace datasource {
            export class DataSource<T> extends java.lang.Object {
                public static class: java.lang.Class<DataSource<any>>;
                /**
                 * Constructs a new instance of the com.facebook.datasource.DataSource<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    isClosed(): boolean;
                    getResult(): T;
                    hasResult(): boolean;
                    isFinished(): boolean;
                    hasFailed(): boolean;
                    getFailureCause(): java.lang.Throwable;
                    getProgress(): number;
                    close(): boolean;
                    subscribe(param0: DataSubscriber<T>, param1: java.util.concurrent.Executor): void;
                });
                public constructor();
                public hasFailed(): boolean;
                public getFailureCause(): java.lang.Throwable;
                public getProgress(): number;
                public subscribe(param0: DataSubscriber<T>, param1: java.util.concurrent.Executor): void;
                public getResult(): T;
                public close(): boolean;
                public isClosed(): boolean;
                public hasResult(): boolean;
                public isFinished(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace datasource {
            export class DataSources extends java.lang.Object {
                public static class: java.lang.Class<DataSources>;
                public static waitForFinalResult(param0: DataSource<any>): any;
                public static getFailedDataSourceSupplier(param0: java.lang.Throwable): common.internal.Supplier<any>;
                public static immediateFailedDataSource(param0: java.lang.Throwable): DataSource<any>;
                public static immediateDataSource(param0: any): DataSource<any>;
            }
            export namespace DataSources {
                export class ValueHolder<T> extends java.lang.Object {
                    public static class: java.lang.Class<ValueHolder<any>>;
                    public value: T;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace datasource {
            export class DataSubscriber<T> extends java.lang.Object {
                public static class: java.lang.Class<DataSubscriber<any>>;
                /**
                 * Constructs a new instance of the com.facebook.datasource.DataSubscriber<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    onNewResult(param0: DataSource<T>): void;
                    onFailure(param0: DataSource<T>): void;
                    onCancellation(param0: DataSource<T>): void;
                    onProgressUpdate(param0: DataSource<T>): void;
                });
                public constructor();
                public onNewResult(param0: DataSource<T>): void;
                public onCancellation(param0: DataSource<T>): void;
                public onProgressUpdate(param0: DataSource<T>): void;
                public onFailure(param0: DataSource<T>): void;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace datasource {
            export class FirstAvailableDataSourceSupplier<T> extends common.internal.Supplier<DataSource<any>> {
                public static class: java.lang.Class<FirstAvailableDataSourceSupplier<any>>;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public static create(param0: java.util.List<any>): FirstAvailableDataSourceSupplier<any>;
                public get(): any;
                public toString(): string;
                public get(): DataSource<any>;
            }
            export namespace FirstAvailableDataSourceSupplier {
                export class FirstAvailableDataSource extends AbstractDataSource<any> {
                    public static class: java.lang.Class<FirstAvailableDataSource>;
                    public isFinished(): boolean;
                    public constructor(param0: FirstAvailableDataSourceSupplier<any>);
                    public getProgress(): number;
                    public constructor();
                    public hasResult(): boolean;
                    public close(): boolean;
                    public subscribe(param0: DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
                    public getFailureCause(): java.lang.Throwable;
                    public getResult(): any;
                    public hasFailed(): boolean;
                    public isClosed(): boolean;
                }
                export namespace FirstAvailableDataSource {
                    export class InternalDataSubscriber extends DataSubscriber<any> {
                        public static class: java.lang.Class<InternalDataSubscriber>;
                        public onNewResult(param0: DataSource<any>): void;
                        public onCancellation(param0: DataSource<any>): void;
                        public onFailure(param0: DataSource<any>): void;
                        public onProgressUpdate(param0: DataSource<any>): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace datasource {
            export class IncreasingQualityDataSourceSupplier<T> extends common.internal.Supplier<DataSource<any>> {
                public static class: java.lang.Class<IncreasingQualityDataSourceSupplier<any>>;
                public static create(param0: java.util.List<any>): IncreasingQualityDataSourceSupplier<any>;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public get(): any;
                public toString(): string;
                public get(): DataSource<any>;
            }
            export namespace IncreasingQualityDataSourceSupplier {
                export class IncreasingQualityDataSource extends AbstractDataSource<any> {
                    public static class: java.lang.Class<IncreasingQualityDataSource>;
                    public isFinished(): boolean;
                    public getProgress(): number;
                    public constructor();
                    public hasResult(): boolean;
                    public close(): boolean;
                    public subscribe(param0: DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
                    public getFailureCause(): java.lang.Throwable;
                    public getResult(): any;
                    public hasFailed(): boolean;
                    public constructor(param0: IncreasingQualityDataSourceSupplier<any>);
                    public isClosed(): boolean;
                }
                export namespace IncreasingQualityDataSource {
                    export class InternalDataSubscriber extends DataSubscriber<any> {
                        public static class: java.lang.Class<InternalDataSubscriber>;
                        public onNewResult(param0: DataSource<any>): void;
                        public onCancellation(param0: DataSource<any>): void;
                        public onFailure(param0: DataSource<any>): void;
                        public constructor(param0: IncreasingQualityDataSource, param1: number);
                        public onProgressUpdate(param0: DataSource<any>): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace datasource {
            export class RetainingDataSourceSupplier<T> extends common.internal.Supplier<DataSource<any>> {
                public static class: java.lang.Class<RetainingDataSourceSupplier<any>>;
                public get(): any;
                public replaceSupplier(param0: common.internal.Supplier<DataSource<any>>): void;
                public get(): DataSource<any>;
                public constructor();
            }
            export namespace RetainingDataSourceSupplier {
                export class RetainingDataSource<T> extends AbstractDataSource<any> {
                    public static class: java.lang.Class<RetainingDataSource<any>>;
                    public isFinished(): boolean;
                    public getProgress(): number;
                    public setSupplier(param0: common.internal.Supplier<DataSource<any>>): void;
                    public hasResult(): boolean;
                    public close(): boolean;
                    public subscribe(param0: DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
                    public getFailureCause(): java.lang.Throwable;
                    public getResult(): any;
                    public hasFailed(): boolean;
                    public isClosed(): boolean;
                }
                export namespace RetainingDataSource {
                    export class InternalDataSubscriber extends DataSubscriber<any> {
                        public static class: java.lang.Class<InternalDataSubscriber>;
                        public onNewResult(param0: DataSource<any>): void;
                        public onCancellation(param0: DataSource<any>): void;
                        public onFailure(param0: DataSource<any>): void;
                        public onProgressUpdate(param0: DataSource<any>): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace datasource {
            export class SimpleDataSource<T> extends AbstractDataSource<any> {
                public static class: java.lang.Class<SimpleDataSource<any>>;
                public getResult(): any;
                public static create(): SimpleDataSource<any>;
                public hasFailed(): boolean;
                public close(): boolean;
                public isClosed(): boolean;
                public isFinished(): boolean;
                public setProgress(param0: number): boolean;
                public setResult(param0: any, param1: boolean): boolean;
                public getFailureCause(): java.lang.Throwable;
                public getProgress(): number;
                public setResult(param0: any): boolean;
                public hasResult(): boolean;
                public subscribe(param0: DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
                public setFailure(param0: java.lang.Throwable): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawable {
            export namespace base {
                export class DrawableWithCaches extends java.lang.Object {
                    public static class: java.lang.Class<DrawableWithCaches>;
                    /**
                     * Constructs a new instance of the com.facebook.drawable.base.DrawableWithCaches interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { dropCaches(): void });
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
            export class BuildConfig extends java.lang.Object {
                public static class: java.lang.Class<BuildConfig>;
                public static DEBUG: boolean;
                public static APPLICATION_ID: string;
                public static BUILD_TYPE: string;
                public static FLAVOR: string;
                public static VERSION_CODE: number;
                public static VERSION_NAME: string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace backends {
                export namespace pipeline {
                    export class BuildConfig extends java.lang.Object {
                        public static class: java.lang.Class<BuildConfig>;
                        public static DEBUG: boolean;
                        public static APPLICATION_ID: string;
                        public static BUILD_TYPE: string;
                        public static FLAVOR: string;
                        public static VERSION_CODE: number;
                        public static VERSION_NAME: string;
                        public constructor();
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
                    export class DraweeConfig extends java.lang.Object {
                        public static class: java.lang.Class<DraweeConfig>;
                        public getDebugOverlayEnabledSupplier(): common.internal.Supplier<java.lang.Boolean>;
                        public getCustomDrawableFactories(): common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>;
                        public static newBuilder(): DraweeConfig.Builder;
                        public getPipelineDraweeControllerFactory(): PipelineDraweeControllerFactory;
                    }
                    export namespace DraweeConfig {
                        export class Builder extends java.lang.Object {
                            public static class: java.lang.Class<Builder>;
                            public constructor();
                            public setDrawDebugOverlay(param0: boolean): Builder;
                            public build(): DraweeConfig;
                            public setDebugOverlayEnabledSupplier(param0: common.internal.Supplier<java.lang.Boolean>): Builder;
                            public addCustomDrawableFactory(param0: imagepipeline.drawable.DrawableFactory): Builder;
                            public setPipelineDraweeControllerFactory(param0: PipelineDraweeControllerFactory): Builder;
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
                    export class Fresco extends java.lang.Object {
                        public static class: java.lang.Class<Fresco>;
                        public static newDraweeControllerBuilder(): PipelineDraweeControllerBuilder;
                        public static getImagePipelineFactory(): imagepipeline.core.ImagePipelineFactory;
                        public static initialize(param0: globalAndroid.content.Context, param1: imagepipeline.core.ImagePipelineConfig): void;
                        public static initialize(param0: globalAndroid.content.Context, param1: imagepipeline.core.ImagePipelineConfig, param2: DraweeConfig): void;
                        public static shutDown(): void;
                        public static initialize(param0: globalAndroid.content.Context): void;
                        public static hasBeenInitialized(): boolean;
                        public static getImagePipeline(): imagepipeline.core.ImagePipeline;
                        public static getDraweeControllerBuilderSupplier(): PipelineDraweeControllerBuilderSupplier;
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
                    export class PipelineDraweeController extends controller.AbstractDraweeController<
                        common.references.CloseableReference<imagepipeline.image.CloseableImage>,
                        imagepipeline.image.ImageInfo
                    > {
                        public static class: java.lang.Class<PipelineDraweeController>;
                        public getImageInfo(param0: common.references.CloseableReference<imagepipeline.image.CloseableImage>): imagepipeline.image.ImageInfo;
                        public constructor(param0: components.DeferredReleaser, param1: java.util.concurrent.Executor, param2: string, param3: any);
                        public setCustomDrawableFactories(param0: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>): void;
                        public constructor(
                            param0: globalAndroid.content.res.Resources,
                            param1: components.DeferredReleaser,
                            param2: imagepipeline.drawable.DrawableFactory,
                            param3: java.util.concurrent.Executor,
                            param4: imagepipeline.cache.MemoryCache<cache.common.CacheKey, imagepipeline.image.CloseableImage>,
                            param5: common.internal.Supplier<datasource.DataSource<common.references.CloseableReference<imagepipeline.image.CloseableImage>>>,
                            param6: string,
                            param7: cache.common.CacheKey,
                            param8: any
                        );
                        public createDrawable(param0: common.references.CloseableReference<imagepipeline.image.CloseableImage>): globalAndroid.graphics.drawable.Drawable;
                        public releaseImage(param0: common.references.CloseableReference<imagepipeline.image.CloseableImage>): void;
                        public onViewportVisibilityHint(param0: boolean): void;
                        public setImageOriginListener(param0: info.ImageOriginListener): void;
                        public releaseImage(param0: any): void;
                        public initialize(
                            param0: common.internal.Supplier<datasource.DataSource<common.references.CloseableReference<imagepipeline.image.CloseableImage>>>,
                            param1: string,
                            param2: cache.common.CacheKey,
                            param3: any,
                            param4: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>,
                            param5: info.ImageOriginListener
                        ): void;
                        public releaseDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public getCachedImage(): any;
                        public getDataSource(): datasource.DataSource<common.references.CloseableReference<imagepipeline.image.CloseableImage>>;
                        public onClick(): boolean;
                        public setDrawDebugOverlay(param0: boolean): void;
                        public getDataSource(): datasource.DataSource<any>;
                        public initialize(param0: string, param1: any): void;
                        public getHierarchy(): interfaces.DraweeHierarchy;
                        public getContentDescription(): string;
                        public getImageInfo(param0: any): any;
                        public getImageHash(param0: common.references.CloseableReference<imagepipeline.image.CloseableImage>): number;
                        public onImageLoadedFromCacheImmediately(param0: string, param1: any): void;
                        public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                        public setHierarchy(param0: interfaces.DraweeHierarchy): void;
                        public onImageLoadedFromCacheImmediately(param0: string, param1: common.references.CloseableReference<imagepipeline.image.CloseableImage>): void;
                        public release(): void;
                        public getCacheKey(): cache.common.CacheKey;
                        public toString(): string;
                        public getAnimatable(): globalAndroid.graphics.drawable.Animatable;
                        public getCachedImage(): common.references.CloseableReference<imagepipeline.image.CloseableImage>;
                        public getImageHash(param0: any): number;
                        public onAttach(): void;
                        public getResources(): globalAndroid.content.res.Resources;
                        public setContentDescription(param0: string): void;
                        public createDrawable(param0: any): globalAndroid.graphics.drawable.Drawable;
                        public constructor(
                            param0: globalAndroid.content.res.Resources,
                            param1: components.DeferredReleaser,
                            param2: imagepipeline.drawable.DrawableFactory,
                            param3: java.util.concurrent.Executor,
                            param4: imagepipeline.cache.MemoryCache<cache.common.CacheKey, imagepipeline.image.CloseableImage>,
                            param5: common.internal.Supplier<datasource.DataSource<common.references.CloseableReference<imagepipeline.image.CloseableImage>>>,
                            param6: string,
                            param7: cache.common.CacheKey,
                            param8: any,
                            param9: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>
                        );
                        public isSameImageRequest(param0: interfaces.DraweeController): boolean;
                        public onDetach(): void;
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
                    export class PipelineDraweeControllerBuilder extends controller.AbstractDraweeControllerBuilder<
                        PipelineDraweeControllerBuilder,
                        imagepipeline.request.ImageRequest,
                        common.references.CloseableReference<imagepipeline.image.CloseableImage>,
                        imagepipeline.image.ImageInfo
                    > {
                        public static class: java.lang.Class<PipelineDraweeControllerBuilder>;
                        public setCustomDrawableFactory(param0: imagepipeline.drawable.DrawableFactory): PipelineDraweeControllerBuilder;
                        public setCallerContext(param0: any): interfaces.SimpleDraweeControllerBuilder;
                        public setCustomDrawableFactories(param0: native.Array<imagepipeline.drawable.DrawableFactory>): PipelineDraweeControllerBuilder;
                        public setUri(param0: globalAndroid.net.Uri): interfaces.SimpleDraweeControllerBuilder;
                        public setUri(param0: string): interfaces.SimpleDraweeControllerBuilder;
                        public obtainController(): PipelineDraweeController;
                        public build(): interfaces.DraweeController;
                        public getDataSourceForRequest(
                            param0: imagepipeline.request.ImageRequest,
                            param1: any,
                            param2: controller.AbstractDraweeControllerBuilder.CacheLevel
                        ): datasource.DataSource<common.references.CloseableReference<imagepipeline.image.CloseableImage>>;
                        public constructor(param0: globalAndroid.content.Context, param1: java.util.Set<controller.ControllerListener<any>>);
                        public build(): controller.AbstractDraweeController<any, any>;
                        public static convertCacheLevelToRequestLevel(param0: controller.AbstractDraweeControllerBuilder.CacheLevel): imagepipeline.request.ImageRequest.RequestLevel;
                        public setCallerContext(param0: any): any;
                        public setImageOriginListener(param0: info.ImageOriginListener): PipelineDraweeControllerBuilder;
                        public setCustomDrawableFactories(param0: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>): PipelineDraweeControllerBuilder;
                        public setUri(param0: globalAndroid.net.Uri): PipelineDraweeControllerBuilder;
                        public constructor(
                            param0: globalAndroid.content.Context,
                            param1: PipelineDraweeControllerFactory,
                            param2: imagepipeline.core.ImagePipeline,
                            param3: java.util.Set<controller.ControllerListener<any>>
                        );
                        public obtainController(): controller.AbstractDraweeController<any, any>;
                        public getDataSourceForRequest(param0: any, param1: any, param2: controller.AbstractDraweeControllerBuilder.CacheLevel): datasource.DataSource<any>;
                        public setOldController(param0: interfaces.DraweeController): interfaces.SimpleDraweeControllerBuilder;
                        public setOldController(param0: interfaces.DraweeController): any;
                        public setUri(param0: string): PipelineDraweeControllerBuilder;
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
                    export class PipelineDraweeControllerBuilderSupplier extends common.internal.Supplier<PipelineDraweeControllerBuilder> {
                        public static class: java.lang.Class<PipelineDraweeControllerBuilderSupplier>;
                        public constructor(param0: globalAndroid.content.Context);
                        public constructor(param0: globalAndroid.content.Context, param1: DraweeConfig);
                        public constructor(
                            param0: globalAndroid.content.Context,
                            param1: imagepipeline.core.ImagePipelineFactory,
                            param2: java.util.Set<controller.ControllerListener<any>>,
                            param3: DraweeConfig
                        );
                        public get(): PipelineDraweeControllerBuilder;
                        public constructor(param0: globalAndroid.content.Context, param1: imagepipeline.core.ImagePipelineFactory, param2: DraweeConfig);
                        public get(): any;
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
                    export class PipelineDraweeControllerFactory extends java.lang.Object {
                        public static class: java.lang.Class<PipelineDraweeControllerFactory>;
                        public constructor();
                        public newController(
                            param0: common.internal.Supplier<datasource.DataSource<common.references.CloseableReference<imagepipeline.image.CloseableImage>>>,
                            param1: string,
                            param2: cache.common.CacheKey,
                            param3: any
                        ): PipelineDraweeController;
                        public internalCreateController(
                            param0: globalAndroid.content.res.Resources,
                            param1: components.DeferredReleaser,
                            param2: imagepipeline.drawable.DrawableFactory,
                            param3: java.util.concurrent.Executor,
                            param4: imagepipeline.cache.MemoryCache<cache.common.CacheKey, imagepipeline.image.CloseableImage>,
                            param5: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>,
                            param6: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>,
                            param7: common.internal.Supplier<datasource.DataSource<common.references.CloseableReference<imagepipeline.image.CloseableImage>>>,
                            param8: string,
                            param9: cache.common.CacheKey,
                            param10: any
                        ): PipelineDraweeController;
                        public newController(
                            param0: common.internal.Supplier<datasource.DataSource<common.references.CloseableReference<imagepipeline.image.CloseableImage>>>,
                            param1: string,
                            param2: cache.common.CacheKey,
                            param3: any,
                            param4: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>,
                            param5: info.ImageOriginListener
                        ): PipelineDraweeController;
                        public init(
                            param0: globalAndroid.content.res.Resources,
                            param1: components.DeferredReleaser,
                            param2: imagepipeline.drawable.DrawableFactory,
                            param3: java.util.concurrent.Executor,
                            param4: imagepipeline.cache.MemoryCache<cache.common.CacheKey, imagepipeline.image.CloseableImage>,
                            param5: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>,
                            param6: common.internal.Supplier<java.lang.Boolean>
                        ): void;
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
                        export class ImageOrigin extends java.lang.Object implements java.lang.annotation.Annotation {
                            public static class: java.lang.Class<ImageOrigin>;
                            /**
                             * Constructs a new instance of the com.facebook.drawee.backends.pipeline.info.ImageOrigin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: { annotationType(): java.lang.Class<any>; equals(param0: any): boolean; hashCode(): number; toString(): string });
                            public constructor();
                            public static UNKNOWN: number;
                            public static DISK: number;
                            public static MEMORY_BITMAP: number;
                            public static NETWORK: number;
                            public static MEMORY_ENCODED: number;
                            public hashCode(): number;
                            public annotationType(): java.lang.Class<any>;
                            public toString(): string;
                            public equals(param0: any): boolean;
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
                        export class ImageOriginListener extends java.lang.Object {
                            public static class: java.lang.Class<ImageOriginListener>;
                            /**
                             * Constructs a new instance of the com.facebook.drawee.backends.pipeline.info.ImageOriginListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: { onImageLoaded(param0: string, param1: number, param2: boolean): void });
                            public constructor();
                            public onImageLoaded(param0: string, param1: number, param2: boolean): void;
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
            export namespace components {
                export class DeferredReleaser extends java.lang.Object {
                    public static class: java.lang.Class<DeferredReleaser>;
                    public constructor();
                    public scheduleDeferredRelease(param0: DeferredReleaser.Releasable): void;
                    public static getInstance(): DeferredReleaser;
                    public cancelDeferredRelease(param0: DeferredReleaser.Releasable): void;
                }
                export namespace DeferredReleaser {
                    export class Releasable extends java.lang.Object {
                        public static class: java.lang.Class<Releasable>;
                        /**
                         * Constructs a new instance of the com.facebook.drawee.components.DeferredReleaser$Releasable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { release(): void });
                        public constructor();
                        public release(): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace components {
                export class DraweeEventTracker extends java.lang.Object {
                    public static class: java.lang.Class<DraweeEventTracker>;
                    public toString(): string;
                    public static newInstance(): DraweeEventTracker;
                    public static disable(): void;
                    public recordEvent(param0: DraweeEventTracker.Event): void;
                }
                export namespace DraweeEventTracker {
                    export class Event {
                        public static class: java.lang.Class<Event>;
                        public static ON_SET_HIERARCHY: Event;
                        public static ON_CLEAR_HIERARCHY: Event;
                        public static ON_SET_CONTROLLER: Event;
                        public static ON_CLEAR_OLD_CONTROLLER: Event;
                        public static ON_CLEAR_CONTROLLER: Event;
                        public static ON_INIT_CONTROLLER: Event;
                        public static ON_ATTACH_CONTROLLER: Event;
                        public static ON_DETACH_CONTROLLER: Event;
                        public static ON_RELEASE_CONTROLLER: Event;
                        public static ON_DATASOURCE_SUBMIT: Event;
                        public static ON_DATASOURCE_RESULT: Event;
                        public static ON_DATASOURCE_RESULT_INT: Event;
                        public static ON_DATASOURCE_FAILURE: Event;
                        public static ON_DATASOURCE_FAILURE_INT: Event;
                        public static ON_HOLDER_ATTACH: Event;
                        public static ON_HOLDER_DETACH: Event;
                        public static ON_DRAWABLE_SHOW: Event;
                        public static ON_DRAWABLE_HIDE: Event;
                        public static ON_ACTIVITY_START: Event;
                        public static ON_ACTIVITY_STOP: Event;
                        public static ON_RUN_CLEAR_CONTROLLER: Event;
                        public static ON_SCHEDULE_CLEAR_CONTROLLER: Event;
                        public static ON_SAME_CONTROLLER_SKIPPED: Event;
                        public static ON_SUBMIT_CACHE_HIT: Event;
                        public static values(): native.Array<Event>;
                        public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                        public static valueOf(param0: string): Event;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace components {
                export class RetryManager extends java.lang.Object {
                    public static class: java.lang.Class<RetryManager>;
                    public reset(): void;
                    public static newInstance(): RetryManager;
                    public constructor();
                    public setMaxTapToRetryAttemps(param0: number): void;
                    public shouldRetryOnTap(): boolean;
                    public init(): void;
                    public setTapToRetryEnabled(param0: boolean): void;
                    public notifyTapToRetry(): void;
                    public isTapToRetryEnabled(): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace controller {
                export abstract class AbstractDraweeController<T, INFO> extends java.lang.Object {
                    public static class: java.lang.Class<AbstractDraweeController<any, any>>;
                    public setHierarchy(param0: interfaces.DraweeHierarchy): void;
                    public setControllerViewportVisibilityListener(param0: ControllerViewportVisibilityListener): void;
                    public getId(): string;
                    public setContentDescription(param0: string): void;
                    public getControllerListener(): ControllerListener<INFO>;
                    public setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public onAttach(): void;
                    public getContentDescription(): string;
                    public getHierarchy(): interfaces.DraweeHierarchy;
                    public onImageLoadedFromCacheImmediately(param0: string, param1: T): void;
                    public constructor(param0: components.DeferredReleaser, param1: java.util.concurrent.Executor, param2: string, param3: any);
                    public toString(): string;
                    public onClick(): boolean;
                    public getDataSource(): datasource.DataSource<T>;
                    public getControllerOverlay(): globalAndroid.graphics.drawable.Drawable;
                    public onDetach(): void;
                    public onViewportVisibilityHint(param0: boolean): void;
                    public removeControllerListener(param0: ControllerListener<any>): void;
                    public shouldHandleGesture(): boolean;
                    public setRetainImageOnFailure(param0: boolean): void;
                    public release(): void;
                    public initialize(param0: string, param1: any): void;
                    public getImageHash(param0: T): number;
                    public addControllerListener(param0: ControllerListener<any>): void;
                    public releaseImage(param0: T): void;
                    public getGestureDetector(): gestures.GestureDetector;
                    public submitRequest(): void;
                    public releaseDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public setGestureDetector(param0: gestures.GestureDetector): void;
                    public getAnimatable(): globalAndroid.graphics.drawable.Animatable;
                    public createDrawable(param0: T): globalAndroid.graphics.drawable.Drawable;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public isSameImageRequest(param0: interfaces.DraweeController): boolean;
                    public getCallerContext(): any;
                    public getCachedImage(): T;
                    public getImageInfo(param0: T): INFO;
                    public getRetryManager(): components.RetryManager;
                    public getImageClass(param0: T): string;
                }
                export namespace AbstractDraweeController {
                    export class InternalForwardingListener<INFO> extends ForwardingControllerListener<any> {
                        public static class: java.lang.Class<InternalForwardingListener<any>>;
                        public onFinalImageSet(param0: string, param1: any, param2: globalAndroid.graphics.drawable.Animatable): void;
                        public onRelease(param0: string): void;
                        public onIntermediateImageSet(param0: string, param1: any): void;
                        public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
                        public onFailure(param0: string, param1: java.lang.Throwable): void;
                        public static createInternal(param0: ControllerListener<any>, param1: ControllerListener<any>): InternalForwardingListener<any>;
                        public onSubmit(param0: string, param1: any): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace controller {
                export abstract class AbstractDraweeControllerBuilder<BUILDER, REQUEST, IMAGE, INFO> extends interfaces.SimpleDraweeControllerBuilder {
                    public static class: java.lang.Class<AbstractDraweeControllerBuilder<any, any, any, any>>;
                    public getRetainImageOnFailure(): boolean;
                    public setAutoPlayAnimations(param0: boolean): any;
                    public getFirstAvailableDataSourceSupplier(param0: native.Array<any>, param1: boolean): common.internal.Supplier<datasource.DataSource<any>>;
                    public getFirstAvailableImageRequests(): native.Array<any>;
                    public getDataSourceSupplierForRequest(param0: any): common.internal.Supplier<datasource.DataSource<any>>;
                    public setDataSourceSupplier(param0: common.internal.Supplier<datasource.DataSource<any>>): any;
                    public setOldController(param0: interfaces.DraweeController): any;
                    public getAutoPlayAnimations(): boolean;
                    public validate(): void;
                    public maybeAttachListeners(param0: AbstractDraweeController<any, any>): void;
                    public maybeBuildAndSetRetryManager(param0: AbstractDraweeController<any, any>): void;
                    public getContentDescription(): string;
                    public getImageRequest(): any;
                    public getDataSourceSupplierForRequest(param0: any, param1: AbstractDraweeControllerBuilder.CacheLevel): common.internal.Supplier<datasource.DataSource<any>>;
                    public setControllerViewportVisibilityListener(param0: ControllerViewportVisibilityListener): any;
                    public build(): AbstractDraweeController<any, any>;
                    public getControllerListener(): ControllerListener<any>;
                    public setFirstAvailableImageRequests(param0: native.Array<any>, param1: boolean): any;
                    public getContext(): globalAndroid.content.Context;
                    public setImageRequest(param0: any): any;
                    public reset(): any;
                    public maybeBuildAndSetGestureDetector(param0: AbstractDraweeController<any, any>): void;
                    public setOldController(param0: interfaces.DraweeController): interfaces.SimpleDraweeControllerBuilder;
                    public obtainController(): AbstractDraweeController<any, any>;
                    public setUri(param0: string): interfaces.SimpleDraweeControllerBuilder;
                    public setCallerContext(param0: any): interfaces.SimpleDraweeControllerBuilder;
                    public build(): interfaces.DraweeController;
                    public setLowResImageRequest(param0: any): any;
                    public setCallerContext(param0: any): any;
                    public setTapToRetryEnabled(param0: boolean): any;
                    public getOldController(): interfaces.DraweeController;
                    public getLowResImageRequest(): any;
                    public getDataSourceForRequest(param0: any, param1: any, param2: AbstractDraweeControllerBuilder.CacheLevel): datasource.DataSource<any>;
                    public setFirstAvailableImageRequests(param0: native.Array<any>): any;
                    public setRetainImageOnFailure(param0: boolean): any;
                    public obtainDataSourceSupplier(): common.internal.Supplier<datasource.DataSource<any>>;
                    public getThis(): any;
                    public setControllerListener(param0: ControllerListener<any>): any;
                    public setContentDescription(param0: string): any;
                    public buildController(): AbstractDraweeController<any, any>;
                    public getControllerViewportVisibilityListener(): ControllerViewportVisibilityListener;
                    public static generateUniqueControllerId(): string;
                    public getCallerContext(): any;
                    public getDataSourceSupplier(): common.internal.Supplier<datasource.DataSource<any>>;
                    public constructor(param0: globalAndroid.content.Context, param1: java.util.Set<ControllerListener<any>>);
                    public getTapToRetryEnabled(): boolean;
                    public setUri(param0: globalAndroid.net.Uri): interfaces.SimpleDraweeControllerBuilder;
                }
                export namespace AbstractDraweeControllerBuilder {
                    export class CacheLevel {
                        public static class: java.lang.Class<CacheLevel>;
                        public static FULL_FETCH: CacheLevel;
                        public static DISK_CACHE: CacheLevel;
                        public static BITMAP_MEMORY_CACHE: CacheLevel;
                        public static valueOf(param0: string): CacheLevel;
                        public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                        public static values(): native.Array<CacheLevel>;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace controller {
                export class BaseControllerListener<INFO> extends ControllerListener<any> {
                    public static class: java.lang.Class<BaseControllerListener<any>>;
                    public onFinalImageSet(param0: string, param1: any, param2: globalAndroid.graphics.drawable.Animatable): void;
                    public onIntermediateImageSet(param0: string, param1: any): void;
                    public onRelease(param0: string): void;
                    public constructor();
                    public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
                    public onFailure(param0: string, param1: java.lang.Throwable): void;
                    public static getNoOpListener(): ControllerListener<any>;
                    public onSubmit(param0: string, param1: any): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace controller {
                export class ControllerListener<INFO> extends java.lang.Object {
                    public static class: java.lang.Class<ControllerListener<any>>;
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

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace controller {
                export class ControllerViewportVisibilityListener extends java.lang.Object {
                    public static class: java.lang.Class<ControllerViewportVisibilityListener>;
                    /**
                     * Constructs a new instance of the com.facebook.drawee.controller.ControllerViewportVisibilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onDraweeViewportEntry(param0: string): void; onDraweeViewportExit(param0: string): void });
                    public constructor();
                    public onDraweeViewportEntry(param0: string): void;
                    public onDraweeViewportExit(param0: string): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace controller {
                export class ForwardingControllerListener<INFO> extends ControllerListener<any> {
                    public static class: java.lang.Class<ForwardingControllerListener<any>>;
                    public clearListeners(): void;
                    public onFinalImageSet(param0: string, param1: any, param2: globalAndroid.graphics.drawable.Animatable): void;
                    public onIntermediateImageSet(param0: string, param1: any): void;
                    public onRelease(param0: string): void;
                    public static create(): ForwardingControllerListener<any>;
                    public addListener(param0: ControllerListener<any>): void;
                    public onFailure(param0: string, param1: java.lang.Throwable): void;
                    public static of(param0: ControllerListener<any>, param1: ControllerListener<any>): ForwardingControllerListener<any>;
                    public onSubmit(param0: string, param1: any): void;
                    public constructor();
                    public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
                    public removeListener(param0: ControllerListener<any>): void;
                    public static of(param0: ControllerListener<any>): ForwardingControllerListener<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace debug {
                export class DebugControllerOverlayDrawable extends globalAndroid.graphics.drawable.Drawable implements listener.ImageLoadingTimeListener {
                    public static class: java.lang.Class<DebugControllerOverlayDrawable>;
                    public setImageSize(param0: number): void;
                    public reset(): void;
                    public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                    public onFinalImageSet(param0: number): void;
                    public setImageId(param0: string): void;
                    public setAlpha(param0: number): void;
                    public setImageFormat(param0: string): void;
                    public setFinalImageTimeMs(param0: number): void;
                    public setTextGravity(param0: number): void;
                    public setDimensions(param0: number, param1: number): void;
                    public constructor();
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setControllerId(param0: string): void;
                    public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
                    public setAnimationInfo(param0: number, param1: number): void;
                    public setScaleType(param0: drawable.ScalingUtils.ScaleType): void;
                    public getOpacity(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace debug {
                export namespace listener {
                    export class ImageLoadingTimeControllerListener extends controller.BaseControllerListener<any> {
                        public static class: java.lang.Class<ImageLoadingTimeControllerListener>;
                        public onFinalImageSet(param0: string, param1: any, param2: globalAndroid.graphics.drawable.Animatable): void;
                        public onRelease(param0: string): void;
                        public constructor();
                        public constructor(param0: ImageLoadingTimeListener);
                        public onIntermediateImageSet(param0: string, param1: any): void;
                        public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
                        public onFailure(param0: string, param1: java.lang.Throwable): void;
                        public onSubmit(param0: string, param1: any): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace debug {
                export namespace listener {
                    export class ImageLoadingTimeListener extends java.lang.Object {
                        public static class: java.lang.Class<ImageLoadingTimeListener>;
                        /**
                         * Constructs a new instance of the com.facebook.drawee.debug.listener.ImageLoadingTimeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onFinalImageSet(param0: number): void });
                        public constructor();
                        public onFinalImageSet(param0: number): void;
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
                export class ArrayDrawable extends globalAndroid.graphics.drawable.Drawable implements globalAndroid.graphics.drawable.Drawable.Callback, TransformCallback, TransformAwareDrawable {
                    public static class: java.lang.Class<ArrayDrawable>;
                    public getDrawable(param0: number): globalAndroid.graphics.drawable.Drawable;
                    public getRootBounds(param0: globalAndroid.graphics.RectF): void;
                    public setDither(param0: boolean): void;
                    public onStateChange(param0: native.Array<number>): boolean;
                    public isStateful(): boolean;
                    public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                    public onLevelChange(param0: number): boolean;
                    public getIntrinsicWidth(): number;
                    public setDrawable(param0: number, param1: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public constructor(param0: native.Array<globalAndroid.graphics.drawable.Drawable>);
                    public setHotspot(param0: number, param1: number): void;
                    public setFilterBitmap(param0: boolean): void;
                    public constructor();
                    public getPadding(param0: globalAndroid.graphics.Rect): boolean;
                    public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
                    public setTransformCallback(param0: TransformCallback): void;
                    public getOpacity(): number;
                    public getDrawableParentForIndex(param0: number): DrawableParent;
                    public getNumberOfLayers(): number;
                    public getIntrinsicHeight(): number;
                    public setAlpha(param0: number): void;
                    public mutate(): globalAndroid.graphics.drawable.Drawable;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public setVisible(param0: boolean, param1: boolean): boolean;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class AutoRotateDrawable extends ForwardingDrawable implements java.lang.Runnable, CloneableDrawable {
                    public static class: java.lang.Class<AutoRotateDrawable>;
                    public reset(): void;
                    public getRootBounds(param0: globalAndroid.graphics.RectF): void;
                    public cloneDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public run(): void;
                    public cloneDrawable(): AutoRotateDrawable;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                    public setClockwise(param0: boolean): void;
                    public getDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public constructor();
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number);
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: boolean);
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                    public setTransformCallback(param0: TransformCallback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class CloneableDrawable extends java.lang.Object {
                    public static class: java.lang.Class<CloneableDrawable>;
                    /**
                     * Constructs a new instance of the com.facebook.drawee.drawable.CloneableDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { cloneDrawable(): globalAndroid.graphics.drawable.Drawable });
                    public constructor();
                    public cloneDrawable(): globalAndroid.graphics.drawable.Drawable;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class DrawableParent extends java.lang.Object {
                    public static class: java.lang.Class<DrawableParent>;
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

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class DrawableProperties extends java.lang.Object {
                    public static class: java.lang.Class<DrawableProperties>;
                    public setDither(param0: boolean): void;
                    public setFilterBitmap(param0: boolean): void;
                    public constructor();
                    public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                    public setAlpha(param0: number): void;
                    public applyTo(param0: globalAndroid.graphics.drawable.Drawable): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class DrawableUtils extends java.lang.Object {
                    public static class: java.lang.Class<DrawableUtils>;
                    public constructor();
                    public static cloneDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public static copyProperties(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable): void;
                    public static multiplyColorAlpha(param0: number, param1: number): number;
                    public static setDrawableProperties(param0: globalAndroid.graphics.drawable.Drawable, param1: DrawableProperties): void;
                    public static setCallbacks(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable.Callback, param2: TransformCallback): void;
                    public static getOpacityFromColor(param0: number): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class FadeDrawable extends ArrayDrawable {
                    public static class: java.lang.Class<FadeDrawable>;
                    public static TRANSITION_STARTING: number;
                    public static TRANSITION_RUNNING: number;
                    public static TRANSITION_NONE: number;
                    public invalidateSelf(): void;
                    public getRootBounds(param0: globalAndroid.graphics.RectF): void;
                    public beginBatchMode(): void;
                    public setTransitionDuration(param0: number): void;
                    public constructor(param0: native.Array<globalAndroid.graphics.drawable.Drawable>);
                    public getCurrentTimeMs(): number;
                    public getTransitionState(): number;
                    public constructor();
                    public getTransitionDuration(): number;
                    public fadeInLayer(param0: number): void;
                    public fadeOutLayer(param0: number): void;
                    public finishTransitionImmediately(): void;
                    public fadeUpToLayer(param0: number): void;
                    public setTransformCallback(param0: TransformCallback): void;
                    public getAlpha(): number;
                    public reset(): void;
                    public fadeToLayer(param0: number): void;
                    public isLayerOn(param0: number): boolean;
                    public setAlpha(param0: number): void;
                    public endBatchMode(): void;
                    public fadeOutAllLayers(): void;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                    public fadeInAllLayers(): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class ForwardingDrawable extends globalAndroid.graphics.drawable.Drawable
                    implements globalAndroid.graphics.drawable.Drawable.Callback, TransformCallback, TransformAwareDrawable, DrawableParent {
                    public static class: java.lang.Class<ForwardingDrawable>;
                    public mTransformCallback: TransformCallback;
                    public getRootBounds(param0: globalAndroid.graphics.RectF): void;
                    public setDither(param0: boolean): void;
                    public onStateChange(param0: native.Array<number>): boolean;
                    public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                    public isStateful(): boolean;
                    public onLevelChange(param0: number): boolean;
                    public getIntrinsicWidth(): number;
                    public getDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public setHotspot(param0: number, param1: number): void;
                    public setCurrent(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public setFilterBitmap(param0: boolean): void;
                    public constructor();
                    public getPadding(param0: globalAndroid.graphics.Rect): boolean;
                    public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
                    public setTransformCallback(param0: TransformCallback): void;
                    public getOpacity(): number;
                    public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
                    public getIntrinsicHeight(): number;
                    public getCurrent(): globalAndroid.graphics.drawable.Drawable;
                    public setAlpha(param0: number): void;
                    public getParentTransform(param0: globalAndroid.graphics.Matrix): void;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                    public mutate(): globalAndroid.graphics.drawable.Drawable;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public setVisible(param0: boolean, param1: boolean): boolean;
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setCurrentWithoutInvalidate(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                    public getTransformedBounds(param0: globalAndroid.graphics.RectF): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class MatrixDrawable extends ForwardingDrawable {
                    public static class: java.lang.Class<MatrixDrawable>;
                    public getRootBounds(param0: globalAndroid.graphics.RectF): void;
                    public getMatrix(): globalAndroid.graphics.Matrix;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Matrix);
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                    public getDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public setCurrent(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public constructor();
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setMatrix(param0: globalAndroid.graphics.Matrix): void;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                    public setTransformCallback(param0: TransformCallback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class OrientedDrawable extends ForwardingDrawable {
                    public static class: java.lang.Class<OrientedDrawable>;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: number);
                    public getRootBounds(param0: globalAndroid.graphics.RectF): void;
                    public getIntrinsicHeight(): number;
                    public getIntrinsicWidth(): number;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                    public getDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public constructor();
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number);
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                    public setTransformCallback(param0: TransformCallback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class ProgressBarDrawable extends globalAndroid.graphics.drawable.Drawable implements CloneableDrawable {
                    public static class: java.lang.Class<ProgressBarDrawable>;
                    public getBarWidth(): number;
                    public setHideWhenZero(param0: boolean): void;
                    public getHideWhenZero(): boolean;
                    public setColor(param0: number): void;
                    public cloneDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public getColor(): number;
                    public setIsVertical(param0: boolean): void;
                    public getIsVertical(): boolean;
                    public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                    public onLevelChange(param0: number): boolean;
                    public setBackgroundColor(param0: number): void;
                    public setAlpha(param0: number): void;
                    public getRadius(): number;
                    public setBarWidth(param0: number): void;
                    public constructor();
                    public getPadding(param0: globalAndroid.graphics.Rect): boolean;
                    public setPadding(param0: number): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setRadius(param0: number): void;
                    public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
                    public getBackgroundColor(): number;
                    public getOpacity(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class Rounded extends java.lang.Object {
                    public static class: java.lang.Class<Rounded>;
                    /**
                     * Constructs a new instance of the com.facebook.drawee.drawable.Rounded interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        setCircle(param0: boolean): void;
                        isCircle(): boolean;
                        setRadius(param0: number): void;
                        setRadii(param0: native.Array<number>): void;
                        getRadii(): native.Array<number>;
                        setBorder(param0: number, param1: number): void;
                        getBorderColor(): number;
                        getBorderWidth(): number;
                        setPadding(param0: number): void;
                        getPadding(): number;
                        setScaleDownInsideBorders(param0: boolean): void;
                        getScaleDownInsideBorders(): boolean;
                    });
                    public constructor();
                    public setScaleDownInsideBorders(param0: boolean): void;
                    public setBorder(param0: number, param1: number): void;
                    public getBorderWidth(): number;
                    public isCircle(): boolean;
                    public getPadding(): number;
                    public setCircle(param0: boolean): void;
                    public getBorderColor(): number;
                    public getRadii(): native.Array<number>;
                    public setPadding(param0: number): void;
                    public setRadius(param0: number): void;
                    public setRadii(param0: native.Array<number>): void;
                    public getScaleDownInsideBorders(): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class RoundedBitmapDrawable extends globalAndroid.graphics.drawable.BitmapDrawable implements TransformAwareDrawable, Rounded {
                    public static class: java.lang.Class<RoundedBitmapDrawable>;
                    public constructor(param0: string);
                    public getBorderColor(): number;
                    public constructor(param0: globalAndroid.content.res.Resources);
                    public constructor(param0: globalAndroid.content.res.Resources, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.graphics.Paint);
                    public setRadii(param0: native.Array<number>): void;
                    public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                    public getBorderWidth(): number;
                    public constructor(param0: java.io.InputStream);
                    public constructor();
                    public setCircle(param0: boolean): void;
                    public getPadding(param0: globalAndroid.graphics.Rect): boolean;
                    public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
                    public setTransformCallback(param0: TransformCallback): void;
                    public setScaleDownInsideBorders(param0: boolean): void;
                    public setBorder(param0: number, param1: number): void;
                    public constructor(param0: globalAndroid.graphics.Bitmap);
                    public constructor(param0: globalAndroid.content.res.Resources, param1: string);
                    public getRadii(): native.Array<number>;
                    public setAlpha(param0: number): void;
                    public static fromBitmapDrawable(param0: globalAndroid.content.res.Resources, param1: globalAndroid.graphics.drawable.BitmapDrawable): RoundedBitmapDrawable;
                    public isCircle(): boolean;
                    public getPadding(): number;
                    public setPadding(param0: number): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setRadius(param0: number): void;
                    public constructor(param0: globalAndroid.content.res.Resources, param1: globalAndroid.graphics.Bitmap);
                    public constructor(param0: globalAndroid.content.res.Resources, param1: java.io.InputStream);
                    public getScaleDownInsideBorders(): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class RoundedColorDrawable extends globalAndroid.graphics.drawable.Drawable implements Rounded {
                    public static class: java.lang.Class<RoundedColorDrawable>;
                    public getBorderColor(): number;
                    public setRadii(param0: native.Array<number>): void;
                    public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                    public getBorderWidth(): number;
                    public constructor();
                    public setCircle(param0: boolean): void;
                    public getPadding(param0: globalAndroid.graphics.Rect): boolean;
                    public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
                    public static fromColorDrawable(param0: globalAndroid.graphics.drawable.ColorDrawable): RoundedColorDrawable;
                    public constructor(param0: number);
                    public constructor(param0: number, param1: number);
                    public getOpacity(): number;
                    public setScaleDownInsideBorders(param0: boolean): void;
                    public getAlpha(): number;
                    public setBorder(param0: number, param1: number): void;
                    public setColor(param0: number): void;
                    public getColor(): number;
                    public getRadii(): native.Array<number>;
                    public setAlpha(param0: number): void;
                    public constructor(param0: native.Array<number>, param1: number);
                    public isCircle(): boolean;
                    public getPadding(): number;
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setPadding(param0: number): void;
                    public setRadius(param0: number): void;
                    public getScaleDownInsideBorders(): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class RoundedCornersDrawable extends ForwardingDrawable implements Rounded {
                    public static class: java.lang.Class<RoundedCornersDrawable>;
                    public getRootBounds(param0: globalAndroid.graphics.RectF): void;
                    public getBorderColor(): number;
                    public setRadii(param0: native.Array<number>): void;
                    public getDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public getBorderWidth(): number;
                    public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public constructor();
                    public setCircle(param0: boolean): void;
                    public getPadding(param0: globalAndroid.graphics.Rect): boolean;
                    public setOverlayColor(param0: number): void;
                    public setTransformCallback(param0: TransformCallback): void;
                    public setScaleDownInsideBorders(param0: boolean): void;
                    public setBorder(param0: number, param1: number): void;
                    public getRadii(): native.Array<number>;
                    public getOverlayColor(): number;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public setType(param0: RoundedCornersDrawable.Type): void;
                    public isCircle(): boolean;
                    public getPadding(): number;
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public setPadding(param0: number): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setRadius(param0: number): void;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                    public getScaleDownInsideBorders(): boolean;
                }
                export namespace RoundedCornersDrawable {
                    export class Type {
                        public static class: java.lang.Class<Type>;
                        public static OVERLAY_COLOR: Type;
                        public static CLIPPING: Type;
                        public static valueOf(param0: string): Type;
                        public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                        public static values(): native.Array<Type>;
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
                export class ScaleTypeDrawable extends ForwardingDrawable {
                    public static class: java.lang.Class<ScaleTypeDrawable>;
                    public getRootBounds(param0: globalAndroid.graphics.RectF): void;
                    public setFocusPoint(param0: globalAndroid.graphics.PointF): void;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: ScalingUtils.ScaleType);
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                    public getDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public setCurrent(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public getScaleType(): ScalingUtils.ScaleType;
                    public getFocusPoint(): globalAndroid.graphics.PointF;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public constructor();
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public setScaleType(param0: ScalingUtils.ScaleType): void;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                    public setTransformCallback(param0: TransformCallback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class ScalingUtils extends java.lang.Object {
                    public static class: java.lang.Class<ScalingUtils>;
                    public static getActiveScaleTypeDrawable(param0: globalAndroid.graphics.drawable.Drawable): ScaleTypeDrawable;
                    public constructor();
                }
                export namespace ScalingUtils {
                    export abstract class AbstractScaleType extends java.lang.Object implements ScaleType {
                        public static class: java.lang.Class<AbstractScaleType>;
                        public constructor();
                        public getTransform(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number
                        ): globalAndroid.graphics.Matrix;
                        public getTransformImpl(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number,
                            param6: number,
                            param7: number
                        ): void;
                    }
                    export class InterpolatingScaleType extends java.lang.Object implements ScaleType, StatefulScaleType {
                        public static class: java.lang.Class<InterpolatingScaleType>;
                        public constructor(param0: ScaleType, param1: ScaleType);
                        public getScaleTypeFrom(): ScaleType;
                        public getTransform(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number
                        ): globalAndroid.graphics.Matrix;
                        public getFocusPointFrom(): globalAndroid.graphics.PointF;
                        public toString(): string;
                        public getBoundsTo(): globalAndroid.graphics.Rect;
                        public getBoundsFrom(): globalAndroid.graphics.Rect;
                        public getFocusPointTo(): globalAndroid.graphics.PointF;
                        public getScaleTypeTo(): ScaleType;
                        public constructor(
                            param0: ScaleType,
                            param1: ScaleType,
                            param2: globalAndroid.graphics.Rect,
                            param3: globalAndroid.graphics.Rect,
                            param4: globalAndroid.graphics.PointF,
                            param5: globalAndroid.graphics.PointF
                        );
                        public constructor(param0: ScaleType, param1: ScaleType, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.Rect);
                        public setValue(param0: number): void;
                        public getState(): any;
                        public getValue(): number;
                    }
                    export class ScaleType extends java.lang.Object {
                        public static class: java.lang.Class<ScaleType>;
                        /**
                         * Constructs a new instance of the com.facebook.drawee.drawable.ScalingUtils$ScaleType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getTransform(
                                param0: globalAndroid.graphics.Matrix,
                                param1: globalAndroid.graphics.Rect,
                                param2: number,
                                param3: number,
                                param4: number,
                                param5: number
                            ): globalAndroid.graphics.Matrix;
                            <clinit>(): void;
                        });
                        public constructor();
                        public static FIT_CENTER: ScaleType;
                        public static CENTER_CROP: ScaleType;
                        public static FIT_XY: ScaleType;
                        public static CENTER: ScaleType;
                        public static FOCUS_CROP: ScaleType;
                        public static FIT_BOTTOM_START: ScaleType;
                        public static FIT_START: ScaleType;
                        public static CENTER_INSIDE: ScaleType;
                        public static FIT_END: ScaleType;
                        public getTransform(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number
                        ): globalAndroid.graphics.Matrix;
                    }
                    export class ScaleTypeCenter extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeCenter>;
                        public static INSTANCE: ScaleType;
                        public getTransform(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number
                        ): globalAndroid.graphics.Matrix;
                        public getTransformImpl(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number,
                            param6: number,
                            param7: number
                        ): void;
                        public toString(): string;
                    }
                    export class ScaleTypeCenterCrop extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeCenterCrop>;
                        public static INSTANCE: ScaleType;
                        public getTransform(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number
                        ): globalAndroid.graphics.Matrix;
                        public getTransformImpl(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number,
                            param6: number,
                            param7: number
                        ): void;
                        public toString(): string;
                    }
                    export class ScaleTypeCenterInside extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeCenterInside>;
                        public static INSTANCE: ScaleType;
                        public getTransform(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number
                        ): globalAndroid.graphics.Matrix;
                        public getTransformImpl(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number,
                            param6: number,
                            param7: number
                        ): void;
                        public toString(): string;
                    }
                    export class ScaleTypeFitBottomStart extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeFitBottomStart>;
                        public static INSTANCE: ScaleType;
                        public getTransform(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number
                        ): globalAndroid.graphics.Matrix;
                        public getTransformImpl(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number,
                            param6: number,
                            param7: number
                        ): void;
                        public toString(): string;
                    }
                    export class ScaleTypeFitCenter extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeFitCenter>;
                        public static INSTANCE: ScaleType;
                        public getTransform(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number
                        ): globalAndroid.graphics.Matrix;
                        public getTransformImpl(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number,
                            param6: number,
                            param7: number
                        ): void;
                        public toString(): string;
                    }
                    export class ScaleTypeFitEnd extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeFitEnd>;
                        public static INSTANCE: ScaleType;
                        public getTransform(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number
                        ): globalAndroid.graphics.Matrix;
                        public getTransformImpl(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number,
                            param6: number,
                            param7: number
                        ): void;
                        public toString(): string;
                    }
                    export class ScaleTypeFitStart extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeFitStart>;
                        public static INSTANCE: ScaleType;
                        public getTransform(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number
                        ): globalAndroid.graphics.Matrix;
                        public getTransformImpl(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number,
                            param6: number,
                            param7: number
                        ): void;
                        public toString(): string;
                    }
                    export class ScaleTypeFitXY extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeFitXY>;
                        public static INSTANCE: ScaleType;
                        public getTransform(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number
                        ): globalAndroid.graphics.Matrix;
                        public getTransformImpl(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number,
                            param6: number,
                            param7: number
                        ): void;
                        public toString(): string;
                    }
                    export class ScaleTypeFocusCrop extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeFocusCrop>;
                        public static INSTANCE: ScaleType;
                        public getTransform(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number
                        ): globalAndroid.graphics.Matrix;
                        public getTransformImpl(
                            param0: globalAndroid.graphics.Matrix,
                            param1: globalAndroid.graphics.Rect,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number,
                            param6: number,
                            param7: number
                        ): void;
                        public toString(): string;
                    }
                    export class StatefulScaleType extends java.lang.Object {
                        public static class: java.lang.Class<StatefulScaleType>;
                        /**
                         * Constructs a new instance of the com.facebook.drawee.drawable.ScalingUtils$StatefulScaleType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { getState(): any });
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
        export namespace drawee {
            export namespace drawable {
                export class TransformAwareDrawable extends java.lang.Object {
                    public static class: java.lang.Class<TransformAwareDrawable>;
                    /**
                     * Constructs a new instance of the com.facebook.drawee.drawable.TransformAwareDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { setTransformCallback(param0: TransformCallback): void });
                    public constructor();
                    public setTransformCallback(param0: TransformCallback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class TransformCallback extends java.lang.Object {
                    public static class: java.lang.Class<TransformCallback>;
                    /**
                     * Constructs a new instance of the com.facebook.drawee.drawable.TransformCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { getTransform(param0: globalAndroid.graphics.Matrix): void; getRootBounds(param0: globalAndroid.graphics.RectF): void });
                    public constructor();
                    public getRootBounds(param0: globalAndroid.graphics.RectF): void;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class VisibilityAwareDrawable extends java.lang.Object {
                    public static class: java.lang.Class<VisibilityAwareDrawable>;
                    /**
                     * Constructs a new instance of the com.facebook.drawee.drawable.VisibilityAwareDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { setVisibilityCallback(param0: VisibilityCallback): void });
                    public constructor();
                    public setVisibilityCallback(param0: VisibilityCallback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class VisibilityCallback extends java.lang.Object {
                    public static class: java.lang.Class<VisibilityCallback>;
                    /**
                     * Constructs a new instance of the com.facebook.drawee.drawable.VisibilityCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onVisibilityChange(param0: boolean): void; onDraw(): void });
                    public constructor();
                    public onDraw(): void;
                    public onVisibilityChange(param0: boolean): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace generic {
                export class GenericDraweeHierarchy extends java.lang.Object implements interfaces.SettableDraweeHierarchy {
                    public static class: java.lang.Class<GenericDraweeHierarchy>;
                    public setPlaceholderImage(param0: number, param1: drawable.ScalingUtils.ScaleType): void;
                    public setImage(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: boolean): void;
                    public hasPlaceholderImage(): boolean;
                    public setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public setFailureImage(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public setActualImageScaleType(param0: drawable.ScalingUtils.ScaleType): void;
                    public setRetryImage(param0: globalAndroid.graphics.drawable.Drawable, param1: drawable.ScalingUtils.ScaleType): void;
                    public setBackgroundImage(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public setOverlayImage(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public setPlaceholderImageFocusPoint(param0: globalAndroid.graphics.PointF): void;
                    public setRetryImage(param0: number, param1: drawable.ScalingUtils.ScaleType): void;
                    public setFailureImage(param0: number): void;
                    public setProgressBarImage(param0: number, param1: drawable.ScalingUtils.ScaleType): void;
                    public setProgressBarImage(param0: number): void;
                    public setRoundingParams(param0: RoundingParams): void;
                    public setProgressBarImage(param0: globalAndroid.graphics.drawable.Drawable, param1: drawable.ScalingUtils.ScaleType): void;
                    public setRetry(param0: java.lang.Throwable): void;
                    public setPlaceholderImage(param0: number): void;
                    public setRetryImage(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public setPlaceholderImage(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public setFailureImage(param0: number, param1: drawable.ScalingUtils.ScaleType): void;
                    public reset(): void;
                    public getFadeDuration(): number;
                    public setFadeDuration(param0: number): void;
                    public setPlaceholderImage(param0: globalAndroid.graphics.drawable.Drawable, param1: drawable.ScalingUtils.ScaleType): void;
                    public setProgressBarImage(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public setFailure(param0: java.lang.Throwable): void;
                    public setFailureImage(param0: globalAndroid.graphics.drawable.Drawable, param1: drawable.ScalingUtils.ScaleType): void;
                    public setProgress(param0: number, param1: boolean): void;
                    public getActualImageScaleType(): drawable.ScalingUtils.ScaleType;
                    public getActualImageBounds(param0: globalAndroid.graphics.RectF): void;
                    public setActualImageFocusPoint(param0: globalAndroid.graphics.PointF): void;
                    public getRoundingParams(): RoundingParams;
                    public setActualImageColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                    public setRetryImage(param0: number): void;
                    public setOverlayImage(param0: number, param1: globalAndroid.graphics.drawable.Drawable): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace generic {
                export class GenericDraweeHierarchyBuilder extends java.lang.Object {
                    public static class: java.lang.Class<GenericDraweeHierarchyBuilder>;
                    public static DEFAULT_FADE_DURATION: number;
                    public static DEFAULT_SCALE_TYPE: drawable.ScalingUtils.ScaleType;
                    public static DEFAULT_ACTUAL_IMAGE_SCALE_TYPE: drawable.ScalingUtils.ScaleType;
                    public getResources(): globalAndroid.content.res.Resources;
                    public setProgressBarImage(param0: number, param1: drawable.ScalingUtils.ScaleType): GenericDraweeHierarchyBuilder;
                    public setRetryImage(param0: number, param1: drawable.ScalingUtils.ScaleType): GenericDraweeHierarchyBuilder;
                    public setOverlays(param0: java.util.List<globalAndroid.graphics.drawable.Drawable>): GenericDraweeHierarchyBuilder;
                    public setRetryImage(param0: globalAndroid.graphics.drawable.Drawable): GenericDraweeHierarchyBuilder;
                    public setProgressBarImage(param0: number): GenericDraweeHierarchyBuilder;
                    public setPlaceholderImageScaleType(param0: drawable.ScalingUtils.ScaleType): GenericDraweeHierarchyBuilder;
                    public getPlaceholderImage(): globalAndroid.graphics.drawable.Drawable;
                    public setPressedStateOverlay(param0: globalAndroid.graphics.drawable.Drawable): GenericDraweeHierarchyBuilder;
                    public setRetryImage(param0: number): GenericDraweeHierarchyBuilder;
                    public getPressedStateOverlay(): globalAndroid.graphics.drawable.Drawable;
                    public setPlaceholderImage(param0: globalAndroid.graphics.drawable.Drawable, param1: drawable.ScalingUtils.ScaleType): GenericDraweeHierarchyBuilder;
                    public getActualImageScaleType(): drawable.ScalingUtils.ScaleType;
                    public getActualImageFocusPoint(): globalAndroid.graphics.PointF;
                    public setActualImageColorFilter(param0: globalAndroid.graphics.ColorFilter): GenericDraweeHierarchyBuilder;
                    public getDesiredAspectRatio(): number;
                    public setRetryImageScaleType(param0: drawable.ScalingUtils.ScaleType): GenericDraweeHierarchyBuilder;
                    public getProgressBarImageScaleType(): drawable.ScalingUtils.ScaleType;
                    public setFailureImage(param0: number): GenericDraweeHierarchyBuilder;
                    public getRoundingParams(): RoundingParams;
                    public getProgressBarImage(): globalAndroid.graphics.drawable.Drawable;
                    public setOverlay(param0: globalAndroid.graphics.drawable.Drawable): GenericDraweeHierarchyBuilder;
                    public getBackground(): globalAndroid.graphics.drawable.Drawable;
                    public setProgressBarImage(param0: globalAndroid.graphics.drawable.Drawable, param1: drawable.ScalingUtils.ScaleType): GenericDraweeHierarchyBuilder;
                    public constructor(param0: globalAndroid.content.res.Resources);
                    public static newInstance(param0: globalAndroid.content.res.Resources): GenericDraweeHierarchyBuilder;
                    public setRetryImage(param0: globalAndroid.graphics.drawable.Drawable, param1: drawable.ScalingUtils.ScaleType): GenericDraweeHierarchyBuilder;
                    public setBackground(param0: globalAndroid.graphics.drawable.Drawable): GenericDraweeHierarchyBuilder;
                    public getFailureImage(): globalAndroid.graphics.drawable.Drawable;
                    public setRoundingParams(param0: RoundingParams): GenericDraweeHierarchyBuilder;
                    public getFailureImageScaleType(): drawable.ScalingUtils.ScaleType;
                    public setFailureImageScaleType(param0: drawable.ScalingUtils.ScaleType): GenericDraweeHierarchyBuilder;
                    public setDesiredAspectRatio(param0: number): GenericDraweeHierarchyBuilder;
                    public setPlaceholderImage(param0: globalAndroid.graphics.drawable.Drawable): GenericDraweeHierarchyBuilder;
                    public setFailureImage(param0: number, param1: drawable.ScalingUtils.ScaleType): GenericDraweeHierarchyBuilder;
                    public getActualImageColorFilter(): globalAndroid.graphics.ColorFilter;
                    public getOverlays(): java.util.List<globalAndroid.graphics.drawable.Drawable>;
                    public getRetryImageScaleType(): drawable.ScalingUtils.ScaleType;
                    public getPlaceholderImageScaleType(): drawable.ScalingUtils.ScaleType;
                    public getRetryImage(): globalAndroid.graphics.drawable.Drawable;
                    public getFadeDuration(): number;
                    public setFailureImage(param0: globalAndroid.graphics.drawable.Drawable, param1: drawable.ScalingUtils.ScaleType): GenericDraweeHierarchyBuilder;
                    public setProgressBarImageScaleType(param0: drawable.ScalingUtils.ScaleType): GenericDraweeHierarchyBuilder;
                    public setFailureImage(param0: globalAndroid.graphics.drawable.Drawable): GenericDraweeHierarchyBuilder;
                    public reset(): GenericDraweeHierarchyBuilder;
                    public setPlaceholderImage(param0: number, param1: drawable.ScalingUtils.ScaleType): GenericDraweeHierarchyBuilder;
                    public setProgressBarImage(param0: globalAndroid.graphics.drawable.Drawable): GenericDraweeHierarchyBuilder;
                    public setFadeDuration(param0: number): GenericDraweeHierarchyBuilder;
                    public setActualImageFocusPoint(param0: globalAndroid.graphics.PointF): GenericDraweeHierarchyBuilder;
                    public setPlaceholderImage(param0: number): GenericDraweeHierarchyBuilder;
                    public setActualImageScaleType(param0: drawable.ScalingUtils.ScaleType): GenericDraweeHierarchyBuilder;
                    public build(): GenericDraweeHierarchy;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace generic {
                export class GenericDraweeHierarchyInflater extends java.lang.Object {
                    public static class: java.lang.Class<GenericDraweeHierarchyInflater>;
                    public static updateBuilder(param0: GenericDraweeHierarchyBuilder, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): GenericDraweeHierarchyBuilder;
                    public static inflateBuilder(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): GenericDraweeHierarchyBuilder;
                    public constructor();
                    public static inflateHierarchy(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): GenericDraweeHierarchy;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace generic {
                export class RootDrawable extends drawable.ForwardingDrawable implements drawable.VisibilityAwareDrawable {
                    public static class: java.lang.Class<RootDrawable>;
                    public getRootBounds(param0: globalAndroid.graphics.RectF): void;
                    public setVisibilityCallback(param0: drawable.VisibilityCallback): void;
                    public setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public getIntrinsicHeight(): number;
                    public getIntrinsicWidth(): number;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                    public getDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public constructor();
                    public setVisible(param0: boolean, param1: boolean): boolean;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                    public setTransformCallback(param0: drawable.TransformCallback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace generic {
                export class RoundingParams extends java.lang.Object {
                    public static class: java.lang.Class<RoundingParams>;
                    public setPadding(param0: number): RoundingParams;
                    public getBorderColor(): number;
                    public static fromCornersRadii(param0: number, param1: number, param2: number, param3: number): RoundingParams;
                    public setScaleDownInsideBorders(param0: boolean): RoundingParams;
                    public getCornersRadii(): native.Array<number>;
                    public getBorderWidth(): number;
                    public constructor();
                    public setRoundAsCircle(param0: boolean): RoundingParams;
                    public setCornersRadii(param0: number, param1: number, param2: number, param3: number): RoundingParams;
                    public hashCode(): number;
                    public static fromCornersRadius(param0: number): RoundingParams;
                    public setBorderColor(param0: number): RoundingParams;
                    public setRoundingMethod(param0: RoundingParams.RoundingMethod): RoundingParams;
                    public setOverlayColor(param0: number): RoundingParams;
                    public getOverlayColor(): number;
                    public getRoundAsCircle(): boolean;
                    public setCornersRadius(param0: number): RoundingParams;
                    public equals(param0: any): boolean;
                    public getRoundingMethod(): RoundingParams.RoundingMethod;
                    public static fromCornersRadii(param0: native.Array<number>): RoundingParams;
                    public static asCircle(): RoundingParams;
                    public setBorder(param0: number, param1: number): RoundingParams;
                    public getPadding(): number;
                    public setBorderWidth(param0: number): RoundingParams;
                    public setCornersRadii(param0: native.Array<number>): RoundingParams;
                    public getScaleDownInsideBorders(): boolean;
                }
                export namespace RoundingParams {
                    export class RoundingMethod {
                        public static class: java.lang.Class<RoundingMethod>;
                        public static OVERLAY_COLOR: RoundingMethod;
                        public static BITMAP_ONLY: RoundingMethod;
                        public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                        public static values(): native.Array<RoundingMethod>;
                        public static valueOf(param0: string): RoundingMethod;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace generic {
                export class WrappingUtils extends java.lang.Object {
                    public static class: java.lang.Class<WrappingUtils>;
                    public constructor();
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace gestures {
                export class GestureDetector extends java.lang.Object {
                    public static class: java.lang.Class<GestureDetector>;
                    public constructor(param0: globalAndroid.content.Context);
                    public reset(): void;
                    public static newInstance(param0: globalAndroid.content.Context): GestureDetector;
                    public isCapturingGesture(): boolean;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public init(): void;
                    public setClickListener(param0: GestureDetector.ClickListener): void;
                }
                export namespace GestureDetector {
                    export class ClickListener extends java.lang.Object {
                        public static class: java.lang.Class<ClickListener>;
                        /**
                         * Constructs a new instance of the com.facebook.drawee.gestures.GestureDetector$ClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onClick(): boolean });
                        public constructor();
                        public onClick(): boolean;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace interfaces {
                export class DraweeController extends java.lang.Object {
                    public static class: java.lang.Class<DraweeController>;
                    /**
                     * Constructs a new instance of the com.facebook.drawee.interfaces.DraweeController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        getHierarchy(): DraweeHierarchy;
                        setHierarchy(param0: DraweeHierarchy): void;
                        onAttach(): void;
                        onDetach(): void;
                        onViewportVisibilityHint(param0: boolean): void;
                        onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                        getAnimatable(): globalAndroid.graphics.drawable.Animatable;
                        setContentDescription(param0: string): void;
                        getContentDescription(): string;
                        isSameImageRequest(param0: DraweeController): boolean;
                    });
                    public constructor();
                    public setHierarchy(param0: DraweeHierarchy): void;
                    public setContentDescription(param0: string): void;
                    public onDetach(): void;
                    public getAnimatable(): globalAndroid.graphics.drawable.Animatable;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public isSameImageRequest(param0: DraweeController): boolean;
                    public onAttach(): void;
                    public getHierarchy(): DraweeHierarchy;
                    public onViewportVisibilityHint(param0: boolean): void;
                    public getContentDescription(): string;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace interfaces {
                export class DraweeHierarchy extends java.lang.Object {
                    public static class: java.lang.Class<DraweeHierarchy>;
                    /**
                     * Constructs a new instance of the com.facebook.drawee.interfaces.DraweeHierarchy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable });
                    public constructor();
                    public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace interfaces {
                export class SettableDraweeHierarchy extends java.lang.Object implements DraweeHierarchy {
                    public static class: java.lang.Class<SettableDraweeHierarchy>;
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
                    });
                    public constructor();
                    public reset(): void;
                    public setProgress(param0: number, param1: boolean): void;
                    public setImage(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: boolean): void;
                    public setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public setRetry(param0: java.lang.Throwable): void;
                    public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public setFailure(param0: java.lang.Throwable): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace interfaces {
                export class SimpleDraweeControllerBuilder extends java.lang.Object {
                    public static class: java.lang.Class<SimpleDraweeControllerBuilder>;
                    /**
                     * Constructs a new instance of the com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        setCallerContext(param0: any): SimpleDraweeControllerBuilder;
                        setUri(param0: globalAndroid.net.Uri): SimpleDraweeControllerBuilder;
                        setUri(param0: string): SimpleDraweeControllerBuilder;
                        setOldController(param0: DraweeController): SimpleDraweeControllerBuilder;
                        build(): DraweeController;
                    });
                    public constructor();
                    public setOldController(param0: DraweeController): SimpleDraweeControllerBuilder;
                    public setUri(param0: string): SimpleDraweeControllerBuilder;
                    public setCallerContext(param0: any): SimpleDraweeControllerBuilder;
                    public build(): DraweeController;
                    public setUri(param0: globalAndroid.net.Uri): SimpleDraweeControllerBuilder;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace view {
                export class AspectRatioMeasure extends java.lang.Object {
                    public static class: java.lang.Class<AspectRatioMeasure>;
                    public constructor();
                    public static updateMeasureSpec(param0: AspectRatioMeasure.Spec, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams, param3: number, param4: number): void;
                }
                export namespace AspectRatioMeasure {
                    export class Spec extends java.lang.Object {
                        public static class: java.lang.Class<Spec>;
                        public width: number;
                        public height: number;
                        public constructor();
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace view {
                export class DraweeHolder<DH> extends drawable.VisibilityCallback {
                    public static class: java.lang.Class<DraweeHolder<any>>;
                    public static create(param0: interfaces.DraweeHierarchy, param1: globalAndroid.content.Context): DraweeHolder<any>;
                    public hasHierarchy(): boolean;
                    public getDraweeEventTracker(): components.DraweeEventTracker;
                    public constructor(param0: any);
                    public onAttach(): void;
                    public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public registerWithContext(param0: globalAndroid.content.Context): void;
                    public setController(param0: interfaces.DraweeController): void;
                    public getHierarchy(): any;
                    public toString(): string;
                    public onDraw(): void;
                    public setHierarchy(param0: any): void;
                    public onVisibilityChange(param0: boolean): void;
                    public onDetach(): void;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public getController(): interfaces.DraweeController;
                    public isAttached(): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace view {
                export class DraweeTransition {
                    public static class: java.lang.Class<DraweeTransition>;
                    public captureStartValues(param0: globalAndroid.transition.TransitionValues): void;
                    public constructor(param0: drawable.ScalingUtils.ScaleType, param1: drawable.ScalingUtils.ScaleType);
                    public createAnimator(
                        param0: globalAndroid.view.ViewGroup,
                        param1: globalAndroid.transition.TransitionValues,
                        param2: globalAndroid.transition.TransitionValues
                    ): globalAndroid.animation.Animator;
                    public constructor(param0: drawable.ScalingUtils.ScaleType, param1: drawable.ScalingUtils.ScaleType, param2: globalAndroid.graphics.PointF, param3: globalAndroid.graphics.PointF);
                    public captureEndValues(param0: globalAndroid.transition.TransitionValues): void;
                    public static createTransitionSet(param0: drawable.ScalingUtils.ScaleType, param1: drawable.ScalingUtils.ScaleType): globalAndroid.transition.TransitionSet;
                    public static createTransitionSet(
                        param0: drawable.ScalingUtils.ScaleType,
                        param1: drawable.ScalingUtils.ScaleType,
                        param2: globalAndroid.graphics.PointF,
                        param3: globalAndroid.graphics.PointF
                    ): globalAndroid.transition.TransitionSet;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace view {
                export class DraweeView<DH> extends globalAndroid.widget.ImageView {
                    public static class: java.lang.Class<DraweeView<any>>;
                    public static setGlobalLegacyVisibilityHandlingEnabled(param0: boolean): void;
                    public setAspectRatio(param0: number): void;
                    public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public getAspectRatio(): number;
                    public doDetach(): void;
                    public onAttach(): void;
                    public onAttachedToWindow(): void;
                    public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public setImageURI(param0: globalAndroid.net.Uri): void;
                    public getHierarchy(): any;
                    public toString(): string;
                    public onFinishTemporaryDetach(): void;
                    public setLegacyVisibilityHandlingEnabled(param0: boolean): void;
                    public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public onDetach(): void;
                    public setImageResource(param0: number): void;
                    public sendAccessibilityEvent(param0: number): void;
                    public onDetachedFromWindow(): void;
                    public onMeasure(param0: number, param1: number): void;
                    public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public hasHierarchy(): boolean;
                    public hasController(): boolean;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                    public doAttach(): void;
                    public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                    public onStartTemporaryDetach(): void;
                    public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                    public constructor(param0: globalAndroid.content.Context);
                    public setController(param0: interfaces.DraweeController): void;
                    public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public setHierarchy(param0: any): void;
                    public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public getController(): interfaces.DraweeController;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace view {
                export class GenericDraweeView extends DraweeView<generic.GenericDraweeHierarchy> {
                    public static class: java.lang.Class<GenericDraweeView>;
                    public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public constructor(param0: globalAndroid.content.Context, param1: generic.GenericDraweeHierarchy);
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                    public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                    public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                    public constructor(param0: globalAndroid.content.Context);
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public inflateHierarchy(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): void;
                    public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                    public sendAccessibilityEvent(param0: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace view {
                export class MultiDraweeHolder<DH> extends java.lang.Object {
                    public static class: java.lang.Class<MultiDraweeHolder<any>>;
                    public add(param0: number, param1: DraweeHolder<DH>): void;
                    public constructor();
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public clear(): void;
                    public onDetach(): void;
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
                    public onAttach(): void;
                    public get(param0: number): DraweeHolder<DH>;
                    public size(): number;
                    public remove(param0: number): void;
                    public add(param0: DraweeHolder<DH>): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace view {
                export class SimpleDraweeView extends GenericDraweeView {
                    public static class: java.lang.Class<SimpleDraweeView>;
                    public getControllerBuilder(): controller.AbstractDraweeControllerBuilder<any, any, any, any>;
                    public constructor(param0: globalAndroid.content.Context, param1: generic.GenericDraweeHierarchy);
                    public static initialize(param0: common.internal.Supplier<any>): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public setImageURI(param0: globalAndroid.net.Uri): void;
                    public setImageURI(param0: string): void;
                    public setImageURI(param0: string, param1: any): void;
                    public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public setImageResource(param0: number): void;
                    public sendAccessibilityEvent(param0: number): void;
                    public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public static shutDown(): void;
                    public setImageRequest(param0: imagepipeline.request.ImageRequest): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                    public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                    public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                    public setActualImageResource(param0: number): void;
                    public constructor(param0: globalAndroid.content.Context);
                    public setImageURI(param0: globalAndroid.net.Uri, param1: any): void;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public setActualImageResource(param0: number, param1: any): void;
                    public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace fbcore {
            export class BuildConfig extends java.lang.Object {
                public static class: java.lang.Class<BuildConfig>;
                public static DEBUG: boolean;
                public static APPLICATION_ID: string;
                public static BUILD_TYPE: string;
                public static FLAVOR: string;
                public static VERSION_CODE: number;
                public static VERSION_NAME: string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace fresco {
            export namespace animation {
                export namespace backend {
                    export class AnimationBackend extends java.lang.Object implements AnimationInformation {
                        public static class: java.lang.Class<AnimationBackend>;
                        /**
                         * Constructs a new instance of the com.facebook.fresco.animation.backend.AnimationBackend interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            drawFrame(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Canvas, param2: number): boolean;
                            setAlpha(param0: number): void;
                            setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                            setBounds(param0: globalAndroid.graphics.Rect): void;
                            getIntrinsicWidth(): number;
                            getIntrinsicHeight(): number;
                            getSizeInBytes(): number;
                            clear(): void;
                            getFrameCount(): number;
                            getFrameDurationMs(param0: number): number;
                            getLoopCount(): number;
                        });
                        public constructor();
                        public static INTRINSIC_DIMENSION_UNSET: number;
                        public static LOOP_COUNT_INFINITE: number;
                        public getIntrinsicWidth(): number;
                        public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                        public getIntrinsicHeight(): number;
                        public getLoopCount(): number;
                        public setBounds(param0: globalAndroid.graphics.Rect): void;
                        public clear(): void;
                        public getFrameCount(): number;
                        public getFrameDurationMs(param0: number): number;
                        public drawFrame(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Canvas, param2: number): boolean;
                        public setAlpha(param0: number): void;
                        public getSizeInBytes(): number;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace fresco {
            export namespace animation {
                export namespace backend {
                    export class AnimationBackendDelegate<T> extends AnimationBackend {
                        public static class: java.lang.Class<AnimationBackendDelegate<any>>;
                        public getIntrinsicWidth(): number;
                        public getIntrinsicHeight(): number;
                        public getLoopCount(): number;
                        public getAnimationBackend(): any;
                        public setBounds(param0: globalAndroid.graphics.Rect): void;
                        public getFrameCount(): number;
                        public constructor(param0: any);
                        public drawFrame(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Canvas, param2: number): boolean;
                        public setAlpha(param0: number): void;
                        public getSizeInBytes(): number;
                        public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                        public setAnimationBackend(param0: any): void;
                        public getFrameDurationMs(param0: number): number;
                        public clear(): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace fresco {
            export namespace animation {
                export namespace backend {
                    export class AnimationBackendDelegateWithInactivityCheck<T> extends AnimationBackendDelegate<any> {
                        public static class: java.lang.Class<AnimationBackendDelegateWithInactivityCheck<any>>;
                        public getIntrinsicWidth(): number;
                        public setInactivityCheckPollingTimeMs(param0: number): void;
                        public getIntrinsicHeight(): number;
                        public getInactivityThresholdMs(): number;
                        public setBounds(param0: globalAndroid.graphics.Rect): void;
                        public drawFrame(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Canvas, param2: number): boolean;
                        public setAlpha(param0: number): void;
                        public getSizeInBytes(): number;
                        public setInactivityListener(param0: AnimationBackendDelegateWithInactivityCheck.InactivityListener): void;
                        public setInactivityThresholdMs(param0: number): void;
                        public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                        public getInactivityCheckPollingTimeMs(): number;
                        public static createForBackend(
                            param0: AnimationBackend,
                            param1: AnimationBackendDelegateWithInactivityCheck.InactivityListener,
                            param2: common.time.MonotonicClock,
                            param3: java.util.concurrent.ScheduledExecutorService
                        ): AnimationBackendDelegate<any>;
                        public clear(): void;
                        public static createForBackend(
                            param0: AnimationBackend,
                            param1: common.time.MonotonicClock,
                            param2: java.util.concurrent.ScheduledExecutorService
                        ): AnimationBackendDelegate<any>;
                    }
                    export namespace AnimationBackendDelegateWithInactivityCheck {
                        export class InactivityListener extends java.lang.Object {
                            public static class: java.lang.Class<InactivityListener>;
                            /**
                             * Constructs a new instance of the com.facebook.fresco.animation.backend.AnimationBackendDelegateWithInactivityCheck$InactivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: { onInactive(): void });
                            public constructor();
                            public onInactive(): void;
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
            export namespace animation {
                export namespace backend {
                    export class AnimationInformation extends java.lang.Object {
                        public static class: java.lang.Class<AnimationInformation>;
                        /**
                         * Constructs a new instance of the com.facebook.fresco.animation.backend.AnimationInformation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { getFrameCount(): number; getFrameDurationMs(param0: number): number; getLoopCount(): number });
                        public constructor();
                        public static LOOP_COUNT_INFINITE: number;
                        public getLoopCount(): number;
                        public getFrameCount(): number;
                        public getFrameDurationMs(param0: number): number;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace fresco {
            export namespace animation {
                export namespace bitmap {
                    export class BitmapAnimationBackend extends java.lang.Object implements backend.AnimationBackend, backend.AnimationBackendDelegateWithInactivityCheck.InactivityListener {
                        public static class: java.lang.Class<BitmapAnimationBackend>;
                        public static FRAME_TYPE_UNKNOWN: number;
                        public static FRAME_TYPE_CACHED: number;
                        public static FRAME_TYPE_REUSED: number;
                        public static FRAME_TYPE_CREATED: number;
                        public static FRAME_TYPE_FALLBACK: number;
                        public setBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): void;
                        public getIntrinsicWidth(): number;
                        public getIntrinsicHeight(): number;
                        public getLoopCount(): number;
                        public setBounds(param0: globalAndroid.graphics.Rect): void;
                        public getFrameCount(): number;
                        public drawFrame(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Canvas, param2: number): boolean;
                        public constructor(
                            param0: imagepipeline.bitmaps.PlatformBitmapFactory,
                            param1: BitmapFrameCache,
                            param2: backend.AnimationInformation,
                            param3: BitmapFrameRenderer,
                            param4: preparation.BitmapFramePreparationStrategy,
                            param5: preparation.BitmapFramePreparer
                        );
                        public setAlpha(param0: number): void;
                        public getSizeInBytes(): number;
                        public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                        public onInactive(): void;
                        public getFrameDurationMs(param0: number): number;
                        public clear(): void;
                        public setFrameListener(param0: BitmapAnimationBackend.FrameListener): void;
                    }
                    export namespace BitmapAnimationBackend {
                        export class FrameListener extends java.lang.Object {
                            public static class: java.lang.Class<FrameListener>;
                            /**
                             * Constructs a new instance of the com.facebook.fresco.animation.bitmap.BitmapAnimationBackend$FrameListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onDrawFrameStart(param0: BitmapAnimationBackend, param1: number): void;
                                onFrameDrawn(param0: BitmapAnimationBackend, param1: number, param2: number): void;
                                onFrameDropped(param0: BitmapAnimationBackend, param1: number): void;
                            });
                            public constructor();
                            public onFrameDrawn(param0: BitmapAnimationBackend, param1: number, param2: number): void;
                            public onDrawFrameStart(param0: BitmapAnimationBackend, param1: number): void;
                            public onFrameDropped(param0: BitmapAnimationBackend, param1: number): void;
                        }
                        export class FrameType extends java.lang.Object implements java.lang.annotation.Annotation {
                            public static class: java.lang.Class<FrameType>;
                            /**
                             * Constructs a new instance of the com.facebook.fresco.animation.bitmap.BitmapAnimationBackend$FrameType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: { annotationType(): java.lang.Class<any>; equals(param0: any): boolean; hashCode(): number; toString(): string });
                            public constructor();
                            public hashCode(): number;
                            public annotationType(): java.lang.Class<any>;
                            public toString(): string;
                            public equals(param0: any): boolean;
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
            export namespace animation {
                export namespace bitmap {
                    export class BitmapFrameCache extends java.lang.Object {
                        public static class: java.lang.Class<BitmapFrameCache>;
                        /**
                         * Constructs a new instance of the com.facebook.fresco.animation.bitmap.BitmapFrameCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getCachedFrame(param0: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            getFallbackFrame(param0: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            getBitmapToReuseForFrame(param0: number, param1: number, param2: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            contains(param0: number): boolean;
                            getSizeInBytes(): number;
                            clear(): void;
                            onFrameRendered(param0: number, param1: common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
                            onFramePrepared(param0: number, param1: common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
                            setFrameCacheListener(param0: BitmapFrameCache.FrameCacheListener): void;
                        });
                        public constructor();
                        public contains(param0: number): boolean;
                        public getCachedFrame(param0: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        public getFallbackFrame(param0: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        public setFrameCacheListener(param0: BitmapFrameCache.FrameCacheListener): void;
                        public onFramePrepared(param0: number, param1: common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
                        public clear(): void;
                        public getBitmapToReuseForFrame(param0: number, param1: number, param2: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        public getSizeInBytes(): number;
                        public onFrameRendered(param0: number, param1: common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
                    }
                    export namespace BitmapFrameCache {
                        export class FrameCacheListener extends java.lang.Object {
                            public static class: java.lang.Class<FrameCacheListener>;
                            /**
                             * Constructs a new instance of the com.facebook.fresco.animation.bitmap.BitmapFrameCache$FrameCacheListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: { onFrameCached(param0: BitmapFrameCache, param1: number): void; onFrameEvicted(param0: BitmapFrameCache, param1: number): void });
                            public constructor();
                            public onFrameCached(param0: BitmapFrameCache, param1: number): void;
                            public onFrameEvicted(param0: BitmapFrameCache, param1: number): void;
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
            export namespace animation {
                export namespace bitmap {
                    export class BitmapFrameRenderer extends java.lang.Object {
                        public static class: java.lang.Class<BitmapFrameRenderer>;
                        /**
                         * Constructs a new instance of the com.facebook.fresco.animation.bitmap.BitmapFrameRenderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            renderFrame(param0: number, param1: globalAndroid.graphics.Bitmap): boolean;
                            setBounds(param0: globalAndroid.graphics.Rect): void;
                            getIntrinsicWidth(): number;
                            getIntrinsicHeight(): number;
                        });
                        public constructor();
                        public getIntrinsicWidth(): number;
                        public getIntrinsicHeight(): number;
                        public setBounds(param0: globalAndroid.graphics.Rect): void;
                        public renderFrame(param0: number, param1: globalAndroid.graphics.Bitmap): boolean;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace fresco {
            export namespace animation {
                export namespace bitmap {
                    export namespace cache {
                        export class ImageFrameCache extends java.lang.Object implements BitmapFrameCache {
                            public static class: java.lang.Class<ImageFrameCache>;
                            public setFrameCacheListener(param0: BitmapFrameCache.FrameCacheListener): void;
                            public onFrameRendered(param0: number, param1: common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
                            public clear(): void;
                            public getCachedFrame(param0: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            public constructor(param0: imagepipeline.animated.impl.AnimatedFrameCache, param1: boolean);
                            public getBitmapToReuseForFrame(param0: number, param1: number, param2: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            public contains(param0: number): boolean;
                            public getFallbackFrame(param0: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            public getSizeInBytes(): number;
                            public onFramePrepared(param0: number, param1: common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
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
            export namespace animation {
                export namespace bitmap {
                    export namespace cache {
                        export class KeepLastFrameCache extends java.lang.Object implements BitmapFrameCache {
                            public static class: java.lang.Class<KeepLastFrameCache>;
                            public constructor();
                            public setFrameCacheListener(param0: BitmapFrameCache.FrameCacheListener): void;
                            public onFrameRendered(param0: number, param1: common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
                            public clear(): void;
                            public getCachedFrame(param0: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            public getBitmapToReuseForFrame(param0: number, param1: number, param2: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            public contains(param0: number): boolean;
                            public getFallbackFrame(param0: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            public getSizeInBytes(): number;
                            public onFramePrepared(param0: number, param1: common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
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
            export namespace animation {
                export namespace bitmap {
                    export namespace cache {
                        export class NoOpCache extends java.lang.Object implements BitmapFrameCache {
                            public static class: java.lang.Class<NoOpCache>;
                            public constructor();
                            public setFrameCacheListener(param0: BitmapFrameCache.FrameCacheListener): void;
                            public onFrameRendered(param0: number, param1: common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
                            public clear(): void;
                            public getCachedFrame(param0: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            public getBitmapToReuseForFrame(param0: number, param1: number, param2: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            public contains(param0: number): boolean;
                            public getFallbackFrame(param0: number): common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            public getSizeInBytes(): number;
                            public onFramePrepared(param0: number, param1: common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
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
            export namespace animation {
                export namespace bitmap {
                    export namespace preparation {
                        export class BitmapFramePreparationStrategy extends java.lang.Object {
                            public static class: java.lang.Class<BitmapFramePreparationStrategy>;
                            /**
                             * Constructs a new instance of the com.facebook.fresco.animation.bitmap.preparation.BitmapFramePreparationStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: { prepareFrames(param0: BitmapFramePreparer, param1: BitmapFrameCache, param2: backend.AnimationBackend, param3: number): void });
                            public constructor();
                            public prepareFrames(param0: BitmapFramePreparer, param1: BitmapFrameCache, param2: backend.AnimationBackend, param3: number): void;
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
            export namespace animation {
                export namespace bitmap {
                    export namespace preparation {
                        export class BitmapFramePreparer extends java.lang.Object {
                            public static class: java.lang.Class<BitmapFramePreparer>;
                            /**
                             * Constructs a new instance of the com.facebook.fresco.animation.bitmap.preparation.BitmapFramePreparer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: { prepareFrame(param0: BitmapFrameCache, param1: backend.AnimationBackend, param2: number): boolean });
                            public constructor();
                            public prepareFrame(param0: BitmapFrameCache, param1: backend.AnimationBackend, param2: number): boolean;
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
            export namespace animation {
                export namespace bitmap {
                    export namespace preparation {
                        export class DefaultBitmapFramePreparer extends java.lang.Object implements BitmapFramePreparer {
                            public static class: java.lang.Class<DefaultBitmapFramePreparer>;
                            public prepareFrame(param0: BitmapFrameCache, param1: backend.AnimationBackend, param2: number): boolean;
                            public constructor(
                                param0: imagepipeline.bitmaps.PlatformBitmapFactory,
                                param1: BitmapFrameRenderer,
                                param2: globalAndroid.graphics.Bitmap.Config,
                                param3: java.util.concurrent.ExecutorService
                            );
                        }
                        export namespace DefaultBitmapFramePreparer {
                            export class FrameDecodeRunnable extends java.lang.Object implements java.lang.Runnable {
                                public static class: java.lang.Class<FrameDecodeRunnable>;
                                public constructor(param0: DefaultBitmapFramePreparer, param1: backend.AnimationBackend, param2: BitmapFrameCache, param3: number, param4: number);
                                public run(): void;
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
            export namespace animation {
                export namespace bitmap {
                    export namespace preparation {
                        export class FixedNumberBitmapFramePreparationStrategy extends java.lang.Object implements BitmapFramePreparationStrategy {
                            public static class: java.lang.Class<FixedNumberBitmapFramePreparationStrategy>;
                            public constructor();
                            public prepareFrames(param0: BitmapFramePreparer, param1: BitmapFrameCache, param2: backend.AnimationBackend, param3: number): void;
                            public constructor(param0: number);
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
            export namespace animation {
                export namespace bitmap {
                    export namespace wrapper {
                        export class AnimatedDrawableBackendAnimationInformation extends java.lang.Object implements backend.AnimationInformation {
                            public static class: java.lang.Class<AnimatedDrawableBackendAnimationInformation>;
                            public constructor(param0: imagepipeline.animated.base.AnimatedDrawableBackend);
                            public getFrameCount(): number;
                            public getLoopCount(): number;
                            public getFrameDurationMs(param0: number): number;
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
            export namespace animation {
                export namespace bitmap {
                    export namespace wrapper {
                        export class AnimatedDrawableBackendFrameRenderer extends java.lang.Object implements BitmapFrameRenderer {
                            public static class: java.lang.Class<AnimatedDrawableBackendFrameRenderer>;
                            public constructor(param0: BitmapFrameCache, param1: imagepipeline.animated.base.AnimatedDrawableBackend);
                            public renderFrame(param0: number, param1: globalAndroid.graphics.Bitmap): boolean;
                            public getIntrinsicWidth(): number;
                            public setBounds(param0: globalAndroid.graphics.Rect): void;
                            public getIntrinsicHeight(): number;
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
            export namespace animation {
                export namespace drawable {
                    export class AnimatedDrawable2 extends globalAndroid.graphics.drawable.Drawable implements globalAndroid.graphics.drawable.Animatable, facebook.drawable.base.DrawableWithCaches {
                        public static class: java.lang.Class<AnimatedDrawable2>;
                        public onLevelChange(param0: number): boolean;
                        public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
                        public getAnimationBackend(): backend.AnimationBackend;
                        public getStartTimeMs(): number;
                        public setAnimationBackend(param0: backend.AnimationBackend): void;
                        public isRunning(): boolean;
                        public dropCaches(): void;
                        public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                        public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                        public getLoopDurationMs(): number;
                        public setDrawListener(param0: AnimatedDrawable2.DrawListener): void;
                        public jumpToFrame(param0: number): void;
                        public constructor();
                        public constructor(param0: backend.AnimationBackend);
                        public getIntrinsicWidth(): number;
                        public getIntrinsicHeight(): number;
                        public setFrameSchedulingDelayMs(param0: number): void;
                        public getLoopCount(): number;
                        public setFrameSchedulingOffsetMs(param0: number): void;
                        public getOpacity(): number;
                        public isInfiniteAnimation(): boolean;
                        public getFrameCount(): number;
                        public stop(): void;
                        public setAlpha(param0: number): void;
                        public getDroppedFrames(): number;
                        public start(): void;
                        public draw(param0: globalAndroid.graphics.Canvas): void;
                        public setAnimationListener(param0: AnimationListener): void;
                    }
                    export namespace AnimatedDrawable2 {
                        export class DrawListener extends java.lang.Object {
                            public static class: java.lang.Class<DrawListener>;
                            /**
                             * Constructs a new instance of the com.facebook.fresco.animation.drawable.AnimatedDrawable2$DrawListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onDraw(
                                    param0: AnimatedDrawable2,
                                    param1: frame.FrameScheduler,
                                    param2: number,
                                    param3: boolean,
                                    param4: boolean,
                                    param5: number,
                                    param6: number,
                                    param7: number,
                                    param8: number,
                                    param9: number,
                                    param10: number,
                                    param11: number
                                ): void;
                            });
                            public constructor();
                            public onDraw(
                                param0: AnimatedDrawable2,
                                param1: frame.FrameScheduler,
                                param2: number,
                                param3: boolean,
                                param4: boolean,
                                param5: number,
                                param6: number,
                                param7: number,
                                param8: number,
                                param9: number,
                                param10: number,
                                param11: number
                            ): void;
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
            export namespace animation {
                export namespace drawable {
                    export class AnimatedDrawable2DebugDrawListener extends java.lang.Object implements AnimatedDrawable2.DrawListener {
                        public static class: java.lang.Class<AnimatedDrawable2DebugDrawListener>;
                        public onDraw(
                            param0: AnimatedDrawable2,
                            param1: frame.FrameScheduler,
                            param2: number,
                            param3: boolean,
                            param4: boolean,
                            param5: number,
                            param6: number,
                            param7: number,
                            param8: number,
                            param9: number,
                            param10: number,
                            param11: number
                        ): void;
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
            export namespace animation {
                export namespace drawable {
                    export class AnimationListener extends java.lang.Object {
                        public static class: java.lang.Class<AnimationListener>;
                        /**
                         * Constructs a new instance of the com.facebook.fresco.animation.drawable.AnimationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onAnimationStart(param0: AnimatedDrawable2): void;
                            onAnimationStop(param0: AnimatedDrawable2): void;
                            onAnimationReset(param0: AnimatedDrawable2): void;
                            onAnimationRepeat(param0: AnimatedDrawable2): void;
                            onAnimationFrame(param0: AnimatedDrawable2, param1: number): void;
                        });
                        public constructor();
                        public onAnimationStart(param0: AnimatedDrawable2): void;
                        public onAnimationReset(param0: AnimatedDrawable2): void;
                        public onAnimationFrame(param0: AnimatedDrawable2, param1: number): void;
                        public onAnimationRepeat(param0: AnimatedDrawable2): void;
                        public onAnimationStop(param0: AnimatedDrawable2): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace fresco {
            export namespace animation {
                export namespace drawable {
                    export class BaseAnimationListener extends java.lang.Object implements AnimationListener {
                        public static class: java.lang.Class<BaseAnimationListener>;
                        public constructor();
                        public onAnimationStart(param0: AnimatedDrawable2): void;
                        public onAnimationReset(param0: AnimatedDrawable2): void;
                        public onAnimationFrame(param0: AnimatedDrawable2, param1: number): void;
                        public onAnimationRepeat(param0: AnimatedDrawable2): void;
                        public onAnimationStop(param0: AnimatedDrawable2): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace fresco {
            export namespace animation {
                export namespace drawable {
                    export namespace animator {
                        export class AnimatedDrawable2ValueAnimatorHelper extends java.lang.Object {
                            public static class: java.lang.Class<AnimatedDrawable2ValueAnimatorHelper>;
                            public static createValueAnimator(param0: AnimatedDrawable2): globalAndroid.animation.ValueAnimator;
                            public static createAnimatorUpdateListener(param0: AnimatedDrawable2): globalAndroid.animation.ValueAnimator.AnimatorUpdateListener;
                            public static createValueAnimator(param0: AnimatedDrawable2, param1: number): globalAndroid.animation.ValueAnimator;
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
            export namespace animation {
                export namespace drawable {
                    export namespace animator {
                        export class AnimatedDrawableValueAnimatorHelper extends java.lang.Object {
                            public static class: java.lang.Class<AnimatedDrawableValueAnimatorHelper>;
                            public static createValueAnimator(param0: globalAndroid.graphics.drawable.Drawable, param1: number): globalAndroid.animation.ValueAnimator;
                            public static createValueAnimator(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.animation.ValueAnimator;
                            public static createAnimatorUpdateListener(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.animation.ValueAnimator.AnimatorUpdateListener;
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
            export namespace animation {
                export namespace factory {
                    export class AnimatedFactoryV2Impl extends java.lang.Object implements imagepipeline.animated.factory.AnimatedFactory {
                        public static class: java.lang.Class<AnimatedFactoryV2Impl>;
                        public getAnimatedDrawableFactory(param0: globalAndroid.content.Context): imagepipeline.drawable.DrawableFactory;
                        public constructor(
                            param0: imagepipeline.bitmaps.PlatformBitmapFactory,
                            param1: imagepipeline.core.ExecutorSupplier,
                            param2: imagepipeline.cache.CountingMemoryCache<cache.common.CacheKey, imagepipeline.image.CloseableImage>
                        );
                        public getGifDecoder(param0: globalAndroid.graphics.Bitmap.Config): imagepipeline.decoder.ImageDecoder;
                        public getWebPDecoder(param0: globalAndroid.graphics.Bitmap.Config): imagepipeline.decoder.ImageDecoder;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace fresco {
            export namespace animation {
                export namespace factory {
                    export class ExperimentalBitmapAnimationDrawableFactory extends java.lang.Object implements imagepipeline.drawable.DrawableFactory {
                        public static class: java.lang.Class<ExperimentalBitmapAnimationDrawableFactory>;
                        public static CACHING_STRATEGY_NO_CACHE: number;
                        public static CACHING_STRATEGY_FRESCO_CACHE: number;
                        public static CACHING_STRATEGY_FRESCO_CACHE_NO_REUSING: number;
                        public static CACHING_STRATEGY_KEEP_LAST_CACHE: number;
                        public createDrawable(param0: imagepipeline.image.CloseableImage): drawable.AnimatedDrawable2;
                        public supportsImageType(param0: imagepipeline.image.CloseableImage): boolean;
                        public createDrawable(param0: imagepipeline.image.CloseableImage): globalAndroid.graphics.drawable.Drawable;
                        public constructor(
                            param0: imagepipeline.animated.impl.AnimatedDrawableBackendProvider,
                            param1: java.util.concurrent.ScheduledExecutorService,
                            param2: java.util.concurrent.ExecutorService,
                            param3: common.time.MonotonicClock,
                            param4: imagepipeline.bitmaps.PlatformBitmapFactory,
                            param5: imagepipeline.cache.CountingMemoryCache<cache.common.CacheKey, imagepipeline.image.CloseableImage>,
                            param6: common.internal.Supplier<java.lang.Integer>,
                            param7: common.internal.Supplier<java.lang.Integer>
                        );
                    }
                    export namespace ExperimentalBitmapAnimationDrawableFactory {
                        export class AnimationFrameCacheKey extends java.lang.Object implements cache.common.CacheKey {
                            public static class: java.lang.Class<AnimationFrameCacheKey>;
                            public getUriString(): string;
                            public hashCode(): number;
                            public toString(): string;
                            public equals(param0: any): boolean;
                            public constructor(param0: number);
                            public containsUri(param0: globalAndroid.net.Uri): boolean;
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
            export namespace animation {
                export namespace frame {
                    export class DropFramesFrameScheduler extends java.lang.Object implements FrameScheduler {
                        public static class: java.lang.Class<DropFramesFrameScheduler>;
                        public getFrameNumberToRender(param0: number, param1: number): number;
                        public constructor(param0: backend.AnimationInformation);
                        public getLoopDurationMs(): number;
                        public isInfiniteAnimation(): boolean;
                        public getTargetRenderTimeMs(param0: number): number;
                        public getTargetRenderTimeForNextFrameMs(param0: number): number;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace fresco {
            export namespace animation {
                export namespace frame {
                    export class FrameScheduler extends java.lang.Object {
                        public static class: java.lang.Class<FrameScheduler>;
                        /**
                         * Constructs a new instance of the com.facebook.fresco.animation.frame.FrameScheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getFrameNumberToRender(param0: number, param1: number): number;
                            getLoopDurationMs(): number;
                            getTargetRenderTimeMs(param0: number): number;
                            getTargetRenderTimeForNextFrameMs(param0: number): number;
                            isInfiniteAnimation(): boolean;
                        });
                        public constructor();
                        public static FRAME_NUMBER_DONE: number;
                        public static NO_NEXT_TARGET_RENDER_TIME: number;
                        public getFrameNumberToRender(param0: number, param1: number): number;
                        public getLoopDurationMs(): number;
                        public isInfiniteAnimation(): boolean;
                        public getTargetRenderTimeMs(param0: number): number;
                        public getTargetRenderTimeForNextFrameMs(param0: number): number;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageformat {
            export class DefaultImageFormatChecker extends java.lang.Object implements ImageFormat.FormatChecker {
                public static class: java.lang.Class<DefaultImageFormatChecker>;
                public getHeaderSize(): number;
                public determineFormat(param0: native.Array<number>, param1: number): ImageFormat;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageformat {
            export class DefaultImageFormats extends java.lang.Object {
                public static class: java.lang.Class<DefaultImageFormats>;
                public static JPEG: ImageFormat;
                public static PNG: ImageFormat;
                public static GIF: ImageFormat;
                public static BMP: ImageFormat;
                public static WEBP_SIMPLE: ImageFormat;
                public static WEBP_LOSSLESS: ImageFormat;
                public static WEBP_EXTENDED: ImageFormat;
                public static WEBP_EXTENDED_WITH_ALPHA: ImageFormat;
                public static WEBP_ANIMATED: ImageFormat;
                public static isStaticWebpFormat(param0: ImageFormat): boolean;
                public static getDefaultFormats(): java.util.List<ImageFormat>;
                public static isWebpFormat(param0: ImageFormat): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageformat {
            export class ImageFormat extends java.lang.Object {
                public static class: java.lang.Class<ImageFormat>;
                public static UNKNOWN: ImageFormat;
                public getName(): string;
                public getFileExtension(): string;
                public toString(): string;
                public constructor(param0: string, param1: string);
            }
            export namespace ImageFormat {
                export class FormatChecker extends java.lang.Object {
                    public static class: java.lang.Class<FormatChecker>;
                    /**
                     * Constructs a new instance of the com.facebook.imageformat.ImageFormat$FormatChecker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { getHeaderSize(): number; determineFormat(param0: native.Array<number>, param1: number): ImageFormat });
                    public constructor();
                    public getHeaderSize(): number;
                    public determineFormat(param0: native.Array<number>, param1: number): ImageFormat;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageformat {
            export class ImageFormatChecker extends java.lang.Object {
                public static class: java.lang.Class<ImageFormatChecker>;
                public static getImageFormat_WrapIOException(param0: java.io.InputStream): ImageFormat;
                public static getImageFormat(param0: java.io.InputStream): ImageFormat;
                public static getInstance(): ImageFormatChecker;
                public setCustomImageFormatCheckers(param0: java.util.List<ImageFormat.FormatChecker>): void;
                public static getImageFormat(param0: string): ImageFormat;
                public determineImageFormat(param0: java.io.InputStream): ImageFormat;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageformat {
            export class ImageFormatCheckerUtils extends java.lang.Object {
                public static class: java.lang.Class<ImageFormatCheckerUtils>;
                public static asciiBytes(param0: string): native.Array<number>;
                public static startsWithPattern(param0: native.Array<number>, param1: native.Array<number>): boolean;
                public static indexOfPattern(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export class BuildConfig extends java.lang.Object {
                public static class: java.lang.Class<BuildConfig>;
                public static DEBUG: boolean;
                public static APPLICATION_ID: string;
                public static BUILD_TYPE: string;
                public static FLAVOR: string;
                public static VERSION_CODE: number;
                public static VERSION_NAME: string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace animated {
                export class BuildConfig extends java.lang.Object {
                    public static class: java.lang.Class<BuildConfig>;
                    public static DEBUG: boolean;
                    public static APPLICATION_ID: string;
                    public static BUILD_TYPE: string;
                    public static FLAVOR: string;
                    public static VERSION_CODE: number;
                    public static VERSION_NAME: string;
                    public constructor();
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace animated {
                export namespace base {
                    export class AnimatedDrawableBackend extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedDrawableBackend>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getAnimatedImageResult(): AnimatedImageResult;
                            getDurationMs(): number;
                            getFrameCount(): number;
                            getLoopCount(): number;
                            getWidth(): number;
                            getHeight(): number;
                            getRenderedWidth(): number;
                            getRenderedHeight(): number;
                            getFrameInfo(param0: number): AnimatedDrawableFrameInfo;
                            renderFrame(param0: number, param1: globalAndroid.graphics.Canvas): void;
                            getFrameForTimestampMs(param0: number): number;
                            getTimestampMsForFrame(param0: number): number;
                            getDurationMsForFrame(param0: number): number;
                            getFrameForPreview(): number;
                            forNewBounds(param0: globalAndroid.graphics.Rect): AnimatedDrawableBackend;
                            getMemoryUsage(): number;
                            getPreDecodedFrame(param0: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            hasPreDecodedFrame(param0: number): boolean;
                            dropCaches(): void;
                        });
                        public constructor();
                        public getLoopCount(): number;
                        public getDurationMsForFrame(param0: number): number;
                        public getFrameCount(): number;
                        public getHeight(): number;
                        public getMemoryUsage(): number;
                        public hasPreDecodedFrame(param0: number): boolean;
                        public getDurationMs(): number;
                        public getFrameInfo(param0: number): AnimatedDrawableFrameInfo;
                        public getFrameForTimestampMs(param0: number): number;
                        public dropCaches(): void;
                        public getFrameForPreview(): number;
                        public getWidth(): number;
                        public forNewBounds(param0: globalAndroid.graphics.Rect): AnimatedDrawableBackend;
                        public getRenderedHeight(): number;
                        public getTimestampMsForFrame(param0: number): number;
                        public getRenderedWidth(): number;
                        public getPreDecodedFrame(param0: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        public renderFrame(param0: number, param1: globalAndroid.graphics.Canvas): void;
                        public getAnimatedImageResult(): AnimatedImageResult;
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
                export namespace base {
                    export class AnimatedDrawableFrameInfo extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedDrawableFrameInfo>;
                        public frameNumber: number;
                        public xOffset: number;
                        public yOffset: number;
                        public width: number;
                        public height: number;
                        public blendOperation: AnimatedDrawableFrameInfo.BlendOperation;
                        public disposalMethod: AnimatedDrawableFrameInfo.DisposalMethod;
                        public constructor(
                            param0: number,
                            param1: number,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: AnimatedDrawableFrameInfo.BlendOperation,
                            param6: AnimatedDrawableFrameInfo.DisposalMethod
                        );
                    }
                    export namespace AnimatedDrawableFrameInfo {
                        export class BlendOperation {
                            public static class: java.lang.Class<BlendOperation>;
                            public static BLEND_WITH_PREVIOUS: BlendOperation;
                            public static NO_BLEND: BlendOperation;
                            public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                            public static valueOf(param0: string): BlendOperation;
                            public static values(): native.Array<BlendOperation>;
                        }
                        export class DisposalMethod {
                            public static class: java.lang.Class<DisposalMethod>;
                            public static DISPOSE_DO_NOT: DisposalMethod;
                            public static DISPOSE_TO_BACKGROUND: DisposalMethod;
                            public static DISPOSE_TO_PREVIOUS: DisposalMethod;
                            public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                            public static valueOf(param0: string): DisposalMethod;
                            public static values(): native.Array<DisposalMethod>;
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
            export namespace animated {
                export namespace base {
                    export class AnimatedDrawableOptions extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedDrawableOptions>;
                        public static DEFAULTS: AnimatedDrawableOptions;
                        public forceKeepAllFramesInMemory: boolean;
                        public allowPrefetching: boolean;
                        public maximumBytes: number;
                        public enableDebugging: boolean;
                        public constructor(param0: AnimatedDrawableOptionsBuilder);
                        public static newBuilder(): AnimatedDrawableOptionsBuilder;
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
                export namespace base {
                    export class AnimatedDrawableOptionsBuilder extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedDrawableOptionsBuilder>;
                        public build(): AnimatedDrawableOptions;
                        public setEnableDebugging(param0: boolean): AnimatedDrawableOptionsBuilder;
                        public constructor();
                        public getAllowPrefetching(): boolean;
                        public getEnableDebugging(): boolean;
                        public getForceKeepAllFramesInMemory(): boolean;
                        public setMaximumBytes(param0: number): AnimatedDrawableOptionsBuilder;
                        public setForceKeepAllFramesInMemory(param0: boolean): AnimatedDrawableOptionsBuilder;
                        public setAllowPrefetching(param0: boolean): AnimatedDrawableOptionsBuilder;
                        public getMaximumBytes(): number;
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
                export namespace base {
                    export class AnimatedImage extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedImage>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.animated.base.AnimatedImage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            dispose(): void;
                            getWidth(): number;
                            getHeight(): number;
                            getFrameCount(): number;
                            getDuration(): number;
                            getFrameDurations(): native.Array<number>;
                            getLoopCount(): number;
                            getFrame(param0: number): AnimatedImageFrame;
                            doesRenderSupportScaling(): boolean;
                            getSizeInBytes(): number;
                            getFrameInfo(param0: number): AnimatedDrawableFrameInfo;
                        });
                        public constructor();
                        public static LOOP_COUNT_INFINITE: number;
                        public getFrameInfo(param0: number): AnimatedDrawableFrameInfo;
                        public getWidth(): number;
                        public getDuration(): number;
                        public getFrameDurations(): native.Array<number>;
                        public getLoopCount(): number;
                        public getFrame(param0: number): AnimatedImageFrame;
                        public getFrameCount(): number;
                        public getHeight(): number;
                        public doesRenderSupportScaling(): boolean;
                        public getSizeInBytes(): number;
                        public dispose(): void;
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
                export namespace base {
                    export class AnimatedImageFrame extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedImageFrame>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.animated.base.AnimatedImageFrame interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            dispose(): void;
                            renderFrame(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap): void;
                            getDurationMs(): number;
                            getWidth(): number;
                            getHeight(): number;
                            getXOffset(): number;
                            getYOffset(): number;
                        });
                        public constructor();
                        public getDurationMs(): number;
                        public getWidth(): number;
                        public renderFrame(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap): void;
                        public getHeight(): number;
                        public getYOffset(): number;
                        public dispose(): void;
                        public getXOffset(): number;
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
                export namespace base {
                    export class AnimatedImageResult extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedImageResult>;
                        public static newBuilder(param0: AnimatedImage): AnimatedImageResultBuilder;
                        public getFrameForPreview(): number;
                        public static forAnimatedImage(param0: AnimatedImage): AnimatedImageResult;
                        public getDecodedFrame(param0: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        public getImage(): AnimatedImage;
                        public hasDecodedFrame(param0: number): boolean;
                        public getPreviewBitmap(): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        public dispose(): void;
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
                export namespace base {
                    export class AnimatedImageResultBuilder extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedImageResultBuilder>;
                        public setDecodedFrames(param0: java.util.List<facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>>): AnimatedImageResultBuilder;
                        public getFrameForPreview(): number;
                        public setPreviewBitmap(param0: facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>): AnimatedImageResultBuilder;
                        public getImage(): AnimatedImage;
                        public build(): AnimatedImageResult;
                        public getDecodedFrames(): java.util.List<facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>>;
                        public getPreviewBitmap(): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        public setFrameForPreview(param0: number): AnimatedImageResultBuilder;
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
                export namespace base {
                    export abstract class DelegatingAnimatedDrawableBackend extends java.lang.Object implements AnimatedDrawableBackend {
                        public static class: java.lang.Class<DelegatingAnimatedDrawableBackend>;
                        public getLoopCount(): number;
                        public getDurationMsForFrame(param0: number): number;
                        public getFrameCount(): number;
                        public getHeight(): number;
                        public getDelegate(): AnimatedDrawableBackend;
                        public getMemoryUsage(): number;
                        public hasPreDecodedFrame(param0: number): boolean;
                        public getDurationMs(): number;
                        public getFrameInfo(param0: number): AnimatedDrawableFrameInfo;
                        public getFrameForTimestampMs(param0: number): number;
                        public dropCaches(): void;
                        public getFrameForPreview(): number;
                        public getWidth(): number;
                        public forNewBounds(param0: globalAndroid.graphics.Rect): AnimatedDrawableBackend;
                        public getRenderedHeight(): number;
                        public getTimestampMsForFrame(param0: number): number;
                        public constructor(param0: AnimatedDrawableBackend);
                        public getRenderedWidth(): number;
                        public getPreDecodedFrame(param0: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        public renderFrame(param0: number, param1: globalAndroid.graphics.Canvas): void;
                        public getAnimatedImageResult(): AnimatedImageResult;
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
                    export class AnimatedFactory extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedFactory>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.animated.factory.AnimatedFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getAnimatedDrawableFactory(param0: globalAndroid.content.Context): drawable.DrawableFactory;
                            getGifDecoder(param0: globalAndroid.graphics.Bitmap.Config): decoder.ImageDecoder;
                            getWebPDecoder(param0: globalAndroid.graphics.Bitmap.Config): decoder.ImageDecoder;
                        });
                        public constructor();
                        public getAnimatedDrawableFactory(param0: globalAndroid.content.Context): drawable.DrawableFactory;
                        public getGifDecoder(param0: globalAndroid.graphics.Bitmap.Config): decoder.ImageDecoder;
                        public getWebPDecoder(param0: globalAndroid.graphics.Bitmap.Config): decoder.ImageDecoder;
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
                    export class AnimatedFactoryProvider extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedFactoryProvider>;
                        public constructor();
                        public static getAnimatedFactory(
                            param0: bitmaps.PlatformBitmapFactory,
                            param1: core.ExecutorSupplier,
                            param2: cache.CountingMemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>
                        ): AnimatedFactory;
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
                    export class AnimatedImageDecoder extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedImageDecoder>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.animated.factory.AnimatedImageDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { decode(param0: number, param1: number): base.AnimatedImage });
                        public constructor();
                        public decode(param0: number, param1: number): base.AnimatedImage;
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
                    export class AnimatedImageFactory extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedImageFactory>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.animated.factory.AnimatedImageFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            decodeGif(param0: image.EncodedImage, param1: common.ImageDecodeOptions, param2: globalAndroid.graphics.Bitmap.Config): image.CloseableImage;
                            decodeWebP(param0: image.EncodedImage, param1: common.ImageDecodeOptions, param2: globalAndroid.graphics.Bitmap.Config): image.CloseableImage;
                        });
                        public constructor();
                        public decodeGif(param0: image.EncodedImage, param1: common.ImageDecodeOptions, param2: globalAndroid.graphics.Bitmap.Config): image.CloseableImage;
                        public decodeWebP(param0: image.EncodedImage, param1: common.ImageDecodeOptions, param2: globalAndroid.graphics.Bitmap.Config): image.CloseableImage;
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
                    export class AnimatedImageFactoryImpl extends java.lang.Object implements AnimatedImageFactory {
                        public static class: java.lang.Class<AnimatedImageFactoryImpl>;
                        public decodeGif(param0: image.EncodedImage, param1: common.ImageDecodeOptions, param2: globalAndroid.graphics.Bitmap.Config): image.CloseableImage;
                        public constructor(param0: impl.AnimatedDrawableBackendProvider, param1: bitmaps.PlatformBitmapFactory);
                        public decodeWebP(param0: image.EncodedImage, param1: common.ImageDecodeOptions, param2: globalAndroid.graphics.Bitmap.Config): image.CloseableImage;
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
                export namespace impl {
                    export class AnimatedDrawableBackendImpl extends java.lang.Object implements base.AnimatedDrawableBackend {
                        public static class: java.lang.Class<AnimatedDrawableBackendImpl>;
                        public getLoopCount(): number;
                        public getDurationMsForFrame(param0: number): number;
                        public getFrameCount(): number;
                        public getHeight(): number;
                        public getMemoryUsage(): number;
                        public hasPreDecodedFrame(param0: number): boolean;
                        public constructor(param0: util.AnimatedDrawableUtil, param1: base.AnimatedImageResult, param2: globalAndroid.graphics.Rect);
                        public getDurationMs(): number;
                        public getFrameInfo(param0: number): base.AnimatedDrawableFrameInfo;
                        public getFrameForTimestampMs(param0: number): number;
                        public dropCaches(): void;
                        public getFrameForPreview(): number;
                        public getWidth(): number;
                        public forNewBounds(param0: globalAndroid.graphics.Rect): base.AnimatedDrawableBackend;
                        public getRenderedHeight(): number;
                        public getTimestampMsForFrame(param0: number): number;
                        public getRenderedWidth(): number;
                        public getPreDecodedFrame(param0: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        public renderFrame(param0: number, param1: globalAndroid.graphics.Canvas): void;
                        public getAnimatedImageResult(): base.AnimatedImageResult;
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
                export namespace impl {
                    export class AnimatedDrawableBackendProvider extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedDrawableBackendProvider>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.animated.impl.AnimatedDrawableBackendProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { get(param0: base.AnimatedImageResult, param1: globalAndroid.graphics.Rect): base.AnimatedDrawableBackend });
                        public constructor();
                        public get(param0: base.AnimatedImageResult, param1: globalAndroid.graphics.Rect): base.AnimatedDrawableBackend;
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
                export namespace impl {
                    export class AnimatedFrameCache extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedFrameCache>;
                        public cache(param0: number, param1: facebook.common.references.CloseableReference<image.CloseableImage>): facebook.common.references.CloseableReference<image.CloseableImage>;
                        public contains(param0: number): boolean;
                        public getForReuse(): facebook.common.references.CloseableReference<image.CloseableImage>;
                        public onReusabilityChange(param0: facebook.cache.common.CacheKey, param1: boolean): void;
                        public get(param0: number): facebook.common.references.CloseableReference<image.CloseableImage>;
                        public constructor(param0: facebook.cache.common.CacheKey, param1: cache.CountingMemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>);
                    }
                    export namespace AnimatedFrameCache {
                        export class FrameKey extends java.lang.Object implements facebook.cache.common.CacheKey {
                            public static class: java.lang.Class<FrameKey>;
                            public getUriString(): string;
                            public hashCode(): number;
                            public constructor(param0: facebook.cache.common.CacheKey, param1: number);
                            public toString(): string;
                            public equals(param0: any): boolean;
                            public containsUri(param0: globalAndroid.net.Uri): boolean;
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
            export namespace animated {
                export namespace impl {
                    export class AnimatedImageCompositor extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedImageCompositor>;
                        public constructor(param0: base.AnimatedDrawableBackend, param1: AnimatedImageCompositor.Callback);
                        public renderFrame(param0: number, param1: globalAndroid.graphics.Bitmap): void;
                    }
                    export namespace AnimatedImageCompositor {
                        export class Callback extends java.lang.Object {
                            public static class: java.lang.Class<Callback>;
                            /**
                             * Constructs a new instance of the com.facebook.imagepipeline.animated.impl.AnimatedImageCompositor$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: {
                                onIntermediateResult(param0: number, param1: globalAndroid.graphics.Bitmap): void;
                                getCachedBitmap(param0: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            });
                            public constructor();
                            public getCachedBitmap(param0: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                            public onIntermediateResult(param0: number, param1: globalAndroid.graphics.Bitmap): void;
                        }
                        export class FrameNeededResult {
                            public static class: java.lang.Class<FrameNeededResult>;
                            public static REQUIRED: FrameNeededResult;
                            public static NOT_REQUIRED: FrameNeededResult;
                            public static SKIP: FrameNeededResult;
                            public static ABORT: FrameNeededResult;
                            public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                            public static valueOf(param0: string): FrameNeededResult;
                            public static values(): native.Array<FrameNeededResult>;
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
            export namespace animated {
                export namespace util {
                    export class AnimatedDrawableUtil extends java.lang.Object {
                        public static class: java.lang.Class<AnimatedDrawableUtil>;
                        public constructor();
                        public fixFrameDurations(param0: native.Array<number>): void;
                        public getSizeOfBitmap(param0: globalAndroid.graphics.Bitmap): number;
                        public getFrameForTimestampMs(param0: native.Array<number>, param1: number): number;
                        public getTotalDurationFromFrameDurations(param0: native.Array<number>): number;
                        public static isOutsideRange(param0: number, param1: number, param2: number): boolean;
                        public getFrameTimeStampsFromDurations(param0: native.Array<number>): native.Array<number>;
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
                export class ArtBitmapFactory extends PlatformBitmapFactory {
                    public static class: java.lang.Class<ArtBitmapFactory>;
                    public constructor();
                    public createBitmapInternal(
                        param0: number,
                        param1: number,
                        param2: globalAndroid.graphics.Bitmap.Config
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor(param0: memory.BitmapPool);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace bitmaps {
                export class EmptyJpegGenerator extends java.lang.Object {
                    public static class: java.lang.Class<EmptyJpegGenerator>;
                    public constructor(param0: facebook.common.memory.PooledByteBufferFactory);
                    public generate(param0: number, param1: number): facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace bitmaps {
                export class GingerbreadBitmapFactory extends PlatformBitmapFactory {
                    public static class: java.lang.Class<GingerbreadBitmapFactory>;
                    public constructor();
                    public createBitmapInternal(
                        param0: number,
                        param1: number,
                        param2: globalAndroid.graphics.Bitmap.Config
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace bitmaps {
                export class HoneycombBitmapCreator extends java.lang.Object implements facebook.common.webp.BitmapCreator {
                    public static class: java.lang.Class<HoneycombBitmapCreator>;
                    public createNakedBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
                    public constructor(param0: memory.PoolFactory);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace bitmaps {
                export class HoneycombBitmapFactory extends PlatformBitmapFactory {
                    public static class: java.lang.Class<HoneycombBitmapFactory>;
                    public constructor(param0: EmptyJpegGenerator, param1: platform.PlatformDecoder);
                    public constructor();
                    public createBitmapInternal(
                        param0: number,
                        param1: number,
                        param2: globalAndroid.graphics.Bitmap.Config
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace bitmaps {
                export abstract class PlatformBitmapFactory extends java.lang.Object {
                    public static class: java.lang.Class<PlatformBitmapFactory>;
                    public createBitmap(
                        param0: globalAndroid.util.DisplayMetrics,
                        param1: native.Array<number>,
                        param2: number,
                        param3: number,
                        param4: number,
                        param5: number,
                        param6: globalAndroid.graphics.Bitmap.Config,
                        param7: any
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmapInternal(
                        param0: number,
                        param1: number,
                        param2: globalAndroid.graphics.Bitmap.Config
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: number, param1: number, param2: any): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(
                        param0: native.Array<number>,
                        param1: number,
                        param2: number,
                        param3: globalAndroid.graphics.Bitmap.Config,
                        param4: any
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: number, param1: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(
                        param0: globalAndroid.util.DisplayMetrics,
                        param1: number,
                        param2: number,
                        param3: globalAndroid.graphics.Bitmap.Config,
                        param4: any
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(
                        param0: globalAndroid.graphics.Bitmap,
                        param1: number,
                        param2: number,
                        param3: number,
                        param4: number,
                        param5: globalAndroid.graphics.Matrix,
                        param6: boolean
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public addBitmapReference(param0: globalAndroid.graphics.Bitmap, param1: any): void;
                    public createBitmap(
                        param0: globalAndroid.util.DisplayMetrics,
                        param1: native.Array<number>,
                        param2: number,
                        param3: number,
                        param4: number,
                        param5: number,
                        param6: globalAndroid.graphics.Bitmap.Config
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createScaledBitmap(
                        param0: globalAndroid.graphics.Bitmap,
                        param1: number,
                        param2: number,
                        param3: boolean,
                        param4: any
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: globalAndroid.graphics.Bitmap): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor();
                    public createBitmap(
                        param0: number,
                        param1: number,
                        param2: globalAndroid.graphics.Bitmap.Config,
                        param3: any
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(
                        param0: globalAndroid.graphics.Bitmap,
                        param1: number,
                        param2: number,
                        param3: number,
                        param4: number,
                        param5: any
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(
                        param0: globalAndroid.graphics.Bitmap,
                        param1: number,
                        param2: number,
                        param3: number,
                        param4: number
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(
                        param0: globalAndroid.graphics.Bitmap,
                        param1: number,
                        param2: number,
                        param3: number,
                        param4: number,
                        param5: globalAndroid.graphics.Matrix,
                        param6: boolean,
                        param7: any
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(
                        param0: globalAndroid.util.DisplayMetrics,
                        param1: native.Array<number>,
                        param2: number,
                        param3: number,
                        param4: globalAndroid.graphics.Bitmap.Config
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(
                        param0: globalAndroid.util.DisplayMetrics,
                        param1: native.Array<number>,
                        param2: number,
                        param3: number,
                        param4: globalAndroid.graphics.Bitmap.Config,
                        param5: any
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(
                        param0: globalAndroid.util.DisplayMetrics,
                        param1: number,
                        param2: number,
                        param3: globalAndroid.graphics.Bitmap.Config
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(
                        param0: native.Array<number>,
                        param1: number,
                        param2: number,
                        param3: globalAndroid.graphics.Bitmap.Config
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: globalAndroid.graphics.Bitmap, param1: any): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createScaledBitmap(
                        param0: globalAndroid.graphics.Bitmap,
                        param1: number,
                        param2: number,
                        param3: boolean
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public setCreationListener(param0: PlatformBitmapFactory.BitmapCreationObserver): void;
                }
                export namespace PlatformBitmapFactory {
                    export class BitmapCreationObserver extends java.lang.Object {
                        public static class: java.lang.Class<BitmapCreationObserver>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory$BitmapCreationObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onBitmapCreated(param0: globalAndroid.graphics.Bitmap, param1: any): void });
                        public constructor();
                        public onBitmapCreated(param0: globalAndroid.graphics.Bitmap, param1: any): void;
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
                export class SimpleBitmapReleaser extends facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap> {
                    public static class: java.lang.Class<SimpleBitmapReleaser>;
                    public release(param0: globalAndroid.graphics.Bitmap): void;
                    public release(param0: any): void;
                    public static getInstance(): SimpleBitmapReleaser;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class BitmapCountingMemoryCacheFactory extends java.lang.Object {
                    public static class: java.lang.Class<BitmapCountingMemoryCacheFactory>;
                    public constructor();
                    public static get(
                        param0: facebook.common.internal.Supplier<MemoryCacheParams>,
                        param1: facebook.common.memory.MemoryTrimmableRegistry,
                        param2: bitmaps.PlatformBitmapFactory,
                        param3: boolean
                    ): CountingMemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>;
                    public static get(
                        param0: facebook.common.internal.Supplier<MemoryCacheParams>,
                        param1: facebook.common.memory.MemoryTrimmableRegistry,
                        param2: bitmaps.PlatformBitmapFactory,
                        param3: boolean,
                        param4: CountingMemoryCache.CacheTrimStrategy
                    ): CountingMemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class BitmapMemoryCacheFactory extends java.lang.Object {
                    public static class: java.lang.Class<BitmapMemoryCacheFactory>;
                    public constructor();
                    public static get(
                        param0: CountingMemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>,
                        param1: ImageCacheStatsTracker
                    ): MemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class BitmapMemoryCacheKey extends java.lang.Object implements facebook.cache.common.CacheKey {
                    public static class: java.lang.Class<BitmapMemoryCacheKey>;
                    public equals(param0: any): boolean;
                    public getUriString(): string;
                    public toString(): string;
                    public containsUri(param0: globalAndroid.net.Uri): boolean;
                    public constructor(
                        param0: string,
                        param1: common.ResizeOptions,
                        param2: common.RotationOptions,
                        param3: common.ImageDecodeOptions,
                        param4: facebook.cache.common.CacheKey,
                        param5: string,
                        param6: any
                    );
                    public getPostprocessorName(): string;
                    public getCallerContext(): any;
                    public hashCode(): number;
                    public getInBitmapCacheSince(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class BitmapMemoryCacheTrimStrategy extends java.lang.Object implements CountingMemoryCache.CacheTrimStrategy {
                    public static class: java.lang.Class<BitmapMemoryCacheTrimStrategy>;
                    public constructor();
                    public getTrimRatio(param0: facebook.common.memory.MemoryTrimType): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class BufferedDiskCache extends java.lang.Object {
                    public static class: java.lang.Class<BufferedDiskCache>;
                    public get(param0: facebook.cache.common.CacheKey, param1: java.util.concurrent.atomic.AtomicBoolean): bolts.Task<image.EncodedImage>;
                    public contains(param0: facebook.cache.common.CacheKey): bolts.Task<java.lang.Boolean>;
                    public remove(param0: facebook.cache.common.CacheKey): bolts.Task<java.lang.Void>;
                    public containsSync(param0: facebook.cache.common.CacheKey): boolean;
                    public put(param0: facebook.cache.common.CacheKey, param1: image.EncodedImage): void;
                    public diskCheckSync(param0: facebook.cache.common.CacheKey): boolean;
                    public clearAll(): bolts.Task<java.lang.Void>;
                    public constructor(
                        param0: facebook.cache.disk.FileCache,
                        param1: facebook.common.memory.PooledByteBufferFactory,
                        param2: facebook.common.memory.PooledByteStreams,
                        param3: java.util.concurrent.Executor,
                        param4: java.util.concurrent.Executor,
                        param5: ImageCacheStatsTracker
                    );
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class CacheKeyFactory extends java.lang.Object {
                    public static class: java.lang.Class<CacheKeyFactory>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.cache.CacheKeyFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        getBitmapCacheKey(param0: request.ImageRequest, param1: any): facebook.cache.common.CacheKey;
                        getPostprocessedBitmapCacheKey(param0: request.ImageRequest, param1: any): facebook.cache.common.CacheKey;
                        getEncodedCacheKey(param0: request.ImageRequest, param1: any): facebook.cache.common.CacheKey;
                        getEncodedCacheKey(param0: request.ImageRequest, param1: globalAndroid.net.Uri, param2: any): facebook.cache.common.CacheKey;
                    });
                    public constructor();
                    public getPostprocessedBitmapCacheKey(param0: request.ImageRequest, param1: any): facebook.cache.common.CacheKey;
                    public getEncodedCacheKey(param0: request.ImageRequest, param1: any): facebook.cache.common.CacheKey;
                    public getEncodedCacheKey(param0: request.ImageRequest, param1: globalAndroid.net.Uri, param2: any): facebook.cache.common.CacheKey;
                    public getBitmapCacheKey(param0: request.ImageRequest, param1: any): facebook.cache.common.CacheKey;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class CountingLruMap<K, V> extends java.lang.Object {
                    public static class: java.lang.Class<CountingLruMap<any, any>>;
                    public getCount(): number;
                    public contains(param0: K): boolean;
                    public constructor(param0: ValueDescriptor<V>);
                    public put(param0: K, param1: V): V;
                    public clear(): java.util.ArrayList<V>;
                    public getFirstKey(): K;
                    public removeAll(param0: android.internal.util.Predicate<K>): java.util.ArrayList<V>;
                    public getSizeInBytes(): number;
                    public getMatchingEntries(param0: android.internal.util.Predicate<K>): java.util.ArrayList<java.util.Map.Entry<K, V>>;
                    public get(param0: K): V;
                    public remove(param0: K): V;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class CountingMemoryCache<K, V> extends java.lang.Object {
                    public static class: java.lang.Class<CountingMemoryCache<any, any>>;
                    public mMemoryCacheParams: MemoryCacheParams;
                    public cache(
                        param0: K,
                        param1: facebook.common.references.CloseableReference<V>,
                        param2: CountingMemoryCache.EntryStateObserver<K>
                    ): facebook.common.references.CloseableReference<V>;
                    public contains(param0: K): boolean;
                    public getCount(): number;
                    public removeAll(param0: android.internal.util.Predicate<K>): number;
                    public get(param0: K): facebook.common.references.CloseableReference<V>;
                    public getSizeInBytes(): number;
                    public getEvictionQueueCount(): number;
                    public reuse(param0: K): facebook.common.references.CloseableReference<V>;
                    public trim(param0: facebook.common.memory.MemoryTrimType): void;
                    public clear(): void;
                    public cache(param0: K, param1: facebook.common.references.CloseableReference<V>): facebook.common.references.CloseableReference<V>;
                    public constructor(
                        param0: ValueDescriptor<V>,
                        param1: CountingMemoryCache.CacheTrimStrategy,
                        param2: facebook.common.internal.Supplier<MemoryCacheParams>,
                        param3: bitmaps.PlatformBitmapFactory,
                        param4: boolean
                    );
                    public getInUseCount(): number;
                    public contains(param0: android.internal.util.Predicate<K>): boolean;
                    public getInUseSizeInBytes(): number;
                    public getEvictionQueueSizeInBytes(): number;
                }
                export namespace CountingMemoryCache {
                    export class CacheTrimStrategy extends java.lang.Object {
                        public static class: java.lang.Class<CacheTrimStrategy>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.cache.CountingMemoryCache$CacheTrimStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { getTrimRatio(param0: facebook.common.memory.MemoryTrimType): number });
                        public constructor();
                        public getTrimRatio(param0: facebook.common.memory.MemoryTrimType): number;
                    }
                    export class Entry<K, V> extends java.lang.Object {
                        public static class: java.lang.Class<Entry<any, any>>;
                        public key: K;
                        public valueRef: facebook.common.references.CloseableReference<V>;
                        public clientCount: number;
                        public isOrphan: boolean;
                        public observer: EntryStateObserver<K>;
                    }
                    export class EntryStateObserver<K> extends java.lang.Object {
                        public static class: java.lang.Class<EntryStateObserver<any>>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.cache.CountingMemoryCache$EntryStateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onExclusivityChanged(param0: K, param1: boolean): void });
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
                export class DefaultBitmapMemoryCacheParamsSupplier extends facebook.common.internal.Supplier<MemoryCacheParams> {
                    public static class: java.lang.Class<DefaultBitmapMemoryCacheParamsSupplier>;
                    public get(): any;
                    public get(): MemoryCacheParams;
                    public constructor(param0: globalAndroid.app.ActivityManager);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class DefaultCacheKeyFactory extends java.lang.Object implements CacheKeyFactory {
                    public static class: java.lang.Class<DefaultCacheKeyFactory>;
                    public constructor();
                    public getPostprocessedBitmapCacheKey(param0: request.ImageRequest, param1: any): facebook.cache.common.CacheKey;
                    public getCacheKeySourceUri(param0: globalAndroid.net.Uri): globalAndroid.net.Uri;
                    public getEncodedCacheKey(param0: request.ImageRequest, param1: any): facebook.cache.common.CacheKey;
                    public getEncodedCacheKey(param0: request.ImageRequest, param1: globalAndroid.net.Uri, param2: any): facebook.cache.common.CacheKey;
                    public getBitmapCacheKey(param0: request.ImageRequest, param1: any): facebook.cache.common.CacheKey;
                    public static getInstance(): DefaultCacheKeyFactory;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class DefaultEncodedMemoryCacheParamsSupplier extends facebook.common.internal.Supplier<MemoryCacheParams> {
                    public static class: java.lang.Class<DefaultEncodedMemoryCacheParamsSupplier>;
                    public get(): any;
                    public constructor();
                    public get(): MemoryCacheParams;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class EncodedCountingMemoryCacheFactory extends java.lang.Object {
                    public static class: java.lang.Class<EncodedCountingMemoryCacheFactory>;
                    public constructor();
                    public static get(
                        param0: facebook.common.internal.Supplier<MemoryCacheParams>,
                        param1: facebook.common.memory.MemoryTrimmableRegistry,
                        param2: bitmaps.PlatformBitmapFactory
                    ): CountingMemoryCache<facebook.cache.common.CacheKey, facebook.common.memory.PooledByteBuffer>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class EncodedMemoryCacheFactory extends java.lang.Object {
                    public static class: java.lang.Class<EncodedMemoryCacheFactory>;
                    public constructor();
                    public static get(
                        param0: CountingMemoryCache<facebook.cache.common.CacheKey, facebook.common.memory.PooledByteBuffer>,
                        param1: ImageCacheStatsTracker
                    ): MemoryCache<facebook.cache.common.CacheKey, facebook.common.memory.PooledByteBuffer>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class ImageCacheStatsTracker extends java.lang.Object {
                    public static class: java.lang.Class<ImageCacheStatsTracker>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.cache.ImageCacheStatsTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onBitmapCachePut(): void;
                        onBitmapCacheHit(param0: facebook.cache.common.CacheKey): void;
                        onBitmapCacheMiss(): void;
                        onMemoryCachePut(): void;
                        onMemoryCacheHit(param0: facebook.cache.common.CacheKey): void;
                        onMemoryCacheMiss(): void;
                        onStagingAreaHit(param0: facebook.cache.common.CacheKey): void;
                        onStagingAreaMiss(): void;
                        onDiskCacheHit(): void;
                        onDiskCacheMiss(): void;
                        onDiskCacheGetFail(): void;
                        registerBitmapMemoryCache(param0: CountingMemoryCache<any, any>): void;
                        registerEncodedMemoryCache(param0: CountingMemoryCache<any, any>): void;
                    });
                    public constructor();
                    public onStagingAreaHit(param0: facebook.cache.common.CacheKey): void;
                    public onMemoryCacheMiss(): void;
                    public onStagingAreaMiss(): void;
                    public registerBitmapMemoryCache(param0: CountingMemoryCache<any, any>): void;
                    public onBitmapCacheHit(param0: facebook.cache.common.CacheKey): void;
                    public onMemoryCacheHit(param0: facebook.cache.common.CacheKey): void;
                    public onDiskCacheGetFail(): void;
                    public onBitmapCachePut(): void;
                    public onMemoryCachePut(): void;
                    public onBitmapCacheMiss(): void;
                    public onDiskCacheHit(): void;
                    public registerEncodedMemoryCache(param0: CountingMemoryCache<any, any>): void;
                    public onDiskCacheMiss(): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class InstrumentedMemoryCache<K, V> extends MemoryCache<any, any> {
                    public static class: java.lang.Class<InstrumentedMemoryCache<any, any>>;
                    public constructor(param0: MemoryCache<any, any>, param1: MemoryCacheTracker<any>);
                    public get(param0: any): facebook.common.references.CloseableReference<any>;
                    public contains(param0: android.internal.util.Predicate<any>): boolean;
                    public removeAll(param0: android.internal.util.Predicate<any>): number;
                    public cache(param0: any, param1: facebook.common.references.CloseableReference<any>): facebook.common.references.CloseableReference<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class MediaVariationsIndex extends java.lang.Object {
                    public static class: java.lang.Class<MediaVariationsIndex>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.cache.MediaVariationsIndex interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        getCachedVariants(param0: string, param1: request.MediaVariations.Builder): bolts.Task<request.MediaVariations>;
                        saveCachedVariant(param0: string, param1: request.ImageRequest.CacheChoice, param2: facebook.cache.common.CacheKey, param3: image.EncodedImage): void;
                    });
                    public constructor();
                    public getCachedVariants(param0: string, param1: request.MediaVariations.Builder): bolts.Task<request.MediaVariations>;
                    public saveCachedVariant(param0: string, param1: request.ImageRequest.CacheChoice, param2: facebook.cache.common.CacheKey, param3: image.EncodedImage): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class MediaVariationsIndexDatabase extends java.lang.Object implements MediaVariationsIndex {
                    public static class: java.lang.Class<MediaVariationsIndexDatabase>;
                    public getCachedVariantsSync(param0: string, param1: request.MediaVariations.Builder): request.MediaVariations;
                    public getCachedVariants(param0: string, param1: request.MediaVariations.Builder): bolts.Task<request.MediaVariations>;
                    public saveCachedVariant(param0: string, param1: request.ImageRequest.CacheChoice, param2: facebook.cache.common.CacheKey, param3: image.EncodedImage): void;
                    public saveCachedVariantSync(param0: string, param1: request.ImageRequest.CacheChoice, param2: facebook.cache.common.CacheKey, param3: image.EncodedImage): void;
                    public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.Executor, param2: java.util.concurrent.Executor, param3: facebook.common.time.Clock);
                }
                export namespace MediaVariationsIndexDatabase {
                    export class IndexDbOpenHelper extends globalAndroid.database.sqlite.SQLiteOpenHelper {
                        public static class: java.lang.Class<IndexDbOpenHelper>;
                        public static DATABASE_VERSION: number;
                        public static DATABASE_NAME: string;
                        public constructor(param0: globalAndroid.content.Context);
                        public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
                        public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
                        public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.database.sqlite.SQLiteDatabase.CursorFactory, param3: number);
                        public constructor(
                            param0: globalAndroid.content.Context,
                            param1: string,
                            param2: globalAndroid.database.sqlite.SQLiteDatabase.CursorFactory,
                            param3: number,
                            param4: globalAndroid.database.DatabaseErrorHandler
                        );
                        public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
                    }
                    export class IndexEntry extends java.lang.Object implements globalAndroid.provider.BaseColumns {
                        public static class: java.lang.Class<IndexEntry>;
                        public static TABLE_NAME: string;
                        public static COLUMN_NAME_MEDIA_ID: string;
                        public static COLUMN_NAME_WIDTH: string;
                        public static COLUMN_NAME_HEIGHT: string;
                        public static COLUMN_NAME_CACHE_CHOICE: string;
                        public static COLUMN_NAME_CACHE_KEY: string;
                        public static COLUMN_NAME_RESOURCE_ID: string;
                        public static COLUMN_NAME_DATE: string;
                    }
                    export class LazyIndexDbOpenHelper extends java.lang.Object {
                        public static class: java.lang.Class<LazyIndexDbOpenHelper>;
                        public getWritableDatabase(): globalAndroid.database.sqlite.SQLiteDatabase;
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
                export class MemoryCache<K, V> extends java.lang.Object {
                    public static class: java.lang.Class<MemoryCache<any, any>>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.cache.MemoryCache<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        cache(param0: K, param1: facebook.common.references.CloseableReference<V>): facebook.common.references.CloseableReference<V>;
                        get(param0: K): facebook.common.references.CloseableReference<V>;
                        removeAll(param0: android.internal.util.Predicate<K>): number;
                        contains(param0: android.internal.util.Predicate<K>): boolean;
                    });
                    public constructor();
                    public removeAll(param0: android.internal.util.Predicate<K>): number;
                    public cache(param0: K, param1: facebook.common.references.CloseableReference<V>): facebook.common.references.CloseableReference<V>;
                    public get(param0: K): facebook.common.references.CloseableReference<V>;
                    public contains(param0: android.internal.util.Predicate<K>): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class MemoryCacheParams extends java.lang.Object {
                    public static class: java.lang.Class<MemoryCacheParams>;
                    public maxCacheSize: number;
                    public maxCacheEntries: number;
                    public maxEvictionQueueSize: number;
                    public maxEvictionQueueEntries: number;
                    public maxCacheEntrySize: number;
                    public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class MemoryCacheTracker<K> extends java.lang.Object {
                    public static class: java.lang.Class<MemoryCacheTracker<any>>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.cache.MemoryCacheTracker<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onCacheHit(param0: K): void; onCacheMiss(): void; onCachePut(): void });
                    public constructor();
                    public onCacheHit(param0: K): void;
                    public onCacheMiss(): void;
                    public onCachePut(): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class NativeMemoryCacheTrimStrategy extends java.lang.Object implements CountingMemoryCache.CacheTrimStrategy {
                    public static class: java.lang.Class<NativeMemoryCacheTrimStrategy>;
                    public constructor();
                    public getTrimRatio(param0: facebook.common.memory.MemoryTrimType): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class NoOpImageCacheStatsTracker extends java.lang.Object implements ImageCacheStatsTracker {
                    public static class: java.lang.Class<NoOpImageCacheStatsTracker>;
                    public onStagingAreaHit(param0: facebook.cache.common.CacheKey): void;
                    public onMemoryCacheMiss(): void;
                    public static getInstance(): NoOpImageCacheStatsTracker;
                    public onStagingAreaMiss(): void;
                    public registerBitmapMemoryCache(param0: CountingMemoryCache<any, any>): void;
                    public onBitmapCacheHit(param0: facebook.cache.common.CacheKey): void;
                    public onMemoryCacheHit(param0: facebook.cache.common.CacheKey): void;
                    public onDiskCacheGetFail(): void;
                    public onBitmapCachePut(): void;
                    public onMemoryCachePut(): void;
                    public onBitmapCacheMiss(): void;
                    public onDiskCacheHit(): void;
                    public registerEncodedMemoryCache(param0: CountingMemoryCache<any, any>): void;
                    public onDiskCacheMiss(): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class NoOpMediaVariationsIndex extends java.lang.Object implements MediaVariationsIndex {
                    public static class: java.lang.Class<NoOpMediaVariationsIndex>;
                    public constructor();
                    public getCachedVariants(param0: string, param1: request.MediaVariations.Builder): bolts.Task<request.MediaVariations>;
                    public saveCachedVariant(param0: string, param1: request.ImageRequest.CacheChoice, param2: facebook.cache.common.CacheKey, param3: image.EncodedImage): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class StagingArea extends java.lang.Object {
                    public static class: java.lang.Class<StagingArea>;
                    public static getInstance(): StagingArea;
                    public remove(param0: facebook.cache.common.CacheKey, param1: image.EncodedImage): boolean;
                    public remove(param0: facebook.cache.common.CacheKey): boolean;
                    public put(param0: facebook.cache.common.CacheKey, param1: image.EncodedImage): void;
                    public get(param0: facebook.cache.common.CacheKey): image.EncodedImage;
                    public clearAll(): void;
                    public containsKey(param0: facebook.cache.common.CacheKey): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace cache {
                export class ValueDescriptor<V> extends java.lang.Object {
                    public static class: java.lang.Class<ValueDescriptor<any>>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.cache.ValueDescriptor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { getSizeInBytes(param0: V): number });
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
                export class BytesRange extends java.lang.Object {
                    public static class: java.lang.Class<BytesRange>;
                    public static TO_END_OF_CONTENT: number;
                    public to: number;
                    public equals(param0: any): boolean;
                    public toString(): string;
                    public static toMax(param0: number): BytesRange;
                    public toHttpRangeHeaderValue(): string;
                    public contains(param0: BytesRange): boolean;
                    public hashCode(): number;
                    public static fromContentRangeHeader(param0: string): BytesRange;
                    public constructor(param0: number, param1: number);
                    public static from(param0: number): BytesRange;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace common {
                export class ImageDecodeOptions extends java.lang.Object {
                    public static class: java.lang.Class<ImageDecodeOptions>;
                    public minDecodeIntervalMs: number;
                    public decodePreviewFrame: boolean;
                    public useLastFrameForPreview: boolean;
                    public decodeAllFrames: boolean;
                    public forceStaticImage: boolean;
                    public bitmapConfig: globalAndroid.graphics.Bitmap.Config;
                    public customImageDecoder: decoder.ImageDecoder;
                    public equals(param0: any): boolean;
                    public static defaults(): ImageDecodeOptions;
                    public toString(): string;
                    public static newBuilder(): ImageDecodeOptionsBuilder;
                    public hashCode(): number;
                    public constructor(param0: ImageDecodeOptionsBuilder);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace common {
                export class ImageDecodeOptionsBuilder extends java.lang.Object {
                    public static class: java.lang.Class<ImageDecodeOptionsBuilder>;
                    public setCustomImageDecoder(param0: decoder.ImageDecoder): ImageDecodeOptionsBuilder;
                    public getDecodePreviewFrame(): boolean;
                    public build(): ImageDecodeOptions;
                    public setBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): ImageDecodeOptionsBuilder;
                    public getCustomImageDecoder(): decoder.ImageDecoder;
                    public setFrom(param0: ImageDecodeOptions): ImageDecodeOptionsBuilder;
                    public setMinDecodeIntervalMs(param0: number): ImageDecodeOptionsBuilder;
                    public setForceStaticImage(param0: boolean): ImageDecodeOptionsBuilder;
                    public getBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
                    public getUseLastFrameForPreview(): boolean;
                    public getMinDecodeIntervalMs(): number;
                    public getForceStaticImage(): boolean;
                    public constructor();
                    public setUseLastFrameForPreview(param0: boolean): ImageDecodeOptionsBuilder;
                    public getDecodeAllFrames(): boolean;
                    public setDecodePreviewFrame(param0: boolean): ImageDecodeOptionsBuilder;
                    public setDecodeAllFrames(param0: boolean): ImageDecodeOptionsBuilder;
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
                    public static class: java.lang.Class<Priority>;
                    public static LOW: Priority;
                    public static MEDIUM: Priority;
                    public static HIGH: Priority;
                    public static values(): native.Array<Priority>;
                    public static getHigherPriority(param0: Priority, param1: Priority): Priority;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                    public static valueOf(param0: string): Priority;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace common {
                export class ResizeOptions extends java.lang.Object {
                    public static class: java.lang.Class<ResizeOptions>;
                    public static DEFAULT_ROUNDUP_FRACTION: number;
                    public width: number;
                    public height: number;
                    public maxBitmapSize: number;
                    public roundUpFraction: number;
                    public constructor(param0: number, param1: number, param2: number, param3: number);
                    public equals(param0: any): boolean;
                    public static forSquareSize(param0: number): ResizeOptions;
                    public toString(): string;
                    public constructor(param0: number, param1: number, param2: number);
                    public static forDimensions(param0: number, param1: number): ResizeOptions;
                    public hashCode(): number;
                    public constructor(param0: number, param1: number);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace common {
                export class RotationOptions extends java.lang.Object {
                    public static class: java.lang.Class<RotationOptions>;
                    public static NO_ROTATION: number;
                    public static ROTATE_90: number;
                    public static ROTATE_180: number;
                    public static ROTATE_270: number;
                    public getForcedAngle(): number;
                    public equals(param0: any): boolean;
                    public static disableRotation(): RotationOptions;
                    public toString(): string;
                    public canDeferUntilRendered(): boolean;
                    public useImageMetadata(): boolean;
                    public static forceRotation(param0: number): RotationOptions;
                    public rotationEnabled(): boolean;
                    public hashCode(): number;
                    public static autoRotate(): RotationOptions;
                    public static autoRotateAtRenderTime(): RotationOptions;
                }
                export namespace RotationOptions {
                    export class RotationAngle extends java.lang.Object implements java.lang.annotation.Annotation {
                        public static class: java.lang.Class<RotationAngle>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.common.RotationOptions$RotationAngle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { annotationType(): java.lang.Class<any>; equals(param0: any): boolean; hashCode(): number; toString(): string });
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
        export namespace imagepipeline {
            export namespace common {
                export class SourceUriType extends java.lang.Object implements java.lang.annotation.Annotation {
                    public static class: java.lang.Class<SourceUriType>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.common.SourceUriType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { annotationType(): java.lang.Class<any>; equals(param0: any): boolean; hashCode(): number; toString(): string });
                    public constructor();
                    public static SOURCE_TYPE_NETWORK: number;
                    public static SOURCE_TYPE_LOCAL_ASSET: number;
                    public static SOURCE_TYPE_LOCAL_RESOURCE: number;
                    public static SOURCE_TYPE_QUALIFIED_RESOURCE: number;
                    public static SOURCE_TYPE_LOCAL_FILE: number;
                    public static SOURCE_TYPE_UNKNOWN: number;
                    public static SOURCE_TYPE_LOCAL_IMAGE_FILE: number;
                    public static SOURCE_TYPE_DATA: number;
                    public static SOURCE_TYPE_LOCAL_VIDEO_FILE: number;
                    public static SOURCE_TYPE_LOCAL_CONTENT: number;
                    public equals(param0: any): boolean;
                    public toString(): string;
                    public annotationType(): java.lang.Class<any>;
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
                export class TooManyBitmapsException extends java.lang.RuntimeException {
                    public static class: java.lang.Class<TooManyBitmapsException>;
                    public constructor(param0: string, param1: java.lang.Throwable);
                    public constructor(param0: string);
                    public constructor(param0: java.lang.Throwable);
                    public constructor();
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace core {
                export class DefaultExecutorSupplier extends java.lang.Object implements ExecutorSupplier {
                    public static class: java.lang.Class<DefaultExecutorSupplier>;
                    public forLocalStorageRead(): java.util.concurrent.Executor;
                    public forLightweightBackgroundTasks(): java.util.concurrent.Executor;
                    public forDecode(): java.util.concurrent.Executor;
                    public forLocalStorageWrite(): java.util.concurrent.Executor;
                    public constructor(param0: number);
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
                export class DiskStorageCacheFactory extends java.lang.Object implements FileCacheFactory {
                    public static class: java.lang.Class<DiskStorageCacheFactory>;
                    public static buildDiskStorageCache(param0: facebook.cache.disk.DiskCacheConfig, param1: facebook.cache.disk.DiskStorage): facebook.cache.disk.DiskStorageCache;
                    public static buildDiskStorageCache(
                        param0: facebook.cache.disk.DiskCacheConfig,
                        param1: facebook.cache.disk.DiskStorage,
                        param2: java.util.concurrent.Executor
                    ): facebook.cache.disk.DiskStorageCache;
                    public get(param0: facebook.cache.disk.DiskCacheConfig): facebook.cache.disk.FileCache;
                    public constructor(param0: DiskStorageFactory);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace core {
                export class DiskStorageFactory extends java.lang.Object {
                    public static class: java.lang.Class<DiskStorageFactory>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.core.DiskStorageFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { get(param0: facebook.cache.disk.DiskCacheConfig): facebook.cache.disk.DiskStorage });
                    public constructor();
                    public get(param0: facebook.cache.disk.DiskCacheConfig): facebook.cache.disk.DiskStorage;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace core {
                export class DynamicDefaultDiskStorageFactory extends java.lang.Object implements DiskStorageFactory {
                    public static class: java.lang.Class<DynamicDefaultDiskStorageFactory>;
                    public constructor();
                    public get(param0: facebook.cache.disk.DiskCacheConfig): facebook.cache.disk.DiskStorage;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace core {
                export class ExecutorSupplier extends java.lang.Object {
                    public static class: java.lang.Class<ExecutorSupplier>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.core.ExecutorSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        forLocalStorageRead(): java.util.concurrent.Executor;
                        forLocalStorageWrite(): java.util.concurrent.Executor;
                        forDecode(): java.util.concurrent.Executor;
                        forBackgroundTasks(): java.util.concurrent.Executor;
                        forLightweightBackgroundTasks(): java.util.concurrent.Executor;
                    });
                    public constructor();
                    public forLocalStorageRead(): java.util.concurrent.Executor;
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
                export class FileCacheFactory extends java.lang.Object {
                    public static class: java.lang.Class<FileCacheFactory>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.core.FileCacheFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { get(param0: facebook.cache.disk.DiskCacheConfig): facebook.cache.disk.FileCache });
                    public constructor();
                    public get(param0: facebook.cache.disk.DiskCacheConfig): facebook.cache.disk.FileCache;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace core {
                export class ImagePipeline extends java.lang.Object {
                    public static class: java.lang.Class<ImagePipeline>;
                    public isInDiskCache(param0: globalAndroid.net.Uri): facebook.datasource.DataSource<java.lang.Boolean>;
                    public fetchDecodedImage(param0: request.ImageRequest, param1: any): facebook.datasource.DataSource<facebook.common.references.CloseableReference<image.CloseableImage>>;
                    public evictFromDiskCache(param0: request.ImageRequest): void;
                    public isInBitmapMemoryCache(param0: request.ImageRequest): boolean;
                    public evictFromMemoryCache(param0: globalAndroid.net.Uri): void;
                    public isPaused(): boolean;
                    public getCacheKeyFactory(): cache.CacheKeyFactory;
                    public fetchImageFromBitmapCache(param0: request.ImageRequest, param1: any): facebook.datasource.DataSource<facebook.common.references.CloseableReference<image.CloseableImage>>;
                    public prefetchToDiskCache(param0: request.ImageRequest, param1: any): facebook.datasource.DataSource<java.lang.Void>;
                    public pause(): void;
                    public clearDiskCaches(): void;
                    public prefetchToDiskCache(param0: request.ImageRequest, param1: any, param2: common.Priority): facebook.datasource.DataSource<java.lang.Void>;
                    public isInDiskCacheSync(param0: request.ImageRequest): boolean;
                    public fetchDecodedImage(
                        param0: request.ImageRequest,
                        param1: any,
                        param2: request.ImageRequest.RequestLevel
                    ): facebook.datasource.DataSource<facebook.common.references.CloseableReference<image.CloseableImage>>;
                    public isInDiskCacheSync(param0: globalAndroid.net.Uri, param1: request.ImageRequest.CacheChoice): boolean;
                    public isInDiskCache(param0: request.ImageRequest): facebook.datasource.DataSource<java.lang.Boolean>;
                    public evictFromDiskCache(param0: globalAndroid.net.Uri): void;
                    public getEncodedImageDataSourceSupplier(
                        param0: request.ImageRequest,
                        param1: any
                    ): facebook.common.internal.Supplier<facebook.datasource.DataSource<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>>>;
                    public isInDiskCacheSync(param0: globalAndroid.net.Uri): boolean;
                    public clearMemoryCaches(): void;
                    public prefetchToBitmapCache(param0: request.ImageRequest, param1: any): facebook.datasource.DataSource<java.lang.Void>;
                    public fetchEncodedImage(
                        param0: request.ImageRequest,
                        param1: any
                    ): facebook.datasource.DataSource<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>>;
                    public getBitmapMemoryCache(): cache.MemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>;
                    public resume(): void;
                    public isInBitmapMemoryCache(param0: globalAndroid.net.Uri): boolean;
                    public constructor(
                        param0: ProducerSequenceFactory,
                        param1: java.util.Set<listener.RequestListener>,
                        param2: facebook.common.internal.Supplier<java.lang.Boolean>,
                        param3: cache.MemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>,
                        param4: cache.MemoryCache<facebook.cache.common.CacheKey, facebook.common.memory.PooledByteBuffer>,
                        param5: cache.BufferedDiskCache,
                        param6: cache.BufferedDiskCache,
                        param7: cache.CacheKeyFactory,
                        param8: producers.ThreadHandoffProducerQueue,
                        param9: facebook.common.internal.Supplier<java.lang.Boolean>
                    );
                    public getDataSourceSupplier(
                        param0: request.ImageRequest,
                        param1: any,
                        param2: request.ImageRequest.RequestLevel
                    ): facebook.common.internal.Supplier<facebook.datasource.DataSource<facebook.common.references.CloseableReference<image.CloseableImage>>>;
                    public evictFromCache(param0: globalAndroid.net.Uri): void;
                    public clearCaches(): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace core {
                export class ImagePipelineConfig extends java.lang.Object {
                    public static class: java.lang.Class<ImagePipelineConfig>;
                    public getImageDecoder(): decoder.ImageDecoder;
                    public getPoolFactory(): memory.PoolFactory;
                    public getExecutorSupplier(): ExecutorSupplier;
                    public isResizeAndRotateEnabledForNetwork(): boolean;
                    public getCacheKeyFactory(): cache.CacheKeyFactory;
                    public getEncodedMemoryCacheParamsSupplier(): facebook.common.internal.Supplier<cache.MemoryCacheParams>;
                    public getRequestListeners(): java.util.Set<listener.RequestListener>;
                    public getFileCacheFactory(): FileCacheFactory;
                    public isDownsampleEnabled(): boolean;
                    public getImageDecoderConfig(): decoder.ImageDecoderConfig;
                    public getProgressiveJpegConfig(): decoder.ProgressiveJpegConfig;
                    public getContext(): globalAndroid.content.Context;
                    public static getDefaultImageRequestConfig(): ImagePipelineConfig.DefaultImageRequestConfig;
                    public getImageCacheStatsTracker(): cache.ImageCacheStatsTracker;
                    public getMainDiskCacheConfig(): facebook.cache.disk.DiskCacheConfig;
                    public getBitmapMemoryCacheTrimStrategy(): cache.CountingMemoryCache.CacheTrimStrategy;
                    public getExperiments(): ImagePipelineExperiments;
                    public getBitmapMemoryCacheParamsSupplier(): facebook.common.internal.Supplier<cache.MemoryCacheParams>;
                    public getNetworkFetcher(): producers.NetworkFetcher<any>;
                    public getBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
                    public static newBuilder(param0: globalAndroid.content.Context): ImagePipelineConfig.Builder;
                    public getIsPrefetchEnabledSupplier(): facebook.common.internal.Supplier<java.lang.Boolean>;
                    public getMemoryTrimmableRegistry(): facebook.common.memory.MemoryTrimmableRegistry;
                    public getSmallImageDiskCacheConfig(): facebook.cache.disk.DiskCacheConfig;
                    public getPlatformBitmapFactory(): bitmaps.PlatformBitmapFactory;
                }
                export namespace ImagePipelineConfig {
                    export class Builder extends java.lang.Object {
                        public static class: java.lang.Class<Builder>;
                        public setBitmapMemoryCacheTrimStrategy(param0: cache.CountingMemoryCache.CacheTrimStrategy): Builder;
                        public setHttpConnectionTimeout(param0: number): Builder;
                        public setNetworkFetcher(param0: producers.NetworkFetcher<any>): Builder;
                        public setPoolFactory(param0: memory.PoolFactory): Builder;
                        public setImageDecoderConfig(param0: decoder.ImageDecoderConfig): Builder;
                        public setDownsampleEnabled(param0: boolean): Builder;
                        public setMemoryTrimmableRegistry(param0: facebook.common.memory.MemoryTrimmableRegistry): Builder;
                        public setExecutorSupplier(param0: ExecutorSupplier): Builder;
                        public setEncodedMemoryCacheParamsSupplier(param0: facebook.common.internal.Supplier<cache.MemoryCacheParams>): Builder;
                        public setRequestListeners(param0: java.util.Set<listener.RequestListener>): Builder;
                        public setImageDecoder(param0: decoder.ImageDecoder): Builder;
                        public setMainDiskCacheConfig(param0: facebook.cache.disk.DiskCacheConfig): Builder;
                        public setBitmapMemoryCacheParamsSupplier(param0: facebook.common.internal.Supplier<cache.MemoryCacheParams>): Builder;
                        public setBitmapsConfig(param0: globalAndroid.graphics.Bitmap.Config): Builder;
                        public setCacheKeyFactory(param0: cache.CacheKeyFactory): Builder;
                        public setImageCacheStatsTracker(param0: cache.ImageCacheStatsTracker): Builder;
                        public setSmallImageDiskCacheConfig(param0: facebook.cache.disk.DiskCacheConfig): Builder;
                        public experiment(): ImagePipelineExperiments.Builder;
                        public setProgressiveJpegConfig(param0: decoder.ProgressiveJpegConfig): Builder;
                        public setResizeAndRotateEnabledForNetwork(param0: boolean): Builder;
                        public setIsPrefetchEnabledSupplier(param0: facebook.common.internal.Supplier<java.lang.Boolean>): Builder;
                        public setPlatformBitmapFactory(param0: bitmaps.PlatformBitmapFactory): Builder;
                        public setFileCacheFactory(param0: FileCacheFactory): Builder;
                        public isDownsampleEnabled(): boolean;
                        public build(): ImagePipelineConfig;
                    }
                    export class DefaultImageRequestConfig extends java.lang.Object {
                        public static class: java.lang.Class<DefaultImageRequestConfig>;
                        public setProgressiveRenderingEnabled(param0: boolean): void;
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
                export class ImagePipelineExperiments extends java.lang.Object {
                    public static class: java.lang.Class<ImagePipelineExperiments>;
                    public getWebpErrorLogger(): facebook.common.webp.WebpBitmapFactory.WebpErrorLogger;
                    public getMediaVariationsIndexEnabled(): boolean;
                    public isSmartResizingEnabled(): facebook.common.internal.Supplier<java.lang.Boolean>;
                    public getUseDownsamplingRatioForResizing(): boolean;
                    public getBitmapPrepareToDrawMinSizeBytes(): number;
                    public isExternalCreatedBitmapLogEnabled(): boolean;
                    public isPartialImageCachingEnabled(): boolean;
                    public isWebpSupportEnabled(): boolean;
                    public getProducerFactoryMethod(): ImagePipelineExperiments.ProducerFactoryMethod;
                    public getBitmapPrepareToDrawForPrefetch(): boolean;
                    public static newBuilder(param0: ImagePipelineConfig.Builder): ImagePipelineExperiments.Builder;
                    public isDecodeCancellationEnabled(): boolean;
                    public getBitmapPrepareToDrawMaxSizeBytes(): number;
                    public getWebpBitmapFactory(): facebook.common.webp.WebpBitmapFactory;
                    public getUseBitmapPrepareToDraw(): boolean;
                }
                export namespace ImagePipelineExperiments {
                    export class Builder extends java.lang.Object {
                        public static class: java.lang.Class<Builder>;
                        public mBitmapPrepareToDrawForPrefetch: boolean;
                        public constructor(param0: ImagePipelineConfig.Builder);
                        public setProducerFactoryMethod(param0: ProducerFactoryMethod): ImagePipelineConfig.Builder;
                        public setSuppressBitmapPrefetching(param0: boolean): ImagePipelineConfig.Builder;
                        public setBitmapPrepareToDraw(param0: boolean, param1: number, param2: number, param3: boolean): ImagePipelineConfig.Builder;
                        public setExternalCreatedBitmapLogEnabled(param0: boolean): ImagePipelineConfig.Builder;
                        public setMediaVariationsIndexEnabled(param0: facebook.common.internal.Supplier<java.lang.Boolean>): ImagePipelineConfig.Builder;
                        public setDecodeCancellationEnabled(param0: boolean): ImagePipelineConfig.Builder;
                        public setWebpSupportEnabled(param0: boolean): ImagePipelineConfig.Builder;
                        public setWebpBitmapFactory(param0: facebook.common.webp.WebpBitmapFactory): ImagePipelineConfig.Builder;
                        public build(): ImagePipelineExperiments;
                        public setPartialImageCachingEnabled(param0: boolean): ImagePipelineConfig.Builder;
                        public setWebpErrorLogger(param0: facebook.common.webp.WebpBitmapFactory.WebpErrorLogger): ImagePipelineConfig.Builder;
                        public setSmartResizingEnabled(param0: facebook.common.internal.Supplier<java.lang.Boolean>): ImagePipelineConfig.Builder;
                        public setUseDownsampligRatioForResizing(param0: boolean): ImagePipelineConfig.Builder;
                        public isPartialImageCachingEnabled(): boolean;
                    }
                    export class DefaultProducerFactoryMethod extends java.lang.Object implements ProducerFactoryMethod {
                        public static class: java.lang.Class<DefaultProducerFactoryMethod>;
                        public constructor();
                        public createProducerFactory(
                            param0: globalAndroid.content.Context,
                            param1: facebook.common.memory.ByteArrayPool,
                            param2: decoder.ImageDecoder,
                            param3: decoder.ProgressiveJpegConfig,
                            param4: boolean,
                            param5: boolean,
                            param6: boolean,
                            param7: facebook.common.internal.Supplier<java.lang.Boolean>,
                            param8: ExecutorSupplier,
                            param9: facebook.common.memory.PooledByteBufferFactory,
                            param10: cache.MemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>,
                            param11: cache.MemoryCache<facebook.cache.common.CacheKey, facebook.common.memory.PooledByteBuffer>,
                            param12: cache.BufferedDiskCache,
                            param13: cache.BufferedDiskCache,
                            param14: cache.MediaVariationsIndex,
                            param15: cache.CacheKeyFactory,
                            param16: bitmaps.PlatformBitmapFactory,
                            param17: number,
                            param18: number,
                            param19: boolean
                        ): ProducerFactory;
                    }
                    export class ProducerFactoryMethod extends java.lang.Object {
                        public static class: java.lang.Class<ProducerFactoryMethod>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.core.ImagePipelineExperiments$ProducerFactoryMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            createProducerFactory(
                                param0: globalAndroid.content.Context,
                                param1: facebook.common.memory.ByteArrayPool,
                                param2: decoder.ImageDecoder,
                                param3: decoder.ProgressiveJpegConfig,
                                param4: boolean,
                                param5: boolean,
                                param6: boolean,
                                param7: facebook.common.internal.Supplier<java.lang.Boolean>,
                                param8: ExecutorSupplier,
                                param9: facebook.common.memory.PooledByteBufferFactory,
                                param10: cache.MemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>,
                                param11: cache.MemoryCache<facebook.cache.common.CacheKey, facebook.common.memory.PooledByteBuffer>,
                                param12: cache.BufferedDiskCache,
                                param13: cache.BufferedDiskCache,
                                param14: cache.MediaVariationsIndex,
                                param15: cache.CacheKeyFactory,
                                param16: bitmaps.PlatformBitmapFactory,
                                param17: number,
                                param18: number,
                                param19: boolean
                            ): ProducerFactory;
                        });
                        public constructor();
                        public createProducerFactory(
                            param0: globalAndroid.content.Context,
                            param1: facebook.common.memory.ByteArrayPool,
                            param2: decoder.ImageDecoder,
                            param3: decoder.ProgressiveJpegConfig,
                            param4: boolean,
                            param5: boolean,
                            param6: boolean,
                            param7: facebook.common.internal.Supplier<java.lang.Boolean>,
                            param8: ExecutorSupplier,
                            param9: facebook.common.memory.PooledByteBufferFactory,
                            param10: cache.MemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>,
                            param11: cache.MemoryCache<facebook.cache.common.CacheKey, facebook.common.memory.PooledByteBuffer>,
                            param12: cache.BufferedDiskCache,
                            param13: cache.BufferedDiskCache,
                            param14: cache.MediaVariationsIndex,
                            param15: cache.CacheKeyFactory,
                            param16: bitmaps.PlatformBitmapFactory,
                            param17: number,
                            param18: number,
                            param19: boolean
                        ): ProducerFactory;
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
                export class ImagePipelineFactory extends java.lang.Object {
                    public static class: java.lang.Class<ImagePipelineFactory>;
                    public static shutDown(): void;
                    public static initialize(param0: globalAndroid.content.Context): void;
                    public static initialize(param0: ImagePipelineConfig): void;
                    public getEncodedCountingMemoryCache(): cache.CountingMemoryCache<facebook.cache.common.CacheKey, facebook.common.memory.PooledByteBuffer>;
                    public static buildPlatformDecoder(param0: memory.PoolFactory, param1: boolean): platform.PlatformDecoder;
                    public static getInstance(): ImagePipelineFactory;
                    public getAnimatedDrawableFactory(param0: globalAndroid.content.Context): drawable.DrawableFactory;
                    public getMainFileCache(): facebook.cache.disk.FileCache;
                    public getSmallImageFileCache(): facebook.cache.disk.FileCache;
                    public getImagePipeline(): ImagePipeline;
                    public getMainBufferedDiskCache(): cache.BufferedDiskCache;
                    public constructor(param0: ImagePipelineConfig);
                    public getEncodedMemoryCache(): cache.MemoryCache<facebook.cache.common.CacheKey, facebook.common.memory.PooledByteBuffer>;
                    public getBitmapMemoryCache(): cache.MemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>;
                    public getPlatformDecoder(): platform.PlatformDecoder;
                    public getMediaVariationsIndex(): cache.MediaVariationsIndex;
                    public getBitmapCountingMemoryCache(): cache.CountingMemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>;
                    public static buildPlatformBitmapFactory(param0: memory.PoolFactory, param1: platform.PlatformDecoder): bitmaps.PlatformBitmapFactory;
                    public getPlatformBitmapFactory(): bitmaps.PlatformBitmapFactory;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace core {
                export class PriorityThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
                    public static class: java.lang.Class<PriorityThreadFactory>;
                    public newThread(param0: java.lang.Runnable): java.lang.Thread;
                    public constructor(param0: number);
                    public constructor(param0: number, param1: string, param2: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace core {
                export class ProducerFactory extends java.lang.Object {
                    public static class: java.lang.Class<ProducerFactory>;
                    public newBitmapPrepareProducer(param0: producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>): producers.BitmapPrepareProducer;
                    public newDiskCacheWriteProducer(param0: producers.Producer<image.EncodedImage>): producers.DiskCacheWriteProducer;
                    public newNetworkFetchProducer(param0: producers.NetworkFetcher<any>): producers.NetworkFetchProducer;
                    public static newSwallowResultProducer(param0: producers.Producer<any>): producers.SwallowResultProducer<any>;
                    public newEncodedCacheKeyMultiplexProducer(param0: producers.Producer<image.EncodedImage>): producers.EncodedCacheKeyMultiplexProducer;
                    public newLocalVideoThumbnailProducer(): producers.LocalVideoThumbnailProducer;
                    public newBitmapMemoryCacheKeyMultiplexProducer(
                        param0: producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>
                    ): producers.BitmapMemoryCacheKeyMultiplexProducer;
                    public newThumbnailBranchProducer(param0: native.Array<producers.ThumbnailProducer<image.EncodedImage>>): producers.ThumbnailBranchProducer;
                    public newDecodeProducer(param0: producers.Producer<image.EncodedImage>): producers.DecodeProducer;
                    public newWebpTranscodeProducer(param0: producers.Producer<image.EncodedImage>): producers.WebpTranscodeProducer;
                    public newLocalResourceFetchProducer(): producers.LocalResourceFetchProducer;
                    public newThrottlingProducer(param0: producers.Producer<any>): producers.ThrottlingProducer<any>;
                    public newPostprocessorProducer(param0: producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>): producers.PostprocessorProducer;
                    public static newBranchOnSeparateImagesProducer(
                        param0: producers.Producer<image.EncodedImage>,
                        param1: producers.Producer<image.EncodedImage>
                    ): producers.BranchOnSeparateImagesProducer;
                    public newResizeAndRotateProducer(param0: producers.Producer<image.EncodedImage>, param1: boolean, param2: boolean): producers.ResizeAndRotateProducer;
                    public static newAddImageTransformMetaDataProducer(param0: producers.Producer<image.EncodedImage>): producers.AddImageTransformMetaDataProducer;
                    public newLocalContentUriFetchProducer(): producers.LocalContentUriFetchProducer;
                    public constructor(
                        param0: globalAndroid.content.Context,
                        param1: facebook.common.memory.ByteArrayPool,
                        param2: decoder.ImageDecoder,
                        param3: decoder.ProgressiveJpegConfig,
                        param4: boolean,
                        param5: boolean,
                        param6: boolean,
                        param7: facebook.common.internal.Supplier<java.lang.Boolean>,
                        param8: ExecutorSupplier,
                        param9: facebook.common.memory.PooledByteBufferFactory,
                        param10: cache.MemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>,
                        param11: cache.MemoryCache<facebook.cache.common.CacheKey, facebook.common.memory.PooledByteBuffer>,
                        param12: cache.BufferedDiskCache,
                        param13: cache.BufferedDiskCache,
                        param14: cache.MediaVariationsIndex,
                        param15: cache.CacheKeyFactory,
                        param16: bitmaps.PlatformBitmapFactory,
                        param17: number,
                        param18: number,
                        param19: boolean
                    );
                    public newLocalFileFetchProducer(): producers.LocalFileFetchProducer;
                    public newQualifiedResourceFetchProducer(): producers.QualifiedResourceFetchProducer;
                    public newBackgroundThreadHandoffProducer(param0: producers.Producer<any>, param1: producers.ThreadHandoffProducerQueue): producers.ThreadHandoffProducer<any>;
                    public newBitmapMemoryCacheGetProducer(param0: producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>): producers.BitmapMemoryCacheGetProducer;
                    public newDiskCacheReadProducer(param0: producers.Producer<image.EncodedImage>): producers.DiskCacheReadProducer;
                    public newPostprocessorBitmapMemoryCacheProducer(
                        param0: producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>
                    ): producers.PostprocessedBitmapMemoryCacheProducer;
                    public newPartialDiskCacheProducer(param0: producers.Producer<image.EncodedImage>): producers.PartialDiskCacheProducer;
                    public newLocalContentUriThumbnailFetchProducer(): producers.LocalContentUriThumbnailFetchProducer;
                    public newMediaVariationsProducer(param0: producers.Producer<image.EncodedImage>): producers.MediaVariationsFallbackProducer;
                    public newBitmapMemoryCacheProducer(param0: producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>): producers.BitmapMemoryCacheProducer;
                    public newDataFetchProducer(): producers.DataFetchProducer;
                    public newLocalExifThumbnailProducer(): producers.LocalExifThumbnailProducer;
                    public newEncodedMemoryCacheProducer(param0: producers.Producer<image.EncodedImage>): producers.EncodedMemoryCacheProducer;
                    public static newNullProducer(): producers.NullProducer<any>;
                    public newLocalAssetFetchProducer(): producers.LocalAssetFetchProducer;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace core {
                export class ProducerSequenceFactory extends java.lang.Object {
                    public static class: java.lang.Class<ProducerSequenceFactory>;
                    public getDecodedImagePrefetchProducerSequence(param0: request.ImageRequest): producers.Producer<java.lang.Void>;
                    public constructor(
                        param0: globalAndroid.content.ContentResolver,
                        param1: ProducerFactory,
                        param2: producers.NetworkFetcher<any>,
                        param3: boolean,
                        param4: boolean,
                        param5: producers.ThreadHandoffProducerQueue,
                        param6: boolean,
                        param7: boolean,
                        param8: boolean
                    );
                    public getLocalFileFetchEncodedImageProducerSequence(): producers.Producer<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>>;
                    public getDecodedImageProducerSequence(param0: request.ImageRequest): producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>;
                    public getNetworkFetchEncodedImageProducerSequence(): producers.Producer<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>>;
                    public getEncodedImageProducerSequence(param0: request.ImageRequest): producers.Producer<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>>;
                    public getEncodedImagePrefetchProducerSequence(param0: request.ImageRequest): producers.Producer<java.lang.Void>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace datasource {
                export abstract class AbstractProducerToDataSourceAdapter<T> extends facebook.datasource.AbstractDataSource<any> implements request.HasImageRequest {
                    public static class: java.lang.Class<AbstractProducerToDataSourceAdapter<any>>;
                    public constructor(param0: producers.Producer<any>, param1: producers.SettableProducerContext, param2: listener.RequestListener);
                    public isFinished(): boolean;
                    public close(): boolean;
                    public hasFailed(): boolean;
                    public getProgress(): number;
                    public constructor();
                    public hasResult(): boolean;
                    public getImageRequest(): request.ImageRequest;
                    public subscribe(param0: facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
                    public getFailureCause(): java.lang.Throwable;
                    public getResult(): any;
                    public onNewResultImpl(param0: any, param1: number): void;
                    public isClosed(): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace datasource {
                export abstract class BaseBitmapDataSubscriber extends facebook.datasource.BaseDataSubscriber<facebook.common.references.CloseableReference<image.CloseableImage>> {
                    public static class: java.lang.Class<BaseBitmapDataSubscriber>;
                    public constructor();
                    public onCancellation(param0: facebook.datasource.DataSource<any>): void;
                    public onProgressUpdate(param0: facebook.datasource.DataSource<any>): void;
                    public onNewResultImpl(param0: globalAndroid.graphics.Bitmap): void;
                    public onFailure(param0: facebook.datasource.DataSource<any>): void;
                    public onNewResultImpl(param0: facebook.datasource.DataSource<any>): void;
                    public onNewResultImpl(param0: facebook.datasource.DataSource<facebook.common.references.CloseableReference<image.CloseableImage>>): void;
                    public onNewResult(param0: facebook.datasource.DataSource<any>): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace datasource {
                export abstract class BaseListBitmapDataSubscriber extends facebook.datasource.BaseDataSubscriber<java.util.List<facebook.common.references.CloseableReference<image.CloseableImage>>> {
                    public static class: java.lang.Class<BaseListBitmapDataSubscriber>;
                    public constructor();
                    public onCancellation(param0: facebook.datasource.DataSource<any>): void;
                    public onProgressUpdate(param0: facebook.datasource.DataSource<any>): void;
                    public onNewResultListImpl(param0: java.util.List<globalAndroid.graphics.Bitmap>): void;
                    public onFailure(param0: facebook.datasource.DataSource<any>): void;
                    public onNewResultImpl(param0: facebook.datasource.DataSource<java.util.List<facebook.common.references.CloseableReference<image.CloseableImage>>>): void;
                    public onNewResultImpl(param0: facebook.datasource.DataSource<any>): void;
                    public onNewResult(param0: facebook.datasource.DataSource<any>): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace datasource {
                export class CloseableProducerToDataSourceAdapter<T> extends AbstractProducerToDataSourceAdapter<facebook.common.references.CloseableReference<any>> {
                    public static class: java.lang.Class<CloseableProducerToDataSourceAdapter<any>>;
                    public isFinished(): boolean;
                    public close(): boolean;
                    public hasFailed(): boolean;
                    public getResult(): facebook.common.references.CloseableReference<any>;
                    public closeResult(param0: any): void;
                    public getProgress(): number;
                    public closeResult(param0: facebook.common.references.CloseableReference<any>): void;
                    public static create(param0: producers.Producer<any>, param1: producers.SettableProducerContext, param2: listener.RequestListener): facebook.datasource.DataSource<any>;
                    public hasResult(): boolean;
                    public subscribe(param0: facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
                    public getImageRequest(): request.ImageRequest;
                    public getFailureCause(): java.lang.Throwable;
                    public getResult(): any;
                    public onNewResultImpl(param0: any, param1: number): void;
                    public onNewResultImpl(param0: facebook.common.references.CloseableReference<any>, param1: number): void;
                    public isClosed(): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace datasource {
                export class ListDataSource<T> extends facebook.datasource.AbstractDataSource<java.util.List<facebook.common.references.CloseableReference<any>>> {
                    public static class: java.lang.Class<ListDataSource<any>>;
                    public isFinished(): boolean;
                    public static create(param0: native.Array<facebook.datasource.DataSource<any>>): ListDataSource<any>;
                    public getResult(): java.util.List<facebook.common.references.CloseableReference<any>>;
                    public close(): boolean;
                    public hasFailed(): boolean;
                    public getProgress(): number;
                    public constructor();
                    public hasResult(): boolean;
                    public subscribe(param0: facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
                    public getFailureCause(): java.lang.Throwable;
                    public getResult(): any;
                    public constructor(param0: native.Array<facebook.datasource.DataSource<facebook.common.references.CloseableReference<any>>>);
                    public isClosed(): boolean;
                }
                export namespace ListDataSource {
                    export class InternalDataSubscriber extends facebook.datasource.DataSubscriber<facebook.common.references.CloseableReference<any>> {
                        public static class: java.lang.Class<InternalDataSubscriber>;
                        public onFailure(param0: facebook.datasource.DataSource<facebook.common.references.CloseableReference<any>>): void;
                        public onCancellation(param0: facebook.datasource.DataSource<facebook.common.references.CloseableReference<any>>): void;
                        public onNewResult(param0: facebook.datasource.DataSource<any>): void;
                        public onCancellation(param0: facebook.datasource.DataSource<any>): void;
                        public onFailure(param0: facebook.datasource.DataSource<any>): void;
                        public onNewResult(param0: facebook.datasource.DataSource<facebook.common.references.CloseableReference<any>>): void;
                        public onProgressUpdate(param0: facebook.datasource.DataSource<facebook.common.references.CloseableReference<any>>): void;
                        public onProgressUpdate(param0: facebook.datasource.DataSource<any>): void;
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
                export class ProducerToDataSourceAdapter<T> extends AbstractProducerToDataSourceAdapter<any> {
                    public static class: java.lang.Class<ProducerToDataSourceAdapter<any>>;
                    public isFinished(): boolean;
                    public getProgress(): number;
                    public static create(param0: producers.Producer<any>, param1: producers.SettableProducerContext, param2: listener.RequestListener): facebook.datasource.DataSource<any>;
                    public hasResult(): boolean;
                    public close(): boolean;
                    public subscribe(param0: facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
                    public getImageRequest(): request.ImageRequest;
                    public getFailureCause(): java.lang.Throwable;
                    public getResult(): any;
                    public hasFailed(): boolean;
                    public isClosed(): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace datasource {
                export class SettableDataSource<T> extends facebook.datasource.AbstractDataSource<facebook.common.references.CloseableReference<any>> {
                    public static class: java.lang.Class<SettableDataSource<any>>;
                    public isFinished(): boolean;
                    public close(): boolean;
                    public setProgress(param0: number): boolean;
                    public hasFailed(): boolean;
                    public getResult(): facebook.common.references.CloseableReference<any>;
                    public closeResult(param0: any): void;
                    public getProgress(): number;
                    public closeResult(param0: facebook.common.references.CloseableReference<any>): void;
                    public hasResult(): boolean;
                    public subscribe(param0: facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
                    public setException(param0: java.lang.Throwable): boolean;
                    public getFailureCause(): java.lang.Throwable;
                    public set(param0: facebook.common.references.CloseableReference<any>): boolean;
                    public getResult(): any;
                    public static create(): SettableDataSource<any>;
                    public isClosed(): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace decoder {
                export class DecodeException extends java.lang.RuntimeException {
                    public static class: java.lang.Class<DecodeException>;
                    public constructor(param0: string, param1: java.lang.Throwable);
                    public constructor(param0: string);
                    public constructor(param0: java.lang.Throwable);
                    public constructor();
                    public constructor(param0: string, param1: image.EncodedImage);
                    public getEncodedImage(): image.EncodedImage;
                    public constructor(param0: string, param1: java.lang.Throwable, param2: image.EncodedImage);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace decoder {
                export class DefaultImageDecoder extends java.lang.Object implements ImageDecoder {
                    public static class: java.lang.Class<DefaultImageDecoder>;
                    public constructor(param0: ImageDecoder, param1: ImageDecoder, param2: platform.PlatformDecoder, param3: java.util.Map<imageformat.ImageFormat, ImageDecoder>);
                    public decodeGif(param0: image.EncodedImage, param1: number, param2: image.QualityInfo, param3: common.ImageDecodeOptions): image.CloseableImage;
                    public decodeStaticImage(param0: image.EncodedImage, param1: common.ImageDecodeOptions): image.CloseableStaticBitmap;
                    public decodeJpeg(param0: image.EncodedImage, param1: number, param2: image.QualityInfo, param3: common.ImageDecodeOptions): image.CloseableStaticBitmap;
                    public constructor(param0: ImageDecoder, param1: ImageDecoder, param2: platform.PlatformDecoder);
                    public decode(param0: image.EncodedImage, param1: number, param2: image.QualityInfo, param3: common.ImageDecodeOptions): image.CloseableImage;
                    public decodeAnimatedWebp(param0: image.EncodedImage, param1: number, param2: image.QualityInfo, param3: common.ImageDecodeOptions): image.CloseableImage;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace decoder {
                export class ImageDecoder extends java.lang.Object {
                    public static class: java.lang.Class<ImageDecoder>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.decoder.ImageDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { decode(param0: image.EncodedImage, param1: number, param2: image.QualityInfo, param3: common.ImageDecodeOptions): image.CloseableImage });
                    public constructor();
                    public decode(param0: image.EncodedImage, param1: number, param2: image.QualityInfo, param3: common.ImageDecodeOptions): image.CloseableImage;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace decoder {
                export class ImageDecoderConfig extends java.lang.Object {
                    public static class: java.lang.Class<ImageDecoderConfig>;
                    public static newBuilder(): ImageDecoderConfig.Builder;
                    public getCustomImageDecoders(): java.util.Map<imageformat.ImageFormat, ImageDecoder>;
                    public getCustomImageFormats(): java.util.List<imageformat.ImageFormat.FormatChecker>;
                }
                export namespace ImageDecoderConfig {
                    export class Builder extends java.lang.Object {
                        public static class: java.lang.Class<Builder>;
                        public constructor();
                        public build(): ImageDecoderConfig;
                        public addDecodingCapability(param0: imageformat.ImageFormat, param1: imageformat.ImageFormat.FormatChecker, param2: ImageDecoder): Builder;
                        public overrideDecoder(param0: imageformat.ImageFormat, param1: ImageDecoder): Builder;
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
                export class ProgressiveJpegConfig extends java.lang.Object {
                    public static class: java.lang.Class<ProgressiveJpegConfig>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.decoder.ProgressiveJpegConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { getNextScanNumberToDecode(param0: number): number; getQualityInfo(param0: number): image.QualityInfo });
                    public constructor();
                    public getNextScanNumberToDecode(param0: number): number;
                    public getQualityInfo(param0: number): image.QualityInfo;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace decoder {
                export class ProgressiveJpegParser extends java.lang.Object {
                    public static class: java.lang.Class<ProgressiveJpegParser>;
                    public getBestScanEndOffset(): number;
                    public parseMoreData(param0: image.EncodedImage): boolean;
                    public isEndMarkerRead(): boolean;
                    public isJpeg(): boolean;
                    public getBestScanNumber(): number;
                    public constructor(param0: facebook.common.memory.ByteArrayPool);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace decoder {
                export class SimpleProgressiveJpegConfig extends java.lang.Object implements ProgressiveJpegConfig {
                    public static class: java.lang.Class<SimpleProgressiveJpegConfig>;
                    public getNextScanNumberToDecode(param0: number): number;
                    public getQualityInfo(param0: number): image.QualityInfo;
                    public constructor();
                    public constructor(param0: SimpleProgressiveJpegConfig.DynamicValueConfig);
                }
                export namespace SimpleProgressiveJpegConfig {
                    export class DefaultDynamicValueConfig extends java.lang.Object implements DynamicValueConfig {
                        public static class: java.lang.Class<DefaultDynamicValueConfig>;
                        public getScansToDecode(): java.util.List<java.lang.Integer>;
                        public getGoodEnoughScanNumber(): number;
                    }
                    export class DynamicValueConfig extends java.lang.Object {
                        public static class: java.lang.Class<DynamicValueConfig>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.decoder.SimpleProgressiveJpegConfig$DynamicValueConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { getScansToDecode(): java.util.List<java.lang.Integer>; getGoodEnoughScanNumber(): number });
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
                export class DrawableFactory extends java.lang.Object {
                    public static class: java.lang.Class<DrawableFactory>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.drawable.DrawableFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        supportsImageType(param0: image.CloseableImage): boolean;
                        createDrawable(param0: image.CloseableImage): globalAndroid.graphics.drawable.Drawable;
                    });
                    public constructor();
                    public createDrawable(param0: image.CloseableImage): globalAndroid.graphics.drawable.Drawable;
                    public supportsImageType(param0: image.CloseableImage): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace image {
                export class CloseableAnimatedImage extends CloseableImage {
                    public static class: java.lang.Class<CloseableAnimatedImage>;
                    public constructor(param0: animated.base.AnimatedImageResult);
                    public getImage(): animated.base.AnimatedImage;
                    public getImageResult(): animated.base.AnimatedImageResult;
                    public constructor();
                    public getHeight(): number;
                    public close(): void;
                    public getWidth(): number;
                    public isStateful(): boolean;
                    public getQualityInfo(): QualityInfo;
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
                export abstract class CloseableBitmap extends CloseableImage {
                    public static class: java.lang.Class<CloseableBitmap>;
                    public getUnderlyingBitmap(): globalAndroid.graphics.Bitmap;
                    public constructor();
                    public getHeight(): number;
                    public close(): void;
                    public getWidth(): number;
                    public getQualityInfo(): QualityInfo;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace image {
                export abstract class CloseableImage extends java.lang.Object implements java.io.Closeable, ImageInfo {
                    public static class: java.lang.Class<CloseableImage>;
                    public constructor();
                    public getHeight(): number;
                    public finalize(): void;
                    public close(): void;
                    public getQualityInfo(): QualityInfo;
                    public isStateful(): boolean;
                    public getWidth(): number;
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
                export class CloseableStaticBitmap extends CloseableBitmap {
                    public static class: java.lang.Class<CloseableStaticBitmap>;
                    public convertToBitmapReference(): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public cloneUnderlyingBitmapReference(): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public getUnderlyingBitmap(): globalAndroid.graphics.Bitmap;
                    public getHeight(): number;
                    public getWidth(): number;
                    public getExifOrientation(): number;
                    public getSizeInBytes(): number;
                    public constructor(
                        param0: globalAndroid.graphics.Bitmap,
                        param1: facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>,
                        param2: QualityInfo,
                        param3: number,
                        param4: number
                    );
                    public constructor();
                    public constructor(param0: facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param1: QualityInfo, param2: number);
                    public getRotationAngle(): number;
                    public close(): void;
                    public getQualityInfo(): QualityInfo;
                    public constructor(param0: facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param1: QualityInfo, param2: number, param3: number);
                    public constructor(param0: globalAndroid.graphics.Bitmap, param1: facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, param2: QualityInfo, param3: number);
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
                export class EncodedImage extends java.lang.Object implements java.io.Closeable {
                    public static class: java.lang.Class<EncodedImage>;
                    public static UNKNOWN_ROTATION_ANGLE: number;
                    public static UNKNOWN_WIDTH: number;
                    public static UNKNOWN_HEIGHT: number;
                    public static UNKNOWN_STREAM_SIZE: number;
                    public static DEFAULT_SAMPLE_SIZE: number;
                    public copyMetaDataFrom(param0: EncodedImage): void;
                    public setHeight(param0: number): void;
                    public static isValid(param0: EncodedImage): boolean;
                    public setImageFormat(param0: imageformat.ImageFormat): void;
                    public static cloneOrNull(param0: EncodedImage): EncodedImage;
                    public getSize(): number;
                    public constructor(param0: facebook.common.internal.Supplier<java.io.FileInputStream>);
                    public static closeSafely(param0: EncodedImage): void;
                    public cloneOrNull(): EncodedImage;
                    public parseMetaData(): void;
                    public getUnderlyingReferenceTestOnly(): facebook.common.references.SharedReference<facebook.common.memory.PooledByteBuffer>;
                    public getByteBufferRef(): facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>;
                    public setSampleSize(param0: number): void;
                    public constructor(param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>);
                    public close(): void;
                    public getInputStream(): java.io.InputStream;
                    public isCompleteAt(param0: number): boolean;
                    public getImageFormat(): imageformat.ImageFormat;
                    public getFirstBytesAsHexString(param0: number): string;
                    public setWidth(param0: number): void;
                    public getHeight(): number;
                    public getWidth(): number;
                    public getBytesRange(): common.BytesRange;
                    public setStreamSize(param0: number): void;
                    public setBytesRange(param0: common.BytesRange): void;
                    public getExifOrientation(): number;
                    public setRotationAngle(param0: number): void;
                    public constructor(param0: facebook.common.internal.Supplier<java.io.FileInputStream>, param1: number);
                    public getSampleSize(): number;
                    public isValid(): boolean;
                    public getRotationAngle(): number;
                    public static isMetaDataAvailable(param0: EncodedImage): boolean;
                    public setExifOrientation(param0: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace image {
                export class ImageInfo extends java.lang.Object {
                    public static class: java.lang.Class<ImageInfo>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.image.ImageInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { getWidth(): number; getHeight(): number; getQualityInfo(): QualityInfo });
                    public constructor();
                    public getHeight(): number;
                    public getWidth(): number;
                    public getQualityInfo(): QualityInfo;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace image {
                export class ImmutableQualityInfo extends java.lang.Object implements QualityInfo {
                    public static class: java.lang.Class<ImmutableQualityInfo>;
                    public static FULL_QUALITY: QualityInfo;
                    public equals(param0: any): boolean;
                    public isOfGoodEnoughQuality(): boolean;
                    public getQuality(): number;
                    public isOfFullQuality(): boolean;
                    public static of(param0: number, param1: boolean, param2: boolean): QualityInfo;
                    public hashCode(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace image {
                export class QualityInfo extends java.lang.Object {
                    public static class: java.lang.Class<QualityInfo>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.image.QualityInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { getQuality(): number; isOfGoodEnoughQuality(): boolean; isOfFullQuality(): boolean });
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
            export namespace listener {
                export class BaseRequestListener extends java.lang.Object implements RequestListener {
                    public static class: java.lang.Class<BaseRequestListener>;
                    public requiresExtraMap(param0: string): boolean;
                    public onProducerStart(param0: string, param1: string): void;
                    public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                    public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                    public constructor();
                    public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string, string>): void;
                    public onRequestStart(param0: request.ImageRequest, param1: any, param2: string, param3: boolean): void;
                    public onRequestSuccess(param0: request.ImageRequest, param1: string, param2: boolean): void;
                    public onRequestFailure(param0: request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
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
                export class ForwardingRequestListener extends java.lang.Object implements RequestListener {
                    public static class: java.lang.Class<ForwardingRequestListener>;
                    public constructor(param0: native.Array<RequestListener>);
                    public onProducerStart(param0: string, param1: string): void;
                    public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string, string>): void;
                    public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
                    public onRequestFailure(param0: request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
                    public onProducerEvent(param0: string, param1: string, param2: string): void;
                    public requiresExtraMap(param0: string): boolean;
                    public constructor(param0: java.util.Set<RequestListener>);
                    public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                    public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                    public onRequestStart(param0: request.ImageRequest, param1: any, param2: string, param3: boolean): void;
                    public onRequestSuccess(param0: request.ImageRequest, param1: string, param2: boolean): void;
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
                export class RequestListener extends java.lang.Object implements producers.ProducerListener {
                    public static class: java.lang.Class<RequestListener>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.listener.RequestListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onRequestStart(param0: request.ImageRequest, param1: any, param2: string, param3: boolean): void;
                        onRequestSuccess(param0: request.ImageRequest, param1: string, param2: boolean): void;
                        onRequestFailure(param0: request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
                        onRequestCancellation(param0: string): void;
                        onProducerStart(param0: string, param1: string): void;
                        onProducerEvent(param0: string, param1: string, param2: string): void;
                        onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                        onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string, string>): void;
                        onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                        onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
                        requiresExtraMap(param0: string): boolean;
                    });
                    public constructor();
                    public requiresExtraMap(param0: string): boolean;
                    public onProducerStart(param0: string, param1: string): void;
                    public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                    public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                    public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string, string>): void;
                    public onRequestStart(param0: request.ImageRequest, param1: any, param2: string, param3: boolean): void;
                    public onRequestSuccess(param0: request.ImageRequest, param1: string, param2: boolean): void;
                    public onRequestFailure(param0: request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
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
                export class RequestLoggingListener extends java.lang.Object implements RequestListener {
                    public static class: java.lang.Class<RequestLoggingListener>;
                    public requiresExtraMap(param0: string): boolean;
                    public onProducerStart(param0: string, param1: string): void;
                    public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                    public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                    public constructor();
                    public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string, string>): void;
                    public onRequestStart(param0: request.ImageRequest, param1: any, param2: string, param3: boolean): void;
                    public onRequestSuccess(param0: request.ImageRequest, param1: string, param2: boolean): void;
                    public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
                    public onRequestFailure(param0: request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
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
            export namespace memory {
                export abstract class BasePool<V> extends facebook.common.memory.Pool<any> {
                    public static class: java.lang.Class<BasePool<any>>;
                    public isReusable(param0: any): boolean;
                    public getStats(): java.util.Map<string, java.lang.Integer>;
                    public free(param0: any): void;
                    public getBucketedSize(param0: number): number;
                    public alloc(param0: number): any;
                    public getSizeInBytes(param0: number): number;
                    public release(param0: any): void;
                    public getBucketedSizeForValue(param0: any): number;
                    public trim(param0: facebook.common.memory.MemoryTrimType): void;
                    public get(param0: number): any;
                    public onParamsChanged(): void;
                    public constructor(param0: facebook.common.memory.MemoryTrimmableRegistry, param1: PoolParams, param2: PoolStatsTracker);
                    public initialize(): void;
                }
                export namespace BasePool {
                    export class Counter extends java.lang.Object {
                        public static class: java.lang.Class<Counter>;
                        public increment(param0: number): void;
                        public decrement(param0: number): void;
                        public reset(): void;
                    }
                    export class InvalidSizeException extends java.lang.RuntimeException {
                        public static class: java.lang.Class<InvalidSizeException>;
                        public constructor();
                        public constructor(param0: java.lang.Throwable);
                        public constructor(param0: any);
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: string);
                    }
                    export class InvalidValueException extends java.lang.RuntimeException {
                        public static class: java.lang.Class<InvalidValueException>;
                        public constructor();
                        public constructor(param0: java.lang.Throwable);
                        public constructor(param0: any);
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: string);
                    }
                    export class PoolSizeViolationException extends java.lang.RuntimeException {
                        public static class: java.lang.Class<PoolSizeViolationException>;
                        public constructor();
                        public constructor(param0: java.lang.Throwable);
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: string);
                        public constructor(param0: number, param1: number, param2: number, param3: number);
                    }
                    export class SizeTooLargeException extends InvalidSizeException {
                        public static class: java.lang.Class<SizeTooLargeException>;
                        public constructor();
                        public constructor(param0: java.lang.Throwable);
                        public constructor(param0: any);
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: string);
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
                export class BitmapCounter extends java.lang.Object {
                    public static class: java.lang.Class<BitmapCounter>;
                    public increase(param0: globalAndroid.graphics.Bitmap): boolean;
                    public getMaxCount(): number;
                    public associateBitmapsWithBitmapCounter(
                        param0: java.util.List<globalAndroid.graphics.Bitmap>
                    ): java.util.List<facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>>;
                    public getCount(): number;
                    public decrease(param0: globalAndroid.graphics.Bitmap): void;
                    public getMaxSize(): number;
                    public getSize(): number;
                    public getReleaser(): facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>;
                    public constructor(param0: number, param1: number);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class BitmapCounterProvider extends java.lang.Object {
                    public static class: java.lang.Class<BitmapCounterProvider>;
                    public static MAX_BITMAP_TOTAL_SIZE: number;
                    public static MAX_BITMAP_COUNT: number;
                    public constructor();
                    public static get(): BitmapCounter;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class BitmapPool extends BasePool<globalAndroid.graphics.Bitmap> {
                    public static class: java.lang.Class<BitmapPool>;
                    public isReusable(param0: any): boolean;
                    public free(param0: any): void;
                    public free(param0: globalAndroid.graphics.Bitmap): void;
                    public getBucketedSize(param0: number): number;
                    public alloc(param0: number): any;
                    public alloc(param0: number): globalAndroid.graphics.Bitmap;
                    public getSizeInBytes(param0: number): number;
                    public release(param0: any): void;
                    public getBucketedSizeForValue(param0: any): number;
                    public get(param0: number): any;
                    public getBucketedSizeForValue(param0: globalAndroid.graphics.Bitmap): number;
                    public constructor(param0: facebook.common.memory.MemoryTrimmableRegistry, param1: PoolParams, param2: PoolStatsTracker);
                    public isReusable(param0: globalAndroid.graphics.Bitmap): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class Bucket<V> extends java.lang.Object {
                    public static class: java.lang.Class<Bucket<any>>;
                    public mItemSize: number;
                    public mMaxLength: number;
                    public incrementInUseCount(): void;
                    public constructor(param0: number, param1: number, param2: number);
                    public isMaxLengthExceeded(): boolean;
                    public pop(): V;
                    public decrementInUseCount(): void;
                    public getInUseCount(): number;
                    public release(param0: V): void;
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
                export class DefaultBitmapPoolParams extends java.lang.Object {
                    public static class: java.lang.Class<DefaultBitmapPoolParams>;
                    public static get(): PoolParams;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class DefaultByteArrayPoolParams extends java.lang.Object {
                    public static class: java.lang.Class<DefaultByteArrayPoolParams>;
                    public static get(): PoolParams;
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
                export class DefaultFlexByteArrayPoolParams extends java.lang.Object {
                    public static class: java.lang.Class<DefaultFlexByteArrayPoolParams>;
                    public static DEFAULT_MAX_BYTE_ARRAY_SIZE: number;
                    public static DEFAULT_MAX_NUM_THREADS: number;
                    public static generateBuckets(param0: number, param1: number, param2: number): globalAndroid.util.SparseIntArray;
                    public static get(): PoolParams;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class DefaultNativeMemoryChunkPoolParams extends java.lang.Object {
                    public static class: java.lang.Class<DefaultNativeMemoryChunkPoolParams>;
                    public static get(): PoolParams;
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
                export class FlexByteArrayPool extends java.lang.Object {
                    public static class: java.lang.Class<FlexByteArrayPool>;
                    public getStats(): java.util.Map<string, java.lang.Integer>;
                    public getMinBufferSize(): number;
                    public get(param0: number): facebook.common.references.CloseableReference<native.Array<number>>;
                    public release(param0: native.Array<number>): void;
                    public constructor(param0: facebook.common.memory.MemoryTrimmableRegistry, param1: PoolParams);
                }
                export namespace FlexByteArrayPool {
                    export class SoftRefByteArrayPool extends GenericByteArrayPool {
                        public static class: java.lang.Class<SoftRefByteArrayPool>;
                        public constructor(param0: facebook.common.memory.MemoryTrimmableRegistry, param1: PoolParams, param2: PoolStatsTracker);
                        public get(param0: number): any;
                        public release(param0: any): void;
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
                export class GenericByteArrayPool extends BasePool<native.Array<number>> implements facebook.common.memory.ByteArrayPool {
                    public static class: java.lang.Class<GenericByteArrayPool>;
                    public getMinBufferSize(): number;
                    public free(param0: any): void;
                    public getBucketedSize(param0: number): number;
                    public alloc(param0: number): any;
                    public getBucketedSizeForValue(param0: native.Array<number>): number;
                    public getSizeInBytes(param0: number): number;
                    public release(param0: any): void;
                    public getBucketedSizeForValue(param0: any): number;
                    public trim(param0: facebook.common.memory.MemoryTrimType): void;
                    public get(param0: number): any;
                    public alloc(param0: number): native.Array<number>;
                    public free(param0: native.Array<number>): void;
                    public constructor(param0: facebook.common.memory.MemoryTrimmableRegistry, param1: PoolParams, param2: PoolStatsTracker);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class NativeMemoryChunk extends java.lang.Object implements java.io.Closeable {
                    public static class: java.lang.Class<NativeMemoryChunk>;
                    public read(param0: number): number;
                    public constructor();
                    public finalize(): void;
                    public close(): void;
                    public write(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
                    public copy(param0: number, param1: NativeMemoryChunk, param2: number, param3: number): void;
                    public read(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
                    public getNativePtr(): number;
                    public getSize(): number;
                    public constructor(param0: number);
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
                export class NativeMemoryChunkPool extends BasePool<NativeMemoryChunk> {
                    public static class: java.lang.Class<NativeMemoryChunkPool>;
                    public isReusable(param0: any): boolean;
                    public getMinBufferSize(): number;
                    public free(param0: any): void;
                    public getBucketedSize(param0: number): number;
                    public alloc(param0: number): NativeMemoryChunk;
                    public getBucketedSizeForValue(param0: NativeMemoryChunk): number;
                    public alloc(param0: number): any;
                    public isReusable(param0: NativeMemoryChunk): boolean;
                    public getSizeInBytes(param0: number): number;
                    public release(param0: any): void;
                    public getBucketedSizeForValue(param0: any): number;
                    public get(param0: number): any;
                    public free(param0: NativeMemoryChunk): void;
                    public constructor(param0: facebook.common.memory.MemoryTrimmableRegistry, param1: PoolParams, param2: PoolStatsTracker);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class NativePooledByteBuffer extends java.lang.Object implements facebook.common.memory.PooledByteBuffer {
                    public static class: java.lang.Class<NativePooledByteBuffer>;
                    public read(param0: number): number;
                    public close(): void;
                    public read(param0: number, param1: native.Array<number>, param2: number, param3: number): void;
                    public size(): number;
                    public constructor(param0: facebook.common.references.CloseableReference<NativeMemoryChunk>, param1: number);
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
                export class NativePooledByteBufferFactory extends java.lang.Object implements facebook.common.memory.PooledByteBufferFactory {
                    public static class: java.lang.Class<NativePooledByteBufferFactory>;
                    public newOutputStream(param0: number): facebook.common.memory.PooledByteBufferOutputStream;
                    public newByteBuffer(param0: number): facebook.common.memory.PooledByteBuffer;
                    public newByteBuffer(param0: java.io.InputStream, param1: number): NativePooledByteBuffer;
                    public newOutputStream(): facebook.common.memory.PooledByteBufferOutputStream;
                    public newOutputStream(param0: number): NativePooledByteBufferOutputStream;
                    public newByteBuffer(param0: native.Array<number>): facebook.common.memory.PooledByteBuffer;
                    public newOutputStream(): NativePooledByteBufferOutputStream;
                    public constructor(param0: NativeMemoryChunkPool, param1: facebook.common.memory.PooledByteStreams);
                    public newByteBuffer(param0: number): NativePooledByteBuffer;
                    public newByteBuffer(param0: native.Array<number>): NativePooledByteBuffer;
                    public newByteBuffer(param0: java.io.InputStream): facebook.common.memory.PooledByteBuffer;
                    public newByteBuffer(param0: java.io.InputStream, param1: number): facebook.common.memory.PooledByteBuffer;
                    public newByteBuffer(param0: java.io.InputStream): NativePooledByteBuffer;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class NativePooledByteBufferOutputStream extends facebook.common.memory.PooledByteBufferOutputStream {
                    public static class: java.lang.Class<NativePooledByteBufferOutputStream>;
                    public write(param0: native.Array<number>, param1: number, param2: number): void;
                    public write(param0: native.Array<number>): void;
                    public constructor();
                    public toByteBuffer(): facebook.common.memory.PooledByteBuffer;
                    public close(): void;
                    public size(): number;
                    public write(param0: number): void;
                    public flush(): void;
                    public constructor(param0: NativeMemoryChunkPool, param1: number);
                    public toByteBuffer(): NativePooledByteBuffer;
                    public constructor(param0: NativeMemoryChunkPool);
                }
                export namespace NativePooledByteBufferOutputStream {
                    export class InvalidStreamException extends java.lang.RuntimeException {
                        public static class: java.lang.Class<InvalidStreamException>;
                        public constructor();
                        public constructor(param0: java.lang.Throwable);
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: string);
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
                export class NoOpPoolStatsTracker extends java.lang.Object implements PoolStatsTracker {
                    public static class: java.lang.Class<NoOpPoolStatsTracker>;
                    public setBasePool(param0: BasePool<any>): void;
                    public onValueReuse(param0: number): void;
                    public onHardCapReached(): void;
                    public static getInstance(): NoOpPoolStatsTracker;
                    public onSoftCapReached(): void;
                    public onValueRelease(param0: number): void;
                    public onAlloc(param0: number): void;
                    public onFree(param0: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class OOMSoftReferenceBucket<V> extends Bucket<any> {
                    public static class: java.lang.Class<OOMSoftReferenceBucket<any>>;
                    public constructor(param0: number, param1: number, param2: number);
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
                export class PoolConfig extends java.lang.Object {
                    public static class: java.lang.Class<PoolConfig>;
                    public getBitmapPoolStatsTracker(): PoolStatsTracker;
                    public getNativeMemoryChunkPoolParams(): PoolParams;
                    public getBitmapPoolParams(): PoolParams;
                    public getNativeMemoryChunkPoolStatsTracker(): PoolStatsTracker;
                    public getSmallByteArrayPoolParams(): PoolParams;
                    public getMemoryTrimmableRegistry(): facebook.common.memory.MemoryTrimmableRegistry;
                    public static newBuilder(): PoolConfig.Builder;
                    public getFlexByteArrayPoolParams(): PoolParams;
                    public getSmallByteArrayPoolStatsTracker(): PoolStatsTracker;
                }
                export namespace PoolConfig {
                    export class Builder extends java.lang.Object {
                        public static class: java.lang.Class<Builder>;
                        public setBitmapPoolStatsTracker(param0: PoolStatsTracker): Builder;
                        public setBitmapPoolParams(param0: PoolParams): Builder;
                        public setSmallByteArrayPoolParams(param0: PoolParams): Builder;
                        public setFlexByteArrayPoolParams(param0: PoolParams): Builder;
                        public setSmallByteArrayPoolStatsTracker(param0: PoolStatsTracker): Builder;
                        public build(): PoolConfig;
                        public setMemoryTrimmableRegistry(param0: facebook.common.memory.MemoryTrimmableRegistry): Builder;
                        public setNativeMemoryChunkPoolParams(param0: PoolParams): Builder;
                        public setNativeMemoryChunkPoolStatsTracker(param0: PoolStatsTracker): Builder;
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
                export class PoolFactory extends java.lang.Object {
                    public static class: java.lang.Class<PoolFactory>;
                    public constructor(param0: PoolConfig);
                    public getFlexByteArrayPool(): FlexByteArrayPool;
                    public getSmallByteArrayPool(): facebook.common.memory.ByteArrayPool;
                    public getSharedByteArray(): SharedByteArray;
                    public getPooledByteBufferFactory(): facebook.common.memory.PooledByteBufferFactory;
                    public getBitmapPool(): BitmapPool;
                    public getPooledByteStreams(): facebook.common.memory.PooledByteStreams;
                    public getNativeMemoryChunkPool(): NativeMemoryChunkPool;
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
                export class PoolParams extends java.lang.Object {
                    public static class: java.lang.Class<PoolParams>;
                    public static IGNORE_THREADS: number;
                    public maxSizeHardCap: number;
                    public maxSizeSoftCap: number;
                    public bucketSizes: globalAndroid.util.SparseIntArray;
                    public minBucketSize: number;
                    public maxBucketSize: number;
                    public maxNumThreads: number;
                    public constructor(param0: number, param1: number, param2: globalAndroid.util.SparseIntArray);
                    public constructor(param0: number, param1: globalAndroid.util.SparseIntArray);
                    public constructor(param0: number, param1: number, param2: globalAndroid.util.SparseIntArray, param3: number, param4: number, param5: number);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class PoolStatsTracker extends java.lang.Object {
                    public static class: java.lang.Class<PoolStatsTracker>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.memory.PoolStatsTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        setBasePool(param0: BasePool<any>): void;
                        onValueReuse(param0: number): void;
                        onSoftCapReached(): void;
                        onHardCapReached(): void;
                        onAlloc(param0: number): void;
                        onFree(param0: number): void;
                        onValueRelease(param0: number): void;
                    });
                    public constructor();
                    public static SOFT_CAP: string;
                    public static USED_COUNT: string;
                    public static BUCKETS_USED_PREFIX: string;
                    public static USED_BYTES: string;
                    public static FREE_COUNT: string;
                    public static FREE_BYTES: string;
                    public static HARD_CAP: string;
                    public setBasePool(param0: BasePool<any>): void;
                    public onValueReuse(param0: number): void;
                    public onHardCapReached(): void;
                    public onSoftCapReached(): void;
                    public onValueRelease(param0: number): void;
                    public onAlloc(param0: number): void;
                    public onFree(param0: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class SharedByteArray extends java.lang.Object implements facebook.common.memory.MemoryTrimmable {
                    public static class: java.lang.Class<SharedByteArray>;
                    public get(param0: number): facebook.common.references.CloseableReference<native.Array<number>>;
                    public trim(param0: facebook.common.memory.MemoryTrimType): void;
                    public constructor(param0: facebook.common.memory.MemoryTrimmableRegistry, param1: PoolParams);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace nativecode {
                export class Bitmaps extends java.lang.Object {
                    public static class: java.lang.Class<Bitmaps>;
                    public static releaseByteBuffer(param0: globalAndroid.graphics.Bitmap): void;
                    public constructor();
                    public static copyBitmap(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
                    public static pinBitmap(param0: globalAndroid.graphics.Bitmap): void;
                    public static reconfigureBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap.Config): void;
                    public static getByteBuffer(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): java.nio.ByteBuffer;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace nativecode {
                export class ImagePipelineNativeLoader extends java.lang.Object {
                    public static class: java.lang.Class<ImagePipelineNativeLoader>;
                    public static DSO_NAME: string;
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
                export class JpegTranscoder extends java.lang.Object {
                    public static class: java.lang.Class<JpegTranscoder>;
                    public static MIN_QUALITY: number;
                    public static MAX_QUALITY: number;
                    public static MIN_SCALE_NUMERATOR: number;
                    public static MAX_SCALE_NUMERATOR: number;
                    public static SCALE_DENOMINATOR: number;
                    public static transcodeJpegWithExifOrientation(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number, param3: number, param4: number): void;
                    public constructor();
                    public static transcodeJpeg(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number, param3: number, param4: number): void;
                    public static isRotationAngleAllowed(param0: number): boolean;
                    public static isExifOrientationAllowed(param0: number): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace nativecode {
                export class NativeBlurFilter extends java.lang.Object {
                    public static class: java.lang.Class<NativeBlurFilter>;
                    public constructor();
                    public static iterativeBoxBlur(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace nativecode {
                export class NativeRoundingFilter extends java.lang.Object {
                    public static class: java.lang.Class<NativeRoundingFilter>;
                    public constructor();
                    public static toCircle(param0: globalAndroid.graphics.Bitmap): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace nativecode {
                export class WebpTranscoder extends java.lang.Object {
                    public static class: java.lang.Class<WebpTranscoder>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.nativecode.WebpTranscoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        isWebpNativelySupported(param0: imageformat.ImageFormat): boolean;
                        transcodeWebpToJpeg(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number): void;
                        transcodeWebpToPng(param0: java.io.InputStream, param1: java.io.OutputStream): void;
                    });
                    public constructor();
                    public transcodeWebpToPng(param0: java.io.InputStream, param1: java.io.OutputStream): void;
                    public isWebpNativelySupported(param0: imageformat.ImageFormat): boolean;
                    public transcodeWebpToJpeg(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace nativecode {
                export class WebpTranscoderFactory extends java.lang.Object {
                    public static class: java.lang.Class<WebpTranscoderFactory>;
                    public static sWebpTranscoderPresent: boolean;
                    public constructor();
                    public static getWebpTranscoder(): WebpTranscoder;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace platform {
                export class ArtDecoder extends java.lang.Object implements PlatformDecoder {
                    public static class: java.lang.Class<ArtDecoder>;
                    public constructor(param0: memory.BitmapPool, param1: number, param2: globalAndroid.support.v4.util.Pools.SynchronizedPool<any>);
                    public decodeJPEGFromEncodedImage(
                        param0: image.EncodedImage,
                        param1: globalAndroid.graphics.Bitmap.Config,
                        param2: globalAndroid.graphics.Rect,
                        param3: number
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeStaticImageFromStream(
                        param0: java.io.InputStream,
                        param1: globalAndroid.graphics.BitmapFactory.Options,
                        param2: globalAndroid.graphics.Rect
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeFromEncodedImage(
                        param0: image.EncodedImage,
                        param1: globalAndroid.graphics.Bitmap.Config,
                        param2: globalAndroid.graphics.Rect
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace platform {
                export abstract class DalvikPurgeableDecoder extends java.lang.Object implements PlatformDecoder {
                    public static class: java.lang.Class<DalvikPurgeableDecoder>;
                    public static EOI: native.Array<number>;
                    public decodeJPEGFromEncodedImage(
                        param0: image.EncodedImage,
                        param1: globalAndroid.graphics.Bitmap.Config,
                        param2: globalAndroid.graphics.Rect,
                        param3: number
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public pinBitmap(param0: globalAndroid.graphics.Bitmap): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeFromEncodedImage(
                        param0: image.EncodedImage,
                        param1: globalAndroid.graphics.Bitmap.Config,
                        param2: globalAndroid.graphics.Rect
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public static endsWithEOI(param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>, param1: number): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace platform {
                export class GingerbreadPurgeableDecoder extends DalvikPurgeableDecoder {
                    public static class: java.lang.Class<GingerbreadPurgeableDecoder>;
                    public decodeJPEGFromEncodedImage(
                        param0: image.EncodedImage,
                        param1: globalAndroid.graphics.Bitmap.Config,
                        param2: globalAndroid.graphics.Rect,
                        param3: number
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor();
                    public decodeFileDescriptorAsPurgeable(
                        param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>,
                        param1: number,
                        param2: native.Array<number>,
                        param3: globalAndroid.graphics.BitmapFactory.Options
                    ): globalAndroid.graphics.Bitmap;
                    public decodeFromEncodedImage(
                        param0: image.EncodedImage,
                        param1: globalAndroid.graphics.Bitmap.Config,
                        param2: globalAndroid.graphics.Rect
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeJPEGByteArrayAsPurgeable(
                        param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>,
                        param1: number,
                        param2: globalAndroid.graphics.BitmapFactory.Options
                    ): globalAndroid.graphics.Bitmap;
                    public decodeByteArrayAsPurgeable(
                        param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>,
                        param1: globalAndroid.graphics.BitmapFactory.Options
                    ): globalAndroid.graphics.Bitmap;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace platform {
                export class KitKatPurgeableDecoder extends DalvikPurgeableDecoder {
                    public static class: java.lang.Class<KitKatPurgeableDecoder>;
                    public decodeJPEGFromEncodedImage(
                        param0: image.EncodedImage,
                        param1: globalAndroid.graphics.Bitmap.Config,
                        param2: globalAndroid.graphics.Rect,
                        param3: number
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeFromEncodedImage(
                        param0: image.EncodedImage,
                        param1: globalAndroid.graphics.Bitmap.Config,
                        param2: globalAndroid.graphics.Rect
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor(param0: memory.FlexByteArrayPool);
                    public decodeJPEGByteArrayAsPurgeable(
                        param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>,
                        param1: number,
                        param2: globalAndroid.graphics.BitmapFactory.Options
                    ): globalAndroid.graphics.Bitmap;
                    public decodeByteArrayAsPurgeable(
                        param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>,
                        param1: globalAndroid.graphics.BitmapFactory.Options
                    ): globalAndroid.graphics.Bitmap;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace platform {
                export class PlatformDecoder extends java.lang.Object {
                    public static class: java.lang.Class<PlatformDecoder>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.platform.PlatformDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        decodeFromEncodedImage(
                            param0: image.EncodedImage,
                            param1: globalAndroid.graphics.Bitmap.Config,
                            param2: globalAndroid.graphics.Rect
                        ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        decodeJPEGFromEncodedImage(
                            param0: image.EncodedImage,
                            param1: globalAndroid.graphics.Bitmap.Config,
                            param2: globalAndroid.graphics.Rect,
                            param3: number
                        ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    });
                    public constructor();
                    public decodeJPEGFromEncodedImage(
                        param0: image.EncodedImage,
                        param1: globalAndroid.graphics.Bitmap.Config,
                        param2: globalAndroid.graphics.Rect,
                        param3: number
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeFromEncodedImage(
                        param0: image.EncodedImage,
                        param1: globalAndroid.graphics.Bitmap.Config,
                        param2: globalAndroid.graphics.Rect
                    ): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace postprocessors {
                export class IterativeBoxBlurPostProcessor extends request.BasePostprocessor {
                    public static class: java.lang.Class<IterativeBoxBlurPostProcessor>;
                    public process(param0: globalAndroid.graphics.Bitmap, param1: bitmaps.PlatformBitmapFactory): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor();
                    public getName(): string;
                    public process(param0: globalAndroid.graphics.Bitmap): void;
                    public getPostprocessorCacheKey(): facebook.cache.common.CacheKey;
                    public process(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
                    public constructor(param0: number);
                    public constructor(param0: number, param1: number);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace postprocessors {
                export class RoundAsCirclePostprocessor extends request.BasePostprocessor {
                    public static class: java.lang.Class<RoundAsCirclePostprocessor>;
                    public process(param0: globalAndroid.graphics.Bitmap, param1: bitmaps.PlatformBitmapFactory): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor();
                    public getName(): string;
                    public process(param0: globalAndroid.graphics.Bitmap): void;
                    public getPostprocessorCacheKey(): facebook.cache.common.CacheKey;
                    public process(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class AddImageTransformMetaDataProducer extends Producer<image.EncodedImage> {
                    public static class: java.lang.Class<AddImageTransformMetaDataProducer>;
                    public constructor(param0: Producer<image.EncodedImage>);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
                export namespace AddImageTransformMetaDataProducer {
                    export class AddImageTransformMetaDataConsumer extends DelegatingConsumer<image.EncodedImage, image.EncodedImage> {
                        public static class: java.lang.Class<AddImageTransformMetaDataConsumer>;
                        public onNewResultImpl(param0: image.EncodedImage, param1: number): void;
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
                export abstract class BaseConsumer<T> extends Consumer<any> {
                    public static class: java.lang.Class<BaseConsumer<any>>;
                    public onNewResult(param0: any, param1: number): void;
                    public onUnhandledException(param0: java.lang.Exception): void;
                    public static statusHasFlag(param0: number, param1: number): boolean;
                    public onFailure(param0: java.lang.Throwable): void;
                    public static turnOffStatusFlag(param0: number, param1: number): number;
                    public onProgressUpdateImpl(param0: number): void;
                    public static isLast(param0: number): boolean;
                    public onFailureImpl(param0: java.lang.Throwable): void;
                    public static isNotLast(param0: number): boolean;
                    public onCancellationImpl(): void;
                    public onCancellation(): void;
                    public constructor();
                    public static turnOnStatusFlag(param0: number, param1: number): number;
                    public static simpleStatusForIsLast(param0: boolean): number;
                    public static statusHasAnyFlag(param0: number, param1: number): boolean;
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
                export abstract class BaseNetworkFetcher<FETCH_STATE> extends NetworkFetcher<any> {
                    public static class: java.lang.Class<BaseNetworkFetcher<any>>;
                    public onFetchCompletion(param0: any, param1: number): void;
                    public getExtraMap(param0: any, param1: number): java.util.Map<string, string>;
                    public constructor();
                    public createFetchState(param0: Consumer<image.EncodedImage>, param1: ProducerContext): any;
                    public shouldPropagate(param0: any): boolean;
                    public fetch(param0: any, param1: NetworkFetcher.Callback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class BaseProducerContext extends java.lang.Object implements ProducerContext {
                    public static class: java.lang.Class<BaseProducerContext>;
                    public getPriority(): common.Priority;
                    public constructor(
                        param0: request.ImageRequest,
                        param1: string,
                        param2: ProducerListener,
                        param3: any,
                        param4: request.ImageRequest.RequestLevel,
                        param5: boolean,
                        param6: boolean,
                        param7: common.Priority
                    );
                    public getId(): string;
                    public setIsPrefetchNoCallbacks(param0: boolean): java.util.List<ProducerContextCallbacks>;
                    public isCancelled(): boolean;
                    public addCallbacks(param0: ProducerContextCallbacks): void;
                    public cancel(): void;
                    public setPriorityNoCallbacks(param0: common.Priority): java.util.List<ProducerContextCallbacks>;
                    public setIsIntermediateResultExpectedNoCallbacks(param0: boolean): java.util.List<ProducerContextCallbacks>;
                    public cancelNoCallbacks(): java.util.List<ProducerContextCallbacks>;
                    public static callOnIsPrefetchChanged(param0: java.util.List<ProducerContextCallbacks>): void;
                    public static callOnCancellationRequested(param0: java.util.List<ProducerContextCallbacks>): void;
                    public static callOnIsIntermediateResultExpectedChanged(param0: java.util.List<ProducerContextCallbacks>): void;
                    public static callOnPriorityChanged(param0: java.util.List<ProducerContextCallbacks>): void;
                    public getListener(): ProducerListener;
                    public getImageRequest(): request.ImageRequest;
                    public isIntermediateResultExpected(): boolean;
                    public getCallerContext(): any;
                    public getLowestPermittedRequestLevel(): request.ImageRequest.RequestLevel;
                    public isPrefetch(): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class BaseProducerContextCallbacks extends java.lang.Object implements ProducerContextCallbacks {
                    public static class: java.lang.Class<BaseProducerContextCallbacks>;
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
                export class BitmapMemoryCacheGetProducer extends BitmapMemoryCacheProducer {
                    public static class: java.lang.Class<BitmapMemoryCacheGetProducer>;
                    public static PRODUCER_NAME: string;
                    public constructor(
                        param0: cache.MemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>,
                        param1: cache.CacheKeyFactory,
                        param2: Producer<facebook.common.references.CloseableReference<image.CloseableImage>>
                    );
                    public wrapConsumer(
                        param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>,
                        param1: facebook.cache.common.CacheKey
                    ): Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>;
                    public produceResults(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getProducerName(): string;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class BitmapMemoryCacheKeyMultiplexProducer extends MultiplexProducer<
                    globalAndroid.util.Pair<facebook.cache.common.CacheKey, request.ImageRequest.RequestLevel>,
                    facebook.common.references.CloseableReference<image.CloseableImage>
                > {
                    public static class: java.lang.Class<BitmapMemoryCacheKeyMultiplexProducer>;
                    public constructor(param0: Producer<any>);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getKey(param0: ProducerContext): any;
                    public cloneOrNull(param0: any): any;
                    public getKey(param0: ProducerContext): globalAndroid.util.Pair<facebook.cache.common.CacheKey, request.ImageRequest.RequestLevel>;
                    public cloneOrNull(param0: facebook.common.references.CloseableReference<image.CloseableImage>): facebook.common.references.CloseableReference<image.CloseableImage>;
                    public constructor(param0: cache.CacheKeyFactory, param1: Producer<any>);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class BitmapMemoryCacheProducer extends Producer<facebook.common.references.CloseableReference<image.CloseableImage>> {
                    public static class: java.lang.Class<BitmapMemoryCacheProducer>;
                    public static PRODUCER_NAME: string;
                    public static EXTRA_CACHED_VALUE_FOUND: string;
                    public constructor(
                        param0: cache.MemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>,
                        param1: cache.CacheKeyFactory,
                        param2: Producer<facebook.common.references.CloseableReference<image.CloseableImage>>
                    );
                    public wrapConsumer(
                        param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>,
                        param1: facebook.cache.common.CacheKey
                    ): Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>;
                    public produceResults(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getProducerName(): string;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class BitmapPrepareProducer extends Producer<facebook.common.references.CloseableReference<image.CloseableImage>> {
                    public static class: java.lang.Class<BitmapPrepareProducer>;
                    public static PRODUCER_NAME: string;
                    public produceResults(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public constructor(param0: Producer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: number, param2: number, param3: boolean);
                }
                export namespace BitmapPrepareProducer {
                    export class BitmapPrepareConsumer extends DelegatingConsumer<
                        facebook.common.references.CloseableReference<image.CloseableImage>,
                        facebook.common.references.CloseableReference<image.CloseableImage>
                    > {
                        public static class: java.lang.Class<BitmapPrepareConsumer>;
                        public onFailure(param0: java.lang.Throwable): void;
                        public onNewResultImpl(param0: any, param1: number): void;
                        public onProgressUpdate(param0: number): void;
                        public onCancellation(): void;
                        public onNewResult(param0: any, param1: number): void;
                        public onNewResultImpl(param0: facebook.common.references.CloseableReference<image.CloseableImage>, param1: number): void;
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
                export class BranchOnSeparateImagesProducer extends Producer<image.EncodedImage> {
                    public static class: java.lang.Class<BranchOnSeparateImagesProducer>;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public constructor(param0: Producer<image.EncodedImage>, param1: Producer<image.EncodedImage>);
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
                export namespace BranchOnSeparateImagesProducer {
                    export class OnFirstImageConsumer extends DelegatingConsumer<image.EncodedImage, image.EncodedImage> {
                        public static class: java.lang.Class<OnFirstImageConsumer>;
                        public onNewResultImpl(param0: image.EncodedImage, param1: number): void;
                        public onFailureImpl(param0: java.lang.Throwable): void;
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
                export class Consumer<T> extends java.lang.Object {
                    public static class: java.lang.Class<Consumer<any>>;
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
                    public static IS_PARTIAL_RESULT: number;
                    public static NO_FLAGS: number;
                    public static DO_NOT_CACHE_ENCODED: number;
                    public static IS_LAST: number;
                    public static IS_PLACEHOLDER: number;
                    public static IS_RESIZING_DONE: number;
                    public onCancellation(): void;
                    public onNewResult(param0: T, param1: number): void;
                    public onFailure(param0: java.lang.Throwable): void;
                    public onProgressUpdate(param0: number): void;
                }
                export namespace Consumer {
                    export class Status extends java.lang.Object implements java.lang.annotation.Annotation {
                        public static class: java.lang.Class<Status>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.producers.Consumer$Status interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { annotationType(): java.lang.Class<any>; equals(param0: any): boolean; hashCode(): number; toString(): string });
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
        export namespace imagepipeline {
            export namespace producers {
                export class DataFetchProducer extends LocalFetchProducer {
                    public static class: java.lang.Class<DataFetchProducer>;
                    public static PRODUCER_NAME: string;
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory);
                    public constructor(param0: facebook.common.memory.PooledByteBufferFactory);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getEncodedImage(param0: java.io.InputStream, param1: number): image.EncodedImage;
                    public getEncodedImage(param0: request.ImageRequest): image.EncodedImage;
                    public getProducerName(): string;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class DecodeProducer extends Producer<facebook.common.references.CloseableReference<image.CloseableImage>> {
                    public static class: java.lang.Class<DecodeProducer>;
                    public static PRODUCER_NAME: string;
                    public static EXTRA_BITMAP_SIZE: string;
                    public static EXTRA_HAS_GOOD_QUALITY: string;
                    public static EXTRA_IS_FINAL: string;
                    public static EXTRA_IMAGE_FORMAT_NAME: string;
                    public static ENCODED_IMAGE_SIZE: string;
                    public static REQUESTED_IMAGE_SIZE: string;
                    public static SAMPLE_SIZE: string;
                    public constructor(
                        param0: facebook.common.memory.ByteArrayPool,
                        param1: java.util.concurrent.Executor,
                        param2: decoder.ImageDecoder,
                        param3: decoder.ProgressiveJpegConfig,
                        param4: boolean,
                        param5: boolean,
                        param6: boolean,
                        param7: Producer<image.EncodedImage>,
                        param8: facebook.common.internal.Supplier<java.lang.Boolean>
                    );
                    public produceResults(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                }
                export namespace DecodeProducer {
                    export class LocalImagesProgressiveDecoder extends ProgressiveDecoder {
                        public static class: java.lang.Class<LocalImagesProgressiveDecoder>;
                        public constructor(param0: Consumer<any>);
                        public getQualityInfo(): image.QualityInfo;
                        public constructor();
                        public updateDecodeJob(param0: image.EncodedImage, param1: number): boolean;
                        public onFailure(param0: java.lang.Throwable): void;
                        public getIntermediateImageEndOffset(param0: image.EncodedImage): number;
                        public onProgressUpdate(param0: number): void;
                        public onCancellation(): void;
                        public onNewResult(param0: any, param1: number): void;
                        public constructor(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext, param2: boolean);
                    }
                    export class NetworkImagesProgressiveDecoder extends ProgressiveDecoder {
                        public static class: java.lang.Class<NetworkImagesProgressiveDecoder>;
                        public constructor(param0: Consumer<any>);
                        public getQualityInfo(): image.QualityInfo;
                        public constructor();
                        public updateDecodeJob(param0: image.EncodedImage, param1: number): boolean;
                        public onFailure(param0: java.lang.Throwable): void;
                        public getIntermediateImageEndOffset(param0: image.EncodedImage): number;
                        public constructor(
                            param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>,
                            param1: ProducerContext,
                            param2: decoder.ProgressiveJpegParser,
                            param3: decoder.ProgressiveJpegConfig,
                            param4: boolean
                        );
                        public onProgressUpdate(param0: number): void;
                        public onCancellation(): void;
                        public onNewResult(param0: any, param1: number): void;
                        public constructor(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext, param2: boolean);
                    }
                    export abstract class ProgressiveDecoder extends DelegatingConsumer<image.EncodedImage, facebook.common.references.CloseableReference<image.CloseableImage>> {
                        public static class: java.lang.Class<ProgressiveDecoder>;
                        public constructor(param0: Consumer<any>);
                        public constructor();
                        public updateDecodeJob(param0: image.EncodedImage, param1: number): boolean;
                        public onProgressUpdate(param0: number): void;
                        public onProgressUpdateImpl(param0: number): void;
                        public onNewResult(param0: any, param1: number): void;
                        public getQualityInfo(): image.QualityInfo;
                        public onNewResultImpl(param0: image.EncodedImage, param1: number): void;
                        public onFailureImpl(param0: java.lang.Throwable): void;
                        public onCancellationImpl(): void;
                        public onFailure(param0: java.lang.Throwable): void;
                        public onNewResultImpl(param0: any, param1: number): void;
                        public getIntermediateImageEndOffset(param0: image.EncodedImage): number;
                        public onCancellation(): void;
                        public constructor(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext, param2: boolean);
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
                export abstract class DelegatingConsumer<I, O> extends BaseConsumer<any> {
                    public static class: java.lang.Class<DelegatingConsumer<any, any>>;
                    public onNewResult(param0: any, param1: number): void;
                    public onCancellationImpl(): void;
                    public onCancellation(): void;
                    public constructor();
                    public constructor(param0: Consumer<any>);
                    public onFailure(param0: java.lang.Throwable): void;
                    public onProgressUpdateImpl(param0: number): void;
                    public onProgressUpdate(param0: number): void;
                    public getConsumer(): Consumer<any>;
                    public onFailureImpl(param0: java.lang.Throwable): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class DiskCacheReadProducer extends Producer<image.EncodedImage> {
                    public static class: java.lang.Class<DiskCacheReadProducer>;
                    public static PRODUCER_NAME: string;
                    public static EXTRA_CACHED_VALUE_FOUND: string;
                    public static ENCODED_IMAGE_SIZE: string;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public constructor(param0: cache.BufferedDiskCache, param1: cache.BufferedDiskCache, param2: cache.CacheKeyFactory, param3: Producer<image.EncodedImage>);
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class DiskCacheWriteProducer extends Producer<image.EncodedImage> {
                    public static class: java.lang.Class<DiskCacheWriteProducer>;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public constructor(param0: cache.BufferedDiskCache, param1: cache.BufferedDiskCache, param2: cache.CacheKeyFactory, param3: Producer<image.EncodedImage>);
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
                export namespace DiskCacheWriteProducer {
                    export class DiskCacheWriteConsumer extends DelegatingConsumer<image.EncodedImage, image.EncodedImage> {
                        public static class: java.lang.Class<DiskCacheWriteConsumer>;
                        public onNewResultImpl(param0: image.EncodedImage, param1: number): void;
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
                export class DownsampleUtil extends java.lang.Object {
                    public static class: java.lang.Class<DownsampleUtil>;
                    public static DEFAULT_SAMPLE_SIZE: number;
                    public static determineSampleSize(param0: request.ImageRequest, param1: image.EncodedImage): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class EncodedCacheKeyMultiplexProducer extends MultiplexProducer<
                    globalAndroid.util.Pair<facebook.cache.common.CacheKey, request.ImageRequest.RequestLevel>,
                    image.EncodedImage
                > {
                    public static class: java.lang.Class<EncodedCacheKeyMultiplexProducer>;
                    public constructor(param0: Producer<any>);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getKey(param0: ProducerContext): any;
                    public cloneOrNull(param0: any): any;
                    public cloneOrNull(param0: image.EncodedImage): image.EncodedImage;
                    public getKey(param0: ProducerContext): globalAndroid.util.Pair<facebook.cache.common.CacheKey, request.ImageRequest.RequestLevel>;
                    public constructor(param0: cache.CacheKeyFactory, param1: Producer<any>);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class EncodedMemoryCacheProducer extends Producer<image.EncodedImage> {
                    public static class: java.lang.Class<EncodedMemoryCacheProducer>;
                    public static PRODUCER_NAME: string;
                    public static EXTRA_CACHED_VALUE_FOUND: string;
                    public constructor(
                        param0: cache.MemoryCache<facebook.cache.common.CacheKey, facebook.common.memory.PooledByteBuffer>,
                        param1: cache.CacheKeyFactory,
                        param2: Producer<image.EncodedImage>
                    );
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
                export namespace EncodedMemoryCacheProducer {
                    export class EncodedMemoryCacheConsumer extends DelegatingConsumer<image.EncodedImage, image.EncodedImage> {
                        public static class: java.lang.Class<EncodedMemoryCacheConsumer>;
                        public constructor(param0: Consumer<any>);
                        public constructor();
                        public onNewResultImpl(param0: image.EncodedImage, param1: number): void;
                        public onFailure(param0: java.lang.Throwable): void;
                        public onNewResultImpl(param0: any, param1: number): void;
                        public onProgressUpdate(param0: number): void;
                        public onCancellation(): void;
                        public onNewResult(param0: any, param1: number): void;
                        public constructor(
                            param0: Consumer<image.EncodedImage>,
                            param1: cache.MemoryCache<facebook.cache.common.CacheKey, facebook.common.memory.PooledByteBuffer>,
                            param2: facebook.cache.common.CacheKey
                        );
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
                export class FetchState extends java.lang.Object {
                    public static class: java.lang.Class<FetchState>;
                    public getLastIntermediateResultTimeMs(): number;
                    public setLastIntermediateResultTimeMs(param0: number): void;
                    public getOnNewResultStatusFlags(): number;
                    public getId(): string;
                    public getListener(): ProducerListener;
                    public getResponseBytesRange(): common.BytesRange;
                    public getConsumer(): Consumer<image.EncodedImage>;
                    public getContext(): ProducerContext;
                    public getUri(): globalAndroid.net.Uri;
                    public setOnNewResultStatusFlags(param0: number): void;
                    public constructor(param0: Consumer<image.EncodedImage>, param1: ProducerContext);
                    public setResponseBytesRange(param0: common.BytesRange): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class HttpUrlConnectionNetworkFetcher extends BaseNetworkFetcher<FetchState> {
                    public static class: java.lang.Class<HttpUrlConnectionNetworkFetcher>;
                    public static HTTP_TEMPORARY_REDIRECT: number;
                    public static HTTP_PERMANENT_REDIRECT: number;
                    public static HTTP_DEFAULT_TIMEOUT: number;
                    public onFetchCompletion(param0: any, param1: number): void;
                    public getExtraMap(param0: any, param1: number): java.util.Map<string, string>;
                    public constructor();
                    public createFetchState(param0: Consumer<image.EncodedImage>, param1: ProducerContext): any;
                    public shouldPropagate(param0: any): boolean;
                    public fetch(param0: any, param1: NetworkFetcher.Callback): void;
                    public constructor(param0: number);
                    public createFetchState(param0: Consumer<image.EncodedImage>, param1: ProducerContext): FetchState;
                    public fetch(param0: FetchState, param1: NetworkFetcher.Callback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class JobScheduler extends java.lang.Object {
                    public static class: java.lang.Class<JobScheduler>;
                    public getQueuedTime(): number;
                    public clearJob(): void;
                    public constructor(param0: java.util.concurrent.Executor, param1: JobScheduler.JobRunnable, param2: number);
                    public updateJob(param0: image.EncodedImage, param1: number): boolean;
                    public scheduleJob(): boolean;
                }
                export namespace JobScheduler {
                    export class JobRunnable extends java.lang.Object {
                        public static class: java.lang.Class<JobRunnable>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.producers.JobScheduler$JobRunnable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { run(param0: image.EncodedImage, param1: number): void });
                        public constructor();
                        public run(param0: image.EncodedImage, param1: number): void;
                    }
                    export class JobStartExecutorSupplier extends java.lang.Object {
                        public static class: java.lang.Class<JobStartExecutorSupplier>;
                    }
                    export class JobState {
                        public static class: java.lang.Class<JobState>;
                        public static IDLE: JobState;
                        public static QUEUED: JobState;
                        public static RUNNING: JobState;
                        public static RUNNING_AND_PENDING: JobState;
                        public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                        public static valueOf(param0: string): JobState;
                        public static values(): native.Array<JobState>;
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
                export class LocalAssetFetchProducer extends LocalFetchProducer {
                    public static class: java.lang.Class<LocalAssetFetchProducer>;
                    public static PRODUCER_NAME: string;
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getEncodedImage(param0: java.io.InputStream, param1: number): image.EncodedImage;
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory, param2: globalAndroid.content.res.AssetManager);
                    public getEncodedImage(param0: request.ImageRequest): image.EncodedImage;
                    public getProducerName(): string;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class LocalContentUriFetchProducer extends LocalFetchProducer {
                    public static class: java.lang.Class<LocalContentUriFetchProducer>;
                    public static PRODUCER_NAME: string;
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory);
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory, param2: globalAndroid.content.ContentResolver);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getEncodedImage(param0: java.io.InputStream, param1: number): image.EncodedImage;
                    public getEncodedImage(param0: request.ImageRequest): image.EncodedImage;
                    public getProducerName(): string;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class LocalContentUriThumbnailFetchProducer extends LocalFetchProducer implements ThumbnailProducer<image.EncodedImage> {
                    public static class: java.lang.Class<LocalContentUriThumbnailFetchProducer>;
                    public static PRODUCER_NAME: string;
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory);
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory, param2: globalAndroid.content.ContentResolver);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getEncodedImage(param0: java.io.InputStream, param1: number): image.EncodedImage;
                    public getEncodedImage(param0: request.ImageRequest): image.EncodedImage;
                    public getProducerName(): string;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                    public canProvideImageForSize(param0: common.ResizeOptions): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class LocalExifThumbnailProducer extends ThumbnailProducer<image.EncodedImage> {
                    public static class: java.lang.Class<LocalExifThumbnailProducer>;
                    public static PRODUCER_NAME: string;
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory, param2: globalAndroid.content.ContentResolver);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                    public canProvideImageForSize(param0: common.ResizeOptions): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export abstract class LocalFetchProducer extends Producer<image.EncodedImage> {
                    public static class: java.lang.Class<LocalFetchProducer>;
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory);
                    public getByteBufferBackedEncodedImage(param0: java.io.InputStream, param1: number): image.EncodedImage;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getEncodedImage(param0: java.io.InputStream, param1: number): image.EncodedImage;
                    public getEncodedImage(param0: request.ImageRequest): image.EncodedImage;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                    public getProducerName(): string;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class LocalFileFetchProducer extends LocalFetchProducer {
                    public static class: java.lang.Class<LocalFileFetchProducer>;
                    public static PRODUCER_NAME: string;
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getEncodedImage(param0: java.io.InputStream, param1: number): image.EncodedImage;
                    public getEncodedImage(param0: request.ImageRequest): image.EncodedImage;
                    public getProducerName(): string;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class LocalResourceFetchProducer extends LocalFetchProducer {
                    public static class: java.lang.Class<LocalResourceFetchProducer>;
                    public static PRODUCER_NAME: string;
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getEncodedImage(param0: java.io.InputStream, param1: number): image.EncodedImage;
                    public getEncodedImage(param0: request.ImageRequest): image.EncodedImage;
                    public getProducerName(): string;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory, param2: globalAndroid.content.res.Resources);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class LocalVideoThumbnailProducer extends Producer<facebook.common.references.CloseableReference<image.CloseableImage>> {
                    public static class: java.lang.Class<LocalVideoThumbnailProducer>;
                    public static PRODUCER_NAME: string;
                    public produceResults(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public constructor(param0: java.util.concurrent.Executor, param1: globalAndroid.content.ContentResolver);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class MediaVariationsFallbackProducer extends Producer<image.EncodedImage> {
                    public static class: java.lang.Class<MediaVariationsFallbackProducer>;
                    public static PRODUCER_NAME: string;
                    public static EXTRA_CACHED_VALUE_FOUND: string;
                    public static EXTRA_CACHED_VALUE_USED_AS_LAST: string;
                    public static EXTRA_VARIANTS_COUNT: string;
                    public static EXTRA_VARIANTS_SOURCE: string;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                    public constructor(
                        param0: cache.BufferedDiskCache,
                        param1: cache.BufferedDiskCache,
                        param2: cache.CacheKeyFactory,
                        param3: cache.MediaVariationsIndex,
                        param4: Producer<image.EncodedImage>
                    );
                }
                export namespace MediaVariationsFallbackProducer {
                    export class MediaVariationsConsumer extends DelegatingConsumer<image.EncodedImage, image.EncodedImage> {
                        public static class: java.lang.Class<MediaVariationsConsumer>;
                        public constructor(param0: Consumer<any>);
                        public constructor();
                        public onNewResultImpl(param0: image.EncodedImage, param1: number): void;
                        public onFailure(param0: java.lang.Throwable): void;
                        public onNewResultImpl(param0: any, param1: number): void;
                        public onProgressUpdate(param0: number): void;
                        public onCancellation(): void;
                        public onNewResult(param0: any, param1: number): void;
                        public constructor(param0: Consumer<image.EncodedImage>, param1: ProducerContext, param2: string);
                    }
                    export class VariantComparator extends java.util.Comparator<request.MediaVariations.Variant> {
                        public static class: java.lang.Class<VariantComparator>;
                        public equals(param0: any): boolean;
                        public compare(param0: request.MediaVariations.Variant, param1: request.MediaVariations.Variant): number;
                        public compare(param0: any, param1: any): number;
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
                export abstract class MultiplexProducer<K, T> extends Producer<any> {
                    public static class: java.lang.Class<MultiplexProducer<any, any>>;
                    public constructor(param0: Producer<any>);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getKey(param0: ProducerContext): any;
                    public cloneOrNull(param0: any): any;
                }
                export namespace MultiplexProducer {
                    export class Multiplexer extends java.lang.Object {
                        public static class: java.lang.Class<Multiplexer>;
                        public onCancelled(param0: Multiplexer.ForwardingConsumer): void;
                        public onNextResult(param0: Multiplexer.ForwardingConsumer, param1: any, param2: number): void;
                        public addNewConsumer(param0: Consumer<any>, param1: ProducerContext): boolean;
                        public constructor(param0: any);
                        public onFailure(param0: Multiplexer.ForwardingConsumer, param1: java.lang.Throwable): void;
                        public onProgressUpdate(param0: Multiplexer.ForwardingConsumer, param1: number): void;
                    }
                    export namespace Multiplexer {
                        export class ForwardingConsumer extends BaseConsumer<any> {
                            public static class: java.lang.Class<ForwardingConsumer>;
                            public onCancellationImpl(): void;
                            public onCancellation(): void;
                            public onFailure(param0: java.lang.Throwable): void;
                            public onNewResult(param0: any, param1: number): void;
                            public onFailureImpl(param0: java.lang.Throwable): void;
                            public onProgressUpdateImpl(param0: number): void;
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
                export class NetworkFetchProducer extends Producer<image.EncodedImage> {
                    public static class: java.lang.Class<NetworkFetchProducer>;
                    public static PRODUCER_NAME: string;
                    public static INTERMEDIATE_RESULT_PRODUCER_EVENT: string;
                    public constructor(param0: facebook.common.memory.PooledByteBufferFactory, param1: facebook.common.memory.ByteArrayPool, param2: NetworkFetcher<any>);
                    public onResponse(param0: FetchState, param1: java.io.InputStream, param2: number): void;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public handleFinalResult(param0: facebook.common.memory.PooledByteBufferOutputStream, param1: FetchState): void;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                    public static calculateProgress(param0: number, param1: number): number;
                    public maybeHandleIntermediateResult(param0: facebook.common.memory.PooledByteBufferOutputStream, param1: FetchState): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class NetworkFetcher<FETCH_STATE> extends java.lang.Object {
                    public static class: java.lang.Class<NetworkFetcher<any>>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.producers.NetworkFetcher<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        createFetchState(param0: Consumer<image.EncodedImage>, param1: ProducerContext): FETCH_STATE;
                        fetch(param0: FETCH_STATE, param1: NetworkFetcher.Callback): void;
                        shouldPropagate(param0: FETCH_STATE): boolean;
                        onFetchCompletion(param0: FETCH_STATE, param1: number): void;
                        getExtraMap(param0: FETCH_STATE, param1: number): java.util.Map<string, string>;
                    });
                    public constructor();
                    public createFetchState(param0: Consumer<image.EncodedImage>, param1: ProducerContext): FETCH_STATE;
                    public getExtraMap(param0: FETCH_STATE, param1: number): java.util.Map<string, string>;
                    public fetch(param0: FETCH_STATE, param1: NetworkFetcher.Callback): void;
                    public shouldPropagate(param0: FETCH_STATE): boolean;
                    public onFetchCompletion(param0: FETCH_STATE, param1: number): void;
                }
                export namespace NetworkFetcher {
                    export class Callback extends java.lang.Object {
                        public static class: java.lang.Class<Callback>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.producers.NetworkFetcher$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onResponse(param0: java.io.InputStream, param1: number): void; onFailure(param0: java.lang.Throwable): void; onCancellation(): void });
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
                export class NullProducer<T> extends Producer<any> {
                    public static class: java.lang.Class<NullProducer<any>>;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public constructor();
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class PartialDiskCacheProducer extends Producer<image.EncodedImage> {
                    public static class: java.lang.Class<PartialDiskCacheProducer>;
                    public static PRODUCER_NAME: string;
                    public static EXTRA_CACHED_VALUE_FOUND: string;
                    public static ENCODED_IMAGE_SIZE: string;
                    public constructor(
                        param0: cache.BufferedDiskCache,
                        param1: cache.CacheKeyFactory,
                        param2: facebook.common.memory.PooledByteBufferFactory,
                        param3: facebook.common.memory.ByteArrayPool,
                        param4: Producer<image.EncodedImage>
                    );
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
                export namespace PartialDiskCacheProducer {
                    export class PartialDiskCacheConsumer extends DelegatingConsumer<image.EncodedImage, image.EncodedImage> {
                        public static class: java.lang.Class<PartialDiskCacheConsumer>;
                        public onNewResultImpl(param0: image.EncodedImage, param1: number): void;
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
                export class PostprocessedBitmapMemoryCacheProducer extends Producer<facebook.common.references.CloseableReference<image.CloseableImage>> {
                    public static class: java.lang.Class<PostprocessedBitmapMemoryCacheProducer>;
                    public static PRODUCER_NAME: string;
                    public constructor(
                        param0: cache.MemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>,
                        param1: cache.CacheKeyFactory,
                        param2: Producer<facebook.common.references.CloseableReference<image.CloseableImage>>
                    );
                    public produceResults(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getProducerName(): string;
                }
                export namespace PostprocessedBitmapMemoryCacheProducer {
                    export class CachedPostprocessorConsumer extends DelegatingConsumer<
                        facebook.common.references.CloseableReference<image.CloseableImage>,
                        facebook.common.references.CloseableReference<image.CloseableImage>
                    > {
                        public static class: java.lang.Class<CachedPostprocessorConsumer>;
                        public constructor(param0: Consumer<any>);
                        public constructor();
                        public constructor(
                            param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>,
                            param1: facebook.cache.common.CacheKey,
                            param2: boolean,
                            param3: cache.MemoryCache<facebook.cache.common.CacheKey, image.CloseableImage>
                        );
                        public onFailure(param0: java.lang.Throwable): void;
                        public onNewResultImpl(param0: any, param1: number): void;
                        public onProgressUpdate(param0: number): void;
                        public onCancellation(): void;
                        public onNewResult(param0: any, param1: number): void;
                        public onNewResultImpl(param0: facebook.common.references.CloseableReference<image.CloseableImage>, param1: number): void;
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
                export class PostprocessorProducer extends Producer<facebook.common.references.CloseableReference<image.CloseableImage>> {
                    public static class: java.lang.Class<PostprocessorProducer>;
                    public static NAME: string;
                    public produceResults(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public constructor(
                        param0: Producer<facebook.common.references.CloseableReference<image.CloseableImage>>,
                        param1: bitmaps.PlatformBitmapFactory,
                        param2: java.util.concurrent.Executor
                    );
                }
                export namespace PostprocessorProducer {
                    export class PostprocessorConsumer extends DelegatingConsumer<
                        facebook.common.references.CloseableReference<image.CloseableImage>,
                        facebook.common.references.CloseableReference<image.CloseableImage>
                    > {
                        public static class: java.lang.Class<PostprocessorConsumer>;
                        public constructor(param0: Consumer<any>);
                        public constructor();
                        public onFailureImpl(param0: java.lang.Throwable): void;
                        public onCancellationImpl(): void;
                        public onFailure(param0: java.lang.Throwable): void;
                        public onNewResultImpl(param0: any, param1: number): void;
                        public onProgressUpdate(param0: number): void;
                        public onCancellation(): void;
                        public onNewResult(param0: any, param1: number): void;
                        public constructor(
                            param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>,
                            param1: ProducerListener,
                            param2: string,
                            param3: request.Postprocessor,
                            param4: ProducerContext
                        );
                        public onNewResultImpl(param0: facebook.common.references.CloseableReference<image.CloseableImage>, param1: number): void;
                    }
                    export class RepeatedPostprocessorConsumer
                        extends DelegatingConsumer<facebook.common.references.CloseableReference<image.CloseableImage>, facebook.common.references.CloseableReference<image.CloseableImage>>
                        implements request.RepeatedPostprocessorRunner {
                        public static class: java.lang.Class<RepeatedPostprocessorConsumer>;
                        public onFailureImpl(param0: java.lang.Throwable): void;
                        public onCancellationImpl(): void;
                        public onFailure(param0: java.lang.Throwable): void;
                        public onNewResultImpl(param0: any, param1: number): void;
                        public update(): void;
                        public onProgressUpdate(param0: number): void;
                        public onCancellation(): void;
                        public onNewResult(param0: any, param1: number): void;
                        public onNewResultImpl(param0: facebook.common.references.CloseableReference<image.CloseableImage>, param1: number): void;
                    }
                    export class SingleUsePostprocessorConsumer extends DelegatingConsumer<
                        facebook.common.references.CloseableReference<image.CloseableImage>,
                        facebook.common.references.CloseableReference<image.CloseableImage>
                    > {
                        public static class: java.lang.Class<SingleUsePostprocessorConsumer>;
                        public onFailure(param0: java.lang.Throwable): void;
                        public onNewResultImpl(param0: any, param1: number): void;
                        public onProgressUpdate(param0: number): void;
                        public onCancellation(): void;
                        public onNewResult(param0: any, param1: number): void;
                        public onNewResultImpl(param0: facebook.common.references.CloseableReference<image.CloseableImage>, param1: number): void;
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
                export class Producer<T> extends java.lang.Object {
                    public static class: java.lang.Class<Producer<any>>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.producers.Producer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { produceResults(param0: Consumer<T>, param1: ProducerContext): void });
                    public constructor();
                    public produceResults(param0: Consumer<T>, param1: ProducerContext): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class ProducerConstants extends java.lang.Object {
                    public static class: java.lang.Class<ProducerConstants>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class ProducerContext extends java.lang.Object {
                    public static class: java.lang.Class<ProducerContext>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.producers.ProducerContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        getImageRequest(): request.ImageRequest;
                        getId(): string;
                        getListener(): ProducerListener;
                        getCallerContext(): any;
                        getLowestPermittedRequestLevel(): request.ImageRequest.RequestLevel;
                        isPrefetch(): boolean;
                        getPriority(): common.Priority;
                        isIntermediateResultExpected(): boolean;
                        addCallbacks(param0: ProducerContextCallbacks): void;
                    });
                    public constructor();
                    public getPriority(): common.Priority;
                    public getId(): string;
                    public getListener(): ProducerListener;
                    public addCallbacks(param0: ProducerContextCallbacks): void;
                    public getImageRequest(): request.ImageRequest;
                    public isIntermediateResultExpected(): boolean;
                    public getCallerContext(): any;
                    public getLowestPermittedRequestLevel(): request.ImageRequest.RequestLevel;
                    public isPrefetch(): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class ProducerContextCallbacks extends java.lang.Object {
                    public static class: java.lang.Class<ProducerContextCallbacks>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.producers.ProducerContextCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onCancellationRequested(): void; onIsPrefetchChanged(): void; onIsIntermediateResultExpectedChanged(): void; onPriorityChanged(): void });
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
                export class ProducerListener extends java.lang.Object {
                    public static class: java.lang.Class<ProducerListener>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.producers.ProducerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onProducerStart(param0: string, param1: string): void;
                        onProducerEvent(param0: string, param1: string, param2: string): void;
                        onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                        onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string, string>): void;
                        onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                        onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
                        requiresExtraMap(param0: string): boolean;
                    });
                    public constructor();
                    public requiresExtraMap(param0: string): boolean;
                    public onProducerStart(param0: string, param1: string): void;
                    public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                    public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string, string>): void;
                    public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string, string>): void;
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
                export class QualifiedResourceFetchProducer extends LocalFetchProducer {
                    public static class: java.lang.Class<QualifiedResourceFetchProducer>;
                    public static PRODUCER_NAME: string;
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory);
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory, param2: globalAndroid.content.ContentResolver);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getEncodedImage(param0: java.io.InputStream, param1: number): image.EncodedImage;
                    public getEncodedImage(param0: request.ImageRequest): image.EncodedImage;
                    public getProducerName(): string;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class RemoveImageTransformMetaDataProducer extends Producer<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>> {
                    public static class: java.lang.Class<RemoveImageTransformMetaDataProducer>;
                    public produceResults(param0: Consumer<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>>, param1: ProducerContext): void;
                    public constructor(param0: Producer<image.EncodedImage>);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                }
                export namespace RemoveImageTransformMetaDataProducer {
                    export class RemoveImageTransformMetaDataConsumer extends DelegatingConsumer<
                        image.EncodedImage,
                        facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>
                    > {
                        public static class: java.lang.Class<RemoveImageTransformMetaDataConsumer>;
                        public onNewResultImpl(param0: image.EncodedImage, param1: number): void;
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
                export class ResizeAndRotateProducer extends Producer<image.EncodedImage> {
                    public static class: java.lang.Class<ResizeAndRotateProducer>;
                    public static PRODUCER_NAME: string;
                    public constructor(
                        param0: java.util.concurrent.Executor,
                        param1: facebook.common.memory.PooledByteBufferFactory,
                        param2: boolean,
                        param3: Producer<image.EncodedImage>,
                        param4: boolean
                    );
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
                export namespace ResizeAndRotateProducer {
                    export class TransformingConsumer extends DelegatingConsumer<image.EncodedImage, image.EncodedImage> {
                        public static class: java.lang.Class<TransformingConsumer>;
                        public constructor(param0: Consumer<any>);
                        public constructor();
                        public constructor(param0: Consumer<image.EncodedImage>, param1: ProducerContext);
                        public onNewResultImpl(param0: image.EncodedImage, param1: number): void;
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
                export class SettableProducerContext extends BaseProducerContext {
                    public static class: java.lang.Class<SettableProducerContext>;
                    public setIsPrefetch(param0: boolean): void;
                    public getPriority(): common.Priority;
                    public constructor(
                        param0: request.ImageRequest,
                        param1: string,
                        param2: ProducerListener,
                        param3: any,
                        param4: request.ImageRequest.RequestLevel,
                        param5: boolean,
                        param6: boolean,
                        param7: common.Priority
                    );
                    public getId(): string;
                    public addCallbacks(param0: ProducerContextCallbacks): void;
                    public constructor(param0: ProducerContext);
                    public setIsIntermediateResultExpected(param0: boolean): void;
                    public getListener(): ProducerListener;
                    public getImageRequest(): request.ImageRequest;
                    public isIntermediateResultExpected(): boolean;
                    public getCallerContext(): any;
                    public getLowestPermittedRequestLevel(): request.ImageRequest.RequestLevel;
                    public setPriority(param0: common.Priority): void;
                    public isPrefetch(): boolean;
                    public constructor(param0: request.ImageRequest, param1: ProducerContext);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export abstract class StatefulProducerRunnable<T> extends facebook.common.executors.StatefulRunnable<any> {
                    public static class: java.lang.Class<StatefulProducerRunnable<any>>;
                    public onFailure(param0: java.lang.Exception): void;
                    public onCancellation(): void;
                    public constructor();
                    public getExtraMapOnSuccess(param0: any): java.util.Map<string, string>;
                    public run(): void;
                    public getExtraMapOnFailure(param0: java.lang.Exception): java.util.Map<string, string>;
                    public disposeResult(param0: any): void;
                    public getExtraMapOnCancellation(): java.util.Map<string, string>;
                    public onSuccess(param0: any): void;
                    public constructor(param0: Consumer<any>, param1: ProducerListener, param2: string, param3: string);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class SwallowResultProducer<T> extends Producer<java.lang.Void> {
                    public static class: java.lang.Class<SwallowResultProducer<any>>;
                    public constructor(param0: Producer<any>);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<java.lang.Void>, param1: ProducerContext): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class ThreadHandoffProducer<T> extends Producer<any> {
                    public static class: java.lang.Class<ThreadHandoffProducer<any>>;
                    public static PRODUCER_NAME: string;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public constructor(param0: Producer<any>, param1: ThreadHandoffProducerQueue);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class ThreadHandoffProducerQueue extends java.lang.Object {
                    public static class: java.lang.Class<ThreadHandoffProducerQueue>;
                    public addToQueueOrExecute(param0: java.lang.Runnable): void;
                    public isQueueing(): boolean;
                    public constructor(param0: java.util.concurrent.Executor);
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
                export class ThrottlingProducer<T> extends Producer<any> {
                    public static class: java.lang.Class<ThrottlingProducer<any>>;
                    public static PRODUCER_NAME: string;
                    public constructor(param0: number, param1: java.util.concurrent.Executor, param2: Producer<any>);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                }
                export namespace ThrottlingProducer {
                    export class ThrottlerConsumer extends DelegatingConsumer<any, any> {
                        public static class: java.lang.Class<ThrottlerConsumer>;
                        public onFailureImpl(param0: java.lang.Throwable): void;
                        public onCancellationImpl(): void;
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
                export class ThumbnailBranchProducer extends Producer<image.EncodedImage> {
                    public static class: java.lang.Class<ThumbnailBranchProducer>;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                    public constructor(param0: native.Array<ThumbnailProducer<image.EncodedImage>>);
                }
                export namespace ThumbnailBranchProducer {
                    export class ThumbnailConsumer extends DelegatingConsumer<image.EncodedImage, image.EncodedImage> {
                        public static class: java.lang.Class<ThumbnailConsumer>;
                        public constructor(param0: Consumer<any>);
                        public constructor();
                        public onNewResultImpl(param0: image.EncodedImage, param1: number): void;
                        public onFailureImpl(param0: java.lang.Throwable): void;
                        public constructor(param0: Consumer<image.EncodedImage>, param1: ProducerContext, param2: number);
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
                export class ThumbnailProducer<T> extends Producer<any> {
                    public static class: java.lang.Class<ThumbnailProducer<any>>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.producers.ThumbnailProducer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { canProvideImageForSize(param0: common.ResizeOptions): boolean; produceResults(param0: Consumer<any>, param1: ProducerContext): void });
                    public constructor();
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public canProvideImageForSize(param0: common.ResizeOptions): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class ThumbnailSizeChecker extends java.lang.Object {
                    public static class: java.lang.Class<ThumbnailSizeChecker>;
                    public static ACCEPTABLE_REQUESTED_TO_ACTUAL_SIZE_RATIO: number;
                    public static isImageBigEnough(param0: image.EncodedImage, param1: common.ResizeOptions): boolean;
                    public constructor();
                    public static isImageBigEnough(param0: number, param1: number, param2: common.ResizeOptions): boolean;
                    public static getAcceptableSize(param0: number): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace producers {
                export class WebpTranscodeProducer extends Producer<image.EncodedImage> {
                    public static class: java.lang.Class<WebpTranscodeProducer>;
                    public static PRODUCER_NAME: string;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory, param2: Producer<image.EncodedImage>);
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
                export namespace WebpTranscodeProducer {
                    export class WebpTranscodeConsumer extends DelegatingConsumer<image.EncodedImage, image.EncodedImage> {
                        public static class: java.lang.Class<WebpTranscodeConsumer>;
                        public constructor(param0: Consumer<any>);
                        public constructor();
                        public constructor(param0: Consumer<image.EncodedImage>, param1: ProducerContext);
                        public onNewResultImpl(param0: image.EncodedImage, param1: number): void;
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
            export namespace request {
                export abstract class BasePostprocessor extends java.lang.Object implements Postprocessor {
                    public static class: java.lang.Class<BasePostprocessor>;
                    public static FALLBACK_BITMAP_CONFIGURATION: globalAndroid.graphics.Bitmap.Config;
                    public process(param0: globalAndroid.graphics.Bitmap, param1: bitmaps.PlatformBitmapFactory): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor();
                    public getName(): string;
                    public process(param0: globalAndroid.graphics.Bitmap): void;
                    public getPostprocessorCacheKey(): facebook.cache.common.CacheKey;
                    public process(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace request {
                export abstract class BaseRepeatedPostProcessor extends BasePostprocessor implements RepeatedPostprocessor {
                    public static class: java.lang.Class<BaseRepeatedPostProcessor>;
                    public process(param0: globalAndroid.graphics.Bitmap, param1: bitmaps.PlatformBitmapFactory): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor();
                    public getName(): string;
                    public update(): void;
                    public setCallback(param0: RepeatedPostprocessorRunner): void;
                    public process(param0: globalAndroid.graphics.Bitmap): void;
                    public getPostprocessorCacheKey(): facebook.cache.common.CacheKey;
                    public process(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace request {
                export class HasImageRequest extends java.lang.Object {
                    public static class: java.lang.Class<HasImageRequest>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.request.HasImageRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { getImageRequest(): ImageRequest });
                    public constructor();
                    public getImageRequest(): ImageRequest;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace request {
                export class ImageRequest extends java.lang.Object {
                    public static class: java.lang.Class<ImageRequest>;
                    public getPreferredHeight(): number;
                    public getSourceUriType(): number;
                    public isDiskCacheEnabled(): boolean;
                    public getResizeOptions(): common.ResizeOptions;
                    public toString(): string;
                    public constructor(param0: ImageRequestBuilder);
                    public getRequestListener(): listener.RequestListener;
                    public getCacheChoice(): ImageRequest.CacheChoice;
                    public getRotationOptions(): common.RotationOptions;
                    public hashCode(): number;
                    public getLocalThumbnailPreviewsEnabled(): boolean;
                    public getImageDecodeOptions(): common.ImageDecodeOptions;
                    public getSourceUri(): globalAndroid.net.Uri;
                    public static fromFile(param0: java.io.File): ImageRequest;
                    public getAutoRotateEnabled(): boolean;
                    public getPriority(): common.Priority;
                    public getProgressiveRenderingEnabled(): boolean;
                    public getSourceFile(): java.io.File;
                    public getBytesRange(): common.BytesRange;
                    public static fromUri(param0: globalAndroid.net.Uri): ImageRequest;
                    public equals(param0: any): boolean;
                    public getPreferredWidth(): number;
                    public getPostprocessor(): Postprocessor;
                    public static fromUri(param0: string): ImageRequest;
                    public getMediaVariations(): MediaVariations;
                    public getLowestPermittedRequestLevel(): ImageRequest.RequestLevel;
                }
                export namespace ImageRequest {
                    export class CacheChoice {
                        public static class: java.lang.Class<CacheChoice>;
                        public static SMALL: CacheChoice;
                        public static DEFAULT: CacheChoice;
                        public static values(): native.Array<CacheChoice>;
                        public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                        public static valueOf(param0: string): CacheChoice;
                    }
                    export class RequestLevel {
                        public static class: java.lang.Class<RequestLevel>;
                        public static FULL_FETCH: RequestLevel;
                        public static DISK_CACHE: RequestLevel;
                        public static ENCODED_MEMORY_CACHE: RequestLevel;
                        public static BITMAP_MEMORY_CACHE: RequestLevel;
                        public static values(): native.Array<RequestLevel>;
                        public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                        public static valueOf(param0: string): RequestLevel;
                        public getValue(): number;
                        public static getMax(param0: RequestLevel, param1: RequestLevel): RequestLevel;
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
                export class ImageRequestBuilder extends java.lang.Object {
                    public static class: java.lang.Class<ImageRequestBuilder>;
                    public setResizeOptions(param0: common.ResizeOptions): ImageRequestBuilder;
                    public setSource(param0: globalAndroid.net.Uri): ImageRequestBuilder;
                    public setRotationOptions(param0: common.RotationOptions): ImageRequestBuilder;
                    public setLocalThumbnailPreviewsEnabled(param0: boolean): ImageRequestBuilder;
                    public isLocalThumbnailPreviewsEnabled(): boolean;
                    public setProgressiveRenderingEnabled(param0: boolean): ImageRequestBuilder;
                    public setRequestListener(param0: listener.RequestListener): ImageRequestBuilder;
                    public setBytesRange(param0: common.BytesRange): ImageRequestBuilder;
                    public isDiskCacheEnabled(): boolean;
                    public static fromRequest(param0: ImageRequest): ImageRequestBuilder;
                    public validate(): void;
                    public isProgressiveRenderingEnabled(): boolean;
                    public getResizeOptions(): common.ResizeOptions;
                    public setMediaVariations(param0: MediaVariations): ImageRequestBuilder;
                    public setPostprocessor(param0: Postprocessor): ImageRequestBuilder;
                    public setRequestPriority(param0: common.Priority): ImageRequestBuilder;
                    public static newBuilderWithSource(param0: globalAndroid.net.Uri): ImageRequestBuilder;
                    public getRequestListener(): listener.RequestListener;
                    public getCacheChoice(): ImageRequest.CacheChoice;
                    public build(): ImageRequest;
                    public getRotationOptions(): common.RotationOptions;
                    public disableDiskCache(): ImageRequestBuilder;
                    public getImageDecodeOptions(): common.ImageDecodeOptions;
                    public getSourceUri(): globalAndroid.net.Uri;
                    public getRequestPriority(): common.Priority;
                    public setCacheChoice(param0: ImageRequest.CacheChoice): ImageRequestBuilder;
                    public static newBuilderWithResourceId(param0: number): ImageRequestBuilder;
                    public getBytesRange(): common.BytesRange;
                    public getPostprocessor(): Postprocessor;
                    public setMediaVariationsForMediaId(param0: string): ImageRequestBuilder;
                    public getMediaVariations(): MediaVariations;
                    public getLowestPermittedRequestLevel(): ImageRequest.RequestLevel;
                    public setImageDecodeOptions(param0: common.ImageDecodeOptions): ImageRequestBuilder;
                    public setLowestPermittedRequestLevel(param0: ImageRequest.RequestLevel): ImageRequestBuilder;
                    public setAutoRotateEnabled(param0: boolean): ImageRequestBuilder;
                }
                export namespace ImageRequestBuilder {
                    export class BuilderException extends java.lang.RuntimeException {
                        public static class: java.lang.Class<BuilderException>;
                        public constructor();
                        public constructor(param0: java.lang.Throwable);
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: string);
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
                export class MediaVariations extends java.lang.Object {
                    public static class: java.lang.Class<MediaVariations>;
                    public static SOURCE_IMAGE_REQUEST: string;
                    public static SOURCE_INDEX_DB: string;
                    public static SOURCE_ID_EXTRACTOR: string;
                    public equals(param0: any): boolean;
                    public toString(): string;
                    public getSource(): string;
                    public getSortedVariants(param0: java.util.Comparator<MediaVariations.Variant>): java.util.List<MediaVariations.Variant>;
                    public static newBuilderForMediaId(param0: string): MediaVariations.Builder;
                    public shouldForceRequestForSpecifiedUri(): boolean;
                    public static forMediaId(param0: string): MediaVariations;
                    public getVariantsCount(): number;
                    public hashCode(): number;
                    public getVariant(param0: number): MediaVariations.Variant;
                    public getMediaId(): string;
                }
                export namespace MediaVariations {
                    export class Builder extends java.lang.Object {
                        public static class: java.lang.Class<Builder>;
                        public addVariant(param0: globalAndroid.net.Uri, param1: number, param2: number): Builder;
                        public addVariant(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: ImageRequest.CacheChoice): Builder;
                        public build(): MediaVariations;
                        public setForceRequestForSpecifiedUri(param0: boolean): Builder;
                        public setSource(param0: string): Builder;
                    }
                    export class Source extends java.lang.Object implements java.lang.annotation.Annotation {
                        public static class: java.lang.Class<Source>;
                        /**
                         * Constructs a new instance of the com.facebook.imagepipeline.request.MediaVariations$Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { annotationType(): java.lang.Class<any>; equals(param0: any): boolean; hashCode(): number; toString(): string });
                        public constructor();
                        public equals(param0: any): boolean;
                        public hashCode(): number;
                        public toString(): string;
                        public annotationType(): java.lang.Class<any>;
                    }
                    export class Variant extends java.lang.Object {
                        public static class: java.lang.Class<Variant>;
                        public getWidth(): number;
                        public getCacheChoice(): ImageRequest.CacheChoice;
                        public constructor(param0: globalAndroid.net.Uri, param1: number, param2: number);
                        public equals(param0: any): boolean;
                        public hashCode(): number;
                        public constructor(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: ImageRequest.CacheChoice);
                        public getHeight(): number;
                        public getUri(): globalAndroid.net.Uri;
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
            export namespace request {
                export class Postprocessor extends java.lang.Object {
                    public static class: java.lang.Class<Postprocessor>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.request.Postprocessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        process(param0: globalAndroid.graphics.Bitmap, param1: bitmaps.PlatformBitmapFactory): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        getName(): string;
                        getPostprocessorCacheKey(): facebook.cache.common.CacheKey;
                    });
                    public constructor();
                    public process(param0: globalAndroid.graphics.Bitmap, param1: bitmaps.PlatformBitmapFactory): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public getName(): string;
                    public getPostprocessorCacheKey(): facebook.cache.common.CacheKey;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace request {
                export class RepeatedPostprocessor extends java.lang.Object implements Postprocessor {
                    public static class: java.lang.Class<RepeatedPostprocessor>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.request.RepeatedPostprocessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        setCallback(param0: RepeatedPostprocessorRunner): void;
                        process(param0: globalAndroid.graphics.Bitmap, param1: bitmaps.PlatformBitmapFactory): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        getName(): string;
                        getPostprocessorCacheKey(): facebook.cache.common.CacheKey;
                    });
                    public constructor();
                    public process(param0: globalAndroid.graphics.Bitmap, param1: bitmaps.PlatformBitmapFactory): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public getName(): string;
                    public setCallback(param0: RepeatedPostprocessorRunner): void;
                    public getPostprocessorCacheKey(): facebook.cache.common.CacheKey;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace request {
                export class RepeatedPostprocessorRunner extends java.lang.Object {
                    public static class: java.lang.Class<RepeatedPostprocessorRunner>;
                    /**
                     * Constructs a new instance of the com.facebook.imagepipeline.request.RepeatedPostprocessorRunner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { update(): void });
                    public constructor();
                    public update(): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipelinebase {
            export class BuildConfig extends java.lang.Object {
                public static class: java.lang.Class<BuildConfig>;
                public static DEBUG: boolean;
                public static APPLICATION_ID: string;
                public static BUILD_TYPE: string;
                public static FLAVOR: string;
                public static VERSION_CODE: number;
                public static VERSION_NAME: string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageutils {
            export class BitmapUtil extends java.lang.Object {
                public static class: java.lang.Class<BitmapUtil>;
                public static ALPHA_8_BYTES_PER_PIXEL: number;
                public static ARGB_4444_BYTES_PER_PIXEL: number;
                public static ARGB_8888_BYTES_PER_PIXEL: number;
                public static RGB_565_BYTES_PER_PIXEL: number;
                public static MAX_BITMAP_SIZE: number;
                public static decodeDimensions(param0: java.io.InputStream): globalAndroid.util.Pair<java.lang.Integer, java.lang.Integer>;
                public static getPixelSizeForBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): number;
                public static getSizeInBytes(param0: globalAndroid.graphics.Bitmap): number;
                public constructor();
                public static decodeDimensions(param0: native.Array<number>): globalAndroid.util.Pair<java.lang.Integer, java.lang.Integer>;
                public static getSizeInByteForBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageutils {
            export class JfifUtil extends java.lang.Object {
                public static class: java.lang.Class<JfifUtil>;
                public static MARKER_FIRST_BYTE: number;
                public static MARKER_ESCAPE_BYTE: number;
                public static MARKER_SOI: number;
                public static MARKER_TEM: number;
                public static MARKER_EOI: number;
                public static MARKER_SOS: number;
                public static MARKER_APP1: number;
                public static MARKER_SOFn: number;
                public static MARKER_RST0: number;
                public static MARKER_RST7: number;
                public static APP1_EXIF_MAGIC: number;
                public static getAutoRotateAngleFromOrientation(param0: number): number;
                public static getOrientation(param0: java.io.InputStream): number;
                public static getOrientation(param0: native.Array<number>): number;
                public static moveToMarker(param0: java.io.InputStream, param1: number): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageutils {
            export class StreamProcessor extends java.lang.Object {
                public static class: java.lang.Class<StreamProcessor>;
                public static readPackedInt(param0: java.io.InputStream, param1: number, param2: boolean): number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageutils {
            export class TiffUtil extends java.lang.Object {
                public static class: java.lang.Class<TiffUtil>;
                public static TIFF_BYTE_ORDER_BIG_END: number;
                public static TIFF_BYTE_ORDER_LITTLE_END: number;
                public static TIFF_TAG_ORIENTATION: number;
                public static TIFF_TYPE_SHORT: number;
                public static getAutoRotateAngleFromOrientation(param0: number): number;
                public static readOrientationFromTIFF(param0: java.io.InputStream, param1: number): number;
            }
            export namespace TiffUtil {
                export class TiffHeader extends java.lang.Object {
                    public static class: java.lang.Class<TiffHeader>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageutils {
            export class WebpUtil extends java.lang.Object {
                public static class: java.lang.Class<WebpUtil>;
                public static getSize(param0: java.io.InputStream): globalAndroid.util.Pair<java.lang.Integer, java.lang.Integer>;
                public static get2BytesAsInt(param0: java.io.InputStream): number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class Api18TraceUtils extends java.lang.Object {
                public static class: java.lang.Class<Api18TraceUtils>;
                public static beginTraceSection(param0: string): void;
                public static endSection(): void;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class ApkSoSource extends ExtractFromZipSoSource {
                public static class: java.lang.Class<ApkSoSource>;
                public static PREFER_ANDROID_LIBS_DIRECTORY: number;
                public constructor(param0: globalAndroid.content.Context, param1: string, param2: java.io.File, param3: string);
                public constructor(param0: globalAndroid.content.Context, param1: string);
                public constructor(param0: globalAndroid.content.Context, param1: string, param2: number);
                public constructor(param0: globalAndroid.content.Context, param1: java.io.File);
                public getExtractLogs(param0: string): string;
                public makeUnpacker(): UnpackingSoSource.Unpacker;
                public getDepsBlock(): native.Array<number>;
                public constructor(param0: java.io.File, param1: number);
                public constructor();
            }
            export namespace ApkSoSource {
                export class ApkUnpacker extends ExtractFromZipSoSource.ZipUnpacker {
                    public static class: java.lang.Class<ApkUnpacker>;
                    public close(): void;
                    public shouldExtract(param0: java.util.zip.ZipEntry, param1: string): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class DirectorySoSource extends SoSource {
                public static class: java.lang.Class<DirectorySoSource>;
                public static RESOLVE_DEPENDENCIES: number;
                public static ON_LD_LIBRARY_PATH: number;
                public soDirectory: java.io.File;
                public flags: number;
                public addToLdLibraryPath(param0: java.util.Collection<string>): void;
                public unpackLibrary(param0: string): java.io.File;
                public loadLibrary(param0: string, param1: number, param2: globalAndroid.os.StrictMode.ThreadPolicy): number;
                public loadLibraryFrom(param0: string, param1: number, param2: java.io.File, param3: globalAndroid.os.StrictMode.ThreadPolicy): number;
                public toString(): string;
                public constructor();
                public constructor(param0: java.io.File, param1: number);
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class DoNotOptimize extends java.lang.Object implements java.lang.annotation.Annotation {
                public static class: java.lang.Class<DoNotOptimize>;
                /**
                 * Constructs a new instance of the com.facebook.soloader.DoNotOptimize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { annotationType(): java.lang.Class<any>; equals(param0: any): boolean; hashCode(): number; toString(): string });
                public constructor();
                public hashCode(): number;
                public equals(param0: any): boolean;
                public annotationType(): java.lang.Class<any>;
                public toString(): string;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class Elf32_Dyn extends java.lang.Object {
                public static class: java.lang.Class<Elf32_Dyn>;
                public static d_tag: number;
                public static d_un: number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class Elf32_Ehdr extends java.lang.Object {
                public static class: java.lang.Class<Elf32_Ehdr>;
                public static e_ident: number;
                public static e_type: number;
                public static e_machine: number;
                public static e_version: number;
                public static e_entry: number;
                public static e_phoff: number;
                public static e_shoff: number;
                public static e_flags: number;
                public static e_ehsize: number;
                public static e_phentsize: number;
                public static e_phnum: number;
                public static e_shentsize: number;
                public static e_shnum: number;
                public static e_shstrndx: number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class Elf32_Phdr extends java.lang.Object {
                public static class: java.lang.Class<Elf32_Phdr>;
                public static p_type: number;
                public static p_offset: number;
                public static p_vaddr: number;
                public static p_paddr: number;
                public static p_filesz: number;
                public static p_memsz: number;
                public static p_flags: number;
                public static p_align: number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class Elf32_Shdr extends java.lang.Object {
                public static class: java.lang.Class<Elf32_Shdr>;
                public static sh_name: number;
                public static sh_type: number;
                public static sh_flags: number;
                public static sh_addr: number;
                public static sh_offset: number;
                public static sh_size: number;
                public static sh_link: number;
                public static sh_info: number;
                public static sh_addralign: number;
                public static sh_entsize: number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class Elf64_Dyn extends java.lang.Object {
                public static class: java.lang.Class<Elf64_Dyn>;
                public static d_tag: number;
                public static d_un: number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class Elf64_Ehdr extends java.lang.Object {
                public static class: java.lang.Class<Elf64_Ehdr>;
                public static e_ident: number;
                public static e_type: number;
                public static e_machine: number;
                public static e_version: number;
                public static e_entry: number;
                public static e_phoff: number;
                public static e_shoff: number;
                public static e_flags: number;
                public static e_ehsize: number;
                public static e_phentsize: number;
                public static e_phnum: number;
                public static e_shentsize: number;
                public static e_shnum: number;
                public static e_shstrndx: number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class Elf64_Phdr extends java.lang.Object {
                public static class: java.lang.Class<Elf64_Phdr>;
                public static p_type: number;
                public static p_flags: number;
                public static p_offset: number;
                public static p_vaddr: number;
                public static p_paddr: number;
                public static p_filesz: number;
                public static p_memsz: number;
                public static p_align: number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class Elf64_Shdr extends java.lang.Object {
                public static class: java.lang.Class<Elf64_Shdr>;
                public static sh_name: number;
                public static sh_type: number;
                public static sh_flags: number;
                public static sh_addr: number;
                public static sh_offset: number;
                public static sh_size: number;
                public static sh_link: number;
                public static sh_info: number;
                public static sh_addralign: number;
                public static sh_entsize: number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class ExoSoSource extends UnpackingSoSource {
                public static class: java.lang.Class<ExoSoSource>;
                public constructor(param0: globalAndroid.content.Context, param1: string);
                public constructor(param0: globalAndroid.content.Context, param1: java.io.File);
                public makeUnpacker(): UnpackingSoSource.Unpacker;
                public constructor(param0: java.io.File, param1: number);
                public constructor();
            }
            export namespace ExoSoSource {
                export class ExoUnpacker extends UnpackingSoSource.Unpacker {
                    public static class: java.lang.Class<ExoUnpacker>;
                    public openDsoIterator(): UnpackingSoSource.InputDsoIterator;
                    public close(): void;
                    public getDsoManifest(): UnpackingSoSource.DsoManifest;
                }
                export namespace ExoUnpacker {
                    export class FileBackedInputDsoIterator extends UnpackingSoSource.InputDsoIterator {
                        public static class: java.lang.Class<FileBackedInputDsoIterator>;
                        public next(): UnpackingSoSource.InputDso;
                        public close(): void;
                        public hasNext(): boolean;
                    }
                }
                export class FileDso extends UnpackingSoSource.Dso {
                    public static class: java.lang.Class<FileDso>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class ExtractFromZipSoSource extends UnpackingSoSource {
                public static class: java.lang.Class<ExtractFromZipSoSource>;
                public mZipFileName: java.io.File;
                public mZipSearchPattern: string;
                public constructor(param0: globalAndroid.content.Context, param1: string, param2: java.io.File, param3: string);
                public constructor(param0: globalAndroid.content.Context, param1: string);
                public constructor(param0: globalAndroid.content.Context, param1: java.io.File);
                public getExtractLogs(param0: string): string;
                public makeUnpacker(): UnpackingSoSource.Unpacker;
                public constructor(param0: java.io.File, param1: number);
                public constructor();
            }
            export namespace ExtractFromZipSoSource {
                export class ZipDso extends UnpackingSoSource.Dso {
                    public static class: java.lang.Class<ZipDso>;
                    public compareTo(param0: any): number;
                }
                export class ZipUnpacker extends UnpackingSoSource.Unpacker {
                    public static class: java.lang.Class<ZipUnpacker>;
                    public openDsoIterator(): UnpackingSoSource.InputDsoIterator;
                    public close(): void;
                    public getDsoManifest(): UnpackingSoSource.DsoManifest;
                    public shouldExtract(param0: java.util.zip.ZipEntry, param1: string): boolean;
                }
                export namespace ZipUnpacker {
                    export class ZipBackedInputDsoIterator extends UnpackingSoSource.InputDsoIterator {
                        public static class: java.lang.Class<ZipBackedInputDsoIterator>;
                        public next(): UnpackingSoSource.InputDso;
                        public close(): void;
                        public hasNext(): boolean;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class FileLocker extends java.lang.Object implements java.io.Closeable {
                public static class: java.lang.Class<FileLocker>;
                public close(): void;
                public static lock(param0: java.io.File): FileLocker;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class MergedSoMapping extends java.lang.Object {
                public static class: java.lang.Class<MergedSoMapping>;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class MinElf extends java.lang.Object {
                public static class: java.lang.Class<MinElf>;
                public static ELF_MAGIC: number;
                public static DT_NULL: number;
                public static DT_NEEDED: number;
                public static DT_STRTAB: number;
                public static PT_LOAD: number;
                public static PT_DYNAMIC: number;
                public static PN_XNUM: number;
                public static extract_DT_NEEDED(param0: java.io.File): native.Array<string>;
                public static extract_DT_NEEDED(param0: java.nio.channels.FileChannel): native.Array<string>;
                public constructor();
            }
            export namespace MinElf {
                export class ElfError extends java.lang.RuntimeException {
                    public static class: java.lang.Class<ElfError>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export abstract class NativeLibrary extends java.lang.Object {
                public static class: java.lang.Class<NativeLibrary>;
                public getError(): java.lang.UnsatisfiedLinkError;
                public ensureLoaded(): void;
                public constructor(param0: java.util.List<string>);
                public initialNativeCheck(): void;
                public loadLibraries(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class NoopSoSource extends SoSource {
                public static class: java.lang.Class<NoopSoSource>;
                public unpackLibrary(param0: string): java.io.File;
                public loadLibrary(param0: string, param1: number, param2: globalAndroid.os.StrictMode.ThreadPolicy): number;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class SoFileLoader extends java.lang.Object {
                public static class: java.lang.Class<SoFileLoader>;
                /**
                 * Constructs a new instance of the com.facebook.soloader.SoFileLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { load(param0: string, param1: number): void });
                public constructor();
                public load(param0: string, param1: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class SoLoader extends java.lang.Object {
                public static class: java.lang.Class<SoLoader>;
                public static SOLOADER_ENABLE_EXOPACKAGE: number;
                public static SOLOADER_ALLOW_ASYNC_INIT: number;
                public static SOLOADER_LOOK_IN_ZIP: number;
                public static setSoFileLoader(param0: SoFileLoader): void;
                public static resetStatus(): void;
                public constructor();
                public static makeNonZipPath(param0: string): string;
                public static setInTestMode(): void;
                public static loadLibrary(param0: string): void;
                public static setSystemLoadLibraryWrapper(param0: SystemLoadLibraryWrapper): void;
                public static unpackLibraryAndDependencies(param0: string): java.io.File;
                public static makeLdLibraryPath(): string;
                public static init(param0: globalAndroid.content.Context, param1: boolean): void;
                public static init(param0: globalAndroid.content.Context, param1: number, param2: SoFileLoader): void;
                public static getLoadedLibrariesNames(): java.util.Set<string>;
                public static setSoSources(param0: native.Array<SoSource>): void;
                public static init(param0: globalAndroid.content.Context, param1: number): void;
                public static deinitForTest(): void;
                public static areSoSourcesAbisSupported(): boolean;
                public static loadLibrary(param0: string, param1: number): void;
                public static prependSoSource(param0: SoSource): void;
            }
            export namespace SoLoader {
                export class Api14Utils extends java.lang.Object {
                    public static class: java.lang.Class<Api14Utils>;
                    public static getClassLoaderLdLoadLibrary(): string;
                }
                export class WrongAbiError extends java.lang.UnsatisfiedLinkError {
                    public static class: java.lang.Class<WrongAbiError>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export abstract class SoSource extends java.lang.Object {
                public static class: java.lang.Class<SoSource>;
                public static LOAD_RESULT_NOT_FOUND: number;
                public static LOAD_RESULT_LOADED: number;
                public static LOAD_RESULT_IMPLICITLY_PROVIDED: number;
                public static LOAD_FLAG_ALLOW_IMPLICIT_PROVISION: number;
                public static LOAD_FLAG_MIN_CUSTOM_FLAG: number;
                public static PREPARE_FLAG_ALLOW_ASYNC_INIT: number;
                public addToLdLibraryPath(param0: java.util.Collection<string>): void;
                public unpackLibrary(param0: string): java.io.File;
                public getSoSourceAbis(): native.Array<string>;
                public prepare(param0: number): void;
                public loadLibrary(param0: string, param1: number, param2: globalAndroid.os.StrictMode.ThreadPolicy): number;
                public toString(): string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class SysUtil extends java.lang.Object {
                public static class: java.lang.Class<SysUtil>;
                public static getSupportedAbis(): native.Array<string>;
                public static deleteOrThrow(param0: java.io.File): void;
                public static makeApkDepBlock(param0: java.io.File, param1: globalAndroid.content.Context): native.Array<number>;
                public static findAbiScore(param0: native.Array<string>, param1: string): number;
                public static dumbDeleteRecursive(param0: java.io.File): void;
                public static getAppVersionCode(param0: globalAndroid.content.Context): number;
                public static fallocateIfSupported(param0: java.io.FileDescriptor, param1: number): void;
                public constructor();
            }
            export namespace SysUtil {
                export class LollipopSysdeps extends java.lang.Object {
                    public static class: java.lang.Class<LollipopSysdeps>;
                    public static fallocateIfSupported(param0: java.io.FileDescriptor, param1: number): void;
                    public static getSupportedAbis(): native.Array<string>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class SystemLoadLibraryWrapper extends java.lang.Object {
                public static class: java.lang.Class<SystemLoadLibraryWrapper>;
                /**
                 * Constructs a new instance of the com.facebook.soloader.SystemLoadLibraryWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { loadLibrary(param0: string): void });
                public constructor();
                public loadLibrary(param0: string): void;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export abstract class UnpackingSoSource extends DirectorySoSource {
                public static class: java.lang.Class<UnpackingSoSource>;
                public mContext: globalAndroid.content.Context;
                public constructor(param0: globalAndroid.content.Context, param1: string);
                public constructor(param0: globalAndroid.content.Context, param1: java.io.File);
                public getSoSourceAbis(): native.Array<string>;
                public makeUnpacker(): UnpackingSoSource.Unpacker;
                public prepare(param0: number): void;
                public setSoSourceAbis(param0: native.Array<string>): void;
                public getDepsBlock(): native.Array<number>;
                public static getSoStorePath(param0: globalAndroid.content.Context, param1: string): java.io.File;
                public constructor(param0: java.io.File, param1: number);
                public constructor();
            }
            export namespace UnpackingSoSource {
                export class Dso extends java.lang.Object {
                    public static class: java.lang.Class<Dso>;
                    public name: string;
                    public hash: string;
                    public constructor(param0: string, param1: string);
                }
                export class DsoManifest extends java.lang.Object {
                    public static class: java.lang.Class<DsoManifest>;
                    public dsos: native.Array<Dso>;
                    public write(param0: java.io.DataOutput): void;
                    public constructor(param0: native.Array<Dso>);
                }
                export class InputDso extends java.lang.Object implements java.io.Closeable {
                    public static class: java.lang.Class<InputDso>;
                    public dso: Dso;
                    public content: java.io.InputStream;
                    public close(): void;
                    public constructor(param0: Dso, param1: java.io.InputStream);
                }
                export abstract class InputDsoIterator extends java.lang.Object implements java.io.Closeable {
                    public static class: java.lang.Class<InputDsoIterator>;
                    public constructor();
                    public close(): void;
                    public next(): InputDso;
                    public hasNext(): boolean;
                }
                export abstract class Unpacker extends java.lang.Object implements java.io.Closeable {
                    public static class: java.lang.Class<Unpacker>;
                    public constructor();
                    public openDsoIterator(): InputDsoIterator;
                    public close(): void;
                    public getDsoManifest(): DsoManifest;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace widget {
            export namespace text {
                export namespace span {
                    export class BetterImageSpan extends globalAndroid.text.style.ReplacementSpan {
                        public static class: java.lang.Class<BetterImageSpan>;
                        public static ALIGN_BOTTOM: number;
                        public static ALIGN_BASELINE: number;
                        public static ALIGN_CENTER: number;
                        public constructor();
                        public draw(
                            param0: globalAndroid.graphics.Canvas,
                            param1: string,
                            param2: number,
                            param3: number,
                            param4: number,
                            param5: number,
                            param6: number,
                            param7: number,
                            param8: globalAndroid.graphics.Paint
                        ): void;
                        public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number);
                        public getDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public static normalizeAlignment(param0: number): number;
                        public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                        public updateBounds(): void;
                        public getSize(param0: globalAndroid.graphics.Paint, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Paint.FontMetricsInt): number;
                    }
                    export namespace BetterImageSpan {
                        export class BetterImageSpanAlignment extends java.lang.Object implements java.lang.annotation.Annotation {
                            public static class: java.lang.Class<BetterImageSpanAlignment>;
                            /**
                             * Constructs a new instance of the com.facebook.widget.text.span.BetterImageSpan$BetterImageSpanAlignment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                             */
                            public constructor(implementation: { annotationType(): java.lang.Class<any>; equals(param0: any): boolean; hashCode(): number; toString(): string });
                            public constructor();
                            public hashCode(): number;
                            public annotationType(): java.lang.Class<any>;
                            public toString(): string;
                            public equals(param0: any): boolean;
                        }
                    }
                }
            }
        }
    }
}

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

// Generics information:
// bolts.Capture:1
// bolts.Continuation:2
// bolts.Task:1
// bolts.TaskCompletionSource:1
// com.facebook.common.executors.ScheduledFutureImpl:1
// com.facebook.common.executors.StatefulRunnable:1
// com.facebook.common.internal.ImmutableList:1
// com.facebook.common.internal.ImmutableMap:2
// com.facebook.common.internal.ImmutableSet:1
// com.facebook.common.internal.Supplier:1
// com.facebook.common.memory.Pool:1
// com.facebook.common.references.CloseableReference:1
// com.facebook.common.references.OOMSoftReference:1
// com.facebook.common.references.ResourceReleaser:1
// com.facebook.common.references.SharedReference:1
// com.facebook.datasource.AbstractDataSource:1
// com.facebook.datasource.BaseDataSubscriber:1
// com.facebook.datasource.DataSource:1
// com.facebook.datasource.DataSources.ValueHolder:1
// com.facebook.datasource.DataSubscriber:1
// com.facebook.datasource.FirstAvailableDataSourceSupplier:1
// com.facebook.datasource.IncreasingQualityDataSourceSupplier:1
// com.facebook.datasource.RetainingDataSourceSupplier:1
// com.facebook.datasource.RetainingDataSourceSupplier.RetainingDataSource:1
// com.facebook.datasource.SimpleDataSource:1
// com.facebook.drawee.controller.AbstractDraweeController:2
// com.facebook.drawee.controller.AbstractDraweeController.InternalForwardingListener:1
// com.facebook.drawee.controller.AbstractDraweeControllerBuilder:4
// com.facebook.drawee.controller.BaseControllerListener:1
// com.facebook.drawee.controller.ControllerListener:1
// com.facebook.drawee.controller.ForwardingControllerListener:1
// com.facebook.drawee.view.DraweeHolder:1
// com.facebook.drawee.view.DraweeView:1
// com.facebook.drawee.view.MultiDraweeHolder:1
// com.facebook.fresco.animation.backend.AnimationBackendDelegate:1
// com.facebook.fresco.animation.backend.AnimationBackendDelegateWithInactivityCheck:1
// com.facebook.imagepipeline.cache.CountingLruMap:2
// com.facebook.imagepipeline.cache.CountingMemoryCache:2
// com.facebook.imagepipeline.cache.CountingMemoryCache.Entry:2
// com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver:1
// com.facebook.imagepipeline.cache.InstrumentedMemoryCache:2
// com.facebook.imagepipeline.cache.MemoryCache:2
// com.facebook.imagepipeline.cache.MemoryCacheTracker:1
// com.facebook.imagepipeline.cache.ValueDescriptor:1
// com.facebook.imagepipeline.datasource.AbstractProducerToDataSourceAdapter:1
// com.facebook.imagepipeline.datasource.CloseableProducerToDataSourceAdapter:1
// com.facebook.imagepipeline.datasource.ListDataSource:1
// com.facebook.imagepipeline.datasource.ProducerToDataSourceAdapter:1
// com.facebook.imagepipeline.datasource.SettableDataSource:1
// com.facebook.imagepipeline.memory.BasePool:1
// com.facebook.imagepipeline.memory.Bucket:1
// com.facebook.imagepipeline.memory.OOMSoftReferenceBucket:1
// com.facebook.imagepipeline.producers.BaseConsumer:1
// com.facebook.imagepipeline.producers.BaseNetworkFetcher:1
// com.facebook.imagepipeline.producers.Consumer:1
// com.facebook.imagepipeline.producers.DelegatingConsumer:2
// com.facebook.imagepipeline.producers.MultiplexProducer:2
// com.facebook.imagepipeline.producers.NetworkFetcher:1
// com.facebook.imagepipeline.producers.NullProducer:1
// com.facebook.imagepipeline.producers.Producer:1
// com.facebook.imagepipeline.producers.StatefulProducerRunnable:1
// com.facebook.imagepipeline.producers.SwallowResultProducer:1
// com.facebook.imagepipeline.producers.ThreadHandoffProducer:1
// com.facebook.imagepipeline.producers.ThrottlingProducer:1
// com.facebook.imagepipeline.producers.ThumbnailProducer:1
