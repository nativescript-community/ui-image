import { FailureEventData, FinalEventData, Img, IntermediateEventData } from '@nativescript-community/ui-image';
import { EventData } from '@nativescript/core/data/observable';
import { GridLayout } from '@nativescript/core/ui/layouts/grid-layout';
import { Label } from '@nativescript/core/ui/label';
import { writeToOutputLabel } from './appLogger';

export function onFinalImageSet(args: FinalEventData) {
    const imageView = args.object as Img;
    const message = '>>>>> onFinalImageSet ';
    console.log(message);
    writeToOutputLabel(imageView, message);
}

export function onIntermediateImageSet(args: IntermediateEventData) {
    const imageView = args.object as Img;
    const message = '>>>>> onIntermediateImageSet ';
    console.log(message);
    writeToOutputLabel(imageView, message);
}

export function intermediateImageFailed(args: FailureEventData) {
    const imageView = args.object as Img;
    const message = '>>>>> intermediateImageFailed ';
    console.log(message);
    writeToOutputLabel(imageView, message);
}

export function onSubmit(args: EventData) {
    const imageView = args.object as Img;
    const message = '>>>>> onSubmit ';
    console.log(message);
    writeToOutputLabel(imageView, message);
}

export function onRelease(args: EventData) {
    const imageView = args.object as Img;
    const message = '>>>>> onRelease ';
    console.log(message);
    writeToOutputLabel(imageView, message);
}
