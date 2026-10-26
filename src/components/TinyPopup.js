import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
// import Clients from "./Clients";

function TinyPopup(props) {
  return (
    <Section className="tiny-popup">

        <div className="tiny-popup-inner">
            <div className="close-button"><i className="fa fa-times"></i></div>
            <div className="image">
                <img src={require('../assets/images/pngwave.png')} alt="bright-side-security-private-security-officers-in-fremont-california"/>
            </div>
            <div  className="text">
                <h3>Call Us Now at<br/><span id="blink"><a href="tel:5103961974" id="blinkText">(510) 396-1974</a></span></h3>
            </div>
        </div>
    </Section>
  );
}

export default TinyPopup;
