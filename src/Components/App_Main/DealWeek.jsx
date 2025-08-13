import { HeartOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { Button } from "react-bootstrap";
import ReactOwlCarousel from "react-owl-carousel";
import Latest1 from "../images/Latest1.webp";
import Latest2 from "../images/Latest2.webp";
import Latest3 from "../images/Latest3.webp";
import Latest5 from "../images/Latest5.webp";
import Latest8 from "../images/Latest8.webp";
import Latest7 from "../images/Latest7.webp";
import Latest9 from "../images/Latest9.webp";
import Latest10 from "../images/Latest10.webp";
import Latest11 from "../images/Latest11.webp";
import Latest12 from "../images/Latest12.webp";
import Latest13 from "../images/Latest13.webp";
import Latest14 from "../images/Latest14.webp";
import Latest15 from "../images/Latest15.webp";
import categori from "../images/menu.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";

const responsiveOptions = {
  0: {
    items:1,
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
function DealWeek() {
 
  
  // const calculateTimeLeft = () => {
  //   const targetDate = new Date("2025-12-31T23:59:59");
  //   const now = new Date();
  //   const difference = targetDate - now;

  //   let timeLeft = {
  //     days: 0,
  //     hours: 0,
  //     minutes: 0,
  //     seconds: 0,
  //   };

  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //   }

  //   return timeLeft;
  // };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);
  return (
    <>
      <section className="DealWeek-sec">
        {" "}
        <div className="shop-headin">
          <h1>Deal Of The Week</h1>
        </div>
        <div className="container">
          <ReactOwlCarousel
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
                </div>{" "}
                <div className="countdown-display">
                  <div className="countdown-value">
                    {/* {timeLeft.days.toString().padStart(2, "0")} <span>D :</span> */}
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.hours.toString().padStart(2, "0")}{" "} */}
                    <span>H :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.minutes.toString().padStart(2, "0")}{" "} */}
                    <span>M :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.seconds.toString().padStart(2, "0")}{" "} */}
                    <span>S </span>
                  </div>
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
                  <img className="img-main" src={Latest12} alt="" />
                  <img className="img-hover" src={Latest13} alt="" />
                </div>
                <div className="diccount-div">
                  <h1>-5%</h1>
                </div>

                <div className="hart-card">
                  <HeartOutlined />
                </div>
                <div className="categori-card">
                  <img className="categori-img" src={categori} alt="" />
                </div>
                <div className="chicken-pizza-text">
                  <h1>Chees Loaded A.1 Burger</h1>
                </div>
                <div className="countdown-display">
                  <div className="countdown-value">
                    {/* {timeLeft.days.toString().padStart(2, "0")} <span>D :</span> */}
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.hours.toString().padStart(2, "0")}{" "} */}
                    <span>H :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.minutes.toString().padStart(2, "0")}{" "} */}
                    <span>M :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.seconds.toString().padStart(2, "0")}{" "} */}
                    <span>S </span>
                  </div>
                </div>
                <div className="stars-reating">
                  <Rate allowHalf defaultValue={4} />
                </div>
                <div className="money-text">
                  <h1>$390.00 </h1>
                  <span>$370.00</span>
                </div>
                <div className="opt-btn-mein">
                  <Button className="options-btn">options</Button>
                </div>
              </div>
            </div>
            <div className="item-card">
              <div className="first-card">
                <div className="img-hover-wrap">
                  <img className="img-main" src={Latest14} alt="" />
                  <img className="img-hover" src={Latest15} alt="" />
                </div>

                <div className="diccount-div">
                  <h1>-5%</h1>
                </div>
                <div className="hart-card">
                  <HeartOutlined />
                </div>
                <div className="categori-card">
                  <img className="categori-img" src={categori} alt="" />
                </div>
                <div className="chicken-pizza-text">
                  <h1>McDonald’s Chicken McCrispy</h1>
                </div>
                <div className="countdown-display">
                  <div className="countdown-value">
                    {/* {timeLeft.days.toString().padStart(2, "0")} <span>D :</span> */}
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.hours.toString().padStart(2, "0")}{" "} */}
                    <span>H :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.minutes.toString().padStart(2, "0")}{" "} */}
                    <span>M :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.seconds.toString().padStart(2, "0")}{" "} */}
                    <span>S </span>
                  </div>
                </div>
                <div className="stars-reating">
                  <Rate allowHalf defaultValue={2} />
                </div>
                <div className="money-text">
                  <h1>$390.00 </h1>
                  <span>$370.00</span>
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
                <div className="countdown-display">
                  <div className="countdown-value">
                    {/* {timeLeft.days.toString().padStart(2, "0")} <span>D :</span> */}
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.hours.toString().padStart(2, "0")}{" "} */}
                    <span>H :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.minutes.toString().padStart(2, "0")}{" "} */}
                    <span>M :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.seconds.toString().padStart(2, "0")}{" "} */}
                    <span>S </span>
                  </div>
                </div>
                <div className="stars-reating">
                  <Rate allowHalf defaultValue={5} />
                </div>
                <div className="money-text">
                  {" "}
                  <h1>$97.00 </h1>
                  <span>$90.00</span>
                </div>
                <div className="opt-btn-mein">
                  <Button className="options-btn">options</Button>
                </div>
              </div>
            </div>
            <div className="item-card">
              <div className="first-card">
                <div className="img-hover-wrap">
                  <img className="img-main" src={Latest15} alt="" />
                  <img className="img-hover" src={Latest9} alt="" />
                </div>

                <div className="diccount-div">
                  <h1>-9%</h1>
                </div>
                <div className="hart-card">
                  <HeartOutlined />
                </div>
                <div className="categori-card">
                  <img className="categori-img" src={categori} alt="" />
                </div>
                <div className="chicken-pizza-text">
                  <h1>KFC Kentucky Fried Cluedle</h1>
                </div>
                <div className="countdown-display">
                  <div className="countdown-value">
                    {/* {timeLeft.days.toString().padStart(2, "0")} <span>D :</span> */}
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.hours.toString().padStart(2, "0")}{" "} */}
                    <span>H :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.minutes.toString().padStart(2, "0")}{" "} */}
                    <span>M :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.seconds.toString().padStart(2, "0")}{" "} */}
                    <span>S :</span>
                  </div>
                </div>
                <div className="stars-reating">
                  <Rate allowHalf defaultValue={2} />
                </div>
                <div className="money-text">
                  <h1>$79.00 </h1>
                  <span>$72.00</span>
                </div>
                <div className="opt-btn-mein">
                  <Button className="options-btn">options</Button>
                </div>
              </div>
            </div>{" "}
            <div className="item-card">
              <div className="first-card">
                <div className="img-hover-wrap">
                  <img className="img-main" src={Latest8} alt="" />
                  <img className="img-hover" src={Latest13} alt="" />
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
                  <h1>Hotdog with spicy mustard</h1>
                </div>
                <div className="countdown-display">
                  <div className="countdown-value">
                    {/* {timeLeft.days.toString().padStart(2, "0")} <span>D :</span> */}
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.hours.toString().padStart(2, "0")}{" "} */}
                    <span>H :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.minutes.toString().padStart(2, "0")}{" "} */}
                    <span>M :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.seconds.toString().padStart(2, "0")}{" "} */}
                    <span>S </span>
                  </div>
                </div>
                <div className="stars-reating">
                  <Rate allowHalf defaultValue={4} />
                </div>
                <div className="money-text">
                  <h1>$97.00 </h1>
                  <span>$90.00</span>
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
                <div className="countdown-display">
                  <div className="countdown-value">
                    {/* {timeLeft.days.toString().padStart(2, "0")} <span>D :</span> */}
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.hours.toString().padStart(2, "0")}{" "} */}
                    <span>H :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.minutes.toString().padStart(2, "0")}{" "} */}
                    <span>M :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.seconds.toString().padStart(2, "0")}{" "} */}
                    <span>S </span>
                  </div>
                </div>
                <div className="countdown-display">
                  <div className="countdown-value">
                    {/* {timeLeft.days.toString().padStart(2, "0")} <span>D :</span> */}
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.hours.toString().padStart(2, "0")}{" "} */}
                    <span>H :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.minutes.toString().padStart(2, "0")}{" "} */}
                    <span>M :</span>
                  </div>
                  <div className="countdown-value">
                    {/* {timeLeft.seconds.toString().padStart(2, "0")}{" "} */}
                    <span>S </span>
                  </div>
                </div>
                <div className="stars-reating">
                  <Rate allowHalf defaultValue={4} />
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
          </ReactOwlCarousel>
        </div>
      </section>
    </>
  );
}

export default DealWeek;
