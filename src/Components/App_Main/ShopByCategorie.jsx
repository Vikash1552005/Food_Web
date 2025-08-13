import React from "react";
import Slider from "react-slick";

import shop1 from "../images/shop1.avif";
import shop2 from "../images/shop2.avif";
import shop3 from "../images/shop3.avif";
import shop4 from "../images/shop4.webp";
import shop5 from "../images/shop5.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink, useNavigate } from "react-router-dom";

const products = [
  { id: 1, img: shop1, title: "Special Hot Dog", path: "/SpecialHotDog" },
  {
    id: 2,
    img: shop2,
    title: "Cheese Fried Chicken",
    path: "/CheeseFriedChicken",
  },
  { id: 3, img: shop3, title: "French Fries", path: "/FrenchFries" },
  { id: 4, img: shop4, title: "Crunchy Taco Bell", path: "/CrunchyTacoBell" },
  { id: 5, img: shop5, title: "Chicken Pizza", path: "/ChickenPizza" },
];

function ShopByCategorie() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 770,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="shop-headin-sec">
      <div className="container">
        <div className="shop-headin">
          <h1>Shop By Categories</h1>
        </div>
        <Slider {...settings}>
          {products.map((product) => (
            <div
              className="ShopBy-item"
              key={product.id}
              onClick={() => navigate(product.path)}
            >
              <div className="shop-img">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="shop1-text">
                <h2>{product.title}</h2>
              </div>
              <div className="Order-link">
                <a href="#">Order Now</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ShopByCategorie;
