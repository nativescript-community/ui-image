import { Img, initialize } from '@nativescript-community/ui-image';
import { Property } from '@nativescript/core';

export { initialize };

export abstract class ZoomImageBase extends Img {
    zoomScale: number;
    minZoom: number;
    maxZoom: number;
    abstract setZoom(scale: number, animated?: boolean, point?: { x; y });
}

export const zoomScaleProperty = new Property<ZoomImageBase, number>({
    name: 'zoomScale',
    defaultValue: 1
});

export const minZoomScaleProperty = new Property<ZoomImageBase, number>({
    name: 'minZoom',
    defaultValue: 1,
    valueConverter: parseFloat
});

export const maxZoomScaleProperty = new Property<ZoomImageBase, number>({
    name: 'maxZoom',
    defaultValue: 4,
    valueConverter: parseFloat
});

zoomScaleProperty.register(ZoomImageBase);
minZoomScaleProperty.register(ZoomImageBase);
maxZoomScaleProperty.register(ZoomImageBase);
