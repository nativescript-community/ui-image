import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as imageModule from 'nativescript-image';

// tslint:disable:no-console

const uri = 'https://www.dccomics.com/sites/default/files/BM_Cv44_A_gallery_5abd2134f11d95.39493991.jpg';

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

    prefetchToDisk() {
        const pipeline = imageModule.getImagePipeline();
        pipeline.evictFromCache(uri);

        console.time('prefetchToDisk');
        pipeline
            .prefetchToDiskCache(uri)
            .then(() => {
                console.timeEnd('prefetchToDisk');
                console.log('in memory cache?', pipeline.isInBitmapMemoryCache(uri));
                console.log('in disk cache?', pipeline.isInDiskCache(uri));
            })
            .catch((err) => {
                console.log('failed!', err);
            });

        pipeline.evictFromCache(uri);
    }

    prefetchToMemory() {
        const pipeline = imageModule.getImagePipeline();
        pipeline.evictFromCache(uri);

        console.time('prefetchToMemory');
        pipeline
            .prefetchToMemoryCache(uri)
            .then(() => {
                console.timeEnd('prefetchToMemory');
                console.log('in memory cache?', pipeline.isInBitmapMemoryCache(uri));
                console.log('in disk cache?', pipeline.isInDiskCache(uri));
            })
            .catch((err) => {
                console.log('failed!', err);
            });
    }
}
