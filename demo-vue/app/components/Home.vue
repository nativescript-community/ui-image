<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

        <GridLayout rows="*, auto, auto, auto, auto, auto">
            <StackLayout orientation="horizontal">
                <NSImg backgroundColor="yellow" height="100" ref="opacityImg" verticalAlignment="center" borderRadius="100" width="50%" stretch="aspectFill" placeholderImageUri="res://ns_logo" src="~/images/dessert.jpg"> </NSImg>
                <NSImg backgroundColor="red" width="50%" height="100" verticalAlignment="center" borderRadius="100" stretch="aspectFill" :src="imgSource" > </NSImg>
            </StackLayout>
            <Button text="Set 1" row="1" @tap="onSeOpacityTo1"></Button>
            <Button text="Set 0.5" row="2" @tap="onSeOpacityTo05"></Button>
            <Button text="Set 0.1" row="3" @tap="onSeOpacityTo01"></Button>
            <Button text="Animate to 0.1" row="4" @tap="onAnimateTo01"></Button>
            <Button text="Animate to 1" row="5" @tap="onAnimateTo1"></Button>
        </GridLayout>
    </Page>
</template>

<script>
import { ImageSource } from '@nativescript/core';
export default {
    data: function() {
        return {
            imgSource: ImageSource.fromFileSync('~/images/dessert.jpg')
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
// Start custom common variables
@import '../app-variables';
// End custom common variables

// Custom styles
.fa {
    color: $accent-dark;
}

.info {
    font-size: 20;
}
</style>
