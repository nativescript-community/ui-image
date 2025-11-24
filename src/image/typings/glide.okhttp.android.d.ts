/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

/// <reference path="android-declarations.d.ts"/>

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace annotation {
				export namespace compiler {
					export class GlideIndexer_GlideModule_com_bumptech_glide_integration_okhttp3_OkHttpLibraryGlideModule {
						public static class: java.lang.Class<com.bumptech.glide.annotation.compiler.GlideIndexer_GlideModule_com_bumptech_glide_integration_okhttp3_OkHttpLibraryGlideModule>;
						public constructor();
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace integration {
				export namespace okhttp3 {
					export class OkHttpGlideModule {
						public static class: java.lang.Class<com.bumptech.glide.integration.okhttp3.OkHttpGlideModule>;
						public constructor();
						public registerComponents(context: globalAndroid.content.Context, glide: com.bumptech.glide.Glide, registry: com.bumptech.glide.Registry): void;
						public applyOptions(context: globalAndroid.content.Context, builder: com.bumptech.glide.GlideBuilder): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace integration {
				export namespace okhttp3 {
					export class OkHttpLibraryGlideModule {
						public static class: java.lang.Class<com.bumptech.glide.integration.okhttp3.OkHttpLibraryGlideModule>;
						public constructor();
						public registerComponents(context: globalAndroid.content.Context, glide: com.bumptech.glide.Glide, registry: com.bumptech.glide.Registry): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace integration {
				export namespace okhttp3 {
					export class OkHttpStreamFetcher extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.integration.okhttp3.OkHttpStreamFetcher>;
						public onFailure(call: okhttp3.Call, e: java.io.IOException): void;
						public getDataClass(): java.lang.Class<java.io.InputStream>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public cancel(): void;
						public constructor(client: okhttp3.Call.Factory, url: com.bumptech.glide.load.model.GlideUrl);
						public onResponse(this_: okhttp3.Call, call: okhttp3.Response): void;
						public loadData(headerEntry: com.bumptech.glide.Priority, this_: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cleanup(): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace bumptech {
		export namespace glide {
			export namespace integration {
				export namespace okhttp3 {
					export class OkHttpUrlLoader extends com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.integration.okhttp3.OkHttpUrlLoader>;
						public constructor(client: okhttp3.Call.Factory);
						public handles(url: com.bumptech.glide.load.model.GlideUrl): boolean;
						public buildLoadData(model: com.bumptech.glide.load.model.GlideUrl, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
					}
					export namespace OkHttpUrlLoader {
						export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.integration.okhttp3.OkHttpUrlLoader.Factory>;
							public constructor();
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>;
							public constructor(client: okhttp3.Call.Factory);
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:

