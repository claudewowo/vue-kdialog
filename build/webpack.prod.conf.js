//webpack 发布配置项
const path = require('path'),                        //引入 nodejs 中的path模块
    utils = require('./utils'),                    
    webpack = require('webpack'),
    config = require('../config'),
    merge = require('webpack-merge'),
    entries = require('./entry.conf').entriesHtml,                //获得入口文件
    baseWebpackConfig = require('./webpack.base.conf'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    env = process.env.NODE_ENV === 'testing' ? require('../config/test.env') : config.build.env

//合并/覆盖base配置
const webpackConfig = merge(baseWebpackConfig, {
    //模块
    module: {
        /*rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })*/
        rules: [{
            test: /\.(sass|scss)$/,
            exclude: [
                path.resolve(__dirname, "../node_modules"),
                path.resolve(__dirname, "../static")
            ],
            use: ExtractTextPlugin.extract({
                fallback: 'vue-style-loader',
                use: ['css-loader?importLoaders=1', 'postcss-loader', 'sass-loader']    //'sass-loader?indentedSyntax'
            })
        },{
            test: /\.less$/,
            exclude: [
                path.resolve(__dirname, "../node_modules"),
                path.resolve(__dirname, "../static")
            ],
            use: ExtractTextPlugin.extract({
                fallback: 'vue-style-loader',
                use: ['css-loader?importLoaders=1', 'postcss-loader', 'less-loader']    //'stylus-loader','stylus-loader'
            })
        }]
    },
    //开发工具，使用 eval 过的 souremap 开发时速度更快
    devtool: config.build.productionSourceMap ? '#source-map':false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].js'),     //[name].[chunkhash]
        chunkFilename: utils.assetsPath('js/[id].js')   //[id].[chunkhash]
    },
    //参见 http://vue-loader.vuejs.org/en/workflow/production.html
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告  
                warnings: false,
                // 删除所有的 `console` 语句,还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到1次的变量
                collapse_vars: true,
                // 提取出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true
            }
            //,sourceMap: true
        }),
        // 将css文件打包成独立文件
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].css'),   //[name].[contenthash:5]
            allChunks: true
        }),
        // 压缩 css
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        // 将公共模块打包到公共文件 vendor 中
        //minChunks的值决定有多少个entry文件调用了相同模块，才打包进公共文件中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks:2
            /*minChunks: function (module) {
                // 所有从 node_modules 引入的模块都会被合并到 vendor
                return (
                    module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
                )
            }*/
        }),
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'iconfont',
            minChunks: function (module) {
                return (
                    module.resource && /\.js$/.test(module.resource) && module.resource.indexOf( path.join(__dirname, '../static/iconfont') ) === 0
                )
            }
        }),*/
        // 提取 webpack runtime 和 module manifest 到独立的文件，以避免在 bundle 更新后 vendor hash 被更新
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        })
    ]
})

for (let page in entries) {
    let fileName = page.split('/')[1] === 'home' ? 'index' + '.html' : page.split('/')[1] + '.html',
    plugin = new HtmlWebpackPlugin({
        filename: fileName,
        template: entries[page],
        chunks: [page, 'vendor', 'manifest'],
        // 自动将引用插入html
        inject: true,
        favicon:'./logo.png',
        minify: {
            sortClassName: true,
            removeComments: true,
            sortAttributes: true,
            collapseWhitespace: true,
            removeEmptyAttributes: true,
            // removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    });
    webpackConfig.plugins.push(plugin)
}

//gzip 压缩
if (config.build.productionGzip) {
    let CompressionWebpackPlugin = require('compression-webpack-plugin');
    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

module.exports = webpackConfig