import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function ButtonNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <span
        className="sm:hidden text-white text-3xl cursor-pointer"
        onClick={() => setIsVisible(true)}
      >
        {/* Puedes descomentar esto para mostrar iconos */}
        <HiMenuAlt2 />
      </span>
      {isVisible && (
        <div className="top-0 left-0 absolute w-full h-screen bg-black">
          <MdClose
            onClick={() => setIsVisible(false)}
            className="text-white absolute top-4 right-4 text-4xl cursor-pointer"
          />
          <section className="mt-16 text-white text-xl flex flex-col gap-5 select-none">
            <a className="hover:text-yellow cursor-pointer px-5">Inicio</a>
            <div className="relative pb-1">
              <a
                className="inline-flex items-center justify-center hover:text-yellow cursor-pointer px-5"
                onClick={toggleDropdown}
              >
                Acerca de nosotros
                <MdOutlineKeyboardArrowDown className="text-3xl pt-1" />
              </a>
              <div
                className={`mt-5 w-full text-white shadow-lg transform transition-opacity duration-300 ease-out select-none ${
                  !isDropdownOpen ? "hidden" : ""
                }`}
              >
                <ul>
                  {[
                    ["Locales"],
                    ["Trainers"],
                    ["Planes"]
                  ].map(
                    ([option], i) => (
                      <li key={i}>
                        <a className="rounded-md text-lg block py-2 hover:bg-gray-200 hover:bg-yellow hover:text-black cursor-pointer transition px-5">
                          {option}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <a className="flex items-center gap-1 hover:text-yellow cursor-pointer px-5">
              <IoCartOutline className="text-2xl" />
              Tienda
            </a>
          </section>
        </div>
      )}
    </>
  );
}
