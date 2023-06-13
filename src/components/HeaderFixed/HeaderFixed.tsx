import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./HeaderFixed.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
interface IProps {
  active: string;
}
const HeaderFixed: React.FC<IProps> = ({ active }) => {
  const [showSearchForm, setShowSearchForm] = useState(false);

  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("nav")}>
          <Link to={"/test4_idocnet_ts/"}>
            <div className={cx("img")}>
              <img
                src="https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/retina-hotel.png"
                alt="img"
              />
            </div>
          </Link>
          <div className={cx("header__bottomNav__list")}>
            <a>
              <span>Home</span>
            </a>

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
          className={cx("btnSearch")}
          onClick={() => setShowSearchForm(!showSearchForm)}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};

export default HeaderFixed;
