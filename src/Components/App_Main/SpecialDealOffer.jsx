import React from "react";
import freehome from "../images/img-1.webp";
import { Button } from "react-bootstrap";
import { ArrowRightOutlined } from "@ant-design/icons";
function SpecialDealOffer() {
  return (
    <>
      <section>
        <div className="SpecialDealOffer-main-div">
          <div className="SpecialDealOffer-img-div">
            <img src={freehome} alt="" />
          </div>
          <div className="SpecialDealOffer-main-text-div">
            <div className="SpecialDealOffer-text-div">
              <h1>Delicious food</h1>
              <h2>Special Deal Offer For This Week!</h2>
              <h3>
                Two varieties of taco only <span>$59</span>{" "}
              </h3>

              <p>
                The origins of the taco are not precisely known, and etymologies
                for the culinary usage of the word are generally theoretical.
              </p>
              <Button className="order-btn3">
                <h5>
                  order now <ArrowRightOutlined className="ArrowRight-icon" />
                </h5>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SpecialDealOffer;
