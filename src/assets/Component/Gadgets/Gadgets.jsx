import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Gadgets = ({ allCategory }) => {
  return (
    <div>
      <div className="border-2 border-green-500 mt-24">
        <h1 className="text-2xl font-semibold text-center">
          Expore Cutting-Edge Gadgets
        </h1>
        <div className="grid grid-cols-6 ">
          <div className="categoryBtn col-span-1 border-2 border-pink-500">
            {allCategory.map((categoryItem, idx) => (
              <Link key={idx} to="/cards">
                <div className="text-center m-3">
                  <button className="bg-gray-200 p-3 rounded-2xl w-11/12 mx-auto">
                    {categoryItem.category}
                  </button>
                </div>
              </Link>
            ))}
          </div>
          <div className="gadgetCards col-span-5 border-2 border-yellow-500">
            Show cards Here
          </div>
        </div>
      </div>
    </div>
  );
};

Gadgets.propTypes = {
  allCategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Adjust according to your actual id type
      category: PropTypes.string.isRequired, // Assuming category is a string
    })
  ).isRequired,
};

export default Gadgets;
