import { string } from "prop-types";
import { CustomSlider } from "./slider/CustomSlider";
import { TestimonialCard } from "./cards/TestimonialCard";
import { dataTestimonios } from "../../data/dataTestimonios";
import background_testimonial from '../../assets/img/TESTIMONY_IMG.png';

export function TestimonialUsers() {
  return (
    <section className={`text-white w-full relative`}>
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={background_testimonial}
        alt="img de fondo testimonial"
      />
      <div className='max-w-7xl m-auto'>
        <section className="mx-8 lg:mx-24 pt-28">
          <div className="relative w-fit tracking-wide space-y-2">
            <span className="block border-t-2 border-yellow w-[70%] rounded-md mb-6"></span>
            <p className="text-2xl sm:text-3xl">
              TESTIMONIOS <br />
              DE EXITO
            </p>
          </div>
          <CustomSlider
            data={dataTestimonios}
            ChildComponent={TestimonialCard}
          />
        </section>
      </div>
    </section>
  );
};

// PropTypes de react type
TestimonialUsers.propTypes = {
  url_image: string,
  className: string,
};
