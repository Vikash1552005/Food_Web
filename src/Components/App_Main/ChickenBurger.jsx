import React from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import { useState } from "react";
import img1 from "../images/main1.webp";
import img2 from "../images/main2.webp";
import { ArrowRightOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function ChickenBurger() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <section className="Carousel-chicken-bg">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className="Carousel-chicken-bg">
            <img className="food-bg" src={img2} alt="" />{" "}
            <Carousel.Caption>
              <div className="text-chicken">
                <h1>Delicious Pizza</h1>
                <h2>Hot Spanish Sizzles Spicy Pizza</h2>
                <h3>
                  cheese chicken pizza only <span>$79</span>
                </h3>{" "}
                <p>
                  Spice it Up with Bbq Chicken,Chicken Sausages,Onion,Red
                  Paprika, Chicken Salami & Peri Peri Dip.
                </p>
                <Button className="order-btn" as={NavLink} to="/ChickenPizza">
                  <h4>
                    order now <ArrowRightOutlined className="ArrowRight-icon" />
                  </h4>
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="food-bg" src={img1} alt="" />{" "}
            <Carousel.Caption>
              <div className="text-chicken">
                <h1>Chicken Burger</h1>
                <h2>2 Mc Crispy Chicken Surprise Burger</h2>
                <h3>
                  Two chicken burger only <span>$69</span>
                </h3>{" "}
                <p>
                  There will be leftover pimento cheese, but who's complaining
                  Spread it onto bread the next day for lunch.
                </p>{" "}
                <Button className="order-btn" as={NavLink} to="/ChickenPizza">
                  <h4>
                    order now <ArrowRightOutlined className="ArrowRight-icon" />
                  </h4>
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}

export default ChickenBurger;
