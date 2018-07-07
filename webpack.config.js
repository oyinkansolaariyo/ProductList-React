/**
 * Created by itunu on 7/7/18.
 */
const path = require('path');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'eslint-loader',
				options: {
					failOnWarning: true,
					failOnerror: true
				},
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(scss)$/,
				use: [{
					loader: 'style-loader', // inject CSS to page
				}, {
					loader: 'css-loader', // translates CSS into CommonJS modules
				}, {
					loader: 'postcss-loader', // Run post css actions
					options: {
						plugins: function () { // post css plugins, can be exported to postcss.config.js
							return [
								require('precss'),
								require('autoprefixer')
							];
						}
					}
				}, {
					loader: 'sass-loader' // compiles Sass to CSS
				}],
				exclude: /node_modules/
			},
			{
				test: /\.svg$/,
				loader: 'url-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CleanWebPackPlugin(['public'], { root: path.resolve(__dirname) }),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			favicon: './src/favicon.ico',
			inject: false
		}),
		new CopyWebpackPlugin([
			{
				context: './src/images',
				from: '**/*',
				to: './images'
			}
		])
	],
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		compress: true,
		port: 9000
	}
};