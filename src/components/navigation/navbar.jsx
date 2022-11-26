import Logo from "../../images/Logo.svg";
import Arrowdown from "../../images/arrow-down.svg";
import "./navigation.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const menuRef = useRef();
  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setIsDrop(false);
  //     }
  //   };
  //   document.addEventListener("mouseout", handler);
  //   return () => {
  //     document.removeEventListener("mouseout", handler);
  //   };
  // });

  return (
    <header>
      <nav className="header__nav">
        <img src={Logo} alt="iwosan" className="header__logo" />
        <ul
          // useref={menuRef}
          className="header__links"
          style={{
            right: isOpen ? "0" : "-150%",
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
          <li
            // useref={menuRef}
            onMouseOver={() => {
              setIsDrop(!isDrop);
            }}
            // useref={menuRef}
            className="about"
          >
            ABOUT US
            <img
              className={isDrop ? "transform-true" : "transform-false"}
              src={Arrowdown}
              alt="drop"
            />
          </li>
          {isDrop && (
            <ul useref={menuRef} className="dropdown-menu">
              <li
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <Link
                  onClick={() => {
                    setIsDrop(!isDrop);
                  }}
                  to="/investment"
                  className="dropdown__link"
                >
                  OUR INVESTMENT ATTRIBUTES
                </Link>
              </li>
              <li
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <Link
                  onClick={() => {
                    setIsDrop(!isDrop);
                  }}
                  to="/team"
                  className="dropdown__link fade"
                >
                  OUR TEAM
                </Link>
              </li>
              <li
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <Link
                  onClick={() => {
                    setIsDrop(!isDrop);
                  }}
                  to="/gorvenance"
                  className="dropdown__link"
                >
                  CORPORATE GOVERNANCE
                </Link>
              </li>
            </ul>
          )}
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
          <li>
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              to="carrers"
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
              className="header__link"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          // ref={menuRef}
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
