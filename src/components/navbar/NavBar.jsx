import { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import powerLogo from "../../assets/img/powerzone_logo.png";
import ButtonNavigation from "./ButtonNavigation";

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
      className={`sticky top-0 w-full z-20 transition-all duration-500 ${isScrolled ? "bg-white/30 backdrop-blur-lg" : "bg-header"
        }`}
    >
      <header className="m-auto max-w-7xl">
        <div className="flex justify-between items-center py-5 mx-8 lg:mx-24">
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
