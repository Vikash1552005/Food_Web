import React from "react";
import MainFoodCollection from "./MainFoodCollection";
import { NavLink } from "react-router-dom";

function CrunchyTacoBell() {
  return (
    <section className="BreadRolls-sec">
      <div className="Collections-heading">
        <h1> Crunchy Taco Bell</h1>
        <NavLink to="/FoodMain">Home </NavLink>
      </div>
      <div className="container">
        <MainFoodCollection />
      </div>
    </section>
  );
}

export default CrunchyTacoBell;
