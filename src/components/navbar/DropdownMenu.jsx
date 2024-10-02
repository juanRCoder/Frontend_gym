import PropTypes from "prop-types";

export default function DropdownMenu({ isDropdownOpen }) {
  return (
    <div
      className={`absolute left-0 top-[3.35rem] w-full bg-slate-200 text-black shadow-lg transform transition-opacity duration-300 ease-out select-none ${
        isDropdownOpen ? "opacity-80" : "opacity-0"
      } z-50`}
    >
      <ul>
        {[["Locales"], ["Trainers"], ["Planes"]].map(([option], i) => (
          <li key={i}>
            <a className="text-lg block px-4 py-2 hover:bg-gray-200 hover:bg-yellow hover:text-white cursor-pointer">
              {option}
            </a>
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
