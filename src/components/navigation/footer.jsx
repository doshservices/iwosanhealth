import "./navigation.css";
import Logo from "../../images/Logo.svg";
import Linkedin from "../../images/icons8-linkedin.svg";
import Instagram from "../../images/icons8-instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="flex">
          <div className="about-logo">
            <Link to="/">
              <img className="footer__logo" src={Logo} alt="" />
            </Link>
            <p>
              Iwosan Investments is a healthcare investment company dedicated to
              investing in the Nigerian healthcare market.
            </p>
          </div>
          <nav>
            <ul className="quick-links">
              <h4>Quick links</h4>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <a
                  href="https://www.lagoonhospitals.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <Link to="/team">About Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
            <div className="contact">
              <h4>Contact Us</h4>

              <a href="mailto:m.info@iwosanhealth.com" rel="noreferrer">
                info@iwosanhealth.com
              </a>
              <p>Lagos, Nigeria</p>
            </div>
            <div className="social-links">
              <h4>Follow Us</h4>
              <div>
                <a
                  href="https://www.instagram.com/iwosaninvestments/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Instagram} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/iwosan-investments-limited/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Linkedin} alt="" />
                </a>
              </div>
            </div>
          </nav>
        </section>
        <p className="copyright">© 2022 Iwosan Investments.</p>
      </footer>
    </>
  );
};

export default Footer;
