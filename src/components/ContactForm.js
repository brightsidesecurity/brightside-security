import React, { useState } from "react";
import FormStatus from "./FormStatus";
import FormField from "./FormField";
import SectionButton from "./SectionButton";

function ContactForm(props) {
  // State for input values
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [showErrors, setShowErrors] = useState(false);
  let errors = [];

  const getError = field => errors.find(e => e.field === field);
  const isEmpty = val => !val || val.trim() === "";

  if (isEmpty(name)) {
    errors.push({
      field: "name",
      message: "Please enter your name"
    });
  }

  if (isEmpty(email)) {
    errors.push({
      field: "email",
      message: "Please enter an Email Address"
    });
  }

  if (isEmpty(number)) {
    errors.push({
      field: "number",
      message: "Please enter a Phone Number"
    });
  }

  if (isEmpty(message)) {
    errors.push({
      field: "message",
      message: "Please enter a Message"
    });
  }

  const handleSubmit = e => {
    if (e && e.preventDefault) e.preventDefault();

    if (errors.length) {
      setShowErrors(true);
    } else {
      if (props.onSubmit) {
        props.onSubmit({
          name,
          email,
          message,
          number
        });
      }
      setName("");
      setEmail("");
      setMessage("");
      setNumber("");
      setShowErrors(false);
    }
  };

  // If submitted successfully, display Thank You note
  if (props.status && props.status.type === "success") {
    return (
      <div className="contact-thank-you text-center py-4 px-3" style={{ animation: "fadeIn 0.5s ease-in" }}>
        <div className="mb-3">
          <div
            style={{
              width: "70px",
              height: "70px",
              lineHeight: "70px",
              borderRadius: "50%",
              backgroundColor: "#e8f5e9",
              color: "#28a745",
              fontSize: "2.2rem",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(40, 167, 69, 0.2)"
            }}
          >
            ✓
          </div>
        </div>
        <h3 className="mb-2" style={{ fontWeight: 700, color: "#1a1a1a" }}>
          Thank You!
        </h3>
        <p className="mb-3" style={{ fontSize: "1rem", color: "#495057", lineHeight: "1.6" }}>
          Your message has been successfully submitted to{" "}
          <strong style={{ color: "#d9232d" }}>info@brightside-security.com</strong>. One of our representatives will contact you shortly.
        </p>

        <div
          className="p-3 mb-4 text-center"
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            border: "1px solid #e9ecef"
          }}
        >
          <span style={{ fontSize: "0.85rem", color: "#6c757d", display: "block", textTransform: "uppercase", letterSpacing: "1px" }}>
            Need Immediate Assistance?
          </span>
          <a
            href="tel:5103961974"
            style={{
              fontSize: "1.25rem",
              fontWeight: "700",
              color: "#d9232d",
              textDecoration: "none"
            }}
          >
            (510) 396-1974
          </a>
        </div>

        <button
          type="button"
          className="theme-btn btn-style-two"
          onClick={() => {
            if (props.onReset) {
              props.onReset();
            }
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id="contact-form">
      <div className="row">
        <div className="col-md-12">
          <h2 className="mb-30" data-wow-delay="0.40s">
            Contact Us
          </h2>
        </div>

        {props.status && props.status.message && (
          <div className="col-md-12 mb-10">
            <FormStatus type={props.status.type} message={props.status.message} />
          </div>
        )}

        <div className="col-md-6">
          <div className="input-item" data-wow-delay="0.50s">
            <FormField
              value={name}
              type="text"
              placeholder="First Name *"
              error={showErrors && getError("name")}
              onChange={value => setName(value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-item" data-wow-delay="0.60s">
            <FormField
              value={number}
              type="text"
              placeholder="Phone Number *"
              error={showErrors && getError("number")}
              onChange={value => setNumber(value)}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="input-item" data-wow-delay="0.70s">
            <FormField
              value={email}
              type="email"
              placeholder="Email *"
              error={showErrors && getError("email")}
              onChange={value => setEmail(value)}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="input-item" data-wow-delay="0.80s">
            <FormField
              value={message}
              type="textarea"
              placeholder="Message *"
              error={showErrors && getError("message")}
              onChange={value => setMessage(value)}
            />
          </div>

          <div className="link-btn pt-15" data-wow-delay="0.90s">
            <SectionButton
              parentColor={props.parentColor}
              size="medium"
              className="theme-btn btn-style-two"
              state={props.status && props.status.type === "pending" ? "loading" : "normal"}
            >
              Send A Message
            </SectionButton>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
