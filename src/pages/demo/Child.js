import React, { Component } from 'react';
class Child extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() { 
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
     return true;
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }
  componentWillUpdate(){
    console.log('will update');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('did update');
  }
  componentWillUnmount() {
    console.log('will unmount');
  }
  render(){
    const { count } = this.props;
    return (
      <div>
        计算的数是:{ count }
      </div>
    )
  }
}

export default  Child