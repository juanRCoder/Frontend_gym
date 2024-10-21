import { ListFilter } from 'lucide-react';
import './filtro.css'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { X } from 'lucide-react';
import PropTypes from 'prop-types';
import { useFilter } from '../../hooks/useFilter';

const services = [
   {
      "id": 1,
      "name": "Personal trainer",
      "icon": "https://res.cloudinary.com/...",
      "created_at": "2024-01-01T12:00:00Z",
      "updated_at": "2024-01-01T12:00:00Z"
   },
   {
      "id": 2,
      "name": "bar",
      "icon": "https://res.cloudinary.com/...",
      "created_at": "2024-01-01T12:00:00Z",
      "updated_at": "2024-01-01T12:00:00Z"
   },
   {
      "id": 3,
      "name": "parqueo",
      "icon": "https://res.cloudinary.com/...",
      "created_at": "2024-01-01T12:00:00Z",
      "updated_at": "2024-01-01T12:00:00Z"
   },
   {
      "id": 4,
      "name": "A/C",
      "icon": "https://res.cloudinary.com/...",
      "created_at": "2024-01-01T12:00:00Z",
      "updated_at": "2024-01-01T12:00:00Z"
   }
]
const clases = [
   {
      "id": 1,
      "name": "Baile",
      "icon": "https://res.cloudinary.com/...",
      "created_at": "2024-01-01T12:00:00Z",
      "updated_at": "2024-01-01T12:00:00Z"
   },
   {
      "id": 2,
      "name": "Zumba",
      "icon": "https://res.cloudinary.com/...",
      "created_at": "2024-01-01T12:00:00Z",
      "updated_at": "2024-01-01T12:00:00Z"
   },
   {
      "id": 3,
      "name": "Pilates",
      "icon": "https://res.cloudinary.com/...",
      "created_at": "2024-01-01T12:00:00Z",
      "updated_at": "2024-01-01T12:00:00Z"
   },
   {
      "id": 4,
      "name": "Yoga",
      "icon": "https://res.cloudinary.com/...",
      "created_at": "2024-01-01T12:00:00Z",
      "updated_at": "2024-01-01T12:00:00Z"
   }
]

export const FiltroLocal = () => {
   const [, setSearchParams] = useSearchParams();
   const [openFilter, setOpenFilter] = useState(false)
   const handleOpenFilter = (bool) => {
      setOpenFilter(bool || !openFilter)
      if (bool) {
         document.body.style.overflow = "hidden"
      } else {
         document.body.style.overflow = "unset"
      }
   }

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth > 768) {
            document.body.style.overflow = "unset";
            setOpenFilter(false);
         }
      };
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const setParams = (data) => setSearchParams(data);
   return (
      <>
         {!openFilter &&
            <FiltreDesktop setParams={setParams} />
         }
         <FiltreMovil handleOpenFilter={handleOpenFilter} openFilter={openFilter} setParams={setParams} />
      </>
   )
}

const FiltreMovil = ({ handleOpenFilter, openFilter, setParams }) => {
   const { filter } = useFilter()
   const [dataFilter, setDataFilter] = useState(filter)

   const filtreList = (name, value, checked) => {
      setDataFilter(prevData => {
         const existingValues = prevData[name] || [];
         const updatedValues = checked
            ? [...new Set([...existingValues, value])]
            : existingValues.filter(item => item !== value);
         return { ...prevData, [name]: updatedValues };
      });
   };

   const updateUrlParms = (e) => {
      e.preventDefault()
      setParams(dataFilter)
      handleOpenFilter(false)
   }

   const clearFilter = () => {
      setDataFilter({
         service: [],
         clase: [],
      });
      setParams({});
   };
   return (
      <>
         <button
            className='block md:hidden'
            onClick={() => handleOpenFilter(true)}
         >
            <ListFilter
               size={45}
            />
         </button>

         <form className={`fixed inset-0 z-30  bg-black flex justify-center flex-col p-5 pt-16 gap-4 ${openFilter ? 'flex' : 'hidden'}`}>
            <button
               className='absolute top-5 right-5 cursor-pointer'
               onClick={() => handleOpenFilter(false)}
               type='button'
            >
               <X size={40} />
            </button>

            <FiltreList funcion={filtreList} isMobile={true} dataFilter={dataFilter} />

            <div className='space-y-4 w-full mt-auto'>
               <button className='bg-[#fcad31] text-black hover:opacity-90 rounded-lg p-3 text-center w-full'
                  onClick={updateUrlParms}
               >
                  Filtar
               </button>
               <button
                  className='rounded-lg p-3 text-center w-full border-2' type='reset'
                  onClick={clearFilter}
               >
                  Limpiar
               </button>
            </div>
         </form>
      </>
   )
}
FiltreMovil.propTypes = {
   handleOpenFilter: PropTypes.func,
   openFilter: PropTypes.bool,
   setParams: PropTypes.func,
}

const FiltreDesktop = ({ setParams }) => {
   return (
      <div className='w-[25%] md:w-[20%] space-y-4 pb-8 relative z-10  border border-transparent hidden md:block'>

         {/* <div className='w-[135%] 2xl:w-[230%] h-[100%] bg-[#000] absolute translate-x-[-25%] 2xl:translate-x-[-56%] -z-10 rounded-xl'> */}
         {/* </div> */}

         <div className='space-x-10'>
            <ListFilter
               className='inline-block align-middle'
               size={45}
            />
            <span className='text-2xl align-middle'>
               Filtros
            </span>
         </div>
         <FiltreList setParams={setParams} />
      </div>
   )
}
FiltreDesktop.propTypes = {
   setParams: PropTypes.func,
}

const FiltreList = ({ funcion, isMobile, dataFilter, setParams }) => {
   const { filter } = useFilter()

   const handleCheck = (event) => {
      let { name, value, checked } = event.target
      value = value.toLowerCase()
      name = name.toLowerCase()

      if (isMobile) {
         funcion(name, value, checked)
         return;
      }

      const currentParams = new URLSearchParams(window.location.search)

      if (checked) {
         currentParams.append(name, value)
      } else {
         const values = currentParams.getAll(name).filter((param) => param !== value);
         currentParams.delete(name);
         values.forEach((param) => currentParams.append(name, param));
      }
      setParams(currentParams.toString());
   }

   const isChecked = (name, value) => {
      value = value.toLowerCase()
      name = name.toLowerCase()

      if (isMobile) {
         return dataFilter[name]?.includes(value);
      }
      return filter[name]?.includes(value);
   }

   return (
      <div className='space-y-4'>
         <fieldset className='space-y-4 text-xl md:font-light capitalize'>
            <legend>
               Servicios
            </legend>
            {
               services.map((service) => (
                  <label
                     key={service.id}
                     className='block space-x-3 text-lg cursor-pointer'
                     htmlFor={`service-${service.id}`}
                  >
                     <input
                        className="cursor-pointer align-middle"
                        type="checkbox"
                        name="service"
                        value={service.name}
                        id={`service-${service.id}`}
                        onChange={handleCheck}
                        checked={isChecked('service', service.name)}
                     />
                     <span className='align-middle'>
                        {service.name}
                     </span>
                  </label>
               ))
            }
         </fieldset>
         <fieldset className='space-y-4 text-xl md:font-light capitalize'>
            <legend>
               clases
            </legend>
            {
               clases.map((clases) => (
                  <label
                     className='block space-x-3 text-lg'
                     htmlFor={`clases-${clases.id}`}
                     key={clases.id}
                  >
                     <input
                        className="cursor-pointer align-middle"
                        type="checkbox"
                        name="clase"
                        value={clases.name}
                        id={`clases-${clases.id}`}
                        onChange={handleCheck}
                        checked={isChecked('clase', clases.name)}
                     />
                     <span className='align-middle'>
                        {clases.name}
                     </span>
                  </label>
               ))
            }
         </fieldset>
      </div>
   )
}

FiltreList.propTypes = {
   funcion: PropTypes.func,
   isMobile: PropTypes.bool,
   dataFilter: PropTypes.object,
   setParams: PropTypes.func,
};