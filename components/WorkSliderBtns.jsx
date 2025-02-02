"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

function WorkSliderBtns({
  containerStyles,
  btnStyles,
  iconStyles,
  numProjects,
}) {
  const swiper = useSwiper();

  const handlePrevious = () => {
    if (swiper.activeIndex > 0) {
      swiper.slidePrev();
    } else {
      swiper.slideTo(numProjects, 500, false);
    }
  };

  const handleNext = () => {
    if (swiper.activeIndex < numProjects) {
      swiper.slideNext();
    } else {
      swiper.slideTo(0, 500, false);
    }
  };

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={handlePrevious}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={handleNext}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
}

export default WorkSliderBtns;
