
import { string } from 'prop-types';

export const TestimonialCard = ({ testimony, name }) => {

   return (
      <div className="mt-5 mb-10 text-sm md:text-xl w-full text-center space-y-4 uppercase md:mb-0">
         <h3 className=''>
            {testimony}
         </h3>
         <p className="w-[10rem] md:w-[13rem] mx-auto font-bold text-dark rounded-3xl bg-yellow p-2 place-self-center">
            - {name}
         </p>
      </div>
   )
}

TestimonialCard.propTypes = {
   testimony: string,
   name: string,
};
