import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { ImageModule } from '@nativescript-community/ui-image/angular';
import { ZoomImageModule } from '@nativescript-community/ui-imagezoom/angular';
import { initialize } from '@nativescript-community/ui-image';

import { SimpleComponent } from './simple/simple.component';
export const COMPONENTS = [SimpleComponent];
@NgModule({
    imports: [ZoomImageModule, ImageModule],
    exports: [ZoomImageModule, ImageModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class InstallModule {}

export function installPlugin() {
    initialize();
}

export const demos = [{ name: 'Simple', path: 'simple', component: SimpleComponent }];
