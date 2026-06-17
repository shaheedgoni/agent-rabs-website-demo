import banner from "../assets/hero-image.webp";
import "./hero.css";

function Hero() {
  return (
    <section className="hero-container">
      <div className="banner-container">
        <img src={banner} className="hero-banner" />
        <div className="dark-overlay"></div>
      </div>

      <div className="hero-card">
        <span className="heading">
          Connecting You to Properties You Can Trust
        </span>
        <span className="sub-heading">
          Your trusted partner in property. Buy, sell, and rent with confidence
          across Nigeria.
        </span>

        <div className="button-container">
          <button className="orange-button">VIEW PROPERTIES</button>
          <button className="white-button">TALK TO AN AGENT</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
