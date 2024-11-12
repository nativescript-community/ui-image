<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->This monorepo contains multiple packages:<br><br>
<details open>
<summary><b>image</b></summary>

<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
<!--  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      DO NOT EDIT THIS READEME DIRECTLY! Edit "bluesprint.md" instead.
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
<h1 align="center">@nativescript-community/ui-image</h1>
<p align="center">
		<a href="https://npmcharts.com/compare/@nativescript-community/ui-image?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@nativescript-community/ui-image.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/@nativescript-community/ui-image"><img alt="NPM Version" src="https://img.shields.io/npm/v/@nativescript-community/ui-image.svg" height="20"/></a>
	</p>

<p align="center">
  <b>Advanced and efficient image display plugin which uses Fresco (Android) and SDWebImage (iOS) to implement caching, placeholders, image effects, and much more.</b></br>
  <sub><sub>
</p>

<br />


| <img src="https://github.com/nativescript-community/ui-image/raw/master/images/demo-ios.gif" height="500" /> | <img src="https://github.com/nativescript-community/ui-image/raw/master/images/demo-android.gif" height="500" /> |
| --- | ----------- |
| iOS Demo | Android Demo |


[](#table-of-contents)


[](#table-of-contents)

## Table of Contents

* [Installation](#installation)
* [setup](#setup)
* [API](#api)
	* [Events](#events)
		* [Event arguments](#event-arguments)
	* [Properties](#properties)
	* [Advanced *optional* attributes](#advanced-optional-attributes)
	* [Cache](#cache)
		* ['Refresh' the 'src'](#refresh-the-src)
		* [Clear everything from the cache](#clear-everything-from-the-cache)
		* [Evict all images with a specific URI from the cache](#evict-all-images-with-a-specific-uri-from-the-cache)
		* [Manually shut down the native imageModule library](#manually-shut-down-the-native-imagemodule-library)
* [Flavors](#flavors)
* [Demos](#demos)
* [Demos and Development](#demos-and-development)
	* [Repo Setup](#repo-setup)
	* [Build](#build)
	* [Demos](#demos-1)
* [Contributing](#contributing)
	* [Update repo ](#update-repo-)
	* [Update readme ](#update-readme-)
	* [Update doc ](#update-doc-)
	* [Publish](#publish)
	* [modifying submodules](#modifying-submodules)
* [Questions](#questions)


[](#installation)


[](#installation)

## Installation
Run the following command from the root of your project:

`ns plugin add @nativescript-community/ui-image`


[](#setup)


[](#setup)

## setup

```javascript
import imageModule = require("@nativescript-community/ui-image");

//do this before creating any image view
imageModule.initialize({ isDownsampleEnabled: true });
```


[](#api)


[](#api)

## API

### Events

 **finalImageSet** - arguments *FinalEventData*

This event is fired after the final image has been set. When working with animated images you could use this event to start the animation by calling the *FinalEventData.animatable.start()* function.

```xml
<@nativescript-community/ui-image:Img finalImageSet="onFinalImageSet"/>
```

JavaScript:

```javascript
function onFinalImageSet(args) {
    var imageModuleEventData = args;
    var img = imageModuleEventData.object;
}
exports.onFinalImageSet = onFinalImageSet;
```

TypeScript:

```typescript
import {Img, FinalEventData } from "@nativescript-community/ui-image";

export function onFinalImageSet(args: FinalEventData) {
    var img = args.object as Img;
}
```

- **failure** - arguments *FailureEventData*

This event is fired after the fetch of the final image failed.

```xml
<@nativescript-community/ui-image:Img failure="onFailure"/>
```

JavaScript:

```javascript
function onFailure(args) {
    var img = args.object;
}
exports.onFailure = onFailure;
```

TypeScript:

```typescript
import {Img, FailureEventData } from "@nativescript-community/ui-image";

export function onFailure(args: FailureEventData) {
    var img = args.object as Img;
}
```

- **intermediateImageSet** - arguments *IntermediateEventData* (Android only)

This event is fired after any intermediate image has been set.

```xml
<@nativescript-community/ui-image:Img intermediateImageSet="onIntermediateImageSet"/>
```

JavaScript:

```javascript
function onIntermediateImageSet(args) {
    var img = args.object;
}
exports.onIntermediateImageSet = onIntermediateImageSet;
```

TypeScript:

```typescript
import {Img, IntermediateEventData } from "@nativescript-community/ui-image";

export function onIntermediateImageSet(args: IntermediateEventData) {
    var img = args.object as Img;
}
```

- **intermediateImageFailed** - arguments *FailureEventData* (Android only)

This event is fired after the fetch of the intermediate image failed.

```xml
<@nativescript-community/ui-image:Img intermediateImageFailed="onIntermediateImageFailed"/>
```

JavaScript:

```javascript
function intermediateImageFailed(args) {
    var img = args.object;
}
exports.intermediateImageFailed = intermediateImageFailed;
```

TypeScript:

```typescript
import {Img, FailureEventData } from "@nativescript-community/ui-image";

export function intermediateImageFailed(args: FailureEventData) {
    var img = args.object as Img;
}
```

- **submit** - arguments *EventData* (Android only)

This event is fired before the image request is submitted.

```xml
<@nativescript-community/ui-image:Img submit="onSubmit"/>
```

JavaScript:

```javascript
function onSubmit(args) {
    var img = args.object;
}
exports.onSubmit = onSubmit;
```

TypeScript:

```typescript
import {Img, EventData } from "@nativescript-community/ui-image";

export function onSubmit(args: EventData) {
    var img = args.object as Img;
}
```

- **release** - arguments *EventData* (Android only)

This event is fired after the controller released the fetched image.

```xml
<@nativescript-community/ui-image:Img release="onRelease"/>
```

JavaScript:

```javascript
function onRelease(args) {
    var img = args.object;
}
exports.onRelease = onRelease;
```

TypeScript:

```typescript
import {Img, EventData } from "@nativescript-community/ui-image";

export function onRelease(args: EventData) {
    var img = args.object as Img;
}
```

#### Event arguments

Instances of this class are provided to the handlers of the *finalImageSet*.

```typescript
import {Img, FinalEventData, ImageInfo, AnimatedImage } from "@nativescript-community/ui-image";

export function onFinalImageSet(args: FinalEventData) {
    var info: ImageInfo  = args.imageInfo;
    var animatable: AnimatedImage = args.animatable;
    var quality: number = info.getQualityInfo().getQuality();
    var isFullQuality: boolean = info.getQualityInfo().isOfFullQuality();
    var isOfGoodEnoughQuality: boolean = info.getQualityInfo().isOfGoodEnoughQuality();
}
```

- **FailureEventData**

Instances of this class are provided to the handlers of the *failure* and *intermediateImageFailed*.

```typescript
import {Img, FailureEventData, imageModuleError } from "@nativescript-community/ui-image";

export function onFailure(args: FailureEventData) {
    var error: imageModuleError = args.error;
    var message: string = error.getMessage();
    var type: string = error.getErrorType();
    var fullError: string = error.toString();
}
```

- **IntermediateEventData**

Instances of this class are provided to the handlers of the *intermediateImageSet*.

```typescript
import {Img, IntermediateEventData, ImageInfo } from "@nativescript-community/ui-image";

export function onIntermediateImageSet(args: IntermediateEventData) {
    var info: ImageInfo  = args.imageInfo;
    var quality: number = info.getQualityInfo().getQuality();
    var isFullQuality: boolean = info.getQualityInfo().isOfFullQuality();
    var isOfGoodEnoughQuality: boolean = info.getQualityInfo().isOfGoodEnoughQuality();}
```

- **EventData**

Instances of this class are provided to the handlers of the *release* and *submit*.

```typescript
import {Img, EventData } from "@nativescript-community/ui-image";

export function onSubmit(args: EventData) {
    var img = args.object as Img;
}
```


### Properties

- **src** 

String value used for the image URI. You can use this property to set the image to be loaded from remote location (http, https), from the resources and local files of your {N} application.

```xml
<@nativescript-community/ui-image:Img src="https://docs.nativescript.org/angular/img/cli-getting-started/angular/chapter0/NativeScript_logo.png"/>
```

- **placeholderImageUri** 

String value used for the placeholder image URI. You can use this property to set a placeholder image loaded from the local and resources files of your {N} application.

**Note: Currently there are limitations on how many different Images can be set to as 'placeholderImage' before OutOfMemoryError is thrown. For best results its recommended to use a single image for all ```placeholderImageUri``` of your Img instances.*

```xml
<@nativescript-community/ui-image:Img placeholderImageUri="~/placeholder.jpg"/>
```

- **failureImageUri** 

String value used for the failure image URI. You can use this property to set a failure image loaded from the local and resources files of your {N} application that will be shown if the loading of the src is not successful.

```xml
<@nativescript-community/ui-image:Img failureImageUri="~/failure.jpg"/>
```


### Advanced *optional* attributes

There are a couple of *optional* attributes that could be set on the Img instance to achieve advanced behaviors:

- **backgroundUri**  (Android only)

String value used for the background image URI. Using this property has similar effect as the placeholderImageUri but the image is stretched to the size of the Img.

**Note: Currently there are limitations on how many different Images can be set to as 'background' before OutOfMemoryError is thrown. For best results its recommended to use a single image for all ```backgroundUri``` of your Img instances.*

```xml
<@nativescript-community/ui-image:Img backgroundUri="~/image.jpg"/>
```

- **stretch** 

String value used by Img image scale type. This property can be set to:

'*center*' - Performs no scaling.

'*centerCrop*' - Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.

'*centerInside*' - Scales the child so that it fits entirely inside the parent.

'*fitCenter*' - Scales the child so that it fits entirely inside the parent.

'*aspectFit*' - Scales the child so that it fits entirely inside the parent.

'*fitStart*' - Scales the child so that it fits entirely inside the parent.

'*fitEnd*' - Scales the child so that it fits entirely inside the parent.

'*fitXY*' - Scales width and height independently, so that the child matches the parent exactly.

'*fill*' - Scales width and height independently, so that the child matches the parent exactly.

'*focusCrop*' - Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.

'*aspectFill*' - Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.


```xml
<@nativescript-community/ui-image:Img stretch="centerInside"/>
```

- **fadeDuration** 

Number value used for the fade-in duration. This value is in milliseconds.

```xml
<@nativescript-community/ui-image:Img fadeDuration="3000"/>
```

- **blurRadius** 

Number value greater than zero, used as input for the blur function. Larger value means slower processing. For example a value of `10` means that each pixel in the image will be blurred using all adjacent pixels up to a distance of 10.

```xml
<@nativescript-community/ui-image:Img blurRadius="25"/>
```

- **blurDownSampling**  (Android only)

Number value greater than zero, used to scale the image before applying the blur function. Larger value means faster processing. For example a value of `2` means that the image will be scaled by a factor of two before applying blur.

```xml
<@nativescript-community/ui-image:Img blurDownSampling="2"/>
```

- **aspectRatio** 

Number value used as the aspect ratio of the image. This property is useful when you are working with different aspect ratio images and want to have a fixed Width or Height. The ratio of an image is calculated by dividing its width by its height. 

*Note: In some layout scenarios it is necessary to set the ```verticalAlignment``` of the Img to 'top' or 'bottom' in order to "anchor" the img and achieve dynamic sizing.*

```xml
<@nativescript-community/ui-image:Img aspectRatio="1.33" verticalAlignment="top"/>
```

- **decodeWidth** (downsampling) - make sure to enable downsample (**isDownsampleEnabled**) in the initialize function of the plugin otherwise this property is disregarded.

Number value used as the downsampled width of the imageModule drawable.

```xml
<@nativescript-community/ui-image:Img decodeWidth="100"/>
```

- **decodeHeight** (downsampling) - make sure to enable downsample (**isDownsampleEnabled**) in the initialize function of the plugin otherwise this property is disregarded.

Number value used as the downsampled width of the imageModule drawable.

```xml
<@nativescript-community/ui-image:Img decodeHeight="100"/>
```

- **headers**

Object that defines custom request headers to be sent with the image download request.

```xml
<@nativescript-community/ui-image:Img headers="{Authorization: 'bearer abcdefghijk'}"/>
```

- **progressiveRenderingEnabled**

Boolean value used for enabling or disabling the streaming of progressive JPEG images. This property is set to 'false' by default. Setting this property to 'true' while loading JPEG images not encoded in progressive format will lead to a standard loading of those images.

```xml
<@nativescript-community/ui-image:Img progressiveRenderingEnabled="true"/>
```

- **showProgressBar**

Boolean value used for showing or hiding the progress bar.

```xml
<@nativescript-community/ui-image:Img showProgressBar="true"/>
```

- **progressBarColor**

String value used for setting the color of the progress bar. You can set it to hex values ("*#FF0000*") and/or predefined colors ("*green*").

```xml
<@nativescript-community/ui-image:Img progressBarColor="blue"/>
```

- **roundAsCircle** 

Boolean value used for determining if the image will be rounded as a circle. Its default value is false. If set to true the image will be rounder to a circle.

```xml
<@nativescript-community/ui-image:Img roundAsCircle="true"/>
```

- **roundTopLeftRadius** 

Radius of the Top Left corner in 

```xml
<@nativescript-community/ui-image:Img roundTopLeftRadius="50"/>
```

- **roundTopRightRadius** 

Radius of the Top Right corner in 

```xml
<@nativescript-community/ui-image:Img roundTopRightRadius="50"/>
```
- **roundBottomLeftRadius** 

Radius of the Bottom Left corner in 

```xml
<@nativescript-community/ui-image:Img roundBottomLeftRadius="50"/>
```
- **roundBottomRightRadius** 

Radius of the Bottom Right corner in 

```xml
<@nativescript-community/ui-image:Img roundBottomRightRadius="50"/>
```

- **autoPlayAnimations** 

Boolean value used for enabling the automatic playing of animated images. Note that rounding of such images is not supported and will be ignored.

```xml
<@nativescript-community/ui-image:Img autoPlayAnimations="true"/>
```

- **tapToRetryEnabled** (Android only)

Boolean value used for enabling/disabling a tap to retry action for the download of the Img image.

```xml
<@nativescript-community/ui-image:Img tapToRetryEnabled="true"/>
```

### Cache
The @nativescript-community/ui-image {N} plugin has built-in cache mechanism which handles managing the images in the memory. There are two types of cache mechanisms `memory` and `disk`, you can manually manage both of them with the following functionality.

#### 'Refresh' the 'src'
Not so rarely you may have a scenario where the actual image on your remote service from the `src` of the `Img` has changed but the {N} app already has an image in its internal cache. In such scenario you can easily 'refresh' the `src` by calling the `updateImageUri()`:

```
// 'img' is the instance the 'Img' in the project.
img.updateImageUri();
```


#### Clear everything from the cache
Managing the caches in @nativescript-community/ui-image is done via the `ImagePipeline`. In order to get the reference of the ImagePipeline simply call the `getImagePipeline()` function:

```
var imageModuleModel = require("@nativescript-community/ui-image");

var imagePipeLine = imageModuleModel.getImagePipeline();
```

- Clear both the memory and disk caches

```
imagePipeLine.clearCaches();
``` 

- Clear the memory cache

```
imagePipeLine.clearMemoryCaches();
``` 

- Clear the disk cache

```
imagePipeLine.clearDiskCaches();
``` 

#### Evict all images with a specific URI from the cache
If clearing the entire cache is not what you desired, you can clear only the images linked with a specific URI (`src`). Evicting is done again via the ImagePipeline:

```
var imageModuleModel = require("@nativescript-community/ui-image");

var imagePipeLine = imageModuleModel.getImagePipeline();
```

- Evict URI from both the memory and disk caches

```
imagePipeLine.evictFromCache("<uri-to-a-photo-from-the-web>");
``` 

- Evict URI from the memory cache

```
imagePipeLine.evictFromMemoryCache("<uri-to-a-photo-from-the-web>");
``` 

- Evict URI from the disk cache

```
imagePipeLine.evictFromDiskCache("<uri-to-a-photo-from-the-web>");
```

#### Manually shut down the native imageModule library
In very very rare occasions the native Android imageModule library may experience strange memory leak issues, in such scenarios as a last resort you may want to "shut down" the library forcing all of the managed memory to possibly be released. You can do that by calling the `shutDown` function exposed by the @nativescript-community/ui-image module, one good application lifecycle event to call it inside may be in the `exit` event of the application:

```javascript
import * as app from "application";
import * as imageModuleModule from "@nativescript-community/ui-image";

if (app.android) {
    app.on(app.exitEvent, (args) => {
        imageModuleModule.shutDown();
    });
}
```


[](#flavors)


[](#flavors)

## Flavors

Using core
```xml
<Page
    xmlns="http://www.nativescript.org/tns.xsd" 
    xmlns:@nativescript-community/ui-image="@nativescript-community/ui-image">
    <@nativescript-community/ui-image:Img width="250" height="250"
                                      src="<uri-to-a-photo-from-the-web-or-a-local-resource>"/>
</Page>
```

Other flavors are presented in the demo apps that you can find under `demo-snippets`


[](#demos)


[](#demos)

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


[](#demos-and-development)


[](#demos-and-development)

## Demos and Development


### Repo Setup

The repo uses submodules. If you did not clone with ` --recursive` then you need to call
```
git submodule update --init
```

The package manager used to install and link dependencies must be `pnpm` or `yarn`. `npm` wont work.

To develop and test:
if you use `yarn` then run `yarn`
if you use `pnpm` then run `pnpm i`

**Interactive Menu:**

To start the interactive menu, run `npm start` (or `yarn start` or `pnpm start`). This will list all of the commonly used scripts.

### Build

```bash
npm run build.all
```
WARNING: it seems `yarn build.all` wont always work (not finding binaries in `node_modules/.bin`) which is why the doc explicitly uses `npm run`

### Demos

```bash
npm run demo.[ng|react|svelte|vue].[ios|android]

npm run demo.svelte.ios # Example
```

Demo setup is a bit special in the sense that if you want to modify/add demos you dont work directly in `demo-[ng|react|svelte|vue]`
Instead you work in `demo-snippets/[ng|react|svelte|vue]`
You can start from the `install.ts` of each flavor to see how to register new demos 


[](#contributing)


[](#contributing)

## Contributing

### Update repo 

You can update the repo files quite easily

First update the submodules

```bash
npm run update
```

Then commit the changes
Then update common files

```bash
npm run sync
```
Then you can run `yarn|pnpm`, commit changed files if any

### Update readme 
```bash
npm run readme
```

### Update doc 
```bash
npm run doc
```

### Publish

The publishing is completely handled by `lerna` (you can add `-- --bump major` to force a major release)
Simply run 
```shell
npm run publish
```

### modifying submodules

The repo uses https:// for submodules which means you won't be able to push directly into the submodules.
One easy solution is t modify `~/.gitconfig` and add
```
[url "ssh://git@github.com/"]
	pushInsteadOf = https://github.com/
```


[](#questions)


[](#questions)

## Questions

If you have any questions/issues/comments please feel free to create an issue or start a conversation in the [NativeScript Community Discord](https://nativescript.org/discord).
</details>
<details open>
<summary><b>image-colorfilter</b></summary>

<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
<!--  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      DO NOT EDIT THIS READEME DIRECTLY! Edit "bluesprint.md" instead.
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
<h1 align="center">@nativescript-community/ui-image-colorfilter</h1>
<p align="center">
		<a href="https://npmcharts.com/compare/@nativescript-community/ui-image-colorfilter?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@nativescript-community/ui-image-colorfilter.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/@nativescript-community/ui-image-colorfilter"><img alt="NPM Version" src="https://img.shields.io/npm/v/@nativescript-community/ui-image-colorfilter.svg" height="20"/></a>
	</p>

<p align="center">
  <b>color matrix filters for @nativescript-community/ui-image</b></br>
  <sub><sub>
</p>

<br />


| <img src="https://github.com/nativescript-community/ui-image/raw/master/images/demo-ios.gif" height="500" /> | <img src="https://github.com/nativescript-community/ui-image/raw/master/images/demo-android.gif" height="500" /> |
| --- | ----------- |
| iOS Demo | Android Demo |


[](#table-of-contents)


[](#table-of-contents)

## Table of Contents

* [Installation](#installation)
* [setup](#setup)
* [Demos](#demos)
* [Demos and Development](#demos-and-development)
	* [Repo Setup](#repo-setup)
	* [Build](#build)
	* [Demos](#demos-1)
* [Contributing](#contributing)
	* [Update repo ](#update-repo-)
	* [Update readme ](#update-readme-)
	* [Update doc ](#update-doc-)
	* [Publish](#publish)
	* [modifying submodules](#modifying-submodules)
* [Questions](#questions)


[](#installation)


[](#installation)

## Installation
Run the following command from the root of your project:

`ns plugin add @nativescript-community/ui-image-colorfilter`


[](#setup)


[](#setup)

## setup

```typescript
import { installMixins } from "@nativescript-community/ui-image-colorfilter";

//do this before creating any image view
installMixins();
```


It adds one property `colorMatrix` which is a `number[]`
You can find samples color matrix [here](https://github.com/skratchdot/color-matrix)


[](#demos)


[](#demos)

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


[](#demos-and-development)


[](#demos-and-development)

## Demos and Development


### Repo Setup

The repo uses submodules. If you did not clone with ` --recursive` then you need to call
```
git submodule update --init
```

The package manager used to install and link dependencies must be `pnpm` or `yarn`. `npm` wont work.

To develop and test:
if you use `yarn` then run `yarn`
if you use `pnpm` then run `pnpm i`

**Interactive Menu:**

To start the interactive menu, run `npm start` (or `yarn start` or `pnpm start`). This will list all of the commonly used scripts.

### Build

```bash
npm run build.all
```
WARNING: it seems `yarn build.all` wont always work (not finding binaries in `node_modules/.bin`) which is why the doc explicitly uses `npm run`

### Demos

```bash
npm run demo.[ng|react|svelte|vue].[ios|android]

npm run demo.svelte.ios # Example
```

Demo setup is a bit special in the sense that if you want to modify/add demos you dont work directly in `demo-[ng|react|svelte|vue]`
Instead you work in `demo-snippets/[ng|react|svelte|vue]`
You can start from the `install.ts` of each flavor to see how to register new demos 


[](#contributing)


[](#contributing)

## Contributing

### Update repo 

You can update the repo files quite easily

First update the submodules

```bash
npm run update
```

Then commit the changes
Then update common files

```bash
npm run sync
```
Then you can run `yarn|pnpm`, commit changed files if any

### Update readme 
```bash
npm run readme
```

### Update doc 
```bash
npm run doc
```

### Publish

The publishing is completely handled by `lerna` (you can add `-- --bump major` to force a major release)
Simply run 
```shell
npm run publish
```

### modifying submodules

The repo uses https:// for submodules which means you won't be able to push directly into the submodules.
One easy solution is t modify `~/.gitconfig` and add
```
[url "ssh://git@github.com/"]
	pushInsteadOf = https://github.com/
```


[](#questions)


[](#questions)

## Questions

If you have any questions/issues/comments please feel free to create an issue or start a conversation in the [NativeScript Community Discord](https://nativescript.org/discord).
</details>
<details open>
<summary><b>zoomimage</b></summary>

<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
<!--  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      DO NOT EDIT THIS READEME DIRECTLY! Edit "bluesprint.md" instead.
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
<h1 align="center">@nativescript-community/ui-zoomimage</h1>
<p align="center">
		<a href="https://npmcharts.com/compare/@nativescript-community/ui-zoomimage?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@nativescript-community/ui-zoomimage.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/@nativescript-community/ui-zoomimage"><img alt="NPM Version" src="https://img.shields.io/npm/v/@nativescript-community/ui-zoomimage.svg" height="20"/></a>
	</p>

<p align="center">
  <b>Zoomable image view based on @nativescript-community/ui-image</b></br>
  <sub><sub>
</p>

<br />


| <img src="https://github.com/nativescript-community/ui-image/raw/master/images/demo-ios.gif" height="500" /> | <img src="https://github.com/nativescript-community/ui-image/raw/master/images/demo-android.gif" height="500" /> |
| --- | ----------- |
| iOS Demo | Android Demo |


[](#table-of-contents)


[](#table-of-contents)

## Table of Contents

* [Installation](#installation)
* [setup](#setup)
* [Demos](#demos)
* [Demos and Development](#demos-and-development)
	* [Repo Setup](#repo-setup)
	* [Build](#build)
	* [Demos](#demos-1)
* [Contributing](#contributing)
	* [Update repo ](#update-repo-)
	* [Update readme ](#update-readme-)
	* [Update doc ](#update-doc-)
	* [Publish](#publish)
	* [modifying submodules](#modifying-submodules)
* [Questions](#questions)


[](#installation)


[](#installation)

## Installation
Run the following command from the root of your project:

`ns plugin add @nativescript-community/ui-zoomimage`


[](#setup)


[](#setup)

## setup

```javascript
import imageModule = require("@nativescript-community/ui-zoomimage");

//do this before creating any image view
imageModule.initialize({ isDownsampleEnabled: true });
```

This component directly inherint `@nativescript-community/ui-image` so you can find the doc [here]()

It adds a few properties


[](#demos)


[](#demos)

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


[](#demos-and-development)


[](#demos-and-development)

## Demos and Development


### Repo Setup

The repo uses submodules. If you did not clone with ` --recursive` then you need to call
```
git submodule update --init
```

The package manager used to install and link dependencies must be `pnpm` or `yarn`. `npm` wont work.

To develop and test:
if you use `yarn` then run `yarn`
if you use `pnpm` then run `pnpm i`

**Interactive Menu:**

To start the interactive menu, run `npm start` (or `yarn start` or `pnpm start`). This will list all of the commonly used scripts.

### Build

```bash
npm run build.all
```
WARNING: it seems `yarn build.all` wont always work (not finding binaries in `node_modules/.bin`) which is why the doc explicitly uses `npm run`

### Demos

```bash
npm run demo.[ng|react|svelte|vue].[ios|android]

npm run demo.svelte.ios # Example
```

Demo setup is a bit special in the sense that if you want to modify/add demos you dont work directly in `demo-[ng|react|svelte|vue]`
Instead you work in `demo-snippets/[ng|react|svelte|vue]`
You can start from the `install.ts` of each flavor to see how to register new demos 


[](#contributing)


[](#contributing)

## Contributing

### Update repo 

You can update the repo files quite easily

First update the submodules

```bash
npm run update
```

Then commit the changes
Then update common files

```bash
npm run sync
```
Then you can run `yarn|pnpm`, commit changed files if any

### Update readme 
```bash
npm run readme
```

### Update doc 
```bash
npm run doc
```

### Publish

The publishing is completely handled by `lerna` (you can add `-- --bump major` to force a major release)
Simply run 
```shell
npm run publish
```

### modifying submodules

The repo uses https:// for submodules which means you won't be able to push directly into the submodules.
One easy solution is t modify `~/.gitconfig` and add
```
[url "ssh://git@github.com/"]
	pushInsteadOf = https://github.com/
```


[](#questions)


[](#questions)

## Questions

If you have any questions/issues/comments please feel free to create an issue or start a conversation in the [NativeScript Community Discord](https://nativescript.org/discord).
</details>

[](#demos-and-development)

## Demos and Development


### Repo Setup

The repo uses submodules. If you did not clone with ` --recursive` then you need to call
```
git submodule update --init
```

The package manager used to install and link dependencies must be `pnpm` or `yarn`. `npm` wont work.

To develop and test:
if you use `yarn` then run `yarn`
if you use `pnpm` then run `pnpm i`

**Interactive Menu:**

To start the interactive menu, run `npm start` (or `yarn start` or `pnpm start`). This will list all of the commonly used scripts.

### Build

```bash
npm run build.all
```
WARNING: it seems `yarn build.all` wont always work (not finding binaries in `node_modules/.bin`) which is why the doc explicitly uses `npm run`

### Demos

```bash
npm run demo.[ng|react|svelte|vue].[ios|android]

npm run demo.svelte.ios # Example
```

Demo setup is a bit special in the sense that if you want to modify/add demos you dont work directly in `demo-[ng|react|svelte|vue]`
Instead you work in `demo-snippets/[ng|react|svelte|vue]`
You can start from the `install.ts` of each flavor to see how to register new demos 


[](#contributing)

## Contributing

### Update repo 

You can update the repo files quite easily

First update the submodules

```bash
npm run update
```

Then commit the changes
Then update common files

```bash
npm run sync
```
Then you can run `yarn|pnpm`, commit changed files if any

### Update readme 
```bash
npm run readme
```

### Update doc 
```bash
npm run doc
```

### Publish

The publishing is completely handled by `lerna` (you can add `-- --bump major` to force a major release)
Simply run 
```shell
npm run publish
```

### modifying submodules

The repo uses https:// for submodules which means you won't be able to push directly into the submodules.
One easy solution is t modify `~/.gitconfig` and add
```
[url "ssh://git@github.com/"]
	pushInsteadOf = https://github.com/
```

[](#questions)

## Questions

If you have any questions/issues/comments please feel free to create an issue or start a conversation in the [NativeScript Community Discord](https://nativescript.org/discord).