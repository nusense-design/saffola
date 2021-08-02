import React from "react";
import "./card.scss"

const Card = ({ image }) => {
  return (
    <div className="card-container">
      <div class="content">
        <div className="card">
          <div class="front" style={{ backgroundImage: `url(${image})` }}>
            <p>Peppy Tomato Vegetable Roll</p>
          </div>
          <div class="back">
            <h3 className="back__title">Ingredients</h3>
            <p className="back__para">
              Saffola Peppy Tomato Oats – 40 g Saffola Active oil – 2 tbsp 5 ml
              Cumin seeds – 1 tsp 2 g Carrot – ½ cup 100 g Capsicum & Onion – ½
              cup 50 g each Spinach Tortilla - 2 x 100 g
            </p>
            <h3 className="back__title"> Method</h3>
            <p className="back__para">
              1. Follow the directions to cook Saffola Peppy Tomato Oats and set
              them aside to cool 2. Heat Saffola Active Oil in a pan and add
              cumin seeds, capsicum, onion, salt to taste, and black pepper.
              Cook for 3-4 minutes on a low flame 3. Keep a spinach tortilla on
              a plate and spread some oats on top.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
