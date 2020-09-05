# Development Workflow

<!-- TOC depthFrom:2 -->

-   [Prerequisites](#prerequisites)
-   [Develop locally](#develop-locally)

<!-- /TOC -->

## Prerequisites

-   Install your native toolchain and NativeScript as [described in the docs](https://docs.nativescript.org/start/quick-setup)

-   Review [NativeScript plugins documentation](https://docs.nativescript.org/plugins/plugins) for more details on plugins development

## Develop locally

For local development we recommend using the npm commands provided in the package.json


To run and develop using TypeScript demo:

```bash
$ cd @nativescript-community/ui-image
$ npm run demo.ng.android
```

Now using that method you won't see live changes to ```src``` folder.

To see live changes, run this command instead

```bash
$ cd @nativescript-community/ui-image
$ npm run demo.ng.android.watch
```

After all the changes are done make sure to test them in all the demo apps.

Be careful this is derived workflow from the one in [NativeScript plugins documentation](https://docs.nativescript.org/plugins/building-plugins#step-2-set-up-a-development-workflow).
I had issues with the default workflow:
* sources files (ts) and product files end up in the same place which is never good. When you npm link or use file:/../src you end up with a webpack installation which does not know what file to use. Already took me days to find bugs because of that.
* src folder contains a package.json which has dev dependencies which can create bad consequences when used with npm link or file:/../src
* it is easier to clean when sources are separated from product.

