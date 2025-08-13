import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import first from "../images/first1.webp";
import first2 from "../images/first2.avif";
import first3 from "../images/first3.avif";
import first4 from "../images/first4.webp";
import first5 from "../images/first1.webp";

const responsiveOptions = {
  0: {
    items: 3,
  },
  600: {
    items: 4,
  },
  768: {
    items: 4,
  },
  1024: {
    items: 4,
  },
  1400: {
    items: 5,
  },
};
function LogosBaner() {
  return (
    <>
      <section className="latestProducts-sec">
        <div className="container">
          <ReactOwlCarousel
            className="owl-theme"
            loop
            margin={5}
            nav={false}
            dots={false}
            responsive={responsiveOptions}
          >
            <div className="item-logos_div">
              <div className="first-logo-div">
                <img src={first} alt="" />
              </div>
            </div>
            <div className="item-logos_div">
              <div className="first-logo-div">
                <img src={first2} alt="" />
              </div>
            </div>
            <div className="item-logos_div">
              <div className="first-logo-div">
                <img src={first3} alt="" />
              </div>
            </div>
            <div className="item-logos_div">
              <div className="first-logo-div">
                <img src={first4} alt="" />
              </div>
            </div>
            <div className="item-logos_div">
              <div className="first-logo-div">
                <img src={first} alt="" />
              </div>
            </div>
          </ReactOwlCarousel>
          <div className="line-div"></div>
        </div>
      </section>
    </>
  );
}

export default LogosBaner;
