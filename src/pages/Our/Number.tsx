import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Our.module.scss";

const cx = classNames.bind(styles);

const Number = () => {
  const [currRoom, setCurrentRoom] = useState(0);
  const [currConferanceRoom, setCurrConferanceRoom] = useState(0);
  const [currGuest, setCurrGuest] = useState(0);
  const [currYear, setCurrYear] = useState(0);

  const maxRoom = 58;
  const maxConferenceRoom = 7;
  const maxGuest = 286;
  const maxYear = 34;
  useEffect(() => {
    const roomInterval = setInterval(() => {
      setCurrentRoom((prevtate) =>
        prevtate < maxRoom ? prevtate + 1 : prevtate
      );
    }, 20);
  }, []);

  useEffect(() => {
    const roomInterval = setInterval(() => {
      setCurrConferanceRoom((prevtate) =>
        prevtate < maxConferenceRoom ? prevtate + 1 : prevtate
      );
    }, 200);
  }, []);

  useEffect(() => {
    const roomInterval = setInterval(() => {
      setCurrGuest((prevtate) =>
        prevtate < maxGuest ? prevtate + 1 : prevtate
      );
    }, 1);
  }, []);

  useEffect(() => {
    const roomInterval = setInterval(() => {
      setCurrYear((prevtate) => (prevtate < maxYear ? prevtate + 1 : prevtate));
    }, 50);
  }, []);

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
          <h2>{currConferanceRoom}</h2>
          <p>conference rooms</p>
          <span></span>
          <h4>
            Donec vestibulum justo a diam ultricies pel lentesque. Quisque
            mattis diam vel lac.
          </h4>
        </div>

        <div className={cx("number__item")}>
          <h2>{currGuest}</h2>
          <p>guests</p>
          <span></span>
          <h4>
            Donec vestibulum justo a diam ultricies pel lentesque. Quisque
            mattis diam vel lac.
          </h4>
        </div>

        <div className={cx("number__item")}>
          <h2>{currYear}</h2>
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
