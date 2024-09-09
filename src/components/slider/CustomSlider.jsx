import { Splide, SplideSlide } from "@splidejs/react-splide";
import PropTypes, { array, number } from "prop-types";
import "@splidejs/splide/dist/css/splide.min.css";
import "./carousel.css";

export const CustomSlider = ({ data = [], ChildComponent, speed }) => {
  const options = {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 3000,
    pagination: true,
    arrows: true,
    speed: speed || 500,
  };

  return (
    <div className="w-[100%] mx-auto md:w-[81%] overflow-hidden md:overflow-visible">
      <Splide options={options}>
        {data.map((item) => (
          <SplideSlide key={item.id}>
            <ChildComponent {...item} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

CustomSlider.propTypes = {
  data: array.isRequired,
  ChildComponent: PropTypes.elementType.isRequired,
  speed: number,
};
