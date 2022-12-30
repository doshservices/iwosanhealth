import React from "react";
import { useState, useRef, useEffect } from "react";
import management from "./data";

const Management = () => {
  const scroll = ["<", ">"];
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);
  const length = management.length;
  const handleClick = (e, data) => {
    setData(data);
    setShowModal(!showModal);
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

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(management) || management.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="board-carousel">
        {management.map((data, index) => {
          return (
            <div
              key={data.id}
              className={index === current ? "animate true" : "animate"}
            >
              {index === current && (
                <>
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
                </>
              )}
            </div>
          );
        })}
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
      </div>
      <div className="scroller">
        <button onClick={prevSlide} className="scroller">
          {scroll[0]}
        </button>
        <button onClick={nextSlide} className="scroller">
          {scroll[1]}
        </button>
      </div>
    </>
  );
};

export default Management;
