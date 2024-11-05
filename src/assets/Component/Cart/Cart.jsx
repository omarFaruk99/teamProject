// Cart.jsx

import { FaTrash } from "react-icons/fa";
import { useCart } from "../CartContext/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalCost = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Cart</h2>
      <p className="text-right font-semibold">
        Total cost: ${totalCost.toFixed(2)}
      </p>
      {cartItems.map((item) => (
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
