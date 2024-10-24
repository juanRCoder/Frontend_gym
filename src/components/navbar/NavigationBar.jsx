import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <section className="hidden text-white text-xl sm:flex items-center gap-5 select-none">
      <a className="hover:text-yellow cursor-pointer pr-4">Inicio</a>

      <div className="relative">
        <a
          className="inline-flex items-center justify-center hover:text-yellow cursor-pointer"
          onClick={toggleDropdown}
        >
          Acerca de nosotros
          <MdOutlineKeyboardArrowDown className="text-3xl pt-1" />
        </a>
        <div
          className={`absolute left-0 top-[3.35rem] w-full bg-slate-200 text-black shadow-lg transform transition-opacity duration-300 ease-out select-none ${
            isDropdownOpen ? "opacity-80" : "opacity-0"
          } z-50`}
        >
          <ul>
            {[["Locales"],
              ["Trainers"],
              ["Planes"]
            ].map(([option], i) => (
              <li key={i}>
                <Link to={option} className="text-lg block px-4 py-2 hover:bg-gray-200 hover:bg-yellow hover:text-white cursor-pointer">
                  {option}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
