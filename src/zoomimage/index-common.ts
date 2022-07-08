import { Img, initialize } from '@nativescript-community/ui-image';
import { Property } from '@nativescript/core';

export { initialize };

export class ZoomImageBase extends Img {
    zoomScale: number;
    minZoom: number;
    maxZoom: number;
}

export const zoomScaleProperty = new Property<ZoomImageBase, number>({
    name: 'zoomScale',
    defaultValue: 1
});

export const minZoomScaleProperty = new Property<ZoomImageBase, number>({
    name: 'minZoom',
    defaultValue: 1
});

export const maxZoomScaleProperty = new Property<ZoomImageBase, number>({
    name: 'maxZoom',
    defaultValue: 4
});

zoomScaleProperty.register(ZoomImageBase);
minZoomScaleProperty.register(ZoomImageBase);
maxZoomScaleProperty.register(ZoomImageBase);
