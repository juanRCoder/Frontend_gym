import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsVisible(!isVisible);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="w-full mx-auto">
      <nav className="flex flex-col md:flex-row w-full h-auto bg-header p-10 py-2 relative">
        <div className="flex items-center justify-between p-4 md:p-6">
          <img
            src="./src/assets/img/powerzone_logo.png"
            className="max-w-[10rem] h-auto md:max-w-[12rem]"
            alt="Logo PowerZone"
          />
          <button
            className="md:hidden text-white text-3xl"
            onClick={toggleMenu}
          >
            <HiMenuAlt2 />
          </button>
        </div>
        <div
          className={`md:flex ${
            isVisible ? "block" : "hidden"
          } md:items-center md:justify-between w-full`}
        >
          <menu className="flex flex-col md:flex-row md:space-x-8 md:ml-auto text-center md:text-left relative">
            <a
              href="#"
              className="relative flex items-center text-white text-2xl m-4 md:m-6 hover:text-yellow group"
            >
              <span className="relative z-10">Inicio</span>
              <span className="absolute left-0 bottom-[-10px] w-full h-[2px] bg-yellow transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            <div className="relative">
              <a
                href="#"
                className="relative flex items-center text-white text-xl m-4 md:m-6 hover:text-yellow group cursor-pointer"
                onClick={toggleDropdown}
              >
                <span className="relative z-10">Acerca de nosotros</span>
                <MdOutlineKeyboardArrowDown className="ml-2 text-xl" />
                <span className="absolute left-0 bottom-[-10px] w-full h-[2px] bg-yellow transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>
              {/* Dropdown menu */}
              <div
                className={`absolute left-0 mt-3.5 w-full md:w-48 bg-white text-black border border-gray-200 shadow-lg transform transition-opacity duration-300 ease-out ${
                  isDropdownOpen ? "opacity-80 translate-y-0" : "opacity-0 translate-y-[-10px]"
                } z-50`}
              >
                <ul>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:bg-yellow hover:text-white">Locales</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:bg-yellow hover:text-white">Trainers</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:bg-yellow hover:text-white">Planes</a></li>
                </ul>
              </div>
            </div>
            <a
              href="#"
              className="relative flex items-center text-white text-xl m-4 md:m-6 hover:text-yellow group"
            >
              <IoCartOutline className="ml-2 text-2xl mr-3" />
              <span className="relative z-10">Tienda</span>
              <span className="absolute left-0 bottom-[-10px] w-full h-[2px] bg-yellow transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
          </menu>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
