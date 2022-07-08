import { Color } from '@nativescript/core';

export function installMixins();

declare module '@nativescript-community/ui-image' {
    interface Img {
        colorMatrix: number[];
    }
}
