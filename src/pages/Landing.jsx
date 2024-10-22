import AboutUs from "../components/landing/AboutUs";
import Services from "../components/landing/Services";
import Accordeon from "../components/landing/Accordeon";
import Contact from "../components/landing/Contact";
import { TestimonialUsers } from "../components/landing/testimonialUsers";
import VideoSection from "../components/landing/VideoSection";
import backgroundIMG from '../assets/img/BACKGROUND_GRADIENT_RAY.png'
import '../index.css';

function Landing() {
  return (
    <>
      <VideoSection />
      <Services />
      <AboutUs />
      <TestimonialUsers />
      <section className="relative">
        <img
          alt="background_RAY"
          src={backgroundIMG}
          className="w-screen sm:h-[2360px] absolute"
        />
        <Accordeon />
        <Contact />
      </section>
    </>
  );
}

export default Landing;
