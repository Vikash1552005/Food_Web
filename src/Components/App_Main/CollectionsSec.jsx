import React from "react";
import shop1 from "../images/shop1.avif";
import shop2 from "../images/shop2.avif";
import shop3 from "../images/shop3.avif";
import shop4 from "../images/shop4.webp";
import shop5 from "../images/shop5.webp";
import { NavLink } from "react-router-dom";

function CollectionsSec() {
  return (
    <section>
      <div class="Collections-heading">
        <h1>Collections</h1>
        <NavLink to="/FoodMain">Home </NavLink>
      </div>
      <div class="container">
        <div className="collection-main-div">
          <div class="CollectionsSec-div">
            <NavLink to="/SpecialHotDog">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop1} alt="Special Hot Dog" />
                </div>
                <div class="shop1-text">
                  <h2>Special Hot Dog</h2>
                </div>
                <div class="Order-link">
                  <a href="">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/CrunchyTacoBell">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop4} alt="Crunchy Taco Bell" />
                </div>
                <div class="shop1-text">
                  <h2>Crunchy Taco Bell</h2>
                </div>
                <div class="Order-link">
                  <a href="">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/FrenchFries">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop3} alt="French Fries" />
                </div>
                <div class="shop1-text">
                  <h2>French Fries</h2>
                </div>
                <div class="Order-link">
                  <a href="">Order Now</a>
                </div>
              </div>
            </NavLink>{" "}
          </div>
          <div class="CollectionsSec-div">
            <NavLink to="/CheeseFriedChicken">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop2} alt="Cheese Fried Chicken" />
                </div>
                <div class="shop1-text">
                  <h2>Cheese Fried Chicken</h2>
                </div>
                <div class="Order-link">
                  <a href="">Order Now</a>
                </div>
              </div>
            </NavLink>{" "}
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/FrenchFries"></NavLink>{" "}
            <a href="/ChickenPizza">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop5} alt="Chicken Pizza" />
                </div>
                <div class="shop1-text">
                  <h2>Chicken Pizza</h2>
                </div>
                <div class="Order-link">
                  <a href="">Order Now</a>
                </div>
              </div>
            </a>
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/BreadRolls">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop3} alt="French Fries" />
                </div>
                <div class="shop1-text">
                  <h2>Bread Rolls</h2>
                </div>
                <div class="Order-link">
                  <a href="">Order Now</a>
                </div>
              </div>
            </NavLink>{" "}
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/HamburgerVeggie">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop1} alt="Special Hot Dog" />
                </div>
                <div class="shop1-text">
                  <h2>Hamburger Veggie </h2>
                </div>
                <div class="Order-link">
                  <a href="">Order Now</a>
                </div>
              </div>
            </NavLink>{" "}
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/MasalaPaneer">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop2} alt="Cheese Fried Chicken" />
                </div>
                <div class="shop1-text">
                  <h2>Masala Paneer</h2>
                </div>
                <div class="Order-link">
                  <a href="/MasalaPaneer">Order Now</a>
                </div>
              </div>
            </NavLink>{" "}
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/GarlicBread">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop4} alt="Crunchy Taco Bell" />
                </div>
                <div class="shop1-text">
                  <h2>Garlic Bread</h2>
                </div>
                <div class="Order-link">
                  <a href="/GarlicBread">Order Now</a>
                </div>
              </div>
            </NavLink>{" "}
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/HamburgerVeggie">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop5} alt="Chicken Pizza" />
                </div>
                <div class="shop1-text">
                  <h2>Chicken Pizza</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/GarlicBread">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop3} alt="French Fries" />
                </div>
                <div class="shop1-text">
                  <h2>French Fries</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>{" "}
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/HamburgerVeggie">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop2} alt="Cheese Fried Chicken" />
                </div>
                <div class="shop1-text">
                  <h2>Cheese Fried Chicken</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>{" "}
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/GarlicBread">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop5} alt="Chicken Pizza" />
                </div>
                <div class="shop1-text">
                  <h2>Chicken Pizza</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>{" "}
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/HamburgerVeggie">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop4} alt="Crunchy Taco Bell" />
                </div>
                <div class="shop1-text">
                  <h2>Crunchy Taco Bell</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>{" "}
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/FrenchFries">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop1} alt="Special Hot Dog" />
                </div>
                <div class="shop1-text">
                  <h2>Special Hot Dog</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>{" "}
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/FrenchFries">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop2} alt="Cheese Fried Chicken" />
                </div>
                <div class="shop1-text">
                  <h2>Cheese Fried Chicken</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/FrenchFries">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop3} alt="French Fries" />
                </div>
                <div class="shop1-text">
                  <h2>French Fries</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>
          <div class="CollectionsSec-div">
            <NavLink to="/FrenchFries">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop5} alt="Chicken Pizza" />
                </div>
                <div class="shop1-text">
                  <h2>Chicken Pizza</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>{" "}
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/FrenchFries">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop4} alt="Crunchy Taco Bell" />
                </div>
                <div class="shop1-text">
                  <h2>Crunchy Taco Bell</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/HamburgerVeggie">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop2} alt="Cheese Fried Chicken" />
                </div>
                <div class="shop1-text">
                  <h2>Cheese Fried Chicken</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/FrenchFries">
              {" "}
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop3} alt="French Fries" />
                </div>
                <div class="shop1-text">
                  <h2>French Fries</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/FrenchFries">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop1} alt="Special Hot Dog" />
                </div>
                <div class="shop1-text">
                  <h2>Special Hot Dog</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/SpecialHotDog">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop1} alt="Special Hot Dog" />
                </div>
                <div class="shop1-text">
                  <h2>Special Hot Dog</h2>
                </div>
                <div class="Order-link">
                  <a href="/SpecialHotDog">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/FrenchFries">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop4} alt="Crunchy Taco Bell" />
                </div>
                <div class="shop1-text">
                  <h2>Crunchy Taco Bell</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>{" "}
          </div>
          <div class="CollectionsSec-div">
            <NavLink to="/FrenchFries">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop2} alt="Cheese Fried Chicken" />
                </div>
                <div class="shop1-text">
                  <h2>Cheese Fried Chicken</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/SpecialHotDog">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop1} alt="Special Hot Dog" />
                </div>
                <div class="shop1-text">
                  <h2>Special Hot Dog</h2>
                </div>
                <div class="Order-link">
                  <a href="/SpecialHotDog">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/FrenchFries">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop2} alt="Cheese Fried Chicken" />
                </div>
                <div class="shop1-text">
                  <h2>Cheese Fried Chicken</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>

          <div class="CollectionsSec-div">
            <a href="/FrenchFries">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop1} alt="Special Hot Dog" />
                </div>
                <div class="shop1-text">
                  <h2>Special Hot Dog</h2>
                </div>
                <div class="Order-link">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </a>
          </div>

          <div class="CollectionsSec-div">
            <NavLink to="/SpecialHotDog">
              <div class="ShopBy-item">
                <div class="shop-img">
                  <img src={shop1} alt="Special Hot Dog" />
                </div>
                <div class="shop1-text">
                  <h2>Special Hot Dog</h2>
                </div>
                <div class="Order-link">
                  <a href="/SpecialHotDog">Order Now</a>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionsSec;
