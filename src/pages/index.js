import React from "react";
import HeroSection from "./../components/HeroSection";
import ClientsSection from "./../components/ClientsSection";
import AboutUsSection from "./../components/AboutUs";
import OurServicesSection from "./../components/OurServices";
import NumbersSpeakSection from "./../components/NumbersSpeak";
import OurTestimonialsSection from "./../components/OurTestimonials";
import FeaturesSection from "./../components/FeaturesSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import { useRouter } from "./../util/router.js";
import ContactUsSection from "../components/ContactUsSection";
import MediaLibrarySection from "../components/MediaGallery";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="white"
        size="medium"
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Get Started"
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
      <AboutUsSection />
      <OurServicesSection />
      <NumbersSpeakSection />
      <OurTestimonialsSection />
      <MediaLibrarySection />
      
      <ContactUsSection />
      
      
    </>
  );
}

export default IndexPage;
