/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="../src/references.d.ts" />

// typings/custom.d.ts
declare module 'nativescript-worker-loader!*' {
    const content: any;
    export = content;
}

declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}
declare var TNS_ENV: string;
