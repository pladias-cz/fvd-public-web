const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('htdocs/www/dist')
    .setPublicPath('/dist')
    .setManifestKeyPrefix('')
    .addEntry('app', './assets/application.js')
    .addEntry('gallery', './assets/js/gallery.js')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .enablePostCssLoader()
    .configureBabel(()=> {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })
    .disableSingleRuntimeChunk();

module.exports = Encore.getWebpackConfig();
