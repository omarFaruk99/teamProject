// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

const Gadgets = ({ allCategory }) => {
  // Destructure categories and products
  const { categories, products } = allCategory;

  const [displayedProducts, setDisplayedProducts] = useState(products);

  const handleCategoryClick = (category) => {
    // Filter products based on selected category
    if (category === "All") {
      setDisplayedProducts(products); // Show all products if "All" is selected
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setDisplayedProducts(filteredProducts);
    }
  };

  return (
    <div>
      <div className="mt-24 rounded-lg">
        <h1 className="text-2xl font-semibold text-center">
          Expore Cutting-Edge Gadgets
        </h1>
        <div className="grid grid-cols-6 p-1 gap-x-2">
          <div className="categoryBtn col-span-1 bg-slate-50 rounded-md">
            <div className="text-center m-3">
              <button
                className="bg-gray-200 p-3 rounded-2xl w-11/12 mx-auto"
                onClick={() => handleCategoryClick("All")}
              >
                All
              </button>
            </div>

            {categories.map((categoryItem, idx) => (
              <div key={idx} className="text-center m-3">
                <button
                  className="bg-gray-200 p-3 rounded-2xl w-11/12 mx-auto"
                  onClick={() => handleCategoryClick(categoryItem.category)}
                >
                  {categoryItem.category}
                </button>
              </div>
            ))}
          </div>

          {/* Display Products */}
          <div className="gadgetCards col-span-5 p-4 bg-slate-100 rounded-lg">
            <div className="grid grid-cols-3 gap-3">
              {displayedProducts.length === 0 ? (
                <p>No products available for this category.</p>
              ) : (
                displayedProducts.map((product) => (
                  <div
                    key={product.product_id}
                    className="bg-gray-200 rounded-lg p-3"
                  >
                    <div>
                      <img
                        src={product.product_image}
                        alt={product.product_title}
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold">{product.product_title}</h2>
                      {/* <p>{product.description}</p> */}
                      <p>Price: ${product.price}</p>
                    </div>
                    <div>
                        <button className="rounded-2xl border-2 border-violet-400 p-1 text-violet-600 px-2">Show details</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Gadgets.propTypes = {
  allCategory: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      })
    ).isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        product_id: PropTypes.string.isRequired,
        product_title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Gadgets;
