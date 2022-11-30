import Logo from "../../images/Logo.svg";
import Arrowdown from "../../images/arrow-down.svg";
import "./navigation.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="header__nav">
        <img src={Logo} alt="iwosan" className="header__logo" />
        <ul
          className="header__links"
          style={{
            right: isOpen ? "0" : "-250%",
          }}
        >
          <li>
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              to="/"
              className="header__link"
            >
              HOME
            </Link>
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
                  <Link to="/team" className="dropdown__link fade">
                    OUR TEAM
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <Link to="/gorvenance" className="dropdown__link">
                    CORPORATE GOVERNANCE
                  </Link>
                </li>
              </ul>
            </li>
          </div>
          {/* end of dropdown */}
          <li>
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              to="/news"
              className="header__link"
            >
              NEWS
            </Link>
          </li>
          <li
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Link to="/investment" className="header__link">
              OUR INVESTMENTS ATTRIBUTES
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              to="career"
              className="header__link"
            >
              CAREERS
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              to="/contact"
              className="header__link last"
            >
              CONTACT US
            </Link>
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
