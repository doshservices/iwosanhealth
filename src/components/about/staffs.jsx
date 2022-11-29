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
  const { staffs } = staffData;
  const [person, setPerson] = useState([]);
  const findId = (id) => {
    console.log("I see you", id);
    setShowModal(!showModal)
    const currentModal = document.getElementById(`fixed-card-${id}`);
    console.log(currentModal, `fixed-card-${id}`, "Modallll");
    showModal ? currentModal.style.display = "block" : currentModal.style.display = "none"
    console.log("showModal", showModal);
    // const activeId = person.find((x) => x.id === staffData.id);
    // if (activeId) {
    //   const newId = person.map((x) => {
    //     x.id === staffs[0].id ? showModal(true) : showModal(false);
    //   });
    //   return newId;
    // }
  };

  return (
    <>
      <section id="slider" className="staffs">
        {staffData.staffs.map((data) => (
          <div
            onClick={() => findId(data.id)}
            className="staff"
            key={data.id}
            id={`slider-img-${data.id}`}
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
              <div
                className="modal"
                id={`fixed-card-${data.id}`}
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
