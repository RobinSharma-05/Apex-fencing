import React from "react";
import "./App.css";
import "./index.css";
import HeroSection from "./components/HeroSection";
// import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Real5 from "./components/Real5";
import ShowCase6 from "./components/ShowCase6";
import Products from "./components/Products";
import Blog from "./components/Blog";
import YourFence from "./components/YourFence";
import MyFooter from "./components/MyFooter";
import Advantages from "./components/Advantages";
import NextStep from "./components/NextStep";
// import SwiperSlider from "./components/SwiperSlider";
import MyPreloader from "./components/MyPreloader";
import BackToTop from "./components/BackToTop";
// import ShowcaseGrid from "./components/ShowcaseGrid";

const App = () => {
  return (
    <>
      <BackToTop />
      <MyPreloader />
      <HeroSection />
      <Products />
      <Advantages />
      <NextStep />
      {/* <SwiperSlider /> */}
      <Real5 />
      {/* <ShowcaseGrid/> */}
      <ShowCase6 />
      <YourFence />
      <Blog />
      <MyFooter />
    </>
  );
};

export default App;
