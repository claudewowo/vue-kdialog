//webpack 基础配置项
const path = require('path'),						//引入 nodejs 中的path模块
    glob = require('glob'),
    utils = require('./utils'),
    config = require('../config'),
    entries = require('./entry.conf'),		        //获得入口文件
    vueLoaderConfig = require('./vue-loader.conf')

module.exports = {
    //入口
    entry : entries.entriesJs,
    //输出
    output : {
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        path: config.build.assetsRoot,
        filename: '[name].js'
    },
    //解析模块
    resolve:{
        extensions: ['scss', 'less', '.js', 'jsx', '.vue', '.json'],
        modules: [
            path.resolve(__dirname, '../'),
            path.resolve(__dirname, '../node_modules')
        ],
        //路径别名
        alias: {
            '~src': path.resolve(__dirname, '../src'),
            '~config': path.resolve(__dirname, "../config"),
            '~static': path.resolve(__dirname, '../static'),
            '~assets': path.resolve(__dirname, "../src/assets"),
            '~img': path.resolve(__dirname, "../src/assets/img"),
            '~js': path.resolve(__dirname, "../src/assets/js"),
            '~sass': path.resolve(__dirname, "../src/assets/sass"),
            '~components': path.resolve(__dirname, "../src/components"),
            '~modules': path.resolve(__dirname, "../src/store/modules"),
            '~ui': path.resolve(__dirname, "../src/components/ui"),
            '~plugin': path.resolve(__dirname, "../src/plugin"),
            '~views': path.resolve(__dirname, "../src/views"),
            '~utils': path.resolve(__dirname, "../src/utils"),
            '~store': path.resolve(__dirname, "../src/store")
        }
    },
    //webpack模块
    module : {
        rules : [{
            test: /\.vue$/,
            exclude: [
                path.resolve(__dirname, "../node_modules"),
                path.resolve(__dirname, "../static")
            ],
            include:[path.resolve(__dirname, '../')],
            loader: 'vue-loader',
            options: vueLoaderConfig
        },{
            test: /\.js$/,
            exclude: /node_modules|static|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/,
            include:[path.resolve(__dirname, '../')],
            loader: 'babel-loader?cacheDirectory'
        },{
            test: /\.json$/,
            exclude: /node_modules|static|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/,
            loader: 'json-loader'
        },{
            test: /\.html$/,
            exclude: /node_modules|static|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/,
            loader: 'vue-html-loader'
        },{
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            exclude: /node_modules|static|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/,
            loader: 'url-loader',
            query: {
                limit: 5000,
                name: utils.assetsPath('img/[name].[ext]')
            }
        },{
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            exclude: /node_modules|static|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[ext]')	//fonts/[name].[hash:7].[ext]
            }
        }],
        noParse: /node_modules\/(jquey|moment|chart|iconfont\.js)/
    },
    /* 其他插件，需要将插件绑定到window对象下 */
    externals: {
        //"UE": "window.UE"
    }
}