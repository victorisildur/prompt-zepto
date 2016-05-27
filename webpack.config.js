var webpack = require('webpack');

module.exports = {
    entry: './js/prompt.js',
    output: {
        path: './dist',
        filename: 'prompt.js'
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.html$/,
            loader: 'html'
        }]
    }
};
