//开发环境配置
const merge = require('webpack-merge'),
	prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})