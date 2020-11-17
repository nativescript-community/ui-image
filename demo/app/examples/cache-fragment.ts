import { EventData } from '@nativescript/core/data/observable';
import { Button } from '@nativescript/core/ui/button';
import { GridLayout } from '@nativescript/core/ui/layouts/grid-layout';
import { Label } from '@nativescript/core/ui/label';
import { Img, getImagePipeline  } from '@nativescript-community/ui-image';
import { writeToOutputLabel } from './appLogger';

const src = 'https://raw.githubusercontent.com/nativescript-community/ui-image/master/examples-data/breakfast1.jpg';

export function onCheckCache(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const imageView = gridLayout.getViewById('imageView') as Img;
    const imagePipeLine = getImagePipeline();
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
    const imageView = gridLayout.getViewById('imageView') as Img;
    const imagePipeLine = getImagePipeline();
    writeToOutputLabel(imageView, '>>>>> Clearning cache');

    imagePipeLine.clearCaches();
}

export function onSetImage(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const imageView = gridLayout.getViewById('imageView') as Img;
    imageView.src = null;
    imageView.src = src;
}

export function onResetImage(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const imageView = gridLayout.getViewById('imageView') as Img;
    writeToOutputLabel(imageView, ">>>>> Refreshing cache and 'src'");

    imageView.updateImageUri();
}
