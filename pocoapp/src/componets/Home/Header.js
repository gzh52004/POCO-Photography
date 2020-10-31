import React from 'react'
import {Link} from 'react-router-dom';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import '../../assets/css/Home/Header.css';
import Home from '../../views/Home';
import Mine from '../../views/Mine/index.jsx';
import Talks from '../../views/Talks';
import Works from '../../views/Works';
import LimitPhotography from '../../views/LimitPhotography';
import Identification from '../../views/Identification';
import PhotographyTechnique from '../../views/PhotographyTechnique';
import ImageSquare from '../../views/ImageSquare';
class App1 extends React.Component {
  state = {
    open: false,
    menu:[
      {
        text:'我的',
        path:'/mine',
        name:'mine',
        component:Mine,
        // icon:<UserOutlined/>
      },
      {
        text:'首页',
        path:'/home',
        name:'home',
        component:Home,
        // icon:<HomeOutlined/>
      },
      {
        text:'作品',
        path:'/works',
        name:'works',
        component:Works,
        // icon:<ShoppingCartOutlined/>
      },
      {
        text:'图片广场',
        path:'/imagesquare',
        name:'imagesquare',
        component:ImageSquare,
        // icon:<ShoppingCartOutlined/>
      }
    ],

    current:'/home',
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }

  render() {
    // console.log('this.props=',this.props);
    // fix in codepen
    const sidebar =( <List>
      <div className="texttop">
        <span className="user"></span>
        <span className="usertext">登录/注册</span>
      </div>
      <ul>
        <li>
          首页
        </li>
        <li>作品</li>
        <li>
          <Link to="/imagesquare/" />
          图片广场
        </li>
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
       
      </Drawer>
    </div>);
    
  }
}

export default App1;