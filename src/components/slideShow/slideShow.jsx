import { useState, useEffect, useRef } from "react";
import Slide1 from "../../images/Slider 1.svg";
import Slide2 from "../../images/Slider 2f.svg";
import Slide3 from "../../images/slide3.svg";
import "./slideshow.css";

const slideImages = [Slide2, Slide1, Slide3];
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
  );
};
export default Slideshow;
