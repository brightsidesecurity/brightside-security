import React from "react";
import Section from "./Section";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section className="footer-section pt-150 pb-50">
      {/* <div className="FooterComponent__container container">
        <div className="brand left">
          <Link to="/">
            <img src={props.logo} alt="Logo" />
          </Link>
        </div>
        <div className="links right">
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <a
            target="_blank"
            href="https://medium.com"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>
        <div className="social right">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-twitter" />
            </span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-facebook-f" />
            </span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-instagram" />
            </span>
          </a>
        </div>
        <div className="copyright left">{props.copyright}</div>
      </div> */}
      <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-logo">
                          <Link to="/">
                            <img src={props.logo} alt="bright-side-security-private-security-officers-in-fremont-california" />
                          </Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="location-wrapper mb-100">
                            <h4 className="mb-30">location</h4>
                            <a href="https://maps.google.com/?q=8915+Osterville+Way,+Elk+Grove,+CA+95758" target="_blank" rel="noopener noreferrer">
                              <span>Bright Side Security</span>
                              <span>8915 Osterville Way </span>
                              <span>Elk Grove, CA 95758</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="say-hello mb-100">
                            <h4 className="mb-30">Say Hello</h4>
                            
                            <a href="mailto:info@brightside-security.com"><span>info@brightside-security.com</span></a>
                            <a href="tel:5103961974"><span>510-396-1974</span></a>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className="text-white phone-center">&copy; 2026 Bright Side Security. All rights reserved.</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="copyright">
                            <p>Powered by <a href="https://embtelsolutions.com/?utm_source=footer&utm_medium=website&utm_campaign=brightside">Embtel Solutions, Inc.</a></p>
                        </div>
                        
                        <div className="return-btn">
                            
                            <a href="#" id="return-to-top"><i className="fas fa-chevron-up"></i></a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="mobile-sticky is-fixed-bottom">
              <div className="container">
                <div className="columns is-centered is-mobile">
                  <div className="column scrollcta is-">
                      <a href="mailto:info@brightside-security.com"><i className="fa fa-envelope"></i><br/>Email</a>
                  </div>
                  <div className="column scrollcta">
                      <a href="tel:5103961974"><i className="fa fa-phone"></i><br/>Call Now</a>
                  </div>
                  <div className="column scrollcta">
                      <a href="https://maps.google.com/?q=8915+Osterville+Way,+Elk+Grove,+CA+95758" target="_blank" rel="noopener noreferrer"><i className="fa fa-map"></i><br/>Direction</a>
                  </div>
                </div>
              </div>
            </div>
    </Section>
  );
}

export default Footer;
