import { Link } from "react-router-dom";
import InputBase from "./InputBase";
import { AiFillFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { useForm } from "react-hook-form";

function FormContact() {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col w-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col pt-24 gap-10"
      >
        <InputBase
          label={"Nombre"}
          type={"text"}
          register={register}
          placeholder={"Nombre"}
          name={"name"}
        />
        <InputBase
          label={"Email"}
          register={register}
          type={"email"}
          placeholder={"Email"}
          name={"email"}
        />
        <div className="text-3xl flex items-start gap-14">
          <label id="tarea" className="text-white block w-32">
            Mensaje:
          </label>
          <textarea
            {...register("message")}
            className="resize-none text-white py-[10px] px-5 tracking-wider rounded-2xl text-xl bg-[#181D23] outline-[2.5px] border-transparent outline-none outline-white focus:outline-yellow focus:text-yellow h-52 w-full"
            id="tarea"
          ></textarea>
        </div>
        <div className="pl-36">
          <button className="bg-[#f4af00] text-black text-3xl  font-semibold py-2 px-4 rounded-2xl w-full">
            ENVIAR
          </button>
        </div>
      </form>
      <div className="text-white text-2xl leading-snug pt-12">
        También puedes seguirnos en nuestras
        <br />
        redes sociales para estar al tanto de
        <br />
        nuestras promociones y eventos:
        <div className="flex gap-2 mt-6">
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
    </div>
  );
}

export default FormContact;
