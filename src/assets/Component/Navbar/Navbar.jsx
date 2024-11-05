import { FaCartShopping } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation(); // Get the current location
  const isHomePage = location.pathname === "/"; // Check if the current page is Home
  const navbarClass = isHomePage ? "bg-violet-500" : "bg-gray-100"; // Original color for Home, pink for others
  return (
    <div>
      <div
        className={`flex justify-between ${navbarClass} mt-4 items-center p-5 rounded-t-xl`}
      >
        <h2 className="text-xl font-semibold">Gadget Heaven</h2>
        <div className="flex space-x-5 font-semibold">
          <p>
            {" "}
            <NavLink to="/">Home</NavLink>{" "}
          </p>
          <p>
            {" "}
            <NavLink to="/Statistics">Statistics</NavLink>{" "}
          </p>
          <p>
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
