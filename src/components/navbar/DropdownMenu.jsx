import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function DropdownMenu({ isDropdownOpen }) {
  return (
    <div
      className={`absolute left-0 top-[3.35rem] w-full bg-slate-200 text-black shadow-lg transform transition-opacity duration-300 ease-out select-none ${isDropdownOpen ? "opacity-80" : "opacity-0"
        } z-20`}
    >
      <ul>
        {[["locales"], ["Trainers"], ["Planes"]].map(([option], i) => (
          <li key={i}>
            <Link to={option}>
              <span className="text-lg block px-4 py-2 hover:bg-gray-200 hover:bg-yellow hover:text-white cursor-pointer capitalize">
                {option}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// PropTypes de react type
DropdownMenu.propTypes = {
  isDropdownOpen: PropTypes.bool,
};
