import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';

import { NSIMG_DIRECTIVES } from './nativescript-image-directives';
import { Img } from '../image';

@NgModule({
    declarations: [NSIMG_DIRECTIVES],
    exports: [NSIMG_DIRECTIVES]
})
export class TNSImageModule {}

registerElement('Img', () => Img);
