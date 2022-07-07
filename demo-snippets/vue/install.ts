import Vue from 'nativescript-vue';

import ImageModule from '@nativescript-community/ui-image/vue';

import Simple from './Simple.vue';

export function installPlugin() {
    Vue.use(ImageModule);
}

export const demos = [
    { name: 'Simple', path: 'simple', component: Simple },
];
