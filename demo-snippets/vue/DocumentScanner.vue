<template>
    <Page>
        <ActionBar title="DocumentScanner usage" />
        <GridLayout rows="auto, *">
            <ScrollView orientation="horizontal" row="0">
                <StackLayout orientation="horizontal">
                    <Button v-for="name in sections" :key="name" :text="name" :class="{ active: name === section }" @tap="section = name" />
                </StackLayout>
            </ScrollView>

            <ScrollView row="1">
                <StackLayout padding="8">
                    <!-- shared controls: same props the app sets on every page thumbnail -->
                    <WrapLayout v-if="section === 'tiles' || section === 'mixed'">
                        <Button v-for="name in filterNames" :key="name" :text="name" @tap="filterName = name" />
                        <Button text="rotate -90" @tap="rotate(-90)" />
                        <Button text="rotate +90" @tap="rotate(90)" />
                        <Button text="animate +90" @tap="animateRotate(90)" />
                        <Button :text="'stretch: ' + stretch" @tap="nextStretch" />
                        <Button :text="'radius: ' + radius" @tap="radius = radius === 20 ? 6 : 20" />
                        <Button :text="'fade: ' + fadeDuration" @tap="fadeDuration = fadeDuration === 100 ? 0 : 100" />
                    </WrapLayout>

                    <!-- 1. thumbnails, like DocumentTile / DocumentRow / CardPhotoFace / Camera thumbnail -->
                    <StackLayout v-if="section === 'tiles'">
                        <Label text="grid tile: radius + colorMatrix + rotation + decodeWidth + fade" class="h3" />
                        <WrapLayout>
                            <NSImg
                                v-for="page in pages"
                                :key="page.id"
                                :ref="'tile' + page.id"
                                v-bind="iosOptions"
                                width="100"
                                height="130"
                                margin="4"
                                backgroundColor="#cccccc"
                                :borderRadius="radius"
                                :colorMatrix="colorMatrix"
                                :decodeWidth="px(100)"
                                :fadeDuration="fadeDuration"
                                :imageRotation="rotation"
                                :src="page.path"
                                :stretch="stretch"
                                @finalImageSet="onFinal('tile' + page.id, $event)"
                                @failure="onFailure('tile' + page.id, $event)"
                            />
                        </WrapLayout>
                        <Label text="row thumbnail 48x62 r9, bordered 64x64 r12 (filter preview), card r20" class="h3" />
                        <StackLayout orientation="horizontal">
                            <NSImg
                                v-bind="iosOptions"
                                width="48"
                                height="62"
                                margin="4"
                                borderRadius="9"
                                :colorMatrix="colorMatrix"
                                :decodeWidth="px(48)"
                                :fadeDuration="fadeDuration"
                                :imageRotation="rotation"
                                :src="pages[0].path"
                                stretch="aspectFill"
                            />
                            <NSImg
                                width="64"
                                height="64"
                                margin="4"
                                borderColor="#42b883"
                                borderRadius="12"
                                borderWidth="2.5"
                                :colorMatrix="colorMatrix"
                                :decodeWidth="128"
                                :src="pages[1].path"
                                stretch="aspectFill"
                            />
                            <NSImg
                                v-bind="iosOptions"
                                width="120"
                                height="76"
                                margin="4"
                                borderRadius="20"
                                :colorMatrix="colorMatrix"
                                :decodeWidth="px(120)"
                                :fadeDuration="fadeDuration"
                                :imageRotation="rotation"
                                :src="pages[2].path"
                                stretch="aspectFill"
                            />
                            <!-- camera last scan thumbnail -->
                            <NSImg
                                v-bind="iosOptions"
                                width="48"
                                height="48"
                                margin="4"
                                borderColor="white"
                                borderRadius="8"
                                borderWidth="1.5"
                                backgroundColor="black"
                                :decodeWidth="px(48)"
                                :imageRotation="rotation"
                                :src="pages[3].path"
                                stretch="aspectFill"
                            />
                        </StackLayout>
                        <Label text="aspectFit page tile (DocumentPageTile)" class="h3" />
                        <NSImg
                            v-bind="iosOptions"
                            height="160"
                            margin="4"
                            backgroundColor="#cccccc"
                            :borderRadius="radius"
                            :colorMatrix="colorMatrix"
                            :decodeWidth="px(300)"
                            :fadeDuration="fadeDuration"
                            :imageRotation="rotation"
                            :src="pages[0].path"
                            stretch="aspectFit"
                        />
                        <Label :text="logText('tile')" textWrap="true" />
                    </StackLayout>

                    <!-- 2. same file rewritten, then evict + updateImageUri like app.ts / MainList.svelte -->
                    <StackLayout v-if="section === 'refresh'">
                        <Label :text="fileInfo" textWrap="true" />
                        <Label text="same path, 3 different decodeWidth + colorMatrix + rotation: all must refresh" textWrap="true" />
                        <StackLayout orientation="horizontal">
                            <NSImg
                                v-for="width in [50, 200, 800]"
                                :key="width"
                                ref="refreshImg"
                                width="100"
                                height="130"
                                margin="4"
                                backgroundColor="#cccccc"
                                borderRadius="12"
                                :colorMatrix="colorMatrix"
                                :decodeWidth="width"
                                :imageRotation="rotation"
                                fadeDuration="100"
                                :src="refreshPath"
                                stretch="aspectFill"
                                @finalImageSet="onFinal('refresh' + width, $event)"
                                @failure="onFailure('refresh' + width, $event)"
                            />
                        </StackLayout>
                        <WrapLayout>
                            <Button text="1. rewrite file" @tap="rewriteFile" />
                            <Button text="2a. updateImageUri only (stale expected)" @tap="updateOnly" />
                            <Button text="2b. evict only" @tap="evictOnly" />
                            <Button text="2c. evict + updateImageUri (app flow)" @tap="evictAndUpdate" />
                            <Button text="forceReloadImage (android)" @tap="forceReload" />
                            <Button text="clearCaches" @tap="clearCaches" />
                            <Button text="colorMatrix next" @tap="nextFilter" />
                            <Button text="rotate +90" @tap="rotate(90)" />
                            <Button text="isInDiskCache / Memory" @tap="checkCaches" />
                        </WrapLayout>
                        <Label :text="logText('refresh')" textWrap="true" />
                    </StackLayout>

                    <!-- 3. every kind of src -->
                    <StackLayout v-if="section === 'sources'">
                        <Button text="reload all" @tap="reloadSources" />
                        <GridLayout v-for="item in sourceItems" :key="item.name + sourceKey" columns="90, *" rows="90" margin="2">
                            <NSImg
                                col="0"
                                width="80"
                                height="80"
                                backgroundColor="#cccccc"
                                borderRadius="8"
                                :src="item.src"
                                stretch="aspectFill"
                                @finalImageSet="onFinal(item.name, $event)"
                                @failure="onFailure(item.name, $event)"
                            />
                            <Label col="1" :text="item.name + '\n' + logText(item.name)" textWrap="true" verticalAlignment="center" />
                        </GridLayout>
                        <WrapLayout>
                            <Button text="src = null" @tap="nullSrc = !nullSrc" />
                            <Button text="swap src" @tap="swapSrc = !swapSrc" />
                        </WrapLayout>
                        <NSImg width="80" height="80" backgroundColor="#cccccc" :src="nullSrc ? null : swapSrc ? pages[1].path : pages[0].path" stretch="aspectFill" />
                    </StackLayout>

                    <!-- 4. layout: aspectRatio, noRatioEnforce, backdrop blur, clip -->
                    <StackLayout v-if="section === 'layout'">
                        <Button text="reload (src arrives after 1.5s: ratio must size the view before)" @tap="reloadLayout" />
                        <Label text="aspectRatio + width only" class="h3" />
                        <NSImg :key="'a' + layoutKey" horizontalAlignment="left" width="120" backgroundColor="yellow" aspectRatio="0.7" :src="slowSrc" stretch="aspectFill" />
                        <Label text="aspectRatio + height only" class="h3" />
                        <NSImg :key="'b' + layoutKey" horizontalAlignment="left" height="100" backgroundColor="yellow" aspectRatio="1.5" :src="slowSrc" stretch="aspectFill" />
                        <Label text="aspectRatio in a fixed container (fit available size, hero)" class="h3" />
                        <GridLayout height="200" backgroundColor="#eeeeee">
                            <NSImg :key="'c' + layoutKey" backgroundColor="yellow" borderRadius="20" :aspectRatio="0.63" :src="slowSrc" stretch="aspectFill" />
                        </GridLayout>
                        <Label text="aspectRatio + imageRotation 90 / 270" class="h3" />
                        <StackLayout orientation="horizontal">
                            <NSImg :key="'d' + layoutKey" width="90" backgroundColor="yellow" :aspectRatio="0.7" :imageRotation="90" :src="slowSrc" stretch="aspectFit" />
                            <NSImg :key="'e' + layoutKey" width="90" backgroundColor="yellow" :aspectRatio="0.7" :imageRotation="270" :src="slowSrc" stretch="aspectFit" />
                        </StackLayout>
                        <Label text="noRatioEnforce + opacity (pkpass)" class="h3" />
                        <GridLayout height="100" width="200" horizontalAlignment="left">
                            <NSImg noRatioEnforce="true" opacity="0.3" backgroundColor="red" :src="pages[0].path" stretch="aspectFill" />
                        </GridLayout>
                        <Label text="blurRadius backdrop + sharp image (card view)" class="h3" />
                        <GridLayout height="140" borderRadius="20" backgroundColor="black">
                            <NSImg :blurRadius="12" :decodeWidth="160" :opacity="0.7" :src="pages[1].path" stretch="aspectFill" isUserInteractionEnabled="false" />
                            <NSImg width="80" height="110" borderRadius="8" :src="pages[1].path" stretch="aspectFill" />
                        </GridLayout>
                        <Label text="shadow parent + image with borderRadius (card view)" class="h3" />
                        <GridLayout height="120" width="200" horizontalAlignment="left" borderRadius="20" boxShadow="0 4 8 rgba(0,0,0,0.4)" backgroundColor="white">
                            <NSImg borderRadius="20" :src="pages[2].path" stretch="aspectFill" />
                        </GridLayout>
                    </StackLayout>

                    <!-- 5. ZoomImg like DocumentEdit / FullScreenImageViewer / CropView -->
                    <StackLayout v-if="section === 'zoom'">
                        <NSZoomImg
                            ref="zoomImg"
                            height="320"
                            backgroundColor="#cccccc"
                            :colorMatrix="colorMatrix"
                            :decodeWidth="decodeScreen"
                            :imageRotation="rotation"
                            maxZoom="10"
                            :src="zoomSrc"
                            stretch="aspectFit"
                            @transformChanged="onTransform"
                            @finalImageSet="onFinal('zoom', $event)"
                            @failure="onFailure('zoom', $event)"
                        />
                        <WrapLayout>
                            <Button text="colorMatrix next" @tap="nextFilter" />
                            <Button text="rotate +90" @tap="rotate(90)" />
                            <Button text="zoom 3x" @tap="$refs.zoomImg.nativeView.setZoom(3, false)" />
                            <Button text="rewrite + evict + update (zoom must stay)" @tap="rewriteEvictUpdateZoom" />
                            <Button text="src: ImageSource" @tap="zoomUseImageSource" />
                            <Button text="src: path" @tap="zoomSrc = refreshPath" />
                        </WrapLayout>
                        <Label :text="'transform: ' + transformText" textWrap="true" />
                        <Label :text="logText('zoom')" textWrap="true" />
                    </StackLayout>

                    <!-- 6. everything at once -->
                    <StackLayout v-if="section === 'mixed'">
                        <WrapLayout>
                            <Button :text="'tint: ' + (tint || 'none')" @tap="tint = tint ? null : 'red'" />
                            <Button :text="'blur: ' + blur" @tap="blur = blur ? 0 : 8" />
                            <Button :text="'circle: ' + circle" @tap="circle = !circle" />
                            <Button :text="'border: ' + borderWidth" @tap="borderWidth = borderWidth ? 0 : 3" />
                        </WrapLayout>
                        <NSImg
                            v-bind="iosOptions"
                            ref="mixedImg"
                            width="200"
                            height="260"
                            margin="8"
                            backgroundColor="#cccccc"
                            borderColor="#42b883"
                            :borderRadius="radius"
                            :borderWidth="borderWidth"
                            :blurRadius="blur"
                            :colorMatrix="colorMatrix"
                            :decodeWidth="px(200)"
                            :fadeDuration="fadeDuration"
                            :imageRotation="rotation"
                            :roundAsCircle="circle"
                            :src="pages[0].path"
                            :stretch="stretch"
                            :tintColor="tint"
                            @finalImageSet="onFinal('mixed', $event)"
                            @failure="onFailure('mixed', $event)"
                        />
                        <Label :text="logText('mixed')" textWrap="true" />
                    </StackLayout>
                </StackLayout>
            </ScrollView>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { File, ImageSource, Screen, Utils, isIOS, knownFolders, path as filePath } from '@nativescript/core';
import { ImagePipeline, getImagePipeline } from '@nativescript-community/ui-image';

if (isIOS) {
    // like the app, at startup: the same file is displayed with several colorMatrix/decodeWidth
    // and the cache keys must be registered before the first image is loaded
    ImagePipeline['iosComplexCacheEviction'] = true;
}

const ASSETS = ['dessert.jpg', 'dessert1.jpg', 'drink.jpg'];
const STRETCHES = ['aspectFill', 'aspectFit', 'fill', 'center'];
const FILTERS = {
    none: null,
    nightVision: [0.1, 0.4, 0, 0, 0, 0.3, 1, 0.3, 0, 0, 0, 0.4, 0.1, 0, 0, 0, 0, 0, 1, 0],
    polaroid: [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0],
    grayscale: [0.299, 0.587, 0.114, 0, 0, 0.299, 0.587, 0.114, 0, 0, 0.299, 0.587, 0.114, 0, 0, 0, 0, 0, 1, 0],
    bw: [1.5, 1.5, 1.5, -1, 0, 1.5, 1.5, 1.5, -1, 0, 1.5, 1.5, 1.5, -1, 0, 0, 0, 0, 1, 0]
};

function assetPath(name: string) {
    return filePath.join(knownFolders.currentApp().path, 'assets/images', name);
}
function copyFile(from: string, to: string) {
    File.fromPath(to).writeSync(File.fromPath(from).readSync());
}
function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default {
    data() {
        const folder = knownFolders.temp().getFolder('docscan');
        const pages = [0, 1, 2, 3, 4, 5].map((id) => {
            const pagePath = filePath.join(folder.path, `page-${id}.jpg`);
            copyFile(assetPath(ASSETS[id % ASSETS.length]), pagePath);
            return { id, path: pagePath };
        });
        const refreshPath = filePath.join(folder.path, 'refresh.jpg');
        copyFile(assetPath(ASSETS[0]), refreshPath);
        return {
            sections: ['tiles', 'refresh', 'sources', 'layout', 'zoom', 'mixed'],
            section: 'tiles',
            pages,
            refreshPath,
            refreshContent: 0,
            filterNames: Object.keys(FILTERS),
            filterName: 'nightVision',
            rotation: 0,
            radius: 12,
            stretch: 'aspectFill',
            fadeDuration: 100,
            tint: null,
            blur: 0,
            circle: false,
            borderWidth: 0,
            logs: {} as { [key: string]: string[] },
            sourceKey: 0,
            layoutKey: 0,
            nullSrc: false,
            swapSrc: false,
            zoomSrc: refreshPath,
            transformText: '',
            decodeScreen: Math.max(Screen.mainScreen.widthPixels, Screen.mainScreen.heightPixels),
            fileInfo: ''
        };
    },
    computed: {
        colorMatrix() {
            return FILTERS[this.filterName];
        },
        iosOptions() {
            // iOS only context options set by the app on every page image
            return isIOS ? { contextOptions: { originalQueryCacheType: 0, originalStoreCacheType: 0 } } : {};
        },
        slowSrc() {
            // the aspectRatio must be enough to size the view before the image is available
            const imagePath = this.pages[0].path;
            return async (view) => {
                this.addLog('layout', 'src function called with ' + (view && view.constructor && view.constructor.name));
                await wait(1500);
                return imagePath;
            };
        },
        sourceItems() {
            const items = [
                { name: 'absolute path', src: this.pages[0].path },
                { name: '~/ path', src: '~/assets/images/dessert.jpg' },
                { name: 'ImageSource', src: ImageSource.fromFileSync(this.pages[1].path) },
                {
                    name: 'function(view) => path',
                    src: (view) => {
                        this.addLog('function(view) => path', 'called with ' + (view && view.constructor && view.constructor.name));
                        return this.pages[2].path;
                    }
                },
                { name: 'async function => ImageSource', src: async () => ImageSource.fromFile(this.pages[3].path) },
                { name: 'Promise => path', src: wait(500).then(() => this.pages[4].path) },
                { name: 'res://logo', src: 'res://logo' },
                { name: 'https url', src: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg' }
            ];
            if (!isIOS) {
                const pkg = Utils.android.getApplicationContext().getPackageName();
                items.push({ name: 'android.resource://own pkg/drawable/logo', src: `android.resource://${pkg}/drawable/logo` });
                items.push({ name: 'android.resource://android/drawable/ic_menu_camera', src: 'android.resource://android/drawable/ic_menu_camera' });
            }
            return items;
        }
    },
    mounted() {
        this.updateFileInfo();
    },
    methods: {
        px(value: number) {
            return Utils.layout.toDevicePixels(value);
        },
        logText(prefix: string) {
            return Object.keys(this.logs)
                .filter((key) => key.startsWith(prefix))
                .map((key) => `${key}: ${this.logs[key][0]}`)
                .join('\n');
        },
        addLog(key: string, message: string) {
            const list = (this.logs[key] || []).slice();
            list.unshift(`${new Date().toTimeString().slice(0, 8)} ${message}`);
            this.$set(this.logs, key, list.slice(0, 5));
        },
        onFinal(key: string, event) {
            const info = event.imageInfo;
            this.addLog(key, `loaded ${info ? info.getWidth() + 'x' + info.getHeight() : '?'} from ${event.source}`);
        },
        onFailure(key: string, event) {
            this.addLog(key, 'failure ' + (event.error && event.error.message));
        },
        nextStretch() {
            this.stretch = STRETCHES[(STRETCHES.indexOf(this.stretch) + 1) % STRETCHES.length];
        },
        nextFilter() {
            this.filterName = this.filterNames[(this.filterNames.indexOf(this.filterName) + 1) % this.filterNames.length];
        },
        rotate(delta: number) {
            this.rotation = (this.rotation + delta) % 360;
        },
        async animateRotate(delta: number) {
            const view = this.$refs.tile0 && this.$refs.tile0[0] && this.$refs.tile0[0].nativeView;
            if (!view) {
                return;
            }
            // not wrapped to 360: 270 -> 360 must turn forward, not back to 0
            await view.animate({ duration: 300, imageRotation: this.rotation + delta });
            this.rotation = (this.rotation + delta) % 360;
        },

        // ---- refresh
        updateFileInfo() {
            const file = File.fromPath(this.refreshPath);
            this.fileInfo = `${ASSETS[this.refreshContent % ASSETS.length]} (rewrite #${this.refreshContent}) size ${file.size} modified ${file.lastModified.toTimeString().slice(0, 8)}`;
        },
        refreshViews() {
            return [].concat(this.$refs.refreshImg || []).map((vm) => vm.nativeView);
        },
        rewriteFile() {
            this.refreshContent++;
            copyFile(assetPath(ASSETS[this.refreshContent % ASSETS.length]), this.refreshPath);
            this.updateFileInfo();
            this.addLog('refresh', 'file rewritten (image must change after evict + update)');
        },
        updateOnly() {
            this.refreshViews().forEach((view) => view.updateImageUri());
            this.addLog('refresh', 'updateImageUri only');
        },
        async evictOnly() {
            await getImagePipeline().evictFromCache(this.refreshPath);
            this.addLog('refresh', 'evicted ' + this.refreshPath);
        },
        async evictAndUpdate() {
            await getImagePipeline().evictFromCache(this.refreshPath);
            await Promise.all(this.refreshViews().map((view) => view.updateImageUri()));
            this.addLog('refresh', 'evict + updateImageUri done');
        },
        forceReload() {
            this.refreshViews().forEach((view) => view.forceReloadImage && view.forceReloadImage());
        },
        async clearCaches() {
            await getImagePipeline().clearCaches();
            this.addLog('refresh', 'clearCaches done');
        },
        async checkCaches() {
            const pipeline = getImagePipeline();
            const disk = await pipeline.isInDiskCache(this.refreshPath);
            const memory = pipeline.isInBitmapMemoryCache(this.refreshPath);
            this.addLog('refresh', `disk: ${disk} memory: ${memory}`);
        },

        // ---- sources / layout
        reloadSources() {
            this.sourceKey++;
        },
        reloadLayout() {
            this.layoutKey++;
        },

        // ---- zoom
        onTransform(event) {
            const native = event.android || event.ios;
            this.transformText = isIOS ? JSON.stringify({ a: native.a, d: native.d, tx: native.tx, ty: native.ty }) : native.toShortString();
        },
        async rewriteEvictUpdateZoom() {
            this.rewriteFile();
            await getImagePipeline().evictFromCache(this.refreshPath);
            this.zoomSrc = this.refreshPath;
            await this.$refs.zoomImg.nativeView.updateImageUri();
        },
        async zoomUseImageSource() {
            // android ImageSource handling of the zoomable view
            this.zoomSrc = await ImageSource.fromFile(this.refreshPath);
        }
    }
};
</script>

<style scoped lang="scss">
ActionBar {
    background-color: #42b883;
}
Button {
    font-size: 12;
    padding: 4;
}
.active {
    background-color: #42b883;
    color: white;
}
</style>
