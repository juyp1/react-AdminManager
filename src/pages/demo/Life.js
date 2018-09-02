import React, { Component } from 'react';
import Child from './Child';
import { Button } from 'antd'

class Life extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() { 
    return (
      <div>
        <p>React 生命周期介绍</p>
        <Button  onClick={this.handleAdd}>点击一下</Button>
        {/* <p style={{padding:10,color:'red'}}>{this.state.count}</p> */}
        <Child count={ this.state.count }/>
      </div>
    )
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count+1
    })
  }
}

export default Life