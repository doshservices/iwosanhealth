import "./carrer.css";

const Carrer = () => {
  return (
    <>
      <div className="carrer">
        <h1>Careers</h1>
        <p>
          Iwosan Investments Limited is a privately held healthcare asset and
          investment company dedicated to financing and developing brownfield
          and greenfield multi-specialist healthcare facility
        </p>
      </div>
      <section className="news">
        <div className="news__post">
          <h2>Technical Career</h2>
          <p className="news__time">Romeo Stars on 24 March 2020</p>
          <blockquote className="news__blockquote">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            ducimus, reiciendis suscipit tempore voluptas tenetur, vero
            obcaecati recusandae, nostrum natus hic exercitationem delectus
            voluptatum! Cum minima, sequi molestias perspiciatis reiciendis
            totam iure voluptate, nulla accusamus pariatur non? Vitae officia
            illum earum enim, mollitia necessitatibus illo nam! Eum labore
            excepturi fuga.
          </blockquote>
          <button className="news__button">Read More</button>
        </div>
        <div className="news__picture"></div>
      </section>
      <section className="news">
        <div className="news__post">
          <h2>Non-technical Career</h2>
          <p className="news__time">Romeo Stars on 24 March 2020</p>
          <blockquote className="news__blockquote">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            ducimus, reiciendis suscipit tempore voluptas tenetur, vero
            obcaecati recusandae, nostrum natus hic exercitationem delectus
            voluptatum! Cum minima, sequi molestias perspiciatis reiciendis
            totam iure voluptate, nulla accusamus pariatur non? Vitae officia
            illum earum enim, mollitia necessitatibus illo nam! Eum labore
            excepturi fuga.
          </blockquote>
          <button className="news__button">Read More</button>
        </div>
        <div className="news__picture"></div>
      </section>
    </>
  );
};
export default Carrer;
