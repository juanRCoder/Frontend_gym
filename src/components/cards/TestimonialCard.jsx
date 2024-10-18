
import { string } from 'prop-types';

export const TestimonialCard = ({ testimony, name }) => {

   return (
      <div className="mt-12 mb-10 text-sm md:text-lg w-full text-center space-y-4 uppercase md:mb-0 flex flex-col gap-10">
         <h3 className='text-2xl'>
            {testimony}
         </h3>
         <p className="mt-10 px-5 mx-auto font-bold text-black rounded-3xl bg-yellow p-2 place-self-center text-2xl">
            - {name}
         </p>
      </div>
   )
}

TestimonialCard.propTypes = {
   testimony: string,
   name: string,
};
