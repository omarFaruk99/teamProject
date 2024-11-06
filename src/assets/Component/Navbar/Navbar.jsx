import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet to manage document head

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
  const showBlogboardPage = () => {
    setActivePage("blogs");
  };

  // Dynamically set title based on the route
  const getPageTitle = () => {
    if (location.pathname === "/") {
      return "Home || Gadget Heaven"; // Title for Home page
    } else if (location.pathname === "/Dashboard") {
      return "Dashboard || Gadget Heaven"; // Title for Dashboard page
    } else if (location.pathname === "/Statistics") {
      return "Statistics || Gadget Heaven"; // Title for Statistics page
    } else if (location.pathname === "/Blogs") {
      return "Blogs || Gadget Heaven"; // Title for Statistics page
    }
    return "Gadget Heaven"; // Default title
  };

  return (
    <div>
      {/* Set the document title dynamically */}
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>
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
          <p
            onClick={showBlogboardPage}
            className={`px-2 py-1 rounded-md ${
              activePage === "blogs" ? "bg-gray-300" : ""
            }`}
          >
            {" "}
            <NavLink to="/Blogs">Blogs</NavLink>{" "}
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="cart">
            <FaCartShopping size={25} />
          </div>
          <div className="wishlist">
            <FaHeartCirclePlus size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
