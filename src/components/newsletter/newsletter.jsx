import curvedbg1 from "../../images/curved-bg1.svg";
import "./newsletter.css";

const NewsLetter = () => {
  return (
    <section className="join">
      <img src={curvedbg1} className="bg1" alt="" />
      <img src={curvedbg1} className="bg2" alt="" />
      <div className="mail flex-350-item">
        <h2>Join Our Mailing List</h2>
        <p>
          Nigeria’s healthcare industry is booming with activities and we would
          like to keep you updated on the most relevant news only. Sign up to
          receive our newsletters:
        </p>
      </div>
      <form className="suscribe">
        <input
          type="text"
          name="First name"
          placeholder="Enter your First name"
        />
        <input
          type="text"
          name="Last name"
          placeholder="Enter your Last name"
        />
        <input type="email" name="Email" placeholder="Enter your email" />
        <input
          type="tel"
          name="Phone number"
          placeholder="Enter your Phone number"
        />
        <button type="submit">Suscribe</button>
      </form>
    </section>
  );
};
export default NewsLetter;
