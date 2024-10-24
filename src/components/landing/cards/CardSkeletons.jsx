

export const CardSkeletonLocal = () => {
   return (
      <div className="h-[24rem] md:h-[25rem] md:max-w-[22rem] animate-pulse space-y-2 overflow-hidden">
         <div className="w-full h-[50%] rounded-xl bg-gray"></div>
         <div className="w-full h-[20%] rounded-xl bg-gray"></div>
         <div className="w-full h-[20%] rounded-xl bg-gray"></div>
      </div>
   )
}
