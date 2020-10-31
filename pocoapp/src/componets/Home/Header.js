import React from 'react'
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import '../../assets/css/Home/Header.css';
class Header extends React.Component {
  state = {
    open: false,
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
          登录、注册
        </div>
      
          <ul>
            <li>首页</li>
            <li>作品</li>
            <li>图片广场</li>
            <li>摄影技巧</li>
            <li>对话</li>
            <li>极限摄影</li>
            <li>POCO认证 </li>
          </ul>
        
     </List.Item>
    </List>

    return (<div>
      <NavBar style={{backgroundColor:"#000",fontSize:".14rem"}} icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>POCO摄影</NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
       抽屉
       抽屉
       抽屉
       抽屉
       抽屉
       抽屉
       抽屉
      </Drawer>
    </div>);
    
  }
}

export default Header;