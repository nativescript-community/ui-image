/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

/// <reference path="android-declarations.d.ts"/>

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export abstract class BitmapTransformation extends com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap> {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.BitmapTransformation>;
					public equals(param0: any): boolean;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
					public constructor();
					public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export class BlurTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.BlurTransformation>;
					public toString(): string;
					public constructor();
					public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, pool: globalAndroid.graphics.Bitmap, toTransform: number, outWidth: number): globalAndroid.graphics.Bitmap;
					public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public equals(o: any): boolean;
					public hashCode(): number;
					public constructor(radius: number);
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
					public constructor(radius: number, sampling: number);
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export class BuildConfig {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.BuildConfig>;
					/**
					* 0
					*/
					public static DEBUG: boolean;
					/**
					* "jp.wasabeef.glide.transformations"
					*/
					public static LIBRARY_PACKAGE_NAME: string;
					/**
					* "release"
					*/
					public static BUILD_TYPE: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export class ColorFilterTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.ColorFilterTransformation>;
					public toString(): string;
					public constructor();
					public constructor(color: number);
					public transform(context: globalAndroid.content.Context, pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
					public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public equals(o: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export class CropCircleTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.CropCircleTransformation>;
					public toString(): string;
					public constructor();
					public transform(context: globalAndroid.content.Context, pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
					public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public equals(o: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export class CropCircleWithBorderTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.CropCircleWithBorderTransformation>;
					public constructor(borderSize: number, borderColor: number);
					public constructor();
					public transform(context: globalAndroid.content.Context, pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
					public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public equals(o: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export class CropSquareTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.CropSquareTransformation>;
					public toString(): string;
					public constructor();
					public transform(context: globalAndroid.content.Context, pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
					public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public equals(o: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export class CropTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.CropTransformation>;
					public constructor(width: number, height: number, cropType: jp.wasabeef.glide.transformations.CropTransformation.CropType);
					public toString(): string;
					public constructor();
					public transform(context: globalAndroid.content.Context, pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
					public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public equals(o: any): boolean;
					public hashCode(): number;
					public constructor(width: number, height: number);
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
				}
				export namespace CropTransformation {
					export class CropType {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.CropTransformation.CropType>;
						public static TOP: jp.wasabeef.glide.transformations.CropTransformation.CropType;
						public static CENTER: jp.wasabeef.glide.transformations.CropTransformation.CropType;
						public static BOTTOM: jp.wasabeef.glide.transformations.CropTransformation.CropType;
						public static values(): androidNative.Array<jp.wasabeef.glide.transformations.CropTransformation.CropType>;
						public static valueOf(name: string): jp.wasabeef.glide.transformations.CropTransformation.CropType;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export class GrayscaleTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.GrayscaleTransformation>;
					public toString(): string;
					public constructor();
					public transform(context: globalAndroid.content.Context, pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
					public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public equals(o: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export class MaskTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.MaskTransformation>;
					public toString(): string;
					public constructor();
					public transform(context: globalAndroid.content.Context, pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
					public constructor(maskId: number);
					public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public equals(o: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export class RoundedCornersTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.RoundedCornersTransformation>;
					public toString(): string;
					public constructor();
					public constructor(radius: number, margin: number, cornerType: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType);
					public transform(context: globalAndroid.content.Context, pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
					public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public constructor(radius: number, margin: number);
					public equals(o: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
				}
				export namespace RoundedCornersTransformation {
					export class CornerType {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType>;
						public static ALL: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static TOP_LEFT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static TOP_RIGHT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static BOTTOM_LEFT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static BOTTOM_RIGHT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static TOP: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static BOTTOM: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static LEFT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static RIGHT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static OTHER_TOP_LEFT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static OTHER_TOP_RIGHT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static OTHER_BOTTOM_LEFT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static OTHER_BOTTOM_RIGHT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static DIAGONAL_FROM_TOP_LEFT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static DIAGONAL_FROM_TOP_RIGHT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static values(): androidNative.Array<jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType>;
						public static valueOf(name: string): jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace gpu {
					export class BrightnessFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.BrightnessFilterTransformation>;
						public constructor(filter: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public constructor();
						public constructor(brightness: number);
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace gpu {
					export class ContrastFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.ContrastFilterTransformation>;
						public constructor(filter: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public constructor();
						public constructor(contrast: number);
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace gpu {
					export class GPUFilterTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation>;
						public constructor(filter: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public transform(this_: globalAndroid.content.Context, context: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, resource: number, outWidth: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						public constructor();
						public transform(context: globalAndroid.content.Context, pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: globalAndroid.graphics.Bitmap, outWidth: number, outHeight: number): globalAndroid.graphics.Bitmap;
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(o: any): boolean;
						public getFilter(): any;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace gpu {
					export class InvertFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.InvertFilterTransformation>;
						public constructor(filter: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public constructor();
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace gpu {
					export class KuwaharaFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.KuwaharaFilterTransformation>;
						public constructor(filter: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public constructor();
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public constructor(radius: number);
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace gpu {
					export class PixelationFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.PixelationFilterTransformation>;
						public constructor(filter: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public constructor();
						public constructor(pixel: number);
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace gpu {
					export class SepiaFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.SepiaFilterTransformation>;
						public constructor(filter: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public constructor();
						public constructor(intensity: number);
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace gpu {
					export class SketchFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.SketchFilterTransformation>;
						public constructor(filter: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public constructor();
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace gpu {
					export class SwirlFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.SwirlFilterTransformation>;
						public constructor(filter: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public constructor();
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public constructor(radius: number, angle: number, center: globalAndroid.graphics.PointF);
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace gpu {
					export class ToonFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.ToonFilterTransformation>;
						public constructor(filter: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public constructor();
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public constructor(threshold: number, quantizationLevels: number);
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace gpu {
					export class VignetteFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.VignetteFilterTransformation>;
						public constructor(filter: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public constructor(center: globalAndroid.graphics.PointF, color: androidNative.Array<number>, start: number, end: number);
						public constructor();
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace internal {
					export class FastBlur {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.internal.FastBlur>;
						public constructor();
						public static blur(bitmap: globalAndroid.graphics.Bitmap, p: number, sir: boolean): globalAndroid.graphics.Bitmap;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace internal {
					export class RSBlur {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.internal.RSBlur>;
						public constructor();
						public static blur(context: globalAndroid.content.Context, bitmap: globalAndroid.graphics.Bitmap, radius: number): globalAndroid.graphics.Bitmap;
					}
				}
			}
		}
	}
}

declare namespace jp {
	export namespace wasabeef {
		export namespace glide {
			export namespace transformations {
				export namespace internal {
					export class Utils {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.internal.Utils>;
						public static toDp(px: number): number;
					}
				}
			}
		}
	}
}

//Generics information:

