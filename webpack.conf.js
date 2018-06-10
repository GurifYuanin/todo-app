const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-module-eval-source',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'img/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'development',
      favicon: './src/asserts/img/favicon.ico',
      template: './src/index.html',
      inject: 'body',
      hash: true
    }),
    new VueLoaderPlugin()
  ]
};
console.log('你的开发环境为：' + process.env.NODE_ENV);
if (isDev) {
  config.devServer = {
    port: 3000,
    host: 'localhost',
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    hot: true
  };
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}
module.exports = config;