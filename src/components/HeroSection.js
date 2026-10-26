import React, { useState } from "react";
import Section from "./Section";
import SliderContactForm from "./SliderContactForm";
import slidercontact from "./../util/slidercontact.js";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton";
import "./HeroSection.scss";

function HeroSection(props) {
    const [status, setStatus] = useState();

    const onSubmit = ({ name, email, number, service }) => {
        setStatus({ type: "pending" });

        slidercontact.submit({ name, email, number, service }).then(() => {
            setStatus({
                type: "success",
                message: "Your message has been sent! We'll get back to you soon."
            });
        });
    };
  return (
    <Section className="main-slider">
        <ul className="main-slider-carousel">
                <li className="slider-wrapper">
                    <div className="image"><img src={require('../assets/images/slider/slider-1.jpg')} alt="" /></div>
                    <div className="slider-caption">
                        <div className="container">
                            <div className="slider-content">
                                <h6>License NO. PPO 120617</h6>
                                <h1 className="mt-15 mb-40 mr-80">Premium <span>Security</span> Services Trusted By <span>Millions</span></h1>
                                <p className="mb-50">At Bright Side Security, we provide ourselves on fulfilling security services to our valued clients. Our highly experienced private patrol company goes to great levels to provide exceptional security.</p>
                                <div className="link-btn">
                                    <a href="#about" className="theme-btn btn-style-one">Learn More</a>
                                </div>
                            </div>
                            <div className="slider-form bg-white contact-us-form-wrapper">
                                <SliderContactForm
                                    onSubmit={onSubmit}
                                    status={status}
                                />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            {/* <div className="social-icon-box">
                <p className="social">Social</p>
                <div className="social-icon">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div> */}
    </Section>
  );
}

export default HeroSection;
