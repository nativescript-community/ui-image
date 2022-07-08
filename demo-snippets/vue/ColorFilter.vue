<template>
    <Page>
        <ActionBar>
            <Label text="Simple Grid" />
        </ActionBar>

        <GridLayout rows="*, auto, auto, auto, auto, auto">
                <NSImg backgroundColor="yellow" ref="opacityImg" stretch="aspectFill" placeholderImageUri="res://logo" :colorMatrix="colorMatrix" :src="src"> </NSImg>
            <Button text="nightVision" row="1" @tap="onSetNightVision"></Button>
            <Button text="polaroid" row="2" @tap="onSetPolaroid"></Button>
            <Button text="grayscale" row="1" @tap="onSetGrayscale"></Button>
            <Button text="bw" row="2" @tap="onSetBW"></Button>
            <Button text="change image" row="3" @tap="onChangeImage"></Button>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { ImageSource } from '@nativescript/core';

const filters = {
    nightVision:[0.1, 0.4, 0, 0, 0,
    0.3, 1, 0.3, 0, 0,
    0, 0.4, 0.1, 0, 0,
    0, 0, 0, 1, 0],
    polaroid: [
    1.438, -0.062, -0.062, 0, 0,
    -0.122, 1.378, -0.122, 0, 0,
    -0.016, -0.016, 1.483, 0, 0,
    0, 0, 0, 1, 0
  ], 
  grayscale:[
     .299, 0.587, 0.114, 0, 0,
				0.299, 0.587, 0.114, 0, 0,
				0.299, 0.587, 0.114, 0, 0,
				0, 0, 0, 1, 0
    ],
  bw:[
      1.5, 1.5, 1.5, 0, 0,1.5, 1.5, 1.5, 0, 0,1.5, 1.5, 1.5, 0, 0,0, 0, 0, 1, 0,-1, -1, -1, 0, 1
    ]
}

export default {
     data: function() {
        return {
            colorMatrix:filters.nightVision,
            src:'~/images/dessert.jpg',
            // warning image source native android image will not be released!
            imgSource: ImageSource.fromFileSync('~/images/dessert.jpg')
        };
    },
    methods: {
        onSetNightVision(args) {
            this.colorMatrix = filters.nightVision
        },
        onSetPolaroid(args) {
            this.colorMatrix = filters.polaroid
        },
        onSetGrayscale(args) {
            this.colorMatrix = filters.grayscale
        },
        onSetBW(args) {
            this.colorMatrix = filters.bw
        },
        onChangeImage(){
            this.src= this.src=== '~/images/dessert.jpg' ? '~/images/drink.jpg': '~/images/dessert.jpg';
        }
    }
};
</script>

<style scoped lang="scss">
ActionBar {
    background-color: #42b883;
}
.item {
    padding: 10;
    color: white;
    .title {
        font-size: 17;
        font-weight: bold;
    }
    .subtitle {
        font-size: 14;
    }
}
</style>
