<template>
    <Page>
        <ActionBar title="Network & Headers" />
        <StackLayout padding="10">
            <Label text="Headers and pipeline demo" class="h2" />
            <TextField v-model="url" keyboardType="url" hint="image url" />
            <WrapLayout marginTop="6">
                <Button text="Set sample URL" @tap="setSample" />
                <Button text="Toggle Authorization header" @tap="toggleAuth" />
            </WrapLayout>

            <NSImg ref="img" :src="url" :headers="headers" width="100%" height="220" stretch="aspectFit" backgroundColor="red" @progress="onProgress" @finalImageSet="onFinal" @failure="onFailure" />

            <WrapLayout marginTop="8">
                <Button text="prefetch memory" @tap="prefetchMem" />
                <Button text="prefetch disk" @tap="prefetchDisk" />
                <Button text="evict cache" @tap="evictCache" />
                <Button text="get cache key" @tap="getCacheKey" />
            </WrapLayout>

            <Label text="Logs" class="h3" />
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
            url: 'http://10.0.2.2:3000/image',
            headers: { 'User-Agent': 'NSImgTest/1.0' },
            logs: [] as string[],
            authOn: false
        };
    },
    methods: {
        addLog(msg: string) {
            console.log(msg);
            this.logs.unshift(new Date().toLocaleTimeString() + ' - ' + msg);
            if (this.logs.length > 120) this.logs.length = 120;
        },
        setSample() {
            this.url = 'https://picsum.photos/1200/800';
            this.addLog('url set to sample');
        },
        toggleAuth() {
            this.authOn = !this.authOn;
            if (this.authOn) {
                this.headers['Authorization'] = 'Bearer 1234';
                this.headers = { ...this.headers };
                this.addLog('Authorization header set');
            } else {
                // remove header
                delete this.headers.Authorization;
                this.headers = { ...this.headers };
                this.addLog('Authorization header removed');
            }
        },
        onProgress(e: any) {
            const p = Math.round((e.progress || 0) * 100);
            this.addLog(`progress ${p}%`);
        },
        onFinal(e: any) {
            this.addLog('finalImageSet');
        },
        onFailure(e: any) {
            this.addLog('failure: ' + (e.error && e.error.getMessage ? e.error.getMessage() : e.error));
        },

        async prefetchMem() {
            try {
                await getImagePipeline().prefetchToMemoryCache(this.url);
                this.addLog('prefetchToMemoryCache done');
            } catch (err) {
                this.addLog('prefetch mem error: ' + err);
            }
        },
        async prefetchDisk() {
            try {
                await getImagePipeline().prefetchToDiskCache(this.url);
                this.addLog('prefetchToDiskCache done');
            } catch (err) {
                this.addLog('prefetch disk error: ' + err);
            }
        },
        async evictCache() {
            try {
                await getImagePipeline().evictFromCache(this.url);
                this.addLog('evictFromCache done');
            } catch (err) {
                this.addLog('evict cache error: ' + err);
            }
        },
        async getCacheKey() {
            try {
                const key = getImagePipeline().getCacheKey(this.url, {});
                this.addLog('cacheKey: ' + key);
            } catch (err) {
                this.addLog('getCacheKey error: ' + err);
            }
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
