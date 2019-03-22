const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode:'development',
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  devServer:{
    contentBase: './dist',
		port: 3000
  },
  module:{
    rules:[{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html'
    }),
    new CleanWebpackPlugin()
  ]
}