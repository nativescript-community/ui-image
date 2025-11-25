<template>
    <Page>
        <ActionBar title="Animated image demo" />
        <StackLayout padding="10">
            <Label text="Animated GIF / APNG Demo" class="h2" />
            <NSImg
                ref="gifImg"
                width="98%"
                height="240"
                :src="gifSrc"
                :animatedImageView="true"
                :autoPlayAnimations="autoPlayAnimations"
                :tapToRetryEnabled="tapToRetryEnabled"
            />
            <WrapLayout marginTop="8">
                <Button :text="'AutoPlay: ' + autoPlayAnimations" @tap="toggleAutoPlay" />
                <Button text="Start anim" @tap="start" />
                <Button text="Stop anim" @tap="stop" />
                <Button text="Reload gif" @tap="reloadGif" />
            </WrapLayout>
            <Label text="Logs" class="h3" />
            <StackLayout>
                <Label v-for="(l, i) in logs" :key="i" :text="l" />
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
import { ImageSource } from '@nativescript/core';
export default {
    data() {
        return {
            gifSrc: 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif',
            autoPlayAnimations: true,
            tapToRetryEnabled: false,
            logs: [] as string[]
        };
    },
    methods: {
        addLog(msg: string) {
            this.logs.unshift(new Date().toLocaleTimeString() + ' - ' + msg);
            if (this.logs.length > 200) this.logs.length = 200;
        },
        start() {
            const view: any = this.$refs.gifImg.nativeView;
            try {
                view.startAnimating();
                this.addLog('startAnimating (manual)');
            } catch (err) {
                this.addLog('startAnimating error: ' + err);
            }
        },
        stop() {
            const view: any = this.$refs.gifImg.nativeView;
            try {
                view.stopAnimating();
                this.addLog('stopAnimating (manual)');
            } catch (err) {
                this.addLog('stopAnimating error: ' + err);
            }
        },
        reloadGif() {
            const view: any = this.$refs.gifImg.nativeView;
            view.src = this.gifSrc + '?r=' + Math.floor(Math.random() * 10000);
            this.addLog('reload gif');
        },
        toggleAutoPlay() {
            this.autoPlayAnimations = !this.autoPlayAnimations;
            this.addLog('autoPlayAnimations -> ' + this.autoPlayAnimations);
        }
    }
};
</script>

<style scoped lang="scss">
.h2 {
    font-weight: bold;
    font-size: 18;
}
.h3 {
    margin-top: 6;
    font-weight: bold;
}
</style>
