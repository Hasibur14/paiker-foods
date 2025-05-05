import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "./Section/About";
import FeatureDepertment from "./Section/FeatureDepertment";
import WhyChooseUs from "./Section/WhyChooseUs";
import Gallery from "./Section/Gallery";
import BuildBest from "./Section/BuildBest";
import Blogs from "./Section/Blogs";
import GetTauch from "./Section/GetTauch";
import BestOrganic from "./Section/BestOrganic";
import FreshProduct from "./Section/FreshProduct";
import Timeline from "./Section/Timeline";


const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="h-[55vh] sm:h-[50vh] md:h-[105vh] lg:h-[85vh] ">
        <Hero />
      </div>
      <About />
      <FeatureDepertment />
      <BestOrganic />
      <WhyChooseUs />
      <FreshProduct />
      <Timeline />
      <Gallery />
      <BuildBest />
      <Blogs />
      <GetTauch />
    </div>
  );
};

export default Home;


