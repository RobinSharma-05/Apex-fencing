import React from "react";
import "./App.css";
import "./index.css";
import HeroSection from "./components/HeroSection";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Real5 from "./components/Real5";
import ShowCase6 from "./components/ShowCase6";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Products />
      {/* <Advantages /> */}
      <Real5 />
      <ShowCase6 />
    </div>
  );
};

export default App;
