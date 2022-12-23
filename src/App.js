import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navigation/navbar";
import Home from "./components/home/home";
import Team from "./components/about/team";
import Governance from "./components/about/governance";
import Investment from "./components/about/investment";
import Contact from "./components/contact/contact";
import Carrer from "./components/carrers/carres";
import Blog from "./components/news/blog";
import ScrollToTop from "./ScrollToTop";
import Cookies from "./Cookie";
import Policy from "./policy/policy";

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
          <Route path="/privacy-policy" element={<Policy />} />
        </Routes>
      </main>
      {backToTopButton && (
        <button onClick={scrollUp} className="top-scroll">
          &uarr;
        </button>
      )}
      <Cookies />

    </>
  );
};

export default App;
