import { Input, Form, message } from "antd";
import React from "react";
import { Button } from "react-bootstrap";

function Newsletter() {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      className: "messager",
      type: "success",
      content: "Thank you for subscribing to our newsletter!",
    });
  };

  return (
    <>
      {contextHolder}
      <section>
        <div className="Newsletter-main-div">
          <div className="Newsletter-text-div">
            <h1>Subscribe To Our Newsletter</h1>
            <p>
              Everyone loves a good deal so your subscribers are sure to enjoy
              getting emails from you that contain awesome coupons and
              promotions.
            </p>
            <div className="input-d">
              <Form className="input-div">
                <Form.Item
                  
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Input
                    className="email-input"
                    placeholder="Email"
                    allowClear
                  />
                </Form.Item>
              </Form>
              <Button className="Subscribe-btn" onClick={success}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
