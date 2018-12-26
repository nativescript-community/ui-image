import { AnimatedImage, FinalEventData, Img } from 'nativescript-image';
import { writeToOutputLabel } from './appLogger';

export function onFinalImageSet(args: FinalEventData) {
    const imageView = args.object as Img;
    const message = '>>>>>> onFinalImageSet ';
    writeToOutputLabel(imageView, message);
    const animatedImage = args.animatable as AnimatedImage;
    if (animatedImage) {
        writeToOutputLabel(imageView, '>>>>>> animatedImage: isRunning(): ' + animatedImage.isRunning());
        writeToOutputLabel(imageView, '>>>>>> animatedImage: start() ');
        animatedImage.start();
        writeToOutputLabel(imageView, '>>>>>> animatedImage: isRunning(): ' + animatedImage.isRunning());
    }
}
