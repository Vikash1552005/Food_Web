import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Modal, Button } from "antd";

import {
  ArrowRightOutlined,
  BarsOutlined,
  FilterOutlined,
  HeartOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Checkbox, Drawer, Menu, Rate } from "antd";
import Latest1 from "../images/Latest1.webp";
import Latest2 from "../images/Latest2.webp";
import Latest3 from "../images/Latest3.webp";
import Latest5 from "../images/Latest5.webp";
import Latest8 from "../images/Latest8.webp";
import Latest7 from "../images/Latest7.webp";
import Latest9 from "../images/Latest9.webp";
import Latest10 from "../images/Latest10.webp";
import Latest11 from "../images/Latest11.webp";
import categori from "../images/menu.png";

const items = [
 
  {
    key: "sub1",
    label: "Availability",
    className: "label-tex-heading",

    children: [
      {
        key: "1",
        label: <Checkbox className="Checkbox-text">In stock (6)</Checkbox>,
        className: "lable-child-text",
      },
      {
        key: "2",
        label: <Checkbox className="Checkbox-text">Out of stock (0)</Checkbox>,
        className: "lable-child-text",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub2",
    label: "Price",
    className: "label-tex-heading",

    children: [
      {
        label: "The highest price is $370.00",
        className: "price-tex-heading",
      },
      {
        label: (
          <div className="niput-number-div">
            <h1>$</h1>
            <div className="inpur-di">
              <input className="input-from" type="" placeholder="From" />
            </div>
            <div className="inpur-di">
              <input className="input-from" type="" placeholder="To" />
            </div>
          </div>
        ),
        className: "lable-child-text",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub3",
    label: "Product type (2)",
    className: "label-tex-heading",

    children: [
      {
        key: "3",
        label: <Checkbox className="Checkbox-text">Chicken (3)</Checkbox>,
        className: "lable-child-text",
      },
      {
        key: "4",
        label: <Checkbox className="Checkbox-text">Cold Drinks (1)</Checkbox>,
        className: "lable-child-text",
      },
      {
        key: "5",
        label: <Checkbox className="Checkbox-text">Mexican (1)</Checkbox>,
        className: "lable-child-text",
      },
      {
        key: "6",
        label: <Checkbox className="Checkbox-text">Pizza (1) (1)</Checkbox>,
        className: "lable-child-text",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub4",
    label: "Size",
    className: "label-tex-heading",

    children: [
      {
        key: "7",
        label: <Checkbox className="Checkbox-text">Small (0)</Checkbox>,
        className: "lable-child-text",
      },
      {
        key: "8",
        label: <Checkbox className="Checkbox-text">Medium (0)</Checkbox>,
        className: "lable-child-text",
      },
      {
        key: "9",
        label: <Checkbox className="Checkbox-text">Large (0)</Checkbox>,
        className: "lable-child-text",
      },
      {
        key: "10",
        label: <Checkbox className="Checkbox-text">Regular (0)</Checkbox>,
        className: "lable-child-text",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub5",
    label: "Brand",
    className: "label-tex-heading",

    children: [
      {
        key: "11",
        label: <Checkbox className="Checkbox-text">Burger King (1)</Checkbox>,
        className: "lable-child-text",
      },
      {
        key: "12",
        label: <Checkbox className="Checkbox-text">KFC (2)</Checkbox>,
        className: "lable-child-text",
      },
      {
        key: "13",
        label: <Checkbox className="Checkbox-text">Taco Bell (1)</Checkbox>,
        className: "lable-child-text",
      },
      {
        key: "14",
        label: <Checkbox className="Checkbox-text">Pizza Hut (0)</Checkbox>,
        className: "lable-child-text",
      },
    ],
  },
];
function MainFoodCollection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [Row, setRow] = useState(true);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="BreadRolls-first-div">
            <div className="sort-by-text-div">Sort by:</div>
            <NavDropdown
              title="Best selling"
              id="pizza-nav-dropdown"
              className="custom-nav-dropdown"
            >
              <div className="custom-dropdown-wrapper">
                <NavDropdown.Item className="custom-dropdown-item" href="#">
                  Featured
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item" href="#">
                  Best selling
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item" href="#">
                  Alphabetically, A-Z
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item" href="#">
                  Alphabetically, Z-A
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item" href="#">
                  Price, low to high
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item" href="#">
                  Price, high to low
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item" href="#">
                  Date, old to new
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item" href="#">
                  Date, new to old
                </NavDropdown.Item>
              </div>
            </NavDropdown>
            <div className="sort-by-text-div">6 products</div>

            <div className="row-btn">
              <button
                className={Row ? "active" : ""}
                onClick={() => setRow(true)}
              >
                <TableOutlined />
              </button>
              <button
                className={!Row ? "active" : ""}
                onClick={() => setRow(false)}
              >
                <BarsOutlined />
              </button>
            </div>
          </div>
          <div className="recponsiv">
            {" "}
            <div className="menu-bhar-div2">
              <Button className="filter-btn" onClick={showDrawer}>
                {" "}
                <FilterOutlined /> Filter and sort
              </Button>
            </div>
            <div className="recpons-text">
              <h1>6 products</h1>
            </div>
          </div>
          {Row ? (
            <>
              {" "}
              <div className="BreadRolls-main-sec-div">
                {" "}
                <div className="menu-bhar-div">
                  <Menu
                    onClick={onClick}
                    className="breadRolls-menu"
                    defaultSelectedKeys={[""]} // select "Option 1"
                    defaultOpenKeys={["sub1", "sub2", "sub3", "sub4", "sub5"]} // open submenus
                    mode="inline"
                    items={items}
                  />
                </div>
                <div className="das-carts-div">
                  <div className="item-card">
                    <div className="first-card">
                      <div className="img-hover-wrap">
                        <img className="img-main" src={Latest1} alt="" />
                        <img className="img-hover" src={Latest2} alt="" />
                      </div>

                      <div className="diccount-div">
                        <h1>-14%</h1>
                      </div>
                      <div className="hart-card">
                        <HeartOutlined />
                      </div>
                      <div className="categori-card">
                        <img className="categori-img" src={categori} alt="" />
                      </div>
                      <div className="chicken-pizza-text">
                        <h1>Chees Italian chicken Pizza</h1>
                      </div>
                      <div className="stars-reating">
                        <Rate allowHalf defaultValue={1} />
                      </div>
                      <div className="money-text">
                        <h1>$290.00 </h1>
                        <span>$250.00</span>
                      </div>
                      <div className="opt-btn-mein">
                        <Button className="options-btn" onClick={showModal}>
                          options
                        </Button>
                        <Modal
                          closable={{ "aria-label": "Custom Close Button" }}
                          className="model-btn-food"
                          width={1200}
                          open={isModalOpen}
                          onOk={handleOk}
                          onCancel={handleCancel}
                          footer={false}
                        >
                          <>
                            <div className="model-main-div-text">
                              <div className="img-model-main-div">
                                <img src={Latest5} alt="" />
                              </div>
                              <div className="model-main-div-text2">
                                <div className="chicken-text2">
                                  <h1>Chees Italian chicken Pizza</h1>
                                </div>
                                <div className="chicken-text2">
                                  <h2>$250.00</h2>
                                </div>
                                <div className="md-pera-te">
                                  About this item This gourmet dish. This
                                  delicious delicacy comes in a ready to house
                                  party. This delicious This delicacy of the
                                  Gharana cuisin prepared with soft pieces...
                                </div>
                                <div className="Availability-div">
                                  <h1>Availability :</h1>
                                  <span></span>
                                  <h1>1000 in stock</h1>
                                </div>
                                <div className="size-model-btn-div">
                                  <h1>Size</h1>
                                  <div className="btton-size-div-food-model">
                                    <button>Small</button>
                                    <button>Medium</button>
                                    <button>Large</button>
                                  </div>
                                </div>
                                <div className="size-model-btn-div">
                                  <h1>Quantity</h1>
                                  <div className="btton-Quantity-div-food-model">
                                    <div className="count-div">
                                      <button className="less-button">-</button>
                                      <h1>5</h1>
                                      <button>+</button>
                                    </div>
                                    <button className="ORDER-DIV">
                                      ORDER NOW
                                    </button>
                                  </div>
                                </div>
                                <div className="buy-it-now-btn-div">
                                  <button>BUY IT NOW</button>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    SKU <span>:</span>
                                  </h1>
                                  <span>NHFL5-2</span>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Vendor <span>:</span>
                                  </h1>
                                  <a href="">Taco Bell</a>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Category <span>:</span>
                                  </h1>
                                  <a href="">Mexican</a>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Tags <span>:</span>
                                  </h1>
                                  <a href="">Detroit Pizza,</a>
                                  <a href="">Neapolitan Pizza,</a>
                                  <a href="">Turkey burger</a>
                                </div>
                                <div className="view-div">
                                  <h1>
                                    View full product details{" "}
                                    <ArrowRightOutlined className="ArrowRight-icon-view" />
                                  </h1>
                                  {/* <img src={} alt="" /> */}
                                </div>
                              </div>
                            </div>
                          </>
                        </Modal>
                      </div>
                    </div>
                  </div>
                  <div className="item-card">
                    <div className="first-card">
                      <div className="img-hover-wrap">
                        <img className="img-main" src={Latest3} alt="" />
                        <img className="img-hover" src={Latest2} alt="" />
                      </div>

                      <div className="hart-card">
                        <HeartOutlined />
                      </div>
                      <div className="categori-card">
                        <img className="categori-img" src={categori} alt="" />
                      </div>
                      <div className="chicken-pizza-text">
                        <h1>Pizza Mania Veg Loaded Pizza</h1>
                      </div>
                      <div className="stars-reating">
                        <Rate allowHalf defaultValue={4} />
                      </div>
                      <div className="money-text">
                        <span>$250.00</span>
                      </div>
                      <div className="opt-btn-mein">
                        <Button className="options-btn" onClick={showModal}>
                          options
                        </Button>
                        <Modal
                          closable={{ "aria-label": "Custom Close Button" }}
                          className="model-btn-food"
                          width={1200}
                          open={isModalOpen}
                          onOk={handleOk}
                          onCancel={handleCancel}
                          footer={false}
                        >
                          <>
                            <div className="model-main-div-text">
                              <div className="img-model-main-div">
                                <img src={Latest5} alt="" />
                              </div>
                              <div className="model-main-div-text2">
                                <div className="chicken-text2">
                                  <h1>Chees Italian chicken Pizza</h1>
                                </div>
                                <div className="chicken-text2">
                                  <h2>$250.00</h2>
                                </div>
                                <div className="md-pera-te">
                                  About this item This gourmet dish. This
                                  delicious delicacy comes in a ready to house
                                  party. This delicious This delicacy of the
                                  Gharana cuisin prepared with soft pieces...
                                </div>
                                <div className="Availability-div">
                                  <h1>Availability :</h1>
                                  <span></span>
                                  <h1>1000 in stock</h1>
                                </div>
                                <div className="size-model-btn-div">
                                  <h1>Size</h1>
                                  <div className="btton-size-div-food-model">
                                    <button>Small</button>
                                    <button>Medium</button>
                                    <button>Large</button>
                                  </div>
                                </div>
                                <div className="size-model-btn-div">
                                  <h1>Quantity</h1>
                                  <div className="btton-Quantity-div-food-model">
                                    <div className="count-div">
                                      <button className="less-button">-</button>
                                      <h1>5</h1>
                                      <button>+</button>
                                    </div>
                                    <button className="ORDER-DIV">
                                      ORDER NOW
                                    </button>
                                  </div>
                                </div>
                                <div className="buy-it-now-btn-div">
                                  <button>BUY IT NOW</button>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    SKU <span>:</span>
                                  </h1>
                                  <span>NHFL5-2</span>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Vendor <span>:</span>
                                  </h1>
                                  <a href="">Taco Bell</a>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Category <span>:</span>
                                  </h1>
                                  <a href="">Mexican</a>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Tags <span>:</span>
                                  </h1>
                                  <a href="">Detroit Pizza,</a>
                                  <a href="">Neapolitan Pizza,</a>
                                  <a href="">Turkey burger</a>
                                </div>
                                <div className="view-div">
                                  <h1>
                                    View full product details{" "}
                                    <ArrowRightOutlined className="ArrowRight-icon-view" />
                                  </h1>
                                  {/* <img src={} alt="" /> */}
                                </div>
                              </div>
                            </div>
                          </>
                        </Modal>
                      </div>
                    </div>
                  </div>
                  <div className="item-card">
                    <div className="first-card">
                      <div className="img-hover-wrap">
                        <img className="img-main" src={Latest5} alt="" />
                        <img className="img-hover" src={Latest1} alt="" />
                      </div>

                      <div className="diccount-div">
                        <h1>-13%</h1>
                      </div>
                      <div className="hart-card">
                        <HeartOutlined />
                      </div>
                      <div className="categori-card">
                        <img className="categori-img" src={categori} alt="" />
                      </div>
                      <div className="chicken-pizza-text">
                        <h1>Wendy's Spicy Chicken Nuggets</h1>
                      </div>
                      <div className="stars-reating">
                        <Rate allowHalf defaultValue={2} />
                      </div>
                      <div className="money-text">
                        <h1>$400.00 </h1>
                        <span>$350.00</span>
                      </div>
                      <div className="opt-btn-mein">
                        <Button className="options-btn" onClick={showModal}>
                          options
                        </Button>
                        <Modal
                          closable={{ "aria-label": "Custom Close Button" }}
                          className="model-btn-food"
                          width={1200}
                          open={isModalOpen}
                          onOk={handleOk}
                          onCancel={handleCancel}
                          footer={false}
                        >
                          <>
                            <div className="model-main-div-text">
                              <div className="img-model-main-div">
                                <img src={Latest5} alt="" />
                              </div>
                              <div className="model-main-div-text2">
                                <div className="chicken-text2">
                                  <h1>Chees Italian chicken Pizza</h1>
                                </div>
                                <div className="chicken-text2">
                                  <h2>$250.00</h2>
                                </div>
                                <div className="md-pera-te">
                                  About this item This gourmet dish. This
                                  delicious delicacy comes in a ready to house
                                  party. This delicious This delicacy of the
                                  Gharana cuisin prepared with soft pieces...
                                </div>
                                <div className="Availability-div">
                                  <h1>Availability :</h1>
                                  <span></span>
                                  <h1>1000 in stock</h1>
                                </div>
                                <div className="size-model-btn-div">
                                  <h1>Size</h1>
                                  <div className="btton-size-div-food-model">
                                    <button>Small</button>
                                    <button>Medium</button>
                                    <button>Large</button>
                                  </div>
                                </div>
                                <div className="size-model-btn-div">
                                  <h1>Quantity</h1>
                                  <div className="btton-Quantity-div-food-model">
                                    <div className="count-div">
                                      <button className="less-button">-</button>
                                      <h1>5</h1>
                                      <button>+</button>
                                    </div>
                                    <button className="ORDER-DIV">
                                      ORDER NOW
                                    </button>
                                  </div>
                                </div>
                                <div className="buy-it-now-btn-div">
                                  <button>BUY IT NOW</button>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    SKU <span>:</span>
                                  </h1>
                                  <span>NHFL5-2</span>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Vendor <span>:</span>
                                  </h1>
                                  <a href="">Taco Bell</a>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Category <span>:</span>
                                  </h1>
                                  <a href="">Mexican</a>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Tags <span>:</span>
                                  </h1>
                                  <a href="">Detroit Pizza,</a>
                                  <a href="">Neapolitan Pizza,</a>
                                  <a href="">Turkey burger</a>
                                </div>
                                <div className="view-div">
                                  <h1>
                                    View full product details{" "}
                                    <ArrowRightOutlined className="ArrowRight-icon-view" />
                                  </h1>
                                  {/* <img src={} alt="" /> */}
                                </div>
                              </div>
                            </div>
                          </>
                        </Modal>
                      </div>
                    </div>
                  </div>
                  <div className="item-card">
                    <div className="first-card">
                      <div className="img-hover-wrap">
                        <img className="img-main" src={Latest7} alt="" />
                        <img className="img-hover" src={Latest8} alt="" />
                      </div>

                      <div className="hart-card">
                        <HeartOutlined />
                      </div>
                      <div className="categori-card">
                        <img className="categori-img" src={categori} alt="" />
                      </div>
                      <div className="chicken-pizza-text">
                        <h1>McDonalds' Big Hug Burger</h1>
                      </div>
                      <div className="stars-reating">
                        <Rate allowHalf defaultValue={5} />
                      </div>
                      <div className="money-text">
                        <span>$235.00</span>
                      </div>
                      <div className="opt-btn-mein">
                        <Button className="options-btn" onClick={showModal}>
                          options
                        </Button>
                        <Modal
                          closable={{ "aria-label": "Custom Close Button" }}
                          className="model-btn-food"
                          width={1200}
                          open={isModalOpen}
                          onOk={handleOk}
                          onCancel={handleCancel}
                          footer={false}
                        >
                          <>
                            <div className="model-main-div-text">
                              <div className="img-model-main-div">
                                <img src={Latest5} alt="" />
                              </div>
                              <div className="model-main-div-text2">
                                <div className="chicken-text2">
                                  <h1>Chees Italian chicken Pizza</h1>
                                </div>
                                <div className="chicken-text2">
                                  <h2>$250.00</h2>
                                </div>
                                <div className="md-pera-te">
                                  About this item This gourmet dish. This
                                  delicious delicacy comes in a ready to house
                                  party. This delicious This delicacy of the
                                  Gharana cuisin prepared with soft pieces...
                                </div>
                                <div className="Availability-div">
                                  <h1>Availability :</h1>
                                  <span></span>
                                  <h1>1000 in stock</h1>
                                </div>
                                <div className="size-model-btn-div">
                                  <h1>Size</h1>
                                  <div className="btton-size-div-food-model">
                                    <button>Small</button>
                                    <button>Medium</button>
                                    <button>Large</button>
                                  </div>
                                </div>
                                <div className="size-model-btn-div">
                                  <h1>Quantity</h1>
                                  <div className="btton-Quantity-div-food-model">
                                    <div className="count-div">
                                      <button className="less-button">-</button>
                                      <h1>5</h1>
                                      <button>+</button>
                                    </div>
                                    <button className="ORDER-DIV">
                                      ORDER NOW
                                    </button>
                                  </div>
                                </div>
                                <div className="buy-it-now-btn-div">
                                  <button>BUY IT NOW</button>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    SKU <span>:</span>
                                  </h1>
                                  <span>NHFL5-2</span>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Vendor <span>:</span>
                                  </h1>
                                  <a href="">Taco Bell</a>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Category <span>:</span>
                                  </h1>
                                  <a href="">Mexican</a>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Tags <span>:</span>
                                  </h1>
                                  <a href="">Detroit Pizza,</a>
                                  <a href="">Neapolitan Pizza,</a>
                                  <a href="">Turkey burger</a>
                                </div>
                                <div className="view-div">
                                  <h1>
                                    View full product details{" "}
                                    <ArrowRightOutlined className="ArrowRight-icon-view" />
                                  </h1>
                                  {/* <img src={} alt="" /> */}
                                </div>
                              </div>
                            </div>
                          </>
                        </Modal>
                      </div>
                    </div>
                  </div>
                  <div className="item-card">
                    <div className="first-card">
                      <div className="img-hover-wrap">
                        <img className="img-main" src={Latest9} alt="" />
                        <img className="img-hover" src={Latest10} alt="" />
                      </div>

                      <div className="diccount-div">
                        <h1>-7%</h1>
                      </div>
                      <div className="hart-card">
                        <HeartOutlined />
                      </div>
                      <div className="categori-card">
                        <img className="categori-img" src={categori} alt="" />
                      </div>
                      <div className="chicken-pizza-text">
                        <h1>Coca Cola With Ice Cubes</h1>
                      </div>
                      <div className="stars-reating">
                        <Rate allowHalf defaultValue={2} />
                      </div>
                      <div className="money-text">
                        <h1>$97.00 </h1>
                        <span>$90.00</span>
                      </div>
                      <div className="opt-btn-mein">
                        <Button className="options-btn" onClick={showModal}>
                          options
                        </Button>
                        <Modal
                          closable={{ "aria-label": "Custom Close Button" }}
                          className="model-btn-food"
                          width={1200}
                          open={isModalOpen}
                          onOk={handleOk}
                          onCancel={handleCancel}
                          footer={false}
                        >
                          <>
                            <div className="model-main-div-text">
                              <div className="img-model-main-div">
                                <img src={Latest5} alt="" />
                              </div>
                              <div className="model-main-div-text2">
                                <div className="chicken-text2">
                                  <h1>Chees Italian chicken Pizza</h1>
                                </div>
                                <div className="chicken-text2">
                                  <h2>$250.00</h2>
                                </div>
                                <div className="md-pera-te">
                                  About this item This gourmet dish. This
                                  delicious delicacy comes in a ready to house
                                  party. This delicious This delicacy of the
                                  Gharana cuisin prepared with soft pieces...
                                </div>
                                <div className="Availability-div">
                                  <h1>Availability :</h1>
                                  <span></span>
                                  <h1>1000 in stock</h1>
                                </div>
                                <div className="size-model-btn-div">
                                  <h1>Size</h1>
                                  <div className="btton-size-div-food-model">
                                    <button>Small</button>
                                    <button>Medium</button>
                                    <button>Large</button>
                                  </div>
                                </div>
                                <div className="size-model-btn-div">
                                  <h1>Quantity</h1>
                                  <div className="btton-Quantity-div-food-model">
                                    <div className="count-div">
                                      <button className="less-button">-</button>
                                      <h1>5</h1>
                                      <button>+</button>
                                    </div>
                                    <button className="ORDER-DIV">
                                      ORDER NOW
                                    </button>
                                  </div>
                                </div>
                                <div className="buy-it-now-btn-div">
                                  <button>BUY IT NOW</button>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    SKU <span>:</span>
                                  </h1>
                                  <span>NHFL5-2</span>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Vendor <span>:</span>
                                  </h1>
                                  <a href="">Taco Bell</a>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Category <span>:</span>
                                  </h1>
                                  <a href="">Mexican</a>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Tags <span>:</span>
                                  </h1>
                                  <a href="">Detroit Pizza,</a>
                                  <a href="">Neapolitan Pizza,</a>
                                  <a href="">Turkey burger</a>
                                </div>
                                <div className="view-div">
                                  <h1>
                                    View full product details{" "}
                                    <ArrowRightOutlined className="ArrowRight-icon-view" />
                                  </h1>
                                  {/* <img src={} alt="" /> */}
                                </div>
                              </div>
                            </div>
                          </>
                        </Modal>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="item-card">
                    <div className="first-card">
                      <div className="img-hover-wrap">
                        <img className="img-main" src={Latest2} alt="" />
                        <img className="img-hover" src={Latest11} alt="" />
                      </div>

                      <div className="diccount-div">
                        <h1>-11%</h1>
                      </div>
                      <div className="hart-card">
                        <HeartOutlined />
                      </div>
                      <div className="categori-card">
                        <img className="categori-img" src={categori} alt="" />
                      </div>
                      <div className="chicken-pizza-text">
                        <h1>Butter Chicken Tikka Pizza</h1>
                      </div>
                      <div className="stars-reating">
                        <Rate allowHalf defaultValue={4} />
                      </div>
                      <div className="money-text">
                        <h1>$19.00 </h1>
                        <span>$17.00</span>
                      </div>
                      <div className="opt-btn-mein">
                        <Button className="options-btn" onClick={showModal}>
                          options
                        </Button>
                        <Modal
                          closable={{ "aria-label": "Custom Close Button" }}
                          className="model-btn-food"
                          width={1200}
                          open={isModalOpen}
                          onOk={handleOk}
                          onCancel={handleCancel}
                          footer={false}
                        >
                          <>
                            <div className="model-main-div-text">
                              <div className="img-model-main-div">
                                <img src={Latest5} alt="" />
                              </div>
                              <div className="model-main-div-text2">
                                <div className="chicken-text2">
                                  <h1>Chees Italian chicken Pizza</h1>
                                </div>
                                <div className="chicken-text2">
                                  <h2>$250.00</h2>
                                </div>
                                <div className="md-pera-te">
                                  About this item This gourmet dish. This
                                  delicious delicacy comes in a ready to house
                                  party. This delicious This delicacy of the
                                  Gharana cuisin prepared with soft pieces...
                                </div>
                                <div className="Availability-div">
                                  <h1>Availability :</h1>
                                  <span></span>
                                  <h1>1000 in stock</h1>
                                </div>
                                <div className="size-model-btn-div">
                                  <h1>Size</h1>
                                  <div className="btton-size-div-food-model">
                                    <button>Small</button>
                                    <button>Medium</button>
                                    <button>Large</button>
                                  </div>
                                </div>
                                <div className="size-model-btn-div">
                                  <h1>Quantity</h1>
                                  <div className="btton-Quantity-div-food-model">
                                    <div className="count-div">
                                      <button className="less-button">-</button>
                                      <h1>5</h1>
                                      <button>+</button>
                                    </div>
                                    <button className="ORDER-DIV">
                                      ORDER NOW
                                    </button>
                                  </div>
                                </div>
                                <div className="buy-it-now-btn-div">
                                  <button>BUY IT NOW</button>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    SKU <span>:</span>
                                  </h1>
                                  <span>NHFL5-2</span>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Vendor <span>:</span>
                                  </h1>
                                  <a href="">Taco Bell</a>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Category <span>:</span>
                                  </h1>
                                  <a href="">Mexican</a>
                                </div>
                                <div className="sku-div">
                                  <h1>
                                    Tags <span>:</span>
                                  </h1>
                                  <a href="">Detroit Pizza,</a>
                                  <a href="">Neapolitan Pizza,</a>
                                  <a href="">Turkey burger</a>
                                </div>
                                <div className="view-div">
                                  <h1>
                                    View full product details{" "}
                                    <ArrowRightOutlined className="ArrowRight-icon-view" />
                                  </h1>
                                  {/* <img src={} alt="" /> */}
                                </div>
                              </div>
                            </div>
                          </>
                        </Modal>
                      </div>
                    </div>{" "}
                    <Drawer
                      title=" Filter"
                      closable={{ "aria-label": "Close Button" }}
                      onClose={onClose}
                      open={open}
                      className="Drawer-div-filter"
                    >
                      <div className="menu-bhar-div2">
                        <Menu
                          onClick={onClick}
                          className="breadRolls-menu"
                          defaultSelectedKeys={[""]}  
                          defaultOpenKeys={[
                            "sub1",
                            "sub2",
                            "sub3",
                            "sub4",
                            "sub5",
                          ]} // open submenus
                          mode="inline"
                          items={items}
                        />
                      </div>
                    </Drawer>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="BreadRolls-main-sec-div">
                {" "}
                <div className="menu-bhar-div">
                  <Menu
                    onClick={onClick}
                    className="breadRolls-menu"
                    defaultSelectedKeys={[""]} // select "Option 1"
                    defaultOpenKeys={["sub1", "sub2", "sub3", "sub4", "sub5"]} // open submenus
                    mode="inline"
                    items={items}
                  />
                </div>
                <div className="das-carts-div1">
                  <div className="item-card2">
                    <div className="first-card2">
                      <div className="card-pizza-first-div">
                        <div className="img-hover-wrap2">
                          <img className="img-main" src={Latest1} alt="" />
                          <img className="img-hover" src={Latest2} alt="" />
                        </div>

                        <div className="diccount-div2">
                          <h1>-14%</h1>
                        </div>
                        <div className="hart-card">
                          <HeartOutlined />
                        </div>
                        <div className="categori-card">
                          <img className="categori-img" src={categori} alt="" />
                        </div>
                      </div>
                      <div className="card-pizza-sec-div">
                        <div className="chicken-pizza-text2">
                          <h1>Chees Italian chicken Pizza</h1>
                        </div>
                        <div className="stars-reating2">
                          <Rate allowHalf defaultValue={1} />
                        </div>
                        <div className="main-food-pera-text">
                          About this item This gourmet dish. This delicious
                          delicacy comes in a ready to house party. This
                          delicious This delicacy of the Gharana cuisin prepared
                          with soft pieces...
                        </div>
                        <div className="money-text2">
                          <h1>$290.00 </h1>
                          <span>$250.00</span>
                        </div>
                        <div className="opt-btn-mein2">
                          <Button className="options-btn">options</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-card2">
                    <div className="first-card2">
                      <div className="card-pizza-first-div">
                        <div className="img-hover-wrap2">
                          <img className="img-main" src={Latest3} alt="" />
                          <img className="img-hover" src={Latest2} alt="" />
                        </div>

                        <div className="hart-card">
                          <HeartOutlined />
                        </div>
                        <div className="categori-card">
                          <img className="categori-img" src={categori} alt="" />
                        </div>
                      </div>
                      <div className="card-pizza-sec-div">
                        <div className="chicken-pizza-text2">
                          <h1>Pizza Mania Veg Loaded Pizza</h1>
                        </div>
                        <div className="stars-reating2">
                          <Rate allowHalf defaultValue={1} />
                        </div>
                        <div className="main-food-pera-text">
                          About this item This gourmet dish. This delicious
                          delicacy comes in a ready to house party. This
                          delicious This delicacy of the Gharana cuisin prepared
                          with soft pieces...
                        </div>
                        <div className="money-text2">
                          <span>$100.00</span>
                        </div>
                        <div className="opt-btn-mein2">
                          <Button className="options-btn">options</Button>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="item-card2">
                    <div className="first-card2">
                      <div className="card-pizza-first-div">
                        <div className="img-hover-wrap2">
                          <img className="img-main" src={Latest5} alt="" />
                          <img className="img-hover" src={Latest1} alt="" />
                        </div>

                        <div className="diccount-div2">
                          <h1>-13%</h1>
                        </div>
                        <div className="hart-card">
                          <HeartOutlined />
                        </div>
                        <div className="categori-card">
                          <img className="categori-img" src={categori} alt="" />
                        </div>
                      </div>
                      <div className="card-pizza-sec-div">
                        <div className="chicken-pizza-text2">
                          <h1>Wendy's Spicy Chicken Nuggets</h1>
                        </div>
                        <div className="stars-reating2">
                          <Rate allowHalf defaultValue={1} />
                        </div>
                        <div className="main-food-pera-text">
                          About this item This gourmet dish. This delicious
                          delicacy comes in a ready to house party. This
                          delicious This delicacy of the Gharana cuisin prepared
                          with soft pieces...
                        </div>
                        <div className="money-text2">
                          <h1>$400.00 </h1>
                          <span>$350.00</span>
                        </div>
                        <div className="opt-btn-mein2">
                          <Button className="options-btn">options</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-card2">
                    <div className="first-card2">
                      <div className="card-pizza-first-div">
                        <div className="img-hover-wrap2">
                          <img className="img-main" src={Latest7} alt="" />
                          <img className="img-hover" src={Latest8} alt="" />
                        </div>

                        <div className="diccount-div2">
                          <h1>-13%</h1>
                        </div>
                        <div className="hart-card">
                          <HeartOutlined />
                        </div>
                        <div className="categori-card">
                          <img className="categori-img" src={categori} alt="" />
                        </div>
                      </div>
                      <div className="card-pizza-sec-div">
                        <div className="chicken-pizza-text2">
                          <h1>McDonalds' Big Hug Burger</h1>
                        </div>
                        <div className="stars-reating2">
                          <Rate allowHalf defaultValue={1} />
                        </div>
                        <div className="main-food-pera-text">
                          About this item This gourmet dish. This delicious
                          delicacy comes in a ready to house party. This
                          delicious This delicacy of the Gharana cuisin prepared
                          with soft pieces...
                        </div>
                        <div className="money-text2">
                          <span>$235.00</span>
                        </div>
                        <div className="opt-btn-mein2">
                          <Button className="options-btn">options</Button>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="item-card2">
                    <div className="first-card2">
                      <div className="card-pizza-first-div">
                        <div className="img-hover-wrap2">
                          <img className="img-main" src={Latest9} alt="" />
                          <img className="img-hover" src={Latest10} alt="" />
                        </div>

                        <div className="diccount-div2">
                          <h1>-7%</h1>
                        </div>
                        <div className="hart-card">
                          <HeartOutlined />
                        </div>
                        <div className="categori-card">
                          <img className="categori-img" src={categori} alt="" />
                        </div>
                      </div>
                      <div className="card-pizza-sec-div">
                        <div className="chicken-pizza-text2">
                          <h1>Coca Cola With Ice Cubes</h1>
                        </div>
                        <div className="stars-reating2">
                          <Rate allowHalf defaultValue={1} />
                        </div>
                        <div className="main-food-pera-text">
                          About this item This gourmet dish. This delicious
                          delicacy comes in a ready to house party. This
                          delicious This delicacy of the Gharana cuisin prepared
                          with soft pieces...
                        </div>
                        <div className="money-text2">
                          <h1>$97.00 </h1>
                          <span>$90.00</span>
                        </div>
                        <div className="opt-btn-mein2">
                          <Button className="options-btn">options</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-card2">
                    <div className="first-card2">
                      <div className="card-pizza-first-div">
                        <div className="img-hover-wrap2">
                          <img className="img-main" src={Latest2} alt="" />
                          <img className="img-hover" src={Latest11} alt="" />
                        </div>

                        <div className="diccount-div2">
                          <h1>-11%</h1>
                        </div>
                        <div className="hart-card">
                          <HeartOutlined />
                        </div>
                        <div className="categori-card">
                          <img className="categori-img" src={categori} alt="" />
                        </div>
                      </div>
                      <div className="card-pizza-sec-div">
                        <div className="chicken-pizza-text2">
                          <h1>Butter Chicken Tikka Pizza</h1>
                        </div>
                        <div className="stars-reating2">
                          <Rate allowHalf defaultValue={1} />
                        </div>
                        <div className="main-food-pera-text">
                          About this item This gourmet dish. This delicious
                          delicacy comes in a ready to house party. This
                          delicious This delicacy of the Gharana cuisin prepared
                          with soft pieces...
                        </div>
                        <div className="money-text2">
                          <h1>$19.00 </h1>
                          <span>$17.00</span>
                        </div>
                        <div className="opt-btn-mein2">
                          <Button className="options-btn">options</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Drawer
                    title="Basic Drawer"
                    closable={{ "aria-label": "Close Button" }}
                    onClose={onClose}
                    open={open}
                    className="Drawer-div-filter"
                  >
                    {/* <div className="menu-bhar-div">
                      <Menu
                        onClick={onClick}
                        className="breadRolls-menu"
                        defaultSelectedKeys={[""]} // select "Option 1"
                        defaultOpenKeys={[
                          "sub1",
                          "sub2",
                          "sub3",
                          "sub4",
                          "sub5",
                           
                        ]} // open submenus
                        mode="inline"
                        items={items}
                      />
                    </div> */}
                  </Drawer>{" "}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default MainFoodCollection;
