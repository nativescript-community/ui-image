import Vue from 'nativescript-vue';

import { Trace } from '@nativescript/core';
import ImageModule from '@nativescript-community/ui-image/vue';
import ZoomImageModule from '@nativescript-community/ui-zoomimage/vue';
import { initialize } from '@nativescript-community/ui-image';
import { installMixins } from '@nativescript-community/ui-image-colorfilter';

import Simple from './Simple.vue';
import ZoomImage from './ZoomImage.vue';
import ColorFilter from './ColorFilter.vue';
import NavigationTest from './NavigationTest.vue';

// Trace.addCategories('NativescriptImage');
// Trace.enable();

export function installPlugin() {
    installMixins();
    initialize();
    Vue.use(ImageModule);
    Vue.use(ZoomImageModule);
}

export const demos = [
    { name: 'Simple', path: 'simple', component: Simple },
    { name: 'hero', path: 'navigation', component: NavigationTest },
    { name: 'ZoomImage', path: 'zoom', component: ZoomImage },
    { name: 'ColorFilter', path: 'color-filter', component: ColorFilter }
];
