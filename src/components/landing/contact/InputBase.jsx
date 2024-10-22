import { string, PropTypes } from "prop-types";

function InputText({ label, type, placeholder, register, name }) {
  return (
    <>
      <div className="text-lg sm:text-xl md:text-[22px] flex flex-col md:flex-row items-start gap-5">
        <label htmlFor={label} className="text-white block w-32">
          {label}:
        </label>
        <input
          className="text-white py-[10px] px-5 tracking-wider rounded-2xl text-base sm:text-lg md:text-xl bg-[#181D23] placeholder:text-white/50 outline-[2.5px] border-transparent outline-none outline-white focus:outline-yellow focus:text-yellow w-full"
          id={label}
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
    </>
  );
}

// PropTypes de react type
InputText.propTypes = {
  label: string,
  type: string,
  placeholder: string,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputText;
