if (global.TNS_WEBPACK) {
    require('@nativescript/core/bundle-entry-points');

    const context = (require as any).context('~/', true, /(root|page|fragment)\.(xml|css|js|ts|scss|less|sass)$/);
    global.registerWebpackModules(context);

    // global.registerModule('main-page', function() {
    //     return require('./main-page');
    // });
}
