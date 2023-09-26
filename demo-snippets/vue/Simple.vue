<template>
    <Page>
        <ActionBar>
            <Label text="Simple Grid" />
        </ActionBar>

        <GridLayout rows="*, auto, auto, auto, auto, auto">
            <StackLayout orientation="horizontal">
                <NSImg backgroundColor="yellow" height="400" ref="opacityImg" verticalAlignment="center" borderRadius="100" width="50%" src="~/assets/images/dessert.jpg"> </NSImg>
                <NSImg backgroundColor="red" width="50%" height="100" verticalAlignment="center" borderRadius="100" :src="imgSource"> </NSImg>
            </StackLayout>
            <Button text="Set 1" row="1" @tap="onSeOpacityTo1"></Button>
            <Button text="Set 0.5" row="2" @tap="onSeOpacityTo05"></Button>
            <Button text="Set 0.1" row="3" @tap="onSeOpacityTo01"></Button>
            <Button text="Animate to 0.1" row="4" @tap="onAnimateTo01"></Button>
            <Button text="Animate to 1" row="5" @tap="onAnimateTo1"></Button>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { ImageSource } from '@nativescript/core';

export default {
    data() {
        return {
            // warning image source native android image will not be released!
            imgSource: ImageSource.fromFileSync('~/assets/images/drink.jpg')
        };
    },
    methods: {
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
