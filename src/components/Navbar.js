import React, { useState } from "react";
import Logo from "../img/logo.png";
import "./navbar.scss";
import Button from "./../common/Button";
import { Link, Button as ButtonS, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(!open);

  React.useEffect(() => {
    setClose(!open);
  }, [open]);
  return (
    <>
      <header
        className={open ? "header navbar" : "header navbar overlay bgRed"}
        >
        <nav className="flex flex-jc-sb flex-ai-c">
          <a href="#" className="header__logo ">
            <img src={Logo} alt="Logo" />
          </a>

          <div
            className={open ? "header__menu" : "header__menu open"}
            onClick={() => setOpen(!open)}>
            <span
              style={{
                backgroundColor: open ? "#db0812" : "#FCC517",
              }}></span>
            <span
              style={{
                backgroundColor: open ? "#db0812" : "#FCC517",
              }}></span>
            <span
              style={{
                backgroundColor: open ? "#db0812" : "#FCC517",
              }}></span>
          </div>
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

      <div className={close ? "nav-content" : "nav-content hide"}>
        <li>
          <Link activeClass="active" to="landingPage" spy={true} smooth={true}>
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
      </div>
    </>
  );
};

export default Navbar;
