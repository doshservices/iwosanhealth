import Slideshow from "../slideShow/slideShow";
import "./home.css";
import Bordergreen from "../../images/border.svg";
import Verified from "../../images/verified.svg";
import Innovative from "../../images/innovative.svg";
import Patient from "../../images/patient.svg";
import Testimony from "../testimonial";
import Femaleworker from "../../images/female-team.png";
import Maleworker from "../../images/male-team.png";
import Count from "./count";
import Footer from "../navigation/footer";

const Home = () => {
  return (
    <>
      <Slideshow />
      <section className="about-us flex">
        <figure className="flex-450-item">
          <img src={Maleworker} />
          <img src={Femaleworker} />
        </figure>
        <div className="flex-450-item">
          <h2>Here is a little about who we are.</h2>
          <img src={Bordergreen} alt="border" />
          <p>
            Iwosan Investments Limited is a privately held healthcare asset and
            investment company dedicated to financing and developing brownfield
            and greenfield multi-specialist healthcare facilities in West
            Africa. Established in 2021, the group has set out to transform the
            standards of healthcare delivery and administration in Nigeria in
            keeping with global best practices.
          </p>
          <a href="" className="contact-btn" role="button">
            Contact Us
          </a>
        </div>
      </section>
      <section className="what-we-do">
        <h2>What We Do</h2>
        <img src={Bordergreen} alt="border" />
        <div className="flex">
          <div className="flex-280-item">
            <img src={Patient} alt="" />
            <h3>We are a Patient First organization</h3>
            <p>
              We are a consistently patient-first, world-class healthcare
              services provider.
            </p>
          </div>
          <div className="flex-280-item">
            <img src={Innovative} alt="" />
            <h3>
              We are Innovative <br />
              and so much more
            </h3>
            <p>
              We are empathetic, ethical, knowledge-driven, innovative, and
              accessible.
            </p>
          </div>
          <div className="flex-280-item">
            <img src={Verified} alt="" />
            <h3>
              We are Innovative <br />
              and so much more
            </h3>
            <p>
              We are empathetic, ethical, knowledge-driven, innovative, and
              accessible.
            </p>
          </div>
        </div>
      </section>
      <section className="join flex">
        <div className="mail flex-350-item">
          <h2>Join Our Mailing List</h2>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit
          </p>
        </div>
        <div className="suscribe flex-350-item">
          <div>
            <input type="email" placeholder="Enter your email" />
            <button>Suscribe</button>
          </div>
        </div>
      </section>
      <Count />
      <Testimony />
      <Footer />
    </>
  );
};
export default Home;
