import { IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { AiFillFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import LinkFooter from "./LinkFooter";

function GroupLinkFooter() {
  return (
    <section className="mt-5 ml-20 flex flex-1 justify-between">
      <div className="w-36">
        <div className="flex flex-col gap-1 font-semibold mb-2">
          <Link to={"/"}>Inicio</Link>
          <Link to={"/"}>Acerca de nosotros</Link>
        </div>
        <ul className="flex flex-col gap-1">
          <LinkFooter destiny={"Locales"} link={"/"} />
          <LinkFooter destiny={"Trainners"} link={"/"} />
          <LinkFooter destiny={"Servicios"} link={"/"} />
        </ul>
      </div>
      <div className="w-36">
        <div className="flex flex-col font-semibold mb-[6px]">
          <Link to={"/"}>Tienda</Link>
        </div>
        <ul className="flex flex-col gap-1">
          <LinkFooter destiny={"Ingresar"} link={"/"} />
          <LinkFooter destiny={"Registrate aquí"} link={"/"} />
        </ul>
      </div>
      <div className="">
        <div className="flex flex-col font-semibold mb-[6px]">
          <p>Contactanos</p>
        </div>
        <ul className="flex flex-col gap-1">
          <li className="flex items-start justify-center gap-2">
            <IoLocationOutline className="h-7 w-7" />
            <p>Av. 123, Centro, Valparaíso,<br />Chile.</p>
          </li>
          <li className="flex items-center justify-start gap-2">
            <CgMail className="h-7 w-7" />
            <p>info@powerzone.cl</p>
          </li>
          <li>
            <div className="flex gap-2 mt-2">
              <Link to={"/"}>
                <AiFillFacebook className="h-6 w-6" />
              </Link>
              <Link to={"/"}>
                <FaXTwitter className="h-6 w-6" />
              </Link>
              <Link to={"/"}>
                <FaInstagramSquare className="h-6 w-6" />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default GroupLinkFooter;
