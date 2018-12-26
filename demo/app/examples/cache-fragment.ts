import { EventData } from 'tns-core-modules/data/observable';
import { Button } from 'tns-core-modules/ui/button';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { Label } from 'tns-core-modules/ui/label';
import * as imageModel from 'nativescript-image';
import { writeToOutputLabel } from './appLogger';

const src = 'https://raw.githubusercontent.com/Akylas/nativescript-image/master/examples-data/breakfast1.jpg';

export function onCheckCache(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const imageView = gridLayout.getViewById('imageView') as imageModel.Img;
    const imagePipeLine = imageModel.getImagePipeline();
    const isInCache = imagePipeLine.isInBitmapMemoryCache(src);
    writeToOutputLabel(imageView, '>>>>> Image is in the Bitmap memory cache - ' + isInCache);

    // TODO: Uncomment this after upgrading the native Image library above the currently used 0.9.0+ version and make sure its is available in the new version.
    // var isInDiskCache = imagePipeLine.isInDiskCacheSync(src);
    // var message = ">>>>> Image is in the disk cache: " + isInDiskCache;
    // console.log(message);
    // writeToOutputLabel(imageView, message);
}

export function onClearCache(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const imageView = gridLayout.getViewById('imageView') as imageModel.Img;
    const imagePipeLine = imageModel.getImagePipeline();
    writeToOutputLabel(imageView, '>>>>> Clearning cache');

    imagePipeLine.clearCaches();
}

export function onSetImage(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const imageView = gridLayout.getViewById('imageView') as imageModel.Img;
    imageView.src = null;
    imageView.src = src;
}

export function onResetImage(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const imageView = gridLayout.getViewById('imageView') as imageModel.Img;
    writeToOutputLabel(imageView, ">>>>> Refreshing cache and 'src'");

    imageView.updateImageUri();
}
