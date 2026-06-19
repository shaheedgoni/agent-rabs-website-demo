import OrangeButton from "../components/OrangeButton";
import banner from "../assets/hero-image.webp";
import "./styles/hero.css";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hold">
        <div className="banner-container">
          <img src={banner} className="hero-banner" />
          <div className="dark-overlay"></div>
        </div>

        <div className="hero-card">
          <span className="heading-hero">
            Connecting You to Properties You Can Trust
          </span>
          <span className="sub-heading">
            Your trusted partner in property. Buy, sell, and rent with
            confidence across Nigeria.
          </span>

          <div className="button-container">
            <OrangeButton name="VIEW PROPERTIES" />
            <button className="white-button">TALK TO AN AGENT</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
