import { EventData } from 'tns-core-modules/data/observable';
import { Image, ImagePipeline } from 'nativescript-image';
import { Button } from 'tns-core-modules/ui/button';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { Label } from 'tns-core-modules/ui/label';
import { writeToOutputLabel } from './appLogger';

export function onSeOpacityTo1(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const drawee = gridLayout.getViewById('opacityDrawee') as Image;
    drawee.opacity = 1;
}

export function onSeOpacityTo01(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const drawee = gridLayout.getViewById('opacityDrawee') as Image;
    drawee.opacity = 0.1;
}

export function onSeOpacityTo05(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const drawee = gridLayout.getViewById('opacityDrawee') as Image;
    drawee.opacity = 0.5;
}

export function onAnimateCss(args) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const drawee = gridLayout.getViewById('opacityDrawee') as Image;
    drawee.animate({
        opacity: 1,
        duration: 200
    });
}
