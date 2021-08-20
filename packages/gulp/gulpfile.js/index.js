const path = require('path')
const { src, dest, task, series, parallel } = require('gulp')
const less = require('gulp-less')
const cleancss = require('gulp-clean-css')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const through2 = require('through2')
// `clear` 函数并未被导出, 因此被认为是私有任务
// 它仍然可以被用在 `series()` 组合中.
function clean (cb) {
    // body omitted
    cb()
}

// `build` 函数被导出了, 因此他是一个公开人物, 并且可以被 `gulp` 命令直接调用.
// 它也仍然可以被用在 `series()` 组合中.
function build (cb) {
    // body omitted
    cb()
}

function transpile (cb) {
    // body omitted
    cb()
}

function bundle (cb) {
    // body omitted
    cb()
}

function javascript (cb) {
    // body omitted
    cb()
}

function css (cb) {
    // body omitted
    cb()
}

function minify (cb) {
    // body omitted
    cb()
}

function livereload (cb) {
    // body omitted
    cb()
}

// if (process.env.NODE_ENV === 'production') {
//     exports.build = series(transpile, minify)
// } else {
//     exports.build = series(transpile, livereload)
// }

function cssTranspile (cb) {
    // body omitted
    cb()
}

function cssMinify (cb) {
    // body omitted
    cb()
}

function jsTranspile (cb) {
    // body omitted
    cb()
}

function jsBundle (cb) {
    // body omitted
    cb()
}

function jsMinify (cb) {
    // body omitted
    cb()
}

function publish (cb) {
    // body omitted
    cb()
}

// exports.build = series(
//     clean,
//     parallel(
//         cssTranspile,
//         series(jsTranspile, jsBundle)
//     ),
//     parallel(cssMinify, jsMinify),
//     publish,
// )

function copy () {
    return src(path.join(__dirname, '../public/*'), {
        // base: '',
    }).pipe(dest(path.join(__dirname, '../dist/')), {
        
    })
}

function concatStyle () {
    return src(path.join(__dirname, '../src/assets/styles') + '/*.scss')
        .pipe(concat('style.scss'))
        .pipe(dest(path.join(__dirname, '../dist/static/css')))
}

// 声明 gulp 任务
const style = () => {
    // 流, 就是异步操作
    return src(path.join(__dirname, '../src/assets/styles') + '/*.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest(path.join(__dirname, '../dist/static/css')))
}

// 声明脚本构建人物
const script = () => {
    // 流, 就是异步操作
    return src(path.join(__dirname, '../src') + '/*.js{,x}')
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest(path.join(__dirname, '../dist/static/js')))
}

// exports.build = build
// 串行
// exports.build = series(transpile, bundle)
// 并行
// exports.build = parallel(javascript, css)
// exports.default = series(clean, build)
module.exports = {
    default: copy,
    style,
    dev: parallel(copy, concatStyle),
    build: parallel(copy, style, script),
}