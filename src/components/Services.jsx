import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsFire } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";

function Services() {
  return (
    <section className="bg-dark py-[4rem] w-max-[59rem]">
      <section className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 px-1 lg:px-2 text-white">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-base lg:text-lg">TU ELIGES TU HORARIO</h2>
          <HiOutlineCalendar className="text-5xl lg:text-6xl text-yellow mt-[1rem] transition duration-300 hover:scale-[125%] hover:rotate-[0.5deg]" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-base lg:text-lg">PLANES PERSONALIZADOS</h2>
          <BsFire className="text-5xl lg:text-6xl text-yellow mt-[1rem] transition duration-300 hover:scale-[125%] hover:rotate-[0.5deg]" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-base lg:text-lg">EQUIPOS MODERNOS</h2>
          <IoIosFitness className="text-5xl lg:text-6xl text-yellow mt-[1rem] transition duration-300 hover:scale-[125%] hover:rotate-[0.5deg]" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-base lg:text-lg">TRAINERS PROFESIONALES</h2>
          <BsFillPeopleFill className="text-5xl lg:text-6xl text-yellow mt-[1rem] transition duration-300 hover:scale-[125%] hover:rotate-[0.5deg]" />
        </div>
      </section>
    </section>
  );
}

export default Services;
