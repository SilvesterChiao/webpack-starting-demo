/* eslint-disable no-param-reassign */
// 1. 一个 JavaScript 命名函数
function MyWebpackPlugin(options) {
    this.options = options
}

// 2. 在插件函数的 prototype 上定义一个 'apply' 方法
MyWebpackPlugin.prototype.apply = function apply(compiler) {
    const { filename } = this.options
    // console.log(compiler)
    // 3. 指定一个挂在到 webpack 自身的事件钩子
    // compiler.plugin('webpacksEventHook', (compilation, callback) => {
    //     /* 4. 处理 webpack 内部实例的特定数据. */
    //     // console.log('This is an example plugin!!!')

    //     // 5. 功能完成后调用 webpack 提供的回调
    //     callback()
    // })
    compiler.plugin('emit', (compilation, callback) => {
        let filelist = 'In this build:\n\n'
        const files = Object.keys(compilation.assets)
        files.forEach((item) => {
            filelist += `_ ${item}\n`
        })
        compilation.assets[`${filename}.md`] = {
            source() {
                return filelist
            },
            size() {
                return filelist.length
            },
        }
        callback()
    })
}

module.exports = MyWebpackPlugin
