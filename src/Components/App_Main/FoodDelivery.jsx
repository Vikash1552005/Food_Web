import React from "react";
import delivery from "../images/delivery1.webp";
import delivery2 from "../images/delivery2.avif";
import delivery3 from "../images/delivery3.avif";
import delivery4 from "../images/delivery4.webp";

function FoodDelivery() {
  return (
    <>
      <section>
        <div className="FoodDelivery-main-div">
          <div className="FoodDelivery-first-div">
            <div className="delivery-img-div">
              <img src={delivery} alt="" />
            </div>
            <div className="delivery-heading">
              <h1>Fast Food Delivery</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
          <div className="FoodDelivery-first-div">
            <div className="delivery-img-div">
              <img src={delivery2} alt="" />
            </div>
            <div className="delivery-heading">
              <h1>100% Natural Food</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
          <div className="FoodDelivery-first-div">
            <div className="delivery-img-div">
              <img src={delivery3} alt="" />
            </div>
            <div className="delivery-heading">
              <h1>Best Quality Guarantee</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
          <div className="FoodDelivery-first-div2">
            <div className="delivery-img-div">
              <img src={delivery4} alt="" />
            </div>
            <div className="delivery-heading">
              <h1>Variety Of Dishes</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FoodDelivery;
