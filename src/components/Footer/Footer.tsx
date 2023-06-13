import React from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import BtnGoToTop from "../BtnGoToTop/BtnGoToTop";

const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("author")}>
          <p>© 2023 Betheme by</p>
          <a> Muffin group</a>
          <span></span>
          <p>All Rights Reserved</p>
          <span></span>
          <p>Powered by</p>
          <a>WordPress</a>
        </div>
        <div className={cx("icon")}>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-vimeo-v"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-flickr"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          <i className="fa-brands fa-dribbble"></i>
          <BtnGoToTop />
        </div>
      </div>
    </div>
  );
};

export default Footer;
