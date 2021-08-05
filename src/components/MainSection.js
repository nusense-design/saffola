import Herotxt from "./../common/Herotxt";
import { useMediaQuery } from "react-responsive";
import "./main.scss";

const MainSection = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <div className="main-section grid grid-c2">
      <div></div>
      <div>
        <Herotxt
          className="herotxt"
          text="Lip-smacking "
          stext="flavours to"
          color="#fff"
          subColor="rgb(252, 197, 23)"
          subTxt="snack healthy"
          fontSize={isDesktopOrLaptop ? "4.5rem" : "3rem"}
        />
        <p className="para subherotxt">With wholegrain oats + real veggies</p>
      </div>
      <p className="grid_span_full flex flex-ai-c main-section__para">
        Disclaimer: Vegetables are dehydrated to maintain goodness and taste,
        Creative visualization, Suggested garnishing
      </p>
    </div>
  );
};

export default MainSection;
