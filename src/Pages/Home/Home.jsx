import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "./Section/About";
import FeatureDepertment from "./Section/FeatureDepertment";
import WhyChooseUs from "./Section/WhyChooseUs";
import Gallery from "./Section/Gallery";
import BuildBest from "./Section/BuildBest";
import Blogs from "./Section/Blogs";


const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="h-[55vh] sm:h-[50vh] md:h-[105vh] lg:h-[85vh] ">
        <Hero />
      </div>
      <About />
      <FeatureDepertment />
      <WhyChooseUs />
      <Gallery />
      <BuildBest />
      <Blogs />
    </div>
  );
};

export default Home;


