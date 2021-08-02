import React from "react";

const Button = ({ color, bgColor, text }) => {
  return (
    <button
      className="button"
      style={{ color: `${color}`, backgroundColor: `${bgColor}` }}>
      <span className="btntxt">{text}</span>
    </button>
  );
};

Button.defaultProps = {
  bgColor: "#FCC517",
  color: "#DB0812",
  text: "Buy Now",
};

export default Button;
