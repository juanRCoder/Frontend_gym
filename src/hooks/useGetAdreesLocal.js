import { useQuery } from "@tanstack/react-query"
import { getAllAdress } from "@/services/fetchApi"

export const useGetAdreesLocal = () => {

   const addressQuery = useQuery({
      queryKey: ["locations"],
      queryFn: getAllAdress,
      staleTime: 1000 * 60 * 60 * 24,
      retry: false,
      enabled: true,
   })

   return {
      addressQuery,
   }
}
