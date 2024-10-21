import { Locals } from "./components/card/Locals";
import { FiltroLocal, InputSearch, TitleCustom } from "./components";

const PageLocales = () => {
   return (
      <div className="w-full bg-radial-gradient text-white min-h-[200dvh] overflow-hidden pb-5">
         <img
            className="absolute opacity-15 select-none "
            alt="icono de rayo"
            src="/src/assets/icon/rayoIcon.png"
         />
         <div className="relative w-[90%] max-w-[80rem] mx-auto space-y-10">
            <section className="mt-24 space-y-8">
               <TitleCustom
                  textPrimary={'Descubre nuestras'}
                  textSecondary={'Localidades'}
               />
               <div className="md:text-[1.15rem] space-y-2 text-balance">
                  <p className="text-center">
                     Encuentra el gimnasio perfecto según tus preferencias. Ya sea que busques clases de baile, sesiones de Zumba llenas de energía, entrenamiento personalizado con un coach o un lugar para levantar pesas, nuestras localidades tienen todo lo que necesitas.
                  </p>
                  <p className="text-[#f4af00] text-center">
                     Filtra por categoría y accede a entrenamientos diseñados para alcanzar tu vida fitness
                  </p>
               </div>
            </section>

            <section className="flex justify-between items-center md:text-xl">
               <label
                  className="font-semibold md:text-2xl hidden md:block"
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