// Greeter.js
import { hot } from 'react-hot-loader/root'
import React, { Component} from "react"
import Stack from 'scripts/Stack'
import styles from './Greeter.less'
const config = require('./config.json')

class Greeter extends Component{
  render(){
    const stack = new Stack();
    stack.push('abc')
    stack.isEmpty()
    stack.peek()
    console.log(stack)
    console.log(stack.items)
    return(
      <div className={styles.root}>
        <div>12343526</div>
        { config.greetText }
      </div>
    );
  }
}

export default hot(Greeter);
