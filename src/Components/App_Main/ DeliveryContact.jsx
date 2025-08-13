import { Col, Row } from "antd";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  HomeFilled,
  HomeOutlined,
  InfoCircleFilled,
  MailFilled,
  MailOutlined,
  PhoneFilled,
  PhoneOutlined,
} from "@ant-design/icons";
function DeliveryContact() {
  // 1. State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  // 2. Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Submit and save to localStorage
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert("Form data saved yaaro 🤩");
  };
  return (
    <>
      <section className="Collections-sec">
        <div className="Collections-heading">
          <h1> Contact</h1>
          <div className="cont-home-div">
            <NavLink to="/FoodMain">Home </NavLink>
            <NavLink to="#"> / Contact </NavLink>
          </div>
        </div>
        <div className="container">
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={24} lg={13} xl={13}>
              <div className="input-contact-div">
                <h2>Do You Have Any Questions?</h2>
                <Form onSubmit={handleSubmit}>
                  <div className="input-name-email">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      required
                    />
                  </div>
                  <div className="input-phone-number">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="input-phone-number">
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      placeholder="Comments"
                    />
                  </div>
                  <button type="submit" className="sand-btn">
                    Send
                  </button>
                </Form>
              </div>
            </Col>

            <Col xs={24} sm={24} md={24} lg={11} xl={11}>
              <div className="touch-eith-div">
                <h2>Get in touch with us</h2>
                <div className="address-main-div">
                  <div className="home-icon-div">
                    <HomeFilled className="home-icon" />
                  </div>
                  <div className="address-text">
                    <h1>Address:</h1>
                    <h1>33 New Montgomery St.</h1>
                    <h1>Ste 750 San Francisco,</h1>
                    <h1>CA, USA 94105</h1>
                  </div>
                </div>
                <div className="address-main-div">
                  <div className="home-icon-div">
                    <PhoneFilled className="home-icon" />
                  </div>
                  <div className="address-text">
                    <h1>Contact No. :</h1>
                    <h1>(+91) 9876-543-210</h1>
                  </div>
                </div>
                <div className="address-main-div">
                  <div className="home-icon-div">
                    <MailFilled className="home-icon" />
                  </div>
                  <div className="address-text">
                    <h1>Email:</h1>
                    <h1>grillfood@exampledemo.com</h1>
                  </div>
                </div>
                <div className="address-main-div">
                  <div className="home-icon-div">
                    <InfoCircleFilled className="home-icon" />
                  </div>
                  <div className="address-text">
                    <h1>Store Info:</h1>
                    <h1>Monday – Friday 10 AM – 8 PM</h1>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="map-div">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d331648.15989028616!2d75.81601945862822!3d26.838085689694474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e1!3m2!1sen!2sin!4v1754484197375!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeliveryContact;
