import { Splide, SplideSlide } from '@splidejs/react-splide';
import PropTypes, { array, number } from 'prop-types';
import '@splidejs/splide/dist/css/splide.min.css';
import './carousel.css';

import { useLayoutEffect, useState } from 'react';

export const CustomSlider = ({ data = [], ChildComponent, speed }) => {
   const [isMobile, setIsMobile] = useState(false);

   useLayoutEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 768);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const options = {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 3000,
      pagination: isMobile,
      arrows: !isMobile,
      speed: speed || 500,
   };

   return (
      <div className='py-24 w-full mx-auto md:w-[80%] overflow-hidden md:overflow-visible' >
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