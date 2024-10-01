import { HiOutlineCalendar } from "react-icons/hi";
import { BsFire } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";

function Services() {
  return (
    <>
      <section className="bg-dark">
        <div className="py-[4rem] max-w-6xl m-auto">
          <section className="lg:flex lg:justify-between grid grid-cols-2 md:grid-cols-4">
            {[
              ["TU ELIGES TU HORARIO", HiOutlineCalendar],
              ["PLANES PERSONALIZADOS", BsFire],
              ["EQUIPOS MODERNOS", IoIosFitness],
              ["TRAINERS PROFESIONALES", BsFillPeopleFill],
            ].map(([service, Component], i) => (
              <section key={i} className="flex flex-col items-center gap-2">
                <h2 className="text-base lg:text-lg text-yellow">
                  {service}
                </h2>
                <Component className="text-[5rem] text-white mt-[1rem] transition duration-300 hover:rotate-[0.5deg] hover:text-yellow" />
              </section>
            ))}
          </section>
        </div>
      </section>
    </>
  );
}

export default Services;
