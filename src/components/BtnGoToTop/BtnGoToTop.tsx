import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./BtnGoToTop.module.scss";

const cx = classNames.bind(styles);

const BtnGoToTop = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(true);
    }
  };

  const handleClickBtnGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div
      className={cx("wrapper")}
      onClick={handleClickBtnGoTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <i className="fa-solid fa-chevron-up"></i>
    </div>
  );
};

export default BtnGoToTop;
