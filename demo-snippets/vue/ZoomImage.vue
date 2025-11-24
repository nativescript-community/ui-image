<template>
    <Page>
        <ActionBar>
            <Label text="Zoom Image" />
        </ActionBar>

        <NSZoomImg src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg" maxZoom="10" minZoom="1" imageRotation="90"/>
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
