import React from "react";
import first from "../images/first.webp";
import quality from "../images/food-logo1.webp";
import quality2 from "../images/food-logo2.png";
import { Button } from "react-bootstrap";
import { ArrowRightOutlined } from "@ant-design/icons";
function Amazing() {
  return (
    <section className="Amazing-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="Amazing-mig-main-div">
              <img src={first} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="main-food-bhar">
              <div className="Amazing-text-main-div">
                <div className="Amazing-heading">
                  <h1>Amazing & Quality Food For Your Good Health</h1>
                  <p>
                    Welcome too restaurant where culinary excellence meets
                    hospitality in every dish we serve nestled in the heart of
                    City Name our eatery invites you on a journey
                  </p>
                </div>
                <div className="best-quality-food-main">
                  <div className="food-logo">
                    <div className="main-logo-food">
                      <div className="food-img">
                        <img src={quality} alt="" />
                      </div>
                      <div className="food-quality-heading">
                        <h1>Best Quality Food</h1>
                        <p>Our talented chefs craft dish precision</p>
                      </div>
                    </div>
                  </div>
                  <div className="food-logo">
                    <div className="main-logo-food">
                      <div className="food-img">
                        <img src={quality2} alt="" />
                      </div>
                      <div className="food-quality-heading">
                        <h1>Experience Chefs</h1>
                        <p>Our talented chefs craft dish precision</p>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
                <Button className="order-btn4">
                  <h5>
                    order now <ArrowRightOutlined className="ArrowRight-icon" />
                  </h5>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amazing;
