import React, { Component } from 'react';
import { Row, Col } from 'antd';
class Main extends Component {
  render(){
    return(
      <Row>
        <Col span="3">
          left
        </Col>
        <Col span="21">
        right
        </Col>
      </Row>
    )
  }
}

export default Main;