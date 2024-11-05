import { useState } from "react";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

const Dashboard = () => {
  const [showCart, setShowCart] = useState(false); // State to show/hide cart
  const [showWishlist, setShowWishlist] = useState(false); // State to show/hide wishlist

  // Toggle functions
  const toggleCart = () => {
    setShowCart(true); // Show cart content
    setShowWishlist(false); // Hide wishlist content if it's open
  };

  const toggleWishlist = () => {
    setShowWishlist(true); // Show wishlist content
    setShowCart(false); // Hide cart content if it's open
  };

  return (
    <div>
      <div className="bg-violet-500 text-center space-y-5 pb-40 pt-5">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="space-x-4">
          <button
            onClick={toggleCart}
            className="bg-white rounded-3xl px-4 py-1"
          >
            Cart
          </button>
          <button
            onClick={toggleWishlist}
            className="bg-white rounded-3xl px-4 py-1"
          >
            Wishlist
          </button>
        </div>
      </div>
      {/* Conditional Rendering for Cart and Wishlist */}
      <div className="mt-5">
        {showCart && <Cart></Cart>}
        {/* Display Cart component if showCart is true */}
        {showWishlist && <Wishlist></Wishlist>}
        {/* Display Wishlist component if showWishlist is true */}
      </div>
    </div>
  );
};

export default Dashboard;
