import "./blog.css";
import Footer from "../navigation/footer";
import curve1 from "../../images/curved-bg1.svg";
import iwosanImg from "../../images/Iwosan-Lagoon_Banner_Square.jpg";
import lagoonLogo from "../../images/Iwosan-Lagoon-Logo.png";
import lagoonLog2 from "../../images/Iwosan-Lagoon_Banner_Square_2.jpg";
import { useState } from "react";

const Blog = () => {

  const [noOfLines, setNoOfLines] = useState(false)
  return (
    <>
      <section className="blog">
        <section className="heading">
          <img src={curve1} className="curve1" alt="" />
          <img src={curve1} className="curve2" alt="" />
          <img src={curve1} className="curve3" alt="" />
          <h1>Our Blog</h1>
          <p>
            Iwosan Investments Limited is a privately held healthcare asset and
            investment company dedicated to financing and developing brownfield
            and greenfield multi-specialist healthcare facility
          </p>
        </section>
        <div className="posts">
          <section className="news">
            <img className="news__picture" src={iwosanImg} alt="Iwosan-Lagoon_Banner_Square" />
            <div className="news__post">
              <p className="news__time">May 26, 2022</p>
              <h2>IWOSAN Investments Limited acquires Lagoon Hospitals</h2>
              <blockquote className="news__blockquote">
                <p>
                  May 23, 2022 – IWOSAN Investments Limited announces the acquisition of the Lagoon Hospitals Group, with its facilities around Lagos – Ikeja, Apapa, Victoria Island and Ikoyi.  IWOSAN, is a premier healthcare investment company which is dedicated to investing in the Nigerian Healthcare market. The Company was recently launched to transform and to improve Nigeria’s healthcare landscape by making investments in key healthcare infrastructure across the country.
                </p>
                <p>
                  “This acquisition is extremely beneficial for all our stakeholders –  our patients, team members and the medical community at large”, said Mrs. Fola Laoye, co-founder and CEO of IWOSAN. “It is an opportunity to launch IWOSAN’s vision with Lagoon’s solid platform of strong clinical services and standards, which are internationally benchmarked through its JCI accreditation.
                </p>
                <button className={noOfLines ? "none" : "news__button"}
                  onClick={() => setNoOfLines(!noOfLines)} >Read More</button>
                {noOfLines && (
                  <div>
                    <img style={{ maxWidth: "320px" }} src={lagoonLogo} alt="lagoonlogo" />
                    <p>
                      Our goal is to build by developing innovative strategies, focused capacity development that guarantee global standards of safety and quality in healthcare systems.  We anticipate a seamless transition and are confident that our talented team members of nurses and physicians are focused on quality and excellent care.”
                      The vision of IWOSAN is to consistently provide patient-first, world-class healthcare services. “The patient is at the heart of all our operations and we have a mission to be consistently empathetic, ethical, innovative and accessible to best serve their needs,” Mr. Fola Adeola, co-founder and Chairman of IWOSAN said. “IWOSAN’s investment in Lagoon Hospitals is a demonstration of our commitment to actively improve the healthcare sector across the country”
                    </p>
                    <p>The name, IWOSAN means “to cure” or “to heal”.  This accurately projects the company’s mission to provideinvestments, build local capacity and drive access to quality healthcare services. </p>
                    <p>
                      The founders of IWOSAN are reputable citizens, investors, and catalysts in the communities they serve. Mr. Fola Adeola OFR, co-founder of Guaranty Trust Bank, a seasoned businessman and investor who transformed the banking industry and was instrumental in Pension Reform in Nigeria. Mr. Dapo Oshinusi, with over 2 decades of experience as an energy industry leader across the EMEA region. Finally, Mrs. Fola Laoyeembodies a wealth of experience and leadership in the Nigerian healthcare environment, leading several initiatives and systems that are dedicated to the sector’s improvement. Together, the team brings long-term capital, multi-dimensional expertise, and significant operational skills to achieve impact in our community.
                    </p>
                    <img style={{ maxWidth: "320px" }} src={lagoonLog2} alt="" />
                    <p>
                      Today, Lagoon Hospitals has now been re-branded as IWOSAN Lagoon Hospitals and its new ownership will enable the upgrade and expansion of its existing facilities, embedding technology and process improvement and will also allow for opening of new locations and clinical services whichwill expand accessibility to its target populations around Lagos and beyond.
                    </p>
                    <p>
                      Lagoon Hospitals serve and will continue to serve a broad population of Nigerians, focused on delivering on our brand promise “we will look after you”.
                    </p>
                    <button className="news__button" onClick={() => setNoOfLines(!noOfLines)}>Close</button>
                  </div>
                )}
              </blockquote>
            </div>
          </section>
          {/* <section className="flex-columns">
            <div className="columns">
              <img src="" alt="" />
              <h3 className="topic">
                Healthy food and exercise routine for health
              </h3>
              <h4 className="name">Cipay Agustrian</h4>
              <p className="date">14 January, 2020</p>
              <blockquote>
                Healthy foods can improve your health if they are consumed
                properly Healthy foods can improve your health if they are
                consumed properly
              </blockquote>
            </div>

            <div className="columns">
              <img src="" alt="" />
              <h3>Healthy food and exercise routine for health</h3>
              <h4>Cipay Agustrian</h4>
              <p>14 January, 2020</p>
              <blockquote>
                Healthy foods can improve your health if they are consumed
                properly Healthy foods can improve your health if they are
                consumed properly
              </blockquote>
            </div>
            <div className="columns">
              <img src="" alt="" />
              <h3>Healthy food and exercise routine for health</h3>
              <h4>Cipay Agustrian</h4>
              <p>14 January, 2020</p>
              <blockquote>
                Healthy foods can improve your health if they are consumed
                properly Healthy foods can improve your health if they are
                consumed properly
              </blockquote>
            </div>
          </section> */}
        </div>
      </section>
    </>
  );
};
export default Blog;
