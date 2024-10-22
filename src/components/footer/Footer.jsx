import { Link } from "react-router-dom";
import logoGray from "../../assets/img/powerzone_logo_gray.png";
import LinkFooter from "./LinkFooter";
import LOCATION_ICON from "../../assets/img/LOCATION_ICON.png";
import EMAIL_GRAY_ICON from "../../assets/img/EMAIL_GRAY_ICON.png";
import { AiFillFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-yellow pt-12 pb-5 sm:pt-20 relative">
      <div className="max-w-7xl mx-auto">
        <article className="flex flex-col-reverse sm:flex-row gap-10 justify-between  mx-8 lg:mx-24">
          <section className="flex flex-col gap-4 text-lg">
            <img
              className="w-[256px] sm:w-[296px] h-12 sm:h-14 m-auto sm:m-0"
              src={logoGray}
              alt="PowerZone Gray Logo"
            />
            <p className="pt-3 text-center sm:text-left text-lg sm:text-xl text-black w-full sm:w-[318px]">
              ¡Únete a nosotros y sé parte de esta historia de superación y
              éxito!
            </p>
            <p className="sm:pt-24 text-xl">© 2024 PowerZone C. Ltda.</p>
          </section>
          <section className="lg:pl-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="font-medium text-[22px]">
              <div className="flex flex-col gap-3 mb-4">
                <Link to={"/"}>Inicio</Link>
                <Link to={"/"}>Acerca de nosotros</Link>
              </div>
              <ul className="text-xl flex flex-col gap-3 font-light">
                <LinkFooter destiny={"Locales"} link={"/"} />
                <LinkFooter destiny={"Trainners"} link={"/"} />
                <LinkFooter destiny={"Servicios"} link={"/"} />
              </ul>
            </div>
            <div className="font-medium text-[22px]">
              <p className="mb-4"><Link to={"/"}>Tienda</Link></p>
              <ul className="text-xl flex flex-col gap-3 font-light">
                <LinkFooter destiny={"Ingresar"} link={"/"} />
                <LinkFooter destiny={"Registrate aquí"} link={"/"} />
              </ul>
            </div>

            <div className="font-medium text-[22px]">
                <p className="mb-4">Contactanos</p>
              <ul className="flex flex-col gap-4 font-light text-xl">
                <li className="flex items-start gap-4">
                  <img src={LOCATION_ICON} className="pt-2" />
                  <p>Av. 123, Centro, Valparaíso, Chile.</p>
                </li>
                <li className="flex items-start gap-4">
                  <img src={EMAIL_GRAY_ICON} className="pt-2" />
                  <p>info@powerzone.cl</p>
                </li>
                <li className="flex gap-2 pt-10 sm:pt-0">
                  <Link to={"/"}>
                    <AiFillFacebook className="h-6 w-6" />
                  </Link>
                  <Link to={"/"}>
                    <FaXTwitter className="h-6 w-6" />
                  </Link>
                  <Link to={"/"}>
                    <FaInstagramSquare className="h-6 w-6" />
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </div>
    </footer>
  );
}

export default Footer;
