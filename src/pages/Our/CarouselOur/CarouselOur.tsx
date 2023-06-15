import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./CarouselOur.module.scss";
import { dataOurCarousel } from "../../../data";
import CarouselOurItem from "./CarouselOurItem";

const cx = classNames.bind(styles);

const CarouselOur = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSearchForm, setShowSearchForm] = useState(false);

  useEffect(() => {}, [activeIndex]);

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= dataOurCarousel.length) {
      newIndex = dataOurCarousel.length - 1;
    }

    setActiveIndex(newIndex);
  };

  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(2);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex === 2) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className={cx("wrapper", "grid")}>
      <h4>We provide awesomness!</h4>

      <div className={cx("container", "grid", "wide")}>
        <div className={cx("btn__prev")} onClick={handlePrev}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>

        <div className={cx("carousel")}>
          <div
            className={cx("inner")}
            style={{ transform: `translate(-${activeIndex * 100}%)` }}
          >
            {dataOurCarousel.map((item, index) => (
              <CarouselOurItem key={index} data={item} index={index} />
            ))}
          </div>
        </div>

        <div className={cx("btn__next")} onClick={handleNext}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      <div className={cx("carouselBtn", "grid", "wide")}>
        <div className={cx("btn__prevRes")} onClick={handlePrev}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className={cx("carouselBtn___list")}>
          {dataOurCarousel?.map((item, index) => (
            <span
              key={index}
              className={
                activeIndex === index
                  ? cx("carouselBtn__ItemActive")
                  : cx("carouselBtn__Item")
              }
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>

        <div className={cx("btn__nextRes")} onClick={handleNext}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default CarouselOur;
