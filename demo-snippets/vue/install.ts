import Vue from 'nativescript-vue';

import { Trace } from '@nativescript/core';
import ImageModule from '@nativescript-community/ui-image/vue';
import ZoomImageModule from '@nativescript-community/ui-zoomimage/vue';
import { initialize } from '@nativescript-community/ui-image';
import { installMixins } from '@nativescript-community/ui-image-colorfilter';

import Simple from './Simple.vue';
import Animated from './Animated.vue';
import Advanced from './Advanced.vue';
import Events from './Events.vue';
import Pipeline from './Pipeline.vue';
import PlaceholdersAndFallbacks from './PlaceholdersAndFallbacks.vue';
import TapToRetry from './TapToRetry.vue';
import RoundingAndClipping from './RoundingAndClipping.vue';
import TintAndBackground from './TintAndBackground.vue';
import DecodeAndResize from './DecodeAndResize.vue';
import NetworkHeaders from './NetworkHeaders.vue';
import ZoomImage from './ZoomImage.vue';
import ColorFilter from './ColorFilter.vue';
import Failure from './Failure.vue';
import NavigationTest from './NavigationTest.vue';
import CrossFadeTest from './CrossFadeTest.vue';

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
    { name: 'CrossFadeTest', path: 'CrossFadeTest', component: CrossFadeTest },
    { name: 'Animated', path: 'animated', component: Animated },
    { name: 'Advanced', path: 'advanced', component: Advanced },
    { name: 'Events', path: 'events', component: Events },
    { name: 'Pipeline', path: 'pipeline', component: Pipeline },
    { name: 'Placeholders & Fallbacks', path: 'placeholders', component: PlaceholdersAndFallbacks },
    { name: 'TapToRetry', path: 'tap-to-retry', component: TapToRetry },
    { name: 'Rounding & Clipping', path: 'rounding', component: RoundingAndClipping },
    { name: 'Tint & Background', path: 'tint', component: TintAndBackground },
    { name: 'Decode & Resize', path: 'decode', component: DecodeAndResize },
    { name: 'Network & Headers', path: 'network-headers', component: NetworkHeaders },
    { name: 'Failure', path: 'failure', component: Failure },
    { name: 'ZoomImage', path: 'zoom', component: ZoomImage },
    { name: 'ColorFilter', path: 'color-filter', component: ColorFilter },
    { name: 'Navigation', path: 'navigation', component: NavigationTest }
];
