import Vue from "nativescript-vue";
import Home from "./components/Home";
import * as app from 'tns-core-modules/application';
import * as imageModule from 'nativescript-image';
import ImagePlugin from 'nativescript-image/vue';

Vue.use(ImagePlugin);

if (app.android) {
    app.on(app.launchEvent, () => {
        imageModule.initialize({ isDownsampleEnabled: true });
    });

    app.on(app.exitEvent, args => {
        if (args.android) {
            console.log('dev-log: Manually shutting down Image');
            imageModule.shutDown();
        }
    });
}

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
