import { Locals } from "./components/card/Locals";
import { FiltroLocal } from "./components/filtro";
import { InputSearch } from './components/input';
import { TitleCustom } from './components/texts';
const PageLocales = () => {
   return (
      <div className="relative w-full overflow-hidden bg-radial-gradient text-white min-h-[200dvh] pb-5">

         <div className="relative w-[90%] max-w-[80rem] mx-auto space-y-16">
            <figure className="absolute z-0 md:-top-16 md:-left-5 opacity-30 select-none w-[20rem] md:w-[40rem] md:h-[43rem]" >
               <img
                  className="w-full h-full"
                  alt="icono de rayo"
                  src="/src/assets/icon/rayoIcon.png"
                  width={120}
               />
               <div className="absolute inset-0 bg-gradient-to-l from-black/0 to-black/100"></div>
            </figure>
            <section className="relative mt-24 space-y-8">
               <TitleCustom
                  textPrimary={'Descubre nuestras'}
                  textSecondary={'Localidades'}
               />
               <div className="md:text-[1.15rem] space-y-2 text-balance">
                  <p className="text-center md:text-[1.25rem]">
                     Encuentra el gimnasio perfecto según tus preferencias. Ya sea que busques clases de baile, sesiones de Zumba llenas de energía, entrenamiento personalizado con un coach o un lugar para levantar pesas, nuestras localidades tienen todo lo que necesitas.
                  </p>
                  <p className="text-[#f4af00] text-center md:text-2xl">
                     Filtra por categoría y accede a entrenamientos diseñados para alcanzar tu vida fitness
                  </p>
               </div>
            </section>

            <section className="relative flex justify-between items-center md:text-xl">
               <label
                  className="font-medium md:text-2xl hidden md:block"
                  htmlFor='search'
               >¿Dónde quieres entrenar?
               </label>
               <InputSearch />
            </section>
            <section className="flex flex-col md:flex-row gap-5">
               <FiltroLocal />
               <Locals />
            </section>
         </div>
      </div>
   )
}

export default PageLocales