import { ZoomImg } from '..';

const ImagePlugin = {
    install(Vue) {
        Vue.registerElement('NSZoomImg', () => ZoomImg);
    }
};

export default ImagePlugin;
