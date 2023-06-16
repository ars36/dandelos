const path = require('path');
const webpack = require('webpack');
let ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            '{Template}': path.resolve('resources/js/Themes/default'),
        },
    },
    module: {
        rules: [
            {
                test: /\.template$/,
                loader: 'vue-template-loader',
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'window.Quill': 'quill'
        }),
        new ProgressBarPlugin()
    ]
};
