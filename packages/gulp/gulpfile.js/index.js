const path = require('path')
const { src, dest, task, series, parallel } = require('gulp')
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

exports.build = series(
    clean,
    parallel(
        cssTranspile,
        series(jsTranspile, jsBundle)
    ),
    parallel(cssMinify, jsMinify),
    publish,
)

function copy () {
    return src(path.join(__dirname, '../src' + '/*.js'))
        .pipe(dest(path.join(__dirname, '../dist/')))
}

function concatStyle () {
    return src(path.join(__dirname, '../src/assets/styles') + '/*.scss')
        .pipe(concat('style.scss'))
        .pipe(dest(path.join(__dirname, '../dist/')))
}

// exports.build = build
// exports.build = series(transpile, bundle)
// exports.build = parallel(javascript, css)
// exports.default = series(clean, build)
exports.default = copy
exports.dev = series(copy, concatStyle)
