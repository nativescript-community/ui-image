<template>
    <Page>
        <ActionBar>
            <Label text="Simple Grid" />
        </ActionBar>

        <GridLayout rows="300, auto, auto, auto, auto, auto">
            <NSImg
                height="200"
                width="400"
                placeholderImageUri="res://icon_star"
                backgroundColor="blue"
                failureImageUri="res://icon_not_found"
                showProgressBar="true"
                failure="onFailure"
                src="http://error.jpgerror"
            />
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { ImageSource } from '@nativescript/core';
import { Img } from '@nativescript-community/ui-image';
import { ScaleType } from '@nativescript-community/ui-image/index-common';

export default {
    data() {
        return {};
    },
    methods: {}
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
