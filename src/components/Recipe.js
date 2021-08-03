import React, { useState } from "react";
import Herotxt from "../common/Herotxt";
import "./carousel.scss";
import Carousel from "react-elastic-carousel";
import Card from "../common/Card";
import CardImg from "../img/img1.png";
import CardImg2 from "../img/img-7.png";
import { useMediaQuery } from "react-responsive";

const Recipe = () => {
  const [items, setItems] = useState([
    { id: 1, image: "item #2" },
    { id: 2, image: "item #2" },
    { id: 3, image: "item #3" },
    { id: 4, image: "item #4" },
    { id: 5, image: "item #5" },
  ]);

   const isDesktopOrLaptop = useMediaQuery({
     query: "(min-width: 1224px)",
   });
  return (
    <div className="carousel">
      <div className="carousel__main">
        <Herotxt 
          text="Steaming Yummy Recipes"
          stext="with Saffola Masala Oats"
          fontSize={"3.75rem"}
        />
      </div>

      <Carousel itemsToShow={isDesktopOrLaptop ? 3 : 1} pagination={false}>
        {items.map((item) => (
          <div key={item.id}>
            <Card image={CardImg2} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Recipe;
