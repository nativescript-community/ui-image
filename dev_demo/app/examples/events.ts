import { FailureEventData, FinalEventData, Img, IntermediateEventData } from '~/nativescript-image';
import { EventData } from 'tns-core-modules/data/observable';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { Label } from 'tns-core-modules/ui/label';
import { writeToOutputLabel } from './appLogger';

export function onFinalImageSet(args: FinalEventData) {
    const drawee = args.object as Img;
    const message = '>>>>> onFinalImageSet ';
    console.log(message);
    writeToOutputLabel(drawee, message);
}

export function onIntermediateImageSet(args: IntermediateEventData) {
    const drawee = args.object as Img;
    const message = '>>>>> onIntermediateImageSet ';
    console.log(message);
    writeToOutputLabel(drawee, message);
}

export function intermediateImageFailed(args: FailureEventData) {
    const drawee = args.object as Img;
    const message = '>>>>> intermediateImageFailed ';
    console.log(message);
    writeToOutputLabel(drawee, message);
}

export function onSubmit(args: EventData) {
    const drawee = args.object as Img;
    const message = '>>>>> onSubmit ';
    console.log(message);
    writeToOutputLabel(drawee, message);
}

export function onRelease(args: EventData) {
    const drawee = args.object as Img;
    const message = '>>>>> onRelease ';
    console.log(message);
    writeToOutputLabel(drawee, message);
}
