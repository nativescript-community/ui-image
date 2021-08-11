const { dirname, join, relative, resolve, sep } = require('path');
const webpack = require('@nativescript/webpack');
module.exports = (env) => {
    webpack.init(env);
    const config = webpack.resolveConfig();
    const coreModulesPackageName = '@akylas/nativescript';
    config.resolve.modules = [resolve(__dirname, `node_modules/${coreModulesPackageName}`), resolve(__dirname, 'node_modules'), `node_modules/${coreModulesPackageName}`, 'node_modules'];

    // config.resolve.symlinks = false;
    Object.assign(config.resolve.alias, {
        '@nativescript/core': `${coreModulesPackageName}`,
        'tns-core-modules': `${coreModulesPackageName}`
    });
    return config;
};
