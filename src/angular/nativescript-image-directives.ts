import { Directive } from '@angular/core';

@Directive({
    selector: 'Image'
})
export class ImageDirective {
    constructor() {}
}
export const NSFRESCO_DIRECTIVES = [ImageDirective];
