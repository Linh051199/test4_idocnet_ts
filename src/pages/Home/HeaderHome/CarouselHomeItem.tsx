import classNames from "classnames/bind";

import styles from "./HeaderHome.module.scss";
import { dataHomeCarousel } from "../../../data";
import { IHomeCarousel } from "../../../configs/type";
import { useEffect } from "react";

const cx = classNames.bind(styles);

interface IProps {
  data: IHomeCarousel;
  index: number;
}
const CarouselHomeItem: React.FC<IProps> = ({ data, index }) => {
  return (
    <div className={cx("carousel__item")}>
      <div className={cx("carousel__itemImage")}>
        <img src={data.img} alt="img" />
      </div>
      <div className={cx("carousel__itemText")}>
        <img src={data.text} alt="img" />
      </div>
    </div>
  );
};

export default CarouselHomeItem;
