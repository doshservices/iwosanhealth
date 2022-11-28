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
  const { ceo } = staffData;
  const [person, setPerson] = useState([]);
  const findId = () => {
    const activeId = person.find((x) => x.id === staffData.id);
    if (activeId) {
      const newId = person.map((x) => {
        x.id === ceo.id ? showModal(true) : showModal(false);
      });
      return newId;
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal fixed-card">
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
      <section id="slider" className="staffs">
        {staffData.staffs.map((data) => (
          <div onClick={findId} className="staff" key={data.id} id={data.id}>
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
