import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/store';
import Home from './pages/home/home'
import { Row, Col } from 'antd';
import Header from './components/header';
import Footer from './components/footer'
import NavLeft from './components/navleft';
import './style/common.less'
class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter basename='/'>
          <Row className='container'>
            <Col span="4" className='nav-left'>
              <NavLeft/>
            </Col>
            <Col span="20" className="main">
              <Header/>
              <Row className="content">
                  <Route path='/' exact component={Home}></Route>
              </Row>
              <Footer/>
            </Col>
          </Row>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
