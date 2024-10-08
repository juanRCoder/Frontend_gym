
import Trainer from "../assets/img/trainner_img.png";
import Services from "./Services";

function AboutUs() {
  return (
    <>
      <Services/>
      <article className="bg-black">
        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:gap-32 py-28 w-full lg:w-[1085px]">
          <div className="text-white w-fit lg:w-[534px] text-justify select-none">
            <p className="text-lg lg:text-2xl mb-5" style={{lineHeight: "3.2rem"}}>
              Somos el resultado de un sueño que comenzó con una simple idea:
              transformar vidas a través del poder del fitness. Lo que empezó
              como un pequeño espacio para entrenar se ha convertido en un lugar
              donde la comunidad se reúne, las metas se alcanzan y la pasión por
              un estilo de vida saludable nos impulsa cada día. <br />
              Aquí, cada logro, grande o pequeño, es celebrado.
            </p>
            <p className="text-lg lg:text-2xl" style={{lineHeight: "3.2rem"}}>
              En nuestro gimnasio, no solo entrenamos el cuerpo; fortalecemos la
              mente y el espíritu, creando una comunidad unida por la dedicación
              y el esfuerzo.
            </p>
          </div>
        
          <img
            className="w-[477px] h-[525px]"
            src={Trainer}
            alt="Trainer"
          />
        
        </section>
      </article>
    </>
  );
}

export default AboutUs;
