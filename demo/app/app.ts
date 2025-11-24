import './bundle-config';
import * as app from '@nativescript/core/application';

import * as imageModule from '@nativescript-community/ui-image';

if (app.android) {
    app.on(app.launchEvent, () => {
        imageModule.initialize();
    });

    app.on(app.exitEvent, args => {
        if (args.android) {
            console.log('dev-log: Manually shutting down Image');
            imageModule.shutDown();
        }
    });
}

app.run({ moduleName: 'app-root' });
