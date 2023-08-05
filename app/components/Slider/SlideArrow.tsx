import { FC } from "react";

import MaterialIcon from "../UI/MaterialIcon";
import s from "./Slider.module.scss";

interface ISlideArrow {
  variant: "left" | "right";
  clickHandler: () => void;
}

const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandler }) => {
  const isLeft = variant === "left";

  return (
    <button
      onClick={clickHandler}
      className={`${s.arrow} ${isLeft ? s.left : s.right}`}
    >
      <MaterialIcon name={isLeft ? "MdChevronLeft" : "MdChevronRight"} />
    </button>
  );
};

export default SlideArrow;
