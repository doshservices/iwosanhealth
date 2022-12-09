import "../components/home/home.css";
import Bordergreen from "../images/border.svg";
import Clientsmile from "../images/client-smile.png";
import curvedbg1 from "../images/curved-bg1.svg";
import curvedbg2 from "../images/curved-bg2.svg";

const Testimony = () => {
  const button = ["<", ">"]

  return (
    <>
      <section className="testimony flex">
        <img src={curvedbg1} className="bg1" alt="" />
        <img src={curvedbg2} className="bg2" alt="" />
        <img src={curvedbg1} className="bg3" alt="" />
        <div className="flex-400-item">
          <h2>Client Testimonials</h2>
          <img src={Bordergreen} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div>
            <button>{button[0]}</button>
            <button>{button[1]}</button>
          </div>
        </div>
        <figure className="flex-400-item">
          <img src={Clientsmile} alt="client" />
        </figure>
      </section>

    </>
  );
}

export default Testimony;