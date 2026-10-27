import React, { useState } from "react";
import Section from "./Section";
import ContactForm from "./ContactForm";
import contact from "./../util/contact.js";

function ContactUsSection(props) {
  const [status, setStatus] = useState();

  const onSubmit = ({ name, email, number, message }) => {
    setStatus({ type: "pending" });

    contact
      .submit({ name, email, number, message })
      .then(res => {
        if (res && res.status === "error") {
          throw new Error(res.error || "Submission failed");
        }
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent to info@brightside-security.com."
        });
      })
      .catch(err => {
        console.error("Contact form error:", err);
        setStatus({
          type: "error",
          message: "Unable to send message right now. Please call us directly at 510-396-1974 or email info@brightside-security.com."
        });
      });
  };

  const onReset = () => {
    setStatus(null);
  };

  return (
    <Section className="contact-us-page pt-150" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="get-in-touch-wrapper" data-wow-delay="0.30s">
              <h2 className="mb-45" data-wow-delay="0.30s">
                Get In Touch
              </h2>
              <ul>
                <li className="phone-number">
                  <a href="tel:5103961974">
                    <span>510-396-1974</span>
                  </a>
                </li>

                <li className="email">
                  <a href="mailto:info@brightside-security.com">
                    <span>info@brightside-security.com</span>
                  </a>
                </li>
                <li className="location">
                  <a href="https://maps.google.com/?q=8915+Osterville+Way,+Elk+Grove,+CA+95758" target="_blank" rel="noopener noreferrer">
                    <span>Bright Side Security, INC</span>
                    <span>8915 Osterville Way</span>
                    <span>Elk Grove, CA 95758</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-us-form-wrapper">
              <ContactForm onSubmit={onSubmit} onReset={onReset} status={status} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactUsSection;
