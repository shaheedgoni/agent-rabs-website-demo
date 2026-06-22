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
        <h1 className="hero-header" data-aos="fade-up">
          Connecting You to Properties You Can Trust
        </h1>

        <p className="description" data-aos="fade-up" data-aos-delay="200">
          Your trusted partner in property. Buy, sell, and rent with confidence
          across Nigeria.
        </p>
      </div>

      <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
        <OrangeButton name="VIEW PROPERTIES" />
        <button className="white-button">TALK TO AN AGENT</button>
      </div>
    </section>
  );
}

export default Hero;
