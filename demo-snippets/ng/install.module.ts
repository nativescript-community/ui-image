import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { ImageModule } from "@nativescript-community/ui-image/angular";
import { ZoomImageModule } from "@nativescript-community/ui-imagezoom/angular";

import { SimpleComponent } from './simple/simple.component';
export const COMPONENTS = [SimpleComponent];
@NgModule({
    imports: [CollectionViewModule],
    exports: [CollectionViewModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class InstallModule {}

export function installPlugin() {
}

export const demos = [
    { name: 'Simple', path: 'simple', component: SimpleComponent },
];
