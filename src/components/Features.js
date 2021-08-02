import React from "react";
import Herotxt from "../common/Herotxt";
import oats from "../img/oats-3.svg";
import img from "../img/section-img.png";
import "./features.scss";

const Features = () => {
  return (
    <div className="features ">
      <div className="features__main">
        <div className="flexCenter flex-center">
          <Herotxt
            text="Delicious and
                      healthy too!"
          />
        </div>
        <div className="features__grid">
          <div className="fetaures__grid__child">
            <img src={oats} alt="oats" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="fetaures__grid__child">
            <img src={oats} alt="oats" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="fetaures__grid__child">
            <img src={oats} alt="oats" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="fetaures__grid__child">
            <img src={oats} alt="oats" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="fetaures__grid__child">
            <img src={oats} alt="oats" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="fetaures__grid__child">
            <img src={oats} alt="oats" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <p className="features__para">
          *Vegetables are dehydrated to maintain its goodness and taste. **Oats
          have beta- glucan fiber that keeps you fuller for longer ***Study
          dated 31/08/17 based on declared nutrient information of instant
          noodles vs Saffola Masala Oats.
        </p>
      </div>

      <div className="features__image">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Features;
