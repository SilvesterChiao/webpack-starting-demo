<!--
 * @Author: SilvesterChiao
 * @Date: 2020-08-07 17:04:48
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-08-10 11:12:28
--> 

# webpack 配置

1. entry

2. output

- path
- filename

3. mode

可取的值: development

4. dev-tool

可取的值: eval-source-map, source-map, cheap-module-source-map, cheap-module-eval-source-map

5. devServer

- contentBase: 目录
- port: 端口
- historyApiFallback: 不跳转
- inline: 开始实时刷新
- hot: 

6. module

编译 ES6, 编译 Less/Sass, 加载图片/字体/SVG/xml/json

- rules: 配置 loader
    - test
    - use: 单个 loader 用对象格式, 多个用数组格式
        - loader: loader 名
        - options: 配置, 具体字段参考
    - exclude: 排除目录
    - include: 包含目录

7. plugins

配置插件, 数组, new 插件实例, [常用插件](./webpack-plugins)

8. resolve

- extensions: 默认后缀, 引入时可以省略
- alias: 别名, 引入时可以使用的目录简写

9. externals: 外部扩展

- jquery: 'jQuery': 不会把 jquery 打包

## 参考文档

1. []()
