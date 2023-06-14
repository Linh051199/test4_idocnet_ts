import classNames from "classnames/bind";

import styles from "./CarouselOur.module.scss";
import { dataHomeCarousel } from "../../../data";
import { IGalleryCarousel } from "../../../configs/type";
import { useEffect } from "react";

const cx = classNames.bind(styles);

interface IProps {
  data: IGalleryCarousel;
  index: number;
}
const CarouselOurItem: React.FC<IProps> = ({ data, index }) => {
  return (
    <div className={cx("carousel__item")}>
      <div className={cx("carousel__itemImage")}>
        <img src={data.src} alt="img" />
      </div>
    </div>
  );
};

export default CarouselOurItem;
