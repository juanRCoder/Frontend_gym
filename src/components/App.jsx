import AboutUs from "./AboutUs";
// import Contact from "./Contact";
// import Questions from "./Questions";
import { TestimonialUsers } from "./testimonialUsers";
import VideoSection from "./VideoSection";

function App() {
  return (
    <>
      <VideoSection />
      <AboutUs />
      <TestimonialUsers className={'md:h-[26rem] max-w-7xl'} />
      {/* <Questions /> */}
      {/* <Contact /> */}
    </>
  );
}

export default App;
