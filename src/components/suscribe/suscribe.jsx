import "./suscribe.css";
import curvedbg1 from "../../images/curved-bg1.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export const Suscribe = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("./newsletter", { replace: true });
  };

  useEffect(() => {
    // storing input name
    localStorage.setItem("Suscribe_Email_value", JSON.stringify(email));
  }, [email]);

  return (
    <div className="suscribe">
      <img src={curvedbg1} className="bg1" alt="" />
      <img src={curvedbg1} className="bg2" alt="" />
      <div className="join-us">
        <h2>Join Our Mailing List</h2>
        <p>
          Nigeria’s healthcare industry is booming with activities and we would
          like to keep you updated on the most relevant news only. Sign up to
          receive our newsletters:
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="email"
          placeholder="Email Address"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};
