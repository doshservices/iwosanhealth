import staffData from "./staffData";
import "./about.css";
import "./staff.css";
import oladapo from "../../images/Dapo Oshinusi.jpg";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const Staffs = () => {
  const scroll = ["<", ">"];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  const slideright = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <>
      <div className="modal fixed-card">
        <div>
          <button>x</button>
          <figure>
            <img src={oladapo} alt="" />
          </figure>
          <div className="text">
            <p></p>
          </div>
        </div>
      </div>
      <section id="slider" className="staffs">
        {staffData.staffs.map((data) => (
          <div className="staff" key={data.id} id={data.id}>
            <figure>
              <img src={data.img} alt={data.name} />
            </figure>
            <div>
              <h3>{data.name}</h3>
              <h4>{data.office}</h4>
              <span></span>
              <p>{data.about}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="scroller">
        <button onClick={slideLeft} className="scroller">
          {scroll[0]}
        </button>
        <button onClick={slideright} className="scroller">
          {scroll[1]}
        </button>
      </div>
    </>
  );
};
export default Staffs;
