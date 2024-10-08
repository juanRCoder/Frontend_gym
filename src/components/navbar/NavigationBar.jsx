import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DropdownMenu from "./DropdownMenu";

export default function NavigationBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <section className="hidden text-white text-xl sm:text-lg sm:flex items-center gap-2 select-none">
      <a className="hover:text-yellow cursor-pointer pr-4">Inicio</a>
      <div className="relative">
        <a
          className="inline-flex items-center justify-center hover:text-yellow cursor-pointer"
          onClick={toggleDropdown}
        >
          Acerca de nosotros
          <MdOutlineKeyboardArrowDown className="text-3xl pt-1" />
        </a>
        <DropdownMenu isDropdownOpen={isDropdownOpen} />
      </div>
      <a className="flex items-center gap-1 hover:text-yellow cursor-pointer">
        <IoCartOutline className="text-2xl" />
        Tienda
      </a>
    </section>
  );
}

{
  /* <span className="absolute left-0 bottom-[-10px] w-full h-[2px] bg-yellow transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span> */
}
