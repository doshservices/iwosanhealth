import "./about.css";
import img from "../../images/favour.jpg";
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
          Iwosan Investments Limited is a privately held healthcare asset and
          investment company dedicated to financing and developing brownfield
          and greenfield multi-specialist healthcare facility
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
            The influx of healthcare startups in the African business ecosystem
            can bridge the infrastructure gap that has long plagued many
            countries and foster long term opportunities for the sector. The
            amount raised by Nigerian start-ups has been on a steady rise, and
            in 2021, for the first time, digital start-ups in Nigeria raised
            over $1 billion in a year. The value of deals announced by Nigerian
            start-ups in 2021 peaked at $1.096 billion, 62% more than what was
            raised between 2018 and 2020. Out of the $4.9billion raised in 2021
            by tech start-ups in Africa, healthcare and biotech cropped about 8%
            of the windfall.
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
            available to them within the system. Ultimately, our flagship
            portfolio, Iwosan Lagoon Hospitals would become global citadels of
            clinical practice and healthcare personnel capacity development.
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
            Iwosan’s financial strategy of structured permanent capital, mainly
            from local investors, can systematically unlock a significant pool
            of resources needed to build strong and viable healthcare facilities
            and thereby reduce the burden of hospital bed shortages prevalent in
            Africa.
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
            outcomes.
          </p>
          <p>
            Under the leadership of their respective Managing Directors, each
            hospital is structured to function independently and compete
            favourably based on the preset performance indices.
          </p>
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
