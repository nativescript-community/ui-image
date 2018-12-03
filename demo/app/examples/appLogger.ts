import { Img } from 'nativescript-image';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { Label } from 'tns-core-modules/ui/label';

export function writeToOutputLabel(drawee: Img, message: string) {
    const gridLayout = drawee.parent as GridLayout;
    const label = gridLayout.getViewById('outputLabel') as Label;
    console.log(message);
    label.text += '\n' + message;
}
