import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

interface IProps {
  active: string;
  title: string;
}
const Header: React.FC<IProps> = ({ active, title }) => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [showMenuRes, setShowMenuRes] = useState(false);
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("header__res")}>
        <div className={cx("header__resTop", "grid", "wide")}>
          <div className={cx("header__resTopInfo")}>
            <div className={cx("header__topInfoItem")}>
              <i className="fa-solid fa-phone"></i>
              <p>+61 383 766 284</p>
            </div>
            <div className={cx("header__topInfoItem")}>
              <i className="fa-solid fa-envelope"></i>
              <p>noreply@envato.com</p>
            </div>
          </div>

          <div className={cx("header__resTopIcon")}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-vimeo-v"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-flickr"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-pinterest-p"></i>
            <i className="fa-brands fa-dribbble"></i>
          </div>
        </div>
        <div className={cx("header__resBottom", "grid", "wide")}>
          <Link to={"/test4_idocnet_ts/"}>
            <div className={cx("header__bottomNav__logo")}>
              <img
                src="https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/retina-hotel.png"
                alt="img"
              />
            </div>
          </Link>

          <div
            className={cx("header__btnMenu")}
            onClick={() => {
              setShowMenuRes(!showMenuRes);
              setShowSearchForm(false);
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </div>

          {showMenuRes && (
            <div className={cx("header__menuRes")}>
              <Link to={"/test4_idocnet_ts/"}>
                <div className={cx("header__menuResItem")}>Home</div>
              </Link>
              <Link to={"/test4_idocnet_ts/our"}>
                <div
                  className={
                    active === "ourHotel"
                      ? cx("header__menuResItem", "header__menuResActive")
                      : cx("header__menuResItem")
                  }
                >
                  Our hotel
                </div>
              </Link>
              <div className={cx("header__menuResItem")}>Rooms</div>
              <Link to={"/test4_idocnet_ts/gallery"}>
                <div
                  className={
                    active === "gallery"
                      ? cx("header__menuResItem", "header__menuResActive")
                      : cx("header__menuResItem")
                  }
                >
                  Gallery
                </div>
              </Link>
              <div className={cx("header__menuResItem")}>Contact us</div>
              <div className={cx("header__menuResItem")}>Buy now</div>
            </div>
          )}
        </div>
      </div>

      <div className={cx("main", "grid", "wide")}>
        <div
          className={cx("header__top")}
          onClick={() => setShowMenuRes(false)}
        >
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
              <Link to={"/test4_idocnet_ts/"}>
                <span>Home</span>
              </Link>

              <Link
                to={"/test4_idocnet_ts/our"}
                className={active === "ourHotel" ? cx("active") : cx("")}
              >
                <span>Our hotel</span>
              </Link>

              <a>
                <span>Rooms</span>
              </a>

              <Link
                to={"/test4_idocnet_ts/gallery"}
                className={active === "gallery" ? cx("active") : cx("")}
              >
                <span>Gallery</span>
              </Link>

              <a>
                <span>Contact us</span>
              </a>

              <a>
                <span>Buy now</span>
              </a>
            </div>
            <div
              className={cx("header__btnMenu")}
              onClick={() => {
                setShowMenuRes(!showMenuRes);
                setShowSearchForm(false);
              }}
            >
              <i className="fa-solid fa-bars"></i>
            </div>
            {showMenuRes && (
              <div className={cx("header__menuRes")}>
                <Link to={"/test4_idocnet_ts/"}>
                  <div className={cx("header__menuResItem")}>Home</div>
                </Link>
                <Link to={"/test4_idocnet_ts/our"}>
                  <div
                    className={
                      active === "ourHotel"
                        ? cx("header__menuResItem", "header__menuResActive")
                        : cx("header__menuResItem")
                    }
                  >
                    Our hotel
                  </div>
                </Link>
                <div className={cx("header__menuResItem")}>Rooms</div>
                <Link to={"/test4_idocnet_ts/gallery"}>
                  <div
                    className={
                      active === "gallery"
                        ? cx("header__menuResItem", "header__menuResActive")
                        : cx("header__menuResItem")
                    }
                  >
                    Gallery
                  </div>
                </Link>
                <div className={cx("header__menuResItem")}>Contact us</div>
                <div className={cx("header__menuResItem")}>Buy now</div>
              </div>
            )}

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
            onClick={() => {
              setShowSearchForm(!showSearchForm);
              setShowMenuRes(false);
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>

      <div className={cx("sub", "grid")}>
        <div className={cx("sub__container", "grid", "wide")}>
          <h2>{title}</h2>

          <p>
            <Link to={"/test4_idocnet_ts/"}>
              <span>Home</span>
            </Link>
            <i className="fa-solid fa-chevron-right"></i> {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
