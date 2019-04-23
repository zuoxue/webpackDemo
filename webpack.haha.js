const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/static/js/index.js',
		element: './src/static/js/addElement.js',
	},
	devtool: 'inline-source-map',
	output: {
		// publicPath: path.resolve(__dirname, 'dist/image/'),
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]-[hash].js',
	},

	devServer: {
		contentBase: false,
		publicPath: '/',
		path: path.resolve(__dirname, 'dist'),
		inline: true,
	},
	resolve: {
		extentions: ['', '.html'],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
			{
				test: /\.(png|jpe?g|webm)$/,
				use: ['file-loader'],
			},
		],
	},
	plugins: [
		new cleanWebpackPlugin(),
		new htmlWebpackPlugin({
			template: 'index.html',
			inject: 'body',
			title: 'output management',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
