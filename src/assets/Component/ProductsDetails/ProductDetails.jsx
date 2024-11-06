// ProductDetails.jsx
import { useParams, useLoaderData } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../CartContext/CartContext";
import { useWishlist } from "../WishlistContext/WishlistContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const ProductDetails = () => {
  const { productId } = useParams();
  const products = useLoaderData(); // Gets data from the loader
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist(); // Access addToWishlist function

  const [isWishlisted, setIsWishlisted] = useState(false); // Track wishlist state

  const product = products.find((p) => p.product_id === productId);

  if (!product) return <p>Product not found.</p>;

  // Function to handle add to cart with toast notification
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Product added to cart!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  // Function to handle add to wishlist with toast notification
  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.info("Product added to Wishlist!", {
      position: "top-center",
      autoClose: 3000,
    });
    setIsWishlisted(true); // Disable the wishlist button
  };

  return (
    <div className="p-4">
      <ToastContainer />

      <div className="flex flex-col justify-center relative">
        <div className="text-center bg-violet-500 pt-5 space-y-4 pb-36 rounded-xl">
          <h2 className="text-2xl font-bold">Products Details</h2>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br />
            the coolest accessories, we have it all!
          </p>
        </div>
        <div className="bg-white flex gap-5 w-9/12 mx-auto rounded-xl -mt-24 p-5">
          <div>
            <img src={product.product_image} alt="" className="rounded-lg" />
          </div>
          <div>
            <h2 className="font-semibold text-xl">{product.product_title}</h2>
            <p className="font-semibold mt-2">Price: ${product.price}</p>
            <p className="bg-violet-300 inline-block px-2 rounded-xl">
              {product.availability ? "In stock" : "Not Available"}
            </p>
            <p>{product.description}</p>
            <h3 className="font-semibold mt-4">Specification:</h3>
            <ol>
              {product.specification.map((spec, index) => (
                <li key={index}>{index + 1}. {spec}</li>
              ))}
            </ol>
            <div>
              <h2 className="font-semibold mt-4">
                Rating:{" "}
                <span className="bg-gray-200 p-1 rounded-xl">
                  {product.rating}
                </span>
              </h2>
              <div className="flex mt-1">
                {[...Array(4)].map((_, i) => (
                  <MdOutlineStarPurple500 key={i} color="gold" />
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="border-2 border-violet-500 p-1 rounded-2xl px-3 bg-violet-100"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleAddToWishlist(product)}
                    className="wishlist-button"
                    disabled={isWishlisted} // Disable button if already wishlisted
                  >
                    <FaHeart color={isWishlisted ? "grey" : "red"} size={30} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
