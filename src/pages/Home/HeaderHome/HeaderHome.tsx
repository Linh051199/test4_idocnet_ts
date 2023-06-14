import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./HeaderHome.module.scss";
import { dataHomeCarousel } from "../../../data";
import CarouselHomeItem from "./CarouselHomeItem";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const HeaderHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSearchForm, setShowSearchForm] = useState(false);

  useEffect(() => {}, [activeIndex]);

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= dataHomeCarousel.length) {
      newIndex = dataHomeCarousel.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("carousel")}>
        <div
          className={cx("inner")}
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {dataHomeCarousel.map((item, index) => (
            <CarouselHomeItem data={item} index={index} />
          ))}
          {/* <CarouselHomeItem1 />
          <CarouselHomeItem2 /> */}
        </div>

        <div className={cx("carousel__btns")}>
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
        </div>

        <div className={cx("carousel__images")}>
          <div
            className={cx("carousel__images1")}
            onClick={() => updateIndex(activeIndex - 1)}
          >
            <img src={dataHomeCarousel[0].img} alt="img" />

            <span>Luxury Space</span>
          </div>
          <div className={cx("carousel__images2")}>
            <img
              src={dataHomeCarousel[1].img}
              alt="img"
              onClick={() => updateIndex(activeIndex + 1)}
            />
            <span>Luxury Space</span>
          </div>
        </div>
      </div>

      <div className={cx("nav")}>
        <div className={cx("nav__container", "grid", "wide")}>
          <div className={cx("header__bottom")}>
            <div className={cx("main", "grid", "wide")}>
              <div className={cx("header__top")}>
                <div className={cx("header__topInfo")}>
                  <div className={cx("header__topInfoQuestion")}>
                    Have any questions?
                  </div>
                  <div className={cx("header__topInfoItem")}>
                    <i className="fa-solid fa-phone"></i>
                    <p>+61 383 766 284</p>
                  </div>
                  <div className={cx("header__topInfoItem")}>
                    <i className="fa-solid fa-envelope"></i>
                    <p>noreply@envato.com</p>
                  </div>
                </div>
                <div className={cx("header__topIcon")}>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-vimeo-v"></i>
                  <i className="fa-brands fa-youtube"></i>
                  <i className="fa-brands fa-flickr"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-brands fa-pinterest-p"></i>
                  <i className="fa-brands fa-dribbble"></i>
                </div>
              </div>
              <div className={cx("header__bottom")}>
                <div className={cx("header__bottomNav")}>
                  <Link to={"/test4_idocnet_ts/"}>
                    <div className={cx("header__bottomNav__logo")}>
                      <img
                        src="https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/retina-hotel.png"
                        alt="img"
                      />
                    </div>
                  </Link>

                  <div className={cx("header__bottomNav__list")}>
                    <Link to={"/test4_idocnet_ts/"} className={cx("active")}>
                      <span>Home</span>
                    </Link>

                    <Link to={"/test4_idocnet_ts/our"} className={cx("")}>
                      <span>Our hotel</span>
                    </Link>

                    <a>
                      <span>Rooms</span>
                    </a>

                    <Link to={"/test4_idocnet_ts/gallery"} className={cx("")}>
                      <span>Gallery</span>
                    </Link>

                    <a>
                      <span>Contact us</span>
                    </a>

                    <a>
                      <span>Buy now</span>
                    </a>
                  </div>

                  {showSearchForm && (
                    <div className={cx("formSerach", "showFromSearch")}>
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <input type="text" placeholder="Enter your search" />
                      <i
                        className="fa-solid fa-xmark"
                        onClick={() => setShowSearchForm(false)}
                      ></i>
                    </div>
                  )}
                </div>
                <div
                  className={cx("header__bottomSearch")}
                  onClick={() => setShowSearchForm(!showSearchForm)}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
