const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    entry: {
        examples: path.join(__dirname, '../src/examples.js'),
    },
    resolve: {
        extensions: ['.css', '.js', '.vue', '.json'],
        modules: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../node_modules'),
        ],
        // 路径别名
        alias: {
            src: path.resolve(__dirname, '../src'),
            config: path.resolve(__dirname, '../config'),
            css: path.resolve(__dirname, '../src/css'),
            img: path.resolve(__dirname, '../src/img'),
            js: path.resolve(__dirname, '../src/js'),
            components: path.resolve(__dirname, '../src/components'),
        },
    },
    module: {
        rules: [{
            test: /\.(js|vue)$/,
            enforce: 'pre',
            exclude: /node_modules/,
            /* use: [{
                loader: 'eslint-loader',
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    emitError: true,
                }
            }], */
        }, {
            test: /\.vue$/,
            use: {
                loader: 'vue-loader',
                options: {
                    hotReload: true,
                },
            },
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name(file) {
                        const paths = file.split('/');
                        const len = paths.length;
                        const imgpath = paths[len - 2];
                        return `${imgpath}/[name].[ext]`;
                    },
                    limit: 8192,
                    outputPath: 'dist/img',
                    publicPath: '../', // css中的路径 = '../dist/img/[name].[ext]'
                },
            },
        },
        {
            test: /\.(woff|woff2|ttf|eot)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name: '[name].[ext]',
                    outputPath: 'dist/fonts/',
                    publicPath: '../',
                },
            },
        }],
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    performance: {
        hints: false, // 性能(Performance)配置 false | "error" | "warning"
        maxAssetSize: 5000000,
        maxEntrypointSize: 10000000,
    },
    externals: {
        Vue: 'Vue'
    }
};
