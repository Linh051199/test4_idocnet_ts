import React from "react";
import classNames from "classnames/bind";

import styles from "./Slider.module.scss";

const cx = classNames.bind(styles);
const SliderItem1 = () => {
  return (
    <div className={cx("slider-item", "grid")}>
      <div className={cx("slidr-item1-img")}></div>

      <div className={cx("text")}>
        <img
          src="https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/slide-hotel-2-1.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default SliderItem1;