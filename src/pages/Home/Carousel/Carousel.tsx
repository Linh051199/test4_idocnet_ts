import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Carousel.module.scss";
import CarouselItem from "./CarouselItem";

const cx = classNames.bind(styles);

const items = [
  {
    img: "https://themes.muffingroup.com/be/hotel/wp-content/uploads/revslider/hotel/slide-hotel-2-bg.jpg",
    text: "https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/slide-hotel-2-1.png",
  },

  {
    img: "https://themes.muffingroup.com/be/hotel/wp-content/uploads/revslider/hotel/slide-hotel-1-bg.jpg",
    text: "https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/slide-hotel-1-1.png",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cx("carousel")}>
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} height={"100%"} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
