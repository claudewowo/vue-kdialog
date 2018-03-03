// postcss 配置项
module.exports = {
  plugins: [
    require('postcss-color-function'),
    require('postcss-extend'),
    require('postcss-nested'),
    require('autoprefixer')({
    	browsers: ['last 20 versions']
    })
  ]
}