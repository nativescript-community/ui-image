<template>
    <Page>
        <ActionBar title="Decode and Resize" />
        <ScrollView>
            <StackLayout padding="10">
                <Label text="Decode / Blur / Resize" class="h2" />
                <NSImg
                    ref="decImg"
                    width="100%"
                    height="260"
                    :src="src"
                    :decodeWidth="decodeWidth"
                    :decodeHeight="decodeHeight"
                    :blurRadius="blurRadius"
                    :blurDownSampling="blurDownSampling"
                    :noRatioEnforce="noRatioEnforce"
                    :showProgressBar="true"
                    progressBarColor="purple"
                    @finalImageSet="onFinal"
                />

                <Label :text="`decodeWidth: ${decodeWidth}, decodeHeight: ${decodeHeight}`" />
                <StackLayout orientation="horizontal" marginTop="6">
                    <TextField v-model="decodeWidthTxt" keyboardType="number" hint="width" />
                    <TextField v-model="decodeHeightTxt" keyboardType="number" hint="height" />
                    <Button text="Apply" @tap="applyDecode" />
                </StackLayout>

                <Label :text="`Blur radius: ${blurRadius}`" />
                <Slider minValue="0" maxValue="25" :value="blurRadius" @valueChange="onBlurChange" />

                <Label :text="`Blur downsampling: ${blurDownSampling}`" />
                <Slider minValue="1" maxValue="8" :value="blurDownSampling" @valueChange="(v) => (blurDownSampling = Math.max(1, Math.round(v.value)))" />

                <WrapLayout marginTop="8">
                    <Button :text="'NoRatioEnforce: ' + noRatioEnforce" @tap="toggle('noRatioEnforce')" />
                    <Button text="Animate opacity 0.1" @tap="animateTo01" />
                    <Button text="Animate opacity 1" @tap="animateTo1" />
                </WrapLayout>

                <Label text="Logs" class="h3" />
                <StackLayout>
                    <Label v-for="(l, i) in logs" :key="i" :text="l" />
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script lang="ts">
import { ImageSource } from '@nativescript/core';
import { Img } from '@nativescript-community/ui-image';

export default {
    data() {
        return {
            src: 'https://picsum.photos/2000/1200',
            decodeWidth: 0,
            decodeHeight: 0,
            decodeWidthTxt: '0',
            decodeHeightTxt: '0',
            blurRadius: 0,
            blurDownSampling: 1,
            noRatioEnforce: false,
            logs: [] as string[]
        };
    },
    methods: {
        onBlurChange(args: any) {
            const val = typeof args.value === 'number' ? args.value : args.newValue;
            this.blurRadius = Math.round(val);
        },
        applyDecode() {
            const w = Math.max(0, Number(this.decodeWidthTxt) || 0);
            const h = Math.max(0, Number(this.decodeHeightTxt) || 0);
            this.decodeWidth = w;
            this.decodeHeight = h;
            this.addLog(`decode set ${w}x${h}`);
        },
        toggle(prop: string) {
            // @ts-ignore
            this[prop] = !this[prop];
            this.addLog(`${prop} -> ${this[prop]}`);
        },
        animateTo01() {
            const view: any = this.$refs.decImg.nativeView;
            view.animate({ opacity: 0.1, duration: 400 });
        },
        animateTo1() {
            const view: any = this.$refs.decImg.nativeView;
            view.animate({ opacity: 1, duration: 400 });
        },
        addLog(msg: string) {
            this.logs.unshift(new Date().toLocaleTimeString() + ' - ' + msg);
            if (this.logs.length > 100) this.logs.length = 100;
        },
        onFinal(e: any) {
            const info = e.imageInfo;
            this.addLog('finalImageSet ' + (info ? `${info.getWidth()}x${info.getHeight()}` : '?'));
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
