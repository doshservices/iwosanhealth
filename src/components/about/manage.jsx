import React from "react";
import controller from "./imgs/Isaiah Mukoro.jpg";
import legal from "./imgs/Adetomi Olaobaju.jpg";
import marketing from "./imgs/Adesegun Damazio.jpg";
import operations from "./imgs/Dr. Idowu Adebiyi.jpg";
import Sustainability from "./imgs/Vivian Akwuaka.jpg";
import resources from "./imgs/Oyiza Salu.jpg";

const Management = () => {
  const scroll = ["<", ">"];
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  const slideright = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  const management = {
    ceos: [
      {
        id: 1,
        img: controller,
        name: "",
        office: "Group Financial Controller",
        about: "",
      },
      {
        id: 2,
        img: legal,
        name: "",
        office: "Group Head, Legal, Risk & Compliance",
        about: "",
      },
      {
        id: 3,
        img: marketing,
        name: "",
        office: "Group Head, Marketing & Growth",
        about: "",
      },
      {
        id: 4,
        img: operations,
        name: "",
        office: "Group Head, Operations",
        about: "",
      },
      {
        id: 5,
        img: Sustainability,
        name: "",
        office: "Group Head, Quality & Sustainability",
        about: "",
      },
      {
        id: 6,
        img: resources,
        name: "",
        office: "Group Head, Human Resources",
        about: "",
      },
    ],
  };
  return (
    <>
      <section id="slider" className="management">
        {management.ceos.map((manage) => {
          return (
            <div key={manage.id}>
              <figure>
                <img src={manage.img} alt={manage.name} />
              </figure>
              <div>
                <h3>{manage.name}</h3>
                <h4>{manage.office}</h4>
                <span></span>
                <p>{manage.about}</p>
              </div>
            </div>
          );
        })}
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
export default Management;
