
import Hero from "../../components/Hero/Hero";
import About from "./Section/About";
import FeatureDepertment from "./Section/FeatureDepertment";
import WhyChooseUs from "./Section/WhyChooseUs";
import Gallery from "./Section/Gallery";
import BuildBest from "./Section/BuildBest";
import GetTauch from "./Section/GetTauch";
import FreshProduct from "./Section/FreshProduct";
import Timeline from "./Section/Timeline";
import Projects from "./Section/Projects";
import FoodCategory from "./Section/FoodCategory";


const Home = () => {
  return (
    <div className="w-full h-full space-y-10 lg:space-y-20">
      <div className="h-[55vh] sm:h-[50vh] md:h-[105vh] lg:h-[85vh] ">
        <Hero />
      </div>
      <About />
      <FeatureDepertment />
      <FoodCategory />
      <WhyChooseUs />
      <FreshProduct />
      <Timeline />
      <Projects />
      <BuildBest />
      <Gallery />
      <GetTauch />
    </div>
  );
};

export default Home;


