import Logo from "../../images/Logo.svg";
import Arrowdown from "../../images/arrow-down.svg";
import "./navigation.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((current) => !current);
  };
  const [isDrop, setIsDrop] = useState(false);
  const dropDown = () => {
    setIsDrop((current) => !current);
  };

  return (
    <header>
      <nav className="header__nav">
        <img src={Logo} alt="iwosan" className="header__logo" />
        <ul
          className="header__links"
          style={{
            right: isOpen ? "0" : "-110%",
          }}
        >
          <li>
            <Link onClick={handleClick} to="/" className="header__link">
              HOME
            </Link>
          </li>
          <li onClick={dropDown} className="about">
            ABOUT US
            <img
              className={isDrop ? "transform-true" : "transform-false"}
              src={Arrowdown}
              alt="drop"
            />{" "}
          </li>
          {isDrop && (
            <ul className="dropdown-menu">
              <li onClick={handleClick}>
                <Link
                  onClick={dropDown}
                  to="/investment"
                  className="dropdown__link"
                >
                  OUR INVESTMENT ATTRIBUTES
                </Link>
              </li>
              <li onClick={handleClick}>
                <Link
                  to="/team"
                  onClick={dropDown}
                  className="dropdown__link fade"
                >
                  OUR TEAM
                </Link>
              </li>
              <li onClick={handleClick}>
                <Link
                  to="/gorvenance"
                  onClick={dropDown}
                  className="dropdown__link"
                >
                  CORPORATE GOVERNANCE
                </Link>
              </li>
            </ul>
          )}
          <li>
            <Link onClick={handleClick} to="/news" className="header__link">
              NEWS
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="carrers" className="header__link">
              CAREERS
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="/contact" className="header__link">
              CONTACT US
            </Link>
          </li>
        </ul>
        <div onClick={handleClick} className="hamburger">
          <span className={isOpen ? "close1" : "open"}></span>
          <span className={isOpen ? "close2" : "open"}></span>
          <span className={isOpen ? "close3" : "open"}></span>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
