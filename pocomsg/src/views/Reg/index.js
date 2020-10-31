import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import CryptoJS from 'crypto-js';
import request from "../../utils/request"


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};
const rules = {
    username: [
        { required: true, message: '用户名不能为空' },
        {
            async validator(rule, value) {
                if (!value) {
                    return
                }
                // 根据输入的用户名校验用户名是否被占用
                const { data } = await request.get('/user/checkname', {
                    params: {
                        username: value
                    }
                });
                if (data.code === 1) {
                    return Promise.resolve();
                }
                return Promise.reject('用户名已存在');
            },
        }
    ],
    password: [
        { required: true, message: '密码不能为空' },
        { min: 6, max: 12, message: '密码长度必须为6-12位字符' }
    ]
}
const Reg = function (props) {
    const onFinish = async (values) => {
        // 注册
        values.password = CryptoJS.SHA256(values.password).toString();
        console.log('加密后=',values);
        const { data } = await request.post('/user/reg', values);
        if (data.code === 1) {
            message.success('注册成功')
        }
        props.history.push({
            pathname: '/login',
            state: { username: values.username }
        })
    }
    return (
        <div>
            <h1>新账户注册</h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={rules.username}
                    hasFeedback
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={rules.password}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Reg;