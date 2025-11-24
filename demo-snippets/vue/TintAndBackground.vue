<template>
    <Page>
        <ActionBar title="Tint & Background" />
        <StackLayout padding="10">
            <Label text="Tint & Background Demo" class="h2" />
            <GridLayout columns="*,*" marginTop="8" height="60%">
                <NSImg col="0" width="100%" height="200" :src="src" :tintColor="tint" :showProgressBar="true" />
                <NSImg col="1" width="100%" height="200" :src="src" :backgroundUri="background" :showProgressBar="true" />
            </GridLayout>
            <WrapLayout marginTop="8">
                <Button text="Apply red tint" @tap="applyTint('#ff000088')" />
                <Button text="Apply blue tint" @tap="applyTint('#0000ff88')" />
                <Button :text="'Clear tint'" @tap="applyTint(null)" />
                <Button text="Set background res" @tap="setBackgroundRes" />
                <Button text="Set background local" @tap="setBackgroundLocal" />
                <Button text="Clear background" @tap="clearBackground" />
            </WrapLayout>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
import { Color, ImageSource } from '@nativescript/core';

export default {
    data() {
        return {
            src: 'https://picsum.photos/900/540',
            tint: null as any as Color | null,
            background: null as string | ImageSource | null,
            localFile: ImageSource.fromFileSync('~/assets/images/drink.jpg')
        };
    },
    methods: {
        applyTint(color: string | null) {
            this.tint = color ? new Color(color) : null;
        },
        setBackgroundRes() {
            this.background = 'res://ic_launcher_background';
        },
        setBackgroundLocal() {
            this.background = this.localFile;
        },
        clearBackground() {
            this.background = null;
        }
    }
};
</script>

<style scoped lang="scss">
.h2 {
    font-size: 18;
    font-weight: bold;
}
</style>
