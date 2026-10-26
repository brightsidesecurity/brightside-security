import React, { useState } from "react";
import FormStatus from "./FormStatus";
import FormField from "./FormField";
import SectionButton from "./SectionButton";
import Recaptcha from "react-recaptcha";
import Select from "react-select";

function SliderContactForm(props) {
  // State for input values
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "Residential Security", label: "Residential Security" },
    { value: "Commercial Security", label: "Commercial Security" },
    { value: "Industrial Security", label: "Industrial Security" },
    { value: "Special Events", label: "Special Events" },
    { value: "Institutional Security", label: "Institutional Security" },
    { value: "Patrol Services", label: "Patrol Services" }
  ];

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

  if (isEmpty(number)) {
    errors.push({
      field: "number",
      message: "Please enter a phone number"
    });
  }

  if (isEmpty(email)) {
    errors.push({
      field: "email",
      message: "Please enter an email address"
    });
  }

  if (isEmpty(service)) {
    errors.push({
      field: "service",
      message: "Please select a service"
    });
  }

  let recaptchaInstance = null;
  const recaptchaLoaded = () => {
    console.log("Recaptcha loaded");
  };

  const verifyCallback = response => {
    console.log("Recaptcha verified:", response);
  };

  const handleServiceChange = option => {
    setSelectedOption(option);
    setService(option ? option.value : "");
  };

  const handleSubmit = e => {
    if (e && e.preventDefault) e.preventDefault();

    if (errors.length) {
      setShowErrors(true);
    } else {
      if (props.onSubmit) {
        props.onSubmit({
          name,
          email,
          service,
          number
        });
      }
      setName("");
      setEmail("");
      setService("");
      setNumber("");
      setSelectedOption(null);
      setShowErrors(false);
      if (recaptchaInstance && typeof recaptchaInstance.reset === "function") {
        try {
          recaptchaInstance.reset();
        } catch (err) {
          console.warn("Recaptcha reset skipped", err);
        }
      }
    }
  };

  // If successfully submitted, display the Thank You note
  if (props.status && props.status.type === "success") {
    return (
      <div className="quote-thank-you text-center py-4 px-3" style={{ animation: "fadeIn 0.5s ease-in" }}>
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
          Thank you for requesting a quote from <strong>Bright Side Security</strong>. Your request has been sent to{" "}
          <strong style={{ color: "#d9232d" }}>info@brightside-security.com</strong>. Our team will review your requirements and get back to you shortly.
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
            For Immediate Assistance:
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
          Request Another Quote
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id="slider-contact-form">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h3 className="mb-30 text-center" data-wow-delay="0.40s">
            Get A Quote
          </h3>
        </div>

        {props.status && props.status.message && (
          <div className="col-md-12 mb-3">
            <FormStatus type={props.status.type} message={props.status.message} />
          </div>
        )}

        <div className="col-md-12">
          <div className="input-item" data-wow-delay="0.50s">
            <FormField
              value={name}
              type="text"
              placeholder="Full Name *"
              error={showErrors && getError("name")}
              onChange={value => setName(value)}
            />
          </div>
        </div>

        <div className="col-md-12">
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
              placeholder="Email Address *"
              error={showErrors && getError("email")}
              onChange={value => setEmail(value)}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="input-item" data-wow-delay="0.80s">
            <Select
              onChange={handleServiceChange}
              value={selectedOption}
              placeholder="Select a Service *"
              options={options}
            />
            {showErrors && getError("service") && (
              <p style={{ color: "#ff3860", fontSize: "0.75rem", marginTop: "0.25rem", textAlign: "left" }}>
                {getError("service").message}
              </p>
            )}
          </div>

          <div style={{ margin: "10px 0" }}>
            <Recaptcha
              id="slider-form-captcha"
              ref={e => (recaptchaInstance = e)}
              sitekey="6LdyBbEZAAAAAJ5TiZKVxPS0jh5qlPZxU0Qnsm2R"
              render="explicit"
              onloadCallback={recaptchaLoaded}
              verifyCallback={verifyCallback}
            />
          </div>

          <div className="link-btn pt-15" data-wow-delay="0.90s">
            <SectionButton
              parentColor={props.parentColor}
              size="medium"
              className="theme-btn btn-style-two"
              state={props.status && props.status.type === "pending" ? "loading" : "normal"}
            >
              Get Free Quote
            </SectionButton>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SliderContactForm;
