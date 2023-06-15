import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Gallery.module.scss";
import { dataGalleryCarouel2 } from "../../data";

const cx = classNames.bind(styles);

interface IProps {
  setShowCarouselImage2: any;
  currIndexCarouselImage2: number;
}

const Carousel2: React.FC<IProps> = ({
  setShowCarouselImage2,
  currIndexCarouselImage2,
}) => {
  const [currIndex, setCurrIndex] = useState(currIndexCarouselImage2);

  const handleClickImage = () => {
    if (currIndex === 5) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currIndex === 0) {
      setCurrIndex(5);
    } else {
      setCurrIndex(currIndex - 1);
    }
  };

  const handleNext = () => {
    if (currIndex === 5) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };
  return (
    <div>
      <div className={cx("carousel2__wrapper")}>
        <div
          className={cx("carousel2__overlay")}
          onClick={() => setShowCarouselImage2(false)}
        ></div>
        <div
          className={cx("btnCloseCarousel2")}
          onClick={() => setShowCarouselImage2(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className={cx("carousel2__container")}>
          <div className={cx("prevBt")} onClick={handlePrev}></div>
          <img
            src={dataGalleryCarouel2[currIndex].src}
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

export default Carousel2;
