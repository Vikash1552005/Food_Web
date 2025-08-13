import { Rate } from "antd";
import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import developer from "../images/developer.webp";
import developer2 from "../images/developer2.webp";
import developer3 from "../images/developer3.webp";
const responsiveOptions = {
  0: {
    items: 1,
  },
  600: {
    items: 1,
  },
  768: {
    items: 1,
  },
  1024: {
    items: 1,
  },
};
function Multicolumn() {
  return (
    <>
      <section className="Multicolumn-sec">
        <div className="container">
          <ReactOwlCarousel
            className="web-designer"
            loop
            margin={5}
            nav={false}
            dots={true}
            responsive={responsiveOptions}
          >
            <div className="web-designer">
              <div className="first-designer">
                <div className="designer-main-div">
                  <div className="stars-designer-div">
                    <Rate
                      className="stars-designer-star"
                      allowHalf
                      defaultValue={5}
                    />
                  </div>
                  <div className="stars-designer-pera">
                    <p>
                      There are many variations of passages of lorem Ipsum
                      available but form by injected humour randomised to words
                      which don't look even slightly of model sentence
                      structures to believable.
                    </p>
                  </div>
                  <div className="intro-main-div">
                    <div className="intro-img">
                      <img src={developer} alt="" />
                    </div>
                    <div className="intro-heading">
                      <h1>Stefanie Rashford</h1>
                      <h2>Web Developer</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="web-designer">
              <div className="first-designer">
                <div className="designer-main-div">
                  <div className="stars-designer-div">
                    <Rate
                      className="stars-designer-star"
                      allowHalf
                      defaultValue={3}
                    />
                  </div>
                  <div className="stars-designer-pera">
                    <p>
                      There are many variations of passages of lorem Ipsum
                      available but form by injected humour randomised to words
                      which don't look even slightly of model sentence
                      structures to believable.
                    </p>
                  </div>
                  <div className="intro-main-div">
                    <div className="intro-img">
                      <img src={developer2} alt="" />
                    </div>
                    <div className="intro-heading">
                      <h1>Augusta Wind</h1>
                      <h2>Web Designer</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="web-designer">
              <div className="first-designer">
                <div className="designer-main-div">
                  <div className="stars-designer-div">
                    <Rate
                      className="stars-designer-star"
                      allowHalf
                      defaultValue={4}
                    />
                  </div>
                  <div className="stars-designer-pera">
                    <p>
                      There are many variations of passages of lorem Ipsum
                      available but form by injected humour randomised to words
                      which don't look even slightly of model sentence
                      structures to believable.
                    </p>
                  </div>
                  <div className="intro-main-div">
                    <div className="intro-img">
                      <img src={developer3} alt="" />
                    </div>
                    <div className="intro-heading">
                      <h1>John ghurde</h1>
                      <h2>Manager</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ReactOwlCarousel>
        </div>
      </section>
    </>
  );
}

export default Multicolumn;
