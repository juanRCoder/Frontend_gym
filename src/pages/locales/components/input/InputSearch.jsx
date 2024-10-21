import { Search, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"

const testDataLocations = [
   {
      "id": 1,
      "address": "123 Main St",
      "city": "Lima",
      "country": "Peru",
      "zip_code": 1000,
   },
   {
      "id": 2,
      "address": "456 Elm St",
      "city": "Buenos Aires",
      "country": "Argentina",
      "zip_code": 2000,
   },
   {
      "id": 3,
      "address": "789 Oak St",
      "city": "Bogotá",
      "country": "Colombia",
      "zip_code": 1101,
   },
   {
      "id": 4,
      "address": "101 Pine St",
      "city": "Santiago",
      "country": "Chile",
      "zip_code": 8320000,
   },
   {
      "id": 5,
      "address": "202 Maple St",
      "city": "Mexico City",
      "country": "Mexico",
      "zip_code": 5000,
   }
]

let arrayData = []
testDataLocations.forEach((location) => {
   arrayData.push(location.city, location.address, location.zip_code.toString(), location.country)
})

export const InputSearch = () => {
   const [, setSearchParams] = useSearchParams();
   const [suggestion, setSuggestion] = useState(false)
   const [location, setLocation] = useState({
      lat: '',
      lon: '',
      city: '',
      address: '',
      country: '',
      zip_code: '',
      search: '',
   })
   const divRef = useRef(null);
   const locationsData = useRef([])

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);

      // Limpiamos el listener cuando el componente se desmonta
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   const handleSuggestion = (bool) => {
      locationsData.current = []
      setSuggestion(bool ?? !suggestion)
   }

   const handleSelect = (value) => {
      setLocation({ ...location, search: value });
      setSuggestion(false);

      const params = window.location.search;
      const urlParams = new URLSearchParams(params);
      urlParams.set('search', value);
      const newParams = urlParams.toString();
      setSearchParams(newParams);
   }

   const submitSearch = (e) => {
      e.preventDefault();
      handleSelect(location.search)
      if (location.search === '') {
         const params = window.location.search;
         const urlParams = new URLSearchParams(params);
         urlParams.delete('search');
         setSearchParams(urlParams);
      }
   }

   const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
         setSuggestion(false);
      }
   };


   const getLocation = () => {
      if (window.navigator.geolocation) {
         window.navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            // consultar con la latitud y longitud obteniendo, nombre de ciudad etc
            fetch(
               `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            )
               .then((response) => response.json())
               .then((data) => {
                  setLocation({ lat: latitude, lon: longitude, city: data.address.city || data.address.town || 'Desconocido', address: data.address.road, country: data.address.country, zip_code: data.address.postcode, search: data.address.country + ', ' + data.address.road });
               })
               .catch(() => {
                  return
               });
            handleClickOutside(true)
         },
            (error) => {
               //TODO, Deberia enviar una alerta
               console.error('Error al obtener la ubicación:', error);
            }
         );
      }
   }

   const changeSearch = (e) => {
      const value = e.target.value
      if (value.trim().length <= 2) {
         // locationsData.current = []
         return setLocation({ ...location, search: value })
      }
      locationsData.current = arrayData.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      setLocation({ ...location, search: value })
   }

   return (
      <form className="relative w-full md:w-[75%] text-black bg-white rounded-xl py-2 px-6"
         ref={divRef}
      >
         <input
            className="w-[calc(100%-5%)] outline-none align-middle placeholder:font-normal placeholder:opacity-90"
            value={location.search}
            onChange={(e) => changeSearch(e)}
            placeholder="Ingresa tu zona, ciudad o codigo postal"
            type="search"
            id="search"
            onClick={() => handleSuggestion(true)}
         />
         <button
            className="w-[5%] align-middle"
            type="submit"
            onClick={submitSearch}
         >
            <Search
               className={`ml-auto md:w-8 md:h-8 `}
            />
         </button>
         <div
            className={`absolute bg-white top-[110%] left-0 right-0 rounded-xl ${suggestion ? 'block' : 'hidden'}`}
         >
            <ul className="space-y-1">
               <li
                  className="font-medium space-x-2 cursor-pointer hover:bg-[#0002] transition-colors px-4 py-2"
                  onClick={() => getLocation()}
               >
                  <MapPin className="inline-block align-middle" />
                  <span className="align-middle">Usa tu ubicación actual</span>
               </li>
               {
                  locationsData.current.map((item) => (
                     <li
                        className="space-x-2 cursor-pointer hover:bg-[#0002] transition-colors px-4 py-2"
                        key={'search' + item}
                        onClick={() => handleSelect(item)}
                     >
                        <MapPin className="inline-block align-middle" />
                        <span className="align-middle">{item}</span>
                     </li>
                  ))
               }
            </ul>
         </div>
      </form>
   )
}

