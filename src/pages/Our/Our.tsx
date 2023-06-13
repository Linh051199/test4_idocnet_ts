import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Our.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeaderFixed from "../../components/HeaderFixed/HeaderFixed";

const cx = classNames.bind(styles);

const Our = () => {
  const [show, setShow] = useState<boolean>(false);
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

  return (
    <div className={cx("wrapper", "grid")}>
      {show && <HeaderFixed active="ourHotel" />}
      <Header active="ourHotel" title="Our hotel" />
      <div className={cx("aboutUS", "grid", "wide")}>
        <h2>About us</h2>
        <div className={cx("aboutUS__list")}>
          <div className={cx("aboutUS__listItem")}>
            <h3>Our company</h3>
            <div className={cx("aboutUS__listItemBody")}>
              We are Muffin group and we love what we do. We are located in
              <span> Europe</span> and reply always within 24 hours.
            </div>
            <div className={cx("aboutUS__listItemSub")}>
              Donec ullamcorper nulla non metus auctor fringilla. Sed posuere
              consectetur est at lobortis. <span> Morbi leo risus </span> ,
              porta ac consect etur, vestibulum at eros. Donec ullamcorper nulla
              non metus.
            </div>
          </div>
          <div className={cx("aboutUS__listItem")}>
            <h3>Mission</h3>
            <div className={cx("aboutUS__listItemBody")}>
              Our mission is very clear - provide best and fully tested products
              and solutions for our customers
            </div>
            <div className={cx("aboutUS__listItemSub")}>
              Donec ullamcorper nulla non metus auctor fringilla. Sed posuere
              consectetur est at lobortis. Morbi leo risus, porta ac consectetur
              ac, vestibulum at eros. Donec ullamcorper nulla non metus.
            </div>
          </div>
          <div className={cx("aboutUS__listItem")}>
            <h3>Passion</h3>
            <div className={cx("aboutUS__listItemBody")}>
              We love working with WordPress. Themes based on this web software
              gives unlimited possibilities.
            </div>
            <div className={cx("aboutUS__listItemSub")}>
              Donec ullamcorper nulla non metus auctor fringilla. Sed posuere
              consectetur est at lobortis. Morbi leo risus, porta ac consectetur
              ac, vestibulum at eros. Donec ullamcorper nulla non metus.
            </div>
          </div>
        </div>
      </div>

      <div className={cx("separate", "grid", "wide")}>
        <p></p>
      </div>

      <div className={cx("des")}>
        <div className={cx("des__container", "grid", "wide")}>
          <div className={cx("des__left")}>
            <h1>Client testimonials</h1>
            <p>
              Vestibulum quis nulla tortor. Donec diam leo, bibendum a risus et,
              interdum iaculis ligula. Donec ultricies elit ultricies est
              sollicitudin, et dignissim metus.
            </p>

            <div className={cx("button")}>
              <div className="button__link">
                <i className="fa-solid fa-link"></i>
              </div>
              <p>See more</p>
            </div>
          </div>
          <div className={cx("des__right")}>
            <p>
              <span>
                Sed elementum ante et lectus sagittis rhoncus! Sed eu mollis
              </span>
              <span>
                metus, et luctus eros. Duis ut dolor eleifend, scelerisque
                sapien
              </span>
              <span> vel, convallis sem. Etiam nullam.</span>
              <i className={cx("fa-solid fa-quote-right", "qoute")}></i>
            </p>

            <div>
              <i className="fa-solid fa-user"></i>
              Alice Boys
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Our;
