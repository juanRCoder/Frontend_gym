
import { string } from 'prop-types';

export const TestimonialCard = ({ testimony, name }) => {

   return (
      <div className="text-sm md:text-xl relative w-full text-center p-5 space-y-4 uppercase">
         <h3>
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
