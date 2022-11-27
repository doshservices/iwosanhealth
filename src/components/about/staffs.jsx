import staffData from "./staffData";
import "./about.css";
import "./staff.css";
import oladapo from "../../images/Dapo Oshinusi.jpg";

const Staffs = () => {
  return (
    <>
      <div className="modal fixed-card">
        <div>
          <button>x</button>
          <figure>
            <img src={oladapo} alt="" />
          </figure>
          <div className="text">
            <p></p>
          </div>
        </div>
      </div>
      <section className="staffs">
        {staffData.staffs.map((data) => (
          <div className="staff" key={data.id} id={data.id}>
            <figure>
              <img src={data.img} alt={data.name} />
            </figure>
            <div>
              <h3>{data.name}</h3>
              <h4>{data.office}</h4>
              <span></span>
              <p>{data.about}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default Staffs;
