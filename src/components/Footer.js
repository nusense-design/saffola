import React from "react";
import upArrow from "../img/web/up arrow-11.svg"
import "./footer.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import * as Scroll from "react-scroll";
import {
 
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

// const  =()=> {
//   scroll.scrollToTop();
// },
const Footer = () => {
  
  var scroll = Scroll.animateScroll;

  const toTop = () => {
     scroll.scrollToTop();
   }
  return (
    <div>
      <footer className="footer">
        <img src={upArrow} alt="" className="footer__arrow" onClick={()=>toTop()} />
        <div className="footer__header">
          <h3 className="footer__head">
            Follow us{" "}
            <span className="footer__head__sub">@saffolafitfoodie</span>
          </h3>
          <ul className="flex">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <ul className="footer__bottom__contact">
            <li>
              <FaEnvelope />
              <span>csc@marico.com</span>
            </li>
            <li>
              {" "}
              <FaPhone />
              <span>1800 - 2345 - 3445</span>
            </li>
          </ul>
          <ul className="footer__bottom__terms">
            <li>Terms &amp; Conditions</li>
            <li>|</li>
            <li>Privacy Policy</li>
            <li>|</li>
            <li> &copy;Saffola. All Rights Reserved</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
