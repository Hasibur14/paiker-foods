import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "./Section/About";


const Home = () => {
  return (
    <div className="bg-stone-100 w-full h-full">
      <div className="h-[55vh] sm:h-[50vh] md:h-[105vh] lg:h-[85vh] ">
        <Hero />
      </div>
      <About />
    </div>
  );
};

export default Home;


