import { Splide, SplideSlide } from '@splidejs/react-splide';
import PropTypes, { array, number } from 'prop-types';
import '@splidejs/splide/dist/css/splide.min.css';
import './carousel.css';

export const CustomSlider = ({ data = [], ChildComponent, speed }) => {
   const options = {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 3000,
      pagination: false,
      arrows: true,
      speed: speed || 500,
   };

   return (
      <Splide options={options}>
         {data.map((item) => (
            <SplideSlide key={item.id}>
               <ChildComponent {...item} />
            </SplideSlide>
         ))}
      </Splide>
   );
};

CustomSlider.propTypes = {
   data: array.isRequired,
   ChildComponent: PropTypes.elementType.isRequired,
   speed: number,
};
