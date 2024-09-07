import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsFire } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";

function Services() {
  return (
    <>
    <div className="bg-dark py-[4rem] w-max-[59rem]">
      <section className="container mx-auto flex flex-col lg:flex-row justify-between space-y-[2rem] lg:space-y-0 px-4 lg:px-8 text-white">
        <section className="flex flex-col items-center">
          <h2 className="text-base lg:text-lg text-center">
            TU ELIGES TU HORARIO
          </h2>
          <HiOutlineCalendar className="text-5xl lg:text-6xl text-yellow mt-[1rem] transition duration-300 hover:scale-[125%] hover:rotate-[0.5deg] hover:text-yellow" />
        </section>
        <section className="flex flex-col items-center">
          <h2 className="text-base lg:text-lg text-center">
            PLANES PERSONALIZADOS
          </h2>
          <BsFire className="text-5xl lg:text-6xl text-yellow mt-[1rem] transition duration-300 hover:scale-[125%] hover:rotate-[0.5deg] hover:text-yellow" />
        </section>
        <section className="flex flex-col items-center">
          <h2 className="text-base lg:text-lg text-center">EQUIPOS MODERNOS</h2>
          <IoIosFitness className="text-5xl lg:text-6xl text-yellow mt-[1rem] transition duration-300 hover:scale-[125%] hover:rotate-[0.5deg] hover:text-yellow" />
        </section>
        <div className="flex flex-col items-center">
          <h2 className="text-base lg:text-lg text-center">
            TRAINERS PROFESIONALES
          </h2>
          <BsFillPeopleFill className="text-5xl lg:text-6xl text-yellow mt-[1rem] transition duration-300 hover:scale-[125%] hover:rotate-[0.5deg] hover:text-yellow" />
        </div>
    </section>
    </div>
    </>
  );
}

export default Services;
