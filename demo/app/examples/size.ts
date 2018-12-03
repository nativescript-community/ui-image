import { EventData } from 'tns-core-modules/data/observable';
import { Img } from 'nativescript-image';
import { Button } from 'tns-core-modules/ui/button';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';

class ImageData {
    public uri: string;
    public aspectRation: number;
    constructor(uri: string, aspectRation: number) {
        this.uri = uri;
        this.aspectRation = aspectRation;
    }
}

const images: ImageData[] = new Array(
    new ImageData('https://raw.githubusercontent.com/Akylas/nativescript-image/master/examples-data/drink1.jpg', 1.49),
    new ImageData('https://raw.githubusercontent.com/Akylas/nativescript-image/master/examples-data/dessert1.jpg', 0.66),
    new ImageData('https://raw.githubusercontent.com/Akylas/nativescript-image/master/examples-data/drink2.jpg', 1.49)
);
let currentIndex = 1;

export function onChangeTap(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const drawee = gridLayout.getViewById('imageDrawee') as Image;
    // drawee.aspectRatio = images[currentIndex].aspectRation;
    drawee.src = images[currentIndex].uri;

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
}
