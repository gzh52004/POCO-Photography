import React, { useReducer } from 'react';
import './assets/css/App.css';
import { Form, Layout, Menu,Button} from 'antd';
import {Route,Switch,withRouter} from 'react-router-dom';

import User from './views/User';
import List from './views/List';
import Index from './views/index';
import Login from './views/Login';
import Reg from './views/Reg';

const { Header, Sider, Content, Footer } = Layout;

function App(props) {
let current="/"
let addMenu=({key})=>{
   console.log(key)
   props.history.push(key)
   current=key
 }

 function goto(path){
  props.history.push(path)
 }
  return (
    <div className="App">
    <Layout>
        <Sider trigger={null}>
          <div className="logo" style={{height:60,lineHeight:4}}>
            <React.Fragment>
            <Button type="link" onClick={goto.bind(null,'/Reg')} >注册</Button>
            <Button type="link" onClick={goto.bind(null,'/Login')}>登录</Button>
            {/* <Button type="link" onClick={dl}>登录</Button> */}
            </React.Fragment>
          </div>
          <Menu theme="dark" mode="inline" selectedkeys={[current]}  onClick={addMenu}>
          <Menu.Item key="/index">
              首页
            </Menu.Item>
            <Menu.Item key="User">
              用户管理
            </Menu.Item>
            <Menu.Item key="List">
              数据管理
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                <h1 style={{color:"#ccc",fontSize:22,}}>POCO-后台</h1>
            {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })} */}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight:550,  
            }}
          >
        <Switch>
        <Route path={'/index'} exact component={Index}></Route>
        <Route path={'/User'} component={User}></Route>
        <Route path={'/List'} component={List}></Route>
        <Route path={'/Login'} component={Login}></Route>
        <Route path={'/Reg'} component={Reg}></Route>
        </Switch>
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UEDE</Footer>
    </div>
  );
}

export default withRouter(App);
