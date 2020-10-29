import React from 'react'
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import '../../assets/css/Header.css';
class App1 extends React.Component {
  state = {
    open: false,
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  render() {
    // fix in codepen
    const sidebar =( <List>
      <div className="texttop">
        <span className="user"></span>
        <span className="usertext">登录/注册</span>
      </div>
      <ul>
        <li>首页</li>
        <li>作品</li>
        <li>图片广场</li>
        <li>摄影技巧</li>
        <li>对话</li>
        <li>极限摄影</li>
        <li>POCO认证</li>
      </ul>
      <div className="listfooter">
        <span className="listfooterImg"></span>
        <span>&gt;</span>
        </div>

    </List>);

    return (<div>
      <NavBar style={{backgroundColor:"#000",fontSize:".18rem"}} icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>POCO摄影</NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar} 
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
       rrr
      </Drawer>
    </div>);
    
  }
}

export default App1;