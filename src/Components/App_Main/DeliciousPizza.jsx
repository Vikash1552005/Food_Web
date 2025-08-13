import React from "react";
import Delicious from "../images/pizza.webp";
import { Button } from "react-bootstrap";
import { ArrowRightOutlined } from "@ant-design/icons";

function DeliciousPizza() {
  return (
    <>
      <section className="DeliciousPizza-sec">
        <div className="DeliciousPizza-main-div">
          <div className="DeliciousPizza-img">
            {/* <img src={Delicious} alt="" /> */}
          </div>
          <div className="DeliciousPizza-heading">
            <h1>Delicious Pizza</h1>
            <h2>Schezwan Corn And Capsicum Pizza</h2>
            <h3>
              Double Cheese Pizza only<span>$99</span>
            </h3>
            <p>
              Enjoy double portions of delicious mozzarella cheese Crispy
              paneer,onion,green capsicum.
            </p>{" "}
            <Button className="order-btn">
              <h4>
                order now <ArrowRightOutlined className="ArrowRight-icon" />
              </h4>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeliciousPizza;
