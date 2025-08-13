import React from "react";
import { Form, Input, Button } from "antd";

const Logintext = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2>User Information</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input placeholder="Enter your name" allowClear />
        </Form.Item>

        <Form.Item
          label="Mobile Number"
          name="mobile"
          rules={[
            { required: true, message: "Please enter your mobile number" },
            {
              pattern: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit mobile number",
            },
          ]}
        >
          <Input type="number" placeholder="Enter your mobile number" allowClear />
        </Form.Item>

        <Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
              {
                min: 6,
                message: "Password must be at least 6 characters",
              },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Logintext;
