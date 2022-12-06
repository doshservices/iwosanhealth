import "./contact.css";
import Footer from "../navigation/footer";
import curve1 from "../../images/curved-bg1.svg";

const Contact = () => {
  return (
    <>
      <div className="contact-Us">
        <img src={curve1} className="curve1" alt="" />
        <img src={curve1} className="curve2" alt="" />
        <img src={curve1} className="curve3" alt="" />
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
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5843622716648!2d3.4334656739012455!3d6.447374824045553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4dcf2e85e85%3A0xd8b0fddae96a1695!2sc%2C%204%20Onisiwo%20Rd%2C%20Ikoyi%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1669859095766!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <p>Unit C, 4 Onisiwo Street, Ikoyi</p>
      </div>
      <div className="ecg">
        <section className="join flex">
          <img src={curve1} className="bg1" alt="" />
          <img src={curve1} className="bg2" alt="" />
          <div className="mail flex-350-item">
            <h2>Join Our Mailing List</h2>
            <p>
              Sign up via our free email subscription service to receive
              notifications when new information is available.
            </p>
          </div>
          <div className="suscribe flex-350-item">
            <div>
              <input type="email" placeholder="Enter your email" />
              <button>Suscribe</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
