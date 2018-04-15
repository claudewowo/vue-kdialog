const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowser = require('open-browser-webpack-plugin');
const webpackBaseConfig = require('./config');

const port = 3003;

webpackBaseConfig.module.rules.push({
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader', {
        loader: 'css-loader',
        options: {
            importLoaders: 2,
        },
    }, 'postcss-loader'],
});

webpackBaseConfig.plugins.push(
    new HtmlWebpackPlugin({
        filename: '../examples.html',
        template: path.join(__dirname, '../src/examples.html'),
        chunks: ['examples', 'vendor', 'manifest'],
        inject: true, // 允许插件修改哪些内容，包括head与body
        minify: {
            removeComments: true, // 移除HTML中的注释
            removeEmptyAttributes: true,
        },
        chunksSortMode: 'dependency',
    }),
    new HtmlWebpackPlugin({
        filename: '../loading.html',
        template: path.join(__dirname, '../src/examples.html'),
        chunks: ['examples', 'vendor', 'manifest'],
        inject: true, // 允许插件修改哪些内容，包括head与body
        minify: {
            removeComments: true, // 移除HTML中的注释
            removeEmptyAttributes: true,
        },
        chunksSortMode: 'dependency',
    }),
    new HtmlWebpackPlugin({
        filename: '../alert.html',
        template: path.join(__dirname, '../src/examples.html'),
        chunks: ['examples', 'vendor', 'manifest'],
        inject: true, // 允许插件修改哪些内容，包括head与body
        minify: {
            removeComments: true, // 移除HTML中的注释
            removeEmptyAttributes: true,
        },
        chunksSortMode: 'dependency',
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development'),
        },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowser({ url: `http://localhost:${port}/examples.html` }),
);

module.exports = {
    entry: {
        examples: path.join(__dirname, '../src/examples.js'),
    },
    // 解析模块
    resolve: webpackBaseConfig.resolve,
    module: webpackBaseConfig.module,

    plugins: webpackBaseConfig.plugins,
    devtool: 'eval-source-map',
    devServer: {
        hot: true,
        inline: true,
        compress: true,
        historyApiFallback: false,
        host: '0.0.0.0',
        port,
    },
};
