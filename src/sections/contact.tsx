import "./styles/contact.css";
import "../App.css";
import OrangeButton from "../components/OrangeButton";

function Contact() {
  return (
    <section className="contact-container">
      <div className="page-header">Contact us</div>
      <div className="contact-layout">
        <div>
          <h2 className="heading-white">Let's find your next address</h2>
          <p className="description">
            Tell us what you're looking for and a named agent will be in touch
            within one business day. No call centres, no run-around.
          </p>
        </div>

        <div className="fill-form">
          <div className="full-name">
            <div>
              <label>FIRST NAME</label>
              <input className="type-in" type="text" />
            </div>
            <div>
              <label>LAST NAME</label>
              <input className="type-in" type="text" />
            </div>
          </div>

          <div className="fill-container">
            <label>EMAIL</label>
            <input className="type-in" type="text" />
          </div>

          <div className="fill-container">
            <label>I'M INTERESTED IN</label>
            <select className="type-in">
              <option disabled>--Select an option--</option>
              <option>Buying a property</option>
              <option>Selling a property</option>
              <option>Renting a property</option>
              <option>Property valuation</option>
              <option>Commercial real estate</option>
            </select>
          </div>

          <div className="fill-container">
            <label>MESSAGE</label>
            <input className="type-in" type="text" />
          </div>

          <div className="fill-container">
            <OrangeButton name="Send enquiry" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
