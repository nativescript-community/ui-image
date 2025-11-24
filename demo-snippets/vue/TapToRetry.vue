<template>
    <Page>
        <ActionBar title="Tap to Retry Demo" />
        <StackLayout padding="10">
            <Label text="Tap-to-Retry" class="h2" />
            <NSImg ref="img" width="100%" height="200" :src="src" :tapToRetryEnabled="tapToRetry" :showProgressBar="true" progressBarColor="orange" @failure="onFailure" @finalImageSet="onFinal" />
            <WrapLayout marginTop="8">
                <Button :text="'TapToRetry: ' + tapToRetry" @tap="toggle('tapToRetry')" />
                <Button text="Set broken image" @tap="setBroken" />
                <Button text="Set working image" @tap="setWorking" />
                <Button text="Manual retry" @tap="manualRetry" />
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
            src: 'https://example.com/does-not-exist.png',
            tapToRetry: true,
            logs: [] as string[],
            working: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg'
        };
    },
    methods: {
        addLog(msg: string) {
            this.logs.unshift(new Date().toLocaleTimeString() + ' - ' + msg);
            if (this.logs.length > 120) this.logs.length = 120;
        },
        toggle(prop: string) {
            // @ts-ignore
            this[prop] = !this[prop];
            this.addLog(`${prop} -> ${this[prop]}`);
        },
        setBroken() {
            this.src = 'https://example.com/does-not-exist.png';
            this.addLog('src -> broken');
        },
        setWorking() {
            this.src = this.working;
            this.addLog('src -> working');
        },
        manualRetry() {
            const view: any = this.$refs.img.nativeView;
            try {
                // Reassign the src to force a retry
                view.src = view.src;
                this.addLog('manual retry triggered');
            } catch (err) {
                this.addLog('manual retry error: ' + err);
            }
        },
        onFailure(e: any) {
            const m = e.error && e.error.getMessage ? e.error.getMessage() : String(e.error || e);
            this.addLog('failure: ' + m);
        },
        onFinalImage(e: any) {
            this.addLog('finalImageSet');
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
