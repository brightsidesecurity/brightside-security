import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
// import Clients from "./Clients";

function AboutUsSection(props) {
  return (
    <Section className="about-us py-150" id="about">
        <div className="container">
                <div className="row coustom-row">
                    <div className="col-md-6">
                        <div className="section-header mb-15 ">
                            <p className="section-highlight ">about us</p>
                            <h2 className="">who we are</h2>
                        </div>
                        <p className="mb-30 ">
                            We believe that a secure society needs a secure work environment. In addition to deterance and protection, presence of security officers brings peace of mind to employees. We have personal to match your needs and your environment. With many years of experience, we are complement for your safety ...
                        </p>
                        <div className="row coustom-row">
                            <div className="col-md-6">
                                <div className="mission-vision-box">
                                    <h4 className="">Availability</h4>
                                    <p className="">
                                      We have network of officers that are ready and available to work.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mission-vision-box ">
                                    <h4 className="">Call us</h4>
                                    <p className="mb-50 slow">
                                    We are only a phone call away. Call us in the office or on our 24 hour hotline.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="link-btn mb-100 ">
                            <a href="tel:5103961974" className="theme-btn btn-style-two">Call Now : (510) 196-1974</a>
                        </div>
                        <div className="about-us-image ">
                            <img src={require('../assets/images/about-us/about-us-1.jpg')} alt="bright-side-security-private-security-officers-in-fremont-california" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-image mb-100 ">
                        <img src={require('../assets/images/about-us/about-us-2.jpg')} alt="bright-side-security-private-security-officers-in-fremont-california" />
                        </div>
                        <div className="section-header mb-15">
                            <p className="section-highlight ">service</p>
                            <h2 className="">Service On Demand</h2>
                        </div>
                        <div className="service-content">
                            <p className="">
                            Our officers are trained for different fields and flexible work environment. Let us know for any temporary or permanent position that we can help.
                            </p>
                            <h4 className="mt-30 ">Our Security Policy</h4>
                            <p className="">Our clients ranges from banks and churches to hotels and events. Let us know how we may help you with your security needs.</p>
                        </div>
                        <div className="link-btn mt-50 ">
                            <a href="#contact" className="theme-btn btn-style-two">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </div>
    </Section>
  );
}

export default AboutUsSection;
