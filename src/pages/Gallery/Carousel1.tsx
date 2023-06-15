import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Gallery.module.scss";
import { dataGalleryCarouel1 } from "../../data";

const cx = classNames.bind(styles);

interface IProps {
  setShowCarouselImage1: any;
  currIndexCarouselImage1: number;
}

const Carousel1: React.FC<IProps> = ({
  setShowCarouselImage1,
  currIndexCarouselImage1,
}) => {
  const [currIndex, setCurrIndex] = useState(currIndexCarouselImage1);

  const handleClickImage = () => {
    if (currIndex === 6) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currIndex === 0) {
      setCurrIndex(6);
    } else {
      setCurrIndex(currIndex - 1);
    }
  };

  const handleNext = () => {
    if (currIndex === 6) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };
  return (
    <div>
      <div className={cx("carousel1__wrapper")}>
        <div
          className={cx("carousel1__overlay")}
          onClick={() => setShowCarouselImage1(false)}
        ></div>
        <div
          className={cx("btnCloseCarousel1")}
          onClick={() => setShowCarouselImage1(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className={cx("carousel1__container")}>
          <div className={cx("prevBt")} onClick={handlePrev}></div>
          <img
            src={dataGalleryCarouel1[currIndex].src}
            alt="img"
            onClick={handleClickImage}
          />
          <div className={cx("nextBt")} onClick={handleNext}></div>

          <div className={cx("currIndex")}>{currIndex + 1} / 7</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
