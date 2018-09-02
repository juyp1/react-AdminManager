import React, { Component } from 'react';
import './index.less';
import MenuConfig from '../../resoure/menuConfig.js';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
class NavLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
    }
  }
  handleClick = (e) => {
    console.log('click', e);
  }
  componentWillMount() {
    const menTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menTreeNode
    })
  } 
  // 递归菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>
    })
  }
  render() {
    return (
      <div className='content'>
        <div className='logo'>
          <img src="/assets/logo-ant.svg" />
          <h1>Imooc MS</h1>
        </div>
        <Menu theme={this.state.theme} onClick={this.handleClick} style={{ width: 256 }} mode="vertical">
          {this.state.menTreeNode}
        </Menu>
      </div>
    )
  }
}
export default NavLeft;