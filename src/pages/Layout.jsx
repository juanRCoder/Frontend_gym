import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Accordeon from "../components/Accordeon";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Accordeon/>
      <Footer />
    </>
  );
}

export default Layout;
