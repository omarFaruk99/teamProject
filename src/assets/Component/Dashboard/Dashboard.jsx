import React, { useState } from "react";
import Cart from "../Cart/Cart"; // Assuming you have a Cart component
import Wishlist from "../Wishlist/Wishlist"; // Assuming you have a Wishlist component

const Dashboard = () => {
  // State to manage active view
  const [activeView, setActiveView] = useState("cart"); // Default to "cart"

  // Handlers to change the active view
  const showCart = () => {
    setActiveView("cart");
  };

  const showWishlist = () => {
    setActiveView("wishlist");
  };

  return (
    <div className="flex flex-col">
      <div className="bg-violet-500 p-6 rounded-md w-full">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Dashboard
        </h2>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={showCart}
            className={`px-4 py-2 rounded-md ${
              activeView === "cart" ? "bg-white text-violet-500" : "bg-gray-300"
            }`}
          >
            Cart
          </button>
          <button
            onClick={showWishlist}
            className={`px-4 py-2 rounded-md ${
              activeView === "wishlist"
                ? "bg-white text-violet-500"
                : "bg-gray-300"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="w-9/12 mx-auto">
        {/* Render the active view */}
        {activeView === "cart" ? <Cart /> : <Wishlist />}
      </div>
    </div>
  );
};

export default Dashboard;
