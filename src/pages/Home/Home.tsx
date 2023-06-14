import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Carousel from "./Carousel/Carousel";
import HeaderHome from "./HeaderHome/HeaderHome";
import Plan from "./Plan/Plan";
import Footer from "../../components/Footer/Footer";
import Bahamas from "./Bahamas/Bahamas";
import HeaderFixed from "../../components/HeaderFixed/HeaderFixed";

const cx = classNames.bind(styles);
const Home = () => {
  const [show, setShow] = useState<boolean>(false);
  const [footerBottom2IsVisible, setFooterBottom2IsVisible] = useState(false);

  const footerBottom2Ref: any = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setFooterBottom2IsVisible(true);
      }
    });
    observer.observe(footerBottom2Ref.current);
  }, []);

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
    <div className={cx("wrapper")}>
      {show && <HeaderFixed active="home" />}

      <HeaderHome />
      <div className={cx("welcome", "grid", "wide")}>
        <div className={cx("welcome__header__show")}>
          <h2>Welcome</h2>
          <p>
            Boutique shopping. Underwater cave explorations. Bonefishing
            adventures. Here on The Islands Of The Bahamas, every day is
            exciting. You will love this place as much as we do.
          </p>

          <div className={cx("welcome__header__btns")}>
            <div className={cx("button1")}>
              <div className="button__link">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <p>Sing up now</p>
            </div>

            <div className={cx("button2")}>
              <div className="button__link">
                <i className="fa-solid fa-book"></i>
              </div>
              <p>Read aggrements</p>
            </div>
          </div>
        </div>

        <div className={cx("welcome__body")}>
          <div className={cx("welcome__itemContainer")}>
            <div className={cx("welcome__item1")}>
              <h2>Welness & Spa</h2>
              <img
                src="https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/hotel_box_1.jpg"
                alt="img"
              />
              <p>
                The country club is fervent in providing the best tourist
                destinations all over the country.
              </p>
            </div>
          </div>
          <div className={cx("welcome__itemContainer")}>
            {" "}
            <div className={cx("welcome__item2")}>
              <h2>Business meetings</h2>
              <img
                src="https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/hotel_box_2.jpg"
                alt="img"
              />
              <p>
                Book business conference facilities. Arrange your next business
                meeting or conference event.
              </p>
            </div>
          </div>
          <div className={cx("welcome__itemContainer")}>
            {" "}
            <div className={cx("welcome__item3")}>
              <h2>Restaurant</h2>
              <img
                src="https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/hotel_box_3.jpg"
                alt="img"
              />
              <p>
                Spend your dining experiences at the best restaurants, combining
                a blend of the world's gourmet flavors.
              </p>
            </div>
          </div>
        </div>

        <div className={cx("welcome__separate")}></div>

        <div className={cx("welcome__fotter")}>
          <div className={cx("welcome__fotterItem1")}>
            <h2>About our hotel</h2>
            <img
              src="https://themes.muffingroup.com/be/hotel/wp-content/uploads/2015/02/hotel_about.jpg"
              alt="img"
            />
            <span>
              The Hotel also has 9 conference rooms suitable for congresses,
              conventions, banquets, meetings and weddings, with capacity up to
              300 people. Most of them with natural light.
            </span>
            <div className={cx("welcome__footer__btns")}>
              <div className={cx("button")}>
                <div className="button__link">
                  <i className="fa-solid fa-table-cells-large"></i>
                </div>
                <p>Read more</p>
              </div>
            </div>
          </div>

          <div
            ref={footerBottom2Ref}
            className={
              footerBottom2IsVisible
                ? cx("welcome__fotterItem2Show")
                : cx("welcome__fotterItem2")
            }
          >
            <div className={cx("welcome__fotterItem2__header")}>
              <h2>Services</h2>
              <p>
                Whether you visit our design hotel for business or pleasure, the
                warm and personal service is sure to make your stay a delight.
                <span>Enjoy the hospitality!</span>
              </p>
            </div>

            <div className={cx("welcome__fotterItem2__body")}>
              <div className={cx("welcome__fotterItem2__item")}>
                <i className="fa-solid fa-star"></i>
                <p>All day airport Transfers</p>
              </div>

              <div className={cx("welcome__fotterItem2__separate")}></div>

              <div className={cx("welcome__fotterItem2__item")}>
                <i className="fa-solid fa-star"></i>
                <p>Cheap taxi and car rental</p>
              </div>

              <div className={cx("welcome__fotterItem2__separate")}></div>

              <div className={cx("welcome__fotterItem2__item")}>
                <i className="fa-solid fa-star"></i>
                <p>Guarded parking 24h monitored</p>
              </div>

              <div className={cx("welcome__fotterItem2__separate")}></div>

              <div className={cx("welcome__fotterItem2__item")}>
                <i className="fa-solid fa-star"></i>
                <p>Wake up Calls</p>
              </div>

              <div className={cx("welcome__fotterItem2__separate")}></div>

              <div className={cx("welcome__fotterItem2__item")}>
                <i className="fa-solid fa-star"></i>
                <p>Mini Bar and safes</p>
              </div>
            </div>
          </div>

          <div className={cx("welcome__fotterItem3")}>
            <h2>What people say?</h2>
            <h4>
              <p>I appreciated the very courteous and</p>
              <span></span>
              <p>professional hotel staff. The Director of the</p>
              <span></span>
              <p> Front Office reached out in advance of our</p>
              <span></span>
              <p>stay to introduce himself. It was nice ...</p>
              <span></span>
              <i className={cx("fa-solid fa-quote-right", "qoute")}></i>
            </h4>
            <h4>
              <p>I appreciated the very courteous and</p>
              <span></span>
              <p>professional hotel staff. The Director of the</p>
              <span></span>
              <p> Front Office reached out in advance of our</p>
              <span></span>
              <p>stay to introduce himself. It was nice ...</p>
              <span></span>
              <i className={cx("fa-solid fa-quote-right", "qoute")}></i>
            </h4>
          </div>
        </div>
      </div>

      <Plan />

      <div className={cx("bahamas", "grid")}>
        <Bahamas />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
