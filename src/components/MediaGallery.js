import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
// import Clients from "./Clients";
import GallerySec from "./GallerySec";

function MediaLibrarySection(props) {
  return (
    <Section className="media-gallery py-100" id="media">
        <div className="container">
                <div className="section-header mb-60 text-center">
                    <p className="section-highlight " data-wow-delay="0.30s">Our Work</p>
                    <h2 className="" data-wow-delay="0.40s">Media Library</h2>
                </div>
                
                <GallerySec 
                    images = {[
                        // {
                        // src: require('../assets/images/media/gallery1-old.jpg'),
                        // thumbnail: require('../assets/images/media/gallery1.jpg'),
                        
                        // },
                        {
                          src: require('../assets/images/media/bssec.jpg'),
                          thumbnail: require('../assets/images/media/bssec-old.jpg'),
                          
                          },
                        {
                        src: require('../assets/images/media/gallery2-old.jpg'),
                        thumbnail: require('../assets/images/media/gallery2.jpg'), 
                        
                        },
                
                        {
                        src: require('../assets/images/media/gallery3-old.jpg'),
                        thumbnail: require('../assets/images/media/gallery3.jpg'), 
                            
                        },
                        {
                        src: require('../assets/images/media/gallery4-old.jpg'),
                        thumbnail: require('../assets/images/media/gallery4.jpg'), 
                            
                        },
                        {
                        src: require('../assets/images/media/gallery5-old.jpg'),
                        thumbnail: require('../assets/images/media/gallery5.jpg'), 
                            
                        },
                        {
                        src: require('../assets/images/media/gallery6-old.jpg'),
                        thumbnail: require('../assets/images/media/gallery6.jpg'), 
                            
                        }
                    ]}

                />
            </div>
    </Section>
  );
}

export default MediaLibrarySection;
