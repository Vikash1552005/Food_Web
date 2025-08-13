import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import img1 from "../images/1.webp";
import img2 from "../images/2.webp";

function SmericanFood() {
  return (
    <>
      <section className="Smerican-sec">
        {" "}
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="Smerican-s">
                <img className="Italian-img" src={img1} alt="" />
                <div className="Smerican-text-div">
                  <h1>Smerican Food</h1>
                  <h2>Double beef</h2>
                  <h3>Hot Dogs!</h3>
                  <Button className="order-btn3">
                    <h5>
                      order now{" "}
                      <ArrowRightOutlined className="ArrowRight-icon" />
                    </h5>
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="Smerican-s">
                <img className="Italian-img" src={img2} alt="" />
                <div className="Smerican-text-div">
                  <h1> Delicious</h1>
                  <h2>New Oninon</h2>
                  <h3>Burgure! </h3>
                  <Button className="order-btn3">
                    <h5>
                      order now{" "}
                      <ArrowRightOutlined className="ArrowRight-icon" />
                    </h5>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SmericanFood;
