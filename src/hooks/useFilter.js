import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';

export const useFilter = () => {
   const [searchParams,] = useSearchParams();

   const [filter, setFilter] = useState({
      service: searchParams.getAll('service'),
      clase: searchParams.getAll('clase'),
      search: searchParams.get('search') || '',
      page: searchParams.get('page') || 1,
   })

   useEffect(() => {
      setFilter({
         service: searchParams.getAll('service'),
         clase: searchParams.getAll('clase'),
         search: searchParams.get('search') || '',
         page: searchParams.get('page') || 1,
      })
   }, [searchParams])

   // console.log(searchParams);
   return {
      filter,
   }
}

export const useResponsiveFilter = (initialFilter) => {
   const [isMovil, setIsMovil] = useState(window.innerWidth <= 768);
   const [filters, setFilters] = useState({
      clase: initialFilter.clase,
      service: initialFilter.service,
   });
   const [openFilter, setOpenFilter] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         const isMobile = window.innerWidth <= 768;
         setIsMovil(isMobile);
         if (!isMobile) {
            document.body.style.overflow = 'unset';
            setOpenFilter(false);
         }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const toggleFilter = (bool) => {
      setOpenFilter(bool);
      document.body.style.overflow = bool ? 'hidden' : 'unset';
   };

   return { isMovil, filters, setFilters, openFilter, toggleFilter };
};
