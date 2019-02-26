import React, { Component } from 'react'
import config from './config'
import styles from './Greeter'
import 'styles/index'
import coffee from 'images/coffee1.jpg'

class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
                <h3>{config.greetText}</h3>
                <img src={'~images/coffee1.jpg'} />
            </div>
        )
    }
}

export default Greeter
