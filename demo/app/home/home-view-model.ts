import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { DataItem } from './dataItem';
import { getFrameById, topmost } from 'tns-core-modules/ui/frame/frame';
import { ItemEventData } from 'tns-core-modules/ui/list-view';
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
    'showprogressbar',
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
    public examples = examples.map(t => {
        return {
            title: t
        };
    });

    constructor() {
    }
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
        const frame = getFrameById('firstFrame');
        frame.navigate(navigationEntry);
    }
}
