import { useState, useEffect } from "react";
import { sliderData } from "./sliderData";
import "./slideshow.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  const intervalTime = 10000;

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>
      <div className="slideshow">
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <>
                  <div
                    style={{
                      backgroundRepeat: "repeat-x",
                      position: "absolute",
                      height: "500px",
                      width: "100vw",
                      top: "10%",
                      zIndex: "1",
                      opacity: ".5",
                    }}
                    className="ecg"
                  >
                    {" "}
                  </div>
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
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Slideshow;
