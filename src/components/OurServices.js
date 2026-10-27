import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
// import Clients from "./Clients";

function OurServicesSection(props) {
  return (
    <Section className="service-list" id="services">
        <div className="container">
                <div className="section-header mb-60 text-center">
                    <p className="section-highlight " data-wow-delay="0.30s">service list</p>
                    <h2 className="" data-wow-delay="0.40s">our services</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 itop-masonry-item">
                        <div className="service-list-box mt-70 ">
                            <div className="service-list-image">
                                <img src={require('../assets/images/service-list/residential.jpg')} alt="bright-side-security-private-security-officers-in-fremont-california" />
                            </div>
                            <div className="service-list-content ">
                                <a href="tel:5103961974">
                                    <h4>Residential</h4>
                                </a>
                                <p>Apartments/HOA</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 itop-masonry-item">
                        <div className="service-list-box ">
                            <div className="service-list-image">
                            <img src={require('../assets/images/service-list/commercial.jpg')} alt="bright-side-security-private-security-officers-in-fremont-california" />
                            </div>
                            <div className="service-list-content ">
                                <a href="tel:5103961974">
                                    <h4>Commercial</h4>
                                </a>
                                <p>Restaurants, Buildings, Malls</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 itop-masonry-item">
                        <div className="service-list-box mt-70 ">
                            <div className="service-list-image">
                            <img src={require('../assets/images/service-list/industrial.jpg')} alt="bright-side-security-private-security-officers-in-fremont-california" />
                            </div>
                            <div className="service-list-content ">
                                <a href="tel:5103961974">
                                    <h4>Industries</h4>
                                </a>
                                <p>Construction Sites, Factories</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 itop-masonry-item">
                        <div className="service-list-box ">
                            <div className="service-list-image">
                            <img src={require('../assets/images/service-list/events.jpg')} alt="bright-side-security-private-security-officers-in-fremont-california" />
                            </div>
                            <div className="service-list-content ">
                                <a href="tel:5103961974">
                                    <h4>Special Events</h4>
                                </a>
                                <p>Any personal/professional event</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 itop-masonry-item">
                        <div className="service-list-box mt-n70" >
                            <div className="service-list-image">
                            <img src={require('../assets/images/service-list/schools.jpg')} alt="bright-side-security-private-security-officers-in-fremont-california" />
                            </div>
                            <div className="service-list-content ">
                                <a href="tel:5103961974">
                                    <h4>Institutions</h4>
                                </a>
                                <p>Schools, Banks, Hospitals, etc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 itop-masonry-item">
                        <div className="service-list-box ">
                            <div className="service-list-image">
                            <img src={require('../assets/images/service-list/patrol.jpg')} alt="bright-side-security-private-security-officers-in-fremont-california" />
                            </div>
                            <div className="service-list-content ">
                                <a href="tel:5103961974">
                                    <h4>Patrol Services</h4>
                                </a>
                                <p>Uniformed, Unarmed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="link-btn text-center mb-150 mt-20 ">
                    <a href="tel:5103961974" className="theme-btn btn-style-two">Call Now : 510-396-1974</a>
                </div>
            </div>
    </Section>
  );
}

export default OurServicesSection;
