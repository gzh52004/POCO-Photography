import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

function Reg(){
    return(
        <div>
            <h1>注册</h1>
        <Form
            name="basic"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                style={{width:600,marginBottom:20,marginLeft:250}}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                style={{width:600,marginBottom:20,marginLeft:250}}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
                {/* <Checkbox>记住我？</Checkbox> */}
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit">
                    注册
            </Button>
            </Form.Item>
        </Form>
    </div>
    )
}

export default Reg