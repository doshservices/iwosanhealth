import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./count.css";

const Count = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="counter">
        <span>
          {counterOn && <CountUp start={0} end={700} duration={1} delay={0} />}+
          <br />
          <p>employees</p>
        </span>
        <span>
          {counterOn && (
            <CountUp start={0} end={14151} duration={1} delay={0} />
          )}
          <br />
          <p>Monthly patient traffic</p>
          <br />
          <small>(both old and new)</small>
        </span>
        <span>
          {counterOn && <CountUp start={0} end={32} duration={1} delay={0} />}+
          <br />
          <p>specialties</p>
          <br />
          <small>and sub-specialties</small>
        </span>
        <span>
          {counterOn && <CountUp start={0} end={99} duration={1} delay={0} />}+
          <br />
          <p>bed spaces</p>
        </span>
      </div>
    </ScrollTrigger>
  );
};
export default Count;
