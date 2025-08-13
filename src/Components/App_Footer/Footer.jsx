import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import location from "../images/location2.png";
import location2 from "../images/mail.png";
import location3 from "../images/call.png";
import google from "../images/google.webp";
import google2 from "../images/app.webp";
import {
  FacebookOutlined,
  InstagramOutlined,
  PinterestOutlined,
  XOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
const { Panel } = Collapse;
function Footer() {
  return (
    <>
      <section className="footer-first-sec">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={3}>
              <div className="footer-main-div">
                <h1>Contact Us</h1>
                <div className="footer-location">
                  <div className="location-img">
                    <img src={location} alt="" />
                  </div>
                  <div className="footer-first-pera">
                    <p>Grillfood - Fast Food Store</p>
                    <p>507-Union Trade Ipsum Doler</p>
                    <p>Centre France</p>
                  </div>
                </div>
                <div className="footer-location">
                  <div className="location-img">
                    <img src={location2} alt="" />
                  </div>
                  <div className="footer-first-pera">
                    <a href="mailto:demo@example.com">demo@example.com</a>
                  </div>
                </div>{" "}
                <div className="footer-location">
                  <div className="location-img">
                    <img src={location3} alt="" />
                  </div>
                  <div className="footer-first-pera">
                    {" "}
                    <a href="tel:+919876543210">(+91) 9876-543-210</a>
                  </div>
                </div>
                <div className="footer-icons">
                  <div className="icon-first-footer">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookOutlined />
                    </a>
                  </div>
                  <div className="icon-first-footer">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramOutlined />
                    </a>
                  </div>
                  <div className="icon-first-footer">
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YoutubeOutlined />
                    </a>
                  </div>
                  <div className="icon-first-footer">
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <XOutlined />
                    </a>
                  </div>
                  <div className="icon-first-footer">
                    <a
                      href="https://www.pinterest.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PinterestOutlined />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="footer-main-div">
                <h1>Services</h1>
                <div className="footer-Services">
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Size Chart</a>
                      <li>
                        <a href="#">Shipping & Refund</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Terms and Conditions</a>
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="footer-main-div">
                <h1>Quick Links</h1>
                <div className="footer-Services">
                  <ul>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Refund Policy</a>
                      <li>
                        <a href="#">Shipping Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms of Service</a>
                      </li>
                      <li>
                        <a href="#">Policy for Buyers</a>
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="footer-main-div">
                <h1>Get Download Apps!</h1>
                <div className="footer-Services">
                  <p>
                    Get 30% Off Use Thise Code GRILLFOOD1 You can now access our
                    menu and makeyour order via the app!
                  </p>
                </div>
                <div className="footer-app-googel-img">
                  <div className="googal-img-div">
                    <a
                      href="https://play.google.com/store"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={google} alt="Google Play Store" />
                    </a>
                    <a
                      href="https://www.apple.com/in/app-store/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={google2} alt="Apple App Store" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="footer-second-sec">
        <Container>
          <Collapse
            accordion
            defaultActiveKey={["4"]}
            expandIconPosition="end"
            className="Collapse-footer-dropdown"
          >
            <Panel header="Contact Us" key="1" className="Panel-sec-footer">
              <Row>
                <Col xs={24} sm={12} md={6}>
                  <div className="footer-main-div">
                    <div className="footer-location">
                      <div className="location-img">
                        <img src={location} alt="" />
                      </div>
                      <div className="footer-first-pera">
                        <p>Grillfood - Fast Food Store</p>
                        <p>507-Union Trade Ipsum Doler</p>
                        <p>Centre France</p>
                      </div>
                    </div>
                    <div className="footer-location">
                      <div className="location-img">
                        <img src={location2} alt="" />
                      </div>
                      <div className="footer-first-pera">
                        <a href="mailto:demo@example.com">demo@example.com</a>
                      </div>
                    </div>
                    <div className="footer-location">
                      <div className="location-img">
                        <img src={location3} alt="" />
                      </div>
                      <div className="footer-first-pera">
                        <a href="tel:+919876543210">(+91) 9876-543-210</a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Panel>

            <Panel header="Services" key="2" className="Panel-sec-footer">
              <div className="footer-Services">
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Size Chart</a>
                    <li>
                      <a href="#">Shipping & Refund</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Terms and Conditions</a>
                    </li>
                  </li>
                </ul>
              </div>
            </Panel>

            <Panel header="Quick Links" key="3" className="Panel-sec-footer">
              <div className="footer-Services">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                    <li>
                      <a href="#">Shipping Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                    <li>
                      <a href="#">Policy for Buyers</a>
                    </li>
                  </li>
                </ul>
              </div>
            </Panel>

            <Panel
              header="Get Download Apps!"
              key="4"
              className="Panel-sec-footer"
            >
              <div className="footer-Services">
                <p>
                  Get 30% Off Use Thise Code GRILLFOOD1 You can now access our
                  menu and makeyour order via the app!
                </p>
              </div>
              <div className="footer-app-googel-img">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={google} alt="Google Play Store" />
                </a>
                <a
                  href="https://www.apple.com/in/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={google2} alt="Apple App Store" />
                </a>
              </div>
            </Panel>
          </Collapse>
        </Container>
      </section>
    </>
  );
}

export default Footer;
