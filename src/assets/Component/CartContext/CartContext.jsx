// CartContext.js
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

// Create context
const CartContext = createContext();

// const showToast = () => {
//   toast.success("This is a success notification!");
// };

// Custom hook to use cart context
export const useCart = () => {
  // showToast();
  return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== productId)
    );
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]); // Clear the cart items
  };

  // Context value
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart, // Add clearCart to the context value
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
