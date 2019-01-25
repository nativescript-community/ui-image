import Vue from "nativescript-vue";

import Home from "./components/Home";

import ImagePlugin from 'nativescript-image/vue';

Vue.use(ImagePlugin);

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
