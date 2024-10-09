import { HiOutlineCalendar } from "react-icons/hi";
import { BsFire } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";

function Services() {
  return (
    <>
      <section className="bg-dark">
        <div className="px-[28px] lg:w-[1085px] sm:px-7 lg:px-0 py-[76px] max-w-7xl mx-auto w-full">
        <section className="grid grid-cols-2 md:grid-cols-4 place-content-between mx-auto">
            {[
              ["TU ELIGES TU HORARIO", HiOutlineCalendar],
              ["PLANES PERSONALIZADOS", BsFire],
              ["EQUIPOS MODERNOS", IoIosFitness],
              ["TRAINERS PROFESIONALES", BsFillPeopleFill],
            ].map(([service, Component], i) => (
              <section key={i} className="inline-flex flex-col items-center gap-4 ">
                <Component className="text-yellow text-6xl sm:text-[86px]" />
                <h2 className="text-white text-center text-lg sm:text-xl md:text-2xl px-0">
                  {service}
                </h2>
              </section>
            ))}
          </section>
        </div>
      </section>
    </>
  );
}

export default Services;
