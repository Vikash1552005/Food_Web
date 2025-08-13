import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "../src/Components/CSS/Responsive.css";

import Food_Web_Main from "./Components/App_Main/FoodWebMain";
import NavBar from "./Components/App_Main/NavBar";
import Footer from "./Components/App_Footer/Footer";
import FooterSec from "./Components/App_Footer/FooterSec";
import FooterMenu from "./Components/App_Footer/FooterMenu";
import Newsletter from "./Components/App_Main/Newsletter";
import LatestBlog2 from "./Components/App_Main/LatestBlog2";
import SandwichSec from "./Components/App_Main/SandwichSec";
import DosaSec from "./Components/App_Main/DosaSec";
import ButtonSec from "./Components/App_Main/ButtonSec";
import ServingGreat from "./Components/App_Main/ServingGreat";
import RememberSec from "./Components/App_Main/RememberSec";
import PizzasAndBurger from "./Components/App_Main/PizzasAndBurger";
import FingersSandwichSec from "./Components/App_Main/FingersSandwichSec";
import SensationSec from "./Components/App_Main/SensationSec";
import CollectionsSec from "./Components/App_Main/CollectionsSec";
import CrunchyTacoBell from "./Components/App_Main/CrunchyTacoBell";
import FrenchFries from "./Components/App_Main/FrenchFries";
import CheeseFriedChicken from "./Components/App_Main/CheeseFriedChicken";
import ChickenPizza from "./Components/App_Main/ChickenPizza";
import SpecialHotDog from "./Components/App_Main/SpecialHotDog ";
import BreadRolls from "./Components/App_Main/BreadRolls";
import HamburgerVeggie from "./Components/App_Main/HamburgerVeggie";
import MasalaPaneer from "./Components/App_Main/MasalaPaneer";
import GarlicBread from "./Components/App_Main/GarlicBread";
import DeliveryContact from "./Components/App_Main/ DeliveryContact";
import Password from "./Components/App_Main/Password";
import Popup from "./Components/App_Main/Popup";

function App() {
  const location = useLocation();

  const hideLayout = location.pathname === "/"; // can add more paths if needed

  return (
    <>
      {!hideLayout && <NavBar />}
      <Routes>
        <Route path="/FoodMain" element={<Food_Web_Main />} />
        <Route path="/Blogs" element={<LatestBlog2 />} />
        <Route path="/SandwichSec" element={<SandwichSec />} /> //1
        <Route path="/DosaSec" element={<DosaSec />} /> //2
        <Route path="/ServingGreat" element={<ServingGreat />} /> //3
        <Route path="/RememberSec" element={<RememberSec />} /> //4
        <Route path="/PizzasAndBurger" element={<PizzasAndBurger />} /> //5
        <Route
          path="/FingersSandwichSec"
          element={<FingersSandwichSec />}
        />{" "}
        <Route path="/SensationSec" element={<SensationSec />} />
        <Route path="/CollectionsSec" element={<CollectionsSec />} />
        <Route path="/SpecialHotDog" element={<SpecialHotDog />} />
        <Route path="/CrunchyTacoBell" element={<CrunchyTacoBell />} />
        <Route path="/FrenchFries" element={<FrenchFries />} />
        <Route path="/CheeseFriedChicken" element={<CheeseFriedChicken />} />
        <Route path="/ChickenPizza" element={<ChickenPizza />} />
        <Route path="/BreadRolls" element={<BreadRolls />} />
        <Route path="/HamburgerVeggie" element={<HamburgerVeggie />} />
        <Route path="/MasalaPaneer" element={<MasalaPaneer />} />
        <Route path="/GarlicBread" element={<GarlicBread />} />
        <Route path="/DeliveryContact" element={<DeliveryContact />} />
        <Route path="/" element={<Password />} />
      </Routes>{" "}
      {!hideLayout && <ButtonSec />}
      {!hideLayout && <Newsletter />}
      {!hideLayout && <Footer />}
      {!hideLayout && <FooterSec />}
      {!hideLayout && <FooterMenu />}
      {!hideLayout && <Popup />}
    </>
  );
}

export default App;
