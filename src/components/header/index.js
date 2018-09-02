import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Util from '../../utils/utils';
import axios from '../../axios'; 
class Header extends Component {
  componentWillMount() {
    this.setState({
      userName: '小盘子'
    })
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000);
    this.getWeatherApiData();
  }
  getWeatherApiData() {
    let city = '北京';
    let options = {
      url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }
    axios.jsonp(options).then(res=>{
      console.log(res.results[0].weather_data[0])
      let result = res.results[0].weather_data[0]
      this.setState({
        dayPictureUrl: result.dayPictureUrl,
        weather: result.weather
      })
    })
  }
  render(){
    const { userName, sysTime,dayPictureUrl  ,weather} = this.state;
    return(
      <div className='header'>
        <Row className='header-top'>
          <Col span="24">
            <span>欢迎,{ userName }</span>
            <a href='#'>退出</a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
        <Col span="4" className='breadcrumb-title'>
          首页
        </Col>
        <Col span="20" className='weather'>
        <span className='date' >{sysTime} </span>
        <span className='weather-detail'>
          <img src={ dayPictureUrl } className='weather-img'/>
          {weather}
        </span>
        </Col>
        </Row>
      </div>
    )
  }
}
export default Header;