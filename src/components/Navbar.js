import React from "react";
import Logo from "../img/logo.png";
import "./navbar.scss";
import Button from "./../common/Button";
import {
  Link,
  Button as ButtonS,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = () => {
  return (
    <header className="header navbar">
      <nav className="flex flex-jc-sb flex-ai-c">
        <a href="#" className="header__logo ">
          <img src={Logo} alt="Logo" />
        </a>

        <a href="#" className="header__menu">
          <span></span>
          <span></span>
          <span></span>
        </a>
        <ul className="flex header__as">
          <li>
            <Link
              activeClass="active"
              to="landingPage"
              spy={true}
              smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="products" spy={true} smooth={true}>
              Products
            </Link>
          </li>
          {/* <Link to="features">Features</Link> */}
          <li>
            <Link to="features" spy={true} smooth={true}>
              Features
            </Link>
          </li>
          <li>
          <Link to="preparation" spy={true} smooth={true}>
            Preparation
          </Link>

          </li>
          <li>
          <Link to="recipe" spy={true} smooth={true}>
            Recipe
          </Link>

          </li>
          <li>

          <Link to="testimonals" spy={true} smooth={true}>
            Testimonials
          </Link>
          </li>

          <Button />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
