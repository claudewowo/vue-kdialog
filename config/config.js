//开发环境与发布环境API的切换配置
var NODE_ENV=process.env.NODE_ENV === 'production';
module.exports = {
	apiUrl: NODE_ENV ? '' :'http://127.0.0.1:3001',					//本地开发服务器API
	pathUrl:'http://127.0.0.1:3001/',                               //本地开发服务器地址
	imgPath: NODE_ENV ? '/static/img/':'./static/img/',                                       		//图片路径前缀
	CookieDomain:NODE_ENV ? '.xxx.com':'',                                  //CookieDomain
	Api:"127.0.0.1:3001",                                           //服务器接口API
	port:3001                                                       //本地开发服务器端口
	//baiduMapAk:"b1xyIflbuX4p0DrmbfITmyfdnIaK22RB"                 //百度地图密钥
}
