var gulp = require('gulp')
var rimraf = require('rimraf')
var webpack = require('webpack')
var webpackConfig = require('../webpack.dev.js')
var buildConfig = require('../webpack.build.js')
var WebpackDevServer = require("webpack-dev-server")
var config = require('../../config')
var opn = require('opn')


gulp.task('webpack:clean',function (cb) {
	rimraf('./static',function() {
      rimraf('./dist',function () {
        cb()
      })
  })
  
})


gulp.task('dev:server',function (callback) {
	var uri = 'http://localhost:'+config.dev.port+'/'
	webpackConfig.entry.app.unshift('webpack-dev-server/client?'+uri,
									'webpack/hot/dev-server')		
	var compiler = webpack(webpackConfig)
	new WebpackDevServer(compiler,{
		hot: true
	}).listen(config.dev.port,function (err) {
		if (err) { throw new Error(err) }
		opn(uri)
	})
})

gulp.task('build',['webpack:clean'],function (cb) {
	webpack(buildConfig,function () {
    cb()
  })
})
