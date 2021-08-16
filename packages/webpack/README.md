# webpack

> 本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

最新版本: 5.0.0  
使用版本: 4.23.1

## 目录结构

```
.  
|---- app: 源码
|---- babel: ES6 源码
|---- babel-out: babel 输出目录
|---- build: 打包目录
|---- docs: 文档
|---- loaders: 自定义 loader
|---- plugins: 自定义 plugins
|---- react: react 项目源码
|---- vue: vue 项目源码
|---- .babelrc: babel 配置
|---- .editorconfig: editorconfig 配置
|---- .eslintignore.js: eslint ignore文件
|---- .eslintrc.js: eslint 配置
|---- .prettierrc: prettier 配置
|---- postcss.config.js: postcss 配置
|---- webpack.**.config.js: webpack 配置文件
```

## Webpack 入门

### Webpack 简介

### 安装

全局安装

```bash
npm install webpack -g
```

本地安装

```bash
npm install webpack --save-dev
```

## 基本用法

``` bash
webpack hello.js hello.bundle.js
```

结果如下图

- Hash: 本次打包 hash 值
- Version: webpack 版本
- Time: 本次打包所用时间
- Built at: 本次打包日期

| Asset | Size | Chunks | Chunks Name |
| :----: | :----: | :----: | :----: |
| 生成文件 | 文件体积 | 分块 | 分块名称 |

![webpack](../assets/images/webpack.png)

## cli

> CLI 中传入的任何参数会在配置文件中映射为对应的参数。

使用 webpack 命令打包资源

```bash
webpack <entry> [<entry>] -o <output>
```

常用参数

- --help, -h: 列出命令行所有可用的配置选项
- --config: 指定配置文件路径
- --json > stats.json: 已 JSON 格式输出 webpack 的运行结果并输出到 stats.json 文件, 用于分析打包结果
- watch: 观察文件系统的变化
- progress: 打印出编译进度的百分比值
- display-modules: 在输出中显示所有模块，包括被排除的模块
- display-reasons: 显示模块包含在输出中的原因

[查看所有参数](https://www.webpackjs.com/api/cli/)

## 核心概念

entry

output

loader

plugins

## 配置

默认配置文件: webpack.config.js  
指定配置文件: webpack --config webpack.config.js  
[了解更多](./webpack-config)

- entry
- output
  - path
  - filename
- module
  - rules
- plugins
- devtool
- devServer
  - contentBase
  - port
  - historyApiFallback
  - inline
- resolve
  - extensions
  - alias
- externals
- node

## 常用 loader

1. babel-loader
1. style-loader
1. css-loader
1. postcss-loader
1. less-loader
1. url-loader
1. file-loader
1. json-loader

## 常用插件

1. [webpack.DefinePlugin](./webpack-plugins.md#define-plugin): 设置不同环境的全局变量
1. [webpack.optimize.ModuleConcatenationPlugin](./webpack-plugins.md#module-concatenation-plugin): 提升模块化性能
1. [webpack.optimize.CommonsChunkPlugin](./webpack-plugins.md#commons-chunk-plugin): 处理公共模块
1. [webpack.optimize.OccurrenceOrderPlugin](./webpack-plugins.md#occurrence-order-plugin): 处理公共模块
1. [webpack.HotModuleReplacementPlugin](./webpack-plugins.md#hot-module-replacement-plugin): 热替换, 开发环境启用
1. [webpack.DllReferencePlugin](./webpack-plugins.md#dll-reference-plugin): 仅打包非第三方库代码
1. [webpack.BannerPlugin](./webpack-plugins.md#banner-plugin): 在打包文件头部生成 Banner
1. [html-webpack-plugin](./webpack-plugins.md#html-webpack-plugin): 生成 HTML 文件
1. [copy-webpack-plugin](./webpack-plugins.md#copy-webpack-plugin): 拷贝文件或目录
1. [clean-webpack-plugin](./webpack-plugins.md#clean-webpack-plugin): 清除文件或目录
1. [extract-text-webpack-plugin](./webpack-plugins.md#extract-text-webpack-plugin): 提取 CSS 到 `.css` 文件中
1. [mini-css-extract-plugin](./webpack-plugins.md#mini-css-extract-plugin): 提取 CSS 到 `.css` 文件中
1. [open-browser-webpack-plugin](./webpack-plugins.md#open-browser-webpack-plugin): 打开浏览器, 开发环境启用
1. [progress-bar-webpack-plugin](./webpack-plugins.md#progress-bar-webpack-plugin): 打包时显示进度条
1. [HappyPack](./webpack-plugins.md#happy-pack): 多进程处理打包过程
1. [webpack-parallel-uglify-plugin](./webpack-plugins.md#webpack-parallel-uglify-plugin): 多进程压缩代码
1. [uglifyjs-webpack-plugin](./webpack-plugins.md#uglifyjs-webpack-plugin): 

## 脚本

1. webpack
1. [webpack-dev-server](./webpack-dev-server)

## 其他

less-vars-to-js

webpack-merge

webpack-dev-middleware, webpack-hot-middleware

[使用 webpack 打包 React 项目](./webpack-react)

## 常见问题

1. webpack 常见任务
1. webpack 优化, 打包速度和大小
    - HappyPack 开启多进程 loader 转换
    - ParallelUglifyPlugin 多进程压缩 JS 文件
    - 热替换
    - 压缩文件
    - 剔除无用代码
    - CDN 加速静态资源加载
    - 分隔代码, 按需加载
    - 使用输出分析工具
1. 如何打包多页面
1. 如何实现代码分隔
1. 如何实现热更新
1. 如何构建不同环境下的打包配置
    - 开发环境 dev
    - 测试环境 test
    - 验收环境 stage
    - 生产环境 prod
1. 如何在 nodejs 中使用 webpack
1. 执行 npm run server, 控制台不断打印 client?ca1d:174 Invalid Host/Origin header
    ![Invalid Host/Origin header](../assets/images/invalid_host.png)
    配置中设置 devServer.disableHostCheck 为 true

## 参考文档

1. [官网地址](http://webpack.github.io/)
1. [中文文档](http://www.css88.com/doc/webpack2/)
1. [webpack 中文文档](https://www.webpackjs.com/)
1. [看完你就会用 webpack 了](https://juejin.im/post/5f14f886f265da2306247f7b)
1. [webpack入门看他就够了！！](https://juejin.im/post/6844903958993960973)
1. [webpack配置（第五步：less/css篇（基础篇））](https://my.oschina.net/u/3797834/blog/1649270)
1. [【解决方案】webpack `Invalid Host/Origin header`问题](https://blog.csdn.net/u013243347/article/details/85223016)
1. [浅谈 webpack 性能优化（内附巨详细 webpack 学习笔记）](https://juejin.cn/post/6844904142675279886)
