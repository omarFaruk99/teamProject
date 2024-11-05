import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="bg-gray-100 mt-0">
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-425px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
