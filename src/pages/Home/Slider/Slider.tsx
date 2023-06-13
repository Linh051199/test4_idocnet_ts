import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Slider.module.scss";
import SliderItem1 from "./SliderItem1";
import SliderItem2 from "./SliderItem2";
import SliderItem from "./SliderItem";

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

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className={cx("slider", "grid")}>
      <div
        className={cx("inner")}
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <SliderItem item={item} width={"100%"} />;
        })}
      </div>

      <div className={cx("slider-choose")}>
        <div className={cx("slider-choose-btn")}>
          <p
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </p>
          <p
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
