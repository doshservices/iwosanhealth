import "./navigation.css";
import Logo from "../../images/Logo.svg";
import Linkedin from "../../images/icons8-linkedin.svg";
import Facebook from "../../images/icons8-facebook-f.svg";
import Instagram from "../../images/icons8-instagram.svg";
import Twitter from "../../images/twitter-icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="flex">
          <div className="about-logo">
            <Link to="/home">
              <img className="footer__logo" src={Logo} alt="" />
            </Link>
            <p>
              Iwosan Investments Limited is a privately held healthcare asset
              and investment company dedicated to financing and developing
              brownfield and greenfield multi-specialist healthcare facilities
              in West Africa.
            </p>
          </div>
          <nav>
            <ul className="quick-links">
              <h4>Quick links</h4>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <a href="https://www.lagoonhospitals.com/" target="_blank">
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

              <a href="mailto:m.info@iwosanhealth.com">info@iwosanhealth.com</a>
              <p>Lagos, Nigeria</p>
            </div>
            <div className="social-links">
              <h4>Follow Us</h4>
              <div>
                <a
                  href="https://www.instagram.com/iwosaninvestments/"
                  target="_blank"
                >
                  <img src={Instagram} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/iwosan-investments-limited/"
                  target="_blank"
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
