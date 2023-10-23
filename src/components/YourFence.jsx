import React from "react";
import garden from "../assets/images/webp/garden.webp";
const YourFence = () => {
  return (
    <div className="bg-[#5a623d] relative">
      <img
        className="right-0 h-full w-[55%] absolute hidden xl:block object-cover"
        src={garden}
        alt="garden"
      />
      <img className="xl:hidden w-full" src={garden} alt="garden" />
      <div className="xl:w-[1180px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0">
        <div className="w-full pb-12 md:pb-[95px] pt-12 md:pt-[89px] lg:pe-[11px] px-5">
          <div className="flex justify-center xl:justify-start text-center xl:text-start">
            <h3 className="text-white font-Jakarta font-medium text-[34px]">
              Visualize Your Fence
            </h3>
          </div>
          <div className="flex justify-center text-center xl:text-start xl:justify-start mt-5">
            <p className="font-Jakarta text-white max-w-[470px] font-normal text-md mb-5">
              Use our Fence Builder visualizer to preview how our products will
              transform your outdoor living area.
            </p>
          </div>
          <div className="flex justify-center xl:justify-start">
            <div className="mt-5 hover:bg-light-brown duration-500 hover:text-black hover:border-2 text-white border-2 hover:border-[#eee4db] border-[#eee4db] py-4 px-[33px] inline-block">
              <button className="font-Jakarta font-medium text-xs mb-0">
                Start Designing
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row justify-between">
        <div className="bg-[#5a623d] order-2 lg:order-1"></div>
        <div className="order-1 lg:order-2"></div>
      </div> */}
    </div>
  );
};

export default YourFence;
