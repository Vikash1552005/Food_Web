// import ReactOwlCarousel from "react-owl-carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Latest1 from "../images/Latest1.webp";
import Latest2 from "../images/Latest2.webp";
import Latest3 from "../images/Latest3.webp";
import Latest5 from "../images/Latest5.webp";
import Latest8 from "../images/Latest8.webp";
import Latest7 from "../images/Latest7.webp";
import Latest9 from "../images/Latest9.webp";
import Latest10 from "../images/Latest10.webp";
import Latest11 from "../images/Latest11.webp";
import { Modal, Button, Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import categori from "../images/menu.png";
import "antd/dist/reset.css";
import { useState } from "react";

const responsiveOptions = {
  0: {
    items: 1,
  },
  575: {
    items: 3,
  },
  600: {
    items: 3,
  },
  768: {
    items: 3,
  },
  1024: {
    items: 4,
  },
};
function LatestProducts() {
  return (
    <>
      <section className="latestProducts-sec">
        {" "}
        <div className="shop-headin">
          <h1>Latest Products</h1>
        </div>
        <div className="container">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={5}
            nav
            dots={false}
            responsive={responsiveOptions}
            navText={[
              "<div class='left-ayro'>←</div>",
              "<div class='right-ayro'>→</div>",
            ]}
          >
            <div className="item-card">
              <div className="first-card">
                <div className="img-hover-wrap">
                  <img className="img-main" src={Latest1} alt="" />
                  <img className="img-hover" src={Latest2} alt="" />
                </div>

                <div className="diccount-div">
                  <h1>-14%</h1>
                </div>
                <div className="hart-card">
                  <HeartOutlined />
                </div>
                <div className="categori-card">
                  <img className="categori-img" src={categori} alt="" />
                </div>
                <div className="chicken-pizza-text">
                  <h1>Chees Italian chicken Pizza</h1>
                </div>
                <div className="stars-reating">
                  <Rate allowHalf defaultValue={1} />
                </div>
                <div className="money-text">
                  <h1>$290.00 </h1>
                  <span>$250.00</span>
                </div>

                <div className="opt-btn-mein">
                  <Button className="options-btn">options</Button>
                </div>
              </div>
            </div>
            <div className="item-card">
              <div className="first-card">
                <div className="img-hover-wrap">
                  <img className="img-main" src={Latest3} alt="" />
                  <img className="img-hover" src={Latest2} alt="" />
                </div>

                <div className="hart-card">
                  <HeartOutlined />
                </div>
                <div className="categori-card">
                  <img className="categori-img" src={categori} alt="" />
                </div>
                <div className="chicken-pizza-text">
                  <h1>Pizza Mania Veg Loaded Pizza</h1>
                </div>
                <div className="stars-reating">
                  <Rate allowHalf defaultValue={4} />
                </div>
                <div className="money-text">
                  <span>$250.00</span>
                </div>
                <div className="opt-btn-mein">
                  <Button className="options-btn">options</Button>
                </div>
              </div>
            </div>
            <div className="item-card">
              <div className="first-card">
                <div className="img-hover-wrap">
                  <img className="img-main" src={Latest5} alt="" />
                  <img className="img-hover" src={Latest1} alt="" />
                </div>

                <div className="diccount-div">
                  <h1>-13%</h1>
                </div>
                <div className="hart-card">
                  <HeartOutlined />
                </div>
                <div className="categori-card">
                  <img className="categori-img" src={categori} alt="" />
                </div>
                <div className="chicken-pizza-text">
                  <h1>Wendy's Spicy Chicken Nuggets</h1>
                </div>
                <div className="stars-reating">
                  <Rate allowHalf defaultValue={2} />
                </div>
                <div className="money-text">
                  <h1>$400.00 </h1>
                  <span>$350.00</span>
                </div>
                <div className="opt-btn-mein">
                  <Button className="options-btn">options</Button>
                </div>
              </div>
            </div>
            <div className="item-card">
              <div className="first-card">
                <div className="img-hover-wrap">
                  <img className="img-main" src={Latest7} alt="" />
                  <img className="img-hover" src={Latest8} alt="" />
                </div>

                <div className="hart-card">
                  <HeartOutlined />
                </div>
                <div className="categori-card">
                  <img className="categori-img" src={categori} alt="" />
                </div>
                <div className="chicken-pizza-text">
                  <h1>McDonalds' Big Hug Burger</h1>
                </div>
                <div className="stars-reating">
                  <Rate allowHalf defaultValue={5} />
                </div>
                <div className="money-text">
                  <span>$235.00</span>
                </div>
                <div className="opt-btn-mein">
                  <Button className="options-btn">options</Button>
                </div>
              </div>
            </div>
            <div className="item-card">
              <div className="first-card">
                <div className="img-hover-wrap">
                  <img className="img-main" src={Latest9} alt="" />
                  <img className="img-hover" src={Latest10} alt="" />
                </div>

                <div className="diccount-div">
                  <h1>-7%</h1>
                </div>
                <div className="hart-card">
                  <HeartOutlined />
                </div>
                <div className="categori-card">
                  <img className="categori-img" src={categori} alt="" />
                </div>
                <div className="chicken-pizza-text">
                  <h1>Coca Cola With Ice Cubes</h1>
                </div>
                <div className="stars-reating">
                  <Rate allowHalf defaultValue={2} />
                </div>
                <div className="money-text">
                  <h1>$97.00 </h1>
                  <span>$90.00</span>
                </div>
                <div className="opt-btn-mein">
                  <Button className="options-btn">options</Button>
                </div>
              </div>
            </div>{" "}
            <div className="item-card">
              <div className="first-card">
                <div className="img-hover-wrap">
                  <img className="img-main" src={Latest2} alt="" />
                  <img className="img-hover" src={Latest11} alt="" />
                </div>

                <div className="diccount-div">
                  <h1>-11%</h1>
                </div>
                <div className="hart-card">
                  <HeartOutlined />
                </div>
                <div className="categori-card">
                  <img className="categori-img" src={categori} alt="" />
                </div>
                <div className="chicken-pizza-text">
                  <h1>Butter Chicken Tikka Pizza</h1>
                </div>
                <div className="stars-reating">
                  <Rate allowHalf defaultValue={4} />
                </div>
                <div className="money-text">
                  <h1>$19.00 </h1>
                  <span>$17.00</span>
                </div>
                <div className="opt-btn-mein">
                  <Button className="options-btn">options</Button>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
}

export default LatestProducts;
