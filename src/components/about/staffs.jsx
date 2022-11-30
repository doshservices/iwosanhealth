import staffData from "./staffData";
import "./about.css";
import "./staff.css";
import oladapo from "../../images/Dapo Oshinusi.jpg";
import { useState } from "react";

const Staffs = () => {
  const scroll = ["<", ">"];
  const [showModal, setShowModal] = useState(false);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  const slideright = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  // const { staffs } = staffData;

  return (
    <>
      <section id="slider" className="staffs">
        {staffData.staffs.map((data) => (
          <div
            onClick={() => {
              setShowModal(!showModal);
            }}
            className="staff"
            key={data.id}
          >
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
      {showModal && (
        <div
          className="modal"
        >
          <div>
            <button
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              x
            </button>
            <figure>
              <img src={oladapo} alt="" />
            </figure>
            <div className="text">
              <p></p>
            </div>
          </div>
        </div>
      )}
      {/* scroller */}
      <div className="scroller">
        <button onClick={slideLeft} className="scroller">
          {scroll[0]}
        </button>
        <button onClick={slideright} className="scroller">
          {scroll[1]}
        </button>
      </div>
      {/* scroller */}
    </>
  );
};
export default Staffs;
