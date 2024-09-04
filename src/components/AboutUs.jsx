import React from 'react';
import Trainer from "../assets/img/trainer_home.png";
import Services from './Services';

function AboutUs() {
  return (
    <>
      <Services />
      <div className='flex flex-col lg:flex-row bg-black justify-evenly lg:space-x-[2rem] space-y-8 lg:space-y-0 p-8 lg:p-8'>
        <div className='text-white w-full lg:w-[30rem] mt-[2rem] lg:mt-[3rem] mb-[2rem] lg:mb-[5rem] text-base lg:text-lg'>
          <p className='text-lg lg:text-xl' style={{lineHeight:"2.5"}}>
            Somos el resultado de un sueño que comenzó con una simple idea: transformar vidas a través del poder del fitness. Lo que empezó como un pequeño espacio para entrenar se ha convertido en un lugar donde la comunidad se reúne, las metas se alcanzan y la pasión por un estilo de vida saludable nos impulsa cada día. <br/>
            Aquí, cada logro, grande o pequeño, es celebrado.
          </p>
          <br/>
          <p className='text-lg lg:text-xl' style={{lineHeight:"2.5"}}>
            En nuestro gimnasio, no solo entrenamos el cuerpo; fortalecemos la mente y el espíritu, creando una comunidad unida por la dedicación y el esfuerzo.
          </p>
        </div>
        <img className="w-full lg:max-w-[35rem] mt-2 lg:mt-[3rem] mb-2 lg:mb-[5rem] transform scale-90 lg:scale-90 opacity-60 transition duration-300 hover:opacity-100 hover:rotate-3 hover:scale-75" src={Trainer}/>
      </div>
    </>
  );
}

export default AboutUs;
