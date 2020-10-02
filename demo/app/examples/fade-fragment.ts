import { EventData } from '@nativescript/core/data/observable';
import { Button } from '@nativescript/core/ui/button';
import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
import * as imageModel from '@nativescript-community/ui-image';

export function onSetTap(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as StackLayout;
    const imageView = gridLayout.getViewById('imageView') as imageModel.Img;
    // Fade only executes the first time the image is loaded. Cached images will not fade in - https://github.com/facebook/image/issues/2138
    const src = 'https://raw.githubusercontent.com/nativescript-community/ui-image/master/examples-data/drink1.jpg';
    const imagePipeLine = imageModel.getImagePipeline();
    imagePipeLine.evictFromCache(src);
    imageView.src = imageView.src ? '' : src;
}
