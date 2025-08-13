import React, { useState } from "react";
import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import logo from "../images/Logo22.svg";
import user from "../images/user.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  HeartOutlined,
  RollbackOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Divider, Drawer } from "antd";
import next from "../images/next.png";
import prev from "../images/left.png";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [showSecondMenu, setShowSecondMenu] = useState(false);
  const [showThirdMenu, setShowThirdMenu] = useState(false);
  const [showGarlicBreadMenu, setShowGarlicBreadMenu] = useState(false);
  const [showNonVegMenu, setShowNonVegMenu] = useState(false);
  const [showSnacksMenu, setShowSnacksMenu] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    setShowSecondMenu(false); // Reset menu on close
  };

  return (
    <>
      <section className="navbar-section sticky-top">
        <Navbar expand="lg" className="bg-body-tertiary main-nav-div">
          <Navbar.Brand>
            <img className="logo-main-pizzva" src={logo} alt="logo-img" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="toggal-btn-nav"
            onClick={showDrawer}
          />

          <Drawer
            title="Menu"
            placement="right"
            closable={{ "aria-label": "Close Button" }}
            onClose={() => {
              onClose();
              setShowSecondMenu(false);
              setShowThirdMenu(false);
              setShowGarlicBreadMenu(false);
              setShowNonVegMenu(false);
              setShowSnacksMenu(false); // Snacks menu close
            }}
            open={open}
            getContainer={false}
            className="nav-drawer"
          >
            {/* === Main Menu === */}
            {!showSecondMenu &&
              !showThirdMenu &&
              !showGarlicBreadMenu &&
              !showNonVegMenu &&
              !showSnacksMenu && (
                <div className="drawer-text-div">
                  <div className="home-div-drawer">
                    <NavLink to="/FoodMain">Home</NavLink>
                  </div>
                  <div
                    className="home-div-drawer"
                    onClick={() => setShowSecondMenu(true)}
                  >
                    Pizza
                    <img className="next-pizza-img" src={next} alt="next" />
                  </div>
                  <div className="home-div-drawer">
                    <NavLink to="/CollectionsSec">Collections</NavLink>
                  </div>
                  <div
                    className="home-div-drawer"
                    onClick={() => setShowSnacksMenu(true)}
                  >
                    Snacks
                    <img className="next-pizza-img" src={next} alt="next" />
                  </div>
                  <div className="home-div-drawer">
                    <NavLink to="/Blogs">Blogs</NavLink>
                  </div>
                  <div className="home-div-drawer">
                    <NavLink to="/DeliveryContact">Contact</NavLink>
                  </div>
                </div>
              )}

            {/* === Second Menu: Pizza Types === */}
            {showSecondMenu &&
              !showThirdMenu &&
              !showGarlicBreadMenu &&
              !showNonVegMenu && (
                <div className="drawer-text-div">
                  <div
                    className="pizza2-main"
                    onClick={() => setShowSecondMenu(false)}
                  >
                    <img className="next-pizza-img" src={prev} alt="" />
                    <span>Pizza</span>
                  </div>
                  <div
                    className="pizza2-main2"
                    onClick={() => setShowThirdMenu(true)}
                  >
                    Veg Pizza{" "}
                    <img className="next-pizza-img" src={next} alt="next" />
                  </div>
                  <div
                    className="pizza2-main2"
                    onClick={() => setShowGarlicBreadMenu(true)}
                  >
                    Garlic Bread{" "}
                    <img className="next-pizza-img" src={next} alt="next" />
                  </div>
                  <div
                    className="pizza2-main2"
                    onClick={() => setShowNonVegMenu(true)}
                  >
                    Non-Veg Pizza{" "}
                    <img className="next-pizza-img" src={next} alt="next" />
                  </div>
                </div>
              )}

            {/* === Third Menu: Veg Pizza Items === */}
            {showThirdMenu && (
              <div className="drawer-text-div">
                <div
                  className="pizza2-main"
                  onClick={() => setShowThirdMenu(false)}
                >
                  <img className="next-pizza-img" src={prev} alt="back" />
                  <span>Veg Pizza</span>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/CrunchyTacoBell">Cheese Tomato</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/SpecialHotDog">Margherita</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/FrenchFries">Masala Paneer</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/CheeseFriedChicken">Spinach Pizza</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/ChickenPizza">Onion Blossom</NavLink>
                </div>
              </div>
            )}

            {/* === Fourth Menu: Garlic Bread === */}
            {showGarlicBreadMenu && (
              <div className="drawer-text-div">
                <div
                  className="pizza2-main"
                  onClick={() => setShowGarlicBreadMenu(false)}
                >
                  <img className="next-pizza-img" src={prev} alt="back" />
                  <span>Garlic Bread</span>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/ChickenPizza">Crunchy Taco Bell</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/CheeseFriedChicken">Bread Rolls</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/FrenchFries">Hamburger Veggie</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/SpecialHotDog">Ladi Paav</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/CrunchyTacoBell">Veggie Burrito</NavLink>
                </div>
              </div>
            )}

            {/* === Fifth Menu: Non-Veg Pizza === */}
            {showNonVegMenu && (
              <div className="drawer-text-div">
                <div
                  className="pizza2-main"
                  onClick={() => setShowNonVegMenu(false)}
                >
                  <img className="next-pizza-img" src={prev} alt="back" />
                  <span>Non-Veg Pizza</span>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/CrunchyTacoBell">Cheese Fried Chicken</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/FrenchFries">Grilled Chicken Pizza</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/FoodMain">Paneer Chicken Pizza</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/SpecialHotDog">Spinach Pizza</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/CheeseFriedChicken">Crunchy Taco Bell</NavLink>
                </div>
              </div>
            )}

            {/* === Snacks Menu === */}
            {showSnacksMenu && (
              <div className="drawer-text-div">
                <div
                  className="pizza2-main"
                  onClick={() => setShowSnacksMenu(false)}
                >
                  <img className="next-pizza-img" src={prev} alt="back" />
                  <span>Snacks</span>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/FrenchFries">French Fries</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/GarlicBread">Garlic Bread</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/BreadRolls">Bread Rolls</NavLink>
                </div>
                <div className="pizza2-main2">
                  <NavLink to="/ChickenPizza">Veg Pizza</NavLink> 
                </div>
              </div>
            )}
          </Drawer>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-btns-midel">
              <Nav.Link as={NavLink} to="/FoodMain">
                <h1 className="nav-home">Home</h1>
              </Nav.Link>
              <NavDropdown
                title="Pizza"
                id="basic-nav-dropdown"
                className="multi-column-dropdown nav-pizz-text"
              >
                <div className="dropdown-columns">
                  <NavDropdown.Item
                    className="pizza-dropdown-text"
                    as={NavLink}
                    to="/CrunchyTacoBell"
                  >
                    Veg Pizza
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="pizza-dropdown-text"
                    as={NavLink}
                    to="/FrenchFries"
                  >
                    Garlic Bread
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="pizza-dropdown-text"
                    as={NavLink}
                    to="/ChickenPizza"
                  >
                    {" "}
                    Non-Veg Pizza
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="pizza-dropdown-pera"
                    as={NavLink}
                    to="/ChickenPizza"
                  >
                    {" "}
                    Cheese Tomato
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/ChickenPizza"
                    className="pizza-dropdown-pera"
                  >
                    Crunchy Taco Bell
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/FrenchFries"
                    className="pizza-dropdown-pera"
                  >
                    Cheese Fried Chicken
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/ChickenPizza"
                    className="pizza-dropdown-pera"
                  >
                    Margherita
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/ChickenPizza"
                    className="pizza-dropdown-pera"
                  >
                    Bread Rolls
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/ChickenPizza"
                    className="pizza-dropdown-pera"
                  >
                    Grilled Chicken Pizza
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/ChickenPizza"
                    className="pizza-dropdown-pera"
                  >
                    Masala Paneer
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/ChickenPizza"
                    className="pizza-dropdown-pera"
                  >
                    Hamburger Veggie
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/ChickenPizza"
                    className="pizza-dropdown-pera"
                  >
                    Paneer Chicken Pizza
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/ChickenPizza"
                    className="pizza-dropdown-pera"
                  >
                    Spinach Pizza
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/ChickenPizza"
                    className="pizza-dropdown-pera"
                  >
                    Ladi Paav
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/SpecialHotDog"
                    className="pizza-dropdown-pera"
                  >
                    Spinach Pizza
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/CrunchyTacoBell"
                    className="pizza-dropdown-pera"
                  >
                    Onion Blossom
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/SpecialHotDog"
                    className="pizza-dropdown-pera"
                  >
                    Veggie Burrito
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/SpecialHotDog"
                    className="pizza-dropdown-pera"
                  >
                    Crunchy Taco Bell
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link href="/CollectionsSec">
                <h1 className="nav-home">collections</h1>
              </Nav.Link>{" "}
              <NavDropdown
                title="snacks"
                id="basic-nav-dropdown"
                className="nav-snacks-text"
              >
                <div className="dropdown-column-snacks">
                  <NavDropdown.Item
                    className="snacks-text"
                    as={NavLink}
                    to="/FrenchFries"
                  >
                    French Fries
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="snacks-text"
                    as={NavLink}
                    to="/GarlicBread"
                  >
                    Garlic Bread
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="snacks-text"
                    as={NavLink}
                    to="/BreadRolls"
                  >
                    Bread Rolls
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="snacks-text"
                    as={NavLink}
                    to="/ChickenPizza"
                  >
                    Veg Pizza
                  </NavDropdown.Item>
                </div>
              </NavDropdown>{" "}
              <NavLink className="nav-home" to="/Blogs">
                Blogs
              </NavLink>
              <NavLink className="nav-home" to="/DeliveryContact">
                Contact
              </NavLink>
              <Nav.Link href="#Contact">
                <h1 className="nav-home"></h1>
              </Nav.Link>{" "}
            </Nav>{" "}
          </Navbar.Collapse>
          <div className="nav-icons">
            <Button className="user-btn">
              <SearchOutlined className="user" />
            </Button>
            <Button className="user-btn">
              <UserOutlined className="user" />
            </Button>
            <Button className="user-btn">
              <HeartOutlined className="user" />
              <div className="noti-div">0</div>
            </Button>
            <Button className="user-btn">
              <ShoppingCartOutlined className="user" />
              <div className="noti-div">0</div>
            </Button>
          </div>
        </Navbar>
      </section>
    </>
  );
}

export default NavBar;
