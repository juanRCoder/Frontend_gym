import logoGray from "../assets/img/powerzone_logo_gray.png";
import GroupLinkFooter from "./GroupLinkFooter";


function Footer() {
  return (
    <footer className="pt-14 px-20 pb-6 bg-yellow">
      <article className="max-w-6xl m-auto flex gap-10 text-lg">
        <section className="flex flex-col items-start gap-6">
          <span className="block w-64">
            <img
              className="h-full w-full object-contain"
              src={logoGray}
              alt="PowerZone Gray Logo"
            />
          </span>
          <p className="w-52 text-black">
            ¡Únete a nosotros y sé parte de esta historia de superación y éxito!
          </p>
          <p className="pt-8">© 2024 PowerZone C. Ltda.</p>
        </section>
        <GroupLinkFooter />
      </article>
    </footer>
  );
}

export default Footer;
