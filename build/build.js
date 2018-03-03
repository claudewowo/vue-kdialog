//vue build 项目配置
// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

const ora = require('ora'),
    path = require('path'),
    webpack = require('webpack'),
    config = require('../config'),
    webpackConfig = require('./webpack.prod.conf')

let spinner = ora('正在打包...')
spinner.start()

let assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/', assetsPath)

webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    console.log('  打包完成~\n')

    console.log(
        '  提示:\n' +
        '  打包后的文件必须经过 HTTP 服务器访问.\n' +
        '  直接通过 file:// 方式打开无效.\n'
    )
})
