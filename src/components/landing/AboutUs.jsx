import Trainer from "../../assets/img/trainner_img.png";

function AboutUs() {
  return (
    <>
      <article className="bg-black">
        <div className="max-w-7xl m-auto">
          <section className="flex flex-col lg:flex-row items-center justify-between mx-8 lg:mx-24 py-24 gap-10 sm:gap-10">
            <div className="lg:max-w-[509px] text-[22px] text-white leading-[44px]">
              <p>
                Somos el resultado de un sueño que comenzó con una simple idea:
                transformar vidas a través del poder del fitness. Lo que empezó
                como un pequeño espacio para entrenar se ha convertido en un
                lugar donde la comunidad se reúne, las metas se alcanzan y la
                pasión por un estilo de vida saludable nos impulsa cada día.
                Aquí, cada logro, grande o pequeño, es celebrado.
              </p>
              <p>
                En nuestro gimnasio, no solo entrenamos el cuerpo; fortalecemos
                la mente y el espíritu, creando una comunidad unida por la
                dedicación y el esfuerzo.
              </p>
            </div>
            <div>
              <img
                className="object-contain  sm:max-h-[509px] sm:max-w-[463px]"
                src={Trainer}
                alt="Trainer"
              />
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

export default AboutUs;
