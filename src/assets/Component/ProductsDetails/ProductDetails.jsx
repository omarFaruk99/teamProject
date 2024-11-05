// ProductDetails.jsx
// import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const ProductDetails = () => {
  const { productId } = useParams();
  const products = useLoaderData(); // Gets data from the loader

  const product = products.find((p) => p.product_id === productId);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="p-4">
      {/* <img src={product.product_image} alt={product.product_title} />
      <h1 className="text-2xl font-bold">{product.product_title}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p> */}
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
              {product.availability ? "Instoke" : "Not Available"}
            </p>
            <p>{product.description}</p>
            <h3 className="font-semibold mt-4">Specification:</h3>
            <ol>
              <li>1. {product.specification[0]}</li>
              <li>2. {product.specification[1]}</li>
              <li>3. {product.specification[2]}</li>
              <li>4. {product.specification[3]}</li>
            </ol>
            <div>
              <h2 className="font-semibold mt-4">
                Rating:{" "}
                <span className="bg-gray-200 p-1 rounded-xl">
                  {product.rating}
                </span>
              </h2>
              <div className="flex mt-1 ">
                <span>
                  <MdOutlineStarPurple500 color="gold" />
                </span>
                <span>
                  <MdOutlineStarPurple500 color="gold" />
                </span>
                <span>
                  <MdOutlineStarPurple500 color="gold" />
                </span>
                <span>
                  <MdOutlineStarPurple500 color="gold" />
                </span>
              </div>
              <div>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="border-2 border-violet-500 p-1 rounded-2xl px-3 bg-violet-100">
                    Add to Cart
                  </button>
                  <div className="WishList">
                    <FaHeart color="red" size={30} />
                  </div>
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
