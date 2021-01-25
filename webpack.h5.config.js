/*
 * @Author: SilvesterChiao
 * @Date: 2020-07-20 14:17:02
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-10-06 09:55:29
 */

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const lessToJs = require('less-vars-to-js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const HappyPack = require('happypack')

const pkgJson = require('./package')

const configObj = pkgJson.config[`${process.env.ENV}`]
const { publicPath } = configObj
const { CDN_BASE } = configObj
console.log('开始打包 ENV:', process.env.ENV)

// 转换 less 变量,用于主题
const themer = lessToJs(fs.readFileSync(path.join(__dirname, './src/themes/base.less'), 'utf8'));

Object.keys(themer).map((k, i) => {
    themer[k] = JSON.stringify(themer[k])
})
const lessVars = Object.assign(themer, { '@CDN_BASE': JSON.stringify(CDN_BASE) });

process.noDeprecation = true
const plugins = [
    new ProgressBarPlugin(),
    new HappyPack({
        id: 'jsx',
        threads: 4,
        cache: true,
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: [
                        [
                            'latest',
                            {
                                loose: true,
                                modules: false,
                            },
                        ],
                        'react',
                        'es2015',
                        'stage-0',
                    ],
                    plugins: [
                        'transform-decorators-legacy',
                        'transform-class-properties',
                        'transform-object-rest-spread',
                        ['import', { libraryName: 'antd', style: false }],
                    ],
                },
            },
        ],
    }),
    new HappyPack({
        id: 'less',
        threads: 4,
        loaders: [
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[local]___[hash:base64:5]',
                },
            },
            'postcss-loader',
            {
                loader: 'less-loader',
                options: {
                    modifyVars: lessVars,
                    javascriptEnabled: true,
                },
            },
        ],
    }),
    new CopyWebpackPlugin([
        { from: './dll', to: 'dll' },
        { from: path.resolve(__dirname, './src/assets'), to: 'assets', ignore: ['.*'] },
    ]),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        favicon: 'src/assets/favicon.ico',
        showErrors: true,
        CDN_BASE,
        publicPath,
        W_ENV: process.env.ENV,
        hash: true,
        template: path.join(__dirname, 'src/index.html'),
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'prod:dev'),
        },
        ENV: JSON.stringify(process.env.ENV || 'dev'),
        CDN_BASE: JSON.stringify(CDN_BASE || ''),
        BACKEND_BASE: JSON.stringify(configObj.BACKEND_BASE),
        publicPath: JSON.stringify(configObj.publicPath),
    }),
    // 提升模块化的性能
    new webpack.optimize.ModuleConcatenationPlugin(),
]

if (`${process.env.ENV}` !== 'loc') {
    // const releasePath = path.resolve(__dirname, "../../resources/static/module");
    const releasePath = path.resolve(__dirname, 'dist');
    plugins.push(
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
            filename: '[name].js',
        }),
        // 压缩插件
        new ParallelUglifyPlugin({
            cacheDir: '.cache/',
            uglifyJS: {
                output: {
                    comments: false, // 去掉注释
                },
                compress: {
                    warnings: false,
                },
            },
        }),
    )
} else {
    plugins.push(
        new OpenBrowserPlugin({ url: 'http://localhost:3008' }),
        new ExtractTextPlugin('[name].css?[hash]'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll/manifest.json'),
        }),
    )
}

module.exports = {
    entry: {
        // 'babel-polyfill': 'babel-polyfill',
        app: [
            './src/index.js',
        ],
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'dist'),
        publicPath,
        chunkFilename: '[name].[chunkhash:8].js',
    },
    devtool: `${process.env.ENV}` !== 'loc' ? false : 'cheap-module-source-map',
    plugins,
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            widget: path.join(__dirname, 'src/widget'),
            router: path.join(__dirname, 'src/router'),
            utils: path.join(__dirname, 'src/utils'),
            assets: path.join(__dirname, 'src/assets'),
            themes: path.join(__dirname, 'src/themes'),
            config: path.join(__dirname, 'src/config'),
        },
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.less', '.css'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'happypack/loader?id=jsx',
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules)/,
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'happypack/loader?id=less',
                }),
            },
            {
                test: /\.(xml|bpmn)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1,
                    },
                }],
            },
            {
                test: /\.(png|jpg|gif|md)$/,
                use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]'],
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=images/svg+xml'],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
            {
                test: /\.json$/,
                use: 'json-loader',
            },
        ],
    },
    devServer: { // webpack-dev-server配置热更新以及跨域
        historyApiFallback: true, // 不跳转
        noInfo: true,
        inline: true, // 实时刷新
        port: '3008', // 不指定固定端口
        host: '0.0.0.0',
        hot: true,
        proxy: process.env.ENV === 'loc' ? {
            '/api-loc': {
                target: 'https://api',
                changeOrigin: true,
            },
        } : {},
    },
}
