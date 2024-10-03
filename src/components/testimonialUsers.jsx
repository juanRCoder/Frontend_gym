import { string } from 'prop-types';
import { CustomSlider } from './slider/CustomSlider';
import { TestimonialCard } from './cards/TestimonialCard';
import { dataTestimonios } from '../data/dataTestimonios';


export const TestimonialUsers = ({ url_image, className }) => {
   return (
      <section className={`text-white w-full relative`}>
         <img
            className="absolute w-full h-full object-cover object-top"
            src={`${url_image || './src/assets/img/testimonials_bg.png'}`}
            alt="img de fondo testimonial"
         />
         <div className={`mx-auto relative p-5 md:pt-10 space-y-4 flex  flex-col md:space-y-8   ${className}`}>
            <div className='relative w-fit md:text-3xl tracking-wide font-semibold space-y-2 uppercase'>
               <div className='border-t-2 border-yellow w-[70%] rounded-md'></div>
               <p>
                  testimonios <br />
                  de éxito
               </p>
            </div>
            {
               <CustomSlider
                  data={dataTestimonios}
                  ChildComponent={TestimonialCard}
               />
            }
           
         </div>
      </section>
   );
};

// PropTypes de react type
TestimonialUsers.propTypes = {
   url_image: string,
   className: string,
};