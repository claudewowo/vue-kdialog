//webpack 开发配置项
const utils = require('./utils'),                    
    webpack = require('webpack'),
    config = require('../config'),
    merge = require('webpack-merge'),
    entries = require('./entry.conf').entriesHtml,                //获得入口文件
    baseWebpackConfig = require('./webpack.base.conf'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// vue 多页面入口
Object.keys(baseWebpackConfig.entry).forEach((name) => {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
    //多入口页面引用
    /*let plugin = new HtmlWebpackPlugin({
        filename: name + '.html',
        template: name + '.html',
        chunks: [name, 'vendor', 'manifest'],
        // 自动将引用插入html
        inject: true
    });
    module.exports.plugins.push(plugin);*/
})

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    // 使用 eval 过的 souremap 开发时速度更快
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        //参见 https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin()
    ]
})

for (let page in entries) {
    let fileName = page.split('/')[1] === 'home' ? 'index' + '.html' : page.split('/')[1] + '.html',
    plugin = new HtmlWebpackPlugin({
        filename: fileName,
        template: entries[page],
        chunks: [page, 'vendor', 'manifest'],
        // 自动将引用插入html
        inject: true
    });
    module.exports.plugins.push(plugin)
}
