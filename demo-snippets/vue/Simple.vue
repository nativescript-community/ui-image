<template>
    <Page>
        <ActionBar>
            <Label text="Simple Grid" />
        </ActionBar>

        <GridLayout rows="300, auto, auto, auto, auto, auto">
            <StackLayout orientation="horizontal">
                <NSImg :showProgressBar="true" progressBarColor="green" backgroundColor="yellow" height="500" ref="opacityImg" borderRadius="10" width="50%" src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg" stretch="aspectFit" />
                <NSImg backgroundColor="red" width="50%" height="100" verticalAlignment="center" borderRadius="100" :src="imgSource"> </NSImg>
            </StackLayout>
            <WrapLayout row="1">
                <Button text="rotateLeft" @tap="onRotateLeft"></Button>
                <Button text="rotateRight" @tap="onRotateRight"></Button>
                <Button text="stretch" @tap="onStretch"></Button>
                <Button text="Set 1" @tap="onSeOpacityTo1"></Button>
                <Button text="Set 0.5" @tap="onSeOpacityTo05"></Button>
                <Button text="Set 0.1" @tap="onSeOpacityTo01"></Button>
                <Button text="Animate to 0.1" @tap="onAnimateTo01"></Button>
                <Button text="Animate to 1" @tap="onAnimateTo1"></Button>
            </WrapLayout>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { ImageSource } from '@nativescript/core';
import { Img } from '@nativescript-community/ui-image';
import { ScaleType } from '@nativescript-community/ui-image/index-common';

class EnumX {
    static of<T extends object>(e: T) {
        const values = Object.values(e);
        return {
            next: <K extends keyof T>(v: T[K]) => values[(values.indexOf(v) + 1) % values.length]
        };
    }
}

export default {
    data() {
        return {
            // warning image source native android image will not be released!
            imgSource: ImageSource.fromFileSync('~/assets/images/drink.jpg')
        };
    },
    methods: {
        async onRotateLeft() {
            const imageView = this.$refs.opacityImg.nativeView as Img;
            const imageRotation = (imageView.imageRotation - 90) % 360;
            console.log('onRotate', imageView.imageRotation, imageRotation);
            try {
                await imageView.animate({
                    duration: 200,
                    imageRotation
                } as any);
                imageView.imageRotation = imageRotation;
            } catch (err) {
                imageView.imageRotation = imageRotation;
            }
        },
        async onRotateRight() {
            const imageView = this.$refs.opacityImg.nativeView as Img;
            const imageRotation = (imageView.imageRotation + 90) % 360;
            console.log('onRotate', imageView.imageRotation, imageRotation);
            try {
                await imageView.animate({
                    duration: 200,
                    imageRotation
                } as any);
            } catch (err) {
            } finally {
                imageView.imageRotation = imageRotation;

            }
        },
        async onStretch() {
            const imageView = this.$refs.opacityImg.nativeView as Img;
            const stretch = EnumX.of(ScaleType).next(imageView.stretch as ScaleType);
            console.log('onStretch', imageView.stretch, stretch);
            try {
                imageView.stretch = stretch;
            } catch (err) {
                console.error(err);
            }
        },
        onSeOpacityTo1(args) {
            this.$refs.opacityImg.nativeView.opacity = 1;
        },
        onSeOpacityTo01(args) {
            this.$refs.opacityImg.nativeView.opacity = 0.1;
        },
        onSeOpacityTo05(args) {
            this.$refs.opacityImg.nativeView.opacity = 0.5;
        },
        onAnimateTo01(args) {
            this.$refs.opacityImg.nativeView.animate({
                opacity: 0.1,
                duration: 500
            });
        },
        onAnimateTo1(args) {
            this.$refs.opacityImg.nativeView.animate({
                opacity: 1,
                duration: 500
            });
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
