<template>
    <Page>
        <ActionBar title="Image Pipeline Playground" />
        <StackLayout padding="12">
            <Label text="ImagePipeline API" class="h2" />
            <TextField v-model="url" hint="Image URL" keyboardType="url" />
            <NSImg ref="opacityImg" height="100" width="100%" :src="url" @finalImageSet="onFinalImageSet" @failure="onFailure" />
            <WrapLayout marginTop="8">
                <Button text="prefetchToMemory" @tap="prefetchMem" />
                <Button text="prefetchToDisk" @tap="prefetchDisk" />
                <Button text="evictFromCache" @tap="evictFromCache" />
                <Button text="isInDiskCache" @tap="isInDiskCache" />
                <Button text="isInMemoryCache" @tap="isInMemoryCache" />
                <Button text="getCacheKey" @tap="getCacheKey" />
                <Button text="clearCaches" @tap="clearCaches" />
            </WrapLayout>

            <Label text="Result:" class="h3" />
            <Label :text="result" textWrap="true" />

            <Label text="Log:" class="h3" />
            <StackLayout>
                <Label v-for="(l, i) in logs" :key="i" :text="l" />
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
import { getImagePipeline } from '@nativescript-community/ui-image';

export default {
    data() {
        return {
            url: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg',
            logs: [] as string[],
            result: ''
        };
    },
    methods: {
        onFinalImageSet(e: any) {
            const info = e.imageInfo;
            this.addLog('loaded: ' + (info ? `${info.getWidth()}x${info.getHeight()}` : 'unknown') + ' from: ' + e.source);
        },
        onFailure(e: any) {
            const err = e.error;
            const msg = err && err.getMessage ? err.getMessage() : String(err);
            this.addLog('onFailure: ' + msg);
        },
        addLog(msg: string) {
            this.logs.unshift(new Date().toTimeString() + ' - ' + msg);
            if (this.logs.length > 200) {
                this.logs.length = 200;
            }
        },
        async prefetchMem() {
            try {
                await getImagePipeline().prefetchToMemoryCache(this.url, {
                    decodeWidth: 300,
                    decodeHeight: 300,
                });
                this.addLog('prefetchToMemoryCache success');
                this.result = 'prefetchToMemoryCache success';
            } catch (err) {
                this.addLog(`prefetch mem error: ${err}`);
                this.result = 'error: ' + err;
            }
        },
        async prefetchDisk() {
            try {
                await getImagePipeline().prefetchToDiskCache(this.url);
                this.addLog('prefetchToDiskCache success');
                this.result = 'prefetchToDiskCache success';
            } catch (err) {
                this.addLog(`prefetch disk error: ${err}`);
                this.result = 'error: ' + err;
            }
        },
        async evictFromCache() {
            try {
                await getImagePipeline().evictFromCache(this.url);
                this.addLog('evictFromCache success');
                this.result = 'evictFromCache success';
            } catch (err) {
                this.addLog(`evictFromCache error: ${err}`);
                this.result = 'error: ' + err;
            }
        },
        async isInDiskCache() {
            try {
                const v = await getImagePipeline().isInDiskCache(this.url);
                this.addLog('isInDiskCache: ' + v);
                this.result = 'isInDiskCache: ' + v;
            } catch (err) {
                this.addLog('isInDiskCache error: ' + err);
                this.result = 'error: ' + err;
            }
        },
        async isInMemoryCache() {
            try {
                const v = getImagePipeline().isInBitmapMemoryCache(this.url);
                this.addLog('isInBitmapMemoryCache: ' + v);
                this.result = 'isInBitmapMemoryCache: ' + v;
            } catch (err) {
                this.addLog('isInBitmapMemoryCache error: ' + err);
                this.result = 'error: ' + err;
            }
        },
        async getCacheKey() {
            try {
                // The native getCacheKey might require an Img options/context; pass undefined for generic key
                const k = getImagePipeline().getCacheKey(this.url, {});
                this.addLog('getCacheKey: ' + k);
                this.result = 'cacheKey: ' + k;
            } catch (err) {
                this.addLog('getCacheKey error: ' + err);
                this.result = 'error: ' + err;
            }
        },
        async clearCaches() {
            try {
                await getImagePipeline().clearCaches();
                this.addLog('clearCaches success');
                this.result = 'clearCaches success';
            } catch (err) {
                this.addLog('clearCaches error: ' + err);
                this.result = 'error: ' + err;
            }
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
