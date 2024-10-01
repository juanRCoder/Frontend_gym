function InfoContact() {
  return (
    <div className="h-full sm:w-1/2 lg:px-16">
      <div className="lg:w-[496px]">
        <h2 className="text-yellow text-3xl sm:text-4xl lg:text-5xl lg:leading-snug pb-10">
          ¿Listo para transformar tu vida?
        </h2>
        <div className="text-white text-lg sm:text-xl md:text-2xl leading-snug">
          <p>
            ¡Nos encantaría ayudarte a alcanzar tus
            <br /> objetivos de salud y fitness! <br />
            Contáctanos hoy mismo y únete a nuestra comunidad.
          </p>
          <p className="pt-8">
            Dirección: Av. 123, Centro, Valparaíso,
            <br /> Chile.{" "}
          </p>
          <p className="pt-8">Teléfono: +52 123 456 7890 </p>
          <p className="pt-8">
            Correo Electrónico: <br /> contacto@powerzone.cl
          </p>
          <p className="pt-8">
            Horarios:
            <br />
            Lunes a Viernes: 6:00 AM - 10:00 PM <br />
            Sábado: 8:00 AM - 6:00 PM <br />
            Domingo: Cerrado
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoContact;
