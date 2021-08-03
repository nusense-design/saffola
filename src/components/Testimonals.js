import React from "react";
import "./testimonals.scss";
import testimonal from "../img/quote.svg";
import Herotxt from "../common/Herotxt";
import TestimonalCard from './TestimonalCard';
import { useMediaQuery } from "react-responsive";

const Testimonals = () => {
 const isDesktopOrLaptop = useMediaQuery({
   query: "(min-width: 1224px)",
 });

  return (
    <div className="testimonals">
      <div className="testimonals__header">
        <Herotxt text="From one foodie to another" />
      </div>
      <div className="grid">
        {isDesktopOrLaptop ? (
          <>
            {" "}
            <TestimonalCard />
            <TestimonalCard />
            <TestimonalCard />
          </>
        ) : (
          <TestimonalCard />
        )}
      </div>
    </div>
  );
};

export default Testimonals;
