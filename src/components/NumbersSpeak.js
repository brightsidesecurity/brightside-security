import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
// import Clients from "./Clients";

function NumbersSpeakSection(props) {
  return (
    <Section className="success-section py-150">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="success-content-wrapper">
                        <div className="section-header text-center">
                            <p className="section-highlight">success</p>
                            <h2 className="service-list-box">Numbers Speak</h2>
                            <p className="mt-15 mb-60">
                            Our number speaks for us. Till now, we have connected with 21k+ clients and have a staff availability of 220k+. In this department, we have 8+ years of experience and we have won 4 awards for our service.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="counter-box">
                        <h2 className="counter plus">50</h2>
                        <p>Clients</p>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="counter-box">
                        <h2 className="counter plus">120</h2>
                        <p>Staff Available</p>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="counter-box">
                        <h2 className="counter plus">18</h2>
                        <p>year experience</p>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="counter-box">
                        <h2 className="counter">10</h2>
                        <p>win awards</p>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  );
}

export default NumbersSpeakSection;
