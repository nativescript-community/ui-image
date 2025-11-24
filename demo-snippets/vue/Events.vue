<template>
    <Page>
        <ActionBar title="Img Events Demo" />
        <StackLayout padding="10">
            <Label text="Img Events" class="h2" />
            <NSImg
                ref="evtImg"
                width="98%"
                height="220"
                src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
                showProgressBar="true"
                progressBarColor="blue"
                :animatedImageView="true"
                @finalImageSet="onFinalImageSet"
                @failure="onFailure"
                @intermediateImageSet="onIntermediateImageSet"
                @intermediateImageFailed="onIntermediateImageFailed"
                @release="onRelease"
                @submit="onSubmit"
                @progress="onProgress"
                @loadSource="onLoadSource"
                @networkLoadStart="onNetworkLoadStart"
            />
            <WrapLayout marginTop="8">
                <Button text="Reload" @tap="reload" />
                <Button text="Attach dynamic handlers" @tap="attachDynamicHandlers" />
                <Button text="Detach dynamic handlers" @tap="detachDynamicHandlers" />
            </WrapLayout>
            <Label text="Event log:" class="h3" />
            <StackLayout>
                <Label v-for="(l, i) in logs" :key="i" :text="l" textWrap="true" />
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
import { ImageSource } from '@nativescript/core';
import { Img } from '@nativescript-community/ui-image';

export default {
    data() {
        return {
            logs: [] as string[],
            dynamicHandlers: [] as any[]
        };
    },
    methods: {
        addLog(text: string) {
            this.logs.unshift(new Date().toLocaleTimeString() + ' - ' + text);
            if (this.logs.length > 200) {
                this.logs.length = 200;
            }
        },
        reload() {
            const img: any = this.$refs.evtImg.nativeView;
            // simple change to trigger request
            img.src = 'https://picsum.photos/800/620?random=' + Math.floor(Math.random() * 10000);
            this.addLog('reload image');
        },
        onFinalImageSet(e: any) {
            const info = e.imageInfo;
            this.addLog('onFinalImageSet: ' + (info ? `${info.getWidth()}x${info.getHeight()}` : 'unknown'));
        },
        onFailure(e: any) {
            const err = e.error;
            const msg = err && err.getMessage ? err.getMessage() : String(err);
            this.addLog('onFailure: ' + msg);
        },
        onIntermediateImageSet(e: any) {
            const info = e.imageInfo;
            this.addLog('onIntermediateImageSet ' + (info ? `${info.getWidth()}x${info.getHeight()}` : '?'));
        },
        onIntermediateImageFailed(e: any) {
            this.addLog('onIntermediateImageFailed');
        },
        onRelease(e: any) {
            this.addLog('onRelease');
        },
        onSubmit(e: any) {
            this.addLog('onSubmit');
        },
        onProgress(e: any) {
            this.addLog(`onProgress ${Math.round(100 * (e.progress || 0))}% (${e.current || 0}/${e.total || 0})`);
        },
        onLoadSource(e: any) {
            this.addLog('onLoadSource: ' + e.source);
        },
        onNetworkLoadStart(e: any) {
            this.addLog('onNetworkLoadStart');
        },

        // dynamic attaching + detaching
        attachDynamicHandlers() {
            const native = this.$refs.evtImg.nativeView;
            if (!native) {
                this.addLog('No native view found');
                return;
            }
            const onFinal = (ev) => this.addLog('dynamic final: ' + (ev.imageInfo ? `${ev.imageInfo.getWidth()}x${ev.imageInfo.getHeight()}` : 'unknown'));
            const onProg = (ev) => this.addLog('dynamic progress: ' + Math.round(100 * (ev.progress || 0)) + '%');
            native.on('finalImageSet', onFinal);
            native.on('progress', onProg);
            this.dynamicHandlers.push({ native, name: 'finalImageSet', handler: onFinal }, { native, name: 'progress', handler: onProg });
            this.addLog('dynamic handlers attached');
        },
        detachDynamicHandlers() {
            while (this.dynamicHandlers.length) {
                const h = this.dynamicHandlers.pop();
                try {
                    h.native.off(h.name, h.handler);
                } catch (err) {
                    // ignore
                }
            }
            this.addLog('dynamic handlers detached');
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
