import "./contact.css";
import map from "../../images/google-map.png";

const Contact = () => {
  return (
    <>
      <div className="contact-Us">
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
    </>
  );
};
export default Contact;
