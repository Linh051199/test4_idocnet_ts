import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./CarouselOur.module.scss";
import { dataOurCarousel } from "../../../data";
import CarouselOurItem from "./CarouselOurItem";

const cx = classNames.bind(styles);

const CarouselOur = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSearchForm, setShowSearchForm] = useState(false);

  console.log("🚀 ~ activeIndex:", activeIndex);
  console.log("true");

  useEffect(() => {}, [activeIndex]);

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= dataOurCarousel.length) {
      newIndex = dataOurCarousel.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className={cx("wrapper", "grid")}>
      <h4>We provide awesomness!</h4>

      <div className={cx("container", "grid", "wide")}>
        <div
          className={cx("btn__prev")}
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>

        <div className={cx("carousel")}>
          <div
            className={cx("inner")}
            style={{ transform: `translate(-${activeIndex * 100}%)` }}
          >
            {dataOurCarousel.map((item, index) => (
              <CarouselOurItem data={item} index={index} />
            ))}
          </div>

          {/* <div className={cx("carousel__btns")}>
            <div
              className={cx("btn__prev")}
              onClick={() => updateIndex(activeIndex - 1)}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div
              className={cx("btn__next")}
              onClick={() => updateIndex(activeIndex + 1)}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div> */}
        </div>

        <div
          className={cx("btn__next")}
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      <div className={cx("carouselBtn")}>
        {dataOurCarousel?.map((item, index) => (
          <span
            className={
              activeIndex === index
                ? cx("carouselBtn__ItemActive")
                : cx("carouselBtn__Item")
            }
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselOur;
