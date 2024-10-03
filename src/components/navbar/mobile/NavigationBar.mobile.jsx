import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DropdownMenuMobile from "./DropdownMenu.mobile";

export default function NavigationBarMobile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <section className="mt-16 mx-5 text-white text-xl flex flex-col gap-5 select-none">
      <a className="hover:text-yellow cursor-pointer">Inicio</a>
      <div className="relative pb-1">
        <a
          className="inline-flex items-center justify-center hover:text-yellow cursor-pointer"
          onClick={toggleDropdown}
        >
          Acerca de nosotros
          <MdOutlineKeyboardArrowDown className="text-3xl pt-1" />
        </a>
        <DropdownMenuMobile isDropdownOpen={isDropdownOpen} />
      </div>
      <a className="flex items-center gap-1 hover:text-yellow cursor-pointer">
        <IoCartOutline className="text-2xl" />
        Tienda
      </a>
    </section>
  );
}
