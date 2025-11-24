<template>
    <Page>
        <ActionBar title="Rounding & Clipping" />
        <ScrollView>
            <StackLayout padding="10">
                <Label text="Round & Clip Demo" class="h2" />
                <Label text="Circle & per-corner radii" />
                <GridLayout columns="*,*" rows="auto" marginTop="6" backgroundColor="red">
                    <NSImg col="0" width="100%" height="180" :src="src" :roundAsCircle="roundAsCircle" :borderRadius="10" />
                    <NSImg
                        col="1"
                        width="100%"
                        backgroundColor="green"
                        height="180"
                        :src="src"
                        borderColor="blue"
                        borderWidth="4"
                        :borderTopLeftRadius="rTL"
                        :borderTopRightRadius="rTR"
                        :borderBottomLeftRadius="rBL"
                        :borderBottomRightRadius="rBR"
                        :clipToBounds="clipToBounds"
                    />
                </GridLayout>

                <Label text="Controls" class="h3" />
                <WrapLayout>
                    <Button :text="'Circle: ' + roundAsCircle" @tap="toggle('roundAsCircle')" />
                    <Button :text="'Clip: ' + clipToBounds" @tap="toggle('clipToBounds')" />
                </WrapLayout>

                <StackLayout orientation="horizontal" marginTop="8">
                    <StackLayout width="50%">
                        <Label :text="'top-left radius: ' + rTL" />
                        <Slider minValue="0" maxValue="120" :value="rTL" @valueChange="(v) => (rTL = Math.round(v.value))" />
                    </StackLayout>
                    <StackLayout width="50%">
                        <Label :text="'top-right radius: ' + rTR" />
                        <Slider minValue="0" maxValue="120" :value="rTR" @valueChange="(v) => (rTR = Math.round(v.value))" />
                    </StackLayout>
                </StackLayout>
                <StackLayout orientation="horizontal" marginTop="4">
                    <StackLayout width="50%">
                        <Label :text="'bottom-left radius: ' + rBL" />
                        <Slider minValue="0" maxValue="120" :value="rBL" @valueChange="(v) => (rBL = Math.round(v.value))" />
                    </StackLayout>
                    <StackLayout width="50%">
                        <Label :text="'bottom-right radius: ' + rBR" />
                        <Slider minValue="0" maxValue="120" :value="rBR" @valueChange="(v) => (rBR = Math.round(v.value))" />
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script lang="ts">
import { ImageSource } from '@nativescript/core';
export default {
    data() {
        return {
            src: 'https://picsum.photos/800/480',
            roundAsCircle: false,
            clipToBounds: true,
            rTL: 0,
            rTR: 0,
            rBL: 0,
            rBR: 0
        };
    },
    methods: {
        toggle(prop: string) {
            // @ts-ignore
            this[prop] = !this[prop];
        }
    }
};
</script>

<style scoped lang="scss">
.h2 {
    font-size: 18;
    font-weight: bold;
}
.h3 {
    margin-top: 8;
    font-weight: bold;
}
</style>
