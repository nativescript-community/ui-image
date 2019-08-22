import { FailureEventData, Img } from 'nativescript-image';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { Label } from 'tns-core-modules/ui/label';
import { writeToOutputLabel } from './appLogger';
import { fromBase64, fromFileOrResource } from 'tns-core-modules/image-source/image-source';


export function onFailure(args: FailureEventData) {
    const imageView = args.object as Img;
    const message = '>>>>> onFailureTest ' + args.error;
    writeToOutputLabel(imageView, message);
}

class ExampleModel {
    constructor() {}
    public get failureUri() {
        return fromBase64(fromFileOrResource('res://ns_logo_black').toBase64String('png'));
    }
    public get placeholderUri() {
        return fromBase64(fromFileOrResource('res://ns_logo').toBase64String('png'));
    }
}

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ExampleModel();

}

