import staffData from "./staffData";
import "./about.css";
import "./staff.css";
import { useState, useRef, useEffect } from "react";

const Staffs = () => {
  const scroll = ["<", ">"];
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const handleClick = (e, data) => {
    setData(data);
    setShowModal(!showModal);
  };

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  const slideright = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <section id="slider" className="staffs">
        {staffData.staffs.map((data) => (
          <div
            onClick={(e) => handleClick(e, data)}
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
            </div>
          </div>
        ))}
      </section>
      {showModal && (
        <div className="modal">
          <div ref={menuRef}>
            <button
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              x
            </button>
            <figure>
              <img src={data.img} alt="" />
            </figure>
            <div className="text">
              <h3>{data.name}</h3>
              <h4>{data.office}</h4>
              <span></span>
              <p>{data.about}</p>
              <p>{data.about2}</p>
              <p>{data.about3}</p>
              <p>{data.about4}</p>
              <p>{data.about5}</p>
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
