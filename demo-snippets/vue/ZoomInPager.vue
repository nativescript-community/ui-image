<template>
    <Page>
        <ActionBar title="ZoomImg in a Pager" />
        <GridLayout rows="*, auto">
            <!-- like FullScreenImageViewer / DocumentEdit: a zoomOut pager of zoomable pages -->
            <Pager
                ref="pager"
                row="0"
                for="page in pages"
                
                backgroundColor="#222222"
                :disableSwipe="swipeDisabled"
                transformers="zoomOut"
                @selectedIndexChange="onIndexChange">
                <v-template>
                    <GridLayout width="100%">
                        <NSZoomImg
                            id="zoom"
                            v-bind="iosOptions"
                            :colorMatrix="colorMatrix"
                            :decodeWidth="decodeScreen"
                            :imageRotation="rotation"
                            maxZoom="10"
                            :src="page.src"
                            stretch="aspectFit"
                            @transformChanged="onTransform(page, $event)"
                            @finalImageSet="onFinal(page)"
                            @failure="onFailure(page, $event)" />
                    </GridLayout>
                </v-template>
            </Pager>

            <StackLayout row="1" backgroundColor="white" padding="4">
                <WrapLayout>
                    <Button text="colorMatrix next" @tap="nextFilter" />
                    <Button text="rotate +90" @tap="rotate(90)" />
                    <Button text="animate +90" @tap="animateRotate(90)" />
                    <Button text="zoom 3x" @tap="zoomCurrent(3)" />
                    <Button text="zoom 1x" @tap="zoomCurrent(1)" />
                    <Button :text="'swipe ' + (swipeDisabled ? 'off' : 'on')" @tap="swipeDisabled = !swipeDisabled" />
                    <Button text="rewrite + evict + update" @tap="rewriteCurrent" />
                    <Button text="go to page 3" @tap="goTo(2)" />
                </WrapLayout>
                <!-- fixed single lines: the pager height must not depend on the text changing with each pan event -->
                <Label :text="'page ' + (currentIndex + 1) + ' / ' + pages.length + ' - ' + status" height="22" maxLines="1" />
                <Label :text="'transform: ' + transformText" height="22" maxLines="1" fontSize="11" />
                <Label :text="'finalImageSet per page: ' + JSON.stringify(loadCounts)" height="22" maxLines="1" fontSize="11" />
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { File, Screen, isIOS, knownFolders, path as filePath } from '@nativescript/core';
import { getImagePipeline } from '@nativescript-community/ui-image';

const ASSETS = ['dessert.jpg', 'dessert1.jpg', 'drink.jpg'];
const FILTERS = [
    null,
    [0.299, 0.587, 0.114, 0, 0, 0.299, 0.587, 0.114, 0, 0, 0.299, 0.587, 0.114, 0, 0, 0, 0, 0, 1, 0],
    [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0],
    [0.1, 0.4, 0, 0, 0, 0.3, 1, 0.3, 0, 0, 0, 0.4, 0.1, 0, 0, 0, 0, 0, 1, 0]
];

function assetPath(name: string) {
    return filePath.join(knownFolders.currentApp().path, 'assets/images', name);
}
function copyFile(from: string, to: string) {
    File.fromPath(to).writeSync(File.fromPath(from).readSync());
}

export default {
    data() {
        const folder = knownFolders.temp().getFolder('docscan');
        const pages = [0, 1, 2, 3, 4].map((id) => {
            const src = filePath.join(folder.path, `pager-${id}.jpg`);
            copyFile(assetPath(ASSETS[id % ASSETS.length]), src);
            return { id, src };
        });
        return {
            pages,
            currentIndex: 0,
            filterIndex: 0,
            rotation: 0,
            swipeDisabled: false,
            rewrites: 0,
            status: '',
            loadCounts: {},
            transformText: '',
            decodeScreen: Math.max(Screen.mainScreen.widthPixels, Screen.mainScreen.heightPixels)
        };
    },
    computed: {
        colorMatrix() {
            return FILTERS[this.filterIndex];
        },
        iosOptions() {
            return isIOS ? { contextOptions: { originalQueryCacheType: 0, originalStoreCacheType: 0 } } : {};
        }
    },
    methods: {
        // the page template is only rendered when the page is created: loaded pages are updated through their native view
        zoomViews() {
            const pager = this.$refs.pager.nativeView;
            const views = [];
            this.pages.forEach((page, index) => {
                const zoomView = pager.getChildView(index)?.getViewById('zoom');
                if (zoomView) {
                    views.push(zoomView);
                }
            });
            return views;
        },
        currentZoomView() {
            return this.$refs.pager.nativeView.getChildView(this.currentIndex)?.getViewById('zoom');
        },
        nextFilter() {
            this.filterIndex = (this.filterIndex + 1) % FILTERS.length;
            this.zoomViews().forEach((view) => (view.colorMatrix = this.colorMatrix));
        },
        rotate(delta: number) {
            this.rotation += delta;
            this.zoomViews().forEach((view) => (view.imageRotation = this.rotation));
        },
        animateRotate(delta: number) {
            this.rotation += delta;
            this.zoomViews().forEach((view) => view.animate({ duration: 300, imageRotation: this.rotation }));
        },
        zoomCurrent(scale: number) {
            this.currentZoomView()?.setZoom(scale, false);
        },
        goTo(index: number) {
            this.$refs.pager.nativeView.scrollToIndexAnimated(index, true);
        },
        async rewriteCurrent() {
            const page = this.pages[this.currentIndex];
            this.rewrites++;
            copyFile(assetPath(ASSETS[(page.id + this.rewrites) % ASSETS.length]), page.src);
            await getImagePipeline().evictFromCache(page.src);
            await this.currentZoomView()?.updateImageUri();
            this.status = `page ${page.id} rewritten (zoom must stay)`;
        },
        onIndexChange(event) {
            this.currentIndex = event.value;
            this.status = 'index ' + event.value;
        },
        onTransform(page, event) {
            if (page.id !== this.currentIndex) {
                return;
            }
            const native = event.android || event.ios;
            this.transformText = isIOS ? JSON.stringify({ a: native.a, d: native.d, tx: native.tx, ty: native.ty }) : native.toShortString();
        },
        onFinal(page) {
            // also fires on every reload of the page image (rotation, rewrite)
            this.$set(this.loadCounts, page.id, (this.loadCounts[page.id] || 0) + 1);
            this.status = `page ${page.id} loaded`;
        },
        onFailure(page, event) {
            this.status = `page ${page.id} failed: ${event.error}`;
        }
    }
};
</script>

<style scoped lang="scss">
Button {
    font-size: 12;
}
</style>
