// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { NativeScriptModule } from '@nativescript/angular/nativescript.module';
import { NativeScriptRouterModule } from '@nativescript/angular/router';
import { NativeScriptFormsModule } from '@nativescript/angular/forms';
import { NgModule, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { AppComponent } from './components/app.component';

import { TNSImageModule } from '@nativescript-community/ui-image/angular';
import * as imageModule from '@nativescript-community/ui-image';
import * as applicationModule from '@nativescript/core/application';

if (applicationModule.android) {
    applicationModule.on(applicationModule.launchEvent, () => {
        console.log('initialize pipeline');
        imageModule.initialize();
    });
}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule, NativeScriptRouterModule, TNSImageModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
