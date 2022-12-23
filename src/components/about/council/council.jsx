import React from "react";
import nelson from "../../../images/Prof Nelson Oyesiku.jpg";
// import demo from "../../../images/demo.webp";
import onakoya from "../../../images/Onakoya.JPG";
import kemi from "../../../images/Kemi.jpg";
import ogunsola from "../../../images/Prof Ogunsola.jpg";
import laloye from "../../../images/Fola Laoye.jpg";
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
          "Prof. Nelson M. Oyesiku is the Van L. Weatherspoon, Jr. Eminent Distinguished Professor & Chair, Department of Neurosurgery and Professor, Medicine (Endocrinology) at the University of North Carolina, Chapel Hill, U.S.A",
        about2:
          "He has held notable positions in various prestigious capacities, including Member of the Board of Directors of the American Board of Neurological Surgery; Chairman of the Maintenance of Certification Committee; Chairman of the American Board of Neurological Surgery; Member of the Board of Governors of the American College of Surgeons; and the Advisory Council for Neurosurgery of the American College of Surgeons.He is one of the first to use 3D endoscopy in pituitary surgery and is also one of few surgeons in the world to utilize advanced 3-D endoscopic surgery for the resection of pituitary tumors.",
        about3:
          "He was also a member of the Residency Review Committee of Neurosurgery of the ACGME and a Fellow of the American College of Surgeons.He has held leadership positions in the following organizations: the Congress of Neurological Surgeons; the American Academy of Neurological Surgery; the Georgia Neurosurgical Society; the Society of University Neurosurgeons; and the World Federation of Neurosurgical Societies.",
      },
      {
        id: 2,
        img: onakoya,
        name: "DR. OLAKUNLE ONAKOYA",
        office: "Director",
        about:
          "Dr. Onakoya is renowned clinical practice juggernaut with major interests in Major Limb Trauma and Joint Replacement Surgery. He is ATLS certified, and a Fellow of the West African College of Surgeons.",
        about2:
          "He obtained his MBBS from the College of Medicine, University of Lagos(CMUL), with a distinction in Medical Ethics and Jurisprudence.He had his residency training in Orthopaedic Surgery and Traumatology at the National Orthopaedic Hospital Igbobi, during which he also completed rotations in Neurosurgery and Cardio- Thoracic surgery at the University College Hospital, Ibadan(UCH).",
        about3:
          "He became the Chief Resident of the National Orthopaedic Hospital, and received further specialist training in the South West Thames Regional Health Trust.He subsequently worked as a Specialist Orthopaedic Registrar at the St.Georges Hospital Tooting Broadway, and at several other notable hospitals in Surrey and London.",
        about4:
          " Dr.Onakoya is a member of the following professional associations: Nigerian Orthopaedic Association(NOA); British Orthopaedic Association(BOA); American Academy of Orthopaedic Surgeons(AAOS); AO Trauma; International Society of Orthopaedic Surgery and Traumatology(SICOT); and the Society for Quality Healthcare in Nigeria(SQHN).",
      },

      {
        id: 3,
        img: ogunsola,
        name: "PROF. FOLASADE OGUNSOLA",
        office: "Member",
        about:
          "Professor Ogunsola is a Professor of Medical Microbiology with specialty in disease control, particularly HIV/AIDS. She was a founding member of the Nigerian Society for Infection control in 1998 and is also a member of the Global Infection Prevention and control Network. She has been the Chairman of Infection Control Committee of Lagos University Teaching Hospital (LUTH)",
        about2:
          "In 2014, she was elected as the first female Provost of the College of Medicine, University of Lagos (CMUL) and in 2017, she was appointed as the Deputy Vice Chancellor (Development Services) of the University of Lagos. In November 2022, she was sworn in as the first female Vice Chancellor of the prestigious University of Lagos (UNILAG).",
      },
      {
        id: 4,
        img: laloye,
        name: "FOLA LAOYE",
        office: "Member",
        about:
          "Fola Laoye is the co-Founder and CEO of Iwosan Investments Limited, a Health Investments Holding Company. She is also the Founder and CEO of Health Markets Africa, a healthcare advisory and investment company, and was Director at Investment Fund for Health in Africa (IFHA), a pioneer private equity fund focused on Healthcare in Africa.",
        about2:
          "She is a founding board member of Hygeia Group Nigeria, promoters of Lagoon Hospitals and Hygeia HMO, and while there, she recorded laudable feats as CEO(2002- 2012) and as Chairperson (2012 - 2015).She is also a Trustee of the board of the Society for Quality in Healthcare in Nigeria(SQHN).",
        about3:
          "She is Chairperson of the boards of Old Mutual Life Assurance and FSDH Asset Management.As part of her philanthropic dispositions, she currently chairs the Elebute- LUTH Welfare Board and co - chairs the Africa Regional Board of the Young Presidents Organization(YPO).She is also a member of Harvard Business School Africa Advisory Board.",
        about4:
          "She holds an MBA from Harvard Business School(class of 1999) and a Bachelors’s Degree in Accounting from the University of Lagos, Nigeria.She is a Chartered Accountant with vast training from Ernst & Young, Lagos, and Coopers & Lybrand(now PwC), London.She is a Member of the Institute of Chartered Acccountants in England & Wales and the Institute of Chartered Accountants of Nigeria.",
      },
      {
        id: 5,
        img: kemi,
        name: "DR. KEMI BABAGBEMI",
        office: "Member",
        about:
          "Dr. Babagbemi is an Associate Professor   of   Clinical   Radiology   and   Vice   Chair   for Diversity,   Equity,   and   Inclusion   at   the   Department   of   Radiology   at   Weill   Cornell Medical College, Cornell University.",
        about2:
          " She received her medical training and residency at Harvard Medical School. During her time at Weill Medicine Radiology, she served as Faculty Scholar in Health Equity for the Diversity Center for Excellence from 2019 - 2020   and   Assistant   Program   Director  of   the   Radiology   Residency   Program   from 2006 - 2014.",
        about3:
          "  She is an expert in Women's Imaging, with core specialty in Breast Imaging and Pelvic Ultrasound.Lately, her work has focused on improving diversity and inclusion  in  health  care  settings and  in  understanding and  addressing  health disparities   as   it   relates   to   the   access   to   diagnosis   and   treatment   of   diseases.",
        about4:
          " In recognition of her sterling efforts, she was recently granted the Jeanne and Herbert Siegel Award for Excellence in Medical Education at Weill Cornell Medical College (thereby   becoming   the   first   radiologist   to   receive   this   highest   honor   from   the medical   school),   and   was   recognized   as   Fellow   of   the   American   College   of Radiology, a feat attained by only the top 15% in the field.",
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
              <p>{manage.about2}</p>
              <p>{manage.about3}</p>
              <p>{manage.about4}</p>
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
