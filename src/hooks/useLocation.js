import { useState } from "react"

export const useLocationUser = () => {
   const [locationData, setLocation] = useState({
      lat: '',
      lon: '',
      city: '',
      address: '',
      country: '',
      zip_code: '',
      search: '',
   })

   const getGeolocation = async () => {
      if (window.navigator.geolocation) {
         // Envolvemos getCurrentPosition en una Promise
         const getPosition = () =>
            new Promise((resolve, reject) => {
               window.navigator.geolocation.getCurrentPosition(
                  (position) => resolve(position.coords),
                  (error) => reject(error)
               );
            });

         try {
            // Obtenemos las coordenadas
            const { latitude, longitude } = await getPosition();

            // Consultamos con la latitud y longitud obtenida
            const response = await fetch(
               `${import.meta.env.VITE_API_GEOLOCATION}/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );

            if (response.ok) {
               const data = await response.json();

               // Actualizamos la ubicación
               setLocation({
                  lat: latitude,
                  lon: longitude,
                  city: data.address.city || data.address.town || 'Desconocido',
                  address: data.address.road || 'Desconocido',
                  country: data.address.country || 'Desconocido',
                  zip_code: data.address.postcode || 'Desconocido',
                  search: `${data.address.city}, ${data.address.address || ''}`
               });

               return `${data.address.country}, ${data.address.road}`;
            } else {
               console.error('Error en la consulta a la API de localización');
            }
         } catch (error) {
            console.error('Error al obtener la ubicación o al hacer la consulta:', error);
         }
      } else {
         console.error('Geolocalización no soportada en este navegador.');
      }
   };

   return {
      locationData,
      getGeolocation,
      setLocation,
   }
}
