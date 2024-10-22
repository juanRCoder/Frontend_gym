import InputText from "./InputBase";
import { useForm } from "react-hook-form";
import { AiFillFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function FormContact() {
  const {
    register,
    handleSubmit,
  } = useForm();

  // Datos a enviar al backend
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col sm:pt-2 sm:w-1/2 lg:w-[522px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 sm:gap-8 md:gap-10"
      >
        {/* NOMBRE */}
        <InputText
          label={"Nombre"}
          type={"text"}
          register={register}
          placeholder={"Nombre"}
          name={"name"}
        />
        {/* EMAIL */}
        <InputText
          label={"Email"}
          register={register}
          type={"email"}
          placeholder={"Usuario@gmail.com"}
          name={"email"}
        />
        {/* TEXTAREA */}
        <div className="text-lg sm:text-xl md:text-[22px] flex flex-col md:flex-row items-start gap-5">
          <label id="tarea" className="text-white block w-32">
            Mensaje:
          </label>
          <textarea
            {...register("message")}
            className="resize-none py-[10px] px-5  rounded-2xl sm:text-xl bg-[#181D23] outline-[2.5px] border-transparent outline-none outline-white focus:outline-yellow focus:text-yellow h-64 w-full"
            id="tarea"
          ></textarea>
        </div>
        {/* BUTTON DE ENVIAR */}
        <div className="text-lg sm:text-xl md:text-[22px] flex flex-col md:flex-row items-start gap-5">
          <span className="text-white block w-32"/>
          <button className="bg-[#f4af00] text-black text-2xl font-semibold py-2 rounded-2xl w-full">
            ENVIAR
          </button>
        </div>
        <div className="text-white text-lg sm:text-xl md:text-[22px] pt-32">
        También puedes seguirnos en nuestras redes sociales para estar al tanto de nuestras promociones y eventos:
        <div className="flex gap-2 py-6">
          {[
            [AiFillFacebook],
            [FaXTwitter],
            [FaInstagramSquare],
          ].map(([Component], i) => (
            <Link key={i} to={"/"}>
              <Component className="h-9 w-9 text-yellow" />
            </Link>
          ))}
        </div>
      </div>
      </form>
    </div>
  );
}

export default FormContact;
