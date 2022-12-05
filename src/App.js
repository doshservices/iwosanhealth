import React from "react";
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
import { useState, useEffect } from "react";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  const [backToTopButton, setbackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
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
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gorvenance" element={<Governance />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Carrer />} />
          <Route path="/news" element={<Blog />} />
        </Routes>
      </main>
      {backToTopButton && (
        <button onClick={scrollUp} className="top-scroll">
          &uarr;
        </button>
      )}
      {/* <CookieConsent
        debug={true}
        style={{ padding: "0" }}
        location="bottom"
        buttonStyle={{
          background: "hsl(217, 73%, 12%)",
          color: "white",
          fontSize: ".9rem",
          padding: ".8rem 1rem",
        }}
        buttonText="Accept"
        expires={250}
      >
        We use cookies to improve your experience.
      </CookieConsent> */}
    </>
  );
};

export default App;
