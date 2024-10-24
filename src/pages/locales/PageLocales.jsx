import { ButtomCuston, Locals, FiltroLocal, InputSearch, TitleCustom } from './components';

const PageLocales = () => {

   return (
      <div className="relative text-white w-[90%] min-h-[100dvh] max-w-[80rem] mx-auto overflow-hidden bg-radial-gradient space-y-16 pb-10">
         <figure className="absolute z-0 md:-left-5 w-[20rem] md:w-[40rem] md:h-[43rem] opacity-30 select-none" >
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
            <div className="md:text-[1.20rem] text-center text-balance space-y-2">
               <p>
                  Encuentra el gimnasio perfecto según tus preferencias. Ya sea que busques clases de baile, sesiones de Zumba llenas de energía, entrenamiento personalizado con un coach o un lugar para levantar pesas, nuestras localidades tienen todo lo que necesitas.
               </p>
               <p className="text-colorYellow md:text-2xl">
                  Filtra por categoría y accede a entrenamientos diseñados para alcanzar tu vida fitness
               </p>
            </div>
         </section>

         <section className="relative md:text-xl flex items-center justify-between">
            <label
               className="md:text-2xl md:font-medium hidden md:block"
               htmlFor='search'
            >
               ¿Dónde quieres entrenar?
            </label>
            <InputSearch className={'md:w-[75%]'} />
         </section>

         <section className="relative flex flex-col md:flex-row gap-5">
            <FiltroLocal />
            <Locals />
         </section>

         <section className="ml-auto md:w-[82%] text-center space-y-4 md:space-y-0 sm:space-x-5 md:space-x-8">
            <ButtomCuston
               className={'bg-colorYellow text-black animation_btn_1 mr-2'}
               text={'Ver todos los locales'}
               icon={<img src="./src/assets/icon/rayicon_small.svg" alt="icon ray" />}
            />

            <ButtomCuston
               className={'text-colorGreen border border-colorGreen animation_btn_2'}
               text={'Quiero una asesoría'}
               icon={<img src="./src/assets/icon/whatsapp.svg" alt="icon whatsapp" />}
            />
         </section>
      </div>
   )
}
export default PageLocales