import "./styles/contact.css";
import "../App.css";
import OrangeButton from "../components/OrangeButton";

function Contact() {
  return (
    <section className="black-container contact-border page" id="contact">
      <h2 className="page-header">Contact us</h2>
      <div className="contact-layout ">
        <div>
          <div className="heading-layout-contact">
            <h2 className="heading-white">Let's find your next address</h2>
          </div>

          <p className="description">
            Tell us what you're looking for and a named agent will be in touch
            within one business day. No call centres, no run-around.
          </p>

          <div className="contact-info">
            <div>
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
                stroke="rgb(224, 161, 106)"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <p>+23480123456</p>
            </div>
            <div>
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
                stroke="rgb(224, 161, 106)"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                <path d="M22 6l-10 7L2 6"></path>
              </svg>

              <p>agentrabs123@gmail.com</p>
            </div>
            <div>
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
                stroke="rgb(224, 161, 106)"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>

              <p>GRA - Kaduna</p>
            </div>
          </div>
        </div>

        <div className="fill-form">
          <div className="full-name">
            <div>
              <label>FIRST NAME</label>
              <input className="type-in" type="text" />
              <p className="error-fill">First name is required.*</p>
            </div>
            <div>
              <label>LAST NAME</label>
              <input className="type-in" type="text" />
              <p className="error-fill">Last name is required.*</p>
            </div>
          </div>

          <div className="fill-container">
            <label>EMAIL</label>
            <input className="type-in" type="text" />
            <p className="error-fill">Please enter your email address.*</p>
          </div>

          <div className="fill-container">
            <label>I'M INTERESTED IN</label>
            <select className="type-in" defaultValue="placeholder">
              <option disabled value="placeholder">
                --Select an option--
              </option>
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
            <p className="error-fill">Please type a message.*</p>
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
