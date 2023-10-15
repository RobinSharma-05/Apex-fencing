import React from "react";
import "./App.css";
import "./index.css"
import HeroSection from "./components/HeroSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Real5 from "./components/Real5";
import ShowCase6 from "./components/ShowCase6";

const App = () => {
  return (
    <div >
      
      <HeroSection />
      <Real5 />
      <ShowCase6 />
    </div>
  );
};

export default App;
