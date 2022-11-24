import "./about.css";
import "./staff.css";
import investmentbg from "../../images/investment-hero.png";
import border from "../../images/border.svg";
import staffData from "./staffData";
import { useState } from "react";

const Team = () => {
  const [focus, setFocus] = useState(false);
  const handleClick = (id) => {
    setFocus((current) => !current);
  };

  return (
    <>
      <section className="intro">
        <h1>Our Team</h1>
        <p>
          Iwosan Investments Limited is a privately held healthcare asset and
          investment company dedicated to financing and developing brownfield
          and greenfield multi-specialist healthcare facility
        </p>
        <img src={investmentbg} alt="invest" />
      </section>
      <section className="record">
        <div>
          <h2>Operational Expertise and Track Record. </h2>
        </div>
        <div>
          <p>
            Our flagship investment portfolio, Iwosan Lagoon Hospitals (formerly
            Lagoon Hospitals), is a renowned provider of integrated healthcare
            services for millions of Nigerians and foreign nationals. The
            franchise has bagged numerous awards in areas of quality and service
            excellence by notable global bodies and is a trusted healthcare
            partner for private and public organizations around the globe. In
            2011, Lagoon Hospitals became the second hospital in Africa to earn
            the Gold Seal of Approval from the Joint Commission International in
            recognition of its commitment to improve healthcare quality and
            patient safety. It has since maintained poll position and its
            operations have been understudied by scholars, government agencies
            and notable hospital groups across Africa.
          </p>
          <button>Download profile</button>
        </div>
      </section>
      <section className="team">
        <div className="brains">
          <div>
            <h2>Brains behind what we do around here</h2>
            <img src={border} alt="" />
            <p>
              The best doctors and medical personnel from around the world with
              international certificates and also extraordinary experiences
            </p>
          </div>
          <div className="members">
            <h3>Board Members</h3>
            <h3>Management</h3>
            <h3>Medical Advisory Council</h3>
          </div>
        </div>
        <div className="modal">
          <div>
            <button>x</button>
            <img src={investmentbg} alt="" />
            <h3>bvcdvcdvcd</h3>
            <h4> cbfbcfbchfdbcfdc</h4>
            <p>
              The best doctors and medical personnel from around the world with
              international certificates and also extraordinary experiences
            </p>
          </div>
        </div>
        <section className="staffs">
          {staffData.staffs.map((data) => (
            <div className="staff" key={data.id} id={data.id}>
              <figure>
                <img src={data.img} alt={data.name} />
              </figure>
              <h3>{data.name}</h3>
              <h4>{data.office}</h4>
              <span></span>
              <p>{data.about}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};
export default Team;
