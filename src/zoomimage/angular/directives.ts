import { Directive } from '@angular/core';

@Directive({
    selector: 'NSImg'
})
export class ImgDirective {
    constructor() {}
}
export const NSIMG_DIRECTIVES = [ImgDirective];
