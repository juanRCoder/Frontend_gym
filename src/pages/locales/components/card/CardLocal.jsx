import { MapPin, Clock8 } from "lucide-react";
import PropTypes from "prop-types";

export const CardLocal = ({ image, name, location, opening_end, opening_start, textBt }) => {
   return (
      <div className="bg-[#000] border border-[#f4af00] rounded-xl overflow-hidden pb-4 h-[24rem] md:h-[25rem] max-w-[22rem] flex flex-col">
         <figure className="min-h-[0%] h-[50%]">
            <img
               className="w-full h-full object-cover"
               src={image}
               alt="imagen de una localidad"
            />
         </figure>
         <div className="p-4 space-y-2 text-sm md:text-base">
            <p className="text-lg md:text-xl">
               {name}
            </p>
            <p className="space-x-2">
               <MapPin
                  className="inline-block align-middle"
                  size={18}
                  color="#fcad31"
               />
               <span className="align-middle">
                  {location.address}, {location.city}, {location.country}
               </span>
            </p>
            <p className="space-x-2">
               <Clock8
                  className="inline-block align-middle"
                  size={18}
                  color="#fcad31"
               />
               <span className="align-middle">
                  {opening_start}am - {opening_end}pm
               </span>
            </p>
         </div>
         <button className="bg-[#fcad31] text-[#000] uppercase font-semibold block md:text-lg w-fit mx-auto mt-auto p-1 px-5 rounded-3xl">
            ¡{textBt}!
         </button>
      </div>
   );
};

const typeLocation = {
   address: PropTypes.string,
   city: PropTypes.string,
   country: PropTypes.string
};

// Corregir de 'prototype' a 'propTypes'
CardLocal.propTypes = {
   image: PropTypes.string,
   name: PropTypes.string,
   location: PropTypes.shape(typeLocation),
   opening_end: PropTypes.string,
   opening_start: PropTypes.string,
   textBt: PropTypes.bool
};
