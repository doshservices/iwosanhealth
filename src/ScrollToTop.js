import { useState, useEffect } from "react";


const ScrollToTop = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  <>
    {setScroll && (
      <button onClick={scrollUp} className="top-scroll">
        &uarr;
      </button>
    )}
  </>;
}
export default ScrollToTop
