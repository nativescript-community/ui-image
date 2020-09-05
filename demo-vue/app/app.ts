import Vue from 'nativescript-vue';
import Home from './components/Home.vue';
import * as app from '@nativescript/core/application';
import * as imageModule from '@nativescript-community/ui-image';
import ImagePlugin from '@nativescript-community/ui-image/vue';

Vue.use(ImagePlugin);

app.on(app.launchEvent, () => imageModule.initialize({ isDownsampleEnabled: true }));
app.on(app.exitEvent, args => imageModule.shutDown());

new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
