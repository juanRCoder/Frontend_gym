import logoGray from "../assets/img/powerzone_logo_gray.png";
import GroupLinkFooter from "./GroupLinkFooter";


function Footer() {
  return (
    <footer className="bg-yellow py-28">
      <article className="sm:flex-row max-w-7xl m-auto flex flex-col-reverse justify-center lg:w-[1090px] mx-auto">
        <section className="flex flex-col gap-4 text-lg">
            <img
              className=" w-[296px] h-14 m-auto sm:m-0"
              src={logoGray}
              alt="PowerZone Gray Logo"
            />
           <p className="text-2xl text-black w-[318px]">
            ¡Únete a nosotros y sé parte de esta historia de superación y éxito!
          </p>
          <p className="sm:pt-8">© 2024 PowerZone C. Ltda.</p> 
        </section>
        <GroupLinkFooter />
      </article>
    </footer>
  );
}

export default Footer;
