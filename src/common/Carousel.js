import React from 'react';
import Carousel from "react-elastic-carousel";
import PeppyTomato from "../img/web/Bitmap-61.png"
import vegieTwist from "../img/web/Bitmap-69.png"
import barley from "../img/web/barley-1.svg"


import ButtonImg from './ButtonImg';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CarouselComp = () => {
  return (
    <div>
      <Carousel
        breakPoints={breakPoints}
        itemsToShow={3}
        pagination={false}
        easing="ease-in-out"
        className="carousel-component">
        <div className="flex-center">
          <ButtonImg />
        </div>
        <div className="flex-center">
          <ButtonImg txt="Peppy Tomato" img={PeppyTomato} />
        </div>
        <div className="flex-center">
          <ButtonImg txt="Veggie Twist" img={vegieTwist} />
        </div>
        <div className="flex-center">
          <ButtonImg />
        </div>
        <div className="flex-center">
          <ButtonImg txt="Veggie Twist" img={vegieTwist} />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComp
