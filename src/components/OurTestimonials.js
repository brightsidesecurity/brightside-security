import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
// import Clients from "./Clients";

function OurTestimonialsSection(props) {
  return (
    <Section className="testimonial-section py-100" id="testimonials">
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header mb-60 text-center">
                            <p className="section-highlight">testimonial</p>
                            <h2 className="wow animated fadeInUp slow">What Our Clients Say</h2>
                        </div>
                    </div>
                </div>
                <div className="testimonial-wrap" data-wow-delay="0.60s">
                    <div className="testimonial-single-item">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="testimonial-image-wrapper">
                                    <div className="tastimonial-image">
                                        <img src={require('../assets/images/testimonial/testimonial-1.jpg')} alt="bright-side-security-private-security-officers-in-fremont-california" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="testimonial-slider-wrapper">
                                    <div className="testimonial-slid-box">
                                        <p className="mb-25"><span className="flaticon-quote-1 d-block quote mb-25"></span>
                                        Bright Side Security is the best security service in the whole town as they stick to words that they commit. They are just one phone call away. I highly recommend them.<span className="flaticon-quote d-block ml-auto quote"></span>
                                        </p>
                                        <h4>Gregory Lowery</h4>
                                        <span className="flaticon-pointed-star"></span>
                                        <span className="flaticon-pointed-star"></span>
                                        <span className="flaticon-pointed-star"></span>
                                        <span className="flaticon-pointed-star"></span>
                                        <span className="flaticon-pointed-star"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-single-item">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="testimonial-image-wrapper">
                                    <div className="tastimonial-image">
                                        <img src={require('../assets/images/testimonial/testimonial-3.jpg')} alt="bright-side-security-private-security-officers-in-fremont-california" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="testimonial-slider-wrapper">
                                    <div className="testimonial-slid-box">
                                        <p className="mb-25"><span className="flaticon-quote-1 d-block quote mb-25"></span>
                                        I want to express how highly pleased I am with Bright Side Security Service. I recommend everyone to give a call to  them for the best and safe service.<span className="flaticon-quote d-block ml-auto quote"></span>
                                        </p>
                                        <h4>Vennessa May</h4>
                                        <span className="flaticon-pointed-star"></span>
                                        <span className="flaticon-pointed-star"></span>
                                        <span className="flaticon-pointed-star"></span>
                                        <span className="flaticon-pointed-star"></span>
                                        <span className="flaticon-pointed-star"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-single-item">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="testimonial-image-wrapper">
                                    <div className="tastimonial-image">
                                        <img src={require('../assets/images/testimonial/testimonial-2.jpg')} alt="bright-side-security-private-security-officers-in-fremont-california" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="testimonial-slider-wrapper">
                                    <div className="testimonial-slid-box">
                                        <p className="mb-25"><span className="flaticon-quote-1 d-block quote mb-25"></span>
                                        We highly appreciate the professionalism and service of Bright Side Security Service. We are customers of them since many years and we enjoy a peace of mind by getting highly secured<span className="flaticon-quote d-block ml-auto quote"></span>
                                        </p>
                                        <h4>Simth Lender</h4>
                                        <span className="flaticon-pointed-star"></span>
                                        <span className="flaticon-pointed-star"></span>
                                        <span className="flaticon-pointed-star"></span>
                                        <span className="flaticon-pointed-star"></span>
                                        <span className="flaticon-pointed-star"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Section>
  );
}

export default OurTestimonialsSection;
