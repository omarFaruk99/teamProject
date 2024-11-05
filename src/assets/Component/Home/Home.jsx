import { useLoaderData } from "react-router-dom";
import Gadgets from "../Gadgets/Gadgets";
import Hero from "../Hero/Hero";

const Home = () => {
  const allCategory = useLoaderData(); //Loaded categories and products
  console.log(allCategory);
  return (
    <div>
      <Hero></Hero>
      <div>
        <Gadgets allCategory={allCategory}></Gadgets>
      </div>
    </div>
  );
};

export default Home;
