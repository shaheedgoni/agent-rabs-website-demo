import { useState, type ChangeEvent } from "react";
import "./styles/contact.css";
import "../App.css";
import OrangeButton from "../components/OrangeButton";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type FormField = keyof FormState;

type FieldElement = HTMLInputElement | HTMLSelectElement;

function Contact() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    interest: "placeholder",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: FormField) => (e: ChangeEvent<FieldElement>) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required.*";
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required.*";
    }
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.*";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.*";
    }
    if (!form.message.trim()) {
      newErrors.message = "Please type a message.*";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (): void => {
    if (validate()) {
      // All fields valid — handle the enquiry submission here
      console.log("Form submitted:", form);
    }
  };

  return (
    <section className="white-container contact-border page" id="contact">
      <h2 className="page-header">Contact us</h2>
      <div className="contact-layout ">
        <div>
          <div className="heading-layout-contact">
            <h2 className="heading-black" data-aos="fade-right">
              Let's find your next address
            </h2>
          </div>

          <p className="description" data-aos="fade-right" data-aos-delay="100">
            Tell us what you're looking for and a named agent will be in touch
            within one business day. No call centres, no run-around.
          </p>

          <div className="contact-info">
            <div data-aos="fade-right" data-aos-delay="300">
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
            <div data-aos="fade-right" data-aos-delay="450">
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
            <div data-aos="fade-right" data-aos-delay="600">
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

        <div className="fill-form" data-aos="fade-left">
          <div className="full-name">
            <div>
              <label>FIRST NAME</label>
              <input
                className="type-in-contact"
                type="text"
                value={form.firstName}
                onChange={handleChange("firstName")}
              />
              {errors.firstName && (
                <p className="error-fill">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label>LAST NAME</label>
              <input
                className="type-in-contact"
                type="text"
                value={form.lastName}
                onChange={handleChange("lastName")}
              />
              {errors.lastName && (
                <p className="error-fill">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="fill-container">
            <label>EMAIL</label>
            <input
              className="type-in-contact"
              type="text"
              value={form.email}
              onChange={handleChange("email")}
            />
            {errors.email && <p className="error-fill">{errors.email}</p>}
          </div>

          <div className="fill-container">
            <label>I'M INTERESTED IN</label>
            <select
              className="type-in-contact"
              value={form.interest}
              onChange={handleChange("interest")}
            >
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
            <input
              className="type-in-contact"
              type="text"
              value={form.message}
              onChange={handleChange("message")}
            />
            {errors.message && <p className="error-fill">{errors.message}</p>}
          </div>

          <div className="fill-container">
            <OrangeButton name="Send enquiry" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
