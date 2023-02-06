import Logo from "../../images/Logo.svg";
import Arrowdown from "../../images/arrow-down.svg";
import "./navigation.css";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="header__nav">
        <Link to="/">
          <img src={Logo} alt="iwosan" className="header__logo" />
        </Link>
        <ul
          className="header__links"
          style={{
            right: isOpen ? "0" : "-250%",
          }}
        >
          <li>
            <NavLink
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              to="/"
              className="header__link"
            >
              HOME
            </NavLink>
          </li>
          <li
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <NavLink to="/investment" className="header__link">
              OUR INVESTMENT ATTRIBUTES
            </NavLink>
          </li>
          {/* dropdown */}
          <div className="dropdown-container">
            <li className="about">
              <span>
                ABOUT US
                <img src={Arrowdown} alt="drop" />
              </span>
              <ul className="dropdown-menu">
                <li
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <NavLink to="/team" className="dropdown__link fade">
                    OUR TEAM
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <NavLink to="/gorvenance" className="dropdown__link">
                    CORPORATE GOVERNANCE
                  </NavLink>
                </li>
              </ul>
            </li>
          </div>
          {/* end of dropdown */}
          <li>
            <NavLink
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              to="/news"
              className="header__link"
            >
              NEWS
            </NavLink>
          </li>

          <li>
            <a
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              href="https://www.lagoonhospitals.com/"
              target="_blank"
              className="header__link"
            >
              PORTFOLIO
            </a>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              to="/contact"
              className="header__link last"
            >
              CONTACT US
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              to="/newsletter"
              className="header__link last"
            >
              NEWSLETTER
            </NavLink>
          </li>
        </ul>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="hamburger"
        >
          <span className={isOpen ? "close1" : "open"}></span>
          <span className={isOpen ? "close2" : "open"}></span>
          <span className={isOpen ? "close3" : "open"}></span>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
