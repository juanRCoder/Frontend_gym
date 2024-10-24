import { useSearchParams } from "react-router-dom";

export const useParamQuery = () => {
   const [params, setSearchParams] = useSearchParams();

   const setParams = (key,value) => {
      const params = window.location.search;
      const urlParams = new URLSearchParams(params);
      urlParams.set(key, value);
      const newParams = urlParams.toString();
      setSearchParams(newParams);
   };

   const setQuery = (data) => {
      setSearchParams(data);
   };

   const deleteParams = (key) => {
      const params = window.location.search;
      const urlParams = new URLSearchParams(params);
      urlParams.delete(key);
      setSearchParams(urlParams);
   };

   return {
      setParams,
      deleteParams,
      setQuery,
      params
   };
}
