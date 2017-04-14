var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.cssLoaders = function (options) {
	var options = options || {}

	var cssLoader = {
		loader: 'css-loader',
		options: {
			sourceMap: options.sourceMap
		}
	}

	var postcssLoader = {
		loader: 'postcss-loader'
	}

	function generateLoader(loader,loaderOptions) {
		var loaders = [cssLoader,postcssLoader]

		if (loader) {
			loaders.push({
				loader: loader + '-loader',
				options: Object.assign({},loaderOptions,{
					sourceMap: options.sourceMap
				})
			})
		}

		return ExtractTextPlugin.extract({
				use: loaders,
				fallback: 'style-loader'
		})
	}

	return {
		css: generateLoader(),
		less: generateLoader('less'),
		sass: generateLoader('sass', { indentedSyntax: true }),
		scss: generateLoader('sass')
	}
}

exports.styleLoaders = function (options) {
	var output = []
	var loaders = exports.cssLoaders(options)
	for(var extension in loaders){
		var loader = loaders[extension]
		output.push({
			test: new RegExp('\\.' + extension + '$'),
			use: loader
		})
	}

	return output
}

