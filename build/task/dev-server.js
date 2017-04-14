var webpack = require('webpack')
var webpackConfig = require('../webpack.dev.js')
var WebpackDevServer = require("webpack-dev-server")

var compiler = webpack(webpackConfig)
var server = new WebpackDevServer(compiler,{

})

server.listen(8080)