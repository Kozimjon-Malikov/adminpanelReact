import React from "react";
import { Input, Button, Form } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { Link } from "react-router-dom";
const LoginPage = () => {
    let onFinish=(e)=>{
        if(e.username==="hello" && e.password==='1111'){
            window.location.href=`admin`

        }else{
             alert('Yo\'qoll')
        }
    }
  return (
    <div className="myForm">
      <Form onFinish={onFinish} type='dashed' >
        <Form.Item label="Username" name="username" required>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item label="Password" name="password" required>
          <Input.Password placeholder="password"></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" block>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
