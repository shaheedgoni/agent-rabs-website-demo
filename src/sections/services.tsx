import Card from "../components/Card";
import "./styles/services.css";
import "../App.css";

function Services() {
  return (
    <section className="services-container">
      <div>
        <div className="page-header">What we do</div>
        <div className="heading-services">
          Property services,{" "}
          <span className="title-highlight">done properly</span>
        </div>
        <div className="description">
          From the first viewing to the final signature, we handle every step.
          Six ways we help you buy, sell, and own with confidence.
        </div>
      </div>

      <div className="cards-layout-services">
        <Card
          title="Property Sales"
          desc="Buy or sell residential and commercial property with agents who negotiate hard and close clean."
          className="card-services"
          linkButton="learn more"
        />
        <Card
          title="Rentals & Leasing"
          desc="A place to live or a tenant to fill it — verified listings, vetted tenants, fair terms on both sides."
          className="card-services"
          linkButton="learn more"
        />
        <Card
          title="Property Management"
          desc="Hands-off ownership. We collect rent, manage repairs and handle tenants so you never have to."
          className="card-services"
          linkButton="learn more"
        />
      </div>
    </section>
  );
}

export default Services;
