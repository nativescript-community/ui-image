<script lang="ts">
import Details2 from './Details2.vue';
import { ImageSource, PageTransition, SharedTransition } from '@nativescript/core';
export default {
    methods: {
        onNavigate(args) {
            this.$navigateTo(Details2, {
                transition: SharedTransition.custom(new PageTransition())
            });
        }
    }
};
</script>

<template>
    <Page>
        <ActionBar>
            <Label text="Details" />
        </ActionBar>
        <GridLayout rows="auto, *">
            <Img
                sharedTransitionTag="hero"
                height="200"
                row="1"
                width="200"
                src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                @tap="onNavigate"
                verticalAlignment="bottom"
            />
        </GridLayout>
    </Page>
</template>
