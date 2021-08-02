import React from "react";
import "./footer.scss";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__header">
            <h3 className="footer__head">
              Follow us <span className="footer__head__sub">@saffolafitfoodie</span>
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
      </footer>
    </div>
  );
};

export default Footer;
