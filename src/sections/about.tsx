// import Card from "../components/Card";
import Refpic from "../assets/hand-keys.png";
import "./styles/about.css";
import "../App.css";

function About() {
  return (
    <section className="white-container page" id="about">
      <h2 className="page-header">About Us</h2>

      <div className="layout-setup">
        <div className="about-left">
          <div className="about-heading-layout">
            <div className="heading-black">
              <span data-aos="fade-up">Built on</span>
              <span
                className="title-highlight"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                partnership,
              </span>
              <span data-aos="fade-up" data-aos-delay="200">
                not just
              </span>
              <span data-aos="fade-up" data-aos-delay="300">
                paperwork
              </span>
            </div>
          </div>

          <div className="description" data-aos="fade-up" data-aos-delay="400">
            A house is more than a transaction. We treat every client like a
            partner, not just a sale. It's why people trust us with one of the
            biggest decisions they'll make.
          </div>
        </div>

        <div className="about-right">
          <img
            src={Refpic}
            className="about-pic"
            data-aos="zoom-in"
            data-aos-delay="250"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
