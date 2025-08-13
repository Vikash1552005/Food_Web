import React from "react";
import Sandwich from "../images/blog6.webp";
import img1 from "../images/pen1.webp";
import img2 from "../images/pen2.webp";
import img3 from "../images/pen3.webp";
import share from "../images/share.png";
import prev from "../images/left.png";
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";
function SandwichSec() {
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
            <h6>/ Delicious And Hot Pizza And Burger Just For You.</h6>
          </p>
        </div>
        <div className="container">
          <div className="Delicious-heading">
            <h1>Delicious And Hot Pizza And Burger Just For You.</h1>
          </div>
          <div className="Delicious-date-text">
            <h1>
              May 12, 2025 <span>.</span>
            </h1>
            <h2> Codezeel Developer</h2>
          </div>
          <div className="Sandwich-imges-div">
            <NavLink to="">
              <img src={Sandwich} alt="Sandwich-img" />
            </NavLink>
          </div>
          <div className="exquisite-text-div">
            <h1>What makes fashion an exquisite form of art?</h1>
            <p>
              Fashion, like a beautifully crafted painting or a captivating
              piece of literature, has the power to evoke emotions and make a
              statement. It is a medium through which individuals express their
              unique personalities, tastes, and desires. Just as an artist
              carefully selects colors and textures, fashion enthusiasts curate
              their wardrobes with meticulous attention to detail. Fashion is
              not merely about clothing; it is an embodiment of elegance,
              sophistication, and self-expression. It is a language that speaks
              volumes without uttering a word. The right ensemble can transform
              an individual, exuding confidence and allure. Fashion is an art
              form that allows individuals to create their own narratives,
              leaving an indelible mark on the world.
            </p>
          </div>{" "}
          <div className="exquisite-text-div">
            <h1>What role does fashion play in our lives?</h1>
            <p>
              From the runway to the streets, fashion permeates every aspect of
              our lives. It is a reflection of society, culture, and
              individuality. Fashion has the power to inspire, empower, and
              unite people from all walks of life. It is a testament to human
              creativity and the pursuit of beauty. To truly embrace the
              elegance of fashion, one must pay attention to the smallest
              details. From the choice of fabrics to the way garments drape on
              the body, every element contributes to the overall aesthetic.
              Accessories, such as statement jewelry or a meticulously crafted
              handbag, can elevate an outfit to new heights of sophistication.
            </p>
            <h6>
              Fashion has the power to shape society and challenge norms. It can
              be a catalyst for change, pushing boundaries and redefining beauty
              standards. Fashion designers often use their platforms to address
              social issues and promote inclusivity. Through fashion,
              individuals can make a statement and contribute to the cultural
              dialogue.
            </h6>
          </div>
          <div className="Fashion-pera-div">
            <h2>
              Fashion is a timeless form of art because it transcends trends and
              fads. It is an ever-evolving expression of culture and
              individuality. Just as a classic novel or a masterpiece painting
              withstands the test of time, certain fashion pieces become iconic
              symbols of style and elegance.
            </h2>
          </div>
          <div className="exquisite-text-div">
            <h1>How can fashion empower individuals?</h1>
            <p>
              Fashion has the power to empower individuals by instilling
              confidence and allowing them to embrace their true selves. The
              right outfit can make someone feel unstoppable, ready to conquer
              the world. Fashion is a tool that enables individuals to express
              their identity and stand tall in a world that often tries to
              dictate norms The allure of fashion lies in its ability to
              transport individuals to a world of beauty and creativity. It is a
              realm where imagination knows no bounds and self-expression reigns
              supreme. Fashion captivates the senses, evoking emotions and
              leaving a lasting impression. It is an art form that continues to
              inspire and enchant.
            </p>
          </div>
          <div className="imges-div-sandwich">
            <div className="pen-im-div">
              <img src={img1} alt="pan-paper-img" />
            </div>
            <div className="pen-im-div">
              <img src={img2} alt="pan-paper-img" />
            </div>
            <div className="pen-im-div">
              <img src={img3} alt="pan-paper-img" />
            </div>
          </div>
          <div className="exquisite-text-div">
            <h1>What is the future of fashion?</h1>
            <p>
              The future of fashion lies in innovation and sustainability. As
              the world becomes more conscious of its environmental impact,
              fashion designers are embracing eco-friendly materials and ethical
              practices. The future of fashion is a harmonious blend of
              creativity, technology, and social responsibility. To appreciate
              the artistry of fashion, one must immerse themselves in its rich
              history and diverse influences. Fashion exhibitions, books, and
              documentaries offer a glimpse into the creative process and the
              minds of visionary designers. By understanding the craftsmanship
              and thought behind each garment, one can truly appreciate the
              artistry of fashion.
            </p>
          </div>
          <div className="exquisite-text-div">
            <h1>Stay Connected</h1>
            <p>
              Don't miss out on any of our latest updates and articles. Be sure
              to subscribe to our newsletter and follow us on social media. By
              staying connected, you'll never miss a valuable piece of content
              or an exciting announcement.
            </p>
          </div>
          <div className="exquisite-text-div">
            <h1>Conclusion</h1>
            <p>
              We hope this welcome blog has given you a glimpse into what our
              blog is all about. We're here to provide you with valuable
              information, inspiration, and support on your journey towards
              personal growth and success. Thank you for joining us, and we look
              forward to sharing more with you soon!
            </p>
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
              <a href="">eCommerce ,</a>
            </h2>
            <h2>
              <a href=""> LiftStyle ,</a>
            </h2>
            <h2>
              <a href=""> Summer</a>
            </h2>
          </div>
          <div className="Previous-div">
            <Row gutter={[16, 16]}>
              <Col span={12}>
                {" "}
                <div className="previous-col-content">
                  <div className="prev-btn">
                    <NavLink to="/DosaSec">
                      <img src={prev} alt="prev-img" />
                    </NavLink>
                  </div>
                  <div className="Previous-text-div">
                    <h1>Previous post</h1>
                    <h2>Best Pizza In The World. Have You Tasted Better?</h2>
                  </div>
                </div>
              </Col>
              <Col span={12}> </Col>
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

export default SandwichSec;
