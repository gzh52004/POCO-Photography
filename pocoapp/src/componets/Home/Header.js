import React from 'react'
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import '../../assets/css/Home/Header.css';
import home from '../../assets/data/HomeData/list/home.png';
import works from '../../assets/data/HomeData/list/works.png';
import photosquare from '../../assets/data/HomeData/list/photosquare.png';
import skills from '../../assets/data/HomeData/list/skills.png';
import talks from '../../assets/data/HomeData/list/talks.png';
import limit from '../../assets/data/HomeData/list/limit.png';
import verified from '../../assets/data/HomeData/list/verified.png';
import download from '../../assets/data/HomeData/list/download.png';
import go from '../../assets/data/HomeData/list/go.png';

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
        <li>
          <a href='/'>
            <img src={home} />
            首页
          </a>
        </li>
        <li>
          <a href='#/works'>
            <img src={works} />
            作品
          </a>
        </li>
        <li>
          <a href='#/imagesquare'>
            <img src={photosquare} />
            图片广场
          </a>
        </li>
        <li>
          <a href='#/photographytechnique'>
            <img src={skills} />
            摄影技巧
          </a>
        </li>
        <li>
          <a href='#/talks'>
            <img src={talks} />
            对话
          </a>
        </li>
        <li>
          <a href='#/limitphotography'>
            <img src={limit} />
            极限摄影
          </a>
        </li>
        <li>
          <a href='#/identification'>
            <img src={verified} />
            POCO认证
          </a>
        </li>
      </ul>
      <div className="listfooter">
        <a href='https://www.poco.cn/app/photo'>
          <img src={download} />
          <img className='go-icon' src={go} />
        </a>
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