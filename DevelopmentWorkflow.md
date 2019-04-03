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
$ cd nativescript-image
$ npm run demo.ng.android
```

Now using that method you won't see live changes to ```src``` folder.

To see live changes, run this command instead

```bash
$ cd nativescript-image
$ npm run demo.ng.android.watch
```

After all the changes are done make sure to test them in all the demo apps.

Be careful this is derived workflow from the one in [NativeScript plugins documentation](https://docs.nativescript.org/plugins/building-plugins#step-2-set-up-a-development-workflow).
