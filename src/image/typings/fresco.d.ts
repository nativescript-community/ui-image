/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/unified-signatures */


declare namespace bolts {
    export class AggregateException {
        public static class: java.lang.Class<AggregateException>;
        /** @deprecated */
        public getErrors(): java.util.List<java.lang.Exception>;
        public constructor(param0: string, param1: java.util.List<any>);
        /** @deprecated */
        public getCauses(): native.Array<java.lang.Throwable>;
        public getInnerThrowables(): java.util.List<java.lang.Throwable>;
        public constructor(param0: java.util.List<any>);
        public printStackTrace(param0: java.io.PrintStream): void;
        public printStackTrace(param0: java.io.PrintWriter): void;
        public constructor(param0: string, param1: native.Array<java.lang.Throwable>);
    }
}

declare namespace bolts {
    export class AndroidExecutors {
        public static class: java.lang.Class<AndroidExecutors>;
        public static newCachedThreadPool(): java.util.concurrent.ExecutorService;
        public static newCachedThreadPool(param0: java.util.concurrent.ThreadFactory): java.util.concurrent.ExecutorService;
        public static allowCoreThreadTimeout(param0: java.util.concurrent.ThreadPoolExecutor, param1: boolean): void;
        public static uiThread(): java.util.concurrent.Executor;
    }
    export namespace AndroidExecutors {
        export class UIThreadExecutor {
            public static class: java.lang.Class<UIThreadExecutor>;
            public execute(param0: java.lang.Runnable): void;
        }
    }
}

declare namespace bolts {
    export class BoltsExecutors {
        public static class: java.lang.Class<BoltsExecutors>;
        public static background(): java.util.concurrent.ExecutorService;
    }
    export namespace BoltsExecutors {
        export class ImmediateExecutor {
            public static class: java.lang.Class<ImmediateExecutor>;
            public execute(param0: java.lang.Runnable): void;
        }
    }
}

declare namespace bolts {
    export class CancellationToken {
        public static class: java.lang.Class<CancellationToken>;
        public isCancellationRequested(): boolean;
        public toString(): string;
        public throwIfCancellationRequested(): void;
        public register(param0: java.lang.Runnable): CancellationTokenRegistration;
    }
}

declare namespace bolts {
    export class CancellationTokenRegistration {
        public static class: java.lang.Class<CancellationTokenRegistration>;
        public close(): void;
    }
}

declare namespace bolts {
    export class CancellationTokenSource {
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
    export class Capture<T>  extends java.lang.Object {
        public static class: java.lang.Class<Capture<any>>;
        public constructor();
        public get(): T;
        public set(param0: T): void;
        public constructor(param0: T);
    }
}

declare namespace bolts {
    export class Continuation<TTaskResult, TContinuationResult>  extends java.lang.Object {
        public static class: java.lang.Class<Continuation<any,any>>;
        /**
		 * Constructs a new instance of the bolts.Continuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
        public constructor(implementation: {
            then(param0: Task<TTaskResult>): TContinuationResult;
        });
        public constructor();
        public then(param0: Task<TTaskResult>): TContinuationResult;
    }
}

declare namespace bolts {
    export class ExecutorException {
        public static class: java.lang.Class<ExecutorException>;
        public constructor(param0: java.lang.Exception);
    }
}

declare namespace bolts {
    export class Task<TResult>  extends java.lang.Object {
        public static class: java.lang.Class<Task<any>>;
        public static BACKGROUND_EXECUTOR: java.util.concurrent.ExecutorService;
        public static UI_THREAD_EXECUTOR: java.util.concurrent.Executor;
        public continueWith(param0: Continuation<any,any>, param1: CancellationToken): Task<any>;
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
        public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: Continuation<java.lang.Void,Task<java.lang.Void>>, param2: CancellationToken): Task<java.lang.Void>;
        public continueWithTask(param0: Continuation<any,any>, param1: java.util.concurrent.Executor, param2: CancellationToken): Task<any>;
        public static delay(param0: number): Task<java.lang.Void>;
        public static delay(param0: number, param1: CancellationToken): Task<java.lang.Void>;
        public onSuccessTask(param0: Continuation<any,any>): Task<any>;
        public static callInBackground(param0: java.util.concurrent.Callable<any>): Task<any>;
        public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: Continuation<java.lang.Void,Task<java.lang.Void>>, param2: java.util.concurrent.Executor, param3: CancellationToken): Task<java.lang.Void>;
        public static setUnobservedExceptionHandler(param0: Task.UnobservedExceptionHandler): void;
        public continueWithTask(param0: Continuation<any,any>): Task<any>;
        public onSuccessTask(param0: Continuation<any,any>, param1: CancellationToken): Task<any>;
        public onSuccess(param0: Continuation<any,any>, param1: java.util.concurrent.Executor): Task<any>;
        public onSuccess(param0: Continuation<any,any>, param1: CancellationToken): Task<any>;
        public continueWith(param0: Continuation<any,any>, param1: java.util.concurrent.Executor): Task<any>;
        public makeVoid(): Task<java.lang.Void>;
        public continueWith(param0: Continuation<any,any>): Task<any>;
        public continueWith(param0: Continuation<any,any>, param1: java.util.concurrent.Executor, param2: CancellationToken): Task<any>;
        public cast(): Task<any>;
        public static call(param0: java.util.concurrent.Callable<any>, param1: java.util.concurrent.Executor): Task<any>;
        public onSuccess(param0: Continuation<any,any>, param1: java.util.concurrent.Executor, param2: CancellationToken): Task<any>;
        public isFaulted(): boolean;
        public isCancelled(): boolean;
        public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: Continuation<java.lang.Void,Task<java.lang.Void>>, param2: java.util.concurrent.Executor): Task<java.lang.Void>;
        public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: Continuation<java.lang.Void,Task<java.lang.Void>>): Task<java.lang.Void>;
        public static whenAny(param0: java.util.Collection<any>): Task<Task<any>>;
        public static callInBackground(param0: java.util.concurrent.Callable<any>, param1: CancellationToken): Task<any>;
        public static whenAll(param0: java.util.Collection<any>): Task<java.lang.Void>;
        public waitForCompletion(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
        public onSuccessTask(param0: Continuation<any,any>, param1: java.util.concurrent.Executor): Task<any>;
        /** @deprecated */
        public static create(): Task.TaskCompletionSource;
        public waitForCompletion(): void;
        public isCompleted(): boolean;
        public onSuccess(param0: Continuation<any,any>): Task<any>;
        public onSuccessTask(param0: Continuation<any,any>, param1: java.util.concurrent.Executor, param2: CancellationToken): Task<any>;
        public static whenAnyResult(param0: java.util.Collection<any>): Task<any>;
        public continueWithTask(param0: Continuation<any,any>, param1: java.util.concurrent.Executor): Task<any>;
        public continueWithTask(param0: Continuation<any,any>, param1: CancellationToken): Task<any>;
    }
    export namespace Task {
        export class TaskCompletionSource extends bolts.TaskCompletionSource<any> {
            public static class: java.lang.Class<TaskCompletionSource>;
        }
        export class UnobservedExceptionHandler {
            public static class: java.lang.Class<UnobservedExceptionHandler>;
            /**
			 * Constructs a new instance of the bolts.Task$UnobservedExceptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                unobservedException(param0: Task<any>, param1: UnobservedTaskException): void;
            });
            public constructor();
            public unobservedException(param0: Task<any>, param1: UnobservedTaskException): void;
        }
    }
}

declare namespace bolts {
    export class TaskCompletionSource<TResult>  extends java.lang.Object {
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
    export class UnobservedErrorNotifier {
        public static class: java.lang.Class<UnobservedErrorNotifier>;
        public setObserved(): void;
        public finalize(): void;
        public constructor(param0: Task<any>);
    }
}

declare namespace bolts {
    export class UnobservedTaskException {
        public static class: java.lang.Class<UnobservedTaskException>;
        public constructor(param0: java.lang.Throwable);
    }
}


declare namespace com {
    export namespace facebook {
        export namespace binaryresource {
            export class BinaryResource {
                public static class: java.lang.Class<BinaryResource>;
                /**
				 * Constructs a new instance of the com.facebook.binaryresource.BinaryResource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    openStream(): java.io.InputStream;
                    read(): native.Array<number>;
                    size(): number;
                });
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
            export class ByteArrayBinaryResource extends BinaryResource {
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
            export class FileBinaryResource extends BinaryResource {
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
                export class BaseCacheEventListener extends CacheEventListener {
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
                export class CacheErrorLogger {
                    public static class: java.lang.Class<CacheErrorLogger>;
                    /**
					 * Constructs a new instance of the com.facebook.cache.common.CacheErrorLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        logError(param0: CacheErrorLogger.CacheErrorCategory, param1: java.lang.Class<any>, param2: string, param3: java.lang.Throwable): void;
                    });
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
                export class CacheEvent {
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
                export class CacheEventListener {
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
                export class CacheKey {
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
                export class CacheKeyUtil {
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
                export class MultiCacheKey extends CacheKey {
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
                export class NoOpCacheErrorLogger extends CacheErrorLogger {
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
                export class NoOpCacheEventListener extends CacheEventListener {
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
                export class SimpleCacheKey extends CacheKey {
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
                export class WriterCallback {
                    public static class: java.lang.Class<WriterCallback>;
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
                export class DefaultDiskStorage extends DiskStorage {
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
                    export class EntriesCollector extends facebook.common.file.FileTreeVisitor {
                        public static class: java.lang.Class<EntriesCollector>;
                        public visitFile(param0: java.io.File): void;
                        public getEntries(): java.util.List<DiskStorage.Entry>;
                        public postVisitDirectory(param0: java.io.File): void;
                        public preVisitDirectory(param0: java.io.File): void;
                    }
                    export class EntryImpl extends DiskStorage.Entry {
                        public static class: java.lang.Class<EntryImpl>;
                        public getSize(): number;
                        public getTimestamp(): number;
                        public getResource(): binaryresource.BinaryResource;
                        public getId(): string;
                        public getResource(): binaryresource.FileBinaryResource;
                    }
                    export class FileInfo {
                        public static class: java.lang.Class<FileInfo>;
                        public type: string;
                        public resourceId: string;
                        public static fromFile(param0: java.io.File): FileInfo;
                        public toPath(param0: string): string;
                        public createTempFile(param0: java.io.File): java.io.File;
                        public toString(): string;
                    }
                    export class FileType {
                        public static class: java.lang.Class<FileType>;
                        /**
						 * Constructs a new instance of the com.facebook.cache.disk.DefaultDiskStorage$FileType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
                        public constructor(implementation: {
                        });
                        public constructor();
                        public static TEMP: string;
                        public static CONTENT: string;
                    }
                    export class IncompleteFileException {
                        public static class: java.lang.Class<IncompleteFileException>;
                        public expected: number;
                        public actual: number;
                        public constructor(param0: number, param1: number);
                    }
                    export class InserterImpl extends DiskStorage.Inserter {
                        public static class: java.lang.Class<InserterImpl>;
                        public constructor(param0: DefaultDiskStorage, param1: string, param2: java.io.File);
                        public commit(param0: any): binaryresource.BinaryResource;
                        public writeData(param0: common.WriterCallback, param1: any): void;
                        public cleanUp(): boolean;
                    }
                    export class PurgingVisitor extends facebook.common.file.FileTreeVisitor {
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
                export class DefaultEntryEvictionComparatorSupplier extends EntryEvictionComparatorSupplier {
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
                export class DiskCacheConfig {
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
                    export class Builder {
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
                export class DiskStorage {
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
                    export class DiskDumpInfo {
                        public static class: java.lang.Class<DiskDumpInfo>;
                        public entries: java.util.List<DiskDumpInfoEntry>;
                        public typeCounts: java.util.Map<string,java.lang.Integer>;
                        public constructor();
                    }
                    export class DiskDumpInfoEntry {
                        public static class: java.lang.Class<DiskDumpInfoEntry>;
                        public path: string;
                        public type: string;
                        public size: number;
                        public firstBits: string;
                        public constructor(param0: string, param1: string, param2: number, param3: string);
                    }
                    export class Entry {
                        public static class: java.lang.Class<Entry>;
                        /**
						 * Constructs a new instance of the com.facebook.cache.disk.DiskStorage$Entry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
                        public constructor(implementation: {
                            getId(): string;
                            getTimestamp(): number;
                            getSize(): number;
                            getResource(): binaryresource.BinaryResource;
                        });
                        public constructor();
                        public getSize(): number;
                        public getTimestamp(): number;
                        public getResource(): binaryresource.BinaryResource;
                        public getId(): string;
                    }
                    export class Inserter {
                        public static class: java.lang.Class<Inserter>;
                        /**
						 * Constructs a new instance of the com.facebook.cache.disk.DiskStorage$Inserter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
                        public constructor(implementation: {
                            writeData(param0: common.WriterCallback, param1: any): void;
                            commit(param0: any): binaryresource.BinaryResource;
                            cleanUp(): boolean;
                        });
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
                export class DiskStorageCache implements FileCache, facebook.common.disk.DiskTrimmable {
                    public static class: java.lang.Class<DiskStorageCache>;
                    public static START_OF_VERSIONING: number;
                    public hasKey(param0: common.CacheKey): boolean;
                    public awaitIndex(): void;
                    public isIndexReady(): boolean;
                    public getDumpInfo(): DiskStorage.DiskDumpInfo;
                    public probe(param0: common.CacheKey): boolean;
                    public getCount(): number;
                    public constructor(param0: DiskStorage, param1: EntryEvictionComparatorSupplier, param2: DiskStorageCache.Params, param3: common.CacheEventListener, param4: common.CacheErrorLogger, param5: facebook.common.disk.DiskTrimmableRegistry, param6: globalAndroid.content.Context, param7: java.util.concurrent.Executor, param8: boolean);
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
                    export class CacheStats {
                        public static class: java.lang.Class<CacheStats>;
                        public increment(param0: number, param1: number): void;
                        public getSize(): number;
                        public set(param0: number, param1: number): void;
                        public getCount(): number;
                        public reset(): void;
                        public isInitialized(): boolean;
                    }
                    export class Params {
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
                export class DynamicDefaultDiskStorage extends DiskStorage {
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
                    export class State {
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
                    public static class: java.lang.Class<EntryEvictionComparatorSupplier>;
                    /**
					 * Constructs a new instance of the com.facebook.cache.disk.EntryEvictionComparatorSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        get(): EntryEvictionComparator;
                    });
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
                export class FileCache extends facebook.common.disk.DiskTrimmable {
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
                export class ScoreBasedEvictionComparatorSupplier extends EntryEvictionComparatorSupplier {
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
                export class SettableCacheEvent extends common.CacheEvent {
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
        export namespace callercontext {
            export class CallerContextVerifier {
                public static class: java.lang.Class<CallerContextVerifier>;
                /**
				 * Constructs a new instance of the com.facebook.callercontext.CallerContextVerifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    verifyCallerContext(param0: any): void;
                });
                public constructor();
                public verifyCallerContext(param0: any): void;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace activitylistener {
                export class ActivityListener {
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
                export class ActivityListenerManager {
                    public static class: java.lang.Class<ActivityListenerManager>;
                    public constructor();
                    public static getListenableActivity(param0: globalAndroid.content.Context): ListenableActivity;
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
                export class BaseActivityListener extends ActivityListener {
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
                export class ListenableActivity {
                    public static class: java.lang.Class<ListenableActivity>;
                    /**
					 * Constructs a new instance of the com.facebook.common.activitylistener.ListenableActivity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        addActivityListener(param0: ActivityListener): void;
                        removeActivityListener(param0: ActivityListener): void;
                    });
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
                export class DiskTrimmable {
                    public static class: java.lang.Class<DiskTrimmable>;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace disk {
                export class DiskTrimmableRegistry {
                    public static class: java.lang.Class<DiskTrimmableRegistry>;
                    /**
					 * Constructs a new instance of the com.facebook.common.disk.DiskTrimmableRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        registerDiskTrimmable(param0: DiskTrimmable): void;
                        unregisterDiskTrimmable(param0: DiskTrimmable): void;
                    });
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
                export class NoOpDiskTrimmableRegistry extends DiskTrimmableRegistry {
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
                    public isTerminated(): boolean;
                    public execute(param0: java.lang.Runnable): void;
                    public shutdown(): void;
                    public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
                    public static getInstance(): CallerThreadExecutor;
                    public isShutdown(): boolean;
                    public shutdownNow(): java.util.List<java.lang.Runnable>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace executors {
                export class ConstrainedExecutorService {
                    public static class: java.lang.Class<ConstrainedExecutorService>;
                    public isTerminated(): boolean;
                    public execute(param0: java.lang.Runnable): void;
                    public shutdown(): void;
                    public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
                    public static newConstrainedExecutor(param0: string, param1: number, param2: number, param3: java.util.concurrent.Executor): ConstrainedExecutorService;
                    public isIdle(): boolean;
                    public constructor(param0: string, param1: number, param2: java.util.concurrent.Executor, param3: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
                    public isShutdown(): boolean;
                    public shutdownNow(): java.util.List<java.lang.Runnable>;
                }
                export namespace ConstrainedExecutorService {
                    export class Worker {
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
                    public execute(param0: java.lang.Runnable): void;
                    public constructor(param0: java.util.concurrent.Executor);
                    public constructor(param0: string, param1: number, param2: java.util.concurrent.Executor, param3: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace executors {
                export class HandlerExecutorService {
                    public static class: java.lang.Class<HandlerExecutorService>;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace executors {
                export class HandlerExecutorServiceImpl implements HandlerExecutorService {
                    public static class: java.lang.Class<HandlerExecutorServiceImpl>;
                    public isTerminated(): boolean;
                    public newTaskFor(param0: java.lang.Runnable, param1: any): ScheduledFutureImpl<any>;
                    public isHandlerThread(): boolean;
                    public newTaskFor(param0: java.util.concurrent.Callable<any>): ScheduledFutureImpl<any>;
                    public submit(param0: java.lang.Runnable): java.util.concurrent.ScheduledFuture<any>;
                    public schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                    public isShutdown(): boolean;
                    public shutdownNow(): java.util.List<java.lang.Runnable>;
                    public execute(param0: java.lang.Runnable): void;
                    public shutdown(): void;
                    public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
                    public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.ScheduledFuture<any>;
                    public schedule(param0: java.util.concurrent.Callable<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                    public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.ScheduledFuture<any>;
                    public scheduleAtFixedRate(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                    public constructor(param0: globalAndroid.os.Handler);
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
                export class ScheduledFutureImpl<V>  extends java.lang.Object {
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
                export class SerialExecutorService {
                    public static class: java.lang.Class<SerialExecutorService>;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace executors {
                export abstract class StatefulRunnable<T>  extends java.lang.Runnable {
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
                    public static getInstance(): UiThreadImmediateExecutorService;
                    public execute(param0: java.lang.Runnable): void;
                    public isHandlerThread(): boolean;
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
                export class FileTree {
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
                export class FileTreeVisitor {
                    public static class: java.lang.Class<FileTreeVisitor>;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace file {
                export class FileUtils {
                    public static class: java.lang.Class<FileUtils>;
                    public constructor();
                    public static mkdirs(param0: java.io.File): void;
                    public static rename(param0: java.io.File, param1: java.io.File): void;
                }
                export namespace FileUtils {
                    export class CreateDirectoryException {
                        public static class: java.lang.Class<CreateDirectoryException>;
                        public constructor(param0: string, param1: java.lang.Throwable);
                        public constructor(param0: string);
                    }
                    export class FileDeleteException {
                        public static class: java.lang.Class<FileDeleteException>;
                        public constructor(param0: string);
                    }
                    export class ParentDirNotFoundException {
                        public static class: java.lang.Class<ParentDirNotFoundException>;
                        public constructor(param0: string);
                    }
                    export class RenameException {
                        public static class: java.lang.Class<RenameException>;
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
                export class AndroidPredicates {
                    public static class: java.lang.Class<AndroidPredicates>;
                    public static False(): Predicate<any>;
                    public static True(): Predicate<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class ByteStreams {
                    public static class: java.lang.Class<ByteStreams>;
                    public static toByteArray(param0: java.io.InputStream): native.Array<number>;
                    public static read(param0: java.io.InputStream, param1: native.Array<number>, param2: number, param3: number): number;
                    public static toByteArray(param0: java.io.InputStream, param1: number): native.Array<number>;
                    public static copy(param0: java.io.InputStream, param1: java.io.OutputStream): number;
                    public static readFully(param0: java.io.InputStream, param1: native.Array<number>, param2: number, param3: number): void;
                }
                export namespace ByteStreams {
                    export class FastByteArrayOutputStream {
                        public static class: java.lang.Class<FastByteArrayOutputStream>;
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
                export class Closeables {
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
                export class CountingOutputStream {
                    public static class: java.lang.Class<CountingOutputStream>;
                    public write(param0: native.Array<number>, param1: number, param2: number): void;
                    public constructor(param0: java.io.OutputStream);
                    public getCount(): number;
                    public close(): void;
                    public write(param0: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class DoNotStrip {
                    public static class: java.lang.Class<DoNotStrip>;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Files {
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
                export class ImmutableList<E>  extends java.util.ArrayList<any> {
                    public static class: java.lang.Class<ImmutableList<any>>;
                    public static of(param0: native.Array<any>): ImmutableList<any>;
                    public static copyOf(param0: java.util.List<any>): ImmutableList<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class ImmutableMap<K, V>  extends java.util.HashMap<any,any> {
                    public static class: java.lang.Class<ImmutableMap<any,any>>;
                    public static of(param0: any, param1: any): java.util.Map<any,any>;
                    public static of(param0: any, param1: any, param2: any, param3: any): java.util.Map<any,any>;
                    public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): java.util.Map<any,any>;
                    public static copyOf(param0: java.util.Map<any,any>): ImmutableMap<any,any>;
                    public static of(): java.util.Map<any,any>;
                    public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.Map<any,any>;
                    public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any): java.util.Map<any,any>;
                    public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): java.util.Map<any,any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class ImmutableSet<E>  extends java.util.HashSet<any> {
                    public static class: java.lang.Class<ImmutableSet<any>>;
                    public static copyOf(param0: java.util.Set<any>): ImmutableSet<any>;
                    public static of(param0: native.Array<any>): ImmutableSet<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Ints {
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
                export class Objects {
                    public static class: java.lang.Class<Objects>;
                    public static toStringHelper(param0: string): Objects.ToStringHelper;
                    public static toStringHelper(param0: java.lang.Class<any>): Objects.ToStringHelper;
                    public static firstNonNull(param0: any, param1: any): any;
                    public static hashCode(param0: native.Array<any>): number;
                    public static equal(param0: any, param1: any): boolean;
                    public static toStringHelper(param0: any): Objects.ToStringHelper;
                }
                export namespace Objects {
                    export class ToStringHelper {
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
                        export class ValueHolder {
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
                export class Preconditions {
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
                export class Predicate<T>  extends java.lang.Object {
                    public static class: java.lang.Class<Predicate<any>>;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Sets {
                    public static class: java.lang.Class<Sets>;
                    public static newHashSet(): java.util.HashSet<any>;
                    public static newHashSetWithCapacity(param0: number): java.util.HashSet<any>;
                    public static newIdentityHashSet(): java.util.Set<any>;
                    public static newHashSet(param0: java.lang.Iterable<any>): java.util.HashSet<any>;
                    public static newHashSet(param0: native.Array<any>): java.util.HashSet<any>;
                    public static newHashSet(param0: java.util.Iterator<any>): java.util.HashSet<any>;
                    public static newCopyOnWriteArraySet(): java.util.concurrent.CopyOnWriteArraySet<any>;
                    public static newLinkedHashSet(): java.util.LinkedHashSet<any>;
                    public static newSetFromMap(param0: java.util.Map<any,any>): java.util.Set<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Supplier<T>  extends java.lang.Object {
                    public static class: java.lang.Class<Supplier<any>>;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace internal {
                export class Suppliers {
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
                export class Throwables {
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
                export class VisibleForTesting {
                    public static class: java.lang.Class<VisibleForTesting>;
                    /**
					 * Constructs a new instance of the com.facebook.common.internal.VisibleForTesting interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export namespace common {
            export namespace lifecycle {
                export class AttachDetachListener {
                    public static class: java.lang.Class<AttachDetachListener>;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace logging {
                export class FLog {
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
                export class FLogDefaultLoggingDelegate extends LoggingDelegate {
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
                export class LoggingDelegate {
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
                export class MediaUtils {
                    public static class: java.lang.Class<MediaUtils>;
                    public static ADDITIONAL_ALLOWED_MIME_TYPES: java.util.Map<string,string>;
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
            export namespace media {
                export class MimeTypeMapWrapper {
                    public static class: java.lang.Class<MimeTypeMapWrapper>;
                    public static hasExtension(param0: string): boolean;
                    public static hasMimeType(param0: string): boolean;
                    public constructor();
                    public static getExtensionFromMimeType(param0: string): string;
                    public static getMimeTypeFromExtension(param0: string): string;
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
                    public constructor(implementation: {
                        get(param0: number): any;
                        release(param0: any): void;
                        release(param0: any): void;
                        trim(param0: MemoryTrimType): void;
                    });
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
                    public static OnSystemMemoryCriticallyLowWhileAppInForeground: MemoryTrimType;
                    public static OnSystemLowMemoryWhileAppInForeground: MemoryTrimType;
                    public static OnSystemLowMemoryWhileAppInBackground: MemoryTrimType;
                    public static OnAppBackgrounded: MemoryTrimType;
                    public getSuggestedTrimRatio(): number;
                    public static valueOf(param0: string): MemoryTrimType;
                    public static values(): native.Array<MemoryTrimType>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export class MemoryTrimmable {
                    public static class: java.lang.Class<MemoryTrimmable>;
                    /**
					 * Constructs a new instance of the com.facebook.common.memory.MemoryTrimmable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        trim(param0: MemoryTrimType): void;
                    });
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
                export class MemoryTrimmableRegistry {
                    public static class: java.lang.Class<MemoryTrimmableRegistry>;
                    /**
					 * Constructs a new instance of the com.facebook.common.memory.MemoryTrimmableRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        registerMemoryTrimmable(param0: MemoryTrimmable): void;
                        unregisterMemoryTrimmable(param0: MemoryTrimmable): void;
                    });
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
                export class NoOpMemoryTrimmableRegistry extends MemoryTrimmableRegistry {
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
                export class Pool<V>  extends java.lang.Object {
                    public static class: java.lang.Class<Pool<any>>;
                    /**
					 * Constructs a new instance of the com.facebook.common.memory.Pool<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        get(param0: number): V;
                        release(param0: V): void;
                        release(param0: any): void;
                        trim(param0: MemoryTrimType): void;
                    });
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
                export class PooledByteArrayBufferedInputStream {
                    public static class: java.lang.Class<PooledByteArrayBufferedInputStream>;
                    public available(): number;
                    public read(): number;
                    public read(param0: native.Array<number>, param1: number, param2: number): number;
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
                export class PooledByteBuffer {
                    public static class: java.lang.Class<PooledByteBuffer>;
                    /**
					 * Constructs a new instance of the com.facebook.common.memory.PooledByteBuffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        size(): number;
                        read(param0: number): number;
                        read(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
                        getNativePtr(): number;
                        getByteBuffer(): java.nio.ByteBuffer;
                        close(): void;
                        isClosed(): boolean;
                    });
                    public constructor();
                    public read(param0: number): number;
                    public getByteBuffer(): java.nio.ByteBuffer;
                    public close(): void;
                    public size(): number;
                    public read(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
                    public getNativePtr(): number;
                    public isClosed(): boolean;
                }
                export namespace PooledByteBuffer {
                    export class ClosedException {
                        public static class: java.lang.Class<ClosedException>;
                        public constructor();
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
                export class PooledByteBufferFactory {
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
                export class PooledByteBufferInputStream {
                    public static class: java.lang.Class<PooledByteBufferInputStream>;
                    public available(): number;
                    public read(): number;
                    public read(param0: native.Array<number>, param1: number, param2: number): number;
                    public constructor(param0: PooledByteBuffer);
                    public reset(): void;
                    public markSupported(): boolean;
                    public read(param0: native.Array<number>): number;
                    public skip(param0: number): number;
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
                export abstract class PooledByteBufferOutputStream {
                    public static class: java.lang.Class<PooledByteBufferOutputStream>;
                    public constructor();
                    public toByteBuffer(): PooledByteBuffer;
                    public close(): void;
                    public size(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace memory {
                export class PooledByteStreams {
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
                export class CloseableReference<T>  extends java.lang.Object {
                    public static class: java.lang.Class<CloseableReference<any>>;
                    public static closeSafely(param0: java.lang.Iterable<any>): void;
                    public static closeSafely(param0: CloseableReference<any>): void;
                    public getUnderlyingReferenceTestOnly(): SharedReference<T>;
                    public finalize(): void;
                    public static of(param0: any, param1: ResourceReleaser<any>, param2: CloseableReference.LeakHandler): CloseableReference<any>;
                    public static of(param0: java.io.Closeable): CloseableReference<any>;
                    public get(): T;
                    public getValueHash(): number;
                    public static of(param0: java.io.Closeable, param1: CloseableReference.LeakHandler): CloseableReference<any>;
                    public static isValid(param0: CloseableReference<any>): boolean;
                    public static of(param0: any, param1: ResourceReleaser<any>): CloseableReference<any>;
                    public cloneOrNull(): CloseableReference<T>;
                    public isValid(): boolean;
                    public close(): void;
                    public clone(): CloseableReference<T>;
                    public static cloneOrNull(param0: CloseableReference<any>): CloseableReference<any>;
                    public static cloneOrNull(param0: java.util.Collection<any>): java.util.List<any>;
                }
                export namespace CloseableReference {
                    export class LeakHandler {
                        public static class: java.lang.Class<LeakHandler>;
                        /**
						 * Constructs a new instance of the com.facebook.common.references.CloseableReference$LeakHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
                        public constructor(implementation: {
                            reportLeak(param0: SharedReference<any>, param1: java.lang.Throwable): void;
                            requiresStacktrace(): boolean;
                        });
                        public constructor();
                        public reportLeak(param0: SharedReference<any>, param1: java.lang.Throwable): void;
                        public requiresStacktrace(): boolean;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace references {
                export class OOMSoftReference<T>  extends java.lang.Object {
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
                export class ResourceReleaser<T>  extends java.lang.Object {
                    public static class: java.lang.Class<ResourceReleaser<any>>;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace references {
                export class SharedReference<T>  extends java.lang.Object {
                    public static class: java.lang.Class<SharedReference<any>>;
                    public addReferenceIfValid(): boolean;
                    public static isValid(param0: SharedReference<any>): boolean;
                    public addReference(): void;
                    public constructor(param0: T, param1: ResourceReleaser<T>);
                    public isValid(): boolean;
                    public getRefCountTestOnly(): number;
                    public get(): T;
                    public deleteReference(): void;
                }
                export namespace SharedReference {
                    export class NullReferenceException {
                        public static class: java.lang.Class<NullReferenceException>;
                        public constructor();
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
                export class StatFsHelper {
                    public static class: java.lang.Class<StatFsHelper>;
                    public static DEFAULT_DISK_YELLOW_LEVEL_IN_MB: number;
                    public static DEFAULT_DISK_YELLOW_LEVEL_IN_BYTES: number;
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
                export class LimitedInputStream {
                    public static class: java.lang.Class<LimitedInputStream>;
                    public available(): number;
                    public read(): number;
                    public read(param0: native.Array<number>, param1: number, param2: number): number;
                    public reset(): void;
                    public skip(param0: number): number;
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
                export class TailAppendingInputStream {
                    public static class: java.lang.Class<TailAppendingInputStream>;
                    public read(): number;
                    public read(param0: native.Array<number>, param1: number, param2: number): number;
                    public reset(): void;
                    public read(param0: native.Array<number>): number;
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
                export class AwakeTimeSinceBootClock extends MonotonicClock {
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
                export class Clock {
                    public static class: java.lang.Class<Clock>;
                    /**
					 * Constructs a new instance of the com.facebook.common.time.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        now(): number;
                    });
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
                export class CurrentThreadTimeClock extends Clock {
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
                export class MonotonicClock {
                    public static class: java.lang.Class<MonotonicClock>;
                    /**
					 * Constructs a new instance of the com.facebook.common.time.MonotonicClock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        now(): number;
                    });
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
                export class RealtimeSinceBootClock extends MonotonicClock {
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
                export class SystemClock extends Clock {
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
                export class ByteConstants {
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
                export class ExceptionWithNoStacktrace {
                    public static class: java.lang.Class<ExceptionWithNoStacktrace>;
                    public fillInStackTrace(): java.lang.Throwable;
                    public constructor(param0: string);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace util {
                export class HashCodeUtil {
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
                export class Hex {
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
                export class SecureHashUtil {
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
                export class StreamUtil {
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
                export class UriUtil {
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
                export class BitmapCreator {
                    public static class: java.lang.Class<BitmapCreator>;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace webp {
                export class WebpBitmapFactory {
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
                    public decodeFileDescriptor(param0: java.io.FileDescriptor, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                    public decodeStream(param0: java.io.InputStream, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                    public setWebpErrorLogger(param0: WebpBitmapFactory.WebpErrorLogger): void;
                }
                export namespace WebpBitmapFactory {
                    export class WebpErrorLogger {
                        public static class: java.lang.Class<WebpErrorLogger>;
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

declare namespace com {
    export namespace facebook {
        export namespace common {
            export namespace webp {
                export class WebpSupportStatus {
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
            export abstract class AbstractDataSource<T>  extends DataSource<any> {
                public static class: java.lang.Class<AbstractDataSource<any>>;
                public getResult(): any;
                public hasFailed(): boolean;
                public close(): boolean;
                public isClosed(): boolean;
                public isFinished(): boolean;
                public setProgress(param0: number): boolean;
                public hasMultipleResults(): boolean;
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
            export abstract class BaseDataSubscriber<T>  extends DataSubscriber<any> {
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
            export class DataSource<T>  extends java.lang.Object {
                public static class: java.lang.Class<DataSource<any>>;
                /**
				 * Constructs a new instance of the com.facebook.datasource.DataSource<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    isClosed(): boolean;
                    getResult(): T;
                    hasResult(): boolean;
                    hasMultipleResults(): boolean;
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
                public hasMultipleResults(): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace datasource {
            export class DataSources {
                public static class: java.lang.Class<DataSources>;
                public static waitForFinalResult(param0: DataSource<any>): any;
                public static getFailedDataSourceSupplier(param0: java.lang.Throwable): common.internal.Supplier<any>;
                public static immediateFailedDataSource(param0: java.lang.Throwable): DataSource<any>;
                public static immediateDataSource(param0: any): DataSource<any>;
            }
            export namespace DataSources {
                export class ValueHolder<T>  extends java.lang.Object {
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
            export class DataSubscriber<T>  extends java.lang.Object {
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
            export class FirstAvailableDataSourceSupplier<T>  extends common.internal.Supplier<DataSource<any>> {
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
                    public hasMultipleResults(): boolean;
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
            export class IncreasingQualityDataSourceSupplier<T>  extends common.internal.Supplier<DataSource<any>> {
                public static class: java.lang.Class<IncreasingQualityDataSourceSupplier<any>>;
                public static create(param0: java.util.List<any>): IncreasingQualityDataSourceSupplier<any>;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public get(): any;
                public static create(param0: java.util.List<any>, param1: boolean): IncreasingQualityDataSourceSupplier<any>;
                public toString(): string;
                public get(): DataSource<any>;
            }
            export namespace IncreasingQualityDataSourceSupplier {
                export class IncreasingQualityDataSource extends AbstractDataSource<any> {
                    public static class: java.lang.Class<IncreasingQualityDataSource>;
                    public isFinished(): boolean;
                    public getProgress(): number;
                    public hasMultipleResults(): boolean;
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
            export class RetainingDataSourceSupplier<T>  extends common.internal.Supplier<DataSource<any>> {
                public static class: java.lang.Class<RetainingDataSourceSupplier<any>>;
                public get(): any;
                public replaceSupplier(param0: common.internal.Supplier<DataSource<any>>): void;
                public get(): DataSource<any>;
                public constructor();
            }
            export namespace RetainingDataSourceSupplier {
                export class RetainingDataSource<T>  extends AbstractDataSource<any> {
                    public static class: java.lang.Class<RetainingDataSource<any>>;
                    public isFinished(): boolean;
                    public getProgress(): number;
                    public setSupplier(param0: common.internal.Supplier<DataSource<any>>): void;
                    public hasMultipleResults(): boolean;
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
            export class SimpleDataSource<T>  extends AbstractDataSource<any> {
                public static class: java.lang.Class<SimpleDataSource<any>>;
                public getResult(): any;
                public static create(): SimpleDataSource<any>;
                public hasFailed(): boolean;
                public close(): boolean;
                public isClosed(): boolean;
                public isFinished(): boolean;
                public setProgress(param0: number): boolean;
                public hasMultipleResults(): boolean;
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
                export class DrawableWithCaches {
                    public static class: java.lang.Class<DrawableWithCaches>;
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
            export class BuildConfig {
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
                    export class BuildConfig {
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
                    export class DefaultDrawableFactory extends imagepipeline.drawable.DrawableFactory {
                        public static class: java.lang.Class<DefaultDrawableFactory>;
                        public constructor(param0: globalAndroid.content.res.Resources, param1: imagepipeline.drawable.DrawableFactory);
                        public supportsImageType(param0: imagepipeline.image.CloseableImage): boolean;
                        public createDrawable(param0: imagepipeline.image.CloseableImage): globalAndroid.graphics.drawable.Drawable;
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
                        public static class: java.lang.Class<DraweeConfig>;
                        public getDebugOverlayEnabledSupplier(): common.internal.Supplier<java.lang.Boolean>;
                        public getCustomDrawableFactories(): common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>;
                        public static newBuilder(): DraweeConfig.Builder;
                        public getImagePerfDataListener(): info.ImagePerfDataListener;
                        public getPipelineDraweeControllerFactory(): PipelineDraweeControllerFactory;
                    }
                    export namespace DraweeConfig {
                        export class Builder {
                            public static class: java.lang.Class<Builder>;
                            public constructor();
                            public setDrawDebugOverlay(param0: boolean): Builder;
                            public build(): DraweeConfig;
                            public setDebugOverlayEnabledSupplier(param0: common.internal.Supplier<java.lang.Boolean>): Builder;
                            public addCustomDrawableFactory(param0: imagepipeline.drawable.DrawableFactory): Builder;
                            public setPipelineDraweeControllerFactory(param0: PipelineDraweeControllerFactory): Builder;
                            public setImagePerfDataListener(param0: info.ImagePerfDataListener): Builder;
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
                    export class PipelineDraweeController extends controller.AbstractDraweeController<common.references.CloseableReference<imagepipeline.image.CloseableImage>,imagepipeline.image.ImageInfo> {
                        public static class: java.lang.Class<PipelineDraweeController>;
                        public getRequestListener(): imagepipeline.listener.RequestListener;
                        public getImageInfo(param0: common.references.CloseableReference<imagepipeline.image.CloseableImage>): imagepipeline.image.ImageInfo;
                        public constructor(param0: components.DeferredReleaser, param1: java.util.concurrent.Executor, param2: string, param3: any);
                        public setCustomDrawableFactories(param0: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>): void;
                        public createDrawable(param0: common.references.CloseableReference<imagepipeline.image.CloseableImage>): globalAndroid.graphics.drawable.Drawable;
                        public releaseImage(param0: common.references.CloseableReference<imagepipeline.image.CloseableImage>): void;
                        public updateDebugOverlay(param0: imagepipeline.image.CloseableImage, param1: drawee.debug.DebugControllerOverlayDrawable): void;
                        public onViewportVisibilityHint(param0: boolean): void;
                        public releaseImage(param0: any): void;
                        public initialize(param0: common.internal.Supplier<datasource.DataSource<common.references.CloseableReference<imagepipeline.image.CloseableImage>>>, param1: string, param2: cache.common.CacheKey, param3: any, param4: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>, param5: info.ImageOriginListener): void;
                        public getDataSourceSupplier(): common.internal.Supplier<datasource.DataSource<common.references.CloseableReference<imagepipeline.image.CloseableImage>>>;
                        public releaseDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                        public getCachedImage(): any;
                        public getDataSource(): datasource.DataSource<common.references.CloseableReference<imagepipeline.image.CloseableImage>>;
                        public onClick(): boolean;
                        public setDrawDebugOverlay(param0: boolean): void;
                        public addRequestListener(param0: imagepipeline.listener.RequestListener): void;
                        public removeRequestListener(param0: imagepipeline.listener.RequestListener): void;
                        public getDataSource(): datasource.DataSource<any>;
                        public initialize(param0: string, param1: any): void;
                        public getHierarchy(): interfaces.DraweeHierarchy;
                        public getContentDescription(): string;
                        public getImageInfo(param0: any): any;
                        public getImageHash(param0: common.references.CloseableReference<imagepipeline.image.CloseableImage>): number;
                        public onImageLoadedFromCacheImmediately(param0: string, param1: any): void;
                        public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                        public setHierarchy(param0: interfaces.DraweeHierarchy): void;
                        public removeImageOriginListener(param0: info.ImageOriginListener): void;
                        public onImageLoadedFromCacheImmediately(param0: string, param1: common.references.CloseableReference<imagepipeline.image.CloseableImage>): void;
                        public clearImageOriginListeners(): void;
                        public addImageOriginListener(param0: info.ImageOriginListener): void;
                        public release(): void;
                        public getCacheKey(): cache.common.CacheKey;
                        public toString(): string;
                        public getAnimatable(): globalAndroid.graphics.drawable.Animatable;
                        public getCachedImage(): common.references.CloseableReference<imagepipeline.image.CloseableImage>;
                        public getImageHash(param0: any): number;
                        public onAttach(): void;
                        public initializePerformanceMonitoring(param0: info.ImagePerfDataListener): void;
                        public constructor(param0: globalAndroid.content.res.Resources, param1: components.DeferredReleaser, param2: imagepipeline.drawable.DrawableFactory, param3: java.util.concurrent.Executor, param4: imagepipeline.cache.MemoryCache<cache.common.CacheKey,imagepipeline.image.CloseableImage>, param5: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>);
                        public getResources(): globalAndroid.content.res.Resources;
                        public setContentDescription(param0: string): void;
                        public createDrawable(param0: any): globalAndroid.graphics.drawable.Drawable;
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
                    export class PipelineDraweeControllerBuilder extends controller.AbstractDraweeControllerBuilder<PipelineDraweeControllerBuilder,imagepipeline.request.ImageRequest,common.references.CloseableReference<imagepipeline.image.CloseableImage>,imagepipeline.image.ImageInfo> {
                        public static class: java.lang.Class<PipelineDraweeControllerBuilder>;
                        public setPerfDataListener(param0: info.ImagePerfDataListener): PipelineDraweeControllerBuilder;
                        public setCustomDrawableFactory(param0: imagepipeline.drawable.DrawableFactory): PipelineDraweeControllerBuilder;
                        public getRequestListener(param0: interfaces.DraweeController): imagepipeline.listener.RequestListener;
                        public setCallerContext(param0: any): interfaces.SimpleDraweeControllerBuilder;
                        public setCustomDrawableFactories(param0: native.Array<imagepipeline.drawable.DrawableFactory>): PipelineDraweeControllerBuilder;
                        public setUri(param0: globalAndroid.net.Uri): interfaces.SimpleDraweeControllerBuilder;
                        public setUri(param0: string): interfaces.SimpleDraweeControllerBuilder;
                        public obtainController(): PipelineDraweeController;
                        public getDataSourceForRequest(param0: interfaces.DraweeController, param1: string, param2: any, param3: any, param4: controller.AbstractDraweeControllerBuilder.CacheLevel): datasource.DataSource<any>;
                        public build(): interfaces.DraweeController;
                        public constructor(param0: globalAndroid.content.Context, param1: java.util.Set<controller.ControllerListener<any>>);
                        public build(): controller.AbstractDraweeController<any,any>;
                        public static convertCacheLevelToRequestLevel(param0: controller.AbstractDraweeControllerBuilder.CacheLevel): imagepipeline.request.ImageRequest.RequestLevel;
                        public setCallerContext(param0: any): any;
                        public setImageOriginListener(param0: info.ImageOriginListener): PipelineDraweeControllerBuilder;
                        public setCustomDrawableFactories(param0: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>): PipelineDraweeControllerBuilder;
                        public setUri(param0: globalAndroid.net.Uri): PipelineDraweeControllerBuilder;
                        public constructor(param0: globalAndroid.content.Context, param1: PipelineDraweeControllerFactory, param2: imagepipeline.core.ImagePipeline, param3: java.util.Set<controller.ControllerListener<any>>);
                        public obtainController(): controller.AbstractDraweeController<any,any>;
                        public setOldController(param0: interfaces.DraweeController): interfaces.SimpleDraweeControllerBuilder;
                        public setOldController(param0: interfaces.DraweeController): any;
                        public setUri(param0: string): PipelineDraweeControllerBuilder;
                        public getDataSourceForRequest(param0: interfaces.DraweeController, param1: string, param2: imagepipeline.request.ImageRequest, param3: any, param4: controller.AbstractDraweeControllerBuilder.CacheLevel): datasource.DataSource<common.references.CloseableReference<imagepipeline.image.CloseableImage>>;
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
                        public constructor(param0: globalAndroid.content.Context, param1: imagepipeline.core.ImagePipelineFactory, param2: java.util.Set<controller.ControllerListener<any>>, param3: DraweeConfig);
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
                    export class PipelineDraweeControllerFactory {
                        public static class: java.lang.Class<PipelineDraweeControllerFactory>;
                        public constructor();
                        public internalCreateController(param0: globalAndroid.content.res.Resources, param1: components.DeferredReleaser, param2: imagepipeline.drawable.DrawableFactory, param3: java.util.concurrent.Executor, param4: imagepipeline.cache.MemoryCache<cache.common.CacheKey,imagepipeline.image.CloseableImage>, param5: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>): PipelineDraweeController;
                        public newController(): PipelineDraweeController;
                        public init(param0: globalAndroid.content.res.Resources, param1: components.DeferredReleaser, param2: imagepipeline.drawable.DrawableFactory, param3: java.util.concurrent.Executor, param4: imagepipeline.cache.MemoryCache<cache.common.CacheKey,imagepipeline.image.CloseableImage>, param5: common.internal.ImmutableList<imagepipeline.drawable.DrawableFactory>, param6: common.internal.Supplier<java.lang.Boolean>): void;
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
                    export namespace debug {
                        export class DebugOverlayImageOriginListener extends info.ImageOriginListener {
                            public static class: java.lang.Class<DebugOverlayImageOriginListener>;
                            public constructor();
                            public getImageOrigin(): string;
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
                        export class ForwardingImageOriginListener extends ImageOriginListener {
                            public static class: java.lang.Class<ForwardingImageOriginListener>;
                            public removeImageOriginListener(param0: ImageOriginListener): void;
                            public onImageLoaded(param0: string, param1: number, param2: boolean, param3: string): void;
                            public constructor(param0: native.Array<ImageOriginListener>);
                            public addImageOriginListener(param0: ImageOriginListener): void;
                            public constructor(param0: java.util.Set<ImageOriginListener>);
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
                        export class ForwardingImagePerfDataListener extends ImagePerfDataListener {
                            public static class: java.lang.Class<ForwardingImagePerfDataListener>;
                            public constructor(param0: java.util.Collection<ImagePerfDataListener>);
                            public onImageLoadStatusUpdated(param0: ImagePerfData, param1: number): void;
                            public onImageVisibilityUpdated(param0: ImagePerfData, param1: number): void;
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
                        export class ImageLoadStatus {
                            public static class: java.lang.Class<ImageLoadStatus>;
                            /**
							 * Constructs a new instance of the com.facebook.drawee.backends.pipeline.info.ImageLoadStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
                            public constructor(implementation: {
                            });
                            public constructor();
                            public static INTERMEDIATE_AVAILABLE: number;
                            public static UNKNOWN: number;
                            public static REQUESTED: number;
                            public static ERROR: number;
                            public static SUCCESS: number;
                            public static ORIGIN_AVAILABLE: number;
                            public static CANCELED: number;
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
                            public static class: java.lang.Class<ImageOrigin>;
                            /**
							 * Constructs a new instance of the com.facebook.drawee.backends.pipeline.info.ImageOrigin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
                            public constructor(implementation: {
                            });
                            public constructor();
                            public static LOCAL: number;
                            public static UNKNOWN: number;
                            public static DISK: number;
                            public static MEMORY_BITMAP: number;
                            public static NETWORK: number;
                            public static MEMORY_ENCODED: number;
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
                            public static class: java.lang.Class<ImageOriginListener>;
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
                        export class ImageOriginRequestListener extends imagepipeline.listener.BaseRequestListener {
                            public static class: java.lang.Class<ImageOriginRequestListener>;
                            public constructor();
                            public onRequestStart(param0: imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
                            public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
                            public constructor(param0: string, param1: ImageOriginListener);
                            public onRequestSuccess(param0: imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
                            public onRequestCancellation(param0: string): void;
                            public init(param0: string): void;
                            public onRequestFailure(param0: imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
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
                            public static class: java.lang.Class<ImageOriginUtils>;
                            public static toString(param0: number): string;
                            public static mapProducerNameToImageOrigin(param0: string): number;
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
                        export class ImagePerfData {
                            public static class: java.lang.Class<ImagePerfData>;
                            public static UNSET: number;
                            public getImageRequest(): imagepipeline.request.ImageRequest;
                            public getCallerContext(): any;
                            public isPrefetch(): boolean;
                            public getOnScreenHeightPx(): number;
                            public getImageOrigin(): number;
                            public getImageRequestStartTimeMs(): number;
                            public getOnScreenWidthPx(): number;
                            public constructor(param0: string, param1: string, param2: imagepipeline.request.ImageRequest, param3: any, param4: imagepipeline.image.ImageInfo, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: string, param14: boolean, param15: number, param16: number, param17: number, param18: number, param19: number, param20: string);
                            public getInvisibilityEventTimeMs(): number;
                            public getVisibilityState(): number;
                            public getControllerFinalImageSetTimeMs(): number;
                            public getControllerFailureTimeMs(): number;
                            public getImageRequestEndTimeMs(): number;
                            public getRequestId(): string;
                            public getFinalImageLoadTimeMs(): number;
                            public getImageInfo(): imagepipeline.image.ImageInfo;
                            public getControllerIntermediateImageSetTimeMs(): number;
                            public getUltimateProducerName(): string;
                            public getVisibilityEventTimeMs(): number;
                            public createDebugString(): string;
                            public getControllerSubmitTimeMs(): number;
                            public getComponentTag(): string;
                            public getControllerId(): string;
                            public getIntermediateImageLoadTimeMs(): number;
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
                        export class ImagePerfDataListener {
                            public static class: java.lang.Class<ImagePerfDataListener>;
                            /**
							 * Constructs a new instance of the com.facebook.drawee.backends.pipeline.info.ImagePerfDataListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
                            public constructor(implementation: {
                                onImageLoadStatusUpdated(param0: ImagePerfData, param1: number): void;
                                onImageVisibilityUpdated(param0: ImagePerfData, param1: number): void;
                            });
                            public constructor();
                            public onImageLoadStatusUpdated(param0: ImagePerfData, param1: number): void;
                            public onImageVisibilityUpdated(param0: ImagePerfData, param1: number): void;
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
                        export class ImagePerfMonitor {
                            public static class: java.lang.Class<ImagePerfMonitor>;
                            public notifyListenersOfVisibilityStateUpdate(param0: ImagePerfState, param1: number): void;
                            public notifyStatusUpdated(param0: ImagePerfState, param1: number): void;
                            public removeImagePerfDataListener(param0: ImagePerfDataListener): void;
                            public setEnabled(param0: boolean): void;
                            public addViewportData(): void;
                            public constructor(param0: common.time.MonotonicClock, param1: PipelineDraweeController);
                            public clearImagePerfDataListeners(): void;
                            public addImagePerfDataListener(param0: ImagePerfDataListener): void;
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
                        export class ImagePerfState {
                            public static class: java.lang.Class<ImagePerfState>;
                            public getImageLoadStatus(): number;
                            public setComponentTag(param0: string): void;
                            public reset(): void;
                            public setControllerFinalImageSetTimeMs(param0: number): void;
                            public setInvisibilityEventTimeMs(param0: number): void;
                            public setControllerFailureTimeMs(param0: number): void;
                            public setCallerContext(param0: any): void;
                            public snapshot(): ImagePerfData;
                            public setPrefetch(param0: boolean): void;
                            public setImageInfo(param0: imagepipeline.image.ImageInfo): void;
                            public constructor();
                            public setImageOrigin(param0: number): void;
                            public setOnScreenWidth(param0: number): void;
                            public setVisible(param0: boolean): void;
                            public setImageRequest(param0: imagepipeline.request.ImageRequest): void;
                            public setControllerCancelTimeMs(param0: number): void;
                            public setImageRequestStartTimeMs(param0: number): void;
                            public setImageRequestEndTimeMs(param0: number): void;
                            public setUltimateProducerName(param0: string): void;
                            public setImageLoadStatus(param0: number): void;
                            public setControllerId(param0: string): void;
                            public setControllerSubmitTimeMs(param0: number): void;
                            public setControllerIntermediateImageSetTimeMs(param0: number): void;
                            public setRequestId(param0: string): void;
                            public setOnScreenHeight(param0: number): void;
                            public setVisibilityEventTimeMs(param0: number): void;
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
                        export class ImagePerfUtils {
                            public static class: java.lang.Class<ImagePerfUtils>;
                            public static toString(param0: number): string;
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
                        export class VisibilityState {
                            public static class: java.lang.Class<VisibilityState>;
                            /**
							 * Constructs a new instance of the com.facebook.drawee.backends.pipeline.info.VisibilityState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
                            public constructor(implementation: {
                            });
                            public constructor();
                            public static UNKNOWN: number;
                            public static VISIBLE: number;
                            public static INVISIBLE: number;
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
                            export class ImagePerfControllerListener extends controller.BaseControllerListener<imagepipeline.image.ImageInfo> {
                                public static class: java.lang.Class<ImagePerfControllerListener>;
                                public onRelease(param0: string): void;
                                public onSubmit(param0: string, param1: any): void;
                                public onFinalImageSet(param0: string, param1: any, param2: globalAndroid.graphics.drawable.Animatable): void;
                                public onFinalImageSet(param0: string, param1: imagepipeline.image.ImageInfo, param2: globalAndroid.graphics.drawable.Animatable): void;
                                public onFailure(param0: string, param1: java.lang.Throwable): void;
                                public constructor(param0: common.time.MonotonicClock, param1: ImagePerfState, param2: ImagePerfMonitor);
                                public reportViewVisible(param0: number): void;
                                public constructor();
                                public onIntermediateImageSet(param0: string, param1: imagepipeline.image.ImageInfo): void;
                                public onIntermediateImageSet(param0: string, param1: any): void;
                                public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
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
                            export class ImagePerfImageOriginListener extends ImageOriginListener {
                                public static class: java.lang.Class<ImagePerfImageOriginListener>;
                                public constructor(param0: ImagePerfState, param1: ImagePerfMonitor);
                                public onImageLoaded(param0: string, param1: number, param2: boolean, param3: string): void;
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
                            export class ImagePerfRequestListener extends imagepipeline.listener.BaseRequestListener {
                                public static class: java.lang.Class<ImagePerfRequestListener>;
                                public onRequestFailure(param0: imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
                                public onRequestCancellation(param0: string): void;
                                public constructor();
                                public onRequestStart(param0: imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
                                public onRequestSuccess(param0: imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
                                public constructor(param0: common.time.MonotonicClock, param1: ImagePerfState);
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
            export namespace components {
                export class DeferredReleaser {
                    public static class: java.lang.Class<DeferredReleaser>;
                    public constructor();
                    public scheduleDeferredRelease(param0: DeferredReleaser.Releasable): void;
                    public static getInstance(): DeferredReleaser;
                    public cancelDeferredRelease(param0: DeferredReleaser.Releasable): void;
                }
                export namespace DeferredReleaser {
                    export class Releasable {
                        public static class: java.lang.Class<Releasable>;
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

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace components {
                export class DraweeEventTracker {
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
                export class RetryManager {
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
                export abstract class AbstractDraweeController<T, INFO>  extends java.lang.Object {
                    public static class: java.lang.Class<AbstractDraweeController<any,any>>;
                    public mControllerListener: ControllerListener<INFO>;
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
                    export class InternalForwardingListener<INFO>  extends ForwardingControllerListener<any> {
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
                export abstract class AbstractDraweeControllerBuilder<BUILDER, REQUEST, IMAGE, INFO>  extends interfaces.SimpleDraweeControllerBuilder {
                    public static class: java.lang.Class<AbstractDraweeControllerBuilder<any,any,any,any>>;
                    public getDataSourceSupplierForRequest(param0: interfaces.DraweeController, param1: string, param2: any): common.internal.Supplier<datasource.DataSource<any>>;
                    public getRetainImageOnFailure(): boolean;
                    public setAutoPlayAnimations(param0: boolean): any;
                    public getFirstAvailableImageRequests(): native.Array<any>;
                    public setDataSourceSupplier(param0: common.internal.Supplier<datasource.DataSource<any>>): any;
                    public setOldController(param0: interfaces.DraweeController): any;
                    public getAutoPlayAnimations(): boolean;
                    public validate(): void;
                    public maybeAttachListeners(param0: AbstractDraweeController<any,any>): void;
                    public maybeBuildAndSetRetryManager(param0: AbstractDraweeController<any,any>): void;
                    public getContentDescription(): string;
                    public getImageRequest(): any;
                    public setControllerViewportVisibilityListener(param0: ControllerViewportVisibilityListener): any;
                    public build(): AbstractDraweeController<any,any>;
                    public getControllerListener(): ControllerListener<any>;
                    public setFirstAvailableImageRequests(param0: native.Array<any>, param1: boolean): any;
                    public getContext(): globalAndroid.content.Context;
                    public setImageRequest(param0: any): any;
                    public reset(): any;
                    public maybeBuildAndSetGestureDetector(param0: AbstractDraweeController<any,any>): void;
                    public setOldController(param0: interfaces.DraweeController): interfaces.SimpleDraweeControllerBuilder;
                    public obtainController(): AbstractDraweeController<any,any>;
                    public setUri(param0: string): interfaces.SimpleDraweeControllerBuilder;
                    public getDataSourceSupplierForRequest(param0: interfaces.DraweeController, param1: string, param2: any, param3: AbstractDraweeControllerBuilder.CacheLevel): common.internal.Supplier<datasource.DataSource<any>>;
                    public setCallerContext(param0: any): interfaces.SimpleDraweeControllerBuilder;
                    public build(): interfaces.DraweeController;
                    public setLowResImageRequest(param0: any): any;
                    public setCallerContext(param0: any): any;
                    public setTapToRetryEnabled(param0: boolean): any;
                    public getOldController(): interfaces.DraweeController;
                    public getLowResImageRequest(): any;
                    public setFirstAvailableImageRequests(param0: native.Array<any>): any;
                    public setRetainImageOnFailure(param0: boolean): any;
                    public getFirstAvailableDataSourceSupplier(param0: interfaces.DraweeController, param1: string, param2: native.Array<any>, param3: boolean): common.internal.Supplier<datasource.DataSource<any>>;
                    public getThis(): any;
                    public setControllerListener(param0: ControllerListener<any>): any;
                    public setContentDescription(param0: string): any;
                    public buildController(): AbstractDraweeController<any,any>;
                    public getControllerViewportVisibilityListener(): ControllerViewportVisibilityListener;
                    public getDataSourceForRequest(param0: interfaces.DraweeController, param1: string, param2: any, param3: any, param4: AbstractDraweeControllerBuilder.CacheLevel): datasource.DataSource<any>;
                    public static generateUniqueControllerId(): string;
                    public getCallerContext(): any;
                    public getDataSourceSupplier(): common.internal.Supplier<datasource.DataSource<any>>;
                    public obtainDataSourceSupplier(param0: interfaces.DraweeController, param1: string): common.internal.Supplier<datasource.DataSource<any>>;
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
                export class BaseControllerListener<INFO>  extends ControllerListener<any> {
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
                export class ControllerListener<INFO>  extends java.lang.Object {
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
                export class ControllerViewportVisibilityListener {
                    public static class: java.lang.Class<ControllerViewportVisibilityListener>;
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

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace controller {
                export class ForwardingControllerListener<INFO>  extends ControllerListener<any> {
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
                export class DebugControllerOverlayDrawable implements listener.ImageLoadingTimeListener {
                    public static class: java.lang.Class<DebugControllerOverlayDrawable>;
                    public addAdditionalData(param0: string, param1: string): void;
                    public setImageSize(param0: number): void;
                    public reset(): void;
                    public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                    public onFinalImageSet(param0: number): void;
                    public setImageId(param0: string): void;
                    public setAlpha(param0: number): void;
                    public setImageFormat(param0: string): void;
                    public setFinalImageTimeMs(param0: number): void;
                    public setTextGravity(param0: number): void;
                    public setOrigin(param0: string): void;
                    public setDimensions(param0: number, param1: number): void;
                    public constructor();
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setControllerId(param0: string): void;
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
                    export class ImageLoadingTimeListener {
                        public static class: java.lang.Class<ImageLoadingTimeListener>;
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

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class ArrayDrawable implements TransformCallback, TransformAwareDrawable {
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
                    public getPadding(param0: globalAndroid.graphics.Rect): boolean;
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
                export class AutoRotateDrawable extends ForwardingDrawable implements CloneableDrawable {
                    public static class: java.lang.Class<AutoRotateDrawable>;
                    public reset(): void;
                    public getRootBounds(param0: globalAndroid.graphics.RectF): void;
                    public cloneDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public run(): void;
                    public cloneDrawable(): AutoRotateDrawable;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                    public setClockwise(param0: boolean): void;
                    public getDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number);
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: boolean);
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
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
                export class CloneableDrawable {
                    public static class: java.lang.Class<CloneableDrawable>;
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

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class DrawableParent {
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
                export class DrawableProperties {
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
                export class DrawableUtils {
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
                    public constructor(param0: native.Array<globalAndroid.graphics.drawable.Drawable>, param1: boolean);
                    public beginBatchMode(): void;
                    public setTransitionDuration(param0: number): void;
                    public hideLayerImmediately(param0: number): void;
                    public constructor(param0: native.Array<globalAndroid.graphics.drawable.Drawable>);
                    public getCurrentTimeMs(): number;
                    public getTransitionState(): number;
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
                    public isDefaultLayerIsOn(): boolean;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public showLayerImmediately(param0: number): void;
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
                export class ForwardingDrawable implements TransformCallback, TransformAwareDrawable, DrawableParent {
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
                    public getPadding(param0: globalAndroid.graphics.Rect): boolean;
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
                    public setCurrent(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public getRootBounds(param0: globalAndroid.graphics.RectF): void;
                    public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public getMatrix(): globalAndroid.graphics.Matrix;
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Matrix);
                    public setMatrix(param0: globalAndroid.graphics.Matrix): void;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                    public setTransformCallback(param0: TransformCallback): void;
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
                export class OrientedDrawable extends ForwardingDrawable  {
                    public static class: java.lang.Class<OrientedDrawable>;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: number);
                    public getRootBounds(param0: globalAndroid.graphics.RectF): void;
                    public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number);
                    public getIntrinsicHeight(): number;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public getIntrinsicWidth(): number;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                    public setTransformCallback(param0: TransformCallback): void;
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
                export class Rounded {
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
                        setPaintFilterBitmap(param0: boolean): void;
                        getPaintFilterBitmap(): boolean;
                    });
                    public constructor();
                    public setScaleDownInsideBorders(param0: boolean): void;
                    public setBorder(param0: number, param1: number): void;
                    public getBorderColor(): number;
                    public getRadii(): native.Array<number>;
                    public setRadii(param0: native.Array<number>): void;
                    public getBorderWidth(): number;
                    public isCircle(): boolean;
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

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class RoundedBitmapDrawable extends RoundedDrawable {
                    public static class: java.lang.Class<RoundedBitmapDrawable>;
                    public setScaleDownInsideBorders(param0: boolean): void;
                    public setBorder(param0: number, param1: number): void;
                    public getBorderColor(): number;
                    public getRadii(): native.Array<number>;
                    public constructor(param0: globalAndroid.content.res.Resources, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.graphics.Paint);
                    public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                    public setRadii(param0: native.Array<number>): void;
                    public setAlpha(param0: number): void;
                    public static fromBitmapDrawable(param0: globalAndroid.content.res.Resources, param1: globalAndroid.graphics.drawable.BitmapDrawable): RoundedBitmapDrawable;
                    public getBorderWidth(): number;
                    public isCircle(): boolean;
                    public setPaintFilterBitmap(param0: boolean): void;
                    public setCircle(param0: boolean): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setPadding(param0: number): void;
                    public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
                    public setRadius(param0: number): void;
                    public getPaintFilterBitmap(): boolean;
                    public constructor(param0: globalAndroid.content.res.Resources, param1: globalAndroid.graphics.Bitmap);
                    public setTransformCallback(param0: TransformCallback): void;
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
                    public getBorderWidth(): number;
                    public setCircle(param0: boolean): void;
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
                    public setPaintFilterBitmap(param0: boolean): void;
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setPadding(param0: number): void;
                    public setRadius(param0: number): void;
                    public getPaintFilterBitmap(): boolean;
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
                    public setCircle(param0: boolean): void;
                    public getPadding(param0: globalAndroid.graphics.Rect): boolean;
                    public setOverlayColor(param0: number): void;
                    public setTransformCallback(param0: TransformCallback): void;
                    public setScaleDownInsideBorders(param0: boolean): void;
                    public setBorder(param0: number, param1: number): void;
                    public getRadii(): native.Array<number>;
                    public getOverlayColor(): number;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                    public setType(param0: RoundedCornersDrawable.Type): void;
                    public isCircle(): boolean;
                    public getPadding(): number;
                    public setPaintFilterBitmap(param0: boolean): void;
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public setPadding(param0: number): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setRadius(param0: number): void;
                    public getPaintFilterBitmap(): boolean;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public getScaleDownInsideBorders(): boolean;
                }
                export namespace RoundedCornersDrawable {
                    export class Type {
                        public static class: java.lang.Class<Type>;
                        public static OVERLAY_COLOR: Type;
                        public static CLIPPING: Type;
                        public static valueOf(param0: string): Type;
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
                export abstract class RoundedDrawable extends globalAndroid.graphics.drawable.Drawable implements Rounded, TransformAwareDrawable {
                    public static class: java.lang.Class<RoundedDrawable>;
                    public mIsCircle: boolean;
                    public mRadiiNonZero: boolean;
                    public mBorderWidth: number;
                    public mPath: globalAndroid.graphics.Path;
                    public mIsShaderTransformDirty: boolean;
                    public mBorderColor: number;
                    public mBorderPath: globalAndroid.graphics.Path;
                    public getBorderColor(): number;
                    public setRadii(param0: native.Array<number>): void;
                    public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                    public getIntrinsicWidth(): number;
                    public updateTransform(): void;
                    public getBorderWidth(): number;
                    public setCircle(param0: boolean): void;
                    public getColorFilter(): globalAndroid.graphics.ColorFilter;
                    public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
                    public setTransformCallback(param0: TransformCallback): void;
                    public getOpacity(): number;
                    public setScaleDownInsideBorders(param0: boolean): void;
                    public getAlpha(): number;
                    public setBorder(param0: number, param1: number): void;
                    public getRadii(): native.Array<number>;
                    public getIntrinsicHeight(): number;
                    public setAlpha(param0: number): void;
                    public clearColorFilter(): void;
                    public isCircle(): boolean;
                    public setPaintFilterBitmap(param0: boolean): void;
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public setPadding(param0: number): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setRadius(param0: number): void;
                    public getPaintFilterBitmap(): boolean;
                    public updatePath(): void;
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
                export class RoundedNinePatchDrawable extends RoundedDrawable {
                    public static class: java.lang.Class<RoundedNinePatchDrawable>;
                    public setScaleDownInsideBorders(param0: boolean): void;
                    public setBorder(param0: number, param1: number): void;
                    public getBorderColor(): number;
                    public getRadii(): native.Array<number>;
                    public setRadii(param0: native.Array<number>): void;
                    public getBorderWidth(): number;
                    public isCircle(): boolean;
                    public setPaintFilterBitmap(param0: boolean): void;
                    public setCircle(param0: boolean): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setPadding(param0: number): void;
                    public setRadius(param0: number): void;
                    public getPaintFilterBitmap(): boolean;
                    public constructor(param0: globalAndroid.graphics.drawable.NinePatchDrawable);
                    public setTransformCallback(param0: TransformCallback): void;
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
                    public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: ScalingUtils.ScaleType, param2: globalAndroid.graphics.PointF);
                    public setScaleType(param0: ScalingUtils.ScaleType): void;
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
                export class ScalingUtils {
                    public static class: java.lang.Class<ScalingUtils>;
                    public static getActiveScaleTypeDrawable(param0: globalAndroid.graphics.drawable.Drawable): ScaleTypeDrawable;
                    public constructor();
                }
                export namespace ScalingUtils {
                    export abstract class AbstractScaleType extends ScaleType {
                        public static class: java.lang.Class<AbstractScaleType>;
                        public constructor();
                        public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
                        public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                    }
                    export class InterpolatingScaleType implements ScaleType, StatefulScaleType {
                        public static class: java.lang.Class<InterpolatingScaleType>;
                        public constructor(param0: ScaleType, param1: ScaleType);
                        public getScaleTypeFrom(): ScaleType;
                        public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
                        public getFocusPointFrom(): globalAndroid.graphics.PointF;
                        public toString(): string;
                        public getBoundsTo(): globalAndroid.graphics.Rect;
                        public getBoundsFrom(): globalAndroid.graphics.Rect;
                        public getFocusPointTo(): globalAndroid.graphics.PointF;
                        public getScaleTypeTo(): ScaleType;
                        public constructor(param0: ScaleType, param1: ScaleType, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.Rect, param4: globalAndroid.graphics.PointF, param5: globalAndroid.graphics.PointF);
                        public constructor(param0: ScaleType, param1: ScaleType, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.Rect);
                        public setValue(param0: number): void;
                        public getState(): any;
                        public getValue(): number;
                    }
                    export class ScaleType {
                        public static class: java.lang.Class<ScaleType>;
                        /**
						 * Constructs a new instance of the com.facebook.drawee.drawable.ScalingUtils$ScaleType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
                        public constructor(implementation: {
                            getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
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
                        public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
                    }
                    export class ScaleTypeCenter extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeCenter>;
                        public static INSTANCE: ScaleType;
                        public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
                        public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        public toString(): string;
                    }
                    export class ScaleTypeCenterCrop extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeCenterCrop>;
                        public static INSTANCE: ScaleType;
                        public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
                        public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        public toString(): string;
                    }
                    export class ScaleTypeCenterInside extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeCenterInside>;
                        public static INSTANCE: ScaleType;
                        public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
                        public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        public toString(): string;
                    }
                    export class ScaleTypeFitBottomStart extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeFitBottomStart>;
                        public static INSTANCE: ScaleType;
                        public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
                        public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        public toString(): string;
                    }
                    export class ScaleTypeFitCenter extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeFitCenter>;
                        public static INSTANCE: ScaleType;
                        public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
                        public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        public toString(): string;
                    }
                    export class ScaleTypeFitEnd extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeFitEnd>;
                        public static INSTANCE: ScaleType;
                        public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
                        public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        public toString(): string;
                    }
                    export class ScaleTypeFitStart extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeFitStart>;
                        public static INSTANCE: ScaleType;
                        public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
                        public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        public toString(): string;
                    }
                    export class ScaleTypeFitXY extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeFitXY>;
                        public static INSTANCE: ScaleType;
                        public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
                        public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        public toString(): string;
                    }
                    export class ScaleTypeFocusCrop extends AbstractScaleType {
                        public static class: java.lang.Class<ScaleTypeFocusCrop>;
                        public static INSTANCE: ScaleType;
                        public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
                        public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        public toString(): string;
                    }
                    export class StatefulScaleType {
                        public static class: java.lang.Class<StatefulScaleType>;
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
        export namespace drawee {
            export namespace drawable {
                export class TransformAwareDrawable {
                    public static class: java.lang.Class<TransformAwareDrawable>;
                    /**
					 * Constructs a new instance of the com.facebook.drawee.drawable.TransformAwareDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        setTransformCallback(param0: TransformCallback): void;
                    });
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
                export class TransformCallback {
                    public static class: java.lang.Class<TransformCallback>;
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

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace drawable {
                export class VisibilityAwareDrawable {
                    public static class: java.lang.Class<VisibilityAwareDrawable>;
                    /**
					 * Constructs a new instance of the com.facebook.drawee.drawable.VisibilityAwareDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        setVisibilityCallback(param0: VisibilityCallback): void;
                    });
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
                export class VisibilityCallback {
                    public static class: java.lang.Class<VisibilityCallback>;
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

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace generic {
                export class GenericDraweeHierarchy extends interfaces.SettableDraweeHierarchy {
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
                    public hasImage(): boolean;
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
                export class GenericDraweeHierarchyBuilder {
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
                export class GenericDraweeHierarchyInflater {
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
                    public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
                    public setVisible(param0: boolean, param1: boolean): boolean;
                    public setVisibilityCallback(param0: drawable.VisibilityCallback): void;
                    public draw(param0: globalAndroid.graphics.Canvas): void;
                    public setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public getIntrinsicHeight(): number;
                    public getTransform(param0: globalAndroid.graphics.Matrix): void;
                    public getIntrinsicWidth(): number;
                    public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                    public setTransformCallback(param0: drawable.TransformCallback): void;
                    public getDrawable(): globalAndroid.graphics.drawable.Drawable;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace generic {
                export class RoundingParams {
                    public static class: java.lang.Class<RoundingParams>;
                    public setPaintFilterBitmap(param0: boolean): RoundingParams;
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
                    public getPaintFilterBitmap(): boolean;
                    public setCornersRadii(param0: native.Array<number>): RoundingParams;
                    public getScaleDownInsideBorders(): boolean;
                }
                export namespace RoundingParams {
                    export class RoundingMethod {
                        public static class: java.lang.Class<RoundingMethod>;
                        public static OVERLAY_COLOR: RoundingMethod;
                        public static BITMAP_ONLY: RoundingMethod;
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
                export class WrappingUtils {
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
                export class GestureDetector {
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
                    export class ClickListener {
                        public static class: java.lang.Class<ClickListener>;
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

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace interfaces {
                export class DraweeController {
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
                export class DraweeHierarchy {
                    public static class: java.lang.Class<DraweeHierarchy>;
                    /**
					 * Constructs a new instance of the com.facebook.drawee.interfaces.DraweeHierarchy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
                    });
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
                export class SettableDraweeHierarchy extends DraweeHierarchy {
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
                export class SimpleDraweeControllerBuilder {
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
                export class AspectRatioMeasure {
                    public static class: java.lang.Class<AspectRatioMeasure>;
                    public constructor();
                    public static updateMeasureSpec(param0: AspectRatioMeasure.Spec, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams, param3: number, param4: number): void;
                }
                export namespace AspectRatioMeasure {
                    export class Spec {
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
                export class DraweeHolder<DH>  extends drawable.VisibilityCallback {
                    public static class: java.lang.Class<DraweeHolder<any>>;
                    public static create(param0: interfaces.DraweeHierarchy, param1: globalAndroid.content.Context): DraweeHolder<any>;
                    public hasHierarchy(): boolean;
                    public isControllerValid(): boolean;
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
                    public createAnimator(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.transition.TransitionValues, param2: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
                    public constructor(param0: drawable.ScalingUtils.ScaleType, param1: drawable.ScalingUtils.ScaleType, param2: globalAndroid.graphics.PointF, param3: globalAndroid.graphics.PointF);
                    public captureEndValues(param0: globalAndroid.transition.TransitionValues): void;
                    public static createTransitionSet(param0: drawable.ScalingUtils.ScaleType, param1: drawable.ScalingUtils.ScaleType): globalAndroid.transition.TransitionSet;
                    public static createTransitionSet(param0: drawable.ScalingUtils.ScaleType, param1: drawable.ScalingUtils.ScaleType, param2: globalAndroid.graphics.PointF, param3: globalAndroid.graphics.PointF): globalAndroid.transition.TransitionSet;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace view {
                export class DraweeView<DH>  extends globalAndroid.widget.ImageView {
                    public static class: java.lang.Class<DraweeView<any>>;
                    public static setGlobalLegacyVisibilityHandlingEnabled(param0: boolean): void;
                    public setAspectRatio(param0: number): void;
                    public getAspectRatio(): number;
                    public doDetach(): void;
                    public onAttach(): void;
                    public onAttachedToWindow(): void;
                    public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
                    public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public getHierarchy(): any;
                    public toString(): string;
                    public onFinishTemporaryDetach(): void;
                    public setLegacyVisibilityHandlingEnabled(param0: boolean): void;
                    /** @deprecated */
                    public setImageResource(param0: number): void;
                    public onDetach(): void;
                    public onDetachedFromWindow(): void;
                    public onMeasure(param0: number, param1: number): void;
                    public hasHierarchy(): boolean;
                    public hasController(): boolean;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                    public doAttach(): void;
                    public onStartTemporaryDetach(): void;
                    /** @deprecated */
                    public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public constructor(param0: globalAndroid.content.Context);
                    public setController(param0: interfaces.DraweeController): void;
                    /** @deprecated */
                    public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
                    public setHierarchy(param0: any): void;
                    /** @deprecated */
                    public setImageURI(param0: globalAndroid.net.Uri): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public getController(): interfaces.DraweeController;
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
                    public constructor(param0: globalAndroid.content.Context);
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public inflateHierarchy(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                    public constructor(param0: globalAndroid.content.Context, param1: generic.GenericDraweeHierarchy);
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace drawee {
            export namespace view {
                export class MultiDraweeHolder<DH>  extends java.lang.Object {
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
                    public getControllerBuilder(): controller.AbstractDraweeControllerBuilder<any,any,any,any>;
                    public static shutDown(): void;
                    public constructor(param0: globalAndroid.content.Context, param1: generic.GenericDraweeHierarchy);
                    public setImageRequest(param0: imagepipeline.request.ImageRequest): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                    public setActualImageResource(param0: number): void;
                    public static initialize(param0: common.internal.Supplier<any>): void;
                    public constructor(param0: globalAndroid.content.Context);
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public setImageURI(param0: globalAndroid.net.Uri): void;
                    public setImageURI(param0: string): void;
                    public setImageURI(param0: globalAndroid.net.Uri, param1: any): void;
                    public setImageURI(param0: string, param1: any): void;
                    /** @deprecated */
                    public setImageURI(param0: globalAndroid.net.Uri): void;
                    public setActualImageResource(param0: number, param1: any): void;
                    /** @deprecated */
                    public setImageResource(param0: number): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                    public setImageResource(param0: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace fbcore {
            export class BuildConfig {
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
        export namespace imageformat {
            export class DefaultImageFormatChecker extends ImageFormat.FormatChecker {
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
            export class DefaultImageFormats {
                public static class: java.lang.Class<DefaultImageFormats>;
                public static JPEG: ImageFormat;
                public static PNG: ImageFormat;
                public static GIF: ImageFormat;
                public static BMP: ImageFormat;
                public static ICO: ImageFormat;
                public static WEBP_SIMPLE: ImageFormat;
                public static WEBP_LOSSLESS: ImageFormat;
                public static WEBP_EXTENDED: ImageFormat;
                public static WEBP_EXTENDED_WITH_ALPHA: ImageFormat;
                public static WEBP_ANIMATED: ImageFormat;
                public static HEIF: ImageFormat;
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
            export class ImageFormat {
                public static class: java.lang.Class<ImageFormat>;
                public static UNKNOWN: ImageFormat;
                public getName(): string;
                public getFileExtension(): string;
                public toString(): string;
                public constructor(param0: string, param1: string);
            }
            export namespace ImageFormat {
                export class FormatChecker {
                    public static class: java.lang.Class<FormatChecker>;
                    /**
					 * Constructs a new instance of the com.facebook.imageformat.ImageFormat$FormatChecker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        getHeaderSize(): number;
                        determineFormat(param0: native.Array<number>, param1: number): ImageFormat;
                    });
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
            export class ImageFormatChecker {
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
            export class ImageFormatCheckerUtils {
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
            export class BuildConfig {
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
                export namespace factory {
                    export class AnimatedFactory {
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
                    export class AnimatedFactoryProvider {
                        public static class: java.lang.Class<AnimatedFactoryProvider>;
                        public constructor();
                        public static getAnimatedFactory(param0: bitmaps.PlatformBitmapFactory, param1: core.ExecutorSupplier, param2: cache.CountingMemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>, param3: boolean): AnimatedFactory;
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
                    public constructor(param0: memory.BitmapPool, param1: core.CloseableReferenceFactory);
                    public constructor();
                    public createBitmapInternal(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
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
                    public createBitmapInternal(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace bitmaps {
                export class HoneycombBitmapCreator extends facebook.common.webp.BitmapCreator {
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
                    public constructor();
                    public createBitmapInternal(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor(param0: EmptyJpegGenerator, param1: platform.PlatformDecoder, param2: core.CloseableReferenceFactory);
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
                    public static class: java.lang.Class<PlatformBitmapFactory>;
                    public createBitmap(param0: globalAndroid.util.DisplayMetrics, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: globalAndroid.graphics.Bitmap.Config, param7: any): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmapInternal(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: number, param1: number, param2: any): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: native.Array<number>, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap.Config, param4: any): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: number, param1: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: globalAndroid.util.DisplayMetrics, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap.Config, param4: any): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: globalAndroid.graphics.Matrix, param6: boolean): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: globalAndroid.util.DisplayMetrics, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: globalAndroid.graphics.Bitmap.Config): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createScaledBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: boolean, param4: any): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: globalAndroid.graphics.Bitmap): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor();
                    public createBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config, param3: any): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: any): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: globalAndroid.graphics.Matrix, param6: boolean, param7: any): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: globalAndroid.util.DisplayMetrics, param1: native.Array<number>, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap.Config): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: globalAndroid.util.DisplayMetrics, param1: native.Array<number>, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap.Config, param5: any): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: globalAndroid.util.DisplayMetrics, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap.Config): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: native.Array<number>, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap.Config): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createBitmap(param0: globalAndroid.graphics.Bitmap, param1: any): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public createScaledBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: boolean): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
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
                    public static class: java.lang.Class<PlatformBitmapFactoryProvider>;
                    public constructor();
                    public static buildPlatformBitmapFactory(param0: memory.PoolFactory, param1: platform.PlatformDecoder, param2: core.CloseableReferenceFactory): PlatformBitmapFactory;
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
                export class BitmapCountingMemoryCacheFactory {
                    public static class: java.lang.Class<BitmapCountingMemoryCacheFactory>;
                    public static get(param0: facebook.common.internal.Supplier<MemoryCacheParams>, param1: facebook.common.memory.MemoryTrimmableRegistry, param2: CountingMemoryCache.CacheTrimStrategy): CountingMemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>;
                    public constructor();
                    public static get(param0: facebook.common.internal.Supplier<MemoryCacheParams>, param1: facebook.common.memory.MemoryTrimmableRegistry): CountingMemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>;
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
                    public static class: java.lang.Class<BitmapMemoryCacheFactory>;
                    public static get(param0: CountingMemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>, param1: ImageCacheStatsTracker): InstrumentedMemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>;
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
                export class BitmapMemoryCacheKey extends facebook.cache.common.CacheKey {
                    public static class: java.lang.Class<BitmapMemoryCacheKey>;
                    public equals(param0: any): boolean;
                    public getUriString(): string;
                    public toString(): string;
                    public containsUri(param0: globalAndroid.net.Uri): boolean;
                    public constructor(param0: string, param1: common.ResizeOptions, param2: common.RotationOptions, param3: common.ImageDecodeOptions, param4: facebook.cache.common.CacheKey, param5: string, param6: any);
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
                export class BitmapMemoryCacheTrimStrategy extends CountingMemoryCache.CacheTrimStrategy {
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
                export class BufferedDiskCache {
                    public static class: java.lang.Class<BufferedDiskCache>;
                    public get(param0: facebook.cache.common.CacheKey, param1: java.util.concurrent.atomic.AtomicBoolean): bolts.Task<image.EncodedImage>;
                    public contains(param0: facebook.cache.common.CacheKey): bolts.Task<java.lang.Boolean>;
                    public remove(param0: facebook.cache.common.CacheKey): bolts.Task<java.lang.Void>;
                    public containsSync(param0: facebook.cache.common.CacheKey): boolean;
                    public put(param0: facebook.cache.common.CacheKey, param1: image.EncodedImage): void;
                    public diskCheckSync(param0: facebook.cache.common.CacheKey): boolean;
                    public clearAll(): bolts.Task<java.lang.Void>;
                    public getSize(): number;
                    public constructor(param0: facebook.cache.disk.FileCache, param1: facebook.common.memory.PooledByteBufferFactory, param2: facebook.common.memory.PooledByteStreams, param3: java.util.concurrent.Executor, param4: java.util.concurrent.Executor, param5: ImageCacheStatsTracker);
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
                export class CountingLruMap<K, V>  extends java.lang.Object {
                    public static class: java.lang.Class<CountingLruMap<any,any>>;
                    public getCount(): number;
                    public contains(param0: K): boolean;
                    public constructor(param0: ValueDescriptor<V>);
                    public put(param0: K, param1: V): V;
                    public clear(): java.util.ArrayList<V>;
                    public getMatchingEntries(param0: facebook.common.internal.Predicate<K>): java.util.ArrayList<java.util.Map.Entry<K,V>>;
                    public getFirstKey(): K;
                    public getSizeInBytes(): number;
                    public get(param0: K): V;
                    public removeAll(param0: facebook.common.internal.Predicate<K>): java.util.ArrayList<V>;
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
                export class CountingMemoryCache<K, V>  extends java.lang.Object {
                    public static class: java.lang.Class<CountingMemoryCache<any,any>>;
                    public mMemoryCacheParams: MemoryCacheParams;
                    public cache(param0: K, param1: facebook.common.references.CloseableReference<V>, param2: CountingMemoryCache.EntryStateObserver<K>): facebook.common.references.CloseableReference<V>;
                    public contains(param0: K): boolean;
                    public getCount(): number;
                    public removeAll(param0: facebook.common.internal.Predicate<K>): number;
                    public constructor(param0: ValueDescriptor<V>, param1: CountingMemoryCache.CacheTrimStrategy, param2: facebook.common.internal.Supplier<MemoryCacheParams>);
                    public get(param0: K): facebook.common.references.CloseableReference<V>;
                    public getSizeInBytes(): number;
                    public getEvictionQueueCount(): number;
                    public contains(param0: facebook.common.internal.Predicate<K>): boolean;
                    public reuse(param0: K): facebook.common.references.CloseableReference<V>;
                    public trim(param0: facebook.common.memory.MemoryTrimType): void;
                    public clear(): void;
                    public cache(param0: K, param1: facebook.common.references.CloseableReference<V>): facebook.common.references.CloseableReference<V>;
                    public getInUseCount(): number;
                    public getInUseSizeInBytes(): number;
                    public getEvictionQueueSizeInBytes(): number;
                }
                export namespace CountingMemoryCache {
                    export class CacheTrimStrategy {
                        public static class: java.lang.Class<CacheTrimStrategy>;
                        /**
						 * Constructs a new instance of the com.facebook.imagepipeline.cache.CountingMemoryCache$CacheTrimStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
                        public constructor(implementation: {
                            getTrimRatio(param0: facebook.common.memory.MemoryTrimType): number;
                        });
                        public constructor();
                        public getTrimRatio(param0: facebook.common.memory.MemoryTrimType): number;
                    }
                    export class Entry<K, V>  extends java.lang.Object {
                        public static class: java.lang.Class<Entry<any,any>>;
                        public key: K;
                        public valueRef: facebook.common.references.CloseableReference<V>;
                        public clientCount: number;
                        public isOrphan: boolean;
                        public observer: EntryStateObserver<K>;
                    }
                    export class EntryStateObserver<K>  extends java.lang.Object {
                        public static class: java.lang.Class<EntryStateObserver<any>>;
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
                export class DefaultCacheKeyFactory extends CacheKeyFactory {
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
                export class EncodedCountingMemoryCacheFactory {
                    public static class: java.lang.Class<EncodedCountingMemoryCacheFactory>;
                    public constructor();
                    public static get(param0: facebook.common.internal.Supplier<MemoryCacheParams>, param1: facebook.common.memory.MemoryTrimmableRegistry): CountingMemoryCache<facebook.cache.common.CacheKey,facebook.common.memory.PooledByteBuffer>;
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
                    public static class: java.lang.Class<EncodedMemoryCacheFactory>;
                    public static get(param0: CountingMemoryCache<facebook.cache.common.CacheKey,facebook.common.memory.PooledByteBuffer>, param1: ImageCacheStatsTracker): InstrumentedMemoryCache<facebook.cache.common.CacheKey,facebook.common.memory.PooledByteBuffer>;
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
                        onDiskCacheHit(param0: facebook.cache.common.CacheKey): void;
                        onDiskCacheMiss(): void;
                        onDiskCacheGetFail(): void;
                        registerBitmapMemoryCache(param0: CountingMemoryCache<any,any>): void;
                        registerEncodedMemoryCache(param0: CountingMemoryCache<any,any>): void;
                    });
                    public constructor();
                    public onStagingAreaHit(param0: facebook.cache.common.CacheKey): void;
                    public onMemoryCacheMiss(): void;
                    public onDiskCacheHit(param0: facebook.cache.common.CacheKey): void;
                    public onStagingAreaMiss(): void;
                    public registerBitmapMemoryCache(param0: CountingMemoryCache<any,any>): void;
                    public onBitmapCacheHit(param0: facebook.cache.common.CacheKey): void;
                    public onMemoryCacheHit(param0: facebook.cache.common.CacheKey): void;
                    public onDiskCacheGetFail(): void;
                    public onBitmapCachePut(): void;
                    public onMemoryCachePut(): void;
                    public onBitmapCacheMiss(): void;
                    public registerEncodedMemoryCache(param0: CountingMemoryCache<any,any>): void;
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
                export class InstrumentedMemoryCache<K, V>  extends MemoryCache<any,any> {
                    public static class: java.lang.Class<InstrumentedMemoryCache<any,any>>;
                    public constructor(param0: MemoryCache<any,any>, param1: MemoryCacheTracker<any>);
                    public removeAll(param0: facebook.common.internal.Predicate<any>): number;
                    public contains(param0: facebook.common.internal.Predicate<any>): boolean;
                    public get(param0: any): facebook.common.references.CloseableReference<any>;
                    public contains(param0: any): boolean;
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
                export class MemoryCache<K, V>  extends java.lang.Object {
                    public static class: java.lang.Class<MemoryCache<any,any>>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.MemoryCache<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        cache(param0: K, param1: facebook.common.references.CloseableReference<V>): facebook.common.references.CloseableReference<V>;
                        get(param0: K): facebook.common.references.CloseableReference<V>;
                        removeAll(param0: facebook.common.internal.Predicate<K>): number;
                        contains(param0: facebook.common.internal.Predicate<K>): boolean;
                        contains(param0: K): boolean;
                    });
                    public constructor();
                    public contains(param0: facebook.common.internal.Predicate<K>): boolean;
                    public contains(param0: K): boolean;
                    public removeAll(param0: facebook.common.internal.Predicate<K>): number;
                    public cache(param0: K, param1: facebook.common.references.CloseableReference<V>): facebook.common.references.CloseableReference<V>;
                    public get(param0: K): facebook.common.references.CloseableReference<V>;
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
                    public static class: java.lang.Class<MemoryCacheParams>;
                    public maxCacheSize: number;
                    public maxCacheEntries: number;
                    public maxEvictionQueueSize: number;
                    public maxEvictionQueueEntries: number;
                    public maxCacheEntrySize: number;
                    public paramsCheckIntervalMs: number;
                    public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
                    public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
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
                    public static class: java.lang.Class<MemoryCacheTracker<any>>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.MemoryCacheTracker<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        onCacheHit(param0: K): void;
                        onCacheMiss(): void;
                        onCachePut(): void;
                    });
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
                export class NativeMemoryCacheTrimStrategy extends CountingMemoryCache.CacheTrimStrategy {
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
                export class NoOpImageCacheStatsTracker extends ImageCacheStatsTracker {
                    public static class: java.lang.Class<NoOpImageCacheStatsTracker>;
                    public onStagingAreaHit(param0: facebook.cache.common.CacheKey): void;
                    public onMemoryCacheMiss(): void;
                    public static getInstance(): NoOpImageCacheStatsTracker;
                    public onDiskCacheHit(param0: facebook.cache.common.CacheKey): void;
                    public onStagingAreaMiss(): void;
                    public registerBitmapMemoryCache(param0: CountingMemoryCache<any,any>): void;
                    public onBitmapCacheHit(param0: facebook.cache.common.CacheKey): void;
                    public onMemoryCacheHit(param0: facebook.cache.common.CacheKey): void;
                    public onDiskCacheGetFail(): void;
                    public onBitmapCachePut(): void;
                    public onMemoryCachePut(): void;
                    public onBitmapCacheMiss(): void;
                    public registerEncodedMemoryCache(param0: CountingMemoryCache<any,any>): void;
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
                export class StagingArea {
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
                export class ValueDescriptor<V>  extends java.lang.Object {
                    public static class: java.lang.Class<ValueDescriptor<any>>;
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
                export class ImageDecodeOptions {
                    public static class: java.lang.Class<ImageDecodeOptions>;
                    public minDecodeIntervalMs: number;
                    public decodePreviewFrame: boolean;
                    public useLastFrameForPreview: boolean;
                    public decodeAllFrames: boolean;
                    public forceStaticImage: boolean;
                    public bitmapConfig: globalAndroid.graphics.Bitmap.Config;
                    public customImageDecoder: decoder.ImageDecoder;
                    public bitmapTransformation: transformation.BitmapTransformation;
                    public colorSpace: globalAndroid.graphics.ColorSpace;
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
                export class ImageDecodeOptionsBuilder {
                    public static class: java.lang.Class<ImageDecodeOptionsBuilder>;
                    public setCustomImageDecoder(param0: decoder.ImageDecoder): ImageDecodeOptionsBuilder;
                    public getDecodePreviewFrame(): boolean;
                    public build(): ImageDecodeOptions;
                    public setBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): ImageDecodeOptionsBuilder;
                    public getCustomImageDecoder(): decoder.ImageDecoder;
                    public setBitmapTransformation(param0: transformation.BitmapTransformation): ImageDecodeOptionsBuilder;
                    public setColorSpace(param0: globalAndroid.graphics.ColorSpace): ImageDecodeOptionsBuilder;
                    public setFrom(param0: ImageDecodeOptions): ImageDecodeOptionsBuilder;
                    public setMinDecodeIntervalMs(param0: number): ImageDecodeOptionsBuilder;
                    public setForceStaticImage(param0: boolean): ImageDecodeOptionsBuilder;
                    public getBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
                    public getUseLastFrameForPreview(): boolean;
                    public getMinDecodeIntervalMs(): number;
                    public getForceStaticImage(): boolean;
                    public constructor();
                    public getColorSpace(): globalAndroid.graphics.ColorSpace;
                    public getBitmapTransformation(): transformation.BitmapTransformation;
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
                export class ResizeOptions {
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
                export class RotationOptions {
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
                    export class RotationAngle {
                        public static class: java.lang.Class<RotationAngle>;
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
                    public static class: java.lang.Class<SourceUriType>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.common.SourceUriType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                    });
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
                    public static class: java.lang.Class<TooManyBitmapsException>;
                    public constructor(param0: string);
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
                export class CloseableReferenceFactory {
                    public static class: java.lang.Class<CloseableReferenceFactory>;
                    public constructor(param0: debug.CloseableReferenceLeakTracker);
                    public create(param0: any, param1: facebook.common.references.ResourceReleaser<any>): facebook.common.references.CloseableReference<any>;
                    public create(param0: java.io.Closeable): facebook.common.references.CloseableReference<any>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace core {
                export class DefaultExecutorSupplier extends ExecutorSupplier {
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
                export class DiskStorageCacheFactory extends FileCacheFactory {
                    public static class: java.lang.Class<DiskStorageCacheFactory>;
                    public static buildDiskStorageCache(param0: facebook.cache.disk.DiskCacheConfig, param1: facebook.cache.disk.DiskStorage): facebook.cache.disk.DiskStorageCache;
                    public static buildDiskStorageCache(param0: facebook.cache.disk.DiskCacheConfig, param1: facebook.cache.disk.DiskStorage, param2: java.util.concurrent.Executor): facebook.cache.disk.DiskStorageCache;
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
                export class DiskStorageFactory {
                    public static class: java.lang.Class<DiskStorageFactory>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.DiskStorageFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        get(param0: facebook.cache.disk.DiskCacheConfig): facebook.cache.disk.DiskStorage;
                    });
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
                export class DynamicDefaultDiskStorageFactory extends DiskStorageFactory {
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
                export class ExecutorSupplier {
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
                export class FileCacheFactory {
                    public static class: java.lang.Class<FileCacheFactory>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.FileCacheFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        get(param0: facebook.cache.disk.DiskCacheConfig): facebook.cache.disk.FileCache;
                    });
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
                export class ImagePipeline {
                    public static class: java.lang.Class<ImagePipeline>;
                    public getDataSourceSupplier(param0: request.ImageRequest, param1: any, param2: request.ImageRequest.RequestLevel, param3: listener.RequestListener): facebook.common.internal.Supplier<facebook.datasource.DataSource<facebook.common.references.CloseableReference<image.CloseableImage>>>;
                    public fetchDecodedImage(param0: request.ImageRequest, param1: any, param2: listener.RequestListener): facebook.datasource.DataSource<facebook.common.references.CloseableReference<image.CloseableImage>>;
                    public generateUniqueFutureId(): string;
                    public fetchDecodedImage(param0: request.ImageRequest, param1: any, param2: request.ImageRequest.RequestLevel, param3: listener.RequestListener): facebook.datasource.DataSource<facebook.common.references.CloseableReference<image.CloseableImage>>;
                    public getUsedDiskCacheSize(): number;
                    public isInDiskCache(param0: globalAndroid.net.Uri): facebook.datasource.DataSource<java.lang.Boolean>;
                    public fetchDecodedImage(param0: request.ImageRequest, param1: any): facebook.datasource.DataSource<facebook.common.references.CloseableReference<image.CloseableImage>>;
                    public evictFromDiskCache(param0: request.ImageRequest): void;
                    public isInBitmapMemoryCache(param0: request.ImageRequest): boolean;
                    public evictFromMemoryCache(param0: globalAndroid.net.Uri): void;
                    public isPaused(): boolean;
                    public getCacheKeyFactory(): cache.CacheKeyFactory;
                    public fetchImageFromBitmapCache(param0: request.ImageRequest, param1: any): facebook.datasource.DataSource<facebook.common.references.CloseableReference<image.CloseableImage>>;
                    public getCacheKey(param0: request.ImageRequest, param1: any): facebook.cache.common.CacheKey;
                    public prefetchToDiskCache(param0: request.ImageRequest, param1: any): facebook.datasource.DataSource<java.lang.Void>;
                    public pause(): void;
                    public fetchEncodedImage(param0: request.ImageRequest, param1: any, param2: listener.RequestListener): facebook.datasource.DataSource<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>>;
                    public clearDiskCaches(): void;
                    public getRequestListenerForRequest(param0: request.ImageRequest, param1: listener.RequestListener): listener.RequestListener;
                    public prefetchToDiskCache(param0: request.ImageRequest, param1: any, param2: common.Priority): facebook.datasource.DataSource<java.lang.Void>;
                    public isInDiskCacheSync(param0: request.ImageRequest): boolean;
                    public hasCachedImage(param0: facebook.cache.common.CacheKey): boolean;
                    public submitFetchRequest(param0: producers.Producer<any>, param1: producers.SettableProducerContext, param2: listener.RequestListener): facebook.datasource.DataSource<any>;
                    public isLazyDataSource(): facebook.common.internal.Supplier<java.lang.Boolean>;
                    public fetchDecodedImage(param0: request.ImageRequest, param1: any, param2: request.ImageRequest.RequestLevel): facebook.datasource.DataSource<facebook.common.references.CloseableReference<image.CloseableImage>>;
                    public isInDiskCacheSync(param0: globalAndroid.net.Uri, param1: request.ImageRequest.CacheChoice): boolean;
                    public isInDiskCache(param0: request.ImageRequest): facebook.datasource.DataSource<java.lang.Boolean>;
                    public evictFromDiskCache(param0: globalAndroid.net.Uri): void;
                    public getEncodedImageDataSourceSupplier(param0: request.ImageRequest, param1: any): facebook.common.internal.Supplier<facebook.datasource.DataSource<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>>>;
                    public isInDiskCacheSync(param0: globalAndroid.net.Uri): boolean;
                    public constructor(param0: ProducerSequenceFactory, param1: java.util.Set<listener.RequestListener>, param2: facebook.common.internal.Supplier<java.lang.Boolean>, param3: cache.MemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>, param4: cache.MemoryCache<facebook.cache.common.CacheKey,facebook.common.memory.PooledByteBuffer>, param5: cache.BufferedDiskCache, param6: cache.BufferedDiskCache, param7: cache.CacheKeyFactory, param8: producers.ThreadHandoffProducerQueue, param9: facebook.common.internal.Supplier<java.lang.Boolean>, param10: facebook.common.internal.Supplier<java.lang.Boolean>, param11: callercontext.CallerContextVerifier);
                    public clearMemoryCaches(): void;
                    public prefetchToBitmapCache(param0: request.ImageRequest, param1: any): facebook.datasource.DataSource<java.lang.Void>;
                    public fetchEncodedImage(param0: request.ImageRequest, param1: any): facebook.datasource.DataSource<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>>;
                    public getProducerSequenceFactory(): ProducerSequenceFactory;
                    public getBitmapMemoryCache(): cache.MemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>;
                    public resume(): void;
                    public isInBitmapMemoryCache(param0: globalAndroid.net.Uri): boolean;
                    public getDataSourceSupplier(param0: request.ImageRequest, param1: any, param2: request.ImageRequest.RequestLevel): facebook.common.internal.Supplier<facebook.datasource.DataSource<facebook.common.references.CloseableReference<image.CloseableImage>>>;
                    public evictFromCache(param0: globalAndroid.net.Uri): void;
                    public clearCaches(): void;
                    public getCachedImage(param0: facebook.cache.common.CacheKey): facebook.common.references.CloseableReference<image.CloseableImage>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace core {
                export class ImagePipelineConfig {
                    public static class: java.lang.Class<ImagePipelineConfig>;
                    public getImageDecoder(): decoder.ImageDecoder;
                    public getPoolFactory(): memory.PoolFactory;
                    public isDiskCacheEnabled(): boolean;
                    public getExecutorSupplier(): ExecutorSupplier;
                    public isResizeAndRotateEnabledForNetwork(): boolean;
                    public getCacheKeyFactory(): cache.CacheKeyFactory;
                    public getEncodedMemoryCacheParamsSupplier(): facebook.common.internal.Supplier<cache.MemoryCacheParams>;
                    public getImageTranscoderFactory(): transcoder.ImageTranscoderFactory;
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
                    public getCallerContextVerifier(): callercontext.CallerContextVerifier;
                    public getExperiments(): ImagePipelineExperiments;
                    public getImageTranscoderType(): java.lang.Integer;
                    public getBitmapMemoryCacheParamsSupplier(): facebook.common.internal.Supplier<cache.MemoryCacheParams>;
                    public getNetworkFetcher(): producers.NetworkFetcher<any>;
                    public getBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
                    public static newBuilder(param0: globalAndroid.content.Context): ImagePipelineConfig.Builder;
                    public getIsPrefetchEnabledSupplier(): facebook.common.internal.Supplier<java.lang.Boolean>;
                    public getCloseableReferenceLeakTracker(): debug.CloseableReferenceLeakTracker;
                    public getMemoryTrimmableRegistry(): facebook.common.memory.MemoryTrimmableRegistry;
                    public getMemoryChunkType(): number;
                    public getSmallImageDiskCacheConfig(): facebook.cache.disk.DiskCacheConfig;
                    public getPlatformBitmapFactory(): bitmaps.PlatformBitmapFactory;
                }
                export namespace ImagePipelineConfig {
                    export class Builder {
                        public static class: java.lang.Class<Builder>;
                        public setBitmapMemoryCacheTrimStrategy(param0: cache.CountingMemoryCache.CacheTrimStrategy): Builder;
                        public setHttpConnectionTimeout(param0: number): Builder;
                        public isDiskCacheEnabled(): boolean;
                        public setNetworkFetcher(param0: producers.NetworkFetcher<any>): Builder;
                        public setPoolFactory(param0: memory.PoolFactory): Builder;
                        public setDiskCacheEnabled(param0: boolean): Builder;
                        public setImageDecoderConfig(param0: decoder.ImageDecoderConfig): Builder;
                        public setDownsampleEnabled(param0: boolean): Builder;
                        public setMemoryTrimmableRegistry(param0: facebook.common.memory.MemoryTrimmableRegistry): Builder;
                        public setExecutorSupplier(param0: ExecutorSupplier): Builder;
                        public setImageTranscoderType(param0: number): Builder;
                        public setEncodedMemoryCacheParamsSupplier(param0: facebook.common.internal.Supplier<cache.MemoryCacheParams>): Builder;
                        public setRequestListeners(param0: java.util.Set<listener.RequestListener>): Builder;
                        public setImageDecoder(param0: decoder.ImageDecoder): Builder;
                        public getImageTranscoderType(): java.lang.Integer;
                        public setCloseableReferenceLeakTracker(param0: debug.CloseableReferenceLeakTracker): Builder;
                        public setMainDiskCacheConfig(param0: facebook.cache.disk.DiskCacheConfig): Builder;
                        public setBitmapMemoryCacheParamsSupplier(param0: facebook.common.internal.Supplier<cache.MemoryCacheParams>): Builder;
                        public setBitmapsConfig(param0: globalAndroid.graphics.Bitmap.Config): Builder;
                        public setCacheKeyFactory(param0: cache.CacheKeyFactory): Builder;
                        public setCallerContextVerifier(param0: callercontext.CallerContextVerifier): Builder;
                        public setImageCacheStatsTracker(param0: cache.ImageCacheStatsTracker): Builder;
                        public setSmallImageDiskCacheConfig(param0: facebook.cache.disk.DiskCacheConfig): Builder;
                        public getMemoryChunkType(): java.lang.Integer;
                        public setImageTranscoderFactory(param0: transcoder.ImageTranscoderFactory): Builder;
                        public experiment(): ImagePipelineExperiments.Builder;
                        public setProgressiveJpegConfig(param0: decoder.ProgressiveJpegConfig): Builder;
                        public setResizeAndRotateEnabledForNetwork(param0: boolean): Builder;
                        public setIsPrefetchEnabledSupplier(param0: facebook.common.internal.Supplier<java.lang.Boolean>): Builder;
                        public setPlatformBitmapFactory(param0: bitmaps.PlatformBitmapFactory): Builder;
                        public setFileCacheFactory(param0: FileCacheFactory): Builder;
                        public setMemoryChunkType(param0: number): Builder;
                        public isDownsampleEnabled(): boolean;
                        public build(): ImagePipelineConfig;
                    }
                    export class DefaultImageRequestConfig {
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
                export class ImagePipelineExperiments {
                    public static class: java.lang.Class<ImagePipelineExperiments>;
                    public getWebpErrorLogger(): facebook.common.webp.WebpBitmapFactory.WebpErrorLogger;
                    public isLazyDataSource(): facebook.common.internal.Supplier<java.lang.Boolean>;
                    public getMaxBitmapSize(): number;
                    public getUseDownsamplingRatioForResizing(): boolean;
                    public getBitmapPrepareToDrawMinSizeBytes(): number;
                    public shouldDownscaleFrameToDrawableDimensions(): boolean;
                    public isPartialImageCachingEnabled(): boolean;
                    public isWebpSupportEnabled(): boolean;
                    public getProducerFactoryMethod(): ImagePipelineExperiments.ProducerFactoryMethod;
                    public getBitmapPrepareToDrawForPrefetch(): boolean;
                    public static newBuilder(param0: ImagePipelineConfig.Builder): ImagePipelineExperiments.Builder;
                    public isNativeCodeDisabled(): boolean;
                    public isDecodeCancellationEnabled(): boolean;
                    public getBitmapPrepareToDrawMaxSizeBytes(): number;
                    public isGingerbreadDecoderEnabled(): boolean;
                    public getWebpBitmapFactory(): facebook.common.webp.WebpBitmapFactory;
                    public getUseBitmapPrepareToDraw(): boolean;
                }
                export namespace ImagePipelineExperiments {
                    export class Builder {
                        public static class: java.lang.Class<Builder>;
                        public mBitmapPrepareToDrawForPrefetch: boolean;
                        public mLazyDataSource: facebook.common.internal.Supplier<java.lang.Boolean>;
                        public mGingerbreadDecoderEnabled: boolean;
                        public mDownscaleFrameToDrawableDimensions: boolean;
                        public constructor(param0: ImagePipelineConfig.Builder);
                        public setProducerFactoryMethod(param0: ProducerFactoryMethod): ImagePipelineConfig.Builder;
                        public setBitmapPrepareToDraw(param0: boolean, param1: number, param2: number, param3: boolean): ImagePipelineConfig.Builder;
                        public setGingerbreadDecoderEnabled(param0: boolean): ImagePipelineConfig.Builder;
                        public setShouldDownscaleFrameToDrawableDimensions(param0: boolean): ImagePipelineConfig.Builder;
                        public setDecodeCancellationEnabled(param0: boolean): ImagePipelineConfig.Builder;
                        public setWebpSupportEnabled(param0: boolean): ImagePipelineConfig.Builder;
                        public setWebpBitmapFactory(param0: facebook.common.webp.WebpBitmapFactory): ImagePipelineConfig.Builder;
                        public build(): ImagePipelineExperiments;
                        public setPartialImageCachingEnabled(param0: boolean): ImagePipelineConfig.Builder;
                        public setWebpErrorLogger(param0: facebook.common.webp.WebpBitmapFactory.WebpErrorLogger): ImagePipelineConfig.Builder;
                        public setNativeCodeDisabled(param0: boolean): ImagePipelineConfig.Builder;
                        public setLazyDataSource(param0: facebook.common.internal.Supplier<java.lang.Boolean>): ImagePipelineConfig.Builder;
                        public setMaxBitmapSize(param0: number): ImagePipelineConfig.Builder;
                        public setUseDownsampligRatioForResizing(param0: boolean): ImagePipelineConfig.Builder;
                        public isPartialImageCachingEnabled(): boolean;
                    }
                    export class DefaultProducerFactoryMethod extends ProducerFactoryMethod {
                        public static class: java.lang.Class<DefaultProducerFactoryMethod>;
                        public constructor();
                        public createProducerFactory(param0: globalAndroid.content.Context, param1: facebook.common.memory.ByteArrayPool, param2: decoder.ImageDecoder, param3: decoder.ProgressiveJpegConfig, param4: boolean, param5: boolean, param6: boolean, param7: ExecutorSupplier, param8: facebook.common.memory.PooledByteBufferFactory, param9: cache.MemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>, param10: cache.MemoryCache<facebook.cache.common.CacheKey,facebook.common.memory.PooledByteBuffer>, param11: cache.BufferedDiskCache, param12: cache.BufferedDiskCache, param13: cache.CacheKeyFactory, param14: bitmaps.PlatformBitmapFactory, param15: number, param16: number, param17: boolean, param18: number, param19: CloseableReferenceFactory): ProducerFactory;
                    }
                    export class ProducerFactoryMethod {
                        public static class: java.lang.Class<ProducerFactoryMethod>;
                        /**
						 * Constructs a new instance of the com.facebook.imagepipeline.core.ImagePipelineExperiments$ProducerFactoryMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
                        public constructor(implementation: {
                            createProducerFactory(param0: globalAndroid.content.Context, param1: facebook.common.memory.ByteArrayPool, param2: decoder.ImageDecoder, param3: decoder.ProgressiveJpegConfig, param4: boolean, param5: boolean, param6: boolean, param7: ExecutorSupplier, param8: facebook.common.memory.PooledByteBufferFactory, param9: cache.MemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>, param10: cache.MemoryCache<facebook.cache.common.CacheKey,facebook.common.memory.PooledByteBuffer>, param11: cache.BufferedDiskCache, param12: cache.BufferedDiskCache, param13: cache.CacheKeyFactory, param14: bitmaps.PlatformBitmapFactory, param15: number, param16: number, param17: boolean, param18: number, param19: CloseableReferenceFactory): ProducerFactory;
                        });
                        public constructor();
                        public createProducerFactory(param0: globalAndroid.content.Context, param1: facebook.common.memory.ByteArrayPool, param2: decoder.ImageDecoder, param3: decoder.ProgressiveJpegConfig, param4: boolean, param5: boolean, param6: boolean, param7: ExecutorSupplier, param8: facebook.common.memory.PooledByteBufferFactory, param9: cache.MemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>, param10: cache.MemoryCache<facebook.cache.common.CacheKey,facebook.common.memory.PooledByteBuffer>, param11: cache.BufferedDiskCache, param12: cache.BufferedDiskCache, param13: cache.CacheKeyFactory, param14: bitmaps.PlatformBitmapFactory, param15: number, param16: number, param17: boolean, param18: number, param19: CloseableReferenceFactory): ProducerFactory;
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
                    public static class: java.lang.Class<ImagePipelineFactory>;
                    public static shutDown(): void;
                    public static initialize(param0: globalAndroid.content.Context): void;
                    public static initialize(param0: ImagePipelineConfig): void;
                    public getEncodedCountingMemoryCache(): cache.CountingMemoryCache<facebook.cache.common.CacheKey,facebook.common.memory.PooledByteBuffer>;
                    public static getInstance(): ImagePipelineFactory;
                    public getAnimatedDrawableFactory(param0: globalAndroid.content.Context): drawable.DrawableFactory;
                    public getMainFileCache(): facebook.cache.disk.FileCache;
                    public getSmallImageFileCache(): facebook.cache.disk.FileCache;
                    public getImagePipeline(): ImagePipeline;
                    public getBitmapMemoryCache(): cache.InstrumentedMemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>;
                    public getMainBufferedDiskCache(): cache.BufferedDiskCache;
                    public constructor(param0: ImagePipelineConfig);
                    public getEncodedMemoryCache(): cache.InstrumentedMemoryCache<facebook.cache.common.CacheKey,facebook.common.memory.PooledByteBuffer>;
                    public getPlatformDecoder(): platform.PlatformDecoder;
                    public static setInstance(param0: ImagePipelineFactory): void;
                    public getCloseableReferenceFactory(): CloseableReferenceFactory;
                    public getBitmapCountingMemoryCache(): cache.CountingMemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>;
                    public static hasBeenInitialized(): boolean;
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
                export class ImageTranscoderType {
                    public static class: java.lang.Class<ImageTranscoderType>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.ImageTranscoderType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                    });
                    public constructor();
                    public static NATIVE_TRANSCODER: number;
                    public static JAVA_TRANSCODER: number;
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
                    public static class: java.lang.Class<MemoryChunkType>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.MemoryChunkType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                    });
                    public constructor();
                    public static BUFFER_MEMORY: number;
                    public static NATIVE_MEMORY: number;
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
                export class ProducerFactory {
                    public static class: java.lang.Class<ProducerFactory>;
                    public newBitmapPrepareProducer(param0: producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>): producers.BitmapPrepareProducer;
                    public newDiskCacheWriteProducer(param0: producers.Producer<image.EncodedImage>): producers.DiskCacheWriteProducer;
                    public newNetworkFetchProducer(param0: producers.NetworkFetcher<any>): producers.NetworkFetchProducer;
                    public static newSwallowResultProducer(param0: producers.Producer<any>): producers.SwallowResultProducer<any>;
                    public newEncodedCacheKeyMultiplexProducer(param0: producers.Producer<image.EncodedImage>): producers.EncodedCacheKeyMultiplexProducer;
                    public newLocalVideoThumbnailProducer(): producers.LocalVideoThumbnailProducer;
                    public newBitmapMemoryCacheKeyMultiplexProducer(param0: producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>): producers.BitmapMemoryCacheKeyMultiplexProducer;
                    public newThumbnailBranchProducer(param0: native.Array<producers.ThumbnailProducer<image.EncodedImage>>): producers.ThumbnailBranchProducer;
                    public newDecodeProducer(param0: producers.Producer<image.EncodedImage>): producers.DecodeProducer;
                    public newResizeAndRotateProducer(param0: producers.Producer<image.EncodedImage>, param1: boolean, param2: transcoder.ImageTranscoderFactory): producers.ResizeAndRotateProducer;
                    public newWebpTranscodeProducer(param0: producers.Producer<image.EncodedImage>): producers.WebpTranscodeProducer;
                    public newLocalResourceFetchProducer(): producers.LocalResourceFetchProducer;
                    public newThrottlingProducer(param0: producers.Producer<any>): producers.ThrottlingProducer<any>;
                    public newPostprocessorProducer(param0: producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>): producers.PostprocessorProducer;
                    public static newBranchOnSeparateImagesProducer(param0: producers.Producer<image.EncodedImage>, param1: producers.Producer<image.EncodedImage>): producers.BranchOnSeparateImagesProducer;
                    public static newAddImageTransformMetaDataProducer(param0: producers.Producer<image.EncodedImage>): producers.AddImageTransformMetaDataProducer;
                    public newLocalContentUriFetchProducer(): producers.LocalContentUriFetchProducer;
                    public newLocalFileFetchProducer(): producers.LocalFileFetchProducer;
                    public newQualifiedResourceFetchProducer(): producers.QualifiedResourceFetchProducer;
                    public newBackgroundThreadHandoffProducer(param0: producers.Producer<any>, param1: producers.ThreadHandoffProducerQueue): producers.ThreadHandoffProducer<any>;
                    public newBitmapMemoryCacheGetProducer(param0: producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>): producers.BitmapMemoryCacheGetProducer;
                    public newDiskCacheReadProducer(param0: producers.Producer<image.EncodedImage>): producers.DiskCacheReadProducer;
                    public newPostprocessorBitmapMemoryCacheProducer(param0: producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>): producers.PostprocessedBitmapMemoryCacheProducer;
                    public newPartialDiskCacheProducer(param0: producers.Producer<image.EncodedImage>): producers.PartialDiskCacheProducer;
                    public newLocalContentUriThumbnailFetchProducer(): producers.LocalContentUriThumbnailFetchProducer;
                    public newBitmapMemoryCacheProducer(param0: producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>): producers.BitmapMemoryCacheProducer;
                    public newDataFetchProducer(): producers.DataFetchProducer;
                    public newLocalExifThumbnailProducer(): producers.LocalExifThumbnailProducer;
                    public constructor(param0: globalAndroid.content.Context, param1: facebook.common.memory.ByteArrayPool, param2: decoder.ImageDecoder, param3: decoder.ProgressiveJpegConfig, param4: boolean, param5: boolean, param6: boolean, param7: ExecutorSupplier, param8: facebook.common.memory.PooledByteBufferFactory, param9: cache.MemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>, param10: cache.MemoryCache<facebook.cache.common.CacheKey,facebook.common.memory.PooledByteBuffer>, param11: cache.BufferedDiskCache, param12: cache.BufferedDiskCache, param13: cache.CacheKeyFactory, param14: bitmaps.PlatformBitmapFactory, param15: number, param16: number, param17: boolean, param18: number, param19: CloseableReferenceFactory);
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
                export class ProducerSequenceFactory {
                    public static class: java.lang.Class<ProducerSequenceFactory>;
                    public getDecodedImagePrefetchProducerSequence(param0: request.ImageRequest): producers.Producer<java.lang.Void>;
                    public getLocalFileFetchEncodedImageProducerSequence(): producers.Producer<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>>;
                    public getDecodedImageProducerSequence(param0: request.ImageRequest): producers.Producer<facebook.common.references.CloseableReference<image.CloseableImage>>;
                    public getNetworkFetchEncodedImageProducerSequence(): producers.Producer<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>>;
                    public getEncodedImageProducerSequence(param0: request.ImageRequest): producers.Producer<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>>;
                    public constructor(param0: globalAndroid.content.ContentResolver, param1: ProducerFactory, param2: producers.NetworkFetcher<any>, param3: boolean, param4: boolean, param5: producers.ThreadHandoffProducerQueue, param6: boolean, param7: boolean, param8: boolean, param9: boolean, param10: transcoder.ImageTranscoderFactory);
                    public getLocalContentUriFetchEncodedImageProducerSequence(): producers.Producer<facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>>;
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
                export abstract class AbstractProducerToDataSourceAdapter<T>  extends facebook.datasource.AbstractDataSource<any> implements request.HasImageRequest  {
                    public static class: java.lang.Class<AbstractProducerToDataSourceAdapter<any>>;
                    public constructor(param0: producers.Producer<any>, param1: producers.SettableProducerContext, param2: listener.RequestListener);
                    public isFinished(): boolean;
                    public close(): boolean;
                    public hasFailed(): boolean;
                    public getProgress(): number;
                    public hasMultipleResults(): boolean;
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
                export abstract class BaseBitmapReferenceDataSubscriber extends facebook.datasource.BaseDataSubscriber<facebook.common.references.CloseableReference<image.CloseableImage>> {
                    public static class: java.lang.Class<BaseBitmapReferenceDataSubscriber>;
                    public constructor();
                    public onCancellation(param0: facebook.datasource.DataSource<any>): void;
                    public onProgressUpdate(param0: facebook.datasource.DataSource<any>): void;
                    public onNewResultImpl(param0: facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>): void;
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
                export class CloseableProducerToDataSourceAdapter<T>  extends AbstractProducerToDataSourceAdapter<facebook.common.references.CloseableReference<any>> {
                    public static class: java.lang.Class<CloseableProducerToDataSourceAdapter<any>>;
                    public isFinished(): boolean;
                    public close(): boolean;
                    public hasFailed(): boolean;
                    public getResult(): facebook.common.references.CloseableReference<any>;
                    public closeResult(param0: any): void;
                    public getProgress(): number;
                    public closeResult(param0: facebook.common.references.CloseableReference<any>): void;
                    public static create(param0: producers.Producer<any>, param1: producers.SettableProducerContext, param2: listener.RequestListener): facebook.datasource.DataSource<any>;
                    public hasMultipleResults(): boolean;
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
                export class ListDataSource<T>  extends facebook.datasource.AbstractDataSource<java.util.List<facebook.common.references.CloseableReference<any>>> {
                    public static class: java.lang.Class<ListDataSource<any>>;
                    public isFinished(): boolean;
                    public static create(param0: native.Array<facebook.datasource.DataSource<any>>): ListDataSource<any>;
                    public getResult(): java.util.List<facebook.common.references.CloseableReference<any>>;
                    public close(): boolean;
                    public hasFailed(): boolean;
                    public getProgress(): number;
                    public hasMultipleResults(): boolean;
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
                export class ProducerToDataSourceAdapter<T>  extends AbstractProducerToDataSourceAdapter<any> {
                    public static class: java.lang.Class<ProducerToDataSourceAdapter<any>>;
                    public isFinished(): boolean;
                    public getProgress(): number;
                    public static create(param0: producers.Producer<any>, param1: producers.SettableProducerContext, param2: listener.RequestListener): facebook.datasource.DataSource<any>;
                    public hasMultipleResults(): boolean;
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
                export class SettableDataSource<T>  extends facebook.datasource.AbstractDataSource<facebook.common.references.CloseableReference<any>> {
                    public static class: java.lang.Class<SettableDataSource<any>>;
                    public isFinished(): boolean;
                    public close(): boolean;
                    public setProgress(param0: number): boolean;
                    public hasFailed(): boolean;
                    public getResult(): facebook.common.references.CloseableReference<any>;
                    public closeResult(param0: any): void;
                    public getProgress(): number;
                    public closeResult(param0: facebook.common.references.CloseableReference<any>): void;
                    public hasMultipleResults(): boolean;
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
            export namespace debug {
                export class CloseableReferenceLeakTracker {
                    public static class: java.lang.Class<CloseableReferenceLeakTracker>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        trackCloseableReferenceLeak(param0: facebook.common.references.SharedReference<any>, param1: java.lang.Throwable): void;
                        setListener(param0: CloseableReferenceLeakTracker.Listener): void;
                        isSet(): boolean;
                    });
                    public constructor();
                    public isSet(): boolean;
                    public trackCloseableReferenceLeak(param0: facebook.common.references.SharedReference<any>, param1: java.lang.Throwable): void;
                    public setListener(param0: CloseableReferenceLeakTracker.Listener): void;
                }
                export namespace CloseableReferenceLeakTracker {
                    export class Listener {
                        public static class: java.lang.Class<Listener>;
                        /**
						 * Constructs a new instance of the com.facebook.imagepipeline.debug.CloseableReferenceLeakTracker$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
                        public constructor(implementation: {
                            onCloseableReferenceLeak(param0: facebook.common.references.SharedReference<any>, param1: java.lang.Throwable): void;
                        });
                        public constructor();
                        public onCloseableReferenceLeak(param0: facebook.common.references.SharedReference<any>, param1: java.lang.Throwable): void;
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
                export class NoOpCloseableReferenceLeakTracker extends CloseableReferenceLeakTracker {
                    public static class: java.lang.Class<NoOpCloseableReferenceLeakTracker>;
                    public isSet(): boolean;
                    public constructor();
                    public trackCloseableReferenceLeak(param0: facebook.common.references.SharedReference<any>, param1: java.lang.Throwable): void;
                    public setListener(param0: CloseableReferenceLeakTracker.Listener): void;
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
                    public static class: java.lang.Class<DecodeException>;
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
                export class DefaultImageDecoder extends ImageDecoder {
                    public static class: java.lang.Class<DefaultImageDecoder>;
                    public constructor(param0: ImageDecoder, param1: ImageDecoder, param2: platform.PlatformDecoder, param3: java.util.Map<imageformat.ImageFormat,ImageDecoder>);
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
                export class ImageDecoder {
                    public static class: java.lang.Class<ImageDecoder>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.decoder.ImageDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        decode(param0: image.EncodedImage, param1: number, param2: image.QualityInfo, param3: common.ImageDecodeOptions): image.CloseableImage;
                    });
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
                export class ImageDecoderConfig {
                    public static class: java.lang.Class<ImageDecoderConfig>;
                    public static newBuilder(): ImageDecoderConfig.Builder;
                    public getCustomImageDecoders(): java.util.Map<imageformat.ImageFormat,ImageDecoder>;
                    public getCustomImageFormats(): java.util.List<imageformat.ImageFormat.FormatChecker>;
                }
                export namespace ImageDecoderConfig {
                    export class Builder {
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
                export class ProgressiveJpegConfig {
                    public static class: java.lang.Class<ProgressiveJpegConfig>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.decoder.ProgressiveJpegConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        getNextScanNumberToDecode(param0: number): number;
                        getQualityInfo(param0: number): image.QualityInfo;
                    });
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
                export class ProgressiveJpegParser {
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
                export class SimpleProgressiveJpegConfig extends ProgressiveJpegConfig {
                    public static class: java.lang.Class<SimpleProgressiveJpegConfig>;
                    public getNextScanNumberToDecode(param0: number): number;
                    public getQualityInfo(param0: number): image.QualityInfo;
                    public constructor();
                    public constructor(param0: SimpleProgressiveJpegConfig.DynamicValueConfig);
                }
                export namespace SimpleProgressiveJpegConfig {
                    export class DefaultDynamicValueConfig extends DynamicValueConfig {
                        public static class: java.lang.Class<DefaultDynamicValueConfig>;
                        public getScansToDecode(): java.util.List<java.lang.Integer>;
                        public getGoodEnoughScanNumber(): number;
                    }
                    export class DynamicValueConfig {
                        public static class: java.lang.Class<DynamicValueConfig>;
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
            export namespace filter {
                export class InPlaceRoundFilter {
                    public static class: java.lang.Class<InPlaceRoundFilter>;
                    public static roundBitmapInPlace(param0: globalAndroid.graphics.Bitmap): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace filter {
                export abstract class IterativeBoxBlurFilter {
                    public static class: java.lang.Class<IterativeBoxBlurFilter>;
                    public constructor();
                    public static boxBlurBitmapInPlace(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace filter {
                export abstract class RenderScriptBlurFilter {
                    public static class: java.lang.Class<RenderScriptBlurFilter>;
                    public static BLUR_MAX_RADIUS: number;
                    public constructor();
                    public static blurBitmap(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.content.Context, param3: number): void;
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
                    public static class: java.lang.Class<XferRoundFilter>;
                    public static xferRoundBitmap(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap, param2: boolean): void;
                    public static canUseXferRoundFilter(): boolean;
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
                export abstract class CloseableImage extends ImageInfo {
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
                    public constructor(param0: globalAndroid.graphics.Bitmap, param1: facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, param2: QualityInfo, param3: number, param4: number);
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
                export class EncodedImage {
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
                    public getColorSpace(): globalAndroid.graphics.ColorSpace;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace image {
                export class ImageInfo {
                    public static class: java.lang.Class<ImageInfo>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.image.ImageInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        getWidth(): number;
                        getHeight(): number;
                        getQualityInfo(): QualityInfo;
                    });
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
                export class ImmutableQualityInfo extends QualityInfo {
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
                export class QualityInfo {
                    public static class: java.lang.Class<QualityInfo>;
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
            export namespace listener {
                export class BaseRequestListener extends RequestListener {
                    public static class: java.lang.Class<BaseRequestListener>;
                    public requiresExtraMap(param0: string): boolean;
                    public onProducerStart(param0: string, param1: string): void;
                    public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
                    public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
                    public constructor();
                    public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
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
                export class ForwardingRequestListener extends RequestListener {
                    public static class: java.lang.Class<ForwardingRequestListener>;
                    public constructor(param0: native.Array<RequestListener>);
                    public onProducerStart(param0: string, param1: string): void;
                    public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
                    public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
                    public onRequestFailure(param0: request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
                    public onProducerEvent(param0: string, param1: string, param2: string): void;
                    public requiresExtraMap(param0: string): boolean;
                    public constructor(param0: java.util.Set<RequestListener>);
                    public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
                    public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
                    public onRequestStart(param0: request.ImageRequest, param1: any, param2: string, param3: boolean): void;
                    public onRequestSuccess(param0: request.ImageRequest, param1: string, param2: boolean): void;
                    public addRequestListener(param0: RequestListener): void;
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
                export class RequestListener extends producers.ProducerListener {
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
                export class RequestLoggingListener extends RequestListener {
                    public static class: java.lang.Class<RequestLoggingListener>;
                    public requiresExtraMap(param0: string): boolean;
                    public onProducerStart(param0: string, param1: string): void;
                    public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
                    public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
                    public constructor();
                    public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
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
                export abstract class BasePool<V>  extends facebook.common.memory.Pool<any> {
                    public static class: java.lang.Class<BasePool<any>>;
                    public isReusable(param0: any): boolean;
                    public getStats(): java.util.Map<string,java.lang.Integer>;
                    public getValue(param0: Bucket<any>): any;
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
                    export class Counter {
                        public static class: java.lang.Class<Counter>;
                        public increment(param0: number): void;
                        public decrement(param0: number): void;
                        public reset(): void;
                    }
                    export class InvalidSizeException {
                        public static class: java.lang.Class<InvalidSizeException>;
                        public constructor(param0: any);
                    }
                    export class InvalidValueException {
                        public static class: java.lang.Class<InvalidValueException>;
                        public constructor(param0: any);
                    }
                    export class PoolSizeViolationException {
                        public static class: java.lang.Class<PoolSizeViolationException>;
                        public constructor(param0: number, param1: number, param2: number, param3: number);
                    }
                    export class SizeTooLargeException extends InvalidSizeException {
                        public static class: java.lang.Class<SizeTooLargeException>;
                        public constructor(param0: any);
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
                    public static class: java.lang.Class<BitmapCounter>;
                    public increase(param0: globalAndroid.graphics.Bitmap): boolean;
                    public getMaxCount(): number;
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
                export class BitmapCounterConfig {
                    public static class: java.lang.Class<BitmapCounterConfig>;
                    public static DEFAULT_MAX_BITMAP_COUNT: number;
                    public setMaxBitmapCount(param0: number): void;
                    public getMaxBitmapCount(): number;
                    public constructor(param0: BitmapCounterConfig.Builder);
                    public static newBuilder(): BitmapCounterConfig.Builder;
                }
                export namespace BitmapCounterConfig {
                    export class Builder {
                        public static class: java.lang.Class<Builder>;
                        public build(): BitmapCounterConfig;
                        public getMaxBitmapCount(): number;
                        public setMaxBitmapCount(param0: number): Builder;
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
                    public static class: java.lang.Class<BitmapCounterProvider>;
                    public static MAX_BITMAP_TOTAL_SIZE: number;
                    public constructor();
                    public static get(): BitmapCounter;
                    public static initialize(param0: BitmapCounterConfig): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class BitmapPool extends facebook.common.memory.Pool<globalAndroid.graphics.Bitmap> {
                    public static class: java.lang.Class<BitmapPool>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.memory.BitmapPool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        get(param0: number): any;
                        release(param0: any): void;
                        release(param0: any): void;
                        trim(param0: facebook.common.memory.MemoryTrimType): void;
                    });
                    public constructor();
                    public release(param0: any): void;
                    public trim(param0: facebook.common.memory.MemoryTrimType): void;
                    public get(param0: number): any;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class BitmapPoolBackend extends LruBucketsPoolBackend<globalAndroid.graphics.Bitmap> {
                    public static class: java.lang.Class<BitmapPoolBackend>;
                    public get(param0: number): globalAndroid.graphics.Bitmap;
                    public constructor();
                    public put(param0: globalAndroid.graphics.Bitmap): void;
                    public getSize(param0: any): number;
                    public get(param0: number): any;
                    public put(param0: any): void;
                    public getSize(param0: globalAndroid.graphics.Bitmap): number;
                    public pop(): any;
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
                export class BitmapPoolType {
                    public static class: java.lang.Class<BitmapPoolType>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.memory.BitmapPoolType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                    });
                    public constructor();
                    public static LEGACY: string;
                    public static LEGACY_DEFAULT_PARAMS: string;
                    public static EXPERIMENTAL: string;
                    public static DUMMY_WITH_TRACKING: string;
                    public static DUMMY: string;
                    public static DEFAULT: string;
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
                    public static class: java.lang.Class<Bucket<any>>;
                    public mItemSize: number;
                    public mMaxLength: number;
                    public incrementInUseCount(): void;
                    public isMaxLengthExceeded(): boolean;
                    public pop(): V;
                    public constructor(param0: number, param1: number, param2: number, param3: boolean);
                    public decrementInUseCount(): void;
                    public getInUseCount(): number;
                    public release(param0: V): void;
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
                    public static class: java.lang.Class<BucketMap<any>>;
                    public mMap: globalAndroid.util.SparseArray<BucketMap.LinkedEntry<T>>;
                    public removeFromEnd(): T;
                    public constructor();
                    public acquire(param0: number): T;
                    public release(param0: number, param1: T): void;
                }
                export namespace BucketMap {
                    export class LinkedEntry<I>  extends java.lang.Object {
                        public static class: java.lang.Class<LinkedEntry<any>>;
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
                export class BucketsBitmapPool extends BasePool<globalAndroid.graphics.Bitmap> implements BitmapPool  {
                    public static class: java.lang.Class<BucketsBitmapPool>;
                    public isReusable(param0: any): boolean;
                    public getValue(param0: Bucket<any>): any;
                    public free(param0: any): void;
                    public free(param0: globalAndroid.graphics.Bitmap): void;
                    public getBucketedSize(param0: number): number;
                    public alloc(param0: number): any;
                    public alloc(param0: number): globalAndroid.graphics.Bitmap;
                    public getSizeInBytes(param0: number): number;
                    public release(param0: any): void;
                    public getValue(param0: Bucket<globalAndroid.graphics.Bitmap>): globalAndroid.graphics.Bitmap;
                    public getBucketedSizeForValue(param0: any): number;
                    public trim(param0: facebook.common.memory.MemoryTrimType): void;
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
                export class BufferMemoryChunk extends MemoryChunk {
                    public static class: java.lang.Class<BufferMemoryChunk>;
                    public read(param0: number): number;
                    public getUniqueId(): number;
                    public close(): void;
                    public getByteBuffer(): java.nio.ByteBuffer;
                    public write(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
                    public read(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
                    public getNativePtr(): number;
                    public copy(param0: number, param1: MemoryChunk, param2: number, param3: number): void;
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
                export class BufferMemoryChunkPool extends MemoryChunkPool {
                    public static class: java.lang.Class<BufferMemoryChunkPool>;
                    public alloc(param0: number): BufferMemoryChunk;
                    public release(param0: any): void;
                    public get(param0: number): any;
                    public constructor(param0: facebook.common.memory.MemoryTrimmableRegistry, param1: PoolParams, param2: PoolStatsTracker);
                    public alloc(param0: number): MemoryChunk;
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
                export class DefaultByteArrayPoolParams {
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
                export class DefaultFlexByteArrayPoolParams {
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
                export class DefaultNativeMemoryChunkPoolParams {
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
                export class DummyBitmapPool extends BitmapPool {
                    public static class: java.lang.Class<DummyBitmapPool>;
                    public get(param0: number): globalAndroid.graphics.Bitmap;
                    public release(param0: globalAndroid.graphics.Bitmap): void;
                    public release(param0: any): void;
                    public constructor();
                    public trim(param0: facebook.common.memory.MemoryTrimType): void;
                    public get(param0: number): any;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class DummyTrackingInUseBitmapPool extends BitmapPool {
                    public static class: java.lang.Class<DummyTrackingInUseBitmapPool>;
                    public get(param0: number): globalAndroid.graphics.Bitmap;
                    public release(param0: globalAndroid.graphics.Bitmap): void;
                    public release(param0: any): void;
                    public constructor();
                    public trim(param0: facebook.common.memory.MemoryTrimType): void;
                    public get(param0: number): any;
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
                    public static class: java.lang.Class<FlexByteArrayPool>;
                    public getStats(): java.util.Map<string,java.lang.Integer>;
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
                export class GenericByteArrayPool extends BasePool<native.Array<number>> implements facebook.common.memory.ByteArrayPool  {
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
                export class LruBitmapPool extends BitmapPool {
                    public static class: java.lang.Class<LruBitmapPool>;
                    public mStrategy: PoolBackend<globalAndroid.graphics.Bitmap>;
                    public get(param0: number): globalAndroid.graphics.Bitmap;
                    public release(param0: globalAndroid.graphics.Bitmap): void;
                    public release(param0: any): void;
                    public trim(param0: facebook.common.memory.MemoryTrimType): void;
                    public get(param0: number): any;
                    public constructor(param0: number, param1: number, param2: PoolStatsTracker, param3: facebook.common.memory.MemoryTrimmableRegistry);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export abstract class LruBucketsPoolBackend<T>  extends PoolBackend<any> {
                    public static class: java.lang.Class<LruBucketsPoolBackend<any>>;
                    public constructor();
                    public getSize(param0: any): number;
                    public get(param0: number): any;
                    public put(param0: any): void;
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
                    public static class: java.lang.Class<MemoryChunk>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.memory.MemoryChunk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        close(): void;
                        isClosed(): boolean;
                        getSize(): number;
                        write(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
                        read(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
                        read(param0: number): number;
                        copy(param0: number, param1: MemoryChunk, param2: number, param3: number): void;
                        getNativePtr(): number;
                        getByteBuffer(): java.nio.ByteBuffer;
                        getUniqueId(): number;
                    });
                    public constructor();
                    public read(param0: number): number;
                    public getUniqueId(): number;
                    public close(): void;
                    public getByteBuffer(): java.nio.ByteBuffer;
                    public write(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
                    public read(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
                    public getNativePtr(): number;
                    public copy(param0: number, param1: MemoryChunk, param2: number, param3: number): void;
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
                export abstract class MemoryChunkPool extends BasePool<MemoryChunk> {
                    public static class: java.lang.Class<MemoryChunkPool>;
                    public free(param0: MemoryChunk): void;
                    public getSizeInBytes(param0: number): number;
                    public isReusable(param0: any): boolean;
                    public isReusable(param0: MemoryChunk): boolean;
                    public release(param0: any): void;
                    public getBucketedSizeForValue(param0: any): number;
                    public free(param0: any): void;
                    public get(param0: number): any;
                    public getBucketedSize(param0: number): number;
                    public getBucketedSizeForValue(param0: MemoryChunk): number;
                    public alloc(param0: number): any;
                    public alloc(param0: number): MemoryChunk;
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
                    public static class: java.lang.Class<MemoryChunkUtil>;
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
                export class MemoryPooledByteBuffer extends facebook.common.memory.PooledByteBuffer {
                    public static class: java.lang.Class<MemoryPooledByteBuffer>;
                    public read(param0: number): number;
                    public constructor(param0: facebook.common.references.CloseableReference<MemoryChunk>, param1: number);
                    public getByteBuffer(): java.nio.ByteBuffer;
                    public close(): void;
                    public size(): number;
                    public read(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
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
                export class MemoryPooledByteBufferFactory extends facebook.common.memory.PooledByteBufferFactory {
                    public static class: java.lang.Class<MemoryPooledByteBufferFactory>;
                    public newByteBuffer(param0: native.Array<number>): MemoryPooledByteBuffer;
                    public newByteBuffer(param0: number): MemoryPooledByteBuffer;
                    public newOutputStream(param0: number): facebook.common.memory.PooledByteBufferOutputStream;
                    public newByteBuffer(param0: java.io.InputStream, param1: number): MemoryPooledByteBuffer;
                    public newByteBuffer(param0: number): facebook.common.memory.PooledByteBuffer;
                    public newOutputStream(): facebook.common.memory.PooledByteBufferOutputStream;
                    public newByteBuffer(param0: java.io.InputStream): MemoryPooledByteBuffer;
                    public newOutputStream(param0: number): MemoryPooledByteBufferOutputStream;
                    public newByteBuffer(param0: native.Array<number>): facebook.common.memory.PooledByteBuffer;
                    public newOutputStream(): MemoryPooledByteBufferOutputStream;
                    public newByteBuffer(param0: java.io.InputStream): facebook.common.memory.PooledByteBuffer;
                    public newByteBuffer(param0: java.io.InputStream, param1: number): facebook.common.memory.PooledByteBuffer;
                    public constructor(param0: MemoryChunkPool, param1: facebook.common.memory.PooledByteStreams);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace memory {
                export class MemoryPooledByteBufferOutputStream extends facebook.common.memory.PooledByteBufferOutputStream {
                    public static class: java.lang.Class<MemoryPooledByteBufferOutputStream>;
                    public write(param0: native.Array<number>, param1: number, param2: number): void;
                    public constructor(param0: MemoryChunkPool);
                    public constructor(param0: MemoryChunkPool, param1: number);
                    public constructor();
                    public toByteBuffer(): facebook.common.memory.PooledByteBuffer;
                    public close(): void;
                    public size(): number;
                    public write(param0: number): void;
                    public toByteBuffer(): MemoryPooledByteBuffer;
                }
                export namespace MemoryPooledByteBufferOutputStream {
                    export class InvalidStreamException {
                        public static class: java.lang.Class<InvalidStreamException>;
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
                export class NativeMemoryChunk extends MemoryChunk {
                    public static class: java.lang.Class<NativeMemoryChunk>;
                    public getUniqueId(): number;
                    public finalize(): void;
                    public write(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
                    public read(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
                    public copy(param0: number, param1: MemoryChunk, param2: number, param3: number): void;
                    public getSize(): number;
                    public read(param0: number): number;
                    public constructor();
                    public close(): void;
                    public getByteBuffer(): java.nio.ByteBuffer;
                    public getNativePtr(): number;
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
                export class NativeMemoryChunkPool extends MemoryChunkPool {
                    public static class: java.lang.Class<NativeMemoryChunkPool>;
                    public release(param0: any): void;
                    public get(param0: number): any;
                    public alloc(param0: number): NativeMemoryChunk;
                    public constructor(param0: facebook.common.memory.MemoryTrimmableRegistry, param1: PoolParams, param2: PoolStatsTracker);
                    public alloc(param0: number): MemoryChunk;
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
                export class NoOpPoolStatsTracker extends PoolStatsTracker {
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
                export class OOMSoftReferenceBucket<V>  extends Bucket<any> {
                    public static class: java.lang.Class<OOMSoftReferenceBucket<any>>;
                    public constructor(param0: number, param1: number, param2: number);
                    public constructor(param0: number, param1: number, param2: number, param3: boolean);
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
                    public static class: java.lang.Class<PoolBackend<any>>;
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
                    public static class: java.lang.Class<PoolConfig>;
                    public static BITMAP_POOL_MAX_BITMAP_SIZE_DEFAULT: number;
                    public getMemoryChunkPoolParams(): PoolParams;
                    public getBitmapPoolMaxPoolSize(): number;
                    public isRegisterLruBitmapPoolAsMemoryTrimmable(): boolean;
                    public getSmallByteArrayPoolStatsTracker(): PoolStatsTracker;
                    public getBitmapPoolStatsTracker(): PoolStatsTracker;
                    public getBitmapPoolParams(): PoolParams;
                    public getBitmapPoolType(): string;
                    public getSmallByteArrayPoolParams(): PoolParams;
                    public getMemoryTrimmableRegistry(): facebook.common.memory.MemoryTrimmableRegistry;
                    public static newBuilder(): PoolConfig.Builder;
                    public getMemoryChunkPoolStatsTracker(): PoolStatsTracker;
                    public getFlexByteArrayPoolParams(): PoolParams;
                    public getBitmapPoolMaxBitmapSize(): number;
                }
                export namespace PoolConfig {
                    export class Builder {
                        public static class: java.lang.Class<Builder>;
                        public setBitmapPoolStatsTracker(param0: PoolStatsTracker): Builder;
                        public setBitmapPoolType(param0: string): Builder;
                        public setSmallByteArrayPoolStatsTracker(param0: PoolStatsTracker): Builder;
                        public build(): PoolConfig;
                        public setNativeMemoryChunkPoolParams(param0: PoolParams): Builder;
                        public setRegisterLruBitmapPoolAsMemoryTrimmable(param0: boolean): void;
                        public setBitmapPoolMaxBitmapSize(param0: number): Builder;
                        public setBitmapPoolMaxPoolSize(param0: number): Builder;
                        public setBitmapPoolParams(param0: PoolParams): Builder;
                        public setSmallByteArrayPoolParams(param0: PoolParams): Builder;
                        public setFlexByteArrayPoolParams(param0: PoolParams): Builder;
                        public setMemoryTrimmableRegistry(param0: facebook.common.memory.MemoryTrimmableRegistry): Builder;
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
                export class PoolFactory {
                    public static class: java.lang.Class<PoolFactory>;
                    public constructor(param0: PoolConfig);
                    public getFlexByteArrayPool(): FlexByteArrayPool;
                    public getPooledByteBufferFactory(param0: number): facebook.common.memory.PooledByteBufferFactory;
                    public getSmallByteArrayPool(): facebook.common.memory.ByteArrayPool;
                    public getSharedByteArray(): SharedByteArray;
                    public getPooledByteBufferFactory(): facebook.common.memory.PooledByteBufferFactory;
                    public getBitmapPool(): BitmapPool;
                    public getPooledByteStreams(): facebook.common.memory.PooledByteStreams;
                    public getBufferMemoryChunkPool(): BufferMemoryChunkPool;
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
                export class PoolParams {
                    public static class: java.lang.Class<PoolParams>;
                    public static IGNORE_THREADS: number;
                    public maxSizeHardCap: number;
                    public maxSizeSoftCap: number;
                    public bucketSizes: globalAndroid.util.SparseIntArray;
                    public minBucketSize: number;
                    public maxBucketSize: number;
                    public bitmapPoolType: string;
                    public fixBucketsReinitialization: boolean;
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
                export class PoolStatsTracker {
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
                export class SharedByteArray extends facebook.common.memory.MemoryTrimmable {
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
                export class Bitmaps {
                    public static class: java.lang.Class<Bitmaps>;
                    public constructor();
                    public static copyBitmap(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace nativecode {
                export abstract class DalvikPurgeableDecoder extends platform.PlatformDecoder {
                    public static class: java.lang.Class<DalvikPurgeableDecoder>;
                    public static EOI: native.Array<number>;
                    public decodeJPEGFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor();
                    public static getBitmapFactoryOptions(param0: number, param1: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.BitmapFactory.Options;
                    public pinBitmap(param0: globalAndroid.graphics.Bitmap): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public static endsWithEOI(param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>, param1: number): boolean;
                    public decodeJPEGFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeJPEGByteArrayAsPurgeable(param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>, param1: number, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                    public decodeByteArrayAsPurgeable(param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>, param1: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                }
                export namespace DalvikPurgeableDecoder {
                    export class OreoUtils {
                        public static class: java.lang.Class<OreoUtils>;
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
                export class NativeBlurFilter {
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
                export class NativeFiltersLoader {
                    public static class: java.lang.Class<NativeFiltersLoader>;
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
                    public static class: java.lang.Class<NativeImageTranscoderFactory>;
                    public static getNativeImageTranscoderFactory(param0: number, param1: boolean): transcoder.ImageTranscoderFactory;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace nativecode {
                export class NativeJpegTranscoder extends transcoder.ImageTranscoder {
                    public static class: java.lang.Class<NativeJpegTranscoder>;
                    public static TAG: string;
                    public static transcodeJpegWithExifOrientation(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number, param3: number, param4: number): void;
                    public canResize(param0: image.EncodedImage, param1: common.RotationOptions, param2: common.ResizeOptions): boolean;
                    public transcode(param0: image.EncodedImage, param1: java.io.OutputStream, param2: common.RotationOptions, param3: common.ResizeOptions, param4: imageformat.ImageFormat, param5: java.lang.Integer): transcoder.ImageTranscodeResult;
                    public getIdentifier(): string;
                    public static transcodeJpeg(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number, param3: number, param4: number): void;
                    public constructor(param0: boolean, param1: number, param2: boolean);
                    public canTranscode(param0: imageformat.ImageFormat): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace nativecode {
                export class NativeJpegTranscoderFactory extends transcoder.ImageTranscoderFactory {
                    public static class: java.lang.Class<NativeJpegTranscoderFactory>;
                    public createImageTranscoder(param0: imageformat.ImageFormat, param1: boolean): transcoder.ImageTranscoder;
                    public constructor(param0: number, param1: boolean);
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
                    public static class: java.lang.Class<NativeJpegTranscoderSoLoader>;
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
                    public static class: java.lang.Class<NativeRoundingFilter>;
                    public static toCircle(param0: globalAndroid.graphics.Bitmap, param1: boolean): void;
                    public constructor();
                    public static toCircle(param0: globalAndroid.graphics.Bitmap): void;
                    public static toCircleWithBorder(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: boolean): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace nativecode {
                export class WebpTranscoder {
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
                export class WebpTranscoderFactory {
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
                export class ArtDecoder extends DefaultDecoder {
                    public static class: java.lang.Class<ArtDecoder>;
                    public decodeJPEGFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor(param0: memory.BitmapPool, param1: number, param2: androidx.core.util.Pools.SynchronizedPool<any>);
                    public decodeFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeJPEGFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public getBitmapSize(param0: number, param1: number, param2: globalAndroid.graphics.BitmapFactory.Options): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace platform {
                export abstract class DefaultDecoder extends PlatformDecoder {
                    public static class: java.lang.Class<DefaultDecoder>;
                    public decodeJPEGFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeStaticImageFromStream(param0: java.io.InputStream, param1: globalAndroid.graphics.BitmapFactory.Options, param2: globalAndroid.graphics.Rect): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor(param0: memory.BitmapPool, param1: number, param2: androidx.core.util.Pools.SynchronizedPool<any>);
                    public decodeFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeJPEGFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public getBitmapSize(param0: number, param1: number, param2: globalAndroid.graphics.BitmapFactory.Options): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace platform {
                export class GingerbreadPurgeableDecoder extends nativecode.DalvikPurgeableDecoder {
                    public static class: java.lang.Class<GingerbreadPurgeableDecoder>;
                    public decodeJPEGFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor();
                    public decodeFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeJPEGByteArrayAsPurgeable(param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>, param1: number, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                    public decodeJPEGFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeByteArrayAsPurgeable(param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>, param1: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace platform {
                export class KitKatPurgeableDecoder extends nativecode.DalvikPurgeableDecoder {
                    public static class: java.lang.Class<KitKatPurgeableDecoder>;
                    public decodeJPEGFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor();
                    public decodeFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor(param0: memory.FlexByteArrayPool);
                    public decodeJPEGByteArrayAsPurgeable(param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>, param1: number, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                    public decodeJPEGFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeByteArrayAsPurgeable(param0: facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>, param1: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace platform {
                export class OreoDecoder extends DefaultDecoder {
                    public static class: java.lang.Class<OreoDecoder>;
                    public decodeJPEGFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor(param0: memory.BitmapPool, param1: number, param2: androidx.core.util.Pools.SynchronizedPool<any>);
                    public decodeFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeJPEGFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public getBitmapSize(param0: number, param1: number, param2: globalAndroid.graphics.BitmapFactory.Options): number;
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
                    public static class: java.lang.Class<PlatformDecoder>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.platform.PlatformDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        decodeFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        decodeJPEGFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        decodeFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                        decodeJPEGFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    });
                    public constructor();
                    public decodeJPEGFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeFromEncodedImage(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public decodeJPEGFromEncodedImageWithColorSpace(param0: image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number, param4: globalAndroid.graphics.ColorSpace): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
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
                    public static class: java.lang.Class<PlatformDecoderFactory>;
                    public constructor();
                    public static buildPlatformDecoder(param0: memory.PoolFactory, param1: boolean): PlatformDecoder;
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
                    public static class: java.lang.Class<PreverificationHelper>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace postprocessors {
                export class BlurPostProcessor extends request.BasePostprocessor {
                    public static class: java.lang.Class<BlurPostProcessor>;
                    public constructor(param0: number, param1: globalAndroid.content.Context, param2: number);
                    public process(param0: globalAndroid.graphics.Bitmap, param1: bitmaps.PlatformBitmapFactory): facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
                    public constructor();
                    public constructor(param0: number, param1: globalAndroid.content.Context);
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
                    public constructor(param0: boolean);
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
            export namespace postprocessors {
                export class RoundPostprocessor extends request.BasePostprocessor {
                    public static class: java.lang.Class<RoundPostprocessor>;
                    public constructor(param0: boolean);
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
                    export class AddImageTransformMetaDataConsumer extends DelegatingConsumer<image.EncodedImage,image.EncodedImage> {
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
                export abstract class BaseConsumer<T>  extends Consumer<any> {
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
                export abstract class BaseNetworkFetcher<FETCH_STATE>  extends NetworkFetcher<any> {
                    public static class: java.lang.Class<BaseNetworkFetcher<any>>;
                    public onFetchCompletion(param0: any, param1: number): void;
                    public getExtraMap(param0: any, param1: number): java.util.Map<string,string>;
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
                export class BaseProducerContext extends ProducerContext {
                    public static class: java.lang.Class<BaseProducerContext>;
                    public getPriority(): common.Priority;
                    public constructor(param0: request.ImageRequest, param1: string, param2: ProducerListener, param3: any, param4: request.ImageRequest.RequestLevel, param5: boolean, param6: boolean, param7: common.Priority);
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
                export class BaseProducerContextCallbacks extends ProducerContextCallbacks {
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
                    public constructor(param0: cache.MemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>, param1: cache.CacheKeyFactory, param2: Producer<facebook.common.references.CloseableReference<image.CloseableImage>>);
                    public produceResults(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public wrapConsumer(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: facebook.cache.common.CacheKey, param2: boolean): Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>;
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
                export class BitmapMemoryCacheKeyMultiplexProducer extends MultiplexProducer<globalAndroid.util.Pair<facebook.cache.common.CacheKey,request.ImageRequest.RequestLevel>,facebook.common.references.CloseableReference<image.CloseableImage>> {
                    public static class: java.lang.Class<BitmapMemoryCacheKeyMultiplexProducer>;
                    public constructor(param0: Producer<any>);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getKey(param0: ProducerContext): any;
                    public cloneOrNull(param0: any): any;
                    public getKey(param0: ProducerContext): globalAndroid.util.Pair<facebook.cache.common.CacheKey,request.ImageRequest.RequestLevel>;
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
                    public constructor(param0: cache.MemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>, param1: cache.CacheKeyFactory, param2: Producer<facebook.common.references.CloseableReference<image.CloseableImage>>);
                    public produceResults(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public wrapConsumer(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: facebook.cache.common.CacheKey, param2: boolean): Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>;
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
                    export class BitmapPrepareConsumer extends DelegatingConsumer<facebook.common.references.CloseableReference<image.CloseableImage>,facebook.common.references.CloseableReference<image.CloseableImage>> {
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
                    export class OnFirstImageConsumer extends DelegatingConsumer<image.EncodedImage,image.EncodedImage> {
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
                export class Consumer<T>  extends java.lang.Object {
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
                    export class Status {
                        public static class: java.lang.Class<Status>;
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
                    public produceResults(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public constructor(param0: facebook.common.memory.ByteArrayPool, param1: java.util.concurrent.Executor, param2: decoder.ImageDecoder, param3: decoder.ProgressiveJpegConfig, param4: boolean, param5: boolean, param6: boolean, param7: Producer<image.EncodedImage>, param8: number, param9: core.CloseableReferenceFactory);
                }
                export namespace DecodeProducer {
                    export class LocalImagesProgressiveDecoder extends ProgressiveDecoder {
                        public static class: java.lang.Class<LocalImagesProgressiveDecoder>;
                        public constructor(param0: Consumer<any>);
                        public getQualityInfo(): image.QualityInfo;
                        public constructor();
                        public updateDecodeJob(param0: image.EncodedImage, param1: number): boolean;
                        public onFailure(param0: java.lang.Throwable): void;
                        public constructor(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext, param2: boolean, param3: number);
                        public getIntermediateImageEndOffset(param0: image.EncodedImage): number;
                        public onProgressUpdate(param0: number): void;
                        public onCancellation(): void;
                        public onNewResult(param0: any, param1: number): void;
                    }
                    export class NetworkImagesProgressiveDecoder extends ProgressiveDecoder {
                        public static class: java.lang.Class<NetworkImagesProgressiveDecoder>;
                        public constructor(param0: Consumer<any>);
                        public getQualityInfo(): image.QualityInfo;
                        public constructor();
                        public constructor(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext, param2: decoder.ProgressiveJpegParser, param3: decoder.ProgressiveJpegConfig, param4: boolean, param5: number);
                        public updateDecodeJob(param0: image.EncodedImage, param1: number): boolean;
                        public onFailure(param0: java.lang.Throwable): void;
                        public constructor(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext, param2: boolean, param3: number);
                        public getIntermediateImageEndOffset(param0: image.EncodedImage): number;
                        public onProgressUpdate(param0: number): void;
                        public onCancellation(): void;
                        public onNewResult(param0: any, param1: number): void;
                    }
                    export abstract class ProgressiveDecoder extends DelegatingConsumer<image.EncodedImage,facebook.common.references.CloseableReference<image.CloseableImage>> {
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
                        public constructor(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext, param2: boolean, param3: number);
                        public onNewResultImpl(param0: any, param1: number): void;
                        public getIntermediateImageEndOffset(param0: image.EncodedImage): number;
                        public onCancellation(): void;
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
                export abstract class DelegatingConsumer<I, O>  extends BaseConsumer<any> {
                    public static class: java.lang.Class<DelegatingConsumer<any,any>>;
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
                    export class DiskCacheWriteConsumer extends DelegatingConsumer<image.EncodedImage,image.EncodedImage> {
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
                export class EncodedCacheKeyMultiplexProducer extends MultiplexProducer<globalAndroid.util.Pair<facebook.cache.common.CacheKey,request.ImageRequest.RequestLevel>,image.EncodedImage> {
                    public static class: java.lang.Class<EncodedCacheKeyMultiplexProducer>;
                    public constructor(param0: Producer<any>);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getKey(param0: ProducerContext): any;
                    public cloneOrNull(param0: any): any;
                    public cloneOrNull(param0: image.EncodedImage): image.EncodedImage;
                    public getKey(param0: ProducerContext): globalAndroid.util.Pair<facebook.cache.common.CacheKey,request.ImageRequest.RequestLevel>;
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
                    public constructor(param0: cache.MemoryCache<facebook.cache.common.CacheKey,facebook.common.memory.PooledByteBuffer>, param1: cache.CacheKeyFactory, param2: Producer<image.EncodedImage>);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
                export namespace EncodedMemoryCacheProducer {
                    export class EncodedMemoryCacheConsumer extends DelegatingConsumer<image.EncodedImage,image.EncodedImage> {
                        public static class: java.lang.Class<EncodedMemoryCacheConsumer>;
                        public constructor(param0: Consumer<any>);
                        public constructor();
                        public onNewResultImpl(param0: image.EncodedImage, param1: number): void;
                        public onFailure(param0: java.lang.Throwable): void;
                        public onNewResultImpl(param0: any, param1: number): void;
                        public constructor(param0: Consumer<image.EncodedImage>, param1: cache.MemoryCache<facebook.cache.common.CacheKey,facebook.common.memory.PooledByteBuffer>, param2: facebook.cache.common.CacheKey, param3: boolean);
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
                export class FetchState {
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
                export class HttpUrlConnectionNetworkFetcher extends BaseNetworkFetcher<HttpUrlConnectionNetworkFetcher.HttpUrlConnectionNetworkFetchState> {
                    public static class: java.lang.Class<HttpUrlConnectionNetworkFetcher>;
                    public static HTTP_TEMPORARY_REDIRECT: number;
                    public static HTTP_PERMANENT_REDIRECT: number;
                    public static HTTP_DEFAULT_TIMEOUT: number;
                    public onFetchCompletion(param0: any, param1: number): void;
                    public getExtraMap(param0: any, param1: number): java.util.Map<string,string>;
                    public constructor();
                    public getExtraMap(param0: HttpUrlConnectionNetworkFetcher.HttpUrlConnectionNetworkFetchState, param1: number): java.util.Map<string,string>;
                    public fetch(param0: HttpUrlConnectionNetworkFetcher.HttpUrlConnectionNetworkFetchState, param1: NetworkFetcher.Callback): void;
                    public createFetchState(param0: Consumer<image.EncodedImage>, param1: ProducerContext): any;
                    public createFetchState(param0: Consumer<image.EncodedImage>, param1: ProducerContext): HttpUrlConnectionNetworkFetcher.HttpUrlConnectionNetworkFetchState;
                    public onFetchCompletion(param0: HttpUrlConnectionNetworkFetcher.HttpUrlConnectionNetworkFetchState, param1: number): void;
                    public shouldPropagate(param0: any): boolean;
                    public fetch(param0: any, param1: NetworkFetcher.Callback): void;
                    public constructor(param0: number);
                }
                export namespace HttpUrlConnectionNetworkFetcher {
                    export class HttpUrlConnectionNetworkFetchState extends FetchState {
                        public static class: java.lang.Class<HttpUrlConnectionNetworkFetchState>;
                        public constructor(param0: Consumer<image.EncodedImage>, param1: ProducerContext);
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
                export class JobScheduler {
                    public static class: java.lang.Class<JobScheduler>;
                    public getQueuedTime(): number;
                    public clearJob(): void;
                    public constructor(param0: java.util.concurrent.Executor, param1: JobScheduler.JobRunnable, param2: number);
                    public updateJob(param0: image.EncodedImage, param1: number): boolean;
                    public scheduleJob(): boolean;
                }
                export namespace JobScheduler {
                    export class JobRunnable {
                        public static class: java.lang.Class<JobRunnable>;
                        /**
						 * Constructs a new instance of the com.facebook.imagepipeline.producers.JobScheduler$JobRunnable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
                        public constructor(implementation: {
                            run(param0: image.EncodedImage, param1: number): void;
                        });
                        public constructor();
                        public run(param0: image.EncodedImage, param1: number): void;
                    }
                    export class JobStartExecutorSupplier {
                        public static class: java.lang.Class<JobStartExecutorSupplier>;
                    }
                    export class JobState {
                        public static class: java.lang.Class<JobState>;
                        public static IDLE: JobState;
                        public static QUEUED: JobState;
                        public static RUNNING: JobState;
                        public static RUNNING_AND_PENDING: JobState;
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
                export class LocalContentUriThumbnailFetchProducer extends LocalFetchProducer implements ThumbnailProducer<image.EncodedImage>  {
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
                export abstract class MultiplexProducer<K, T>  extends Producer<any> {
                    public static class: java.lang.Class<MultiplexProducer<any,any>>;
                    public constructor(param0: Producer<any>);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getKey(param0: ProducerContext): any;
                    public cloneOrNull(param0: any): any;
                }
                export namespace MultiplexProducer {
                    export class Multiplexer {
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
                    public static notifyConsumer(param0: facebook.common.memory.PooledByteBufferOutputStream, param1: number, param2: common.BytesRange, param3: Consumer<image.EncodedImage>): void;
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
                export class NetworkFetcher<FETCH_STATE>  extends java.lang.Object {
                    public static class: java.lang.Class<NetworkFetcher<any>>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.NetworkFetcher<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        createFetchState(param0: Consumer<image.EncodedImage>, param1: ProducerContext): FETCH_STATE;
                        fetch(param0: FETCH_STATE, param1: NetworkFetcher.Callback): void;
                        shouldPropagate(param0: FETCH_STATE): boolean;
                        onFetchCompletion(param0: FETCH_STATE, param1: number): void;
                        getExtraMap(param0: FETCH_STATE, param1: number): java.util.Map<string,string>;
                    });
                    public constructor();
                    public createFetchState(param0: Consumer<image.EncodedImage>, param1: ProducerContext): FETCH_STATE;
                    public getExtraMap(param0: FETCH_STATE, param1: number): java.util.Map<string,string>;
                    public fetch(param0: FETCH_STATE, param1: NetworkFetcher.Callback): void;
                    public shouldPropagate(param0: FETCH_STATE): boolean;
                    public onFetchCompletion(param0: FETCH_STATE, param1: number): void;
                }
                export namespace NetworkFetcher {
                    export class Callback {
                        public static class: java.lang.Class<Callback>;
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
                export class NullProducer<T>  extends Producer<any> {
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
                    public constructor(param0: cache.BufferedDiskCache, param1: cache.CacheKeyFactory, param2: facebook.common.memory.PooledByteBufferFactory, param3: facebook.common.memory.ByteArrayPool, param4: Producer<image.EncodedImage>);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
                export namespace PartialDiskCacheProducer {
                    export class PartialDiskCacheConsumer extends DelegatingConsumer<image.EncodedImage,image.EncodedImage> {
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
                    public constructor(param0: cache.MemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>, param1: cache.CacheKeyFactory, param2: Producer<facebook.common.references.CloseableReference<image.CloseableImage>>);
                    public produceResults(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public getProducerName(): string;
                }
                export namespace PostprocessedBitmapMemoryCacheProducer {
                    export class CachedPostprocessorConsumer extends DelegatingConsumer<facebook.common.references.CloseableReference<image.CloseableImage>,facebook.common.references.CloseableReference<image.CloseableImage>> {
                        public static class: java.lang.Class<CachedPostprocessorConsumer>;
                        public constructor(param0: Consumer<any>);
                        public constructor();
                        public onFailure(param0: java.lang.Throwable): void;
                        public onNewResultImpl(param0: any, param1: number): void;
                        public onProgressUpdate(param0: number): void;
                        public onCancellation(): void;
                        public onNewResult(param0: any, param1: number): void;
                        public constructor(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: facebook.cache.common.CacheKey, param2: boolean, param3: cache.MemoryCache<facebook.cache.common.CacheKey,image.CloseableImage>, param4: boolean);
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
                    public constructor(param0: Producer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: bitmaps.PlatformBitmapFactory, param2: java.util.concurrent.Executor);
                }
                export namespace PostprocessorProducer {
                    export class PostprocessorConsumer extends DelegatingConsumer<facebook.common.references.CloseableReference<image.CloseableImage>,facebook.common.references.CloseableReference<image.CloseableImage>> {
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
                        public constructor(param0: Consumer<facebook.common.references.CloseableReference<image.CloseableImage>>, param1: ProducerListener, param2: string, param3: request.Postprocessor, param4: ProducerContext);
                        public onNewResultImpl(param0: facebook.common.references.CloseableReference<image.CloseableImage>, param1: number): void;
                    }
                    export class RepeatedPostprocessorConsumer extends DelegatingConsumer<facebook.common.references.CloseableReference<image.CloseableImage>,facebook.common.references.CloseableReference<image.CloseableImage>> implements request.RepeatedPostprocessorRunner  {
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
                    export class SingleUsePostprocessorConsumer extends DelegatingConsumer<facebook.common.references.CloseableReference<image.CloseableImage>,facebook.common.references.CloseableReference<image.CloseableImage>> {
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
                export class Producer<T>  extends java.lang.Object {
                    public static class: java.lang.Class<Producer<any>>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.Producer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        produceResults(param0: Consumer<T>, param1: ProducerContext): void;
                    });
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
                export class ProducerConstants {
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
                export class ProducerContext {
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
                export class ProducerContextCallbacks {
                    public static class: java.lang.Class<ProducerContextCallbacks>;
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
                    public static class: java.lang.Class<ProducerListener>;
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
                    export class RemoveImageTransformMetaDataConsumer extends DelegatingConsumer<image.EncodedImage,facebook.common.references.CloseableReference<facebook.common.memory.PooledByteBuffer>> {
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
                    public constructor(param0: java.util.concurrent.Executor, param1: facebook.common.memory.PooledByteBufferFactory, param2: Producer<image.EncodedImage>, param3: boolean, param4: transcoder.ImageTranscoderFactory);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    public produceResults(param0: Consumer<image.EncodedImage>, param1: ProducerContext): void;
                }
                export namespace ResizeAndRotateProducer {
                    export class TransformingConsumer extends DelegatingConsumer<image.EncodedImage,image.EncodedImage> {
                        public static class: java.lang.Class<TransformingConsumer>;
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
                    public constructor(param0: request.ImageRequest, param1: string, param2: ProducerListener, param3: any, param4: request.ImageRequest.RequestLevel, param5: boolean, param6: boolean, param7: common.Priority);
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
                export abstract class StatefulProducerRunnable<T>  extends facebook.common.executors.StatefulRunnable<any> {
                    public static class: java.lang.Class<StatefulProducerRunnable<any>>;
                    public onFailure(param0: java.lang.Exception): void;
                    public onCancellation(): void;
                    public constructor();
                    public getExtraMapOnSuccess(param0: any): java.util.Map<string,string>;
                    public getExtraMapOnFailure(param0: java.lang.Exception): java.util.Map<string,string>;
                    public disposeResult(param0: any): void;
                    public getExtraMapOnCancellation(): java.util.Map<string,string>;
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
                export class SwallowResultProducer<T>  extends Producer<java.lang.Void> {
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
                export class ThreadHandoffProducer<T>  extends Producer<any> {
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
                export class ThreadHandoffProducerQueue {
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
                export class ThrottlingProducer<T>  extends Producer<any> {
                    public static class: java.lang.Class<ThrottlingProducer<any>>;
                    public static PRODUCER_NAME: string;
                    public constructor(param0: number, param1: java.util.concurrent.Executor, param2: Producer<any>);
                    public produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                }
                export namespace ThrottlingProducer {
                    export class ThrottlerConsumer extends DelegatingConsumer<any,any> {
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
                    export class ThumbnailConsumer extends DelegatingConsumer<image.EncodedImage,image.EncodedImage> {
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
                export class ThumbnailProducer<T>  extends Producer<any> {
                    public static class: java.lang.Class<ThumbnailProducer<any>>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.ThumbnailProducer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        canProvideImageForSize(param0: common.ResizeOptions): boolean;
                        produceResults(param0: Consumer<any>, param1: ProducerContext): void;
                    });
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
                export class ThumbnailSizeChecker {
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
                    export class WebpTranscodeConsumer extends DelegatingConsumer<image.EncodedImage,image.EncodedImage> {
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
                export abstract class BasePostprocessor extends Postprocessor {
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
                export class HasImageRequest {
                    public static class: java.lang.Class<HasImageRequest>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.request.HasImageRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        getImageRequest(): ImageRequest;
                    });
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
                export class ImageRequest {
                    public static class: java.lang.Class<ImageRequest>;
                    public getPreferredHeight(): number;
                    public getSourceUriType(): number;
                    public isDiskCacheEnabled(): boolean;
                    public getResizingAllowedOverride(): java.lang.Boolean;
                    public getResizeOptions(): common.ResizeOptions;
                    public toString(): string;
                    public constructor(param0: ImageRequestBuilder);
                    public getRequestListener(): listener.RequestListener;
                    public getCacheChoice(): ImageRequest.CacheChoice;
                    public getRotationOptions(): common.RotationOptions;
                    /** @deprecated */
                    public getAutoRotateEnabled(): boolean;
                    public hashCode(): number;
                    public getLocalThumbnailPreviewsEnabled(): boolean;
                    public getImageDecodeOptions(): common.ImageDecodeOptions;
                    public getSourceUri(): globalAndroid.net.Uri;
                    public static fromFile(param0: java.io.File): ImageRequest;
                    public getPriority(): common.Priority;
                    public getProgressiveRenderingEnabled(): boolean;
                    public getSourceFile(): java.io.File;
                    public getBytesRange(): common.BytesRange;
                    public shouldDecodePrefetches(): java.lang.Boolean;
                    public static fromUri(param0: globalAndroid.net.Uri): ImageRequest;
                    public equals(param0: any): boolean;
                    public getPreferredWidth(): number;
                    public getPostprocessor(): Postprocessor;
                    public static fromUri(param0: string): ImageRequest;
                    public isMemoryCacheEnabled(): boolean;
                    public getLowestPermittedRequestLevel(): ImageRequest.RequestLevel;
                }
                export namespace ImageRequest {
                    export class CacheChoice {
                        public static class: java.lang.Class<CacheChoice>;
                        public static SMALL: CacheChoice;
                        public static DEFAULT: CacheChoice;
                        public static values(): native.Array<CacheChoice>;
                        public static valueOf(param0: string): CacheChoice;
                    }
                    export class RequestLevel {
                        public static class: java.lang.Class<RequestLevel>;
                        public static FULL_FETCH: RequestLevel;
                        public static DISK_CACHE: RequestLevel;
                        public static ENCODED_MEMORY_CACHE: RequestLevel;
                        public static BITMAP_MEMORY_CACHE: RequestLevel;
                        public static values(): native.Array<RequestLevel>;
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
                export class ImageRequestBuilder {
                    public static class: java.lang.Class<ImageRequestBuilder>;
                    public disableMemoryCache(): ImageRequestBuilder;
                    public setResizeOptions(param0: common.ResizeOptions): ImageRequestBuilder;
                    public setSource(param0: globalAndroid.net.Uri): ImageRequestBuilder;
                    public setRotationOptions(param0: common.RotationOptions): ImageRequestBuilder;
                    public setLocalThumbnailPreviewsEnabled(param0: boolean): ImageRequestBuilder;
                    public setShouldDecodePrefetches(param0: java.lang.Boolean): ImageRequestBuilder;
                    public isLocalThumbnailPreviewsEnabled(): boolean;
                    public setProgressiveRenderingEnabled(param0: boolean): ImageRequestBuilder;
                    public setRequestListener(param0: listener.RequestListener): ImageRequestBuilder;
                    public setBytesRange(param0: common.BytesRange): ImageRequestBuilder;
                    public isDiskCacheEnabled(): boolean;
                    public setResizingAllowedOverride(param0: java.lang.Boolean): ImageRequestBuilder;
                    public static fromRequest(param0: ImageRequest): ImageRequestBuilder;
                    public validate(): void;
                    public isProgressiveRenderingEnabled(): boolean;
                    public getResizingAllowedOverride(): java.lang.Boolean;
                    public getResizeOptions(): common.ResizeOptions;
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
                    public shouldDecodePrefetches(): java.lang.Boolean;
                    public getPostprocessor(): Postprocessor;
                    public isMemoryCacheEnabled(): boolean;
                    public getLowestPermittedRequestLevel(): ImageRequest.RequestLevel;
                    /** @deprecated */
                    public setAutoRotateEnabled(param0: boolean): ImageRequestBuilder;
                    public setImageDecodeOptions(param0: common.ImageDecodeOptions): ImageRequestBuilder;
                    public setLowestPermittedRequestLevel(param0: ImageRequest.RequestLevel): ImageRequestBuilder;
                }
                export namespace ImageRequestBuilder {
                    export class BuilderException {
                        public static class: java.lang.Class<BuilderException>;
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
                export class Postprocessor {
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
                export class RepeatedPostprocessor extends Postprocessor {
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
                export class RepeatedPostprocessorRunner {
                    public static class: java.lang.Class<RepeatedPostprocessorRunner>;
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
                export class DefaultFrescoSystrace extends FrescoSystrace.Systrace {
                    public static class: java.lang.Class<DefaultFrescoSystrace>;
                    public endSection(): void;
                    public isTracing(): boolean;
                    public constructor();
                    public beginSectionWithArgs(param0: string): FrescoSystrace.ArgsBuilder;
                    public beginSection(param0: string): void;
                }
                export namespace DefaultFrescoSystrace {
                    export class DefaultArgsBuilder extends FrescoSystrace.ArgsBuilder {
                        public static class: java.lang.Class<DefaultArgsBuilder>;
                        public arg(param0: string, param1: any): FrescoSystrace.ArgsBuilder;
                        public flush(): void;
                        public constructor(param0: string);
                        public arg(param0: string, param1: number): FrescoSystrace.ArgsBuilder;
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
                    public static class: java.lang.Class<FrescoSystrace>;
                    public static NO_OP_ARGS_BUILDER: FrescoSystrace.ArgsBuilder;
                    public static beginSectionWithArgs(param0: string): FrescoSystrace.ArgsBuilder;
                    public static endSection(): void;
                    public static beginSection(param0: string): void;
                    public static provide(param0: FrescoSystrace.Systrace): void;
                    public static isTracing(): boolean;
                }
                export namespace FrescoSystrace {
                    export class ArgsBuilder {
                        public static class: java.lang.Class<ArgsBuilder>;
                        /**
						 * Constructs a new instance of the com.facebook.imagepipeline.systrace.FrescoSystrace$ArgsBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
                        public constructor(implementation: {
                            flush(): void;
                            arg(param0: string, param1: any): ArgsBuilder;
                            arg(param0: string, param1: number): ArgsBuilder;
                            arg(param0: string, param1: number): ArgsBuilder;
                            arg(param0: string, param1: number): ArgsBuilder;
                        });
                        public constructor();
                        public arg(param0: string, param1: any): ArgsBuilder;
                        public flush(): void;
                        public arg(param0: string, param1: number): ArgsBuilder;
                    }
                    export class NoOpArgsBuilder extends ArgsBuilder {
                        public static class: java.lang.Class<NoOpArgsBuilder>;
                        public arg(param0: string, param1: any): ArgsBuilder;
                        public flush(): void;
                        public arg(param0: string, param1: number): ArgsBuilder;
                    }
                    export class Systrace {
                        public static class: java.lang.Class<Systrace>;
                        /**
						 * Constructs a new instance of the com.facebook.imagepipeline.systrace.FrescoSystrace$Systrace interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
                        public constructor(implementation: {
                            beginSection(param0: string): void;
                            beginSectionWithArgs(param0: string): ArgsBuilder;
                            endSection(): void;
                            isTracing(): boolean;
                        });
                        public constructor();
                        public endSection(): void;
                        public beginSectionWithArgs(param0: string): ArgsBuilder;
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
                    public static class: java.lang.Class<DownsampleUtil>;
                    public static DEFAULT_SAMPLE_SIZE: number;
                    public static determineDownsampleRatio(param0: common.RotationOptions, param1: common.ResizeOptions, param2: image.EncodedImage): number;
                    public static ratioToSampleSizeJPEG(param0: number): number;
                    public static roundToPowerOfTwo(param0: number): number;
                    public static ratioToSampleSize(param0: number): number;
                    public static determineSampleSize(param0: common.RotationOptions, param1: common.ResizeOptions, param2: image.EncodedImage, param3: number): number;
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
                    public static class: java.lang.Class<ImageTranscodeResult>;
                    public toString(): string;
                    public getTranscodeStatus(): number;
                    public constructor(param0: number);
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
                    public static class: java.lang.Class<ImageTranscoder>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.transcoder.ImageTranscoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        transcode(param0: image.EncodedImage, param1: java.io.OutputStream, param2: common.RotationOptions, param3: common.ResizeOptions, param4: imageformat.ImageFormat, param5: java.lang.Integer): ImageTranscodeResult;
                        canResize(param0: image.EncodedImage, param1: common.RotationOptions, param2: common.ResizeOptions): boolean;
                        canTranscode(param0: imageformat.ImageFormat): boolean;
                        getIdentifier(): string;
                    });
                    public constructor();
                    public canResize(param0: image.EncodedImage, param1: common.RotationOptions, param2: common.ResizeOptions): boolean;
                    public transcode(param0: image.EncodedImage, param1: java.io.OutputStream, param2: common.RotationOptions, param3: common.ResizeOptions, param4: imageformat.ImageFormat, param5: java.lang.Integer): ImageTranscodeResult;
                    public getIdentifier(): string;
                    public canTranscode(param0: imageformat.ImageFormat): boolean;
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
                    public static class: java.lang.Class<ImageTranscoderFactory>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.transcoder.ImageTranscoderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        createImageTranscoder(param0: imageformat.ImageFormat, param1: boolean): ImageTranscoder;
                    });
                    public constructor();
                    public createImageTranscoder(param0: imageformat.ImageFormat, param1: boolean): ImageTranscoder;
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
                    public static class: java.lang.Class<JpegTranscoderUtils>;
                    public static MIN_QUALITY: number;
                    public static MAX_QUALITY: number;
                    public static MIN_SCALE_NUMERATOR: number;
                    public static MAX_SCALE_NUMERATOR: number;
                    public static SCALE_DENOMINATOR: number;
                    public static INVERTED_EXIF_ORIENTATIONS: facebook.common.internal.ImmutableList<java.lang.Integer>;
                    public static DEFAULT_JPEG_QUALITY: number;
                    public static getSoftwareNumerator(param0: common.RotationOptions, param1: common.ResizeOptions, param2: image.EncodedImage, param3: boolean): number;
                    public static getRotationAngle(param0: common.RotationOptions, param1: image.EncodedImage): number;
                    public static getForceRotatedInvertedExifOrientation(param0: common.RotationOptions, param1: image.EncodedImage): number;
                    public constructor();
                    public static determineResizeRatio(param0: common.ResizeOptions, param1: number, param2: number): number;
                    public static roundNumerator(param0: number, param1: number): number;
                    public static calculateDownsampleNumerator(param0: number): number;
                    public static isRotationAngleAllowed(param0: number): boolean;
                    public static isExifOrientationAllowed(param0: number): boolean;
                    public static getTransformationMatrix(param0: image.EncodedImage, param1: common.RotationOptions): globalAndroid.graphics.Matrix;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace transcoder {
                export class MultiImageTranscoderFactory extends ImageTranscoderFactory {
                    public static class: java.lang.Class<MultiImageTranscoderFactory>;
                    public createImageTranscoder(param0: imageformat.ImageFormat, param1: boolean): ImageTranscoder;
                    public constructor(param0: number, param1: boolean, param2: ImageTranscoderFactory, param3: java.lang.Integer);
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace transcoder {
                export class SimpleImageTranscoder extends ImageTranscoder {
                    public static class: java.lang.Class<SimpleImageTranscoder>;
                    public constructor(param0: boolean, param1: number);
                    public canResize(param0: image.EncodedImage, param1: common.RotationOptions, param2: common.ResizeOptions): boolean;
                    public transcode(param0: image.EncodedImage, param1: java.io.OutputStream, param2: common.RotationOptions, param3: common.ResizeOptions, param4: imageformat.ImageFormat, param5: java.lang.Integer): ImageTranscodeResult;
                    public getIdentifier(): string;
                    public canTranscode(param0: imageformat.ImageFormat): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imagepipeline {
            export namespace transcoder {
                export class SimpleImageTranscoderFactory extends ImageTranscoderFactory {
                    public static class: java.lang.Class<SimpleImageTranscoderFactory>;
                    public createImageTranscoder(param0: imageformat.ImageFormat, param1: boolean): ImageTranscoder;
                    public constructor(param0: number);
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
                    public static class: java.lang.Class<TranscodeStatus>;
                    /**
					 * Constructs a new instance of the com.facebook.imagepipeline.transcoder.TranscodeStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                    });
                    public constructor();
                    public static TRANSCODING_ERROR: number;
                    public static TRANSCODING_NO_RESIZING: number;
                    public static TRANSCODING_SUCCESS: number;
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
                    public static class: java.lang.Class<BitmapTransformation>;
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
        export namespace imagepipelinebase {
            export class BuildConfig {
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
            export class BitmapUtil {
                public static class: java.lang.Class<BitmapUtil>;
                public static ALPHA_8_BYTES_PER_PIXEL: number;
                public static ARGB_4444_BYTES_PER_PIXEL: number;
                public static ARGB_8888_BYTES_PER_PIXEL: number;
                public static RGB_565_BYTES_PER_PIXEL: number;
                public static RGBA_F16_BYTES_PER_PIXEL: number;
                public static MAX_BITMAP_SIZE: number;
                public static decodeDimensions(param0: java.io.InputStream): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
                public static decodeDimensionsAndColorSpace(param0: java.io.InputStream): ImageMetaData;
                public static getPixelSizeForBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): number;
                public static getSizeInBytes(param0: globalAndroid.graphics.Bitmap): number;
                public static decodeDimensions(param0: globalAndroid.net.Uri): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
                public constructor();
                public static decodeDimensions(param0: native.Array<number>): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
                public static getSizeInByteForBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageutils {
            export class HeifExifUtil {
                public static class: java.lang.Class<HeifExifUtil>;
                public static TAG: string;
                public static getOrientation(param0: java.io.InputStream): number;
                public constructor();
            }
            export namespace HeifExifUtil {
                export class HeifExifUtilAndroidN {
                    public static class: java.lang.Class<HeifExifUtilAndroidN>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageutils {
            export class ImageMetaData {
                public static class: java.lang.Class<ImageMetaData>;
                public constructor(param0: number, param1: number, param2: globalAndroid.graphics.ColorSpace);
                public getColorSpace(): globalAndroid.graphics.ColorSpace;
                public getDimensions(): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageutils {
            export class JfifUtil {
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
            export class StreamProcessor {
                public static class: java.lang.Class<StreamProcessor>;
                public static readPackedInt(param0: java.io.InputStream, param1: number, param2: boolean): number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageutils {
            export class TiffUtil {
                public static class: java.lang.Class<TiffUtil>;
                public static TIFF_BYTE_ORDER_BIG_END: number;
                public static TIFF_BYTE_ORDER_LITTLE_END: number;
                public static TIFF_TAG_ORIENTATION: number;
                public static TIFF_TYPE_SHORT: number;
                public static getAutoRotateAngleFromOrientation(param0: number): number;
                public static readOrientationFromTIFF(param0: java.io.InputStream, param1: number): number;
            }
            export namespace TiffUtil {
                export class TiffHeader {
                    public static class: java.lang.Class<TiffHeader>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace imageutils {
            export class WebpUtil {
                public static class: java.lang.Class<WebpUtil>;
                public static getSize(param0: java.io.InputStream): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
                public static get2BytesAsInt(param0: java.io.InputStream): number;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace nativefilters {
            export class BuildConfig {
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
        export namespace nativeimagetranscoder {
            export class BuildConfig {
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
        export namespace soloader {
            export class Api18TraceUtils {
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
                public makeUnpacker(): UnpackingSoSource.Unpacker;
                public constructor(param0: globalAndroid.content.Context, param1: java.io.File, param2: string, param3: number);
                public getDepsBlock(): native.Array<number>;
                public constructor(param0: java.io.File, param1: number);
                public constructor();
            }
            export namespace ApkSoSource {
                export class ApkUnpacker extends ExtractFromZipSoSource.ZipUnpacker {
                    public static class: java.lang.Class<ApkUnpacker>;
                    public shouldExtract(param0: java.util.zip.ZipEntry, param1: string): boolean;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class ApplicationSoSource extends SoSource {
                public static class: java.lang.Class<ApplicationSoSource>;
                public addToLdLibraryPath(param0: java.util.Collection<string>): void;
                public unpackLibrary(param0: string): java.io.File;
                public prepare(param0: number): void;
                public constructor(param0: globalAndroid.content.Context, param1: number);
                public loadLibrary(param0: string, param1: number, param2: globalAndroid.os.StrictMode.ThreadPolicy): number;
                public checkAndMaybeUpdate(): boolean;
                public toString(): string;
                public constructor();
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
            export class DoNotOptimize {
                public static class: java.lang.Class<DoNotOptimize>;
                /**
				 * Constructs a new instance of the com.facebook.soloader.DoNotOptimize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                });
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class Elf32_Dyn {
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
            export class Elf32_Ehdr {
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
            export class Elf32_Phdr {
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
            export class Elf32_Shdr {
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
            export class Elf64_Dyn {
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
            export class Elf64_Ehdr {
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
            export class Elf64_Phdr {
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
            export class Elf64_Shdr {
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
                    public getDsoManifest(): UnpackingSoSource.DsoManifest;
                }
                export namespace ExoUnpacker {
                    export class FileBackedInputDsoIterator extends UnpackingSoSource.InputDsoIterator {
                        public static class: java.lang.Class<FileBackedInputDsoIterator>;
                        public next(): UnpackingSoSource.InputDso;
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
            export class FileLocker {
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
            export class MergedSoMapping {
                public static class: java.lang.Class<MergedSoMapping>;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class MinElf {
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
                export class ElfError {
                    public static class: java.lang.Class<ElfError>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export abstract class NativeLibrary {
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
            export class SoFileLoader {
                public static class: java.lang.Class<SoFileLoader>;
                /**
				 * Constructs a new instance of the com.facebook.soloader.SoFileLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    load(param0: string, param1: number): void;
                });
                public constructor();
                public load(param0: string, param1: number): void;
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export class SoLoader {
                public static class: java.lang.Class<SoLoader>;
                public static SOLOADER_ENABLE_EXOPACKAGE: number;
                public static SOLOADER_ALLOW_ASYNC_INIT: number;
                public static SOLOADER_LOOK_IN_ZIP: number;
                public static SOLOADER_DISABLE_BACKUP_SOSOURCE: number;
                public static loadLibrary(param0: string): boolean;
                public constructor();
                public static makeNonZipPath(param0: string): string;
                public static setInTestMode(): void;
                public static setSystemLoadLibraryWrapper(param0: SystemLoadLibraryWrapper): void;
                public static unpackLibraryAndDependencies(param0: string): java.io.File;
                public static makeLdLibraryPath(): string;
                public static loadLibrary(param0: string, param1: number): boolean;
                public static init(param0: globalAndroid.content.Context, param1: boolean): void;
                public static init(param0: globalAndroid.content.Context, param1: number): void;
                public static deinitForTest(): void;
                public static areSoSourcesAbisSupported(): boolean;
                public static prependSoSource(param0: SoSource): void;
            }
            export namespace SoLoader {
                export class Api14Utils {
                    public static class: java.lang.Class<Api14Utils>;
                    public static getClassLoaderLdLoadLibrary(): string;
                }
                export class WrongAbiError {
                    public static class: java.lang.Class<WrongAbiError>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace facebook {
        export namespace soloader {
            export abstract class SoSource {
                public static class: java.lang.Class<SoSource>;
                public static LOAD_RESULT_NOT_FOUND: number;
                public static LOAD_RESULT_LOADED: number;
                public static LOAD_RESULT_IMPLICITLY_PROVIDED: number;
                public static LOAD_RESULT_CORRUPTED_LIB_FILE: number;
                public static LOAD_FLAG_ALLOW_IMPLICIT_PROVISION: number;
                public static LOAD_FLAG_ALLOW_SOURCE_CHANGE: number;
                public static LOAD_FLAG_MIN_CUSTOM_FLAG: number;
                public static PREPARE_FLAG_ALLOW_ASYNC_INIT: number;
                public static PREPARE_FLAG_FORCE_REFRESH: number;
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
            export class SysUtil {
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
                export class LollipopSysdeps {
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
            export class SystemLoadLibraryWrapper {
                public static class: java.lang.Class<SystemLoadLibraryWrapper>;
                /**
				 * Constructs a new instance of the com.facebook.soloader.SystemLoadLibraryWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    loadLibrary(param0: string): void;
                });
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
                public mCorruptedLib: string;
                public constructor(param0: globalAndroid.content.Context, param1: string);
                public constructor(param0: globalAndroid.content.Context, param1: java.io.File);
                public getSoSourceAbis(): native.Array<string>;
                public makeUnpacker(): UnpackingSoSource.Unpacker;
                public prepare(param0: number): void;
                public loadLibrary(param0: string, param1: number, param2: globalAndroid.os.StrictMode.ThreadPolicy): number;
                public setSoSourceAbis(param0: native.Array<string>): void;
                public getDepsBlock(): native.Array<number>;
                public static getSoStorePath(param0: globalAndroid.content.Context, param1: string): java.io.File;
                public prepare(param0: string): void;
                public constructor(param0: java.io.File, param1: number);
                public constructor();
            }
            export namespace UnpackingSoSource {
                export class Dso {
                    public static class: java.lang.Class<Dso>;
                    public name: string;
                    public hash: string;
                    public constructor(param0: string, param1: string);
                }
                export class DsoManifest {
                    public static class: java.lang.Class<DsoManifest>;
                    public dsos: native.Array<Dso>;
                    public write(param0: java.io.DataOutput): void;
                    public constructor(param0: native.Array<Dso>);
                }
                export class InputDso {
                    public static class: java.lang.Class<InputDso>;
                    public dso: Dso;
                    public content: java.io.InputStream;
                    public close(): void;
                    public constructor(param0: Dso, param1: java.io.InputStream);
                }
                export abstract class InputDsoIterator {
                    public static class: java.lang.Class<InputDsoIterator>;
                    public constructor();
                    public close(): void;
                    public next(): InputDso;
                    public hasNext(): boolean;
                }
                export abstract class Unpacker {
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
                    export class BetterImageSpan {
                        public static class: java.lang.Class<BetterImageSpan>;
                        public static ALIGN_BOTTOM: number;
                        public static ALIGN_BASELINE: number;
                        public static ALIGN_CENTER: number;
                        public draw(param0: globalAndroid.graphics.Canvas, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: globalAndroid.graphics.Paint): void;
                        public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number);
                        public getDrawable(): globalAndroid.graphics.drawable.Drawable;
                        public static normalizeAlignment(param0: number): number;
                        public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                        public updateBounds(): void;
                        public getSize(param0: globalAndroid.graphics.Paint, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Paint.FontMetricsInt): number;
                    }
                    export namespace BetterImageSpan {
                        export class BetterImageSpanAlignment {
                            public static class: java.lang.Class<BetterImageSpanAlignment>;
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


declare module com {
	export module facebook {
		export module imagepipeline {
			export module backends {
				export module okhttp3 {
					export class BuildConfig extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static BUILD_TYPE: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module backends {
				export module okhttp3 {
					export class OkHttpImagePipelineConfigFactory extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.OkHttpImagePipelineConfigFactory>;
						public constructor();
						public static newBuilder(param0: globalAndroid.content.Context, param1: okhttp3.OkHttpClient): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module backends {
				export module okhttp3 {
					export class OkHttpNetworkFetcher extends com.facebook.imagepipeline.producers.BaseNetworkFetcher<com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState> {
						public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher>;
						public constructor(param0: okhttp3.OkHttpClient);
						public createFetchState(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState;
						public constructor(param0: okhttp3.Call.Factory, param1: java.util.concurrent.Executor);
						public getExtraMap(param0: com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState, param1: number): java.util.Map<string,string>;
						public onFetchCompletion(param0: com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState, param1: number): void;
						public constructor(param0: okhttp3.Call.Factory, param1: java.util.concurrent.Executor, param2: boolean);
						public fetchWithRequest(param0: com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState, param1: com.facebook.imagepipeline.producers.NetworkFetcher.Callback, param2: okhttp3.Request): void;
						public fetch(param0: com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState, param1: com.facebook.imagepipeline.producers.NetworkFetcher.Callback): void;
					}
					export module OkHttpNetworkFetcher {
						export class OkHttpNetworkFetchState {
							public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.OkHttpNetworkFetcher.OkHttpNetworkFetchState>;
							public submitTime: number;
							public responseTime: number;
							public fetchCompleteTime: number;
							public constructor(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module backends {
				export module okhttp3 {
					export class R extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.R>;
					}
					export module R {
						export class attr extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.R.attr>;
							public static alpha: number;
							public static font: number;
							public static fontProviderAuthority: number;
							public static fontProviderCerts: number;
							public static fontProviderFetchStrategy: number;
							public static fontProviderFetchTimeout: number;
							public static fontProviderPackage: number;
							public static fontProviderQuery: number;
							public static fontStyle: number;
							public static fontVariationSettings: number;
							public static fontWeight: number;
							public static ttcIndex: number;
						}
						export class color extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.R.color>;
							public static notification_action_color_filter: number;
							public static notification_icon_bg_color: number;
							public static ripple_material_light: number;
							public static secondary_text_default_material_light: number;
						}
						export class dimen extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.R.dimen>;
							public static compat_button_inset_horizontal_material: number;
							public static compat_button_inset_vertical_material: number;
							public static compat_button_padding_horizontal_material: number;
							public static compat_button_padding_vertical_material: number;
							public static compat_control_corner_material: number;
							public static compat_notification_large_icon_max_height: number;
							public static compat_notification_large_icon_max_width: number;
							public static notification_action_icon_size: number;
							public static notification_action_text_size: number;
							public static notification_big_circle_margin: number;
							public static notification_content_margin_start: number;
							public static notification_large_icon_height: number;
							public static notification_large_icon_width: number;
							public static notification_main_column_padding_top: number;
							public static notification_media_narrow_margin: number;
							public static notification_right_icon_size: number;
							public static notification_right_side_padding_top: number;
							public static notification_small_icon_background_padding: number;
							public static notification_small_icon_size_as_large: number;
							public static notification_subtext_size: number;
							public static notification_top_pad: number;
							public static notification_top_pad_large_text: number;
						}
						export class drawable extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.R.drawable>;
							public static notification_action_background: number;
							public static notification_bg: number;
							public static notification_bg_low: number;
							public static notification_bg_low_normal: number;
							public static notification_bg_low_pressed: number;
							public static notification_bg_normal: number;
							public static notification_bg_normal_pressed: number;
							public static notification_icon_background: number;
							public static notification_template_icon_bg: number;
							public static notification_template_icon_low_bg: number;
							public static notification_tile_bg: number;
							public static notify_panel_notification_icon_bg: number;
						}
						export class integer extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.R.integer>;
							public static status_bar_notification_info_maxnum: number;
						}
						export class layout extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.R.layout>;
							public static notification_action: number;
							public static notification_action_tombstone: number;
							public static notification_template_custom_big: number;
							public static notification_template_icon_group: number;
							public static notification_template_part_chronometer: number;
							public static notification_template_part_time: number;
						}
						export class style extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.R.style>;
							public static TextAppearance_Compat_Notification: number;
							public static TextAppearance_Compat_Notification_Info: number;
							public static TextAppearance_Compat_Notification_Line2: number;
							public static TextAppearance_Compat_Notification_Time: number;
							public static TextAppearance_Compat_Notification_Title: number;
							public static Widget_Compat_NotificationActionContainer: number;
							public static Widget_Compat_NotificationActionText: number;
						}
						export class styleable extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.imagepipeline.backends.okhttp3.R.styleable>;
							public static ColorStateListItem: androidNative.Array<number>;
							public static ColorStateListItem_alpha: number;
							public static ColorStateListItem_android_alpha: number;
							public static ColorStateListItem_android_color: number;
							public static FontFamily: androidNative.Array<number>;
							public static FontFamily_fontProviderAuthority: number;
							public static FontFamily_fontProviderCerts: number;
							public static FontFamily_fontProviderFetchStrategy: number;
							public static FontFamily_fontProviderFetchTimeout: number;
							public static FontFamily_fontProviderPackage: number;
							public static FontFamily_fontProviderQuery: number;
							public static FontFamilyFont: androidNative.Array<number>;
							public static FontFamilyFont_android_font: number;
							public static FontFamilyFont_android_fontStyle: number;
							public static FontFamilyFont_android_fontVariationSettings: number;
							public static FontFamilyFont_android_fontWeight: number;
							public static FontFamilyFont_android_ttcIndex: number;
							public static FontFamilyFont_font: number;
							public static FontFamilyFont_fontStyle: number;
							public static FontFamilyFont_fontVariationSettings: number;
							public static FontFamilyFont_fontWeight: number;
							public static FontFamilyFont_ttcIndex: number;
							public static GradientColor: androidNative.Array<number>;
							public static GradientColor_android_centerColor: number;
							public static GradientColor_android_centerX: number;
							public static GradientColor_android_centerY: number;
							public static GradientColor_android_endColor: number;
							public static GradientColor_android_endX: number;
							public static GradientColor_android_endY: number;
							public static GradientColor_android_gradientRadius: number;
							public static GradientColor_android_startColor: number;
							public static GradientColor_android_startX: number;
							public static GradientColor_android_startY: number;
							public static GradientColor_android_tileMode: number;
							public static GradientColor_android_type: number;
							public static GradientColorItem: androidNative.Array<number>;
							public static GradientColorItem_android_color: number;
							public static GradientColorItem_android_offset: number;
							public static <clinit>(): void;
						}
					}
				}
			}
		}
	}
}

