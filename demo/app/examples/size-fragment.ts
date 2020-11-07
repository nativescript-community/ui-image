import { EventData } from '@nativescript/core/data/observable';
import { Img } from '@nativescript-community/ui-image';
import { View } from '@nativescript/core';

class ImageData {
    public uri: string;
    public aspectRation: number;
    constructor(uri: string, aspectRation: number) {
        this.uri = uri;
        this.aspectRation = aspectRation;
    }
}

const images: ImageData[] = new Array(
    new ImageData('https://raw.githubusercontent.com/nativescript-community/ui-image/master/examples-data/drink1.jpg', 1.49),
    new ImageData('https://raw.githubusercontent.com/nativescript-community/ui-image/master/examples-data/dessert1.jpg', 0.66),
    new ImageData('https://raw.githubusercontent.com/nativescript-community/ui-image/master/examples-data/drink2.jpg', 1.49)
);
let currentIndex = 1;

export function onChangeTap(args: EventData) {
    console.log('onChangeTap');
    const imageView = (args.object as View).page.getViewById('imageView') as Img;
    imageView.src = images[currentIndex].uri;

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
}
