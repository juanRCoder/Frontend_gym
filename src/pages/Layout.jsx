import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Questions from "../components/questions/Questions";
function Layout() {
  return (
    <>
    <NavBar />

     <Questions/>
     <Footer/>
    </>
  );
}

export default Layout;
