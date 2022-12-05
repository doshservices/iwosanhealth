import "./blog.css";
import Blogimg from "../../images/blog.svg";
import Footer from "../navigation/footer";
import curve1 from "../../images/curved-bg1.svg"
import curve2 from "../../images/curved-bg2.svg"

const Blog = () => {
  return (
    <>
      <section className="blog">
        <section className="heading">
          <img src={curve1} className="curve1" alt="" />
          <img src={curve1} className="curve2" alt="" />

          <h1>Our Blog</h1>
          <p>
            Iwosan Investments Limited is a privately held healthcare asset and
            investment company dedicated to financing and developing brownfield
            and greenfield multi-specialist healthcare facility
          </p>
        </section>
        <div className="posts">
          <section className="news">
            <div className="news__post">
              <h2>Evening exercise makes your mind fresher and healthier</h2>
              <p className="news__time">Romeo Stars on 24 March 2020</p>
              <blockquote className="news__blockquote">
                Exercise with a partner can increase the body's immunity and
                also the enthusiasm for doing it because it will be very fun
                especially done in the afternoon or before dusk, it will be very
                useful Exercise with a partner can increase the body's immunity
                and also the enthusiasm for doing it because it will be very fun
                especially done in the afternoon or before dusk, it will be very
                useful Exercise with a partner can increase the body's immunity
                and also the enthusiasm for doing it because it will be very fun
                especially done in the afternoon or before dusk, it will be very
                useful
              </blockquote>
              <button className="news__button">Read More</button>
            </div>
            <div className="news__picture"></div>
          </section>
          <section className="flex-columns">
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
          </section>
        </div>
      </section>
    </>
  );
};
export default Blog;
