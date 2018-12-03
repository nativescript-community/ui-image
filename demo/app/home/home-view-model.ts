import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { DataItem } from './dataItem';
import { getFrameById, topmost } from 'tns-core-modules/ui/frame/frame';
import { ItemEventData } from 'tns-core-modules/ui/list-view';
const examples = [
    'single',
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
    'colorfilter'
];

export class ViewModel {
    private _dataItems: ObservableArray<DataItem>;
    public examples = examples.map(t => {
        return {
            title: t
        };
    });

    constructor() {
        this.initDataItems();
    }

    public get dataItems() {
        return this._dataItems;
    }

    private initDataItems() {
        if (!this._dataItems) {
            this._dataItems = new ObservableArray<DataItem>();

            for (let i = 1; i <= 50; i++) {
                let imageUrl = 'https://raw.githubusercontent.com/Akylas/nativescript-image/master/examples-data/dessert1.jpg';
                if (i % 2 === 0) {
                    imageUrl = 'https://raw.githubusercontent.com/Akylas/nativescript-image/master/examples-data/drink1.jpg';
                }

                this._dataItems.push(new DataItem(i, imageUrl));
            }
        }
    }

    public onTap(args: ItemEventData) {
        const example = this.examples[args.index];
        console.log('onTap', args.index, example);
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
