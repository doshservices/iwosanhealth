import investmentbg from "../../images/investment-hero.png";
import greenborder2 from "../../images/greenborder2.svg";
import whiteborder from "../../images/whiteborder.svg";
import compliance from "../../images/compliance.png";
import clinical from "../../images/clinacal.png";
import whitsle from "../../images/Screen Shot 2022-11-16 at 5.19 1.png";

const Governance = () => {
  return (
    <>
      <section className="intro">
        <h1>Corporate Governance</h1>
        <p>
          Iwosan Investments Limited is a privately held healthcare asset and
          investment company dedicated to financing and developing brownfield
          and greenfield multi-specialist healthcare facility
        </p>
        <img src={investmentbg} alt="invest" />
      </section>
      <section className="sustain">
        <div>
          <h2>Sustainability</h2>
          <img
            src={greenborder2}
            alt="border"
            style={{ margin: "1rem 0", maxWidth: "200px" }}
          />
        </div>
        <div>
          <p>
            Iwosan Investments Limited is a growth-driven and responsible
            organization that is devoted to optimizing operations in its
            portfolio facilities through cost minimization, risk mitigation,
            client experience improvement and satisfaction, satisfactory
            clinical outcomes, and community development. We are committed to
            foreseeing and addressing environmental, social, and corporate
            governance needs or issues that may arise in our operations. Our
            company contributes to the global fight against climate change by
            promoting and implementing environmentally sustainable initiatives
            such as carbon footprint reduction (through energy conservation),
            use of renewable energy, water and waste recycling. We strongly
            believe in the need for diversity, equity and inclusion which is
            evident in our multi-level staffing, customer base, operations,
            vendor management, as well as our relationship with business
            partners and the community. We value our staff and their
            contribution to our organization. We foster an environment that is
            healthy and safe for all our staff, clients, and visitors. Our
            leadership and governance strategy ensures accountability with
            strong internal operational and financial controls. Consistent
            organizational performance measurement and management help us to
            stay on track with providing the best service to our clients and
            partners. We demonstrate transparency and integrity in our data
            management through open reporting and strongly discourage unethical
            conduct.
          </p>
        </div>
      </section>
      <section className="quality">
        <figure>
          <img src={clinical} alt="clinical" style={{ width: "100%" }} />
        </figure>
        <div>
          <h2>Clinical Quality</h2>
          <img
            src={greenborder2}
            alt="border"
            style={{ margin: "1rem 0", maxWidth: "200px" }}
          />
          <p>
            We ensure the provision of safe and consistent clinical care at all
            our health facilities by implementing strategies that support
            clinical governance, patient safety, evidence- based best practice
            in clinical care, risk management, continuous staff training, use of
            technology, compliance with healthcare quality standards, continuous
            systems improvement, and patient satisfaction. The Iwosan Board is
            committed to Putting the Patient First at all times. We are devoted
            to hearing the patient’s voice and partnering with patients,
            families, staff, and caregivers at all stages of their health care
            journey. We are focused on delivering timely and efficient care that
            provides our patients with the best possible clinical outcomes, all
            of which are benchmarked with our peers across all continents. We
            are intentional about hiring the best complement of staff to achieve
            our organizational goals. Our ongoing partnership with the Joint
            Commission International reflects our deliberate commitment to a
            journey of continuous quality improvement. We are committed to
            learning and are most receptive to new ideas to working optimally
            and more efficiently in the long term.
          </p>
        </div>
      </section>
      <section className="mail pd">
        <h2>Join Our Mailing List</h2>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </p>
        <div className="email">
          <input type="email" placeholder="Enter your email" />
          <button>Get Started</button>
        </div>
      </section>
      <section className="whistle">
        <figure>
          {" "}
          <img src={whitsle} alt="whitsle" style={{ width: "100%" }} />
        </figure>
        <div>
          <h2>Whistleblowing</h2>
          <img
            src={greenborder2}
            alt="border"
            style={{ margin: "1rem 0", maxWidth: "200px" }}
          />
          <p>
            We are Iwosan Investment Limited - a consistently patient-first,
            world-class healthcare services provider. We are committed to a
            whistleblowing policy in keeping with the core values of Integrity,
            Equity, Good Faith, and Fairness - intended to encourage employees
            and others to make good faith reports of suspected fraud,
            corruption, or other improprieties, or health and safety concerns
            that may negatively impact both our internal and external
            stakeholders. Employees of the Company have an obligation to report
            irregularities when they become aware and have the right to voice
            complaints about questionable financial reporting, unethical,
            illegal, or unlawful activities/procedures without fear that such
            reports or complaint will impact their employment status, rate of
            pay or responsibilities within the organization. Where an employee
            has knowledge of information that violates any law, rule, or
            regulation as described above, the employee is encouraged to contact
            his/her immediate supervisor or the Human Resources department to
            provide information directly or on an anonymous basis to afford the
            organization a reasonable opportunity to review and take corrective
            measures. Do you have a report to make? Please send an email to
            whistleblow@iwosanhealth.com
          </p>
        </div>
      </section>
      <section className="compliance">
        <div>
          <h2>Compliance</h2>
          <img
            src={greenborder2}
            alt="border"
            style={{ margin: "1rem 0", maxWidth: "200px" }}
          />
          <p>
            Iwosan Investments Limited is guided by a sacrosanct set of internal
            policies and procedures which have been instituted to preserve the
            ethos and reputation of our organization and all our portfolio
            companies. Through the supervision of our dedicated personnel, we
            constantly monitor and assess our systems to ensure compliance with
            industry standards, as well as corporate, and regulatory policies
            and requirements. A key part of this process is a robust feedback
            system where learnings are consistently shared, and solutions are
            iterated to avoid reoccurrence of any identified compliance failures
            within the system. Our compliance system is consistently evolving to
            ensure that the minimum acceptable standards are in tandem with
            international best practices in the industry. We seek to set new and
            improved standards in the delivery of the quality of healthcare in
            Africa. We are poised to break new frontiers with innovative and
            empathetic compliance mechanism which empower patients, caregivers,
            and partners to improve service delivery and treatment outcomes.
          </p>
        </div>
        <img src={compliance} alt="compliance" />
      </section>
      <section className="patnership">
        <div>
          <h2>Partnerships</h2>
          <img
            src={greenborder2}
            alt="border"
            style={{ margin: "1rem 0", maxWidth: "200px" }}
          />
        </div>
        <div>
          <p>
            When we began this journey, we did not begin with any end in mind.
            In fact, we reckoned that this journey may never end given the
            global trends and considering the healthcare roadmap for the years
            to come. Still, we charted a clear course that would enable us to
            make a lasting impact in the lives of millions of people from all
            races. When we started, we set out with a deep sense of conviction
            to advance the cause of healthcare and transform Nigeria – and
            Africa at large – into a global healthcare frontier. Through our
            acquisition and development of brownfield and greenfield healthcare
            assets, we have created a formidable foundation on which an
            inter-connected network of world-class healthcare facilities will be
            built. And we are on course to attaining a 500- bed hospital network
            system by 2025. Without a doubt, the journey has been both
            fulfilling and invigorating. We owe our landmark attainments to the
            unwavering support we receive from all our team members. In keeping
            with our mission to build viable healthcare facilities and promote
            health- oriented initiatives, we also seek out strategic
            partnerships with budding stakeholders in both private and public
            sectors around the world. Through our portfolio hospitals, Iwosan
            Lagoon Hospitals, we have championed and supported notable
            healthcare causes, especially as regards policy and systems
            development, community outreach, project finance, capacity
            development, operational efficiency, organizational wellness,
            stakeholder events, and CSR. Therefore, if you would like us to
            collaborate with you on a related project, please send an email to
            partnerships@iwosanhealth.com
          </p>
        </div>
      </section>
    </>
  );
};
export default Governance;
