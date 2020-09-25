<!--
 * @Author: SilvesterChiao
 * @Date: 2020-08-07 17:04:48
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-08-27 16:44:43
--> 

# webpack 配置

## entry


entry 有3种写法

1. 单文件

``` javascript
module.exports = {
    entry: './src/scripts/main.js'
}
```

2. 数组

``` javascript
module.exports = {
    entry: ['./src/scripts/main.js', './src/scripts/a.js']
}
```

3. 对象

``` javascript
module.exports = {
    entry: {
        page1: './src/entry',
        page2: ['./src/entry1', './src/entry2']
    }
}
```

## output

- path
- filename

## mode

可取的值: development

## dev-tool

可取的值: eval-source-map, source-map, cheap-module-source-map, cheap-module-eval-source-map

## devServer

- contentBase: 目录
- port: 端口
- historyApiFallback: 不跳转
- inline: 开始实时刷新
- hot: 

## module

编译 ES6, 编译 Less/Sass, 加载图片/字体/SVG/xml/json

- rules: 配置 loader
    - test
    - use: 单个 loader 用对象格式, 多个用数组格式
        - loader: loader 名
        - options: 配置, 具体字段参考
    - exclude: 排除目录
    - include: 包含目录

## plugins

配置插件, 数组, new 插件实例, [常用插件](./webpack-plugins)

## resolve

- extensions: 默认后缀, 引入时可以省略
- alias: 别名, 引入时可以使用的目录简写

## externals: 外部扩展

- jquery: 'jQuery': 不会把 jquery 打包

## 参考文档

1. []()
