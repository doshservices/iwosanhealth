import "./about.css";
import img from "../../images/favour.png";
import greenborder2 from "../../images/greenborder2.svg";
import Footer from "../navigation/footer";
import curvedbg1 from "../../images/curved-bg1.svg";
import leadership from "../../images/leadership.jpg";
import record from "../../images/operation.jpg";
import diversity from "../../images/DIVERSITY.jpg";
import stratergy from "../../images/INNOVATIVE FINANCIAL STRATEGY.jpg";

const Investment = () => {
  return (
    <>
      <div className="intro">
        <img src={curvedbg1} className="intro-bg1" alt="" />
        <img src={curvedbg1} className="intro-bg2" alt="" />
        <img src={curvedbg1} className="intro-bg3" alt="" />
        <h1>Our Investment Attributes</h1>
        <p>
          Iwosan Investments is a healthcare investment company dedicated to
          investing in the Nigerian healthcare market.
        </p>
      </div>

      <section className="record">
        <div>
          <h2>Operational Expertise and Track Record</h2>
          <img
            src={greenborder2}
            alt="border"
            style={{ margin: "1rem 0", maxWidth: "200px" }}
          />
          <p>
            Our flagship portfolio investment, Iwosan Lagoon Hospitals, is a
            renowned provider of integrated healthcare services for millions of
            Nigerians and foreign nationals. The franchise has bagged numerous
            awards in areas of quality and service excellence by notable global
            bodies and is a trusted healthcare partner for private and public
            organizations around the globe.
          </p>
          <p>
            In 2011, Lagoon Hospitals became the first hospital in Sub-Saharan
            Africa to earn the Gold Seal of Approval from the Joint Commission
            International in recognition of its commitment to improve healthcare
            quality and patient safety.
          </p>
        </div>
        <figure>
          <img src={record} alt="record" />
        </figure>
      </section>

      <section className="dynamics">
        <figure>
          <img src={img} alt="industry" />
        </figure>
        <div>
          <h2>Favourable Industry Dynamics</h2>
          <img
            src={greenborder2}
            alt="border"
            style={{ margin: "1rem 0", maxWidth: "200px" }}
          />
          <p>
            The Nigerian healthcare business sector is poised to undergo
            significant advancements in healthcare delivery considering the
            milestones recorded via public-private collaboration. The private
            sector can particularly bridge the infrastructure gap and foster
            long term opportunities for all stakeholders. With a growing
            population and an expansion of healthcare services across various
            value chains, the trend of medical tourism can also be reversed much
            to the benefit of the citizens, the government and investors.
          </p>
        </div>
      </section>
      <section className="benefits">
        <div>
          <h2>Diversification Benefits</h2>
          <img
            src={greenborder2}
            alt="border"
            style={{ margin: "1rem 0", maxWidth: "200px" }}
          />
          <p>
            Ineffective healthcare management poses a significant threat to
            treatment outcomes and the surge in emigration rate of qualified
            healthcare personnel could potentially hamper the quality of care
            received by patients. Therefore, we have set out to optimize the
            interoperability of our health systems by ensuring we retain the
            best hands and allow our people to explore the diverse options
            available to them within the system. Our facilities have also earned
            accreditations to train the next generation of healthcare
            professionals and clinical experts.
          </p>
        </div>
        <figure>
          <img src={diversity} alt="doctors" />
        </figure>
      </section>
      <section className="strategy">
        <img src={stratergy} alt="finance" />
        <div>
          <h2>Innovative Financial Strategy</h2>
          <img src={greenborder2} alt="" />
          <p>
            According to the Business and Sustainable Development Commission,
            the value of opportunities for businesses tackling healthcare and
            health-related challenges will be worth $259billion by the year
            2030, and this could potentially create about 16 million jobs across
            the value chain.
          </p>
          <p>
            Iwosan's financial strategy of structured permanent capital, mainly
            from local investors, can systematically unlock a significant pool
            of resources needed to build strong and viable healthcare facilities
            and thereby reduce the burden of hospital bed shortages
            prevalent in Nigeria.
          </p>
        </div>
      </section>
      <section className="leadership">
        <div>
          <h2>Strong Leadership Vision</h2>
          <img
            src={greenborder2}
            alt="border"
            style={{ margin: "1rem 0", maxWidth: "200px" }}
          />
          <p>
            Our prime investors and promoters have several decades of experience
            providing funding and technical expertise for a diverse range of
            highly successful global businesses.
          </p>
          <p>
            We have leveraged this unrivalled expert advisory to institute a
            fluid corporate governance system at each Iwosan facility with the
            aim of achieving data-driven healthcare administration and quality
            outcomes. Under the leadership of their respective Managing
            Directors, each hospital is structured to compete favourably based
            on the preset performance indices. Our Centre of Excellence model is
            also designed to provide a dynamic experience for every member of
            the diverse audience we cater for whereby each facility is known for
            its own unique service offering.
          </p>
          {/* <p>
            Under the leadership of their respective Managing Directors, each
            hospital is structured to function independently and compete
            favourably based on the preset performance indices.
          </p> */}
        </div>
        <figure>
          <img
            style={{
              display: "block",
              width: "100%",
              minHeight: "100%",
              objectFit: "cover",
            }}
            src={leadership}
            alt="leadership"
          />
        </figure>
      </section>
      <Footer />
    </>
  );
};
export default Investment;
