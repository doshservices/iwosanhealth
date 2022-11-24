import "./navigation.css"
import Logo from "../../images/Logo.svg"
import Linkedin from "../../images/icons8-linkedin.svg"
import Facebook from "../../images/icons8-facebook-f.svg"
import Instagram from "../../images/icons8-instagram.svg"
import Twitter from "../../images/twitter-icon.svg"



const Footer = () => {
    return(
        <>
        <footer>
        <section className="flex">
      <div className="about-logo">
        <img className="footer__logo" src={Logo} alt=""/>
        <p>
          Iwosan Investments Limited is a privately held healthcare asset and
          investment company dedicated to financing and developing brownfield
          and greenfield multi-specialist healthcare facilities in West Africa.
        </p>
      </div>
      <nav>
        <ul>
          <h4>Pages</h4>
          <li><a href="">Our Team</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">News</a></li>
        </ul>
        <div className="contact">
          <h4>Contact Us</h4>
          <a href="tel:+234705462535535">+234705462535535</a>
          <a href="mailto:m.info@iwosaninvestments.com">info@iwosaninvestments.com</a>
        </div>
        <div className="social-links">
          <h4>Follow Us</h4>
          <div>
            <a href="">
                <img src={Instagram} alt=""/>
            </a>
            <a href=""><img src={Linkedin} alt=""/>
            </a>
            <a href=""><img src={Facebook} alt=""/>
            </a>
            <a href="">
                <img src={Twitter} alt=""/>
            </a>
          </div>
        </div>
      </nav>
    </section>
    <p className="copyright">© 2022 Iwoson Investment.</p>
    </footer>
    </>
    )
}

export default Footer;