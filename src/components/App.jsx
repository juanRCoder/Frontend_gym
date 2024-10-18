import AboutUs from "./AboutUs";
import Services from "./Services";
import Accordeon from "./Accordeon";
import Contact from "./Contact";
import { TestimonialUsers } from "./testimonialUsers";
import VideoSection from "./VideoSection";
import '../index.css';

function App() {
  return (
    <>
      <VideoSection />
      <Services />
      <AboutUs />
      <TestimonialUsers />
      <section className="bg-imagen">
        <Accordeon />
        <Contact />
      </section>
    </>
  );
}

export default App;
