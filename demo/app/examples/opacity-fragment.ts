import { EventData } from '@nativescript/core/data/observable';
import { Button } from '@nativescript/core/ui/button';
import { GridLayout } from '@nativescript/core/ui/layouts/grid-layout';
import { Img } from 'nativescript-image';

export function onSeOpacityTo1(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const imageView = gridLayout.getViewById('opacityDrawee') as Img;
    imageView.opacity = 1;
}

export function onSeOpacityTo01(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const imageView = gridLayout.getViewById('opacityDrawee') as Img;
    imageView.opacity = 0.1;
}

export function onSeOpacityTo05(args: EventData) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const imageView = gridLayout.getViewById('opacityDrawee') as Img;
    imageView.opacity = 0.5;
}

export function onAnimateCss(args) {
    const button = args.object as Button;
    const gridLayout = button.parent as GridLayout;
    const imageView = gridLayout.getViewById('opacityDrawee') as Img;
    imageView.animate({
        opacity: 1,
        duration: 200
    });
}
