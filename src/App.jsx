import React from "react";
import "./App.css";
import "./index.css";
import HeroSection from "./components/HeroSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Real5 from "./components/Real5";
import Blog from "./components/Blog";
import YourFence from "./components/YourFence";
import MyFooter from "./components/MyFooter";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Real5 />
      <YourFence />
      <Blog />
      <MyFooter />
    </div>
  );
};

export default App;
