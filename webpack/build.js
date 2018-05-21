// vue build 项目配置

const ora = require('ora');
const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfig = require('./webpack.base.config');

const params = process.env.npm_lifecycle_script.split(' ')[2];

if (params === '--1') {
    webpackConfig.entry = {
        examples: path.join(__dirname, '../src/examples.js'),
    };
} else if (params === '--2') {
    webpackConfig.entry = {
        keydialog: path.join(__dirname, '../src/keydialog.js'),
    };

    webpackConfig.output = {
        path: path.join(__dirname, '../dist'),
        filename: '[name].min.js',
        library: 'keydialog',
        libraryTarget: 'umd',
        umdNamedDefine: true
    };
    webpackConfig.externals = {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    };
}

if (params !== '--2') {
    webpackConfig.plugins.push(
        new ExtractTextPlugin({
            filename: '[name].[hash:3].css',
            allChunks: true,
        }),
        new CleanPlugin(['dist'], {
            root: path.join(__dirname, '../'),
            verbose: true,
            dry: false,
        }),
        // 提取 webpack runtime 和 module manifest 到独立的文件，以避免在 bundle 更新后 vendor hash 被更新
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename: 'manifest.[hash:3].js',
            chunks: ['vendor'],
        }),
        // 将公共模块打包到公共文件 vendor 中
        // minChunks的值决定有多少个entry文件调用了相同模块，才打包进公共文件中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[hash:3].js',
            minChunks: 2,
        })
    );

    webpackConfig.output = {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash:3].js',
        chunkFilename: '[name].[hash:3].js',
        publicPath: './',
    };

    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        filename: '../dist/examples.html', // 输出路径及文件名
        template: path.join(__dirname, '../src/examples.html'), // 引入 html 模版路径
        chunks: ['examples', 'vendor', 'manifest'],
        inject: true, // 允许插件修改哪些内容，包括head与body
        // hash: true, // 为静态资源生成hash值，可以实现缓存
        minify: {
            removeComments: true, // 移除HTML中的注释
            collapseWhitespace: true,
            removeEmptyAttributes: true,
        },
        chunksSortMode: 'dependency',
    }));
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        filename: '../dist/loading.html', // 输出路径及文件名
        template: path.join(__dirname, '../src/examples.html'), // 引入 html 模版路径
        chunks: ['examples', 'vendor', 'manifest'],
        inject: true, // 允许插件修改哪些内容，包括head与body
        // hash: true, // 为静态资源生成hash值，可以实现缓存
        minify: {
            removeComments: true, // 移除HTML中的注释
            collapseWhitespace: true,
            removeEmptyAttributes: true,
        },
        chunksSortMode: 'dependency',
    }));
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        filename: '../dist/alert.html', // 输出路径及文件名
        template: path.join(__dirname, '../src/examples.html'), // 引入 html 模版路径
        chunks: ['examples', 'vendor', 'manifest'],
        inject: true, // 允许插件修改哪些内容，包括head与body
        // hash: true, // 为静态资源生成hash值，可以实现缓存
        minify: {
            removeComments: true, // 移除HTML中的注释
            collapseWhitespace: true,
            removeEmptyAttributes: true,
        },
        chunksSortMode: 'dependency',
    }));
}

webpackConfig.module.rules.push({
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        use: ['css-loader', 'postcss-loader'],
    }),
});

webpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production'),
    },
}));

if (params !== '--0') {
    webpackConfig.plugins.push(
        // 压缩 css
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        // uglifjs 压缩
        /* new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }), */
    );
}

const spinner = ora('正在打包...');
spinner.start();

webpack(webpackConfig, (err, stats) => {
    setTimeout(() => {
        spinner.stop();
    }, 3000);
    if (err) throw err;
    process.stdout.write(`${stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
    })}\n\n`);

    console.log('  打包完成~\n');

    console.log('  提示:\n' +
        '  打包后的文件必须经过 HTTP 服务器访问.\n' +
        '  直接通过 file:// 方式打开无效.\n');
});
