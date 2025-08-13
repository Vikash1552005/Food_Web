import React from "react";
import Dosa from "../images/blog5.webp";
import share from "../images/share.png";
import prev from "../images/left.png";
import next from "../images/right.png";
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";

function SensationSec() {
  return (
    <>
      <section>
        {" "}
        <div className="Sandwich-heading">
          <p>
            <NavLink to="/FoodMain">Home</NavLink>
            <span>
              <NavLink to="/Blogs">/ Blogs</NavLink>
            </span>{" "}
            <h6>/ Pizza And Burger. The Fresh Taste Sensation.</h6>
          </p>
        </div>
        <div className="container">
          <div className="Delicious-heading">
            <h1> Pizza And Burger. The Fresh Taste Sensation.</h1>
          </div>
          <div className="Delicious-date-text">
            <h1>
              May 12, 2025 <span>.</span>
            </h1>
            <h2> Codezeel Developer</h2>
          </div>
          <div className="Sandwich-imges-div">
            <a href="">
              <img src={Dosa} alt="Sandwich-img" />
            </a>
          </div>
          <div className="exquisite-text-div">
            <p>
              Welcome to the ultimate shopping event that you've been waiting
              for! Our upcoming shopping sale is set to dazzle and delight,
              offering you the chance to snag your favorite items at
              unbelievable prices. Whether you're a fashionista, a tech
              enthusiast, or someone looking to revamp your home decor, our sale
              has something for everyone. In our exciting blog series, we'll be
              unraveling the details of this shopping extravaganza that's set to
              dazzle and delight. From irresistible discounts on your favorite
              brands to exclusive previews of the trendiest collections, our
              sale event promises to be an unforgettable journey through the
              world of fashion, lifestyle, and more.
            </p>
          </div>{" "}
          <div className="exquisite-text-div">
            <p>
              Get ready to be amazed by the jaw-dropping discounts and offers we
              have in store. From exclusive product bundles to limited-time
              promotions, our sale is designed to make your shopping experience
              truly unforgettable.
            </p>
          </div>{" "}
          <div className="exquisite-text-div">
            <p>
              Explore a diverse array of categories, ranging from fashion and
              beauty to electronics, home essentials, and more. Whether you're
              searching for the latest trends or timeless classics, you're sure
              to find items that speak to your style and preferences.
            </p>
          </div>{" "}
          <div className="exquisite-text-div">
            <p>Certainly, here are some hints for finding great sale items:</p>
          </div>{" "}
          <div className="staying-text-div">
            <span> </span>
            <h1>Look for Clearance Sections</h1>
          </div>{" "}
          <div className="staying-text-div">
            <span> </span>
            <h1>Check Online Marketplaces</h1>
          </div>
          <div className="staying-text-div">
            <span> </span>
            <h1>Sign Up for Newsletters:</h1>
          </div>{" "}
          <div className="staying-text-div">
            <span> </span>
            <h1>Follow Social Media</h1>
          </div>{" "}
          <div className="staying-text-div">
            <span> </span>
            <h1>Follow Social Media</h1>
          </div>
          <div className="faq-text">
            <p>
              Elevate your wardrobe with our collection of trendy apparel and
              accessories. From statement pieces to versatile basics, our
              fashion offerings are designed to help you express your unique
              style effortlessly.
            </p>
          </div>
          <div className="faq-text">
            <p>
              Dive into the world of technology with our impressive lineup of
              gadgets and electronics. Discover cutting-edge devices that
              enhance your daily life, from smart wearables to entertainment
              gadgets that redefine your leisure time. Transform your living
              spaces with our selection of home and decor items. Whether you're
              looking for chic furnishings, cozy textiles, or elegant accents,
              our sale has everything you need to create a space that reflects
              your personality.
            </p>
          </div>
          <div className="faq-text">
            <p>
              With our user-friendly online platform, shopping has never been
              easier. Browse, select, and purchase your favorite items from the
              comfort of your home or on the go. It's a shopping experience
              designed to fit your lifestyle. Whether it's a special occasion or
              just a way to show your appreciation, our sale offers a plethora
              of gift options for your loved ones. Choose from thoughtful
              presents that make hearts smile.
            </p>
          </div>
          <div className="exquisite-text-div">
            <p>
              Don't miss out on this incredible opportunity to shop for
              top-notch products at unbeatable prices. Mark your calendar, set
              your reminders, and get ready to indulge in a shopping spree like
              never before. Stay tuned for more updates and sneak peeks into the
              exciting offers that await you during our upcoming shopping sale
              extravaganza!
            </p>
          </div>{" "}
          <div className="sandwich-share-btn-div">
            <NavLink to="" className="Share-nav">
              <button className="share-main-btn">
                <img src={share} alt="" /> Share
              </button>
            </NavLink>
          </div>
          <div className="sandwich-tag-div">
            <h1>Tags:</h1>
            <h2>
              <a href=""> Accessories ,</a>
            </h2>
            <h2>
              <a href=""> Collection ,</a>
            </h2>
            <h2>
              <a href=""> Fashion ,</a>
            </h2>
            <h2>
              <a href=""> LiftStyle</a>
            </h2>{" "}
            <h2>
              <a href=""> Tools</a>
            </h2>
          </div>
          <div className="Previous-div">
            <Row gutter={[16, 16]}>
              <Col span={12}> </Col>
              <Col span={12}>
                {" "}
                <div className="previous-col-content3">
                  <div className="Previous-text-div2">
                    <h1>Next post</h1>
                    <h2>Serving Great Pizza From Our Family To Yours.</h2>
                  </div>
                  <div className="prev-btn">
                    <NavLink to="/SandwichSec">
                      <img src={next} alt="next-img" />
                    </NavLink>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="back-to-blog-div">
            <NavLink to="/Blogs">
              <img className="Back-img" src={prev} alt="prev-img" /> Back to
              blog
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default SensationSec;
