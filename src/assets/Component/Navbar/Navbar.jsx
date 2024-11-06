import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation(); // Get the current location
  const isHomePage = location.pathname === "/"; // Check if the current page is Home
  const navbarClass = isHomePage ? "bg-violet-500" : "bg-gray-100"; // Original color for Home, pink for others

  const [activePage, setActivePage] = useState("home");

  const showHomePage = () => {
    setActivePage("home");
  };
  const showStaticsPage = () => {
    setActivePage("statics");
  };
  const showDashboardPage = () => {
    setActivePage("dashboard");
  };

  return (
    <div>
      <div
        className={`flex justify-between ${navbarClass} mt-4 items-center p-5 rounded-t-xl`}
      >
        <h2 className="text-xl font-semibold">Gadget Heaven</h2>
        <div className="flex space-x-5 font-semibold">
          <p
            onClick={showHomePage}
            className={`px-2 py-1 rounded-md ${
              activePage === "home" ? "bg-gray-300" : ""
            }`}
          >
            {" "}
            <NavLink to="/">Home</NavLink>{" "}
          </p>
          <p
            onClick={showStaticsPage}
            className={`px-2 py-1 rounded-md ${
              activePage === "statics" ? "bg-gray-300" : ""
            }`}
          >
            {" "}
            <NavLink to="/Statistics">Statistics</NavLink>{" "}
          </p>
          <p
            onClick={showDashboardPage}
            className={`px-2 py-1 rounded-md ${
              activePage === "dashboard" ? "bg-gray-300" : ""
            }`}
          >
            {" "}
            <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
          </p>
        </div>
        <div className="flex space-x-2">
          <div className="cart">
            <FaCartShopping />
          </div>
          <div className="wishlist">
            <FaHeartCirclePlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
