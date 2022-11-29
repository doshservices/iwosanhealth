import { useState, useEffect, useRef } from "react";
import Slide1 from "../about/imgs/Slider new.svg";
import Banner1 from "../../images/New banner 2.svg";
import "./slideshow.css";

const slideImages = [Banner1, Slide1];
const delay = 4500;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {slideImages.map((slideImages, index) => (
            <img className="slide" key={index} src={slideImages} />
          ))}
        </div>
      </div>
      {/* <img src={Banner1} alt="" />
      <img src={Banner1} alt="" /> */}
    </>
  );
};
export default Slideshow;
