import React from 'react'
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
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
      const sidebar = (<List>
          <div style={{width:300,backgroundColor:"#666",height:50}}>登录\注册</div>

      </List>);
  
      return (<div>
        <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>POCO摄影</NavBar>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebar={sidebar}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >
          Click upper-left corner
        </Drawer>
      </div>);
    }
}
export default App1