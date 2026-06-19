// import Card from "../components/Card";
import OrangeButton from "../components/OrangeButton";
import Refpic from "../assets/hand-keys.png";
import "./styles/about.css";
import "../App.css";

function About() {
  return (
    <section className="about-container" id="#about">
      <div className="page-header">About Us</div>

      <div className="layout-setup">
        <div className="about-left">
          <div className="heading-about">
            Built on <span className="title-highlight">partnership,</span> not
            just paperwork
          </div>

          <div className="description">
            A house is more than a transaction. We treat every client like a
            partner, not just a sale. It's why people trust us with one of the
            biggest decisions they'll make.
          </div>

          <OrangeButton name="Read More" />
        </div>

        <div className="about-right">
          <img src={Refpic} className="about-pic" />
        </div>
      </div>
    </section>
  );
}

export default About;
