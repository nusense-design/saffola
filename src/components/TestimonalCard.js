import React from 'react'
import testimonal from "../img/quote.svg";
import "./testimonals.scss";

const TestimonalCard = () => {
    return (
      <div>
        <div className="grid-item flex-center">
          <img className="grid-item__image" src={testimonal} alt="" />
          <p className="grid-item__para">
            Saffola Masala Oats is a good option to increase the fiber content
            in your food and minimize carbohydrates in your diet.
          </p>
          <div className="grid-item__author">
            <h3 className="grid-item__author_heading">Jane Doe</h3>
            <p className="grid-item__author_para">Entrepreneur</p>
          </div>
        </div>
      </div>
    );
}

export default TestimonalCard
