import React from "react";

import "./secondSection.scss";

const Products = () => {
  return (
    <div className="second-section">
      <div className="second-section__img"></div>
      <div className="second-section__txt">
        <div className="flexColContainer">
          <div className="flexColContainer__mainTxt">Classic Masala</div>
          <p className="flexColContainer__subtxt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            id fuga cumque maxime voluptas vel deserunt corporis ullam minima
            sit.
          </p>
        </div>
        <div className="second-section__child">
          <span className="second-section__child__txt">
            Top your bowl of classic masala oats with<br/> crushed peanuts for the
            extra bite
          </span>{" "}
         
        </div>
      </div>
    </div>
  );
};

export default Products;
