// main.js
import React from 'react'
import { render } from 'react-dom'
import Greeter from './pages/Greeter/Greeter.js'
import './main.less'

// 自定义 loader
import tpl from './info.tpl'

const oApp = document.querySelector('#root')

const info = {
    name: 'Damon',
    age: 173,
    career: 'Vampire',
    hobby: 'drink',
}

oApp.innerHTML = tpl(info)

render(<Greeter />, document.getElementById('root'))
