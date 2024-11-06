import { useWishlist } from "../WishlistContext/WishlistContext";
import { FaTrash } from "react-icons/fa";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Wishlist is empty.</p>
      ) : (
        wishlistItems.map((item) => (
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
              <h3 className="font-semibold text-lg">{item.product_title}</h3>
              <p>{item.description}</p>
            </div>
            <button
              onClick={() => removeFromWishlist(item.product_id)}
              className="text-red-500"
            >
              <FaTrash />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
