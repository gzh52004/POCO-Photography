import React from 'react'
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import '../../assets/css/Home/Header.css';
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
        <li><a href='/'>首页</a></li>
        <li><a href='#/works'>作品</a></li>
        <li><a href='#/imagesquare'>图片广场</a></li>
        <li><a href='#/photographytechnique'>摄影技巧</a></li>
        <li><a href='#/talks'>对话</a></li>
        <li><a href='#/limitphotography'>极限摄影</a></li>
        <li><a href='#/identification'>POCO认证</a></li>
      </ul>
      <div className="listfooter">
        <span className="listfooterImg"></span>
        <span>&gt;</span>
        </div>
    </List>);

    // console.log('this.path=',this.path);

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
       
      </Drawer>
    </div>);
    
  }
}

export default App1;