import React from 'react';
import { Form, Input, Button, Checkbox ,message} from 'antd';
import SHA256 from 'crypto-js/sha256';console.dir(SHA256)
import request from '../../utils/request';


const Login = function(props) {
    console.log('Login.props',props);
    const onFinish = async (values) =>{
        console.log('加密前=',values);
        let {username,password ,remember}=values;
        password =SHA256(values,password).toString()
        console.log('加密后=',password);
        const { data } = await request.get('/user/login', {
            params:{
                username,
                password,
                remember
            }
        });
        if (data.status === 200) {
            if(values.remember){
                localStorage.setItem('currentUser',JSON.stringify(data.data))
            }else{
                sessionStorage.setItem('currentUser',JSON.stringify(data.data))
            }

            message.success('登录成功')
            // 提取目标地址
            const {search} = props.location;
            const pathname = search.match(/targetUrl\=([\/\w\-]+)/);
            let targetUrl;
            if(pathname){
                targetUrl = pathname[1];
            }
            console.log('targetUrl',targetUrl)
            props.history.push({
                pathname: targetUrl || '/mine'
            })
        }else{
            message.error('用户名或密码错误') 
        }
    }
    return (
        <div>
            <h1>登录</h1>
            <Form
                name="basic"
initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
hasFeedback
                    style={{width:600,marginBottom:40,marginLeft:250}}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    style={{width:600,marginBottom:20,marginLeft:250}}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>免登陆</Checkbox>
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        登录
                </Button>
                </Form.Item>
            </Form>
        </div>
    );

}

export default Login