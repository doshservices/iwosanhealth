import management from "./manageData";
// console.log(management);

const Management = () => {
  return (
    <section>
      {management.ceo.map((data) => {
        <div key={data.id}>
          <figure>
            <img src={data.img} alt={data.name} />
          </figure>
          <div>
            <h3>{data.name}</h3>
            {console.log(data.name)}
            <h4>{data.office}</h4>
            <span></span>
            <p>{data.about}</p>
          </div>
        </div>;
      })}
    </section>
  );
};
export default Management;
