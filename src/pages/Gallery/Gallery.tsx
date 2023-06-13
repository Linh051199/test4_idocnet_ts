import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Gallery.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeaderFixed from "../../components/HeaderFixed/HeaderFixed";

const cx = classNames.bind(styles);

const dataImages = [
  {
    id: 1,
    src: "https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/home_hotel_gallery_6.jpg",
  },

  {
    id: 2,
    src: "https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/home_hotel_gallery_1.jpg",
  },

  {
    id: 3,
    src: "https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/home_hotel_gallery_1.jpg",
  },

  {
    id: 4,
    src: "https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/home_hotel_gallery_1.jpg",
  },

  {
    id: 5,
    src: "https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/home_hotel_gallery_1.jpg",
  },

  {
    id: 6,
    src: "https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/home_hotel_gallery_1.jpg",
  },

  {
    id: 7,
    src: "https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/home_hotel_gallery_1.jpg",
  },
];

const Gallery = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showCarouselImage1, setShowCarouselImage1] = useState<boolean>(false);

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

  const handleShowCarousel1 = () => {
    setShowCarouselImage1(true);
  };
  return (
    <div className={cx("wrapper", "grid")}>
      {show && <HeaderFixed active="ourHotel" />}
      <Header active="gallery" title="Gallery" />
      <div className={cx("iamge", "grid")}>
        <div className={cx("list__iamge", "grid", "wide")}>
          {dataImages.map((item) => (
            <div
              key={item.id}
              className={cx("list__iamgeItem")}
              onClick={handleShowCarousel1}
            >
              <img src={item.src} alt="img" />
            </div>
          ))}
        </div>
      </div>

      {showCarouselImage1 && (
        <div className={cx("carousel1__wrapper")}>
          <div className={cx("carousel1__overlay")}></div>
          <div
            className={cx("btnCloseCarousel1")}
            onClick={() => setShowCarouselImage1(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>

          <div className={cx("carousel1__container")}>
            <img src={dataImages[1].src} alt="img" />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Gallery;
