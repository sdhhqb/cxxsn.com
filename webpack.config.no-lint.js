const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/index.js',
	],

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	],

	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dev'),
		publicPath: '/'
	},

	devServer: {
		port: 3000,
		hot: true,
		historyApiFallback: true,
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};