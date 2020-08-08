const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

console.log(Object.keys(CleanWebpackPlugin))

module.exports = {
  entry: path.join(__dirname, '/app/main.js'), // 入口文件
  output: {
    path: path.join(__dirname, '/public'), // 存放打包后的文件路径
    filename: 'bundle-[hash].js', // 打包后的文件名
  },
  devServer: {
    contentBase: './public', // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true, // 开始实时刷新
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
        test: /\.css$/,
        // 同一个文件类型使用多个 loader 用一个数组包裹即可
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]', // 指定 css 的类名格式
              },
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin(({
      template: path.join(__dirname, '/app/index.tmpl.html'), // new 一个这个插件的实例，并传入相关的参数
    })),
    new webpack.HotModuleReplacementPlugin(), // 热加载
    // new ExtractTextPlugin('style.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanWebpackPlugin(),
  ],
}
