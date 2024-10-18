import { dataServices } from "../data/dataServices";

function Services() {
  return (
    <>
      <section className="bg-dark">
        <div className="m-auto max-w-7xl">
          <section className="grid grid-cols-1 sm:flex justify-between gap-10 sm:gap-5 mx-8 lg:mx-24 py-20">
            {dataServices.map((service) => (
              <div key={service.id} className="sm:w-fit flex flex-col items-center gap-5">
                <img 
                  src={service.img} 
                  className="h-[65px] w-[65px] object-contain"
                />
                <p className="text-[22px] text-white text-center">{service.name}</p>
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  );
}

export default Services;
