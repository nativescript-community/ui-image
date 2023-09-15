<template>
    <Page>
        <ActionBar>
            <Label text="Zoom Image" />
        </ActionBar>

        <NSZoomImg :src="imgSource"/>
    </Page>
</template>

<script lang="ts">
import { ImageSource } from '@nativescript/core';

export default {
    data: function() {
        return {
            // warning image source native android image will not be released!
            imgSource: ImageSource.fromFileSync('~/assets/images/dessert.jpg')
        };
    },
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
