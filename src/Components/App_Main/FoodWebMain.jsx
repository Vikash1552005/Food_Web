import React from "react";
import NavBar from "./NavBar";
import Amazing from "./Amazing";
import ChickenBurger from "./ChickenBurger";
import ItalianPizza from "./ItalianPizza";
import ShopByCategorie from "./ShopByCategorie";
import LatestProducts from "./LatestProducts";
import DeliciousPizza from "./DeliciousPizza";
import FoodDelivery from "./FoodDelivery";
import DealWeek from "./DealWeek";
import MarqueeTag from "./MarqueeTag";
import SmericanFood from "./SmericanFood";
import Multicolumn from "./Multicolumn";
import SpecialDealOffer from "./SpecialDealOffer";
import LogosBaner from "./LogosBaner";
import LatestBlog from "./LatestBlog";
import Newsletter from "./Newsletter";
import Footer from "../App_Footer/Footer";
import Logintext from "./Logintext";
import FooterSec from "../App_Footer/FooterSec";
import ButtonSec from "./ButtonSec";
import FooterMenu from "../App_Footer/FooterMenu";

function FoodWebMain() {
  return (
    <>
      {/* <NavBar/> */}
      <ChickenBurger />
      <ItalianPizza/>
      <ShopByCategorie />
      <Amazing/>
      <LatestProducts/>
      <DeliciousPizza/>
      <FoodDelivery/>
      <DealWeek/>
      <MarqueeTag/>
      <SmericanFood/>
      <Multicolumn/>
      <SpecialDealOffer/>
      <LogosBaner/>
      <LatestBlog/>
      {/* <Newsletter/> */}
      {/* <Footer/> */}
      {/* <FooterSec/> */}
      {/* <ButtonSec/> */}
      {/* <FooterMenu/> */}
      {/* <Logintext/> */}
    </>
  );
}

export default FoodWebMain;
