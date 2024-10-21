import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
// import Footer from "../components/Footer";
// import Accordeon from "../components/Accordeon";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
