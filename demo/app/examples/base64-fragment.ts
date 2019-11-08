import { ImageSource } from '@nativescript/core/image-source/image-source';
import { FailureEventData, Img } from 'nativescript-image';
import { writeToOutputLabel } from './appLogger';

export function onFailure(args: FailureEventData) {
    const imageView = args.object as Img;
    const message = '>>>>> onFailureTest ' + args.error;
    writeToOutputLabel(imageView, message);
}

class ExampleModel {
    constructor() {}
    public get failureUri() {
        return ImageSource.fromBase64Sync(ImageSource.fromFileOrResourceSync('res://ns_logo_black').toBase64String('png'));
    }
    public get placeholderUri() {
        return ImageSource.fromBase64Sync(ImageSource.fromFileOrResourceSync('res://ns_logo').toBase64String('png'));
    }
}

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ExampleModel();
}
