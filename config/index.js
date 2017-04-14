var path = require('path')

module.exports = {
	build: {
		env: 'production',
    path: path.resolve(__dirname,'../dist'),
    publicPath: '/',
		cssSourceMap: false,
		cssExtra: true
	},
	dev: {
		env: 'development',
		port: 4000,
		path: path.resolve(__dirname,'../static'),
		publicPath: '/',
		cssSourceMap: true,
		cssExtra: false
	}
}