import React, { createContext, useContext, useState } from "react";

// Create Wishlist context
const WishlistContext = createContext();

// Custom hook to use the wishlist context
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add an item to the wishlist
  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => {
      // Avoid duplicates in the wishlist
      if (prevItems.find((product) => product.product_id === item.product_id)) {
        return prevItems;
      }
      return [...prevItems, item];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(
      wishlistItems.filter((item) => item.product_id !== productId)
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
