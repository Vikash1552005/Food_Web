import React from "react";
import Dosa from "../images/blog1.webp";
import share from "../images/share.png";
import prev from "../images/left.png";
import next from "../images/right.png";
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";

function DosaSec() {
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
            <h6>/ Best Pizza In The World. Have You Tasted Better?</h6>
          </p>
        </div>
        <div className="container">
          <div className="Delicious-heading">
            <h1> Best Pizza In The World. Have You Tasted Better?</h1>
          </div>
          <div className="Delicious-date-text">
            <h1>
              May 12, 2025 <span>.</span>
            </h1>
            <h2> Codezeel Developer</h2>
          </div>
          <div className="Sandwich-imges-div">
            <NavLink to="/DosaSec">
              <img src={Dosa} alt="Sandwich-img" />
            </NavLink>
          </div>
          <div className="exquisite-text-div">
            <p>
              Welcome to our vibrant blog, where curiosity meets knowledge and
              inspiration knows no bounds. As the renowned author X once said,
              "The more you read, the more things you will know. The more that
              you learn, the more places you'll go."
            </p>
          </div>{" "}
          <div className="exquisite-text-div">
            <h1>Uncover Hidden Gems:</h1>
            <p>
              Join us on a journey of exploration as we unearth hidden gems from
              around the world. From quaint cafes tucked away in charming alleys
              to underrated books that deserve the spotlight, we're here to
              shine a light on the extraordinary.
            </p>
          </div>{" "}
          <div className="exquisite-text-div">
            <h1>Travel Tales:</h1>
            <p>
              Embark on virtual adventures with our globetrotting enthusiasts.
              Traverse the bustling streets of Tokyo, wander through the serene
              landscapes of New Zealand, and immerse yourself in the rich
              tapestry of cultures that make our world so wonderfully diverse.
            </p>
          </div>{" "}
          <div className="exquisite-text-div">
            <h1>Thought-Provoking Discussions:</h1>
            <p>
              Delve deep into the realm of ideas with our thought-provoking
              articles. From philosophical ponderings on the meaning of life to
              insightful analyses of current events, we invite you to join the
              conversation and broaden your perspective.
            </p>
            <h6>
              In a world where information is abundant and time is precious, our
              blog is your sanctuary of meaningful content. Our dedicated team
              of writers and researchers is committed to bringing you articles
              that spark your curiosity, ignite your imagination, and leave you
              with a sense of wonder.
            </h6>
            <h6>
              So, whether you're a seasoned explorer of ideas or just setting
              foot on the shores of curiosity, we invite you to indulge in the
              rich buffet of knowledge and inspiration that our blog has to
              offer. As you navigate through these pages, remember the wise
              words of Y: "Learning is a treasure that will follow its owner
              everywhere."
            </h6>
          </div>
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
              <a href=""> Collection ,</a>
            </h2>
            <h2>
              <a href=""> Office ,</a>
            </h2>
            <h2>
              <a href=""> Tools ,</a>
            </h2>
            <h2>
              <a href=""> Vintage</a>
            </h2>
          </div>
          <div className="Previous-div">
            <Row gutter={[16, 16]}>
              <Col span={12}>
                {" "}
                <div className="previous-col-content">
                  <div className="prev-btn">
                    <NavLink to="/ServingGreat">
                      <img src={prev} alt="prev-img" />
                    </NavLink>
                  </div>
                  <div className="Previous-text-div">
                    <h1>Previous post</h1>
                    <h2>Serving Great Pizza From Our Family To Yours.</h2>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                {" "}
                <div className="previous-col-content2">
                  <div className="Previous-text-div2">
                    <h1>Next post</h1>
                    <h2>Delicious And Hot Pizza And Burger Just For You.</h2>
                  </div>
                  <div className="prev-btn">
                    <NavLink to="/SandwichSec">
                      <img src={next} alt="prev-img" />
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

export default DosaSec;
