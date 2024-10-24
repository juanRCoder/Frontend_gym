import { ListFilter } from 'lucide-react';
import { X } from 'lucide-react';
import PropTypes from 'prop-types';

import { useFilter, useResponsiveFilter } from '@/hooks/useFilter';
import { useParamQuery } from '@/hooks/useParams';
import { useGetFilterLocal } from '@/hooks/useGetFilterLocal';
import './filtro.css'

export const FiltroLocal = () => {
   const { setQuery } = useParamQuery()
   const { filter } = useFilter()
   const { isMovil, filters, setFilters, openFilter, toggleFilter } = useResponsiveFilter(filter);

   const updateQuery = (e) => {
      e.preventDefault()
      setQuery(filters)
      toggleFilter(false)
   }

   const clearFilter = () => {
      setFilters({
         service: [],
         clase: [],
      });
      setQuery({});
   };

   return (
      <>
         <button
            className='block md:hidden'
            onClick={() => toggleFilter(true)}
         >
            <ListFilter
               size={45}
            />
         </button>

         <div className={`${isMovil
            ? 'fixed inset-0 z-30 bg-black flex justify-center flex-col p-5 pt-16 gap-4'
            : 'w-[20%] pb-8 relative z-10 border border-transparent  block space-y-10'} 
            ${openFilter ? 'block' : 'hidden md:block'}`
         }>

            <div className='space-x-10 hidden md:block'>
               <ListFilter
                  className='inline-block align-middle'
                  size={35}
               />
               <span className='text-2xl align-middle'>
                  Filtros
               </span>
            </div>

            <form className={`${isMovil
               ? 'fixed inset-0 z-30  bg-black flex justify-center flex-col p-5 pt-16 gap-4'
               : ''} `
            }>
               <button
                  className='block md:hidden absolute top-5 right-5 cursor-pointer'
                  onClick={() => toggleFilter(false)}
                  type='button'
               >
                  <X size={40} />
               </button>

               <div className='min-h-[50%] md:min-h-0 overflow-y-auto md:overflow-hidden'>
                  <FiltreList setFilters={setFilters} isMobile={isMovil} filters={filters} setQuery={setQuery} filter={filter} />
               </div>

               <div className='md:hidden space-y-4 w-full mt-auto'>
                  <button className='bg-colorYellow text-black hover:opacity-90 rounded-lg p-3 text-center w-full'
                     onClick={updateQuery}
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
         </div>
      </>
   )
}

const FiltreList = ({ setFilters, isMobile, filters, setQuery, filter }) => {
   //? Fetch a la api con tanstack-query
   const { filterClasesQuery, filterServicesQuery } = useGetFilterLocal()

   // Agrega filtros para el mobile
   const setFiltreMobil = (name, value, checked) => {
      setFilters(prevData => {
         const existingValues = prevData[name] || [];
         const updatedValues = checked
            ? [...new Set([...existingValues, value])]
            : existingValues.filter(item => item !== value);
         return { ...prevData, [name]: updatedValues };
      });
   };

   // Agrega filtros para el desktop
   const handleCheck = (event) => {
      let { name, value, checked } = event.target
      value = value.toLowerCase()
      name = name.toLowerCase()

      if (isMobile) {
         setFiltreMobil(name, value, checked)
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
      setQuery(currentParams.toString());
   }

   const isChecked = (name, value) => {
      value = value.toLowerCase()
      name = name.toLowerCase()

      if (isMobile) {
         return filters[name]?.includes(value);
      }
      return filter[name]?.includes(value);
   }

   const renderOptions = (items, name) => {
      return items.map((item) => (
         <label
            key={item.id}
            className='block space-x-3 text-lg cursor-pointer font-normal opacity-95 animate-fadeIn'
            htmlFor={`${name}-${item.id}`}
         >
            <input
               className="align-middle"
               type="checkbox"
               name={name}
               value={item.name}
               id={`${name}-${item.id}`}
               onChange={handleCheck}
               checked={isChecked(name, item.name)}
            />
            <span className='align-middle select-none'>
               {item.name}
            </span>
         </label>
      ));
   };

   return (
      <div className='space-y-10 min-h-[28rem]'>
         <fieldset className='min-h-[14rem] text-xl md:font-light capitalize space-y-8'>
            <legend className='font-medium select-none'>
               Servicios
            </legend>
            {
               filterServicesQuery.isLoading
                  ? <></>
                  : renderOptions(filterServicesQuery.data, 'service')
            }
         </fieldset>

         <fieldset className='min-h-[14rem] text-xl md:font-light capitalize space-y-8'>
            <legend className='font-medium select-none'>
               Clases
            </legend>
            {
               filterClasesQuery.isLoading
                  ? <></>
                  : renderOptions(filterClasesQuery.data, 'clase')
            }
         </fieldset>

      </div>
   )
}

FiltreList.propTypes = {
   setFilters: PropTypes.func,
   isMobile: PropTypes.bool,
   filters: PropTypes.object,
   setQuery: PropTypes.func,
   filter: PropTypes.object
};