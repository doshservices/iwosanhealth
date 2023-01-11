import "./about.css";
import "./staff.css";
import border from "../../images/border.svg";
import Management from "../management/manage";
import { useState } from "react";
import Council from "../council/council";
import Footer from "../navigation/footer";
import curvedbg1 from "../../images/curved-bg1.svg";
import Board from "../board/board";

const Team = () => {
  const [board, setBoard] = useState("CEO");

  return (
    <>
      <section className="intro">
        <img src={curvedbg1} className="intro-bg1" alt="" />
        <img src={curvedbg1} className="intro-bg2" alt="" />
        <img src={curvedbg1} className="intro-bg3" alt="" />
        <h1>Our Team</h1>
        <p>
          Iwosan Investments is a healthcare investment company dedicated to
          investing in the Nigerian healthcare market.{" "}
        </p>
      </section>
      <section className="team">
        <div className="brains">
          <div>
            <h2>Meet Our Industry Leaders</h2>
            <img src={border} alt="" />
            <p>
              Our Leadership team comprises renowned and highly accomplished
              business and clinical professionals who have built visionary
              business and practices and are unreservedly passionate about
              healthcare development in Africa.
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
          {board === "CEO" && <Board />}
          {board === "management" && <Management />}
          {board === "council" && <Council />}
        </section>
      </section>
      <Footer />
    </>
  );
};
export default Team;
