import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';

import { ImgDirective, NSIMG_DIRECTIVES } from './directives';
import { Img } from '@nativescript-community/ui-image';
export { ImgDirective };
@NgModule({
    imports: [NSIMG_DIRECTIVES],
    exports: [NSIMG_DIRECTIVES]
})
export class TNSImageModule {}

registerElement('NSImg', () => Img);
