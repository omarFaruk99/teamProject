import { useNavigate } from "react-router-dom";
import bannerImg from "./banner.jpg";
const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleShopNowClick = () => {
    navigate("/Dashboard"); // Navigate to the Dashboard route
  };
  return (
    <div>
      <div className="flex flex-col justify-center relative">
        <div className="bg-violet-500 space-y-5 pb-[250px] text-center rounded-b-xl">
          <div className="hero-text space-y-5">
            <h1 className="font-bold text-5xl">
              Upgrade Your Tech Accessorize with <br /> Gadget Heaven
              Accessories
            </h1>
            <p>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
          </div>
          <div>
            <button
              onClick={handleShopNowClick}
              className="bg-gray-300 rounded-2xl p-2 mb-12"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="bannerImg -mt-64 flex justify-center">
          <div className="rounded-xl border-2 border-white p-3 bg-violet-300 shadow-lg">
            <img
              src={bannerImg}
              className="w-[1062px] h-[500px] rounded-xl"
              alt="Gadget Heaven Banner"
            />
          </div>
        </div>
        {/* <div className="bannerImg -mt-64">
          <img
            src="/src/assets/banner.jpg"
            className="w-[1062px] h-[500px] mx-auto  border-2 border-white shadow-lg rounded-xl p-2"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
