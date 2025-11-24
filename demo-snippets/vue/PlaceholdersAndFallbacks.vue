<template>
    <Page>
        <ActionBar title="Placeholders & Fallbacks" />
        <ScrollView>
            <StackLayout padding="10">
                <Label text="Placeholders & Fallbacks" class="h2" />
                <NSImg
                    ref="img"
                    width="100%"
                    height="220"
                    :src="src"
                    :lowerResSrc="lowerRes"
                    :placeholderImageUri="placeholder"
                    :failureImageUri="failure"
                    :progressiveRenderingEnabled="progressive"
                    :localThumbnailPreviewsEnabled="localThumb"
                    :showProgressBar="showProgressBar"
                    :progressBarColor="progressColor"
                    @finalImageSet="onFinalImage"
                    @failure="onFailure"
                    @progress="onProgress"
                    @intermediateImageSet="onIntermediateImageSet"
                />
                <WrapLayout marginTop="8">
                    <Button text="Network" @tap="setNetworkSrc" />
                    <Button text="Network (lowerRes)" @tap="setNetworkLowerRes" />
                    <Button text="Local File" @tap="setLocalSrc" />
                    <Button text="Res://" @tap="setResourceSrc" />
                    <Button text="404" @tap="set404" />
                </WrapLayout>

                <WrapLayout marginTop="8">
                    <Button :text="'Progressive: ' + progressive" @tap="toggle('progressive')" />
                    <Button :text="'LocalThumbs: ' + localThumb" @tap="toggle('localThumb')" />
                    <Button :text="'ProgressBar: ' + showProgressBar" @tap="toggle('showProgressBar')" />
                    <Button :text="'Placeholder(resource)'" @tap="setPlaceholderToResource" />
                    <Button :text="'Placeholder(local)'" @tap="setPlaceholderToLocal" />
                    <Button :text="'Clear placeholder'" @tap="clearPlaceholder" />
                    <Button :text="'Failure(resource)'" @tap="setFailureToResource" />
                </WrapLayout>

                <Label text="Event logs" class="h3" marginTop="8" />
                <StackLayout>
                    <Label v-for="(l, i) in logs" :key="i" :text="l" textWrap="true" />
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
            src: 'https://picsum.photos/1024/600',
            lowerRes: null,
            placeholder: null,
            failure: null,
            progressive: true,
            localThumb: false,
            showProgressBar: true,
            progressColor: 'blue',
            logs: [] as string[],
            localFile: ImageSource.fromFileSync('~/assets/images/drink.jpg')
        };
    },
    methods: {
        addLog(msg: string) {
            this.logs.unshift(new Date().toLocaleTimeString() + ' - ' + msg);
            if (this.logs.length > 80) this.logs.length = 80;
        },
        setNetworkSrc() {
            this.src = 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg';
            this.addLog('src -> network high-res');
        },
        setNetworkLowerRes() {
            this.src = 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg';
            this.lowerRes = 'https://picsum.photos/300/200';
            this.addLog('src -> network high-res with lowerRes');
        },
        setLocalSrc() {
            this.src = this.localFile;
            this.addLog('src -> local file');
        },
        setResourceSrc() {
            this.src = 'res://icon';
            this.addLog('src -> resource');
        },
        set404() {
            this.src = 'https://example.com/does-not-exist.png';
            this.addLog('src -> 404');
        },
        setPlaceholderToResource() {
            this.placeholder = 'res://ic_launcher_foreground';
            this.addLog('placeholder -> res://ic_launcher_foreground');
        },
        setPlaceholderToLocal() {
            this.placeholder = this.localFile;
            this.addLog('placeholder -> local file');
        },
        clearPlaceholder() {
            this.placeholder = null;
            this.addLog('placeholder -> clear');
        },
        setFailureToResource() {
            this.failure = 'res://ic_launcher_background';
            this.addLog('failure -> res://ic_launcher_background');
        },
        toggle(prop: string) {
            // @ts-ignore
            this[prop] = !this[prop];
            this.addLog(`${prop} -> ${this[prop]}`);
        },

        onProgress(e: any) {
            const progress = Math.round((e.progress || 0) * 100);
            this.addLog(`progress ${progress}% (${e.loaded || 0}/${e.total || 0})`);
        },
        onFinalImage(e: any) {
            const info = e.imageInfo;
            const size = info ? `${info.getWidth()}x${info.getHeight()}` : 'unknown';
            this.addLog('finalImageSet: ' + size + (e.source ? ` (${e.source})` : ''));
        },
        onIntermediateImageSet(e: any) {
            this.addLog('intermediateImageSet');
        },
        onFailure(e: any) {
            const err = e.error && e.error.getMessage ? e.error.getMessage() : String(e.error || e);
            this.addLog('failure: ' + err);
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
