import { useEffect, useRef, useState } from "react"

export const useCloseContainer = () => {
   const [isClose, setClose] = useState(false)
   const containerRef = useRef(null);

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      // Limpiamos el listener cuando el componente se desmonta
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
         setClose(false);
      }
   };

   return {
      isClose,
      setClose,
      containerRef,
      handleClickOutside,
   }
}
