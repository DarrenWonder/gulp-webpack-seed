var path = require('path')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')
var merge = require('webpack-merge')
var config = require('../config')
var utils = require('./utils.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackConfig,{
	output: {
		path: config.dev.path,
		publicPath: config.dev.publicPath
	},
	module: {
		rules: utils.styleLoaders({
			sourceMap: config.dev.cssSourceMap
		})
	},
	devtool: 'cheap-module-eval-source-map',
	plugins: [
		new webpack.DefinePlugin({

		}),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({
			filename: 'css/[name].[contenthash].css'
		}),
		new HtmlWebpackPlugin({
			inject: true
		})
	]
})