import { string } from 'prop-types';
import { CustomSlider } from './slider/CustomSlider';
import { TestimonialCard } from './cards/TestimonialCard';
import { dataTestimonios } from '../data/dataTestimonios';

export const TestimonialUsers = ({ url_image, className }) => {
   return (
      <section className={`text-white w-full relative`}>
         <img
            className="absolute w-full h-full object-cover object-top"
            src={url_image}
            alt="img de fondo testimonial"
         />
         <div className={`mx-auto flex flex-col pb-10 ${className}`}>
            <div className='relative w-fit md:text-3xl tracking-wide font-semibold mt-10 ml-10 space-y-2 uppercase'>
               <div className='border-t-2 border-yellow w-[70%] rounded-md'></div>
               <p>
                  testimonios <br />
                  de éxito
               </p>
            </div>

            <article className=''>
               {
                  <CustomSlider
                     data={dataTestimonios}
                     ChildComponent={TestimonialCard}
                  />
               }
            </article>
         </div>
      </section>
   );
};

// PropTypes de react type
TestimonialUsers.propTypes = {
   url_image: string,
   className: string,
};

// Valores por defecto para las props
TestimonialUsers.defaultProps = {
   url_image: './src/assets/img/testimonials_bg.png',
   className: '',
};