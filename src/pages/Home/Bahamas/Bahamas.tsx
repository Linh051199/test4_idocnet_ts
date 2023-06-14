import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Bahamas.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const cx = classNames.bind(styles);

const Bahamas = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className={cx("container", "grid", "wide")}>
      <h2>See what the bahamas are</h2>

      <div className={cx("link")} onClick={() => setShowVideo(true)}>
        <p>
          <i className="fa-solid fa-play"></i>
        </p>
      </div>
      <p>
        It's better in the Bahamas! Welcome to the Out Islands of the Bahamas,
        or as we like to call it the REAL Bahamas. This video is about the
        island of Eleuthera and Harbour Island.
      </p>

      {showVideo && (
        <div className={cx("video")}>
          <div
            className={cx("video__btnClose")}
            onClick={() => setShowVideo(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>

          <div className={cx("video__overlay")}></div>
          <div className={cx("video__container")}>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/lFgDmj1vsJE"
                title="YouTube video"
                //   allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bahamas;
