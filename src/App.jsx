import React from "react";
import HeroSection from "./components/HeroSection";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./components/Products";
import Advantages from "./components/Advantages";
const App = () => {
  return (
    <div>
      <HeroSection />
      <Products />
      {/* <Advantages /> */}
    </div>
  );
};

export default App;
