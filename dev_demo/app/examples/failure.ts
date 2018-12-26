import { FailureEventData, Img } from '~/nativescript-image';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { Label } from 'tns-core-modules/ui/label';
import { writeToOutputLabel } from './appLogger';

export function onFailure(args: FailureEventData) {
    const imageView = args.object as Img;
    const message = '>>>>> onFailureTest ' + args.error;
    writeToOutputLabel(imageView, message);
}
