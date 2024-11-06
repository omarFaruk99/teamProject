import { useNavigate } from "react-router-dom";
import { PiCookingPot } from "react-icons/pi";

const Blogs = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-black mb-4">
          Contents are Cooking!
        </h1>
        <p className="text-lg text-gray-600 mb-6 font-semibold">
          We are currently working on some amazing blog content. Check back
          soon!
        </p>
        <div className="flex justify-center">
          <div>
          <PiCookingPot size={180} color="gray"/>
          </div>
        </div>
        <button
          onClick={handleGoBack}
          className="mt-8 bg-violet-600 text-white px-6 py-2 rounded-full hover:bg-violet-700 transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Blogs;
