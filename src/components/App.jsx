import AboutUs from "./AboutUs";
import { TestimonialUsers } from "./testimonialUsers";
import VideoSection from "./VideoSection";

function App() {
  return (
    <>
      <VideoSection />
      <AboutUs />
      <TestimonialUsers className={'md:h-[26rem] max-w-[75rem]'} />
    </>
  );
}

export default App;
