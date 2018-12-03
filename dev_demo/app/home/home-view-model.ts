import { getFrameById } from 'tns-core-modules/ui/frame/frame';
import { ItemEventData } from 'tns-core-modules/ui/list-view';
const examples = [
    'single',
    'resizing',
    'multiple',
    'movies',
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
    'colorfilter'
];

export class ViewModel {
    public examples = examples.map(t => {
        return {
            title: t
        };
    });

    public onTap(args: ItemEventData) {
        const example = this.examples[args.index];
        const navigationEntry = {
            moduleName: 'examples/examplePage',
            context: {
                example: example.title
            },
            animated: true
        };
        const frame = getFrameById('firstFrame');
        frame.navigate(navigationEntry);
    }
}
