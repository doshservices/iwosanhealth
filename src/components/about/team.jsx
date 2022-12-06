import "./about.css";
import "./staff.css";
import border from "../../images/border.svg";
import staffData from "./staffData";
import Management from "./manage";
import { useState } from "react";
import Staffs from "./staffs";
import Council from "./council/council";
import Footer from "../navigation/footer";
import curvedbg1 from "../../images/curved-bg1.svg";

const Team = () => {
  const [board, setBoard] = useState("CEO");
  const toggleTab = (index) => {
    setBoard(index);
  };

  const [focus, setFocus] = useState(false);
  const handleClick = (id) => {
    setFocus((current) => !current);
  };

  return (
    <>
      <div
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "repeat-x",
        }}
        className="ecg"
      >
        <section className="intro">
          <img src={curvedbg1} className="intro-bg1" alt="" />
          <img src={curvedbg1} className="intro-bg2" alt="" />
          <img src={curvedbg1} className="intro-bg3" alt="" />
          <h1>Our Team</h1>
          <p>
            Iwosan Investments Limited is a privately held healthcare asset and
            investment company dedicated to financing and developing brownfield
            and greenfield multi-specialist healthcare facility
          </p>
        </section>
        <section className="team">
          <div className="brains">
            <div>
              <h2>Brains behind what we do around here</h2>
              <img src={border} alt="" />
              <p>
                The best doctors and medical personnel from around the world
                with international certificates and also extraordinary
                experiences
              </p>
            </div>
            <div className="members">
              <h3
                className={board === "CEO" ? "bg-green" : ""}
                onClick={() => setBoard("CEO")}
              >
                Board Members
              </h3>
              <h3
                className={board === "management" ? "bg-green" : ""}
                onClick={() => setBoard("management")}
              >
                Management
              </h3>
              <h3
                className={board === "council" ? "bg-green" : ""}
                onClick={() => setBoard("council")}
              >
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
      </div>

      <Footer />
    </>
  );
};
export default Team;
