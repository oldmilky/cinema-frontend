import { FC } from "react";
import SlideArrow from "./SlideArrow";
import SlideItem from "./SlideItem";
import { ISlide } from "./Slider.interface";
import s from "./Slider.module.scss";
import { useSlider } from "./useSlider";

interface ISlider {
  slides: ISlide[];
  buttonTitle?: string;
}

const Slider: FC<ISlider> = ({ buttonTitle, slides }) => {
  const { handleClick, index, isNext, isPrev, slideIn } = useSlider(
    slides.length
  );

  return (
    <div className={s.slider}>
      <SlideItem slide={slides[index]} buttonTitle={buttonTitle} />

      {isPrev && (
        <SlideArrow variant="left" clickHandler={() => handleClick("prev")} />
      )}

      {isNext && (
        <SlideArrow variant="right" clickHandler={() => handleClick("next")} />
      )}
    </div>
  );
};

export default Slider;
