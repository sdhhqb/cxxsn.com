const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router', 'react-router-dom'],
    app: './src/index.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/abc/def/',
    filename: 'js/[name].[hash].js',
    chunkFilename: "js/[id].bundle.[hash].js"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },

      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=512&&name=image/src/[name].[ext]?[hash]'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),

    new ExtractTextPlugin({filename: 'style.[contenthash].css'}),

    new HtmlWebpackPlugin({
      template: './src/template.html',
      inject: 'body'
    })

  ]

}