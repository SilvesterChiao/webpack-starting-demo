// webpack
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 打包唯一入口，已多次提及的唯一入口文件
    entry: path.join(__dirname, '/src/main.js'),
    output: {
        // 打包输入目录
        path: path.join(__dirname, '/build'),
        // 打包文件名
        filename: 'bundle-[hash].js',
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
        hot: true,
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
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
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false,
        }),
    ],
    resolve: {
        extensions: ['.css', '.js', '.vue', '.scss', '.json'],
        alias: {
            '@': resolve('src'),
            images: path.resolve(__dirname, 'src/assets/images'),
            styles: path.resolve(__dirname, 'src/assets/styles/'),
        },
    },
    externals: {
        jquery: 'jQuery',
    },
}
