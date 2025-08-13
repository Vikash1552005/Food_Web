import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import blog1 from "../images/blog1.webp";
import blog2 from "../images/blog2.webp";
import blog3 from "../images/blog3.webp";
import blog4 from "../images/blog4.webp";
import blog5 from "../images/blog5.webp";
import blog6 from "../images/blog6.webp";
import { NavLink } from "react-router-dom";

const responsiveOptions = {
  0: {
    items: 1,
  },
 575: {
    items: 2,
  },
  600: {
    items: 2,
  },
  768: {
    items: 2,
  },
  1024: {
    items: 3,
  },
};
function LatestBlog() {
  return (
    <>
      <section className="latestBlog-sec" >
        {" "}
        <div className="shop-headin">
          <h1>Our Latest Blog</h1>
        </div>
        <div className="container">
          <ReactOwlCarousel
            className="owl-theme-latest-blog"
            loop
            margin={30}
            nav
            dots={false}
            responsive={responsiveOptions}
            navText={[
              "<div class='left-ayro'>←</div>",
              "<div class='right-ayro'>→</div>",
            ]}
          >
            {" "}
            <div className="item-latest-blog-main-div">
              <NavLink to="/">

              </NavLink>
              <div className="latest-blog-img-div">
                <img src={blog6} alt="" />
              </div>
              <div className="latest-blog-text">
                <h1>MAY 12, 2025</h1>
                <h2>Best Pizza In The World. Have You Tasted Better?</h2>
                <p>
                  In a world where information is abundant and time is precious,
                  our blog is your sanctuary of...
                </p>
                <h3>READ MORE</h3>
              </div>
            </div>
            <div className="item-latest-blog-main-div">
              <div className="latest-blog-img-div">
                <img src={blog1} alt="" />
              </div>
              <div className="latest-blog-text">
                <h1>MAY 12, 2025</h1>
                <h2>Best Pizza In The World. Have You Tasted Better?</h2>
                <p>
                  In a world where information is abundant and time is precious,
                  our blog is your sanctuary of...
                </p>
                <h3>READ MORE</h3>
              </div>
            </div>
            <div className="item-latest-blog-main-div">
              <div className="latest-blog-img-div">
                <img src={blog2} alt="" />
              </div>
              <div className="latest-blog-text">
                <h1>MAY 12, 2025</h1>
                <h2>Best Pizza In The World. Have You Tasted Better?</h2>
                <p>
                  In a world where information is abundant and time is precious,
                  our blog is your sanctuary of...
                </p>
                <h3>READ MORE</h3>
              </div>
            </div>{" "}
            <div className="item-latest-blog-main-div">
              <div className="latest-blog-img-div">
                <img src={blog3} alt="" />
              </div>
              <div className="latest-blog-text">
                <h1>MAY 12, 2025</h1>
                <h2>Best Pizza In The World. Have You Tasted Better?</h2>
                <p>
                  In a world where information is abundant and time is precious,
                  our blog is your sanctuary of...
                </p>
                <h3>READ MORE</h3>
              </div>
            </div>
            <div className="item-latest-blog-main-div">
              <div className="latest-blog-img-div">
                <img src={blog4} alt="" />
              </div>
              <div className="latest-blog-text">
                <h1>MAY 12, 2025</h1>
                <h2>Best Pizza In The World. Have You Tasted Better?</h2>
                <p>
                  In a world where information is abundant and time is precious,
                  our blog is your sanctuary of...
                </p>
                <h3>READ MORE</h3>
              </div>
            </div>
            <div className="item-latest-blog-main-div">
              <div className="latest-blog-img-div">
                <img src={blog5} alt="" />
              </div>
              <div className="latest-blog-text">
                <h1>MAY 12, 2025</h1>
                <h2>Best Pizza In The World. Have You Tasted Better?</h2>
                <p>
                  In a world where information is abundant and time is precious,
                  our blog is your sanctuary of...
                </p>
                <h3>READ MORE</h3>
              </div>
            </div>{" "}
          </ReactOwlCarousel>
        </div>
      </section>
    </>
  );
}

export default LatestBlog;
