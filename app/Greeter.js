import React, { Component } from "react";
import { Button, Icon, Row, Col, Table } from 'antd';
import config from "./config"
import styles from "./Greeter"
import "styles/index"
import coffee from "images/coffee1.jpg"

class Greeter extends Component {
  render() {
    return (
      <div className="styles.root">
        <h3>{config.greetText}</h3>
        <img src={coffee} width="200px" />
      </div>
    )
  }
}

export default Greeter
