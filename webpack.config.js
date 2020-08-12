const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: path.join(__dirname, '/app/main.js'), // 入口文件
  output: {
    path: path.join(__dirname, '/build'), // 存放打包后的文件路径
    filename: 'bundle-[hash].js', // 打包后的文件名
  },
  mode: 'development',
  // devtool: 'source-map',
  // devtool: 'cheap-module-source-map',
  // devtool: 'cheap-module-eval-source-map',
  // 仅限开发环境
  devtool: 'eval-source-map',
  // 本地服务器 webpack-dev-server
  devServer: {
    contentBase: './build', // 本地服务器所加载的页面所在的目录
    port: 3004,
    historyApiFallback: true, // 不跳转
    inline: true, // 开始实时刷新
    hot: true,
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/, // 匹配以 jsx 或 js 为结尾的文件
        use: {
          loader: 'babel-loader', // 用 babel-loader 处理以上被匹配上的文件
        },
        exclude: /node_modules/, // 不包括 node_modules 里的文件
      },
      {
        test: /\.(less|css)$/,
        // 同一个文件类型使用多个 loader 用一个数组包裹即可
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]', // 指定 css 的类名格式
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          name: 'img/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  plugins: [
    new ProgressBarPlugin({
      format: 'build [:bar] :percent (:elapsed seconds)',
      clear: false,
      width: 60,
    }),
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin(({
      template: path.join(__dirname, 'index.html'), // new 一个这个插件的实例，并传入相关的参数
    })),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanWebpackPlugin({
      dry: false,
      verbose: true,
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '/app/assets/images'),
        to: path.join(__dirname, '/build'),
        ignore: ['.*'],
      },
    ]),
  ],
  resolve: {
    extensions: ['.css', '.js', '.vue', '.scss', '.json'],
    alias: {
      '@': resolve('app'),
      images: path.resolve(__dirname, 'app/assets/images'),
      styles: path.resolve(__dirname, 'app/assets/styles/'),
    },
  },
  externals: {
    jquery: 'jQuery',
  },
}
