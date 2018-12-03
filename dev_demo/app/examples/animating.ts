import { AnimatedImage, FinalEventData, Img } from '~/nativescript-image';
import { writeToOutputLabel } from './appLogger';

export function onFinalImageSet(args: FinalEventData) {
    const drawee = args.object as Img;
    const message = '>>>>>> onFinalImageSet ';
    writeToOutputLabel(drawee, message);
    const animatedImage = args.animatable as AnimatedImage;
    if (animatedImage) {
        writeToOutputLabel(drawee, '>>>>>> animatedImage: isRunning(): ' + animatedImage.isRunning());
        writeToOutputLabel(drawee, '>>>>>> animatedImage: start() ');
        animatedImage.start();
        writeToOutputLabel(drawee, '>>>>>> animatedImage: isRunning(): ' + animatedImage.isRunning());
    }
}
