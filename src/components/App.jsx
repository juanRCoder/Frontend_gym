import AboutUs from "./AboutUs";
import Contact from "./Contact";
// import Questions from "./Questions";
import { TestimonialUsers } from "./testimonialUsers";
import VideoSection from "./VideoSection";

function App() {
  return (
    <>
      <VideoSection />
      <AboutUs />
      <TestimonialUsers className={'h-[26rem] w-[75rem]'} />
      {/* <Questions /> */}
      <Contact />
    </>
  );
}

export default App;
