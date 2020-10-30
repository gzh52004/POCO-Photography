/**
 * 高阶组件
    * 高阶组件是一个函数
    * 高阶组件的参数为React组件
    * 高阶组件必须返回一个新的组件
 */
import React from 'react';
import {Redirect} from 'react-router-dom';

export function withUser(MyComponent){
    // return class OuterComponent extends React.Component{
        // constructor(props){
        //     super(props);
        //     this.state = {
        //         userInfo:{}
        //     }
        // }
        // componentDidMount(){
        //     let userInfo = localStorage.getItem('userInfo');
        //     try{
        //         userInfo = JSON.parse(userInfo)
        //     }catch(err){
        //         userInfo = {}
        //     }

        //     this.setState({
        //         userInfo
        //     })
        // }
        // render(){
        //     return <MyComponent {...this.props} userInfo={this.state.userInfo}>
        // }
    // }
    return function OuterComponent(props){console.log('withUser.OuterComponent.props',props)
        // 获取本地存储信息
        let currentUser = localStorage.getItem('currentUser');
        try{
            currentUser = JSON.parse(currentUser)
        }catch(err){
            currentUser = {}
        }
        console.log('withUser.currentUser',currentUser);
        return <MyComponent {...props} currentUser={currentUser} />
    }
 }


//  用户访问权限高阶组件
// 需要用户登录后才可访问组件否则跳到登录页面
export function withAuth(InnerComponent){
    @withUser
    class OuterComponent extends React.Component{
        componentDidMount(){
        }
        render(){console.log('withAuth.props',this.props)
            const {currentUser,location:{pathname}} = this.props;
            if(currentUser){
                 // 用户登录后显示内容
                return <InnerComponent {...this.props} />
            }else{
                return <Redirect to={"/login?targetUrl="+pathname} />
            }
        }
    }

    // 反向继承：这种写法只能适用于类组件
    // class OuterComponent extends InnerComponent{
    //     componentDidMount(){
    //         console.log('OuterComponent.componentDidMount');
    //         super.componentDidMount();
    //     }
    //     render(){
    //         if(this.props.userInfo){
    //             return super.render()
    //         }else{
    //             return <Redirect to="/login" />
    //         }
    //     }
    // }
    // return withUser(OuterComponent);
    return OuterComponent
}