import { useQuery } from "@tanstack/react-query"
import { getAllLocations } from "@/services/fetchApi"
import { useFilter } from "./useFilter"
// import { useParamQuery } from "./useParams"

export const useLocales = () => {
   const { filter } = useFilter()

   const localesQuery = useQuery({
      queryKey: ["locales", {...filter}],
      queryFn: () => getAllLocations(filter),
      staleTime: 1000 * 60 * 60 * 10,
      retry: false,
      enabled: true,
   })

   return {
      localesQuery
   }
}

