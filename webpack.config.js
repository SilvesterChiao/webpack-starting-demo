// webpack
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 打包唯一入口，已多次提及的唯一入口文件
  entry: __dirname + '/app/main.js',
  output: {
    // 打包输入目录
    path: __dirname + '/build',
    // 打包文件名
    filename: 'bundle-[hash].js'
  },
  mode: 'development',
  // devtool: 'source-map',
  // devtool: 'cheap-module-source-map',
  // devtool: 'cheap-module-eval-source-map',
  // 仅限开发环境
  devtool: 'eval-source-map',
  // 本地服务器 webpack-dev-server
  devServer: {
    contentBase: './build',
    port: 3004,
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin('build/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([
      {
        from: __dirname + '/app/assets/images',
        to: __dirname + '/build',
        ignore: ['.*']
      }
    ])
  ],
  resolve: {
    extensions: ['.css', '.js', '.vue', '.scss', '.json'],
    alias: {
      '@': resolve('app'),
      images: path.resolve(__dirname, 'app/assets/images'),
      styles: path.resolve(__dirname, 'app/assets/styles/')
    }
  },
  externals: {
    jquery: 'jQuery'
  }
}
