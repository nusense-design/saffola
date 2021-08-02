import React from "react";
import Herotxt from "../common/Herotxt";
import oats from "../img/oats-3.svg";
import vegies from "../img/vegetable.svg"
import noPreserve from "../img/no additives -3.svg"
import fiber from "../img/hi fiber.svg";
import clock from "../img/clock.svg"
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
            <p>
              100% <br />
              wholegrain oats
            </p>
          </div>
          <div className="fetaures__grid__child">
            <img src={vegies} alt="oats" />
            <p>
              Real <br />
              Vegetables*
            </p>
          </div>
          <div className="fetaures__grid__child">
            <img src={noPreserve} alt="oats" />
            <p>No added <br/> preservatives</p>
          </div>
          <div className="fetaures__grid__child">
            <img src={fiber} alt="oats" />
            <p>
              Keeps you <br />
              fuller for longer**
            </p>
          </div>
          <div className="fetaures__grid__child">
            <img src={oats} alt="oats" />
            <p>Upto 70% <br/>less fat***</p>
          </div>
          <div className="fetaures__grid__child">
            <img src={clock} alt="oats" />
            <p>Ready in 3 minutes</p>
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
