import Card from "../components/Card";
import "./styles/services.css";
import "../App.css";

function Services() {
  return (
    <section className="black-container page" id="services">
      <div>
        <h2 className="page-header">What we do</h2>
        <h2
          className="services-heading-layout  heading-white"
          data-aos="fade-right"
        >
          Property services,
          <span className="title-highlight"> done properly</span>
        </h2>

        <div className="description" data-aos="fade-right" data-aos-delay="100">
          From the first viewing to the final signature, we handle every step.
          Six ways we help you buy, sell, and own with confidence.
        </div>
      </div>

      <div className="cards-layout-services">
        <div data-aos="fade-up" data-aos-delay="300">
          <Card
            title="Property Sales"
            desc="Buy or sell residential and commercial property with agents who negotiate hard and close clean."
            className="card-services"
            linkButton="learn more"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <Card
            title="Rentals & Leasing"
            desc="A place to live or a tenant to fill it — verified listings, vetted tenants, fair terms on both sides."
            className="card-services"
            linkButton="learn more"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="500">
          <Card
            title="Property Management"
            desc="Hands-off ownership. We collect rent, manage repairs and handle tenants so you never have to."
            className="card-services"
            linkButton="learn more"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
