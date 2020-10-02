import { FailureEventData, Img } from '@nativescript-community/ui-image';
import { writeToOutputLabel } from './appLogger';

export function onFailure(args: FailureEventData) {
    const imageView = args.object as Img;
    const message = '>>>>> onFailureTest ' + args.error;
    writeToOutputLabel(imageView, message);
}
