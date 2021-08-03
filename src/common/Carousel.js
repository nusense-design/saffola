import React from "react";
import Carousel from "react-elastic-carousel";

const CarouselComponent = ({ item,grid }) => {
  const [items, setItems] = React.useState(item);
  return (
    <div>
      <Carousel itemsToShow={grid} pagination={false}>
        {items.map((item) => (
          <div key={item.id}>{item.value}</div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
