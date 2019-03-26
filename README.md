# Welcome to NativeScript imageModule

> A NativeScript Plugin for Android apps.

[![Build Status](https://travis-ci.org/Akylas/nativescript-image.svg?branch=master)](https://travis-ci.org/Akylas/nativescript-image)
[![npm](https://img.shields.io/npm/v/nativescript-image.svg)](https://www.npmjs.com/package/nativescript-image)
[![npm](https://img.shields.io/npm/dt/nativescript-image.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-image)
[![Dependency status](https://david-dm.org/Akylas/nativescript-image.svg)](https://david-dm.org/Akylas/nativescript-image)
[![peerDependencies Status](https://david-dm.org/Akylas/nativescript-image/peer-status.svg)](https://david-dm.org/Akylas/nativescript-image?type=peer)


<!-- TOC depthFrom:2 depthTo:3 -->

- [What is `nativescript-image`?](#what-is-nativescript-image)
- [How to use `nativescript-image`?](#how-to-use-nativescript-image)
    - [In vanila NativeScript](#in-vanila-nativescript)
    - [In NativeScript + Angular 2](#in-nativescript--angular-2)
- [Examples](#examples)
- [Features](#features)
    - [Basic attributes](#basic-attributes)
    - [Advanced *optional* attributes](#advanced-optional-attributes)
    - [Events](#events)
    - [Cache](#cache)
- [Sample Screenshots](#sample-screenshots)
- [Contribute](#contribute)
- [Get Help](#get-help)

<!-- /TOC -->

## What is `nativescript-image`?
`nativescript-image` is a NativeScript plugin for efficiently displaying images on iOS and Android. It uses imageModule on [Android](https://code.facebook.com/posts/366199913563917/introducing-imageModule-a-new-image-library-for-android/) and [SDWebImage](https://sdwebimage.github.io/) on iOS

## How to use `nativescript-image`?

### In vanila NativeScript
#### From npm
1. Go to the root folder of your {N} application where you would like to install the plugin and type `tns plugin add nativescript-image`.
4. Initialize `nativescript-image` in the `launch` event of your {N} application by using the following code:

#### From local repo?
1. Clone the repository and go to the root directory on your computer.
2. Use `tsc` to transpile the `.ts` sources: `tsc -p`.
3. Go to the root folder of your {N} application where you would like to install the plugin and type `tns plugin add <path-to-imageModule-repo-dir>`.
4. Initialize `nativescript-image` in the `launch` event of your {N} application by using the following code:

JavaScript:

```javascript
var application = require("application");
var imageModule = require("nativescript-image");

if (application.android) {
    application.on("launch", function () {
        imageModule.initialize();
    });
}
```

TypeScript:

```typescript
import application = require("application");
import imageModule = require("nativescript-image");

if (application.android) {
    application.on("launch", () => {
        imageModule.initialize();
    });
}
```

> When working with "downsampling" you will need to pass a configuration to the `initialize` function:

```javascript
imageModule.initialize({ isDownsampleEnabled: true });
```


Use `imageModule` in the XML definition of the page as follows:

```xml
<Page
    xmlns="http://www.nativescript.org/tns.xsd" 
    xmlns:nativescript-image="nativescript-image">
    <nativescript-image:Img width="250" height="250"
                                      src="<uri-to-a-photo-from-the-web-or-a-local-resource>"/>
</Page>
```

### In NativeScript + Angular 2

1. Import the `TNSImageModule` from `nativescript-image/angular` and add it to the `imports` of your initial `@NgModule`, like shown [here](https://github.com/Akylas/nativescript-image/blob/master/demo-angular/app/app.module.ts).
2. As described above make sure to initialize the `nativescript-image` plugin in the `launch` event of your {N} application.

## Examples
You can refer the [demo-angular](https://github.com/Akylas/nativescript-image/tree/master/demo-angular) folder of the repo for runnable {N} project that demonstrates the nativescript-image plugin with all of its features in action.

## Features

### Basic attributes

- **src** 

String value used for the image URI. You can use this property to set the image to be loaded from remote location (http, https), from the resources and local files of your {N} application.

```xml
<nativescript-image:Img src="https://docs.nativescript.org/angular/img/cli-getting-started/angular/chapter0/NativeScript_logo.png"/>
```

- **placeholderImageUri** 

String value used for the placeholder image URI. You can use this property to set a placeholder image loaded from the local and resources files of your {N} application.

**Note: Currently there are limitations on how many different Images can be set to as 'placeholderImage' before OutOfMemoryError is thrown. For best results its recommended to use a single image for all ```placeholderImageUri``` of your Img instances.*

```xml
<nativescript-image:Img placeholderImageUri="~/placeholder.jpg"/>
```

- **failureImageUri** 

String value used for the failure image URI. You can use this property to set a failure image loaded from the local and resources files of your {N} application that will be shown if the loading of the src is not successful.

```xml
<nativescript-image:Img failureImageUri="~/failure.jpg"/>
```


### Advanced *optional* attributes

There are a couple of *optional* attributes that could be set on the Img instance to achieve advanced behaviors:

- **backgroundUri**  (Android only)

String value used for the background image URI. Using this property has similar effect as the placeholderImageUri but the image is stretched to the size of the Img.

**Note: Currently there are limitations on how many different Images can be set to as 'background' before OutOfMemoryError is thrown. For best results its recommended to use a single image for all ```backgroundUri``` of your Img instances.*

```xml
<nativescript-image:Img backgroundUri="~/image.jpg"/>
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
<nativescript-image:Img stretch="centerInside"/>
```

- **fadeDuration** 

Number value used for the fade-in duration. This value is in milliseconds.

```xml
<nativescript-image:Img fadeDuration="3000"/>
```

- **blurRadius** 

Number value greater than zero, used as input for the blur function. Larger value means slower processing. For example a value of `10` means that each pixel in the image will be blurred using all adjacent pixels up to a distance of 10.

```xml
<nativescript-image:Img blurRadius="25"/>
```

- **blurDownSampling**  (Android only)

Number value greater than zero, used to scale the image before applying the blur function. Larger value means faster processing. For example a value of `2` means that the image will be scaled by a factor of two before applying blur.

```xml
<nativescript-image:Img blurDownSampling="2"/>
```

- **aspectRatio** 

Number value used as the aspect ratio of the image. This property is useful when you are working with different aspect ratio images and want to have a fixed Width or Height. The ratio of an image is calculated by dividing its width by its height. 

*Note: In some layout scenarios it is necessary to set the ```verticalAlignment``` of the Img to 'top' or 'bottom' in order to "anchor" the img and achieve dynamic sizing.*

```xml
<nativescript-image:Img aspectRatio="1.33" verticalAlignment="top"/>
```

- **decodeWidth** (downsampling) - make sure to enable downsample (**isDownsampleEnabled**) in the initialize function of the plugin otherwise this property is disregarded.

Number value used as the downsampled width of the imageModule drawable.

```xml
<nativescript-image:Img decodeWidth="100"/>
```

- **decodeHeight** (downsampling) - make sure to enable downsample (**isDownsampleEnabled**) in the initialize function of the plugin otherwise this property is disregarded.

Number value used as the downsampled width of the imageModule drawable.

```xml
<nativescript-image:Img decodeHeight="100"/>
```


- **progressiveRenderingEnabled**

Boolean value used for enabling or disabling the streaming of progressive JPEG images. This property is set to 'false' by default. Setting this property to 'true' while loading JPEG images not encoded in progressive format will lead to a standard loading of those images.

```xml
<nativescript-image:Img progressiveRenderingEnabled="true"/>
```

- **showProgressBar**  (Android only)

Boolean value used for showing or hiding the progress bar.

```xml
<nativescript-image:Img showProgressBar="true"/>
```

- **progressBarColor**  (Android only)

String value used for setting the color of the progress bar. You can set it to hex values ("*#FF0000*") and/or predefined colors ("*green*").

```xml
<nativescript-image:Img progressBarColor="blue"/>
```

- **roundAsCircle** 

Boolean value used for determining if the image will be rounded as a circle. Its default value is false. If set to true the image will be rounder to a circle.

```xml
<nativescript-image:Img roundAsCircle="true"/>
```

- **roundedCornerRadius** 

Number value used as radius for rounding the image's corners.

```xml
<nativescript-image:Img roundedCornerRadius="50"/>
```

- **roundBottomRight** 

Boolean value used for determining if the image's bottom right corner will be rounded. The *roundedCornerRadius* is used as the rounding radius.

```xml
<nativescript-image:Img roundBottomRight="true"/>
```

- **roundBottomLeft** 

Boolean value used for determining if the image's bottom left corner will be rounded. The *roundedCornerRadius* is used as the rounding radius.

```xml
<nativescript-image:Img roundBottomLeft="true"/>
```

- **roundTopLeft** 

Boolean value used for determining if the image's top left corner will be rounded. The *roundedCornerRadius* is used as the rounding radius.

```xml
<nativescript-image:Img roundTopLeft="true"/>
```

- **roundTopRight** 

Boolean value used for determining if the image's top right corner should be rounded. The *roundedCornerRadius* is used as the rounding radius.

```xml
<nativescript-image:Img roundTopRight="true"/>
```

- **autoPlayAnimations** 

Boolean value used for enabling the automatic playing of animated images. Note that rounding of such images is not supported and will be ignored.

```xml
<nativescript-image:Img autoPlayAnimations="true"/>
```

- **tapToRetryEnabled** (Android only)

Boolean value used for enabling/disabling a tap to retry action for the download of the Img image.

```xml
<nativescript-image:Img tapToRetryEnabled="true"/>
```

### Events

- **finalImageSet** - arguments *FinalEventData*

This event is fired after the final image has been set. When working with animated images you could use this event to start the animation by calling the *FinalEventData.animatable.start()* function.

```xml
<nativescript-image:Img finalImageSet="onFinalImageSet"/>
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
import {Img, FinalEventData } from "nativescript-image";

export function onFinalImageSet(args: FinalEventData) {
    var img = args.object as Img;
}
```

- **failure** - arguments *FailureEventData*

This event is fired after the fetch of the final image failed.

```xml
<nativescript-image:Img failure="onFailure"/>
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
import {Img, FailureEventData } from "nativescript-image";

export function onFailure(args: FailureEventData) {
    var img = args.object as Img;
}
```

- **intermediateImageSet** - arguments *IntermediateEventData* (Android only)

This event is fired after any intermediate image has been set.

```xml
<nativescript-image:Img intermediateImageSet="onIntermediateImageSet"/>
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
import {Img, IntermediateEventData } from "nativescript-image";

export function onIntermediateImageSet(args: IntermediateEventData) {
    var img = args.object as Img;
}
```

- **intermediateImageFailed** - arguments *FailureEventData* (Android only)

This event is fired after the fetch of the intermediate image failed.

```xml
<nativescript-image:Img intermediateImageFailed="onIntermediateImageFailed"/>
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
import {Img, FailureEventData } from "nativescript-image";

export function intermediateImageFailed(args: FailureEventData) {
    var img = args.object as Img;
}
```

- **submit** - arguments *EventData* (Android only)

This event is fired before the image request is submitted.

```xml
<nativescript-image:Img submit="onSubmit"/>
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
import {Img, EventData } from "nativescript-image";

export function onSubmit(args: EventData) {
    var img = args.object as Img;
}
```

- **release** - arguments *EventData* (Android only)

This event is fired after the controller released the fetched image.

```xml
<nativescript-image:Img release="onRelease"/>
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
import {Img, EventData } from "nativescript-image";

export function onRelease(args: EventData) {
    var img = args.object as Img;
}
```

#### Event arguments

All events exposed by 'nativescript-image' provide additional information to their handlers that is needed to properly handle them. Here's a brief description of the event arguments coming with each of the events:

- **FinalEventData**

Instances of this class are provided to the handlers of the *finalImageSet*.

```typescript
import {Img, FinalEventData, ImageInfo, AnimatedImage } from "nativescript-image";

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
import {Img, FailureEventData, imageModuleError } from "nativescript-image";

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
import {Img, IntermediateEventData, ImageInfo } from "nativescript-image";

export function onIntermediateImageSet(args: IntermediateEventData) {
    var info: ImageInfo  = args.imageInfo;
    var quality: number = info.getQualityInfo().getQuality();
    var isFullQuality: boolean = info.getQualityInfo().isOfFullQuality();
    var isOfGoodEnoughQuality: boolean = info.getQualityInfo().isOfGoodEnoughQuality();}
```

- **EventData**

Instances of this class are provided to the handlers of the *release* and *submit*.

```typescript
import {Img, EventData } from "nativescript-image";

export function onSubmit(args: EventData) {
    var img = args.object as Img;
}
```

### Cache
The nativescript-image {N} plugin has built-in cache mechanism which handles managing the images in the memory. There are two types of cache mechanisms `memory` and `disk`, you can manually manage both of them with the following functionality.

#### 'Refresh' the 'src'
Not so rarely you may have a scenario where the actual image on your remote service from the `src` of the `Img` has changed but the {N} app already has an image in its internal cache. In such scenario you can easily 'refresh' the `src` by calling the `updateImageUri()`:

```
// 'img' is the instance the 'Img' in the project.
img.updateImageUri();
```


#### Clear everything from the cache
Managing the caches in nativescript-image is done via the `ImagePipeline`. In order to get the reference of the ImagePipeline simply call the `getImagePipeline()` function:

```
var imageModuleModel = require("nativescript-image");

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
var imageModuleModel = require("nativescript-image");

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
In very very rare occasions the native Android imageModule library may experience strange memory leak issues, in such scenarios as a last resort you may want to "shut down" the library forcing all of the managed memory to possibly be released. You can do that by calling the `shutDown` function exposed by the nativescript-image module, one good application lifecycle event to call it inside may be in the `exit` event of the application:

```javascript
import * as app from "application";
import * as imageModuleModule from "nativescript-image";

if (app.android) {
    app.on(app.exitEvent, (args) => {
        imageModuleModule.shutDown();
    });
}
```

## Sample Screenshots

All of the images are sample images for showcasing purposes.

Sample 1 - Placeholder image |  Sample 2 - Transition (fade-in animation)
-------- | ---------
![Placeholder image sample](screenshots/screen1-with-placeholder.png) | ![Transition sample](screenshots/screen2-transition-effect.png)

Sample 3 - Image shown successfully from src |  Sample 4 - 'Failure' image shown
-------- | ---------
![Successfully shown image sample](screenshots/screen3-successful-show.png) | ![Successfully shown image sample](screenshots/screen4-unsuccessful-show.png)

## Contribute
We love PRs! Check out the [contributing guidelines](CONTRIBUTING.md). If you want to contribute, but you are not sure where to start - look for [issues labeled `help wanted`](https://github.com/Akylas/nativescript-image/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22).

## Get Help 
Please, use [github issues](https://github.com/Akylas/nativescript-image/issues) strictly for [reporting bugs](CONTRIBUTING.md#reporting-bugs) or [requesting features](CONTRIBUTING.md#requesting-new-features). For general questions and support, check out [Stack Overflow](https://stackoverflow.com/questions/tagged/nativescript) or ask our experts in [NativeScript community Slack channel](http://developer.telerik.com/wp-login.php?action=slack-invitation).

![](https://ga-beacon.appspot.com/UA-111455-24/Akylas/nativescript-image?pixel)
