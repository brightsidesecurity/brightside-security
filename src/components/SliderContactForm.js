import React, { useState } from "react";
import FormStatus from "./FormStatus";
import FormField from "./FormField";
import SectionButton from "./SectionButton";
import Recaptcha from 'react-recaptcha';
import Select from 'react-select';

function ContactForm(props) {
  // State for input values
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const options = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'industries', label: 'Industries' },
    { value: 'specialevents', label: 'Special Events' },
    { value: 'institutions', label: 'Institutions' },
    { value: 'patrol', label: 'Patrol Services' },
  ];
  // Whether to show errors
  // We set to true if they submit and there are errors.
  // We only show errors after they submit because
  // it's annoying to see errors while typing.
  const [showErrors, setShowErrors] = useState(false);

  // Error array we'll populate
  let errors = [];

  // Function for fetching error for a field
  const getError = field => {
    return errors.find(e => e.field === field);
  };

  // Function to see if field is empty
  const isEmpty = val => val.trim() === "";

  // Add error if email empty
  if (isEmpty(email)) {
    errors.push({
      field: "email",
      message: "Please enter an Email Address"
    });
  }

  // Add error if message empty
  if (isEmpty(service)) {
    errors.push({
      field: "service",
      message: "Please select a Service"
    });
  }

  if (isEmpty(number)) {
    errors.push({
      field: "number",
      message: "Please enter a Phone Number"
    });
  }

  // Add error if name shown and empty
  if (props.showNameField) {
    if (isEmpty(name)) {
      errors.push({
        field: "name",
        message: "Please enter your name"
      });
    }
  }
  const state={
    isVerified:false,
    selectedOption: "select"
  }
  const recaptchaLoaded=()=>{
    console.log('recaptcha loaded');
  }
  const verifyCallback=(response)=>{
    if(response){
      state.isVerified=true;
      console.log('successfully verified');
    }
  }

  const handleChange = (selectedOptionValue) => {
    state.selectedOption = selectedOptionValue;
    setService(state.selectedOption.value);
    console.log(`Option selected:`, state.selectedOption);
  };

  // const handleChange = selectedOption => {
  //   // this.setState({ selectedOption });
  //   state.selectedOption = selectedOption;
  //   console.log(`Option selected:`, selectedOption);
  // };
  // const { selectedOption } = state.selectedOption;
  // Handle form submission
  let recaptchaInstance;

  const handleSubmit = e => {
    // If field errors then show them
    // if (state.isVerified) {
      if (errors.length) {
        setShowErrors(true);
      } else {
        // Otherwise call onSubmit with form data
        if (props.onSubmit) {
          props.onSubmit({
            name,
            email,
            service, 
            number
          });
          document.getElementById("slider-contact-form").reset();
          setName('');
          setEmail('');
          setService('');
          setNumber('');
          recaptchaInstance.reset();
        }
      }
    // } else {
    //   alert('Please verify that you are a human');
    // }
  };
  // const handleSubscribe = e => {
  //   // If field errors then show them
  //   if (state.isVerified) {
  //     alert('success');
  //     handleSubmit();
  //   } else {
  //     alert('Please verify that you are a human');
  //   }
  // };

  const {selectedOptionValue} = state.selectedOption;
  console.log(selectedOptionValue);
  return (
    <>
      

      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
          // handleSubscribe();

        }}
        id="slider-contact-form"
      >
        <div className="row justify-content-center">
            <div className="col-md-12">
                <h3 className="mb-30 text-center" data-wow-delay="0.40s">Get A Quote</h3>
            </div>
            {props.status && props.status.message && (
              <FormStatus type={props.status.type} message={props.status.message} />
            )}
            <div className="col-md-12">
                <div className="input-item" data-wow-delay="0.50s">
                  <FormField
                    value={name}
                    type="text"
                    placeholder="First Name"
                    error={showErrors && getError("fname")}
                    onChange={value => setName(value)}
                  />
                </div>
            </div>
            <div className="col-md-12">
                <div className="input-item" data-wow-delay="0.60s">
                  <FormField
                    value={number}
                    type="text"
                    placeholder="Phone Number"
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
                    placeholder="Email"
                    error={showErrors && getError("email")}
                    onChange={value => setEmail(value)}
                  />
                </div>
            </div>
            <div className="col-md-12">
                <div className="input-item" data-wow-delay="0.80s">
                  {/* <FormField
                    value={service}
                    type="select"
                    error={showErrors && getError("service")}
                    onChange={value => setService(value)}
                    ovalue1="Select1"
                    ovalue2="Select2"
                    ovalue3="Select3"
                    ovalue4="Select4"
                    ovalue5="Select5"
                    ovalue6="Select6"
                  /> */}
                  <Select
                    onChange={handleChange}
                    value={selectedOptionValue}
                    // value={selectedOptionValue}
                    // onChange={value => setService(value)}
                    options={options}
                  />
                </div>

                <div className="">
                  <Recaptcha
                    id="slider-form-captcha"
                    ref={e => recaptchaInstance = e}
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
                    state={
                      props.status && props.status.type === "pending"
                        ? "loading"
                        : "normal"
                    }
                  >
                    Send A Message
                  </SectionButton>
                </div>
            </div>
        </div>
        {/* <div className="field is-horizontal">
          <div className="field-body">
            {props.showNameField && (
              <FormField
                value={name}
                type="text"
                placeholder="Name"
                error={showErrors && getError("name")}
                onChange={value => setName(value)}
              />
            )}

            <FormField
              value={email}
              type="email"
              placeholder="Email"
              error={showErrors && getError("email")}
              onChange={value => setEmail(value)}
            />
          </div>
        </div> */}
        {/* <div className="field is-horizontal">
          <div className="field-body">
            <FormField
              value={message}
              type="textarea"
              placeholder="Message"
              error={showErrors && getError("message")}
              onChange={value => setMessage(value)}
            />
          </div>
        </div> */}
        {/* <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
                <SectionButton
                  parentColor={props.parentColor}
                  size="medium"
                  state={
                    props.status && props.status.type === "pending"
                      ? "loading"
                      : "normal"
                  }
                >
                  {props.buttonText}
                </SectionButton>
              </div>
            </div>
          </div>
        </div> */}
      </form>
    </>
  );
}

export default ContactForm;
