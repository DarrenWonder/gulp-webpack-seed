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
    path: config.build.path,
    publicPath: config.build.publicPath
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.cssSourceMap
    })
  },
  plugins: [
    new webpack.DefinePlugin({

    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: true
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
  ]
})