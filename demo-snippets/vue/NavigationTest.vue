<template>
    <Page>
        <ActionBar>
            <Label text="NavigationTest" />
        </ActionBar>

        <GridLayout rows="auto,*, auto">
            <Img height="200" width="200" src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />

            <Button row="2" text="View Details" @tap="onNavigate" class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg" horizontalAlignment="center">
            </Button>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { ImageSource } from '@nativescript/core';
import Details from './Details.vue';

export default {
    methods: {
        onNavigate(args) {
            this.$navigateTo(Details, { transition: { name: 'slideLeft', duration: 2000 } });
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
