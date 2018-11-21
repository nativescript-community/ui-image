import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';

import { NSFRESCO_DIRECTIVES } from './nativescript-image-directives';
import { Image } from '../image';

@NgModule({
    declarations: [NSFRESCO_DIRECTIVES],
    exports: [NSFRESCO_DIRECTIVES]
})
export class TNSImageModule {}

registerElement('Image', () => Image);
