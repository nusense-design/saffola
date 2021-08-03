import React from "react";
import LandingPage from "./LandingPage";
import Products from "./Products";
import Features from "./Features";
import Preparation from "./Preparation";
import Testimonals from "./Testimonals";
import Footer from "./Footer";
import Recipe from "./Recipe";

const Home = () => {
  return (
    <div>
      <div id="landingPage">
        <LandingPage />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="preparation">
        <Preparation />
      </div>
      <div id="recipe">
        <Recipe />
      </div>
      <div id="testimonals">
        <Testimonals />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
