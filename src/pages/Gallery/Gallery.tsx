import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Gallery.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeaderFixed from "../../components/HeaderFixed/HeaderFixed";
import { dataGalleryCarouel1, dataGalleryCarouel2 } from "../../data";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";

const cx = classNames.bind(styles);

const Gallery = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showCarouselImage1, setShowCarouselImage1] = useState<boolean>(false);
  const [showCarouselImage2, setShowCarouselImage2] = useState<boolean>(false);
  const [currIndexCarouselImage1, setCurrIndexCarouselImage1] = useState(0);
  const [currIndexCarouselImage2, setCurrIndexCarouselImage2] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  const handleShowCarousel1 = (index: number) => {
    setShowCarouselImage1(true);
    setCurrIndexCarouselImage1(index);
  };

  const handleShowCarousel2 = (index: number) => {
    setShowCarouselImage2(true);
    setCurrIndexCarouselImage2(index);
  };
  return (
    <div className={cx("wrapper", "grid")}>
      {show && <HeaderFixed active="ourHotel" />}
      <Header active="gallery" title="Gallery" />
      <div className={cx("iamge", "grid")}>
        <div className={cx("list__iamge", "grid", "wide")}>
          <div className={cx("list__iamge__container")}>
            {dataGalleryCarouel1.map((item, index) => (
              <div
                key={item.id}
                className={cx("list__iamgeItem")}
                onClick={() => handleShowCarousel1(index)}
              >
                <img src={item.src} alt="img" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={cx("list", "grid", "wide")}>
        <div className={cx("info")}>
          <h2>Use galleries in any place you want on website.</h2>
          <p>
            You can create any galleries you want and put them in any place on
            page you need. Also galleries can have any rows, columns and items.
            So let`s create own gallery and do it just like you want.
          </p>
        </div>
        <div className={cx("list__image")}>
          {dataGalleryCarouel2.map((item, index) => (
            <div
              key={item.id}
              className={cx("list__iamgeItem")}
              onClick={() => handleShowCarousel2(index)}
            >
              <img src={item.src} alt="img" />
            </div>
          ))}
        </div>
      </div>

      {showCarouselImage1 && (
        <Carousel1
          setShowCarouselImage1={setShowCarouselImage1}
          currIndexCarouselImage1={currIndexCarouselImage1}
        />
      )}
      {showCarouselImage2 && (
        <Carousel2
          setShowCarouselImage2={setShowCarouselImage2}
          currIndexCarouselImage2={currIndexCarouselImage2}
        />
      )}
      <Footer />
    </div>
  );
};

export default Gallery;
