import React from "react";
import Herotxt from "../common/Herotxt";
import "./preparation.scss";
import step from "../img/step 1-6.png";
import step2 from "../img/step 2-4.png";
import step3 from "../img/step 3-3.png";
import arrow1 from "../img/2.svg";
import arrow2 from "../img/1.svg";

const Preparation = () => {
  return (
    <div className="preparation">
      <div className="preparation__header">
        <Herotxt text="Easy to cook, easy to serve!" />
      </div>

      <div className="grid-recipe">
        <div className="grid-recipe__items">
          <img src={step} alt="" />
          <p className="grid-recipe__para">
            For every cup of Saffola Oats, add 1 ½ cups of water in a pan
          </p>
        </div>
        <div className="grid-recipe__items">
          <img src={arrow1} alt="arrow1" />
        </div>
        <div className="grid-recipe__items">
          <div className="grid-recipe__items">
            <div className="grid-recipe__items">
              <img src={step2} alt="" />
              <p className="grid-recipe__para">
                For every cup of Saffola Oats, add 1 ½ cups of water in a pan
              </p>
            </div>
          </div>
          {/* </p> */}
        </div>

        <div className="grid-recipe__items">
          <img src={arrow2} alt="arrow2" />
        </div>

        <div className="grid-recipe__items">
          <img src={step3} alt="" />
          <p className="grid-recipe__para">
            Serve hot to enjoy the distinct flavours. Garnish with veggies,
            herbs and choice of toppings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preparation;
