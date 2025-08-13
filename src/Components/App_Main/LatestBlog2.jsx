import React from "react";
import blog1 from "../images/blog1.webp";
import blog2 from "../images/blog2.webp";
import blog3 from "../images/blog3.webp";
import blog4 from "../images/blog4.webp";
import blog5 from "../images/blog5.webp";
import blog6 from "../images/blog6.webp";
import { NavLink } from "react-router-dom";

function LatestBlog2() {
  return (
    <>
      <section className="latestBlog2-sec">
        <div className="shop-headin2">
          <h1> Blog</h1>
          <p>
            <NavLink to="/">Home</NavLink>
            <span>
              <NavLink to="/Blogs">/ Blogs</NavLink>
            </span>{" "}
            / Blog
          </p>
        </div>
        <div className="container">
          <div className="main-latestblog2">
            <div className="item-latest-blog-main-div2">
              <NavLink to="/SandwichSec">
                <div className="latest-blog-img-div">
                  <img src={blog6} alt="" />
                </div>
                <div className="latest-blog-text2">
                  <h1>MAY 12, 2025</h1>
                  <h2>Best Pizza In The World. Have You Tasted Better?</h2>
                  <p>
                    In a world where information is abundant and time is
                    precious, our blog is your sanctuary of...
                  </p>
                  <h3>
                    <a href="/SandwichSec">READ MORE</a>
                  </h3>
                </div>
              </NavLink>
            </div>
            <div className="item-latest-blog-main-div2">
              <NavLink to="/DosaSec">
                <div className="latest-blog-img-div">
                  <img src={blog1} alt="" />
                </div>
                <div className="latest-blog-text2">
                  <h1>MAY 12, 2025</h1>
                  <h2>Best Pizza In The World. Have You Tasted Better?</h2>
                  <p>
                    In a world where information is abundant and time is
                    precious, our blog is your sanctuary of...
                  </p>
                  <h3>
                    {" "}
                    <a href="/DosaSec">READ MORE</a>
                  </h3>
                </div>
              </NavLink>
            </div>
            <div className="item-latest-blog-main-div2">
              <NavLink to="/ServingGreat">
                <div className="latest-blog-img-div">
                  <img src={blog2} alt="" />
                </div>
                <div className="latest-blog-text2">
                  <h1>MAY 12, 2025</h1>
                  <h2>Best Pizza In The World. Have You Tasted Better?</h2>
                  <p>
                    In a world where information is abundant and time is
                    precious, our blog is your sanctuary of...
                  </p>
                  <h3>
                    {" "}
                    <a href="/ServingGreat">READ MORE</a>
                  </h3>
                </div>
              </NavLink>
            </div>{" "}
            <div className="item-latest-blog-main-div2">
              <NavLink to="/PizzasAndBurger">
                <div className="latest-blog-img-div">
                  <img src={blog3} alt="" />
                </div>
                <div className="latest-blog-text2">
                  <h1>MAY 12, 2025</h1>
                  <h2>Best Pizza In The World. Have You Tasted Better?</h2>
                  <p>
                    In a world where information is abundant and time is
                    precious, our blog is your sanctuary of...
                  </p>
                  <h3>
                    {" "}
                    <a href="/PizzasAndBurger">READ MORE</a>
                  </h3>
                </div>
              </NavLink>
            </div>
            <div className="item-latest-blog-main-div2">
              <NavLink to="/FingersSandwichSec">
                <div className="latest-blog-img-div">
                  <img src={blog4} alt="" />
                </div>
                <div className="latest-blog-text2">
                  <h1>MAY 12, 2025</h1>
                  <h2>Best Pizza In The World. Have You Tasted Better?</h2>
                  <p>
                    In a world where information is abundant and time is
                    precious, our blog is your sanctuary of...
                  </p>
                  <h3>
                    {" "}
                    <a href="/FingersSandwichSec">READ MORE</a>
                  </h3>
                </div>
              </NavLink>
            </div>
            <div className="item-latest-blog-main-div2">
              <NavLink to="/SensationSec">
                <div className="latest-blog-img-div">
                  <img src={blog5} alt="" />
                </div>
                <div className="latest-blog-text2">
                  <h1>MAY 12, 2025</h1>
                  <h2>Best Pizza In The World. Have You Tasted Better?</h2>
                  <p>
                    In a world where information is abundant and time is
                    precious, our blog is your sanctuary of...
                  </p>
                  <h3>
                    {" "}
                    <a href="/SensationSec">READ MORE</a>
                  </h3>
                </div>
              </NavLink>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestBlog2;
