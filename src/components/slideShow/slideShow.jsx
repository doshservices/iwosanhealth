import { useState, useEffect, useRef } from "react";
import slide2 from "../../images/New banner 2 1.svg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";
import slide5 from "../../images/slider5.jpg";
import "./slideshow.css";
import { sliderData } from "./sliderData";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  const intervalTime = 10000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide])

  return (
    <>
      <div className="slideshow">
        {sliderData.map((slide, index) => {
          return (
            <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
              {
                index === currentSlide && (
                  <>
                    <img src={slide.image} alt="slide" className="sliderimg" />
                    <div className="wrapper">
                      <div className="content">
                        <div>
                          <h1>{slide.heading}</h1>
                          <p>{slide.paragragh}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            </div>
          )
        })}
      </div>
    </>
  );
};
export default Slideshow;
