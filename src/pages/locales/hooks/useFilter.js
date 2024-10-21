import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';

export const useFilter = () => {
   const [searchParams,] = useSearchParams();

   const [filter, setFilter] = useState({
      service: searchParams.getAll('service'),
      clase: searchParams.getAll('clase'),
   })

   useEffect(() => {
      setFilter({
         service: searchParams.getAll('service'),
         clase: searchParams.getAll('clase'),
      })
   }, [searchParams])

   // console.log(searchParams);
   return {
      filter,
   }
}