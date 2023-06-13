import React from "react";
import classNames from "classnames/bind";

import styles from "./Slider.module.scss";

const cx = classNames.bind(styles);

interface IProps {
  item: {
    img: string;
    text: string;
  };
  width: string;
}
const SliderItem: React.FC<IProps> = ({ item, width }) => {
  return (
    <div>
      <div className={cx("slider-item")} style={{ width: width }}>
        <img className={cx("slider-img")} src={item.img} alt="img" />
        <div className={cx("slider-text")}>
          <img src={item.text} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
