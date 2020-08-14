<!--
 * @Author: SilvesterChiao
 * @Date: 2020-05-11 14:23:40
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-08-14 11:21:48
 -->

# Babel 插件

plugins 和 presets 的执行顺序

- Plugin 在 Preset 之前执行
- Plugin 从前向后执行
- Preset 从后向前执行

各插件及用途

- ES3(3)
    - member-expression-literals: @babel/plugin-transform-member-expression-literals
    - property-literals: @babel/plugin-transform-property-literals
    - reserved-words: @babel/plugin-transform-reserved-words
- ES5(1)
    - property-mutators: @babel/plugin-transform-property-mutators
- ES2015(21)(babel-preset-es2015)
    - arrow-functions: @babel/plugin-transform-arrow-functions
    - block-scoped-functions: @babel/plugin-transform-block-scoped-functions
    - block-scoping: @babel/plugin-transform-block-scoping
    - classes: @babel/plugin-transform-classes
    - computed-properties: @babel/plugin-transform-computed-properties
    - destructuring: @babel/plugin-transform-destructuring
    - duplicate-keys: @babel/plugin-transform-duplicate-keys
    - for-of: @babel/plugin-transform-for-of
    - function-name: @babel/plugin-transform-function-name
    - instanceof: @babel/plugin-transform-instanceof
    - literals: @babel/plugin-transform-literals
    - new-target: @babel/plugin-transform-new-target
    - object-super: @babel/plugin-transform-object-super
    - parameters: @babel/plugin-transform-parameters
    - shorthand-properties: @babel/plugin-transform-shorthand-properties
    - spread: @babel/plugin-transform-spread
    - sticky-regex: @babel/plugin-transform-sticky-regex
    - template-literals: @babel/plugin-transform-template-literals
    - typeof-symbol: @babel/plugin-transform-typeof-symbol
    - unicode-escapes: @babel/plugin-transform-unicode-escapes
    - unicode-regex: @babel/plugin-transform-unicode-regex
- ES2016(1)
    - exponentiation-operator: @babel/plugin-transform-exponentiation-operator
- ES2017(1)
    - async-to-generator: @babel/plugin-transform-async-to-generator
- ES2018(6)
    - async-generator-functions: @babel/plugin-proposal-async-generator-functions
    - dotall-regex: @babel/plugin-transform-dotall-regex
    - named-capturing-groups-regex: @babel/plugin-transform-named-capturing-groups-regex
    - object-rest-spread: @babel/plugin-proposal-object-rest-spread
    - optional-catch-binding: @babel/plugin-proposal-optional-catch-binding
    - unicode-property-regex: @babel/plugin-proposal-unicode-property-regex
- Modules(4): 模块相关
    - modules-amd: @babel/plugin-transform-modules-amd
    - modules-commonjs: @babel/plugin-transform-modules-commonjs
    - modules-systemjs: @babel/plugin-transform-modules-systemjs
    - modules-umd: @babel/plugin-transform-modules-umd
- Experimental(16): 实验性的
    - class-properties: @babel/plugin-proposal-class-properties
    - decorators: @babel/plugin-proposal-class-properties
    - do-expressions: @babel/plugin-proposal-do-expressions
    - export-default-from: @babel/plugin-proposal-export-default-from
    - export-namespace-from: @babel/plugin-proposal-export-namespace-from
    - function-bind: @babel/plugin-proposal-function-bind
    - function-sent: @babel/plugin-proposal-function-sent
    - logical-assignment-operators: @babel/plugin-proposal-logical-assignment-operators
    - nullish-coalescing-operator: @babel/plugin-proposal-nullish-coalescing-operator
    - numeric-separator: @babel/plugin-proposal-numeric-separator
    - optional-chaining: @babel/plugin-proposal-optional-chaining
    - partial-application: @babel/plugin-proposal-partial-application
    - pipeline-operator: @babel/plugin-proposal-pipeline-operator
    - private-methods: @babel/plugin-proposal-private-methods
    - throw-expressions: @babel/plugin-proposal-throw-expressions
    - private-property-in-object: @babel/plugin-proposal-private-property-in-object
- Minification(24)
    - inline-consecutive-adds: @babel/plugin-transform-inline-consecutive-adds
    - inline-environment-variables: babel-plugin-transform-inline-environment-variables
    - member-expression-literals: @babel/plugin-transform-member-expression-literals
    - merge-sibling-variables: babel-plugin-transform-merge-sibling-variables
    - minify-booleans: babel-plugin-transform-minify-booleans
    - minify-builtins: babel-plugin-minify-builtins
    - minify-constant-folding: babel-plugin-minify-constant-folding
    - minify-dead-code-elimination: babel-plugin-minify-dead-code-elimination
    - minify-flip-comparisons: babel-plugin-minify-flip-comparisons
    - minify-guarded-expressions: babel-plugin-minify-guarded-expressions
    - minify-infinity: babel-plugin-minify-infinity
    - minify-mangle-names: babel-plugin-minify-mangle-names
    - minify-numeric-literals: babel-plugin-minify-numeric-literals
    - minify-replace: babel-plugin-minify-replace
    - minify-simplify: babel-plugin-minify-simplify
    - minify-type-constructors: babel-plugin-minify-type-constructors
    - node-env-inline: babel-plugin-transform-node-env-inline
    - property-literals: @babel/plugin-transform-property-literals
    - regexp-constructors: babel-plugin-transform-regexp-constructors
    - remove-console: babel-plugin-transform-remove-console
    - remove-debugger: babel-plugin-transform-remove-debugger
    - remove-undefined: babel-plugin-transform-remove-undefined
    - simplify-comparison-operators: babel-plugin-transform-simplify-comparison-operators
    - undefined-to-void: babel-plugin-transform-undefined-to-void
- React(7)
    - react-constant-elements: @babel/plugin-transform-react-constant-elements
    - react-display-name: @babel/plugin-transform-react-display-name
    - react-inline-elements: @babel/plugin-transform-react-inline-elements
    - react-jsx: @babel/plugin-transform-react-jsx
    - react-jsx-compat: @babel/plugin-transform-react-jsx-compat
    - react-jsx-self: @babel/plugin-transform-react-jsx-self
    - react-jsx-source: @babel/plugin-transform-react-jsx-source
- Other(10)
    - external-helpers: @babel/plugin-external-helpers
    - flow-strip-types: @babel/plugin-transform-flow-strip-types
    - jscript: @babel/plugin-transform-jscript
    - object-assign: @babel/plugin-transform-object-assign
    - object-set-prototype-of-to-assign: @babel/plugin-transform-object-set-prototype-of-to-assign
    - proto-to-assign: @babel/plugin-transform-proto-to-assign
    - regenerator: @babel/plugin-transform-regenerator
    - runtime: @babel/plugin-transform-runtime
    - strict-mode: @babel/plugin-transform-strict-mode
    - typescript: @babel/plugin-transform-typescript

## 第三方插件

- [transform-decorators-legacy](https://www.npmjs.com/package/babel-plugin-transform-decorators-legacy): 装饰器
- [transform-class-properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties): 静态属性
- [transform-object-rest-spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread): 解构赋值及对象的扩展属性
- [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import): 模块化导入插件

## 参考链接

1. [Babel 插件](https://www.babeljs.cn/docs/plugins)
