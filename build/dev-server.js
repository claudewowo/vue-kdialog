const opn = require('opn'),
    path = require('path'),
    express = require('express'),
    webpack = require('webpack'),
    config = require('../config'),
    proxyMiddleware = require('http-proxy-middleware'),
    webpackConfig = process.env.NODE_ENV === 'testing' ? require('./webpack.prod.conf') : require('./webpack.dev.conf')


// 开发服务器默认访问端口
let port = process.env.PORT || config.dev.port
// 定义 HTTP 代理为自定义的后端 API
// https://github.com/chimurai/http-proxy-middleware
let proxyTable = config.dev.proxyTable
let compiler = webpack(webpackConfig)
let app = express()

let devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    //quiet: true,
    stats: {
        colors: true,
        chunks: false
    }
})

let hotMiddleware = require('webpack-hot-middleware')(compiler);
// 当 html-webpack-plugin 模版更新时强制重载页面
compiler.plugin('compilation', (compilation) => {
    compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

// 代理 api 请求
Object.keys(proxyTable).forEach((context) => {
    let options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// 纯静态资源服务器
let staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))
module.exports = app.listen(port, (err) => {
    if (err) {
        console.log(err)
        return
    }
    let uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')
    if (process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
})