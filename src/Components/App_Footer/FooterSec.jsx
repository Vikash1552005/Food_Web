import { Cascader, Form } from "antd";
import React from "react";
import visa from "../images/visa.png";
import visa2 from "../images/money.png";
import visa3 from "../images/american.png";
import visa4 from "../images/paypal.png";
import visa5 from "../images/Diners-Club.png";
import visa6 from "../images/discover.png";
import { Col, Container, NavDropdown, Row } from "react-bootstrap";
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];
function FooterSec() {
  return (
    <>
      <section className="FooterSec-sec">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={4}>
              <div className="sec-footer-first-col">
                <NavDropdown
                  title="USD $"
                  id="basic-nav-dropdown"
                  className="footer-sec-drop"
                >
                  <div className="dropdown-column-sec-footer">
                    <NavDropdown.Item
                      className="sec-footer-text"
                      href="#action/3.1"
                    >
                      CAD $
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="sec-footer-text"
                      href="#action/3.2"
                    >
                      EUR €
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="sec-footer-text"
                      href="#action/3.3"
                    >
                      USD $
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>{" "}
                <NavDropdown
                  title="English"
                  id="basic-nav-dropdown"
                  className="footer-sec-drop"
                >
                  <div className="dropdown-column-sec-footer">
                    <NavDropdown.Item
                      className="sec-footer-text"
                      href="#action/3.1"
                    >
                      English
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="sec-footer-text"
                      href="#action/3.2"
                    >
                      Français
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="sec-footer-text"
                      href="#action/3.3"
                    >
                      Español
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="sec-footer-text"
                      href="#action/3.4"
                    >
                      Nederlands
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="GrillFood-footer-sec">
                <div className="sec-footer-sec-text">
                  <span>© 2025, </span>
                  <a href="">GrillFood - Fast Food Store</a>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="sec-footer-icons-div">
                <div className="visa-icon">
                  <a
                    href="https://www.visa.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={visa} alt="" />
                  </a>
                </div>
                <div className="visa-icon">
                  <a
                    href="https://www.mastercard.co.in/en-in.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={visa2} alt="" />
                  </a>
                </div>
                <div className="visa-icon">
                  <a
                    href="https://www.americanexpress.com/en-in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={visa3} alt="" />
                  </a>
                </div>
                <div className="visa-icon">
                  <a
                    href="https://www.paypal.com/in/home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={visa4} alt="" />
                  </a>
                </div>
                <div className="visa-icon">
                  <a
                    href="https://www.dinersclub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={visa5} alt="" />
                  </a>
                </div>{" "}
                <div className="visa-icon">
                  <a
                    href="https://www.discover.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img src={visa6} alt="" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default FooterSec;
