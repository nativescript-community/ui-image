import { Frame } from '@nativescript/core/ui/frame';
import { ItemEventData } from '@nativescript/core/ui/list-view';

const examples = [
    'single',
    'base64',
    'resizing',
    'multiple',
    'size',
    'failure',
    'taptoretry',
    'actualimagescaletype',
    'fade',
    'blur',
    'progressiverenderingenabled',
    'roundascircle',
    'roundedcornerradius',
    'autoplayanimations',
    'animating',
    'events',
    'cache',
    'local',
    'opacity',
    'nativecolorfilter'
];

export class ViewModel {
    public examples = examples.map(t => ({
        title: t
    }));

    constructor() {}
    public onTap(args: ItemEventData) {
        const example = this.examples[args.index];
        console.log('onTap', args.index, example);
        const navigationEntry = {
            moduleName: 'examples/example-page',
            context: {
                example: example.title
            },
            animated: true
        };
        const frame = Frame.getFrameById('firstFrame');
        frame.navigate(navigationEntry);
    }
}
