// Greeter.js
import { hot } from 'react-hot-loader/root'
import React, { Component} from "react"
const config = require('./config.json')
import styles from './Greeter.less'

class Greeter extends Component{
  render(){
    return(
      <div className={styles.root}>
        <div>12343526</div>
        { config.greetText }
      </div>
    );
  }
}

export default hot(Greeter);
