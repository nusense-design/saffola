import React from "react";
import "./cardcc.scss";
import {
  FaConciergeBell,
  FaRegClock,
 
} from "react-icons/fa";
import img from "../img/web/up arrow-front.svg"
const CardCC = ({ image, text }) => {
    
    const [toggle,setToggle] = React.useState(false)
  return (
    <div className="card">
      <div
        className={toggle ? "card__inner is-flipped" : "card__inner"}
        // className="card__inner"
        onClick={() => setToggle(!toggle)}>
        <div className="card__face card__face--front">
          <div className="heading">
            <h2>{text}</h2>
            <div className="entries">
              <span>
                <FaConciergeBell />
                {" 5"}
              </span>
              <span>
                <FaRegClock /> 10min
              </span>
            </div>
            <img
              className="heading_arrow"
              src={img}
              alt=""
            />
          </div>
          <img src={image} className="card__face--front__image" alt="" />
        </div>
        <div className="card__face card__face--back">
          <div className="card__content">
            <h3>Ingredients:</h3>
            <h3>
              <p>
                Saffola Peppy Tomato Oats – 40 g Saffola Active oil – 2 tbsp 5
                ml Cumin seeds – 1 tsp 2 g Carrot – ½ cup 100 g Capsicum &amp;
                Onion – ½ cup 50 g each Spinach Tortilla - 2 x 100 g
              </p>
            </h3>
            <h3>Methods:</h3>
            <p>
              1. Follow the directions to cook Saffola Peppy Tomato Oats and set
              them aside to cool 2. Heat Saffola Active Oil in a pan and add
              cumin seeds, capsicum, onion, salt to taste, and black pepper.
              Cook for 3-4 minutes on a low flame 3. Keep a spinach tortilla on
              a plate and spread some oats on top.{" "}
            </p>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

CardCC.defaultProps = {
  text: "Peppy Tomato Vegetable Roll",
};

export default CardCC;
