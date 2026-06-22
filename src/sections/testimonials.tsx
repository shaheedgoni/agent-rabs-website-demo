import Reviews from "../components/Reviews";
import "../components/Reviews";
import "../App.css";
import "./styles/testimonials.css";

function Testmonials() {
  return (
    <>
      <section className="black-container page" id="testimonials">
        <div>
          <h2 className="page-header">What clients say</h2>

          <h2
            className="testimonial-heading-layout heading-white"
            data-aos="fade-up"
          >
            Trusted with their biggest decisions
          </h2>
        </div>

        <div className="review-layout">
          <Reviews
            comment="They flagged a title problem two other agents missed. It saved us from a disaster — and a lot of money."
            userPp="HA"
            userName="Chidinma O."
            userDescription="Bought in Lekki"
            dataAos="fade-up"
            dataAosDelay="200"
          />
          <Reviews
            comment="Sold our family home above asking in three weeks. Honest, fast and genuinely on our side the whole way"
            userPp="TA"
            userName="Tunde A."
            userDescription="Sold in Ikoyi"
            dataAos="fade-up"
            dataAosDelay="300"
          />
          <Reviews
            comment="I invest from abroad and they manage everything. First agent I have actually trusted with my money"
            userPp="FB"
            userName="Fatima B."
            userDescription="Investor, Abuja"
            dataAos="fade-up"
            dataAosDelay="400"
          />
        </div>
      </section>
    </>
  );
}

export default Testmonials;
