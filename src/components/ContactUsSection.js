import React, { useState } from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
// import Clients from "./Clients";
import ContactForm from "./ContactForm";
import contact from "./../util/contact.js";

function ContactUsSection(props) {
    const [status, setStatus] = useState();

        const onSubmit = ({ name, email, number, message }) => {
        setStatus({ type: "pending" });

        contact.submit({ name, email, number, message }).then(() => {
            setStatus({
                type: "success",
                message: "Your message has been sent! We'll get back to you soon."
            });
        });
    };
  return (
    <Section className="contact-us-page pt-150" id="contact">
        <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="get-in-touch-wrapper" data-wow-delay="0.30s">
                            <h2 className="mb-45" data-wow-delay="0.30s">Get In Touch</h2>
                            <ul>
                                <li className="phone-number">
                                    <a href="tel:5103961974"><span>(510) 396-1974</span></a>
                                    <a href="tel:5105651530"><span>(510) 565-1530</span></a>
                                </li>

                                <li className="email"><a href="mailto:info@beightsideps.com"><span>info@brightside-security.com</span></a></li>
                                <li className="location"><a href="https://goo.gl/maps/VycqS1g5kbDCAWcr6"><span>Bright Side Security</span><span>2140 Peralta Blvd. Ste. 213E</span><span> Fremont, CA 94536</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact-us-form-wrapper">
                        <ContactForm
                            onSubmit={onSubmit}
                            status={status}
                        />
                            {/* <form action="#">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className="mb-60" data-wow-delay="0.40s">contact us</h2>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item" data-wow-delay="0.50s">
                                            <input type="text" name="firstname" id="firstname" placeholder="first name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item" data-wow-delay="0.60s">
                                            <input type="text" name="lastname" id="lastname" placeholder="last name" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-item" data-wow-delay="0.70s">
                                            <input type="email" placeholder="enter your mail" id="email" className="inputemail" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-item" data-wow-delay="0.80s">
                                            <textarea name="" id="" cols="10" rows="5" placeholder="message" id="textarea" className="formtextarea"></textarea>
                                        </div>
                                        <div className="link-btn pt-15" data-wow-delay="0.90s">
                                            <a href="#" className="theme-btn btn-style-two">Send Message</a>
                                        </div>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
    </Section>
  );
}

export default ContactUsSection;
