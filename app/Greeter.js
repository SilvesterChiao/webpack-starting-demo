// Greeter.js
import React, { Component} from "react"
const config = require('./config.json')
import styles from './Greeter.less'

console.log(styles)

class Greeter extends Component{
  render(){
    return(
      <div className={styles.root}>
        <div>123456</div>
        { config.greetText }
      </div>
    );
  }
}

export default Greeter;
