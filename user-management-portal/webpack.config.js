const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const deps = require('./package.json').dependencies;

module.exports = {
	output: {
		// 依照環境改變
		publicPath: 'http://localhost:8080/',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
	},
	devServer: {
		compress: true,
		port: 8080,
		hot: true,
		headers: {
			'Access-Control-Allow-Origin': '*', // 允許跨網域
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers':
				'X-Requested-With, content-type, Authorization',
		},
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new ModuleFederationPlugin({
			name: 'userManagementPortal',
			filename: 'remoteEntry.js',
			exposes: {
				'./renderReactElement': './src/renderReactElement.js',
				'./withReducer': './src/withReducer.js',
				'./UserManagementPortalPages': './src/Pages/index.js',
				'./UserManagementPortalComponents': './src/Components/index.js',
				'./UserManagementStore': './src/common/store.js',
				'./UserManagementPortalStyles': './public/styles.css',
			},
			shared: {
				...deps,
				react: {
					singleton: true,
					strictVersion: true,
					requiredVersion: deps.react,
				},
				'react-dom': {
					singleton: true,
					strictVersion: true,
					requiredVersion: deps['react-dom'],
				},
				'react-redux': {
					singleton: true,
					strictVersion: true,
					requiredVersion: deps['react-redux'],
				},
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			// filename: './index.html',
		}),
	],
};
