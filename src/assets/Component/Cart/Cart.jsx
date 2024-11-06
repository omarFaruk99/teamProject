// Cart.jsx

import { FaTrash } from "react-icons/fa";
import { useCart } from "../CartContext/CartContext";
import { ImSortAmountDesc } from "react-icons/im";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [sortedItems, setSortedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseTotal, setPurchaseTotal] = useState(0);
  const navigate = useNavigate();

  // Initialize sortedItems with cartItems on component mount or when cartItems change
  useEffect(() => {
    setSortedItems(cartItems);
  }, [cartItems]);

  const totalCost = sortedItems.reduce((acc, item) => acc + item.price, 0);

  // Handler to sort items by price in descending order
  const sortByPrice = () => {
    const sorted = [...sortedItems].sort((a, b) => b.price - a.price);
    setSortedItems(sorted);
  };

  // Handle purchase action
  const handlePurchase = () => {
    setIsModalOpen(true); // Open the modal
    setPurchaseTotal(totalCost); // Set the purchase total for the modal
    clearCart(); // Clear the cart
  };

  // Close modal and redirect to home
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Cart</h2>
        <div className="flex space-x-3 items-center">
          <p className=" font-semibold">Total cost: ${totalCost.toFixed(2)}</p>
          <button
            onClick={sortByPrice}
            className="flex items-center border-2 border-violet-500 px-2 rounded-lg font-semibold"
          >
            <p>Sort by Price</p>
            <span>
              <ImSortAmountDesc />
            </span>
          </button>
          <div>
            <button
              onClick={handlePurchase}
              className="bg-violet-500 px-3 rounded-lg text-white font-semibold py-1"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
      {sortedItems.map((item) => (
        <div
          key={item.product_id}
          className="flex items-center justify-between border-b p-4 bg-white mb-2 rounded-lg"
        >
          <div className="flex space-x-2">
            <img
              src={item.product_image}
              alt={item.product_title}
              className="w-20 h-20 rounded-md"
            />
            <div>
              <h3 className="font-bold">{item.product_title}</h3>
              <p>{item.description}</p>
              <p className="font-semibold">Price: ${item.price}</p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.product_id)}
            className="text-red-500"
          >
            <FaTrash />
          </button>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full text-center">
            <div className="mb-4">
              <div className="flex justify-center">
                <FaMoneyCheckDollar size={40} color="green" />
              </div>
              <h2 className="text-xl font-bold">Payment Successfully</h2>
              <p className="mt-2">
                Thanks for purchasing.{" "}
                <strong>Total: ${purchaseTotal.toFixed(2)}</strong>
              </p>
            </div>
            <button
              onClick={closeModal}
              className="bg-gray-300 px-4 py-2 rounded-lg mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
