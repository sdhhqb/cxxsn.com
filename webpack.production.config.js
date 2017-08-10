const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(env, argv) {

  let publicPath = '/';
  let tmpFile = './src/templates/template.html';
  if (env && env.github) {
    console.log('env : ', env);
    publicPath = '/cxxsn_com/';
    tmpFile = './src/templates/template_github.html';
  }

  return {
    entry: {
      vendor: ['react', 'react-dom', 'react-router', 'react-router-dom', 'whatwg-fetch'],
      app: './src/index.js'
    },

    output: {
      path: path.join(__dirname, 'docs'),
      publicPath: publicPath,
      filename: 'js/[name].[chunkhash].js',
      chunkFilename: "js/[id].bundle.[chunkhash].js"
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
          loader: 'url-loader?limit=512&&name=image/css/[name].[ext]?[hash]'
        }
      ]
    },

    plugins: [
      // 清空之前打包的文件
      new CleanWebpackPlugin(['docs'], {exclude: ['image', 'lib']}),

      // 设置为生产环境
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),

      // 提取单独vendor分块
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
      }),

      // 配合vendor，避免每次打包vendor的hash改变
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      }),

      // 配合vendor，避免每次打包vendor的hash改变
      new webpack.HashedModuleIdsPlugin(),

      // 提取css
      new ExtractTextPlugin({filename: 'style.[contenthash].css'}),

      // 压缩js
      new UglifyJSPlugin(),

      // 转换html模板
      new HtmlWebpackPlugin({
        template: tmpFile,
        inject: 'body'
      }),

      // 复制文件
      new CopyWebpackPlugin([
        { from: 'src/static/baidu_verify_fdvrUl7wz2.html' },
        { from: 'src/static/favicon.ico' },
        { from: 'src/static/404.html' }
      ])

    ]
  };
};
