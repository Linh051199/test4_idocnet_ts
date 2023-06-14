import React from "react";
import classNames from "classnames/bind";

import styles from "./Plan.module.scss";

const cx = classNames.bind(styles);
const Plan = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("header")}>
        <img
          src="https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/hotel_bell.png"
          alt="img"
        />

        <h2>Book your room now</h2>

        <p>
          Check pricing plan below and choose right offer for your needs. We
          provide a wide service plan so everyone will find something
          interesting. You can easily pay by paypal or credit card.
        </p>

        <img
          src="https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/hotel_price.png"
          alt="img"
        />
      </div>

      <div className={cx("footer")}>
        <div className={cx("footer__container", "grid", "wide")}>
          <h2>Choose your perfect monthly plan</h2>

          <div className={cx("footer__list")}>
            <div className={cx("footer__item")}>
              <div className={cx("footer__item1")}>
                <div className={cx("footer__item__list")}>
                  <p>Including breakfast</p>
                  <p>Room Service</p>
                  <p>Number of childrens</p>
                  <p>Lunch/Dinner</p>
                  <p>Parking</p>
                </div>
              </div>
            </div>

            <div className={cx("footer__item")}>
              <h2>Basic</h2>

              <div className={cx("footer__item__price")}>
                <sub className={cx("footer__item__priceTitle")}>$</sub>
                <p>29</p>
                <sub>/monthly</sub>
              </div>

              <div className={cx("footer__item__priceSeparateTop")}></div>

              <div className={cx("footer__item__list")}>
                <p>YES</p>
                <p>Not available</p>
                <p>0</p>
                <p className={cx("no")}>
                  <i className="fa-solid fa-circle"></i>
                </p>
                <p>NO</p>
              </div>

              <div className={cx("footer__item__btn")}>
                <p>Sign up now</p>
              </div>
            </div>

            <div className={cx("footer__item", "footer__itemActive")}>
              <h2>Standard</h2>

              <div className={cx("footer__item__price")}>
                <sub className={cx("footer__item__priceTitle")}>$</sub>
                <p>39</p>
                <sub>/monthly</sub>
              </div>

              <div className={cx("footer__item__priceSeparateTop")}></div>

              <div className={cx("footer__item__list")}>
                <p>YES</p>
                <p>Available</p>
                <p>up to 2</p>
                <p className={cx("active")}>
                  <i className="fa-solid fa-circle"></i>
                </p>
                <p>NO</p>
              </div>

              <div className={cx("footer__item__btn")}>
                <p>Sign up now</p>
              </div>
            </div>

            <div className={cx("footer__item")}>
              <h2>Professional</h2>

              <div className={cx("footer__item__price")}>
                <sub className={cx("footer__item__priceTitle")}>$</sub>
                <p>49</p>
                <sub>/monthly</sub>
              </div>

              <div className={cx("footer__item__priceSeparateTop")}></div>

              <div className={cx("footer__item__list")}>
                <p>YES</p>
                <p>Available</p>
                <p>up to 4</p>
                <p className={cx("active")}>
                  <i className="fa-solid fa-circle"></i>
                </p>
                <p>YES</p>
              </div>

              <div className={cx("footer__item__btn")}>
                <p>Sign up now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
