import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/mobile/bg1.png";
import img2 from "../img/mobile/bg2.png";
import imgMobile1 from "../img/mobile/bg-mobile1.png";
import imgMobile2 from "../img/mobile/bg-mobile2.png";
import { useMediaQuery } from "react-responsive";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mainpage.scss";

function MainPage() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <div className="mainpage">
      <div className="carousel__container">
        <Carousel interval={"50000"} fade>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image"
              src={isDesktopOrLaptop ? img1 : imgMobile1}
              alt="First slide"
            />
            <Carousel.Caption className="carosel__head">
              <h3 className="carousel__head">
                Lip-smacking flavours to snack healthy
              </h3>
              <p className="carousel__text">
                With wholegrain oats + real veggies
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel__image  "
              src={isDesktopOrLaptop ? img2 : imgMobile2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="carousel__head">
                Oh-so delicious! A snack for your anytime cravings!
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default MainPage;
