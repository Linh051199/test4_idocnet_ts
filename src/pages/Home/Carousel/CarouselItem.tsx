import React from "react";
import classNames from "classnames/bind";

import styles from "./Carousel.module.scss";

const cx = classNames.bind(styles);

interface IProps {
  item: {
    img: string;
    text: string;
  };
  width: string;
  height: string;
}

const CarouselItem: React.FC<IProps> = ({ item, width, height }) => {
  return (
    <div className={cx("carousel-item")}>
      <div
        className={cx("carousel-item-img")}
        style={{ width: width, height: height }}
      >
        <img
          src={item.img}
          alt="alt"
          style={{ width: width, height: height }}
        />
      </div>
      <div className={cx("carousel-item-text")}>
        <img src={item.text} alt="img" />
      </div>
    </div>
  );
};

export default CarouselItem;
