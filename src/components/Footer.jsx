import logoGray from "../assets/img/powerzone_logo_gray.png";
import GroupLinkFooter from "./GroupLinkFooter";


function Footer() {
  return (
    <footer className="sm:py-10 px-5 bg-yellow pb-5">
      <article className="sm:flex-row max-w-6xl m-auto flex flex-col-reverse justify-center">
        <section className="flex flex-col gap-4 text-lg">
            <img
              className=" w-72 h-14 m-auto sm:m-0"
              src={logoGray}
              alt="PowerZone Gray Logo"
            />
           <p className="sm:w-52 text-black">
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
