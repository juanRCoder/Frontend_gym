import { Search, MapPin } from "lucide-react"
import { useRef } from "react"
import PropTypes from "prop-types"
import { useParamQuery } from "@/hooks/useParams"
import { useCloseContainer } from "@/hooks/useCloseContainer"
import { useLocationUser } from "@/hooks/useLocation"
import { useGetAdreesLocal } from "@/hooks/useGetAdreesLocal"


export const InputSearch = ({ className }) => {
   //? Fetch a la api con tanstack-query
   const { addressQuery } = useGetAdreesLocal()

   const { isClose, setClose, containerRef, handleClickOutside } = useCloseContainer()

   const { locationData, getGeolocation, setLocation } = useLocationUser()
   const { deleteParams, setParams } = useParamQuery()

   const filterAddressData = useRef([])
   const arrayData = useRef([])
   if (addressQuery.data && arrayData.current?.length === 0) {
      arrayData.current = addressQuery.data
   }
   const handleSuggestion = (bool) => {
      filterAddressData.current = []
      setClose(bool ?? !isClose)
   }

   const handleSelect = (value) => {
      value = value.trim().toLowerCase()
      setLocation({ ...locationData, search: value });
      setParams('search', value)
      setClose(false);
   }

   const submitSearch = (e) => {
      e.preventDefault();
      handleSelect(locationData.search)

      if (locationData.search === '') {
         deleteParams('search')
      }
   }
   const handelLocation = async () => {
      handleClickOutside(false)
      const getLocation = await getGeolocation()
      setParams('search', getLocation)
   }

   const changeSearch = (e) => {
      const value = e.target.value
      if (value.trim().length <= 2) {
         // locationsData.current = []
         return setLocation({ ...locationData, search: value })
      }
      filterAddressData.current = arrayData.current.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      setLocation({ ...locationData, search: value })
   }
   return (
      <form
         className={`relative z-10 text-black bg-white w-full rounded-xl py-2 px-6 
            ${className}`
         }
         ref={containerRef}
      >
         <input
            className="w-[calc(100%-5%)] align-middle outline-none placeholder:font-normal placeholder:opacity-90"
            value={locationData.search}
            placeholder="Ingresa tu zona, ciudad o codigo postal"
            type="search"
            id="search"
            onChange={(e) => changeSearch(e)}
            onClick={() => handleSuggestion(true)}
         />
         <button
            className="w-[5%] align-middle"
            type="submit"
            onClick={submitSearch}
         >
            <Search className={`ml-auto md:w-8 md:h-8 `} />
         </button>

         <ul className={`absolute top-[110%] left-0 right-0 bg-white rounded-xl space-y-1 
            ${isClose ? 'block' : 'hidden'}`
         }>
            <li
               className="font-medium cursor-pointer hover:bg-[#0002] px-4 py-2 space-x-2"
               onClick={() => handelLocation()}
            >
               <MapPin className="inline-block align-middle" />
               <span className="inline-block align-middle">
                  Usa tu ubicación actual
               </span>
            </li>
            {
               filterAddressData.current.map((item) => (
                  <li
                     className="cursor-pointer hover:bg-[#0002] px-4 py-2 space-x-2"
                     key={'search' + item}
                     onClick={() => handleSelect(item)}
                  >
                     <MapPin className="inline-block align-middle" />
                     <span className="inline-block align-middle">
                        {item}
                     </span>
                  </li>
               ))
            }
         </ul>
      </form>
   )
}

InputSearch.propTypes = {
   className: PropTypes.string
}