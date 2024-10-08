import { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import powerLogo from "../../assets/img/powerzone_logo.png";
import ButtonNavigation from "./mobile/ButtonNavigation";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/30 backdrop-blur-lg" : "bg-header"
      }`}
    >
      <header className="max-w-7xl mx-7 lg:mx-auto lg:w-[1085px]">
        <div className="flex justify-between items-center py-5">
          {/* Logo Principal */}
          <img
            src={powerLogo}
            alt="Logo PowerZone"
            className="w-48"
            height={0}
          />
          {/* Barra de Navegacion y Boton de Navegacion */}
          <div>
            <NavigationBar />
            <ButtonNavigation />
          </div>
        </div>
      </header>
    </section>
  );
}

export default NavBar;
