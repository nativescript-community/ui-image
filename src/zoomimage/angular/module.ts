import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';

import { ImgDirective, NSIMG_DIRECTIVES } from './directives';
import { ZoomImg } from '@nativescript-community/ui-zoomimage';
export { ImgDirective };
@NgModule({
    imports: [NSIMG_DIRECTIVES],
    exports: [NSIMG_DIRECTIVES]
})
export class TNSZoomImageModule {}

registerElement('NSZoomImg', () => ZoomImg);
