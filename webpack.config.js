const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const CleanWebpackPlugin=require('clean-webpack-plugin')
const webpack=require('webpack')
module.exports={
	entry:'./src/index.js',
	// plugins:[
	// 	new CleanWebpackPlugin(['dist']),
	// 	// new HtmlWebpackPlugin({
	// 	// 	title: 'Output Management'
	// 	// })
	// ],
	devServer: {
		contentBase:'./dist',
		hot: true
	},
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	plugins:[
	new webpack.NamedModulesPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	// new HtmlWebpackPlugin({
	// 	template:'./dist/index.html'
	// })],
	],
	module:{
		rules:[{
			test:/\.vue$/,
			use:'vue-loader'
		},
		{
			test:/\.css$/,
			use:['style-loader',
			'css-loader']
		},
		{
			test:/\.less$/,
			use:['style-loader',
			'css-loader']

		},
		{
			test:/\.(jpg|png|svg|ttf|woff|woff2|gif)$/,
			loader:'url-loader',
			options:{
				limit:4096,
				name:'[name].[ext]',
			}
		},
		{
			test:/\.js$/,
			loader:'babel-loader',
			exclude: /node_modules/,
			options: {
				presets :['es2015'],
				plugins:['transform-runtime'],
			}
		}]
	}



}