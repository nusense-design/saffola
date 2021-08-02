import React from "react";

const Herotxt = ({
  text,
  stext,
  color,
  subColor,
  subTxt,
  fontSize,
  subFontSize,
}) => {
  return (
    <div
      className="herotxt"
      style={{ color: `${color}`, fontSize: `${fontSize}` }}>
      <div>{text} </div>
      <div>{stext}</div>
     
      <span style={{ color: subColor }}>{subTxt}</span>
    </div>
  );
};

Herotxt.defaultProps = {
  text: "Classic Masala",
  color: "#DB0812",
  fontSize: "3.75rem",
};

export default Herotxt;
