{{ load:../../tools/readme/edit-warning.md }}
{{ template:title }}
{{ template:badges }}
{{ template:description }}

| <img src="https://github.com/nativescript-community/ui-image/raw/master/images/demo-ios.gif" height="500" /> | <img src="https://github.com/nativescript-community/ui-image/raw/master/images/demo-android.gif" height="500" /> |
| --- | ----------- |
| iOS Demo | Android Demo |

{{ template:toc }}

## Installation
Run the following command from the root of your project:

`ns plugin add {{ pkg.name }}`

## setup

```javascript
import imageModule = require("@nativescript-community/ui-zoomimage");

//do this before creating any image view
imageModule.initialize({ isDownsampleEnabled: true });
```

This component directly inherint `@nativescript-community/ui-image` so you can find the doc [here]()

It adds a few properties

## Demos
This repository includes Angular, Vue.js demos. In order to run these execute the following in your shell:
```shell
$ git clone https://github.com/@nativescript-community/ui-image
$ cd ui-image
$ npm i
$ npm run setup
$ npm run build # && npm run build.angular
$ cd demo-ng # or demo-vue or demo-svelte
$ ns run ios|android
```

{{ load:../../tools/readme/demos-and-development.md }}
{{ load:../../tools/readme/questions.md }}