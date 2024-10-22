import AboutUs from "./landing/AboutUs";
import Services from "./landing/Services";
import Accordeon from "./Accordeon";
import Contact from "./landing/Contact";
import { TestimonialUsers } from "./landing/testimonialUsers";
import VideoSection from "./landing/VideoSection";
import backgroundIMG from '../assets/img/BACKGROUND_GRADIENT_RAY.png'
import '../index.css';

function App() {
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

export default App;
