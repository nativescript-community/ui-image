import { Directive } from '@angular/core';

@Directive({
    selector: 'Img'
})
export class ImgDirective {
    constructor() {}
}
export const NSIMG_DIRECTIVES = [ImgDirective];
