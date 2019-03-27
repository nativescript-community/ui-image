import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    constructor() {}

    @ViewChild('imageView') imageViewComponent: ElementRef;

    ngOnInit() {}

    onSeOpacityTo1() {
        this.imageViewComponent.nativeElement.opacity = 1;
    }

    onSeOpacityTo01() {
        this.imageViewComponent.nativeElement.opacity = 0.1;
    }

    onSeOpacityTo05() {
        this.imageViewComponent.nativeElement.opacity = 0.5;
    }

    onAnimateTo01() {
        this.imageViewComponent.nativeElement.animate({
            opacity: 0.1,
            duration: 500
        });
    }

    onAnimateTo1() {
        this.imageViewComponent.nativeElement.animate({
            opacity: 1,
            duration: 500
        });
    }
}
