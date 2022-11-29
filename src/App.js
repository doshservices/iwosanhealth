import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/navigation/navbar";
import Home from "./components/home/home";
import Team from "./components/about/team";
import Governance from "./components/about/governance";
import Investment from "./components/about/investment";
import Contact from "./components/contact/contact";
import Carrer from "./components/carrers/carres";
import Blog from "./components/news/blog";
// import ScrollToTop from "react-scroll-to-top";
import { useState, useEffect } from "react";

const App = () => {
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
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gorvenance" element={<Governance />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carrers" element={<Carrer />} />
          <Route path="/news" element={<Blog />} />
        </Routes>
      </main>
      {setScroll && (
        <button onClick={scrollUp} className="top-scroll">
          &uarr;
        </button>
      )}
    </>
  );
};

export default App;
