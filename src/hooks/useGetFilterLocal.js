import { useQuery } from "@tanstack/react-query"
import { getAllServices, getAllClases } from "@/services/fetchApi"

export const useGetFilterLocal = () => {

   const filterServicesQuery = useQuery({
      queryKey: ["filterServices"],
      queryFn: () => getAllServices(),
      staleTime: 1000 * 60 * 60 * 24,
      retry: false,
      enabled: true,
   })

   const filterClasesQuery = useQuery({
      queryKey: ["filterClases"],
      queryFn: () => getAllClases(),
      staleTime: 1000 * 60 * 60 * 24,
      retry: false,
      enabled: true,
   })

   return {
      filterServicesQuery,
      filterClasesQuery,
   }
}
