import { Img } from '../image';

const ImagePlugin = {
    install(Vue) {
        Vue.registerElement('NSImg', () => Img);
    }
};

export default ImagePlugin;
