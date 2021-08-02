import React from 'react'
import Logo from "../img/logo.png";
import "./navbar.scss";
import {a} from "react-router-dom"


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
              <a href="#">Products</a>
            </li>
            <li>
              <a to="#">Features</a>
            </li>
            <li>
              <a to="#">Preparation</a>
            </li>
            <li>
              <a to="#">Recipes</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Navbar
