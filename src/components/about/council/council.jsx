import React from "react";
import nelson from "../../../images/Prof Nelson Oyesiku.jpg";
import demo from "../../../images/demo.webp";
import { useState } from "react";

const Council = () => {
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
        img: nelson,
        name: "PROF. NELSON OYESIKU",
        office: "Chairman",
        about:
          "Prof. Nelson M. Oyesiku is the Van L. Weatherspoon, Jr. Eminent Distinguished Professor & Chair, Department of Neurosurgery and Professor, Medicine (Endocrinology) at the University of North Carolina, Chapel Hill, U.S.A. He has held notable positions in various prestigious capacities, including Member of the Board of Directors of the American Board of Neurological Surgery; Chairman of the Maintenance of Certification Committee; Chairman of the American Board of Neurological Surgery; Member of the Board of Governors of the American College of Surgeons; and the Advisory Council for Neurosurgery of the American College of Surgeons. He is one of the first to use 3D endoscopy in pituitary surgery and is also one of few surgeons in the world to utilize advanced 3-D endoscopic surgery for the resection of pituitary tumors. He was also a member of the Residency Review Committee of Neurosurgery of the ACGME and a Fellow of the American College of Surgeons. He has held leadership positions in the following organizations: the Congress of Neurological Surgeons; the American Academy of Neurological Surgery; the Georgia Neurosurgical Society; the Society of University Neurosurgeons; and the World Federation of Neurosurgical Societies.",
      },
      {
        id: 2,
        img: demo,
        name: "DR. OLAKUNLE ONAKOYA",
        office: "Director",
        about:
          "Dr. Onakoya is renowned clinical practice juggernaut with major interests in Major Limb Trauma and Joint Replacement Surgery. He is ATLS certified, and a Fellow of the West African College of Surgeons. He obtained his MBBS from the College of Medicine, University of Lagos (CMUL), with a distinction in Medical Ethics and Jurisprudence. He had his residency training in Orthopaedic Surgery and Traumatology at the National Orthopaedic Hospital Igbobi, during which he also completed rotations in Neurosurgery and Cardio-Thoracic surgery at the University College Hospital, Ibadan (UCH). He became the Chief Resident of the National Orthopaedic Hospital, and received further specialist training in the South West Thames Regional Health Trust. He subsequently worked as a Specialist Orthopaedic Registrar at the St. Georges Hospital Tooting Broadway, and at several other notable hospitals in Surrey and London. Dr. Onakoya is a member of the following professional associations: Nigerian Orthopaedic Association (NOA); British Orthopaedic Association (BOA); American Academy of Orthopaedic Surgeons (AAOS); AO Trauma; International Society of Orthopaedic Surgery and Traumatology (SICOT); and the Society for Quality Healthcare in Nigeria (SQHN).",
      },

      {
        id: 3,
        img: demo,
        name: "PROF. FOLASADE OGUNSOLA",
        office: "Member",
        about:
          ""
      },
    ],
  };
  const [showModal, setShowModal] = useState(false);
  const [manage, setManage] = useState(null);
  const handleClick = (e, manage) => {
    setManage(manage);
    setShowModal(!showModal);
  };
  return (
    <>
      <section id="slider" className="management">
        {management.ceos.map((manage) => {
          return (
            <div onClick={(e) => handleClick(e, manage)} key={manage.id}>
              <figure>
                <img src={manage.img} alt={manage.name} />
              </figure>
              <div>
                <h3>{manage.name}</h3>
                <h4>{manage.office}</h4>
                <span></span>
                <p style={{ opacity: "0", pointerEvents: "none" }}>
                  {manage.about}
                </p>
              </div>
            </div>
          );
        })}
      </section>
      {showModal && (
        <div className="modal">
          <div>
            <button
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              x
            </button>
            <figure>
              <img className="demo" src={manage.img} alt="" />
            </figure>
            <div className="text">
              <h3>{manage.name}</h3>
              <h4>{manage.office}</h4>
              <span></span>
              <p>{manage.about}</p>
            </div>
          </div>
        </div>
      )}
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
export default Council;
