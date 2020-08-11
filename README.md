# 前端工程化工具

> 前端项目逐渐复杂

- 基础工具: vscode git npm
- 语法检查/代码格式化: editorconfig eslint prettier
- 项目构建: webpack/gulp postcss babel
- 数据服务: mock

## webpack

[了解更多](/docs/webpack.md)

## babel

[了解更多](/docs/babel.md)

## eslint

[了解更多](/docs/eslint.md)

## prettier

[了解更多](/docs/prettier.md)

## 目录结构

.  
|---- .babelrc: babel 配置  
|---- .eslintrc.js: eslint 配置  
|---- .prettierrc: prettier 配置  
|---- postcss.config.js: postcss 配置  
|---- webpack.**.config.js: webpack 配置文件  
|---- docs: 文档  
|---- babel: ES6 源码  
|---- babel-out: babel 输出目录  
|---- app: 源码  
|---- build: 打包目录  

## 脚本

-   npm run webpack：webpack 打包
-   npm run dev：development 模式打包
-   npm run server：webpack-dev-server 启动
-   npm run build：production 模式打包
-   npm run babel：编译 es6
-   npm run lint: 语法检查
-   npm run lint-fix: 语法检查并 fix
-   npm run prettier：使用 prettier 格式化
