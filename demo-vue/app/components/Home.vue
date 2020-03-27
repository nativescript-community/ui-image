<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

        <GridLayout rows="*, auto, auto, auto, auto, auto">
            <NSImg ref="opacityImg"
                verticalAlignment="center"
                    blurRadius="25"
                placeholderImageUri="res://ns_logo"
                src="https://raw.githubusercontent.com/Akylas/nativescript-image/master/examples-data/breakfast1.jpg">
            </NSImg>
            <Button text="Set 1" row="1" @tap="onSeOpacityTo1"></Button>
            <Button text="Set 0.5" row="2" @tap="onSeOpacityTo05"></Button>
            <Button text="Set 0.1" row="3" @tap="onSeOpacityTo01"></Button>
            <Button text="Animate to 0.1" row="4" @tap="onAnimateTo01"></Button>
            <Button text="Animate to 1" row="5" @tap="onAnimateTo1"></Button>
        </GridLayout>
    </Page>
</template>

<script>
    export default {
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
