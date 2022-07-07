import { Img } from '..';

const ImagePlugin = {
    install(Vue) {
        Vue.registerElement('NSImg', () => Img);
    }
};

export default ImagePlugin;
