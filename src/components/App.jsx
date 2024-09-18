import AboutUs from "./AboutUs";
import { TestimonialUsers } from "./testimonialUsers";
import VideoSection from "./VideoSection";

function App() {
  return (
    <>
      <VideoSection />
      <AboutUs />
      <TestimonialUsers className={'h-[26rem] w-[75rem]'} />
    </>
  );
}

export default App;
