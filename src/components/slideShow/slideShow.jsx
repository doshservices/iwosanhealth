import { useState, useEffect, useRef } from "react";
import Slide1 from "../../images/Slider 1 1.svg";
import slide2 from "../../images/New banner 2 1.svg";
import slide3 from "../../images/slider3.jpg";
import slide4 from "../../images/slider4.jpg";
import slide5 from "../../images/slider5.jpg";
import "./slideshow.css";

const slideImages = [slide2, Slide1, slide3, slide4, slide5];
const delay = 10000;

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
    </>
  );
};
export default Slideshow;
