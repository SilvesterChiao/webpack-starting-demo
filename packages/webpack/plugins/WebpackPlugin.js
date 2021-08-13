const jf = require('jscodeshift')

const code = `
import React from 'react';
import { Button } from 'antd';
`

const root = jf(code)

function removeConsole(value) {
    return jf(value)
        .find(jf.ExpressionStatement, { expression: { callee: { object: { name: 'console' } } } })
        // .forEach(path => {
        //   jf(path).replaceWith('')
        // })
        .replaceWith(() => '')
        // .replaceWith(p => jf.identifier(p.node.name.split('').reverse().join('')))
        .toSource()
}

class WebpackPlugin {
    constructor(options) {
        this.options = options
    }

    apply(compiler) {
        // 去除注释正则

        compiler.hooks.emit.tap('RemoveComment', (compilation) => {
            // 遍历构建产物，.assets中包含构建产物的文件名
            Object.keys(compilation.assets).forEach((item) => {
                // .source()是获取构建产物的文本
                let content = compilation.assets[item].source()
                console.log(item)
                if (item === 'main.js') {
                    // console.log(jf(content));
                    content = removeConsole(content)
                }

                // 更新构建产物对象
                compilation.assets[item] = {
                    source: () => content,
                    size: () => content.length,
                }
            })
        })

        compiler.hooks.done.tap('MyWebpackPlugin', (stats) => {
            console.log(this.options)
            // console.log(stats)
            root.find(jf.ImportDeclaration, { source: { value: 'antd' } }).forEach((path) => {
                console.log(`webpackPlugin: ${path.node.source.value}`)
            })
        })
    }
}

module.exports = WebpackPlugin
