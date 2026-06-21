import OrangeButton from "../components/OrangeButton";
import banner from "../assets/hero-image.webp";
import "./styles/hero.css";
import "../App.css";

function Hero() {
  return (
    <section className="hero-container page" id="hero">
      <div className="heropage-background">
        <img src={banner} className="heropage-image" />
        <div className="dark-overlay"></div>
      </div>

      <div>
        <h1 className="hero-header">
          Connecting You to Properties You Can Trust
        </h1>

        <p className="description">
          Your trusted partner in property. Buy, sell, and rent with confidence
          across Nigeria.
        </p>
      </div>

      <div className="hero-buttons">
        <OrangeButton name="VIEW PROPERTIES" />
        <button className="white-button">TALK TO AN AGENT</button>
      </div>
    </section>
  );
}

export default Hero;
