import React from 'react';
import {Form, Input, Button, message} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"
import {BASE_URL} from "../constants"
import * as axios from "axios"

function Login(props) {
  const {handleLoggedIn} = props;

  const onFinish = values => {
    console.log('Received values of form: ', values);
    const { username, password } = values;

    const opt = {
      method: "POST",
      url: `${BASE_URL}/signin`,
      data: {
        username: username,
        password: password
      },
      headers: { "Content-TYpe": "application/json" }
    };

    axios(opt)
      .then(res => {
        if (res.status === 200) {
          const { data: token } = res; // 这个值是后端给我的token，应该传递给App
          handleLoggedIn(token);
          message.success("Login succeed!");
        }
      })
      .catch(err => {
        console.error("login failed: ", err.message);
        message.error("Login failed!");
      })
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        {/*Or <a href="">register now!</a>*/}
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
  );
}

export default Login;
