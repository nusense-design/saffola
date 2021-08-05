import React from "react";
import CarouselComp from "../common/Carousel";

import "./products.scss";

const Products = () => {
  return (
    <div className="second-section">
      <div className="second-section__img"></div>
      <div className="second-section__txt">
        <div className="flexColContainer">
          <div className="flexColContainer__mainTxt">Classic Masala</div>
          <p className="flexColContainer__subtxt">
            Your favourite mix desi spices now in a chatpata snack! Enjoy a bowl
            of mouth-watering Classic Masala flavour for that classic taste in
            delightful Saffola masala oats!
          </p>
        </div>
        <div className="second-section__child">
          <span className="second-section__child__txt">
            Top your bowl of classic masala oats with
            <br /> crushed peanuts for the extra bite
          </span>{" "}
        </div>
      </div>
      <div className="second-section__grid">
        <p className="second-section__grid__para flex-center">
          Disclaimer: Vegetables are dehydrated to maintain goodness and taste,
          Creative visualization, Suggested garnishing
        </p>
        <div className="second-section__grid__carousel">
          <CarouselComp />
        </div>
      </div>
    </div>
  );
};

export default Products;
