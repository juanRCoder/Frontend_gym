import AboutUs from "./AboutUs";
import { TestimonialUsers } from "./testimonialUsers";
import VideoSection from "./VideoSection";

function App() {
  return (
    <>
      <VideoSection />
      <AboutUs />
      <TestimonialUsers className={"h-[26rem] max-w-6xl"} />
    </>
  );
}

export default App;
