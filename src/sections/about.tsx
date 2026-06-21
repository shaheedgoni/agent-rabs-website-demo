// import Card from "../components/Card";
import OrangeButton from "../components/OrangeButton";
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
              <span style={{ "--i": 0 } as React.CSSProperties}>Built on</span>
              <span
                className="title-highlight"
                style={{ "--i": 1 } as React.CSSProperties}
              >
                partnership,
              </span>
              <span style={{ "--i": 2 } as React.CSSProperties}>not just</span>
              <span style={{ "--i": 3 } as React.CSSProperties}>paperwork</span>
            </div>
          </div>

          <div className="description">
            A house is more than a transaction. We treat every client like a
            partner, not just a sale. It's why people trust us with one of the
            biggest decisions they'll make.
          </div>

          <div className="read-more-button">
            <OrangeButton name="Read More" />
          </div>
        </div>

        <div className="about-right">
          <img src={Refpic} className="about-pic" />
        </div>
      </div>
    </section>
  );
}

export default About;
