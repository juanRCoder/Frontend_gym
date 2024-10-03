import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import NavigationBarMobile from "./NavigationBar.mobile";

export default function ButtonNavigation() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <span
        className="sm:hidden text-white text-3xl cursor-pointer"
        onClick={() => setIsVisible(true)}
      >
        {/* Puedes descomentar esto para mostrar iconos */}
        <HiMenuAlt2 />
      </span>
      {isVisible && (
        <div className="top-0 left-0 absolute w-full h-screen bg-black">
          <MdClose
            onClick={() => setIsVisible(false)}
            className="text-white absolute top-4 right-4 text-4xl"
          />
          <NavigationBarMobile />
        </div>
      )}
    </>
  );
}
