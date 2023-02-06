import Slideshow from "../slideShow/slideShow";
import "./home.css";
import Bordergreen from "../../images/border.svg";
import Empathetic from "../../images/Emphatic.svg";
import Ethical from "../../images/Ethical.svg";
import knowledge from "../../images/Knowledge driven.svg";
import Accesible from "../../images/Accessible.svg";
import Footer from "../navigation/footer";
import pdfile from "../../images/iwosan-pdf.png";
import { useState } from "react";
import NewsLetter from "../newsletter/newsletter";

const Home = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);

  return (
    <>
      <div className="home-slider">
        <Slideshow />
      </div>
      <section className="about-us flex">
        <img src={pdfile} alt="file" />
        <div>
          <h2>What We Do</h2>
          <img src={Bordergreen} alt="border" />
          <p>
            We are transforming the standards of healthcare delivery and
            management in Nigeria in keeping with global best practices. By
            leveraging industry relations, we also support institutional
            stakeholders who seek to advance the cause of healthcare in Nigeria.
            <br />
            <br /> <span style={{ fontWeight: "600" }}>Click to download </span>
            our paper on how banking institutions can finance healthcare in
            Nigeria.
          </p>
          <a
            href="iwosan.pdf"
            download="iwosan.pdf"
            className="contact-btn"
            role="button"
          >
            Download
          </a>
        </div>
      </section>
      <section className="what-we-do">
        <h2>Our Core Values</h2>
        <img src={Bordergreen} alt="border" />
        <div className="flex">
          <div className="flex-280-item">
            <img src={Empathetic} alt="" />
            <h3>Empathetic</h3>
            <p className="main-content">
              We take great care to understand the needs, pains, thoughts and
              feelings of our patients and we put ourselves in their shoes to
              enable us to appreciate the situation better and deliver
              appropriate care that will bring succor to them. We are with our
              patients at every step of their way to recovery.
            </p>
            <button className="seemore-btn" onClick={() => setModal1(!modal1)}>
              Read More
            </button>
            <div className={modal1 ? "show-card" : "hide-card"}>
              <div style={{ position: "relative" }}>
                <button onClick={() => setModal1(!modal1)}>x</button>
                <p>
                  We take great care to understand the needs, pains, thoughts
                  and feelings of our patients and we put ourselves in their
                  shoes to enable us to appreciate the situation better and
                  deliver appropriate care that will bring succor to them. We
                  are with our patients at every step of their way to recovery.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-280-item">
            <img src={Ethical} alt="" />
            <h3>Ethical</h3>
            <p className="main-content">
              We are committed to the tenets of moral and professional
              principles, and this guide our behaviors. We uphold the four
              pillars of ethics, and this guides our medical practice. We have a
              commitment of “Beneficence” to our patients and clients, and this
              means that we must always do good to them. Our second commitment
              to our patients is “non-Maleficence” which means that we must not
              harm our patients. Our third commitment is “Autonomy” which means
              that the opinion of our patients or clients matter, and we must
              carry them along at every step of the way as we manage their care.
              Our fourth commitment is “Justice”, which means that we treat
              everybody equally and fairly.
            </p>
            <button onClick={() => setModal2(!modal2)} className="seemore-btn">
              Read More
            </button>
            <div className={modal2 ? "show-card" : "hide-card"}>
              <div style={{ position: "relative" }}>
                <button onClick={() => setModal2(!modal2)}>x</button>
                <p>
                  We are committed to the tenets of moral and professional
                  principles, and this guide our behaviors. We uphold the four
                  pillars of ethics, and this guides our medical practice. We
                  have a commitment of “Beneficence” to our patients and
                  clients, and this means that we must always do good to them.
                  Our second commitment to our patients is “non-Maleficence”
                  which means that we must not harm our patients. Our third
                  commitment is “Autonomy” which means that the opinion of our
                  patients or clients matter, and we must carry them along at
                  every step of the way as we manage their care. Our fourth
                  commitment is “Justice”, which means that we treat everybody
                  equally and fairly.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-280-item">
            <img src={knowledge} alt="" />
            <h3>Knowledge-driven</h3>

            <p className="main-content">
              We keep up to date with recent trends in healthcare and this
              enables our team of highly skilled professionals to provide
              excellent healthcare services to our clients. Continuous
              improvement and learning help us maintain the standard of
              excellence in patient care at all times.
            </p>
            <button onClick={() => setModal3(!modal3)} className="seemore-btn">
              Read More
            </button>
            <div className={modal3 ? "show-card" : "hide-card"}>
              <div style={{ position: "relative" }}>
                <button onClick={() => setModal3(!modal3)}>x</button>
                <p>
                  We keep up to date with recent trends in healthcare and this
                  enables our team of highly skilled professionals to provide
                  excellent healthcare services to our clients. Continuous
                  improvement and learning help us maintain the standard of
                  excellence in patient care at all times.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-280-item">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384.82 384.95"
            >
              <defs>
                <style>.cls-1 fill:#fff;</style>
              </defs>
              <title>Innovative</title>
              <path
                className="cls-1"
                d="M310.48,225.71c-4,3.11-7.82,5.89-11.42,9-37.36,32.06-40.31,91.69-6.52,127.49,10.18,10.79,22.4,18.2,35.89,24a37,37,0,0,1,20.48,21.86c1.72,4.62,2.42,9.62,3.62,14.6h11.9a52.47,52.47,0,0,0-11.58-33.19c-7.06-9-16.71-14-26.86-18.53-43.6-19.53-58.34-76.6-29.37-114.58,5.69-7.45,13-13.63,20.06-20.84ZM182.13,198.16l44.71,31.94,7.41-10.41-44.7-31.9Zm-7.46,77.63,51-12.77c-1.1-4.38-2.09-8.3-3.12-12.37l-51,12.78ZM477.35,424.38l-8.14,9.84,38.29,31.9,8.17-9.8Zm-35.66,17.91v44.25h12.19V442.29Zm38.2-39h44.27v-12H479.89ZM352.24,435.88v18.67h12.28V435.88Z"
                transform="translate(-165 -153)"
              />
              <path
                d="M165,363.51c1.66-2.92,4.21-4.31,7.51-4.91,6-1.1,11.91-2.49,18.46-3.88-3.75-5.47-7.2-10.48-10.64-15.51-3.66-5.35-3.47-7.47,1.11-12.06,5.39-5.41,10.78-10.83,16.22-16.2,3.78-3.73,6.16-3.92,10.6-.92,5.27,3.57,10.51,7.2,16.32,11.18,1.3-6.17,2.5-11.86,3.69-17.55,1.4-6.72,2.27-7.63,8.82-8.93,1.11-14.78,4.26-29.14,10.5-42.7q21.28-46.26,68.93-64.35a110.19,110.19,0,0,1,48.65-6.92,12.59,12.59,0,0,0,9.94-3.06c3.89-3.34,8.15-6.24,12.26-9.32,6.09-4.56,8.67-4.17,13.33,2q6.09,8.1,12.17,16.23c1.82,2.45,4,4.28,7.25,3.59s4.82-3.22,5.28-6.48c1.08-7.56,2.14-15.12,3.37-22.66.8-4.94,3.59-6.87,8.45-6.19l34.95,4.94c5.78.82,7.8,3.62,6.95,9.71-1,7.06-2,14.13-3,21.18-.49,3.22-.08,6.08,3,7.85s5.75.57,8.29-1.36q8.7-6.57,17.44-13.07c4.54-3.35,7.82-2.89,11.24,1.63q10.54,13.92,21,27.95c3.55,4.79,3.07,7.77-1.77,11.45q-8.52,6.48-17.14,12.84c-2.71,2-4.57,4.38-3.55,8,1,3.4,3.71,4.39,6.89,4.81,7.19,1,14.38,2,21.56,3.05,5.39.79,7.48,3.76,6.69,9.2q-2.5,17.1-4.94,34.19c-.86,6-3.4,8-9.43,7.12-7.18-1-14.37-2-21.56-3.07-3.06-.45-5.78,0-7.57,2.82-1.88,3-.94,5.7,1,8.3q6.46,8.53,12.86,17.12c3.89,5.22,3.51,8.21-1.57,12q-13.67,10.27-27.36,20.5c-5,3.72-8,3.28-11.75-1.65q-6.48-8.52-12.86-17.12c-1.92-2.6-4.21-4.45-7.6-3.62-3.59.87-4.71,3.76-5.16,7.06q-1.49,10.8-3.05,21.57c-.75,5.19-3.27,7.3-8.46,6.61q-17.69-2.32-35.32-5c-5.76-.87-7.42-3.22-6.68-9.12.82-6.58,1.83-13.14,2.75-19.71.15-1.11.65-2.37.31-3.33-.77-2.22-1.47-4.82-3.09-6.31-2.12-2-5-1.2-7.26.5-5.94,4.4-11.83,8.86-17.76,13.28-5.34,4-8.33,3.57-12.3-1.71q-10.18-13.5-20.29-27c-3.81-5.11-3.35-8.15,1.76-12,5.7-4.29,11.39-8.6,17.14-12.84,2.64-1.95,4.26-4.38,3.36-7.71-.87-3.17-3.4-4.36-6.51-4.78-7.07-.94-14.13-2-21.19-3-6.35-.93-8.28-3.35-7.41-9.67q2.37-17.29,5-34.55c.83-5.39,3.58-7.31,8.91-6.56,7.31,1,14.63,2,21.92,3.19,3.15.51,5.8,0,7.56-2.78s1.1-5.48-.8-8c-4.38-5.8-8.81-11.56-13-17.46-1.4-2-2.25-4.31-3.88-7.52-6.16.79-13.42,1.12-20.39,2.72-37.91,8.7-64.89,31.06-78.68,67.35-13.88,36.54-8.48,71.34,14.33,103.22,7.82,10.93,17.85,19.57,29,26.92,8.77,5.76,15.24,13.44,18.09,23.63a60.51,60.51,0,0,1,2,13.66c.32,7.76,0,15.54.1,23.3.07,8.69,5.05,13.89,13.73,14q24.61.21,49.24,0c8.73-.07,13.63-5.22,13.68-13.94,0-7.64-.09-15.28,0-22.92.25-15.42,6.48-27.79,19.09-36.85,5-3.57,9.88-7.24,15.18-11.14l8.44,9.45c-4.84,3.64-9.23,7.35-14,10.46-11.21,7.28-16.37,17.46-16,30.73.21,7,.06,14,0,21.05,0,8.73-3.65,15.63-10.46,21.07a6.68,6.68,0,0,0-2.2,4.54c-.19,10.27-.06,20.55-.11,30.82-.08,16.11-10.77,26.92-26.8,27.08q-11.48.11-22.93,0c-16-.15-26.78-11-26.91-27-.09-10.4.06-20.8-.12-31.19a6.19,6.19,0,0,0-2.1-4.21,26.1,26.1,0,0,1-10.54-21.06c-.11-5.51,0-11,0-17.54-3.06,3-5.57,5.44-8.06,7.9-4.64,4.59-6.71,4.8-12.06,1.14-5-3.44-10-6.9-15.5-10.66-1.49,6.9-2.82,13.22-4.22,19.52-1.09,4.91-3,6.47-8.09,6.49q-11.28,0-22.55,0c-4.8,0-6.8-1.64-7.85-6.33-1.41-6.32-2.73-12.66-4.24-19.69-5,3.41-9.57,6.54-14.15,9.69-7.28,5-8.39,4.9-14.65-1.36-5-5-9.94-9.9-14.87-14.89-3.87-3.91-4.07-6.27-.94-10.9,3.51-5.18,7.06-10.32,11-16.09-6.09-1.29-11.74-2.56-17.41-3.65-3.56-.68-6.8-1.69-8.59-5.2Zm342.32-29.63c-3.65-4.88-7.06-9.36-10.4-13.9-5.42-7.37-6.05-15.47-1.82-22.46s12-10.21,21.14-8.77c5.38.84,10.79,1.5,16.42,2.27,1.24-8.58,2.41-16.71,3.63-25.17-5.72-.82-11.14-1.64-16.57-2.37-12.53-1.67-20.11-11.4-17.91-23,1-5.34,4.1-9.28,8.38-12.45,4.59-3.39,9.12-6.85,13.77-10.36-5.27-7-10.22-13.58-15.28-20.32-5.69,4.14-10.95,8.39-16.61,12-9.13,5.83-20.84,2.68-26.4-6.62-3.12-5.22-2.73-10.76-1.9-16.4.69-4.76,1.34-9.53,2-14.45l-25.18-3.52c-.9,6-1.81,11.51-2.54,17.06-1.15,8.69-5.73,14.61-14.16,17.09-8,2.37-15.57-.7-21.29-8.23-3.4-4.47-6.75-9-10.26-13.63L372,195.92c3.88,5.17,7.56,9.91,11,14.8,4.9,6.87,5.53,14.27,1.17,21.5s-11.37,10.19-19.91,9c-5.79-.81-11.58-1.6-17.65-2.43-1.21,8.56-2.36,16.78-3.55,25.2,6.16.9,11.85,1.69,17.52,2.55,7.34,1.1,12.84,4.76,15.8,11.71,3.54,8.36,1.09,17-6.57,23.05-4.67,3.69-9.48,7.2-14.42,10.93l15.31,20.4c4.69-3.52,9-7.26,13.75-10.14,3.64-2.19,7.87-4.35,12-4.64,12.77-.93,21.53,10.23,19.43,23.8-.83,5.37-1.52,10.76-2.3,16.34l25.2,3.53c.78-5.6,1.53-10.67,2.18-15.75s2-9.54,5.61-13.23c8.25-8.46,21.34-7.77,29,1.7,3.92,4.84,7.55,9.91,11.37,14.95ZM282.5,395.19c-12.22,20.66-31.66,23.86-45.06,19.94a38.47,38.47,0,0,1-27.91-35.31,36.81,36.81,0,0,1,5.72-21.41c6.43-10.43,15.93-16.29,27.76-18.29l-4.82-20.22c-.3.87-.53,1.44-.69,2-3.27,12.25-11.91,15.5-22.31,8.38-3.69-2.53-7.37-5.08-10.41-7.18L193,335c2.56,3.74,5.47,7.82,8.19,12,5.57,8.56,1.78,18-8.14,20.32-5,1.17-10,2.18-15.06,3.28v15.17c4.79,1,9.43,2,14.05,3.06,11.41,2.59,15.07,11.89,8.51,21.55-2.65,3.9-5.33,7.78-7.54,11l11.79,11.87c3.79-2.6,7.86-5.5,12.05-8.23,8.55-5.56,18-1.76,20.35,8.13,1.17,5,2.15,10,3.25,15.12h15.21c.94-4.53,1.83-8.93,2.78-13.31,2.66-12.35,11.95-16.06,22.35-8.92L292.35,434c3.5-3.67,6.62-7.46,10.27-10.65,2.84-2.48,3.13-4.71,1.15-7.62a12.61,12.61,0,0,0-1.38-2.22C295.84,407.4,289.25,401.38,282.5,395.19Zm-32.67,8.36c8.27-.28,16-4.87,20.94-14.07,1.07-2,.85-3.25-.7-4.88-7.91-8.27-14.72-17.4-19.5-27.81-1.88-4.1-4.36-4.37-8-3.53a25.41,25.41,0,0,0-19.91,27.08C224,393.61,234.3,403.19,249.83,403.55ZM332.89,506.1c-.07,1.19-.16,2-.17,2.92-.15,11.26,4.59,16.1,15.74,16.11H368c12.18,0,17.57-6.59,15.41-19Zm.13-25.48v12.31h50.6V480.62Z"
                transform="translate(-165 -153)"
              />
              <path
                d="M249.2,153c4.33,16.9,8.65,33.81,13.07,51.08L250,207.34c-4.36-17-8.67-33.87-13-50.84L247.7,153Z"
                transform="translate(-165 -153)"
              />
              <path
                d="M310.48,225.71l6.2,9.81c-7,7.21-14.37,13.39-20.06,20.84-29,38-14.23,95.05,29.37,114.58,10.15,4.55,19.8,9.53,26.86,18.53a52.47,52.47,0,0,1,11.58,33.19h-11.9c-1.2-5-1.9-10-3.62-14.6a37,37,0,0,0-20.48-21.86c-13.49-5.83-25.71-13.24-35.89-24-33.79-35.8-30.84-95.43,6.52-127.49C302.66,231.6,306.51,228.82,310.48,225.71Z"
                transform="translate(-165 -153)"
              />
              <path
                d="M182.13,198.16l7.42-10.37,44.7,31.9-7.41,10.41Z"
                transform="translate(-165 -153)"
              />
              <path
                d="M174.67,275.79l-3.15-12.36,51-12.78c1,4.07,2,8,3.12,12.37Z"
                transform="translate(-165 -153)"
              />
              <path
                d="M477.35,424.38l38.32,31.94-8.17,9.8-38.29-31.9Z"
                transform="translate(-165 -153)"
              />
              <path
                d="M441.69,442.29h12.19v44.25H441.69Z"
                transform="translate(-165 -153)"
              />
              <path
                d="M479.89,403.33v-12h44.27v12Z"
                transform="translate(-165 -153)"
              />
              <path
                d="M352.24,435.88h12.28v18.67H352.24Z"
                transform="translate(-165 -153)"
              />
              <path
                d="M490.66,265.08a51.07,51.07,0,1,1-51-51.22A51.12,51.12,0,0,1,490.66,265.08Zm-12.78-.24a38.29,38.29,0,0,0-76.58,0c-.12,20.85,17.63,38.59,38.5,38.49A38.63,38.63,0,0,0,477.88,264.84Z"
                transform="translate(-165 -153)"
              />
            </svg>
            <h3>Innovative</h3>
            <p className="main-content">
              The hallmark of every invention in the world today is creative
              thinking, generation of ideas, and coming up with new ways of
              doing things. We consistently stay ahead of the curve by offering
              world-class healthcare services to our esteemed customers, coming
              up with new ways of improving our services, adopting new
              technology in our delivery of healthcare, and rewarding ingenuity
              as a way of creating an environment where employees innovate.
              These are the values that make our employees stand out and enable
              them to deliver best in class care to our patients.
            </p>
            <button onClick={() => setModal4(!modal4)} className="seemore-btn">
              Read More
            </button>
            <div className={modal4 ? "show-card" : "hide-card"}>
              <div style={{ position: "relative" }}>
                <button onClick={() => setModal4(!modal4)}>x</button>
                <p>
                  The hallmark of every invention in the world today is creative
                  thinking, generation of ideas, and coming up with new ways of
                  doing things. We consistently stay ahead of the curve by
                  offering world-class healthcare services to our esteemed
                  customers, coming up with new ways of improving our services,
                  adopting new technology in our delivery of healthcare, and
                  rewarding ingenuity as a way of creating an environment where
                  employees innovate. These are the values that make our
                  employees stand out and enable them to deliver best in class
                  care to our patients.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-280-item">
            <img src={Accesible} alt="" />
            <h3>Accessible</h3>
            <p className="main-content">
              We are friendly, welcoming, approachable, and reachable. Our
              customers can reach us at any time and receive top quality
              healthcare services from us. We ensure that we follow through on
              all the promises we make to our patients and clients.
            </p>
            <button onClick={() => setModal5(!modal5)} className="seemore-btn">
              Read More
            </button>
            <div className={modal5 ? "show-card" : "hide-card"}>
              <div style={{ position: "relative" }}>
                <button onClick={() => setModal5(!modal5)}>x</button>
                <p>
                  We are friendly, welcoming, approachable, and reachable. Our
                  customers can reach us at any time and receive top quality
                  healthcare services from us. We ensure that we follow through
                  on all the promises we make to our patients and clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
