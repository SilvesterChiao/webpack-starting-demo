import Mustache from 'mustache'
import { sex, echo } from './object.es6'

function component () {
    const element = document.createElement('div')

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    return element
}

// document.body.appendChild(component());

echo(sex)

console.log(Mustache)
