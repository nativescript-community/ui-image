import { Img } from 'nativescript-image';
import { GridLayout } from '@nativescript/core/ui/layouts/grid-layout';
import { Label } from '@nativescript/core/ui/label';

export function writeToOutputLabel(imageView: Img, message: string) {
    const gridLayout = imageView.parent as GridLayout;
    const label = gridLayout.getViewById('outputLabel') as Label;
    console.log(message);
    label.text += '\n' + message;
}
