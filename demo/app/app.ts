import './bundle-config';
import * as app from '@nativescript/core/application';

import * as imageModule from '@nativescript-community/ui-image';

imageModule.setDebug(true);

if (app.android) {
    app.on(app.launchEvent, () => {
        imageModule.initialize({ isDownsampleEnabled: true });
    });

    app.on(app.exitEvent, args => {
        if (args.android) {
            console.log('dev-log: Manually shutting down Image');
            imageModule.shutDown();
        }
    });
}

app.run({ moduleName: 'app-root' });
