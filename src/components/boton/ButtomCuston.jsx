import PropTypes from "prop-types"

export const ButtomCuston = ({ className, text, icon }) => {
   return (
      <button className={`w-[14rem] md:w-auto py-1 px-3 md:py-3 md:px-6 space-x-2 rounded-3xl overflow-hiddem 
      ${className}`}
      >
         <span className="text-base md:text-xl uppercase font-medium md:font-semibold inline-block align-middle ">
            {text}
         </span>

         <div className="inline-block align-middle w-[1.2rem] md:w-auto">
            {icon}
         </div>
      </button>
   )
}
{/* <button className={`hover:animate-pulse w-[14rem] md:w-auto py-1 px-3 md:py-3 md:px-6 space-x-2 rounded-3xl overflow-hiddem ${className}`}></button> */ }
ButtomCuston.propTypes = {
   text: PropTypes.string,
   icon: PropTypes.node,
   className: PropTypes.string,
}