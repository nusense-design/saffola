import React, { useState } from "react";
import Herotxt from "../common/Herotxt";
import Carousel from "react-elastic-carousel";
import CardImg2 from "../img/web/img2.jpg"
import CardImg3 from "../img/web/img3.jpg"
import CardImg from "../img/img-7.png";
import { useMediaQuery } from "react-responsive";
import CardCC from "../common/CardCC";
import "./carousel.scss";

const Recipe = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

   const isDesktopOrLaptop = useMediaQuery({
     query: "(min-width: 1224px)",
   });
  return (
    <div className="carousel recipe">
      <div className="carousel__main">
        <Herotxt
          text="Steaming Yummy Recipes"
          stext="with Saffola Masala Oats"
          fontSize={isDesktopOrLaptop ? "3.75rem" : "2rem"}
        />
      </div>

      <Carousel
        breakPoints={breakPoints}
        itemsToShow={isDesktopOrLaptop ? 3 : 1}
        pagination={false}
        className="carousel__cards">
        <CardCC image={CardImg} />
        <CardCC image={CardImg2} text="Spinach Oats Khichdi" />
        <CardCC image={CardImg3} text="Oats Palak Paneer Uttapam" />
        <CardCC image={CardImg} />
      </Carousel>
    </div>
  );
};

export default Recipe;
