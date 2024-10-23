
export const getAllAdress = async () => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/local/all/location`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   })

   const data = await response.json()
   const locations = data.data
   let arrayData = []

   locations.forEach((location) => {
      arrayData.push(location.city, location.address, location.zip_code.toString() +', '+ location.city, location.country)
   })
   return arrayData
}

export const getAllServices = async () => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/service/all`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const data = await response.json()

   if (!response.ok) {
      throw new Error(data.message || 'Error inesperado!')
   }
   const services = data.data
   return services
}

export const getAllClases = async () => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/clase/all`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const data = await response.json()

   if (!response.ok) {
      throw new Error(data.message || 'Error inesperado!')
   }
   const clases = data.data
   return clases
}

export const getAllLocations = async (params) => {
   const querys = new URLSearchParams(params).toString();
   const response = await fetch(`${import.meta.env.VITE_API_URL}/local/all/?${querys}`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   })

   const data = await response.json()
   if (!response.ok) {
      throw new Error(data.message || 'Error inesperado!')
   }
   const locales = data.data
   return locales
}