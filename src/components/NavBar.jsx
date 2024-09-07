import React, { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsVisible(!isVisible);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`${
        isScrolled ? "bg-white/30 backdrop-blur-lg" : "bg-header"
      } sticky top-0 z-50 transition-all duration-500`}
    >
      <div className="w-full md:container mx-auto">
        <nav className="flex flex-col md:flex-row w-full h-auto py-2 relative">
          <div className="flex items-center justify-between p-4 md:p-6">
            {/* Logo Principal */}
            <img
              src="./src/assets/img/powerzone_logo.png"
              className={`max-w-[10rem] ml-6 h-auto md:max-w-[12rem] ${
                isVisible ? "hidden" : "block"
              }`}
              alt="Logo PowerZone"
            />
            {/* Botón de Menú */}
            <button
              className="md:hidden text-white text-3xl relative"
              onClick={toggleMenu}
            >
              <span className="relative mr-9">
                <MdClose
                  className={`mt-2 absolute transition-transform duration-700 ease-in-out ${
                    isVisible ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                  }`}
                />
                <HiMenuAlt2
                  className={`absolute transition-transform duration-700 ease-in-out ${
                    isVisible ? "opacity-0" : "opacity-100"
                  }`}
                />
              </span>
            </button>
          </div>
          {/* Menú y Logo Alternativo en Pantallas Móviles */}
          <div
            className={`${
              isVisible ? "block" : "hidden"
            } md:flex md:items-center md:justify-evenly w-full h-screen md:h-auto`}
          >
            <div
              className={`flex flex-col items-center justify-center ${
                isVisible ? "space-y-8" : "space-x-3"
              } md:flex-row md:space-x-3 md:ml-auto text-center h-full`}
            >
              {/* Logo Alternativo en Pantallas Móviles */}
              <img
                src="./src/assets/img/powerzone_logo.png"
                className={`${
                  isVisible ? "block mb-10 max-w-[15rem] h-auto" : "hidden"
                } md:hidden transition-transform duration-500`}
                alt="Logo PowerZone"
              />
              <a
                href="#"
                className="relative flex items-center text-white text-xl m-2 md:m-2 hover:text-yellow group"
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
                {/* Dropdown menu: Se agregó el efecto backdrop-blur-lg y cambio el color del fondo por bg-slate-200/70 */}
                <div
                  className={`absolute left-0 mt-3.5 w-full md:w-48 bg-slate-200/70 backdrop-blur-lg text-black shadow-lg transform transition-opacity duration-300 ease-out ${
                    isDropdownOpen
                      ? "opacity-80 translate-y-0"
                      : "opacity-0 translate-y-[-10px]"
                  } z-50`}
                >
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="text-lg block px-4 py-2 hover:bg-gray-200 hover:bg-yellow hover:text-white"
                      >
                        Locales
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-lg block px-4 py-2 hover:bg-gray-200 hover:bg-yellow hover:text-white"
                      >
                        Trainers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-lg block px-4 py-2 hover:bg-gray-200 hover:bg-yellow hover:text-white"
                      >
                        Planes
                      </a>
                    </li>
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
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default NavBar;
