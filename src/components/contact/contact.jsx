import "./contact.css";
import map from "../../images/google-map.png";
import Footer from "../navigation/footer";
import curve1 from "../../images/curved-bg1.svg";
import curve2 from "../../images/curved-bg2.svg";

const Contact = () => {
  return (
    <>
      <div className="contact-Us">
        <img src={curve1} className="curve1" alt="" />
        <img src={curve2} className="curve2" alt="" />
        <h1>Contact Us</h1>
        <p>
          Iwosan Investments Limited is a privately held healthcare asset and
          investment company dedicated to financing and developing brownfield
          and greenfield multi-specialist healthcare facility
        </p>
        <form className="contact-form">
          <div>
            <label htmlFor="name">
              Your name*
              <br />
              <input type="text" name="name" placeholder="name" />
            </label>

            <label htmlFor="email">
              Contact email*
              <br />
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
          </div>
          <div>
            <label htmlFor="Company name">
              Company name*
              <br />
              <input
                type="text"
                name="Company name"
                placeholder="Company name"
              />
            </label>
            <label htmlFor="name">
              Country*
              <br />
              <input type="text" name="Country" placeholder="Country" />
            </label>
          </div>
          <label htmlFor="message" className="message">
            Your message*
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Type your message..."
          ></textarea>
          <p>
            By submitting this form you agree to our terms and conditions and
            our Privacy Policy which explains how we may collect, use and
            disclose your personal information including to third parties.
          </p>
          <button className="contact-btn">Contact Us</button>
        </form>
      </div>
      <img src={map} alt="map" className="map" />
      {/* <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.4890134407!2d2.8801735250000102!3d6.548318399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8335fe21e09b%3A0xe0b1d19a2d5f7a6b!2sInvestment%20Ltd.!5e0!3m2!1sen!2sng!4v1669653469210!5m2!1sen!2sng"
          style={{
            width: "1600",
            height: "1550",
            style: "border:0;",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </div> */}
      <Footer />
    </>
  );
};
export default Contact;
