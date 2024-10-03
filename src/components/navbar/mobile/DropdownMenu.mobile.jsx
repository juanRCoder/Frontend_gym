import PropTypes from "prop-types";

export default function DropdownMenuMobile({ isDropdownOpen }) {
  return (
    <div
      className={`mt-5 w-full text-white shadow-lg transform transition-opacity duration-300 ease-out select-none ${
        !isDropdownOpen ? "hidden" : ""
      }`}
    >
      <ul>
        {[["Locales"], ["Trainers"], ["Planes"]].map(([option], i) => (
          <li key={i}>
            <a className="rounded-md text-lg px-4 block py-2 hover:bg-gray-200 hover:bg-yellow hover:text-white cursor-pointer transition">
              {option}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
// PropTypes de react type
DropdownMenuMobile.propTypes = {
  isDropdownOpen: PropTypes.bool,
};
