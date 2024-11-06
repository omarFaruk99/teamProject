// Cart.jsx

import { FaTrash } from "react-icons/fa";
import { useCart } from "../CartContext/CartContext";
import { ImSortAmountDesc } from "react-icons/im";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [sortedItems, setSortedItems] = useState([]);

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
            <button className="bg-violet-500 px-3 rounded-lg text-white font-semibold py-1">
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
          <button
            onClick={() => removeFromCart(item.product_id)}
            className="text-red-500"
          >
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
