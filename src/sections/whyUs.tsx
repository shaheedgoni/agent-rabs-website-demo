import Card from "../components/Card";
import "./styles/whyUs.css";
import "../App.css";

function WhyUs() {
  return (
    <section className="white-container page" id="whyus">
      <div className="why-us-heading">
        <div>
          <h2 className="page-header">Why Choose Us</h2>
          <h2
            className="why-us-heading-layout heading-black"
            data-aos="zoom-in"
          >
            The agent you'd recommend to family
          </h2>
        </div>
      </div>

      <div className="cards-layout-why-us">
        <div data-aos="fade-up" data-aos-delay="300">
          <Card
            title="Verified titles only"
            desc="Every C of O and deed is checked before a property ever reaches your shortlist."
            className="card-why-us"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <Card
            title="The price is the price"
            desc="Transparent fees and honest valuations — nothing buried in the fine print."
            className="card-why-us"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="500">
          <Card
            title="On your side"
            desc="We push hard on your behalf and walk away when a deal is wrong for you."
            className="card-why-us"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <Card
            title="Deep local knowledge"
            desc="Street-level insight on neighbourhoods, pricing and growth, built over twelve years."
            className="card-why-us"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="700">
          <Card
            title="We move fast"
            desc="Viewings in days and paperwork that keeps pace. Your time is part of the cost."
            className="card-why-us"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="800">
          <Card
            title="A relationship, not a sale"
            desc="We push hard on your behalf and walk away when a deal is wrong for you."
            className="card-why-us"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
