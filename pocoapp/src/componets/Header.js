import React from 'react'
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import '../assets/css/Header.css';
class App1 extends React.Component {
  state = {
    open: true,
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  render() {
    // fix in codepen
    const sidebar = <List>
      <List.Item>
        <div>
          登录/注册
        </div>
      </List.Item>
      <List.Item>首页</List.Item>
      <List.Item>作品</List.Item>
      <List.Item>图片广场</List.Item>
      <List.Item>摄影技巧</List.Item>
      <List.Item>对话</List.Item>
      <List.Item>极限摄影</List.Item>
      <List.Item>POCO认证</List.Item>
    </List>;

    return (<div>
      <NavBar style={{backgroundColor:"#000",fontSize:".18rem"}} icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>POCO摄影</NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: .42 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
        dragToggleDistance='.8rem'
      >
       rrr
      </Drawer>
    </div>);
    
  }
}

export default App1;