import React from 'react';
import masalaBowl from "../img/classic masala-bowl.png"

const ButtonImg = ({txt,img}) => {
    return (
      <div>
        <button className="btn btnImage">
          <img
            src={img}
            alt="classic masala-bowl"
                />
                <span>{ txt}</span>
        </button>
      </div>
    );
}

ButtonImg.defaultProps = {
  txt: "Classic Masala",
  img: masalaBowl,
};

export default ButtonImg
