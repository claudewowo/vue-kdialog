// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path'),							//引入 nodejs 中的path模块
	config = require('./config.js')						//引入开发环境与发布环境配置

//开发与发布环境配置项
module.exports = {
	//发布环境
	build: {
		env: require('./prod.env'),
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: '',
		assetsPublicPath: '',
		productionSourceMap: false,
		// 默认不启用 Gzip off by default as many popular static hosts such as Surge or Netlify already gzip all static assets for you.
		// 在开设 Gip 为 `true` 前请确保服务端安装以下模块:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css']
	},
	//开发环境
	dev: {
		port: 3001,
		env: require('./dev.env'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			'/api': {
				target: 'http://' + config.Api,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
		cssSourceMap: true
	}
}