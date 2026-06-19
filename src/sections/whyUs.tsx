import Card from "../components/Card";
import "./styles/whyUs.css";
import "../App.css";

function WhyUs() {
  return (
    <section className="why-us-container">
      <div className="why-us-heading">
        <div>
          <div className="page-header">Why Choose Us</div>
          <div className="why-us-heading-layout heading-black">
            The agent you'd recommend to family
          </div>
        </div>
      </div>

      <div className="cards-layout-why-us">
        <Card
          title="Verified titles only"
          desc="Every C of O and deed is checked before a property ever reaches your shortlist."
          className="card-why-us"
        />
        <Card
          title="The price is the price"
          desc="Transparent fees and honest valuations — nothing buried in the fine print."
          className="card-why-us"
        />
        <Card
          title="On your side"
          desc="We push hard on your behalf and walk away when a deal is wrong for you."
          className="card-why-us"
        />
        <Card
          title="Deep local knowledge"
          desc="Street-level insight on neighbourhoods, pricing and growth, built over twelve years."
          className="card-why-us"
        />
        <Card
          title="We move fast"
          desc="Viewings in days and paperwork that keeps pace. Your time is part of the cost."
          className="card-why-us"
        />
        <Card
          title="A relationship, not a sale"
          desc="We push hard on your behalf and walk away when a deal is wrong for you."
          className="card-why-us"
        />
      </div>
    </section>
  );
}

export default WhyUs;
