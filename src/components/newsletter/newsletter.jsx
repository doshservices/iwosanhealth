import curvedbg1 from "../../images/curved-bg1.svg";
import "./newsletter.css";
import { useState, useEffect } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [items, setItems] = useState([]);
  console.log(email);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    //getting input name
    const items = JSON.parse(localStorage.getItem("Suscribe_Email_value"));
    if (items) {
      setItems(items);
    } else {
      setItems("");
    }
  }, []);

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
      <form className="newsletter">
        <div>
          <input
            type="email"
            name="Email"
            placeholder="Enter your email"
            required
            value={items}
            onChange={handleChange}
          />
          <input
            type="text"
            name="First name"
            placeholder="Enter your First name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="Last name"
            placeholder="Enter your Last name"
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            name="Phone number"
            placeholder="Enter your Phone number"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit">Suscribe</button>
      </form>
    </section>
  );
};
export default NewsLetter;
