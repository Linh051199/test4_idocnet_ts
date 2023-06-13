import React from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Slider from "./Slider/Slider";
import Carousel from "./Carousel/Carousel";

const cx = classNames.bind(styles);
const Home = () => {
  return (
    <div className={cx("wrapper")}>
      {/* <Slider /> */}
      <Carousel />
    </div>
  );
};

export default Home;
