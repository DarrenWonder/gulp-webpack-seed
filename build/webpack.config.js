var config = require('../config')
var path = require('path')

module.exports = {
	entry: {
		app: ['./src/main.js']
	},
	output: {
		path: '',
		filename: 'js/[name].js',
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname,'../src')
				],
				enforce: 'pre',
				loader: 'eslint-loader',
				options: {
					formatter: require('eslint-friendly-formatter')
				}
			},
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname,'../src')
				],
				loader: 'babel-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: 10240,
					name: 'img/[name].[hash:7].[ext]'
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: 10240,
					name: 'fonts/[name].[hash:7].[ext]'
				}
			}
		]
	},
	resolve: {
		extensions: ['.js','.json']
	}
}