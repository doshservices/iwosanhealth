import React, { useState, useRef, useEffect } from "react";
import "./team.css";
import boardData from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

export default function Board() {
  const scroll = ["<", ">"];
  // const [current, setCurrent] = useState(0);
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);
  // const length = boardData.length;
  const transformLeft = {
    transform: "translate(0, -20%)",
  };
  const transformRight = {
    transform: "translate(0, 20%)",
  };
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

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };
  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  // if (!Array.isArray(boardData) || boardData.length <= 0) {
  //   return null;
  // }
  const slideLeft = () => {
    let slider = document.getElementById("data-carousel");
    slider.scrollLeft = slider.scrollLeft - 800;
  };

  const slideRight = () => {
    let slider = document.getElementById("data-carousel");
    slider.scrollLeft = slider.scrollLeft + 800;
  };

  return (
    <>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        slidesPerView={5}
        spaceBetween={30}
        className="board-carousel"
        id="data-carousel"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          950: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1690: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {boardData.map((data) => {
          return (
            <SwiperSlide
              key={data.id}
              // className={index === current ? "animate true" : "animate"}
            >
              {/* {index === current && ( */}
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
              {/* )} */}
            </SwiperSlide>
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
      </Swiper>
      <div className="scroller">
        <button onClick={slideLeft} className="scroller">
          {scroll[0]}
        </button>
        <button onClick={slideRight} className="scroller">
          {scroll[1]}
        </button>
      </div>
    </>
  );
}
