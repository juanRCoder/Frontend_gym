import FormContact from "./contact/FormContact";

function Contact() {
  return (
    <aside className="pb-36 relative z-10">
      <section className="max-w-7xl m-auto">
        <section className="flex flex-col w-fit my-10 mx-8 lg:mx-24">
          <div className="tracking-wide space-y-2 mb-16">
            <span className="block border-t-2 border-yellow w-[70%] rounded-md mb-6" />
            <p className="text-2xl sm:text-3xl text-white">CONTÁCTANOS</p>
          </div>
        </section>
        <div className="flex flex-col sm:flex-row mx-8 lg:mx-24 justify-between gap-16 sm:gap-10">
          <FormContact />
          <div className=" h-full sm:w-1/2 lg:w-[360px]">
            <div className="text-3xl">
              <h2 className="text-yellow">¿Listo para transformar tu vida?</h2>
              <div className="text-white text-2xl flex flex-col gap-10 mt-16">
                <p>
                  ¡Nos encantaría ayudarte a alcanzar tus objetivos de salud y
                  fitness! Contáctanos hoy mismo y únete a nuestra comunidad.
                </p>
                <p>
                  Dirección:{" "}
                  <span className="font-normal">
                    Av. 123, Valparaíso, Chile.
                  </span>
                </p>
                <p>
                  Teléfono:{" "}
                  <span className="font-normal">+52 123 456 7890</span>
                </p>
                <p>Horarios:</p>
                <p>
                  Lunes a Viernes: 6:00 AM - 10:00 PM <br />
                  Sábado: 8:00 AM - 6:00 PM <br />
                  Domingo: Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
}

export default Contact;
