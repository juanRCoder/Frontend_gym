import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Questions from "../components/Questions";
import VideoSection from "../components/VideoSection";
function Layout() {
  return (
    <>
    <NavBar />
   <Outlet />
     <Questions/>
     <Footer/>
    </>
  );
}

export default Layout;
