import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Our.module.scss";

const cx = classNames.bind(styles);

const Number = () => {
  const [currRoom, setCurrentRoom] = useState(0);
  //   useEffect(() => {
  //     let roomInterval = setInterval(() => {
  //       setCurrentRoom((prevtate) => prevtate + 1);
  //     }, 20);

  //     if (currRoom === 58) {
  //       console.log("true");
  //       clearInterval(roomInterval);
  //       setCurrentRoom(58);
  //     }
  //   }, []);
  //   if (currRoom === 58) {
  //     // setCurrentRoom(58);
  //   }

  return (
    <div className={cx("number__wrapper", "grid", "wide")}>
      <div className={cx("number__container")}>
        <div className={cx("number__item")}>
          <h2>{currRoom}</h2>
          <p>rooms</p>
          <span></span>
          <h4>
            Donec vestibulum justo a diam ultricies pel lentesque. Quisque
            mattis diam vel lac.
          </h4>
        </div>

        <div className={cx("number__item")}>
          <h2>58</h2>
          <p>conference rooms</p>
          <span></span>
          <h4>
            Donec vestibulum justo a diam ultricies pel lentesque. Quisque
            mattis diam vel lac.
          </h4>
        </div>

        <div className={cx("number__item")}>
          <h2>58</h2>
          <p>guests</p>
          <span></span>
          <h4>
            Donec vestibulum justo a diam ultricies pel lentesque. Quisque
            mattis diam vel lac.
          </h4>
        </div>

        <div className={cx("number__item")}>
          <h2>58</h2>
          <p>years of experience</p>
          <span></span>
          <h4>
            Donec vestibulum justo a diam ultricies pel lentesque. Quisque
            mattis diam vel lac.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Number;
