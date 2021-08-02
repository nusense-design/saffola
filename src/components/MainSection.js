import Herotxt from "./../common/Herotxt";
import "./main.scss";

const MainSection = () => {
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
          fontSize={"4.5rem"}
        />
        <p className="para subherotxt">With wholegrain oats + real veggies</p>
      </div>
    </div>
  );
};

export default MainSection;
