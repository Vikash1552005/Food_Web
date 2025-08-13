import React from "react";
import Italian from "../images/main3.webp";
import Italian2 from "../images/main4.webp";
import Italian3 from "../images/main5.webp";
import { Button } from "react-bootstrap";
import { ArrowRightOutlined } from "@ant-design/icons";
function ItalianPizza() {
  return (
    <>
      <section className="Italian-Pizza-main-div-sec">
        <div className="Italian-Pizza-main-div">
          <div className="Italian-div">
            <img className="Italian-img" src={Italian} alt="" />
            <div className="Italian-text-div">
              <h1>Delicious Pizza</h1>
              <h2>Cheese Slice</h2>
              <h3>Italian Pizza</h3>
              <h4>Today Best Deals!</h4>
              <Button className="order-btn2">
                <h5>
                  order now <ArrowRightOutlined className="ArrowRight-icon" />
                </h5>
              </Button>
            </div>
          </div>
          <div className="Italian-div">
            <img className="Italian-img" src={Italian2} alt="" />
            <div className="Italian-text-div">
              <h1> Classic Chicken</h1>
              <h2>cheese fried</h2>
              <h3>Chicken! </h3>
              <h4>Special Just ForYou</h4>
              <Button className="order-btn2">
                <h5>
                  order now <ArrowRightOutlined className="ArrowRight-icon" />
                </h5>
              </Button>
            </div>
          </div>
          <div className="Italian-div">
            <img className="Italian-img" src={Italian3} alt="" />
            <div className="Italian-text-div2">
              <h1>Corniche Taco</h1>
              <h2>beef tomato</h2>
              <h3>With Taco!</h3>
              <h4>Special Just ForYou</h4>
              <Button className="order-btn9">
                <h5>
                  order now <ArrowRightOutlined className="ArrowRight-icon" />
                </h5>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ItalianPizza;
