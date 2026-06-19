import Reviews from "../components/Reviews";
import "../components/Reviews";
import "../App.css";
import "./styles/testimonials.css";

function Testmonials() {
  return (
    <>
      <section className="testimonials-container">
        <div>
          <div className="page-header">What clients say</div>

          <div className="testimonial-heading-layout heading-white">
            Trusted with their biggest decisions
          </div>
        </div>

        <div className="review-layout">
          <Reviews
            comment="They flagged a title problem two other agents missed. It saved us from a disaster — and a lot of money."
            userPp="HA"
            userName="Chidinma O."
            userDescription="Bought in Lekki"
          />
          <Reviews
            comment="Sold our family home above asking in three weeks. Honest, fast and genuinely on our side the whole way"
            userPp="TA"
            userName="Tunde A."
            userDescription="Sold in Ikoyi"
          />
          <Reviews
            comment="I invest from abroad and they manage everything. First agent I have actually trusted with my money"
            userPp="FB"
            userName="Fatima B."
            userDescription="Investor, Abuja"
          />
        </div>
      </section>
    </>
  );
}

export default Testmonials;
