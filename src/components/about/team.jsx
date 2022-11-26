import "./about.css";
import "./staff.css";
import investmentbg from "../../images/investment-hero.png";
import border from "../../images/border.svg";
import staffData from "./staffData";
import Management from "./manage";
import { useEffect, useState } from "react";
import greenborder2 from "../../images/greenborder2.svg";
import Staffs from "./staffs";
import Council from "./council";

const Team = () => {
  const [board, setBoard] = useState("CEO");

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
          <img
            src={greenborder2}
            alt="border"
            style={{ margin: "1rem 0", maxWidth: "200px" }}
          />
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
            <h3 onClick={() => setBoard("CEO")}>Board Members</h3>
            <h3 onClick={() => setBoard("management")}>Management</h3>
            <h3 onClick={() => setBoard("council")}>
              Medical Advisory Council
            </h3>
          </div>
        </div>
        <section>
          {board === "CEO" && <Staffs />}
          {board === "management" && <Management />}
          {board === "council" && <Council />}
        </section>
      </section>
    </>
  );
};
export default Team;
