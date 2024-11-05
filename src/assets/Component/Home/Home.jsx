import { useLoaderData } from "react-router-dom";
import Gadgets from "../Gadgets/Gadgets";
import Hero from "../Hero/Hero";

const Home = () => {
  const allCategory = useLoaderData();
  console.log(allCategory);
  return (
    <div>
      <Hero></Hero>
      <Gadgets allCategory={allCategory}></Gadgets>
    </div>
  );
};

export default Home;
