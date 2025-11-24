<template>
    <Page>
        <ActionBar title="Img - Advanced Playground" />
        <ScrollView>
            <StackLayout class="page" padding="10">
                <Label text="Advanced Image Playground" class="h2" />
                <NSImg
                    ref="mainImg"
                    width="98%"
                    height="260"
                    :src="currentSrc"
                    :lowerResSrc="lowerResSrc"
                    :placeholderImageUri="placeholderImage"
                    :failureImageUri="failureImage"
                    :showProgressBar="showProgressBar"
                    :progressBarColor="progressBarColor"
                    :stretch="stretch"
                    :roundAsCircle="roundAsCircle"
                    :roundTopLeftRadius="roundTopLeftRadius"
                    :roundTopRightRadius="roundTopRightRadius"
                    :roundBottomLeftRadius="roundBottomLeftRadius"
                    :roundBottomRightRadius="roundBottomRightRadius"
                    :blurRadius="blurRadius"
                    :blurDownSampling="blurDownSampling"
                    :decodeWidth="decodeWidth"
                    :decodeHeight="decodeHeight"
                    :animatedImageView="animatedImageView"
                    :autoPlayAnimations="autoPlayAnimations"
                    :tapToRetryEnabled="tapToRetryEnabled"
                    :noCache="noCache"
                    :noRatioEnforce="noRatioEnforce"
                    :headers="headers"
                    :imageRotation="imageRotation"
                    :tintColor="tintColor"
                    :loadMode="loadMode"
                    fadeDuration="200"
                    alwaysFade="true"
                    borderRadius="8"
                    @finalImageSet="onFinalImageSet"
                    @failure="onFailure"
                    @progress="onProgress"
                    @intermediateImageSet="onIntermediateImageSet"
                    @intermediateImageFailed="onIntermediateImageFailed"
                    @release="onRelease"
                    @submit="onSubmit"
                    @fetchingFrom="onFetchingFrom"
                    @loadSource="onLoadSource"
                    @networkLoadStart="onNetworkLoadStart"
                />
                <StackLayout orientation="horizontal" marginTop="8" horizontalAlignment="center">
                    <Button text="Network" @tap="setNetworkSrc" />
                    <Button text="Local file" @tap="setLocalSrc" />
                    <Button text="Resource" @tap="setResourceSrc" />
                    <Button text="Failure src" @tap="setFailureSrc" />
                    <Button text="Font icon" @tap="setFontIconSrc" />
                </StackLayout>

                <Label text="Toggles" class="h3" marginTop="12" />
                <WrapLayout>
                    <Button :text="'Progress: ' + showProgressBar" @tap="toggle('showProgressBar')" />
                    <Button :text="'RoundAsCircle: ' + roundAsCircle" @tap="toggle('roundAsCircle')" />
                    <Button :text="'No Cache: ' + noCache" @tap="toggle('noCache')" />
                    <Button :text="'No Ratio Enforce: ' + noRatioEnforce" @tap="toggle('noRatioEnforce')" />
                    <Button :text="'AutoPlay: ' + autoPlayAnimations" @tap="toggle('autoPlayAnimations')" />
                    <Button :text="'TapToRetry: ' + tapToRetryEnabled" @tap="toggle('tapToRetryEnabled')" />
                </WrapLayout>

                <Label text="Scale / Rotation" class="h3" marginTop="10" />
                <StackLayout orientation="horizontal">
                    <Button text="Next Scale" @tap="onToggleScale" />
                    <Button text="Rotate Left" @tap="onRotateLeft" />
                    <Button text="Rotate Right" @tap="onRotateRight" />
                    <Label :text="stretch" verticalAlignment="center" marginLeft="6" />
                </StackLayout>

                <Label text="Blur / Decode width/height" class="h3" marginTop="10" />
                <StackLayout orientation="horizontal" verticalAlignment="center">
                    <StackLayout width="65%" marginRight="6">
                        <Label :text="'blurRadius = ' + blurRadius" />
                        <Slider minValue="0" maxValue="25" :value="blurRadius" @valueChange="onBlurChanged" />
                    </StackLayout>
                    <StackLayout width="35%">
                        <TextField v-model="decodeWidth" keyboardType="number" hint="decodeWidth" />
                        <TextField v-model="decodeHeight" keyboardType="number" hint="decodeHeight" />
                        <Button text="Apply decode" @tap="applyDecodeDimensions" />
                    </StackLayout>
                </StackLayout>

                <Label text="Corners" class="h3" />
                <StackLayout orientation="horizontal">
                    <TextField v-model="roundTopLeftRadius" keyboardType="number" hint="TL" width="60" />
                    <TextField v-model="roundTopRightRadius" keyboardType="number" hint="TR" width="60" />
                    <TextField v-model="roundBottomLeftRadius" keyboardType="number" hint="BL" width="60" />
                    <TextField v-model="roundBottomRightRadius" keyboardType="number" hint="BR" width="60" />
                    <Button text="Apply" @tap="applyCornerRadii" />
                </StackLayout>

                <Label text="Misc/Anim" class="h3" />
                <StackLayout orientation="horizontal">
                    <Button text="Start anim" @tap="onStartAnimating" />
                    <Button text="Stop anim" @tap="onStopAnimating" />
                    <Button text="Opacity 0.1" @tap="onAnimateTo01" />
                    <Button text="Opacity 1.0" @tap="onAnimateTo1" />
                </StackLayout>

                <Label text="Pipeline helpers" class="h3" />
                <StackLayout orientation="horizontal">
                    <Button text="Prefetch mem" @tap="onPrefetchMemory" />
                    <Button text="Prefetch disk" @tap="onPrefetchDisk" />
                    <Button text="Evict cache" @tap="onEvictFromCache" />
                    <Button text="Clear caches" @tap="onClearCaches" />
                    <Button text="Get cache key" @tap="onGetCacheKey" />
                </StackLayout>

                <Label text="Event logs" class="h3" />
                <StackLayout>
                    <Label v-for="(item, idx) in logs" :key="idx" :text="item" textWrap="true" />
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script lang="ts">
import { Color, ImageSource } from '@nativescript/core';
import { Img, getImagePipeline } from '@nativescript-community/ui-image';
import { ScaleType } from '@nativescript-community/ui-image/index-common';

class EnumX {
    static of<T extends object>(e: T) {
        const values = Object.values(e);
        return {
            next: <K extends keyof T>(v: T[K]) => values[(values.indexOf(v) + 1) % values.length]
        };
    }
}

export default {
    data() {
        return {
            currentSrc: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg',
            networkSrc: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg',
            gifSrc: 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif',
            localSrc: '~/assets/images/drink.jpg',
            resourceSrc: 'res://ic_launcher',
            failureSrc: 'https://example.com/does-not-exist.png',
            lowerResSrc: null,
            placeholderImage: null,
            failureImage: null,
            showProgressBar: true,
            progressBarColor: 'green',
            roundAsCircle: false,
            roundTopLeftRadius: 0,
            roundTopRightRadius: 0,
            roundBottomLeftRadius: 0,
            roundBottomRightRadius: 0,
            blurRadius: 0,
            blurDownSampling: 1,
            decodeWidth: 0,
            decodeHeight: 0,
            animatedImageView: false,
            autoPlayAnimations: true,
            tapToRetryEnabled: false,
            noCache: false,
            noRatioEnforce: false,
            headers: {
                'User-Agent': 'NSImageDemo'
            },
            imageRotation: 0,
            tintColor: null as any as Color | string,
            stretch: 'aspectFit',
            loadMode: 'sync',
            logs: [] as string[]
        };
    },
    methods: {
        addLog(msg: string) {
            this.logs.unshift(new Date().toLocaleTimeString() + ' - ' + msg);
            if (this.logs.length > 100) {
                this.logs.length = 100;
            }
        },
        setNetworkSrc() {
            this.currentSrc = this.networkSrc;
        },
        setLocalSrc() {
            this.currentSrc = this.localSrc;
        },
        setResourceSrc() {
            this.currentSrc = this.resourceSrc;
        },
        setFailureSrc() {
            this.currentSrc = this.failureSrc;
        },
        setFontIconSrc() {
            // sample font code - replace with your own font://<char>
            this.currentSrc = 'font://f0f8';
        },
        toggle(prop: string) {
            // @ts-ignore
            this[prop] = !this[prop];
        },
        onToggleScale() {
            this.stretch = EnumX.of(ScaleType).next(this.stretch as ScaleType);
            this.addLog('stretch -> ' + this.stretch);
        },
        async onRotateLeft() {
            const imageView: any = this.$refs.mainImg?.nativeView;
            const imageRotation = (imageView.imageRotation - 90) % 360;
            this.addLog(`rotate from ${imageView.imageRotation} to ${imageRotation}`);
            try {
                await imageView.animate({ duration: 200, imageRotation } as any);
            } catch (err) {}
            imageView.imageRotation = imageRotation;
        },
        async onRotateRight() {
            const imageView: any = this.$refs.mainImg?.nativeView;
            const imageRotation = (imageView.imageRotation + 90) % 360;
            this.addLog(`rotate from ${imageView.imageRotation} to ${imageRotation}`);
            try {
                await imageView.animate({ duration: 200, imageRotation } as any);
            } catch (err) {}
            imageView.imageRotation = imageRotation;
        },
        onBlurChanged(args: any) {
            // Slider emits value as args.value or args.newValue
            const v = typeof args.value === 'number' ? args.value : args.newValue;
            this.blurRadius = Math.round(v);
        },
        applyDecodeDimensions() {
            const decodeWidth = Math.max(0, Number(this.decodeWidth) || 0);
            const decodeHeight = Math.max(0, Number(this.decodeHeight) || 0);
            this.$refs.mainImg.nativeView.decodeWidth = decodeWidth || undefined;
            this.$refs.mainImg.nativeView.decodeHeight = decodeHeight || undefined;
            this.addLog('decode size set: ' + decodeWidth + 'x' + decodeHeight);
        },
        applyCornerRadii() {
            // Keep as numbers
            ['roundTopLeftRadius', 'roundTopRightRadius', 'roundBottomLeftRadius', 'roundBottomRightRadius'].forEach((p) => {
                // @ts-ignore
                this[p] = Number(this[p]) || 0;
            });
            this.addLog('corner radii applied');
        },

        onStartAnimating() {
            const view: any = this.$refs.mainImg.nativeView;
            try {
                view.startAnimating();
                this.addLog('startAnimating');
            } catch (err) {
                this.addLog('startAnimating error: ' + err);
            }
        },
        onStopAnimating() {
            const view: any = this.$refs.mainImg.nativeView;
            try {
                view.stopAnimating();
                this.addLog('stopAnimating');
            } catch (err) {
                this.addLog('stopAnimating error: ' + err);
            }
        },

        onAnimateTo01() {
            const view: any = this.$refs.mainImg.nativeView;
            view.animate({ opacity: 0.1, duration: 500 });
        },
        onAnimateTo1() {
            const view: any = this.$refs.mainImg.nativeView;
            view.animate({ opacity: 1, duration: 500 });
        },

        // pipeline helpers
        async onPrefetchMemory() {
            try {
                await getImagePipeline().prefetchToMemoryCache(this.currentSrc);
                this.addLog('prefetchToMemoryCache success');
            } catch (err) {
                this.addLog('prefetchToMemoryCache error: ' + err);
            }
        },
        async onPrefetchDisk() {
            try {
                await getImagePipeline().prefetchToDiskCache(this.currentSrc);
                this.addLog('prefetchToDiskCache success');
            } catch (err) {
                this.addLog('prefetchToDiskCache error: ' + err);
            }
        },
        async onEvictFromCache() {
            try {
                await getImagePipeline().evictFromCache(this.currentSrc);
                this.addLog('evictFromCache success');
            } catch (err) {
                this.addLog('evictFromCache error: ' + err);
            }
        },
        async onClearCaches() {
            try {
                await getImagePipeline().clearCaches();
                this.addLog('clearCaches success');
            } catch (err) {
                this.addLog('clearCaches error: ' + err);
            }
        },
        async onGetCacheKey() {
            try {
                const key = getImagePipeline().getCacheKey(this.currentSrc + '', this.$refs.mainImg.nativeView);
                this.addLog('getCacheKey: ' + key);
            } catch (err) {
                this.addLog('getCacheKey error: ' + (err && err.message ? err.message : err));
            }
        },

        // events
        onFinalImageSet(e: any) {
            try {
                const info = e.imageInfo;
                const size = info ? `${info.getWidth()}x${info.getHeight()}` : 'unknown';
                this.addLog('finalImageSet: ' + size + (e.source ? ' source:' + e.source : ''));
            } catch (err) {
                this.addLog('finalImageSet: ' + JSON.stringify(e));
            }
        },
        onFailure(e: any) {
            try {
                const err = e.error;
                const msg = err && err.getMessage ? err.getMessage() : err;
                this.addLog('failure: ' + msg);
            } catch (err) {
                this.addLog('failure: ' + JSON.stringify(e));
            }
        },
        onProgress(e: any) {
            this.addLog('progress ' + Math.round(100 * (e.progress || 0)) + '% ' + (e.current || 0) + '/' + (e.total || 0));
        },
        onIntermediateImageSet(e: any) {
            try {
                const info = e.imageInfo;
                this.addLog('intermediateImageSet ' + (info ? `${info.getWidth()}x${info.getHeight()}` : '?'));
            } catch (err) {
                this.addLog('intermediateImageSet ' + JSON.stringify(e));
            }
        },
        onIntermediateImageFailed(e: any) {
            this.addLog('intermediateImageFailed');
        },
        onRelease(e: any) {
            this.addLog('release');
        },
        onSubmit(e: any) {
            this.addLog('submit');
        },
        onFetchingFrom(e: any) {
            this.addLog('fetchingFrom: ' + (e.fetchingFrom || JSON.stringify(e)));
        },
        onLoadSource(e: any) {
            this.addLog('loadSource: ' + e.source);
        },
        onNetworkLoadStart() {
            this.addLog('networkLoadStart');
        }
    }
};
</script>

<style scoped lang="scss">
.page {
    background-color: #fff;
}
.h2 {
    font-size: 18;
    font-weight: bold;
}
.h3 {
    margin-top: 8;
    font-weight: bold;
}
</style>
