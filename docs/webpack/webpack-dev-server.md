# webpack-dev-server

webpack-dev-server 是独立于 webpack 之外的一个 npm 包, 它基于 webpack-dev-middleware, 为项目提供开发环境的搭建

## 安装

在 package.json 中添加如下字段

```javascript
scripts: {
    "dev": "webpack-dev-server --color --progress --hot"
}
```

```bash
# 安装 webpack-dev-server
npm install --save-dev webpack-dev-server
# 启动服务器
npm run dev
```

## 参数

读取 webpack.config.js 中的 devServer 字段

- color: 仅用于 CLI, 开启命令行着色
- progress: 仅用于 CLI, 打包进度
- info: 仅用于 CLI
- stdin: 仅用于 CLI
- contentBase: 目录
- host: 
- port: 端口
- historyApiFallback: 不跳转
- inline: 开始实时刷新
- hot: 开启热更新
- noInfo: 
- proxy: 代理
- open: 自动打开浏览器
- after
- allowedHosts
- before
- bonjour
- clientLogLevel
- compress: 启用 gzip 压缩
- disableHostCheck
- filename
- headers
- hotOnly
- https
- index
- lazy
- openPage
- overlay
- pfx
- pfxPassphrase
- public
- publicPath
- quiet
- setup
- socket
- staticOptions
- stats
- useLocalIp
- watchContentBase
- watchOptions

## cross-env

cross-env 是设置环境变量的工具

```bash
# 安装
npm install --save-dev cross-env
```

## 参考文档

1. [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
1. [开发中 Server(devServer)](https://www.webpackjs.com/configuration/dev-server/)
1. [开发服务器(DevServer)](https://webpack.docschina.org/configuration/dev-server/)
1. [【webpack】webpack-dev-server生猛上手——让我们来搭一个webpack的微服务器吧！](https://www.cnblogs.com/penghuwan/p/6941616.html)
1. [webpack-dev-server使用方法，看完还不会的来找我~](https://segmentfault.com/a/1190000006670084)
1. [webpack-dev-server的配置和使用](https://juejin.im/post/6844903860423622664)
1. [十五: 开发模式与webpack-dev-server | 心谭博客](https://xin-tan.com/passages/2018-10-19-webpack-dev-server/)
1. [你不知道的webpack和webpack-dev-server高级玩法](https://www.imooc.com/article/21713)
