import { NavigationButton } from 'tns-core-modules/ui/action-bar/action-bar';
import { Frame } from 'tns-core-modules/ui/frame/frame';

const builder = require('ui/builder');

export function onNavigatingTo(args) {
    const page = args.object;
    const context = page.navigationContext;

    page.bindingContext = {
        title: context.example
    };

    const container = page.getViewById('container');
    const component = builder.load({
        path: 'examples',
        name: context.example
    });

    container.addChild(component);
}

export function onBack(args) {
    const navigationButton = args.object as NavigationButton;
    const frame = navigationButton.page.frame as Frame;
    frame.goBack();
}
