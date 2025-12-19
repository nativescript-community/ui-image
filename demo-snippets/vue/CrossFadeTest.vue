<template>
    <Page>
        <ActionBar>
            <Label text="CrossFade Test" />
        </ActionBar>

        <GridLayout rows="*, auto">
            <NSImg width="500" height="500" fadeDuration="500" :preventPreClearDrawable="true" alwaysFade="true" :src="src" stretch="aspectFit" backgroundColor="red"/>
            <WrapLayout row="1" marginTop="8">
                <Button text="start" @tap="start()" />
                <Button text="stop" @tap="stop()" />
            </WrapLayout>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
const images = [
    'https://plus.unsplash.com/premium_photo-1764446765006-2976436e8ac3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1764773965937-8c6c0f2ad915?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1764782979306-1e489462d895?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1764712754802-efe14d4478b6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

let testInterval: any;
export default {
    data() {
        return {
            src: images[0]
        };
    },
    methods: {
        start() {
            if (!testInterval) {
                testInterval = setInterval(() => {
                    const index = images.indexOf(this.src);
                    console.log('updating src', index, images[(index + 1) % images.length], Date.now());
                    this.src = images[(index + 1) % images.length];
                }, 400);
            }
        },
        stop() {
            if (testInterval) {
                clearInterval(testInterval);
            }
        }
    }
};
</script>

<style scoped lang="scss">
ActionBar {
    background-color: #42b883;
}
.item {
    padding: 10;
    color: white;
    .title {
        font-size: 17;
        font-weight: bold;
    }
    .subtitle {
        font-size: 14;
    }
}
</style>
