import "../components/home/home.css";
import Bordergreen from "../images/border.svg";
import Clientsmile from "../images/client-smile.png";

const Testimony = () => {
const button = ["<", ">"]

  return (
    <>
      <div className="ecg">

    <section className="testimony flex">
    <div className="flex-400-item">
      <h2>Client Testimonials</h2>
      <img src={Bordergreen} alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div>  
        <button>{button[0]}</button><button>{button[1]}</button>
      </div>
    </div>
    <figure className="flex-400-item">
     <img src={Clientsmile} alt="client" />
    </figure>
  </section>
      </div>
  </>
)
}

export default Testimony;