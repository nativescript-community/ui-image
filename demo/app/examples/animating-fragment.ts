import { AnimatedImage, FinalEventData, Img } from '@nativescript-community/ui-image';
import { writeToOutputLabel } from './appLogger';

export function onFinalImageSet(args: FinalEventData) {
    const imageView = args.object as Img;
    const message = '>>>>>> onFinalImageSet ';
    writeToOutputLabel(imageView, message);
    imageView.startAnimating();
}
