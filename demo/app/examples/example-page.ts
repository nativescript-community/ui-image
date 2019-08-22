import { NavigationButton } from 'tns-core-modules/ui/action-bar/action-bar';
import { Frame } from 'tns-core-modules/ui/frame/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { DataItem } from '~/home/dataItem';

const builder = require('ui/builder');

class PageModel {
    private _dataItems: ObservableArray<DataItem>;
    constructor(public title: string) {}
    public get dataItems() {
        console.log('dataItems');
        if (!this._dataItems) {
            this.initDataItems();
        }
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
}

export function onNavigatingTo(args) {
    const page = args.object;
    const context = page.navigationContext;

    const exampleTitle = context.example;

    page.bindingContext = new PageModel(exampleTitle);

    let theModule;
    try {
        theModule = require(`./${context.example}-fragment`);
    } catch (e) {
        // console.log('error', e);
    }

    const container = page.getViewById('container');
    let innerComponent;
    if (global.TNS_WEBPACK) {
        // some-fragment.xml registered via bundle-config.ts, because it's postfixed with "fragment"
        // so it already exist in bundle.js as module
        innerComponent = builder.parse(require(`./${exampleTitle}-fragment.xml`) as string, theModule);
    } else {
        innerComponent = builder.load(`${__dirname}/${exampleTitle}-fragment.xml`, theModule);
    }

    container.addChild(innerComponent);
    if (theModule && theModule.onNavigatingTo) {
        args.object = innerComponent;
        theModule.onNavigatingTo(args);
    }
}

export function onBack(args) {
    const navigationButton = args.object as NavigationButton;
    const frame = navigationButton.page.frame as Frame;
    frame.goBack();
}
